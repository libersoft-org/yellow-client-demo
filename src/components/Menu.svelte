<script>
	import { menuOpen, toggleMenu } from '../stores/mainstore.js';

</script>

<div id="menu" class="menu slide-in" class:show={$menuOpen} on:click={toggleMenu} on:keypress={toggleMenu}>
	<div class="menu__items">
                <div class="menu__item"><img class="menu__item__icon" src="img/icons/new_conversation.svg" alt="New conversation" />New conversation</div>
                <div class="menu__item"><img class="menu__item__icon" src="img/icons/new_chat.svg" alt="New chat group" />New chat group</div>
                <div class="menu__item"><img class="menu__item__icon" src="img/icons/newsfeed.svg" alt="New news group" />New news group</div>
                <div class="menu__item"><img class="menu__item__icon" src="img/icons/contacts.svg" alt="My contacts" />My contacts</div>
                <div class="menu__item"><img class="menu__item__icon" src="img/icons/calls.svg" alt="Settings" />My calls</div>
                <div class="menu__item"><img class="menu__item__icon" src="img/icons/saved_messages.svg" alt="Saved messages" />Saved messages</div>
                <div class="menu__item"><img class="menu__item__icon" src="img/icons/settings.svg" alt="Settings" />Settings</div>
	</div>
	<div class="menu__app-info">
		<div class="name">Yellow Web Client</div>
		<div class="version">Version: 0.0.1</div>
		<div class="website">
			<a target="_blank" href="https://yellownet.io">https://yellownet.io</a>
		</div>
	</div>
</div>
