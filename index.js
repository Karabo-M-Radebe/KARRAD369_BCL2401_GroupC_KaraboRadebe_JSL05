// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    // Feel free to add even more songs
    {title: "Can I Kick It?", artist: "A Tribe Called Quest", genre: "Hip-Hop"},
    {title: "Get Down On It", artist: "Kool & The Gang", genre: "Funk"},
    {title: "Mr. Telephone Man", artist: "New Edition", genre: "R&B"},
    {title: "Turn It On", artist: "Level 42", genre: "Funk"},
    {title: "Ms.Jackson", artist: "Outkast", genre: "Hip-Hop"},
    {title: "Under Pressure", artist: "Queen", genre: "Rock"},
    {title: "Super Freak", artist: "Rick James", genre: "Funk"},
    {title: "Hungry Like the Wolf", artist: "Duran Duran", genre: "Rock"},
    {title: "The Payback", artist: "James Brown", genre: "Funk"},
    {title: "Push It", artist: "Salt-N-Pepa", genre: "Hip-Hop"},
    {title: "Carlifonia Love", artist: "2Pac", genre: "Hip-Hop"},
    {title: "Rock With You", artist: "Micheal Jackson", genre: "R&B"},
    {title: "Think", artist: "Aretha Franklin", genre: "Funk"},
    {title: "I Wanna Dance With Somebody", artist: "Whitney Houston", genre: "Pop"},
    {title: "Numb/Encore", artist: "Jay-Z", genre: "Hip-Hop"},
    {title: "Hypnotize", artist: "The Notorious B.I.G.", genre: "Hip-Hop"},
    {title: "Love Man", artist: "Otis Redding", genre: "Funk"},
];


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    // Add preferences for Drax, Rocket, and Groot
    "Drax": "Funk",
    "Rocket": "R&B",
    "Groot": "Hip-Hop",
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) { 
    // Use the map() function to create playlists for each Guardian
    const playlists = Object.entries(guardians).map(([name, genre]) => { 
      // Filter the songs array based on the specified genre
      const songsOfPreferredGenre = songs.filter(song => song.genre === genre); 
  
      // Generate a random playlist of songs
      const playlist = songsOfPreferredGenre
  
      // Add the guardian's name as the first element of the playlist
      playlist.unshift({ name }); // this adds an object containing the name of the playlist to the beginning of the playlist array.
  
      return playlist;
    });
  
    // Call function to display the playlists
    displayPlaylists(playlists);
  }
  
  // Created a helper function to display the playlists
  // Arrow Functions (ES6): A concise way to write functions in JavaScript. Perfect for short functions and passing them as arguments.
  function displayPlaylists(playlists) {
  // Create a container div for playlists
  const playlistsDiv = document.createElement('div');
  playlistsDiv.id = 'playlists';
  
  // Loop through each playlist
  playlists.forEach((playlist) => {
    // Create a playlist container div
    const playlistDiv = document.createElement('div');
    playlistDiv.classList.add('playlist');
  
    // Create a title h2
    const title = document.createElement('h2');
    title.textContent = playlist[0].name + "'s Playlist";
    playlistDiv.appendChild(title)
  
    // Create an unordered list
    const list = document.createElement('div');
  
    // Looping through each song in the playlist
    playlist.slice(1).forEach((song) => {
      // Create a list items
      const listItem = document.createElement('div');
      listItem.className = 'song'; 
  
      // Set the song title and artist
      const songTitle = document.createElement('span');
      songTitle.textContent = `${song.title}`; 
      songTitle.className = 'song-title';
      const songArtist = document.createElement('span');
      songArtist.textContent = ` by ${song.artist}`;
  
      // Append the title and artist to the list item
      listItem.appendChild(songTitle);
      listItem.appendChild(songArtist);
  
      // Append the list item to the list
      list.appendChild(listItem);
    });
  
    // Append the list to the playlist container
    playlistDiv.appendChild(list);
  
    // Append the playlist container to the container div
    playlistsDiv.appendChild(playlistDiv);
  });
  
  // Append the container div to the document
  document.body.appendChild(playlistsDiv);
  }
  
  // calling  the generatePlaylist function
  generatePlaylist(guardians, songs);