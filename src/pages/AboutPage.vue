<template>
    <div>
      <h2 class="no-bottom container">The Team</h2>
        <section id="banner" v-for="person in profiles" :key="person.id">
            <div class="content">
                <header>
                    <h1>{{person.name}}</h1>
                    <p class="subheadline">{{person.role}}</p>
                </header>

                <!-- eslint-disable-next-line -->
                <p v-html="person.text"/>

                <social-media-icon-row :options="person.socialMedia" />
            </div>
            <span class="image object">
                <img :src="getImgUrl(person.img)" alt />
            </span>
        </section>
    </div>
</template>

<script>
import SocialMediaIconRow from '../components/SocialMediaIconRow.vue';

export default {
  components: {
    SocialMediaIconRow,
  },
  methods: {
    getImgUrl(pic) {
      // eslint-disable-next-line
      return require(`../../public/${pic}`);
    },
  },
  data() {
    return {
      profiles: [
        {
          id: 1,
          role: 'Founder',
          name: 'Lee Greig',
          img: 'jj.jpg',
          text: 'Performing as <b>Jack Jester</b>, Lee is a stalwart of the British wrestling scene, with over 16 years of wrestling experience across the UK as a performer, promoter and trainer. As a performer, Lee is best known for his time with Glasgow based ICW, and has been the main promoter of Wrestle Experience Scotland since 2017. Additionally, Jack works with the Asylum wrestling school as a trainer.',
          socialMedia: {
            twitter: '@GlasgowJester',
            facebook: 'GlasgowJester',
          },
        },
        {
          id: 2,
          role: 'Founder',
          name: 'Kimberly Benson',
          img: 'v.jpg',
          text: 'Performing as <b>Viper</b> or <b>Piper Niven</b>, Kim became one of the first Scottish female wrestlers to work for global wrestling giant World Wrestling Entertainment when she joined their NXT UK brand in 2019, having performed in three matches for the company in 2017. A popular international figure, Kim has not only performed the length and breadth of the UK, she has also wrestled in American and Japan. She is currently a full time employee of WWE and also trains wrestlers in Scotland.',
          socialMedia: {
            twitter: '@viperpiperniven',
            facebook: 'ViperWrestling',
            instagram: 'viperpiperniven',
          },
        },
        {
          id: 3,
          role: 'Founder',
          name: 'James Stewart',
          img: 'js.png',
          text: "James is a software developer and experienced charity professional. James's previous charitable positions include as Chair of the Shetland Skatepark Association (2011-2012) where he led the group to raise £200,000 for a skatepark in the Shetland Islands and as founder and Chair of Get-Well Gamers UK (2014-2019), a charity that delivered video games and consoles to sick kids in hospital.",
          socialMedia: {
            twitter: '@JAStewart',
          },
        },
      ],
    };
  },
};
</script>

<style scoped>
.container {
  padding-top: 20px !important;
}
</style>
