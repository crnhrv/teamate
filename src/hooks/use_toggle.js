import { useState } from 'react';

export const useToggle = (def = false) => {
  const [toggled, setToggled] = useState(def);

  const handleClick = () => {
    setToggled((prev) => !prev);
  };

  return [toggled, handleClick];
};
