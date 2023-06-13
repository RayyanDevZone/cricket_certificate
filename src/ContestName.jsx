import React, { useState, useEffect } from "react";
import "./App.css";

function ContestName() {
  const [data, setData] = useState([]);
  const key = "3b90956a-cdaa-4f2e-8823-f28bc3eb7e88";

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    fetch(
      "https://api.cricapi.com/v1/currentMatches?apikey=3b90956a-cdaa-4f2e-8823-f28bc3eb7e88&offset=0"
    )
      .then((res) => res.json())
      .then((res) => {
        setData(res.data);
      });
  }

  return (
    <div className="main">
     <h1 id="heading">CRICKET CERTIFICATE</h1>
     <hr/>
      {data.map((item, id) => (
        <div key={id} className="boxnp">
          <p className="list-name">Contest Name: {item.name}</p>
          <p className="list-type">Competition: {item.matchType}</p>
          <p className="list-place">Venue: {item.venue}</p>
          <p className="list-date">Date: {item.date}</p>
          <p className="list-team">{item.teams[0]} vs {item.teams[1]}</p>
          <p className="list-result">RESULT : {item.status}</p>
        </div>
      ))}
    </div>
  );
}

export default ContestName;
