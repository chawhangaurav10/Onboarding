import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";


export default function Submitted({ formData }) {
  return (
    <>
      <CheckCircleIcon
        className="mt-5 mb-4"
        htmlColor="blueviolet"
        
        style={{ height: "100px", width: "100px" }}
      />
      <br />
      <h2>Congratulations, {formData.userName}!</h2>
      <small style={{ color: "GrayText" }}>
        You have completed onboarding, you can start using the Eden!
      </small>
    </>
  );
}
