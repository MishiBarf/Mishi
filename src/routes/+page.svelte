<script lang="ts">
  import IntakeDisplay from "../components/IntakeDisplay.svelte";
  import { calculateCatIntakes, type CalculatorOutput } from "../core/calculator.ts";

  let disableButton;
  let statsVisible = false;
  let sex = undefined;
  let weight = 0;
  let age = 0;
  let mealCount = 1;
  $: {
    disableButton = weight <= 1 || age < 0 || !["male", "female"].includes(sex?.toLowerCase());
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

<div class="container mx-auto pt-24">


  <div class="grid grid-cols-1 gap-2 w-80 mx-auto">
    <h1 class="card-title">Mishi</h1>

    <div class="form-control w-full max-w-xs">
      <label class="label">
        <span class="label-text">Cat's age</span>
      </label>
      <input type="number" placeholder="Age" class="input input-bordered w-full max-w-xs" min="0" bind:value={age} />
    </div>

    <div class="form-control w-full max-w-xs">
      <label class="label">
        <span class="label-text">Cat'sex</span>
      </label>
      <select class="select w-full max-w-xs select-bordered" bind:value={sex}>
        <option disabled selected>Select an option</option>
        <option>Female</option>
        <option>Male</option>
      </select>
    </div>

    <div class="form-control w-full max-w-xs">
      <label class="label">
        <span class="label-text">Cat's weight (in g)</span>
      </label>
      <input type="number" placeholder="Weight" class="input input-bordered w-full max-w-xs" min="0"
             bind:value={weight} />
    </div>

    <div class="form-control w-full max-w-xs">
      <label class="label">
        <span class="label-text">Number of meals</span>
      </label>
      <input type="number" placeholder="Weight" class="input input-bordered w-full max-w-xs" min="1" max="100"
             bind:value={mealCount} />
    </div>

    <button class="btn" on:click={doCalculations} disabled={disableButton}>Calculate !</button>
  </div>

  <!--{#if statsVisible}-->
  <div class="grid grid-cols-1 gap-1 pt-24">
    <div class="stats shadow mx-auto content-center stats-vertical lg:stats-horizontal">
      <IntakeDisplay title="Daily meat intake" intake="{result.dailyMeatIntake}" multiplicator="{mealCount}" />
      <IntakeDisplay title="Daily bone intake" intake="{result.dailyBoneIntake}" multiplicator="{mealCount}" />
      <IntakeDisplay title="Daily oil intake" intake="{result.dailyOilIntake}" multiplicator="{mealCount}" />
      <IntakeDisplay title="Daily egg intake" intake="{result.dailyEggIntake}" multiplicator="{mealCount}" />
      <IntakeDisplay title="Daily offal intake" intake="{result.dailyOffalIntake}" multiplicator="{mealCount}" class="stat" />
    </div>
  </div>
  <!--{/if}-->

</div>
