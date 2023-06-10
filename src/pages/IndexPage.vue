<template>
  <q-page class="row items-center justify-evenly">
    <calculator-component></calculator-component>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CalculatorComponent from 'components/CalculatorComponent.vue';

export default defineComponent({
  name: 'IndexPage',
  components: { CalculatorComponent },
  setup() {
    return {};
  },
});
</script>
