<script>
	import { useNavigate, useLocation } from "svelte-navigator";
	import { isLoggedIn } from "../stores/stores.js";

	const navigate = useNavigate();
	const location = useLocation();

	$: if (!$isLoggedIn) {
		navigate("/login", {
			state: { from: $location.pathname },
			replace: true,
		});
	}
</script>

{#if $isLoggedIn}
	<slot />
{/if}