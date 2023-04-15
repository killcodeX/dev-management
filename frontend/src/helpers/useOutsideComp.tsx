// This hook is isued to find click detection outside the component
import { useEffect } from "react";

export function useOnClickOutside(
  component: React.RefObject<any>,
  handler: () => void
) {
  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (component.current !== null && !component.current.contains(e.target)) {
        handler()
      }
      return
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    };
  }, [component, handler]);
}
