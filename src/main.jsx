import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from './Layouts/MainLayout.jsx';
import TermsAndConditions from './components/Terms&Conditions.jsx';
import ErrorPage from './Pages/ErrorPage.jsx';
import HomePage from './Pages/Home/HomePage.jsx';
import AddTasks from './Pages/Tasks/AddTasks.jsx';
import TaskDetails from './Pages/Tasks/TaskDetails.jsx';
import UpdateTask from './Pages/Tasks/updateTask.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        loader: ()=> fetch('http://localhost:3000/tasks'),
        Component: HomePage
      },
      {
        path: "/addTask",
        Component: AddTasks
      },
      {
        path: "/taskDetails/:id",
        Component: TaskDetails
      },
      {
        path: "/updateTask/:id",
        loader: ({params})=> fetch(`http://localhost:3000/tasks/${params.id}`),
        Component: UpdateTask
      },
      {
        path:"/t&q",
        Component: TermsAndConditions
      }
    ]
  },
  {
    path: "/*",
    Component: ErrorPage
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
