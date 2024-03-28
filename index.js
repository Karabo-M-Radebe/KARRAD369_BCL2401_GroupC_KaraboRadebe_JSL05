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
    // Your code here
    const newList = guardians.map((songs) => {return title + genre})     
}

const 

// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);


