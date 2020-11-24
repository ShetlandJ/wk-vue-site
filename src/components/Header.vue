<template>
    <header id="header">
        <div>
            <img src="@/assets/logo_with_text.png" class="logo-img" />

            <social-media-icon-row :options="socialMedia" />

            <p>
                Support our
                <a href="https://www.justgiving.com/crowdfunding/wrestlekind"
                    >winter fundraiser</a
                >
                & win a signed singlet and a pair of boots kindly donated by NXT
                UK Superstar <a href="https://en.wikipedia.org/wiki/Piper_Niven">Piper Niven!</a>
            </p>
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
        instagram: 'wrestlekind',
      },
    };
  },
};
</script>
