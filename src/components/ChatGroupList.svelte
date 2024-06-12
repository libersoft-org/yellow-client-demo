<script>
  
  let groups = [
    {category: 'cryptocurrencies', name: 'Bitcoin', members: 10000, created: '2021-01-01', icon: 'bitcoin.svg'},
    {category: 'cryptocurrencies', name: 'Ethereum', members: 8500, created: '2023-01-01', icon: 'ethereum.svg'},
    {category: 'cryptocurrencies', name: 'Ripple', members: 7000, created: '2020-01-01', icon: 'ripple.svg'},
    {category: 'programming', name: 'JavaScript', members: 15000, created: '2025-01-01', icon: 'javascript.svg'},
    {category: 'programming', name: 'Python', members: 12000, created: '2031-01-01', icon: 'python.svg'},
    {category: 'programming', name: 'Java', members: 11000, created: '2041-01-01', icon: 'java.svg'},
    {category: 'sports', name: 'Football', members: 9000, created: '2001-01-01', icon: 'football.svg'},
    {category: 'sports', name: 'Basketball', members: 8000, created: '2011-01-01', icon: 'basketball.svg'},
    {category: 'sports', name: 'Tennis', members: 7000, created: '2021-01-07', icon: 'tennis.svg'},
    {category: 'technology', name: 'AI & ML', members: 5000, created: '2022-02-02', icon: 'ai_ml.svg'},
    {category: 'technology', name: 'Cloud Computing', members: 6000, created: '2023-03-03', icon: 'cloud_computing.svg'},
    {category: 'technology', name: 'Cybersecurity', members: 7000, created: '2024-04-04', icon: 'cybersecurity.svg'},
    {category: 'health', name: 'Nutrition', members: 8000, created: '2025-05-05', icon: 'nutrition.svg'},
    {category: 'health', name: 'Fitness', members: 9000, created: '2026-06-06', icon: 'fitness.svg'},
    {category: 'health', name: 'Mental Health', members: 10000, created: '2027-07-07', icon: 'mental_health.svg'},
    {category: 'music', name: 'Rock', members: 11000, created: '2028-08-08', icon: 'rock.svg'},
    {category: 'music', name: 'Pop', members: 12000, created: '2029-09-09', icon: 'pop.svg'},
    {category: 'music', name: 'Classical', members: 13000, created: '2030-10-10', icon: 'classical.svg'},
    {category: 'movies', name: 'Action', members: 14000, created: '2031-11-11', icon: 'action.svg'},
    {category: 'movies', name: 'Comedy', members: 15000, created: '2032-12-12', icon: 'comedy.svg'},
    {category: 'movies', name: 'Drama', members: 16000, created: '2033-01-13', icon: 'drama.svg'},
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
    } else if (sort === 'members') {
      sorted_groups = filtered_groups.sort((a, b) => b.members - a.members);
    }
    if (!ascending) {
      sorted_groups = sorted_groups.reverse();
    }
    return sorted_groups;
  }
  
</script>



<style>

  tr:nth-child(even) {
    background-color: rgb(254, 238, 170);
  }
  tr:nth-child(odd) {
    background-color: #ffffff;
  }
  .fffff-header {
      position: sticky;
      top: 0;
      background-color: #f1f1f1;
      padding: 10px;
      text-align: center;
  }

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
  
</style>


<center>
<div class="fffff">
  
  <div class="fffff-header">
  filter by categories: <select bind:value={filter}>
  <option value="all">All</option>
  <option value="all">All</option>
    {#each [...new Set(groups.map(group => group.category))] as category}
      <option value="{category}">{category}</option>
    {/each}
  </select>
  
  sort by <select bind:value={sort}>
  <option value="newest">Newest</option>
  <option value="name">Name</option>
  <option value="members">Members</option>
  </select>
  
  <button on:click={() => {ascending=true}}  >⌃</button>
  <button on:click={() => {ascending=false}} >⌄</button>
  
  </div>
  
  
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Category</th>
        <th>Members</th>
        <th>Created</th>
      </tr>
    </thead>
    <tbody>
      {#each displayed_groups as group}
      <tr>
        <td><img src={`img/icons_new/${group.icon}`} alt={group.name} />
        {group.name}</td>
        <td>{group.category}</td>
        <td>{group.members}</td>
        <td>{group.created}</td>
      </tr>
      {/each}
    </tbody>
  </table>
</div>
</center>