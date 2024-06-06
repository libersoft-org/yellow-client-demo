

<script>
import ToggleComponent from "./ToggleComponent.svelte";


let visible = false;

function selectAttachment(attachment) {
  console.log(attachment);
  visible = false;
}

</script>

	<img class="icon" src="img/icons_new/attachment_noback.svg" alt="Attachment" on:click={() => visible = !visible} />

  {#if visible}
	  <div class="fast-replies no-select" id="attachments">
  
        <div class="reply" on:click={() => selectAttachment('piskvorky')}>Piškvorky</div>
        <div class="reply" on:click={() => selectAttachment("picture")}>
          Picture
        </div>
        <div class="reply" on:click={() => selectAttachment("payment")}>
          Payment
        </div>
        <div class="reply">
          ...
          
        </div>
      
  
    
  
    </div>
		
  {/if}
