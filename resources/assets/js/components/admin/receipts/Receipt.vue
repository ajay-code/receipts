<template>
        <tr>
            <td>
                <input type="checkbox" v-model="addToPrintList" @change="toggleFromPrintList">
            </td>
            <td v-text="receipt.sender_name"> </td>
            <td v-text="receipt.sender_id"> </td>
            <td v-text="receipt.sender_email"> </td>
            <td v-text="receipt.receiver_name"> </td>
            <td v-text="receipt.receiver_email"> </td>
            <td v-text="address"></td>
            <td v-text="receipt.receiver_postcode"></td>
            <td v-text="receipt.receiver_phone"></td>
            <td v-text="receipt.receiver_product"></td>
            <td v-text="receipt.amount"></td>
            <td v-text="receipt.tracking"></td>
            <td>
                <span class="pointer" @click="edit"><i class="fa fa-edit" title="edit"></i> </span>
                <span class="pointer" @click="print"> <i class="fa fa-print text-primary"  title="print"></i> </span>
                <span class="pointer" @click="deleteReceipt"> <i class="fa fa-trash-o text-danger"  title="print"></i> </span>
            </td>
        </tr>

       
</template>

<script>
import eventHub from '../../../eventHub'

    export default {
        data(){
            return {
                addToPrintList: false ,
                localReceipt: ''
            }
        },
        props: ['receipt'],
        computed: {
            address(){
                return this.receipt.receiver_address.replace(/\|/g, ", ")
            }
        },
        mounted() {
                this.localReceipt = this.receipt
                eventHub.$on('clear-every-receipt', this.clearedFromPrintList);
                eventHub.$on('select-all', this.selectAll);              
                eventHub.$on('deselect-all', this.deselectAll);
        },
        methods: {
            print(){
                eventHub.$emit('print-single-receipt', this.receipt.id)
            },
            toggleFromPrintList(){
                if(this.addToPrintList){
                    eventHub.$emit('add-to-print-list', this.receipt.id)
                }else{
                    eventHub.$emit('remove-from-print-list', this.receipt.id)
                }
            },
            clearedFromPrintList(){
                this.addToPrintList = false;
            },
            edit(){
                eventHub.$emit('edit-receipt', this.receipt.id);
            },
            deleteReceipt(){
                // alert('are you sure you want to delete ' + this.receipt.id);
                eventHub.$emit('delete-receipt', this.receipt.id);
            },
            selectAll(){
                this.addToPrintList = true;
                this.toggleFromPrintList()
            },
            deselectAll(){
                this.addToPrintList = false;
                this.toggleFromPrintList()
            }
        }
    }
</script>
