<template>
  <div>
    <div class="form-group w-25">
      <label for="fordatalength">No. of records</label>
      <select class="form-control" v-model="d_len">
        <option selected>select no.</option>
        <option v-for="i in s_data" :value="i" v-bind:key="i">
          {{ i }}
        </option>
      </select>
    </div>

    <div class="container">
      <GChart
        :type="get_template_type"
        :data="chartData"
        :options="chartOptions"
        :resizeDebounce="500"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { GChart } from "vue-google-charts";
export default {
  name: "charts",
  components: {
    GChart
  },
  data() {
    return {
      chartData: this.get_template_datas,
      chartOptions: {
        chart: {
          title: "Company Performance",
          subtitle: "Sales, Expenses, and Profit: 2014-2017"
        }
      },
      s_data: null,
      d_len: null
    };
  },
  computed: mapGetters([
    "all_final_datafields_name",
    "get_template_type",
    "get_template_datas"
  ]),
  watch: {
    get_template_datas: {
      deep: true,
      handler(value) {
        const data = value;

        var r = data[0].map(function(col, i) {
          return data.map(function(row) {
            return row[i];
          });
        });

        r.unshift(this.all_final_datafields_name);

        var r1 = [];
        for (let i = 0; i < r.length; i++) {
          const ans = r[i].filter(item => item !== undefined && item !== null);

          if (ans.length > 0) {
            r1.push(ans);
          }
        }

        //slice used for get n number of arrays/records
        this.chartData = r1.slice(0, parseInt(this.d_len + 1));
      }
    }
  },
  created() {
    const data = this.get_template_datas;

    var r = data[0].map(function(col, i) {
      return data.map(function(row) {
        return row[i];
      });
    });

    r.unshift(this.all_final_datafields_name);

    var r1 = [];
    for (let i = 0; i < r.length; i++) {
      const ans = r[i].filter(item => item !== undefined && item !== null);

      if (ans.length > 0) {
        r1.push(ans);
      }
    }
    this.s_data = r1.length;
    //slice used for get n number of arrays/records
    this.chartData = r1;
  }
};
</script>

<style lang="scss" scoped></style>
