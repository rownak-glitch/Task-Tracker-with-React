import  React from 'react';
import Header from './components/Header';
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import {useState} from 'react';

function App() {
  const[showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState(
    [{
        id:1,
        text:"CSE220 lab Assignment Submission",
        day:'21st April,2021',
        reminder:true,
    },
    {
        id:2,
        text:'CSE460 Quiz',
        day:'22nd April,2021',
        reminder:true,
    
    
    },
    {
        id:3,
        text:'CSE461 class',
        day:'23rd April,2021',
        reminder:true,
    }
    ]
)



// tasks is the piece of state and setTasks is the function to update the state tasks
// state is immutable it is a one way data and not something you can directly change
//we use setTasks instead we want to add


//AddTask
const addTask= (task)=>{
  const id= Math.floor(Math.random()*10000) +1
  const newTask ={id, ...task}
  setTasks([...tasks,newTask])
}

//Delete task
const deleteTask=(id)=>{
  setTasks(tasks.filter((task)=>task.id!==id))
}

//the delete buttton for a task will be in Task.js which is imported in Tasks.js so we will send props onDelete to Tasks.js
 

//Toggle remainder
const toggleReminder = (id) => {
  setTasks(tasks.map((task)=> task.id=== id ? {...task, reminder:!task.reminder} : task))
}


  return (
    <div className="container">
      <Header title = 'Task Tracker' onAdd = {()=>setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length>0 ?( <Tasks tasks ={tasks} onDelete={deleteTask}  onToggle={toggleReminder} /> ): 'No task available' }
      
  
      
    </div>
  );
}

export default App;
