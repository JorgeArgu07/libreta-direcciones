<?php

namespace Database\Seeders;
use App\Models\{Contacto, Telefono, Email, Direccion};

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ContactosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Contacto::factory()
            ->count(5000)
            ->hasTelefonos(2)  // Ajusta el número de teléfonos por contacto
            ->hasEmails(2)     // Ajusta el número de emails por contacto
            ->hasDirecciones(2) // Ajusta el número de direcciones por contacto
            ->create();
    }
}
