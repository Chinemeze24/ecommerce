import { Outlet, Link } from "react-router-dom";

const Layout = () =>{
    return(
        <>

            <div>
            <Link to="/"></Link>
            <Link to="/checkout"></Link>
            <Link to="/success"></Link>
            <Link to="/login"></Link>
            <Link to="/signup"></Link>
            <Link to="/product"></Link>
            </div>

            <Outlet />
        </>
    )
}

export default Layout;