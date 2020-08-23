<template>
    <header id="header">
        <div>
            <img src="@/assets/logo.png" class="logo-img" />

            <social-media-icon-row :options="socialMedia" />
        </div>
    </header>
</template>

<script>
import SocialMediaIconRow from './SocialMediaIconRow.vue';

export default {
  components: {
    SocialMediaIconRow,
  },
  data() {
    return {
      socialMedia: {
        twitter: '@WrestleKind',
        facebook: 'wrestlekind',
      },
    };
  },
};
</script>

<style>
</style>
