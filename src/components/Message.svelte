<script>
	export let photo;
	export let messagetype;
	export let url;
	export let message;
	export let time;
	export let sent = true;
	export let read = true;
	export let secure = false;
	export let hideAvatar = false;
	export let reduceMargin = false;
	export let hideAfter = false;
	import AudioPlayer from "./AudioPlayer.svelte";
	import LeafMap from "./utils/LeafMap.svelte";


</script>

<div
	class="message message--{sent ? 'sent' : 'received'}"
	class:hide-avatar={hideAvatar}
	class:reduce-margin={reduceMargin}
	class:hide-after={hideAfter}
>
	<div class="message__sender-photo" style="">
		<img class="photo-circle photo-circle--medium" src={photo} alt="User Photo" />
	</div>
	<div class="message__content">
		{#if messagetype === "audio"}
			<div class="message__content__text">
				<div class="multipart-message element">{message}></div>
				<div class="multipart-message element audio"><AudioPlayer audioUrl={url} /></div>
			</div>
		{/if}
		{#if messagetype === "map"}
			<div class="multipart-message element map"><div class="multipart-message element image-container">
				<LeafMap/></div></div>
		{/if}
		{#if (!messagetype)}
		<div class="message__content__text">{@html message}</div>
		{/if}
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
