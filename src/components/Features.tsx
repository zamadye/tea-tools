
import { FileCode, Wallet, Terminal, Link, ChartLine, FileText } from "lucide-react";

const features = [
  {
    name: "resolveENS()",
    description: "Convert ENS names to addresses with multi-chain support",
    icon: FileCode,
    snippet: 'const addr = await resolveENS("vitalik.eth")'
  },
  {
    name: "getGas()",
    description: "Check live gas fees by chain with historical data",
    icon: ChartLine,
    snippet: 'const gas = await getGas("arbitrum")'
  },
  {
    name: "walletSummary()",
    description: "View transaction history & protocols used by address",
    icon: Wallet,
    snippet: 'const summary = await walletSummary("0x123...")'
  },
  {
    name: "getTokenPrice()",
    description: "Fetch token prices from multiple sources",
    icon: FileText,
    snippet: 'const price = await getTokenPrice("ETH")'
  },
  {
    name: "generateContract()",
    description: "Create ERC-20 or NFT smart contract boilerplate",
    icon: Terminal,
    snippet: 'await generateContract("ERC721")'
  },
  {
    name: "farmingCLI()",
    description: "Automate testnet farming & airdrop tasks",
    icon: Link,
    snippet: 'await farmingCLI("--chain arbitrum")'
  }
];

export function Features() {
  return (
    <div className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Modular Web3 Tools Included
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
                <h3 className="ml-4 text-xl font-mono text-white">{feature.name}</h3>
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
