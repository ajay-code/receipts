<template>
    <div class="modal fade" id="show-detail" tabindex="-1" role="dialog" aria-labelledby="gridSystemModalLabel">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <h4 class="modal-title" id="gridSystemModalLabel">
                        <span v-text="setting.name"></span>
                    </h4>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="col-xs-6">
                                <span class="bold" v-text="'Font'"></span>
                            </div>
                            <div class="col-xs-6">
                                <span v-text="setting.font"></span>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="col-xs-6">
                                <span class="bold" v-text="'Font Size'"></span>
                            </div>
                            <div class="col-xs-6">
                                <span v-text="setting.font_size"></span>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="col-xs-6">
                                <span class="bold" v-text="'Page Width'"></span>
                            </div>
                            <div class="col-xs-6">
                                <span v-text="setting.page_width"></span>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="col-xs-6">
                                <span class="bold" v-text="'Page Height'"></span>
                            </div>
                            <div class="col-xs-6">
                                <span v-text="setting.page_height"></span>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="col-xs-6">
                                <span class="bold" v-text="'Sender ID From Top'"></span>
                            </div>
                            <div class="col-xs-6">
                                <span v-text="setting.top_sender_id"></span>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="col-xs-6">
                                <span class="bold" v-text="'Sender ID From Left'"></span>
                            </div>
                            <div class="col-xs-6">
                                <span v-text="setting.left_sender_id"></span>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="col-xs-6">
                                <span class="bold" v-text="'Sender From Top'"></span>
                            </div>
                            <div class="col-xs-6">
                                <span v-text="setting.top_sender"></span>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="col-xs-6">
                                <span class="bold" v-text="'Sender From Left'"></span>
                            </div>
                            <div class="col-xs-6">
                                <span v-text="setting.left_sender"></span>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="col-xs-6">
                                <span class="bold" v-text="'Receiver From Top'"></span>
                            </div>
                            <div class="col-xs-6">
                                <span v-text="setting.top_receiver"></span>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="col-xs-6">
                                <span class="bold" v-text="'Receiver From Left'"></span>
                            </div>
                            <div class="col-xs-6">
                                <span v-text="setting.left_receiver"></span>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="col-xs-6">
                                <span class="bold" v-text="'Product From Top'"></span>
                            </div>
                            <div class="col-xs-6">
                                <span v-text="setting.top_product"></span>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="col-xs-6">
                                <span class="bold" v-text="'Product From Left'"></span>
                            </div>
                            <div class="col-xs-6">
                                <span v-text="setting.left_product"></span>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="col-xs-6">
                                <span class="bold" v-text="'Date From Top'"></span>
                            </div>
                            <div class="col-xs-6">
                                <span v-text="setting.top_date"></span>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="col-xs-6">
                                <span class="bold" v-text="'Date From Left'"></span>
                            </div>
                            <div class="col-xs-6">
                                <span v-text="setting.left_date"></span>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="col-xs-6">
                                <span class="bold" v-text="'Amount From Top'"></span>
                            </div>
                            <div class="col-xs-6">
                                <span v-text="setting.top_amount"></span>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="col-xs-6">
                                <span class="bold" v-text="'Amount From Left'"></span>
                            </div>
                            <div class="col-xs-6">
                                <span v-text="setting.left_amount"></span>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="col-xs-6">
                                <span class="bold" v-text="'Postcode From Top'"></span>
                            </div>
                            <div class="col-xs-6">
                                <span v-text="setting.top_postcode"></span>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="col-xs-6">
                                <span class="bold" v-text="'Postcode From Left'"></span>
                            </div>
                            <div class="col-xs-6">
                                <span v-text="setting.left_postcode"></span>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="col-xs-6">
                                <span class="bold" v-text="'Phone From Top'"></span>
                            </div>
                            <div class="col-xs-6">
                                <span v-text="setting.top_phone"></span>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="col-xs-6">
                                <span class="bold" v-text="'Phone From Left'"></span>
                            </div>
                            <div class="col-xs-6">
                                <span v-text="setting.left_phone"></span>
                            </div>
                        </div>

                    </div>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>
    <!-- /.modal -->
</template>
<script>
    import eventHub from '@/eventHub';
    export default {
        props: ["setting"],
        mounted() {
            eventHub.$on('show-setting-detail', this.show);
            eventHub.$on('hide-setting-detail', this.hide);
        },
        methods: {
            show() {
                $('#show-detail').modal('show');
            },
            hide() {
                $('#show-detail').modal('hide');
            }
        }
    };
</script>