<template>
    <!-- eslint-disable -->
    <div class="justify-left">
        <p>
            At the end of 2020, we ran a fundraiser aimed at helping to purchase
            essential items for those affected by homelessness in Glasgow.
        </p>
        <p>
            The fundraiser was big success, and we ended up raising over £1,130,
            which helped us get more than 1200 items to the Glasgow Humanists'
            Street Team. The street team provide vital assistance to rough
            sleepers on Glasgow's streets. Items included:
        </p>

        <ul class="text-left">
            <li>300+ mini toiletries</li>
            <li>120 pairs of gloves</li>
            <li>200+ pairs of socks</li>
            <li>100 rain ponchos</li>
            <li>144 hats</li>
        </ul>

        <div class="image-row">
            <img :src="getImgUrl('fundraiser_j.jpg')" alt />
            <img :src="getImgUrl('fundraiser_j_v.jpg')" alt />
            <img :src="getImgUrl('fundraiser_j_jj.jpg')" alt />
        </div>
    </div>
</template>

<script>
export default {
  methods: {
    getImgUrl(pic) {
      // eslint-disable-next-line
        return require(`../../public/homeless_fundraiser/${pic}`);
    },
  },
};
</script>

<style scoped>
.justify-left {
    text-align: left;
}

.image-row {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
}

img {
    max-width: 33%;
    max-height: 33%;
    padding: 2px;
}

@media screen and (max-width: 980px) {
  .image-row {
    flex-direction: column;
  }

  img {
      max-width: 100%;
      max-height: 100%;
  }
}

</style>
