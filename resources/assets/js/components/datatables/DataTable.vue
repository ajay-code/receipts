<template>
    <div class="panel panel-default">
        <div class="panel-heading">
            {{ response.table }}
        </div>
        
        <div class="panel-body">
            <div class="form-group">
                <a href="#filter" data-toggle="collapse" aria-expanded="false" aria-controls="filter">Filter</a>
                <div id="filter" class="collapse">
                    <template v-for="(value, column, index) in filterColumns" >
                        <label class="no-padding col-sm-4 col-xs-6 col-md-3" :key="index">
                        <input type="checkbox" v-model="filterColumns[column]"> <span v-text="column"></span>
                    </label>
                    </template>
                    <div class="clearfix"></div>
                </div>
            
            </div>

            <form action="#" @submit.prevent="getRecordsFromFirstPage">
                <label for="search">Search</label>
                <div class="row row-fluid">
                    <div class="form-group col-md-3">
                        <select class="form-control" v-model="search.column">
                            <option :value="column" v-for="(column, index) in displayable" :key="index">
                                {{ column }}
                            </option>
                        </select>
                    </div>
                    <div class="form-group col-md-3">
                        <select class="form-control" v-model="search.operator">
                            <option value="equals">=</option>
                            <option value="contains">contains</option>
                            <option value="starts_with">starts with</option>
                            <option value="ends_with">ends with</option>
                            <option value="greater_than">greater than</option>
                            <option value="less_than">less than</option>
                        </select>
                    </div>
                    <div class="form-group col-md-6">
                        <div class="input-group">
                            <input type="text" id="search" v-model="search.value" class="form-control">
                            <span class="input-group-btn">
                                <button class="btn btn-default" type="submit">Search</button>
                            </span>
                        </div>
                    </div>
                </div>
            </form>
            <div class="row">
                <div class="form-group col-md-10">
                    <label for="filter">Quick search current results</label>
                    <input type="text" id="filter" class="form-control" v-model="quickSearchQuery">
                </div>
                <div class="form-group col-md-2">
                    <label for="limit">Display records</label>
                    <select id="limit" class="form-control" v-model="limit" @change="getRecords">
                        <option value="2">2</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                        <option value="1000">1000</option>
                        <option value="">All</option>
                    </select>
                </div>
            </div>

            <div class="table-responsive">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <td>
                                <input type="checkbox" v-model="selectAll" @click="toggleSelectAll">
                            </td>
                            <th v-for="(column, index) in displayable" :key="index">
                                <span class="sortable" @click="sortBy(column)">{{ column }}</span>
                                <div
                                    class="arrow"
                                    v-if="sort.key === column"
                                    :class="{ 'arrow--asc': sort.order === 'asc', 'arrow--desc': sort.order === 'desc' }"
                                ></div>
                            </th>
                            <th>&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(record,index) in filteredRecords" :key="index">
                            <td>
                                <input type="checkbox" @click="toggleSelected(record.id)" :checked="selected.includes(record.id)">
                            </td>
                            <td v-for="(column, index) in displayable" :key="index">
                                <template v-if="editing.id === record.id && isUpdatable(column)">
                                    <div class="form-group" :class="{ 'has-error': editing.errors[column] }">
                                        <input v-if="column.indexOf('address') === -1 " type="text" class="form-control" :value="record[column]" v-model="editing.form[column]">
                                        <textarea v-else type="text" class="form-control" :value="record[column]" v-model="editing.form[column]"></textarea>
                                        <span class="help-block" v-if="editing.errors[column]">
                                            <strong>{{ editing.errors[column][0] }}</strong>
                                        </span>
                                    </div>
                                </template>
                                <template v-else>
                                    {{ record[column] }}
                                </template>
                            </td>
                            <td>
                                <a href="#" @click.prevent="edit(record)" v-if="editing.id !== record.id">Edit</a>

                                <template v-if="editing.id === record.id">
                                    <a href="#" @click.prevent="update">Save</a><br>
                                    <a href="#" @click.prevent="editing.id = null">Cancel</a>
                                </template>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <paginator v-if="response.pageInfo" :page-info="response.pageInfo"></paginator>
            </div>
        </div>
    </div>
</template>

<script>
import queryString from "query-string";
import eventHub from "@/eventHub";

export default {
  props: ["endpoint"],
  data() {
    return {
      response: {
        table: "",
        displayable: [],
        records: [],
        allow: {}
      },
      sort: {
        key: "id",
        order: "asc"
      },
      limit: 50,
      quickSearchQuery: "",
      editing: {
        id: null,
        form: {},
        errors: []
      },
      search: {
        value: "",
        operator: "equals",
        column: "id"
      },
      page: {
        current: 1
      },
      selectAll: false,
      selected: [],
      filterColumns: ""
    };
  },
  components: {
    paginator: require("@/components/Paginator.vue")
  },
  computed: {
    filteredRecords() {
      let data = this.response.records;
      let displayable = this.displayable;
      data = data.filter(row => {
        return displayable.some(key => {
          return (
            String(row[key])
              .toLowerCase()
              .indexOf(this.quickSearchQuery.toLowerCase()) > -1
          );
        });
      });

      if (this.sort.key) {
        data = _.orderBy(
          data,
          i => {
            let value = i[this.sort.key];

            if (!isNaN(parseFloat(value))) {
              return parseFloat(value);
            }

            return String(i[this.sort.key]).toLowerCase();
          },
          this.sort.order
        );
      }

      return data;
    },

    displayable() {
      let filterColumns = this.filterColumns;
      console.log("as");
      let array = [];
      _.each(this.filterColumns, (val, key, index) => {
        if (val) array.push(key);
      });
      if (array.length === 0) return Object.keys(filterColumns);
      return array;
    }
  },
  methods: {
    getRecords() {
      return axios
        .get(`${this.endpoint}?${this.getQueryParameters()}`)
        .then(response => {
          this.response = response.data.data;
          this.getfilterColumns();
        });
    },
    getRecordsFromFirstPage() {
      this.page.current = 1;
      this.getRecords();
    },
    getQueryParameters() {
      return queryString.stringify({
        limit: this.limit,
        ...this.search,
        page: this.page.current
      });
    },
    sortBy(column) {
      this.sort.key = column;
      this.sort.order = this.sort.order === "asc" ? "desc" : "asc";
    },
    edit(record) {
      this.editing.errors = [];
      this.editing.id = record.id;
      this.editing.form = _.pick(record, this.response.updatable);
    },
    isUpdatable(column) {
      return this.response.updatable.includes(column);
    },
    update() {
      axios
        .patch(`${this.endpoint}/${this.editing.id}`, this.editing.form)
        .then(() => {
          this.getRecords().then(() => {
            this.editing.id = null;
            this.editing.form = {};
          });
        })
        .catch(error => {
          if (error.response.status === 422) {
            this.editing.errors = error.response.data.errors;
          }
        });
    },
    changePage(page) {
      this.page.current = page;
      this.getRecords();
    },
    getfilterColumns() {
      let obj = {};
      _.each(this.response.displayable, column => {
        obj[column] = false;
      });
      this.filterColumns = obj;
    },

    /* 
        Selected Functions
    */
    toggleSelected(recordId) {
      if (this.selected.includes(recordId)) {
        let index = this.selected.indexOf(recordId);
        this.selected.splice(index, 1);
      } else {
        this.selected.push(recordId);
      }
    },
    toggleSelectAll() {
      console.log("sds");
      if (this.selectAll) {
        _.each(this.response.records, record => {
          if (!this.selected.includes(record.id)) {
            this.selected.push(record.id);
          }
        });
      } else {
        this.selected = [];
      }
    }
  },
  mounted() {
    this.getRecords();
    eventHub.$on("load-page", this.changePage);
  }
};
</script>

<style lang="scss">
.sortable {
  cursor: pointer;
}

.arrow {
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 0;
  margin-left: 5px;
  opacity: 0.6;

  &--asc {
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-bottom: 4px solid #222;
  }

  &--desc {
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid #222;
  }
}
.no-padding {
  padding: 0 !important;
}
@media (max-width: 380px) {
  #filter {
    font-size: 11px;
  }
}
.form-control {
  min-width: 140px;
}
</style>
