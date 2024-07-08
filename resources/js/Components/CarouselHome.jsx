import arte from '../../images/arte.jpeg'
import alimentacion from '../../images/alimentacion.jpg'
import danza from '../../images/danza.jpg'

export default function CarouselHome() {
    return (
        <div id="carouselExampleDark" class="carousel carousel-dark slide">
            <div class="carousel-indicators">
                <button
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to="0"
                    class="active"
                    aria-current="true"
                    aria-label="Slide 1"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                ></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="10000">
                    <img src={arte} class="d-block w-50 mx-auto" alt="arte banner" />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Arte</h5>
                        <p>
                            El arte es parte importante en el desarrollo del pequeño
                        </p>
                    </div>
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                    <img src={alimentacion} class="d-block w-50 mx-auto" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Alimentacion</h5>
                        <p>
                            Una alimentacion adecuada garantiza un crecimiento correcto
                        </p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src={danza} class="d-block w-50 mx-auto" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Danza</h5>
                        <p>
                            El desarrollo motriz ayuda a desarrollas aun mas habilidades
                        </p>
                    </div>
                </div>
            </div>
            <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="prev"
            >
                <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="next"
            >
                <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    );
}
