
function generatePlaylist(guardians, songs) { 
  const playlists = Object.entries(guardians).map(([name, genre]) => { 
    
    const songsOfPreferredGenre = songs.filter(song => song.genre === genre); 
    
    const playlist = songsOfPreferredGenre

    playlist.unshift({ name }); 

    return playlist;
  });

  displayPlaylists(playlists);
}

function displayPlaylists(playlists) {

const playlistsDiv = document.createElement('div');
playlistsDiv.id = 'playlists';

playlists.forEach((playlist) => {
  
  const playlistDiv = document.createElement('div');
  playlistDiv.classList.add('playlist');

  const title = document.createElement('h2');
  title.textContent = playlist[0].name + "'s Playlist";
  playlistDiv.appendChild(title)

  const list = document.createElement('div');

  playlist.slice(1).forEach((song) => {
    
    const listItem = document.createElement('div');
    listItem.className = 'song'; 

    const songTitle = document.createElement('span');
    songTitle.textContent = `${song.title}`; 
    songTitle.className = 'song-title';
    const songArtist = document.createElement('span');
    songArtist.textContent = ` by ${song.artist}`;

    listItem.appendChild(songTitle);
    listItem.appendChild(songArtist);

    list.appendChild(listItem);
  });

  playlistDiv.appendChild(list);

  playlistsDiv.appendChild(playlistDiv);
});

document.body.appendChild(playlistsDiv);
}

generatePlaylist(guardians, songs);