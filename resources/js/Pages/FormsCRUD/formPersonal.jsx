import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useState } from 'react';

export default function FormPersonal({ auth }) {
    const [name, setName] = useState('');
    const [middlename, setMiddlename] = useState('');
    const [lastname, setLastname] = useState('');
    const [handle, setHandle] = useState('');
    const [status, setStatus] = useState('');
    const [photo, setPhoto] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('middlename', middlename);
        formData.append('lastname', lastname);
        formData.append('handle', handle);
        formData.append('status', status);
        formData.append('photo', photo);

        try {
            const response = await fetch('/personal/save', {
                method: 'POST',
                body: formData,
                headers: {
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
                },
            });

            if (response.ok) {
                window.location.href = '/personal';
            } else {
                const errorData = await response.json();
                alert('Error al guardar los datos: ' + JSON.stringify(errorData));
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error al enviar el formulario');
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Personal
                </h2>
            }
        >
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="container mt-5">
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            placeholder="Nombre"
                            aria-label="Nombre"
                            aria-describedby="basic-addon1"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            name="middlename"
                            placeholder="Apellido Paterno"
                            aria-label="Apellido Paterno"
                            aria-describedby="basic-addon1"
                            value={middlename}
                            onChange={(e) => setMiddlename(e.target.value)}
                        />
                    </div>
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            name="lastname"
                            placeholder="Apellido Materno"
                            aria-label="Apellido Materno"
                            aria-describedby="basic-addon1"
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}
                        />
                    </div>
                    <div className="input-group mb-3">
                        <select name="handle" id="cargo" className="form-select" value={handle} onChange={(e) => setHandle(e.target.value)}>
                            <option value="" disabled>Seleccione un cargo</option>
                            <option value="Administrador">Administrador</option>
                            <option value="Director">Director</option>
                            <option value="Docente">Docente</option>
                            <option value="Cuidador">Cuidador</option>
                        </select>
                    </div>
                    <div className="input-group mb-3">
                        <select name="status" id="cargo" className="form-select" value={status} onChange={(e) => setStatus(e.target.value)}>
                            <option value="" disabled>Estatus</option>
                            <option value="true">Activo</option>
                            <option value="false">Inactivo</option>
                        </select>
                    </div>
                    <div className="input-group mb-3">
                        <label htmlFor="file" className="form-control">Foto</label>
                        <input
                            type="file"
                            className="form-control"
                            name="photo"
                            id="file"
                            aria-describedby="fileHelp"
                            onChange={(e) => setPhoto(e.target.files[0])}
                        />
                    </div>
                    <button type="submit" className="btn btn-success mt-3">Aceptar</button>
                    <a href="/personal" className="text-white no-underline btn btn-success mt-3 mx-5">Cancelar</a>
                </div>
            </form>
        </AuthenticatedLayout>
    );
}
