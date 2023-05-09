<script lang="ts">
	import { formatGrams } from '../core/convertor';
	import type { Grams, Measurements } from '../core/types';

	export let intake: Grams = 0;
	export let title: string;
	export let multiplicator = 1;

	export let measurements: Measurements = 'metric';
</script>

<div class="stat">
	<div class="stat-desc">{title}</div>
	<div class="stat-title">
		Daily: {formatGrams(intake, measurements)}
	</div>
	{#if multiplicator > 1 && intake > 0}
		<div class="stat-title">
			Total: {formatGrams(intake * multiplicator, measurements)}
		</div>
	{/if}
</div>
