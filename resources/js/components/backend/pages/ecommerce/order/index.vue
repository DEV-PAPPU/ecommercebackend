<template>
    <div class="container">
        <!-- Loading Amimation -->
         <template class="bg-red" v-if="Loading">
            <content-loading/>
        </template>
        <!-- Content -->
        <div v-else class="card">
            <div class="card-header">All orders</div>
            <div class="card-body">
                <div class="card-body">
                    <table class="table">
                        <thead>
                            <tr>
                                <!-- <th style="width: 100px"> Id </th> -->
                                <th> #Order </th>
                                <!-- <th> Date </th> -->
                                <th> Email </th>
                                <th> Subtotal </th>
                                <th> Status </th>
                                <th style="width: 170px"> Action </th>
                            </tr>
                        </thead>
                        <tbody v-if="orders">
                            <tr v-for="order in orders.data" :key="order.id">
                                <td>#{{ order.tracking }} </td>
                               <!-- <td> {{ order.created_at | dateformat }} </td> -->
                                <td> {{ order.email }} </td>
                                <td>{{ order.subtotal | currency }} </td>
                               
                                <td>
                                    <span class="badge badge-primary">{{order.status}}</span>
                                </td>

                                <!-- <td> {{ order.create_at }} </td> -->
                                <td style="width: 170px" class="flex gap-3">
                                    <router-link :to="{name: 'order-edit', params: {id: order.id}}"
                                        class="btn btn-primary btn-sm">View</router-link>

                                     <button @click="orderdelete(order)" class="btn btn-info btn-sm">Delete</button>
                                </td>
                            </tr>
                        <tfoot class="absolute">
                            <pagination :data="orders" @pagination-change-page="loadorders"></pagination>

                        </tfoot>
                        </tbody>
                        <tbody v-else>
                            <tr>
                                <td colspan="4">
                                    <h5 class="text-center mt-4 mb-4">No Orders found.</h5>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return {
           orders: {},
        }
    },
    methods: {

         // Our method to GET results from a Laravel endpoint
        loadorders(page = 1) {
            axios.get('/api/order?page=' + page)
                .then(response => {
                    this.orders = response.data;
                });
        },


        orderdelete(order){

             Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                if (result.isConfirmed) {

                axios.post(`/api/delete-order/${order.id}`).then(() =>{
                this.loadorders();
                });
                   Swal.fire(
                    'Deleted!',
                    'order Deleted Success.',
                    'success'
                    )
                }
            })
        }

    },
    mounted() {
        // Fetch initial orders
        this.loadorders();
    }
}
</script>

