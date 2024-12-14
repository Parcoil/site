import Script from "next/script";
import React from "react";

function Autotag() {
  return (
    <div>
      <Script
        id="autotag-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            aclib.runAutoTag({
                zoneId: 'r9nifmgk3h',
            });
          `,
        }}
      />
    </div>
  );
}

export default Autotag;
