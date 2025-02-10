import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import disableDevtool from "disable-devtool";
import devtools from "devtools-detect";
import { decryptAES } from "./utils";

// Custom Hook to handle DevTools detection and disable context menu
const useDevToolsProtection = () => {
  const [isBlurry, setIsBlurry] = useState(false);

  useEffect(() => {
    // Disable DevTools
    disableDevtool({ clearIntervalWhenDevOpen: true });

    // Disable right-click menu
    const disableRightClick = (event) => event.preventDefault();
    document.addEventListener("contextmenu", disableRightClick);

    // Add watermark to the document
    const watermarkText = document.createElement("div");
    watermarkText.textContent = "Confidential - Do Not Share";
    watermarkText.style.position = "fixed";
    watermarkText.style.top = "50%";
    watermarkText.style.left = "50%";
    watermarkText.style.transform = "translate(-50%, -50%) rotate(-30deg)";
    watermarkText.style.fontSize = "32px";
    watermarkText.style.color = "rgba(0, 0, 0, 0.2)";
    watermarkText.style.pointerEvents = "none";
    watermarkText.style.zIndex = "9999";
    document.body.appendChild(watermarkText);

    // Listen for DevTools open/close event
    const checkDevTools = () => setIsBlurry(devtools.isOpen);
    window.addEventListener("devtoolschange", checkDevTools);

    // Cleanup
    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
      window.removeEventListener("devtoolschange", checkDevTools);
      document.body.removeChild(watermarkText);
    };
  }, []);

  return isBlurry;
};

// Custom Hook to handle URL decryption
const useDecryptedUrl = (encryptedUrl) => {
  const [decryptedUrl, setDecryptedUrl] = useState("");

  useEffect(() => {
    if (encryptedUrl) {
      const url = decryptAES(encryptedUrl);
      setDecryptedUrl(url);
    }
  }, [encryptedUrl]);

  return decryptedUrl;
};

const Preview = () => {
  const [searchParams] = useSearchParams();
  const encryptedUrl = searchParams.get("url");
  
  const decryptedUrl = useDecryptedUrl(encryptedUrl);
  const isBlurry = useDevToolsProtection();

  return (
<div className={`p-8 flex flex-col items-center ${isBlurry ? "backdrop-blur-lg" : ""}`}>
  <h1 className="text-2xl font-bold mb-4">Guide Preview</h1>
  {decryptedUrl ? (
    <div className="relative w-full max-w-4xl h-[500px]">
      <iframe
        src={decryptedUrl}
        title="Guide Preview"
        className="w-full h-full border rounded-lg shadow-lg"
      />
      <div className="absolute top-3 right-3 w-13 h-12 bg-[rgba(0,0,0,.75)] rounded-md"></div>
    </div>
  ) : (
    <p className="text-gray-600">No guide URL provided.</p>
  )}
</div>


  );
};

export default Preview;
