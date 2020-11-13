const state = {
  template_type: null,
  template_datas: null
};

const getters = {
  get_template_type: state => state.template_type,
  get_template_datas: state => state.template_datas
};

const actions = {
  async set_template_datas({ commit }, template) {
    console.log(template.template_datas);
    const temp_data = {
      type: template.template_type,
      datas: template.template_datas
    };
    await commit("setted_template_datas", temp_data);
  }
};

const mutations = {
  setted_template_datas: (state, temp_data) => {
    console.log(temp_data.datas);
    state.template_type = temp_data.type;
    state.template_datas = temp_data.datas;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
