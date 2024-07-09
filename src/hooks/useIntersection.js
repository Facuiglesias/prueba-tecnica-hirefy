import { useState, useEffect } from "react";

export default function useIntersection(a) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const observer = new window.IntersectionObserver(function (entries) {
      const { isIntersecting } = entries[0];
      if (isIntersecting) {
        setShow(true);
        observer.disconnect();
      }
    });

    observer.observe(a.current);
  }, [a]);

  return show;
}
