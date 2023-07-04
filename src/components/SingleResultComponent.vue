<template>
  <q-card-section class="column justify-start q-gutter-sm">
    <span class="text-caption">{{ $t(title) }}</span>
    <span
      >{{ $t('result.daily') }}
      <span class="text-bold">
        {{ NumberFormatter().format(dailyValue) }}{{ unit }}
      </span>
    </span>
    <span v-if="mult > 1">
      {{ $t('result.total') }}
      <span class="text-bold">
        {{ NumberFormatter().format(dailyValue * mult) }}{{ unit }}
      </span>
    </span>
  </q-card-section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

const NumberFormatter = Intl.NumberFormat('fr-Fr', {
  maximumFractionDigits: 2,
});

export default defineComponent({
  name: 'SingleResultComponent',
  methods: {
    NumberFormatter() {
      return NumberFormatter;
    },
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    dailyValue: {
      type: Number,
      default: 0,
    },
    mult: {
      type: Number,
      default: 0,
    },
    unit: {
      type: String,
      default: '',
    },
  },
});
</script>
