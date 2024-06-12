

<script>
  
  import { onMount } from 'svelte';
  
  export let countdown = 5 * 60;

  let interval;
  let time = 5 * 60;
  
  function start() {
      
      clearInterval(interval);
      interval = setInterval(() => {
          countdown--;
          if (countdown === 0) {
              clearInterval(interval);
          }
      }, 1000);
  }
  
  onMount(() => {
    start();
  });
  
  $: countdown_string = Math.floor(countdown / 60) + ':' + (countdown % 60 < 10 ? '0' : '') + (countdown % 60); 
  
</script>



<style>
  input {
    width: 50px;
  }
</style>


<div>
<div><b>countdown</b></div>

<div>set time: <input type="number" bind:value={time} /> seconds</div>

<button on:click={start}>Start</button>

<button on:click={() => clearInterval(interval)}>Stop</button>

<button on:click={() => countdown = 5 * 60}>Reset</button>



  time remaining: {countdown_string}!
  
</div>