function Footer() {
    return (
        <footer className="bg-dark text-center text-white py-3 border-top border-secondary">
            <p className="mb-0">
                © {new Date().getFullYear()} Str.dev — Todos los derechos reservados
            </p>
        </footer>
    );
}

export default Footer;