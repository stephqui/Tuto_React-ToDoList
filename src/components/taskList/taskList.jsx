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

  if (tasksListP && tasksListP.length > 0) {
    return (
      <div className="box">
        <h2 className={styles.title}>
          {incompletedTasksP > 0 && (
            <>
              Il te reste encore{" "}
              <span className="important">{incompletedTasksP}</span> tâches à
              accomplir
            </>
          )}

          {incompletedTasksP === 0 && (
            <>Génial, tu as accompli toutes les tâches</>
          )}
        </h2>
        {tasksListP && tasksListP.length > 0 && (
          <ul className={styles.container}>{tasksListMappe}</ul>
        )}
      </div>
    );
  } else
    return (
      <div className="box">
        <h2 className={styles.emptyState}>
          Salut, tu n'as rien à faire. Profite de ton temps libre
        </h2>
      </div>
    );
};
