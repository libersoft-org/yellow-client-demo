<script>
	import { activeConversationIdStore, conversationSelected } from '../stores/mainstore.js';
	import { parse } from 'cookie';
	import ToggleComponent from './ToggleComponent.svelte';
	import { onMount } from 'svelte';
	import Modal from './Modal.svelte';
	let showModal = false;

	function closeModal() {
		showModal = false;
	}

	const id = '.icon-controls';

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

	let showControlsMenu = false;
	function backButtonClick() {
		conversationSelected.set(false);
		activeConversationIdStore.set(null);
		document.querySelector(`.panel-left`).classList.add('active-panel');
		document.querySelector(`.panel-right`).classList.remove('active-panel');
	}
	let idConversation;
	let isConversationSelected = false;

	conversationSelected.subscribe((value) => {
		isConversationSelected = value;
	});
	activeConversationIdStore.subscribe((value) => {
		idConversation = parseInt(value);
	});
</script>

<div class="user-bar" class:hidden-bar={!isConversationSelected}>
	<div class="user-bar-container">
	<div class="back-button">
		<a class="icon" on:click={backButtonClick}><img src="img/icons/icon_back.svg" alt="search" /></a
		>
	</div>
	<div class="conversation-user">
		{#if idConversation === 1}
			<div class="conversation-user__photo" on:click={() => (showModal = true)}>
				<img
					class="photo-circle photo-circle--medium"
					src="../img/icons/icon_nemp_v4_filled.svg"
					alt="Yellow development"
				/>
			</div>
			<div class="conversation-user__detail">
				<div class="conversation-user__detail__name">Yellow - development group</div>
			</div>
		{:else if idConversation === 2}
			<div class="conversation-user__photo" on:click={() => (showModal = true)}>
				<img
					class="photo-circle photo-circle--medium"
					src="../img/icons/icon_nemp_v5.svg"
					alt="Yellow announcements"
				/>
			</div>
			<div class="conversation-user__detail">
				<div class="conversation-user__detail__name">Yellow - announcements newsgroup</div>
			</div>
		{:else}
			<div class="conversation-user__photo" on:click={() => (showModal = true)}>
				<img
					class="photo-circle photo-circle--medium"
					src="https://i.pravatar.cc/300?u=user3"
					alt="user2"
				/>
			</div>
			<div class="conversation-user__detail">
				<div class="conversation-user__detail__name">
					Veryveryvery Long Username - Some Other Company Ltd.
				</div>
				<div
					class="conversation-user__detail__address"
					onclick="copy('extremelyultralongusername@veryveryverylongdomain.com')"
				>
					extremelyultralongusername@veryveryveryveryveryveryverylongdomain.com
				</div>
			</div>
		{/if}
	</div>
	<div class="conversation-controlls">
		<a class="icon" onclick=""><img src="img/icons/search.svg" alt="search" /></a>
		<a class="icon" onclick=""><img src="img/icons/videocall.svg" alt="videocall" /></a>
		<a class="icon" onclick=""><img src="img/icons/call.svg" alt="call" /></a>
		<a class="icon" onclick=""
			><img class="non-secure" src="img/icons/transparent/non-secure.svg" alt="secure" /></a
		>
		<div class="icon icon-controls" on:click={() => (showControlsMenu = !showControlsMenu)}>
			<img src="img/icons/dots.svg" alt="dots" />
		</div>
		<ToggleComponent
			bind:isOpen={showControlsMenu}
			toggleElementSelector=".icon-controls"
			targetSelector={['.controls-menu']}
			toggleClass="invisible"
		>
			<div class="controls-menu no-select" class:invisible={!showControlsMenu}>
				<p
					on:click={() => {
						/* Handle mute notifications */
					}}
				>
					Mute notifications
				</p>
				<p
					on:click={() => {
						/* Handle export history */
					}}
				>
					Export history
				</p>
				<p
					on:click={() => {
						/* Handle delete conversation */
					}}
				>
					Delete conversation
				</p>
			</div>
		</ToggleComponent>
	</div>
	{#if showModal}
		<Modal title="User profile" on:close={closeModal}>
			<p>User profile loading, please wait..</p>
		</Modal>
	{/if}
	<!--<div
		class="message__content__info__icons__icon message__content__info__icons__icon--non-secure"
	/>-->
	</div>
</div>
