// Ce composant est utilisé pour afficher la liste des tâches.

import { TaskItem } from "../taskItem/taskItem";
import styles from "./TaskList.module.css";

export const TaskList = ({
  tasksListP,
  incompletedTasksP,
  editTaskP,
  deleteTaskP,
}) => {
  const tasksListMappe = tasksListP.map((task) => (
    <TaskItem
      key={task.id}
      task={task}
      editTaskP={editTaskP}
      deleteTaskP={deleteTaskP}
    />
  ));

  return (
    <div className="box">
      <h2 className={styles.title}>
        Il te reste encore {incompletedTasksP} tâches à accomplir
      </h2>
      {tasksListP && tasksListP.length > 0 && (
        <ul className={styles.container}>{tasksListMappe}</ul>
      )}
    </div>
  );
};
