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
import { ThemeProvider } from './Provider/ThemeProvider.jsx';
import MyProfile from './Pages/Auth/MyProfile.jsx';
import AboutUs from './components/AboutUs.jsx';
import Support from './components/Support.jsx';
import FindFreelancer from './components/FindFreelancer.jsx';
import ContactUs from './components/ContactUs.jsx';
import DashBoardLayout from './Layouts/DashBoardLayout.jsx';
import Dashboard from './Pages/Tasks/Dashboard.jsx';

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
        path: "/t&q",
        Component: TermsAndConditions
      },
      {
        path: "/aboutUs",
        Component: AboutUs
      },
      {
        path: "/support",
        Component: Support
      },
      {
        path: "/freelancers",
        Component: FindFreelancer
      },
      {
        path: "/contact",
        Component: ContactUs
      }
    ]
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><DashBoardLayout/></PrivateRoute>,
    children: [
      {
        path: "/dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
      },
      {
        path: "/dashboard/MyProfile",
        element: <PrivateRoute><MyProfile></MyProfile></PrivateRoute>
      },
      {
        path: "/dashboard/addTask",
        element: <PrivateRoute><AddTasks></AddTasks></PrivateRoute>
      },
      {
        path: "/dashboard/postedTask",
        element: <PrivateRoute><MyTasks></MyTasks></PrivateRoute>
      },
      {
        path: "/dashboard/updateTask/:id",
        loader: ({ params }) => fetch(`https://assignment10-server-silk.vercel.app/tasks/${params.id}`),
        element: <PrivateRoute><UpdateTask></UpdateTask></PrivateRoute>
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
