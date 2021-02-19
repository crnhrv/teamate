import { useState, useEffect } from 'react';
import { TEAS } from '../constants/teas';

export const useFilter = (def = 'black') => {
  const [teaData, setTeaData] = useState([]);
  const [filter, setFilter] = useState(def);

  useEffect(() => {
    const teas = Object.values(TEAS).filter((tea) => tea.type === filter);
    setTeaData(teas);
  }, [filter]);

  return { teaData, filter, setFilter };
};
