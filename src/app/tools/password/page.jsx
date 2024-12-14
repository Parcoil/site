"use client";
import Autotag from "@/app/components/Ad";
import React, { useState } from "react";
export default function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [hasNumbers, setHasNumbers] = useState(true);
  const [hasSymbols, setHasSymbols] = useState(true);
  const [hasUppercase, setHasUppercase] = useState(true);

  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()";

  const generatePassword = () => {
    let characters = lowercaseChars;

    if (hasUppercase) characters += uppercaseChars;
    if (hasNumbers) characters += numberChars;
    if (hasSymbols) characters += symbolChars;

    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      generatedPassword += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    setPassword(generatedPassword);
  };

  return (
    <div className="flex flex-col items-center py-6 px-4 bg-base-200 rounded-lg shadow-lg max-w-lg mx-auto mt-10">
      <Autotag />
      <h1 className="text-3xl font-semibold mb-6 text-primary">
        Password Generator
      </h1>

      <div className="form-control w-full mb-4">
        <label className="label">
          <span className="label-text">Password Length: {length}</span>{" "}
          {/* Display current length */}
        </label>
        <input
          type="range"
          className="range range-primary w-full"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          min="1"
          max="32"
        />
      </div>

      <div className="form-control w-full mb-2">
        <label className="cursor-pointer label">
          <span className="label-text">Include Numbers</span>
          <input
            type="checkbox"
            className="toggle toggle-primary"
            checked={hasNumbers}
            onChange={(e) => setHasNumbers(e.target.checked)}
          />
        </label>
      </div>

      <div className="form-control w-full mb-2">
        <label className="cursor-pointer label">
          <span className="label-text">Include Symbols</span>
          <input
            type="checkbox"
            className="toggle toggle-primary"
            checked={hasSymbols}
            onChange={(e) => setHasSymbols(e.target.checked)}
          />
        </label>
      </div>

      <div className="form-control w-full mb-4">
        <label className="cursor-pointer label">
          <span className="label-text">Include Uppercase</span>
          <input
            type="checkbox"
            className="toggle toggle-primary"
            checked={hasUppercase}
            onChange={(e) => setHasUppercase(e.target.checked)}
          />
        </label>
      </div>

      <button
        className="btn btn-primary w-full mb-4"
        onClick={generatePassword}
      >
        Generate Password
      </button>

      <div className="bg-base-100 p-4 rounded-lg shadow-inner w-full text-center">
        <p className="text-lg font-semibold">Your Password:</p>
        <p className="text-lg font-mono break-all">{password}</p>
      </div>
    </div>
  );
}
