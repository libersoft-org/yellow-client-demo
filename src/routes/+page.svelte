<script>
	import { onMount } from 'svelte';

	import Menu from '../components/Menu.svelte';
	import SearchBar from '../components/SearchBar.svelte';
	import AccountsBar from '../components/AccountsBar.svelte';
	import ConversationsPanel from '../components/ConversationsPanel.svelte';
	import UserBar from '../components/UserBar.svelte';
	import ConversationDetail from '../components/ConversationDetail.svelte';
	import InputBar from '../components/InputBar.svelte';
	import Resizer from '../components/Resizer.svelte';
	import SocialBar from '../components/SocialBar.svelte';
	import { setupGlobalListeners } from '../functions/globalListeners.js';

	setupGlobalListeners();

	function copy(text) {
		navigator.clipboard.writeText(text);
	}

	function enterFullscreen() {
		try {
			if (!document.fullscreenElement) {
				document.documentElement.requestFullscreen();
			}
		} catch (e) {
			console.log();
		}
	}


	onMount(() => {
		console.log("wp:"+window.visualViewport);
		if ('visualViewport' in window) {
			const activePanel = document.querySelector('#page');
			// Initial height adjustment
			activePanel.style.height = `${window.visualViewport.height}px`;
			console.log("wph:"+activePanel.style.height);

			window.visualViewport.addEventListener('resize', () => {
				const activePanel = document.querySelector('#page');
				activePanel.style.height = `${window.visualViewport.height}px`;
				document.querySelector("#message-text-input").innerText= "wphc:"+activePanel.style.height;

			});
		}
	});
</script>

<svelte:head>
	<link rel="stylesheet" href="/css/main.css" />
	<link rel="stylesheet" href="/css/style.css" />
	<script src="/js/functions.js" defer></script>
</svelte:head>

<div id="page">
	<div class="panel panel-left active-panel">
		<SearchBar />
		<SocialBar />
		<AccountsBar />
		<ConversationsPanel />
		<Menu />
	</div>
	<Resizer leftSelector=".panel-left" rightSelector=".panel-right" />
	<div class="panel panel-right">
		<UserBar id="f-user-bar" />
		<ConversationDetail id="f-conversation-detail" />
		<InputBar id="f-input-bar" />
	</div>
</div>
