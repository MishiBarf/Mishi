<script lang="ts">

  import { type IntakeType } from "../core/calculator";

  export let intake: IntakeType;
  export let title: string;
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
</div>