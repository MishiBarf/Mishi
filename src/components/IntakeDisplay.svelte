<script lang="ts">

  import { type IntakeType } from "../core/calculator";

  let description = "";
  export let intake: IntakeType = 0;
  export let title: string;
  export let multiplicator = 1;


  $: {
    const have = intake * multiplicator;
    if (have >= 1000) {
      description = `${have / 1000} kg`;
    } else {
      description = `${have} g`;
    }
  }
</script>


<div class="stat">
  <div class="stat-title">{title}</div>
  <div class="stat-value">
    {#if intake >= 1000}
      {intake / 1000}
      <span class="text-right">kg</span>
    {:else }
      {intake}
      <span class="text-right">g</span>
    {/if}
  </div>
  {#if multiplicator > 1 && intake > 0}
    <div class="stat-desc">
      Total: <strong>{description}</strong>
    </div>
  {/if}
</div>