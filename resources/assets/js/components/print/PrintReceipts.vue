<template>
    <iframe name="receipt"  :src="src" frameborder="0" class="hide" @load="print"></iframe>
</template>

<script>
import eventHub from "@/eventHub";

export default {
  data() {
    return {
      firstLoad: true,
      pdfGenerateUrl: "/receipts/print",
      pdfLoadUrl: "/pdf",
      selectedChanged: true,
      receiptChanged: true,
      src: "http://app.dev"
    };
  },
  props: {
    admin: {
      type: Boolean
    },
    selected: {
      type: Array,
      default: []
    },
    receipt: {
      type: Number,
      default: null
    }
  },
  created() {
    if (this.admin) {
      this.pdfGenerateUrl = "/admin/receipts/print";
    }
  },
  watch: {
    receipt() {
      this.receiptChanged = true;
    },
    selected() {
      this.selectedChanged = true;
    }
  },
  mounted() {
    eventHub.$on("print-receipt", this.printReceipt);
    eventHub.$on("print-selected", this.printSelected);
  },
  methods: {
    printReceipt() {
      if (this.receiptChanged) {
        axios
          .get(`${this.pdfGenerateUrl}/${this.receipt}`)
          .then(res => {
            this.loadPdf(res);
            this.receiptChanged = false;
          })
          .catch(() => {
            this.sendErrorNotice();
            this.receiptChanged = true;
          });
      } else {
        this.reprint();
      }
    },
    printSelected() {
      if (this.selectedChanged) {
        axios
          .post(`${this.pdfGenerateUrl}`, {
            receipts: this.selected
          })
          .then(res => {
            this.loadPdf(res);
            this.selectedChanged = false;
          })
          .catch(() => {
            this.sendErrorNotice();
            this.selectedChanged = true;
          });
      } else {
        this.reprint();
      }
    },
    loadPdf(res) {
      if (window.isMobile()) {
        this.src = "/pdf/" + res.data.pdfName + "/download";
      } else {
        eventHub.$emit("start-loading");
        this.src = "/pdf/" + res.data.pdfName;
      }
    },
    print() {
      eventHub.$emit("stop-loading");
      if (!this.firstLoad) {
        window.frames["receipt"].print();
      }
      this.firstLoad = false;
    },
    reprint() {
      window.frames["receipt"].print();
    },
    /* 
      Functions for natifications
    */
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
    },
    sendSuccessNotice(message) {
      message = message || "Action Was Persormed Successfully";
      this.$notify({
        group: "notice",
        type: "success",
        title: "Success ",
        text: message,
        duration: 5000,
        speed: 1000
      });
    }
  }
};
</script>

<style>

</style>
