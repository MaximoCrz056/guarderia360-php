import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import FooterIndex from "@/Components/FooterIndex";

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-dark leading-tight">
                    Bienvenido: {auth.user.name}
                </h2>
            }
        >
            <Head title="Perfil" />

            <div className="py-5">
                <div className="container">
                    <div className="bg-success overflow-hidden shadow-sm rounded">
                        <div className="p-4 text-dark">Feed!</div>

                        <ol className="border-start border-dark">
                            <li className="mb-4 ms-3">
                                <div className="position-absolute bg-dark rounded-circle mt-2 ms-n2 border border-white" style={{ width: "12px", height: "12px" }}></div>
                                <time className="mb-1 text-muted d-block">February 2022</time>
                                <h3 className="fs-5 text-dark">Application UI code in Tailwind CSS</h3>
                                <p className="text-muted">
                                    Get access to over 20+ pages including a
                                    dashboard layout, charts, kanban board,
                                    calendar, and pre-order E-commerce &
                                    Marketing pages.
                                </p>
                                <a
                                    href="#"
                                    className="btn btn-outline-secondary btn-sm"
                                >
                                    Learn more{" "}
                                    <svg
                                        className="bi bi-arrow-right ms-1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10.854 4.146a.5.5 0 0 1 .708.708L8.707 8l2.855 2.854a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5z"
                                        />
                                    </svg>
                                </a>
                            </li>
                            <li className="mb-4 ms-3">
                                <div className="position-absolute bg-dark rounded-circle mt-2 ms-n2 border border-white" style={{ width: "12px", height: "12px" }}></div>
                                <time className="mb-1 text-muted d-block">March 2022</time>
                                <h3 className="fs-5 text-dark">Marketing UI design in Figma</h3>
                                <p className="text-muted">
                                    All of the pages and components are first
                                    designed in Figma and we keep a parity
                                    between the two versions even as we update
                                    the project.
                                </p>
                            </li>
                            <li className="ms-3">
                                <div className="position-absolute bg-dark rounded-circle mt-2 ms-n2 border border-white" style={{ width: "12px", height: "12px" }}></div>
                                <time className="mb-1 text-muted d-block">April 2022</time>
                                <h3 className="fs-5 text-dark">E-Commerce UI code in Tailwind CSS</h3>
                                <p className="text-muted">
                                    Get started with dozens of web components
                                    and interactive elements built on top of
                                    Tailwind CSS.
                                </p>
                            </li>
                        </ol>

                        <div className="accordion accordion-flush" id="accordionFlushExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingOne">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseOne"
                                        aria-expanded="false"
                                        aria-controls="flush-collapseOne"
                                    >
                                        Accordion Item #1
                                    </button>
                                </h2>
                                <div
                                    id="flush-collapseOne"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="flush-headingOne"
                                    data-bs-parent="#accordionFlushExample"
                                >
                                    <div className="accordion-body">
                                        Placeholder content for this accordion,
                                        which is intended to demonstrate the{" "}
                                        <code>.accordion-flush</code> class.
                                        This is the first item's accordion body.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingTwo">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseTwo"
                                        aria-expanded="false"
                                        aria-controls="flush-collapseTwo"
                                    >
                                        Accordion Item #2
                                    </button>
                                </h2>
                                <div
                                    id="flush-collapseTwo"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="flush-headingTwo"
                                    data-bs-parent="#accordionFlushExample"
                                >
                                    <div className="accordion-body">
                                        Placeholder content for this accordion,
                                        which is intended to demonstrate the{" "}
                                        <code>.accordion-flush</code> class.
                                        This is the second item's accordion
                                        body. Let's imagine this being filled
                                        with some actual content.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingThree">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseThree"
                                        aria-expanded="false"
                                        aria-controls="flush-collapseThree"
                                    >
                                        Accordion Item #3
                                    </button>
                                </h2>
                                <div
                                    id="flush-collapseThree"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="flush-headingThree"
                                    data-bs-parent="#accordionFlushExample"
                                >
                                    <div className="accordion-body">
                                        Placeholder content for this accordion,
                                        which is intended to demonstrate the{" "}
                                        <code>.accordion-flush</code> class.
                                        This is the third item's accordion body.
                                        Nothing more exciting happening here in
                                        terms of content, but just filling up
                                        the space to make it look, at least at
                                        first glance, a bit more representative
                                        of how this would look in a real-world
                                        application.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <FooterIndex />
        </AuthenticatedLayout>
    );
}
