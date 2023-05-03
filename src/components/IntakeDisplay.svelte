<script lang="ts">
	import { formatGrams } from '../core/convertor';
	import type { IntakeType, Measurements } from '../core/types';

	export let intake: IntakeType = 0;
	export let title: string;
	export let multiplicator = 1;
	export let measurements: Measurements = 'metric';
</script>

<div class="stat">
	<div class="stat-title">{title}</div>
	<div class="stat-value">
		{formatGrams(intake, measurements)}
	</div>
	{#if multiplicator > 1 && intake > 0}
		<div class="stat-desc">
			Total: <strong>{formatGrams(intake * multiplicator, measurements)}</strong>
		</div>
	{/if}
</div>
