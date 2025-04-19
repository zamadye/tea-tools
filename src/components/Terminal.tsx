
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

interface Command {
  input: string;
  output: string;
}

const simulatedCommands: Command[] = [
  {
    input: "tea-tools wallet:track 0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
    output: "→ Last 30 days: 12 tx, 4 protocols used, 0 airdrop detected"
  },
  {
    input: "tea-tools getGas ethereum",
    output: "→ Current gas: 32 gwei (Safe Low) | 45 gwei (Standard) | 52 gwei (Fast)"
  },
  {
    input: "tea-tools resolveENS vitalik.eth",
    output: "→ Address: 0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045"
  }
];

export function Terminal() {
  const [currentCommand, setCurrentCommand] = useState(0);
  const [typing, setTyping] = useState(false);
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    const typeCommand = async () => {
      setTyping(true);
      const command = simulatedCommands[currentCommand].input;
      
      for (let i = 0; i <= command.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 50));
        setTypedText(command.slice(0, i));
      }
      
      await new Promise(resolve => setTimeout(resolve, 500));
      setTyping(false);
      
      await new Promise(resolve => setTimeout(resolve, 2000));
      setCurrentCommand((prev) => (prev + 1) % simulatedCommands.length);
      setTypedText("");
    };

    typeCommand();
  }, [currentCommand]);

  return (
    <div className="w-full max-w-3xl bg-black/80 rounded-lg border border-gray-800 p-4 font-mono text-sm">
      <div className="flex space-x-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
      </div>
      <div className="space-y-2">
        <div className="flex">
          <span className="text-green-400">$</span>
          <span className="ml-2 text-gray-100">{typedText}</span>
          {typing && <span className="animate-pulse">▋</span>}
        </div>
        {!typing && typedText && (
          <div className="text-cyan-400 ml-4">
            {simulatedCommands[currentCommand].output}
          </div>
        )}
      </div>
    </div>
  );
}
