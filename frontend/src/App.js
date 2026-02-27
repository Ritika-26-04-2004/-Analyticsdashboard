import { useEffect, useState } from "react";
import API from "./services/api";
import Charts from "./components/Charts";
import Filters from "./components/Filters";

function App() {
  const [category, setCategory] = useState([]);
  const [monthly, setMonthly] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      API.get("/sales/category"),
      API.get("/sales/monthly")
    ]).then(([cat, mon]) => {
      setCategory(cat.data);
      setMonthly(mon.data);
      setLoading(false);
    });
  }, []);

  if (loading) return <h2>Loading...</h2>;

  return (
    <div style={{ width: "80%", margin: "auto" }}>
     
      <Charts category={category} monthly={monthly} />
    </div>
  );
}

export default App;