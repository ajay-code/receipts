<template>
    <div>
        <div class="row">
            <alert></alert>

            <div class="col-sm-12">
                <form class="form-inline" @submit.prevent="reloadFromFirstPage">
                    <div class="form-group">
                        <label for="from">From</label>
                        <input type="date" class="form-control" id="from" v-model="from">
                    </div>
                    <div class="form-group">
                        <label for="to">To</label>
                        <input type="date" class="form-control" id="to" v-model="to">
                    </div>
                    <button type="submit" class="btn btn-default">Go!</button>
                </form>
            </div>
            <!-- /.col-xs-6 -->

            <div class="col-sm-4 margin-20">
                <div class="input-group">
                    <span class="input-group-btn">
                        <button class="btn btn-default" type="button">
                            <span class="small"> RECORDS</span>
                        </button>
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
            <table v-if="receipts.length > 0 " class="table table-bordered">
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

        </div>
        <iframe id="print-frame" class="hide" name="frame" src="" frameborder="0" @load="loadingComplete"></iframe>
        <iframe id="csv-frame" class="hide" name="csv-frame" src="" frameborder="0"></iframe>
        <div class="overlay" v-if="loading">
            <loader color="#337ab7"></loader>
        </div>

        <edit-receipt @update="updateReceipt"></edit-receipt>


    </div>
</template>

<script>
import moment from 'moment';
import Form from '../../Form/Form';
import eventHub from '../../eventHub';
import mixin from '../mixins/Receipts';
import emptyReceipt from '../../empty/Receipt';
import emptyPageInfo from '../../empty/PageInfo';

export default {
    data() {
        return {
            receipts: [],
            loadCount: 0,
            loading: false,
            printList: [],
            selectAllReceipts: false,
            from: moment().subtract(7, 'days').format('YYYY-MM-DD'),
            to: moment().format('YYYY-MM-DD'),
            order: 'latest',
            records: 100,
            pageInfo: emptyPageInfo,
            edit: new Form(emptyReceipt),
            editIndex: '',
            scope: '',
            scopeApi: '/api',
        }
    },
    mixins: [mixin],
    components: {
        receipt: require('./Receipt.vue'),
        paginator: require('../Paginator.vue')

    },
   
    methods: {
        loadReceipts() {
            axios.get(`${this.scopeApi}/receipts/date?from=${this.from}&to=${this.to}&records=${this.records}`).then(res => {
                this.receipts = res.data.data;
                if (this.receipts.length <= 0) {
                    eventHub.$emit('alert-show', { message: `No Receipts Between ${this.from} and ${this.to}`, status: 'success' })
                }
                this.updatePageInfo(res.data);
            }).catch(err => {
                this.$notify({
                    group: 'notice',
                    type: 'error',
                    title: 'Error ',
                    text: 'Something went worng',
                    duration: 5000,
                    speed: 1000
                });
            })
        },

        reload(page) {
            axios.get(`${this.scopeApi}/receipts/date?from=${this.from}&to=${this.to}&records=${this.records}&page=${page}`).then(res => {
                this.receipts = res.data.data;
                if (this.receipts.length <= 0) {
                    eventHub.$emit('alert-show', { message: `No Receipts Between ${this.from} and ${this.to}`, status: 'success' })
                }
                this.updatePageInfo(res.data);
            }).catch(err => {
                this.$notify({
                    group: 'notice',
                    type: 'error',
                    title: 'Error ',
                    text: 'Something went worng',
                    duration: 5000,
                    speed: 1000
                });
            })
        },
        reloadFromFirstPage() {
            axios.get(`${this.scopeApi}/receipts/date?from=${this.from}&to=${this.to}&records=${this.records}`).then(res => {
                this.receipts = res.data.data;
                if (this.receipts.length <= 0) {
                    eventHub.$emit('alert-show', { message: `No Receipts Between ${this.from} and ${this.to}`, status: 'success' })
                }
                this.updatePageInfo(res.data);
            }).catch(err => {
                this.$notify({
                    group: 'notice',
                    type: 'error',
                    title: 'Error ',
                    text: 'Something went worng',
                    duration: 5000,
                    speed: 1000
                });
            })
        },
    }
}
</script>
