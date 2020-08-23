<template>
    <article>
        <!-- <span class="icon solid">
            <font-awesome-icon class="fa-icon" size="lg" :icon="activity.icon" />
        </span> -->
        <div class="content">
                <!-- eslint-disable-next-line -->
            <h3><font-awesome-icon class="fa-icon" size="lg" :icon="activity.icon" />&nbsp; {{activity.title}}</h3>
            <p>{{activity.text}}</p>
        </div>
    </article>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
  components: {
    FontAwesomeIcon,
  },
  props: {
    activity: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.fa-icon {
    color: #f56a6a
}
</style>
