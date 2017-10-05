<template>
	<div class="custom-alert alert  alert-dismissable collapse" :class="{
			'alert-success': this.status == 'success',
			'alert-danger': this.status == 'error'
		}" id="vue-alert" role="alert">
		<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
		<span>
			<p v-if="!messageIsArray" v-text="message"></p>
			<ul v-else>
				<li v-for="msg in message" :key="msg" v-text="msg"></li>
			</ul>
		</span>
	</div>
</template>

<script>
import eventHub from '../../eventHub'
export default {
	data() {
		return {
			message: '',
			status: 'success'
		}
	},
	mounted() {
		eventHub.$on('alert-show', this.showAlert);
	},
	computed: {
		messageIsArray() {
			return Array.isArray(this.message)
		}
	},
	methods: {
		showAlert(alert) {
			this.message = alert.message || 'error';
			this.status = alert.status;
			$('#vue-alert').fadeIn();
			setTimeout(() => {
				$('#vue-alert').fadeOut();
			}, 5000)
		}
	}
}
</script>