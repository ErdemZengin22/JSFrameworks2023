import React, { useState } from 'react';

const AccordionSection = ({ isOpen }) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(isOpen);

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  return (
    <>
      <div className={`title ${isAccordionOpen ? 'active' : ''}`} onClick={toggleAccordion}>
        <i className="dropdown icon"></i>
        What is React in simple terms?
      </div>
      <div className={`content ${isAccordionOpen ? 'active' : ''}`}>
        <p className={`transition ${isAccordionOpen ? 'visible' : 'hidden'}`}>
          The Best Guide to Know What Is React [Updated] React is a JavaScript-based
          UI development library. Facebook and an open-source developer community run
          it. Although React is a library rather than a language, it is widely used in
          web development. The library first appeared in May 2013 and is now one of
          the most commonly used frontend libraries for web development.
        </p>
      </div>
    </>
  );
};

export default AccordionSection;