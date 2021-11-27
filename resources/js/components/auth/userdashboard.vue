<template>
    <div class="container">
        <section class="py-5">
            <!-- Loading Amimation -->
        <template v-if="Loading">
            <content-loading />
        </template>
        <!-- Content -->
            <div v-else class="container">
                <header class="text-center mb-5 pb-3 text-black">
                    <h5 class="display-4">Manage Your Account</h5>
                </header>


                <div class="row">
                    <div class="col-md-3">
                        <!-- Tabs nav -->
                        <div class="nav flex-column nav-pills nav-pills-custom" id="v-pills-tab" role="tablist"
                            aria-orientation="vertical">
                            <a class="nav-link mb-3 p-3 shadow active" id="v-pills-home-tab" data-toggle="pill"
                                href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">
                                <i class="fa fa-user-circle-o mr-2"></i>
                                <span class="font-weight-bold small text-uppercase">Personal information</span></a>

                            <a class="nav-link mb-3 p-3 shadow" id="v-pills-profile-tab" data-toggle="pill"
                                href="#v-pills-profile" role="tab" aria-controls="v-pills-profile"
                                aria-selected="false">
                                <i class="fa fa-calendar-minus-o mr-2"></i>
                                <span class="font-weight-bold small text-uppercase">Bookings</span></a>

                            <a class="nav-link mb-3 p-3 shadow" id="v-pills-messages-tab" data-toggle="pill"
                                href="#v-pills-messages" role="tab" aria-controls="v-pills-messages"
                                aria-selected="false">
                                <i class="fa fa-star mr-2"></i>
                                <span class="font-weight-bold small text-uppercase">Reviews</span></a>

                            <a class="nav-link mb-3 p-3 shadow" id="v-pills-settings-tab" data-toggle="pill"
                                href="#v-pills-settings" role="tab" aria-controls="v-pills-settings"
                                aria-selected="false">
                                <i class="fa fa-check mr-2"></i>
                                <span class="font-weight-bold small text-uppercase">Orders</span></a>
                        </div>
                    </div>


                    <div class="col-md-9">
                        <!-- Tabs content -->
                        <div class="tab-content" id="v-pills-tabContent">
                            <div class="tab-pane fade shadow rounded bg-white show active p-5" id="v-pills-home"
                                role="tabpanel" aria-labelledby="v-pills-home-tab">
                                <h4 class="font-italic mb-4">Personal information</h4>
                                <p class="font-italic text-muted mb-2">{{AuthUser.email}}</p>
                                <p class="font-italic text-muted mb-2"></p>
                                <!-- <p class="font-italic text-muted mb-2">{{user}}</p> -->
                            </div>

                            <div class="tab-pane fade shadow rounded bg-white p-5" id="v-pills-profile" role="tabpanel"
                                aria-labelledby="v-pills-profile-tab">
                                <h4 class="font-italic mb-4">Bookings</h4>
                                <p class="font-italic text-muted mb-2">Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>

                            <div class="tab-pane fade shadow rounded bg-white p-5" id="v-pills-messages" role="tabpanel"
                                aria-labelledby="v-pills-messages-tab">
                                <h4 class="font-italic mb-4">Reviews</h4>
                                <p class="font-italic text-muted mb-2">Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>

                            <div class="tab-pane fade shadow rounded bg-white p-5" id="v-pills-settings" role="tabpanel"
                                aria-labelledby="v-pills-settings-tab">
                                <h4 class="font-italic mb-4">Orders</h4>
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <!-- <th style="width: 100px"> Id </th> -->
                                            <th> #Order </th>
                                            <th> Date </th>
                                            <th> Subtotal </th>
                                            <th> Status </th>
                                            <!-- <th> Date </th> -->
                                            <!-- <th style="width: 170px"> Action </th> -->
                                        </tr>
                                    </thead>
                                    <tbody v-if="orders.length ">
                                        <tr v-for="order in orders" :key="order.id">
                                            <td>#{{ order.tracking }} </td>
                                            <td> {{ order.created_at | dateformat }} </td>
                                            <td>$ {{ order.subtotal }} </td>
                                            <td>
                                                <span v-if="order.status == 0"
                                                    class="badge badge-primary">Processing</span>
                                                <span v-if="order.status == 1" class="badge badge-warning">On
                                                    hold</span>
                                                <span v-if="order.status == 2" class="badge badge-danger">Pending
                                                    payment</span>
                                                <span v-if="order.status == 3"
                                                    class="badge badge-success">Complated</span>
                                            </td>
                                            
                                        </tr>
                                    </tbody>
                                    <tbody v-else>
                                        <tr>
                                            <td colspan="4">
                                                <h5 class="text-center mt-4 mb-4">No Orders found.</h5>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>

   export default {

        data() {
            return {
                orders: [],
            }
        },

    mounted() {
        axios.get('/api/user-orders',{
            headers:{
                authorization: 'Bearer' + localStorage.getItem('token')
            }
        }).then(response => {
                    this.orders = response.data;
            });
    },


    }
</script>


<style scoped>

.nav-pills-custom .nav-link {
    color: #aaa;
    background: #fff;
    position: relative;
}

.nav-pills-custom .nav-link.active {
    color: #45b649;
    background: #fff;
}


/* Add indicator arrow for the active tab */
@media (min-width: 992px) {
    .nav-pills-custom .nav-link::before {
        content: '';
        display: block;
        border-top: 8px solid transparent;
        border-left: 10px solid #fff;
        border-bottom: 8px solid transparent;
        position: absolute;
        top: 30%;
        right: -10px;
        transform: translateY(-50%);
        opacity: 0;
    }
}

.nav-pills-custom .nav-link.active::before {
    opacity: 1;
}





/*
*
* ==========================================
* FOR DEMO PURPOSE
* ==========================================
*/
body {
    min-height: 100vh;
    background: linear-gradient(to left, #dce35b, #45b649);
}
</style>



