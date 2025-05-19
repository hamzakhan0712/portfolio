import { useState } from "react";
import { Award } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface Achievement {
  image?: string;
  title: string;
  type: "certification" | "hackathon" | "internship" | "award";
}

function AchievementCard({ achievement }: { achievement: Achievement }) {
  const [fullScreenImage, setFullScreenImage] = useState<string | null>(null);

  return (
    <>
      {/* Image header */}
      <div className="relative h-48 bg-gradient-to-br from-primary/10 to-background/50 overflow-hidden group">
        {achievement.image ? (
          <>
            <img
              src={achievement.image}
              alt={achievement.title}
              className="w-full h-full object-contain p-4 bg-white dark:bg-gray-900 cursor-zoom-in"
              onClick={() => setFullScreenImage(achievement.image || null)}
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
              <span className="text-white bg-black/50 px-3 py-1 rounded-full text-sm font-medium">
                Click to View
              </span>
            </div>
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800">
            <div className="text-center p-4">
              <Award className="h-12 w-12 mx-auto text-gray-400 dark:text-gray-600" />
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                {achievement.type === "certification"
                  ? "Certification Preview"
                  : achievement.type === "hackathon"
                  ? "Hackathon Project"
                  : achievement.type === "internship"
                  ? "Company Logo"
                  : "Award Image"}
              </p>
            </div>
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Full screen image dialog */}
      <Dialog
        open={!!fullScreenImage}
        onOpenChange={(open) => !open && setFullScreenImage(null)}
      >
        <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 bg-transparent border-none">
          {fullScreenImage && (
            <div className="flex items-center justify-center w-full h-full">
              <img
                src={fullScreenImage}
                alt="Full screen achievement"
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}

export default AchievementCard;