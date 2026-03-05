// Loader d'ambiance avec Framer Motion
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sequence = ["INIT SYSTEM", "LOADING MODULES", "READY"];

export const BootSequence: React.FC = () => {
  const [step, setStep] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (step < sequence.length - 1) {
      const timeout = setTimeout(() => setStep(step + 1), 500);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => setShow(false), 500);
      return () => clearTimeout(timeout);
    }
  }, [step]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950 text-cyan-200 text-2xl font-mono"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.span
            key={step}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            {sequence[step]}
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BootSequence;
