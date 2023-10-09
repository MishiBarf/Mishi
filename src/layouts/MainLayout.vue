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
        <q-toolbar-title>
          Mishi
          <span class="text-caption"> Beta </span>
        </q-toolbar-title>

        <q-select
          v-model="locale"
          :options="localeOptions"
          :hide-selected="$q.screen.lt.md"
          :hide-dropdown-icon="$q.screen.lt.md"
          label-color="white"
          :dark="true"
          :options-dark="$q.dark.isActive"
          dense
          :borderless="true"
          emit-value
          map-options
        >
          <template v-slot:prepend>
            <q-icon color="white" name="translate" />
          </template>
        </q-select>
        <ThemeButtonComponent></ThemeButtonComponent>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>{{ $t('navigation.navigation') }}</q-item-label>
        <EssentialLink v-for="link in links" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-footer>
      <q-toolbar>
        <p class="text-center text-caption q-pl-sm q-mb-none">
          Copyright Mishi © 2023 - All right reserved
        </p>
        <q-space />
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
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { FeedbackUrl } from 'src/logic/constants';
import { useI18n } from 'vue-i18n';
import EssentialLink from 'components/EssentialLink.vue';
import ThemeButtonComponent from 'components/buttons/ThemeButtonComponent.vue';

const links = [
  {
    title: 'navigation.home',
    icon: 'home',
    link: '#/',
  },
  {
    title: 'navigation.feedback',
    icon: 'lightbulb',
    link: FeedbackUrl,
    newTab: true,
  },
];

const leftDrawerOpen = ref(false);
const { locale } = useI18n({ useScope: 'global' });
const localeOptions = [
  { value: 'en-US', label: 'English' },
  { value: 'fr', label: 'Français' },
  { value: 'es-ES', label: 'Español' },
];

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
