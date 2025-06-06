
import { Terminal } from "./Terminal";
import { Terminal as TerminalIcon, Github, Code } from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "@/hooks/use-toast";

export function Hero() {
  const copyCommand = () => {
    navigator.clipboard.writeText("npm install tea-tools");
    toast({
      title: "Copied to clipboard!",
      description: "Command has been copied to your clipboard.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-b from-black to-gray-900">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] animate-fade-in" />
      <div className="z-10 text-center space-y-8 px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-green-500 animate-fade-in">
          Web3 CLI & SDK Tools for Builders
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 animate-fade-in delay-100">
          The essential toolkit for airdrop hunters & Web3 developers. Track wallets, resolve ENS names, and automate testnet interactions with ease.
        </p>
        <div className="flex flex-wrap justify-center gap-4 animate-fade-in delay-200">
          <Button
            variant="default"
            size="lg"
            onClick={copyCommand}
            className="font-mono"
          >
            <TerminalIcon className="mr-2 h-5 w-5" />
            npm install tea-tools
          </Button>
          <Button
            variant="outline"
            size="lg"
            asChild
          >
            <a href="https://github.com/tea/tea-tools" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              View on GitHub
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            asChild
          >
            <a href="/docs" className="hover:text-cyan-400">
              <Code className="mr-2 h-5 w-5" />
              Read the Docs
            </a>
          </Button>
        </div>
        <div className="mt-12 animate-fade-in delay-300">
          <Terminal />
        </div>
      </div>
    </div>
  );
}
