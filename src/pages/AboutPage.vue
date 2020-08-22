<template>
    <div>
        <section id="banner" v-for="person in profiles" :key="person.id">
            <div class="content">
                <header>
                    <h1>{{person.name}}</h1>
                    <!-- eslint-disable-next-line -->
                    <p class="subheadline">Role</p>
                </header>

                <p>
                    <!-- eslint-disable-next-line -->
                    {{person.text}}
                </p>
                <a href="#" class="button big">SOCIAL MEDIAS</a>
            </div>
            <span class="image object">
                <img :src="getImgUrl(person.img)" alt />
            </span>
        </section>
    </div>
</template>

<script>
export default {
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
          name: 'Lee Greig',
          img: 'jj.jpg',
          text:
                        'Performing as Jack Jester, Lee is a stalwart of the British wrestling scene, with over 16 years of wrestling experience across the UK as a performer, promoter and trainer. As a performer, Jack is best known for his time with Glasgow based ICW, and has been the main promoter of Wrestle Experience Scotland since 2017. Additionally, Jack works with the Asylum wrestling school as a trainer.',
        },
        {
          id: 2,
          name: 'Kimberly Benson',
          img: 'v.png',
          text:
                        'Performing as Viper or Piper Niven, Kim became one of the first Scottish female wrestlers to work for global wrestling giant World Wrestling Entertainment when she joined their NXT UK brand in 2019, having performed in three matches for the company in 2017. She is an international performer, having also worked in Japan. She is currently a full time employee of WWE and also trains wrestlers at the Asylum in Glasgow.',
        },
        {
          id: 3,
          name: 'James Stewart',
          img: 'js.png',
          text:
                        "James is a software developer and experienced charity professional. James's previous charitable positions include as Chair of the Shetland Skatepark Association (2011-2012) where he led the group to raise £200,000 for a skatepark in the Shetland Islands and as founder and Chair of Get-Well Gamers UK (2014-2019), a charity that delivered video games and consoles to sick kids in hospital.",
        },
      ],
    };
  },
};
</script>

<style>
</style>
