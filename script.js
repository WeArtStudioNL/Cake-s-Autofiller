//All items in Torn
const itemarray = { "Hammer": 1, "Baseball Bat": 2, "Crowbar": 3, "Knuckle Dusters": 4, "Pen Knife": 5, "Kitchen Knife": 6, "Dagger": 7, "Axe": 8, "Scimitar": 9, "Chainsaw": 10, "Samurai Sword": 11, "Glock 17": 12, "Raven MP25": 13, "Ruger 22/45": 14, "Beretta M9": 15, "USP": 16, "Beretta 92FS": 17, "Fiveseven": 18, "Magnum": 19, "Desert Eagle": 20, "Dual 92G Berettas": 21, "Sawed-Off Shotgun": 22, "Benelli M1 Tactical": 23, "MP5 Navy": 24, "P90": 25, "AK-47": 26, "M4A1 Colt Carbine": 27, "Benelli M4 Super": 28, "M16 A2 Rifle": 29, "Steyr AUG": 30, "M249 SAW": 31, "Leather Vest": 32, "Police Vest": 33, "Bulletproof Vest": 34, "Box of Chocolate Bars": 35, "Big Box of Chocolate Bars": 36, "Bag of Bon Bons": 37, "Box of Bon Bons": 38, "Box of Extra Strong Mints": 39, "Pack of Music CDs": 40, "DVD Player": 41, "MP3 Player": 42, "CD Player": 43, "Pack of Blank CDs : 100": 44, "Hard Drive": 45, "Tank Top": 46, "Trainers": 47, "Jacket": 48, "Full Body Armor": 49, "Outer Tactical Vest": 50, "Plain Silver Ring": 51, "Sapphire Ring": 52, "Gold Ring": 53, "Diamond Ring": 54, "Pearl Necklace": 55, "Silver Necklace": 56, "Gold Necklace": 57, "Plastic Watch": 58, "Stainless Steel Watch": 59, "Gold Watch": 60, "Personal Computer": 61, "Microwave": 62, "Minigun": 63, "Pack of Cuban Cigars": 64, "Television": 65, "Morphine": 66, "First Aid Kit": 67, "Small First Aid Kit": 68, "Simple Virus": 69, "Polymorphic Virus": 70, "Tunneling Virus": 71, "Armored Virus": 72, "Stealth Virus": 73, "Santa Hat '04": 74, "Christmas Cracker '04": 75, "Snow Cannon": 76, "Toyota MR2": 77, "Honda NSX": 78, "Audi TT Quattro": 79, "BMW M5": 80, "BMW Z8": 81, "Chevrolet Corvette Z06": 82, "Dodge Charger": 83, "Pontiac Firebird": 84, "Ford GT40": 85, "Hummer H3": 86, "Audi S4": 87, "Honda Integra R": 88, "Honda Accord": 89, "Honda Civic": 90, "Volkswagen Beetle": 91, "Chevrolet Cavalier": 92, "Ford Mustang": 93, "Reliant Robin": 94, "Holden SS": 95, "Coat Hanger": 96, "Bunch of Flowers": 97, "Neutrilux 2000": 98, "Springfield 1911": 99, "Egg Propelled Launcher": 100, "Bunny Suit": 101, "Chocolate Egg '05": 102, "Firewalk Virus": 103, "Game Console": 104, "Xbox": 105, "Parachute": 106, "Trench Coat": 107, "9mm Uzi": 108, "RPG Launcher": 109, "Leather Bullwhip": 110, "Ninja Claws": 111, "Test Trophy": 112, "Pet Rock": 113, "Non-Anon Doll": 114, "Poker Doll": 115, "Yoda Figurine": 116, "Trojan Horse": 117, "Evil Doll": 118, "Rubber Ducky of Doom": 119, "Teppic Bear": 120, "RockerHead Doll": 121, "Mouser Doll": 122, "Elite Action Man": 123, "Toy Reactor": 124, "Royal Doll": 125, "Blue Dragon": 126, "China Tea Set": 127, "Mufasa Toy": 128, "Dozen Roses": 129, "Skanky Doll": 130, "Lego Hurin": 131, "Mystical Sphere": 132, "10 Ton Pacifier": 133, "Horse": 134, "Uriel's Speakers": 135, "Strife Clown": 136, "Locked Teddy": 137, "Riddle's Bat": 138, "Soup Nazi Doll": 139, "Pouncer Doll": 140, "Spammer Doll": 141, "Cookie Jar": 142, "Vanity Mirror": 143, "Banana Phone": 144, "Xbox 360": 145, "Yasukuni Sword": 146, "Rusty Sword": 147, "Dance Toy": 148, "Lucky Dime": 149, "Crystal Carousel": 150, "Pixie Sticks": 151, "Ice Sculpture": 152, "Case of Whiskey": 153, "Laptop": 154, "Purple Frog Doll": 155, "Skeleton Key": 156, "Patriot Whip": 157, "Statue Of Aeolus": 158, "Bolt Cutters": 159, "Photographs": 160, "Black Unicorn": 161, "WarPaint Kit": 162, "Official Ninja Kit": 163, "Leukaemia Teddy Bear": 164, "Chocobo Flute": 165, "Annoying Man": 166, "Article on Crime": 167, "Unknown": 168, "Barbie Doll": 169, "Wand of Destruction": 170, "Jack-O-Lantern '05": 171, "Gas Can": 172, "Butterfly Knife": 173, "XM8 Rifle": 174, "Taser": 175, "Chain Mail": 176, "Cobra Derringer": 177, "Flak Jacket": 178, "Birthday Cake '05": 179, "Bottle of Beer": 180, "Bottle of Champagne": 181, "Soap on a Rope": 182, "Single Red Rose": 183, "Bunch of Black Roses": 184, "Bunch of Balloons '05": 185, "Sheep Plushie": 186, "Teddy Bear Plushie": 187, "Cracked Crystal Ball": 188, "S&W Revolver": 189, "C4 Explosive": 190, "Memory Locket": 191, "Rainbow Stud Earring": 192, "Hamster Toy": 193, "Snowflake '05": 194, "Christmas Tree '05": 195, "Cannabis": 196, "Ecstasy": 197, "Ketamine": 198, "LSD": 199, "Opium": 200, "PCP": 201, "Mr Torn Crown '07": 202, "Shrooms": 203, "Speed": 204, "Vicodin": 205, "Xanax": 206, "Ms Torn Crown '07": 207, "Unknown": 208, "Box of Sweet Hearts": 209, "Bag of Chocolate Kisses": 210, "Crazy Cow": 211, "Legend's Urn": 212, "Dreamcatcher": 213, "Brutus Keychain": 214, "Kitten Plushie": 215, "Single White Rose": 216, "Claymore Sword": 217, "Crossbow": 218, "Enfield SA-80": 219, "Grenade": 220, "Stick Grenade": 221, "Flash Grenade": 222, "Jackhammer": 223, "Swiss Army Knife": 224, "Mag 7": 225, "Smoke Grenade": 226, "Spear": 227, "Vektor CR-21": 228, "Claymore Mine": 229, "Flare Gun": 230, "Heckler & Koch SL8": 231, "SIG 550": 232, "BT MP9": 233, "Chain Whip": 234, "Wooden Nunchakus": 235, "Kama": 236, "Kodachi": 237, "Sai": 238, "Ninja Star": 239, "Type 98 Anti Tank": 240, "Bushmaster Carbon 15": 241, "HEG": 242, "Taurus": 243, "Blowgun": 244, "Bo Staff": 245, "Fireworks": 246, "Katana": 247, "Qsz-92": 248, "SKS Carbine": 249, "Twin Tiger Hooks": 250, "Wushu Double Axes": 251, "Ithaca 37": 252, "Lorcin 380": 253, "S&W M29": 254, "Flamethrower": 255, "Tear Gas": 256, "Throwing Knife": 257, "Jaguar Plushie": 258, "Mayan Statue": 259, "Dahlia": 260, "Wolverine Plushie": 261, "Hockey Stick": 262, "Crocus": 263, "Orchid": 264, "Pele Charm": 265, "Nessie Plushie": 266, "Heather": 267, "Red Fox Plushie": 268, "Monkey Plushie": 269, "Soccer Ball": 270, "Ceibo Flower": 271, "Edelweiss": 272, "Chamois Plushie": 273, "Panda Plushie": 274, "Jade Buddha": 275, "Peony": 276, "Cherry Blossom": 277, "Kabuki Mask": 278, "Maneki Neko": 279, "Elephant Statue": 280, "Lion Plushie": 281, "African Violet": 282, "Donator Pack": 283, "Bronze Paint Brush": 284, "Silver Paint Brush": 285, "Gold Paint Brush": 286, "Pand0ra's Box": 287, "Mr Brownstone Doll": 288, "Dual Axes": 289, "Dual Hammers": 290, "Dual Scimitars": 291, "Dual Samurai Swords": 292, "Japanese/English Dictionary": 293, "Bottle of Sake": 294, "Oriental Log": 295, "Oriental Log Translation": 296, "YouYou Yo Yo": 297, "Monkey Cuffs": 298, "Jester's Cap": 299, "Gibal's Dragonfly": 300, "Green Ornament": 301, "Purple Ornament": 302, "Blue Ornament": 303, "Purple Bell": 304, "Mistletoe": 305, "Mini Sleigh": 306, "Snowman": 307, "Christmas Gnome": 308, "Gingerbread House": 309, "Lollipop": 310, "Mardi Gras Beads": 311, "Devil Toy": 312, "Cookie Launcher": 313, "Cursed Moon Pendant": 314, "Apartment Blueprint": 315, "Semi-Detached House Blueprint": 316, "Detached House Blueprint": 317, "Beach House Blueprint": 318, "Chalet Blueprint": 319, "Villa Blueprint": 320, "Penthouse Blueprint": 321, "Mansion Blueprint": 322, "Ranch Blueprint": 323, "Palace Blueprint": 324, "Castle Blueprint": 325, "Printing Paper": 326, "Blank Tokens": 327, "Blank Credit Cards": 328, "Skateboard": 329, "Boxing Gloves": 330, "Dumbbells": 331, "Combat Vest": 332, "Liquid Body Armor": 333, "Flexible Body Armor": 334, "Stick of Dynamite": 335, "Cesium-137": 336, "Dirty Bomb": 337, "Sh0rty's Surfboard": 338, "Puzzle Piece": 339, "Hunny Pot": 340, "Seductive Stethoscope": 341, "Dollar Bill Collectible": 342, "Backstage Pass": 343, "Chemi's Magic Potion": 344, "Pack of Trojans": 345, "Pair of High Heels": 346, "Thong": 347, "Hazmat Suit": 348, "Flea Collar": 349, "Dunkin's Donut": 350, "Amazon Doll": 351, "BBQ Smoker": 352, "Bag of Cheetos": 353, "Motorbike": 354, "Citrus Squeezer": 355, "Superman Shades": 356, "Kevlar Helmet": 357, "Raw Ivory": 358, "Fine Chisel": 359, "Ivory Walking Cane": 360, "Neumune Tablet": 361, "Mr Torn Crown '08": 362, "Ms Torn Crown '08": 363, "Box of Grenades": 364, "Box of Medical Supplies": 365, "Erotic DVD": 366, "Feathery Hotel Coupon": 367, "Lawyer Business Card": 368, "Lottery Voucher": 369, "Drug Pack": 370, "Dark Doll": 371, "Empty Box": 372, "Parcel": 373, "Birthday Present": 374, "Present": 375, "Christmas Present": 376, "Birthday Wrapping Paper": 377, "Generic Wrapping Paper": 378, "Christmas Wrapping Paper": 379, "Small Explosive Device": 380, "Gold Laptop": 381, "Gold Plated AK-47": 382, "Platinum PDA": 383, "Camel Plushie": 384, "Tribulus Omanense": 385, "Sports Sneakers": 386, "Handbag": 387, "Pink Mac-10": 388, "Mr Torn Crown '09": 389, "Ms Torn Crown '09": 390, "Macana": 391, "Pepper Spray": 392, "Slingshot": 393, "Brick": 394, "Metal Nunchakus": 395, "Business Class Ticket": 396, "Flail": 397, "SIG 552": 398, "ArmaLite M-15A4": 399, "Guandao": 400, "Lead Pipe": 401, "Ice Pick": 402, "Box of Tissues": 403, "Bandana": 404, "Loaf of Bread": 405, "Afro Comb": 406, "Compass": 407, "Sextant": 408, "Yucca Plant": 409, "Fire Hydrant": 410, "Model Space Ship": 411, "Sports Shades": 412, "Mountie Hat": 413, "Proda Sunglasses": 414, "Ship in a Bottle": 415, "Paper Weight": 416, "RS232 Cable": 417, "Tailors Dummy": 418, "Small Suitcase": 419, "Medium Suitcase": 420, "Large Suitcase": 421, "Vanity Hand Mirror": 422, "Poker Chip": 423, "Rabbit Foot": 424, "Voodoo Doll": 425, "Bottle of Tequila": 426, "Sumo Doll": 427, "Casino Pass": 428, "Chopsticks": 429, "Coconut Bra": 430, "Dart Board": 431, "Crazy Straw": 432, "Sensu": 433, "Yakitori Lantern": 434, "Dozen White Roses": 435, "Snowboard": 436, "Glow Stick": 437, "Cricket Bat": 438, "Frying Pan": 439, "Pillow": 440, "Khinkeh P0rnStar Doll": 441, "Blow-Up Doll": 442, "Strawberry Milkshake": 443, "Breadfan Doll": 444, "Chaos Man": 445, "Karate Man": 446, "Burmese Flag": 447, "Bl0ndie's Dictionary": 448, "Hydroponic Grow Tent": 449, "Leopard Coin": 450, "Florin Coin": 451, "Gold Noble Coin": 452, "Ganesha Sculpture": 453, "Vairocana Buddha Sculpture": 454, "Quran Script : Ibn Masud": 455, "Quran Script : Ubay Ibn Kab": 456, "Quran Script : Ali": 457, "Shabti Sculpture": 458, "Egyptian Amulet": 459, "White Senet Pawn": 460, "Black Senet Pawn": 461, "Senet Board": 462, "Epinephrine": 463, "Melatonin": 464, "Serotonin": 465, "Snow Globe '09": 466, "Dancing Santa Claus '09": 467, "Christmas Stocking '09": 468, "Santa's Elf '09": 469, "Christmas Card '09": 470, "Admin Portrait '09": 471, "Blue Easter Egg": 472, "Green Easter Egg": 473, "Red Easter Egg": 474, "Yellow Easter Egg": 475, "White Easter Egg": 476, "Black Easter Egg": 477, "Gold Easter Egg": 478, "Metal Dog Tag": 479, "Bronze Dog Tag": 480, "Silver Dog Tag": 481, "Gold Dog Tag": 482, "MP5k": 483, "AK74U": 484, "Skorpion": 485, "TMP": 486, "Thompson": 487, "MP 40": 488, "Luger": 489, "Blunderbuss": 490, "Zombie Brain": 491, "Human Head": 492, "Medal of Honor": 493, "Citroen Saxo": 494, "Classic Mini": 495, "Fiat Punto": 496, "Nissan Micra": 497, "Peugeot 106": 498, "Renault Clio": 499, "Vauxhall Corsa": 500, "Volvo 850": 501, "Alfa Romeo 156": 502, "BMW X5": 503, "Seat Leon Cupra": 504, "Vauxhall Astra GSI": 505, "Volkswagen Golf GTI": 506, "Audi S3": 507, "Ford Focus RS": 508, "Honda S2000": 509, "Mini Cooper S": 510, "Sierra Cosworth": 511, "Lotus Exige": 512, "Mitsubishi Evo X": 513, "Porsche 911 GT3": 514, "Subaru Impreza STI": 515, "TVR Sagaris": 516, "Aston Martin One-77": 517, "Audi R8": 518, "Bugatti Veyron": 519, "Ferrari 458": 520, "Lamborghini Gallardo": 521, "Lexus LFA": 522, "Mercedes SLR": 523, "Nissan GT-R": 524, "Mr Torn Crown '10": 525, "Ms Torn Crown '10": 526, "Bag of Candy Kisses": 527, "Bag of Tootsie Rolls": 528, "Bag of Chocolate Truffles": 529, "Can of Munster": 530, "Bottle of Pumpkin Brew": 531, "Can of Red Cow": 532, "Can of Taurine Elite": 533, "Witch's Cauldron": 534, "Electronic Pumpkin": 535, "Jack O Lantern Lamp": 536, "Spooky Paper Weight": 537, "Medieval Helmet": 538, "Blood Spattered Sickle": 539, "Cauldron": 540, "Bottle of Stinky Swamp Punch": 541, "Bottle of Wicked Witch": 542, "Deputy Star": 543, "Wind Proof Lighter": 544, "Dual TMPs": 545, "Dual Bushmasters": 546, "Dual MP5s": 547, "Dual P90s": 548, "Dual Uzis": 549, "Bottle of Kandy Kane": 550, "Bottle of Minty Mayhem": 551, "Bottle of Mistletoe Madness": 552, "Can of Santa Shooters": 553, "Can of Rockstar Rudolph": 554, "Can of X-MASS": 555, "Bag of Reindeer Droppings": 556, "Advent Calendar": 557, "Santa's Snot": 558, "Polar Bear Toy": 559, "Fruitcake": 560, "Book of Carols": 561, "Sweater": 562, "Gift Card": 563, "Glasses": 564, "High-Speed Drive": 565, "Mountain Bike": 566, "Cut-Throat Razor": 567, "Slim Crowbar": 568, "Balaclava": 569, "Advanced Driving Manual": 570, "Ergonomic Keyboard": 571, "Tracking Device": 572, "Screwdriver": 573, "Fanny Pack": 574, "Tumble Dryer": 575, "Chloroform": 576, "Heavy Duty Padlock": 577, "Duct Tape": 578, "Wireless Dongle": 579, "Horse's Head": 580, "Book": 581, "Tin Foil Hat": 582, "Brown Easter Egg": 583, "Orange Easter Egg": 584, "Pink Easter Egg": 585, "Jawbreaker": 586, "Bag of Sherbet": 587, "Goodie Bag": 588, "Undefined": 589, "Undefined 2": 590, "Undefined 3": 591, "Undefined 4": 592, "Mr Torn Crown '11": 593, "Ms Torn Crown '11": 594, "Pile of Vomit": 595, "Rusty Dog Tag": 596, "Gold Nugget": 597, "Witch's Hat": 598, "Golden Broomstick": 599, "Devil's Pitchfork": 600, "Christmas Lights": 601, "Gingerbread Man": 602, "Golden Wreath": 603, "Pair of Ice Skates": 604, "Diamond Icicle": 605, "Santa Boots": 606, "Santa Gloves": 607, "Santa Hat": 608, "Santa Jacket": 609, "Santa Trousers": 610, "Snowball": 611, "Tavor TAR-21": 612, "Harpoon": 613, "Diamond Bladed Knife": 614, "Naval Cutlass": 615, "Trout": 616, "Banana Orchid": 617, "Stingray Plushie": 618, "Steel Drum": 619, "Nodding Turtle": 620, "Snorkel": 621, "Flippers": 622, "Speedo": 623, "Bikini": 624, "Wetsuit": 625, "Diving Gloves": 626, "Dog Poop": 627, "Stink Bombs": 628, "Toilet Paper": 629, "Mr Torn Crown '12": 630, "Ms Torn Crown '12": 631, "Petrified Humerus": 632, "Latex Gloves": 633, "Bag of Bloody Eyeballs": 634, "Straitjacket": 635, "Cinnamon Ornament": 636, "Christmas Express": 637, "Bottle of Christmas Cocktail": 638, "Golden Candy Cane": 639, "Kevlar Gloves": 640, "WWII Helmet": 641, "Motorcycle Helmet": 642, "Construction Helmet": 643, "Welding Helmet": 644, "Safety Boots": 645, "Hiking Boots": 646, "Leather Helmet": 647, "Leather Pants": 648, "Leather Boots": 649, "Leather Gloves": 650, "Combat Helmet": 651, "Combat Pants": 652, "Combat Boots": 653, "Combat Gloves": 654, "Riot Helmet": 655, "Riot Body": 656, "Riot Pants": 657, "Riot Boots": 658, "Riot Gloves": 659, "Dune Helmet": 660, "Dune Vest": 661, "Dune Pants": 662, "Dune Boots": 663, "Dune Gloves": 664, "Assault Helmet": 665, "Assault Body": 666, "Assault Pants": 667, "Assault Boots": 668, "Assault Gloves": 669, "Delta Gas Mask": 670, "Delta Body": 671, "Delta Pants": 672, "Delta Boots": 673, "Delta Gloves": 674, "Marauder Face Mask": 675, "Marauder Body": 676, "Marauder Pants": 677, "Marauder Boots": 678, "Marauder Gloves": 679, "EOD Helmet": 680, "EOD Apron": 681, "EOD Pants": 682, "EOD Boots": 683, "EOD Gloves": 684, "Torn Bible": 685, "Friendly Bot Guide": 686, "Egotistical Bear": 687, "Brewery Key": 688, "Signed Jersey": 689, "Mafia Kit": 690, "Octopus Toy": 691, "Bear Skin Rug": 692, "Tractor Toy": 693, "Mr Torn Crown '13": 694, "Ms Torn Crown '13": 695, "Piece of Cake": 696, "Rotten Eggs": 697, "Peg Leg": 698, "Antidote": 699, "Christmas Angel": 700, "Eggnog": 701, "Sprig of Holly": 702, "Festive Socks": 703, "Respo Hoodie": 704, "Staff Haxx Button": 705, "Birthday Cake '14": 706, "Lump of Coal": 707, "Gold Ribbon": 708, "Silver Ribbon": 709, "Bronze Ribbon": 710, "Coin : Factions": 711, "Coin : Casino": 712, "Coin : Education": 713, "Coin : Hospital": 714, "Coin : Jail": 715, "Coin : Travel Agency": 716, "Coin : Companies": 717, "Coin : Stock Exchange": 718, "Coin : Church": 719, "Coin : Auction House": 720, "Coin : Race Track": 721, "Coin : Museum": 722, "Coin : Drugs": 723, "Coin : Dump": 724, "Coin : Estate Agents": 725, "Scrooge's Top Hat": 726, "Scrooge's Topcoat": 727, "Scrooge's Trousers": 728, "Scrooge's Boots": 729, "Scrooge's Gloves": 730, "Empty Blood Bag": 731, "Blood Bag : A+": 732, "Blood Bag : A-": 733, "Blood Bag : B+": 734, "Blood Bag : B-": 735, "Blood Bag : AB+": 736, "Blood Bag : AB-": 737, "Blood Bag : O+": 738, "Blood Bag : O-": 739, "Mr Torn Crown": 740, "Ms Torn Crown": 741, "Molotov Cocktail": 742, "Christmas Sweater '15": 743, "Book : Brawn Over Brains": 744, "Book : Time Is In The Mind": 745, "Book : Keeping Your Face Handsome": 746, "Book : A Job For Your Hands": 747, "Book : Working 9 Til 5": 748, "Book : Making Friends,Enemies,And Cakes": 749, "Book : High School For Adults": 750, "Book : Milk Yourself Sober": 751, "Book : Fight Like An Asshole": 752, "Book : Mind Over Matter": 753, "Book : No Shame No Pain": 754, "Book : Run Like The Wind": 755, "Book : Weaseling Out Of Trouble": 756, "Book : Get Hard Or Go Home": 757, "Book : Gym Grunting - Shouting To Success": 758, "Book : Self Defense In The Workplace": 759, "Book : Speed 3 - The Rejected Script": 760, "Book : Limbo Lovers 101": 761, "Book : The Hamburglar's Guide To Crime": 762, "Book : What Are Old Folk Good For Anyway?": 763, "Book : Medical Degree Schmedical Degree": 764, "Book : No More Soap On A Rope": 765, "Book : Mailing Yourself Abroad": 766, "Book : Smuggling For Beginners": 767, "Book : Stealthy Stealing of Underwear": 768, "Book : Shawshank Sure Ain't For Me!": 769, "Book : Ignorance Is Bliss": 770, "Book : Winking To Win": 771, "Book : Finders Keepers": 772, "Book : Hot Turkey": 773, "Book : Higher Daddy,Higher!": 774, "Book : The Real Dutch Courage": 775, "Book : Because I'm Happy - The Pharrell Story": 776, "Book : No More Sick Days": 777, "Book : Duke - My Story": 778, "Book : Self Control Is For Losers": 779, "Book : Going Back For More": 780, "Book : Get Drunk And Lose Dignity": 781, "Book : Fuelling Your Way To Failure": 782, "Book : Yes Please Diabetes": 783, "Book : Ugly Energy": 784, "Book : Memories And Mammaries": 785, "Book : Brown-nosing The Boss": 786, "Book : Running Away From Trouble": 787, "Certificate of Awesome": 788, "Certificate of Lame": 789, "Plastic Sword": 790, "Mediocre T-Shirt": 791, "Penelope": 792, "Cake Frosting": 793, "Lock Picking Kit": 794, "Special Fruitcake": 795, "Felovax": 796, "Zylkene": 797, "Duke's Safe": 798, "Duke's Selfies": 799, "Duke's Poetry": 800, "Duke's Dog's Ashes": 801, "Duke's Will": 802, "Duke's Gimp Mask": 803, "Duke's Herpes Medication": 804, "Duke's Hammer": 805, "Old Lady Mask": 806, "Exotic Gentleman Mask": 807, "Ginger Kid Mask": 808, "Young Lady Mask": 809, "Moustache Man Mask": 810, "Scarred Man Mask": 811, "Psycho Clown Mask": 812, "Nun Mask": 813, "Tyrosine": 814, "Keg of Beer": 815, "Glass of Beer": 816, "Six Pack of Alcohol": 817, "Six Pack of Energy Drink": 818, "Rosary Beads": 819, "Piggy Bank": 820, "Empty Vial": 821, "Vial of Blood": 822, "Vial of Urine": 823, "Vial of Saliva": 824, "Questionnaire": 825, "Agreement": 826, "Perceptron : Calibrator": 827, "Donald Trump Mask '16": 828, "Yellow Snowman '16": 829, "Nock Gun": 830, "Beretta Pico": 831, "Riding Crop": 832, "Sand": 833, "Sweatpants": 834, "String Vest": 835, "Black Oxfords": 836, "Rheinmetall MG 3": 837, "Homemade Pocket Shotgun": 838, "Madball": 839, "Nail Bomb": 840, "Classic Fedora": 841, "Pinstripe Suit Trousers": 842, "Duster": 843, "Tranquilizer Gun": 844, "Bolt Gun": 845, "Scalpel": 846, "Nerve Gas": 847, "Kevlar Lab Coat": 848, "Loupes": 849, "Sledgehammer": 850, "Wifebeater": 851, "Metal Detector": 852, "Graveyard Key": 853, "Questionnaire : Completed": 854, "Agreement : Signed": 855, "Spray Can : Black": 856, "Spray Can : Red": 857, "Spray Can : Pink": 858, "Spray Can : Purple": 859, "Spray Can : Blue": 860, "Spray Can : Green": 861, "Spray Can : Yellow": 862, "Spray Can : Orange": 863, "Salt Shaker": 864, "Poison Mistletoe": 865, "Santa's List '17": 866, "Soapbox": 867, "Turkey Baster": 868, "Elon Musk Mask '17": 869, "Love Juice": 870, "Bug Swatter": 871, "Nothing": 872, "Bottle of Green Stout": 873, "Prototype": 874, "Rotten Apple": 875, "Festering Chicken": 876, "Mouldy Pizza": 877, "Smelly Cheese": 878, "Sour Milk": 879, "Stale Bread": 880, "Spoiled Fish": 881, "Insurance Policy": 882, "Bank Statement": 883, "Car Battery": 884, "Scrap Metal": 885, "Torn City Times": 886, "Magazine": 887, "Umbrella": 888, "Travel Mug": 889, "Headphones": 890, "Undefined": 891, "Mix CD": 892, "Lost and Found Office Key": 893, "Cosmetics Case": 894, "Phone Card": 895, "Subway Pass": 896, "Bottle Cap": 897, "Silver Coin": 898, "Silver Bead": 899, "Lucky Quarter": 900, "Daffodil": 901, "Bunch of Carnations": 902, "White Lily": 903, "Funeral Wreath": 904, "Car Keys": 905, "Handkerchief": 906, "Candle": 907, "Paper Bag": 908, "Tin Can": 909, "Betting Slip": 910, "Fidget Spinner": 911, "Majestic Moose": 912, "Lego Wonder Woman": 913, "CR7 Doll": 914, "Stretch Armstrong Doll": 915, "Beef Femur": 916, "Snake's Fang": 917, "Icey Igloo": 918, "Federal Jail Key": 919, "Halloween Basket : Spooky": 920, "Michael Myers Mask '18": 921, "Toast Jesus '18": 922, "Cheesus '18": 923, "Bottle of Christmas Spirit": 924, "Scammer in the Slammer '18": 925, "Gronch Mask '18": 926, "Baseball Cap": 927, "Bermudas": 928, "Blouse": 929, "Boob Tube": 930, "Bush Hat": 931, "Camisole": 932, "Capri Pants": 933, "Cardigan": 934, "Cork Hat": 935, "Crop Top": 936, "Fisherman Hat": 937, "Gym Shorts": 938, "Halterneck": 939, "Raincoat": 940, "Pantyhose": 941, "Pencil Skirt": 942, "Peplum Top": 943, "Polo Shirt": 944, "Poncho": 945, "Puffer Vest": 946, "Mackintosh": 947, "Shorts": 948, "Skirt": 949, "Travel Socks": 950, "Turtleneck": 951, "Yoga Pants": 952, "Bronze Racing Trophy": 953, "Silver Racing Trophy": 954, "Gold Racing Trophy": 955, "Pack of Blank CDs : 250": 956, "Pack of Blank CDs : 50": 957, "Chest Harness": 958, "Choker": 959, "Fishnet Stockings": 960, "Knee-high Boots": 961, "Lingerie": 962, "Mankini": 963, "Mini Skirt": 964, "Nipple Tassels": 965, "Bowler Hat": 966, "Fitted Shirt": 967, "Bow Tie": 968, "Neck Tie": 969, "Waistcoat": 970, "Blazer": 971, "Suit Trousers": 972, "Derby Shoes": 973, "Smoking Jacket": 974, "Monocle": 975, "Bronze Microphone": 976, "Silver Microphone": 977, "Gold Microphone": 978, "Paint Mask": 979, "Ladder": 980, "Wire Cutters": 981, "Ripped Jeans": 982, "Bandit Mask": 983, "Bottle of Moonshine": 984, "Can of Goose Juice": 985, "Can of Damp Valley": 986, "Can of Crocozade": 987, "Fur Coat": 988, "Fur Scarf": 989, "Fur Hat": 990, "Platform Shoes": 991, "Silver Flats": 992, "Crystal Bracelet": 993, "Cocktail Ring": 994, "Sun Hat": 995, "Square Sunglasses": 996, "Statement Necklace": 997, "Floral Dress": 998, "Shrug": 1001, "Eye Patch": 1002, "Halloween Basket : Creepy": 1003, "Halloween Basket : Freaky": 1004, "Halloween Basket : Frightful": 1005, "Halloween Basket : Haunting": 1006, "Halloween Basket : Shocking": 1007, "Halloween Basket : Terrifying": 1008, "Halloween Basket : Horrifying": 1009, "Halloween Basket : Petrifying": 1010, "Halloween Basket : Nightmarish": 1011, "Blood Bag : Irradiated": 1012, "Jigsaw Mask '19": 1013, "Reading Glasses": 1014, "Chinos": 1015, "Collared Shawl": 1016, "Pleated Skirt": 1017, "Flip Flops": 1018, "Bingo Visor": 1019, "Cover-ups": 1020, "Sandals": 1021, "Golf Socks": 1022, "Flat Cap": 1023, "Slippers": 1024, "Bathrobe": 1025, "Party Hat '19": 1026, "Badge : 15th Anniversary": 1027, "Birthday Cupcake": 1028, "Strippogram Voucher": 1029, "Dong : Thomas": 1030, "Dong : Greg": 1031, "Dong : Effy": 1032, "Dong : Holly": 1033, "Dong : Jeremy": 1034, "Anniversary Present": 1035, "Greta Mask '19": 1036, "Anatoly Mask '19": 1037, "Santa Beard": 1038, "Bag of Humbugs": 1039, "Christmas Cracker": 1040, "Special Snowflake": 1041, "Concussion Grenade": 1042, "Paper Crown : Green": 1043, "Paper Crown : Yellow": 1044, "Paper Crown : Red": 1045, "Paper Crown : Blue": 1046, "Denim Shirt": 1047, "Denim Vest": 1048, "Denim Jacket": 1049, "Denim Jeans": 1050, "Denim Shoes": 1051, "Denim Cap": 1052, "Bread Knife": 1053, "Semtex": 1054, "Poison Umbrella": 1055, "Millwall Brick": 1056, "Gentleman Cache": 1057, "Gold Chain": 1058, "Snapback Hat": 1059, "Saggy Pants": 1060, "Oversized Shirt": 1061, "Basketball Shirt": 1062, "Parachute Pants": 1063, "Tube Dress": 1064, "Gold Sneakers": 1065, "Shutter Shades": 1066, "Silver Hoodie": 1067, "Bucket Hat": 1068, "Puffer Jacket": 1069, "Durag": 1070, "Onesie": 1071, "Baseball Jacket": 1072, "Braces": 1073, "Panama Hat": 1074, "Pipe": 1075, "Shoulder Sweater": 1076, "Sports Jacket": 1077, "Old Wallet": 1078, "Cardholder": 1079, "Billfold": 1080, "Coin Purse": 1081, "Zip Wallet": 1082, "Clutch": 1083, "Credit Card": 1084, "Lipstick": 1085, "License": 1086, "Tampon": 1087, "Receipt": 1088, "Family Photo": 1089, "Lint": 1090, "Handcuffs": 1091, "Lubricant": 1092, "Hit Contract": 1093, "Syringe": 1094, "Spoon": 1095, "Cell Phone": 1096, "Assless Chaps": 1097, "Opera Gloves": 1098, "Booty Shorts": 1099, "Collar": 1100, "Ball Gag": 1101, "Blindfold": 1102, "Maid Uniform": 1103, "Maid Hat": 1104, "Ball Gown": 1105, "Fascinator Hat": 1106, "Wedding Dress": 1107, "Wedding Veil": 1108, "Head Scarf": 1109, "Nightgown": 1110, "Pullover": 1111, "Elegant Cache": 1112, "Naughty Cache": 1113, "Elderly Cache": 1114, "Denim Cache": 1115, "Wannabe Cache": 1116, "Cutesy Cache": 1117, "Armor Cache": 1118, "Melee Cache": 1119, "Small Arms Cache": 1120, "Medium Arms Cache": 1121, "Heavy Arms Cache": 1122, "Spy Camera": 1123, "Cloning Device": 1124, "Card Skimmer": 1125, "Tutu": 1126, "Knee Socks": 1127, "Kitty Shoes": 1128, "Cat Ears": 1129, "Bunny Ears": 1130, "Puppy Ears": 1131, "Heart Sunglasses": 1132, "Hair Bow": 1133, "Lolita Dress": 1134, "Unicorn Horn": 1135, "Check Skirt": 1136, "Polka Dot Dress": 1137, "Ballet Shoes": 1138, "Dungarees": 1139, "Tights": 1140, "Pennywise Mask '20": 1141, "Tiger King Mask '20": 1142, "Medical Mask": 1143, "Chin Diaper": 1144, "Tighty Whities": 1145, "Tangerine": 1146, "Helmet of Justice": 1147, "Broken Bauble": 1148, "Purple Easter Egg": 1149, "Ski Mask": 1150, "Bunny Nose": 1151, "SMAW Launcher": 1152, "China Lake": 1153, "Milkor MGL": 1154, "PKM": 1155, "Negev NG-5": 1156, "Stoner 96": 1157, "Meat Hook": 1158, "Cleaver": 1159, "Arca Fortunae": 1176, "Sandworm Mask '21": 1177 }
const shadowDOM = document.head;
let itemstocheck = "a";
var updatedAutosearchContent;
var version = "3.8";
var cmenutoggled = "0";
var radios = "";
var marketorbazaar = "";
var minsearchitems = "";
var autosearch;
var pricefactor = "1";
var moneyonhand;
var intervalID = null;
var ca_img_closed = "data:image/png;base64,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"
var ca_img_opened = "data:image/png;base64,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"
var ca_url = window.location.href;
var networth = 0;
var networthnow = 0;
alertify.set('notifier', 'position', 'top-right');



function httpGet(theUrl) {
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            return xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET", theUrl, false);
    xmlhttp.send();
}

function cap(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function addCommas(nStr) {
    nStr += '';
    var x = nStr.split('.');
    var x1 = x[0];
    var x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}
if (localStorage.getItem("cmenutoggled") !== null) {
    cmenutoggled = localStorage.getItem("cmenutoggled");
} else {
    cmenutoggled = 0;
    localStorage.setItem("cmenutoggled", cmenutoggled)
}

if (localStorage.getItem("itemstocheck") !== null) {
    itemstocheck = JSON.parse(localStorage.getItem("itemstocheck"));
} else {
    localStorage.setItem("itemstocheck", JSON.stringify([]))
}

if (localStorage.getItem("tornApi") !== undefined) {
    var c_api_key = localStorage.getItem("tornApi");
    $("#ca-api").hide();
}
if (localStorage.getItem("pricefactor") !== undefined) {
    pricefactor = localStorage.getItem("pricefactor");
} else {
    pricefactor = 1;
}
$(document).on('change', '#c-pricefactor', function () {
    pricefactor = $(this).val();
    console.log(pricefactor)
    localStorage.setItem("pricefactor", pricefactor);
});


if (localStorage.getItem("marketorbazaar") !== null) {
    marketorbazaar = localStorage.getItem("marketorbazaar");
} else {
    marketorbazaar = "market";
    localStorage.setItem("marketorbazaar", marketorbazaar)
}

if (localStorage.getItem("minsearchitems") !== null) {
    minsearchitems = localStorage.getItem("minsearchitems");
} else {
    minsearchitems = 10;
    localStorage.setItem("minsearchitems", minsearchitems)
}

$(document).on('change', '#minsearchitems', function () {
    minsearchitems = $(this).val();
    localStorage.setItem("minsearchitems", minsearchitems);
});

if (localStorage.getItem("mintotalprofit") !== null) {
    mintotalprofit = localStorage.getItem("mintotalprofit");
} else {
    mintotalprofit = 10;
    localStorage.setItem("mintotalprofit", mintotalprofit)
}
$(document).on('change', '#mintotalprofit', function () {
    mintotalprofit = $(this).val();
    localStorage.setItem("mintotalprofit", mintotalprofit);
});

async function getItemData(itemId) {
    const response = await fetch("https://api.torn.com/torn/" + itemId + "?selections=items&key=" + c_api_key);
    const itemData = await response.json();
    return itemData;
}

async function getMoneyOnHand() {
    const response = await fetch("https://api.torn.com/user/?selections=money&key=" + c_api_key);
    const moneydata = await response.json();
    return moneydata;
}


async function getBazaarListingByItemId(itemId) {
    const response = await fetch("https://api.torn.com/market/" + itemId + "?selections=bazaar&key=" + c_api_key);
    const bazaarListings = await response.json();
    return bazaarListings;
}

async function getMarketListingByItemId(itemId) {
    const response = await fetch("https://api.torn.com/market/" + itemId + "?selections=itemmarket&key=" + c_api_key);
    const marketListings = await response.json();
    return marketListings;
}

function getItemIdByName(name) {
    for (var item in itemarray)
        if (item === name)
            return itemarray[item]
}

//Edit item window and info popup functionality
function refreshItemwindow(edititems = true, content = null) {
    if (document.getElementsByClassName('itemwindowcontainer').length > 0)
        $(".itemwindowcontainer").remove();
    if (edititems) {
        $(body).append(`
    <div class='itemwindowcontainer'>
    <div class='inneritemwindowcontainer'>

  <span style='position:absolute;top:10px;right:10px;width:100%;height:32px;padding:10px;'>

  <button class='closeitemwindow'style='float:right;cursor:pointer;display:block;background:red;color:white;font-weight:900;width:150px;height:32px;position:relative;margin: 0px 10px;'>
        <span style='position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)'>Close</span>
      </button>

     <button class='openedititemwindow'style='float:right;cursor:pointer;display:block;background:lightblue;color:white;font-weight:900;width:150px;height:32px;position:relative;margin: 0px 10px;'>
        <span style='position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)'>Edit config</span>
      </button> 
    
      <button class='checkMarketPrices'style='float:right;cursor:pointer;display:block;background:orange;color:white;font-weight:900;width:150px;height:32px;position:relative;margin: 0px 10px;'>
        <span style='position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)'>Check marketprices</span>
      </button>
  </span>
  <b style="width:100%">Check marketprice configuration.</b>
  <span style="width:100%">Minimum item quantity in search results:<br><input class='ca-inputtext' id='minsearchitems' type='number' step='1' value='` + minsearchitems + `'/></span>
  <span style="width:100%">Minimum Total profit per item in search results:<br><input class='ca-inputtext' id='mintotalprofit' type='number' step='1' value='` + mintotalprofit + `'/></span>
    <b style="width:100%;">Add or remove items to search.</b>
     <span style='display:block;width:100%;'>
    Search item ID(case sensitive):<br>
    <input style="color:black;border:1px solid black; line-height:1em;margin-bottom:1em;" id="searchbar" placeholder="search..."/><br><span id="searchbarresult"></span>
    </span>
    </div>
    </div>`);
        let i = 0;
        while (i < itemstocheck.length) {
            for (var k in itemarray) {
                if (itemarray[k] == itemstocheck[i]) {
                    $(".inneritemwindowcontainer").append("<span style='background:#efefef;sdisplay:inline-block;width:120px;height:120px;display: flex;flex-direction: column;justify-content: space-around;align-items: center;' class='itemcontainer'><b><p>" + k + "</p></b><br><img style='width:80px;height:auto;' src='/images/items/" + itemstocheck[i] + "/large.png?v=" + (Math.floor(Math.random() * 999999999)) + "'/><br><span style='cursor:pointer;' data-itemid='" + itemstocheck[i] + "' class='removeitemfromcheck'>Remove</span></span>");
                }
            }
            i++;
        }
        $("#searchbar").focus();
    } else {
        $(body).append(`
    <div class='itemwindowcontainer'>
    <div class='inneritemwindowcontainer'>
    <span style='position:absolute;top:10px;right:10px;width:100%;height:32px;padding:10px;'>

     <button class='closeitemwindow'style='float:right;cursor:pointer;display:block;background:red;color:white;font-weight:900;width:150px;height:32px;position:relative;margin: 0px 10px;'>
        <span style='position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)'>Close</span>
      </button>

     <button class='openedititemwindow'style='float:right;cursor:pointer;display:block;background:lightblue;color:white;font-weight:900;width:150px;height:32px;position:relative;margin: 0px 10px;'>
        <span style='position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)'>Edit config</span>
      </button> 
   
      <button class='checkMarketPrices'style='float:right;cursor:pointer;display:block;background:orange;color:white;font-weight:900;width:150px;height:32px;position:relative;margin: 0px 10px;'>
        <span style='position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)'>Check marketprices</span>
      </button>
  </span>
    `+ content + `
</div>
    </div>`);
    }
    $(".itemwindowcontainer").insertBefore(".responsive-sidebar-container");
    $(".itemwindowcontainer").animate({
        height: "50vh"
    });
    window.scrollTo(0, 0);
}
const position = { x: 0, y: 0 }



interact('.draggable').draggable({
    listeners: {
        start(event) {
            console.log(event.type, event.target)
        },
        move(event) {
            position.x += event.dx
            position.y += event.dy

            event.target.style.transform =
                `translate(${position.x}px, ${position.y}px)`
        },
    }
})

//click on itemname to get prices
$(document).on("click", "p, span.searchname, span.name, span.bold", function () {
    console.log("clicked name")
    var searchname = $(this).html();
    if (searchname.indexOf("The") != -1) {
        searchname = searchname.substring(4);
    }
    console.log(searchname)
    var itemId = getItemIdByName(searchname)
    getItemData(itemId).then(itemData => {
        var marketprice = itemData.items[itemId].market_value;
        getBazaarListingByItemId(itemId).then(Bazaarlistings => {
            console.log(Bazaarlistings)
            var bazaarcost = Bazaarlistings.bazaar[0].cost;
            var listingamount = Bazaarlistings.bazaar[0].quantity;
            var totalprofit = (marketprice - bazaarcost) * listingamount;
            //get bazaar link
            $.ajax({
                url: "imarket.php",
                type: "POST",
                data: {
                    step: 'getShopList1',
                    itemID: itemId
                },
            }).done(function (data) {

                var thelink
                var lines = data.split('\n');
                var linkindex
                for (var line in lines) {

                    if (lines[line].indexOf("bazaar.php?userId") != -1) {
                        thelink = lines[line];
                        break;
                    }
                }
                var linkarray = thelink.split(/\"/)
                linkarray[3] = linkarray[3] + "&tt_itemid=" + itemId
                thelink = linkarray[0] + linkarray[1] + linkarray[2] + linkarray[3] + linkarray[4];
                console.log(thelink)
                var content = ""
                content = content + thelink + `
                    <span style='background:#efefef;sdisplay:inline-block;width:120px;height:120px;display: flex;flex-direction: column;justify-content: space-around;align-items: center;' class='itemcontainer'>
                    <pre><b>Bazaar</b>(` + listingamount + ` pcs)</pre>
                    <pre>$`+ addCommas(bazaarcost) + `(each)</pre>
                    <img style="width:80px;height:auto;" src="/images/items/`+ itemId + `/large.png?v=` + Math.random(999999) + `" alt="` + itemData.items[itemId].name + `">
                    <b>` + itemData.items[itemId].name + `</b>
                    <pre>Sell for: $`+ addCommas(marketprice) + `</pre>`;
                if (totalprofit < 0) {
                    content = content + `<p style="color:red">Loss: $` + addCommas(totalprofit * -1) + ` total</p>`;
                } else {
                    content = content + `<p style="color:green">Profit: $` + addCommas(totalprofit) + ` total</p>`;
                }
                content = content + `<b>Buy</a></b>
                    </span></a>`;
                refreshItemwindow(false, content);
            })
        })
    })
})


$(document).on("click", ".removeitemFromcheck, .openedititemwindow", function () {
    refreshItemwindow()
});

$(document).on("click", ".closeitemwindow", function () {
    closeItemwindow();
});

function closeItemwindow() {
    $(".itemwindowcontainer").animate({
        height: "0vh"
    })
    setTimeout(function () {
        $(".itemwindowcontainer").remove();
    }, 200);

}

$(document).on("click", ".removeitemfromcheck", function () {
    const value = $(this).attr("data-itemid");
    const result = itemstocheck.filter(function (x) {
        return x !== value;
    });
    itemstocheck = result;
    localStorage.setItem("itemstocheck", JSON.stringify(itemstocheck))
    console.log(result);
    refreshItemwindow();
});

$(document).on("keyup", "#searchbar", (function (e) {
    if ($("#searchbar").is(":focus") && (e.keyCode == 13)) {
        itemstocheck.push(String($("#addId").html()))
        localStorage.setItem("itemstocheck", JSON.stringify(itemstocheck));
        refreshItemwindow();
    }
}))

$(document).on("click", "#addId", function () {
    itemstocheck.push(String($(this).html()))
    localStorage.setItem("itemstocheck", JSON.stringify(itemstocheck));
    refreshItemwindow();
    //console.log(itemstocheck);
})

$(document).on("keyup", "#searchbar", function () {
    var searchinput = $(this).val();
    searchinput = cap(searchinput)
    for (var key in itemarray) {
        //console.log(key + key.indexOf(searchinput));
        if (key.indexOf(searchinput) != -1) {
            $("#searchbarresult").html("<b>" + key + "<b><br>ID - <span id='addId' style='cursor:pointer;color:blue;' title='Add to price checker'>" + itemarray[key] + "</span><br>(Click to add or press enter)<br><br>");
            break;
        }
    }
});

// END OF PERSONAL ITEM WINDOW FUNCTIONALITY


function addButton() {
    if ($('#ca-tool-content').length > 0 && $('#buyBeerBtn').length < 1) {
        const button = `<button class="ca-btn" id="buyBeerBtn" style="color: var(--default-blue-color); cursor: pointer; margin-right: 0;">Gimme beers!</button>`

        $('#ca-tool-content').append(button);
        $('#buyBeerBtn').on('click', async () => {
            $('#buyBeerResult').text('');
            await getAction({
                type: 'post',
                action: 'shops.php',
                data: {
                    step: 'buyShopItem',
                    ID: 180,
                    amount: 100
                },
                success: (str) => {
                    try {
                        const msg = JSON.parse(str);
                        $('.ca-result').html(msg.text).css('color', msg.success ? 'green' : 'red');
                    } catch (e) {
                        //console.log(e);
                    }
                }
            });
        });
    }
    if (ca_url.indexOf("bitsnbobs") >= 0) {
        $("#buyBeerBtn").show()
    } else {
        $("#buyBeerBtn").hide()
    }
};


function addTravelCayman() {
    if ($('#ca-tool-content').length > 0) {

        /* Cayman travel */
        const button = `<button class="ca-btn" id="ca-ft-cayman" style="color: var(--default-blue-color); cursor: pointer; margin-right: 0;">Fast travel (Cayman)</button>`

        $('#ca-tool-content').append(button);
        $('#ca-ft-cayman').on('click', async () => {
            await getAction({
                type: 'post',
                action: 'travelagency.php',
                data: {
                    step: 'travel',
                    id: 12,
                    type: 'airstrip'
                },
                success: (str) => {
                    if (str.indexOf("Error") >= 0) {
                        //console.log("Can't travel")
                    } else if (str.indexOf("validate") >= 0) {
                        window.location.replace("https://www.torn.com/travelagency.php");
                    } else {
                        try {
                            window.location.replace("https://www.torn.com/index.php");
                        } catch (e) {
                            //console.log(e);
                        }
                    }
                }
            });
        });
        /* Mexico travel */
        const buttonmex = `<button class="ca-btn" id="ca-ft-mexico" style="color: var(--default-blue-color); cursor: pointer; margin-right: 0;">Fast travel (Mexico)</button>`

        $('#ca-tool-content').append(buttonmex);
        $('#ca-ft-mexico').on('click', async () => {
            await getAction({
                type: 'post',
                action: 'travelagency.php',
                data: {
                    step: 'travel',
                    id: 2,
                    type: 'airstrip'
                },
                success: (str) => {
                    if (str.indexOf("Error") >= 0) {
                        //console.log("Can't travel")
                    } else if (str.indexOf("validate") >= 0) {
                        window.location.replace("https://www.torn.com/travelagency.php");
                    } else {
                        try {
                            window.location.replace("https://www.torn.com/index.php");
                        } catch (e) {
                            //console.log(e);
                        }
                    }
                }
            });
        });
    }
    if (ca_url.indexOf("travel") >= 0) {
        $("#ca-ft-cayman").show()
        $("#ca-ft-mexico").show()
    } else {
        $("#ca-ft-cayman").hide()
        $("#ca-ft-mexico").hide()
    }
}


var current_stock_price
var your_money
var max_buy_amount
function buyStockFast() {
    if ($('#ca-tool-content').length > 0) {
        const button = `<button class="ca-btn" id="ca-qb-stock" style="color: var(--default-blue-color); cursor: pointer; margin-right: 0;">Buy SYM stocks max.</button>`

        $('#ca-tool-content').append(button);
        $('#ca-qb-stock').on('click', async () => {
            await getAction({
                type: 'post',
                action: 'https://api.torn.com/torn/16?selections=stocks&key=' + c_api_key,
                success: (str) => {
                    try {
                        current_stock_price = String(str.stocks[16].current_price + 2)
                        current_stock_price = current_stock_price.split(/\./)[0];
                        your_money = $("#user-money").data("money")

                        your_money = parseInt(your_money)

                        your_money = parseInt(your_money)
                        current_stock_price = parseInt(current_stock_price)
                        max_buy_amount = Math.round(your_money / current_stock_price)
                        max_buy_amount = max_buy_amount;
                        //console.log(current_stock_price)
                        //console.log(your_money)
                        //console.log(max_buy_amount)
                    } catch (e) {
                        //console.log(e);
                    }

                }
            });
            await getAction({
                type: 'post',
                action: 'page.php?sid=StockMarket&step=buyShares',
                data: {
                    stockId: 16,
                    amount: max_buy_amount
                },
                success: (str) => {
                    try {
                        if (str.success) {
                            $('.ca-result').html(`Successfully bought ` + max_buy_amount + ` Symbiotic shares.`);
                        }
                        //window.location.replace("https://www.torn.com/index.php");
                    } catch (e) {
                        //console.log(e);
                    }

                }
            });
        });
        if (ca_url.indexOf("stocks") >= 0) {
            $("#ca-qb-stock").show()
        } else {
            $("#ca-qb-stock").hide()
        }
    }
}

function sellStockShares() {

    if ($('#ca-tool-content').length > 0) {
        const button = `<button class="ca-btn" id="ca-sellStockShares" style="color: var(--default-blue-color); cursor: pointer; margin-right: 0;">Quicksell 100 SYM Shares</button>`
        $('#ca-tool-content').append(button);
        $('#ca-sellStockShares').on('click', async () => {
            await getAction({
                type: 'post',
                action: 'page.php',
                data: {
                    step: 'sellShares',
                    sid: 'StockMarket',
                    stockId: 16,
                    amount: 100
                },
                success: (str) => {
                    try {
                        if (str.success) {
                            $('.ca-result').html(`Successfully sold 100 SYM shares.`);
                        }
                    } catch (e) {
                        //console.log(e);
                    }
                }
            });
        });
    }
    if (ca_url.indexOf("stocks") >= 0) {
        $("#ca-sellStockShares").show()
    } else {
        $("#ca-sellStockShares").hide()
    }
}
(function () {
    GM_addElement(shadowDOM, 'style', {
        textContent: GM_getResourceText("stylesheet")
    });
    function getItem(name) {
        var itemid = itemarray[name];
        var lowestbazaar = getLowestBazaar(itemid);
        var marketprice = getMarketPrice(itemid);

    }
    var hash = $(location).attr('hash');


    $(document).on("click", ".checkMarketPrices", function () {

        var profitablefound = false;
        var content;
        var countindex = 0;
        var interval = 200;
        var loadcount = 1;
        var loadlength = itemstocheck.length;
        getMoneyOnHand().then(money => {
            moneyonhand = money_onhand;
        })
        console.log(moneyonhand)
        refreshItemwindow(false, "<span class='ca-loading' style='tex-align:center;width:100%;'>Looking for profitable items....<div class=\"lds-roller\"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></span>");
        setTimeout(function () {
            $(".openedititemwindow, .closeitemwindow, .checkMarketPrices").hide();
        }, 300)
        itemstocheck.forEach(function (element, index) {


            countindex++;
            setTimeout(function () {
                var run = 1;
                for (var key in itemarray) {

                    if (itemarray[key] == itemstocheck[index]) {
                        loadcount++;
                        var itemId = itemarray[key];
                        getItemData(itemId).then(itemData => {
                            var marketprice = itemData.items[itemId].market_value;
                            getBazaarListingByItemId(itemId).then(Bazaarlistings => {


                                var bazaarcost = Bazaarlistings.bazaar[0].cost;
                                var listingamount = Bazaarlistings.bazaar[0].quantity;
                                var totalprofit = (marketprice - bazaarcost) * listingamount;
                                //console.log("is" + listingamount + " lower than " + minsearchitems + "?")
                                if (listingamount < minsearchitems) {
                                    //console.log("yes")
                                    run = 0;
                                } else {
                                    //console.log("no")
                                }

                                //console.log("is" + totalprofit + " lower than " + mintotalprofit + "?")
                                if (totalprofit < mintotalprofit) {
                                    //console.log("yes")
                                    run = 0;
                                } else {
                                    //console.log("no")
                                }

                                //console.log(run)
                                if (run === 1) {
                                    //get bazaar link
                                    $.ajax({
                                        url: "imarket.php",
                                        type: "POST",
                                        data: {
                                            step: 'getShopList1',
                                            itemID: itemId
                                        },
                                    }).done(function (data) {

                                        var thelink
                                        var lines = data.split('\n');
                                        var linkindex
                                        for (var line in lines) {

                                            if (lines[line].indexOf("bazaar.php?userId") != -1) {
                                                thelink = lines[line];
                                                break;
                                            }
                                        }
                                        var linkarray = thelink.split(/\"/)
                                        linkarray[3] = linkarray[3] + "&tt_itemid=" + itemId
                                        thelink = linkarray[0] + linkarray[1] + linkarray[2] + linkarray[3] + linkarray[4];
                                        //console.log(thelink)
                                        content = thelink + `
                              <span style='background:#efefef;sdisplay:inline-block;width:120px;height:120px;display: flex;flex-direction: column;justify-content: space-around;align-items: center;' class='itemcontainer'>
                              <pre><b>Bazaar</b>(` + listingamount + ` pcs)</pre>
                              <pre>$`+ addCommas(bazaarcost) + `(each)</pre>
                              <img style="width:80px;height:auto;" src="/images/items/`+ itemId + `/large.png?v=` + Math.random(999999) + `" alt="` + itemData.items[itemId].name + `">
                              <b>` + itemData.items[itemId].name + `</b>
                              <pre>Sell for: $`+ addCommas(marketprice) + `</pre>`;
                                        if (totalprofit < 0) {
                                            content = content + `<p style="color:red">Loss: $` + addCommas(totalprofit) + ` total</p>`;
                                        } else {
                                            content = content + `<p style="color:green">Profit: $` + addCommas(totalprofit) + ` total</p>`;
                                        }
                                        content = content + `<b>Buy</a></b>
                              </span></a>`;
                                        $(".inneritemwindowcontainer").append(content);
                                        profitablefound = true;

                                    })
                                }

                            })
                        })
                    }
                }
                //console.log(loadcount +" / " + loadlength);
                if (loadcount >= loadlength) {
                    $(".ca-loading").remove();
                    $(".openedititemwindow, .closeitemwindow, .checkMarketPrices").show();
                    if (!profitablefound)
                        if (!$("#noprofit").length)
                            $(".inneritemwindowcontainer").append("<span id='noprofit'>No profitable items found based on config.</span>");
                }
            }, interval * countindex)
        })


    })

    var sidebarContent;

    if (pricefactor !== undefined && c_api_key !== '') {
        sidebarContent = `
<span id="ca-pricefactor">
        <span class="ca-subtitle">Price factor</span>
        <input class='ca-inputtext' id='c-pricefactor' type='number' value='` + pricefactor + `'/>
      </span>
        <a id='calctrade' class='ca-btn'>Calc. Trade val.</a>
      <span id="ca-tool-content" class="ca-selector">

            <a href="https://www.torn.com/bazaar.php#/manage" class="ca-btn"><span><svg xmlns="http://www.w3.org/2000/svg" filter="url(#top_svg_icon)" fill="#fff" stroke="transparent" stroke-width="1" width="18" height="16" viewBox="0 0 16 17"><path d="M8,3.81a1.41,1.41,0,1,0-1.41-1.4A1.41,1.41,0,0,0,8,3.81ZM4.25,5.69A1.41,1.41,0,1,0,2.84,4.28,1.41,1.41,0,0,0,4.25,5.69Zm7.5,0a1.41,1.41,0,1,0-1.41-1.41A1.41,1.41,0,0,0,11.75,5.69ZM2.37,9.44A1.41,1.41,0,1,0,1,8,1.41,1.41,0,0,0,2.37,9.44ZM12.22,8a1.41,1.41,0,1,0,1.4-1.4A1.41,1.41,0,0,0,12.22,8ZM8,12.81l1-1.5H7Zm7.72-1.69a.92.92,0,0,0-1.32,0l-1.83,1.8-2.18-1.45a.69.69,0,0,0-.29-.12L8.39,13.92a.47.47,0,0,1-.78,0L5.89,11.34a1.45,1.45,0,0,0-.29.13L3.43,12.92,1.6,11.12A.94.94,0,0,0,.27,12.44l2.38,2.35a1,1,0,0,0,1.18.12L5.19,14v2.53a.47.47,0,0,0,.47.47h4.68a.47.47,0,0,0,.47-.47V14l1.36.91a1,1,0,0,0,1.21-.12l2.34-2.35A.92.92,0,0,0,15.72,11.12ZM8,10.38A2.35,2.35,0,1,0,5.66,8,2.35,2.35,0,0,0,8,10.38Z"></path></svg></span>Manage</a>
            <a href="https://www.torn.com/bazaar.php#/add" class="ca-btn"><span><svg xmlns="http://www.w3.org/2000/svg" filter="url(#top_svg_icon)" fill="#fff" stroke="transparent" stroke-width="1" width="17" height="16" viewBox="0 0 16.67 17"><path d="M2,8.14A4.09,4.09,0,0,1,3,8a4,4,0,0,1,3.38,6.13l3,1.68V8.59L2,4.31ZM16,4.23,8.51,0,6.45,1.16,13.7,5.43ZM5.11,1.92,2.79,3.23,10,7.43l2.33-1.27Zm5.56,6.66V16l6-3.42V5.36ZM3,9a3,3,0,1,0,3,3A3,3,0,0,0,3,9Zm1.67,3.33H3.33v1.34H2.67V12.33H1.33v-.66H2.67V10.33h.66v1.34H4.67Z"></path></svg></span>Add</a>

            <a href="https://www.torn.com/imarket.php" class="ca-btn"><i class="svgicon itemmarketicon"></i>Item Market</a>
            <a href="https://www.torn.com/page.php?sid=stocks" class="ca-btn"><i class="svgicon stocksicon"></i>Stocks</a>
            <a href="https://www.torn.com/travelagency.php" class="ca-btn"><i class="svgicon travelicon"></i>Travel</a>
            <span id="checkMarketPricesContainer">
<button class="ca-btn openedititemwindow">Edit Config</button>
<button class="ca-btn checkMarketPrices" style="color: var(--default-blue-color); cursor: pointer; margin-right: 0;">Check Marketprices</button>
</span>
      <div style="display:none;" id="pagespecific">

       <span class='ca-result'></span></div><button class="ca-btn" id="showprofits">Show today's profits</button>`
        function addHours(numOfHours, time) {
            var result = time + (numOfHours * 60 * 60);

            return result;
        }
        function subtractHours(numOfHours, time) {
            var result = time - (numOfHours * 60 * 60);

            return result;
        }

        $(document).on("click", "#showprofits", function () {
            $.getJSON("https://api.torn.com/user?selections=networth&key=" + c_api_key, function (datas) {
                console.log(datas.networth.total)
                networthnow = datas.networth.total;
            })
            $("#showprofits").html("Reading logs <div class=\"lds-roller\"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>");
            var logs = new Object();
            var endOfDay = new Date();
            endOfDay.setHours(23, 59, 59, 999);
            endOfDay = Math.round(endOfDay.getTime() / 1000)

            var startOfDay = new Date();
            startOfDay.setHours(0, 0, 0, 0);
            startOfDay = Math.round(startOfDay.getTime() / 1000)

            console.log(startOfDay + " " + endOfDay)
            var fromtime = startOfDay;
            var totime = startOfDay;

            var currentkey = 0;
            const timer = ms => new Promise(res => setTimeout(res, ms))

            async function load() {
                // We need to wrap the loop into an async function for this to work
                for (var offset = 0; offset < 24; offset += 4) {

                    fromtime = addHours(offset, startOfDay);
                    totime = addHours(offset + 1, startOfDay);

                    $.getJSON("https://api.torn.com/user?selections=log&from=" + fromtime + "&to=" + totime + "&key=" + c_api_key, function (data) {
                        for (main in data) {
                            for (line in data[main]) {
                                //console.log(data[main][line]);
                                logs[new Date(data[main][line].timestamp * 1000).toLocaleString()] = data[main][line];
                                currentkey++;
                            }
                        }
                    })
                    //console.log(Math.round(new Date().getTime()/1000));
                    //console.log(totime);
                    console.log("loading logs from " + new Date(fromtime * 1000) + " to " + new Date(totime * 1000) + " / " + offset + "/24)")
                    //console.log(Math.round(Math.abs(new Date() - (startOfDay *1000)) / 36e5))
                    if (totime - 3600 >= new Date().getTime() / 1000) {
                        break;
                    }

                    await timer(200); // then the created Promise can be awaited

                }
                var totalbought = 0;
                var totalsold = 0;
                console.log(logs);
                for (line in logs) {
                    if (logs[line].title == "Trade accepted") {
                        var tradeurl = logs[line].data.trade_id;

                        tradeurl = tradeurl.replace("[<a href = \"", "");
                        tradeurl = tradeurl.replace("\"target = \"_self\">view</a>]", "");
                        console.log(tradeurl)
                        $.get("trade.php", { step: "view", ID: 7252243 }, function (data) {
                            console.log(data)
                        });

                        //totalsold = totalsold + logs[line].data.total_cost;
                    }
                    if (logs[line].title == "Bazaar sell") {
                        totalsold = totalsold + logs[line].data.total_cost;
                    }
                    if (logs[line].title == "Bazaar buy") {
                        totalbought = totalbought + logs[line].data.total_cost;
                    }
                    if (logs[line].title == "item market buy") {
                        totalbought = totalbought + logs[line].data.cost;
                    }
                }
                $("#showprofits").html("Show today's profits");
                var profitcontent;

                profitcontent = `
                                    <p style="width:100%;">Profit made today:</p>
                                    <p style='color:`+ (totalsold - totalbought >= 0 ? "green" : "red") + `;width:100%;'>$` + addCommas(totalsold - totalbought) + `</span>
                                    <p style="width:100%;" style="width:100%;">Purchasing:</p>
                                    <p style="width:100%;">$` + addCommas(totalbought) + `</p>
                                    <p style="width:100%;" style="width:100%;">Bazaar profit:</p>
                                    <p style="width:100%;">$` + addCommas(totalsold) + `</p>
                                    `;

                refreshItemwindow(false, profitcontent);

            }

            load();
        })
        //  console.log(data);
        //    for(main in data){
        //     for(line in data[main]){
        //       var date = new Date(data[main][line].timestamp*1000);
        //     console.log(date.toLocaleDateString() + "/" + date.toLocaleTimeString() + ": " + data[main][line].title);
        //}
        //}

        //})


    }
    setInterval(function () {
        if ($(".ca-result").html() === "") {
            $("#pagespecific").hide();
        } else {
            $("#pagespecific").show();
        }
    }, 1000);
    if (ca_url.indexOf("api") === -1) {
        $("body").append(`
  <div id='c-autofiller-container'>
    <div id='ca-inner' style='position:relative;'>
        <span id="ca-pluginname">
          <span class="ca-title">Cake's autofiller <a href="https://greasyfork.org/en/scripts/435699-cake-s-autofiller/code" target="_blank">${version}</a> <a class="ca-author" href="https://www.torn.com/profiles.php?XID=2016971">Author ></a></span>
        </span>
        <span id="ca-api">
        <span class="ca-subtitle"><a style="text-decoration:underline;color:black;" href="https://www.torn.com/preferences.php#tab=api">API Key ></a></span>
        <input class='ca-inputtext' id='c_api_key' type='text' value='` + c_api_key + `'/>
      </span>
      `+ sidebarContent + `
  </div>
  </div><span class="c-toggler"></span>`);

        addButton()
        addTravelCayman()
        buyStockFast()
        sellStockShares()
    }
    if (ca_url.indexOf("trade") >= 0) {
        $("#calctrade").show()
    } else {
        $("#calctrade").hide()
    }


    $(document).on("change", "#c_api_key", function () {
        var keyinput = $(this).val();
        $.getJSON("https://api.torn.com/user/?selections=&key=" + keyinput, function (data) {
            if (data.hasOwnProperty('error')) {
                $(".ca-result").html("<b style='color:red;'>Incorrect API Key.</b>")
            } else {
                localStorage.setItem("tornApi", keyinput);
                location.reload();
            }
        })
    })
    $(document).on("change", "#marketorbazaar", function () {
        var string = $(this).val().toString();
        var cheks = localStorage.setItem("marketorbazaar", string);
    })


    //runner calculator
    $(document).on("click", "#runner-calculate", function () {
        var totalpoints = 0
        var totalpointsamount = 0
        var pointValue
        var marketitem
        var runnerItem = $(this).parent().find(":selected").text()
        var itemid = itemarray[runnerItem]
        var runnerFactor = $("#runner-factor").val()
        var itemAmount = $("#runner-itemAmount").val()
        $.getJSON("https://api.torn.com/torn/" + itemid + "?selections=items&key=" + c_api_key, function (data) {
            marketitem = data.items[itemid] // buy_price, circulation, description, effect, image, market_value, name, requirement, sell_price, type, weapon_type

            $.getJSON("https://api.torn.com/market/?selections=pointsmarket&key=" + c_api_key, function (data) {
                //console.log(data)
                $.each(data.pointsmarket, function (index, value) {
                    totalpoints += data.pointsmarket[index].quantity
                    totalpointsamount += data.pointsmarket[index].total_cost

                })
                pointValue = Math.floor(totalpointsamount / totalpoints)
                $(".ca-runner-result").html(`<b>` + runnerItem + `</b><br><br>
                                  <b>Marketvalue single item:</b> $` + addCommas(marketitem.market_value) + `<br><br>
                                  <b>Average point value on market:</b> $` + addCommas(pointValue) + `<br><br>

                                  <b>Payout runner:</b><br> <br>

                                  `+ addCommas(marketitem.market_value) + ` x ` + itemAmount + ` / ` + addCommas(pointValue) + ` = <b>P</b>` + Math.floor((((marketitem.market_value * itemAmount) / pointValue))) + ``)
            })

        })
    })

    //$` + addCommas(Math.floor((((marketitem.market_value / pointValue) * itemAmount)))) + `<br>

    if (cmenutoggled === "0") {
        //console.log('menu toggled')
        $("#c-autofiller-container").css("left", "-244px");
        $(".c-toggler").css("left", "-30px");
        $(".c-toggler").html("<img class='ca-toggle-image' src='" + ca_img_closed + "'/>")
    } else if (cmenutoggled === "1") {
        $(".c-toggler").html("<img class='ca-toggle-image' src='" + ca_img_opened + "'/>")
        $("#c-autofiller-container").css("left", "0px");
    }


    $(".c-toggler").on('click', function () {

        if (cmenutoggled === "0") {
            $(".c-toggler").html("<img class='ca-toggle-image' src='" + ca_img_opened + "'/>")
            $(".c-toggler").animate({
                left: "+=244px",
            }, 500);
            $("#c-autofiller-container").animate({
                left: "+=244px",
            }, 500);
            cmenutoggled = "1"
            localStorage.setItem("cmenutoggled", cmenutoggled)
        } else if (cmenutoggled === "1") {
            $(".c-toggler").html("<img class='ca-toggle-image' src='" + ca_img_closed + "'/>")
            $(".c-toggler").animate({
                left: "-=244px",
            }, 500);
            $("#c-autofiller-container").animate({
                left: "-=244px",
            }, 500);
            cmenutoggled = "0"
            localStorage.setItem("cmenutoggled", cmenutoggled)
        }

    });





    //Price Checker




    if (localStorage.getItem("tornApi") !== null) {
        //$("#ca-api").hide();
    }


    if (marketorbazaar === "market") {
        radios = `<span style="color:black">Based on:</span>
    <br>
    <label>
        <input type='radio' id='marketorbazaar' name='marketorbazaar' value='market' checked>
          Marketprice
        </input>
      </label>
      <br>
    <label>
      <input type='radio' id='marketorbazaar' name='marketorbazaar' value='bazaar'>
        Lowest Bazaar
      </input>
    </label>`;
    }
    if (marketorbazaar === "bazaar") {
        radios = `<span style="color:black">Based on:</span>
    <br>
    <label>
        <input type='radio' id='marketorbazaar' name='marketorbazaar' value='market'>
          Marketprice
        </input>
      </label>
      <br>
    <label>
      <input type='radio' id='marketorbazaar' name='marketorbazaar' value='bazaar' checked>
        Lowest Bazaar
      </input>
    </label>`;
    }



    $("<div style='color:#fff;padding:3px;' id='radios'></div>").insertAfter("#ca-pricefactor")
    $("#radios").html(radios);

    $(document).on("focus", "input.input-money", function () {
        ca_url = window.location.href;
        if (ca_url.indexOf("add") >= 0) {
            var clicked = $(this)
            var currentrow
            var singleitemcost;
            var imagesource;
            var inputprice;
            imagesource = $(this).parent().parent().parent().parent().prev().find(".image-wrap").find("img").attr("src")
            var itemname = $(this).parent().parent().parent().parent().prev().find(".image-wrap").find("img").attr("alt")
            var itemid = imagesource.replace(/\//g, "");

            itemid = itemid.replace(/images/g, "");
            itemid = itemid.replace(/large.png/g, "");
            itemid = itemid.replace(/items/g, "");

            $.getJSON("https://api.torn.com/torn/" + itemid + "?selections=items&key=" + c_api_key, function (data) {
                marketitem = data.items[itemid] // buy_price, circulation, description, effect, image, market_value, name, requirement, sell_price, type, weapon_type

                $.getJSON("https://api.torn.com/market/" + itemid + "?selections=bazaar&key=" + c_api_key, function (databazaar) {
                    //console.log(databazaar)
                    lowestbazaar = databazaar.bazaar[0].cost
                    marketprice = marketitem.market_value
                    var totals;
                    var quantity = $(clicked).closest("li").find('.name-wrap').html()
                    var checker = quantity.split(">");
                    if (checker[4] === undefined) {
                        var newchecker = "1";
                    } else {
                        var newchecker = checker[4].replace("</span", "");
                    }

                    if (localStorage.getItem("marketorbazaar") == "bazaar")
                        yourprice = Math.ceil(lowestbazaar * parseFloat(pricefactor))
                    if (localStorage.getItem("marketorbazaar") == "market")
                        yourprice = Math.ceil(marketprice * parseFloat(pricefactor))
                    totals = `<span>total (x` + newchecker + `):</span><br>$` + addCommas(parseInt(newchecker) * yourprice + `<br>Marketprice:<br>` + marketprice + `<br>Your price:<br>` + yourprice)
                    $('.ca-result').html(totals);

                    GM_setClipboard(yourprice, "text");

                });
            })

        }
        if (ca_url.indexOf("manage") >= 0) {
            var currentrow
            var singleitemcost;
            var imagesource;
            var inputprice;
            imagesource = $(this).parent().parent().prev().prev().prev().prev().prev().children().attr("src")
            var itemname = $(this).parent().parent().prev().prev().prev().prev().prev().children().attr("alt")
            var itemid = imagesource.replace(/\//g, "");

            itemid = itemid.replace(/images/g, "");
            itemid = itemid.replace(/medium.png/g, "");
            itemid = itemid.replace(/items/g, "");

            $.getJSON("https://api.torn.com/torn/" + itemid + "?selections=items&key=" + c_api_key, function (data) {
                marketitem = data.items[itemid] // buy_price, circulation, description, effect, image, market_value, name, requirement, sell_price, type, weapon_type

                $.getJSON("https://api.torn.com/market/" + itemid + "?selections=bazaar&key=" + c_api_key, function (databazaar) {
                    //console.log(databazaar)
                    lowestbazaar = databazaar.bazaar[0].cost
                    marketprice = marketitem.market_value
                    if (localStorage.getItem("marketorbazaar") == "bazaar")
                        yourprice = Math.ceil(lowestbazaar * parseFloat(pricefactor))
                    if (localStorage.getItem("marketorbazaar") == "market")
                        yourprice = Math.ceil(marketprice * parseFloat(pricefactor))
                    GM_setClipboard(yourprice, "text");
                    $(".ca-result").html(`<b>Pricefactor: ` + pricefactor + `<br><b>` + marketitem.name + `</b><br>Lowest Bazaar<br> $` + addCommas(lowestbazaar) + `<br>Marketprice<br>$` + addCommas(marketprice) + `<br>Your price<br> $` + addCommas(yourprice) + `<br>`);
                });
            })
        }
    })


    //Get total value in current trade window
    $(document).on("click", "#calctrade", function () {
        var container = $(this).parent().parent().parent();
        var checkpricer = 0;
        var itemprice = 0;
        $('.right').find('*').each(function () {
            if ($(this).hasClass("tt-item-value")) {

                itemprice = $(this).text().replace("$", "")
                itemprice = itemprice.replace(/,/g, '')
                itemprice = itemprice.replace(/\s/g, '')
                itemprice = itemprice * pricefactor;
                checkpricer = checkpricer + itemprice;
            }
        });
        //console.log(checkpricer)
        checkpricer = Math.ceil(checkpricer);
        checkpricer = addCommas(checkpricer);

        GM_setClipboard(checkpricer, "text");
        $(".ca-result").html('Your trade price copied:<br>$' + checkpricer);
    })



        $("div.amount").children("input.clear-all").focus(function () {
            var quantityText = $(this).parent().parent().parent().prev().children(".name-wrap").children(".t-hide").text();
            if (quantityText === '') {
                quantityText = 1;
            } else {
                if (quantityText.indexOf(' x') == -1) {
                    quantityText = quantityText.replace(/\s/g, '')
                    quantityText = quantityText.replace("x", "")
                } else {
                    $(this).val("1")
                }
            }
            GM_setClipboard(quantityText, "text");
            $(".ca-result").html('max amount set:<br>' + quantityText);
        });

    });
//test what
})();