const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/games-reloaded", { useNewUrlParser: true });

const gameSeed = [
    {
        "title": "Sekiro: Shadows Die Twice",
        "platforms": [
            "Playstation 4",
            "Xbox One",
            "Microsoft Windows"
        ],
        "genres": "Action-adventure",
        "image": "https://upload.wikimedia.org/wikipedia/en/thumb/6/6e/Sekiro_art.jpg/220px-Sekiro_art.jpg",
        "summary": "Carve your own clever path to vengeance in an all-new adventure from developer FromSoftware. Explore late 1500s Sengoku Japan, a brutal period of constant life and death conflict, as you come face to face with larger than life foes in a dark and twisted world. Unleash an arsenal of deadly prosthetic tools and powerful ninja abilities while you blend stealth, vertical traversal, and visceral head to head combat in a bloody confrontation. Take Revenge. Restore your honor. Kill Ingeniously."
    },
    {
        "title": "Days Gone",
        "platforms": [
            "Playstation 4"
        ],
        "genres": "Action-adventure, survival horror",
        "image": "https://upload.wikimedia.org/wikipedia/en/1/16/Days_Gone_cover_art.jpg",
        "summary": "At its core, Days Gone is about survivors and what makes them human: desperation, loss, madness, betrayal, friendship, brotherhood, regret, love – and hope. It’s about how even when confronted with such enormous tragedy they find a reason to live. Hope never dies."
    },
    {
        "title": "Halo: Combat Evolved",
        "platforms": [
            "Xbox"
        ],
        "genres": "First-person shooter",
        "image": "https://upload.wikimedia.org/wikipedia/en/8/80/Halo_-_Combat_Evolved_%28XBox_version_-_box_art%29.jpg",
        "summary": "Bent on Humankind's extermination, a powerful fellowship of alien races known as the Covenant is wiping out Earth's fledgling interstellar empire. Climb into the boots of Master Chief, a biologically altered super-soldier, as you and the other surviving defenders of a devastated colony-world make a desperate attempt to lure the alien fleet away from earth. Shot down and marooned on the ancient ring-world Halo, you begin a guerilla-war against the Covenant. Fight for humanity against an alien onslaught as you race to uncover the mysteries of Halo."
    },
    {
        "title": "The Elder Scrolls V: Skyrim",
        "platforms": [
            "Microsoft Windows",
            "Playstation 3",
            "Playstation 4",
            "Xbox 360",
            "Xbox One",
            "Nintendo Switch"
        ],
        "genres": "Action role-playing",
        "image": "https://upload.wikimedia.org/wikipedia/en/1/15/The_Elder_Scrolls_V_Skyrim_cover.png",
        "summary": "The next chapter in the highly anticipated Elder Scrolls saga arrives from the makers of the 2006 and 2008 Games of the Year, Bethesda Game Studios. Skyrim reimagines and revolutionizes the open-world fantasy epic, bringing to life a complete virtual world open for you to explore any way you choose."
    },
    {
        "title": "The Legend of Zelda: Breath of the Wild",
        "platforms": [
            "Nintendo Switch"
        ],
        "genres": "Action-adventure",
        "image": "https://upload.wikimedia.org/wikipedia/en/c/c6/The_Legend_of_Zelda_Breath_of_the_Wild.jpg",
        "summary": "Step into a world of discovery, exploration and adventure in The Legend of Zelda: Breath of the Wild, a boundary-breaking new game in the acclaimed series. Travel across fields, through forests and to mountain peaks as you discover what has become of the ruined kingdom of Hyrule in this stunning open-air adventure."
    },
    {
        "title": "Super Mario 64",
        "platforms": [
            "Nintendo 64"
        ],
        "genres": "platformer",
        "image": "https://upload.wikimedia.org/wikipedia/en/6/6a/Super_Mario_64_box_cover.jpg",
        "summary": "Mario is invited by Princess Peach to her castle, but once he arrives he finds out that Bowser has kidnapped her. Mario has to overcome many challenges and collect Power Stars hidden in the castle's paintings and walls to defeat Bowser and rescue Peach in this seminal 3D platformer."
    },
    {
        "title": "The Witcher 3: The Wild Hunt",
        "platforms": [
            "Microsoft Windows",
            "Playstation 4",
            "Xbox One"
        ],
        "genres": "Action role-playing",
        "image": "https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg",
        "summary": "The Witcher: Wild Hunt is a story-driven, next-generation open world role-playing game set in a visually stunning fantasy universe full of meaningful choices and impactful consequences. In The Witcher you play as the professional monster hunter, Geralt of Rivia, tasked with finding a child of prophecy in a vast open world rich with merchant cities, viking pirate islands, dangerous mountain passes, and forgotten caverns to explore."
    },
    {
        "title": "Pokemon Emerald",
        "platforms": [
            "Game Boy Advance"
        ],
        "genres": "Role-playing",
        "image": "https://upload.wikimedia.org/wikipedia/en/f/f7/PokemonEmeraldBox.jpg",
        "summary": "Pokémon Emerald Version is a sister game to Pokémon Ruby and Sapphire. Emerald Version provided the main storyline with more depth and length, as well as making small aesthetic changes to the world and adding unique animations for each Pokémon."
    },
    {
        "title": "Toejam and Earl",
        "platforms": [
            "Sega Genesis"
        ],
        "genres": "Action, dungeon crawler, roguelike",
        "image": "https://upload.wikimedia.org/wikipedia/en/c/c7/ToeJam_%26_Earl.png",
        "summary": "ToeJam & Earl is an early 1990s dungeon crawler for the Sega Genesis/MegaDrive. The game features two alien rappers, who have crash-landed on Earth and parodies 1980s urban culture. The game’s design was heavily influenced by the role-playing video game Rogue, and took from it such features as the random generation of levels and items. Played from a 2D-top-down perspective the game contains both single-player and two-player cooperative modes. The latter displays a single screen when both characters are near each other, but splits it apart when they are not. Playing the game with two players reveals dialogue and jokes between the characters not heard in the single player game."
    },
    {
        "title": "Sly 2 Band of Thieves",
        "platforms": [
            "Playstation 2",
            "Playstation 3",
            "Playstation Vita"
        ],
        "genres": "Platform, stealth, action-adventure",
        "image": "https://upload.wikimedia.org/wikipedia/en/b/b8/Sly_2_-_Band_of_Thieves_Coverart.png",
        "summary": "The sequel to Sly Cooper delivers the same crime detective style of presentation, borrowing heavily from movies, novels and comic books to create a beautiful, highly animated game. The story takes place two years after Sly Cooper and the Thievius Raccoonus. In the first game, Sly was becoming a professional thief, but in Band of Thieves, he is a professional thief -- so he retains all of the moves from the first game. He also earns new moves and gains different items to assist him in his dark craft. The biggest upgrade comes in form of the new multi-character gameplay. Players might start a level as Sly, and then after completing a particular task, players switch to Bentley, and Murray, respectively."
    }
]

// db.Game
//     .remove({})
//     .then(() => db.Game.collection.insertMany(gameSeed))
//     .then(data => {
//         console.log(data.result.n + " records inserted!");
//         process.exit(0);
//     })
//     .catch(err => {
//         console.error(err);
//         process.exit(1);
//     });
