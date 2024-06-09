<script>
  
  import WidgetView3dCanvas from "./WidgetView3dCanvas.svelte";

  let loaded = false;
  
  let width = 640;
  let height = 480;
  
  function load() {
    loaded = true;
  }
  
</script>


<style>
</style>


<b>3D</b>

{#if loaded}
  <WidgetView3dCanvas width={width} height={height}/>
{:else}
  <button on:click={load} style="display: block; width: {width}px; height: {height}px;">Load</button>
{/if}






