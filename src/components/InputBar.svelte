<script>
	import ToggleSwitch from './ToggleSwitch.svelte';
	import { conversationSelected } from '../stores/mainstore.js';
	import { activeConversationIdStore } from '../stores/mainstore.js';
	import { sendMessageStore } from '../stores/mainstore.js';
	import { onMount } from 'svelte';
	import ToggleComponent from './ToggleComponent.svelte';
	import Modal from './Modal.svelte';
	const id = '.icon-message-template';
	let showFastReplies = false;
	let showAddTemplateModal = false;
	function closeModal() {
		console.log('sin4');
		showAddTemplateModal = false;
	}

	function openAddTemplateModal() {
		showAddTemplateModal = true;
	}

	onMount(() => {
		const closeHandler = (event) => {
			console.log('closing:' + id);
			if (event.detail === id) {
				// Zavřete tuto komponentu
				document.querySelector(`${id}`).click();
			}
		};
		showFastReplies = false;
		document.addEventListener('closeToggleComponent', closeHandler);

		return () => {
			document.removeEventListener('closeToggleComponent', closeHandler);
		};
	});

	function toggleFastReplies() {
		showFastReplies = !showFastReplies;
		console.log('xxx');
	}
	function setCursorToEnd(element) {
		const range = document.createRange();
		const selection = window.getSelection();
		range.selectNodeContents(element);
		range.collapse(false); // Set to false to collapse the range to the end
		selection.removeAllRanges();
		selection.addRange(range);
		element.focus();
	}

	function callSendMessage() {
		sendMessageStore.set(true);
	}

	let isConversationSelected = false;
	let conversationId = null;

	conversationSelected.subscribe((value) => {
		isConversationSelected = value;
	});

	activeConversationIdStore.subscribe((id) => {
		conversationId = id;
	});
	function sendElementQuickly(templateName, templateContent) {
		console.log('sin3');

		const newReply = document.createElement('div');
		newReply.className = 'reply';
		newReply.innerText = templateName;
		newReply.addEventListener('click', () => selectQuickReply(templateContent));

		// Najděte rodičovský element s třídou 'fast-replies'
		const fastRepliesContainer = document.querySelector('.fast-replies');

		// Najděte element s třídou 'last' v rodičovském elementu
		const lastElement = fastRepliesContainer.querySelector('.last');

		// Vložte nový element před element s třídou 'last'
		if (lastElement) {
			lastElement.insertAdjacentElement('beforebegin', newReply);
		} else {
			// Pokud neexistuje žádný element s třídou 'last', přidejte nový element na konec rodičovského elementu
			fastRepliesContainer.appendChild(newReply);
		}
	}
	let checked1 = false;

	function handleChange1(event) {
		checked1 = event.detail.checked;
	}

	let editableDiv; // Reference to the contenteditable div

	function adjustDivHeight() {
		const lineHeight = parseFloat(getComputedStyle(editableDiv).lineHeight);
		const numOfLines = editableDiv.innerText.split('\n').length;

		if (numOfLines <= 1 && editableDiv.innerText.length > 0) {
			editableDiv.style.height = lineHeight + 'px';
		} else {
			editableDiv.style.height = 'auto';
			editableDiv.style.height = editableDiv.scrollHeight + 'px';
		}
	}

	function handleKeydown(event) {
		if (
			(!checked1 && event.key === 'Enter' && !event.shiftKey && !event.ctrlKey) ||
			(checked1 && event.key === 'Enter' && (event.shiftKey || event.ctrlKey))
		) {
			event.preventDefault();
			callSendMessage();
		} else if (event.key === 'Enter' && event.ctrlKey) {
			event.preventDefault();
			const selection = window.getSelection();
			const range = selection.getRangeAt(0);
			range.deleteContents();
			const br1 = document.createElement('br');
			range.insertNode(br1);
			const br2 = document.createElement('br');
			range.insertNode(br2);
			range.setStartAfter(br2);
			range.setEndAfter(br2);
			selection.removeAllRanges();
			selection.addRange(range);
		}
	}
	function simulateShiftEnter(element) {
		const shiftEnterEvent = new KeyboardEvent('keydown', {
			key: 'Enter',
			shiftKey: true,
			bubbles: true,
			cancelable: true
		});
		element.dispatchEvent(shiftEnterEvent);
	}
	onMount(() => {
		//editableDiv.addEventListener('input', adjustDivHeight);
		//adjustDivHeight();
	});
	function selectQuickReply(reply) {
		editableDiv.innerText = reply;
		showFastReplies = !showFastReplies;
		editableDiv.focus();
		setCursorToEnd(editableDiv);
	}
	let templateNameDiv; // Reference na první contenteditable div
	let templateContentDiv; // Reference na druhý contenteditable div
	function handleAddTemplate() {
		console.log('sin5');

		const templateName = templateNameDiv.innerText.trim();
		const templateContent = templateContentDiv.innerText.trim();

		// Najděte hint1 a hint2 jako potomky rodičovského elementu
		const hint1 = templateNameDiv.parentElement.querySelector('.hint1');
		const hint2 = templateContentDiv.parentElement.querySelector('.hint2');

		// Skrytí obou hintů
		hint1.style.display = 'none';
		hint2.style.display = 'none';

		if (!templateName && !templateContent) {
			hint1.style.display = 'inline';
			hint2.style.display = 'inline';
		} else if (!templateName) {
			hint1.style.display = 'inline';
		} else if (!templateContent) {
			hint2.style.display = 'inline';
		} else {
			sendElementQuickly(templateName, templateContent);
			closeModal(); // Zavření modálního okna
		}
	}

	// Přidání události focus pro skrytí nápovědy
</script>

<div class="input-bar" class:hidden-bar={!isConversationSelected || parseInt(conversationId) === 2}>
	<img class="icon" src="img/icons/icon_attachment.svg" alt="Attachment" />
	<img
		on:click={toggleFastReplies}
		class="icon icon-message-template"
		src="img/icons/icon_message_template.svg"
		alt="Templete"
	/>
	<ToggleComponent
		toggleElementSelector=".icon-message-template"
		targetSelector={['.fast-replies']}
		toggleClass="invisible"
		closeOnEsc={false}
		closeOnClickOutside={true}
		bind:isOpen={showFastReplies}
	>
		<div class="fast-replies no-select" class:invisible={!showFastReplies}>
			<div class="reply" on:click={() => selectQuickReply('Call me later..')}>Call me later..</div>
			<div class="reply" on:click={() => selectQuickReply("I'll let you know.")}>
				I'll let you know.
			</div>
			<div class="reply" on:click={() => selectQuickReply("It's not my fault.")}>
				It's not my fault.
			</div>
			<div class="reply" on:click={() => selectQuickReply('Leave me a message.')}>
				Leave me a message.
			</div>
			<div class="reply" on:click={() => selectQuickReply("Don't call me again!")}>
				Don't call me again!
			</div>
			<div class="last" on:click={openAddTemplateModal}>
				<img src="./img/icons/icons8-plus.svg" alt="Nobody" />
				Add a new template
			</div>
		</div>
	</ToggleComponent>
	<ToggleSwitch bind:checked={checked1} on:checked={handleChange1} />
	<div
		on:keypress={handleKeydown}
		bind:this={editableDiv}
		id="message-text-input"
		class="text"
		contenteditable="true"
		placeholder="Type a message ..."
		data-placeholder="Type a message ..."
	/>
	<img class="icon" src="img/icons/icon_video_message.svg" alt="Voice message" />
	<img class="icon" src="img/icons/icon_voice_message.svg" alt="Voice message" />
	<img class="icon" src="img/icons/icon_emoji_filled.svg" alt="Emoji" />
	<img on:click={callSendMessage} class="icon" src="img/icons/send.svg" alt="Send" />
</div>
{#if showAddTemplateModal}
	<Modal on:addTemplate={handleAddTemplate} on:close={closeModal} title="Add fast reply template">
		<div class="element message-template-modal">
			<div class="multipart-message" 	>
				<div class="element"><b>Template name:</b></div>
				<div
					class="element text-input"
					contenteditable="true"
					maxlength="50"
					bind:this={templateNameDiv}
				/>
				<div class="element" style="height:0.8em">
					<span class="hint1">This field can't be empty!</span>
				</div>
				<div class="element" style="margin-top: 10px;"><b>Template content:</b></div>
				<div
					class="element area-input"
					contenteditable="true"
					bind:this={templateContentDiv}
				/>
				<div class="element" style="height:0.8em"><span class="hint2">This field can't be empty!</span></div>
				<div class="element" style="margin-top: 5px; display:flex;">
					<button on:click={handleAddTemplate}>Add template</button>
				</div>
			</div>
		</div>
	</Modal>
{/if}
