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
                    <router-link class="router-link" to="/">
                        <a>Home</a>
                    </router-link>

                    <router-link class="router-link" to="/about">
                        <a>About</a>
                    </router-link>
                    <li>
                        <a href="elements.html">Elements</a>
                    </li>
                    <li>
                        <span class="opener">Submenu</span>
                        <ul>
                            <li>
                                <a href="#">Lorem Dolor</a>
                            </li>
                            <li>
                                <a href="#">Ipsum Adipiscing</a>
                            </li>
                            <li>
                                <a href="#">Tempus Magna</a>
                            </li>
                            <li>
                                <a href="#">Feugiat Veroeros</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Etiam Dolore</a>
                    </li>
                    <li>
                        <a href="#">Adipiscing</a>
                    </li>
                    <li>
                        <span class="opener">Another Submenu</span>
                        <ul>
                            <li>
                                <a href="#">Lorem Dolor</a>
                            </li>
                            <li>
                                <a href="#">Ipsum Adipiscing</a>
                            </li>
                            <li>
                                <a href="#">Tempus Magna</a>
                            </li>
                            <li>
                                <a href="#">Feugiat Veroeros</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Maximus Erat</a>
                    </li>
                    <li>
                        <a href="#">Sapien Mauris</a>
                    </li>
                    <li>
                        <a href="#">Amet Lacinia</a>
                    </li>
                </ul>
            </nav>

            <!-- Section -->
            <section>
                <header class="major">
                    <h2>Get in touch</h2>
                </header>
                <p>facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                <ul class="contact">
                    <li class="icon solid fa-envelope">
                        <a href="#">information@untitled.tld</a>
                    </li>
                    <li class="icon solid fa-phone">(000) 000-0000</li>
                    <li class="icon solid fa-home">
                        1234 Somewhere Road #8254
                        <br />Nashville, TN 00000-0000
                    </li>
                </ul>
            </section>

            <!-- Footer -->
            <footer id="footer">
                <p class="copyright">
                    &copy; Untitled. All rights reserved. Demo Images:
                    <a
                        href="https://unsplash.com"
                    >Unsplash</a>. Design:
                    <a href="https://html5up.net">HTML5 UP</a>.
                </p>
            </footer>
        </div>
    </div>
</template>

<script>
export default {
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
    border-top: solid 1px rgba(210, 215, 217, 0.75)
}
</style>
