<?php

namespace App\Http\Controllers;

use App\Models\Personal;
use Illuminate\Http\Request;

class PersonalController extends Controller
{
    public function index()
    {
        return view('personal');
    }

    public function create()
    {
        return view('personal.create');
    }

    public function save(Request $request)
    {
        $validation = $request->validate([
            'name' => 'required',
            'middlename' => 'required',
            'lastname' => 'required',
            'handle' => 'required',
            'status' => 'required',
            'photo' => 'required',
        ]);

        // Handle file upload
        if ($request->hasFile('photo')) {
            $photoName = time() . '.' . $request->photo->extension();
            $request->photo->move(public_path('images'), $photoName);
            $validation['photo'] = $photoName;
        }

        $data = Personal::create($validation);

        if ($data) {
            session()->flash('success', 'Datos guardados');
            return redirect()->route('personal');
        } else {
            session()->flash('error', 'Datos no guardados');
            return redirect()->route('formPersonal');
        }
    }
}
