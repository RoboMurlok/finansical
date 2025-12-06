import { useState } from "react";
import "./CookieBanner.css";
import "./CookieBanner.css";

export default function FakeCookieBanner() {
 
  const [visible, setVisible] = useState(() => {
    const accepted = sessionStorage.getItem("cookieBannerAccepted");
    return !accepted; 
  });

  const handleClose = () => {
    sessionStorage.setItem("cookieBannerAccepted", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookieBanner">
      <p className="text">
        This website uses cookies to enhance your experience. By continuing to
        browse, you agree to our use of cookies.
      </p>
      <button onClick={handleClose}>Accept</button>
      <button onClick={handleClose}>Cancel</button>
    </div>
  );
}

