<script lang="ts">
  import { calculateCatIntakes, type CalculatorOutput } from "../core/calculator.ts";

  let disableButton;
  let statsVisible = false;
  let sex = undefined;
  let weight = 0;
  let age = 0;
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

    <select class="select w-full max-w-xs" bind:value={sex}>
      <option disabled selected>Sex</option>
      <option>Female</option>
      <option>Male</option>
    </select>

    <div class="form-control w-full max-w-xs">
      <label class="label">
        <span class="label-text">Cat's weight (in g)</span>
      </label>
      <input type="number" placeholder="Weight" class="input input-bordered w-full max-w-xs" min="0"
             bind:value={weight} />
    </div>

    <button class="btn" on:click={doCalculations} disabled={disableButton}>Calculate !</button>
  </div>

  <!--{#if statsVisible}-->
  <div class="grid grid-cols-1 gap-1 pt-24">
    <div class="stats shadow mx-auto content-center stats-vertical lg:stats-horizontal">

      <div class="stat">
        <div class="stat-title">Daily meat intake</div>
        <div class="stat-value">
          {result.dailyMeatIntake}
          <span class="text-right">g</span>
        </div>
      </div>
      <div class="stat">
        <div class="stat-title">Daily bone intake</div>
        <div class="stat-value">
          {result.dailyBoneIntake}
          <span class="text-right">g</span>
        </div>
      </div>

      <div class="stat">
        <div class="stat-title">Daily oil intake</div>
        <div class="stat-value">
          {result.dailyOilIntake}
          <span class="text-right">g</span>
        </div>
      </div>

      <div class="stat">
        <div class="stat-title">Daily egg intake</div>
        <div class="stat-value">
          {result.dailyEggIntake}
          <span class="text-right">g</span>
        </div>
      </div>

      <div class="stat">
        <div class="stat-title">Daily offal intake</div>
        <div class="stat-value">
          {result.dailyOffalIntake}
          <span class="text-right">g</span>
        </div>
      </div>

    </div>
  </div>
  <!--{/if}-->

</div>
