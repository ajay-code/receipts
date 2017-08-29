<template>
    <nav aria-label="Page navigation">
      <ul class="pagination">
        <li :class="{disabled : pageInfo.current_page == 1}" @click.prevent="prev">
          <a href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li v-for="page in pages"  :class="{active: page == pageInfo.current_page}" @click.prevent="singlePage(page)"><a href="#" v-text="page"></a> </li>
        <li :class="{disabled : pageInfo.current_page == totalPages}" @click.prevent="next">
          <a href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
</template>

<script>
import eventHub from '../eventHub'

    export default {
        data(){
            return {
            }
        },
        props: ['pageInfo'],
        mounted() {
        },
        computed: {
            pages(){
                let pages = []
                // let totalPages = this.pageInfo.total_pages || this.pageInfo.last_page;
                for(let i = 1; i<=this.totalPages; i++){
                    pages.push(i); 
                }
                return pages;
            },
            totalPages(){
                return this.pageInfo.total_pages || this.pageInfo.last_page;
            }

        },
        methods: {
            prev(){
                if(this.pageInfo.current_page == 1){
                    return 0;
                }
                let page = this.pageInfo.current_page - 1;
                eventHub.$emit('load-page', page);
            },
            next(){
                 if(this.pageInfo.current_page == this.totalPages){
                    return 0;
                }
                let page = this.pageInfo.current_page + 1;
                eventHub.$emit('load-page', page);
            },
            singlePage(page){
                eventHub.$emit('load-page', page);
            }
        }
    }
</script>
