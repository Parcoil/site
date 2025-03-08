"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [hasNumbers, setHasNumbers] = useState(true);
  const [hasSymbols, setHasSymbols] = useState(true);
  const [hasUppercase, setHasUppercase] = useState(true);

  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()";

  const generatePassword = () => {
    let characters = lowercaseChars;

    if (hasUppercase) characters += uppercaseChars;
    if (hasNumbers) characters += numberChars;
    if (hasSymbols) characters += symbolChars;

    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      generatedPassword += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    setPassword(generatedPassword);
  };

  return (
    <Card className="w-full max-w-lg mx-auto mt-10">
      <CardHeader>
        <CardTitle className="text-center">Password Generator</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <Label htmlFor="password-length">Password Length</Label>
            <span className="text-sm font-medium">{length}</span>
          </div>
          <Slider
            id="password-length"
            value={[length]}
            onValueChange={(values) => setLength(values[0])}
            min={1}
            max={32}
            step={1}
          />
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="numbers" className="cursor-pointer">
              Include Numbers
            </Label>
            <Switch
              id="numbers"
              checked={hasNumbers}
              onCheckedChange={setHasNumbers}
            />
          </div>

          <div className="flex items-center justify-between">
            <Label htmlFor="symbols" className="cursor-pointer">
              Include Symbols
            </Label>
            <Switch
              id="symbols"
              checked={hasSymbols}
              onCheckedChange={setHasSymbols}
            />
          </div>

          <div className="flex items-center justify-between">
            <Label htmlFor="uppercase" className="cursor-pointer">
              Include Uppercase
            </Label>
            <Switch
              id="uppercase"
              checked={hasUppercase}
              onCheckedChange={setHasUppercase}
            />
          </div>
        </div>

        <Button className="w-full" onClick={generatePassword}>
          Generate Password
        </Button>

        <div className="p-4  rounded-md">
          <Label className="block text-center mb-2">Your Password:</Label>
          <div className="relative">
            <Input
              readOnly
              value={password}
              className="font-mono text-center"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
