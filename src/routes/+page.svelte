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

	onMount(() => {
		console.log('Page initialized!');
		//getConversations();
		getChats();
	});
</script>

<svelte:head>
	<link rel="stylesheet" href="/css/main.css" />
	<link rel="stylesheet" href="/css/style.css" />
	<script src="/js/functions.js" defer></script>
</svelte:head>

<div id="page">
	<div class="panel panel-left">
		<SearchBar />
		<SocialBar />
		<AccountsBar />
		<ConversationsPanel />
		<Menu />
	</div>
	<Resizer leftSelector=".panel-left" rightSelector=".panel-right" />
	<div class="panel panel-right">
		<UserBar />
		<ConversationDetail />
		<InputBar />
	</div>
</div>
