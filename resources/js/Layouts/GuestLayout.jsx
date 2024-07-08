import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import logo from '../../images/LOGOFINAL.png';

export default function Guest({ children }) {
    return (
        <div className="min-vh-100 d-flex flex-column justify-content-center align-items-center pt-6 bg-light container">
            <div>
                <a href="/">
                    <img src={logo} alt="Logo" className="img-fluid mb-4" style={{ width: '150px' }} />
                </a>
            </div>

            <div className="w-100 sm:max-w-md mt-6 px-6 py-4 bg-white shadow-sm rounded">
                {children}
            </div>
        </div>
    );
}
