<template>
  <div>
    <div class="row">
      <label for="forxdata">xdata</label>
      <div class="form-group col-sm-12 col-md-5">
        <!-- <label for="fourl">Enter url</label> -->
        <input
          type="text"
          class="form-control"
          id="yname"
          placeholder="name"
          v-model="x_name"
          v-on:change="set_key_data"
        />
        <!-- <input type="text" class="form-control" id="" placeholder="value" v-model="" > -->
      </div>

      <div class="form-group col-sm-12 col-md-5">
        <select class="form-control" v-model="x_key" v-on:change="set_key_data">
          <option selected="true">select data field</option>
          <option
            v-for="selected_key in all_selected_datafields"
            :value="selected_key"
            v-bind:key="selected_key"
          >
            {{ selected_key }}
          </option>
        </select>
      </div>
    </div>

    <div class="row">
      <label for="forydata">ydata</label>

      <div class="form-group col-sm-12 col-md-5">
        <!-- <label for="fourl">Enter url</label> -->
        <input
          type="text"
          class="form-control"
          id="yname"
          placeholder="name"
          v-model="y_name"
          v-on:change="set_key_data"
        />
        <!-- <input type="text" class="form-control" id="" placeholder="value" v-model="" > -->
      </div>

      <div
        class="form-group col-sm-12 col-md-5 d-flex justify-content-center justify-content-md-start"
      >
        <select class="form-control" v-model="y_key" v-on:change="set_key_data">
          <option selected="true">select data field</option>
          <option
            v-for="selected_key in all_selected_datafields"
            :value="selected_key"
            v-bind:key="selected_key"
          >
            {{ selected_key }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "op2",
  data() {
    return {
      x_name: null,
      y_name: null,
      x_key: null,
      y_key: null
    };
  },
  methods: {
    ...mapActions(["add_final_datafields"]),
    set_key_data() {
      var data = [];
      data.push({
        name: this.x_name,
        datafield: this.x_key
      });

      data.push({
        name: this.y_name,
        datafield: this.y_key
      });

      this.add_final_datafields(data);
    }
  },
  computed: mapGetters(["all_selected_datafields"])
};
</script>

<style scoped></style>
