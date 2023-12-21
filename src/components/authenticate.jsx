export default function Authenticate({ token }) {
    const [successMessage, setSuccessMessage] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
  
    async function handleClick() {
      try {
        setLoading(true);
        const response = await fetch(
          "https://fsa-jwt-practice.herokuapp.com/authenticate",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const result = await response.json();
        setSuccessMessage(result.message);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
  
    return (
      <div>
        <h2>Authenticate</h2>
        {successMessage && <p>{successMessage}</p>}
        {error && <p>{error}</p>}
        <button onClick={handleClick}>Authenticate Token!</button>
      </div>
    );
  }
  