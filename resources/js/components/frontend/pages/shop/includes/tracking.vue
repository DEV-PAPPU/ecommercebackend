<template>
    <div class="container">
        <div class="row justify-content-center">

            <div class="col-md-8 mt-10">
                <div class="card">

                    <div class="card-header" id="cartTitle">Input Your Tracking Number</div>

                    <div class="card-body">

                        <div v-if="isForm" class="form">
                            <form @submit.prevent="ordertrack">
                            <div>
                                <input type="text" v-model="form.number" number="number" class="form-control"
                                    placeholder="number" required>
                            </div>
                            <br>
                            <button type="submit" class="btn btn-sm btn-primary">Tracking Now</button>
                        </form>
                        </div>

                         <div v-if="Trackingdata.length" class="tracking">
                            <div v-for="order in Trackingdata" :key="order.id">
                                <span v-if="order.status == 0" class="badge badge-primary">Processing</span>
                                <span v-if="order.status == 1" class="badge badge-warning">On hold</span>
                                <span v-if="order.status == 2" class="badge badge-danger">Pending payment</span>
                                <span v-if="order.status == 3" class="badge badge-success">Complated</span>
                            </div>
                        </div>
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
        Trackingdata: '',
        isForm: true,
        form: new Form({
          number: '',
      }),

      }),

        methods: {

           ordertrack() {
                this.form.post('/api/order-tracking').then(response => {
                 this.Trackingdata = response.data;
                 this.isForm = false;
                 document.getElementById("cartTitle").innerHTML = "Your Order Status";
                })
            },

        },

    }
</script>
