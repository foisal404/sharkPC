import { Outlet } from "react-router-dom";
import Navhead from "../shared/Navhead";
import Footer from "../shared/Footer";

const Main = () => {
    return (
        <div>
            <Navhead/>
            <section>
                <Outlet/>
            </section>
            <Footer/>
        </div>
    );
};

export default Main;