<script>
	import { toggleMenu } from '../stores/mainstore.js';

</script>

<div class="search-bar">
	<div id="menu-toggle" on:click={toggleMenu} on:keypress={toggleMenu} class="search-bar__menu-toggle" />
	<div class="search-bar__search">
		<input class="text" type="text" placeholder="Search ..." />
	</div>
</div>
