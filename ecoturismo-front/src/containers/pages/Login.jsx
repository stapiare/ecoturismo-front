import LoginForm from "../../components/LoginForm";
import "./../../css/Login.css"
const Login = () => {
    return (
        <main className="login mx-auto row text-white">
            <section className="col  d-flex justify-content-end">
                <h1 id="bienvenida" className="m-0">Reserva <span style={{ color: '#f3b945', fontSize: '70px' }}>fácil </span> y mantente al tanto del estado y disponibilidad de cada equipo de nuestro COL de Ecoturismo</h1>
            </section>
            <section className="col  d-flex justify-content-start">
                <LoginForm />
            </section>
        </main>
    )
}
export default Login;