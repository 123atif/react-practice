import React, { createContext } from 'react';

interface CounterProvideProps {
  children: React.ReactNode;
}

const Counter = createContext<number>(0);

const CounterProvider: React.FC<CounterProvideProps> = ({ children }) => {
  return (
    <Counter.Provider value={0}>
      {children}
    </Counter.Provider>
  );
};

export default CounterProvider;
