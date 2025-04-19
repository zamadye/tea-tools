
import { Terminal } from "./Terminal";
import { Wallet, Terminal as TerminalIcon, Github } from "lucide-react";
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
          ENS resolver, wallet tracker, token price fetcher, gas estimator, and more – all in one package.
        </p>
        <div className="flex flex-wrap justify-center gap-4 animate-fade-in delay-200">
          <Button
            variant="default"
            size="lg"
            onClick={copyCommand}
            className="bg-cyan-500 hover:bg-cyan-600 hover:glow transition-all duration-300"
          >
            <TerminalIcon className="mr-2 h-5 w-5" />
            npm install tea-tools
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-gray-700 hover:bg-gray-800 hover:border-cyan-500/50 transition-all duration-300"
          >
            <Github className="mr-2 h-5 w-5" />
            View on GitHub
          </Button>
        </div>
        <div className="mt-12 animate-fade-in delay-300">
          <Terminal />
        </div>
      </div>
    </div>
  );
}
