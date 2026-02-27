"use client";

import { useEffect, useState } from "react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function BackgroundVideo() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  useEffect(() => {
    if (PlaceHolderImages && PlaceHolderImages.length > 0) {
      const videoUrl = PlaceHolderImages[0].imageUrl;
      setActiveVideo(videoUrl);
    }
  }, []);

  if (!activeVideo) return null;

  return (
    <div className="video-overlay">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="h-full w-full object-cover opacity-60 scale-105"
      >
        <source src={activeVideo} type="video/mp4" />
      </video>
    </div>
  );
}
