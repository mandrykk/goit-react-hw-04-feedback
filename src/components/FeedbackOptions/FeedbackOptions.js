import React from "react";
import PropTypes from 'prop-types';
import styles from "./FeedbackOptions.module.css";

export default function FeedbackOptions ({ options, onLeaveFeedback }) {
  return (
     <div className={styles.btn}>
      {options.map(option => (
        <button
          className = {styles.buttons}
          key={option}
          name={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};