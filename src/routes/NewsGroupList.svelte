<script>
  
  let groups = [
    {category: 'cryptocurrencies', name: 'Bitcoin Weekly', subscribers: 10000, created: '2021-01-01', logo: 'bitcoin.svg'},
    {category: 'cryptocurrencies', name: 'Ethereum Insights', subscribers: 8500, created: '2023-01-01', logo: 'ethereum.svg'},
    {category: 'cryptocurrencies', name: 'Ripple Report', subscribers: 7000, created: '2020-01-01', logo: 'ripple.svg'},
    {category: 'programming', name: 'JavaScript Journal', subscribers: 15000, created: '2025-01-01', logo: 'javascript.svg'},
    {category: 'programming', name: 'Python Post', subscribers: 12000, created: '2031-01-01', logo: 'python.svg'},
    {category: 'programming', name: 'Java Journey', subscribers: 11000, created: '2041-01-01', logo: 'java.svg'},
    {category: 'sports', name: 'Football Fanatic', subscribers: 9000, created: '2001-01-01', logo: 'football.svg'},
    {category: 'sports', name: 'Basketball Bulletin', subscribers: 8000, created: '2011-01-01', logo: 'basketball.svg'},
    {category: 'sports', name: 'Tennis Times', subscribers: 7000, created: '2021-01-07', logo: 'tennis.svg'},
    {category: 'technology', name: 'AI & ML Monthly', subscribers: 5000, created: '2022-02-02', logo: 'ai_ml.svg'},
    {category: 'technology', name: 'Cloud Computing Chronicle', subscribers: 6000, created: '2023-03-03', logo: 'cloud_computing.svg'},
    {category: 'technology', name: 'Cybersecurity Circular', subscribers: 7000, created: '2024-04-04', logo: 'cybersecurity.svg'},
    {category: 'health', name: 'Nutrition Notes', subscribers: 8000, created: '2025-05-05', logo: 'nutrition.svg'},
    {category: 'health', name: 'Fitness Facts', subscribers: 9000, created: '2026-06-06', logo: 'fitness.svg'},
    {category: 'health', name: 'Mental Health Matters', subscribers: 10000, created: '2027-07-07', logo: 'mental_health.svg'},
    {category: 'music', name: 'Rock Review', subscribers: 11000, created: '2028-08-08', logo: 'rock.svg'},
    {category: 'music', name: 'Pop Press', subscribers: 12000, created: '2029-09-09', logo: 'pop.svg'},
    {category: 'music', name: 'Classical Chronicle', subscribers: 13000, created: '2030-10-10', logo: 'classical.svg'},
    {category: 'movies', name: 'Action Alert', subscribers: 14000, created: '2031-11-11', logo: 'action.svg'},
    {category: 'movies', name: 'Comedy Courier', subscribers: 15000, created: '2032-12-12', logo: 'comedy.svg'},
    {category: 'movies', name: 'Drama Digest', subscribers: 16000, created: '2033-01-13', logo: 'drama.svg'},
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
  
</style>

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
      <td><img src={`img/icons_new/${group.icon}`} alt={group.name} /></td>
      <td>{group.name}</td>
      <td>{group.category}</td>
      <td>{group.subscribers}</td>
      <td>{group.created}</td>
    </tr>
    {/each}
  </tbody>
</table>

</center>
