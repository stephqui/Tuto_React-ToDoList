/* eslint-disable react/no-unescaped-entities */
// Ce comimport styles from "./TaskInput.module.css"

import styles from "./TaskItem.module.css";

export const TaskItem = ({ task, editTaskP, deleteTaskP }) => {
  return (
    <li
      className={`${styles.container} ${
        task?.completed ? styles.success : styles.default
      }`}
      onClick={() => editTaskP(task.id, !task.completed)}
    >
      <div className={styles.item}>
        <div
          className={`${styles.id} ${
            task?.completed ? styles.idSuccess : styles.idDefault
          }`}
        >
          {task.id}
        </div>
        <div
          className={
            task?.completed ? styles.contentSuccess : styles.contentDefault
          }
        >
          {task.title}
        </div>
      </div>
      <button className="button-primary">X</button>
    </li>
  );
};
