<template>
  <q-page class="column items-center justify-evenly">
    <div>
      <calculator-component
        @calculate="(data) => result?.doCalculate(data)"
      ></calculator-component>
    </div>
    <div class="q-pb-xl">
      <result-component ref="result"></result-component>
    </div>
    <div
      class="text-center text-caption absolute-bottom text-info"
      v-html="t('navigation.constantImprove', [FeedbackUrl])"
    ></div>
  </q-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import CalculatorComponent from 'components/CalculatorComponent.vue';
import ResultComponent from 'components/ResultComponent.vue';
import { AcceptedCookiesKey, FeedbackUrl } from 'src/logic/constants';
import { useI18n } from 'vue-i18n';
import { useQuasar } from 'quasar';

const { t } = useI18n();
const $q = useQuasar();
const result = ref<typeof ResultComponent | null>(null);

const acceptedCookies = localStorage.getItem(AcceptedCookiesKey);
if (acceptedCookies === null) {
  $q.notify({
    message: t('notify.cookies'),
    timeout: 0,
    actions: [
      {
        label: 'Ok',
        color: 'white',
        handler: () => {
          localStorage.setItem(AcceptedCookiesKey, 'true');
        },
      },
    ],
  });
}
</script>
