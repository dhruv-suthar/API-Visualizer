const state = {
  api_data: null,
  response_val: null,
  response_text: null,
  is_error: null,
  response_headers: null
};

const getters = {
  getApiData(state) {
    return state.api_data;
  },
  getStatusCode(state) {
    return `${state.response_val}  ${state.response_text}`;
  },
  getError(state) {
    return `${state.is_error}`;
  },
  getResponseheaders(state) {
    return state.response_headers;
  }
};

const actions = {
  async fetch_get_req({ commit }, data) {
    // const proxyurl = "https://cors-anywhere.herokuapp.com/";

    const heads = data.headers;

    console.log(heads);

    const h = [];
    heads.forEach(function(obj) {
      h.push(`'${obj.key}' : '${obj.value}'`);
    });

    var myHeaders = new Headers();
    heads.forEach(function(obj) {
      myHeaders.append(`${obj.key}`, `${obj.value}`);
    });

    let response = await fetch(
      data.url,

      {
        headers: myHeaders
        // redirect: "follow"
      }
    );

    let json;
    let res;
    let val;
    let is_error;
    let res_headers;

    if (response.status >= 200 && response.status <= 299) {
      json = await response.json();
      res = await response.status;
      val = await response.statusText;
      res_headers = await response.headers.entries();
      is_error = false;
    } else {
      // Handle errors
      json = await response.json();
      res = await response.status;
      val = await response.statusText;
      res_headers = await response.headers.entries();
      is_error = true;
    }

    const s_api_data = {
      json,
      res,
      val,
      is_error,
      res_headers
    };

    console.log(s_api_data);

    commit("show_get_req", s_api_data);
  },

  async fetch_post_req({ commit }, post_data) {
    // const proxyurl = "https://cors-anywhere.herokuapp.com/";

    const heads = post_data.headers;
    var myHeaders = new Headers();
    heads.forEach(function(obj) {
      myHeaders.append(obj.key.toString(), obj.value.toString());
    });

    const body_data = post_data.body_data;
    var fd = new FormData();
    body_data.forEach(function(obj) {
      fd.append(obj.key.toString(), obj.value.toString());
    });

    fd = JSON.stringify(fd);

    const response = await fetch(post_data.url, {
      method: "POST",
      body: fd,

      headers: myHeaders,
      redirect: "follow"
    });
    let json;
    let res;
    let val;
    let is_error;
    let res_headers;

    if (response.status >= 200 && response.status <= 299) {
      json = await response.json();
      res = await response.status;
      val = await response.statusText;
      res_headers = await response.headers.entries();
      is_error = false;
    } else {
      // Handle errors

      json = {};

      res = await response.status;
      val = await response.statusText;
      res_headers = await response.headers.entries();
      is_error = true;

      console.log(response.status, response.statusText);
    }

    const s_api_data = {
      json,
      res,
      val,
      is_error,
      res_headers
    };

    console.log(s_api_data);

    commit("show_post_req", s_api_data);
  },

  async fetch_del_req({ commit }, del_data) {
    // const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const heads = del_data.headers;
    var myHeaders = new Headers();
    heads.forEach(function(obj) {
      myHeaders.append(obj.key.toString(), obj.value.toString());
    });

    const response = await fetch(del_data.url, {
      method: "DELETE",
      headers: myHeaders,
      redirect: "follow"
    });
    // console.log("2");
    let json;
    let res;
    let val;
    let is_error;
    let res_headers;

    if (response.status >= 200 && response.status <= 299) {
      console.log("3");
      json = {};
      res = await response.status;
      val = await response.statusText;
      res_headers = await response.headers.entries();
      is_error = false;
    } else {
      json = {};
      res = await response.status;
      val = await response.statusText;
      res_headers = await response.headers.entries();
      is_error = true;
      console.log(response.status, response.statusText);
    }

    const s_api_data = {
      json,
      res,
      val,
      is_error,
      res_headers
    };

    console.log("5");

    commit("show_del_req", s_api_data);
  },

  async fetch_put_req({ commit }, put_data) {
    // const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const heads = put_data.headers;
    var myHeaders = new Headers();
    heads.forEach(function(obj) {
      myHeaders.append(obj.key.toString(), obj.value.toString());
    });

    const body_data = put_data.body_data;
    var fd = new FormData();
    body_data.forEach(function(obj) {
      fd.append(obj.key.toString(), obj.value.toString());
    });

    fd = JSON.stringify(fd);

    const response = await fetch(put_data.url, {
      method: "PUT",
      body: fd,

      headers: myHeaders,
      redirect: "follow"
    });
    let json;
    let res;
    let val;
    let is_error;
    let res_headers;

    if (response.status >= 200 && response.status <= 299) {
      json = await response.json();
      res = await response.status;
      val = await response.statusText;
      res_headers = await response.headers.entries();
      is_error = false;
    } else {
      // Handle errors

      json = {};

      res = await response.status;
      val = await response.statusText;
      res_headers = await response.headers.entries();
      is_error = true;
      console.log(response.status, response.statusText);
    }

    const s_api_data = {
      json,
      res,
      val,
      is_error,
      res_headers
    };

    commit("show_put_req", s_api_data);
  }
};

const mutations = {
  show_get_req: (state, api_data) => {
    state.api_data = api_data.json;
    state.response_val = api_data.res;
    state.response_text = api_data.val;
    state.is_error = api_data.is_error;
    state.response_headers = api_data.res_headers;
  },
  show_post_req: (state, api_data) => {
    state.api_data = api_data.json;
    state.response_val = api_data.res;
    state.response_text = api_data.val;
    state.is_error = api_data.is_error;
    state.response_headers = api_data.res_headers;
  },
  show_del_req: (state, api_data) => {
    state.api_data = api_data.json;
    state.response_val = api_data.res;
    state.response_text = api_data.val;
    state.is_error = api_data.is_error;
    state.response_headers = api_data.res_headers;
  },
  show_put_req: (state, api_data) => {
    state.api_data = api_data.json;
    state.response_val = api_data.res;
    state.response_text = api_data.val;
    state.is_error = api_data.is_error;
    state.response_headers = api_data.res_headers;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
