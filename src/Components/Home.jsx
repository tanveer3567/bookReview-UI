import { useContext } from "react";
import { GlobalContext } from "./GlobalContext";
import Greeting from "./Greeting";
import Login from "./Login";

const Home = () => {

    const [globalState,] = useContext(GlobalContext);

    return (<div>
        {
            (globalState.isLoggedIn) ? <Greeting greeter={globalState.globalName} /> :
                <div>
                    <Login />
                </div>
        }
    </div>);
}

export default Home;