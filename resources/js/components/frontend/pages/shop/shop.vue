<template>
        <div class="shop site-padding">
            <div v-if="products.length" class="grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 gap-10">
                <div v-for="product in products" :key="product.id" class="">

                    <!-- Loading Amimation -->
                    <template v-if="Loading">
                           <content-loading/>
                     </template>

                    <!-- Content -->
                    <div v-else class="my-8">
                        <div
                            class="border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden  shadow-lg hover:shadow-2xl">
                            <img :src="product.image" class="product-image">
                            <div class="p-6">
                                <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-2"></h2>
                                <h1 class="title-font text-lg font-medium text-gray-900 mb-1"> {{product.title}}</h1>

                                <router-link :to="{name: 'product-single', params: {slug: product.slug}}"
                                    class="btn btn-primary btn-block mt-3">View Product</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <tbody v-else>
                 <!-- Loading Amimation -->
                    <template v-if="Loading">
                           <content-loading/>
                     </template>

                <!-- Content -->
                <tr v-else>
                    <td colspan="6">
                        <h5 class="text-center mt-4 mb-4">No product Found.</h5>
                    </td>
                </tr>
            </tbody>
        </div>

</template>

<script>
export default {
    data(){
        return {
            products: [],
        }
    },
    methods: {
        loadproduct(){
            axios.get('/api/shop').then(response => {
                this.products = response.data;
            });
        },
    },

    mounted() {
        this.loadproduct();
    },
}
</script>

