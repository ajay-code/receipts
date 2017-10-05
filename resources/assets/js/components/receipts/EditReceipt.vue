<template>
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
</template>

<script>

import Form from '../../Form/Form';
import eventHub from '../../eventHub';
import emptyReceipt from '../../empty/Receipt';
export default {
    data() {
        return {
            edit: new Form(emptyReceipt),
            scope: '',
            scopeApi: '/api'
        }
    },

    props: {
        admin: {
            type: Boolean
        }
    },
    created() {
        if (this.admin) {
            this.scope = '/admin';
            this.scopeApi = '/api/admin';
        }
    },
    mounted() {
        eventHub.$on('edit', this.copyToEdit);
    },

    methods: {
        copyToEdit(receipt) {
            for (let property in receipt) {
                if (property.includes('address')) {
                    this.edit[property] = receipt[property].replace('|', "\n");
                } else {
                    this.edit[property] = receipt[property];
                }
            }
            $('#edit-receipt').modal('show');
        },
        update() {
            eventHub.$emit('start-loading');
            this.edit.post(`${this.scope}/receipts/${this.edit.id}`).then(res => {
                eventHub.$emit('stop-loading');
                this.$emit('update', this.edit);
                $('#edit-receipt').modal('hide');
                this.$notify({
                    group: 'notice',
                    type: 'success',
                    title: 'Success ',
                    text: 'Receipt successfully edited',
                    duration: 10000,
                    speed: 1000
                });
            }).catch(err => {
                eventHub.$emit('stop-loading')
                let message = '<ul>';
                for (let name in this.edit.errors.errors) {
                    message += '<li>' + this.edit.errors.get(name) + '</li>';
                }
                message += '</ul>';
                eventHub.$emit('alert-show', {
                    message: message,
                    status: 'error'
                });
                this.$notify({
                    group: 'notice',
                    type: 'error',
                    title: 'Error ',
                    text: message,
                    duration: 10000,
                    speed: 1000
                });
            })
        }
    }

}
</script>
