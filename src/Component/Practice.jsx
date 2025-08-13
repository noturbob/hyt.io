import style from "../Style/practice.module.css";
import { useState } from "react";

function LoginBtn() {
const [text, setText] = useState("Login");

const handleClick = () => {
    setText("Loading...");
}
return(
    <button className={style.LoginBtn} onClick={handleClick}>
        {text}
    </button>
);
}

export default function Login(){
    return(
    <div className={style.mainContainer}>
        <div className={style.loginForm}>
            <h1 className={style.loginTitle}>Login</h1>
            <div className={style.email}>
                <p className={style.emailText}>Username</p>
                <input className={style.emailInput} type="text" />
            </div>

            <div className={style.password}>
                <p className={style.passwordText}>Password</p>
                <input className={style.passwordInput} type="password" />
            </div>
            <div className={style.btnContainer}>
                <LoginBtn />
            </div>
        </div>
    </div>
    );
}