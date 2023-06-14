import { Navigate, Outlet } from "react-router-dom"
import { useStateContext } from "../context/ContextProvider"

const GuestLayout = () => {
    const {token} = useStateContext();
    if (token) {
        <Navigate to="/" />
    }
    return (

        <div>
            <Outlet />
        </div>
    )
}

export default GuestLayout