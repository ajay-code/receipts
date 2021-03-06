<template>
    <div class="">
        <notifications group="notice" classes="vue-notification z-index" />
        <form id="print-form" class="form-horizontal" @submit.prevent="0">
            <input type="hidden" name="_token" :value="csrf">
            <h3>Sender</h3>

            <div class="form-group">
                <input v-model="form.sender_id" class="form-control" name="sender_id" placeholder="Sender ID (Optional)"></textarea>
            </div>

            <div class="form-group">
                <textarea v-model="form.sender" class="form-control" rows="10" name="sender" :placeholder="senderPlaceholder"></textarea>
            </div>

            <h3>Receivers</h3>
            <div class="form-group">
                <textarea v-model="form.receivers" class="form-control" rows="15" name="receivers" :placeholder="receiverPlaceholder"></textarea>
            </div>

            <br>
            <div class="form-group">
                <button class="btn btn-primary" @click="submit" :disabled="isDisabled">Store & Print</button>
                <button class="btn btn-success" @click="print" :disabled="!canPrint">Print</button>
                
            </div>
            
            <br>
            <div class="form-group">
                <span class="btn btn-primary padding-" @click="reset">Reset Form</span>
                
                <span class="btn btn-primary" data-toggle="modal" data-target="#import-receipts">Import</span>
            </div>
        </form>

        <div class="modal fade" id="import-receipts" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <h4 class="modal-title">Import Receipts</h4>
                    </div>
                    <div class="modal-body">
                        <form id="csv-upload" method="post" action="/receipts/csv/upload" @submit.prevent="importReceipts" enctype="multipart/form-data">
                            <input type="hidden" name="_token" :value="csrf">
                            <div class="form-group">
                                <label for="file">Choose file to upload</label>
                                <input type="file" name="file" @change="fileUploaded" required>
                            </div>
                            <button class="btn btn-primary">Store & Print</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <div class="overlay" v-if="loading">
            <loader></loader>
        </div>
        <iframe id="frame" name="frame" :src="src" class="hide" @load="loadingComplete"></iframe>
    </div>
</template>

<script>
import Form from '@/Form/Form';
import eventHub from '@/eventHub';
export default {
    data() {
        return {
            form: new Form({
                sender_id: getCookie('sender_id'),
                sender: getCookie('sender'),
                receivers: '',
            }),
            importForm: new Form({
                receipts: '',
            }),
            src: '',
            buttonDeactivate: false,
            loadCount: 0,
            senderPlaceholder: 'Name \nAddress \nPhone \nEmail',
            receiverPlaceholder: 'Receiver 1 Name \nAddress \nPhone \nEmail \nProducts \namount (starting with "$")  \n\r\nReceiver 2 Name \nAddress \nPhone \nEmail \nProduct \namount (starting with "$")',
            pdfName: '',
            loading: false
        }
    },
    mounted() {
    },
    computed: {
        csrf() {
            return window.token.content;
        },
        isDisabled(){
            return (!this.form.sender || !this.form.receivers || this.buttonDeactivate)
        },
        canPrint(){
            return !!(this.src);
        }
    },
    methods: {
        print(){
            window.frames['frame'].print();
        },
        submit() {
            this.loading = true;
            this.buttonDeactivate = true;
            setCookie('sender_id', this.form.sender_id);
            setCookie('sender', this.form.sender);
            this.form.post('/print', this.form).then(res => {
                this.resetReceiver(); 
                this.buttonDeactivate = false;
                
                console.log(res);
                if (res.pdfName) {
                    this.pdfName = res.pdfName;
                    this.loadPdf(res);
                } else {
                    this.loading = false;
                    
                    this.$notify({
                        group: 'notice',
                        type: 'error',
                        title: 'Error ',
                        text: 'Something went wrong',
                        duration: 10000,
                        speed: 1000
                    });
                }
            }).catch((error) => {
                this.loading = false;
                this.buttonDeactivate = false;
                
                this.$notify({
                    group: 'notice',
                    type: 'error',
                    title: 'Error ',
                    text: 'Something went wrong',
                    duration: 10000,
                    speed: 1000
                });
            });
        },

        loadPdf(res) {
            window.data = res;
            if (!this.isMobile()) {
                this.src = '/pdf/' + this.pdfName;
            } else {
                this.loading = false;
                this.src = '/pdf/' + this.pdfName +  '/download';
            }
        },

        loadingComplete() {
            if (!this.isMobile()) {
                this.loading = false;
                if (this.loadCount !== 0) {
                    window.frames['frame'].print();
                }
                this.loadCount++;
            }
        },
        isMobile() {
            return window.isMobile();
        },

        resetReceiver() {
            this.form.receivers = '';
        },

        resetSender() {
            this.form.sender = '';
        },
        reset() {
            this.form.reset();
        },
        fileUploaded($event) {
            window.file = $event.target;
        },
        importReceipts() {
            let form = $('#csv-upload')[0]
            var data = new FormData(form);
            axios.post('/receipts/csv/upload', data, {
            }).then(res => {
                console.log(res);
                $('#import-receipts').modal('hide');
                this.pdfName = res.data.pdfName;
                this.loadPdf(res.data);
            }).catch(error => {
                let message = error.response.data.file.toString();
                this.$notify({
                    group: 'notice',
                    type: 'error',
                    title: 'Error ',
                    text: message,
                    duration: 10000,
                    speed: 1000
                });
            });
        }
    }
}
</script>
