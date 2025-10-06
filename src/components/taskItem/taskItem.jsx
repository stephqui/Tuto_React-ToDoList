/* eslint-disable react/no-unescaped-entities */
// Ce comimport styles from "./TaskInput.module.css"

import styles from "./TaskItem.module.css";

export const TaskItem = () => {
  return (
    <li className={`${styles.container} ${styles.default}`}>
      <div className={styles.item}>
        <div className={`${styles.id} ${styles.idDefault}`}>1</div>
        <div className={styles.contentDefault}>Ranger le bureau !</div>
      </div>
      <button className="button-primary">X</button>
    </li>
  );
};
