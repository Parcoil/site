"use client";
import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy, Trash, Download, Plus } from "lucide-react";
import { toast, Toaster } from "sonner";
import posthog from "posthog-js";

export default function ColorPicker() {
  const [color, setColor] = useState("#cba6f7");
  const [rgb, setRgb] = useState({ r: 79, g: 70, b: 229 });
  const [hsl, setHsl] = useState({ h: 244, s: 77, l: 59 });
  const [savedColors, setSavedColors] = useState([]);
  const [activeTab, setActiveTab] = useState("hex");

  const hexToRgb = (hex) => {
    hex = hex.replace(/^#/, "");

    // parse hex values
    let r, g, b;
    if (hex.length === 3) {
      r = parseInt(hex.charAt(0) + hex.charAt(0), 16);
      g = parseInt(hex.charAt(1) + hex.charAt(1), 16);
      b = parseInt(hex.charAt(2) + hex.charAt(2), 16);
    } else {
      r = parseInt(hex.substring(0, 2), 16);
      g = parseInt(hex.substring(2, 4), 16);
      b = parseInt(hex.substring(4, 6), 16);
    }

    return { r, g, b };
  };

  const rgbToHex = ({ r, g, b }) => {
    return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1)}`;
  };

  const rgbToHsl = ({ r, g, b }) => {
    r /= 255;
    g /= 255;
    b /= 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h,
      s,
      l = (max + min) / 2;

    if (max === min) {
      h = s = 0; // achromatic
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
      }

      h /= 6;
    }

    return {
      h: Math.round(h * 360),
      s: Math.round(s * 100),
      l: Math.round(l * 100),
    };
  };

  const hslToRgb = ({ h, s, l }) => {
    h /= 360;
    s /= 100;
    l /= 100;
    let r, g, b;

    if (s === 0) {
      r = g = b = l; // achromatic
    } else {
      const hue2rgb = (p, q, t) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
      };

      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;

      r = hue2rgb(p, q, h + 1 / 3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1 / 3);
    }

    return {
      r: Math.round(r * 255),
      g: Math.round(g * 255),
      b: Math.round(b * 255),
    };
  };

  useEffect(() => {
    try {
      const newRgb = hexToRgb(color);
      setRgb(newRgb);
      setHsl(rgbToHsl(newRgb));
    } catch (error) {
      console.error("Invalid color format", error);
    }
  }, [color]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const storedColors = localStorage.getItem("savedColors");
        if (storedColors) {
          const parsedColors = JSON.parse(storedColors);

          if (Array.isArray(parsedColors)) {
            const validColors = parsedColors.filter(
              (color) =>
                color &&
                typeof color === "object" &&
                typeof color.hex === "string" &&
                color.hex.startsWith("#")
            );

            setSavedColors(validColors);
          } else {
            setSavedColors([]);

            localStorage.removeItem("savedColors");
          }
        }
      } catch (error) {
        console.error("Error loading saved colors:", error);
        toast.error("Failed to load saved colors");

        localStorage.removeItem("savedColors");
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && savedColors.length > 0) {
      try {
        localStorage.setItem("savedColors", JSON.stringify(savedColors));
      } catch (error) {
        console.error("Error saving colors:", error);
        toast.error("Failed to save colors to local storage");
      }
    }
  }, [savedColors]);

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleRgbChange = (channel, value) => {
    const newRgb = { ...rgb, [channel]: parseInt(value) };
    setRgb(newRgb);
    setColor(rgbToHex(newRgb));
    setHsl(rgbToHsl(newRgb));
  };

  const handleHslChange = (channel, value) => {
    const newHsl = { ...hsl, [channel]: parseInt(value) };
    setHsl(newHsl);
    const newRgb = hslToRgb(newHsl);
    setRgb(newRgb);
    setColor(rgbToHex(newRgb));
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard!");
    posthog.capture("color_copied", { format: activeTab });
  };

  const saveColor = () => {
    if (!color || typeof color !== "string" || !color.startsWith("#")) {
      toast.error("Invalid color format");
      return;
    }

    if (savedColors.length >= 10) {
      toast.error("You can save up to 10 colors. Please remove some first.");
      return;
    }

    if (!savedColors.some((c) => c.hex === color)) {
      try {
        const newColor = {
          hex: color,
          rgb: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`,
          hsl: `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`,
        };
        setSavedColors([...savedColors, newColor]);
        toast.success("Color saved!");
        posthog.capture("color_saved", { color: color });
      } catch (error) {
        console.error("Error saving color:", error);
        toast.error("Failed to save color");
      }
    } else {
      toast.info("This color is already saved.");
    }
  };

  const removeColor = (index) => {
    try {
      if (index < 0 || index >= savedColors.length) {
        console.error("Invalid color index:", index);
        return;
      }

      const newColors = [...savedColors];
      newColors.splice(index, 1);
      setSavedColors(newColors);
      toast.success("Color removed!");

      if (newColors.length === 0 && typeof window !== "undefined") {
        localStorage.removeItem("savedColors");
      }
    } catch (error) {
      console.error("Error removing color:", error);
      toast.error("Failed to remove color");
    }
  };

  const exportPalette = () => {
    try {
      if (savedColors.length === 0) {
        toast.error("No colors to export.");
        return;
      }

      if (typeof window === "undefined" || !document) {
        toast.error("Export is only available in browser environments.");
        return;
      }

      let cssVariables = ":root {\n";
      savedColors.forEach((color, index) => {
        if (
          color &&
          color.hex &&
          typeof color.hex === "string" &&
          color.hex.startsWith("#")
        ) {
          cssVariables += `  --color-${index + 1}: ${color.hex};\n`;
        }
      });
      cssVariables += "}";

      const blob = new Blob([cssVariables], { type: "text/css" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "color-palette.css";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      toast.success("Palette exported as CSS variables!");
      posthog.capture("palette_exported", { colors_count: savedColors.length });
    } catch (error) {
      console.error("Error exporting palette:", error);
      toast.error("Failed to export palette. Please try again.");
    }
  };

  return (
    <>
      <Card className="w-full max-w-lg mx-auto">
        <CardHeader>
          <CardTitle className="text-center">
            Color Picker & Converter
          </CardTitle>
          <CardDescription className="text-center">
            Select and convert colors between different formats
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col space-y-4">
            <div
              className="w-full h-32 rounded-md border cursor-pointer transition-all duration-200 hover:scale-[1.02]"
              style={{ backgroundColor: color }}
              onClick={() => document.getElementById("color-picker").click()}
            ></div>
            <Input
              id="color-picker"
              type="color"
              value={color}
              onChange={handleColorChange}
              className="h-12 cursor-pointer"
            />
          </div>

          <Tabs
            defaultValue="hex"
            value={activeTab}
            onValueChange={setActiveTab}
          >
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="hex">HEX</TabsTrigger>
              <TabsTrigger value="rgb">RGB</TabsTrigger>
              <TabsTrigger value="hsl">HSL</TabsTrigger>
            </TabsList>

            <TabsContent value="hex" className="space-y-4 mt-4">
              <div className="flex items-center space-x-2">
                <Input value={color.toUpperCase()} readOnly />
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => copyToClipboard(color.toUpperCase())}
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="rgb" className="space-y-4 mt-4">
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label>Red ({rgb.r})</Label>
                  </div>
                  <Slider
                    value={[rgb.r]}
                    min={0}
                    max={255}
                    step={1}
                    onValueChange={(values) => handleRgbChange("r", values[0])}
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label>Green ({rgb.g})</Label>
                  </div>
                  <Slider
                    value={[rgb.g]}
                    min={0}
                    max={255}
                    step={1}
                    onValueChange={(values) => handleRgbChange("g", values[0])}
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label>Blue ({rgb.b})</Label>
                  </div>
                  <Slider
                    value={[rgb.b]}
                    min={0}
                    max={255}
                    step={1}
                    onValueChange={(values) => handleRgbChange("b", values[0])}
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Input value={`rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`} readOnly />
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() =>
                      copyToClipboard(`rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`)
                    }
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="hsl" className="space-y-4 mt-4">
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label>Hue ({hsl.h}°)</Label>
                  </div>
                  <Slider
                    value={[hsl.h]}
                    min={0}
                    max={360}
                    step={1}
                    onValueChange={(values) => handleHslChange("h", values[0])}
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label>Saturation ({hsl.s}%)</Label>
                  </div>
                  <Slider
                    value={[hsl.s]}
                    min={0}
                    max={100}
                    step={1}
                    onValueChange={(values) => handleHslChange("s", values[0])}
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label>Lightness ({hsl.l}%)</Label>
                  </div>
                  <Slider
                    value={[hsl.l]}
                    min={0}
                    max={100}
                    step={1}
                    onValueChange={(values) => handleHslChange("l", values[0])}
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Input
                    value={`hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`}
                    readOnly
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() =>
                      copyToClipboard(`hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`)
                    }
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <div className="flex justify-center">
            <Button onClick={saveColor} className="flex items-center gap-2">
              <Plus className="h-4 w-4" /> Save Color
            </Button>
          </div>

          {savedColors.length > 0 && (
            <div className="space-y-4">
              <h3 className="font-medium">
                Saved Colors ({savedColors.length}/10)
              </h3>
              <div className="grid grid-cols-5 gap-2">
                {savedColors.map((savedColor, index) => (
                  <div key={index} className="relative group">
                    <div
                      className="w-full aspect-square rounded-md border cursor-pointer"
                      style={{ backgroundColor: savedColor.hex }}
                      onClick={() => {
                        setColor(savedColor.hex);
                        setActiveTab("hex");
                      }}
                      title={savedColor.hex}
                    ></div>
                    <button
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() => removeColor(index)}
                      title="Remove color"
                    >
                      <Trash className="h-3 w-3" />
                    </button>
                  </div>
                ))}
              </div>
              <Button
                variant="outline"
                onClick={exportPalette}
                className="w-full flex items-center justify-center gap-2"
                disabled={savedColors.length === 0}
              >
                <Download className="h-4 w-4" /> Export as CSS Variables
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </>
  );
}
