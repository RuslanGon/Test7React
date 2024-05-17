
import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
// import { incrementTimer } from "../redux/timer/timerSlice";

const NotFoundPage = () => {

const [timer, setTimer] = useState(0)

// const dispatch = useDispatch();
// const timer = useSelector(selectTimer)
// dispatch(incrementTimer())


useEffect(() => {
  const intervaId = setInterval(() => {
    setTimer(prevTimer => prevTimer + 1)
  },1000)
  return () => clearInterval(intervaId)
}, [])


if(timer === 5) {
  return <Navigate to='/' replace />
}

  return (
    <div>
      <h2>Page you visited is not page! sorry</h2>
      <h3>you well be redirected to home in {5-timer} seconds</h3>
      <Link to="/">Go Home</Link>
    </div>
  );
};

export default NotFoundPage;
