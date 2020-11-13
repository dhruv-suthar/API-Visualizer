<template>
  <div
    class="container main_container p-3 mt-3"
    v-if="all_selected_datafields != null"
  >
    <div class="row">
      <h5 class="" style="margin-top:-35px;">Visualization</h5>
      <div class="container-fluid p-0">
        <div class="row">
          <div class="col-md-5">
            <Template_ops></Template_ops>
          </div>

          <div class="col-md-7">
            <Visualization_output></Visualization_output>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Template_ops from "./Template_ops";
import Visualization_output from "./Visualization_output";

export default {
  name: "Visualizationapi_panel",
  components: {
    Template_ops,
    Visualization_output
  },
  computed: mapGetters(["all_selected_datafields"])
};
</script>

<style lang="scss" scoped></style>
