<template>
    <tr>
        <td v-text="user.uid"> </td>
        <td v-text="user.name"> </td>
        <td v-text="user.email"></td>
        <td v-text="user.type"></td>
        <td v-text="user.totalReceipts"></td>
        <td>
            <a @click.prevent="userSendToReceipts">Receipts..</a>
        </td>
        <td v-text="createdAt"></td>
        <td v-text="expireAt"></td>
        <td>
            <span v-if="active" class="text-success">Active</span>
            <span v-else class="text-danger">Deavtive</span>
        </td>
        <td>
            <button class="btn btn-primary btn-sm" @click="edit">Edit</button>
            <button v-if="active" class="btn btn-danger btn-sm" @click="deactivateUser">Deavtivate</button>
            <button v-else class="btn btn-success btn-sm" @click="activateUser">Activate</button>

        </td>
    </tr>
</template>

<script>
import moment from 'moment';
import eventHub from '../../../eventHub'

export default {
    data() {
        return {
            addToPrintList: false,
            localUser: ''
        }
    },
    props: ['user'],
    computed: {
        createdAt() {
            return moment(this.user.created_at).format("MMM Do YY");
        },
        expireAt() {
            return moment(this.user.expire_at).format("MMM Do YY");
        },
        active() {
            return this.user.activated;
        }
    },
    mounted() {
        this.localUser = this.user
    },
    methods: {
        edit() {
            eventHub.$emit('edit-user', this.user.id);
        },
        deactivateUser() {
            axios.get(`/api/admin/users/${this.user.id}/deactivate`).then(res => {
                this.user.activated = false;
                this.$notify({
                    group: 'notice',
                    type: 'success',
                    title: 'Action Successful',
                    text: 'User is successfully <b> deactivated </b>',
                    duration: 10000,
                    speed: 1000,

                });
            }).catch(err => {
                this.$notify({
                    group: 'notice',
                    type: 'error',
                    title: 'Error ',
                    text: "Can't complete the action as something went <b>wrong</b>",
                    duration: 10000,
                    speed: 1000
                });
            })
        },
        activateUser() {
            axios.get(`/api/admin/users/${this.user.id}/activate`).then(res => {
                this.user.activated = true;
                this.$notify({
                    group: 'notice',
                    type: 'success',
                    title: 'Action Successful',
                    text: 'User is successfully <b> activated </b>',
                    duration: 10000,
                    speed: 1000
                });
            }).catch(err => {
                this.$notify({
                    group: 'notice',
                    type: 'error',
                    title: 'Error ',
                    text: "Can't complete the action as something went <b>wrong</b>",
                    duration: 10000,
                    speed: 1000
                });
            })
        },
        userSendToReceipts() {
            window.location.href = `/admin/users/${this.user.id}/receipts`
        }
    }
}
</script>
