"use client";
import React, { useState, useEffect, useRef } from "react";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Download, Link as LinkIcon, MessageSquare } from "lucide-react";
import posthog from "posthog-js";
import { toast } from "sonner";


export default function QRCodeGenerator() {
  const [qrValue, setQrValue] = useState("https://parcoil.com");
  const [qrSize, setQrSize] = useState(200);
  const [activeTab, setActiveTab] = useState("url");
  const [generatedQR, setGeneratedQR] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const qrRef = useRef(null);

  useEffect(() => {
    generateQRCode();
  }, [qrValue, qrSize]);

  const generateQRCode = async () => {
    if (!qrValue) return;
    
    setIsGenerating(true);
    try {
      const qrServerUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(qrValue)}`;
      setGeneratedQR(qrServerUrl);
    } catch (error) {
      console.error("Error generating QR code:", error);
      toast.error("Failed to generate QR code. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleTabChange = (value) => {
    setActiveTab(value);
    if (value === "url") {
      setQrValue("https://");
    } else if (value === "text") {
      setQrValue("");
    }

    posthog.capture("qr_tab_changed", { tab: value });
  };

  const handleDownload = () => {
    if (!generatedQR) return;

    try {
      const link = document.createElement("a");
      link.href = generatedQR;
      link.download = `qrcode-${Date.now()}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      toast.success("QR code downloaded successfully!");
      posthog.capture("qr_code_downloaded", { size: qrSize, type: activeTab });
    } catch (error) {
      console.error("Error downloading QR code:", error);
      toast.error("Failed to download QR code. Please try again.");
    }
  };

  return (
    <Card className="w-full max-w-lg mx-auto">
      <CardHeader>
        <CardTitle className="text-center">QR Code Generator</CardTitle>
        <CardDescription className="text-center">
          Create QR codes for URLs, text, or contact information
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <Tabs
          defaultValue="url"
          value={activeTab}
          onValueChange={handleTabChange}
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="url" className="flex items-center gap-2">
              <LinkIcon className="h-4 w-4" />
              URL
            </TabsTrigger>
            <TabsTrigger value="text" className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              Text
            </TabsTrigger>
          </TabsList>

          <TabsContent value="url" className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="url-input">Website URL</Label>
              <Input
                id="url-input"
                type="url"
                placeholder="https://example.com"
                value={qrValue}
                onChange={(e) => setQrValue(e.target.value)}
              />
            </div>
          </TabsContent>

          <TabsContent value="text" className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="text-input">Text Content</Label>
              <Input
                id="text-input"
                placeholder="Enter text to encode"
                value={qrValue}
                onChange={(e) => setQrValue(e.target.value)}
              />
            </div>
          </TabsContent>
        </Tabs>

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <Label htmlFor="qr-size">QR Code Size</Label>
            <span className="text-sm font-medium">{qrSize}px</span>
          </div>
          <Slider
            id="qr-size"
            value={[qrSize]}
            onValueChange={(values) => setQrSize(values[0])}
            min={100}
            max={400}
            step={10}
            aria-label="Adjust QR code size"
          />
        </div>

        <div className="flex flex-col items-center justify-center space-y-4">
          {generatedQR && (
            <div
              ref={qrRef}
              className="p-4 bg-white rounded-md flex items-center justify-center"
            >
              <img
                src={generatedQR}
                alt="Generated QR Code"
                className="max-w-full"
                onError={() => toast.error("Failed to load QR code. Please try again.")}
              />
            </div>
          )}

          <Button
            onClick={handleDownload}
            className="w-full flex items-center justify-center gap-2"
            disabled={!generatedQR || isGenerating}
          >
            <Download className="h-4 w-4" />
            Download QR Code
          </Button>
        </div>

        <div className="text-sm text-gray-500 space-y-2">
          <h2 className="font-medium">Tips:</h2>
          <ul className="list-disc pl-5 text-xs space-y-1">
            <li>Keep URLs short for better scanning</li>
            <li>Test your QR code with a smartphone camera</li>
            <li>Avoid special characters for better compatibility</li>
            <li>Larger QR codes are easier to scan from a distance</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}