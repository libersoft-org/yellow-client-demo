<script>
	export let conversation;
	export let isActive = false;
	export let onSelect = () => {};
</script>

<div class="conversation {isActive ? 'active' : ''}" on:click={onSelect}>
	<div class="conversation__user-photo">
		<img
			class="photo-circle photo-circle--medium"
			src={conversation.imageUrl}
			alt={conversation.imageUrl}
		/>
	</div>
	<div class="conversation__info">
		<div class="conversation__info__user-name">{conversation.name}</div>
		<div class="conversation__info__user-email">{conversation.email}</div>
		<div class="conversation__info__last-message">{conversation.lastMessage}</div>
	</div>
	<div class="conversation__status">
		<div class="conversation__status__date-time">12:59:59</div>
		<div class="conversation__status__icons">
			<div class="conversation__status__icons__unread-messages">888</div>
			<div
				class="conversation__status__icons__read-state conversation__status__icons__read-state--unread"
			/>
		</div>
	</div>
</div>
