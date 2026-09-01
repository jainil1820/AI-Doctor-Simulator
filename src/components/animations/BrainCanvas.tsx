import React, { useEffect, useRef } from 'react';

interface BrainCanvasProps {
  isAnalyzing?: boolean;
  activeNodesCount?: number;
  className?: string;
}

export const BrainCanvas: React.FC<BrainCanvasProps> = ({
  isAnalyzing = false,
  className = ''
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 400);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 300);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    // Generate node network
    const numNodes = isAnalyzing ? 38 : 26;
    const nodes: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      pulsePhase: number;
    }[] = [];

    const colors = ['#2563EB', '#0D9488', '#9333EA', '#38BDF8', '#818CF8'];

    for (let i = 0; i < numNodes; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * (isAnalyzing ? 1.6 : 0.8),
        vy: (Math.random() - 0.5) * (isAnalyzing ? 1.6 : 0.8),
        radius: Math.random() * 3 + (isAnalyzing ? 3.5 : 2),
        color: colors[Math.floor(Math.random() * colors.length)],
        pulsePhase: Math.random() * Math.PI * 2
      });
    }

    let time = 0;

    const render = () => {
      time += 0.03;
      ctx.clearRect(0, 0, width, height);

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = isAnalyzing ? 130 : 100;

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * (isAnalyzing ? 0.6 : 0.25);
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);

            const gradient = ctx.createLinearGradient(
              nodes[i].x,
              nodes[i].y,
              nodes[j].x,
              nodes[j].y
            );
            gradient.addColorStop(0, `rgba(37, 99, 235, ${alpha})`);
            gradient.addColorStop(0.5, `rgba(13, 148, 136, ${alpha})`);
            gradient.addColorStop(1, `rgba(147, 51, 234, ${alpha})`);

            ctx.strokeStyle = gradient;
            ctx.lineWidth = isAnalyzing ? 1.8 : 1.0;
            ctx.stroke();

            // Draw traveling data packet pulses if analyzing
            if (isAnalyzing && (i + j) % 3 === 0) {
              const packetPos = (Math.sin(time * 3 + i) + 1) / 2;
              const px = nodes[i].x + (nodes[j].x - nodes[i].x) * packetPos;
              const py = nodes[i].y + (nodes[j].y - nodes[i].y) * packetPos;

              ctx.beginPath();
              ctx.arc(px, py, 2.5, 0, Math.PI * 2);
              ctx.fillStyle = '#60A5FA';
              ctx.shadowColor = '#38BDF8';
              ctx.shadowBlur = 8;
              ctx.fill();
              ctx.shadowBlur = 0;
            }
          }
        }
      }

      // Draw nodes
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        const pulse = Math.sin(time * 2 + node.pulsePhase) * 0.5 + 1;
        const currentRadius = node.radius * pulse;

        ctx.beginPath();
        ctx.arc(node.x, node.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.shadowColor = node.color;
        ctx.shadowBlur = isAnalyzing ? 12 : 6;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isAnalyzing]);

  return (
    <div className={`relative w-full h-full overflow-hidden pointer-events-none ${className}`}>
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
};
