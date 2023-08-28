<script>
	import MultiTick from './MultiTick.svelte';

	export let conversation;
	export let isActive = false;
	export let onSelect = () => {};
</script>

<div class="conversation {isActive ? 'active' : ''}" on:click={onSelect}>
	{#if conversation.imageUrl2}
		<div class="conversation__user-photo">
			<img
				class="photo-circle photo-circle--small"
				src={conversation.imageUrl}
				alt={conversation.imageUrl}
			/>
			<img
				class="photo-circle photo-circle--small photo-circle-grouped"
				src={conversation.imageUrl2}
				alt={conversation.imageUrl2}
			/>
		</div>
	{:else}
		<div class="conversation__user-photo">
			<img
				class="photo-circle photo-circle--big"
				src={conversation.imageUrl}
				alt={conversation.imageUrl}
			/>
		</div>
	{/if}
	<div class="conversation__info">
		<div class="conversation__info__user-name">{conversation.name}</div>
		<div class="conversation__info__user-email">{conversation.email}</div>
		<div class="conversation__info__last-message">{@html conversation.lastMessage}</div>
	</div>
	<div class="conversation__status">
		<div class="conversation__status__date-time">12:59:59</div>
		<div class="conversation__status__icons">
			<div class="ticks"><MultiTick classList={['done', 'base', 'base']} /></div>
			<div class="conversation__status__icons__unread-messages">{conversation.unreadMessages}</div>
			<!--<div
				class="conversation__status__icons__read-state conversation__status__icons__read-state--unread"
			/>-->
		</div>
	</div>
</div>
