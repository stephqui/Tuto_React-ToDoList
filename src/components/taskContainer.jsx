import { useState } from "react";
import { Footer } from "./footer/footer";
import { Header } from "./header/header";
import { TaskInput } from "./taskInput/taskInput";
import { TaskList } from "./taskList/taskList";

// Ce composant est utilisé pour afficher l'intégralité de la fonctionalité de Tache.
export const TaskContainer = () => {
  const [taskList, setTaskList] = useState([
    /*{
      id: 1,
      title: "Faire la vaisselle",
      completed: false,
    },
    {
      id: 2,
      title: "Sortir le chien",
      completed: true,
    },
    {
      id: 3,
      title: "Sortir le chien",
      completed: true,
    },*/
  ]);

  console.log("taskList : >> ", taskList);

  const addTask = (titleToAdd) => {
    const newTask = {
      id: taskList.length + 1,
      title: titleToAdd,
      completed: false,
    };
    setTaskList([...taskList, newTask]);
  };

  return (
    <main>
      <Header />
      <TaskInput addATask={addTask} />
      <TaskList />
      <Footer />
    </main>
  );
};
