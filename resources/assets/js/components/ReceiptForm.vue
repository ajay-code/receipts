<template>
    <div class="">
        <form id="print-form" class="form-horizontal" action="/print" method="post" target="_blank"  >
                <input v-if="onMobile" type="hidden" name="mobile" value="true">
                <input type="hidden" name="_token" :value="csrf">
                <h3>Sender</h3>  
                <div class="form-group">
                    <textarea v-model="form.sender" class="form-control" rows="10" name="sender" 
                    :placeholder="senderPlaceholder"></textarea>
                </div>
                

                <h3>Receivers</h3>  
                <div class="form-group">
                    <textarea v-model="form.receivers" class="form-control" rows="15" name="receivers" :placeholder="receiverPlaceholder"></textarea>
                </div>
                
                
                <br>
                <br>
                <div class="form-group">
                    <span class="btn btn-primary" >Import</span>
                    <span class="btn btn-primary" @click="reset">Reset</span>
                    <span class="btn btn-primary" @click="submit">Print</span>
                </div>
            </form>
            
                

            <div class="overlay" v-if="loading">
                <loader></loader>
            </div>
            <iframe id="frame" name="frame" src="" class="hide" @load="loadingComplete"></iframe>
    </div>
</template>

<script>
    import Form from '../Form/Form';
    export default {
        data(){
            return {
                form : new Form({
                    sender: '',
                    receivers: '',
                }),
                loadCount: 0,
                senderPlaceholder: 'Name \nAddress \nPhone \nEmail',
                receiverPlaceholder: 'Receiver 1 Name \nAddress \nPhone \nEmail \nProducts \namount (starting with "$")  \n\r\nReceiver 2 Name \nAddress \nPhone \nEmail \nProduct \namount (starting with "$")',
                pdfName:'',
                loading: false
            }
        },
        mounted() {
        },
        computed: {
            csrf(){
                return window.token.content;
            },
            onMobile(){
                return this.isMobile();
            }
        },
        methods: { 
            submit(){
                    this.loading = true;
                    this.form.post('/print', this.form).then(res => {
                        this.resetReceiver();
                        console.log(res);
                        this.pdfName = res.pdfName;
                        this.loadPdf(res);
                    }).catch((error) => {
                        this.loadingFail();
                      });
            },

            loadPdf(res){
                window.data = res;
                    if(!this.isMobile()){
                        $('#frame').attr('src', '/pdf/'+ this.pdfName);
                    }else{
                        this.loading = false;
                        $('#frame').attr('src', '/pdf/' + this.pdfName + '/download');
                    }
                },

            loadingComplete(){
                    if(!this.isMobile()){
                        this.loading = false;
                        if(this.loadCount !== 0){
                            window.frames['frame'].print();
                        }
                        this.loadCount++; 
                    }
            },
            loadingFail(){
                    this.loading = false;
                    alert('Loading Failed')
            },
            isMobile(){
                return window.isMobile();
            },


            resetReceiver(){
                this.form.receivers = '';
            },

            resetSender(){
                this.form.sender = '';
            },
            reset(){
                this.form.reset();
            }
        }
}
</script>
