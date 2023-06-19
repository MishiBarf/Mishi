<template>
  <q-item
    :clickable="$route.path !== link.slice(1)"
    tag="a"
    :href="link"
    :target="newTab ? '_blank' : ''"
    :active="$route.path === link.slice(1)"
  >
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ $t(title) }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      default: '#',
    },

    icon: {
      type: String,
      default: '',
    },

    newTab: {
      type: Boolean,
      default: false
    }
  },
});
</script>
