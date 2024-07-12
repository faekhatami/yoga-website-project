import React, { useState, useEffect } from "react";

const ApiData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section id="api-data">
      <h2>Fetched API Data</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div id="data-container">
          {data.map((item) => (
            <div key={item.id} className="data-item">
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      )}
      <button onClick={fetchData}>Fetch Data</button>
    </section>
  );
};

export default ApiData;
