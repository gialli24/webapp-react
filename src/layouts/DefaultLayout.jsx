import { Outlet } from "react-router-dom";
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";
import { useGlobalContext } from "../contexts/GlobalContext";
import Loader from "../components/Loader";

export default function DefaultLayout() {

    const { isLoading } = useGlobalContext();

    return (
        <>
            <AppHeader />
            {isLoading && <Loader />}
            <Outlet />
            <AppFooter />
        </>
    )

}