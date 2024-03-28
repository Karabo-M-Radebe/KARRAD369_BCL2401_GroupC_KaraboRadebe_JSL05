// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) { // Object.entries(): This method is used to convert an object into an array of its key-value pairs. In this case, guardians is the object being converted.
    // Use the map() function to create playlists for each Guardian
    const playlists = Object.entries(guardians).map(([name, genre]) => { // The destructuring assignment [name, genre] extracts the name and genre from each pair.
      // Filter the songs array based on the specified genre
      const songsOfPreferredGenre = songs.filter(song => song.genre === genre); // Here, it filters songs based on whether their genre matches the genre extracted from guardians.
  
      // Generate a random playlist of 3 songs
      const playlist = songsOfPreferredGenre
        .sort(() => 0.5 - Math.random()) // This method sorts the elements of an array in place and returns the sorted array.
        .slice(0, 3); /* Creates a shallow copy of a portion of an array. 
        This method returns a shallow copy of a portion of an array into a new array selected from start to end (end not included) where start is inclusive and end is exclusive. 
        Here, it's used to select the first three songs after they've been shuffled. */

      // Add the guardian's name as the first element of the playlist
      playlist.unshift({ name }); // it adds an object containing the name of the playlist to the beginning of the playlist array.
  
      return playlist;
    });
  
    // Call function to display the playlists
    displayPlaylists(playlists);
  }
  
  // Helper function to display the playlists
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
    const list = document.createElement('ul');

    // Loop through each song in the playlist
    playlist.slice(1).forEach((song) => {
      // Create a list items
      const listItem = document.createElement('ul');

      // Set the song title and artist
      const songTitle = document.createElement('span');
      songTitle.textContent = `${song.title} `;
      songTitle.className = 'song-title';
      const songArtist = document.createElement('span');
      songArtist.textContent = `by ${song.artist}`;

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