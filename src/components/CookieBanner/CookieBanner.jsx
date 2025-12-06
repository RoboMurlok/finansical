import { useState } from "react";
import "./CookieBanner.css";

export default function FakeCookieBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="cookieBanner">
      <p className="text">
        This website uses cookies to enhance your experience. By continuing to
        browse, you agree to our use of cookies.
      </p>
      <button onClick={() => setVisible(false)}>Accept</button>
      <button onClick={() => setVisible(false)}>Cancel</button>
    </div>
  );
}
