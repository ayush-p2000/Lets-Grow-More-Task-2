import "./App.css";
import React, { useState } from "react";

function App() {
  const [users, setUsers] = useState();
  const getUsers = async () => {
    const response = await fetch("https://reqres.in/api/users?");
    const data = await response.json();
    setUsers(data.data);
  };

  return (
      <>
      
      <header className="main">
        <nav>
        <h1>LGMVIP - Web TASK 2</h1>
          <div className="btn" onClick={getUsers}>
            GET USERS
          </div>
        </nav>
      </header>
      <div className="row">
        {users?.map((current, index) => {
          return (
            <div className="card column" key={index}>
              <img src={current.avatar} className="card-img-top" alt="..." />
              <div className="card-body">
                <h3 className="card-title">
                  {current.first_name} {current.last_name}
                </h3>
                <h4 className="card-text">{current.email}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default App;
