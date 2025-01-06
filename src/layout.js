import { Outlet } from "react-router-dom"
import Menu from "./components/menu"
import Footer from "./components/footer"

function Layout() {
    return(
        <>
            <Menu />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Layout