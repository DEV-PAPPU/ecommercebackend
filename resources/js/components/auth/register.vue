<template>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">

                    <div class="card-header">Sign-Up{{errors}}</div>

                    <div class="card-body">

                        <form @submit.prevent="login">
                            <div>
                                <input type="name" v-model="form.name" name="name" class="form-control"
                                    placeholder="name">
                                    <small v-if="errors.name" class="form-text text-danger">{{errors.name}}</small>
                              
                            </div><br>

                            <div>
                                <input type="email" v-model="form.email" name="email" class="form-control"
                                    placeholder="email">
                               <small v-if="errors.email" class="form-text text-danger">{{ errors.email[0] }}</small>
                            </div><br>

                            <div>
                                <input type="password" v-model="form.password" name="password" class="form-control"
                                    placeholder="password" :class="{ 'is-invalid': form.errors.has('password') }">
                               <small v-if="errors.password" class="form-text text-danger">{{ errors.password[0] }}</small>

                            </div><br>

                            <div>
                                <input type="password" v-model="form.password_confirmation" name="password_confirmation" class="form-control"
                                    placeholder="password_confirmation">
                       <small v-if="errors.password_confirmation" class="form-text text-danger">{{ errors.password_confirmation[0] }}</small>

                            </div><br>

                            <br>
                            <button type="submit" class="nav-link btn btn-sm btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

 import Form from 'vform'


   export default {

     data: () => ({
       errors:{},
       form: new Form({
          email: '',
          name: '',
          password: '',
          password_confirmation: ''
      }),

      }),
        methods: {
           login() {
                this.form.post('/api/auth/register').then(response => {
                
                   console.log(response)
                   this.$router.push({name:'login'});
                 
                })
                .catch(e =>{
                    this.errors = e.response.data
                })
            },

        },
    }
</script>



