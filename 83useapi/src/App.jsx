import { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  // 1. State to store the API data
  const [data, setData] = useState([]);
  // 2. State to handle the loading status
  const [loading, setLoading] = useState(true);

  // 3. useEffect hook to fetch data when the component loads
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetching data from a public API
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const result = await response.json();
        
        setData(result); // Update state with the data
        setLoading(false); // Turn off loading
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []); // [] ensures it only runs once

  return (
    <div className="app-container">
      <header>
        <h1>User Directory</h1>
        <p>Fetching data from JSONPlaceholder API</p>
      </header>

      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
          <p>Loading Users...</p>
        </div>
      ) : (
        <div className="user-grid">
          {data.map(user => (
            <div key={user.id} className="user-card">
              <div className="avatar">
                {user.name.charAt(0)}
              </div>
              <h3>{user.name}</h3>
              <p className="email">{user.email}</p>
              <div className="details">
                <span>📍 {user.address.city}</span>
                <span>🏢 {user.company.name}</span>
              </div>
              <button className="view-btn">View Profile</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
