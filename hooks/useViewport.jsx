import React from "react";

export const useCheckViewport = (viewport) => {
  const [isValid, setIsValid] = React.useState(false);

  React.useEffect(() => {
    setIsValid(window.innerWidth <= viewport);
    const handleWindowResize = () => setIsValid(window.innerWidth <= viewport);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, [viewport]);

  return { isValid };
};
