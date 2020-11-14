<template>
  <div>
    <div class="container-fluid main_container p-3 mt-5 ">
      <h5 class="" style="margin-top:-30px;">Request</h5>

      <div class="container-fluid p-0">
        <form @submit.prevent="OnSubmit">
          <div class="row">
            <div class="form-group col-sm-12 col-md  ml-0 mr-0">
              <label for="formethod">Method</label>
              <select
                class="form-control"
                id="req_method"
                name="req_method"
                v-model="req_method"
                required
              >
                <option value="GET" selected="true">GET</option>
                <option value="POST">POST</option>
                <option value="PUT">PUT</option>
                <option value="DELETE">DELETE</option>
              </select>
            </div>

            <div class="form-group col-sm-12 col-md-8">
              <label for="fourl">Enter url</label>
              <input
                type="text"
                class="form-control"
                id=""
                placeholder="Enter url..."
                v-model="api_url"
                name="api_url"
              />
            </div>

            <div class="form-group col-sm-12 col-md-2 pt-4 mt-3">
              <button
                type="submit"
                class="form-control btn btn-md btn-primary"
                v-bind:disabled="isSended"
                style="background:#42B983; border:#42B983;"
              >
                {{ send_btn_txt }}
              </button>
            </div>
          </div>

          <tabs>
            <tab title="Headers">
              <div
                class="row"
                v-for="(header_input, i) in header_input_list"
                v-bind:key="i"
              >
                <div class="form-group  col-sm-12 col-md-3">
                  <!-- <label for="fourl">Enter url</label> -->
                  <input
                    type="text"
                    class="form-control"
                    id=""
                    placeholder="key"
                    v-model="header_input.key"
                  />
                </div>

                <div class="form-group  col-sm-12 col-md-3">
                  <!-- <label for="fourl">Enter url</label> -->
                  <input
                    type="text"
                    class="form-control"
                    id=""
                    placeholder="value"
                    v-model="header_input.value"
                  />
                </div>

                <div
                  class="form-group  col-sm-12 col-md-1  ml-0 pl-0 d-flex justify-content-center justify-content-md-start"
                >
                  <button
                    class="btn pt-0 mt-0 m-0 p-0 "
                    style="margin-top:-7px!important;"
                    v-on:click="delete_header_input(i, header_input)"
                  >
                    <span
                      class="typcn typcn-delete-outline text-danger"
                      style="font-size:30px;"
                    ></span>
                  </button>
                </div>
              </div>
              <button
                class="btn btn-sm btn-green-alt"
                type="button"
                style=""
                v-on:click="add_header_input"
              >
                <span class="typcn typcn-plus"> </span>add header
              </button>
            </tab>

            <tab title="Params">
              <div
                class="row"
                v-for="(parameter_input, i) in parameter_input_list"
                v-bind:key="i"
              >
                <div class="form-group  col-sm-12 col-md-3">
                  <!-- <label for="fourl">Enter url</label> -->
                  <input
                    type="text"
                    class="form-control"
                    id=""
                    placeholder="key"
                    v-model="parameter_input.key"
                  />
                </div>

                <div class="form-group  col-sm-12 col-md-3">
                  <!-- <label for="fourl">Enter url</label> -->
                  <input
                    type="text"
                    class="form-control"
                    id=""
                    placeholder="value"
                    v-model="parameter_input.value"
                    v-on:focusout="add_param_data_to_input_box(i)"
                  />
                </div>

                <div
                  class="form-group  ml-0 col-sm-12 col-md-1 pl-0 ml-0 d-flex justify-content-center justify-content-md-start"
                >
                  <button
                    class="btn pt-0 mt-0 m-0 p-0"
                    style="margin-top:-7px!important;"
                    v-on:click="delete_parameter_input(i, parameter_input)"
                  >
                    <span
                      class="typcn typcn-delete-outline text-danger"
                      style="font-size:30px;"
                    ></span>
                  </button>
                </div>
              </div>
              <button
                class="btn btn-sm btn-green-alt"
                type="button"
                style=""
                v-on:click="add_parameter_input"
              >
                <span class="typcn typcn-plus"> </span>add params
              </button>
            </tab>

            <tab
              title="Body"
              :disabled="req_method == 'GET' || req_method == 'DELETE'"
            >
              <div
                class="row"
                v-for="(body_input, i) in body_input_list"
                v-bind:key="i"
              >
                <div class="form-group  col-sm-12 col-md-3">
                  <!-- <label for="fourl">Enter url</label> -->
                  <input
                    type="text"
                    class="form-control"
                    id=""
                    placeholder="key"
                    v-model="body_input.key"
                  />
                </div>

                <div class="form-group  col-sm-12 col-md-3">
                  <!-- <label for="fourl">Enter url</label> -->
                  <input
                    type="text"
                    class="form-control"
                    id=""
                    placeholder="value"
                    v-model="body_input.value"
                  />
                </div>

                <div
                  class="form-group  ml-0 col-sm-12 col-md-1 pl-0 ml-0 d-flex justify-content-center justify-content-md-start"
                >
                  <button
                    class="btn pt-0 mt-0 m-0 p-0"
                    style="margin-top:-7px!important;"
                    v-on:click="delete_body_input(i, body_input)"
                  >
                    <span
                      class="typcn typcn-delete-outline text-danger"
                      style="font-size:30px;"
                    ></span>
                  </button>
                </div>
              </div>
              <button
                class="btn btn-sm btn-green-alt"
                type="button"
                style=""
                v-on:click="add_body_input"
              >
                <span class="typcn typcn-plus"> </span>add body data
              </button>
            </tab>
          </tabs>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { Tabs, Tab } from "vue-slim-tabs";

export default {
  name: "Requestapi_panel",
  components: {
    Tabs,
    Tab
  },
  data() {
    return {
      req_method: "GET",
      api_url: null,
      header_input_list: [
        {
          key: "Content-Type",
          value: "application/json"
        }
      ],
      parameter_input_list: [],
      body_input_list: [],
      isSended: false,
      send_btn_txt: "Send"
    };
  },
  methods: {
    ...mapActions([
      "fetch_get_req",
      "fetch_post_req",
      "fetch_put_req",
      "fetch_del_req"
    ]),

    OnSubmit() {
      if (this.api_url != null) {
        this.isSended = true;
        this.send_btn_txt = "Sending...";
        if (this.req_method == "GET") {
          const url = this.api_url;
          const headerdata = {
            url: url,
            headers: this.header_input_list
          };
          this.fetch_get_req(headerdata);
          //  this.isSended = false;
        } else if (this.req_method == "POST") {
          const url = this.api_url;
          const postdata = {
            url: url,
            headers: this.header_input_list,
            body_data: this.body_input_list
          };

          this.fetch_post_req(postdata);
          //  this.isSended = false;
        } else if (this.req_method == "PUT") {
          const url = this.api_url;
          const postdata = {
            url: url,
            headers: this.header_input_list,
            body_data: this.body_input_list
          };

          this.fetch_put_req(postdata);
          //  this.isSended = false;
        } else if (this.req_method == "DELETE") {
          if (this.header_input_list != null) {
            const url = this.api_url;
            const deldata = {
              url: url,
              headers: this.header_input_list
            };
            this.fetch_del_req(deldata);
            //  this.isSended = false;
          }
        }
      }
      this.isSended = false;
      this.send_btn_txt = "Send";
    },

    add_header_input() {
      this.header_input_list.push({
        key: "",
        value: ""
      });
    },

    delete_header_input(index, header_input) {
      var i = this.header_input_list.indexOf(header_input);

      this.header_input_list.splice(i, 1);
    },

    add_parameter_input() {
      this.parameter_input_list.push({
        key: "",
        value: ""
      });
    },

    delete_parameter_input(index, parameter_input) {
      var i = this.parameter_input_list.indexOf(parameter_input);

      //also update on api_url textbox
      if (
        this.parameter_input_list[index]["key"] != "" &&
        this.parameter_input_list[index]["value"] != ""
      ) {
        if (index == 0) {
          if (this.parameter_input_list.length >= 2) {
            if (
              this.parameter_input_list[index + 1]["key"] != "" &&
              this.parameter_input_list[index + 1]["value"] != ""
            ) {
              this.api_url = this.api_url.replace(
                `${this.parameter_input_list[index]["key"]}=${this.parameter_input_list[index]["value"]}&`,
                ""
              );
            }
          } else {
            this.api_url = this.api_url.replace(
              `${this.parameter_input_list[index]["key"]}=${this.parameter_input_list[index]["value"]}`,
              ""
            );
          }
        } else {
          this.api_url = this.api_url.replace(
            `&${this.parameter_input_list[index]["key"]}=${this.parameter_input_list[index]["value"]}`,
            ""
          );
        }
      }

      this.parameter_input_list.splice(i, 1);
    },

    add_param_data_to_input_box(i) {
      //for add data param list data to api_url
      if (
        this.parameter_input_list[i]["key"] != "" &&
        this.parameter_input_list[i]["value"] != ""
      ) {
        if (i == 0) {
          this.api_url =
            this.api_url +
            `?${this.parameter_input_list[i]["key"]}=${this.parameter_input_list[i]["value"]}`;
        } else {
          this.api_url =
            this.api_url +
            `&${this.parameter_input_list[i]["key"]}=${this.parameter_input_list[i]["value"]}`;
        }
      }
    },

    add_body_input() {
      this.body_input_list.push({
        key: "",
        value: ""
      });
    },

    delete_body_input(index, body_input) {
      var i = this.body_input_list.indexOf(body_input);

      this.body_input_list.splice(i, 1);
    }
  },
  computed: mapGetters(["getApiData", "getStatusCode", "getResponseheaders"]),
  created() {},
  watch: {
    getStatusCode: {
      deep: true,
      handler(value) {
        if (value != null) {
          //   this.isSended = false;
          //   this.send_btn_txt = "Send";
        }
      }
    }
  }
};
</script>

<style src="vue-slim-tabs/themes/default.css"></style>
<style>
.vue-tablist {
  border: none !important;
}
.vue-tab {
  max-height: 50px !important;
  background: #1d2935 !important;

  /* border: 5px solid white!important; */
  border: none !important;
  /* border:5px!important; */
  /* border-bottom: 3px solid #47cf73!important; */
}
.vue-tab[aria-selected="true"] {
  /* border-color: #47cf73!important; */

  border: 3.5px solid white !important;
  border-left: none !important;
  border-top: none !important;
  border-right: none !important ;
  border-bottom-color: #42b983 !important;
  font-weight: 510;
}
@media only screen and (max-width: 425px) {
  .vue-tablist {
    border: none !important;

    overflow-x: scroll;
  }
}
</style>
