import React, { useState, useEffect } from "react";

// Use the function keyword or arrow function syntax and start component name with a capital letter
function ToDo() {
  const [action, setAction] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/COMMENTS");
      const data = await res.json();
      setAction(data);
    } catch (error) {
      console.log(error, error.message);
    }
  };

  return (
    <div>
      <h1>Comments</h1>
      {action.map((task) => (
        <div key={task.id}>
          <h3>{task.body}</h3>
          <h4>{task.email}</h4>
        </div>
      ))}
    </div>
  );
}

export default ToDo;

