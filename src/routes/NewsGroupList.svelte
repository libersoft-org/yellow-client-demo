<script>
  
  let groups = [
    {category: 'cryptocurrencies', name: 'Bitcoin Weekly', subscribers: 10000, created: '2021-01-01', icon: 'bitcoin.jpg'},
    {category: 'cryptocurrencies', name: 'Ethereum Insights', subscribers: 8500, created: '2023-01-01', icon: 'ethereum.jpg'},
    {category: 'cryptocurrencies', name: 'Ripple Report', subscribers: 7000, created: '2020-01-01', icon: 'ripple.png'},
    {category: 'programming', name: 'JavaScript Journal', subscribers: 15000, created: '2025-01-01', icon: 'javascript.png'},
    {category: 'programming', name: 'Python Post', subscribers: 12000, created: '2031-01-01', icon: 'python.png'},
    {category: 'programming', name: 'Java Journey', subscribers: 11000, created: '2041-01-01', icon: 'java.jpg'},
    {category: 'sports', name: 'Football Fanatic', subscribers: 9000, created: '2001-01-01', icon: 'football.jpg'},
    {category: 'sports', name: 'Basketball Bulletin', subscribers: 8000, created: '2011-01-01', icon: 'basketball.jpg'},
    {category: 'sports', name: 'Tennis Times', subscribers: 7000, created: '2021-01-07', icon: 'tennis.jpg'},
    {category: 'technology', name: 'AI & ML Monthly', subscribers: 5000, created: '2022-02-02', icon: 'ai_ml.jpg'},
    {category: 'technology', name: 'Cloud Computing Chronicle', subscribers: 6000, created: '2023-03-03', icon: 'cloud.jpg'},
    {category: 'technology', name: 'Cybersecurity Circular', subscribers: 7000, created: '2024-04-04', icon: 'cybersecurity.jpg'},
    {category: 'health', name: 'Nutrition Notes', subscribers: 8000, created: '2025-05-05', icon: 'nutrition.jpeg'},
    {category: 'health', name: 'Fitness Facts', subscribers: 9000, created: '2026-06-06', icon: 'fitness.jpg'},
    {category: 'health', name: 'Mental Health Matters', subscribers: 10000, created: '2027-07-07', icon: 'nutrition.jpeg'},
    {category: 'music', name: 'Rock Review', subscribers: 11000, created: '2028-08-08', icon: 'rock.jpeg'},
    {category: 'music', name: 'Pop Press', subscribers: 12000, created: '2029-09-09', icon: 'rock.jpeg'},
    {category: 'music', name: 'Classical Chronicle', subscribers: 13000, created: '2030-10-10', icon: 'rock.jpeg'},
    {category: 'movies', name: 'Action Alert', subscribers: 14000, created: '2031-11-11', icon: 'tvseries.jpg'},
    {category: 'movies', name: 'Comedy Courier', subscribers: 15000, created: '2032-12-12', icon: 'tvseries.jpg'},
    {category: 'movies', name: 'Drama Digest', subscribers: 16000, created: '2033-01-13', icon: 'tvseries.jpg'},
  ];
  
  
  let filter = 'all';
  let sort = 'newest';
  let ascending = true;
  
  $: displayed_groups = get_displayed_groups(groups, filter, sort, ascending);
  
  function get_displayed_groups(groups, filter, sort, ascending) {
    let filtered_groups = groups;
    if (filter !== 'all') {
      filtered_groups = groups.filter(group => group.category === filter);
    }
    let sorted_groups = filtered_groups;
    if (sort === 'newest') {
      sorted_groups = filtered_groups.sort((a, b) => new Date(b.created) - new Date(a.created));
    } else if (sort === 'name') {
      sorted_groups = filtered_groups.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sort === 'subscribers') {
      sorted_groups = filtered_groups.sort((a, b) => b.subscribers - a.subscribers);
    }
    let sorted_groups2 = sorted_groups.map(group => group);
    if (!ascending) {
      sorted_groups2.reverse();
    }
    return sorted_groups2;
  }
  
</script>


<style>
  .fffff {
   	background-image: url('../img/background/doodle.png');
    background-repeat: repeat;
    background-size: 500px;
    background-color: hsl(
      var(--primary-color-hue),
      var(--primary-color-sat),
      calc(var(--primary-color-lig) + 44%)
    );
  }
  

  /* even and odd table rows */
  tr:nth-child(even) {
    background-color: rgb(254, 238, 170);
  }
  tr:nth-child(odd) {
    background-color: #ffffff;
  }
  .header {
      position: sticky;
      top: 0;
      background-color: #f1f1f1;
      padding: 10px;
      text-align: center;
  }
  
  .group-icon {
    width: 100px;
    height: 100px;
    border-radius: 10px;
  }

  table {
    border-collapse: collapse;
    border-radius: 10px;
    
  }
  td {
    padding: 5px;
  }
  th {
    padding: 5px;
  }

  
</style>

<div class="fffff">
<center>

<div class="header">
filter by categories: <select bind:value={filter}>
<option value="all">All</option>
  {#each [...new Set(groups.map(group => group.category))] as category}
    <option value="{category}">{category}</option>
  {/each}
</select>

sort by <select bind:value={sort}>
<option value="newest">Newest</option>
<option value="name">Name</option>
<option value="subscribers">Subscribers</option>
</select>

<button on:click={() => {ascending=true}}  >⌃</button>
<button on:click={() => {ascending=false}} >⌄</button>

</div>


<table>
  <thead>
    <tr>
      <th>Icon</th>
      <th>Name</th>
      <th>Category</th>
      <th>Subscribers</th>
      <th>Created</th>
    </tr>
  </thead>
  <tbody>
    {#each displayed_groups as group}
    <tr>
      <td><img src={`img/groups/${group.icon}`} class="group-icon" /></td>
      <td>{group.name}</td>
      <td>{group.category}</td>
      <td>{group.subscribers}</td>
      <td>{group.created}</td>
    </tr>
    {/each}
  </tbody>
</table>

</center>
</div>