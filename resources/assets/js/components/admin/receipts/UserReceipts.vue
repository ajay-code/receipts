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

    <div class="modal fade" id="edit-receipt" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <h4 class="modal-title">Edit Receipt</h4>
          </div>
          <div class="modal-body">
            <form action="" class="form-horizontal">
              <h3>Sender Info</h3>
              <div class="">
                <div class="col-xs-12">
                  <div class="form-group">
                    <label for="sender-id">Sender ID</label>
                    <input id="sender-id" v-model="edit.sender_id" class="form-control" placeholder="Sender ID (Optional)"></textarea>
                  </div>
                </div>
              </div>
              <div class="">
                <div class="col-xs-6">
                  <div class="form-group">
                    <label for="sender-name">Sender Name</label>
                    <input type="text" id="sender-name" v-model="edit.sender_name" class="form-control" placeholder="Sender Name">
                  </div>
                </div>
                <div class="col-xs-6">
                  <div class="form-group">
                    <label for="sender-email">Sender Email</label>
                    <input type="text" id="sender-email" v-model="edit.sender_email" class="form-control" placeholder="Sender Email">
                  </div>
                </div>
              </div>
              <div class="">
                <div class="col-xs-6">
                  <div class="form-group">
                    <label for="sender-phone">Sender Phone</label>
                    <input type="text" id="sender-phone" v-model="edit.sender_phone" class="form-control" placeholder="Sender PhoneNumber">
                  </div>
                </div>
                <div class="col-xs-6">
                  <div class="form-group">
                    <label for="sender-postcode">Sender Postcode</label>
                    <input type="text" id="sender-postcode" v-model="edit.sender_postcode" class="form-control" placeholder="Sender Postcode">
                  </div>
                </div>
              </div>

              <div class="">
                <div class="col-xs-12">
                  <div class="form-group">
                    <label for="sender-address">Sender Address</label>
                    <textarea id="sender-address" v-model="edit.sender_address" class="form-control" placeholder="Sender Name"></textarea>
                  </div>
                </div>
              </div>
              <br>
              <h3>Receiver Info</h3>
              <div class="">
                <div class="col-xs-6">
                  <div class="form-group">
                    <label for="receiver-name">Receiver Name</label>
                    <input type="text" id="receiver-name" v-model="edit.receiver_name" class="form-control" placeholder="receiver Name">
                  </div>
                </div>
                <div class="col-xs-6">
                  <div class="form-group">
                    <label for="receiver-email">Receiver Email</label>
                    <input type="text" id="receiver-email" v-model="edit.receiver_email" class="form-control" placeholder="receiver Email">
                  </div>
                </div>
              </div>
              <div class="">
                <div class="col-xs-6">
                  <div class="form-group">
                    <label for="receiver-phone">Receiver Phone</label>
                    <input type="text" id="receiver-phone" v-model="edit.receiver_phone" class="form-control" placeholder="receiver PhoneNumber">
                  </div>
                </div>
                <div class="col-xs-6">
                  <div class="form-group">
                    <label for="receiver-postcode">Receiver Postcode</label>
                    <input type="text" id="receiver-postcode" v-model="edit.receiver_postcode" class="form-control" placeholder="receiver Postcode">
                  </div>
                </div>
              </div>

              <div class="">
                <div class="col-xs-12">
                  <div class="form-group">
                    <label for="receiver-address">Receiver Address</label>
                    <textarea id="receiver-address" v-model="edit.receiver_address" class="form-control" placeholder="Sender Name"></textarea>
                  </div>
                </div>

                <div class="col-xs-12">
                  <div class="form-group">
                    <label for="receiver-product">Item</label>
                    <input id="receiver-product" v-model="edit.receiver_product" class="form-control" placeholder="Item">
                  </div>
                </div>

                <div class="col-xs-12">
                  <div class="form-group">
                    <label for="amount">Amount</label>
                    <input id="amount" v-model="edit.amount" class="form-control" placeholder="Amount">
                  </div>
                </div>

                <div>
                  <div class="col-xs-6">
                    <div class="form-group">
                      <label for="product_cost">Product Cost</label>
                      <input id="product_cost" v-model="edit.product_cost" class="form-control" placeholder="Product Cost">
                    </div>
                  </div>
                  <div class="col-xs-6">
                    <div class="form-group">
                      <label for="postage_cost">Postage Cost</label>
                      <input id="postage_cost" v-model="edit.postage_cost" class="form-control" placeholder="Postage Cost">
                    </div>
                  </div>
                </div>

                <div class="col-xs-12">
                  <div class="form-group">
                    <label for="tracking">Tracking</label>
                    <input id="tracking" v-model="edit.tracking" class="form-control" placeholder="Tracking">
                  </div>
                </div>

              </div>
            </form>

            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" @click="update">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Form from '@/Form/Form';
import eventHub from '@/eventHub';
import emptyReceipt from '@/empty/Receipt';
import emptyPageInfo from '@/empty/PageInfo';
import mixin from '@/components/mixins/Receipts';

export default {
  data() {
    return {
      receipts: [],
      loadCount: 0,
      loading: false,
      printList: [],
      selectAllReceipts: false,
      search: '',
      order: 'latest',
      records: 100,
      pageInfo: emptyPageInfo,
      edit: new Form(emptyReceipt),
      editIndex: '',
      scope: '',
      scopeApi: '/api',

    }
  },
  props: ['userId'],
  mixins: [mixin],
  components: {
    receipt: require('./Receipt.vue'),
    paginator: require('../../Paginator.vue')

  },
  
  methods: {
    loadReceipts() {
      axios.get(`${this.scopeApi}/users/${this.userId}/receipts`).then(res => {
        this.receipts = res.data.data;
        this.updatePageInfo(res.data);
      }).catch(err => {
        alert(err);
      })
    },
    // printSingleReceipt(receiptId) {
    //   this.loading = true;
    //   axios.get(`/admin/receipts/print/${receiptId}`).then(res => {
    //     this.loadSinglePdf(res.data.pdfName)
    //   })
    // },


    reload(page) {
      axios.get(`/api/admin/users/${this.userId}/receipts?search=${this.search}&records=${this.records}&page=${page}`).then(res => {
        this.receipts = res.data.data;
        this.updatePageInfo(res.data);
      }).catch(err => {
        alert(err);
      })
    },
    reloadFromFirstPage() {
      axios.get(`/api/admin/users/${this.userId}/receipts?search=${this.search}&records=${this.records}`).then(res => {
        this.receipts = res.data.data;
        this.updatePageInfo(res.data);
      }).catch(err => {
        alert(err);
      })
    },

    deleteReceipt(ReceiptId) {

      axios.get(`${this.scopeApi}/receipts/delete/${ReceiptId}`)
        .then(res => {
          this.$notify({
            group: 'notice',
            type: 'success',
            title: 'Success ',
            text: 'Receipt Deleted Successfully',
            duration: 10000,
            speed: 1000
          });
          let index = this.receipts.map(function(x) { return x.id; }).indexOf(ReceiptId);
          this.receipts.splice(index, 1);
        })
        .catch(err => {
          this.$notify({
            group: 'notice',
            type: 'error',
            title: 'Error ',
            text: 'Something went wrong',
            duration: 10000,
            speed: 1000
          });
        })
    }
  }
}
</script>
