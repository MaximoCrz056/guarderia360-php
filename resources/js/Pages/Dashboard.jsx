import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import FooterIndex from "@/Components/FooterIndex";

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Bienvenido: {auth.user.name}
                </h2>
            }
        >
            <Head title="Perfil" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-green-300 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">Feed!</div>

                        <ol class="relative border-s border-gray-200 dark:border-gray-700">
                            <li class="mb-10 ms-4">
                                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                    February 2022
                                </time>
                                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                                    Application UI code in Tailwind CSS
                                </h3>
                                <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                    Get access to over 20+ pages including a
                                    dashboard layout, charts, kanban board,
                                    calendar, and pre-order E-commerce &
                                    Marketing pages.
                                </p>
                                <a
                                    href="#"
                                    class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                                >
                                    Learn more{" "}
                                    <svg
                                        class="w-3 h-3 ms-2 rtl:rotate-180"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 14 10"
                                    >
                                        <path
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M1 5h12m0 0L9 1m4 4L9 9"
                                        />
                                    </svg>
                                </a>
                            </li>
                            <li class="mb-10 ms-4">
                                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                    March 2022
                                </time>
                                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                                    Marketing UI design in Figma
                                </h3>
                                <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                                    All of the pages and components are first
                                    designed in Figma and we keep a parity
                                    between the two versions even as we update
                                    the project.
                                </p>
                            </li>
                            <li class="ms-4">
                                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                    April 2022
                                </time>
                                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                                    E-Commerce UI code in Tailwind CSS
                                </h3>
                                <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                                    Get started with dozens of web components
                                    and interactive elements built on top of
                                    Tailwind CSS.
                                </p>
                            </li>
                        </ol>

                        <div
                            class="accordion accordion-flush"
                            id="accordionFlushExample"
                        >
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button
                                        class="accordion-button collapsed"
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
                                    class="accordion-collapse collapse"
                                    data-bs-parent="#accordionFlushExample"
                                >
                                    <div class="accordion-body">
                                        Placeholder content for this accordion,
                                        which is intended to demonstrate the{" "}
                                        <code>.accordion-flush</code> class.
                                        This is the first item's accordion body.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button
                                        class="accordion-button collapsed"
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
                                    class="accordion-collapse collapse"
                                    data-bs-parent="#accordionFlushExample"
                                >
                                    <div class="accordion-body">
                                        Placeholder content for this accordion,
                                        which is intended to demonstrate the{" "}
                                        <code>.accordion-flush</code> class.
                                        This is the second item's accordion
                                        body. Let's imagine this being filled
                                        with some actual content.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button
                                        class="accordion-button collapsed"
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
                                    class="accordion-collapse collapse"
                                    data-bs-parent="#accordionFlushExample"
                                >
                                    <div class="accordion-body">
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
