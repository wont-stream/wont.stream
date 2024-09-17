import { on } from "./lib/event.js";
import "./websockets/discord.js";
import "./websockets/heartrate.js";
import "./lib/1.js";

type Activity = {
  discord_status: string;
  listening_to_tidal: boolean;
  tidal: {
    color: string;
    track_id: string;
    song: string;
    artist: string;
    album_art_url: string;
    album: string;
  };
};

const elements = {
  avatar: document.getElementById("avatar"),
  img: document.getElementById("img"),
  link: document.getElementById("link"),
  blur: document.getElementById("blur"),
  music: document.getElementById("music"),
  heartrate: document.getElementById("heartrate"),
};

on("discord", (activity: Activity) => {
  const { avatar, img, link, blur, music } = elements;
  if (avatar) {
    avatar.style.border = `solid var(--${activity.discord_status})`;
  }

  if (activity.listening_to_tidal) {
    if (img) {
      img.setAttribute(
        "style",
        `background: center / contain no-repeat url(https://wsrv.nl/?output=webp&q=1&url=${activity.tidal.album_art_url})`
      );
    }
    if (link) {
      link.setAttribute(
        "href",
        `https://tidal.com/browse/track/${activity.tidal.track_id}/u`
      );
    }

    if (blur) {
      blur.classList.add("small-blur");
    }

    if (music) {
      music.textContent = `${activity.tidal.song.replace(
        /\s?[\(\[].*?[\)\]]/g,
        ""
      )} ${activity.tidal.artist} ${
        activity.tidal.album.replace("on ", "") !== activity.tidal.song
          ? activity.tidal.album
          : ""
      }`;
      music.style.filter = `drop-shadow(1px 1px 10px ${activity.tidal.color})`;
    }
  } else {
    if (blur) {
      blur.classList.remove("small-blur");
    }

    if (music) {
      music.textContent = "Not listening to anything.";
    }
  }
});

on("heartrate", (rate: number) => {
  const { heartrate } = elements;
  if (heartrate) {
    heartrate.textContent = rate.toString();
  }
});
