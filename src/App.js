import React, { useState } from "react";
import data from "./data";

function App() {
  const [num, setNum] = useState(1);
  const [paras, setParas] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    let number = parseInt(num);

    if (num <= 10) {
      setParas(data.slice(0, number));
    }

    if (num > 10 && num <= 20) {
      number = number - 10;
      setParas(data.concat(data.slice(0, number)));
    }
  };
  return (
    <section>
      <div className="title">
        <h2>Hipster Lorem Generator</h2>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="num">Number of paragraphs:</label>
        <input
          type="number"
          name="num"
          id="num"
          value={num}
          onChange={(e) => setNum(e.target.value)}
          min="1"
          max="20"
        />
        <button className="btn" type="submit">
          Generate
        </button>
      </form>
      <article>
        {paras.map((para, index) => {
          return <p key={index}>{para}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
