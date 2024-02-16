import { useState } from "react";
import './Collapse.css'
function Accordion() {
  const [isToggle, setIsToggle] = useState(false);
  function show() {
    setIsToggle(!isToggle);
  }
  return (
    <>
      <div className="container">
      <section> <span>Section 1</span> <button onClick={show}>{isToggle ? "-" : "+"}</button></section>
      {isToggle && (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
          assumenda distinctio asperiores doloremque. Possimus facere, magnam
          ratione, fugiat, iste blanditiis voluptatum sit quas corrupti animi
          et? Voluptatibus, animi! Veniam, adipisci.
        </p>
      )}
      </div>
    </>
  );
}

export default Accordion;
