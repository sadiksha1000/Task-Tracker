// Root Component

import './App.css'
import Header from './components/Header'
import Tasks from './components/Tasks'
import {useState} from 'react'

const App=()=> {
  const[tasks,setTasks]=useState([
    {
      id:1,
      text:'Doctors Appointment',
      day:'4th September at 2:30 P.M',
      reminder:true
    },
    {
      id:2,
      text:'Meeting at School',
      day:'6th September at 9:30 A.M',
      reminder:false
    },
    {
      id:3,
      text:'Grocery Shopping',
      day:'6th September at 5:30 P.M',
      reminder:true
    }
  ])
  // const name='Sadiksha'
  // const x=true

  // Delete Task
  const deleteTask = (id) =>{
    setTasks(tasks.filter((task)=>task.id !==id))
  }

  // Toggle Reminder
  const toggleReminder =(id)=>{
    // setTasks(tasks.map((task)=>task.id===id ? {...task,reminder:!task.reminder} : task))
    console.log('Toggled')
  }
  
  return (
    <div className="container">
      <Header title='Task Tracker'/>
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />):('No Tasks Left. Hurrray!!!')}
      
    </div>
  );
}

// Class based component

// class App extends React.Component{
//   render(){
//     return
//       <h1>Hello from class</h1>
//   }
// }
export default App;
