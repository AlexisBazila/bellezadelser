import { useEffect } from "react";

function TestHotmart() {
  useEffect(() => {
    // Script Hotmart
    const script = document.createElement("script");
    script.src = "https://static.hotmart.com/checkout/widget.min.js";
    script.async = true;
    document.body.appendChild(script);

    // CSS Hotmart
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://static.hotmart.com/css/hotmart-fb.min.css";
    document.head.appendChild(link);

    return () => {
      document.body.removeChild(script);
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#fff5f7",
        fontFamily: "Arial",
      }}
    >
      <a
        href="https://pay.hotmart.com/T105963979F?checkoutMode=2"
        className="hotmart-fb hotmart__button-checkout"
        onClick={(e) => e.preventDefault()}
        style={{
          background: "#ec4899",
          color: "white",
          padding: "16px 32px",
          borderRadius: "16px",
          textDecoration: "none",
          fontSize: "20px",
          fontWeight: "bold",
          boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
          transition: "0.2s",
          cursor: "pointer",
        }}
      >
        ✨ Test Hotmart
      </a>
    </div>
  );
}

export default TestHotmart;
