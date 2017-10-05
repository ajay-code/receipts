<template>
    <div class="row">
        <table class="table table-hover">
            <caption>
                <div class="col-sm-6">
                    STATISTIC
                </div>
                <div class="col-sm-4 col-sm-offset-2">
                    <select class="form-control" v-model="month" @change="load">
                        <option value="current">This Month</option>
                        <option value="last">Last Month</option>
                        <option value="last-three">Last Three Month</option>
                    </select>
                </div>
            </caption>
            <tbody>
                <tr>
                    <th> Total Sales </th>
                    <td v-text="'$'+ totalAmount"></td>
                </tr>
                <tr>
                    <th> Total Product Cost </th>
                    <td v-text="'$'+ totalProductCost"> </td>
                </tr>
                <tr>
                    <th> Total Postage Cost </th>
                    <td v-text="'$'+ totalPostageCost"></td>
                </tr>
                <tr>
                    <th>Net</th>
                    <td v-text="'$'+ netAmount"></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import eventHub from '../../eventHub'
export default {
    data() {
        return {
            totalAmount: 0,
            totalProductCost: 0,
            totalPostageCost: 0,
            month: 'current',
            firstLoad: true,
        }
    },
    mounted() {
        this.load();
    },
    props: ['scopeApi'],
    computed: {
        netAmount() {
            return this.totalAmount - (this.totalProductCost + this.totalPostageCost);
        }
    },

    methods: {
        load() {
            eventHub.$emit('start-loading');
            axios.get(`${this.scopeApi}/net/amount?net=${this.month}`).then(res => {
                this.totalAmount = parseInt(res.data.totalAmount);
                this.totalProductCost = parseInt(res.data.totalProductCost);
                this.totalPostageCost = parseInt(res.data.totalPostageCost);
                this.firstLoad = false;
                eventHub.$emit('stop-loading');

            }).catch(err => {
                eventHub.$emit('stop-loading');

                if (this.firstLoad) {
                    this.firstLoad = false;
                    return 0;
                }
                this.$notify({
                    group: 'notice',
                    type: 'error',
                    title: 'Error ',
                    text: 'Something Went Wrong',
                    duration: 10000,
                    speed: 1000
                });
                this.firstLoad = false;
            });
        }
    }
}
</script>
