import {useLayoutEffect, useState} from "react";

export default function useWindowSize () {
  const [width, setWidth] = useState (undefined);
  // const [height, setHeight] = useState (undefined);

  useLayoutEffect(() => {
    function resize() {
      setWidth(window.innerWidth);
      // setHeight(window.innerHeight);
    }
    window.addEventListener('resize', () => {
      if (window.innerWidth !== width) {
        setTimeout(() => {
          resize();
        }, 1000);
      }
    });
    resize();
    return () => window.removeEventListener('resize', resize);
  }, []);

  return width;
}