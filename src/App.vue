<template>
    <div id="app">
        <!-- Wrapper -->
        <div id="wrapper">
            <!-- Main -->
            <div id="main">
                <div class="inner">
                    <!-- Header -->
                    <page-header />

                    <router-view></router-view>
                </div>
            </div>

            <!-- Sidebar -->
            <div>
                <h4 v-if="smallWindow">
                    <a class="menu-button button-big" @click="showMenu = !showMenu">Menu</a>
                </h4>

                <sidebar :show-menu="showMenu" :small-window="smallWindow" />
            </div>
        </div>
    </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue';
import PageHeader from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Sidebar,
    PageHeader,
  },
  data() {
    return {
      showMenu: false,
      smallWindow: false,
    };
  },
  created() {
    if (window.innerWidth <= 500) {
      this.showMenu = false;
      this.smallWindow = true;
    } else {
      this.showMenu = true;
    }
  },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

.menu-button {
    position: absolute;
    margin: 5%;
}

.logo-img {
    max-height: 150px;
}

@media only screen and (max-width: 600px) {
    p {
        font-size: 18px !important;
    }
}

.subheadline {
    margin-bottom: 15px !important;
}
</style>
