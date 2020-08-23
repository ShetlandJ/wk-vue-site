<template>
    <ul class="icons">
        <li v-if="options.twitter">
            <a :href="`https://www.twitter.com/${options.twitter}`" target="_blank">
                <font-awesome-icon size="lg" :icon="['fab', 'twitter']" />
            </a>
        </li>
        <li v-if="options.facebook">
            <a :href="`https://www.facebook.com/${options.facebook}`" target="_blank">
                <font-awesome-icon size="lg" :icon="['fab', 'facebook']" />
            </a>
        </li>
    </ul>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
  props: {
    options: {
      type: Object,
      required: true,
    },
  },
  components: {
    FontAwesomeIcon,
  },
};
</script>

<style>
</style>
