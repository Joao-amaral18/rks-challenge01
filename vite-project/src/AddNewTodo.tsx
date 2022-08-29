import { PlusCircle } from "phosphor-react";
import { Key, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./AddNewTodo.css";
import ToDo from "./ToDo";

function AddNewTodo() {

  const [task, setTask]: any[] = useState([])
  const [newTask, setNewTask]: any[] = useState('')

  function handleCreateNewTodo() {
    event?.preventDefault();
    setTask([
      ...task,
      {
        id: uuidv4(),
        isFinished: false,
        title: newTask,
      },
    ]);
    setNewTask('')
  }
  console.log(task)
  function handleNewTaskChange($event: any){
    setNewTask($event?.target.value)
  }
  return (
    <>
    <form onSubmit={handleCreateNewTodo} className="newTaskForm">
      <input name="content" value={newTask} onChange={handleNewTaskChange} type="text" />
      <button>
        Criar <PlusCircle size={16} />
      </button>
    </form>
    <div>
     {task.map((val: { id: Key | null | undefined; title: any; })=> (
      <ToDo
        key={val.id}
        title={val.title}
      />
    ))}
    </div>
    </>
  );
}

export default AddNewTodo;
