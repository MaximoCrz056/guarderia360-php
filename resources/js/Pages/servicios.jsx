import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import FooterIndex from "@/Components/FooterIndex";

export default function Servicios({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}
        header={
            <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                Servicios
            </h2>
        }>
            <Head title="Servicios" />

            <div class="table-responsive mx-2 lg:mx-40 my-20">
                <table class="table table-hover table-bordered bg-success table-success">
                    <thead>
                        <tr>
                            <th scope="col">
                                <button class="btn btn-success">
                                    Añadir
                                </button>
                            </th>
                        </tr>
                    </thead>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td colspan="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <FooterIndex />
        </AuthenticatedLayout>
    );
}
