'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface Bubble {
  id: number;
  name: string;
  image: string;
  x: number;
  y: number;
  velocityX: number;
  velocityY: number;
}

const skills = [
    { name: 'React', image: '/logos/react.png' },
    { name: 'Node.js', image: '/logos/nodejs.png' },
    { name: 'Python', image: '/logos/python.png' },
    { name: 'JavaScript', image: '/logos/javascript.png' },
    { name: 'TypeScript', image: '/logos/typescript.png' },
    { name: 'SQL', image: '/logos/sql.png' },
    { name: 'MongoDB', image: '/logos/mongodb.png' },
    { name: 'Docker', image: '/logos/docker.png' },
    { name: 'AWS', image: '/logos/aws.png' },
    { name: 'C#', image: '/logos/csharp.png' },
    { name: 'C', image: '/logos/c.png' },
    { name: 'C++', image: '/logos/c++.png' },
    { name: 'Dart', image: '/logos/dart.png' },
    { name: 'HTML&CSS', image: '/logos/html&css.png' },
    { name: 'ASP.NET', image: '/logos/asp.net.png' },
    { name: 'Redux', image: '/logos/redux.png' },
    { name: 'Git', image: '/logos/git.png' },
    { name: 'Redis', image: '/logos/redis.png' },
    { name: 'Azure', image: '/logos/azure.png' },
    { name: 'TensorFlow', image: '/logos/tensorflow.png' },
    { name: 'PyTorch', image: '/logos/pytorch.png' },
    { name: 'OpenAI', image: '/logos/openai.png' },
    { name: 'GenAI', image: '/logos/genai.png' },
    { name: 'Next.js', image: '/logos/nextjs.png' },
    { name: 'Linux', image: '/logos/linux.jpg' },
    { name: 'Tailwindcss', image: '/logos/tailwind.png' },
    { name: 'Bootstrap', image: '/logos/bootstrap.png' },
    { name: 'Java', image: '/logos/java.png' },
    { name: 'ASP.NET', image: '/logos/net.png' },
    

    
];

// Initial static positions for SSR
const initialBubbles: Bubble[] = skills.map((skill, index) => ({
  ...skill,
  id: index,
  x: 0,
  y: 0,
  velocityX: 0,
  velocityY: 0
}));

const FloatingSkills: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  const [bubbles, setBubbles] = useState<Bubble[]>(initialBubbles);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const [logoSize, setLogoSize] = useState(0);

  // Handle client-side initialization and responsive sizing
  useEffect(() => {
    setIsClient(true);
    const updateSize = () => {
      const height = window.innerHeight * 0.15; // 20vh
      const width = window.innerWidth;
      
      // Calculate responsive logo size (between 48px and 80px)
      const calculatedLogoSize = Math.min(
        Math.max(Math.min(width, height) * 0.4, 48), // 25% of the smaller dimension, but no smaller than 48px
        80 // Max size of 80px
      );
      console.log("size: ", calculatedLogoSize);
      setContainerSize({
        width: width,
        height: height
      });
      setLogoSize(calculatedLogoSize);
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  // Initialize bubbles with random positions after mounting
  useEffect(() => {
    if (isClient && containerSize.width > 0 && containerSize.height > 0) {
      setBubbles(
        skills.map((skill, index) => ({
          ...skill,
          id: index,
          x: (index * containerSize.width) / skills.length,
          y: containerSize.height / 2,
          velocityX: 1 - Math.random() * 2,
          velocityY: 1 - Math.random() * 2
        }))
      );
    }
  }, [isClient, containerSize]);

  // Animation loop
  useEffect(() => {
    if (!isClient) return;

    let animationFrameId: number;

    const animate = () => {
      setBubbles(prevBubbles =>
        prevBubbles.map(bubble => {
          const newX = bubble.x + bubble.velocityX;
          const newY = bubble.y + bubble.velocityY;

          // Bounce off walls
          let newVelocityX = bubble.velocityX;
          let newVelocityY = bubble.velocityY;

          if (newX <= 0 || newX >= containerSize.width - logoSize) {
            newVelocityX *= -1;
          }
          if (newY <= 0 || newY >= containerSize.height - logoSize) {
            newVelocityY *= -1;
          }

          return {
            ...bubble,
            x: Math.max(0, Math.min(newX, containerSize.width - logoSize)),
            y: Math.max(0, Math.min(newY, containerSize.height - logoSize)),
            velocityX: newVelocityX,
            velocityY: newVelocityY
          };
        })
      );

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isClient, containerSize, logoSize]);

  if (!isClient) {
    return (
      <div className="relative w-full h-[20vh] overflow-hidden bg-100">
        <div className="flex flex-wrap gap-4 justify-center items-center h-full">
          {initialBubbles.map((bubble) => (
            <div
              key={bubble.id}
              style={{ width: `${logoSize}px`, height: `${logoSize}px` }}
              className="rounded-full bg-white shadow-lg p-2"
            >
              <div className="relative w-full h-full">
                <Image
                  src={bubble.image}
                  alt={`${bubble.name} logo`}
                  fill
                  className="object-contain p-1"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[20vh] overflow-hidden bg-100">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute"
          style={{
            width: `${logoSize}px`,
            height: `${logoSize}px`,
            transform: `translate(${bubble.x}px, ${bubble.y}px)`,
            transition: 'transform 0.1s linear'
          }}
        >
          <div className="relative w-full h-full rounded-full bg-white shadow-lg p-2 hover:scale-110 transition-transform">
            <Image
              src={bubble.image}
              alt={`${bubble.name} logo`}
              fill
              className="object-contain p-1"
            />
          </div>
          <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            {bubble.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FloatingSkills;