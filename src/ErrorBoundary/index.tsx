import React, { useEffect, useState } from 'react';

const ErrorBoundary: React.FC<React.PropsWithChildren<{}>> = ({children}) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const errorListener = (event: ErrorEvent) => {
      setHasError(true);
      console.error("Uncaught error:", event.message);
    };

    window.addEventListener('error', errorListener);

    return () => {
      window.removeEventListener('error', errorListener);
    };
  }, []);

  if (hasError) {
    return <h1>Sorry... there was an error</h1>;
  }

  return <>{children}</>;
};

export default ErrorBoundary;
