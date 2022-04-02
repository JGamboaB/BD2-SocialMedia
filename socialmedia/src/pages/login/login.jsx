import "./login.css"    

export default function Login(){
    return  (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Facebook Pirata</h3>
                    <span className="loginDesc"> 
                    Haz amigos con Facebook Pirata. 
                    </span>
                </div>
                <div className="loginRight">
                    <div className="loginbox">
                        <input placeholder="Email"className="loginInput"/>
                        <input placeholder="Password"className="loginInput"/>
                        <button className="loginButton">Iniciar sesion</button>
                        <span className="loginForgot">Olvidé contraseña</span>
                        <button className="loginRegisterButton">
                            Crear cuenta
                        </button>
                    </div>
                </div> 
            </div>
        </div>
    );
}