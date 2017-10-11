<template>
    <div>
        <div class="overlay" v-if="loading">
            <moonLoader color="#3396FF"></moonLoader>
        </div>
    </div>
</template>

<script>
import eventHub from '../../eventHub';

export default {
    data() {
        return {
            loading: false
        }
    },
    components: {
        moonLoader: require('vue-spinner/src/MoonLoader.vue'),
    },
    mounted() {
        eventHub.$on('start-loading', this.startLoading);
        eventHub.$on('stop-loading', this.stopLoading);
    },
    methods: {
        startLoading() {
            this.loading = true;
        },
        stopLoading() {
            this.loading = false;
        }
    }
}


</script>