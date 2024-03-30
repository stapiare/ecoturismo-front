const LoginForm = () => {
    return (
        <form className="formulario text-center" action="">
            <h2 className="formulario-h2">Inicio de sesion</h2>
            <div className="form-group">
                <input type="email" className="formulario-input my-2" placeholder="Email" aria-describedby="emailHelp" />
            </div>
            <div className="form-group">
                <input type="password" className="formulario-input" placeholder="Contraseña" aria-describedby="emailHelp" />
            </div>
            <div className="my-5">
                <button type="submit" className="botoncito btn-iniciar-sesion">Iniciar sesión</button>
            </div>
            <div>
                <button type="submit" className="botoncito btn-registrarse">Registrarse</button>
            </div>

        </form>
    )
}
export default LoginForm