
import React, { useState } from "react";
import data from "./components/data"; 
 

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    let amount = parseInt(count);
    if (amount <= 0) {
      amount = 1;
    }
    if (amount > 6) {
      
      amount = 6;
    }

    setText(data.slice(0, amount));
  };

  return (
    <>
      <section className="section-center">
        <h3>Generate Lorem Ipsum</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            name="amount"
            id="amount"
            value={count}
            onChange={(e) => setCount(parseInt(e.target.value))}
          />
          <button className="btn">Generate</button>
        </form>
        <article>
          {text.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </article>
      </section>
    </>
  );
}

export default App;
