<template>
    <div class="lg:flex gap-5">
            <div class="lg:w-8/12">
                    <div class="card">
                        <div class="card-header flex items-center justify-between">
                            Slider Lists
                        </div>

                        <div class="card-body">
                            <div class="card-body">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th style="width: 100px">Image</th>
                                            <th> Name </th>
                                            <th> Slug </th>
                                            <th style="width: 170px"> Action </th>
                                        </tr>
                                    </thead>
                                    <tbody v-if="sliders.length">
                                        <tr v-for="slider in sliders" :key="slider.id">
                                            <td> {{ slider.id }} </td>
                                            <td style="width: 100px"> <img :src="slider.slider" alt="" srcset=""> </td>
                                            <td> {{ slider.created_at }} </td>
                                            <td style="width: 170px">
                                                <a @click.prevent="deleteSlider(slider)" href="#"
                                                    class="btn btn-danger btn-sm">Delete</a>
                                            </td>
                                        </tr>
                                        <div class="card-footer">
                                            <pagination :data="sliders" @pagination-change-page="getResults">
                                            </pagination>
                                        </div>
                                    </tbody>

                                    <tbody v-else>
                                        <tr>
                                            <td colspan="4">
                                                <!-- Loading Amimation -->
                                                <template v-if="Loading">
                                                    <content-loading />
                                                </template>
                                                <h5 v-else class="text-center mt-4 mb-4">No sliders found.</h5>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
            </div>

        <div class="form lg:w-4/12">
            <div class="card-header">
                Slider Form
            </div>
            <form class="p-10 bg-white">

                <Dropimage v-on:image="image($event)"/>
                <button @click.prevent="createcategory()" type="submit" class="text-sm btn btn-lg btn-primary mt-3">Submit</button>
            </form>
        </div>
    </div>
</template>

<script>
import Dropimage from '../../../assets/droppable_image/Drop_single_image.vue'
export default {
    components:{Dropimage},
    data(){
        return {
            sliders: [],
            form:{
            image: '',
            },
            errors:'',
        }
    },
    methods: {
        loadSliders(){
            axios.get('/api/sliders').then(response => {
                this.sliders = response.data;
            });
        },

        // Our method to GET results from a Laravel endpoint
        getResults(page = 1) {
            axios.get('/api/category/results?page=' + page)
                .then(response => {
                    this.sliders = response.data;
                });
        },

        deleteSlider(slider){

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

                axios.post(`/api/slider-delete/${slider.id}`)
                let index = this.sliders.indexOf(slider);
                this.sliders.splice(index, 1);

                   Swal.fire(
                    'Deleted!',
                    'Slider Deleted.',
                    'success'
                    )
                }
            })
        },

         createcategory(){

                let data = new FormData();
                data.append('image', this.form.image);

                axios.post('/api/add-slider', data)
                    .then(response => {
                        this.form = '';
                        this.errors = '';
                        this.loadSliders();
                        Toast.fire({
                            icon: 'success',
                            title: 'Slider Added successfully.'
                        });
                    })
                 .catch(e => {this.errors = e.response.data.errors});
          },

        image(event){
            console.log(event)
            this.form.image = event
        }
    },
    mounted() {
        this.loadSliders();
    }
}
</script>

