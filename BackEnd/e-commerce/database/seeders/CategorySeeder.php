<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        // Create some categories
        Category::create(['name' => 'Category 1', 'slug' => 'slugslugslug', 'image' => 'image_path_here']);
        Category::create(['name' => 'Category 2', 'slug' => 'slugslugslug', 'image' => 'image_path_here']);
        Category::create(['name' => 'Category 3', 'slug' => 'slugslugslug', 'image' => 'image_path_here']);
        Category::create(['name' => 'Category 4', 'slug' => 'slugslugslug', 'image' => 'image_path_here']);
        Category::create(['name' => 'Category 5', 'slug' => 'slugslugslug', 'image' => 'image_path_here']);
        // Add more categories as needed

    }
}