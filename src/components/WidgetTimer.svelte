

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

.container {
 text-align: center;
 background: white;
 padding: 20px;
 border-radius: 10px;
 box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.mode-selector {
 margin-bottom: 20px;
}

button {
 padding: 10px 20px;
 margin: 5px;
 font-size: 1em;
 cursor: pointer;
}

.timer {
 display: none;
}

.time {
 font-size: 2em;
 margin: 20px 0;
}

input {
 width: 50px;
 text-align: center;
}

#settings {
 display: none;
}
  
  
</style>


<div class="container">
<div><b>countdown</b></div>

<div>set time: <input type="number" bind:value={time} /> seconds</div>
<br/>
<button on:click={start}>Start</button>

<button on:click={() => clearInterval(interval)}>Stop</button>

<button on:click={() => countdown = 5 * 60}>Reset</button>
<br/>
<br/>
  <div class="time">
    time remaining: {countdown_string}!
  </div>
</div>

