import Vue from "vue";
import Vuex from "vuex";
import apidata from "./modules/apidata";
import selecteddatafields from "./modules/selecteddatafields";
import visualizationdata from "./modules/visualizationdata";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    apidata,
    selecteddatafields,
    visualizationdata
  }
});
