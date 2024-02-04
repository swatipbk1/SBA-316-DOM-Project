const app = document.getElementById("app");

function createMusicPost(title, artist, albumCover) {
  const musicTemplate = document.getElementById("musicTemplate");
  const clone = musicTemplate.content.cloneNode(true);

  const songTitle = clone.querySelector(".song-title");
  const artistElement = clone.querySelector(".artist");
  const albumCoverElement = clone.querySelector(".album-cover");

  songTitle.textContent = title;
  artistElement.textContent = artist;
  albumCoverElement.src = albumCover;

  return clone;
}

const staticMusicData = [
  { title: "Song 1", artist: "Artist 1", albumCover: "cover1.jpg" },
  { title: "Song 2", artist: "Artist 2", albumCover: "cover2.jpg" },
  // Add more static data as needed
];

// Use DocumentFragment to efficiently append music posts to the app container
const fragment = document.createDocumentFragment();

staticMusicData.forEach((song) => {
  const musicPost = createMusicPost(song.title, song.artist, song.albumCover);
  fragment.appendChild(musicPost);
});

app.appendChild(fragment);
