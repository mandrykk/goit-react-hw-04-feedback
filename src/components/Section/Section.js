import React from "react";
import PropTypes from "prop-types";
import styles from "./Section.module.css";

export default function Section ({ title, children }) {
    return (
      <div className={styles.container}>
         <h2 className={styles.sectionTitle}>{title}</h2>
         {children}
      </div>
    );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
}