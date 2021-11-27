<template>
    <div class="container">
        <!-- Loading Amimation -->
         <template v-if="Loading">
            <content-loading/>
        </template>
        <!-- Content -->
        <div v-else class="card">
            <div class="card-header">All Products Lists</div>
            <div class="card-body">
                <div class="card-body">
                    <table class="table">
                        <thead>
                            <tr>
                                <!-- <th style="width: 100px"> Id </th> -->
                                <th> Title </th>
                                <th> Price </th>
                                <th> Category </th>
                                <th> Status </th>
                                <!-- <th> Date </th> -->
                                <th style="width: 170px"> Action </th>
                            </tr>
                        </thead>
                        <tbody v-if="products.length">
                            <tr v-for="product in products" :key="product.id">
                                <td> {{ product.title }} </td>
                                <td> {{ product.price }} </td>
                                <td> {{ product.category.name }} </td>
                                <td>
                                    <span v-if="product.status == 0" class="badge badge-success">Publish</span>
                                    <span v-else class="badge badge-warning">Draft</span>
                                </td>
                                <!-- <td> {{ product.create_at }} </td> -->
                                <td style="width: 170px">
                                    <router-link :to="{name: 'product-edit', params: {id: product.id}}"
                                        class="btn btn-primary btn-sm">Edit</router-link>
                                    <a @click.prevent="DeleteProduct(product)" href="#"
                                        class="btn btn-danger btn-sm">Delete</a>
                                </td>
                            </tr>
                        </tbody>
                        <tbody v-else >
                            <tr>
                                <td colspan="4">
                                    <h5 class="text-center mt-4 mb-4">No Product found. </h5>
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
export default {
    data: () => ({
       products: []
      }),
    methods: {

        loadProduct(){
            axios.get('/api/product').then(res => {
                this.products = res.data;
                console.log(res)
            });
        },

        DeleteProduct(product){

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

                axios.delete(`/api/product/${product.id}`)
                 let index = this. products.indexOf(product);
                this.products.splice(index, 1);

                   Swal.fire(
                    'Deleted!',
                    'Product Deleted.',
                    'success'
                    )
                }
            })
        }
    },
    mounted() {
        this.loadProduct();
    }
}
</script>

