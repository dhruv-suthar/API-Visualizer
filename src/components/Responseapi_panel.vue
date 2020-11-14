<template>
  <div>
    <div class="container-fluid main_container p-3 mt-3">
      <div class="row">
        <h5 class="" style="margin-top:-35px;">Response</h5>

        <div class="container p-0">
          <div class="row">
            <div class="col-md-8 mt-3">
              <span
                class="badge   float-right "
                v-if="getApiData != null"
                style="margin-top:-33px!important;"
                >Status : {{ getStatusCode }}</span
              >

              <tabs>
                <tab title="Received Data">
                  <div
                    class="api_data"
                    v-if="getApiData != null"
                    style="overflow-y:scroll; overflow-x: hidden; height:450px;"
                  >
                    <vue-json-pretty
                      v-model="value"
                      :data="getApiData"
                      style="max-height:400px;"
                    >
                    </vue-json-pretty>
                  </div>

                  <div v-else>
                    <small class="text-muted"
                      >Not available, a request has not been sent yet.</small
                    >
                  </div>
                </tab>

                <tab title="Headers">
                  <div
                    v-if="getResponseheaders != null"
                    style="overflow-y:scroll; overflow-x: hidden; height:450px;"
                  >
                    <ul
                      class="list-unstyled  p-0 m-0"
                      v-for="(res_header, i) in getResponseheaders"
                      v-bind:key="i"
                    >
                      <li class="m-0 p-1">
                        <label>
                          {{ res_header[0] }} : {{ res_header[1] }}
                        </label>
                      </li>
                    </ul>
                  </div>

                  <div v-else>
                    <small class="text-muted">
                      Not available, a request has not been sent yet.
                    </small>
                  </div>
                </tab>
              </tabs>
            </div>

            <div class="col-md-4 mt-5">
              <h6>Select Field Names for Visualization</h6>

              <div
                class="selected_data_for_visualization"
                v-if="datafields_for_visualization != null"
                style="overflow-y:scroll; overflow-x: scroll; height:450px;"
              >
                <ul
                  class="list-unstyled  p-0 m-0"
                  v-for="val in datafields_for_visualization"
                  v-bind:key="val"
                >
                  <li class="m-0 p-1">
                    <label class="">
                      <input
                        type="checkbox"
                        :value="val"
                        id=""
                        v-on:click="add_to_selected_datafield_list($event)"
                        class="pr-3"
                      />{{ val }}</label
                    >
                  </li>
                </ul>
              </div>

              <div v-else>
                <small class="text-muted">No datas.</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { Tabs, Tab } from "vue-slim-tabs";
import VueJsonPretty from "vue-json-pretty";
import { keyify, filter_keys } from "../helper/helper_func.js";

export default {
  name: "Responseapi_panel",
  components: {
    Tabs,
    Tab,
    VueJsonPretty
  },
  data() {
    return {
      value: ["res[0].userId"],
      whole_data: null,
      datafields_for_visualization: null,
      selected_datafields_for_visualization: []
    };
  },
  methods: {
    ...mapActions(["add_datafields"]),
    add_to_selected_datafield_list(e) {
      if (e.target.checked) {
        this.selected_datafields_for_visualization.push(e.target.value);
        this.add_datafields(this.selected_datafields_for_visualization);
      } else {
        let sel_d_f = this.selected_datafields_for_visualization.filter(
          value => value !== e.target.value
        );
        this.selected_datafields_for_visualization = sel_d_f;
        //this.selected_data_field.push(e.target.value);
        this.add_datafields(sel_d_f);
      }
    }
  },

  computed: {
    ...mapGetters([
      "getApiData",
      "getStatusCode",
      "getError",
      "getResponseheaders"
    ])
  },

  watch: {
    getApiData: {
      deep: true,
      handler(value) {
        this.whole_data = null;
        this.whole_data = value;
        if (this.whole_data != null) {
          const output = keyify(
            this.whole_data,
            Array.isArray(this.whole_data) ? "res[]" : "res."
          );

          const ft_keys = filter_keys(output);
          this.datafields_for_visualization = ft_keys;
        }
      }
    }
  }
};
</script>

<style scoped>
.selected_data_flex {
  display: flex;
  vertical-align: middle;
  word-wrap: break-word;
}
.cb_for_data {
  flex: 2;
}
.selected_data {
  flex: 3;
}
</style>

<style>
.vjs-tree__content {
  padding-bottom: 0px !important;
  padding-top: 0px !important;
}
.vjs-tree__content * {
  padding-bottom: 0px !important;
  padding-top: 0px !important;
}
</style>
