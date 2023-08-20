<script>
	import ToggleSwitch from './ToggleSwitch.svelte';
	let checked1 = false;

	function handleChange1(event) {
		checked1 = event.detail.checked;
	}

	let textarea; // Reference to the textarea element

	function handleKeydown(event) {
		let heightInpx = getComputedStyle(textarea).height;
		let lineInpx = getComputedStyle(textarea).lineHeight;

		if (
			(!checked1 && event.key === 'Enter' && !event.shiftKey && !event.ctrlKey) ||
			(checked1 && event.key === 'Enter' && (event.shiftKey || event.ctrlKey))
		) {
			event.preventDefault();
			window.sendMessage();
		} else if (event.key === 'Enter') {
			if ((parseFloat(heightInpx) + parseFloat(lineInpx)) / parseFloat(lineInpx) < 11)
				textarea.style.height = parseFloat(heightInpx) + parseFloat(lineInpx) + 'px';
		}
	}
</script>

<div class="input-bar">
	<img class="icon" src="img/icons/attachment.svg" alt="Attachment" />
	<ToggleSwitch bind:checked={checked1} on:checked={handleChange1} />
	<textarea
		on:keypress={handleKeydown}
		bind:this={textarea}
		id="message-text-input"
		class="text"
		placeholder="Type a message ..."
	/>
	<img class="icon" src="img/icons/video_message.svg" alt="Voice message" />
	<img class="icon" src="img/icons/voice_message.svg" alt="Voice message" />
	<img class="icon" src="img/icons/emoji.svg" alt="Emoji" />
	<img onClick="sendMessage()" class="icon" src="img/icons/send.svg" alt="Send" />
</div>
