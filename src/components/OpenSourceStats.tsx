
import { Github, Users, Star, Award } from "lucide-react";
import { Badge } from "./ui/badge";

export function OpenSourceStats() {
  return (
    <div className="py-24 bg-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Badge variant="default" className="bg-green-600">✓ Verified on Tea</Badge>
              <Badge variant="outline" className="border-green-600/50">MIT License</Badge>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2 text-gray-400">
                <Github className="h-5 w-5" />
                <span>Last commit: 2h ago</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Users className="h-5 w-5" />
                <span>12 contributors</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Star className="h-5 w-5 text-yellow-500" />
                <span>1.2k stars</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Award className="h-5 w-5 text-cyan-500" />
                <span>#420 Top Tea Tool</span>
              </div>
            </div>
          </div>
          <div className="bg-black/50 rounded-lg p-6 border border-gray-800">
            <h3 className="text-lg font-semibold text-white mb-4">Package Stats</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Weekly Downloads</span>
                <span className="text-cyan-400">22,174</span>
              </div>
              <div className="h-16 bg-gray-900/50 rounded-lg overflow-hidden">
                <div className="h-full w-full bg-gradient-to-r from-cyan-500/20 to-green-500/20" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
