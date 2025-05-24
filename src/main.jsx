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
import Login from './Pages/Auth/Login.jsx';
import Register from './Pages/Auth/Register.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import AuthLayout from './Pages/Auth/AuthLayout.jsx';
import ForgetPassword from './Pages/Auth/ForgetPassword.jsx'
import PrivateRoute from './Provider/PrivateRoute.jsx';
import BrowseTasks from './Pages/Tasks/BrowseTasks.jsx';
import MyTasks from './Pages/Tasks/MyTasks.jsx';
// <<<<<<< HEAD
import { ThemeProvider } from './Provider/ThemeProvider.jsx';
import MyProfile from './Pages/Auth/MyProfile.jsx';
// =======
// >>>>>>> 39ef2e6651c87e142add5b434abddb22148a58f0

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        loader: () => fetch('https://assignment10-server-silk.vercel.app/tasks'),
        Component: HomePage
      },
      {
        path: "/addTask",
        element: <PrivateRoute><AddTasks></AddTasks></PrivateRoute>
      },
      {
        path: "/browseTask",
        loader: () => fetch('https://assignment10-server-silk.vercel.app/tasks'),
        element: <BrowseTasks></BrowseTasks>
      },
      {
        path: "/taskDetails/:id",
        loader: ({ params }) => fetch(`https://assignment10-server-silk.vercel.app/tasks/${params.id}`),
        element: <PrivateRoute><TaskDetails></TaskDetails></PrivateRoute>
      },
      {
        path: "/updateTask/:id",
        loader: ({ params }) => fetch(`https://assignment10-server-silk.vercel.app/tasks/${params.id}`),
        element: <PrivateRoute><UpdateTask></UpdateTask></PrivateRoute>
      },
      {
        path: "/postedTask",
        element: <PrivateRoute><MyTasks></MyTasks></PrivateRoute>
      },
      {
// <<<<<<< HEAD
        path: "/MyProfile",
        element: <PrivateRoute><MyProfile></MyProfile></PrivateRoute>
      },
      {
// =======
// >>>>>>> 39ef2e6651c87e142add5b434abddb22148a58f0
        path: "/t&q",
        Component: TermsAndConditions
      }
    ]
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/login",
        Component: Login
      },
      {
        path: "/auth/register",
        Component: Register
      },
      {
        path: "/auth/forgetPassword",
        Component: ForgetPassword
      }
    ]
  },
  {
    path: "/*",
    Component: ErrorPage
  }
]);


createRoot(document.getElementById('root')).render(
  <ThemeProvider>
      <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
  </ThemeProvider>

)
