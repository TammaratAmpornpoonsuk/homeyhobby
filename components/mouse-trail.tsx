"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const effectImages = [
  "/projects/effects/effect1.svg",
  "/projects/effects/effect2.svg",
  "/projects/effects/effect3.svg",
  "/projects/effects/effect4.svg",
  "/projects/effects/effect5.svg",
  "/projects/effects/effect6.svg",
  "/projects/effects/effect7.svg",
];

type EffectItem = {
  id: number;
  x: number;
  y: number;
  image: string;
  size: number;
  rotation: number;
};

export function MouseTrail() {
  const [effects, setEffects] = useState<EffectItem[]>([]);
  const lastPosition = useRef({ x: 0, y: 0 });
  const nextId = useRef(0);
  const lastImage = useRef("");

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    function handleMouseMove(event: MouseEvent) {
      const { clientX: x, clientY: y } = event;

      const dx = x - lastPosition.current.x;
      const dy = y - lastPosition.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 40) return;

      lastPosition.current = { x, y };

      const availableItems =
        effectImages.length > 1
          ? effectImages.filter((image) => image !== lastImage.current)
          : effectImages;

      const image =
        availableItems[Math.floor(Math.random() * availableItems.length)];

      lastImage.current = image;

      const id = nextId.current++;

      const effect: EffectItem = {
        id,
        x,
        y,
        image,
        size: Math.floor(Math.random() * 20) + 10,
        rotation: Math.floor(Math.random() * 60) - 30,
      };

      setEffects((prev) => [...prev, effect]);

      const timer = setTimeout(() => {
        setEffects((prev) => prev.filter((item) => item.id !== id));
      }, 400);

      timers.push(timer);
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {effects.map((effect) => (
        <div
          key={effect.id}
          className="mouse-trail-effect"
          style={{
            left: effect.x,
            top: effect.y,
            rotate: `${effect.rotation}deg`,
          }}
        >
          <Image
            src={effect.image}
            alt=""
            width={effect.size}
            height={effect.size}
            unoptimized
          />
        </div>
      ))}
    </div>
  );
}
