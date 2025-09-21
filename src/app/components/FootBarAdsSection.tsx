"use client";

import { useEffect } from "react";
interface AtOptions {
  key: string;
  format: string;
  height: number;
  width: number;
  params: Record<string, unknown>;
}
export default function FootBarAdsSection() {
  useEffect(() => {
    // check if the script already exists, if so, remove it first to avoid duplicates
    const oldScript = document.getElementById("adsterra-footbar-script");
    if (oldScript) {
      oldScript.remove();
    }

    const atOptions = {
      key: "e2d594a9112566932f54f17cf859c62e",
      format: "iframe",
      height: 50,
      width: 320,
      params: {},
    };

    const adScript = document.createElement("script");
    adScript.id = "adsterra-footbar-script"; // add unique ID
    adScript.type = "text/javascript";
    adScript.src = `//www.highperformanceformat.com/${atOptions.key}/invoke.js`;
    adScript.async = true;

    // mount the config object to the global window object
    // Note: If there are other ads using atOptions, there may be conflicts
    window.atOptions = atOptions;

    document.body.appendChild(adScript);

    // return a cleanup function to remove the script when the component unmounts
    return () => {
      if (document.body.contains(adScript)) {
        document.body.removeChild(adScript);
      }
    };
  }, []); // empty dependency array ensures this runs once on mount and cleanup on unmount

  return (
    <div className="flex justify-center w-full my-4">
      <div
        id="container-new-ad"
        className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl"
      >
        {/* Ad will be injected here */}
      </div>
    </div>
  );
}

// declare window.atOptions to avoid TypeScript errors
declare global {
  interface Window {
    atOptions: AtOptions;
  }
}
