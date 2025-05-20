"use client";

import { useEffect, useState } from "react";
import { Clipboard } from "lucide-react";
import { toast, Toaster } from "sonner";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Spinner } from "@/components/ui/spinner";

export default function IPInfoCard() {
  const [ipinfo, setIpinfo] = useState(null);

  useEffect(() => {
    async function getIp() {
      try {
        const res = await fetch("https://ipwho.is/");
        const data = await res.json();
        setIpinfo(data);
      } catch (error) {
        console.error("Failed to fetch IP info:", error);
      }
    }
    getIp();
  }, []);

  const copyIP = () => {
    if (!ipinfo?.ip) return;
    navigator.clipboard.writeText(ipinfo.ip);
    toast("IP Copied to clipboard");
  };

  if (!ipinfo) {
    return (
      <div className="flex mt-5 flex-col items-center justify-center text-center">
        <span className="text-4xl">
          <Spinner />
        </span>
      </div>
    );
  }

  return (
    <div className="mt-10 flex flex-col items-center animate-in fade-in duration-300">
      <Card className="w-full max-w-2xl shadow-xl">
        <CardContent className="flex flex-col items-center space-y-6 p-6 text-center">
          <div className="flex items-center space-x-4">
            {ipinfo?.flag?.img && (
              <Image
                src={ipinfo.flag.img}
                alt={ipinfo?.country}
                width={40}
                height={40}
                className="rounded-sm"
              />
            )}
            <h2 className="text-2xl font-semibold">{ipinfo?.country}</h2>
          </div>

          <div className="flex items-center space-x-2 text-4xl font-bold text-primary">
            <span>{ipinfo?.ip}</span>
            <Button
              variant="ghost"
              size="icon"
              onClick={copyIP}
              title="Copy IP"
            >
              <Clipboard className="h-5 w-5" />
            </Button>
          </div>

          <div className="grid w-full grid-cols-1 gap-4 text-left md:grid-cols-2">
            <p>
              <strong>City:</strong> {ipinfo?.city}
            </p>
            <p>
              <strong>Region:</strong> {ipinfo?.region}
            </p>
            <p>
              <strong>Postal Code:</strong> {ipinfo?.postal}
            </p>
            <p>
              <strong>Capital:</strong> {ipinfo?.capital}
            </p>
            <p>
              <strong>Borders:</strong> {ipinfo?.borders || "N/A"}
            </p>
            <p>
              <strong>ISP:</strong> {ipinfo?.connection?.isp}
            </p>
            <p>
              <strong>Timezone:</strong> {ipinfo?.timezone?.abbr}
            </p>
            <p>
              <strong>Timezone ID:</strong> {ipinfo?.timezone?.id}
            </p>
          </div>
        </CardContent>
      </Card>
      <a
        href="https://ip.parcoil.com"
        className="mt-5 text-sm text-muted-foreground hover:underline"
      >
        try ip.parcoil.com for quicker access
      </a>
    </div>
  );
}
