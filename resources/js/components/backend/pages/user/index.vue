<template>
    <div class="">
        <div class="container">
            <!-- Loading Amimation -->
         <template v-if="Loading">
            <content-loading/>
        </template>
        <!-- Content -->
            <form v-else @submit.prevent="createproduct">
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
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th style="width: 100px"> Id </th>
                                                <th> Name </th>
                                                <th> Email </th>
                                                <th> Role </th>
                                                <th style="width: 170px"> Action </th>
                                            </tr>
                                        </thead>
                                        <tbody v-if="all_users.length">
                                            <tr v-for="user in all_users" :key="user.id">
                                                <td style="width: 100px"> {{ user.id }} </td>
                                                <td> {{ user.name }} </td>
                                                <td> {{ user.email }} </td>
                                                <td>
                                        <span v-if="user.role == 'admin'" class="badge badge-success">Admin</span>
                                        <span v-else class="badge badge-info">Customer</span>
                                    </td>
                                                <td style="width: 170px">
                                                        <a @click.prevent="EditUser(user)" href="#"
                                                        class="btn btn-primary btn-sm">Edit</a>
                                                    <a @click.prevent="deleteuser(user)" href="#"
                                                        class="btn btn-danger btn-sm">Delete</a>

                                                </td>
                                            </tr>
                                        </tbody>
                                        <tbody v-else>
                                            <tr>
                                                <td colspan="4">
                                                    <h5 class="text-center mt-4 mb-4">No users found.</h5>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>

                        <div class="col-4">
                            <div class="card card-primary">
                                <div class="card-header">
                                    <h3 class="card-title" id="formTitle">Add User</h3>
                                </div>
                                <!-- /.card-header -->
                                <!-- form start -->

                                <div class="card-body">

                                    <div>
                                         <label for="role">Name</label>
                                        <input type="text" v-model="form.name" name="name" class="form-control"
                                            placeholder="name" :class="{ 'is-invalid': form.errors.has('name') }">
                                        <div v-if="form.errors.has('name')" v-html="form.errors.get('name')" />
                                    </div><br>


                                    <div>
                                         <label for="role">Email</label>
                                        <input type="text" v-model="form.email" name="email" class="form-control"
                                            placeholder="email" :class="{ 'is-invalid': form.errors.has('email') }">
                                        <div v-if="form.errors.has('email')" v-html="form.errors.get('email')" />
                                    </div><br>

                                    <div id="password">
                                         <label for="role">Password</label>
                                        <input type="password" v-model="form.password" class="form-control"
                                            placeholder="password">
                                    </div><br>

                                    <div class="form-group">
                                        <label for="role">Role</label>
                                        <select v-model="form.role" name="role" id="role"
                                            :class="   {'is-invalid':  form.errors.has('role')}" class="form-control">
                                             <option value="" style="display: none" selected>Select Role </option>
                                            <option value="admin" selected>Admin
                                            </option>
                                            <option value="customer" selected>Customer
                                            </option>
                                        </select>
                                    </div>

                                    <button v-if="user_id" type="submit" @click.prevent="updateUser()" class="btn btn-primary">Update User</button>
                                    <button v-else type="submit" class="btn btn-primary">Submit</button>
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
 import Form from 'vform'

export default {
    data(){
        return {
        all_users: {},
        user_id:'',
        isForm: '',
          form: new Form({
          name: '',
          email: '',
          password: '',
          role: '',
      }),
        }
    },
    methods: {
        loadall_users(){
            axios.get('/api/users').then(response => {
                this.all_users = response.data;
            });
        },

        deleteuser(user){
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
                        axios.post(`/api/user/delete/${user.id}`)
                        let index = this.all_users.indexOf(user);
                        this.all_users.splice(index, 1);
                        Swal.fire(
                        'Deleted!',
                        'User has been deleted.',
                        'success'
                      )
                   }
                })

        },

        EditUser(user){
            document.getElementById("formTitle").innerHTML = "Update User!";
            document.getElementById("password").style.display = "none";
            this.user_id = user.id;
            this.form.name = user.name,
            this.form.email = user.email,
            this.form.role = user.role
        },

        updateUser(){
            let id = this.user_id;
            this.form.post(`/api/user/update/${id}`).then(() => {
            this.form.reset();
            this.user_id = '';
            document.getElementById("formTitle").innerHTML = "Add User";
            document.getElementById("password").style.display = "block";
            this.loadall_users();
             Toast.fire({
                        icon: 'success',
                        title: 'User Updated.'
               });

            })
        },
    },

    mounted() {
        this.loadall_users();
    }
}
</script>

