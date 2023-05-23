<script>
	import { page } from '$app/stores';
</script>

<div class="pb-10 m-auto">
	<h1>{$page.status} - {$page.error?.message ?? ''}</h1>
	<p class="text-accent">
		<a href="/">Home</a>
	</p>
</div>
