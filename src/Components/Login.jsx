import { useState } from "react";
import "../Css/Login.css";
import { useContext } from "react";
import { GlobalContext } from "./GlobalContext";

const Login = () => {

    const [globalState, setGlobalState] = useContext(GlobalContext);

    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    });

    const [credValidations, setCredValidation] = useState({
        usernameError: "",
        passwordError: "",
        invalidCreds: false
    })

    const handleChange = (e) => {
        e.preventDefault();
        console.log(e.target.name, e.target.value);
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (credentials.username === "tanveer3567" && credentials.password === "tanveer1$") {
            setGlobalState({
                ...globalState,
                isLoggedIn: true,
                globalName: credentials.username
            })
            setCredValidation({
                ...credValidations,
                invalidCreds: false
            })
        } else {
            setCredValidation({
                ...credValidations,
                invalidCreds: true
            })
        }
    };

    return (
        <div>
            <p className="Title">Login</p>
            <form className="Form" onSubmit={handleSubmit}>
                <table cellSpacing="2">
                    <tbody>
                        <tr>
                            <td><label>Username:</label></td>
                            <td><input type="text" name="username" value={credentials.username} onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <td><label>Password</label></td>
                            <td><input type="password" name="password" value={credentials.password} onChange={handleChange} /></td>
                        </tr>
                        <tr><td className="submit"><input type="submit" value="Submit" /></td></tr>
                    </tbody>
                </table>
            </form>
        </div>);
}

export default Login;