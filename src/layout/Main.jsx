import { Outlet } from "react-router-dom";
import Navhead from "../shared/Navhead";

const Main = () => {
    return (
        <div>
            <Navhead/>
            <section>
                <Outlet/>
            </section>
        </div>
    );
};

export default Main;