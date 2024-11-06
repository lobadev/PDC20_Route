import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import UserProfilePage from './Profile/UserProfilePage.jsx'
import MainEvent from './Events/MainEvent.jsx'
import ToDoList from './ToDoList/Todolist.jsx'
import Routing from './components/Router.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <UserProfilePage/> */}
    {/* <MainEvent/> */}
    {/* <ToDoList/>  */}
    <Routing/>

    
  </StrictMode>,
)
