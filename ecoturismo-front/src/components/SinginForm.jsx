import './../css/Login.css'
const SinginForm = () => {
    return (
        <form className="formulario text-center" action="">
            <h2 className="formulario-h2">Registro</h2>
            <div className="form-group">
                <input type="text" className="formulario-input my-2" placeholder="Nombre" aria-describedby="nameHelp" />
            </div>
            <div className="form-group">
                <input type="email" className="formulario-input" placeholder="Correo" aria-describedby="emailHelp" />
            </div>
            <div className="form-group">
                <input type="password" className="formulario-input" placeholder="Contraseña" aria-describedby="emailHelp" />
            </div>
            <div>
                <button type="submit" className="botoncito">Registrarse</button>
            </div>

        </form>
    )
}
export default SinginForm