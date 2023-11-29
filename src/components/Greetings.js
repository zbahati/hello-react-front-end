import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreeting } from '../feature/greeting/greetingSlice';

const Greeting = () => {
  const greeting = useSelector((state) => state.greeting.greetings);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  return (
    <div>
      <h1>Greeting </h1>
      <p>{greeting.message}</p>
    </div>
  );
};

export default Greeting;
