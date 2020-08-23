<template>
    <section>
        <header class="major">
            <h2>What We Do</h2>
            <div class="small-bottom">
                The goal of
                <!-- eslint-disable-next-line max-len -->
                <b>WrestleKind</b> is to bring joy to young people across the UK through professional wrestling experiences. The idea for the charity was born after the three founders combined for a Wrestling/Video Gaming event at the Glasgow Sick Kids Hospital in 2019 via
                <a
                    href="https://www.getwellgamers.org.uk"
                >Get-Well Gamers</a>.
            </div>
            <!-- eslint-disable-next-line max-len -->
            <div class="small-bottom">We work with organisations and families to create lasting memories for those in need. We specifically work with the following groups: Disadvantaged kids, kids experience illness of injury, young carers and those with disabilities.</div>
            <span class="small-text">Some activities are currently suspended due to COVID-19</span>
        </header>
        <div class="features">
            <charity-work-block
                v-for="activity in activities"
                :key="activity.id"
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
          id: 1,
          icon: ['fa', 'hospital'],
          // eslint-disable-next-line max-len
          text:
                        'We arrange for groups for wrestlers to visit hospitals to entertain young patients',
          title: 'Hospital visits',
        },
        {
          id: 2,
          icon: ['fa', 'user-friends'],
          // eslint-disable-next-line max-len
          text:
                        'Wrestlers visiting wrestling fans in their homes for a personal one-on-one experience',
          title: 'Personal visits',
        },
        {
          id: 3,
          icon: ['fa', 'dumbbell'],
          text:
                        'Letting individuals or groups get a photo shoot inside a real wrestling ring',
          title: 'The Wrestling Experience',
        },
        {
          id: 4,
          icon: ['fa', 'calendar-plus'],
          // eslint-disable-next-line max-len
          text:
                        'We run wrestling shows across the country where all proceeds go towards the people we help through WrestleKind',
          title: 'Charity wrestling shows',
        },
      ],
    };
  },
};
</script>
