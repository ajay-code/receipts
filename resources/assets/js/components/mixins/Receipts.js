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
                        console.log(this.loadCount) 
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
                this.edit.sender_id = receipt.sender_id;
                this.edit.sender_email = receipt.sender_email;
                this.edit.sender_name = receipt.sender_name;
                this.edit.sender_phone = receipt.sender_phone;
                this.edit.sender_postcode = receipt.sender_postcode;
                this.edit.amount = receipt.amount;
                this.edit.product_cost = receipt.product_cost;
                this.edit.postage_cost = receipt.postage_cost;
                this.edit.tracking = receipt.tracking;
                this.edit.created_at = receipt.created_at;
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
              receipt.sender_id = this.edit.sender_id;
              receipt.sender_email = this.edit.sender_email;
              receipt.sender_name = this.edit.sender_name;
              receipt.sender_phone = this.edit.sender_phone;
              receipt.sender_postcode = this.edit.sender_postcode;
              receipt.amount = this.edit.amount;
              receipt.product_cost = this.edit.product_cost;
              receipt.postage_cost = this.edit.postage_cost;
              receipt.tracking = this.edit.tracking;
              receipt.created_at = this.edit.created_at ;
              
            },

            update(){
              this.loading = true;
              this.edit.post(`${this.scope}/receipts/${this.edit.id}`).then( res => {
                this.loading = false;
                this.copyFromEdit();

                $('#edit-receipt').modal('hide');
                this.$notify({
                        group: 'notice',
                        type: 'success',
                        title: 'Success ',
                        text: 'Receipt successfully edited',
                        duration: 10000,
                        speed: 1000
                });

              }).catch( err => {
                this.loading = false;
                let message = '<ul>';
                for(let name in this.edit.errors.errors){
                  console.log(name)
                  message += '<li>' + this.edit.errors.get(name) + '</li>';
                }
                message += '</ul>';
                eventHub.$emit('alert-show', {message: message , status : 'error'});
                   this.$notify({
                          group: 'notice',
                          type: 'error',
                          title: 'Error ',
                          text: message,
                          duration: 10000,
                          speed: 1000
                  });
              })

            },
            clearPrintList(){
              eventHub.$emit('clear-every-receipt');
              this.printList = [];
            },

            downloadCsv(){
                if(this.printList.length){
                  this.loading = true;
                  let inputs = '';
                  this.printList.forEach(function(element) {
                    inputs += `<input name="receipts[]" value="${element}">`; 
                  }, this);

                  jQuery(`<form action="${this.scope}/receipts/csv" method="post" target="csv-frame">
                      <input name="_token" value="${Laravel.csrfToken}">
                     ${inputs}
                  </form>`)
                  .appendTo('body').submit().remove()
                  this.loading = false;
                }else{
                  alert('please select atleast on receipt')
                }
            },

            selectAll(){
              console.log(this.selectAllReceipts);
              if(this.selectAllReceipts){
                eventHub.$emit('select-all');
              }else{
                eventHub.$emit('deselect-all');
              }
            }

        }
    }
