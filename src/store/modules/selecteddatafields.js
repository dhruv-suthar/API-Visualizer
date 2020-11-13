const state = {
  selected_datafields: null,
  final_datafields_name: null,
  final_datafields: null
};

const getters = {
  all_selected_datafields: state => state.selected_datafields,
  all_final_datafields_name: state => state.final_datafields_name,
  all_final_datafields: state => state.final_datafields
};

const actions = {
  async add_datafields({ commit }, selected_datafields) {
    await commit("added_datafields", selected_datafields);
  },
  async add_final_datafields({ commit }, ffinal_datafields) {
    await commit("added_final_datafields", ffinal_datafields);
  }
};

const mutations = {
  added_datafields: (state, selected_datafields) =>
    (state.selected_datafields = selected_datafields),
  added_final_datafields: (state, ffinal_datafields) => {
    console.log(ffinal_datafields);

    const fieldname = [];
    for (let i = 0; i < ffinal_datafields.length; i++) {
      fieldname.push(ffinal_datafields[i].name);
    }
    const datafield = [];
    for (let i = 0; i < ffinal_datafields.length; i++) {
      datafield.push(ffinal_datafields[i].datafield);
    }

    state.final_datafields_name = fieldname;
    state.final_datafields = datafield;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
