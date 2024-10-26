import { useState } from "react";

export const useToggle = () => {
  const [isToggled, setIsToggled] = useState<boolean>(false);

  const handleClose = () => setIsToggled(false);
  const handleOpen = () => setIsToggled(true);
  const toggleFn = () => setIsToggled((prev) => !prev);

  return { handleClose, handleOpen, toggleFn, isToggled };
};
