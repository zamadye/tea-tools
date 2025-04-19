
import { FileCode, Wallet, Terminal, Link, ChartLine, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    name: "resolveENS()",
    description: "ENS ↔ address converter with multi-chain support",
    icon: FileCode,
    snippet: 'await resolveENS("vitalik.eth")'
  },
  {
    name: "getGas(chain)",
    description: "Real-time gas tracker for any EVM chain",
    icon: ChartLine,
    snippet: 'getGas("ethereum")'
  },
  {
    name: "wallet:track()",
    description: "Complete wallet activity analysis and monitoring",
    icon: Wallet,
    snippet: 'wallet:track("0x123...")'
  },
  {
    name: "generateContract()",
    description: "Smart contract templates with one command",
    icon: FileText,
    snippet: 'generateContract("ERC721")'
  },
  {
    name: "getTokenPrice()",
    description: "Live token prices from multiple sources",
    icon: Terminal,
    snippet: 'getTokenPrice("ETH")'
  },
  {
    name: "farmingCLI()",
    description: "Automated testnet transactions & faucet tools",
    icon: Link,
    snippet: 'farmingCLI --chain arbitrum'
  }
];

export function Features() {
  return (
    <div className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Powerful Tools for Web3 Developers
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Everything you need to build, test, and deploy Web3 applications
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="group relative bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="flex items-center">
                <feature.icon className="h-8 w-8 text-cyan-400" />
                <h3 className="ml-4 text-xl font-medium text-white">{feature.name}</h3>
              </div>
              <p className="mt-4 text-gray-400">{feature.description}</p>
              <div className="mt-4 bg-black/50 p-3 rounded font-mono text-sm text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {feature.snippet}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
