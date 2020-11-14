<template>
  <div class="table-responsive ">
    <table
      class="table table-light "
      v-if="get_template_datas != null"
      style="overflow-y:scroll; overflow-x: scroll; max-height:650px;"
    >
      <thead class="thead-light">
        <tr>
          <th
            scope="col"
            v-for="(field_name, i) in all_final_datafields_name"
            v-bind:key="i"
          >
            {{ field_name }}
          </th>
        </tr>
      </thead>

      <tbody v-if="get_template_datas != null">
        <!-- {{ get_template_datas }} -->
        <tr v-for="(rs, id) in n_data" v-bind:key="id">
          <td v-for="(r, i) in rs" v-bind:key="i">{{ r }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "tables",

  data() {
    return {
      n_data: null,
      t_data: null
    };
  },
  computed: mapGetters(["all_final_datafields_name", "get_template_datas"]),
  watch: {
    get_template_datas: {
      deep: true,
      handler(value) {
        const data = value;

        var r = data[0].map(function(col, i) {
          return data.map(function(row) {
            return row[i] === "" && i !== 0 ? 0 : row[i];
          });
        });

        var r1 = [];
        for (let i = 0; i < r.length; i++) {
          const ans = r[i].filter(item => item !== undefined && item !== null);
          r1.push(ans);
        }

        this.n_data = r1;
      }
    }
  },
  created() {
    const data = this.get_template_datas;

    // get corrosponded index data
    var r = data[0].map(function(col, i) {
      return data.map(function(row) {
        return row[i] === "" && i !== 0 ? 0 : row[i];
      });
    });

    var r1 = [];
    for (let i = 0; i < r.length; i++) {
      const ans = r[i].filter(item => item !== undefined && item !== null);
      r1.push(ans);
    }

    this.n_data = r1;
  }
};
</script>

<style scoped></style>
