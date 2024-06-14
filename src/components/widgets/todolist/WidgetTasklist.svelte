<script>
  
  let items = [
    { text: 'create frontend mockup', checked: true },
    { text: 'write protocol spec', checked: true },
    { text: 'buy milk', checked: false }
  ];
  
  let newItem = '';
  
  function addItem() {
    if (newItem === '') return;
    items = [...items, { text: newItem, checked: false }];
    newItem = '';
  }
  
  function toggleItem(e) {
    const index = e.target.innerText;
    items = items.map((item, i) => {
      if (i === index) {
        item.checked = !item.checked;
      }
      return item;
    });
  }
  
  function deleteItem(i) {
    return () => {
      items = items.filter((item, index) => index !== i);
    };
  }
  
  
  
</script>


<style>
  
  
  .container {
 background: white;
 padding: 20px;
 border-radius: 10px;
 box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
 width: 300px;
 text-align: center;
}

h1 {
 margin-bottom: 20px;
 font-size: 24px;
 color: #333;
}

.input-container {
 display: flex;
 justify-content: space-between;
 margin-bottom: 20px;
}

#itemInput {
 flex-grow: 1;
 padding: 10px;
 border: 1px solid #ddd;
 border-radius: 5px;
 font-size: 16px;
}

button {
 padding: 10px 15px;
 border: none;
 background-color: #5cb85c;
 color: white;
 font-size: 16px;
 border-radius: 5px;
 margin-left: 10px;
 cursor: pointer;
}

button:hover {
 background-color: #4cae4c;
}

ul {
 list-style: none;
 padding: 0;
}

li {
 background: #f9f9f9;
 padding: 10px;
 border-bottom: 1px solid #ddd;
 display: flex;
 justify-content: space-between;
 align-items: center;
 cursor: pointer;
}

li.checked {
 text-decoration: line-through;
 color: #888;
}

li:hover {
 cursor: pointer;
}

.delete-btn {
 background: #e74c3c;
 color: white;
 padding: 5px 10px;
 border: none;
 border-radius: 5px;
 cursor: pointer;
}

.delete-btn:hover {
 background: #c0392b;
}

</style>



<b>Todo list</b>


<div class="container">
  <div class="input-container">
    <input type="text" id="itemInput" placeholder="Přidat položku" bind:value={newItem} />
    <button on:click={addItem}>Přidat</button>
  </div>
  <ul id="shoppingList">
    {#each items as item, i}
      <li on:click={toggleItem} class:checked={item.checked}>
        {item.text}
        <button class="delete-btn" on:click={deleteItem(i)}>X</button>
      </li>
    {/each}
    
    
  </ul>
</div>


