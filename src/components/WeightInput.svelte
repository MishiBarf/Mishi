<script lang="ts">
	import { LB_TO_G_RATIO } from '../core/convertor';
	import type { Measurements } from '../core/types';

	let _weight = 0;
	export let measurements: Measurements;
	export let weight = 0;
	$: {
		if (measurements === 'metric') {
			weight = _weight * 1000;
		} else {
			weight = _weight * LB_TO_G_RATIO;
		}
	}
</script>

<div class="form-control w-full max-w-xs">
	<label class="label" for="cat_weight">
		<span class="label-text">Cat's weight (in {measurements === 'metric' ? 'kg' : 'lb'})</span>
	</label>
	<input
		id="cat_weight"
		type="number"
		placeholder="Weight"
		class="input input-bordered w-full max-w-xs"
		min="0"
		bind:value={_weight}
	/>
</div>
