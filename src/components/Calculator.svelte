<script lang="ts">
	import IntakeDisplay from '../components/IntakeDisplay.svelte';
	import WeightInput from '../components/WeightInput.svelte';
	import { calculateCatIntakes } from '../core/calculator';
	import type { CalculatorOutput, Sex } from '../core/types';
	import { measurements } from '../core/stores';

	let disableButton: boolean;
	let statsVisible = false;
	let sex: Sex = 'male';
	let weight = 0;
	let age = 0;
	let mealCount = 1;

	$: {
		disableButton = weight <= 1 || age < 0 || !['male', 'female'].includes(sex.toLocaleLowerCase());
	}

	let result: CalculatorOutput = {
		dailyMeatIntake: 0,
		dailyOffalIntake: 0,
		dailyEggIntake: 0,
		dailyOilIntake: 0,
		dailyBoneIntake: 0
	};

	function doCalculations() {
		result = calculateCatIntakes({ sex, weight, age });
		statsVisible = true;
	}
</script>

<div class="pb-10 m-auto">
	<div class="grid grid-cols-1 gap-2 w-80 mx-auto">
		<div class="form-control w-full max-w-xs">
			<label class="label" for="cat_age">
				<span class="label-text">Cat's age</span>
			</label>
			<input
				id="cat_age"
				type="number"
				placeholder="Age"
				class="input input-bordered w-full max-w-xs"
				min="0"
				bind:value={age}
			/>
		</div>

		<div class="form-control w-full max-w-xs">
			<label class="label" for="cat_sex">
				<span class="label-text">Cat'sex</span>
			</label>
			<select id="cat_sex" class="select w-full max-w-xs select-bordered" bind:value={sex}>
				<option disabled selected>Select an option</option>
				<option value="female">Female</option>
				<option value="male">Male</option>
			</select>
		</div>

		<WeightInput measurements={$measurements} bind:weight />

		<div class="form-control w-full max-w-xs">
			<label class="label" for="meals_count">
				<span class="label-text">Number of meals</span>
			</label>
			<input
				id="meals_count"
				type="number"
				placeholder="Weight"
				class="input input-bordered w-full max-w-xs"
				min="1"
				max="100"
				bind:value={mealCount}
			/>
		</div>

		<button class="btn" on:click={doCalculations} disabled={disableButton}>Calculate !</button>
	</div>

	<!--{#if statsVisible}-->
	<div class="grid grid-cols-1 gap-1 pt-24">
		<div class="stats shadow mx-auto content-center stats-vertical lg:stats-horizontal">
			<IntakeDisplay
				title="Daily meat intake"
				intake={result.dailyMeatIntake}
				multiplicator={mealCount}
				measurements={$measurements}
			/>
			<IntakeDisplay
				title="Daily bone intake"
				intake={result.dailyBoneIntake}
				multiplicator={mealCount}
				measurements={$measurements}
			/>
			<IntakeDisplay
				title="Daily oil intake"
				intake={result.dailyOilIntake}
				multiplicator={mealCount}
				measurements={$measurements}
			/>
			<IntakeDisplay
				title="Daily egg intake"
				intake={result.dailyEggIntake}
				multiplicator={mealCount}
				measurements={$measurements}
			/>
			<IntakeDisplay
				title="Daily offal intake"
				intake={result.dailyOffalIntake}
				multiplicator={mealCount}
				measurements={$measurements}
			/>
		</div>
	</div>
	<!--{/if}-->
</div>
