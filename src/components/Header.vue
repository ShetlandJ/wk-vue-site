<template>
    <header id="header">
        <div>
            <img src="@/assets/logo_with_text.png" class="logo-img" />

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
        instagram: 'wrestlekind',
      },
    };
  },
};
</script>
