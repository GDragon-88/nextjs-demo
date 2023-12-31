import { DependencyList, useMemo } from 'react'

function throttle<Args extends unknown[]>(fn: (...args: Args) => void, cooldown: number) {
   let lastArgs: Args | undefined;
 
   const run = () => {
     if (lastArgs) {
       fn(...lastArgs);
       lastArgs = undefined;
     }
   };
 
   const throttled = (...args: Args) => {
     const isOnCooldown = !!lastArgs;
 
     lastArgs = args;
 
     if (isOnCooldown) {
       return;
     }
 
     window.setTimeout(run, cooldown);
   };
 
   return throttled;
 }

 function useThrottle<Args extends unknown[]>(
   cb: (...args: Args) => void,
   cooldown: number,
   deps: DependencyList,
 ) {
   return useMemo(() => throttle(cb, cooldown), [cb,cooldown]);
 }

export default useThrottle;
