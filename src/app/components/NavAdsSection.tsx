import Script from "next/script";

export default function NavAdsSection() {
  return (
    <div className="flex justify-center w-full my-4">
      <div
        id="container-f1f2b9d3e193d57a0c9a5a5ecd4ac91b"
        className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl"
      ></div>
      <Script
        id="ad-custom-script"
        strategy="afterInteractive"
        src="https://pl27645292.revenuecpmgate.com/f1f2b9d3e193d57a0c9a5a5ecd4ac91b/invoke.js"
      />
    </div>
  );
}
