import { Navigate, createBrowserRouter } from "react-router-dom"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Users from "./pages/Users"
import NotFound from "./pages/NotFound"
import DefaultLayout from "./components/DefaultLayout"
import GuestLayout from "./components/GuestLayout"
import Dashboard from "./pages/Dashboard"


const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: "/",
                element: <Navigate to="/users" />
            },
            {
                path: "/users",
                element: <Users />
            },
            {
                path: "/dashboard",
                element: <Dashboard />
            }
        ]
    },
    {
        path: '/',
        element: <GuestLayout />,
        children: [

            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup />
            },
        ]
    },
    
    
    {
        path: "*",
        element: <NotFound />
    }
])
export default router