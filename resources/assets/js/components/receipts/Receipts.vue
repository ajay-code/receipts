<template>
    <div>
        <div class="row">

            <div class="col-xs-6">
                <form @submit.prevent="reloadFromFirstPage">
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="Search for..." v-model="search">
                        <span class="input-group-btn">
                            <button class="btn btn-default" type="submit">Go!</button>
                        </span>
                    </div>
                    <!-- /input-group -->
                </form>
            </div>
            <!-- /.col-xs-6 -->

            <div class="col-sm-4 col-xs-6 col-xs-offset-0 col-sm-offset-2">
                <div class="input-group">
                    <span class="input-group-btn">
                        <button class="btn btn-default" type="button">RECORDS</button>
                    </span>
                    <select class="form-control" v-model="records" @change="reloadFromFirstPage">
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                        <option value="250">250</option>
                        <option value="500">500</option>
                        <option value="1000">1000</option>
                    </select>
                </div>
                <!-- /input-group -->
            </div>
        </div>
        <!-- /.row -->
        <br>
        <div class="table-responsive">
            <table class="table table-bordered">
                <tbody>
                    <tr>
                        <th> <input type="checkbox" @click="selectAll" v-model="selectAllReceipts"> </th>
                        <th>Sender Name</th>
                        <th>Sender ID</th>
                        <th>Sender Email</th>
                        <th>Receiver Name</th>
                        <th>Receiver Email</th>
                        <th>Receiver Address</th>
                        <th>Postcode</th>
                        <th>Phone Number</th>
                        <th>Item</th>
                        <th>Amount</th>
                        <th>Product Cost</th>
                        <th>Postage Cost</th>
                        <th>Tracking</th>
                        <th>Date & Time</th>
                        <th>Actions</th>
                    </tr>
                    <receipt v-for="receipt in receipts" :receipt="receipt" :key="receipt.id"></receipt>
                </tbody>
            </table>
        </div>
        <paginator :page-info="pageInfo"></paginator>
        <div class="form-group">
            <span class="btn btn-primary" @click="print">Print
                <span v-if="printList.length" v-text="'(' + printList.length + ')'"></span>
            </span>
            <span class="btn btn-danger" @click="clearPrintList" v-if="printList.length">Clear Print List</span>
            <span class="btn btn-primary" @click="downloadCsv">Export</span>
            <br><br>
            <span class="btn btn-danger" @click="deleteMultipleReceipts">Delete Selected Receipts</span>
        </div>
        <iframe id="print-frame" class="hide" name="frame" src="" frameborder="0" @load="loadingComplete"></iframe>
        <iframe id="csv-frame" class="hide" name="csv-frame" src="" frameborder="0"></iframe>

        <edit-receipt @update="updateReceipt"></edit-receipt>

    </div>
</template>

<script>
import mixin from '../mixins/Receipts';

export default {
    data() {
        return {

        }
    },
    components: {
        receipt: require('./Receipt.vue'),
        paginator: require('../Paginator.vue')
    },

    mixins: [mixin],
    methods: {

    }
}
</script>
