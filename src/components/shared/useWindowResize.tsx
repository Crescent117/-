import { useEffect } from "react";

const useWindowResize = (handleResize: () => void): void => {
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    // 초기 상태 설정
    handleResize();
    return () => {
      // cleanup
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);
};

export default useWindowResize;
