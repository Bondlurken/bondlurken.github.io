// Volume
document.querySelectorAll("audio").forEach((audio) => {
  audio.volume = 0.5; // Volume range is from 0.0 (silent) to 1.0 (maximum)
});

// Shuffle Playlist
function fisherYatesShuffle(songs) {
  for (let i = songs.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [songs[i], songs[j]] = [songs[j], songs[i]];
  }
  return songs;
}

// Playlist of songs
const songs = [
  {
    title: "Serani Poji - Where Is Smiley",
    url: "music/where-is-smiley-serani-poji.mp3",
  },
  {
    title: "Serani Poji - Pipo Pipo",
    url: "music/pipo-pipo-serani-poji.mp3",
  },
  {
    title: "Nichijou Ending (zzz) - Cover by *namirin",
    url: "music/nichijou-ending-namirin.mp3",
  },
  {
    title: "Serani Poji - Sugar Boo",
    url: "music/sugar-boo-serani-poji.mp3",
  },
  {
    title: "Nichijou Opening 1",
    url: "music/nichijou-op-1.mp3",
  },
  {
    title: "Nichijou Opening 2",
    url: "music/nichijou-op-2.mp3",
  },
  {
    title: "Barakamon Opening Extended",
    url: "music/barakamon-opening.mp3",
  },
  {
    title:
      "Renai Circulation「恋愛サーキュレーション」歌ってみた【＊なみりん】",
    url: "music/renai-circulation.mp3",
  },
  {
    title:
      "Ochame Kinou (Mischievous Function) by Gojimaji-P feat. Kasane Teto",
    url: "music/teto-ochame-kinou.mp3",
  },
  {
    title: "Hatsune Miku - Triple Baka",
    url: "music/miku-triple-baka.mp3",
  },
  {
    title: "Pearl Brothers - いかすぜ！ポジティブ・シンキング",
    url: "music/pearl-brothers.mp3",
  },
  {
    title: "Capsule - レトロメモリー",
    url: "music/capsule.mp3",
  },
  {
    title: "Dou Kangaetemo Watashi wa Warukunai by Izumi Kitta",
    url: "music/watamote-ending.mp3",
  },
  {
    title: "Yotsuba Music - マヤーといた季節",
    url: "music/yotsuba-1.mp3",
  },
  {
    title: "Yotsuba Music - よつば､でかける",
    url: "music/yotsuba-2.mp3",
  },
  {
    title: "Happy Knight, Shiny Child",
    url: "music/happy-knight-shiny-child.mp3",
  },
  {
    title: "Yotsuba Music - サンセットドライバー",
    url: "music/yotsuba-3.mp3",
  },
  {
    title: "Yotsuba Music - 夏から秋ヘ渡る橋",
    url: "music/yotsuba-4.mp3",
  },
  {
    title: "Kaede - あなたは遠く",
    url: "music/kaede.mp3",
  },
  {
    title: "Azumanga Daioh OST - Shin gakki (1)",
    url: "music/azumanga-daioh-shin-gakki-1.mp3",
  },
  {
    title: "Azumanga Daioh OST - Ashita wa Yasumi da!",
    url: "music/azumanga-daioh-ashita-wa-yasumi-da.mp3",
  },
  {
    title: "Azumanga Daioh Sakaki Single - Shin wa shoujo parashuuto",
    url: "music/azumanga-daioh-sakaki-single.mp3",
  },
  {
    title: "Kirby Triple Deluxe - Keychain Collecting",
    url: "music/kirby-triple-deluxe-keychain-collecting.mp3",
  },
  {
    title: "Kirby Star Allies - Planet Misteen",
    url: "music/kirby-star-allies-planet-misteen.mp3",
  },
  {
    title: "Kirby Triple Deluxe - The Cave in the Sky",
    url: "music/kirby-triple-deluxe-the-cave-in-the-sky.mp3",
  },
  {
    title: "Kirby and the Forgotten Land - HAL Room 2",
    url: "music/kirby-and-the-forggoten-land-secret-hal-room-2.mp3",
  },
  {
    title: "Kirby and the Rainbow Curse - Ripple Field",
    url: "music/kirby-and-the-rainbow-curse-ripple-field.mp3",
  },
  {
    title: "Kirby's Return to Dream Land - Onion Ocean 2",
    url: "music/kirbys-return-to-dream-land-onion-ocean-2.mp3",
  },
  {
    title: "Kirby: Super Star - Gourmet Race - 8 Bit Remix by Bulby",
    url: "music/kirby-super-star-gourmet-race-8bit.mp3",
  },
  {
    title: "Kirby and the Rainbow Curse - Rainbow Across the Skies",
    url: "music/kirby-and-the-rainbow-curse-rainbow-across-the-skies.mp3",
  },
  {
    title: "Kirby and the Forgotten Land - Moonlight Canyon",
    url: "music/kirby-and-the-forgotten-land-moonlight-canyon.mp3",
  },
  {
    title: "Kirby & The Amazing Mirror - Cabbage Cavern (Area3)",
    url: "music/kirby-and-the-amazing-mirror-cabbage-cavern-area-3.mp3",
  },
  {
    title: "Kirby Triple Deluxe - A Forest Hike",
    url: "music/kirby-triple-deluxe-a-forest-hike.mp3",
  },
  {
    title: "Kirby & The Amazing Mirror - Rainbow Route - 8 Bit Remix by Bulby",
    url: "music/kirby-the-amazing-mirror-forest-area-8bit.mp3",
  },
  {
    title:
      "Super Mario World 2: Yoshi's Island - Touch Fuzzy Get Dizzy 8 Bit Remix by Bulby",
    url: "music/super-mario-world-2-touch-fuzz-8bit.mp3",
  },
  {
    title:
      "Super Mario World 2: Yoshi's Island - Flower Garden 8 Bit Remix by Bulby",
    url: "music/super-mario-world-2-flower-garden-8bit.mp3",
  },
  {
    title: "Monster Hunter: Freedom Unite - Guild Theme",
    url: "music/mhfu-guild.mp3",
  },
  {
    title: "Super Mario 64 - Snow Mountain [Remix] by Qumu",
    url: "music/super-mario-64-snow-mountain-remix.mp3",
  },
  {
    title: "Tropico 3: Track 8",
    url: "music/tropico-3-track-8.mp3",
  },
  {
    title: "Mario Party Superstars - You are the Superstar",
    url: "music/mario-party-superstars-you-are-the-superstar.mp3",
  },
  {
    title: "Mario Kart DS Theme",
    url: "music/mario-kart-ds-theme.mp3",
  },
  {
    title: "Pokémon Heartgold and Soulsilver - Pokémon Center",
    url: "music/pokemon-heartgold-pokemon-center.mp3",
  },
  {
    title: "Digimon Rumble Arena 2 - Menu Theme",
    url: "music/digimon-rumble-arena-2-menu.mp3",
  },
  {
    title: "Mario Kart Double Dash - Menu Theme",
    url: "music/mario-kart-double-dash-theme.mp3",
  },
  {
    title: "Mario Kart Wii - Title Theme",
    url: "music/mario-kart-wii-title-theme.mp3",
  },
  {
    title: "Modnations Racer - Main Theme",
    url: "music/modnations-racer-theme.mp3",
  },
  {
    title: "Monster Hunter Tri - Intro Theme",
    url: "music/mhtri-theme.mp3",
  },
  {
    title: "Super Smash Bros Melee - Menu",
    url: "music/super-smash-bros-melee-menu.mp3",
  },
  {
    title: "Super Smash Bros Ultimate - Main Theme",
    url: "music/super-smash-bros-ultimate-theme.mp3",
  },
  {
    title: "LittleBigPlanet 2 - Sleepy Head",
    url: "music/lbp2-sleepy-head.mp3",
  },
  {
    title: "Monster Hunter Freedom Unite - Main Theme",
    url: "music/mfhu-theme.mp3",
  },
  {
    title: "Non Non Biyori OP 1",
    url: "music/non-non-biyori-op-1.mp3",
  },
  {
    title: "Kamisama Hajimemashita",
    url: "music/kamisama_hajimemashita.mp3",
  },
  {
    title: "Super Mario Land: Mario Adventures I (Main BGM #1)",
    url: "music/super_mario_land_track_1_mario_adventures.mp3",
  },
  {
    title: "SPACE AKIBA-POP - Love Cheat!",
    url: "music/love_cheat.mp3",
  },
  {
    title: "K-ON! Opening 1",
    url: "music/k-on_opening_1.mp3",
  },
  {
    title: "K-ON! Ending 1",
    url: "music/k-on_ending_1.mp3",
  },
  {
    title:
      "Kiara Tribute Collection Kessoku Band no Uttatemita - Cagayake! GIRLS",
    url: "music/kessoku_band_cagayake.mp3",
  },
  {
    title:
      "Kiara Tribute Collection Kessoku Band no Uttatemita - Daydream Cafe",
    url: "music/kessoku_band_daydream_cafe.mp3",
  },
  {
    title: "Kessoku Band - Seisyun Complex",
    url: "music/kessoku_band_seisyun_complex.mp3",
  },
  {
    title: "K-ON! U&I",
    url: "music/k_on_u_i.mp3",
  },
  {
    title: "Haibane Renmei Opening",
    url: "music/haibane_renmei_op.mp3",
  },
  {
    title: "Serial Experiments Lain Opening",
    url: "music/serial_experiments_lain_op.mp3",
  },
  {
    title: "My Soul Your Beats (Angel Beats Opening)",
    url: "music/my_soul_your_beats.mp3",
  },
  {
    title: "Welcome to the NHK Opening (パズル)",
    url: "music/welcome_to_the_hnk_opening.mp3",
  },
  {
    title: "Himawari! Opening",
    url: "music/himawari_opening.mp3",
  },
  {
    title: "Oshi No Ko - New B Komachi",
    url: "music/oshi_no_ko_new_b_komachi.mp3",
  },
  {
    title: "Shirobako Opening",
    url: "music/shirobako_opening.mp3",
  },
  {
    title: "Girls' Last Tour Opening",
    url: "music/girls_last_tour_opening.mp3",
  },
  {
    title: "Haruhi Suzumiya Opening",
    url: "music/haruhi_suzumiya_opening.mp3",
  },
];

fisherYatesShuffle(songs);

// Define Music Player
const NAV_MUSIC = document.getElementById("navMusic");
const BUTTON_PLAY = document.getElementById("navMusicPlay");
const BUTTON_PAUSE = document.getElementById("navMusicPause");
const BUTTON_PREVIOUS = document.getElementById("navMusicPrevious");
const BUTTON_NEXT = document.getElementById("navMusicNext");
const CURRENT_SONG_INFO = document.getElementById("currentSongInfo");

let currentIndex = 0;
let currentTime = 0;
let isPlaying = false; // Track play/pause state

// Save state to sessionStorage
function saveState() {
  sessionStorage.setItem("isPlaying", isPlaying);
}

// Load state from sessionStorage
function loadState() {
  const savedIsPlaying = sessionStorage.getItem("isPlaying");

  if (savedIsPlaying !== null) {
    isPlaying = savedIsPlaying === "true";
  }
}

// Load the current song
function loadSong(index) {
  if (index < 0 || index >= songs.length) return;
  NAV_MUSIC.src = songs[index].url;
  CURRENT_SONG_INFO.innerText = `Featured song: ${songs[index].title}`;
  NAV_MUSIC.load();
}

// Update button states based on `isPlaying`
function updateButtonStates() {
  if (isPlaying) {
    BUTTON_PLAY.classList.add("active");
    BUTTON_PAUSE.classList.remove("active");
  } else {
    BUTTON_PAUSE.classList.add("active");
    BUTTON_PLAY.classList.remove("active");
  }
}

// Event listeners for playback controls
BUTTON_PLAY.addEventListener("click", function () {
  isPlaying = true;
  NAV_MUSIC.play();
  updateButtonStates();
  saveState();
});

BUTTON_PAUSE.addEventListener("click", function () {
  isPlaying = false;
  NAV_MUSIC.pause();
  updateButtonStates();
  saveState();
});

BUTTON_PREVIOUS.addEventListener("click", function () {
  currentIndex = currentIndex === 0 ? songs.length - 1 : currentIndex - 1;
  currentTime = 0; // Reset time when switching songs
  loadSong(currentIndex);
  if (isPlaying) {
    NAV_MUSIC.play();
  }
  updateButtonStates();
  saveState();
});

BUTTON_NEXT.addEventListener("click", function () {
  currentIndex = (currentIndex + 1) % songs.length;
  currentTime = 0; // Reset time when switching songs
  loadSong(currentIndex);
  if (isPlaying) {
    NAV_MUSIC.play();
  }
  updateButtonStates();
  saveState();
});

// Autoplay next song when current ends
NAV_MUSIC.addEventListener("ended", function () {
  currentIndex = (currentIndex + 1) % songs.length;
  currentTime = 0; // Reset time when a new song starts
  loadSong(currentIndex);
  if (isPlaying) {
    NAV_MUSIC.play();
  }
  saveState();
});

// Initial load
window.addEventListener("load", () => {
  loadState();
  loadSong(currentIndex);
  if (isPlaying) {
    NAV_MUSIC.play();
  }
  updateButtonStates();
});

// Pause all audio if user press play on a audio element
document.addEventListener(
  "play",
  function (e) {
    var audios = document.getElementsByTagName("audio");
    for (var i = 0, len = audios.length; i < len; i++) {
      if (audios[i] != e.target) {
        audios[i].pause();
      }
    }
  },
  true,
);
