import { useEffect, useRef } from "react";

const RefExaple = () => {
  
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus()
  };

  useEffect(() => {
    if(inputRef.current === null)return
    inputRef.current.focus() 
  }, [])


  return (
    <div>
      <button onClick={handleClick}>Click to do</button>
      <input ref={inputRef} type="text" placeholder="enter smth" />
      
    </div>
  );
};

export default RefExaple;