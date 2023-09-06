import { useState } from 'react';

export function useCollapse() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return { isCollapsed, toggleCollapse };
}

