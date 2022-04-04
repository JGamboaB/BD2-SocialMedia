import "./register.css"    

export default function Register(){
    return  (
        <div className="register">
            <div className="registerWrapper">
                <div className="registerLeft">
                    <h3 className="registerLogo">Facebook Pirata</h3>
                    <span className="registerDesc"> 
                    Ya casi estás listo 
                    </span>
                </div>
                <div className="registerRight">
                    <div className="registerbox">
                        <input placeholder="Nombre Completo"className="registerInput"/>
                        <input placeholder="Email"className="registerInput"/>
                        <input type="date" input placeholder="Fecha de nacimiento"className="registerInput"/>
                        <input type="password" input placeholder="Password"className="registerInput"/>
                        <input type="password" input placeholder="Password Again"className="registerInput"/>
                        <button className="registerButton">Registrarte</button>
                        <button className="registerRegisterButton">
                            Iniciar sesion
                        </button>
                    </div>
                </div> 
            </div>
        </div>
    );
}