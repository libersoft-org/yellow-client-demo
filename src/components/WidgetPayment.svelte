<script>

import Modal from './Modal.svelte';

let mainModalOpen = false;

function closeModal() {
  mainModalOpen = false;
}

</script>

<div>
  
  <b>payment</b>
  
  <div>
    amount: $17.00
  </div>

  
  {#if mainModalOpen}
    <Modal on:close={closeModal} title="Pay">
  
      <div>
      
        <div>amount</div>
        <input type="text" />
        <dev>description</dev>
        <input type="text" />
        <button>pay</button>
        <button on:click={closeModal}>cancel</button>
        
      </div>
	</Modal>
{/if}

  
</div>