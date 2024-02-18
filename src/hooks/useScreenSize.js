import { useEffect, useState } from 'react'

const useScreenSize = () => {
   // const [windowSize, setWindowSize] = useState([
   //    window.innerWidth,
   //    window.innerHeight,
   // ]);

   const [width, setWidth] = useState(0)
   const [height, setHeight] = useState(0)

   const handleWindowResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
   }

   useEffect(() => {
      // const handleWindowResize = () => {
      //    setWindowSize([window.innerWidth, window.innerHeight]);
      // };
      handleWindowResize()
      window.addEventListener('resize', handleWindowResize);
      return () => {
         window.removeEventListener('resize', handleWindowResize);
      };
   }, []);

   return [width, height] //windowSize; 
}

export default useScreenSize;