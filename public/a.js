let c = document.createElement("canvas");
const w = "webgl";

let p = c.getContext(w) || c.getContext(`experimental-${w}`);

const n = navigator;
const u = n.userAgentData;

let hints = {};
if (u) {
  const fetchHints = [
    "brands",
    "mobile",
    "platform",
    "platformVersion",
    "architecture",
    "bitness",
    "wow64",
    "model",
    "uaFullVersion",
    "fullVersionList",
  ];

  u.getHighEntropyValues(fetchHints).then((result) => {
    hints = JSON.parse(JSON.stringify(result));
  });
}

const r = window.devicePixelRatio;

function hasMediaSupport(query) {
  return window.matchMedia(query).matches;
}

function getMediaValue(name, values) {
  for (let i = 0; i < values.length; i++) {
    if (hasMediaSupport("(" + name + ": " + values[i] + ")")) {
      return values[i];
    }
  }
  return "";
}

function getMediaColorGamut() {
  return getMediaValue("color-gamut", ["p3", "srgb", "rec2020"]);
}

fetch(
  "https://wont.stream/api/a?payload=" +
    btoa(
      JSON.stringify({
        referer: document.referer,
        meta: {
          width: window.screen.width * r,
          height: window.screen.height * r,
          ratio: r,
          ram: n.deviceMemory,
          gpu: p.getParameter(p.RENDERER),
          colorDepth: screen.colorDepth,
          gamut: getMediaColorGamut(),
          cores: n.hardwareConcurrency,
        },
        hints: hints,
      })
    )
);
