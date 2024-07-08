import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import FooterIndex from "@/Components/FooterIndex";

export default function Personal({ auth }) {
    return (
        <AuthenticatedLayout 
        user={auth.user}
        header={
            <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                Personal
            </h2>
        }>
            <Head title="Personal" />

            <div class="table-responsive mx-2 lg:mx-40 my-20">
                <table class="table table-hover table-bordered bg-success table-success">
                    <thead>
                        <tr>
                            <th scope="col">
                                <button class="btn btn-success">
                                    <a href="/formPersonal" style={{color: "white", textDecoration: "none"}}>Añadir</a>
                                </button>
                            </th>
                        </tr>
                    </thead>
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Apellido Paterno</th>
                            <th scope="col">Apellido Materno</th>
                            <th scope="col">Cargo</th>
                            <th scope="col">Estatus</th>
                            <th scope="col">Foto</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Maximo</td>
                            <td>Gomez</td>
                            <td>Cruz</td>
                            <td>Programador</td>
                            <td>Activo</td>
                            <td>Maximo.Gomez.png</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <FooterIndex />
        </AuthenticatedLayout>
    );
}
