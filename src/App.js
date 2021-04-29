import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import Person from "./Person";
import data from "./data";
function App() {
  const [people, setPeople] = useState([]);
  const [i, setI] = useState(0);

  useEffect(() => {
    setPeople(data);
  }, []);
  useEffect(() => {
    const lastindex = people.length;
    if (i < 0) {
      setI(lastindex - 1);
    } else if (i > lastindex - 1) {
      setI(0);
    }
  }, [i, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setI(i + 1);
    }, 3000);
    return () => {
      clearInterval(slider);
    };
  }, [i]);

  return (
    <section className="section">
      <div className="title">
        <h1>
          <span>/</span>reviews
        </h1>
      </div>
      <div className="section-center">
        <Person people={people} i={i} />
        <button className="prev" onClick={() => setI(i - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setI(i + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
