import Form from '../../Form/Form';
import eventHub from '../../eventHub';
import emptyReceipt from '../../empty/Receipt';
import emptyPageInfo from '../../empty/PageInfo';
export default {
    data() {
        return {
            receipts: [],
            loadCount: 0,
            printList: [],
            selectAllReceipts: false,
            search: '',
            order: 'latest',
            records: 100,
            pageInfo: emptyPageInfo,
            edit: new Form(emptyReceipt),
            editIndex: '',
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
        this.loadReceipts();
        eventHub.$on('print-single-receipt', this.printSingleReceipt)
        eventHub.$on('add-to-print-list', this.addToPrintList)
        eventHub.$on('remove-from-print-list', this.removeFromPrintList)
        eventHub.$on('load-page', this.reload);
        eventHub.$on('edit-receipt', this.editReceipt);
        eventHub.$on('delete-receipt', this.deleteReceipt);
    },
    methods: {
        loadReceipts() {
            axios.get(`${this.scopeApi}/receipts`).then(res => {
                this.receipts = res.data.data;
                this.updatePageInfo(res.data);
            }).catch(err => {
                this.sendErrorNotice();
            })
        },
        reload(page) {
            axios.get(`${this.scopeApi}/receipts?search=${this.search}&records=${this.records}&page=${page}`).then(res => {
                this.receipts = res.data.data;
                this.updatePageInfo(res.data);
            }).catch(err => {
                this.sendErrorNotice();
            })
        },
        reloadFromFirstPage() {
            axios.get(`${this.scopeApi}/receipts?search=${this.search}&records=${this.records}`).then(res => {
                this.receipts = res.data.data;
                this.updatePageInfo(res.data);
            }).catch(err => {
                this.sendErrorNotice();
            })
        },
        deleteReceipt(ReceiptId) {
            axios.get(`${this.scopeApi}/receipts/delete/${ReceiptId}`)
                .then(res => {
                    this.sendSuccessNotice('Receipt Deleted Successfully');
                    let index = this.receipts.map(function (x) {
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
            window.axios.post(`${this.scopeApi}/receipts/delete`, {
                    receipts: this.printList
                }).then(res => {
                    this.sendSuccessNotice('Receipt Deleted Successfully');
                    this.printList.forEach((ReceiptId) => {
                        let index = this.receipts.map(function (x) {
                            return x.id;
                        }).indexOf(ReceiptId);
                        this.receipts.splice(index, 1);
                    });
                    this.clearPrintList();
                })
                .catch(err => {
                    this.sendErrorNotice();
                })
        },
        printSingleReceipt(receiptId) {
            eventHub.$emit('start-loading');
            axios.get(`${this.scope}/receipts/print/${receiptId}`).then(res => {
                this.loadSinglePdf(res.data.pdfName)
            })
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
        loadingComplete() {
            if (!window.isMobile()) {
                eventHub.$emit('stop-loading')
                if (this.loadCount !== 0) {
                    console.log(this.loadCount)
                    window.frames['frame'].print();
                    this.loadCount++;
                }
                this.loadCount++;
            }
        },
        loadingFail() {
            eventHub.$emit('stop-loading')
            alert('Loading Failed')
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
        print() {
            if (this.printList.length) {
                eventHub.$emit('start-loading');
                axios.post(`${this.scope}/receipts/print`, {
                    receipts: this.printList
                }).then(res => {
                    this.loadSinglePdf(res.data.pdfName)
                })
            } else {
                alert('please select atleast on receipt')
            }
        },
        updatePageInfo(info) {
            this.pageInfo.current_page = info.current_page;
            this.pageInfo.last_page = info.last_page;
            this.pageInfo.total = info.total;
            this.pageInfo.next_page_url = info.next_page_url;
            this.pageInfo.prev_page_url = info.prev_page_url;
        },
        reload(page) {
            axios.get(`${this.scopeApi}/receipts?search=${this.search}&records=${this.records}&page=${page}`).then(res => {
                this.receipts = res.data.data;
                this.updatePageInfo(res.data);
            }).catch(err => {
                this.sendErrorNotice();
            })
        },
        editReceipt(ReceiptId) {
            console.log('ajay');
            this.editIndex = this.receipts.map(function (x) {
                return x.id;
            }).indexOf(ReceiptId);
            eventHub.$emit('edit', this.receipts[this.editIndex]);
        },
        updateReceipt(EditedReceipt) {
            let receipt = this.receipts[this.editIndex];
            for (let property in receipt) {
                if (property.includes('address')) {
                    receipt[property] = EditedReceipt[property].replace("\n", '|');
                } else {
                    receipt[property] = EditedReceipt[property];
                }
            }
        },
        update() {
            eventHub.$emit('start-loading');
            this.edit.post(`${this.scope}/receipts/${this.edit.id}`).then(res => {
                eventHub.$emit('stop-loading')
                this.copyFromEdit();
                $('#edit-receipt').modal('hide');
                this.sendSuccessNotice('Receipt successfully edited')
            }).catch(err => {
                eventHub.$emit('stop-loading')
                let message = '<ul>';
                for (let name in this.edit.errors.errors) {
                    console.log(name)
                    message += '<li>' + this.edit.errors.get(name) + '</li>';
                }
                message += '</ul>';
                this.sendErrorNotice(message);
            })
        },
        clearPrintList() {
            eventHub.$emit('clear-every-receipt');
            this.printList = [];
        },
        downloadCsv() {
            if (this.printList.length) {
                eventHub.$emit('start-loading');
                let inputs = '';
                this.printList.forEach(function (element) {
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
                    eventHub.$emit(`select-${this.receipts[receipt].id}`);
                }
            } else {
                for(let receipt in this.receipts){
                    eventHub.$emit(`deselect-${this.receipts[receipt].id}`);
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