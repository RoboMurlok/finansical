import React from "react";
import Button from "../Button/Button";
import doc from "../../data/doc";

export default function PrivacyPolicy() {
  return (
    <div className="privacy">
      <h3>Privacy Policy</h3>
      {doc.privacyPolicy}
      <Button to="/">Accept</Button>
    </div>
  );
}
