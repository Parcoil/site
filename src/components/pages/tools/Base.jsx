"use client";
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import posthog from "posthog-js";

function Base() {
  const [input, setInput] = React.useState("");
  const [output, setOutput] = React.useState("");

  const handleEncode = () => {
    try {
      setOutput(btoa(input));
    } catch (error) {
      setOutput("Invalid base64 string");
      posthog.capture("base64_encode_error");
    }
  };
  const handleDecode = () => {
    try {
      setOutput(atob(input));
    } catch (error) {
      setOutput("Invalid base64 string");
    }
  };
  return (
    <div>
      <Card>
        <CardHeader>
          <h1 className="text-2xl font-bold">Base64 Encoder/Decoder</h1>
          <p></p>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            <Textarea
              placeholder="Enter text to encode/decode"
              onChange={(e) => setInput(e.target.value)}
            ></Textarea>
            <div className="flex gap-4">
              <Button onClick={handleEncode}>Encode</Button>
              <Button onClick={handleDecode}>Decode</Button>
            </div>
            <Textarea placeholder="Result" value={output} readOnly></Textarea>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Base;
