<script>
	import ToggleComponent from './ToggleComponent.svelte';
	import { menuOpen, toggleMenu, actualMVC } from '../stores/mainstore.js';
	import { onMount, onDestroy } from 'svelte';
	import DraggableSwipe from './DraggableSwipe.svelte';

	const id = '#menu-toggle';
	onMount(() => {
		const closeHandler = (event) => {
			if (event.detail === id) {
				// Zavřete tuto komponentu
				document.querySelector(`${id}`).click();
			}
		};
		document.addEventListener('closeToggleComponent', closeHandler);
		return () => {
			document.removeEventListener('closeToggleComponent', closeHandler);
		};
	});
	import GroupModalForm from './GroupModalForm.svelte'; // Cesta k vaší komponentě

	let showGroupModal = false;

	function openGroupModal() {
		showGroupModal = true;
		document.querySelector('#menu-toggle').click();
	}
	function closeGroupModalForm() {
		showGroupModal = false;
	}

	import SettingsModalForm from './SettingsModal.svelte'; // Cesta k vaší komponentě

	let showSettingsModal = false;

	function openSettingsModal() {
		showSettingsModal = true;
		document.querySelector('#menu-toggle').click();
	}
	function closeSettingsModalForm() {
		showSettingsModal = false;
	}

	import NewsGroupModalForm from './NewsGroupModalForm.svelte'; // Cesta k vaší komponentě

	let showNewsGroupModal = false;

	function openNewsGroupModal() {
		showNewsGroupModal = true;
		document.querySelector('#menu-toggle').click();


	}
	function closeNewsGroupModalForm() {
		showNewsGroupModal = false;
	}
</script>

<ToggleComponent
	{id}
	bind:isOpen={$menuOpen}
	toggleClass="show"
	toggleElementSelector="#menu-toggle"
	targetSelector={['#menu']}
	closeOnEsc={false}
	closeOnClickOutside={true}
>
	<div id="menu" class="menu slide-in no-select">
		<div class="menu__items">

			<div class="menu__item" on:click={()=>{$actualMVC = 'chat_group_list';document.querySelector('#menu-toggle').click();document.querySelector(`.panel-left`).classList.remove('active-panel');document.querySelector(`.panel-right`).classList.add('active-panel');window.adjustPanels();}}>
				<img class="menu__item__icon" src="img/icons_new/icon_new_chat.svg" alt="Chat group list" />Chat group list
			</div>
			<div class="menu__item" on:click={()=>{$actualMVC = 'news_group_list';document.querySelector('#menu-toggle').click();document.querySelector(`.panel-left`).classList.remove('active-panel');document.querySelector(`.panel-right`).classList.add('active-panel');window.adjustPanels();}}>
				<img class="menu__item__icon" src="img/icons_new/icon_new_chat.svg" alt="News group list" />News group list
			</div>
			<div class="menu__item" on:click={()=>{$actualMVC = 'profile_list';   document.querySelector('#menu-toggle').click();document.querySelector(`.panel-left`).classList.remove('active-panel');document.querySelector(`.panel-right`).classList.add('active-panel');window.adjustPanels();}}>
				<img class="menu__item__icon" src="img/icons_new/icon_new_chat.svg" alt="Profile list" />Profile list
			</div>
			<div class="menu__item" on:click={openGroupModal}>
				<img class="menu__item__icon" src="img/icons_new/icon_new_chat.svg" alt="New chat group" />New chat
				group
			</div>
			<div class="menu__item" on:click={openNewsGroupModal}>
				<img class="menu__item__icon" src="img/icons_new/icon_newsfeed.svg" alt="New news group" />New news
				group
			</div>
      <div class="menu__item">
				<img
					class="menu__item__icon"
					src="img/icons_new/icon_saved_messages.svg"
					alt="Saved messages"
				/>Saved messages
			</div>
			<div class="menu__item" on:click={openSettingsModal}>
				<img class="menu__item__icon" src="img/icons_new/icon_settings.svg" alt="Settings" />Settings
			</div>
		</div>
		<div class="menu__app-info">
			<div class="name">Yellow Web Client</div>
			<div class="version">Version: 0.0.1</div>
			<div class="website">
				<a target="_blank" href="https://yellow.libersoft.org">https://yellow.libersoft.org</a>
			</div>
		</div>
		<DraggableSwipe target={'#menu-toggle'} swipeable={'#menu'} swipeableAmount="325" swipeabletype="margin-left"/>
	</div>
</ToggleComponent>
{#if showGroupModal}
	<GroupModalForm on:closeModalForm={closeGroupModalForm}/>
{/if}
{#if showNewsGroupModal}
	<NewsGroupModalForm on:closeModalForm={closeNewsGroupModalForm}/>
{/if}
{#if showSettingsModal}
	<SettingsModalForm on:closeModalForm={closeSettingsModalForm}/>
{/if}