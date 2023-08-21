<script>
	export let photo;
	export let message;
	export let time;
	export let sent = true;
	export let read = true;
	export let secure = false;
	export let hideAvatar = false;
	export let reduceMargin = false;
	export let hideAfter = false;
</script>

<div
	class="message message--{sent ? 'sent' : 'received'}"
	class:hide-avatar={hideAvatar}
	class:reduce-margin={reduceMargin}
	class:hide-after={hideAfter}
>
	<div class="message__sender-photo">
		<img class="photo-circle photo-circle--medium" src={photo} alt="User Photo" />
	</div>
	<div class="message__content">
		<div class="message__content__text">{@html message}</div>
		<div class="message__content__info">
			<div class="message__content__info__date-time">{time}</div>
			<div class="message__content__info__icons">
				<div
					class="message__content__info__icons__icon message__content__info__icons__icon--{secure
						? 'secure'
						: 'non-secure'}"
				/>
				<div
					class="message__content__info__icons__icon message__content__info__icons__icon--{read
						? 'read'
						: 'unread'}"
				/>
			</div>
		</div>
	</div>
</div>

<style>
	.hide-avatar .message__sender-photo {
		visibility: hidden !important;
	}

	.reduce-margin {
		margin-bottom: 5px !important;
	}

	.hide-after .message__content::after {
		content: none !important;
	}
</style>
