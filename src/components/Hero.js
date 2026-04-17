function Hero() {
    return (
        <section className="vh-100 d-flex align-items-center text-white bg-dark">
            <div className="container text-center">
                <h1 className="display-2 fw-bold">
                    Hola, soy <span style={{ color: "#ff2e63" }}>Esther</span>
                </h1>

                <p className="lead mt-3">
                    Estudiante de Ingeniería de Software ✦ React ✦ Angular ✦ UI/UX
                </p>

                <p style={{ color: "#ff4d6d" }}>
                    Me gusta crear frontend llamativo y dinámico ;)
                </p>

                <a href="#projects" className="btn btn-outline-light mt-4">
                    Conocer más
                </a>
            </div>
        </section>
    );
}

export default Hero;