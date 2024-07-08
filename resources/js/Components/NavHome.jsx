import { Link } from "@inertiajs/react";

export default function NavHome(auth) {
    return (
        <nav class="navbar navbar-expand-lg bg-success fixed-top justify-center text-center p-3 mb-5">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    Guarderia Joseph Lancaster
                </a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div
                    class="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul class="navbar-nav mx-5 mb-2 mb-lg-0 justify-content-center">
                        <li class="nav-item">
                            <a
                                class="nav-link mx-5 active"
                                aria-current="page"
                                href="/"
                            >
                                Incio
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mx-5" href="/wservicios">
                                Servicios
                            </a>
                        </li>
                        <li class="nav-item dropdown">
                            <a
                                class="nav-link mx-5 dropdown-toggle"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Sobre Nosotros
                            </a>
                            <ul class="dropdown-menu mx-5">
                                <li>
                                    <a class="dropdown-item" href="#">
                                        Historia
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#">
                                        Vision
                                    </a>
                                </li>
                                <li>
                                    <hr class="dropdown-divider" />
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#">
                                        Conoce la Guarderia
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            {auth.user ? (
                                <Link
                                    href={route("dashboard")}
                                    class="btn btn-dark mt-2"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <Link
                                    href={route("login")}
                                    class="btn btn-dark mt-2"
                                >
                                    Iniciar Sesión
                                </Link>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
