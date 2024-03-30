import SinginForm from "../../components/SinginForm";
const Singin = () => {
    return (
        <main className="login mx-auto row text-white">
            <section className="col  d-flex justify-content-end">
                <h1 id="bienvenida" className="m-0">Reserva <span style={{ color: '#f3b945', fontSize: '70px' }}>fácil </span> y mantente al tanto del estado y disponibilidad de cada equipo de nuestro COL de Ecoturismo</h1>
            </section>
            <section className="col  d-flex justify-content-start">
                <SinginForm />
            </section>
        </main>
    )
}
export default Singin;