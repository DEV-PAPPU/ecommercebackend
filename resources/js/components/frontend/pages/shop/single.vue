<template>
    <div class="container mt-20">
        <div class="product-single lg:flex md:flex">
                <div class="image w-2/4">

                    <!-- Loading Amimation -->
                    <template v-if="Loading">
                        <LoadingBg :height="270" />
                    </template>

                    <div v-else class="content">

                        <img class="shadow feature-image" :src="imageshow" alt="blog" style="300px !important">

                       <div v-if="Loading" class="mt-5">
                        <LoadingBg :height="60" />
                       </div>
                        <div v-else class="mt-3 flex gap-2">
                            <div v-for="gallery in product.galleryimages" :key="gallery.id"
                                @click.prevent="changimg(gallery.image)" class="cursor-pointer">
                                <img class="object-center shadow product-img rounded timg" :src="gallery.image"
                                    id="timg" alt="blog" style="width:100px">
                            </div>
                        </div>

                    </div>
                </div>


                <div class="content mt-3 ml-10 w-2/4">

                    <template v-if="Loading">
                        <LoadingBg :height="20" />
                    </template>

                    <div v-else class="title mt-8">
                        <h1 class="product-title pb-8">{{ product.title }}</h1>
                    </div>

                    <template v-if="Loading">
                        <LoadingBg :height="20" />
                    </template>

                    <div v-else class="price">
                        <h3 class="text-padding">Price $ {{ product.price }}</h3>
                    </div>

                     <template v-if="Loading">
                        <LoadingBg :height="40" />
                    </template>

                    <div v-else class="qty flex mt-2">
                        <p class="pr-2 qty-text">Qty</p><input type="number" v-model="quantity" name="product_quantity"
                            class="quantity" @change="updateQuantity" min="1" :max="product.quantity" placeholder="0">
                        <br>
                    </div>

                    <div v-if="total > 0" class="total text-padding">
                        Total : {{ total }}
                    </div>

                     <!-- <h1 class="text-padding text-gray-400">Category:</h1> -->

                     <template v-if="Loading">
                        <LoadingBg :height="40" />
                    </template>


                    <template v-if="Loading">
                        <LoadingBg :height="50" />
                    </template>

                    <div v-else class="price"> <button @click.prevent="AddToCart(product.id)"
                            class="btn btn-primary mt-4">Add To Cart</button>
                    </div>

                </div>
        </div>

        <!-- Loading Amimation -->
         <template v-if="Loading">
            <LoadingBg :height="200" />
        </template>
        <!-- Content -->
        <div v-else class="bg-white rounded-sm shadow-md py-1 px-4 mt-10 mb-5">
            <div class="mt-3 mb-5">
                <h5>Description</h5><br>
                <p class="description "><span v-html="product.description"></span></p>
            </div>
        </div>

    </div>
</template>


<script>
import axios from 'axios';

   export default {
    data(){
        return {
            product: [],
            adquantity: '',
            total: 0,
            imageshow:'',
            url:'http://ecommerce.test/',

        }
    },

    methods: {

        loadproduct(){
            let slug = this.$route.params.slug;
            axios.get(`/api/product-single/${slug}`).then(response => {
                this.product = response.data;
                const product_image = response.data.image;
                this.imageshow = product_image
            });
        },

        AddToCart(id) {
                axios.post(`/api/addtocart/${id}`).then(res =>{
                    Toast.fire({
                    icon: 'success',
                    title: 'Product Added'
                 });

                })
        },

        updateQuantity(event) {
        this.total = event.target.value
        this.total = this.total * this.product.price
      },

      changimg(image){
          this.imageshow = image;
        //   document.getElementById("timg").style.border ="solid 3px red";
          document.getElementsByClassName('timg').style.border ='solid 3px red';
      }
    },
    mounted(){
        this.loadproduct();
    }

    }
</script>

<style scoped>
.btn-primary{
padding: 10px 35px !important;
}

.product-title{
    font-size: 23px;
    font-weight: 800;
}

/*
.product-single {
    justify-content: center !important;
    align-items: center;
} */

.text-padding{
    padding: 10px;
font-size: 18px;
font-weight: 500;
}
.quantity{
    width: 55px;
    padding: 5px 15px;
}


.qty {
   width: 120px;
    background: #f0f0f0;
    padding: 10px 11px 9px 14px;
    border-radius: 0;
    margin-right: 10px;
    align-items: center;
}
.qty-text{
    font-weight: 100 !important;
}
</style>



