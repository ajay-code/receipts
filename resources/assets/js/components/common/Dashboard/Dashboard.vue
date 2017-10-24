<template>
    <div>
        <div class="text-center">
            <button class="btn btn-success" :class="{ active: use == 'Day' }" @click="updateUseProperty('Day')">Day</button>
            <button class="btn btn-success" :class="{ active: use == 'Month' }" @click="updateUseProperty('Month')">Month</button>
            <button class="btn btn-success" :class="{ active: use == 'Year' }" @click="updateUseProperty('Year')">Year</button>
        </div>
        <br>
        <div class="text-center change-date">
            <span <i class="fa fa-chevron-left" @click="decreaseDates">
                </i>
            </span>
            <span v-if="use == 'Day'" class="" v-text="date "></span>
            <span v-else-if="use == 'Month'" class="" v-text="month "></span>
            <span v-else-if="use == 'Year'" class="" v-text="year"></span>
            <span>
                <i class="fa fa-chevron-right" @click="increaseDates"></i>
            </span>
        </div>
        <br>
        <div class="row">
            <div v-if="admin">
                <div class="col-sm-6 col-md-4">
                    <div class="dashboard_item">
                        <div class="col-xs-8 dashboard_item_left">
                            <p class="dashboard_item_title">Total Receipts</p>
                            <span class="dashboard_item_value" v-text="data.totalReceipts"></span>
                        </div>
                        <div class="col-xs-4 dashboard_item_right blue text-center">
                            <div class="dashboard_item_icon">
                                <i class="fa fa-print"></i>
                            </div>
                        </div>
                        <div class="clearfix"></div>
                    </div>

                    <div class="dashboard_item">
                        <div class="col-xs-8 dashboard_item_left">
                            <p class="dashboard_item_title">Top Selling</p>
                            <span class="dashboard_item_value" v-text="data.topSelling || 'N A'"></span>
                        </div>
                        <div class="col-xs-4 dashboard_item_right blue text-center">
                            <div class="dashboard_item_icon">
                                <i class="fa fa-trophy"></i>
                            </div>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                    <div class="dashboard_item">
                        <div class="col-xs-8 dashboard_item_left">
                            <p class="dashboard_item_title">Top User</p>
                            <span class="dashboard_item_value" v-text="data.topUser|| 'N A'"></span>
                        </div>
                        <div class="col-xs-4 dashboard_item_right blue text-center">
                            <div class="dashboard_item_icon">
                                <i class="fa fa-trophy"></i>
                            </div>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                </div>

                <div class="col-sm-6 col-md-4">
                    <div class="dashboard_item">
                        <div class="col-xs-8 dashboard_item_left">
                            <p class="dashboard_item_title">Total Users</p>
                            <span class="dashboard_item_value" v-text="data.totalUsers"></span>
                        </div>
                        <div class="col-xs-4 dashboard_item_right blue text-center">
                            <div class="dashboard_item_icon">
                                <i class="fa fa-user"></i>
                            </div>
                        </div>
                        <div class="clearfix"></div>
                    </div>

                    <div class="dashboard_item">
                        <div class="col-xs-8 dashboard_item_left">
                            <p class="dashboard_item_title">Total Expired Users</p>
                            <span class="dashboard_item_value" v-text="data.totalExpiredUsers "></span>
                        </div>
                        <div class="col-xs-4 dashboard_item_right blue text-center">
                            <div class="dashboard_item_icon">
                                <i class="fa fa-user"></i>
                            </div>
                        </div>
                        <div class="clearfix"></div>
                    </div>

                    <div class="dashboard_item">
                        <div class="col-xs-8 dashboard_item_left">
                            <p class="dashboard_item_title">New Registrations
                            </p>
                            <span class="dashboard_item_value" v-text="data.newRegistrations"></span>
                        </div>
                        <div class="col-xs-4 dashboard_item_right blue text-center">
                            <div class="dashboard_item_icon">
                                <i class="fa fa-user"></i>
                            </div>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                </div>

                <div class="col-sm-6 col-md-4">
                    <div class="dashboard_item">
                        <div class="col-xs-8 dashboard_item_left">
                            <p class="dashboard_item_title">Total Manufactures</p>
                            <span class="dashboard_item_value" v-text="data.totalManufactures"></span>
                        </div>
                        <div class="col-xs-4 dashboard_item_right blue text-center">
                            <div class="dashboard_item_icon">
                                <i class="fa fa-user"></i>
                            </div>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                    <div class="dashboard_item">
                        <div class="col-xs-8 dashboard_item_left">
                            <p class="dashboard_item_title">Total Wholesalers</p>
                            <span class="dashboard_item_value" v-text="data.totalWholesalers"></span>
                        </div>
                        <div class="col-xs-4 dashboard_item_right blue text-center">
                            <div class="dashboard_item_icon">
                                <i class="fa fa-user"></i>
                            </div>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                    <div class="dashboard_item">
                        <div class="col-xs-8 dashboard_item_left">
                            <p class="dashboard_item_title">Total Retailers</p>
                            <span class="dashboard_item_value" v-text="data.totalRetailers"></span>
                        </div>
                        <div class="col-xs-4 dashboard_item_right blue text-center">
                            <div class="dashboard_item_icon">
                                <i class="fa fa-user"></i>
                            </div>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                    <div class="dashboard_item">
                        <div class="col-xs-8 dashboard_item_left">
                            <p class="dashboard_item_title">Total Normal Users</p>
                            <span class="dashboard_item_value" v-text="data.totalNormalUsers"></span>
                        </div>
                        <div class="col-xs-4 dashboard_item_right blue text-center">
                            <div class="dashboard_item_icon">
                                <i class="fa fa-user"></i>
                            </div>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                </div>
            </div>

            <div v-if="!admin">
                <div class="col-sm-6 col-md-6">
                    <div class="dashboard_item">
                        <div class="col-xs-8 dashboard_item_left">
                            <p class="dashboard_item_title">Total Receipts</p>
                            <span class="dashboard_item_value" v-text="data.totalReceipts"></span>
                        </div>
                        <div class="col-xs-4 dashboard_item_right blue text-center">
                            <div class="dashboard_item_icon">
                                <i class="fa fa-print"></i>
                            </div>
                        </div>
                        <div class="clearfix"></div>
                    </div>

                    <div class="dashboard_item">
                        <div class="col-xs-8 dashboard_item_left">
                            <p class="dashboard_item_title">Top Selling</p>
                            <span class="dashboard_item_value" v-text="data.topSelling || 'N A'"></span>
                        </div>
                        <div class="col-xs-4 dashboard_item_right blue text-center">
                            <div class="dashboard_item_icon">
                                <i class="fa fa-trophy"></i>
                            </div>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                </div>

                <div class="col-sm-6 col-md-6">
                    <div class="dashboard_item">
                        <div class="col-xs-8 dashboard_item_left">
                            <p class="dashboard_item_title">Total Sales</p>
                            <span class="dashboard_item_value" v-text="data.totalSales"></span>
                        </div>
                        <div class="col-xs-4 dashboard_item_right blue text-center">
                            <div class="dashboard_item_icon">
                                <i class="fa fa-user"></i>
                            </div>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                    <div class="dashboard_item">
                        <div class="col-xs-8 dashboard_item_left">
                            <p class="dashboard_item_title">Total Product Cost</p>
                            <span class="dashboard_item_value" v-text="data.totalProductCost"></span>
                        </div>
                        <div class="col-xs-4 dashboard_item_right blue text-center">
                            <div class="dashboard_item_icon">
                                <i class="fa fa-user"></i>
                            </div>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                    <div class="dashboard_item">
                        <div class="col-xs-8 dashboard_item_left">
                            <p class="dashboard_item_title">Total Delivery Cost</p>
                            <span class="dashboard_item_value" v-text="data.totalDeliveryCost"></span>
                        </div>
                        <div class="col-xs-4 dashboard_item_right blue text-center">
                            <div class="dashboard_item_icon">
                                <i class="fa fa-user"></i>
                            </div>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                    <div class="dashboard_item">
                        <div class="col-xs-8 dashboard_item_left">
                            <p class="dashboard_item_title">Net Profit</p>
                            <span class="dashboard_item_value" v-text="data.netProfit"></span>
                        </div>
                        <div class="col-xs-4 dashboard_item_right blue text-center">
                            <div class="dashboard_item_icon">
                                <i class="fa fa-user"></i>
                            </div>
                        </div>
                        <div class="clearfix"></div>
                    </div>  

                    <div class="dashboard_item">
                        <report :use="use" :date="date" :month="month" :year="year"></report>
                        <div class="clearfix"></div>
                    </div>  
                </div>
                
            </div>
            
        </div>

    </div>
</template>

<script>
import moment from 'moment'
export default {
    data() {
        return {
            scope: '',
            scopeApi: '/api',
            use: 'Day',
            date: moment().utc().format('LL'),
            month: moment().utc().format('MMMM YYYY'),
            year: moment().utc().format('YYYY'),
            data: {
                totalReceipts: 0,
                totalUsers: 0,
                totalManufactures: 0,
                totalWholesalers: 0,
                totalRetailers: 0,
                totalNormalUsers: 0,
                topSelling: 'N A',
                totalExpiredUsers: 0,
                topUser: 'N A',
                newRegistrations: 0,
                totalSales: 0,
                totalProductCost: 0,
                totalDeliveryCost: 0,
                netProfit: 0
            }
        }
    },
    props: {
        admin: {
            type: Boolean,
        }
    },
    components: {
        'report': require('./Report.vue') 
    },
    created() {
        if (this.admin) {
            this.scope = '/admin';
            this.scopeApi = '/api/admin';
        }
    },
    mounted() {
        this.loadData();
    },
    methods: {
        updateUseProperty(use) {
            this.use = use;
            this.loadData();
        },
        increateDate() {
            let date = moment(this.date, 'LL').add(1, 'days');
            this.date = date.format('LL');
        },
        decreateDate() {
            let date = moment(this.date, 'LL').subtract(1, 'days');
            this.date = date.format('LL');
        },
        increateMonth() {
            let month = moment(this.month, 'MMMM YYYY').add(1, 'months')
            this.month = month.format('MMMM YYYY');
        },
        decreateMonth() {
            let month = moment(this.month, 'MMMM YYYY').subtract(1, 'months')
            this.month = month.format('MMMM YYYY');
        },
        increateYear() {
            this.year++;
        },
        decreateYear() {
            this.year--;
        },
        increaseDates() {
            if (this.use == 'Day') this.increateDate();
            else if (this.use == 'Month') this.increateMonth();
            else if (this.use == 'Year') this.increateYear();
            this.loadData();
        },
        decreaseDates() {
            if (this.use == 'Day') this.decreateDate();
            else if (this.use == 'Month') this.decreateMonth();
            else if (this.use == 'Year') this.decreateYear();
            this.loadData();
        },
        loadData() {
            let url = `${this.scopeApi}/dashboard`;
            if (this.use == 'Day') url += `?date=${this.date}&use=${this.use}`;
            else if (this.use == 'Month') url += `?month=${this.month}&use=${this.use}`;
            else if (this.use == 'Year') url += `?year=${this.year}&use=${this.use}`;
            axios.get(url).then(res => {
                this.setData(res.data);
            })
                .catch(err => {
                    console.log(err);
                    this.sendErrorNotice();
                })
        },
        setData(data) {
            for (let index in data) {
                this.data[index] = data[index];
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
</script>
