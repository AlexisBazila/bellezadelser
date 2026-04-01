import { useEffect, useRef, useState } from "react";

function useInView(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const {
    threshold = 0.3,
    root = null,
    rootMargin = "0px 0px -150px 0px",
    triggerOnce = true,
    delay = 80, // 👈 pequeño delay para que se perciba la animación
  } = options;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);

          if (triggerOnce && ref.current) {
            observer.unobserve(ref.current);
          }
        } else {
          if (!triggerOnce) {
            setIsVisible(false);
          }
        }
      },
      {
        threshold,
        root,
        rootMargin,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, root, rootMargin, triggerOnce, delay]);

  return [ref, isVisible];
}

export default useInView;