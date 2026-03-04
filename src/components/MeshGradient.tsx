import { motion } from "framer-motion";

const MeshGradient = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] bg-primary/10 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          x: [0, -80, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -bottom-[10%] -right-[10%] w-[60%] h-[60%] bg-primary/5 rounded-full blur-[100px]"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0)_0%,rgba(255,255,255,0.5)_100%)]" />
    </div>
  );
};

export default MeshGradient;
