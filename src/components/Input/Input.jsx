import React, { forwardRef } from 'react';
import styles from './Input.module.css';

const Input = forwardRef(
  ({ type, content, onChange, placeholder, children }, ref) => {
    return (
      <fieldset className={styles.container}>
        <label className={styles.label} htmlFor={type}>
          {children}
        </label>
        <input
          id={type}
          name={type}
          type={type}
          required
          placeholder={placeholder}
          autoComplete="off"
          onChange={onChange}
          ref={ref}
          className={styles.input}
        />
      </fieldset>
    );
  },
);

export default Input;
