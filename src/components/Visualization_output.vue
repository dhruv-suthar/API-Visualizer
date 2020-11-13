<template>
  <div>
    <h6>Output</h6>
    <div class="container" v-if="get_template_datas != null">
      <div class="row" v-if="get_template_type == 'table'">
        <tables></tables>
      </div>

      <div
        class="row"
        v-if="
          get_template_type == 'LineChart' ||
            get_template_type == 'BarChart' ||
            get_template_type == 'ColumnChart' ||
            get_template_type == 'AreaChart' ||
            get_template_type == 'Histogram' ||
            get_template_type == 'PieChart' ||
            get_template_type == 'ScatterChart'
        "
      >
        <charts></charts>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import tables from "./templates/tables.vue";
import charts from "./templates/charts.vue";
export default {
  name: "Visualization_output",
  components: {
    tables,
    charts
  },
  computed: mapGetters(["get_template_type", "get_template_datas"]),
  methods: {},
  mounted() {}
};
</script>

<style lang="scss" scoped></style>
