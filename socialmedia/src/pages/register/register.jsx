import "./register.css"    

export default function Register(){
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
                        <input placeholder="Nombre Completo"className="loginInput"/>
                        <input placeholder="Email"className="loginInput"/>
                        <input placeholder="Password"className="loginInput"/>
                        <input placeholder="Password Again"className="loginInput"/>
                        <button className="loginButton">Registrarte</button>
                        <button className="loginRegisterButton">
                            Iniciar sesion
                        </button>
                    </div>
                </div> 
            </div>
        </div>
    );
}