import { Head } from '@inertiajs/react';
import NavHome from '@/Components/NavHome';
import CarouselHome from '@/Components/CarouselHome';
import arte from '../../images/arte.jpeg'
import alimentaction from '../../images/alimentacion.jpg'
import danza from '../../images/danza.jpg'
import dorm from '../../images/dormitorios.jpg'
import higiene from '../../images/higiene.jpg'
import inter from '../../images/interaccion.jpg'
import juegos from '../../images/juegos.jpg'
import music from '../../images/musica.jpg'
import banner from '../../images/banner.jpg'
import FooterIndex from '@/Components/FooterIndex';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document.getElementById('screenshot-container')?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document.getElementById('docs-card-content')?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>
            <Head title="Bienvenido" />
            
            <div
                class="mt-5 container"
            >
                <div className="relative min-h-screen flex flex-col items-center justify-center my-36 lg:my-20 selection:bg-[#FF2D20] selection:text-white">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                        <header className="grid grid-cols-2 items-center gap-2 py-1 lg:grid-cols-3">
                            <NavHome></NavHome>
                        </header>

                        <main className="mt-5">
                            <CarouselHome></CarouselHome>

                            <h1 class="text-center text-5xl font-bold my-12">Servicios</h1>

                            <div class="container-fluid text-center my-12">
                                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 my-3">
                                    <div class="col mt-3">
                                        <div class="card w-100 h-32">
                                            <div
                                                class="card"
                                            >
                                                <img
                                                    src={arte}
                                                    class="card-img-top"
                                                    alt="..."
                                                />
                                                <div class="card-body">
                                                    <p class="card-text">
                                                        Some quick example text
                                                        to build on the card
                                                        title and make up the
                                                        bulk of the card's
                                                        content.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col mt-3">
                                    <div class="card w-100 h-32">
                                            <div
                                                class="card"
                                            >
                                                <img
                                                    src={alimentaction}
                                                    class="card-img-top"
                                                    alt="..."
                                                />
                                                <div class="card-body">
                                                    <p class="card-text">
                                                        Some quick example text
                                                        to build on the card
                                                        title and make up the
                                                        bulk of the card's
                                                        content.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col mt-3">
                                    <div class="card w-100 h-32">
                                            <div
                                                class="card"
                                            >
                                                <img
                                                    src={danza}
                                                    class="card-img-top"
                                                    alt="..."
                                                />
                                                <div class="card-body">
                                                    <p class="card-text">
                                                        Some quick example text
                                                        to build on the card
                                                        title and make up the
                                                        bulk of the card's
                                                        content.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="container-fluid text-center my-12">
                                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 my-3">
                                    <div class="col mt-3">
                                        <div class="card w-100 h-32">
                                            <div
                                                class="card"
                                            >
                                                <img
                                                    src={dorm}
                                                    class="card-img-top"
                                                    alt="..."
                                                />
                                                <div class="card-body">
                                                    <p class="card-text">
                                                        Some quick example text
                                                        to build on the card
                                                        title and make up the
                                                        bulk of the card's
                                                        content.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col mt-3">
                                    <div class="card w-100 h-32">
                                            <div
                                                class="card"
                                            >
                                                <img
                                                    src={higiene}
                                                    class="card-img-top"
                                                    alt="..."
                                                />
                                                <div class="card-body">
                                                    <p class="card-text">
                                                        Some quick example text
                                                        to build on the card
                                                        title and make up the
                                                        bulk of the card's
                                                        content.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col mt-3">
                                    <div class="card w-100 h-32">
                                            <div
                                                class="card"
                                            >
                                                <img
                                                    src={inter}
                                                    class="card-img-top"
                                                    alt="..."
                                                />
                                                <div class="card-body">
                                                    <p class="card-text">
                                                        Some quick example text
                                                        to build on the card
                                                        title and make up the
                                                        bulk of the card's
                                                        content.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="container-fluid text-center my-12">
                                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 my-3">
                                    <div class="col mt-3">
                                        <div class="card w-100 h-32">
                                            <div
                                                class="card"
                                            >
                                                <img
                                                    src={juegos}
                                                    class="card-img-top"
                                                    alt="..."
                                                />
                                                <div class="card-body">
                                                    <p class="card-text">
                                                        Some quick example text
                                                        to build on the card
                                                        title and make up the
                                                        bulk of the card's
                                                        content.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col mt-3">
                                    <div class="card w-100 h-32">
                                            <div
                                                class="card"
                                            >
                                                <img
                                                    src={music}
                                                    class="card-img-top"
                                                    alt="..."
                                                />
                                                <div class="card-body">
                                                    <p class="card-text">
                                                        Some quick example text
                                                        to build on the card
                                                        title and make up the
                                                        bulk of the card's
                                                        content.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col mt-3">
                                    <div class="card w-100 h-32">
                                            <div
                                                class="card"
                                            >
                                                <img
                                                    src={banner}
                                                    class="card-img-top"
                                                    alt="..."
                                                />
                                                <div class="card-body">
                                                    <p class="card-text">
                                                        Some quick example text
                                                        to build on the card
                                                        title and make up the
                                                        bulk of the card's
                                                        content.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
            <FooterIndex/>
        </>
    );
}
