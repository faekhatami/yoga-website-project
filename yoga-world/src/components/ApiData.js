import React, { useState } from "react";

const ApiData = () => {
  const [data, setData] = useState([]);

  const fetchDataUsingAsyncAwait = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <section id="api-data">
      <h2>Fetched API Data</h2>
      <div id="data-container">
        {data.map((item) => (
          <div key={item.id} className="data-item">
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
      <button id="fetch-data-btn" onClick={fetchDataUsingAsyncAwait}>
        Fetch Data
      </button>
    </section>
  );
};

export default ApiData;
