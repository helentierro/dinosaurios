import { motion, useReducedMotion } from "motion/react";
import { useEffect, useState, type ReactNode } from "react";

/**
 * Revela su contenido al entrar en viewport.
 *
 * Ojo con el fallback: motion/react usa IntersectionObserver con `once: true`.
 * En capturas headless (Chrome --screenshot sin scroll) el observer no dispara
 * para nada que esté fuera del viewport, así que el contenido quedaría invisible
 * para siempre. El temporizador de seguridad muestra el contenido aunque el
 * observer nunca haya hablado. Con scroll real el observer gana y la animación
 * se ve normal.
 */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1200);
    return () => clearTimeout(t);
  }, []);

  if (reduce || visible) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
