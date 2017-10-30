<template>
<div class="row">
    <div class="col-sm-12">
        <div class="blue summary-text" @click="getSummary">
            Print Summary
            <br>
            {{ this.src }}
        </div>
    </div>    
    <div id="print" class="hide print">
        <div class="Date">Date</div>
        <div class="month">Month</div>
        <div class="year">Year</div>
    </div>
    <iframe id="report" :src="src" name="report" type="application/pdf" class="hide" frameborder="0" @load="print"></iframe>
</div>
</template>

<script>
import eventHub from "@/eventHub";
export default {
  data() {
    return {
      firstLoad: true,
      summary: {
        Date: "",
        month: [],
        year: []
      },
      src:'',
      url: "/api/summary",
      changed: true
    };
  },
  computed: {
    detectChangeOffDate() {
      return this.use, this.date, this.month, this.year, Date.now();
    }
  },
  watch: {
    detectChangeOffDate() {
      this.changed = true;
    }
  },
  mounted() {
  },
  props: ["use", "date", "month", "year"],
  methods: {
    getSummary() {
      if (this.changed) {
        if (this.use == "Day") this.printDateSummary();
        else if (this.use == "Month") this.printMonthSummary();
        else if (this.use == "Year") this.printYearSummary();
      } else {
        this.reprint();
      }
    },
    printDateSummary() {
      axios.get(`${this.url}?use=${this.use}&date=${this.date}`).then(res => {
        console.log(res.data);
        this.loadPdf(res);
      });
      this.changed = false;
    },
    printMonthSummary() {
      axios.get(`${this.url}?use=${this.use}&month=${this.month}`).then(res => {
        console.log(res.data);
        this.loadPdf(res);
      });
      this.changed = false;
    },
    printYearSummary() {
      axios.get(`${this.url}?use=${this.use}&year=${this.year}`).then(res => {
        console.log(res.data);
        this.loadPdf(res);
      });
      this.changed = false;
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
        window.frames["report"].print();
      }
      this.firstLoad = false;
    },
    reprint() {
      window.frames["report"].print();
    }
  }
};
</script>

<style scoped>
.summary-text {
  display: flex;
  padding: 20px;
  font-size: 20px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
</style>


