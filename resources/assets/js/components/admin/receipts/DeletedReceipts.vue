<template>
    <div>
        <div class="row">
            <div class="col-sm-8 padding-0 form-group">
                <div class="search-for-label">
                    <label class="col-sm-4 col-xs-4"  v-for="(field, index) in searchFor" :key="index">
                        <input type="checkbox" v-model="searchFor[index]"> <span v-text="index"></span>
                    </label>
                <div class="clearfix"></div>
                </div>   
            </div>
            <div class="col-sm-4 form-group">
                <form class="form-horizontal" @submit.prevent="reloadFromFirstPage">
                    <div class="form-group">
                        <label for="from" class="col-xs-3 control-label">From</label>
                        <div class="col-xs-9 col-md-6">
                            <input type="date" class="form-control" id="from" v-model="from">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="to" class="col-xs-3 control-label">To</label>
                        <div class="col-xs-9 col-md-6">
                            <input type="date" class="form-control" id="to" v-model="to">
                        </div>
                    </div>
                </form>
            </div>
        </div>
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
                        <button class="btn btn-default" type="button">
                            <span class="small">RECORDS</span>
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
            <span class="btn btn-success" @click="restoreMultipleReceipts">
                <i class="fa fa-undo"></i> Restore Selected Receipts</span>
            <span class="btn btn-danger" @click="deleteMultipleReceipts">
                <i class="fa fa-trash"></i> Delete Selected Receipts</span>
            <span class="btn btn-danger" @click="clearPrintList" v-if="printList.length">Clear Print List</span>
        </div>

        <iframe id="csv-frame" class="hide" name="csv-frame" src="" frameborder="0"></iframe>

    </div>
</template>

<script>
import moment from 'moment';
import Form from '../../../Form/Form';
import eventHub from '../../../eventHub';
import emptyPageInfo from '../../../empty/PageInfo';
import ReceiptSearchFor from '../../../empty/ReceiptSearchFor';

export default {
    data() {
        return {
            receipts: [],
            loadCount: 0,
            printList: [],
            selectAllReceipts: false,
            records: 100,
            from: moment().subtract(1, 'months').format('YYYY-MM-DD'),
            to: moment().format('YYYY-MM-DD'),
            search: '',
            searchFor: ReceiptSearchFor,
            pageInfo: emptyPageInfo,
            scope: '/admin',
            scopeApi: '/api/admin'
        }
    },
    components: {
        receipt: require('./DeletedReceipt.vue'),
        paginator: require('../../Paginator.vue')
    },

    mounted() {
        this.loadReceipts();
        eventHub.$on('print-single-receipt', this.printSingleReceipt)
        eventHub.$on('add-to-print-list', this.addToPrintList)
        eventHub.$on('remove-from-print-list', this.removeFromPrintList)
        eventHub.$on('load-page', this.reload);
        eventHub.$on('delete-receipt', this.deleteReceipt);
        eventHub.$on('restore-receipt', this.restoreReceipt);

    },

    methods: {
        loadReceipts() {
            axios.post(`${this.scopeApi}/receipts/deleted`, {
                from : this.from,
                to : this.to
            }).then(res => {
                this.receipts = res.data.data;
                this.updatePageInfo(res.data);
            }).catch(err => {
                this.sendErrorNotice();
            })
        },
        reload(page) {
            axios.post(`${this.scopeApi}/receipts/deleted`, {
                searchFor: this.searchFor,
                    search: this.search,
                    records: this.records,
                    from : this.from,
                    to : this.to,
                    page
            }).then(res => {
                this.receipts = res.data.data;
                this.updatePageInfo(res.data);
            }).catch(err => {
                this.sendErrorNotice();
            })
        },
        reloadFromFirstPage() {
            axios.post(`${this.scopeApi}/receipts/deleted`, {
                searchFor: this.searchFor,
                    search: this.search,
                    records: this.records,
                    from : this.from,
                    to : this.to
            }).then(res => {
                this.receipts = res.data.data;
                this.updatePageInfo(res.data);
            }).catch(err => {
                this.sendErrorNotice();
            })
        },
        deleteReceipt(ReceiptId) {
            axios.get(`${this.scopeApi}/receipts/force-delete/${ReceiptId}`)
                .then(res => {
                    this.sendSuccessNotice('Receipt Deleted Successfully');
                    let index = this.receipts.map(function(x) {
                        return x.id;
                    }).indexOf(ReceiptId);
                    this.receipts.splice(index, 1);
                })
                .catch(err => {
                    this.sendErrorNotice();
                })
        },
        deleteMultipleReceipts() {
            if (!this.printList.length) {
                this.sendErrorNotice('Please Select At Least One Reeipt')
                return;
            }

            axios.post(this.scopeApi + '/receipts/force-delete',{
                receipts: this.printList
            }).then(res => {
                this.sendSuccessNotice('Receipts Deleted Successfully');
                this.printList.forEach((ReceiptId) => {
                    let index = this.receipts.map(function(x) {
                        return x.id;
                    }).indexOf(ReceiptId);
                    this.receipts.splice(index, 1);
                });
                this.clearPrintList();
            })
            .catch(err => {
                    this.sendErrorNotice();
            });
            
        },
        restoreReceipt(ReceiptId) {
            axios.get(`${this.scopeApi}/receipts/restore/${ReceiptId}`)
                .then(res => {
                    this.sendSuccessNotice('Receipt restored Successfully');
                    let index = this.receipts.map(function(x) {
                        return x.id;
                    }).indexOf(ReceiptId);
                    this.receipts.splice(index, 1);
                })
                .catch(err => {
                    this.sendErrorNotice();
                })
        },
        restoreMultipleReceipts() {
            if (!this.printList.length) {
                this.sendErrorNotice('Please Select At Least One Reeipt')
                return;
            }
            axios.post(this.scopeApi + '/receipts/restore',{
                receipts: this.printList
            }).then(res => {
                this.sendSuccessNotice('Receipts Restore Successfully');
                this.printList.forEach((ReceiptId) => {
                    let index = this.receipts.map(function(x) {
                        return x.id;
                    }).indexOf(ReceiptId);
                    this.receipts.splice(index, 1);
                });
                this.clearPrintList();
            })
            .catch(err => {
                this.sendErrorNotice();
            });
            
            
        },
        loadSinglePdf(pdf) {
            let url = '';
            if (window.isMobile()) {
                url = `/pdf/${pdf}/download`;
                eventHub.$emit('stop-loading')
            } else {
                url = `/pdf/${pdf}`;
            }
            $('#print-frame').attr('src', url)
        },

        addToPrintList(receiptId) {
            if( this.printList.indexOf(receiptId) === -1){
                this.printList.push(receiptId);
            }
        },
        removeFromPrintList(receiptId) {
            var index = this.printList.indexOf(receiptId);
            this.printList.splice(index, 1);
        },

        updatePageInfo(info) {
            this.pageInfo.current_page = info.current_page;
            this.pageInfo.last_page = info.last_page;
            this.pageInfo.total = info.total;
            this.pageInfo.next_page_url = info.next_page_url;
            this.pageInfo.prev_page_url = info.prev_page_url;
        },

        clearPrintList() {
            eventHub.$emit('clear-every-receipt');
            this.printList = [];
        },
        downloadCsv() {
            if (this.printList.length) {
                eventHub.$emit('start-loading');
                let inputs = '';
                this.printList.forEach(function(element) {
                    inputs += `<input name="receipts[]" value="${element}">`;
                }, this);
                jQuery(`<form action="${this.scope}/receipts/csv" method="post" target="csv-frame">
                      <input name="_token" value="${Laravel.csrfToken}">
                     ${inputs}
                  </form>`)
                    .appendTo('body').submit().remove()
                eventHub.$emit('stop-loading')
            } else {
                alert('please select atleast on receipt')
            }
        },
        selectAll() {
            if (this.selectAllReceipts) {
                for(let receipt in this.receipts){
                    eventHub.$emit(`select-${receipt.id}`);
                }
            } else {
                for(let receipt in this.receipts){
                    eventHub.$emit(`deselect-${receipt.id}`);
                }
            }
        },
        sendErrorNotice(message) {
            message = message || 'Something Went Wrong';
            this.$notify({
                group: 'notice',
                type: 'error',
                title: 'Error ',
                text: message,
                duration: 5000,
                speed: 1000
            });
        },
        sendSuccessNotice(message) {
            message = message || 'Action Was Persormed Successfully';
            this.$notify({
                group: 'notice',
                type: 'success',
                title: 'Success ',
                text: message,
                duration: 5000,
                speed: 1000
            });
        }

    }
}
</script>
