import React from "react";
import Button from "./components/ui/Button";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background gap-4">
      <h1 className="text-xl font-bold text-primary">Test Button Component</h1>
      <Button onClick={() => alert("Click!")}>Apasă-mă</Button>
      <div className="bg-red-500 text-white p-4 rounded-lg">
        Tailwind test block
      </div>
    </div>
  );
}
