import React from 'react';
import styles from './SignButton.module.css';

const UserButton = ({ disabled, onSubmit, onMove, texts }) => {
  return (
    <div className={styles.container}>
      <button className={styles.button} disabled={disabled} onClick={onSubmit}>
        {texts[0]}
      </button>
      <button className={styles.button} onClick={onMove}>
        {texts[1]}
      </button>
    </div>
  );
};

export default UserButton;
