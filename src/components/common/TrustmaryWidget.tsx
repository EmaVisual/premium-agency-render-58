import { useEffect } from "react";

export default function TrustmaryWidget() {
  useEffect(() => {
    // Create and append the script
    const script = document.createElement("script");
    script.src = "https://widget.trustmary.com/QKWbH9Mlb";
    script.async = true;
    
    // Append to document head
    document.head.appendChild(script);
    
    // Cleanup function to remove script when component unmounts
    return () => {
      const existingScript = document.querySelector('script[src="https://widget.trustmary.com/QKWbH9Mlb"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div id="trustmary-widget-container" className="w-full">
      {/* Trustmary widget will be injected here */}
    </div>
  );
}