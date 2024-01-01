import Header from "./components/Header/Header";
import React, { useEffect, useState } from "react";
import Main from "./components/Pages/Main/Main";
import { getCoins } from "./api/api";

function App() {
  const [balance, setBalance] = useState(60000);
  const [coins, setCoins] = useState([]);
  const [filteredCoins, setFilteredCoins] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCoins();
      setCoins(data.coins);
      setFilteredCoins(data.coins);
    };
    fetchData();
  }, []);
  console.log(coins);

  return (
    <React.Fragment>
      <Header />
      <Main
        filteredCoins={filteredCoins}
        setCoins={setFilteredCoins}
        coins={coins}
        balance={balance}
        setBalance={setBalance}
      />
    </React.Fragment>
  );
}

export default App;
