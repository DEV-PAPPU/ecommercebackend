<template>
    <div class="mt-3">
        <form >
            <div class="grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 mx-12 gap-10">
                <div class="py-12">
                    <!-- Loading Amimation -->
                    <template v-if="Loading">
                        <content-loading />
                    </template>
                    <!-- Content -->
                    <div v-else class="bg-white shadow-lg rounded-lg">
                        <div class="md:flex ">
                            <div class="w-full p-4 px-5 py-5">
                                <div class="flex flex-row">
                                    <h2 class="text-3xl font-semibold">Athletic</h2>
                                    <h2 class="text-3xl text-green-400 font-semibold">Greens</h2>
                                </div>
                                <div class="flex flex-row pt-2 text-xs pb-2"> <span
                                        class="text-gray-400">Information</span> <small
                                        class="text-gray-400 ml-1">></small>
                                    <span class="font-bold ml-1">Shopping</span> <small
                                        class="text-gray-400 ml-1">></small> <span
                                        class="text-gray-400 ml-1">Payment</span>
                                </div> <span>Customer Information</span>

                                <div class="relative pb-5"> <input type="text" v-model="form.email"
                                        class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                                        :placeholder="AuthUser.email" readonly>
                                </div> <span>Shipping Address</span>
                                <div class="grid md:grid-cols-2 md:gap-2"> <input type="text" v-model="form.first_name"
                                        class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                                        :placeholder="AuthUser.name" readonly>

                                    <div class="number">
                                        <input type="text" v-model="form.phone"
                                            class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                                            placeholder="Phone Number*">
                                        <small v-if="errors.phone"
                                            class="form-text text-danger">{{errors.phone[0]}}</small>
                                    </div>


                                </div>
                                <small v-if="errors.address" class="form-text text-danger">{{errors.address[0]}}</small>
                                <input type="text" v-model="form.address" name="address"
                                    class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                                    placeholder="Address*">

                                <div class="grid md:grid-cols-3 md:gap-2">

                                    <div class="form-group">
                                        <input type="text" v-model="form.zipcode"
                                            class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                                            placeholder="Zipcode*">
                                        <small v-if="errors.zipcode"
                                            class="form-text text-danger">{{errors.zipcode[0]}}</small>
                                    </div>

                                    <div class="form-group">
                                        <input type="text" v-model="form.state"
                                            class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                                            placeholder="state*">
                                        <small v-if="errors.state"
                                            class="form-text text-danger">{{errors.state[0]}}</small>
                                    </div>
                                    <div class="form-group">
                                        <input type="text" v-model="form.city"
                                            class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                                            placeholder="city">
                                        <small v-if="errors.city"
                                            class="form-text text-danger">{{errors.city[0]}}</small>

                                    </div>
                                </div>

                                <div class="form-group">

                                        <input type="text" v-model="form.country"
                                            class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                                            placeholder="Country*">
                                        <small v-if="errors.country"
                                            class="form-text text-danger">{{errors.country[0]}}</small>

                                    </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="cart-content mt-12">
                    <!-- Loading Amimation -->
                    <template v-if="Loading">
                        <content-loading />
                    </template>
                    <!-- Content -->
                    <div v-else class="content px-5 py-12 bg-white shadow-lg rounded-lg">

                        <div class="pb-3 coupon-checkbox" id="coupon-div">
                              <button @click.prevent="CouponApply()" class="h-6 mt-4 px-3 rounded font-medium text-sm bg-blue-500 text-white">Have Any Coupon?</button>

                            <div v-if="isCoupon" class="coupon mt-3 my-2 flex items-center mr-5">
                                    <input type="text" v-model="couponForm.coupon_code" class="form-control text-sm"
                                    placeholder="coupon code">

                                    <button type="submit" @click.prevent="Coupon()"
                            class="ml-5 px-10 h-9 rounded font-medium text-xs bg-blue-500 text-white">Apply</button>
                            </div>
                        </div>

                        <ul v-for="cart in shoppingcart" :key="cart.id">
                            <li class="border-b border-gray-200 pb-1">{{ cart.name }} $
                                {{ cart.quantity * cart.price }}</li>
                        </ul>
                        <div class="total mt-3">
                            <p>Subtotal : $ {{subtotal}}</p>

                            <div v-if="coupon_data" class="coupon-discount mt-3">

                              <p class="my-2">You Get ${{coupon_data.coupon_amount}} Discout</p>

                              <p>Discout subtotal : $ {{fixed_discount_price}}</p>
                            </div>
                        </div>

                        <div class="form-group mt-10">
                            <label for="payment_method">Payment Method</label>
                            <select v-model="form.payment_method" id="payment_method" class="form-control">
                                <option value="" style="display: none" selected>Select Payment Method</option>
                                <option value="cod" selected>Cash on Delivery (COD)
                                </option>
                                <option value="paypal" selected>Paypal
                                </option>
                            </select>
                            <small v-if="errors.payment_method"
                                class="form-text text-danger">{{errors.payment_method[0]}}</small>

                        </div>

                        <button type="submit" @click.prevent="order()"
                            class="h-12 mt-4 w-48 rounded font-medium text-xs bg-blue-500 text-white">Place
                            Order</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
export default {

    data(){
       return{
           form:{
               email: '',
               first_name: '',
            //    last_name: '',
              address: '',
              zipcode: '',
               state: '',
               city: '',
               country: '',
              phone: '',
              discount_price: '',
              payment_method: '',
           },
           errors:'',
           couponForm:{
               coupon_code: ''
           },
           coupon_data:'',
           isCoupon:false,
           shoppingcart:{},
           subtotal:'',
           test:'',
       }
    },

    methods: {

        order() {

                this.form.first_name = this.auth.name;
                this.form.email = this.auth.email;

            axios.post('/api/order', this.form,{
                headers:{
                    authorization: 'Bearer' + localStorage.getItem('token')
                }
                }).then(response => {
                        this.$router.push({name:'order-confirm'});
                    })
                    .catch(e =>{this.errors = e.response.data.errors;});
            },

              CouponApply(){
               this.isCoupon = true
              },

              Coupon(){

                axios.post('/api/coupon/apply', this.couponForm,{
                headers:{
                    authorization: 'Bearer' + localStorage.getItem('token')
                }
                })
                .then(response => {
                        this.coupon_data = response.data.coupon;
                        const massage = response.data.massage;

                        if(response.data.coupon){
                            Toast.fire({
                                icon: 'success',
                                title: massage
                           });

                           this.isCoupon = false
                            document.getElementById("coupon-div").style.display = "none";

                        }
                        else{

                           Toast.fire({
                                icon: 'error',
                                title: massage
                           });

                        }
                    })
              },



        },



        computed:{

            auth(){
                return this.$store.getters.getUser;
            },

            fixed_discount_price(){

                return this.form.discount_price = this.subtotal - this.coupon_data.coupon_amount;
            },

            percentage_discount_price(){

                return this.form.discount_price = this.subtotal - this.coupon_data.coupon_amount;
            },


        },

       mounted(){
           axios.get('/api/cartsitem').then(res =>{
                this.shoppingcart = res.data.carts
                this.subtotal = res.data.total
            })
       }

}
</script>


