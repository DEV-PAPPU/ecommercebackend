<template>
        <div class="container">
            <form  @submit.prevent="createproduct">
                <div class="product">
                    <div class="row">
                        <div class="col-8">
                            <div class="card card-primary">
                                <div class="card-header">
                                    <h3 class="card-title">Product Info</h3>
                                </div>
                                <!-- /.card-header -->
                                <!-- form start -->

                                <div class="card-body">

                                    <div class="form-group">
                                        <label for="title">Title</label>
                                        <input type="text" v-model="form.title" name="title" class="form-control"
                                            placeholder="title">
                                        <small v-if="errors.title" class="form-text text-danger">{{ errors.title[0] }}</small>
                                    </div>


                                    <div class="form-group ">
                                        <label for="price">Price</label>
                                        <div class="product-data mr-3">
                                            <input type="number" v-model="form.price" name="price" class="form-control"
                                                placeholder="price">
                                         <small v-if="errors.price" class="form-text text-danger">{{ errors.price[0] }}</small>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label for="exampleInputPassword1">Description</label> <br>
                                        <small v-if="errors.description" class="form-text text-danger">{{ errors.description[0] }}</small>
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
                                        <small v-if="errors.category_id" class="form-text text-danger">{{ errors.Select_id[0] }}</small>
                                        <select v-model="form.category_id" id="category_id" class="form-control">
                                            <option value="" style="display: none" selected>Select Category
                                            </option>
                                            <option v-for="category in categories" :key="category.id"
                                                :value="category.id">{{category.name}}
                                            </option>
                                        </select>
                                    </div>

                                    <div class="form-group">
                                        <label for="status">Status</label>
                                        <small v-if="errors.status" class="form-text text-danger">{{ errors.status[0] }}</small>
                                        <select v-model="form.status" id="status" class="form-control">
                                            <option value="" style="display: none" selected>Select Status</option>
                                            <option value="0" selected>Publish
                                            </option>
                                            <option value="1" selected>Draft
                                            </option>
                                        </select>
                                    </div>

                                    <div class="form-group">

                                        <label for="Image">Feature Image {{errors.title}}</label>

                                           <div style="margin-top: 20px;">
                                            <SingleImages :image="form.image" v-on:image="image($event)"/>
                                          </div>
                                    </div>

                                    <!-- images -->
                                    <div class="form-group">
                                        <label for="Image">Gallery Images</label>
                                        <MultiDropImages v-on:new_images="new_images($event)"/>
                                    </div>
                                    <button type="submit" class="btn btn-primary">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
import SingleImages from "../../../../assets/droppable_image/Drop_single_image.vue"
import MultiDropImages from "../../../../assets/droppable_image/Drop_multiple_images.vue"
   export default {
    components: {VueEditor,MultiDropImages,SingleImages},
     data: () => ({
        form: {
          title: '',
          feature_image: '',
          price: '',
          status: '',
          category_id:'',
          description: '',
          images:[],
      },
      categories:[],
      errors:[],

      }),


        methods: {
            loadCategory(){
            axios.get('/api/category')
            .then(response =>{
                console.log(response);
                this.categories = response.data;
            });
          },

            createproduct(){
                let data = new FormData();
                data.append('title', this.form.title);
                data.append('price', this.form.price);
                data.append('status', this.form.status);
                data.append('category_id', this.form.category_id);
                data.append('description', this.form.description);
                data.append('feature_image', this.form.feature_image);

                for(let i = 0; i < this.form.images.length; i++){

                   let file = this.form.images[i];

                    data.append('files['+ i + ']', file || '');
                }

                const config = {
                    headers:{"content-type" : "multipart/form-data"}
                }

                axios.post('/api/product',data,config ,{
                            headers:{
                                authorization: 'Bearer' + localStorage.getItem('token')
                            }
                        })
                .then(response => {
                    this.errors = '';
                    Toast.fire({
                        icon: 'success',
                        title: 'Product Added successfully.'
                    })

                })
                 .catch(e => {

                     const formerrors = e.response.data;
                    const errors = formerrors.errors;
                    console.log(errors.title);
                     this.errors = errors.title


                  });
          },

        new_images(event){
                this.form.images = event
            },

         image(payload){
            this.form.feature_image = payload
            console.log(payload)
         },

        },

        mounted(){
        this.loadCategory();
        },


    }
</script>



