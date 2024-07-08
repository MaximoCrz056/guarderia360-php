import { useState } from 'react';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';
import logo from '../../images/LOGOFINAL.png';

export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <div className="min-vh-100 bg-light">
            <nav className="bg-white border-bottom border-light">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center" style={{ height: '8rem' }}>
                        <div className="d-flex align-items-center">
                            <div className="me-4">
                                <Link href="/">
                                    <img src={logo} alt="Logo" className="img-fluid" style={{ width: '4rem' }} />
                                </Link>
                            </div>
                            <div className="d-none d-sm-flex gap-3">
                                <NavLink href={route('dashboard')} active={route().current('dashboard')}>
                                    Perfil
                                </NavLink>
                                <NavLink href={route('personal')} active={route().current('personal')}>
                                    Personal
                                </NavLink>
                                <NavLink href={route('infantes')} active={route().current('infantes')}>
                                    Infantes
                                </NavLink>
                                <NavLink href={route('servicios')} active={route().current('servicios')}>
                                    Servicios
                                </NavLink>
                                <NavLink href={route('avisos')} active={route().current('avisos')}>
                                    Avisos
                                </NavLink>
                            </div>
                        </div>

                        <div className="d-none d-sm-flex align-items-center">
                            <div className="ms-3 position-relative">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="d-inline-flex rounded">
                                            <button
                                                type="button"
                                                className="btn btn-link text-secondary p-0 d-flex align-items-center"
                                            >
                                                {user.name}
                                                <svg
                                                    className="ms-2"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    width="1rem"
                                                    height="1rem"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link href={route('profile.edit')}>Perfil</Dropdown.Link>
                                        <Dropdown.Link href={route('logout')} method="post" as="button">
                                            Salir
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>

                        <div className="d-sm-none">
                            <button
                                onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                                className="btn btn-link text-secondary p-2"
                            >
                                <svg className="bi bi-list" width="1.5rem" height="1.5rem" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fillRule="evenodd"
                                        d={showingNavigationDropdown ? 'M5.646 5.646a.5.5 0 0 1 .708 0L10 9.293l3.646-3.647a.5.5 0 0 1 .708.708L10.707 10l3.647 3.646a.5.5 0 0 1-.708.708L10 10.707l-3.646 3.647a.5.5 0 0 1-.708-.708L9.293 10 5.646 6.354a.5.5 0 0 1 0-.708z' : 'M3.5 12a.5.5 0 0 1 0-1h13a.5.5 0 0 1 0 1h-13zM3.5 8a.5.5 0 0 1 0-1h13a.5.5 0 0 1 0 1h-13zM3.5 4a.5.5 0 0 1 0-1h13a.5.5 0 0 1 0 1h-13z'}
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className={showingNavigationDropdown ? 'd-block' : 'd-none'}>
                    <div className="pt-2 pb-3">
                        <ResponsiveNavLink href={route('dashboard')} active={route().current('dashboard')}>
                            Perfil
                        </ResponsiveNavLink>
                        <ResponsiveNavLink href={route('personal')} active={route().current('personal')}>
                            Personal
                        </ResponsiveNavLink>
                        <ResponsiveNavLink href={route('infantes')} active={route().current('infantes')}>
                            Infantes
                        </ResponsiveNavLink>
                        <ResponsiveNavLink href={route('servicios')} active={route().current('servicios')}>
                            Servicios
                        </ResponsiveNavLink>
                        <ResponsiveNavLink href={route('avisos')} active={route().current('avisos')}>
                            Avisos
                        </ResponsiveNavLink>
                    </div>

                    <div className="pt-4 pb-1 border-top border-light">
                        <div className="px-4">
                            <div className="fw-medium text-dark">{user.name}</div>
                            <div className="text-muted">{user.email}</div>
                        </div>

                        <div className="mt-3">
                            <ResponsiveNavLink href={route('profile.edit')}>Perfil</ResponsiveNavLink>
                            <ResponsiveNavLink method="post" href={route('logout')} as="button">
                                Salir
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>

            {header && (
                <header className="bg-white shadow-sm">
                    <div className="container py-3">{header}</div>
                </header>
            )}

            <main>{children}</main>
        </div>
    );
}
