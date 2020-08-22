<template>
    <header id="header">
        <div>
            <img src="@/assets/logo.png" class="logo-img" />
            <ul class="icons">
                <li>
                    <font-awesome-icon :icon="['fab', 'twitter']" />
                </li>
                <li>
                    <font-awesome-icon :icon="['fab', 'facebook']" />
                </li>
            </ul>
        </div>
    </header>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
  components: {
    FontAwesomeIcon,
  },
};
</script>

<style>
</style>
