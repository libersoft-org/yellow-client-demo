<script>
	import { activeConversationIdStore, conversationSelected } from '../stores/mainstore.js';
	import {parse} from "cookie";

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

<div class="user-bar" class:invisible={!isConversationSelected}>
	<div class="back-button">
		<a class="icon" on:click={backButtonClick}><img src="img/icons/icon_back.svg" alt="search" /></a
		>
	</div>
	<div class="conversation-user">
		<div class="conversation-user__photo">
			<img
				class="photo-circle photo-circle--medium"
				src="https://i.pravatar.cc/300?u=user2"
				alt="user2"
			/>
			{#if idConversation === 1}
				<img
				class="photo-circle photo-circle--medium photo-circle-grouped"
				src="https://i.pravatar.cc/300?u=user3"
				alt="user2"
				/>
			{/if}
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
	</div>
	<div class="conversation-controlls">
		<a class="icon" onclick=""><img src="img/icons/search.svg" alt="search" /></a>
		<a class="icon" onclick=""><img src="img/icons/videocall.svg" alt="videocall" /></a>
		<a class="icon" onclick=""><img src="img/icons/call.svg" alt="call" /></a>
		<a class="icon" onclick=""
			><img class="non-secure" src="img/icons/transparent/non-secure.svg" alt="secure" /></a
		>
		<a class="icon" onclick=""><img src="img/icons/dots.svg" alt="dots" /></a>
	</div>
	<!--<div
		class="message__content__info__icons__icon message__content__info__icons__icon--non-secure"
	/>-->
</div>
