<script>
	import ToggleComponent from './ToggleComponent.svelte';
	import { menuOpen, toggleMenu } from '../stores/mainstore.js';
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
	<div id="menu" class="menu slide-in">
		<div class="menu__items">
			<div class="menu__item">
				<img
					class="menu__item__icon"
					src="img/icons/new_conversation.svg"
					alt="New conversation"
				/>New conversation
			</div>
			<div class="menu__item">
				<img class="menu__item__icon" src="img/icons/new_chat.svg" alt="New chat group" />New chat
				group
			</div>
			<div class="menu__item">
				<img class="menu__item__icon" src="img/icons/newsfeed.svg" alt="New news group" />New news
				group
			</div>
			<div class="menu__item">
				<img class="menu__item__icon" src="img/icons/contacts.svg" alt="My contacts" />My contacts
			</div>
			<div class="menu__item">
				<img class="menu__item__icon" src="img/icons/calls.svg" alt="Settings" />My calls
			</div>
			<div class="menu__item">
				<img
					class="menu__item__icon"
					src="img/icons/saved_messages.svg"
					alt="Saved messages"
				/>Saved messages
			</div>
			<div class="menu__item">
				<img class="menu__item__icon" src="img/icons/settings.svg" alt="Settings" />Settings
			</div>
		</div>
		<div class="menu__app-info">
			<div class="name">Yellow Web Client</div>
			<div class="version">Version: 0.0.1</div>
			<div class="website">
				<a target="_blank" href="https://yellow.libersoft.org">https://yellow.libersoft.org</a>
			</div>
		</div>
		<DraggableSwipe target={'#menu-toggle'} />
	</div>
</ToggleComponent>
