<template>
    <div v-if="totalPages">
        <paginate ref="paginate" :page-count="totalPages" :click-handler="loadPage" :prev-text="'Prev'" :next-text="'Next'" :container-class="'Page pagination'">
            >
        </paginate>
    </div>
</template>

<script>
import eventHub from '@/eventHub';
import Paginate from 'vuejs-paginate';

export default {
    props: ['pageInfo'],
    mounted() {
    },
    components: {
        paginate: Paginate
    },
    computed: {
        pages() {
            let pages = []
            for (let i = 1; i <= this.totalPages; i++) {
                pages.push(i);
            }
            return pages;
        },
        totalPages() {
            return this.pageInfo.total_pages || this.pageInfo.last_page;
        },
        changePage(){
            return this.pageInfo.current_page;
        }

    },
    watch: {
        changePage(){
            this.$refs.paginate.selected = this.pageInfo.current_page - 1;
        }
    },
    methods: {
        prev() {
            if (this.pageInfo.current_page == 1) {
                return 0;
            }
            let page = this.pageInfo.current_page - 1;
            eventHub.$emit('load-page', page);
        },
        next() {
            if (this.pageInfo.current_page == this.totalPages) {
                return 0;
            }
            let page = this.pageInfo.current_page + 1;
            eventHub.$emit('load-page', page);
        },
        loadPage(page) {
            eventHub.$emit('load-page', page);
        }
    }
}
</script>
