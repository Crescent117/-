"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const useWindowResize = (handleResize) => {
    (0, react_1.useEffect)(() => {
        window.addEventListener("resize", handleResize);
        // 초기 상태 설정
        handleResize();
        return () => {
            // cleanup
            window.removeEventListener("resize", handleResize);
        };
    }, [handleResize]);
};
exports.default = useWindowResize;
//# sourceMappingURL=useWindowResize.js.map