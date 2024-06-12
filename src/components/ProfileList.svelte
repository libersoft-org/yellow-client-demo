<script>
  

  let profiles = [
      {name: "Cameron Diaz", followers: 11100, following: 0, posts: 300, icon: "diaz.jpg"},
      {name: "Tom Cruise", followers: 2010, following: 300, posts: 400, icon: "cruise.jpg"},
      {name: "Angelina Jolie", followers: 21303, following: 404, posts: 505, icon: "jolie.jpg"},
      {name: "Brad Pitt", followers: 40400, following: 5, posts: 606, icon: "pitt.jpg"},
      {name: "Jennifer Aniston", followers: 5505, following: 606, posts: 707, icon: "aniston.jpg"},
      {name: "Johnny Depp", followers: 60633, following: 7, posts: 808, icon: "depp.jpg"},
      {name: "Julia Roberts", followers: 7027, following: 88, posts: 909, icon: "roberts.jpg"},
      {name: "George Clooney", followers: 80208, following: 9, posts: 1010, icon: "clooney.jpg"},
  ];
  
    
  let sort = 'followers';
  
  $: displayed_profiles = get_displayed_profiles(profiles, sort);
  
  function get_displayed_profiles(profiles, sort) {
    let sorted_profiles = profiles;
    if (sort === 'followers') {
      sorted_profiles = profiles.sort((a, b) => b.followers - a.followers);
    } else if (sort === 'following') {
      sorted_profiles = profiles.sort((a, b) => b.following - a.following);
    } else if (sort === 'posts') {
      sorted_profiles = profiles.sort((a, b) => b.posts - a.posts);
    } else if (sort === 'name') {
      sorted_profiles = profiles.sort((a, b) => a.name.localeCompare(b.name));
    }
    return sorted_profiles;
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
  .profile-icon {
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
  sort by <select bind:value={sort}>
    <option value="name">name</option>
    <option value="followers">followers</option>
    <option value="following">following</option>
    <option value="posts">posts</option>
  </select>
</div>

<table>
  <thead>
    <tr>
      <th>Icon</th>
      <th>Name</th>
      <th>Followers</th>
      <th>Following</th>
      <th>Posts</th>
    </tr>
  </thead>
  <tbody>
    {#each displayed_profiles as profile}
      <tr>
        <td><img src={'img/profiles/' + profile.icon} alt={profile.name} class="profile-icon" /></td>
        <td>{profile.name}</td>
        <td>{profile.followers}</td>
        <td>{profile.following}</td>
        <td>{profile.posts}</td>
      </tr>
    {/each}
  </tbody>
</table>

</center>
</div>
