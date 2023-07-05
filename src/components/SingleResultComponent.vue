<template>
  <q-card-section class="column justify-start q-gutter-sm">
    <q-tooltip anchor="top middle" self="center middle" v-if="percentage">
      {{ NumberFormatter.format(percentage * 100) }}%
    </q-tooltip>
    <span class="text-caption">{{ $t(title) }}</span>
    <span
      >{{ $t('result.daily') }}
      <span class="text-bold">
        {{ NumberFormatter.format(dailyValue) }}{{ unit }}
      </span>
    </span>
    <span v-if="mult > 1">
      {{ $t('result.total') }}
      <span class="text-bold">
        {{ NumberFormatter.format(dailyValue * mult) }}{{ unit }}
      </span>
    </span>
  </q-card-section>
</template>

<script setup lang="ts">
const NumberFormatter = Intl.NumberFormat('fr-Fr', {
  maximumFractionDigits: 2,
});

defineProps({
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
  percentage: {
    type: Number,
    default: undefined,
  },
});
</script>
