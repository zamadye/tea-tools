
import { Github, Book, MessageSquare } from "lucide-react";
import { Button } from "./ui/button";

export function FinalCTA() {
  return (
    <div className="py-24 bg-gradient-to-b from-black/50 to-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-green-500">
          Build faster. Automate smarter. Analyze deeper.
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <Button variant="default" size="lg" className="bg-cyan-500 hover:bg-cyan-600">
            <Book className="mr-2 h-5 w-5" />
            Read the Docs
          </Button>
          <Button variant="outline" size="lg" className="border-gray-700">
            <Github className="mr-2 h-5 w-5" />
            Star on GitHub
          </Button>
          <Button variant="outline" size="lg" className="border-gray-700">
            <MessageSquare className="mr-2 h-5 w-5" />
            Join Community
          </Button>
        </div>
      </div>
    </div>
  );
}
