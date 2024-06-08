<script>
	import MultiTick from './MultiTick.svelte';
	import LottiePlayer from './LottiePlayer.svelte';

	import AudioPlayer from './AudioPlayer.svelte';
	import LeafMap from './utils/LeafMap.svelte';

  import WidgetCheckers from './WidgetCheckers.svelte';
  import WidgetView3d from './widgets/3d/WidgetView3d.svelte';
  import WidgetPaint from "./widgets/paint/WidgetPaint.svelte";
  import WidgetPano from "./widgets/panorama/WidgetPano.svelte";
  import WidgetPiano from "./widgets/piano/WidgetPiano.svelte";

	export let photo = null;
	export let messagetype = null;
	export let url = null;
	export let preview = '';
	export let message;
	export let time;
	export let sent = true;
	export let read = true;
	export let secure = false;
	export let hideAvatar = false;
	export let reduceMargin = false;
	export let hideAfter = false;
	export let uniqueId;
	export let isPaused = true;


	let currentTime = '0:00';
	let duration = '0:00';
	let showTranslation = false;
	let playedstart = false;

	function toggleTranslation(event) {
		event.currentTarget.style.pointerType ='default';
		const messageContent = event.currentTarget.closest('.message__content');
		const translationDiv = messageContent.querySelector('.translation');
		if (showTranslation) {
			translationDiv.style.display = 'none';
			showTranslation = false;
		} else {
			translationDiv.style.display = 'block';
			showTranslation = true;
		}
	}
	function updateTime(event) {
		const videoElement = event.currentTarget;
		currentTime = formatTime(videoElement.currentTime);
		duration = formatTime(videoElement.duration);
	}

	function formatTime(seconds) {
		const minutes = Math.floor(seconds / 60);
		const remainingSeconds = Math.floor(seconds % 60);
		return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
	}
	function toggleVideoPlayback(event) {
		if (!playedstart) {
			event.preventDefault();
			playedstart - true;
			const videoContainer = event.currentTarget.closest('.image-container');
			const videoElement = videoContainer.querySelector('video');
			videoElement.controls = true;
			if (videoElement.paused) {
				videoElement.play();
			} else {
				videoElement.pause();
			}

		}
	 // Zastavte výchozí událost

	}

	function handleVideoPlay(event) {
		const videoElement = event.currentTarget;
		//videoElement.controls = true;
		const iconContainer = videoElement.previousElementSibling;
		iconContainer.style.display = 'none';
	}

	function handleVideoPause(event) {
		const videoElement = event.currentTarget;
		//videoElement.controls = false;
		const iconContainer = videoElement.previousElementSibling;
		iconContainer.style.display = 'none';
	}
</script>

<div
	class="message message--{sent ? 'sent' : 'received'}"
	class:hide-avatar={hideAvatar}
	class:reduce-margin={reduceMargin}
	class:hide-after={hideAfter}
>
	<div class="message__sender-photo{messagetype === 'news' ? ' news' : ''}" style="">
		<img class="photo-circle photo-circle--medium" src={photo} alt="User Photo" />
	</div>
	
	
	
	<div class="message__content{messagetype === 'news' ? ' news' : ''}">
		{#if messagetype === 'audio'}
			<div class="message__content__text">
				<div class="multipart-message element"><b>{message}</b></div>
				<div class="multipart-message element audio">
					<AudioPlayer id={uniqueId} audioUrl={url} />
				</div>
			</div>
		{:else if messagetype === 'map'}
			<div class="multipart-message element map">
				<div class="multipart-message element image-container">
					<LeafMap id={uniqueId} />
				</div>
			</div>
		{:else if messagetype === 'lottie'}
			<div class="message__content_text">
				<div class="multipart-message element image-container">
					<LottiePlayer animationData={message} id={uniqueId} />
				</div>
			</div>
		{:else if messagetype === 'piskvorky'}
			<div class="message__content_text">
				<div class="multipart-message element image-container">
					<WidgetCheckers id={uniqueId} />
				</div>
			</div>
		{:else if messagetype === 'view3d'}
			<div class="message__content_text">
				<div class="multipart-message element image-container">
					<WidgetView3d id={uniqueId} />
				</div>
			</div>
		{:else if messagetype === 'paint'}
			<div class="message__content_text">
				<div class="multipart-message element image-container">
					<WidgetPaint id={uniqueId} />
				</div>
			</div>
		{:else if messagetype === 'pano'}
			<div class="message__content_text">
				<div class="multipart-message element image-container">
					<WidgetPano id={uniqueId} />
				</div>
			</div>
		{:else if messagetype === 'piano'}
			<div class="message__content_text">
				<div class="multipart-message element image-container">
					<WidgetPiano id={uniqueId} />
				</div>
			</div>
		{:else if !messagetype || messagetype === 'multipart' || messagetype === 'news'}
			<div class="message__content__text">{@html message}</div>
			<div class="message__content__text translation" style="display: none">

				V dávných dobách, v malebném městečku uprostřed kopcovité krajiny, žil mladý řemeslník
				jménem Jan. Jan byl známý svými dovednostmi v řezbářství a jeho díla zdobila mnoho domů v
				okolí. Každé ráno se probudil s východem slunce, nasnídal se čerstvým chlebem s máslem a šel
				do své dílny, kde trávil většinu dne.
			</div>
		{:else if messagetype === 'videomessage'}
			<div class="multipart-message">
				<div class="element"><b>Video message</b></div>
				<div class="element">
					<div
						class="image-container video svelte-{isPaused ? 'paused' : ''}" on:click={toggleVideoPlayback}
					>
						<div class="icon-container">
							<img src="../img/icons/icn_play.svg" alt="Play" class="play-icon" />
						</div>
						<video
							id="videomessage-{uniqueId}"
							src={url}
							playsinline
							poster={preview}
							on:play={handleVideoPlay}
							on:pause={handleVideoPause}
							on:timeupdate={updateTime}
						>
							<track kind="captions" />
						</video>
					</div>
				</div>
				<div class="element video-time-info">
					<span>{currentTime}</span>
					<span>{duration}</span>
				</div>
			</div>
		{:else if messagetype === 'video'}
			<div class="multipart-message">
				<div class="element">{message}</div>
				<div class="element">
					<div
						class="image-container video svelte-{isPaused ? 'paused' : ''}" on:click={toggleVideoPlayback}

					>
						<div class="icon-container">
							<img src="../img/icons/icn_play.svg" alt="Play" class="play-icon"  />
						</div>
						<video
							id="video-{uniqueId}"
							src={url}
							playsinline
							poster={preview}
							on:play={handleVideoPlay}
							on:pause={handleVideoPause}
							on:timeupdate={updateTime}
						>
							<track kind="captions" />
						</video>
					</div>
				</div>
				<div class="element video-time-info">
					<span>{currentTime}</span>
					<span>{duration}</span>
				</div>
			</div>
		{/if}
		<div class="message__content__info">
			{#if !messagetype}
				<div class="message__content__info__translate" on:click={toggleTranslation} />
			{/if}
			{#if messagetype != 'news'}
				<div class="message__content__info__date-time">{time}</div>
				<div class="message__content__info__icons">
					<div
						class="message__content__info__icons__icon message__content__info__icons__icon--{secure
							? 'secure'
							: 'non-secure'}"
					/>
					<div class="ticks"><MultiTick classList={['done', 'done', 'base']} /></div>
					<!--<div
					class="message__content__info__icons__icon message__content__info__icons__icon--{read
						? 'read'
						: 'unread'}"
				/> -->
				</div>
			{/if}
		</div>
	</div>
</div>
