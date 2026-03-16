import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Scissors, Sparkles } from "lucide-react";

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 500),   // Show scissors
      setTimeout(() => setStage(2), 1500),  // Show sparkles
      setTimeout(() => setStage(3), 2500),  // Show name
      setTimeout(() => setStage(4), 3800),  // Start fade out
      setTimeout(() => onComplete(), 4200), // Complete
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      style={{ backgroundColor: '#7A1F2B' }}
      initial={{ opacity: 1 }}
      animate={{ opacity: stage === 4 ? 0 : 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="relative">
        {/* Animated Scissors */}
        {stage >= 1 && (
          <motion.div
            className="absolute left-1/2 top-1/2"
            initial={{ x: '-50%', y: '-50%', rotate: -45, scale: 0 }}
            animate={{ 
              x: '-50%', 
              y: '-50%', 
              rotate: 0, 
              scale: 1,
            }}
            transition={{ duration: 0.6, ease: "backOut" }}
          >
            <motion.div
              animate={{ 
                rotate: [0, -15, 15, -10, 10, 0],
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                repeatDelay: 0.5,
              }}
            >
              <Scissors className="w-24 h-24" style={{ color: '#C8A96A' }} />
            </motion.div>
          </motion.div>
        )}

        {/* Sparkles Animation */}
        {stage >= 2 && (
          <>
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute left-1/2 top-1/2"
                initial={{ 
                  x: '-50%', 
                  y: '-50%',
                  scale: 0,
                  opacity: 0,
                }}
                animate={{ 
                  x: `calc(-50% + ${Math.cos((i * 60) * Math.PI / 180) * 100}px)`,
                  y: `calc(-50% + ${Math.sin((i * 60) * Math.PI / 180) * 100}px)`,
                  scale: [0, 1.2, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.1,
                  repeatDelay: 0.5,
                }}
              >
                <Sparkles className="w-6 h-6" style={{ color: '#F5E9DA' }} />
              </motion.div>
            ))}
          </>
        )}

        {/* Shop Name Reveal */}
        {stage >= 3 && (
          <motion.div
            className="absolute left-1/2 top-1/2 w-[400px] text-center"
            initial={{ x: '-50%', y: '100%', opacity: 0 }}
            animate={{ x: '-50%', y: '20%', opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="font-serif mb-2" style={{ 
                fontFamily: 'Playfair Display, serif', 
                fontSize: '3rem',
                color: '#F5E9DA',
                letterSpacing: '0.05em',
              }}>
                New Glamour
              </div>
              <div className="text-2xl tracking-widest" style={{ color: '#C8A96A' }}>
                TAILOR
              </div>
              <motion.div
                className="mt-4 h-0.5 mx-auto"
                style={{ backgroundColor: '#C8A96A' }}
                initial={{ width: 0 }}
                animate={{ width: '60%' }}
                transition={{ duration: 0.6, delay: 0.5 }}
              />
              <motion.p
                className="mt-4 text-sm"
                style={{ color: '#F5E9DA' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                Crafting Elegance One Stitch at a Time
              </motion.p>
            </motion.div>
          </motion.div>
        )}

        {/* Thread Line Animation */}
        {stage >= 1 && stage < 4 && (
          <motion.div
            className="absolute left-1/2 top-1/2"
            style={{ 
              width: '2px',
              height: '200px',
              background: 'linear-gradient(to bottom, transparent, #C8A96A, transparent)',
            }}
            initial={{ x: '-50%', y: '-50%', scaleY: 0 }}
            animate={{ 
              x: '-50%', 
              y: '-50%',
              scaleY: [0, 1, 1, 0],
              rotate: [0, 360],
            }}
            transition={{ 
              scaleY: { duration: 2, times: [0, 0.3, 0.7, 1] },
              rotate: { duration: 2, ease: "linear" },
              repeat: Infinity,
            }}
          />
        )}
      </div>
    </motion.div>
  );
}
