import Card from "../../Card/Card";
import CoinsList from "../../CoinsList/CoinsList";
import FilterBlock from "../../FilterBlock/FilterBlock";
import styles from "./styles.module.css";

const Main = ({ balance, setBalance, coins, filteredCoins, setCoins }) => {
  return (
    <main className={styles.main}>
      <Card balance={balance} setBalance={setBalance} />
      <FilterBlock setCoins={setCoins} coins={coins} />
      {coins.length > 0 ? (
        <CoinsList coins={filteredCoins} />
      ) : (
        <div>Loading...</div>
      )}
    </main>
  );
};

export default Main;
