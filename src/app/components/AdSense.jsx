import Script from "next/script";
import React from "react";

function AdSense() {
  return (
    <Script
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1565760898646999"
      crossorigin="anonymous"
    ></Script>
  );
}

export default AdSense;
