import express from "express";
import cryptoRandomString from "crypto-random-string";
import cors from 'cors'

// Create an instance of an express application
const app = express();
app.use(express.json());
app.use(cors({
  origin: '*'
}));

let phenomenonList = [
  "Light Pillar",
  "Aurora",
  "Nacreous",
  "Blue Lava",
  "Lenticular",
  "Catatumbo",
];

let phenomenon = {
  0: {
    name: "Light Pillar",
    info: "An optical illusion, a light pillar, is formed when a beam of light appears to be extended above or below a light source. The effect is seen when light is reflected from the crystals of ice in the atmosphere. The reflection from the sun is called Solar Pillar. Seeing this natural phenomenon feels like you are in between the colourful waterfalls. ",
    image: "../images/Light-pillar.jpeg",
    audio: "../music/lightpillar.mp3",
  },

  1: {
    name: "Aurora",
    info: "Most of the solar wind is blocked by the magnetosphere however some of the ions briefly get trapped in ring-shaped holding areas around the planet. These areas are in a region of the atmosphere called the ionosphere. In the ionosphere, the ions of the solar wind  collide with atoms of oxygen and nitrogen from Earth’s atmosphere. The energy released during these collisions causes a colorful glowing halo around the poles—an aurora. Auroras are also known around the world as polar lights, northern lights or southern lights.",
    image: "../images/aurora1.jpeg",
    audio:  "../music/aurora.mp3",
  },

  2: {
    name: "Nacreous",
    info: "Nacreous Clouds, which are also known as polar stratospheric clouds, are usually spotted in the Polar Regions, high up in the atmosphere, where the air is cold and dry. The setting sun lies lower than the clouds, creating a colorful iridescent shine as they reflect sunbeams back. These clouds are also known as the ‘mother of pearl clouds’ and are only seen at the twilight hours of dawn and dusk. But, despite their beauty, they actually harm the ozone layer.",
    image: "../images/nacreousclouds.jpeg",
    audio: "../music/nacreousclouds.mp3",
  },

  3: {
    name: "Blue Lava",
    info: "Kawah Ijen in Indonesia also nicknamed 'The Blue Volcano' erupts lava that appears blue due to the combustion of sulphuric gases in contact with air at temperatures above 360°C. ",
    image: "../images/bluelava.jpeg",
    audio: "../music/bluelava.mp3",
  },

  4: {
    name: "Lenticular",
    info: "Lenticular clouds are stationary lens-shaped clouds that form at high altitudes, especially over mountains and even buildings. The wind flow is obstructed by these tall structures, condensing to form the unique clouds that are often confused for UFOs. They occur most commonly in the winter and the spring.",
    image: "../images/lenticularclouds.jpeg",
    audio: "../music/lenticularclouds.mp3",
  },

  5: {
    name: "Catatumbo",
    info: "Catatumbo lightning is an atmospheric phenomenon that occurs over the mouth of the Catatumbo River where it empties into lake Maracaibo in Venezuela. Catatumbo means 'House of Thunder' in the language of the Bari people. It originates from a mass of storm clouds at an altitude of more than 1 km (0.6 mi), and occurs for 140 to 160 nights a year, nine hours per day, and with lightning flashes from 16 to 40 times per minute.The phenomenon sees the highest density of lightning in the world, at 250 per km2",
    image: "../images/catatumbo.jpeg",
    audio: "../music/catatumbo.mp3",
  },
};

// Set the port the application will be running on
const port = process.env.PORT || 3001;

// Set up a response for the root path of the application
app.get("/", (req, res) => {
  res.send(
    "Find out fun facts that might surprise you depending on what phenomenon you choose. Also get a crypto explorer id. "
  );
});

app.get("/id", (req, res) => {
  const crs = cryptoRandomString({ length: 10 });
  res.send(`Explorer ID: ${crs}`);
});

//BASED ON URL
app.get("/pName/:pName/", (req, res) => {
  let pinfo = [];
  Object.keys(phenomenon).forEach((key, value) => {
    let n = `:${phenomenon[key].name}`;
    if (req.params.pName == n) {
      console.log(phenomenon[key].info);
      pinfo.push(phenomenon[key].info);
    }
  });
  console.log(pinfo);
  res.send(pinfo);
});

// Set the application to listen a port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
