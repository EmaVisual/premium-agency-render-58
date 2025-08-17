import { useEffect } from 'react';

export default function TrustmaryWidget() {
  useEffect(() => {
    // Create and append the script element
    const script = document.createElement('script');
    script.src = 'https://widget.trustmary.com/QKWbH9Mlb';
    script.async = true;
    
    // Clean up any existing Trustmary widgets
    const existingScript = document.querySelector('script[src="https://widget.trustmary.com/QKWbH9Mlb"]');
    if (existingScript) {
      existingScript.remove();
    }
    
    document.body.appendChild(script);
    
    // Cleanup function
    return () => {
      const scriptElement = document.querySelector('script[src="https://widget.trustmary.com/QKWbH9Mlb"]');
      if (scriptElement) {
        scriptElement.remove();
      }
    };
  }, []);

  return (
    <div className="w-full">
      {/* The Trustmary widget will be injected here by the script */}
      <div id="trustmary-widget-container" className="min-h-[200px]" />
    </div>
  );
}