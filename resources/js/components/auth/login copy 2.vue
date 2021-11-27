<template>
  <div id="app">
    <button @click.prevent="checout_confirm">form</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data: function(){
        return {
            billing_address: {
                name: 'pappu',
                email: 'test@gmail.com',
                address: 'dhaka',
                address2: 'dhaka',
                town: 'dhaka',
                state: 'dhaka',
                phone: 4635252525,
                order_notes:'dhaka',
            },
            form:{
                payment_method: 'stripe'
            }
        }
    },

    methods: {

        checout_confirm: function(){
            var stripe = Stripe("pk_test_51ImMYLL8CFL5l5NjFUVCtEZrritkVCduYkv3iXK0RnfxjpSHmo6pu9wMdA7CgBLsy2FEndolqr6n0iCUx6Cy1smn000d51tPbc");
            axios.post("/api/order",this.form)
            .then(function (response) {
                return response.data;
            })
            .then(function (session) {
                // console.log('hi');
                return stripe.redirectToCheckout({ sessionId: session.id });
            })
            .then(function (result) {
                // If redirectToCheckout fails due to a browser or network
                // error, you should display the localized error message to your
                // customer using error.message.
                if (result.error) {
                    alert(result.error.message);
                }
            })
            .catch(function (error) {
                console.error("Error:", error);
            });
        }
    },

}
</script>

<style>
</style>
