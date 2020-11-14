<template>
  <div>
    <h6>Template config + Data Integration</h6>
    <form
      @submit.prevent=""
      style="overflow-y:scroll; overflow-x: hidden; max-height:650px;"
    >
      <div class="form-group ">
        <label for="template_type">Template</label>
        <select
          class="form-control"
          id="template_type"
          name="template_type"
          v-model="template_type"
          required
        >
          <option value="table" selected="true">Table</option>
          <option value="LineChart">Line Chart</option>
          <option value="BarChart">Bar Chart</option>
          <option value="ColumnChart">Column Chart</option>
          <option value="AreaChart">Area Chart</option>
          <option value="Histogram">Histogram</option>
          <option value="PieChart">Pie Chart</option>
          <option value="ScatterChart">Scatter Chart</option>
        </select>
      </div>

      <div v-if="template_type == 'table'">
        <op1></op1>
      </div>
      <div
        v-else-if="
          template_type == 'LineChart' ||
            template_type == 'BarChart' ||
            template_type == 'ColumnChart' ||
            template_type == 'AreaChart' ||
            template_type == 'Histogram' ||
            template_type == 'PieChart' ||
            template_type == 'ScatterChart'
        "
      >
        <op2></op2>
      </div>

      <div class="form-group" v-if="all_final_datafields != null">
        <!-- {{ all_final_key_data  }} -->
        <button
          class="btn  btn-lg btn-green-alt"
          type="button"
          style=""
          v-on:click="start_visualization"
        >
          Visualize
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import op1 from "./template_option_cat/op1.vue";
import op2 from "./template_option_cat/op2.vue";

import { ex_key_name, findAllByKey } from "../helper/helper_func.js";

export default {
  name: "Template_ops",
  data() {
    return {
      template_type: ""
    };
  },
  components: {
    op1,
    op2
  },
  methods: {
    ...mapActions(["set_template_datas"]),
    start_visualization() {
      //get all key
      var key_name_comb = this.all_final_datafields;

      //extract exact key names
      const exk = ex_key_name(key_name_comb);

      //get api data - response
      var input = this.getApiData;

      //if response type is array then convert to object otherwise as it is
      var op = Array.isArray(input) ? { data: input } : input;

      //now get keys values from response
      var kv = [];
      for (let i = 0; i < exk.length; i++) {
        kv.push(findAllByKey(op, exk[i]));
      }

      const template = {
        template_type: this.template_type,
        template_datas: kv
      };

      this.set_template_datas(template);
    }
  },
  computed: mapGetters(["all_final_datafields", "getApiData"])
};
</script>

<style scoped></style>
