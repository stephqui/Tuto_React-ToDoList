// Ce composant est utilisé pour afficher le champ de saisie de tâche.
import { useState } from "react";
import styles from "./TaskInput.module.css";

export const TaskInput = ({ addATask }) => {
  const [taskTitle, setTaskTitle] = useState("");

  const handleInputChange = (e) => {
    setTaskTitle(e.target.value);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (taskTitle.trim()) {
      addATask(taskTitle);
      setTaskTitle("");
    }
  };

  return (
    <div className={`box ${styles.element}`}>
      <h2 className={styles.title}>Ajoute ta prochaine tache</h2>
      <form className={styles.container} onSubmit={handleAddTask}>
        <input
          type="text"
          className={styles.input}
          placeholder="Indiquez un titre de tâche explicite"
          onChange={handleInputChange}
          value={taskTitle} //pour vider le champ après envoi
        />
        <button className="button-primary" type="submit">
          Ajouter
        </button>
      </form>
    </div>
  );
};
