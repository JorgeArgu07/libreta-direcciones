<?php

namespace App\Http\Controllers;

use App\Models\Contacto;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ContactoController extends Controller
{
    public function index(){
        return Contacto::with(['telefonos', 'emails', 'direcciones'])->get();
    }

    public function store(Request $request){
        $request->validate([
            'nombre' => 'required|string|max:255',
            'telefonos' => 'required|array',
            'telefonos.*.numero' => 'required|string',
            'emails' => 'required|array',
            'emails.*.email' => 'required|email',
            'direcciones' => 'required|array',
            'direcciones.*.direccion' => 'required|string',
        ]);

        $contacto = Contacto::create($request->only('nombre'));

        $contacto->telefonos()->createMany($request->telefonos);
        $contacto->emails()->createMany($request->emails);
        $contacto->direcciones()->createMany($request->direcciones);

        return response()->json($contacto->load(['telefonos', 'emails', 'direcciones']), 201);
    }

    public function show($id){
        return Contacto::with(['telefonos', 'emails', 'direcciones'])->findOrFail($id);
    }

    public function update(Request $request, $id){
        $request->validate([
            'nombre' => 'required|string|max:255',
            'telefonos' => 'required|array',
            'telefonos.*.numero' => 'required|string',
            'emails' => 'required|array',
            'emails.*.email' => 'required|email',
            'direcciones' => 'required|array',
            'direcciones.*.direccion' => 'required|string',
        ]);

        $contacto = Contacto::findOrFail($id);
        $contacto->update($request->only('nombre'));

        $contacto->telefonos()->delete();
        $contacto->emails()->delete();
        $contacto->direcciones()->delete();

        $contacto->telefonos()->createMany($request->telefonos);
        $contacto->emails()->createMany($request->emails);
        $contacto->direcciones()->createMany($request->direcciones);

        return response()->json($contacto->load(['telefonos', 'emails', 'direcciones']), 200);
    }

    public function destroy($id){
        $contacto = Contacto::findOrFail($id);
        $contacto->delete();

        return response()->json(null, 204);
    }
}
