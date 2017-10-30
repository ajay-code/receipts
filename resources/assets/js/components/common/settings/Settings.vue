<template>
  <div>
    <form :action="url" method="post">
      <input type="hidden" name="_token" :value="csrf">
      <table class="table">
        <thead>
          <tr>
            <td>#</td>
            <td>Name</td>
            <td>Font</td>
            <td>Font Size</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(setting, index) in settings" :key="index">
            <td>
              <input type="radio" name="setting"  :value="setting.id" required> </td>
            <td v-text="setting.name"></td>
            <td v-text="setting.font"></td>
            <td v-text="setting.font_size"></td>
            <td>
              <a href="" @click.prevent="show(setting.id)">Details...</a>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="button-group">
        <button name="submit" class="btn btn-primary">Select</button>
      </div>
    </form>
    <show-detail :setting="setting"></show-detail>
  </div>
</template>

<script>
  import axios from "axios";
  import eventHub from '@/eventHub';

  export default {
    data() {
      return {
        settings: "",
        scope: "",
        scopeApi: "/api",
        setting: ""
      };
    },
    components: {
      'show-detail': require('./ShowDetail')
    },
    props: {
      admin: {
        type: Boolean
      }
    },
    computed: {
      csrf() {
        return $('meta[name="csrf-token"]').attr('content')
      },
      url(){
        return `${this.scope}/settings/store`
      }
    },
    created() {
      if (this.admin) {
        this.scope = "/admin";
        this.scopeApi = "/api/admin";
      }
    },
    mounted() {
      this.getSettings();
    },

    methods: {
      getSettings() {
        axios
          .get(`${this.scopeApi}/settings/predefined`)
          .then(res => {
            this.settings = res.data;
          })
          .catch(err => {
            this.sendErrorNotice();
          });
      },
      show(id) {
        let index = this.settings.map(setting => setting.id).indexOf(id);
        this.setting = this.settings[index];
        eventHub.$emit('show-setting-detail');
      },
      sendErrorNotice(message) {
        message = message || "Something Went Wrong";
        this.$notify({
          group: "notice",
          type: "error",
          title: "Error ",
          text: message,
          duration: 5000,
          speed: 1000
        });
      }
    }
  };
</script>