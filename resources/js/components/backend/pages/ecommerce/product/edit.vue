<template>
    <div class="">
        <div class="container">
            <!-- Loading Amimation -->
            <template v-if="Loading">
                <content-loading />
            </template>
            <!-- Content -->
            <form v-else @submit.prevent="updateproduct">
                <div class="product">
                    <div class="row">
                        <div class="col-8">
                            <div class="card card-primary">
                                <div class="card-header">
                                    <h3 class="card-title">Product Info</h3>
                                </div>
                                <div class="card-body">

                                    <div class="form-group">
                                        <label for="title">Title</label>
                                        <input type="text" v-model="form.title" name="title" class="form-control"
                                            placeholder="title">
                                    </div>

                                    <div class="form-group ">
                                        <label for="price">Price</label>
                                        <div class="product-data mr-3">
                                            <input type="number" v-model="form.price" name="price" class="form-control"
                                                placeholder="price">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputPassword1">Description</label> <br>
                                        <vue-editor v-model="form.description"></vue-editor>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-4">
                            <div class="card card-primary">
                                <div class="card-header">
                                    <h3 class="card-title">Product Info</h3>
                                </div>
                                <!-- /.card-header -->
                                <!-- form start -->
                                <div class="card-body">
                                    <div class="form-group">
                                        <label for="category_id">Category</label>
                                        <select v-model="form.category_id" name="category_id" id="category_id"
                                            class="form-control">
                                            <option value="" style="display: none" selected>Please select
                                            </option>
                                            <option v-for="category in categories" :key="category.id"
                                                :value="category.id">{{category.name}}
                                            </option>
                                        </select>
                                    </div>

                                    <div class="form-group">
                                        <label for="status">Status</label>
                                        <select v-model="form.status" name="status" id="status" class="form-control">

                                            <option :value="0" selected>Publish
                                            </option>
                                            <option :value="1" selected>Draft
                                            </option>
                                        </select>
                                    </div>

                                    <div class="form-group">
                                        <label for="Image">Image</label>

                                        <div style="margin: 20px 0px;">
                                            <SingleImages :image="form.image" v-on:image="image($event)"/>
                                        </div>

                                        <label for="Image">Gallery Images</label>
                                        <MultiDropImages :gallery_images="gallery_images" v-on:new_images="new_images($event)"/>
                                    </div>
                                    <button type="submit" class="btn btn-primary">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
import MultiDropImages from "../../../../assets/droppable_image/Drop_multiple_images.vue"
import SingleImages from "../../../../assets/droppable_image/Drop_single_image.vue"

   export default {
    components: {VueEditor,MultiDropImages,SingleImages},
     data: () => ({
       form:{
          title: '',
          price: '',
          image: '',
          status: '',
          category_id: '',
          description: '',
          images:[],
       },
       Showimage: '',
       gallery_images:[],
       categories:[],
       errors:''
      }),

      methods: {
              updateproduct(){
                let id = this.$route.params.id;
                let data = new FormData();
                data.append('title', this.form.title);
                data.append('price', this.form.price);
                data.append('status', this.form.status);
                data.append('category_id', this.form.category_id);
                data.append('description', this.form.description);
                data.append('image', this.form.image);

                 for(let i = 0; i < this.form.images.length; i++){

                   let file = this.form.images[i];

                    data.append('files['+ i + ']', file || '');
                }

                axios.post(`/api/product/update/${id}`,data).then( res => {
                    Toast.fire({
                        icon: 'success',
                        title: 'Product Update successfully.'
                    });
                })
              },

          loadpost(){
            let id = this.$route.params.id;

            axios.get(`/api/product/${id}/edit`).then(response => {
                const product = response.data[0];
                this.form.title = product.title;
                this.form.image = product.image;
                this.form.price = product.price;
                this.form.status = product.status;
                this.form.category_id = product.category_id;
                this.form.description = product.description;
                this.gallery_images = product.galleryimages;

            });
        },

        loadCategories(){
            axios.get('/api/category').then(response => {
                this.categories = response.data;
            });
        },

        new_images(payload){
            this.form.images = payload
        },
        image(payload){
            this.form.image = payload
        },
    },

    mounted(){

        this.loadpost();
        this.loadCategories();
    }


    }
</script>
