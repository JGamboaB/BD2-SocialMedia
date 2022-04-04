import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Facebook Pirata</h3>
          <span className="loginDesc">
            Haz amigos con la nueva red social!
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Email" className="loginInput" />
            <input type="password" input placeholder="Password" className="loginInput" />
            <button className="loginButton">Iniciar Sesion</button>
            <button className="loginRegisterButton">
              Crear cuenta nueva
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}