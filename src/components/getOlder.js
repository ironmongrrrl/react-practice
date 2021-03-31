import React, { useState } from "react";

const GetOlder = () => {
  const [age, setAge] = useState(32);

  const getOlderFunc = () => {
    const newAge = age + 1;
    setAge(newAge);
  };
  return (
    <div>
      <h1>Get Older</h1>
      <p>Today I am {age} years old</p>
      <button onClick={getOlderFunc}>Get older</button>
    </div>
  );
};

export default GetOlder;
