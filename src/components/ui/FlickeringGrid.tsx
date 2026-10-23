"use client";

import { useEffect, useRef } from "react";

interface FlickeringGridProps {
  squareSize?: number;
  gridGap?: number;
  flickerChance?: number;
  color?: string;
  darkColor?: string;
  maxOpacity?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function FlickeringGrid({
  squareSize = 4,
  gridGap = 6,
  flickerChance = 0.3,
  color,
  darkColor,
  maxOpacity = 0.3,
  className,
  style,
}: FlickeringGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let cols = 0;
    let rows = 0;
    let opacities: Float32Array;

    const getColor = () => {
      const isDark = document.documentElement.classList.contains("dark");
      return isDark
        ? (darkColor ?? "rgba(255,255,255,")
        : (color ?? "rgba(0,0,0,");
    };

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      cols = Math.ceil(canvas.width / (squareSize + gridGap));
      rows = Math.ceil(canvas.height / (squareSize + gridGap));
      opacities = new Float32Array(cols * rows).map(() =>
        Math.random() * maxOpacity
      );
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const c = getColor();

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const idx = i * rows + j;
          if (Math.random() < flickerChance) {
            opacities[idx] = Math.random() * maxOpacity;
          }
          ctx.fillStyle = `${c}${opacities[idx].toFixed(2)})`;
          ctx.fillRect(
            i * (squareSize + gridGap),
            j * (squareSize + gridGap),
            squareSize,
            squareSize
          );
        }
      }

      animRef.current = requestAnimationFrame(draw);
    };

    resize();
    draw();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(animRef.current);
      ro.disconnect();
    };
  }, [squareSize, gridGap, flickerChance, color, darkColor, maxOpacity]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ display: "block", ...style }}
    />
  );
}
