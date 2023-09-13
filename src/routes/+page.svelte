<script>
	import {onMount, tick} from 'svelte';

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
	import {actualMVC} from "../stores/mainstore.js";
	import ContactDetail from "../components/ContactDetail.svelte";
	import CallDetail from "../components/CallDetail.svelte";
	import VideoModule from "../components/VideoModule.svelte";
	import NewsFeedModule from "../components/NewsFeedModule.svelte";

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
		window.adjustPanels = (() => {
			let vv = window.visualViewport;
			const panels = document.querySelectorAll('.panel');
			const activePanel = document.querySelector('.active-panel');
			tick();
			if (vv.width <795) {
				panels.forEach(panel => {
					panel.style.height = '0px';
					panel.style.width = '0px';
				});
				activePanel.style.height = `${vv.height}px`;
				activePanel.style.width = '100%';
			} else {
				panels.forEach(panel => {
					panel.style.height = `${vv.height}px`;
				});
			}
		});
		if ('visualViewport' in window) {
			const activePanel = document.querySelector('.active-panel');
			// Initial height adjustment
			activePanel.style.height = `${window.visualViewport.height}px`;
			window.visualViewport.addEventListener('resize', () => {
				window.adjustPanels();

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
		{#if $actualMVC ==='conversation'}
			<UserBar id="f-user-bar" />
			<ConversationDetail id="f-conversation-detail" />
			<InputBar id="f-input-bar" />
		{:else if $actualMVC === 'contact'}
			<UserBar id="f-user-bar" />
			<ContactDetail id="f-conversation-detail"/>
		{:else if $actualMVC === 'call'}
			<UserBar id="f-user-bar" />
			<CallDetail id="f-conversation-detail"/>
		{:else if $actualMVC === 'video'}
			<UserBar id="f-user-bar" />
			<div class="conversation-detail">
			<VideoModule id="f-conversation-detail"/>
			</div>
		{:else if $actualMVC === 'newsfeed'}
			<UserBar id="f-user-bar" />
			<div class="conversation-detail">
				<NewsFeedModule id="f-conversation-detail"/>
			</div>
		{/if}
	</div>
</div>
