<template>
    <section>
        <header class="major">
            <h2>What We Do</h2>
        </header>
        <div class="features">
            <charity-work-block
                v-for="activity in activities"
                :key="activity.icon"
                :activity="activity"
            />
        </div>
    </section>
</template>

<script>
import CharityWorkBlock from '../components/CharityWorkBlock.vue';

export default {
  components: {
    CharityWorkBlock,
  },
  data() {
    return {
      activities: [
        {
          icon: ['fa', 'hospital'],
          // eslint-disable-next-line max-len
          text: 'We arrange for groups for wrestlers to visit hospitals to entertain young patients',
          title: 'Hospital visits',
        },
        {
          icon: ['fa', 'user-friends'],
          // eslint-disable-next-line max-len
          text: 'Wrestlers visiting wrestling fans in their homes for a personal one-on-one experience',
          title: 'Personal visits',
        },
        {
          icon: ['fa', 'dumbbell'],
          text: 'Letting individuals or groups get a photo shoot inside a real wrestling ring',
          title: 'The Wrestling Experience',
        },
        {
          icon: ['fa', 'calendar-plus'],
          // eslint-disable-next-line max-len
          text: 'We run wrestling shows across the country where all proceeds go towards the people we help through WrestleKind',
          title: 'Charity wrestling shows',
        },
      ],
    };
  },
};
</script>
