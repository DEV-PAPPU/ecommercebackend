<template>
    <div class="">
        <div class="container">
            <!-- Loading Amimation -->
         <template v-if="Loading">
            <content-loading/>
        </template>
        <!-- Content -->
            <div v-else class="product">
                <div class="row">
                    <div class="col-8">
                        <div class="card card-primary">
                            <div class="card-header">
                                <h3 class="card-title">Order Information</h3>
                            </div>
                            <!-- /.card-header -->
                            <!-- form start -->

                            <div class="card-body">


                                <table class="table">
                                    <thead>
                                        <tr>
                                            <!-- <th style="width: 100px"> Id </th> -->
                                            <th> Product </th>
                                            <th> Price </th>
                                            <th> Quantity </th>
                                            <!-- <th> Date </th> -->
                                            <th style="width: 170px"> Total </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="order in order_items" :key="order.id">
                                            <td>{{ order.product.title }} </td>
                                            <td>{{ order.price | currency }} </td>
                                            <td> {{ order.quantity }} </td>
                                           <td>{{ order.price * order.quantity | currency}} </td>
                                        </tr>
                                    </tbody>
                                </table>

                               <div class="total px-30 d-flex justify-content-between">
                                   <tfoot>
                                       Subtotal
                                </tfoot>

                                <tfoot>
                                      {{shipping.subtotal | currency }}
                                </tfoot>

                               </div>


                                <table class="table">
                                    <tbody >
                                        <tr>
                                            <td class="name">Name : {{ shipping.first_name }} </td>
                                            <td>Email : {{ shipping.email }} </td>
                                            <td>Phone : {{ shipping.phone }} </td>
                                        </tr> <br>
                                        <tr class="name">
                                            <td >City : {{ shipping.city }} </td>
                                            <td>Zipcode : {{ shipping.zipcode }} </td>
                                            <td>Country : {{ shipping.country }} </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div class="col-4">
                        <div class="card card-primary">
                            <div class="card-header">
                                <h3 class="card-title">Order Action</h3>
                            </div>
                            <!-- /.card-header -->
                            <!-- form start -->

                            <div class="card-body">
                                <form @submit.prevent="updateorder(status)">

                                    <div class="form-group">
                                        <label for="status">Status</label><br>
                                        <select  v-model="form.status" name="status" id="status" class="w-full border border-gray-300">

                                            <option value="processing" selected>Processing
                                            </option>
                                            <option value="on-hold" selected>On hold
                                            </option>
                                            <option value="pending-payment" selected>Pending payment
                                            </option>
                                            <option value="complated" selected>Complated
                                            </option>
                                        </select>
                                    </div>

                                    <button type="submit" class="btn btn-primary">Update</button>
                                </form>


                                <form @submit.prevent="emailsent()">

                                    <div class="form-group email-div">
                                        <label for="status">Sent Email To Customer</label><br>
                                        <input type="email" readonly v-model="Emailform.email" name="email" class="form-control" placeholder="email">

                                        <textarea v-model="Emailform.massage"
                                            style="height: 120px; margin-top: 10px; padding:10px;" class="w-full bg-gray-200" placeholder="private customer massage"></textarea>
                                    </div>

                                    <button type="submit" class="btn btn-primary">Sent</button>
                                    <!-- <Tost/> -->
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
   export default {
     data: () => ({

         shipping:'',
         order_items:'',

         form:{
          status: '',
        //    _method:'Put',
          },

         Emailform:{
          massage: '',
          email:''
          },
      }),

    methods: {
       updateorder(){
           let id = this.$route.params.id;
            axios.post(`/api/order-status-change/${id}`,this.form).then(res => {

                this.$store.commit('SET_TOAST', 'success');
                this.$store.commit('SET_TOAST_MASSAGE', res.data.massage);
                setTimeout(() => {
                            this.$store.commit('SET_TOAST', false);
                }, 3000);
            })
        },

        loadorder(){
            let id = this.$route.params.id;
            axios.get(`/api/order/${id}/edit`).then(response => {
                this.shipping = response.data[0];
                let order = response.data[0];
                this.form.status = order.status;
                this.order_items = response.data[1];
                this.Emailform.email = order.email
            });
        },


        emailsent(){
            let id = this.$route.params.id;
            axios.post(`/api/order-privatr-massage/${id}`,this.Emailform).then(res => {
               
                this.$store.commit('SET_TOAST', 'success');
                this.$store.commit('SET_TOAST_MASSAGE', res.data.massage);
                setTimeout(() => {
                            this.$store.commit('SET_TOAST', false);
                }, 3000);
                
            })
        },

    },

    computed:{

            Cartsubtotal(){
            return 6;
            // return this.order_items.reduce((a,b) => a+ (b.price * b.quantity), 0);
           },

    },

    mounted(){

        this.loadorder();
    }


    }
</script>


<style scoped>
#status {
    padding: 6px !important;
    border-radius: 5px !important;
}


.total {
    border-top: solid rgb(109, 106, 103) 2px;
    padding: 10px 110px 7px 10px;
}

.name{

    text-transform: capitalize;
}
.shpping{
margin-bottom: 3px;
border-bottom: solid rgb(109, 106, 103) 1px;

}

.email-div{

    margin-top: 20px;
}
</style>
