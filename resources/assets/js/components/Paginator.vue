<template>
    <div v-if="totalPages">
        <paginate :page-count="totalPages" :click-handler="loadPage" :prev-text="'Prev'" :next-text="'Next'" :container-class="'Page pagination'">
            >
        </paginate>
    </div>
</template>

<script>
import eventHub from '@/eventHub'

export default {
    props: ['pageInfo'],
    mounted() {
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
