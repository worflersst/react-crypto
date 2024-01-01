import { withUahBalance } from "../../helpers/HOC/withUahBalance";
import "./styles.css";

const Card = ({ balance, setBalance, uahBalance }) => {
  return (
    <div className="card">
      <div className="card-block">
        <p>CRYPTO-FINANCE</p>
        <button
          onMouseEnter={() => console.log("---ender")}
          onClick={() => setBalance((prev) => prev + 1000)}
        >
          Donation
        </button>
      </div>
      <div className="card-block">
        <p>Korchemnyi Nikita</p>
        <div className="card-block__balance">
          <p>{uahBalance}UAH</p>
          <p>{balance}$</p>
        </div>
      </div>
    </div>
  );
};

export default withUahBalance(Card);
