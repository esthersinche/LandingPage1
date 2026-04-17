function Projects() {
    return (
        <section id="projects" className="py-5 bg-dark text-white">
            <div className="container">
                <h2 className="mb-5">Projects</h2>

                <div className="row g-4">

                    <div className="col-md-4">
                        <div className="card bg-black text-white border-secondary">
                            <div className="card-body">
                                <h5 className="card-title">React Landing Page</h5>
                                <p className="card-text">
                                    Una moderna y bonita landing page construida con React y Bootstrap.
                                </p>
                                <p className="text-secondary">
                                    pista: ya estás aquí ;)
                                </p>
                                <a href="[link]" className="btn btn-outline-light btn-sm">
                                    View
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card bg-black text-white border-secondary">
                            <div className="card-body">
                                <h5 className="card-title">Mobile App</h5>
                                <p className="card-text">
                                    Una app simple construida con React Native
                                </p>
                                <p className="text-secondary">
                                    Cuando esté lista la pondré aquí :D
                                </p>
                                <a href="[link]" className="btn btn-outline-light btn-sm">
                                    View
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card bg-black text-white border-secondary">
                            <div className="card-body">
                                <h5 className="card-title">Tu proximo proyecto</h5>
                                <p className="card-text">
                                    Así como lees, tu proximo proyecto podría estar aquí si me contratas!
                                </p>
                                <p className="text-secondary">
                                    contratenme, es más yo les pago :'v
                                </p>
                                <a href="[link]" className="btn btn-outline-light btn-sm">
                                    View
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Projects;