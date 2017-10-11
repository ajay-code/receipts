<template>
    <div class="container">
        
    </div>
</template>

<script>
    export default {
        data(){
            return {
                scope: '',
                scopeApi: '/api'
            }
        },
        props: {
            admin: {
                type: Boolean,
            }
        },
        created(){
            if(this.admin){
                this.scope = '/admin';
                this.scopeApi = 'admin/api';
            }
        },
        mounted() {
        }
    }
</script>
