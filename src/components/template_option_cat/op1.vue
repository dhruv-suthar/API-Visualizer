<template>
  <div>
    <div
      class="row"
      v-for="(col_data_field, i) in table_col_data_field_list"
      v-bind:key="i"
    >
      <div class="form-group  col-sm-12 col-md-5">
        <!-- <label for="fourl">Enter url</label> -->
        <input
          type="text"
          class="form-control"
          id=""
          placeholder="name"
          v-model="col_data_field.name"
          v-on:change="set_key_data(i, $event)"
        />
        <!-- <input type="text" class="form-control" id="" placeholder="value" v-model="" > -->
      </div>

      <div class="form-group col-sm-12 col-md-5">
        <!-- <label for="fourl">Enter url</label> -->
        <select
          class="form-control"
          name="col_data_field[i]"
          v-model="col_data_field.datafield"
          v-on:change="set_key_data(i, $event)"
        >
          <option selected="selected">select data field</option>
          <!-- v-on:change="set_key_data(i,$event)"  -->
          <option
            v-for="selected_key in all_selected_datafields"
            :value="selected_key"
            v-bind:key="selected_key"
            >{{ selected_key }}</option
          >
        </select>
        <!-- <input type="text" class="form-control" id="" placeholder="value" v-model="" > -->
      </div>

      <div
        class="form-group  ml-0 col-sm-12 col-md-1 pl-0 ml-0 d-flex justify-content-center justify-content-md-start"
      >
        <button
          class="btn pt-0 mt-0 m-0 p-0"
          style="margin-top:-7px!important;"
          v-on:click="delete_tab_col_input(i, col_data_field)"
        >
          <span
            class="typcn typcn-delete-outline text-danger"
            style="font-size:30px;"
          ></span>
        </button>
      </div>
    </div>

    <button
      class="btn  btn-sm bg-color-new"
      type="button"
      style=""
      v-on:click="add_cols"
    >
      <span class="typcn typcn-plus"> </span> add cols.
    </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "op1",
  data() {
    return {
      table_col_data_field_list: []
    };
  },
  methods: {
    ...mapActions(["add_final_datafields"]),
    add_cols() {
      // this.table_col_data_field_list.push(' ');
      this.table_col_data_field_list.push({
        name: "",
        datafield: ""
      });
    },
    delete_tab_col_input(index, col_data_field) {
      var i = this.table_col_data_field_list.indexOf(col_data_field);

      this.table_col_data_field_list.splice(i, 1);
      this.add_final_datafields(this.table_col_data_field_list);
    },
    set_key_data(i, event) {
      console.log(i, event.target.value);

      this.add_final_datafields(this.table_col_data_field_list);
    }
  },
  computed: mapGetters(["all_selected_datafields"])
};
</script>

<style scoped>
.bg-color-new {
  background: #42b983 !important;
  border: none !important;
  color: white !important;
}
</style>
