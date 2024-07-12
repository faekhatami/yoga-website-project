import React, { useState, useEffect } from "react";

const ApiData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
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

    fetchData();
  }, []);

  return (
    <div id="data-container">
      {loading ? (
        <p>Loading...</p>
      ) : (
        data.map((item) => (
          <div key={item.id} className="data-item">
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default ApiData;
