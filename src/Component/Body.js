import { useEffect, useState, useCallback } from "react";

function Body() {
  const [profile, setProfile] = useState([]);
  const [numberOfProfile, setNumberOfProfile] = useState("");
  const [error, setError] = useState("");



  const generateProfile = useCallback(async (count) => {
    try {
      setError("");
      const ran = Math.floor(1 + Math.random() * 10000);

      const response = await fetch(
        `https://api.github.com/users?since=${ran}&per_page=${count}`
      );

      if (!response.ok) {
        if (response.status === 403) {
          throw new Error(
            "API rate limit exceeded. GitHub allows only 60 requests/hour for free users."
          );
        }
        throw new Error(`HTTP Error: ${response.status}`);
      }

      const data = await response.json();
      setProfile(data);
    } catch (err) {
      console.error("Fetch error:", err);
      setError(err.message);
    }
  }, []);



  useEffect(() => {
    generateProfile(15);
  }, [generateProfile]);



  return (
    <div className="search-container">
      {error && <p className="error">{error}</p>}

      <input type="text"className="search-input"placeholder="Enter total number of profiles"value={numberOfProfile}onChange={(e) => setNumberOfProfile(e.target.value)}/>

      <button className="search-btn"onClick={() => generateProfile(Number(numberOfProfile) || 15)}>Get Profile</button>

      <div className="profiles">
        {profile.map((user) => (
          <div key={user.id} className="cards">
            <img src={user.avatar_url} alt={user.login} />
            <h2>{user.login}</h2>
            <a href={user.html_url} target="_blank" rel="noreferrer">Visit Profile</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Body;
