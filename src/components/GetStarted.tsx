
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileCode, Code2 } from "lucide-react";

export function GetStarted() {
  return (
    <div className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Get Started in Minutes
          </h2>
          <p className="text-lg text-gray-400">
            Simple integration for Web3 developers. Start building faster.
          </p>
        </div>

        <Tabs defaultValue="javascript" className="w-full max-w-3xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="javascript" className="gap-2">
              <FileCode className="h-4 w-4" />
              JavaScript
            </TabsTrigger>
            <TabsTrigger value="python" disabled>
              <Code2 className="h-4 w-4" />
              Python (Coming Soon)
            </TabsTrigger>
          </TabsList>

          <TabsContent value="javascript" className="space-y-6">
            <div className="bg-black/80 rounded-lg border border-gray-800 p-6 font-mono text-sm">
              <div className="text-cyan-400 mb-4"># Install the package</div>
              <pre className="text-white">npm install tea-tools</pre>
              
              <div className="text-cyan-400 mt-6 mb-4"># Import and use</div>
              <pre className="text-white">{`import { resolveENS, getGas } from 'tea-tools';

// Resolve ENS names
const address = await resolveENS('vitalik.eth');
console.log(address);

// Get live gas prices
const gasPrice = await getGas('arbitrum');
console.log(gasPrice);`}</pre>
            </div>
          </TabsContent>

          <TabsContent value="python">
            <div className="flex items-center justify-center h-32 bg-black/80 rounded-lg border border-gray-800">
              <p className="text-gray-400">Python SDK coming soon</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
