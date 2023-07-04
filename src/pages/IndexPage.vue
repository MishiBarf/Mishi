<template>
  <q-page class="column items-center justify-evenly">
    <div>
      <calculator-component
        @calculate="(data) => result?.doCalculate(data)"
      ></calculator-component>
    </div>
    <div>
      <result-component ref="result"></result-component>
    </div>
    <div
      class="text-center absolute-bottom text-caption"
      v-html="t('navigation.constantImprove', [FeedbackUrl()])"
    ></div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import CalculatorComponent from 'components/CalculatorComponent.vue';
import ResultComponent from 'components/ResultComponent.vue';
import { FeedbackUrl } from 'src/logic/constants';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'IndexPage',
  methods: {
    FeedbackUrl() {
      return FeedbackUrl;
    },
  },
  components: { ResultComponent, CalculatorComponent },
  setup() {
    const { t } = useI18n();

    return {
      t,
      result: ref<typeof ResultComponent | null>(null),
    };
  },
});
</script>
