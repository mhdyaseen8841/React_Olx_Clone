import React from "react";
import "./spinner.css";

export default function LoadingSpinner() {
  return (
    <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
  );
}