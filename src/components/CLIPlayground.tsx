
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Terminal as TerminalIcon, Copy } from "lucide-react";
import { Terminal } from "@/components/Terminal";

export function CLIPlayground() {
  return (
    <div className="py-24 bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Interactive CLI Playground
          </h2>
          <p className="text-lg text-gray-400">
            Try tea-tools commands directly in your terminal
          </p>
        </div>

        <Tabs defaultValue="cli" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="cli" className="gap-2">
              <TerminalIcon className="h-4 w-4" />
              CLI
            </TabsTrigger>
            <TabsTrigger value="sdk">JavaScript SDK</TabsTrigger>
            <TabsTrigger value="python" disabled>Python (Coming Soon)</TabsTrigger>
          </TabsList>

          <TabsContent value="cli" className="mt-2">
            <Terminal />
          </TabsContent>

          <TabsContent value="sdk">
            <div className="w-full max-w-3xl bg-black/80 rounded-lg border border-gray-800 p-4 font-mono text-sm">
              <div className="flex justify-between items-center mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <button className="text-gray-400 hover:text-white transition-colors">
                  <Copy className="h-4 w-4" />
                </button>
              </div>
              <pre className="text-cyan-400">
{`import { TeaTools } from 'tea-tools';

const tea = new TeaTools();
const walletInfo = await tea.wallet.track('0x742d35Cc6634C0532925a3b844Bc454e4438f44e');
console.log(walletInfo);`}
              </pre>
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
