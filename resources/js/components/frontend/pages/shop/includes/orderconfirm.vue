<template>
    <div class="container">
        <div class="row justify-content-center mt-10">
            <div class="modal-content">
            <div class="modal-body ">
                <div class="text-right"> <i class="fa fa-close close" data-dismiss="modal"></i> </div>
                <div class="px-4 py-5">
                    <h5 class="text-uppercase">Hi {{order[0].first_name}}</h5>
                    <h4 class="mt-5 theme-color mb-5">Thanks for your order. <span class="font-weight-bold"> Tracking Id #{{order[0].tracking}}</span></h4> <span class="theme-color">Payment Summary</span>
                    <div class="mb-3">
                        <hr class="new1">
                    </div>
                    <div class="d-flex justify-content-between"> <span class="font-weight-bold">Subtotal</span> <span class="text-muted">${{order[0].subtotal}}.00</span> </div>
                    <div class="d-flex justify-content-between"> <small>Shipping</small> <small>$10.00</small> </div>
                    <div class="d-flex justify-content-between"> <small>Tax</small> <small>$2.00</small> </div>
                    <div class="d-flex justify-content-between mt-3"> <span class="font-weight-bold">Total</span> <span class="font-weight-bold theme-color">${{order.subtotal + tax}}</span> </div>
                    <div class="text-center mt-5"> <button class="btn btn-primary">Track your order</button> </div>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
    export default {

        data(){
           return{
               order: {},
               orderItems: '',
               tax: 12,
           }
        },

    methods: {
         loadorder(){
            axios.get('/api/order-confirm',{
            headers:{
                authorization: 'Bearer' + localStorage.getItem('token')
            }
        }).then(response => {
                this.order = response.data.order;
                this.orderItems = response.data.orderitems;
                console.log(order);
            });
        }
    },

     computed:{

            orderinfo(){
                return this.order;
            }

        },

        mounted() {
            this.loadorder();
        }

    }
</script>
