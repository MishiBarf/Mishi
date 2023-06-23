<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-space></q-space>
        <q-toolbar-title>Mishi</q-toolbar-title>

        <q-select
          v-model="locale"
          :options="localeOptions"
          :hide-selected="true"
          :hide-dropdown-icon="true"
          dense
          :borderless="true"
          emit-value
          map-options
          dropdown-icon="translate"
        >
          <template v-slot:prepend>
            <q-icon color="white" name="translate"/>
          </template>
        </q-select>
        <q-btn @click="$q.dark.toggle" flat dense round icon="compare"></q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>{{ $t('navigation.navigation') }}</q-item-label>
        <EssentialLink v-for="link in links" :key="link.title" v-bind="link"/>
      </q-list>
    </q-drawer>

    <q-footer>
      <q-toolbar>
        <p class="text-center text-caption q-pl-sm q-mb-none">
          Copyright Mishi © 2023 - All right reserved
        </p>
        <q-space/>
        <q-btn
          flat
          round
          icon="mdi-facebook"
          href="https://www.facebook.com/profile.php?id=100091655991190"
          target="_blank"
        ></q-btn>
        <q-btn
          flat
          round
          icon="mdi-instagram"
          href="https://www.instagram.com/mishi_barf/"
          target="_blank"
        ></q-btn>
      </q-toolbar>
    </q-footer>

    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
import {Measurements} from 'src/logic/constants';
import {storeToRefs} from 'pinia';
import {useI18n} from 'vue-i18n';
import {useMeasurementStore} from 'stores/measurement-store';
import EssentialLink from 'components/EssentialLink.vue';

const links = [
  {
    title: 'navigation.home',
    icon: 'home',
    link: '#/',
  },
  {
    title: 'navigation.blog',
    icon: 'rss_feed',
    link: '#/blog',
  },
  {
    title: 'navigation.feedback',
    icon: 'lightbulb',
    link: 'https://forms.gle/9cHuvLU6Rt6us4Gv6',
    newTab: true,
  },
  // {
  //   title: 'navigation.feedback',
  //   caption: '',
  //   icon: 'rate_review',
  //   link: '#/'
  // },
];

export default defineComponent({
  name: 'MainLayout',
  components: {EssentialLink},

  setup() {
    const leftDrawerOpen = ref(false);
    const store = useMeasurementStore();
    const {measurement} = storeToRefs(store);
    const {locale, t} = useI18n({useScope: 'global'});

    return {
      Measurements,
      measurement,
      locale,
      localeOptions: [
        {value: 'en-US', label: 'English'},
        {value: 'fr', label: 'Français'},
        {value: 'es-ES', label: 'Español'},
      ],
      measurementOptions: Measurements.map((name) => ({
        label: t(`measurements.${name}`),
        value: name,
      })),
      leftDrawerOpen,
      setMeasurement: store.setMeasurement,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      links,
    };
  },
});
</script>
