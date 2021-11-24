const songs = [
  {
    track: 1,
    img: "./images/art-image-one.jpeg",
    imgAlt: "art illustration",
    title: "say you love me",
    artist: "peaches and vanilla icecream",
    album: "daydream",
    time: "3:22",
  },
  {
    track: 2,
    img: "./images/city-image-two.jpeg",
    imgAlt: "city",
    title: "sad vibes",
    artist: "Yellow Street",
    album: "Trash City",
    time: "3:41",
  },
  {
    track: 3,
    img: "./images/rap-song-three.jpeg",
    imgAlt: "man looking at records",
    title: "cash money",
    artist: "I like to rap",
    album: "Full Send",
    time: "4:20",
  },
  {
    track: 4,
    img: "./images/neon-image-four.jpeg",
    imgAlt: "neon sign say's 'Nothin' to See Here...",
    title: "Red Skies",
    artist: "Girl in Sweater",
    album: "Nothin' to See Here",
    time: "2:56",
  },
  {
    track: 5,
    img: "./images/neon-image-five.jpeg",
    imgAlt: "black and white photo of man singing",
    title: "whiskey and cigarettes",
    artist: "Matthew Boone",
    album: "Curvy Road",
    time: "3:45",
  },
  {
    track: 6,
    img: "./images/poster-image-six.jpeg",
    imgAlt: "poster art",
    title: "dreamin",
    artist: "yolo",
    album: "Trip Sitter Blue",
    time: "2:37",
  },
  {
    track: 7,
    img: "./images/piano-image-seven.jpeg",
    imgAlt: "piano",
    title: "Sunlight Sonata",
    artist: "Some old white guy from the 1600s",
    album: "No. 4",
    time: "10:56",
  },
  {
    track: 8,
    img: "./images/rock-song-eight.jpeg",
    imgAlt: "rock concert",
    title: "I hate my life",
    artist: "Broken Window",
    album: "Everything Sucks",
    time: "4:08",
  },
  {
    track: 9,
    img: "./images/pop-song-nine.jpeg",
    imgAlt: "Ancient Greek Head Bust Statue",
    title: "We Found Each Other",
    artist: "Meghan Snow",
    album: "Loving You",
    time: "3:44",
  },
  {
    track: 10,
    img: "./images/rb-song-ten.jpeg",
    imgAlt: "Portrait of Women",
    title: "The Last Time",
    artist: "Jasmine",
    album: "Forever",
    time: "4:27",
  },
];

function setupNavOverlays(openId, closeId, overlayId) {
  const openBtn = document.getElementById(openId);
  const closeBtn = document.getElementById(closeId);
  const overlayElement = document.getElementById(overlayId);

  openBtn.addEventListener("click", () => {
    overlayElement.classList.add("show");
  });

  closeBtn.addEventListener("click", () => {
    overlayElement.classList.remove("show");
  });
}

setupNavOverlays("openHistory", "closeHistory", "history-overlay");
setupNavOverlays("openUpdates", "closeUpdates", "updates-overlay");
setupNavOverlays("openSources", "closeSources", "sources-overlay");

const playBtn = document.getElementById("play");
const playOverlay = document.getElementById("play-overlay");

const closePlayOverlay = document.getElementById("close-play-overlay");
closePlayOverlay.addEventListener("click", () => {
  playOverlay.classList.remove("show");
});

var currentSongIndex = 0;
function setCurrentPlayingSong(index) {
  currentSongIndex = index;
  var song = songs[index];
  var playlistElement = document.getElementById("play-overlay-playlist");
  playlistElement.innerText = "Songs That Slap";

  var titleElement = document.getElementById("play-overlay-title");
  titleElement.innerText = song.title;

  var artistElement = document.getElementById("play-overlay-artist");
  artistElement.innerText = song.artist;

  var durationElement = document.getElementById("play-overlay-duration");
  durationElement.innerText = song.time;

  var currentSongImg = document.getElementById("play-overlay-image");
  currentSongImg.src = song.img;
  currentSongImg.alt = song.imgAlt;

  var currentTime = document.getElementById("play-overlay-current-time");
  currentTime.innerText = "0:00";

  const songSlider = document.getElementById("song-slider");
  songSlider.value = 0;
}
playBtn.addEventListener("click", () => {
  playOverlay.classList.add("show");
  setCurrentPlayingSong(0);
});

function addSongToTable(song) {
  let trackNo = song.track.toString();
  let imgSource = song.img;
  let imgAlt = song.imgAlt;
  let titleText = song.title;
  let artistText = song.artist;
  let albumText = song.album;
  let timeText = song.time;
  const songTbl = document.getElementById("song-table");

  var row = songTbl.insertRow();
  row.classList.add("song");
  var cell1 = row.insertCell(0);
  cell1.innerHTML = "<h3>" + trackNo + "</h3>";
  var cell2 = row.insertCell(1);
  cell2.classList.add("song-data-cell");
  var img = document.createElement("IMG");
  img.src = imgSource;
  img.alt = imgAlt;
  cell2.appendChild(img);
  var divTitle = document.createElement("DIV");
  var title = document.createElement("H1");
  title.classList.add("song-1-title");
  title.innerHTML = titleText;
  var artist = document.createElement("H3");
  artist.classList.add("song-1-artist");
  artist.innerHTML = artistText;
  divTitle.appendChild(title);
  divTitle.appendChild(artist);
  cell2.appendChild(divTitle);
  var cell3 = row.insertCell(2);
  var album = document.createElement("H3");
  album.innerHTML = albumText;
  cell3.appendChild(album);
  var cell4 = row.insertCell(3);
  var time = document.createElement("H3");
  time.innerHTML = timeText;
  cell4.appendChild(time);

  row.addEventListener("click", (event) => {
    var rowClicked = event.target.closest("TR");
    var index = parseInt(rowClicked.children[0].innerText);
    setCurrentPlayingSong(index - 1);
    playOverlay.classList.add("show");
  });
}

songs.forEach((song) => {
  addSongToTable(song);
});

const songSlider = document.getElementById("song-slider");
songSlider.addEventListener("change", (event) => {
  var currentTime = document.getElementById("play-overlay-current-time");
  currentTime.innerText = "0:" + event.target.value;
});

const prevBtn = document.getElementById("previous-btn");
prevBtn.addEventListener("click", () => {
  var newIndex = (currentSongIndex - 1) % 10;
  setCurrentPlayingSong(newIndex);
});

const nextBtn = document.getElementById("next-btn");
nextBtn.addEventListener("click", () => {
  var newIndex = (currentSongIndex + 1) % 10;
  setCurrentPlayingSong(newIndex);
});
