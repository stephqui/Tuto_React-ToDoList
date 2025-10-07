import { useState } from "react";
import { Footer } from "./footer/footer";
import { Header } from "./header/header";
import { TaskInput } from "./taskInput/taskInput";
import { TaskList } from "./taskList/taskList";

// Ce composant est utilisé pour afficher l'intégralité de la fonctionalité de Tache.
export const TaskContainer = () => {
  const [tasksList, setTasksList] = useState([]);

  const addTask = (titleToAdd) => {
    const newTask = {
      id: tasksList.length ? tasksList[tasksList.length - 1].id + 1 : 1,
      title: titleToAdd,
      completed: false,
    };
    setTasksList([...tasksList, newTask]);
  };

  const editTask = (id, completedValue) => {
    setTasksList(
      tasksList.map((task) =>
        task.id === id ? { ...task, completed: completedValue } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasksList(tasksList.filter((task) => task.id !== id));
  };

  //Tableau contenant les taches effectuées
  const getTaskCounts = () => {
    const completedTasks = tasksList.filter((task) => task.completed).length;
    const incompletedTasks = tasksList.length - completedTasks;
    return {
      completedTasks,
      incompletedTasks,
    };
  };

  const { completedTasks, incompletedTasks } = getTaskCounts();

  return (
    <main>
      <Header />
      <TaskInput addATask={addTask} />
      <TaskList
        tasksListP={tasksList}
        editTaskP={editTask}
        deleteTaskP={deleteTask}
        incompletedTasksP={incompletedTasks}
      />
      <Footer completedTasksP={completedTasks} />
    </main>
  );
};
