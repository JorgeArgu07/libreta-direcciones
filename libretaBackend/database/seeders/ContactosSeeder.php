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
            ->hasTelefonos(2)
            ->hasEmails(2)
            ->hasDirecciones(2)
            ->create();
    }
}
