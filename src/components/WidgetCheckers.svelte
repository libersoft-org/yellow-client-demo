<script>

  import {priNacteniStranky, priKliknutiNaBunku } from './piskvorky/8-Reseni/hra.js';
  
  import { onMount } from 'svelte';
  
  onMount(() => {
      
      console.log("checkers onMount");
      priNacteniStranky();

  });

  export let id;

</script>

<style>

#deska {
    border-spacing: 0;
    border-collapse: collapse;
}

#deska td {
    width: 50px;
    height: 50px;
    vertical-align: middle;
    text-align: center;
    font-size: 32px;
    font-weight: bold;
    border: 1px solid black;
    cursor: pointer;
}

#deska td:hover {
    background-color: #ffffdd;
}

.aktualni {
    margin: 30px 0;
    font-size: 24px;
}

#natahu {
    font-weight: bold;
}
</style>

<b>Piškvorky!</b>

<table id="deska" on:click={priKliknutiNaBunku}>
    <tr>
        <td>Z</td>
        <td>Z</td>
        <td>Z</td>
        <td>Z</td>
        <td>Z</td>
    </tr>
    <tr>
        <td>Z</td>
        <td>Z</td>
        <td>Z</td>
        <td>Z</td>
        <td>Z</td>
    </tr>
    <tr>
        <td>Z</td>
        <td>Z</td>
        <td>Z</td>
        <td>Z</td>
        <td>Z</td>
    </tr>
    <tr>
        <td>Z</td>
        <td>Z</td>
        <td>Z</td>
        <td>Z</td>
        <td>Z</td>
    </tr>
    <tr>
        <td>Z</td>
        <td>Z</td>
        <td>Z</td>
        <td>Z</td>
        <td>Z</td>
    </tr>
</table>
