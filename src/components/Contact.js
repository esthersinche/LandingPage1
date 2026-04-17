function Contact() {
    return (
        <section id="contact" className="py-5 bg-black text-white">
            <div className="container">
                <h2 className="mb-4">Contact</h2>

                <p>
                    ¿Tienes un proyecto en mente? Contactame y trabajemos juntos!
                </p>

                <ul className="list-unstyled">
                    <li className="mb-2">
                        Email: { }
                        <a
                            href="mailto:[esther.sinche@outlook.com]?subject=Contact%20from%20Portfolio"
                            className="text-decoration-none"
                        >
                            esther.sinche@outlook.com
                        </a>
                    </li>
                    <li className="mb-2">
                        GitHub: {" "}
                        <a
                            href="https://github.com/esthersinche"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-decoration-none"
                        >
                            esthersinche
                        </a>
                    </li>
                    <li>
                        LinkedIn:{" "}
                        <a
                            href="https://linkedin.com/in/esther-sinche-jamjachi-63a602176"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-decoration-none"
                        >
                            Esther Sinche Jamjachi
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Contact;