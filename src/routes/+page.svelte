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

	function copy(text) {
		navigator.clipboard.writeText(text);
	}

	function menuToggle() {
		document.querySelector('#menu').classList.toggle('show');
		document.querySelector('#menu-toggle').classList.toggle('menu-opened');
	}

	function toggleUserAccounts() {
		const activeAccount = document.querySelector('#active-account');
		activeAccount.classList.toggle('menu-opened');
		const otherUserAccounts = document.querySelector('.accounts-bar__other-accounts');
		otherUserAccounts.classList.toggle('active');
	}
</script>

<svelte:head>
	<link rel="stylesheet" href="/css/main.css" />
	<link rel="stylesheet" href="/css/style.css" />
	<script src="/js/functions.js" defer></script>
</svelte:head>

<div id="page">
	<div class="panel panel-left">
		<Menu />
		<SearchBar />
		<SocialBar />
		<AccountsBar />
		<ConversationsPanel />
	</div>
	<Resizer leftSelector=".panel-left" rightSelector=".panel-right" />
	<div class="panel panel-right">
		<UserBar />
		<ConversationDetail />
		<InputBar />
	</div>
</div>
