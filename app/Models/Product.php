<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $guarded = [];

    // protected $fillable = [
    //     'title',
    //     'category_id',
    //    'slug',
    //    'image',
    //    'gallery_images',
    //     'price',
    //    'user_id',
    //     'status',
    //    'short_description',
    //    'description',


    // ];


    // public function setFilenamesAttribute($value)
    // {
    //     $this->attributes['gallery_images'] = json_encode($value);
    // }


    /**
     * Get the user that owns the Product
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function galleryimages()
    {
        return $this->hasMany(ProductGallery::class);
    }


}
