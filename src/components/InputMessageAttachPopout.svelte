

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
  
    <h4>Favorites</h4>
  
        <div class="reply" on:click={() => selectAttachment('tic-tac-toe')}>Tic-Tac-Toe</div>
        <div class="reply" on:click={() => selectAttachment("picture")}>
          Picture
        </div>
        <div class="reply" on:click={() => selectAttachment("payment")}>
          Payment
        </div>
  
  
    <h4> ...</h4>
  
    </div>
		
  {/if}
