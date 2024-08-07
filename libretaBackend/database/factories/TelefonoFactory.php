<?php

namespace Database\Factories;

use App\Models\Telefono;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Telefono>
 */
class TelefonoFactory extends Factory
{
    protected $model = Telefono::class;

    public function definition(): array
    {
        return [
            'contacto_id' => \App\Models\Contacto::factory(),
            'numero' => $this->faker->phoneNumber,
        ];
    }
}
