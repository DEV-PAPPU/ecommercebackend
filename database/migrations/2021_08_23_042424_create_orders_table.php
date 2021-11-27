<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->string('user_id');
            $table->string('tracking');
            $table->string('status')->default('processing');
            $table->string('email');
            $table->string('first_name');
            $table->string('last_name');
            $table->string('address');
            $table->string('zipcode');
            $table->string('state');
            $table->string('city');
            $table->string('country');
            $table->string('phone');
            $table->string('subtotal');
            $table->string('discount_price')->nullable();
            $table->string('payment_method');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orders');
    }
}
