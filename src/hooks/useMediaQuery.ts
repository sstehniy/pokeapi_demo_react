import { useEffect, useState } from 'react';

export const useMediaQuery = (mediaQuery: string): boolean => {
  const [queryMatched, setQueryMatched] = useState(
    !!window.matchMedia(mediaQuery)
  );

  useEffect(() => {
    const mql = window.matchMedia(mediaQuery);

    const sizeChangeHandler = () => setQueryMatched(!!mql.matches);

    mql.addListener(sizeChangeHandler);

    sizeChangeHandler();

    return () => {
      mql.removeListener(sizeChangeHandler);
    };
  }, [mediaQuery]);

  return queryMatched;
};
