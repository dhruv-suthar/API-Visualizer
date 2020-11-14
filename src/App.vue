<template>
  <div id="app">
    <div class="container">
      <header>
        <!-- Fixed navbar -->
        <nav
          class="navbar navbar-expand-md navbar-dark fixed-top bg-dark pt-lg-0 pb-lg-0"
          style="padding-top:0px;padding-bottom:0px;"
        >
          <a class="navbar-brand" href="#"> <b>API</b>Visualizer </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse pt-0 pb-0" id="navbarCollapse">
            <ul class="navbar-nav ml-auto pt-0 pb-0 mt-0 mb-0 ">
              <li class="nav-item pt-md-0 pb-md-0 ">
                <a
                  class="nav-link"
                  href="https://github.com/dhruv-suthar/API-Visualizer"
                  style=""
                  ><span
                    class=" typcn typcn-social-github"
                    style="font-size:30px;"
                  ></span
                ></a>
              </li>
              <li class="nav-item pt-md-0 pb-md-0 ">
                <a
                  class="nav-link"
                  href="https://www.linkedin.com/in/dhruv-suthar"
                  ><span
                    class=" typcn typcn-social-linkedin"
                    style="font-size:30px;"
                  ></span
                ></a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <!-- main-->
      <div
        class="container ml-0 mr-0 pl-0 pr-0"
        style="padding : 0px!important;"
      >
        <div class="row p-0">
          <Requestapi_panel></Requestapi_panel>
          <Responseapi_panel></Responseapi_panel>
          <Visualizationapi_panel></Visualizationapi_panel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Requestapi_panel from "./components/Requestapi_panel.vue";
import Responseapi_panel from "./components/Responseapi_panel.vue";
import Visualizationapi_panel from "./components/Visualizationapi_panel.vue";

export default {
  name: "App",
  components: {
    Requestapi_panel,
    Responseapi_panel,
    Visualizationapi_panel
  }
};
</script>

<style>
:root {
  --bg-color: #2c3e50;
  --container-bg-color: #1d2935;
  --highlighted-tab-color: #42b983;
  --container-heading-text-color: #ffffff;
}

* {
  margin: 0;
  padding: 5px;
  font-family: "Montserrat", sans-serif;
}

/* width */
.main_container *::-webkit-scrollbar {
  width: 7px !important;
  height: 7px !important;
}

/* Track */
.main_container * ::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3) !important;
  border-radius: 10px;
}

/* Handle */
.main_container * ::-webkit-scrollbar-thumb {
  background: var(--highlighted-tab-color) !important;
  border-radius: 5px;
}

html {
  font-size: 1rem !important;
}

body {
  background-color: var(--bg-color);
}

.main_container {
  background-color: var(--container-bg-color);
  color: var(--container-heading-text-color);
}

input[type="checkbox"]:checked + label:before {
  background-color: var(--highlighted-tab-color);
  border-color: var(--highlighted-tab-color);
}

.btn-green-alt {
  background: var(--highlighted-tab-color) !important;
  border: none !important;
  color: white !important;
}
</style>
