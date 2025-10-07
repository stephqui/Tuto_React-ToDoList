/* eslint-disable react/no-unescaped-entities */
// Ce composant est utilisé pour afficher le champ de saisie de tâche.

import styles from "./Footer.module.css";

export const Footer = ({ completedTasksP }) => {
  if (completedTasksP) {
    return (
      <footer>
        <code className={styles.footer}>
          Avec taskFlow, tu as éliminé {completedTasksP} tâche
          {completedTasksP > 1 ? "s" : ""} !
        </code>
      </footer>
    );
  }

  return null;
};
