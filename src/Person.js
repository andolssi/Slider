import React from "react";
import { FaQuoteRight } from "react-icons/fa";

const Person = ({ people, i }) => {
  return (
    <>
      {people.map((person, index) => {
        const { id, image, name, title, quote } = person;

        let position = "nextSlide";
        if (index === i) {
          position = "activeSlide";
        }
        if (index === i - 1 || (i === 0 && index === people.length - 1)) {
          position = "lastSlide";
        }
        return (
          <article key={id} className={position}>
            <img src={image} alt={name} className="person-img" />
            <h4>{name}</h4>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon" />
          </article>
        );
      })}
    </>
  );
};

export default Person;
