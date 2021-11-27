<!-- This example requires Tailwind CSS v2.0+ -->
<template>
    <div class="flex flex-col mx-24 mt-24">
        <!-- Loading Amimation -->
        <template v-if="Loading">
            <content-loading />
        </template>
        <!-- Content -->
        <div v-else class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div v-if="subtotal > 0" class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-50">
                            <tr>
                                <th scope="col"
                                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Name
                                </th>
                                <th scope="col"
                                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Price
                                </th>
                                <th scope="col"
                                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Quantity
                                </th>
                                <th scope="col"
                                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Subtotal
                                </th>

                                <th scope="col"
                                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Action
                                </th>

                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                            <tr v-for="cart in shoppingcart" :key="cart.id">
                                <td class="py-4 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="ml-4">
                                            <div class="text-sm font-medium text-gray-900">
                                                {{ cart.name }}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    $ {{cart.price }}
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="text-md text-left font-semibold flex items-center gap-3">
                                        <div @click="QuantityDecremant(cart.id)">
                                            <a href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                    fill="currentColor"
                                                    class="text-red-500 hover:text-red-300 bi bi-dash-circle"
                                                    viewBox="0 0 16 16">
                                                    <path
                                                        d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                                    <path
                                                        d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                                                </svg>
                                            </a>
                                        </div>
                                        <div>{{ cart.quantity }} </div>
                                        <div @click="QuantityIncremant(cart.id)">
                                            <a href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                    fill="currentColor"
                                                    class="text-blue-500 hover:text-blue-300 bi bi-plus-circle"
                                                    viewBox="0 0 16 16">
                                                    <path
                                                        d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                                    <path
                                                        d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    $ {{ cart.quantity * cart.price }}
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    <a @click.prevent="deletecart(cart.id)" href="#" class="btn btn-danger btn-sm"> <i
                                            class="lar la-minus-square icon"></i>Delete</a>
                                </td>
                            </tr>
                        </tbody>
                        <tfoot class="mx-10">
                            <tr>
                                <td class="p-3">
                                    <strong>Subtotal
                                        {{subtotal}}
                                    </strong>

                                </td>
                                <td colspan="2" class="hidden-xs"></td>
                                <td colspan="1" class="hidden-xs"></td>
                                <td class="pr-10">
                                    <router-link :to="{name: 'checkout'}" v-if="Authenticated == true"
                                        class="btn btn-success btn-block"> Checkout <i class="fa fa-angle-right"></i>
                                    </router-link>

                                    <router-link :to="{name: 'login'}" v-else class="btn btn-success btn-block">
                                        Checkout <i class="fa fa-angle-right"></i></router-link>
                                </td>
                            </tr>
                        </tfoot>

                    </table>
                </div>
            </div>

             <div v-else>
                     No Product In Your Cart!
             </div>
        </div>
    </div>
</template>


<script>
import axios from 'axios';
export default {

    data() {
        return {
            isCart: false,
            shoppingcart:{},
            subtotal:'',
            isActive: false,
        }
    },
    methods: {


        deletecart(id){
            axios.post(`/api/cart/remove/${id}`).then(() =>{
                Toast.fire({
                    icon: 'success',
                    title: 'Product Deleted'
                });
               this.loadCart()
            })
        },


        loadCart(){
            axios.get('/api/cartsitem').then(res =>{
                this.shoppingcart = res.data.carts
                this.subtotal = res.data.total

               if(res.data.total > 0){
                    this.isCart = true
                }
            })
            .catch(e =>{
               this.error = e.response.data
            })
        },
        // loadCart(){
        //     axios.get('/api/cartsdata').then(res =>{
        //         this.shoppingcart = res.data
        //         console.log(res)
        //     })
        //     .catch(e =>{
        //        this.error = e.response.data
        //     })
        // },

        QuantityIncremant(id){

            axios.post(`/api/cart/quantity/increment/${id}`).then(() =>{
               this.loadCart()
            })
        },
        QuantityDecremant(id){

            axios.post(`/api/cart/quantity/decrement/${id}`).then(res =>{

               if(res.data.massage){
                   Toast.fire({
                    icon: 'error',
                    title: 'Minimul One Quantity'
                });
               }
               this.loadCart()
            })
        },
    },
        computed: {
         carts(){
            return this.$store.getters.Get_CART;
           },
       },

       mounted(){
        this.loadCart();
       }

}
</script>


<style scoped>

.customcolor{
    background: brown;
}

.cart-image{
display: block;
  /* margin-left: auto; */
  margin-right: auto;
}



body {
    background-color: #eee;
    font-family: 'Calibri', sans-serif !important
}

.mt-100 {
    margin-top: 100px
}

.card {
    margin-bottom: 30px;
    border: 0;
    -webkit-transition: all .3s ease;
    transition: all .3s ease;
    letter-spacing: .5px;
    border-radius: 8px;
    -webkit-box-shadow: 1px 5px 24px 0 rgba(68, 102, 242, .05);
    box-shadow: 1px 5px 24px 0 rgba(68, 102, 242, .05)
}

.card .card-header {
    background-color: #fff;
    border-bottom: none;
    padding: 24px;
    border-bottom: 1px solid #f6f7fb;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px
}

.card-header:first-child {
    border-radius: calc(.25rem - 1px) calc(.25rem - 1px) 0 0
}

.card .card-body {
    padding: 30px;
    background-color: transparent
}

.btn-primary,
.btn-primary.disabled,
.btn-primary:disabled {
    background-color: #4466f2 !important;
    border-color: #4466f2 !important
}

.btn-primary{
padding: 10px 35px !important;
}

.product-title{
    font-size: 23px;
    font-weight: 800;
}


.product-single {
    justify-content: center !important;
    align-items: center;
}

.text-padding{
    padding: 10px;
font-size: 18px;
font-weight: 500;
}
.quantity{
    width: 48px;
    padding: 2px 8px;
}


.quantity {
    width: 120px;
    background: #f0f0f0;
    padding: 6px 11px 6px 14px;
    border-radius: 0;
    margin-right: 10px;
    align-items: center;
    margin-top: 11px;
}
.quantity-text{
    font-weight: 100 !important;
}
</style>
