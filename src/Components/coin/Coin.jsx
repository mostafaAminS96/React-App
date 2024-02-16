import { useState } from "react";
import styles from "./Coin.module.css";

const coinMan =
  "https://catalog.usmint.gov/dw/image/v2/AARB_PRD/on/demandware.static/-/Sites-usm-master-catalog-us/default/dwdc0f02ef/images/hi-res/coin-programs/American-Eagle/24ea_a.jpg?sw=480&sh=420";
const coinEagle =
  "https://catalog.usmint.gov/dw/image/v2/AARB_PRD/on/demandware.static/-/Sites-usm-master-catalog-us/default/dw5ef15762/images/hi-res/coin-programs/American-Eagle/24ea_b.jpg?sw=480&sh=420";

function Flip() {
  const [flip, setFlip] = useState(0);
  const [total, settotal] = useState(0);
  const [time, setTimes] = useState(0);

  function flipIt() {
    setFlip(() => {
      let newdata = Math.round(Math.random());
      console.log(newdata);
      newdata ? setTimes(time + 1) : setTimes(time);
      return newdata;
    });
   
    settotal(total + 1);
  }

  return (
    <div className={styles.coinDiv}>
      {flip && <img className={styles.flipping} src={coinMan} alt="" />}
      {!flip && <img className={styles.flipping} src={coinEagle} alt="" />}
      <button onClick={flipIt}  className={styles.button}>Flip</button>
      <div>
            <div>{total} Times</div>
            <div>{time} Man</div>
            <div>{total - time} Eagle</div>
          
      </div>
    </div>
  );
}

export default Flip;
