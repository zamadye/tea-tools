
import { Github, Twitter, FileText } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-white mb-4">tea-tools</h3>
            <p className="text-gray-400">
              Open-source Web3 development tools, powered by Tea Protocol
            </p>
            <div className="mt-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-900/30 text-green-400 border border-green-800">
                ✓ Verified on Tea
              </span>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Resources</h4>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#" className="text-gray-300 hover:text-cyan-400 flex items-center">
                  <FileText className="h-4 w-4 mr-2" />
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-cyan-400 flex items-center">
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-cyan-400 flex items-center">
                  <Twitter className="h-4 w-4 mr-2" />
                  Twitter
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Install</h4>
            <div className="mt-4">
              <pre className="bg-gray-900 rounded p-3 font-mono text-sm text-cyan-400">
                npm install tea-tools
              </pre>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} tea-tools. Licensed under MIT.
          </p>
        </div>
      </div>
    </footer>
  );
}
