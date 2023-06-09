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
        </q-toolbar-title>

        <q-select
          v-model="locale"
          :options="localeOptions"
          :label="$t('inputs.language')"
          :dark="true"
          :options-dark="false"
          borderless
          label-color="white"
          emit-value
          map-options
          style="min-width: 150px"
        >
          <template v-slot:prepend>
            <q-icon name="translate"/>
          </template>
        </q-select>

        <q-btn-dropdown stretch flat dropdown-icon="settings" >
          <q-list>
            <q-item-label header> {{ $t('inputs.measurements') }}</q-item-label>
            <q-item v-for="u in Measurements" :key="u" clickable @click="setMeasurement(u)">
              <q-item-section>
                <q-item-label>{{ $t(`measurements.${u}`) }}</q-item-label>
              </q-item-section>
              <q-item-section :class="{'invisible': measurement != u}" side >
                <q-icon name="check" color="primary"/>
              </q-item-section>
            </q-item>
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
        <q-item-label header>
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
import {Measurements} from 'src/logic/constants';
import {storeToRefs} from 'pinia';
import {useI18n} from 'vue-i18n';
import {useMeasurementStore} from 'stores/measurement-store';


export default defineComponent({
  name: 'MainLayout',
  components: {},

  setup() {
    const leftDrawerOpen = ref(false)
    const store = useMeasurementStore();
    const {measurement} = storeToRefs(store);
    const {locale, t} = useI18n({useScope: 'global'});


    return {
      Measurements,
      measurement,
      locale,
      localeOptions: [
        {value: 'en-US', label: 'English'},
        {value: 'fr', label: 'Français'}
      ],
      measurementOptions: Measurements.map(name => ({
        label: t(`measurements.${name}`),
        value: name
      })),
      leftDrawerOpen,
      setMeasurement: store.setMeasurement,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
    }
  }
});
</script>
