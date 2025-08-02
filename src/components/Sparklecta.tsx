"use client";
import React, { useEffect, useState } from "react";
import { Badge } from "./ui/badge";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

function Sparklecta() {
  const [version, setVersion] = useState(null);

  useEffect(() => {
    async function fetchVersion() {
      try {
        const res = await fetch(
          "https://api.github.com/repos/Parcoil/Sparkle/releases/latest"
        );
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setVersion(data.tag_name || "2");
      } catch {
        setVersion("2");
      }
    }
    fetchVersion();
  }, []);

  return (
    <div>
      <div className="mb-4">
        <Link href={"/sparkle"}>
          <Badge
            variant="outline"
            className="text-lg px-4 py-2 font-semibold rounded-full hover:bg-primary hover:text-primary-foreground transition-colors gap-2 cursor-pointer"
          >
            <img src="/sparklelogo.png" className="h-5 w-5 " />
            Sparkle v{version ? version : "2"} Released!
            <ArrowRight />
          </Badge>
        </Link>
      </div>
    </div>
  );
}

export default Sparklecta;
