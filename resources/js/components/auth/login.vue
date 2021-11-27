<template class="login-page">
        <div class="flex  justify-content-center login-page h-full">
            <div class="mt-44 lg:w-5/12 w-10/12">
                <div class="card">
                    <div class="card-header">
                        <div v-if="errors" class="error text-danger">{{errors}}</div>
                        <div v-else class="title">Login</div>
                    </div>
                    <!-- Success status  -->
                    <div v-if="success" class="ml-3 mr-3 mt-3 alert alert-success alert-dismissible fade show flex items-center" role="alert">
                        <strong>{{ success }}</strong>
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <div class="card-body">
                        <form @submit.prevent="login">
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email</label>
                                <input type="email" v-model="form.email" class="form-control" placeholder="Enter email" required>
                                <small v-if="errors.email" class="form-text text-danger">{{ errors.email[0] }}</small>
                            </div>
                            <div class="form-group">
                                <label for="password">Password</label>
                                <input type="password" v-model="form.password" class="form-control" placeholder="password" required>
                                <small v-if="errors.password" class="form-text text-danger">{{ errors.password[0] }}</small>
                            </div>
                            <div>
                                <button type="submit" class="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import axios from 'axios'
import Vue from "vue";
import VueSocialauth from "vue-social-auth";
export default {
    data(){
        return{
            errors: '',
            success: '',
            form:{
                email: '',
                password: ''
            }
        }
        },
    methods:{
         login(){
            axios.post('/api/user-login',this.form).then(response =>{

             const token = response.data.token;
             const user_role = response.data.user.role;

            if(user_role !== "admin"){
                 this.errors = 'Make Sure Your Email & Password!'
             }

             if(user_role == "admin"){
                  this.$store.commit('SET_AUTHENTICATED',true);
                  this.$router.push({name:'admin-dashboard'});
                  this.$store.commit('SET_USER', response.data.user);
                  localStorage.setItem('token', token);
             }


             if(response.data.errors){
                 this.errors = 'Make Sure Your Email & Password!'
             }

            })

            .catch(e => {this.errors = 'Make Sure Your Email & Password!'});
        },

    },

}
</script>

<style scoped>

.login-page{
    background: linear-gradient(to right, #141e30, #475d82);

}
</style>
