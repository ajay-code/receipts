import eventHub from '../../eventHub';
export default {
        methods: {
            loadReceipts(){
                axios.get(`${this.scopeApi}/receipts`).then( res => {
                  this.receipts = res.data.data;
                  this.updatePageInfo(res.data);
                }).catch( err => {
                  alert(err);
                } )
            },
            printSingleReceipt(receiptId){
              this.loading = true;
              axios.get(`${this.scope}/receipts/print/${receiptId}`).then(res => {
                  this.loadSinglePdf(res.data.pdfName)
              })
            },
            loadSinglePdf(pdf){
              let url = '';
              if(window.isMobile()){

                    url = `/pdf/${pdf}/download`;
                    this.loading = false;
                }else{
                    url = `/pdf/${pdf}`;
                }
              $('#print-frame').attr('src', url)
            },
            loadingComplete(){
                  if(!window.isMobile()){
                    this.loading = false;
                    if(this.loadCount !== 0){
                        window.frames['frame'].print();
                    this.loadCount++; 
                    }
                    this.loadCount++; 
                  }
            },
            loadingFail(){
                    this.loading = false;
                    alert('Loading Failed')
            },
            addToPrintList(receiptId){
              this.printList.push(receiptId); 
            },
            removeFromPrintList(receiptId){
              var index = this.printList.indexOf(receiptId);
              this.printList.splice(index, 1);
            },
            print(){
              if(this.printList.length){
                this.loading = true;
                
                axios.post(`${this.scope}/receipts/print`, { receipts: this.printList }).then( res => {
                        this.loadSinglePdf(res.data.pdfName)
                    })
              }else{
                alert('please select atleast on receipt')
              }
            },

            updatePageInfo(info){
              this.pageInfo.current_page = info.current_page;
              this.pageInfo.last_page = info.last_page;
              this.pageInfo.total = info.total;
              this.pageInfo.next_page_url = info.next_page_url;
              this.pageInfo.prev_page_url = info.prev_page_url;
            },

            reload(page){
              axios.get(`${this.scopeApi}/receipts?search=${this.search}&records=${this.records}&page=${page}`).then( res => {
                  this.receipts = res.data.data;
                  this.updatePageInfo(res.data);
                }).catch( err => {
                  alert(err);
                })
            },
            
            editReceipt(ReceiptId){
              this.editIndex = this.receipts.map(function(x) {return x.id; }).indexOf(ReceiptId); 
              this.copyToEdit(this.receipts[this.editIndex]);
              $('#edit-receipt').modal('show');
            },
            copyToEdit(receipt){
                this.edit.id = receipt.id;
                this.edit.receiver_address = receipt.receiver_address.replace('|', "\n");
                this.edit.receiver_email = receipt.receiver_email;
                this.edit.receiver_name = receipt.receiver_name;
                this.edit.receiver_phone = receipt.receiver_phone;
                this.edit.receiver_postcode = receipt.receiver_postcode;
                this.edit.receiver_product = receipt.receiver_product;
                this.edit.sender_address = receipt.sender_address.replace('|', "\n");
                this.edit.sender_email = receipt.sender_email;
                this.edit.sender_name = receipt.sender_name;
                this.edit.sender_phone = receipt.sender_phone;
                this.edit.sender_postcode = receipt.sender_postcode;
                this.edit.amount = receipt.amount;
                this.edit.tracking = receipt.tracking;
            },
            copyFromEdit(){
              let receipt = this.receipts[this.editIndex];

              receipt.id = this.edit.id;
              receipt.receiver_address = this.edit.receiver_address;
              receipt.receiver_email = this.edit.receiver_email;
              receipt.receiver_name = this.edit.receiver_name;
              receipt.receiver_phone = this.edit.receiver_phone;
              receipt.receiver_postcode = this.edit.receiver_postcode;
              receipt.receiver_product = this.edit.receiver_product;
              receipt.sender_address = this.edit.sender_address;
              receipt.sender_email = this.edit.sender_email;
              receipt.sender_name = this.edit.sender_name;
              receipt.sender_phone = this.edit.sender_phone;
              receipt.sender_postcode = this.edit.sender_postcode;
              receipt.amount = this.edit.amount;
              receipt.tracking = this.edit.tracking;

            },

            update(){
              this.loading = true;
              this.edit.post(`${this.scope}/receipts/${this.edit.id}`).then( res => {
                this.loading = false;
                this.copyFromEdit();

                $('#edit-receipt').modal('hide');

                eventHub.$emit('alert-show', {message: 'receipt successfully edited' , status : 'success'});

              }).catch( err => {
                this.loading = false;
                let message = [];
                for(let name in this.edit.errors.errors){
                  console.log(name)
                  message.push(this.edit.errors.get(name));
                }
                console.log
                eventHub.$emit('alert-show', {message: message , status : 'error'});
                
              })

            },
            clearPrintList(){
              
              eventHub.$emit('clear-every-receipt');
              this.printList = [];
            }

        }
    }
