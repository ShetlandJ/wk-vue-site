<template>
    <div id="sidebar" :class="{
            inactive: !showMenu,
        }">
        <div class="inner">
            <h3 class="close-button" v-if="smallWindow" @click="showMenu = !showMenu">X</h3>

            <!-- Menu -->
            <nav id="menu">
                <header class="major">
                    <h2 class="menu-text">Menu</h2>
                </header>
                <ul>
                    <router-link class="router-link" @click.native="menuItemClicked" to="/">
                        <a>Home</a>
                    </router-link>

                    <router-link class="router-link" @click.native="menuItemClicked" to="/about">
                        <a>The Team</a>
                    </router-link>

                    <router-link class="router-link" @click.native="menuItemClicked" to="/our-work">
                        <a>Our Work</a>
                    </router-link>
                </ul>
            </nav>

            <!-- Section -->
            <section>
                <header class="major">
                    <h2 class="get-in-touch-text">Get in touch</h2>
                </header>
                <!-- eslint-disable-next-line -->
                <p>Do you know someone who would benefit from our service? We'd love to hear from you.</p>
            </section>

            <div>
                <a class="external-link" href="mailto:james@wrestlekind.org">
                    <font-awesome-icon size="lg" icon="envelope" />&nbsp; james@wrestlekind.org
                </a>
                <br />
                <a class="external-link" href="https://www.twitter.com/WrestleKind">
                    <font-awesome-icon size="lg" :icon="['fab', 'twitter']" />&nbsp; @WrestleKind
                </a>
                <br />
                <a class="external-link" href="https://www.facebook.com/wrestlekind">
                    <font-awesome-icon size="lg" :icon="['fab', 'facebook']" />&nbsp; /wrestlekind
                </a>
            </div>

            <footer id="footer">
                <p class="copyright">&copy; WrestleKind 2020</p>
            </footer>

            <!-- Footer -->
        </div>
    </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
  components: {
    FontAwesomeIcon,
  },
  props: {
    showMenu: {
      type: Boolean,
      default: false,
    },
    smallWindow: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    menuItemClicked() {
      if (this.smallWindow) {
        this.showMenu = false;
      }
    },
  },
};
</script>

<style scoped>
.close-button {
    display: flex;
    justify-content: flex-end;
    margin: 0 !important;
    padding: 0 !important;
    border-bottom: 0 !important;
}

.menu-text {
    padding: 0 !important;
    margin: 0 0 10px 0 !important;
    border-bottom: solid 3px #f56a6a;
    display: flex;
    justify-content: center;
}

.router-link {
    border-top: solid 1px rgba(210, 215, 217, 0.75);
}

.get-in-touch-text {
    margin-bottom: 10px !important;
}

li {
    padding-left: 0;
}

.external-link {
    font-size: 18px;
}
</style>
