<template>
  <svg>
    <use xlink:href="fr.svg"></use>
  </svg>

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
        </q-toolbar-title>
        <q-btn-dropdown stretch flat dropdown-icon="settings">
          <q-list>
            <q-item-label header>Measurements</q-item-label>
            <q-item v-for="u in Units" :key="u" clickable @click="setUnit(u)">
              <q-item-section>
                <q-item-label>{{ u }}</q-item-label>
              </q-item-section>
              <q-item-section side v-if="unit == u">
                <q-icon name="check" color="primary"/>
              </q-item-section>
            </q-item>
            <q-separator inset spaced/>
            <q-item-label header>Language</q-item-label>
            <q-item clickable>
              <q-item-section avatar>
                <q-icon name="svguse:fr.svg" color="primary"/>
              </q-item-section>
              <q-item-section>
                <q-item-label>English</q-item-label>
              </q-item-section>
              <q-item-section avatar>
                <q-icon name="check" color="primary"/>
              </q-item-section>
            </q-item>
            <!--            <q-item v-for="n in 3" :key="`y.${n}`" clickable v-close-popup tabindex="0">-->
            <!--              <q-item-section avatar>-->
            <!--                <q-avatar icon="assignment" color="primary" text-color="white"/>-->
            <!--              </q-item-section>-->
            <!--              <q-item-section>-->
            <!--                <q-item-label>Vacation</q-item-label>-->
            <!--                <q-item-label caption>February 22, 2016</q-item-label>-->
            <!--              </q-item-section>-->
            <!--              <q-item-section side>-->
            <!--                <q-icon name="info"/>-->
            <!--              </q-item-section>-->
            <!--            </q-item>-->
          </q-list>
        </q-btn-dropdown>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Navigation
        </q-item-label>
      </q-list>
    </q-drawer>

    <q-footer>
      <q-toolbar>
        <p class="text-center text-caption q-pl-sm q-mb-none">Copyright Mishi © 2023 - All right reserved</p>
        <q-space/>
        <q-btn flat round icon="mdi-facebook" href="https://www.facebook.com/profile.php?id=100091655991190"
               target="_blank"></q-btn>
        <q-btn flat round icon="mdi-instagram" href="https://www.instagram.com/mishi_barf/" target="_blank"></q-btn>
      </q-toolbar>
    </q-footer>

    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
import {Units} from "src/logic/constants";
import {useUnitStore} from "stores/unit-store";
import {storeToRefs} from "pinia";


export default defineComponent({
  name: 'MainLayout',
  components: {},

  setup() {
    const leftDrawerOpen = ref(false)
    const store = useUnitStore();
    const {unit} = storeToRefs(store);

    return {
      Units,
      unit,
      leftDrawerOpen,
      setUnit: store.setUnit,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
    }
  }
});
</script>
