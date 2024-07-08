import { Head } from "@inertiajs/react";
import FooterIndex from "@/Components/FooterIndex";
import NavHome from "@/Components/NavHome";

export default function WelcomeServicios() {
    return (
        <>
            <Head title="Servicios" />
            <div class="container-fluid">
                <header class="mt-5 fixed-top py-1">
                    <NavHome></NavHome>
                </header>

                <main class="mt-5 py-5 mx-auto">
                    
                </main>

                <FooterIndex />
            </div>
        </>
    );
}
