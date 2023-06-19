<template>
  <q-page class="column items-center justify-evenly">
    <div>
      <calculator-component
        @calculate="(data) => result.doCalculate(data)"
      ></calculator-component>
    </div>
    <div>
      <result-component ref="result"></result-component>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import CalculatorComponent from 'components/CalculatorComponent.vue';
import ResultComponent from 'components/ResultComponent.vue';

export default defineComponent({
  name: 'IndexPage',
  components: { ResultComponent, CalculatorComponent },
  setup() {
    return {
      result: ref<ResultComponent | null>(null),
    };
  },
});
</script>
