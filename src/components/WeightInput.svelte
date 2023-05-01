<script lang="ts">
	import type { Measurements } from "../core/calculator";
	import { LB_TO_G_RATIO } from "../core/convertor";

    
    let _weight = 0;
    export let measurements : Measurements;
    export let weight = 0;
    $: {
        if(measurements === "metric") {
            weight = _weight;
        } else {
            weight = _weight * LB_TO_G_RATIO;
        }
        console.log(weight);
    }
</script>

<div class="form-control w-full max-w-xs">
    <label class="label">
      <span class="label-text">Cat's weight (in {measurements === "metric" ? "g" : "lb"})</span>
    </label>
    <input type="number" placeholder="Weight" class="input input-bordered w-full max-w-xs" min="0"
           bind:value={_weight} />
  </div>