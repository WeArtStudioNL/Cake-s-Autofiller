// ==UserScript==
// @name         Cake's autofiller
// @namespace    bazaar
// @version      3.2
// @license MIT
// @description  Helps add items to your bazaar quicker by auto filling Qty and price when clicked
// @author       Pancakegh[2016971]
// @match        https://www.torn.com/*
// @match        https://www.torn.com/bazaar.php
// @match        https://www.torn.com/imarket.php
// @match        https://www.torn.com/trade.php
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// @require      https://cdn.jsdelivr.net/npm/js-cookie@3.0.1/dist/js.cookie.min.js
// @require      https://cdn.jsdelivr.net/npm/alertifyjs@1.13.1/build/alertify.min.js
// @grant        GM_setClipboard
// @run-at       document-idle
// @downloadURL  https://github.com/WeArtStudioNL/Cake-s-Autofiller
// @updateURL    https://raw.githubusercontent.com/WeArtStudioNL/Cake-s-Autofiller/master/script.js
// ==/UserScript==
console.clear()
let itemstocheck = "a";
var version = "3.2";
var cmenutoggled = "0";
var radios = "";
var marketorbazaar = "";
var pricefactor = "1";
var ca_img_closed = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAUCAYAAADskT9PAAAGDElEQVRIiY1WbWhcVRp+zrlf85VJ5jOTTIxNY2ImJq0m0o0o7B8Vf6yKuIKwK+wiQov4R/GPYKGWKi4IUkFBEBF/qSsaZVkW649qla34UTdNm0TTtGmbSTPfMzcz995zz71yziRp3H7oy5yZc995z32f857nfd9DyuUyPM+DYRgghIAxB7quw7YZbOZ0OYzFgoZBQQh8H9LG8zh0TVcJIYpYSwg4QDxFoR5jDJ4nDcEcxluWVaGU1lKJmFDBsmz5DjGEqOLL932pCIdDKBSa6Qv5tX2VWuNhh7ER3/c16RlEftB+NzypE6q2sv2E9p9t641HwlRVPWU2mx9kM+nXQ8FApWXZ2DIvFoty0tXZifylwt7Z+Z8OM9vR9HAYSiIOBEMC4ZaDDQy/ErkbzwOvVMCrNXhob0isEgAJJeCci8i2brqx78ne7tTbtuPISBHTNBEMBvDT4tlDcws/PxcKBqEODsJvNEB++A4kn29HiBJcVagCXi6Dl0oI3TEFY3wcRDMk6E2wrWYLjfV1udrlHoYH+vfv6Os5KCJBxJmvrhX//MOPsx8EOyJQBgaA6Y/gH34V6vx8+4yuIxyAAqD35ZeQ/MtfgWRS7lpRFHCXo80dD6uXCjiztAzXdcF9H+M3D/6pO5n4FykUi8b/ZuerzHECei4H/vprCLx4CHEA4c4oVFWVEbhCRNhNE1zT0HH8G5DRUcyeOImBnrRcM7ewiNGRIbRaFpYvXMTEreOo1RqYmT0NhzF0hMP1ifFcJy1X6482m62APjgI98hniLx4CDt1Ddl0EhFNhQ7AIOQqA9BtB5EDBxAYHYWZv4TSxRV51px7KFeq8HwPzGUolSuoVOvoTiWQ7c3ICNXN9WixXH2emuvNp4mqwgWgv/sOdgAIdXWiyT0wvx3iq46GCd4ZhffgQ/JZBESk72aKGbomKUsplXpKCBzXRayrSz4LcLWG+QJtWfYuNRqFu7SE1MIcgpTC4h6uQbkt8W0HSk8P1GRSEm0zry8LueIdIjqaiKqmSkC246xTAA1fVaDbFjoYg6v8luu2CLOWZcGxLElUkVKWZclfwRkxF7+iUIniI+qGpmny/C3bhrbBLco9rirMBRIJkK4YCOO/C4BuGCiureHchfMICUCqgr6+LHRdgyrnvTITRIXt681AVSh0SnExn4e5vg5V1QQ4QpnLPMWyYGf7UP/DlNyNf62c3ybMMNDTbOHbDz/EkkjDVBK53LB0KLLgltywPH9RV3Ijw+hOxLG4vIwTJ2cRj8UlZ1qOvSAAHLMcG3qlivwTe9GMdyFYKMGn9LoAXE1DN4AbP/4Ir01/gqVSGZGAgXi0A7FoB8JGey6G0M/Mz+O96U+QiicRMHS0bBsOcxbJ0ePH9y4vr7wx1JtFOZNB6PRJDD/xOML5PJg424DR9vj/tYAA1PMRdxj+OTmB/zz2N9w+NISdwQAIpfCECaWyuZ05d07Wgj23TqI/2wfPdbFw/hyGBvr/TlbX1ozpz47U+lIZIxYKo5bJQC0XkXn7LUS//AJqtQJfxOsKlkPqNcbQWavhxK5dODIxiUI8IRlOBAEFNxQVvd3duG18N0KBILjLUK7XsVopmg/fe0+McMfBd6dOPXLk2Ffv7xnbjYiuY90IwE6noZZLUEslyLZyFQCbIISzrlJZcqeaSMCjimxOQgQnDE2H7dhQFQVms4lvTp/EfXfd+cBkLvcpaTQaiEQi+Pyrr/9x9L/Hn909MoJMIgVKKLhC4anaZWfb2uwVQERf8j3IjMI2w41WLgrPSmENM2d+xh8nJw7ePTW1v1Kvg4jiQDcI9+3MzFP/PvrFYV3TkU2l0RGJQFPUjR7sXxfAZSBk+9UBzHVRN02sFAvgHvfuuWNq356xsTdrpikbExHFYPNCIuTCykr/ibm5Z85eXLm/ZVsDmqrJ0G01pN9AsHVNIQQud+G6HEHDWNyR7Z3eMzb2SjoWW6k2GuDyJkVARKWSSwiR1Uu0VsY9nF9dzVUa9dvmls6mC5WyEtTbVzZpfw0+bBdx4cgkEnxn/w2X4h3R77Pd6flwMIC66CEbzgHgF+8r4DYtQzabAAAAAElFTkSuQmCC"
var ca_img_opened = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAUCAYAAADskT9PAAAF7klEQVRIiY1WW2xcxRn+Zubcdvfsnt21d73Oxo7t4Dg3SBooqdTwQEC0T0UIhCpVvfBYVTwAeakqFYkHXhAgVZVK+4QQ4qUVpaA8UAQCXtIaUgxJbJwojhPf13t2vfbunvtMNbN2lAsi+VejM+efM////fcljUYDkoQQalmmCUGAdXcDPElyKcsq6obGIAQIITB0EwmPKQSogGCUUnmURGEYU8aUjB3yg4DrurZhGkbT1HWEUQhdN9Sp7/uQdzXcQOmUBT+Mckurtd82mq2nozg5LARXN6RYsg1U7cjO+/YrIRBcgsTNREhs6NpsIZd9d6C/+Jd8Pr/idb3rQJUH5GXLNLBaq//i0vzCG0EY2UxZJiB/BOT6M6el4RgZUMX7fpJYAhGhGbXRCX3omsYP7dv7XLUy8KfWZkuBJ26jgbRl4trS6qnZuauvSMWSbDuNdDqtLJIfSoWRSHCxvYBJdxZ5PYOymUfEkxtA7PgJ4Nvw+lkWh81h2DSFa34Nbc/D/rHR1w/cM/q85/vQUqaBmts8efHKNaWcaQxjI0MYrAyAEqosl3zOeyKH+W50FgSen3oDnruJkllChOQ2TyjfCQFDMOyhJfym+Ages3+AJeri4vzV5+xMaqpaKb9F2u0tnD03U9vcapd0XcfhgxPoKxRwduobVAcrsLM2LkzPYt89owrAwtwijh89ijl/DY+dfxEhSZBnmds80AswwOMEa20XrruOPzhP4Vd9j+BydwUaY/zIwX0OrTdap6RyGd9dgwOolEtotlpw3SbCKFJWNJsbSBKuvLDs1nClvowxZwB/HPk5GqwLYjJQtbTttf1uaNAyFoaqQxjbO47Xuqfx2eY57EmV0fV96jZbv6atrfYrPOHQdQ2FvIMojnvlZuiqTCQZhqF4Pb7R40fAidR+jLEyOpEHkYjtxW/exwkSP0IulYVezeFf/qTSoVMN7a73OxqEYQeqvnW1kiTBrZV0K8mElGF3tDT69RwCHt/hBpAEEfrtAhbtDhaCGnJGWvaCA1S6VVrvBQGCUDYKHVwI+H6gXL7TNITgqs6v8zUgiCLZbMAYvSMAiZnFBEmGItQ4mJB3yBblQhDGGDzPw+LyCgxKlYur1UFYlglKCIZ274Km6dB0rbfXNQVgaXkZa24dxnZ3uxN5IkSOpZFnNmLCkQjOqBf456TL+wpFnJ+Zwez8PAaKBRyYGIdt20rkwQP7VE7IEB3cP45quQS4Md7778cIHAGDszsql2FrkA4OxYMY5A4iGqskp2EUXvTDUAkv95Xwj/ffx1fT07AtE8WsjaKTQ8Y0Ucxl1bItC7XVOt7829v41LoEo98G49+fNQwUC7SJYV7E09ED6NAAUmcUR19oBSf3wbeX53/Z5+RRKZdVEr7z7j/x+X/OYO+eEZiGCS749V6/udTAzNS3+GRiCfMPcqQ6CTxyeyPaCXyACHXSwSjvw0v+z1DhOTRTAerrG6gOlj8grVYLf//3R+t9Wae/lC+CagxBEOB/57/B0uoKku2yVPOAC3TsBIv3CVwd85HqUuhJr1veSoIIlcwZmDgaD+HJ6BgKIo2G5aHb9nBldVE8fvLhHBFRhK8vXXr09Geff3Rs4hAcO4M4SZTlQRQqMD1bCAQVaKdiSI9nuxqIgBrd30U7kByRQl6k0KQeElMgCEKcOfc1Th7/4TPH77v3TeK6LoqOg0+/+PL3H09OvnxodC92l3tzQIm5Yb5KhTLeRNzdJJTfcMLBaW+Mrzbq+Gp2BifuP/bnnz700LOdTgekXq/Lvgwnm8XZ6elnPjxz5q9UEH2wVIKTyaoeQW6w6G5pB7bselvdDpbWayrxfnLix6d+dOTIq/Is4RzKAxKdrP1CNot6a6M8ef7CC3OLi094QTCuUQZN0276p3M3JPNGJnQYR7AM8+rIrl2nj05MvDq8uzonz6U8lVsSwA6DEYJcNotuEGBxbW18Y3Pr/ssLC5WVep2Zxl00GylUzQ+hOmR/vsAnRkZqBSc3NVypXNAZU4PbsqyeQQD+D1/Z58AqDxD5AAAAAElFTkSuQmCC"
var ca_url = window.location.href;
alertify.set('notifier', 'position', 'top-right');

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
console.log(itemstocheck);
if (localStorage.getItem("tornApi") !== undefined) {
    var c_api_key = localStorage.getItem("tornApi");
    $("#ca-api").hide();
}
if (localStorage.getItem("pricefactor") !== undefined) {
    pricefactor = localStorage.getItem("pricefactor");
} else {
    pricefactor = 1;
}

if (localStorage.getItem("marketorbazaar") !== null) {
    marketorbazaar = localStorage.getItem("marketorbazaar");
} else {
    marketorbazaar = "market";
    localStorage.setItem("marketorbazaar", marketorbazaar)
}





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
const itemarray = { "Hammer": 1, "Baseball Bat": 2, "Crowbar": 3, "Knuckle Dusters": 4, "Pen Knife": 5, "Kitchen Knife": 6, "Dagger": 7, "Axe": 8, "Scimitar": 9, "Chainsaw": 10, "Samurai Sword": 11, "Glock 17": 12, "Raven MP25": 13, "Ruger 22/45": 14, "Beretta M9": 15, "USP": 16, "Beretta 92FS": 17, "Fiveseven": 18, "Magnum": 19, "Desert Eagle": 20, "Dual 92G Berettas": 21, "Sawed-Off Shotgun": 22, "Benelli M1 Tactical": 23, "MP5 Navy": 24, "P90": 25, "AK-47": 26, "M4A1 Colt Carbine": 27, "Benelli M4 Super": 28, "M16 A2 Rifle": 29, "Steyr AUG": 30, "M249 SAW": 31, "Leather Vest": 32, "Police Vest": 33, "Bulletproof Vest": 34, "Box of Chocolate Bars": 35, "Big Box of Chocolate Bars": 36, "Bag of Bon Bons": 37, "Box of Bon Bons": 38, "Box of Extra Strong Mints": 39, "Pack of Music CDs": 40, "DVD Player": 41, "MP3 Player": 42, "CD Player": 43, "Pack of Blank CDs : 100": 44, "Hard Drive": 45, "Tank Top": 46, "Trainers": 47, "Jacket": 48, "Full Body Armor": 49, "Outer Tactical Vest": 50, "Plain Silver Ring": 51, "Sapphire Ring": 52, "Gold Ring": 53, "Diamond Ring": 54, "Pearl Necklace": 55, "Silver Necklace": 56, "Gold Necklace": 57, "Plastic Watch": 58, "Stainless Steel Watch": 59, "Gold Watch": 60, "Personal Computer": 61, "Microwave": 62, "Minigun": 63, "Pack of Cuban Cigars": 64, "Television": 65, "Morphine": 66, "First Aid Kit": 67, "Small First Aid Kit": 68, "Simple Virus": 69, "Polymorphic Virus": 70, "Tunneling Virus": 71, "Armored Virus": 72, "Stealth Virus": 73, "Santa Hat '04": 74, "Christmas Cracker '04": 75, "Snow Cannon": 76, "Toyota MR2": 77, "Honda NSX": 78, "Audi TT Quattro": 79, "BMW M5": 80, "BMW Z8": 81, "Chevrolet Corvette Z06": 82, "Dodge Charger": 83, "Pontiac Firebird": 84, "Ford GT40": 85, "Hummer H3": 86, "Audi S4": 87, "Honda Integra R": 88, "Honda Accord": 89, "Honda Civic": 90, "Volkswagen Beetle": 91, "Chevrolet Cavalier": 92, "Ford Mustang": 93, "Reliant Robin": 94, "Holden SS": 95, "Coat Hanger": 96, "Bunch of Flowers": 97, "Neutrilux 2000": 98, "Springfield 1911": 99, "Egg Propelled Launcher": 100, "Bunny Suit": 101, "Chocolate Egg '05": 102, "Firewalk Virus": 103, "Game Console": 104, "Xbox": 105, "Parachute": 106, "Trench Coat": 107, "9mm Uzi": 108, "RPG Launcher": 109, "Leather Bullwhip": 110, "Ninja Claws": 111, "Test Trophy": 112, "Pet Rock": 113, "Non-Anon Doll": 114, "Poker Doll": 115, "Yoda Figurine": 116, "Trojan Horse": 117, "Evil Doll": 118, "Rubber Ducky of Doom": 119, "Teppic Bear": 120, "RockerHead Doll": 121, "Mouser Doll": 122, "Elite Action Man": 123, "Toy Reactor": 124, "Royal Doll": 125, "Blue Dragon": 126, "China Tea Set": 127, "Mufasa Toy": 128, "Dozen Roses": 129, "Skanky Doll": 130, "Lego Hurin": 131, "Mystical Sphere": 132, "10 Ton Pacifier": 133, "Horse": 134, "Uriel's Speakers": 135, "Strife Clown": 136, "Locked Teddy": 137, "Riddle's Bat": 138, "Soup Nazi Doll": 139, "Pouncer Doll": 140, "Spammer Doll": 141, "Cookie Jar": 142, "Vanity Mirror": 143, "Banana Phone": 144, "Xbox 360": 145, "Yasukuni Sword": 146, "Rusty Sword": 147, "Dance Toy": 148, "Lucky Dime": 149, "Crystal Carousel": 150, "Pixie Sticks": 151, "Ice Sculpture": 152, "Case of Whiskey": 153, "Laptop": 154, "Purple Frog Doll": 155, "Skeleton Key": 156, "Patriot Whip": 157, "Statue Of Aeolus": 158, "Bolt Cutters": 159, "Photographs": 160, "Black Unicorn": 161, "WarPaint Kit": 162, "Official Ninja Kit": 163, "Leukaemia Teddy Bear": 164, "Chocobo Flute": 165, "Annoying Man": 166, "Article on Crime": 167, "Unknown": 168, "Barbie Doll": 169, "Wand of Destruction": 170, "Jack-O-Lantern '05": 171, "Gas Can": 172, "Butterfly Knife": 173, "XM8 Rifle": 174, "Taser": 175, "Chain Mail": 176, "Cobra Derringer": 177, "Flak Jacket": 178, "Birthday Cake '05": 179, "Bottle of Beer": 180, "Bottle of Champagne": 181, "Soap on a Rope": 182, "Single Red Rose": 183, "Bunch of Black Roses": 184, "Bunch of Balloons '05": 185, "Sheep Plushie": 186, "Teddy Bear Plushie": 187, "Cracked Crystal Ball": 188, "S&W Revolver": 189, "C4 Explosive": 190, "Memory Locket": 191, "Rainbow Stud Earring": 192, "Hamster Toy": 193, "Snowflake '05": 194, "Christmas Tree '05": 195, "Cannabis": 196, "Ecstasy": 197, "Ketamine": 198, "LSD": 199, "Opium": 200, "PCP": 201, "Mr Torn Crown '07": 202, "Shrooms": 203, "Speed": 204, "Vicodin": 205, "Xanax": 206, "Ms Torn Crown '07": 207, "Unknown": 208, "Box of Sweet Hearts": 209, "Bag of Chocolate Kisses": 210, "Crazy Cow": 211, "Legend's Urn": 212, "Dreamcatcher": 213, "Brutus Keychain": 214, "Kitten Plushie": 215, "Single White Rose": 216, "Claymore Sword": 217, "Crossbow": 218, "Enfield SA-80": 219, "Grenade": 220, "Stick Grenade": 221, "Flash Grenade": 222, "Jackhammer": 223, "Swiss Army Knife": 224, "Mag 7": 225, "Smoke Grenade": 226, "Spear": 227, "Vektor CR-21": 228, "Claymore Mine": 229, "Flare Gun": 230, "Heckler & Koch SL8": 231, "SIG 550": 232, "BT MP9": 233, "Chain Whip": 234, "Wooden Nunchakus": 235, "Kama": 236, "Kodachi": 237, "Sai": 238, "Ninja Star": 239, "Type 98 Anti Tank": 240, "Bushmaster Carbon 15": 241, "HEG": 242, "Taurus": 243, "Blowgun": 244, "Bo Staff": 245, "Fireworks": 246, "Katana": 247, "Qsz-92": 248, "SKS Carbine": 249, "Twin Tiger Hooks": 250, "Wushu Double Axes": 251, "Ithaca 37": 252, "Lorcin 380": 253, "S&W M29": 254, "Flamethrower": 255, "Tear Gas": 256, "Throwing Knife": 257, "Jaguar Plushie": 258, "Mayan Statue": 259, "Dahlia": 260, "Wolverine Plushie": 261, "Hockey Stick": 262, "Crocus": 263, "Orchid": 264, "Pele Charm": 265, "Nessie Plushie": 266, "Heather": 267, "Red Fox Plushie": 268, "Monkey Plushie": 269, "Soccer Ball": 270, "Ceibo Flower": 271, "Edelweiss": 272, "Chamois Plushie": 273, "Panda Plushie": 274, "Jade Buddha": 275, "Peony": 276, "Cherry Blossom": 277, "Kabuki Mask": 278, "Maneki Neko": 279, "Elephant Statue": 280, "Lion Plushie": 281, "African Violet": 282, "Donator Pack": 283, "Bronze Paint Brush": 284, "Silver Paint Brush": 285, "Gold Paint Brush": 286, "Pand0ra's Box": 287, "Mr Brownstone Doll": 288, "Dual Axes": 289, "Dual Hammers": 290, "Dual Scimitars": 291, "Dual Samurai Swords": 292, "Japanese/English Dictionary": 293, "Bottle of Sake": 294, "Oriental Log": 295, "Oriental Log Translation": 296, "YouYou Yo Yo": 297, "Monkey Cuffs": 298, "Jester's Cap": 299, "Gibal's Dragonfly": 300, "Green Ornament": 301, "Purple Ornament": 302, "Blue Ornament": 303, "Purple Bell": 304, "Mistletoe": 305, "Mini Sleigh": 306, "Snowman": 307, "Christmas Gnome": 308, "Gingerbread House": 309, "Lollipop": 310, "Mardi Gras Beads": 311, "Devil Toy": 312, "Cookie Launcher": 313, "Cursed Moon Pendant": 314, "Apartment Blueprint": 315, "Semi-Detached House Blueprint": 316, "Detached House Blueprint": 317, "Beach House Blueprint": 318, "Chalet Blueprint": 319, "Villa Blueprint": 320, "Penthouse Blueprint": 321, "Mansion Blueprint": 322, "Ranch Blueprint": 323, "Palace Blueprint": 324, "Castle Blueprint": 325, "Printing Paper": 326, "Blank Tokens": 327, "Blank Credit Cards": 328, "Skateboard": 329, "Boxing Gloves": 330, "Dumbbells": 331, "Combat Vest": 332, "Liquid Body Armor": 333, "Flexible Body Armor": 334, "Stick of Dynamite": 335, "Cesium-137": 336, "Dirty Bomb": 337, "Sh0rty's Surfboard": 338, "Puzzle Piece": 339, "Hunny Pot": 340, "Seductive Stethoscope": 341, "Dollar Bill Collectible": 342, "Backstage Pass": 343, "Chemi's Magic Potion": 344, "Pack of Trojans": 345, "Pair of High Heels": 346, "Thong": 347, "Hazmat Suit": 348, "Flea Collar": 349, "Dunkin's Donut": 350, "Amazon Doll": 351, "BBQ Smoker": 352, "Bag of Cheetos": 353, "Motorbike": 354, "Citrus Squeezer": 355, "Superman Shades": 356, "Kevlar Helmet": 357, "Raw Ivory": 358, "Fine Chisel": 359, "Ivory Walking Cane": 360, "Neumune Tablet": 361, "Mr Torn Crown '08": 362, "Ms Torn Crown '08": 363, "Box of Grenades": 364, "Box of Medical Supplies": 365, "Erotic DVD": 366, "Feathery Hotel Coupon": 367, "Lawyer Business Card": 368, "Lottery Voucher": 369, "Drug Pack": 370, "Dark Doll": 371, "Empty Box": 372, "Parcel": 373, "Birthday Present": 374, "Present": 375, "Christmas Present": 376, "Birthday Wrapping Paper": 377, "Generic Wrapping Paper": 378, "Christmas Wrapping Paper": 379, "Small Explosive Device": 380, "Gold Laptop": 381, "Gold Plated AK-47": 382, "Platinum PDA": 383, "Camel Plushie": 384, "Tribulus Omanense": 385, "Sports Sneakers": 386, "Handbag": 387, "Pink Mac-10": 388, "Mr Torn Crown '09": 389, "Ms Torn Crown '09": 390, "Macana": 391, "Pepper Spray": 392, "Slingshot": 393, "Brick": 394, "Metal Nunchakus": 395, "Business Class Ticket": 396, "Flail": 397, "SIG 552": 398, "ArmaLite M-15A4": 399, "Guandao": 400, "Lead Pipe": 401, "Ice Pick": 402, "Box of Tissues": 403, "Bandana": 404, "Loaf of Bread": 405, "Afro Comb": 406, "Compass": 407, "Sextant": 408, "Yucca Plant": 409, "Fire Hydrant": 410, "Model Space Ship": 411, "Sports Shades": 412, "Mountie Hat": 413, "Proda Sunglasses": 414, "Ship in a Bottle": 415, "Paper Weight": 416, "RS232 Cable": 417, "Tailors Dummy": 418, "Small Suitcase": 419, "Medium Suitcase": 420, "Large Suitcase": 421, "Vanity Hand Mirror": 422, "Poker Chip": 423, "Rabbit Foot": 424, "Voodoo Doll": 425, "Bottle of Tequila": 426, "Sumo Doll": 427, "Casino Pass": 428, "Chopsticks": 429, "Coconut Bra": 430, "Dart Board": 431, "Crazy Straw": 432, "Sensu": 433, "Yakitori Lantern": 434, "Dozen White Roses": 435, "Snowboard": 436, "Glow Stick": 437, "Cricket Bat": 438, "Frying Pan": 439, "Pillow": 440, "Khinkeh P0rnStar Doll": 441, "Blow-Up Doll": 442, "Strawberry Milkshake": 443, "Breadfan Doll": 444, "Chaos Man": 445, "Karate Man": 446, "Burmese Flag": 447, "Bl0ndie's Dictionary": 448, "Hydroponic Grow Tent": 449, "Leopard Coin": 450, "Florin Coin": 451, "Gold Noble Coin": 452, "Ganesha Sculpture": 453, "Vairocana Buddha Sculpture": 454, "Quran Script : Ibn Masud": 455, "Quran Script : Ubay Ibn Kab": 456, "Quran Script : Ali": 457, "Shabti Sculpture": 458, "Egyptian Amulet": 459, "White Senet Pawn": 460, "Black Senet Pawn": 461, "Senet Board": 462, "Epinephrine": 463, "Melatonin": 464, "Serotonin": 465, "Snow Globe '09": 466, "Dancing Santa Claus '09": 467, "Christmas Stocking '09": 468, "Santa's Elf '09": 469, "Christmas Card '09": 470, "Admin Portrait '09": 471, "Blue Easter Egg": 472, "Green Easter Egg": 473, "Red Easter Egg": 474, "Yellow Easter Egg": 475, "White Easter Egg": 476, "Black Easter Egg": 477, "Gold Easter Egg": 478, "Metal Dog Tag": 479, "Bronze Dog Tag": 480, "Silver Dog Tag": 481, "Gold Dog Tag": 482, "MP5k": 483, "AK74U": 484, "Skorpion": 485, "TMP": 486, "Thompson": 487, "MP 40": 488, "Luger": 489, "Blunderbuss": 490, "Zombie Brain": 491, "Human Head": 492, "Medal of Honor": 493, "Citroen Saxo": 494, "Classic Mini": 495, "Fiat Punto": 496, "Nissan Micra": 497, "Peugeot 106": 498, "Renault Clio": 499, "Vauxhall Corsa": 500, "Volvo 850": 501, "Alfa Romeo 156": 502, "BMW X5": 503, "Seat Leon Cupra": 504, "Vauxhall Astra GSI": 505, "Volkswagen Golf GTI": 506, "Audi S3": 507, "Ford Focus RS": 508, "Honda S2000": 509, "Mini Cooper S": 510, "Sierra Cosworth": 511, "Lotus Exige": 512, "Mitsubishi Evo X": 513, "Porsche 911 GT3": 514, "Subaru Impreza STI": 515, "TVR Sagaris": 516, "Aston Martin One-77": 517, "Audi R8": 518, "Bugatti Veyron": 519, "Ferrari 458": 520, "Lamborghini Gallardo": 521, "Lexus LFA": 522, "Mercedes SLR": 523, "Nissan GT-R": 524, "Mr Torn Crown '10": 525, "Ms Torn Crown '10": 526, "Bag of Candy Kisses": 527, "Bag of Tootsie Rolls": 528, "Bag of Chocolate Truffles": 529, "Can of Munster": 530, "Bottle of Pumpkin Brew": 531, "Can of Red Cow": 532, "Can of Taurine Elite": 533, "Witch's Cauldron": 534, "Electronic Pumpkin": 535, "Jack O Lantern Lamp": 536, "Spooky Paper Weight": 537, "Medieval Helmet": 538, "Blood Spattered Sickle": 539, "Cauldron": 540, "Bottle of Stinky Swamp Punch": 541, "Bottle of Wicked Witch": 542, "Deputy Star": 543, "Wind Proof Lighter": 544, "Dual TMPs": 545, "Dual Bushmasters": 546, "Dual MP5s": 547, "Dual P90s": 548, "Dual Uzis": 549, "Bottle of Kandy Kane": 550, "Bottle of Minty Mayhem": 551, "Bottle of Mistletoe Madness": 552, "Can of Santa Shooters": 553, "Can of Rockstar Rudolph": 554, "Can of X-MASS": 555, "Bag of Reindeer Droppings": 556, "Advent Calendar": 557, "Santa's Snot": 558, "Polar Bear Toy": 559, "Fruitcake": 560, "Book of Carols": 561, "Sweater": 562, "Gift Card": 563, "Glasses": 564, "High-Speed Drive": 565, "Mountain Bike": 566, "Cut-Throat Razor": 567, "Slim Crowbar": 568, "Balaclava": 569, "Advanced Driving Manual": 570, "Ergonomic Keyboard": 571, "Tracking Device": 572, "Screwdriver": 573, "Fanny Pack": 574, "Tumble Dryer": 575, "Chloroform": 576, "Heavy Duty Padlock": 577, "Duct Tape": 578, "Wireless Dongle": 579, "Horse's Head": 580, "Book": 581, "Tin Foil Hat": 582, "Brown Easter Egg": 583, "Orange Easter Egg": 584, "Pink Easter Egg": 585, "Jawbreaker": 586, "Bag of Sherbet": 587, "Goodie Bag": 588, "Undefined": 589, "Undefined 2": 590, "Undefined 3": 591, "Undefined 4": 592, "Mr Torn Crown '11": 593, "Ms Torn Crown '11": 594, "Pile of Vomit": 595, "Rusty Dog Tag": 596, "Gold Nugget": 597, "Witch's Hat": 598, "Golden Broomstick": 599, "Devil's Pitchfork": 600, "Christmas Lights": 601, "Gingerbread Man": 602, "Golden Wreath": 603, "Pair of Ice Skates": 604, "Diamond Icicle": 605, "Santa Boots": 606, "Santa Gloves": 607, "Santa Hat": 608, "Santa Jacket": 609, "Santa Trousers": 610, "Snowball": 611, "Tavor TAR-21": 612, "Harpoon": 613, "Diamond Bladed Knife": 614, "Naval Cutlass": 615, "Trout": 616, "Banana Orchid": 617, "Stingray Plushie": 618, "Steel Drum": 619, "Nodding Turtle": 620, "Snorkel": 621, "Flippers": 622, "Speedo": 623, "Bikini": 624, "Wetsuit": 625, "Diving Gloves": 626, "Dog Poop": 627, "Stink Bombs": 628, "Toilet Paper": 629, "Mr Torn Crown '12": 630, "Ms Torn Crown '12": 631, "Petrified Humerus": 632, "Latex Gloves": 633, "Bag of Bloody Eyeballs": 634, "Straitjacket": 635, "Cinnamon Ornament": 636, "Christmas Express": 637, "Bottle of Christmas Cocktail": 638, "Golden Candy Cane": 639, "Kevlar Gloves": 640, "WWII Helmet": 641, "Motorcycle Helmet": 642, "Construction Helmet": 643, "Welding Helmet": 644, "Safety Boots": 645, "Hiking Boots": 646, "Leather Helmet": 647, "Leather Pants": 648, "Leather Boots": 649, "Leather Gloves": 650, "Combat Helmet": 651, "Combat Pants": 652, "Combat Boots": 653, "Combat Gloves": 654, "Riot Helmet": 655, "Riot Body": 656, "Riot Pants": 657, "Riot Boots": 658, "Riot Gloves": 659, "Dune Helmet": 660, "Dune Vest": 661, "Dune Pants": 662, "Dune Boots": 663, "Dune Gloves": 664, "Assault Helmet": 665, "Assault Body": 666, "Assault Pants": 667, "Assault Boots": 668, "Assault Gloves": 669, "Delta Gas Mask": 670, "Delta Body": 671, "Delta Pants": 672, "Delta Boots": 673, "Delta Gloves": 674, "Marauder Face Mask": 675, "Marauder Body": 676, "Marauder Pants": 677, "Marauder Boots": 678, "Marauder Gloves": 679, "EOD Helmet": 680, "EOD Apron": 681, "EOD Pants": 682, "EOD Boots": 683, "EOD Gloves": 684, "Torn Bible": 685, "Friendly Bot Guide": 686, "Egotistical Bear": 687, "Brewery Key": 688, "Signed Jersey": 689, "Mafia Kit": 690, "Octopus Toy": 691, "Bear Skin Rug": 692, "Tractor Toy": 693, "Mr Torn Crown '13": 694, "Ms Torn Crown '13": 695, "Piece of Cake": 696, "Rotten Eggs": 697, "Peg Leg": 698, "Antidote": 699, "Christmas Angel": 700, "Eggnog": 701, "Sprig of Holly": 702, "Festive Socks": 703, "Respo Hoodie": 704, "Staff Haxx Button": 705, "Birthday Cake '14": 706, "Lump of Coal": 707, "Gold Ribbon": 708, "Silver Ribbon": 709, "Bronze Ribbon": 710, "Coin : Factions": 711, "Coin : Casino": 712, "Coin : Education": 713, "Coin : Hospital": 714, "Coin : Jail": 715, "Coin : Travel Agency": 716, "Coin : Companies": 717, "Coin : Stock Exchange": 718, "Coin : Church": 719, "Coin : Auction House": 720, "Coin : Race Track": 721, "Coin : Museum": 722, "Coin : Drugs": 723, "Coin : Dump": 724, "Coin : Estate Agents": 725, "Scrooge's Top Hat": 726, "Scrooge's Topcoat": 727, "Scrooge's Trousers": 728, "Scrooge's Boots": 729, "Scrooge's Gloves": 730, "Empty Blood Bag": 731, "Blood Bag : A+": 732, "Blood Bag : A-": 733, "Blood Bag : B+": 734, "Blood Bag : B-": 735, "Blood Bag : AB+": 736, "Blood Bag : AB-": 737, "Blood Bag : O+": 738, "Blood Bag : O-": 739, "Mr Torn Crown": 740, "Ms Torn Crown": 741, "Molotov Cocktail": 742, "Christmas Sweater '15": 743, "Book : Brawn Over Brains": 744, "Book : Time Is In The Mind": 745, "Book : Keeping Your Face Handsome": 746, "Book : A Job For Your Hands": 747, "Book : Working 9 Til 5": 748, "Book : Making Friends,Enemies,And Cakes": 749, "Book : High School For Adults": 750, "Book : Milk Yourself Sober": 751, "Book : Fight Like An Asshole": 752, "Book : Mind Over Matter": 753, "Book : No Shame No Pain": 754, "Book : Run Like The Wind": 755, "Book : Weaseling Out Of Trouble": 756, "Book : Get Hard Or Go Home": 757, "Book : Gym Grunting - Shouting To Success": 758, "Book : Self Defense In The Workplace": 759, "Book : Speed 3 - The Rejected Script": 760, "Book : Limbo Lovers 101": 761, "Book : The Hamburglar's Guide To Crime": 762, "Book : What Are Old Folk Good For Anyway?": 763, "Book : Medical Degree Schmedical Degree": 764, "Book : No More Soap On A Rope": 765, "Book : Mailing Yourself Abroad": 766, "Book : Smuggling For Beginners": 767, "Book : Stealthy Stealing of Underwear": 768, "Book : Shawshank Sure Ain't For Me!": 769, "Book : Ignorance Is Bliss": 770, "Book : Winking To Win": 771, "Book : Finders Keepers": 772, "Book : Hot Turkey": 773, "Book : Higher Daddy,Higher!": 774, "Book : The Real Dutch Courage": 775, "Book : Because I'm Happy - The Pharrell Story": 776, "Book : No More Sick Days": 777, "Book : Duke - My Story": 778, "Book : Self Control Is For Losers": 779, "Book : Going Back For More": 780, "Book : Get Drunk And Lose Dignity": 781, "Book : Fuelling Your Way To Failure": 782, "Book : Yes Please Diabetes": 783, "Book : Ugly Energy": 784, "Book : Memories And Mammaries": 785, "Book : Brown-nosing The Boss": 786, "Book : Running Away From Trouble": 787, "Certificate of Awesome": 788, "Certificate of Lame": 789, "Plastic Sword": 790, "Mediocre T-Shirt": 791, "Penelope": 792, "Cake Frosting": 793, "Lock Picking Kit": 794, "Special Fruitcake": 795, "Felovax": 796, "Zylkene": 797, "Duke's Safe": 798, "Duke's Selfies": 799, "Duke's Poetry": 800, "Duke's Dog's Ashes": 801, "Duke's Will": 802, "Duke's Gimp Mask": 803, "Duke's Herpes Medication": 804, "Duke's Hammer": 805, "Old Lady Mask": 806, "Exotic Gentleman Mask": 807, "Ginger Kid Mask": 808, "Young Lady Mask": 809, "Moustache Man Mask": 810, "Scarred Man Mask": 811, "Psycho Clown Mask": 812, "Nun Mask": 813, "Tyrosine": 814, "Keg of Beer": 815, "Glass of Beer": 816, "Six Pack of Alcohol": 817, "Six Pack of Energy Drink": 818, "Rosary Beads": 819, "Piggy Bank": 820, "Empty Vial": 821, "Vial of Blood": 822, "Vial of Urine": 823, "Vial of Saliva": 824, "Questionnaire": 825, "Agreement": 826, "Perceptron : Calibrator": 827, "Donald Trump Mask '16": 828, "Yellow Snowman '16": 829, "Nock Gun": 830, "Beretta Pico": 831, "Riding Crop": 832, "Sand": 833, "Sweatpants": 834, "String Vest": 835, "Black Oxfords": 836, "Rheinmetall MG 3": 837, "Homemade Pocket Shotgun": 838, "Madball": 839, "Nail Bomb": 840, "Classic Fedora": 841, "Pinstripe Suit Trousers": 842, "Duster": 843, "Tranquilizer Gun": 844, "Bolt Gun": 845, "Scalpel": 846, "Nerve Gas": 847, "Kevlar Lab Coat": 848, "Loupes": 849, "Sledgehammer": 850, "Wifebeater": 851, "Metal Detector": 852, "Graveyard Key": 853, "Questionnaire : Completed": 854, "Agreement : Signed": 855, "Spray Can : Black": 856, "Spray Can : Red": 857, "Spray Can : Pink": 858, "Spray Can : Purple": 859, "Spray Can : Blue": 860, "Spray Can : Green": 861, "Spray Can : Yellow": 862, "Spray Can : Orange": 863, "Salt Shaker": 864, "Poison Mistletoe": 865, "Santa's List '17": 866, "Soapbox": 867, "Turkey Baster": 868, "Elon Musk Mask '17": 869, "Love Juice": 870, "Bug Swatter": 871, "Nothing": 872, "Bottle of Green Stout": 873, "Prototype": 874, "Rotten Apple": 875, "Festering Chicken": 876, "Mouldy Pizza": 877, "Smelly Cheese": 878, "Sour Milk": 879, "Stale Bread": 880, "Spoiled Fish": 881, "Insurance Policy": 882, "Bank Statement": 883, "Car Battery": 884, "Scrap Metal": 885, "Torn City Times": 886, "Magazine": 887, "Umbrella": 888, "Travel Mug": 889, "Headphones": 890, "Undefined": 891, "Mix CD": 892, "Lost and Found Office Key": 893, "Cosmetics Case": 894, "Phone Card": 895, "Subway Pass": 896, "Bottle Cap": 897, "Silver Coin": 898, "Silver Bead": 899, "Lucky Quarter": 900, "Daffodil": 901, "Bunch of Carnations": 902, "White Lily": 903, "Funeral Wreath": 904, "Car Keys": 905, "Handkerchief": 906, "Candle": 907, "Paper Bag": 908, "Tin Can": 909, "Betting Slip": 910, "Fidget Spinner": 911, "Majestic Moose": 912, "Lego Wonder Woman": 913, "CR7 Doll": 914, "Stretch Armstrong Doll": 915, "Beef Femur": 916, "Snake's Fang": 917, "Icey Igloo": 918, "Federal Jail Key": 919, "Halloween Basket : Spooky": 920, "Michael Myers Mask '18": 921, "Toast Jesus '18": 922, "Cheesus '18": 923, "Bottle of Christmas Spirit": 924, "Scammer in the Slammer '18": 925, "Gronch Mask '18": 926, "Baseball Cap": 927, "Bermudas": 928, "Blouse": 929, "Boob Tube": 930, "Bush Hat": 931, "Camisole": 932, "Capri Pants": 933, "Cardigan": 934, "Cork Hat": 935, "Crop Top": 936, "Fisherman Hat": 937, "Gym Shorts": 938, "Halterneck": 939, "Raincoat": 940, "Pantyhose": 941, "Pencil Skirt": 942, "Peplum Top": 943, "Polo Shirt": 944, "Poncho": 945, "Puffer Vest": 946, "Mackintosh": 947, "Shorts": 948, "Skirt": 949, "Travel Socks": 950, "Turtleneck": 951, "Yoga Pants": 952, "Bronze Racing Trophy": 953, "Silver Racing Trophy": 954, "Gold Racing Trophy": 955, "Pack of Blank CDs : 250": 956, "Pack of Blank CDs : 50": 957, "Chest Harness": 958, "Choker": 959, "Fishnet Stockings": 960, "Knee-high Boots": 961, "Lingerie": 962, "Mankini": 963, "Mini Skirt": 964, "Nipple Tassels": 965, "Bowler Hat": 966, "Fitted Shirt": 967, "Bow Tie": 968, "Neck Tie": 969, "Waistcoat": 970, "Blazer": 971, "Suit Trousers": 972, "Derby Shoes": 973, "Smoking Jacket": 974, "Monocle": 975, "Bronze Microphone": 976, "Silver Microphone": 977, "Gold Microphone": 978, "Paint Mask": 979, "Ladder": 980, "Wire Cutters": 981, "Ripped Jeans": 982, "Bandit Mask": 983, "Bottle of Moonshine": 984, "Can of Goose Juice": 985, "Can of Damp Valley": 986, "Can of Crocozade": 987, "Fur Coat": 988, "Fur Scarf": 989, "Fur Hat": 990, "Platform Shoes": 991, "Silver Flats": 992, "Crystal Bracelet": 993, "Cocktail Ring": 994, "Sun Hat": 995, "Square Sunglasses": 996, "Statement Necklace": 997, "Floral Dress": 998, "Shrug": 1001, "Eye Patch": 1002, "Halloween Basket : Creepy": 1003, "Halloween Basket : Freaky": 1004, "Halloween Basket : Frightful": 1005, "Halloween Basket : Haunting": 1006, "Halloween Basket : Shocking": 1007, "Halloween Basket : Terrifying": 1008, "Halloween Basket : Horrifying": 1009, "Halloween Basket : Petrifying": 1010, "Halloween Basket : Nightmarish": 1011, "Blood Bag : Irradiated": 1012, "Jigsaw Mask '19": 1013, "Reading Glasses": 1014, "Chinos": 1015, "Collared Shawl": 1016, "Pleated Skirt": 1017, "Flip Flops": 1018, "Bingo Visor": 1019, "Cover-ups": 1020, "Sandals": 1021, "Golf Socks": 1022, "Flat Cap": 1023, "Slippers": 1024, "Bathrobe": 1025, "Party Hat '19": 1026, "Badge : 15th Anniversary": 1027, "Birthday Cupcake": 1028, "Strippogram Voucher": 1029, "Dong : Thomas": 1030, "Dong : Greg": 1031, "Dong : Effy": 1032, "Dong : Holly": 1033, "Dong : Jeremy": 1034, "Anniversary Present": 1035, "Greta Mask '19": 1036, "Anatoly Mask '19": 1037, "Santa Beard": 1038, "Bag of Humbugs": 1039, "Christmas Cracker": 1040, "Special Snowflake": 1041, "Concussion Grenade": 1042, "Paper Crown : Green": 1043, "Paper Crown : Yellow": 1044, "Paper Crown : Red": 1045, "Paper Crown : Blue": 1046, "Denim Shirt": 1047, "Denim Vest": 1048, "Denim Jacket": 1049, "Denim Jeans": 1050, "Denim Shoes": 1051, "Denim Cap": 1052, "Bread Knife": 1053, "Semtex": 1054, "Poison Umbrella": 1055, "Millwall Brick": 1056, "Gentleman Cache": 1057, "Gold Chain": 1058, "Snapback Hat": 1059, "Saggy Pants": 1060, "Oversized Shirt": 1061, "Basketball Shirt": 1062, "Parachute Pants": 1063, "Tube Dress": 1064, "Gold Sneakers": 1065, "Shutter Shades": 1066, "Silver Hoodie": 1067, "Bucket Hat": 1068, "Puffer Jacket": 1069, "Durag": 1070, "Onesie": 1071, "Baseball Jacket": 1072, "Braces": 1073, "Panama Hat": 1074, "Pipe": 1075, "Shoulder Sweater": 1076, "Sports Jacket": 1077, "Old Wallet": 1078, "Cardholder": 1079, "Billfold": 1080, "Coin Purse": 1081, "Zip Wallet": 1082, "Clutch": 1083, "Credit Card": 1084, "Lipstick": 1085, "License": 1086, "Tampon": 1087, "Receipt": 1088, "Family Photo": 1089, "Lint": 1090, "Handcuffs": 1091, "Lubricant": 1092, "Hit Contract": 1093, "Syringe": 1094, "Spoon": 1095, "Cell Phone": 1096, "Assless Chaps": 1097, "Opera Gloves": 1098, "Booty Shorts": 1099, "Collar": 1100, "Ball Gag": 1101, "Blindfold": 1102, "Maid Uniform": 1103, "Maid Hat": 1104, "Ball Gown": 1105, "Fascinator Hat": 1106, "Wedding Dress": 1107, "Wedding Veil": 1108, "Head Scarf": 1109, "Nightgown": 1110, "Pullover": 1111, "Elegant Cache": 1112, "Naughty Cache": 1113, "Elderly Cache": 1114, "Denim Cache": 1115, "Wannabe Cache": 1116, "Cutesy Cache": 1117, "Armor Cache": 1118, "Melee Cache": 1119, "Small Arms Cache": 1120, "Medium Arms Cache": 1121, "Heavy Arms Cache": 1122, "Spy Camera": 1123, "Cloning Device": 1124, "Card Skimmer": 1125, "Tutu": 1126, "Knee Socks": 1127, "Kitty Shoes": 1128, "Cat Ears": 1129, "Bunny Ears": 1130, "Puppy Ears": 1131, "Heart Sunglasses": 1132, "Hair Bow": 1133, "Lolita Dress": 1134, "Unicorn Horn": 1135, "Check Skirt": 1136, "Polka Dot Dress": 1137, "Ballet Shoes": 1138, "Dungarees": 1139, "Tights": 1140, "Pennywise Mask '20": 1141, "Tiger King Mask '20": 1142, "Medical Mask": 1143, "Chin Diaper": 1144, "Tighty Whities": 1145, "Tangerine": 1146, "Helmet of Justice": 1147, "Broken Bauble": 1148, "Purple Easter Egg": 1149, "Ski Mask": 1150, "Bunny Nose": 1151, "SMAW Launcher": 1152, "China Lake": 1153, "Milkor MGL": 1154, "PKM": 1155, "Negev NG-5": 1156, "Stoner 96": 1157, "Meat Hook": 1158, "Cleaver": 1159, "Arca Fortunae": 1176, "Sandworm Mask '21": 1177 }

function addPriceCheck() {
    if ($('#ca-tool-content').length > 0) {
        console.log("check");
        console.log(itemstocheck);
        var itemstocheckstr = "";
        let i = 0;

        while (i < itemstocheck.length) {
            for (var k in itemarray) {
                if (itemarray[k] == itemstocheck[i]) {
                    itemstocheckstr = itemstocheckstr + ", " + k;
                }
            }
            i++;
        }

        const button = `
<span id="checkMarketPricesContainer"><button class="ca-btn" id="checkMarketPrices" style="color: var(--default-blue-color); cursor: pointer; margin-right: 0;" title="Marketprice checker will scrape the following items: `+ itemstocheckstr + `">Check Marketprices</button></span>`

        $('#ca-tool-content').append(button);
    }
    if (ca_url.indexOf("imarket") >= 0) {
        $("#checkMarketPricesContainer").show()
    } else {
        $("#checkMarketPricesContainer").hide()
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

$("head link[rel='stylesheet']").last().after('<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,700,1,-25" />');

(function () {
    var my_css = `
.material-symbols-outlined {
  font-variation-settings:
  'FILL' 1,
  'wght' 700,
  'GRAD' -25,
  'opsz' 48
}
.ca-author {
    text-decoration: none;
    color: #2b4a5a;
    font-size: 0.8em;
}
.wrapper.ca-selector{
  margin: 10% auto;
  width: 100%;
}

.ca-selector.wrap-collabsible {
  margin-bottom: 1.2rem 0;
}

input.ca-selector[type='checkbox'] {
  display: none;
}

.ca-selector.lbl-toggle {
    margin-top: 5px;
    display: block;
    font-weight: bold;
    font-family: monospace;
    font-size: 1em;
    text-transform: uppercase;
    text-align: center;
    padding: 5px;
    color: #ffffff;
    background: #ffa526;
    cursor: pointer;
    border-radius: 7px;
    transition: all 0.25s ease-out;
}
.ca-selector.lbl-toggle:hover {
  color: #7C5A0B;
}

.ca-selector.lbl-toggle::before {
  content: ' ';
  display: inline-block;

  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-left: 5px solid currentColor;
  vertical-align: middle;
  margin-right: .7rem;
  transform: translateY(-2px);
  transition: transform .2s ease-out;
}

.ca-selector.toggle:checked + .ca-selector.lbl-toggle::before {
  transform: rotate(90deg) translateX(-3px);
}

.ca-selector.collapsible-content {
background: #3e6274;
  max-height: 0px;
  overflow: hidden;
  transition: max-height .25s ease-in-out;
}

.ca-selector.toggle:checked + .ca-selector.lbl-toggle + .ca-selector.collapsible-content {
  max-height: 100vh;
}

.ca-selector.toggle:checked + .ca-selector.lbl-toggle {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.ca-result {
    display:block;
    height:20vh;
    overflow:auto;
    background: #ced4da;
    padding: 5px;
    color: #000!important;
    border: 1px solid #2a4a5a;
}


/* width */
.ca-result::-webkit-scrollbar {
  width: 10px;
}

/* Track */
.ca-result::-webkit-scrollbar-track {
  background:#325262;
}

/* Handle */
.ca-result::-webkit-scrollbar-thumb {
  background: #274656;
}

/* Handle on hover */
.ca-result::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.ca-title {
    display: block;
    font-family: 'fjalla one';
    font-size: 1.2em;
    margin-bottom: 5px;
    color: #343a40;
}
.ca-subtitle {
display:block;
    font-family: 'fjalla one';
    font-size:1.2em;
    margin-bottom:5px;
    color:343a40;
}
.ca-inputtext{
    background: #afafaf;
    border-radius:2px;
    padding:5px;
    border: 1px solid #adb5bd;
    width:3.5em;
}
#ca-inner > span {
    display: block;
    color: #000;
    margin:5px 0px;
}

.ca-btn {
    display: block;
    background: #6c757d;
    padding: 4px;
    cursor: pointer;
    color: white!important;
    border-radius: 5px;
    text-decoration: none;
    font-size: 1.1em;
    margin-bottom: 5px;
}
.ca-btn:hover {
    background: #343a40;
    color:white;
}
.c-toggler {
     position: fixed;
    text-align: center;
    line-height: 75px;
    left: 212px;
    top: 50vh;
    width: 50px;
    height: 50px;
    transform: translate(50%,-50%);
    cursor: pointer;
    z-index: 99999999999999999999999999999999999999999999999999999;
}
  #c-autofiller-container{
      overflow: auto;
    background: #f8f9fa;
    border-radius: 5px;
    display: block;
    width: 200px;
    height: 100vh;
    position: fixed;
    top: 50vh;
    transform: translate(0%,-50%);
    padding: 20px;
    z-index: 9999999999999999999999999999999999999999999999999999;
  }
  .icon-btn{
  font-size:1em;
  margin-right:5px;
  }
  #radios label {
    color: #343a40;
  }
  /* loading.io */
.lds-roller {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-roller div {
  animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  transform-origin: 40px 40px;
}
.lds-roller div:after {
  content: " ";
  display: block;
  position: absolute;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #fff;
  margin: -4px 0 0 -4px;
}
.lds-roller div:nth-child(1) {
  animation-delay: -0.036s;
}
.lds-roller div:nth-child(1):after {
  top: 63px;
  left: 63px;
}
.lds-roller div:nth-child(2) {
  animation-delay: -0.072s;
}
.lds-roller div:nth-child(2):after {
  top: 68px;
  left: 56px;
}
.lds-roller div:nth-child(3) {
  animation-delay: -0.108s;
}
.lds-roller div:nth-child(3):after {
  top: 71px;
  left: 48px;
}
.lds-roller div:nth-child(4) {
  animation-delay: -0.144s;
}
.lds-roller div:nth-child(4):after {
  top: 72px;
  left: 40px;
}
.lds-roller div:nth-child(5) {
  animation-delay: -0.18s;
}
.lds-roller div:nth-child(5):after {
  top: 71px;
  left: 32px;
}
.lds-roller div:nth-child(6) {
  animation-delay: -0.216s;
}
.lds-roller div:nth-child(6):after {
  top: 68px;
  left: 24px;
}
.lds-roller div:nth-child(7) {
  animation-delay: -0.252s;
}
.lds-roller div:nth-child(7):after {
  top: 63px;
  left: 17px;
}
.lds-roller div:nth-child(8) {
  animation-delay: -0.288s;
}
.lds-roller div:nth-child(8):after {
  top: 56px;
  left: 12px;
}
@keyframes lds-roller {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* alertify */
    .alertify .ajs-dimmer{position:fixed;z-index:1981;top:0;right:0;bottom:0;left:0;padding:0;margin:0;background-color:#252525;opacity:.5}.alertify .ajs-modal{position:fixed;top:0;right:0;left:0;bottom:0;padding:0;overflow-y:auto;z-index:1981}.alertify .ajs-dialog{position:relative;margin:5% auto;min-height:110px;max-width:500px;padding:24px 24px 0 24px;outline:0;background-color:#fff}.alertify .ajs-dialog.ajs-capture:before{content:'';position:absolute;top:0;right:0;bottom:0;left:0;display:block;z-index:1}.alertify .ajs-reset{position:absolute!important;display:inline!important;width:0!important;height:0!important;opacity:0!important}.alertify .ajs-commands{position:absolute;right:4px;margin:-14px 24px 0 0;z-index:2}.alertify .ajs-commands button{display:none;width:10px;height:10px;margin-left:10px;padding:10px;border:0;background-color:transparent;background-repeat:no-repeat;background-position:center;cursor:pointer}.alertify .ajs-commands button.ajs-close{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABZ0RVh0Q3JlYXRpb24gVGltZQAwNy8xMy8xNOrZqugAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzbovLKMAAAAh0lEQVQYlY2QsQ0EIQwEB9cBAR1CJUaI/gigDnwR6NBL/7/xWLNrZ2b8EwGotVpr7eOitWa1VjugiNB7R1UPrKrWe0dEAHBbXUqxMQbeewDmnHjvyTm7C3zDwAUd9c63YQdUVdu6EAJzzquz7HXvTiklt+H9DQFYaxFjvDqllFyMkbXWvfpXHjJrWFgdBq/hAAAAAElFTkSuQmCC)}.alertify .ajs-commands button.ajs-maximize{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABZ0RVh0Q3JlYXRpb24gVGltZQAwNy8xMy8xNOrZqugAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzbovLKMAAAAOUlEQVQYlWP8//8/AzGAhYGBgaG4uBiv6t7eXkYmooxjYGAgWiELsvHYFMCcRX2rSXcjoSBiJDbAAeD+EGu+8BZcAAAAAElFTkSuQmCC)}.alertify .ajs-header{margin:-24px;margin-bottom:0;padding:16px 24px;background-color:#fff}.alertify .ajs-body{min-height:56px}.alertify .ajs-body .ajs-content{padding:16px 24px 16px 16px}.alertify .ajs-footer{padding:4px;margin-left:-24px;margin-right:-24px;min-height:43px;background-color:#fff}.alertify .ajs-footer .ajs-buttons.ajs-primary{text-align:right}.alertify .ajs-footer .ajs-buttons.ajs-primary .ajs-button{margin:4px}.alertify .ajs-footer .ajs-buttons.ajs-auxiliary{float:left;clear:none;text-align:left}.alertify .ajs-footer .ajs-buttons.ajs-auxiliary .ajs-button{margin:4px}.alertify .ajs-footer .ajs-buttons .ajs-button{min-width:88px;min-height:35px}.alertify .ajs-handle{position:absolute;display:none;width:10px;height:10px;right:0;bottom:0;z-index:1;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABZ0RVh0Q3JlYXRpb24gVGltZQAwNy8xMS8xNEDQYmMAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzbovLKMAAAAQ0lEQVQYlaXNMQoAIAxD0dT7H657l0KX3iJuUlBUNOsPPCGJm7VDp6ryeMxMuDsAQH7owW3pyn3RS26iKxERMLN3ugOaAkaL3sWVigAAAABJRU5ErkJggg==);-webkit-transform:scaleX(1);transform:scaleX(1);cursor:se-resize}.alertify.ajs-no-overflow .ajs-body .ajs-content{overflow:hidden!important}.alertify.ajs-no-padding.ajs-maximized .ajs-body .ajs-content{left:0;right:0;padding:0}.alertify.ajs-no-padding:not(.ajs-maximized) .ajs-body{margin-left:-24px;margin-right:-24px}.alertify.ajs-no-padding:not(.ajs-maximized) .ajs-body .ajs-content{padding:0}.alertify.ajs-no-padding.ajs-resizable .ajs-body .ajs-content{left:0;right:0}.alertify.ajs-maximizable .ajs-commands button.ajs-maximize,.alertify.ajs-maximizable .ajs-commands button.ajs-restore{display:inline-block}.alertify.ajs-closable .ajs-commands button.ajs-close{display:inline-block}.alertify.ajs-maximized .ajs-dialog{width:100%!important;height:100%!important;max-width:none!important;margin:0 auto!important;top:0!important;left:0!important}.alertify.ajs-maximized.ajs-modeless .ajs-modal{position:fixed!important;min-height:100%!important;max-height:none!important;margin:0!important}.alertify.ajs-maximized .ajs-commands button.ajs-maximize{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABZ0RVh0Q3JlYXRpb24gVGltZQAwNy8xMy8xNOrZqugAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzbovLKMAAAASklEQVQYlZWQ0QkAMQhDtXRincOZX78KVtrDCwgqJNEoIB3MPLj7lRUROlpyVXGzby6zWuY+kz6tj5sBMTMAyVV3/595RbOh3cAXsww1raeiOcoAAAAASUVORK5CYII=)}.alertify.ajs-maximized .ajs-dialog,.alertify.ajs-resizable .ajs-dialog{padding:0}.alertify.ajs-maximized .ajs-commands,.alertify.ajs-resizable .ajs-commands{margin:14px 24px 0 0}.alertify.ajs-maximized .ajs-header,.alertify.ajs-resizable .ajs-header{position:absolute;top:0;left:0;right:0;margin:0;padding:16px 24px}.alertify.ajs-maximized .ajs-body,.alertify.ajs-resizable .ajs-body{min-height:224px;display:inline-block}.alertify.ajs-maximized .ajs-body .ajs-content,.alertify.ajs-resizable .ajs-body .ajs-content{position:absolute;top:50px;right:24px;bottom:50px;left:24px;overflow:auto}.alertify.ajs-maximized .ajs-footer,.alertify.ajs-resizable .ajs-footer{position:absolute;left:0;right:0;bottom:0;margin:0}.alertify.ajs-resizable:not(.ajs-maximized) .ajs-dialog{min-width:548px}.alertify.ajs-resizable:not(.ajs-maximized) .ajs-handle{display:block}.alertify.ajs-movable:not(.ajs-maximized) .ajs-header{cursor:move}.alertify.ajs-modeless .ajs-dimmer,.alertify.ajs-modeless .ajs-reset{display:none}.alertify.ajs-modeless .ajs-modal{overflow:visible;max-width:none;max-height:0}.alertify.ajs-modeless.ajs-pinnable .ajs-commands button.ajs-pin{display:inline-block;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABZ0RVh0Q3JlYXRpb24gVGltZQAwNy8xMy8xNOrZqugAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzbovLKMAAAAQklEQVQYlcWPMQ4AIAwCqU9u38GbcbHRWN1MvKQDhQFMEpKImGJA0gCgnYw0V0rwxseg5erT4oSkQVI5d9f+e9+xA0NbLpWfitPXAAAAAElFTkSuQmCC)}.alertify.ajs-modeless.ajs-unpinned .ajs-modal{position:absolute}.alertify.ajs-modeless.ajs-unpinned .ajs-commands button.ajs-pin{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABZ0RVh0Q3JlYXRpb24gVGltZQAwNy8xMy8xNOrZqugAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzbovLKMAAAAO0lEQVQYlWP8//8/AzGAiShV6AqLi4txGs+CLoBLMYbC3t5eRmyaWfBZhwwYkX2NTxPRvibKjRhW4wMAhxkYGbLu3pEAAAAASUVORK5CYII=)}.alertify.ajs-modeless:not(.ajs-unpinned) .ajs-body{max-height:500px;overflow:auto}.alertify.ajs-basic .ajs-header{opacity:0}.alertify.ajs-basic .ajs-footer{visibility:hidden}.alertify.ajs-frameless .ajs-header{position:absolute;top:0;left:0;right:0;min-height:60px;margin:0;padding:0;opacity:0;z-index:1}.alertify.ajs-frameless .ajs-footer{display:none}.alertify.ajs-frameless .ajs-body .ajs-content{position:absolute;top:0;right:0;bottom:0;left:0}.alertify.ajs-frameless:not(.ajs-resizable) .ajs-dialog{padding-top:0}.alertify.ajs-frameless:not(.ajs-resizable) .ajs-dialog .ajs-commands{margin-top:0}.ajs-no-overflow{overflow:hidden!important;outline:0}.ajs-no-overflow.ajs-fixed{position:fixed;top:0;right:0;bottom:0;left:0;overflow-y:scroll!important}.ajs-no-selection,.ajs-no-selection *{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}@media screen and (max-width:568px){.alertify .ajs-dialog{min-width:150px}.alertify:not(.ajs-maximized) .ajs-modal{padding:0 5%}.alertify:not(.ajs-maximized).ajs-resizable .ajs-dialog{min-width:initial;min-width:auto}}@-moz-document url-prefix(){.alertify button:focus{outline:1px dotted #3593d2}}.alertify .ajs-dimmer,.alertify .ajs-modal{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);-webkit-transition-property:opacity,visibility;transition-property:opacity,visibility;-webkit-transition-timing-function:linear;transition-timing-function:linear;-webkit-transition-duration:250ms;transition-duration:250ms}.alertify.ajs-hidden .ajs-dimmer,.alertify.ajs-hidden .ajs-modal{visibility:hidden;opacity:0}.alertify.ajs-in:not(.ajs-hidden) .ajs-dialog{-webkit-animation-duration:.5s;animation-duration:.5s}.alertify.ajs-out.ajs-hidden .ajs-dialog{-webkit-animation-duration:250ms;animation-duration:250ms}.alertify .ajs-dialog.ajs-shake{-webkit-animation-name:ajs-shake;animation-name:ajs-shake;-webkit-animation-duration:.1s;animation-duration:.1s;-webkit-animation-fill-mode:both;animation-fill-mode:both}@-webkit-keyframes ajs-shake{0%,100%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}10%,30%,50%,70%,90%{-webkit-transform:translate3d(-10px,0,0);transform:translate3d(-10px,0,0)}20%,40%,60%,80%{-webkit-transform:translate3d(10px,0,0);transform:translate3d(10px,0,0)}}@keyframes ajs-shake{0%,100%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}10%,30%,50%,70%,90%{-webkit-transform:translate3d(-10px,0,0);transform:translate3d(-10px,0,0)}20%,40%,60%,80%{-webkit-transform:translate3d(10px,0,0);transform:translate3d(10px,0,0)}}.alertify.ajs-slide.ajs-in:not(.ajs-hidden) .ajs-dialog{-webkit-animation-name:ajs-slideIn;animation-name:ajs-slideIn;-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1.275);animation-timing-function:cubic-bezier(.175,.885,.32,1.275)}.alertify.ajs-slide.ajs-out.ajs-hidden .ajs-dialog{-webkit-animation-name:ajs-slideOut;animation-name:ajs-slideOut;-webkit-animation-timing-function:cubic-bezier(.6,-.28,.735,.045);animation-timing-function:cubic-bezier(.6,-.28,.735,.045)}.alertify.ajs-zoom.ajs-in:not(.ajs-hidden) .ajs-dialog{-webkit-animation-name:ajs-zoomIn;animation-name:ajs-zoomIn}.alertify.ajs-zoom.ajs-out.ajs-hidden .ajs-dialog{-webkit-animation-name:ajs-zoomOut;animation-name:ajs-zoomOut}.alertify.ajs-fade.ajs-in:not(.ajs-hidden) .ajs-dialog{-webkit-animation-name:ajs-fadeIn;animation-name:ajs-fadeIn}.alertify.ajs-fade.ajs-out.ajs-hidden .ajs-dialog{-webkit-animation-name:ajs-fadeOut;animation-name:ajs-fadeOut}.alertify.ajs-pulse.ajs-in:not(.ajs-hidden) .ajs-dialog{-webkit-animation-name:ajs-pulseIn;animation-name:ajs-pulseIn}.alertify.ajs-pulse.ajs-out.ajs-hidden .ajs-dialog{-webkit-animation-name:ajs-pulseOut;animation-name:ajs-pulseOut}.alertify.ajs-flipx.ajs-in:not(.ajs-hidden) .ajs-dialog{-webkit-animation-name:ajs-flipInX;animation-name:ajs-flipInX}.alertify.ajs-flipx.ajs-out.ajs-hidden .ajs-dialog{-webkit-animation-name:ajs-flipOutX;animation-name:ajs-flipOutX}.alertify.ajs-flipy.ajs-in:not(.ajs-hidden) .ajs-dialog{-webkit-animation-name:ajs-flipInY;animation-name:ajs-flipInY}.alertify.ajs-flipy.ajs-out.ajs-hidden .ajs-dialog{-webkit-animation-name:ajs-flipOutY;animation-name:ajs-flipOutY}@-webkit-keyframes ajs-pulseIn{0%,100%,20%,40%,60%,80%{-webkit-transition-timing-function:cubic-bezier(.215,.61,.355,1);transition-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}20%{-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}40%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}60%{opacity:1;-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}80%{-webkit-transform:scale3d(.97,.97,.97);transform:scale3d(.97,.97,.97)}100%{opacity:1;-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}}@keyframes ajs-pulseIn{0%,100%,20%,40%,60%,80%{-webkit-transition-timing-function:cubic-bezier(.215,.61,.355,1);transition-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}20%{-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}40%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}60%{opacity:1;-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}80%{-webkit-transform:scale3d(.97,.97,.97);transform:scale3d(.97,.97,.97)}100%{opacity:1;-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}}@-webkit-keyframes ajs-pulseOut{20%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}50%,55%{opacity:1;-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}100%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}}@keyframes ajs-pulseOut{20%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}50%,55%{opacity:1;-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}100%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}}@-webkit-keyframes ajs-zoomIn{0%{opacity:0;-webkit-transform:scale3d(.25,.25,.25);transform:scale3d(.25,.25,.25)}100%{opacity:1;-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}}@keyframes ajs-zoomIn{0%{opacity:0;-webkit-transform:scale3d(.25,.25,.25);transform:scale3d(.25,.25,.25)}100%{opacity:1;-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}}@-webkit-keyframes ajs-zoomOut{0%{opacity:1;-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}100%{opacity:0;-webkit-transform:scale3d(.25,.25,.25);transform:scale3d(.25,.25,.25)}}@keyframes ajs-zoomOut{0%{opacity:1;-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}100%{opacity:0;-webkit-transform:scale3d(.25,.25,.25);transform:scale3d(.25,.25,.25)}}@-webkit-keyframes ajs-fadeIn{0%{opacity:0}100%{opacity:1}}@keyframes ajs-fadeIn{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes ajs-fadeOut{0%{opacity:1}100%{opacity:0}}@keyframes ajs-fadeOut{0%{opacity:1}100%{opacity:0}}@-webkit-keyframes ajs-flipInX{0%{-webkit-transform:perspective(400px) rotate3d(1,0,0,90deg);transform:perspective(400px) rotate3d(1,0,0,90deg);-webkit-transition-timing-function:ease-in;transition-timing-function:ease-in;opacity:0}40%{-webkit-transform:perspective(400px) rotate3d(1,0,0,-20deg);transform:perspective(400px) rotate3d(1,0,0,-20deg);-webkit-transition-timing-function:ease-in;transition-timing-function:ease-in}60%{-webkit-transform:perspective(400px) rotate3d(1,0,0,10deg);transform:perspective(400px) rotate3d(1,0,0,10deg);opacity:1}80%{-webkit-transform:perspective(400px) rotate3d(1,0,0,-5deg);transform:perspective(400px) rotate3d(1,0,0,-5deg)}100%{-webkit-transform:perspective(400px);transform:perspective(400px)}}@keyframes ajs-flipInX{0%{-webkit-transform:perspective(400px) rotate3d(1,0,0,90deg);transform:perspective(400px) rotate3d(1,0,0,90deg);-webkit-transition-timing-function:ease-in;transition-timing-function:ease-in;opacity:0}40%{-webkit-transform:perspective(400px) rotate3d(1,0,0,-20deg);transform:perspective(400px) rotate3d(1,0,0,-20deg);-webkit-transition-timing-function:ease-in;transition-timing-function:ease-in}60%{-webkit-transform:perspective(400px) rotate3d(1,0,0,10deg);transform:perspective(400px) rotate3d(1,0,0,10deg);opacity:1}80%{-webkit-transform:perspective(400px) rotate3d(1,0,0,-5deg);transform:perspective(400px) rotate3d(1,0,0,-5deg)}100%{-webkit-transform:perspective(400px);transform:perspective(400px)}}@-webkit-keyframes ajs-flipOutX{0%{-webkit-transform:perspective(400px);transform:perspective(400px)}30%{-webkit-transform:perspective(400px) rotate3d(1,0,0,-20deg);transform:perspective(400px) rotate3d(1,0,0,-20deg);opacity:1}100%{-webkit-transform:perspective(400px) rotate3d(1,0,0,90deg);transform:perspective(400px) rotate3d(1,0,0,90deg);opacity:0}}@keyframes ajs-flipOutX{0%{-webkit-transform:perspective(400px);transform:perspective(400px)}30%{-webkit-transform:perspective(400px) rotate3d(1,0,0,-20deg);transform:perspective(400px) rotate3d(1,0,0,-20deg);opacity:1}100%{-webkit-transform:perspective(400px) rotate3d(1,0,0,90deg);transform:perspective(400px) rotate3d(1,0,0,90deg);opacity:0}}@-webkit-keyframes ajs-flipInY{0%{-webkit-transform:perspective(400px) rotate3d(0,1,0,90deg);transform:perspective(400px) rotate3d(0,1,0,90deg);-webkit-transition-timing-function:ease-in;transition-timing-function:ease-in;opacity:0}40%{-webkit-transform:perspective(400px) rotate3d(0,1,0,-20deg);transform:perspective(400px) rotate3d(0,1,0,-20deg);-webkit-transition-timing-function:ease-in;transition-timing-function:ease-in}60%{-webkit-transform:perspective(400px) rotate3d(0,1,0,10deg);transform:perspective(400px) rotate3d(0,1,0,10deg);opacity:1}80%{-webkit-transform:perspective(400px) rotate3d(0,1,0,-5deg);transform:perspective(400px) rotate3d(0,1,0,-5deg)}100%{-webkit-transform:perspective(400px);transform:perspective(400px)}}@keyframes ajs-flipInY{0%{-webkit-transform:perspective(400px) rotate3d(0,1,0,90deg);transform:perspective(400px) rotate3d(0,1,0,90deg);-webkit-transition-timing-function:ease-in;transition-timing-function:ease-in;opacity:0}40%{-webkit-transform:perspective(400px) rotate3d(0,1,0,-20deg);transform:perspective(400px) rotate3d(0,1,0,-20deg);-webkit-transition-timing-function:ease-in;transition-timing-function:ease-in}60%{-webkit-transform:perspective(400px) rotate3d(0,1,0,10deg);transform:perspective(400px) rotate3d(0,1,0,10deg);opacity:1}80%{-webkit-transform:perspective(400px) rotate3d(0,1,0,-5deg);transform:perspective(400px) rotate3d(0,1,0,-5deg)}100%{-webkit-transform:perspective(400px);transform:perspective(400px)}}@-webkit-keyframes ajs-flipOutY{0%{-webkit-transform:perspective(400px);transform:perspective(400px)}30%{-webkit-transform:perspective(400px) rotate3d(0,1,0,-15deg);transform:perspective(400px) rotate3d(0,1,0,-15deg);opacity:1}100%{-webkit-transform:perspective(400px) rotate3d(0,1,0,90deg);transform:perspective(400px) rotate3d(0,1,0,90deg);opacity:0}}@keyframes ajs-flipOutY{0%{-webkit-transform:perspective(400px);transform:perspective(400px)}30%{-webkit-transform:perspective(400px) rotate3d(0,1,0,-15deg);transform:perspective(400px) rotate3d(0,1,0,-15deg);opacity:1}100%{-webkit-transform:perspective(400px) rotate3d(0,1,0,90deg);transform:perspective(400px) rotate3d(0,1,0,90deg);opacity:0}}@-webkit-keyframes ajs-slideIn{0%{margin-top:-100%}100%{margin-top:5%}}@keyframes ajs-slideIn{0%{margin-top:-100%}100%{margin-top:5%}}@-webkit-keyframes ajs-slideOut{0%{margin-top:5%}100%{margin-top:-100%}}@keyframes ajs-slideOut{0%{margin-top:5%}100%{margin-top:-100%}}.alertify-notifier{position:fixed;width:0;overflow:visible;z-index:1982;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.alertify-notifier .ajs-message{position:relative;width:260px;max-height:0;padding:0;opacity:0;margin:0;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);-webkit-transition-duration:250ms;transition-duration:250ms;-webkit-transition-timing-function:linear;transition-timing-function:linear;z-index:9999999999999;}.alertify-notifier .ajs-message.ajs-visible{-webkit-transition-duration:.5s;transition-duration:.5s;-webkit-transition-timing-function:cubic-bezier(.175,.885,.32,1.275);transition-timing-function:cubic-bezier(.175,.885,.32,1.275);opacity:1;max-height:100%;padding:15px;margin-top:10px}.alertify-notifier .ajs-message.ajs-success{background:rgba(91,189,114,.95)}.alertify-notifier .ajs-message.ajs-error{background:rgba(217,92,92,.95)}.alertify-notifier .ajs-message.ajs-warning{background:rgba(252,248,215,.95)}.alertify-notifier .ajs-message .ajs-close{position:absolute;top:0;right:0;width:16px;height:16px;cursor:pointer;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAABGdBTUEAALGPC/xhBQAAAFBJREFUGBl1j0EKADEIA+ve/P9f9bh1hEihNBfjVCO1v7RKVqJK4h8gM5cAPR42AkQEpSXPwMTyoi13n5N9YqJehm3Fnr7nL1D0ZEbD5OubGyC7a9gx+9eNAAAAAElFTkSuQmCC);background-repeat:no-repeat;background-position:center center;background-color:rgba(0,0,0,.5);border-top-right-radius:2px}.alertify-notifier.ajs-top{top:10px}.alertify-notifier.ajs-bottom{bottom:10px}.alertify-notifier.ajs-right{right:10px}.alertify-notifier.ajs-right .ajs-message{right:-320px}.alertify-notifier.ajs-right .ajs-message.ajs-visible{right:290px}.alertify-notifier.ajs-left{left:10px}.alertify-notifier.ajs-left .ajs-message{left:-300px}.alertify-notifier.ajs-left .ajs-message.ajs-visible{left:0}.alertify-notifier.ajs-center{left:50%}.alertify-notifier.ajs-center .ajs-message{-webkit-transform:translateX(-50%);transform:translateX(-50%)}.alertify-notifier.ajs-center .ajs-message.ajs-visible{left:50%;-webkit-transition-timing-function:cubic-bezier(.57,.43,.1,.65);transition-timing-function:cubic-bezier(.57,.43,.1,.65)}.alertify-notifier.ajs-center.ajs-top .ajs-message{top:-300px}.alertify-notifier.ajs-center.ajs-top .ajs-message.ajs-visible{top:0}.alertify-notifier.ajs-center.ajs-bottom .ajs-message{bottom:-300px}.alertify-notifier.ajs-center.ajs-bottom .ajs-message.ajs-visible{bottom:0}.ajs-no-transition.alertify .ajs-dialog,.ajs-no-transition.alertify .ajs-dimmer,.ajs-no-transition.alertify .ajs-modal{-webkit-transition:none!important;transition:none!important;-webkit-animation:none!important;animation:none!important}.ajs-no-transition.alertify-notifier .ajs-message{-webkit-transition:none!important;transition:none!important;-webkit-animation:none!important;animation:none!important}@media (prefers-reduced-motion:reduce){.alertify .ajs-dialog,.alertify .ajs-dimmer,.alertify .ajs-modal{-webkit-transition:none!important;transition:none!important;-webkit-animation:none!important;animation:none!important}.alertify-notifier .ajs-message{-webkit-transition:none!important;transition:none!important;-webkit-animation:none!important;animation:none!important}}

    /* Bootstrap mess */
    @font-face{font-family:bootstrap-icons;src:url(fonts/bootstrap-icons.woff2?08efbba7c53d8c5413793eecb19b20bb) format("woff2"),url(fonts/bootstrap-icons.woff?08efbba7c53d8c5413793eecb19b20bb) format("woff")}.bi::before,[class*=" bi-"]::before,[class^=bi-]::before{display:inline-block;font-display:block;font-family:bootstrap-icons!important;font-style:normal;font-weight:400!important;font-variant:normal;text-transform:none;line-height:1;vertical-align:-.125em;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.bi-123::before{content:"\f67f"}.bi-alarm-fill::before{content:"\f101"}.bi-alarm::before{content:"\f102"}.bi-align-bottom::before{content:"\f103"}.bi-align-center::before{content:"\f104"}.bi-align-end::before{content:"\f105"}.bi-align-middle::before{content:"\f106"}.bi-align-start::before{content:"\f107"}.bi-align-top::before{content:"\f108"}.bi-alt::before{content:"\f109"}.bi-app-indicator::before{content:"\f10a"}.bi-app::before{content:"\f10b"}.bi-archive-fill::before{content:"\f10c"}.bi-archive::before{content:"\f10d"}.bi-arrow-90deg-down::before{content:"\f10e"}.bi-arrow-90deg-left::before{content:"\f10f"}.bi-arrow-90deg-right::before{content:"\f110"}.bi-arrow-90deg-up::before{content:"\f111"}.bi-arrow-bar-down::before{content:"\f112"}.bi-arrow-bar-left::before{content:"\f113"}.bi-arrow-bar-right::before{content:"\f114"}.bi-arrow-bar-up::before{content:"\f115"}.bi-arrow-clockwise::before{content:"\f116"}.bi-arrow-counterclockwise::before{content:"\f117"}.bi-arrow-down-circle-fill::before{content:"\f118"}.bi-arrow-down-circle::before{content:"\f119"}.bi-arrow-down-left-circle-fill::before{content:"\f11a"}.bi-arrow-down-left-circle::before{content:"\f11b"}.bi-arrow-down-left-square-fill::before{content:"\f11c"}.bi-arrow-down-left-square::before{content:"\f11d"}.bi-arrow-down-left::before{content:"\f11e"}.bi-arrow-down-right-circle-fill::before{content:"\f11f"}.bi-arrow-down-right-circle::before{content:"\f120"}.bi-arrow-down-right-square-fill::before{content:"\f121"}.bi-arrow-down-right-square::before{content:"\f122"}.bi-arrow-down-right::before{content:"\f123"}.bi-arrow-down-short::before{content:"\f124"}.bi-arrow-down-square-fill::before{content:"\f125"}.bi-arrow-down-square::before{content:"\f126"}.bi-arrow-down-up::before{content:"\f127"}.bi-arrow-down::before{content:"\f128"}.bi-arrow-left-circle-fill::before{content:"\f129"}.bi-arrow-left-circle::before{content:"\f12a"}.bi-arrow-left-right::before{content:"\f12b"}.bi-arrow-left-short::before{content:"\f12c"}.bi-arrow-left-square-fill::before{content:"\f12d"}.bi-arrow-left-square::before{content:"\f12e"}.bi-arrow-left::before{content:"\f12f"}.bi-arrow-repeat::before{content:"\f130"}.bi-arrow-return-left::before{content:"\f131"}.bi-arrow-return-right::before{content:"\f132"}.bi-arrow-right-circle-fill::before{content:"\f133"}.bi-arrow-right-circle::before{content:"\f134"}.bi-arrow-right-short::before{content:"\f135"}.bi-arrow-right-square-fill::before{content:"\f136"}.bi-arrow-right-square::before{content:"\f137"}.bi-arrow-right::before{content:"\f138"}.bi-arrow-up-circle-fill::before{content:"\f139"}.bi-arrow-up-circle::before{content:"\f13a"}.bi-arrow-up-left-circle-fill::before{content:"\f13b"}.bi-arrow-up-left-circle::before{content:"\f13c"}.bi-arrow-up-left-square-fill::before{content:"\f13d"}.bi-arrow-up-left-square::before{content:"\f13e"}.bi-arrow-up-left::before{content:"\f13f"}.bi-arrow-up-right-circle-fill::before{content:"\f140"}.bi-arrow-up-right-circle::before{content:"\f141"}.bi-arrow-up-right-square-fill::before{content:"\f142"}.bi-arrow-up-right-square::before{content:"\f143"}.bi-arrow-up-right::before{content:"\f144"}.bi-arrow-up-short::before{content:"\f145"}.bi-arrow-up-square-fill::before{content:"\f146"}.bi-arrow-up-square::before{content:"\f147"}.bi-arrow-up::before{content:"\f148"}.bi-arrows-angle-contract::before{content:"\f149"}.bi-arrows-angle-expand::before{content:"\f14a"}.bi-arrows-collapse::before{content:"\f14b"}.bi-arrows-expand::before{content:"\f14c"}.bi-arrows-fullscreen::before{content:"\f14d"}.bi-arrows-move::before{content:"\f14e"}.bi-aspect-ratio-fill::before{content:"\f14f"}.bi-aspect-ratio::before{content:"\f150"}.bi-asterisk::before{content:"\f151"}.bi-at::before{content:"\f152"}.bi-award-fill::before{content:"\f153"}.bi-award::before{content:"\f154"}.bi-back::before{content:"\f155"}.bi-backspace-fill::before{content:"\f156"}.bi-backspace-reverse-fill::before{content:"\f157"}.bi-backspace-reverse::before{content:"\f158"}.bi-backspace::before{content:"\f159"}.bi-badge-3d-fill::before{content:"\f15a"}.bi-badge-3d::before{content:"\f15b"}.bi-badge-4k-fill::before{content:"\f15c"}.bi-badge-4k::before{content:"\f15d"}.bi-badge-8k-fill::before{content:"\f15e"}.bi-badge-8k::before{content:"\f15f"}.bi-badge-ad-fill::before{content:"\f160"}.bi-badge-ad::before{content:"\f161"}.bi-badge-ar-fill::before{content:"\f162"}.bi-badge-ar::before{content:"\f163"}.bi-badge-cc-fill::before{content:"\f164"}.bi-badge-cc::before{content:"\f165"}.bi-badge-hd-fill::before{content:"\f166"}.bi-badge-hd::before{content:"\f167"}.bi-badge-tm-fill::before{content:"\f168"}.bi-badge-tm::before{content:"\f169"}.bi-badge-vo-fill::before{content:"\f16a"}.bi-badge-vo::before{content:"\f16b"}.bi-badge-vr-fill::before{content:"\f16c"}.bi-badge-vr::before{content:"\f16d"}.bi-badge-wc-fill::before{content:"\f16e"}.bi-badge-wc::before{content:"\f16f"}.bi-bag-check-fill::before{content:"\f170"}.bi-bag-check::before{content:"\f171"}.bi-bag-dash-fill::before{content:"\f172"}.bi-bag-dash::before{content:"\f173"}.bi-bag-fill::before{content:"\f174"}.bi-bag-plus-fill::before{content:"\f175"}.bi-bag-plus::before{content:"\f176"}.bi-bag-x-fill::before{content:"\f177"}.bi-bag-x::before{content:"\f178"}.bi-bag::before{content:"\f179"}.bi-bar-chart-fill::before{content:"\f17a"}.bi-bar-chart-line-fill::before{content:"\f17b"}.bi-bar-chart-line::before{content:"\f17c"}.bi-bar-chart-steps::before{content:"\f17d"}.bi-bar-chart::before{content:"\f17e"}.bi-basket-fill::before{content:"\f17f"}.bi-basket::before{content:"\f180"}.bi-basket2-fill::before{content:"\f181"}.bi-basket2::before{content:"\f182"}.bi-basket3-fill::before{content:"\f183"}.bi-basket3::before{content:"\f184"}.bi-battery-charging::before{content:"\f185"}.bi-battery-full::before{content:"\f186"}.bi-battery-half::before{content:"\f187"}.bi-battery::before{content:"\f188"}.bi-bell-fill::before{content:"\f189"}.bi-bell::before{content:"\f18a"}.bi-bezier::before{content:"\f18b"}.bi-bezier2::before{content:"\f18c"}.bi-bicycle::before{content:"\f18d"}.bi-binoculars-fill::before{content:"\f18e"}.bi-binoculars::before{content:"\f18f"}.bi-blockquote-left::before{content:"\f190"}.bi-blockquote-right::before{content:"\f191"}.bi-book-fill::before{content:"\f192"}.bi-book-half::before{content:"\f193"}.bi-book::before{content:"\f194"}.bi-bookmark-check-fill::before{content:"\f195"}.bi-bookmark-check::before{content:"\f196"}.bi-bookmark-dash-fill::before{content:"\f197"}.bi-bookmark-dash::before{content:"\f198"}.bi-bookmark-fill::before{content:"\f199"}.bi-bookmark-heart-fill::before{content:"\f19a"}.bi-bookmark-heart::before{content:"\f19b"}.bi-bookmark-plus-fill::before{content:"\f19c"}.bi-bookmark-plus::before{content:"\f19d"}.bi-bookmark-star-fill::before{content:"\f19e"}.bi-bookmark-star::before{content:"\f19f"}.bi-bookmark-x-fill::before{content:"\f1a0"}.bi-bookmark-x::before{content:"\f1a1"}.bi-bookmark::before{content:"\f1a2"}.bi-bookmarks-fill::before{content:"\f1a3"}.bi-bookmarks::before{content:"\f1a4"}.bi-bookshelf::before{content:"\f1a5"}.bi-bootstrap-fill::before{content:"\f1a6"}.bi-bootstrap-reboot::before{content:"\f1a7"}.bi-bootstrap::before{content:"\f1a8"}.bi-border-all::before{content:"\f1a9"}.bi-border-bottom::before{content:"\f1aa"}.bi-border-center::before{content:"\f1ab"}.bi-border-inner::before{content:"\f1ac"}.bi-border-left::before{content:"\f1ad"}.bi-border-middle::before{content:"\f1ae"}.bi-border-outer::before{content:"\f1af"}.bi-border-right::before{content:"\f1b0"}.bi-border-style::before{content:"\f1b1"}.bi-border-top::before{content:"\f1b2"}.bi-border-width::before{content:"\f1b3"}.bi-border::before{content:"\f1b4"}.bi-bounding-box-circles::before{content:"\f1b5"}.bi-bounding-box::before{content:"\f1b6"}.bi-box-arrow-down-left::before{content:"\f1b7"}.bi-box-arrow-down-right::before{content:"\f1b8"}.bi-box-arrow-down::before{content:"\f1b9"}.bi-box-arrow-in-down-left::before{content:"\f1ba"}.bi-box-arrow-in-down-right::before{content:"\f1bb"}.bi-box-arrow-in-down::before{content:"\f1bc"}.bi-box-arrow-in-left::before{content:"\f1bd"}.bi-box-arrow-in-right::before{content:"\f1be"}.bi-box-arrow-in-up-left::before{content:"\f1bf"}.bi-box-arrow-in-up-right::before{content:"\f1c0"}.bi-box-arrow-in-up::before{content:"\f1c1"}.bi-box-arrow-left::before{content:"\f1c2"}.bi-box-arrow-right::before{content:"\f1c3"}.bi-box-arrow-up-left::before{content:"\f1c4"}.bi-box-arrow-up-right::before{content:"\f1c5"}.bi-box-arrow-up::before{content:"\f1c6"}.bi-box-seam::before{content:"\f1c7"}.bi-box::before{content:"\f1c8"}.bi-braces::before{content:"\f1c9"}.bi-bricks::before{content:"\f1ca"}.bi-briefcase-fill::before{content:"\f1cb"}.bi-briefcase::before{content:"\f1cc"}.bi-brightness-alt-high-fill::before{content:"\f1cd"}.bi-brightness-alt-high::before{content:"\f1ce"}.bi-brightness-alt-low-fill::before{content:"\f1cf"}.bi-brightness-alt-low::before{content:"\f1d0"}.bi-brightness-high-fill::before{content:"\f1d1"}.bi-brightness-high::before{content:"\f1d2"}.bi-brightness-low-fill::before{content:"\f1d3"}.bi-brightness-low::before{content:"\f1d4"}.bi-broadcast-pin::before{content:"\f1d5"}.bi-broadcast::before{content:"\f1d6"}.bi-brush-fill::before{content:"\f1d7"}.bi-brush::before{content:"\f1d8"}.bi-bucket-fill::before{content:"\f1d9"}.bi-bucket::before{content:"\f1da"}.bi-bug-fill::before{content:"\f1db"}.bi-bug::before{content:"\f1dc"}.bi-building::before{content:"\f1dd"}.bi-bullseye::before{content:"\f1de"}.bi-calculator-fill::before{content:"\f1df"}.bi-calculator::before{content:"\f1e0"}.bi-calendar-check-fill::before{content:"\f1e1"}.bi-calendar-check::before{content:"\f1e2"}.bi-calendar-date-fill::before{content:"\f1e3"}.bi-calendar-date::before{content:"\f1e4"}.bi-calendar-day-fill::before{content:"\f1e5"}.bi-calendar-day::before{content:"\f1e6"}.bi-calendar-event-fill::before{content:"\f1e7"}.bi-calendar-event::before{content:"\f1e8"}.bi-calendar-fill::before{content:"\f1e9"}.bi-calendar-minus-fill::before{content:"\f1ea"}.bi-calendar-minus::before{content:"\f1eb"}.bi-calendar-month-fill::before{content:"\f1ec"}.bi-calendar-month::before{content:"\f1ed"}.bi-calendar-plus-fill::before{content:"\f1ee"}.bi-calendar-plus::before{content:"\f1ef"}.bi-calendar-range-fill::before{content:"\f1f0"}.bi-calendar-range::before{content:"\f1f1"}.bi-calendar-week-fill::before{content:"\f1f2"}.bi-calendar-week::before{content:"\f1f3"}.bi-calendar-x-fill::before{content:"\f1f4"}.bi-calendar-x::before{content:"\f1f5"}.bi-calendar::before{content:"\f1f6"}.bi-calendar2-check-fill::before{content:"\f1f7"}.bi-calendar2-check::before{content:"\f1f8"}.bi-calendar2-date-fill::before{content:"\f1f9"}.bi-calendar2-date::before{content:"\f1fa"}.bi-calendar2-day-fill::before{content:"\f1fb"}.bi-calendar2-day::before{content:"\f1fc"}.bi-calendar2-event-fill::before{content:"\f1fd"}.bi-calendar2-event::before{content:"\f1fe"}.bi-calendar2-fill::before{content:"\f1ff"}.bi-calendar2-minus-fill::before{content:"\f200"}.bi-calendar2-minus::before{content:"\f201"}.bi-calendar2-month-fill::before{content:"\f202"}.bi-calendar2-month::before{content:"\f203"}.bi-calendar2-plus-fill::before{content:"\f204"}.bi-calendar2-plus::before{content:"\f205"}.bi-calendar2-range-fill::before{content:"\f206"}.bi-calendar2-range::before{content:"\f207"}.bi-calendar2-week-fill::before{content:"\f208"}.bi-calendar2-week::before{content:"\f209"}.bi-calendar2-x-fill::before{content:"\f20a"}.bi-calendar2-x::before{content:"\f20b"}.bi-calendar2::before{content:"\f20c"}.bi-calendar3-event-fill::before{content:"\f20d"}.bi-calendar3-event::before{content:"\f20e"}.bi-calendar3-fill::before{content:"\f20f"}.bi-calendar3-range-fill::before{content:"\f210"}.bi-calendar3-range::before{content:"\f211"}.bi-calendar3-week-fill::before{content:"\f212"}.bi-calendar3-week::before{content:"\f213"}.bi-calendar3::before{content:"\f214"}.bi-calendar4-event::before{content:"\f215"}.bi-calendar4-range::before{content:"\f216"}.bi-calendar4-week::before{content:"\f217"}.bi-calendar4::before{content:"\f218"}.bi-camera-fill::before{content:"\f219"}.bi-camera-reels-fill::before{content:"\f21a"}.bi-camera-reels::before{content:"\f21b"}.bi-camera-video-fill::before{content:"\f21c"}.bi-camera-video-off-fill::before{content:"\f21d"}.bi-camera-video-off::before{content:"\f21e"}.bi-camera-video::before{content:"\f21f"}.bi-camera::before{content:"\f220"}.bi-camera2::before{content:"\f221"}.bi-capslock-fill::before{content:"\f222"}.bi-capslock::before{content:"\f223"}.bi-card-checklist::before{content:"\f224"}.bi-card-heading::before{content:"\f225"}.bi-card-image::before{content:"\f226"}.bi-card-list::before{content:"\f227"}.bi-card-text::before{content:"\f228"}.bi-caret-down-fill::before{content:"\f229"}.bi-caret-down-square-fill::before{content:"\f22a"}.bi-caret-down-square::before{content:"\f22b"}.bi-caret-down::before{content:"\f22c"}.bi-caret-left-fill::before{content:"\f22d"}.bi-caret-left-square-fill::before{content:"\f22e"}.bi-caret-left-square::before{content:"\f22f"}.bi-caret-left::before{content:"\f230"}.bi-caret-right-fill::before{content:"\f231"}.bi-caret-right-square-fill::before{content:"\f232"}.bi-caret-right-square::before{content:"\f233"}.bi-caret-right::before{content:"\f234"}.bi-caret-up-fill::before{content:"\f235"}.bi-caret-up-square-fill::before{content:"\f236"}.bi-caret-up-square::before{content:"\f237"}.bi-caret-up::before{content:"\f238"}.bi-cart-check-fill::before{content:"\f239"}.bi-cart-check::before{content:"\f23a"}.bi-cart-dash-fill::before{content:"\f23b"}.bi-cart-dash::before{content:"\f23c"}.bi-cart-fill::before{content:"\f23d"}.bi-cart-plus-fill::before{content:"\f23e"}.bi-cart-plus::before{content:"\f23f"}.bi-cart-x-fill::before{content:"\f240"}.bi-cart-x::before{content:"\f241"}.bi-cart::before{content:"\f242"}.bi-cart2::before{content:"\f243"}.bi-cart3::before{content:"\f244"}.bi-cart4::before{content:"\f245"}.bi-cash-stack::before{content:"\f246"}.bi-cash::before{content:"\f247"}.bi-cast::before{content:"\f248"}.bi-chat-dots-fill::before{content:"\f249"}.bi-chat-dots::before{content:"\f24a"}.bi-chat-fill::before{content:"\f24b"}.bi-chat-left-dots-fill::before{content:"\f24c"}.bi-chat-left-dots::before{content:"\f24d"}.bi-chat-left-fill::before{content:"\f24e"}.bi-chat-left-quote-fill::before{content:"\f24f"}.bi-chat-left-quote::before{content:"\f250"}.bi-chat-left-text-fill::before{content:"\f251"}.bi-chat-left-text::before{content:"\f252"}.bi-chat-left::before{content:"\f253"}.bi-chat-quote-fill::before{content:"\f254"}.bi-chat-quote::before{content:"\f255"}.bi-chat-right-dots-fill::before{content:"\f256"}.bi-chat-right-dots::before{content:"\f257"}.bi-chat-right-fill::before{content:"\f258"}.bi-chat-right-quote-fill::before{content:"\f259"}.bi-chat-right-quote::before{content:"\f25a"}.bi-chat-right-text-fill::before{content:"\f25b"}.bi-chat-right-text::before{content:"\f25c"}.bi-chat-right::before{content:"\f25d"}.bi-chat-square-dots-fill::before{content:"\f25e"}.bi-chat-square-dots::before{content:"\f25f"}.bi-chat-square-fill::before{content:"\f260"}.bi-chat-square-quote-fill::before{content:"\f261"}.bi-chat-square-quote::before{content:"\f262"}.bi-chat-square-text-fill::before{content:"\f263"}.bi-chat-square-text::before{content:"\f264"}.bi-chat-square::before{content:"\f265"}.bi-chat-text-fill::before{content:"\f266"}.bi-chat-text::before{content:"\f267"}.bi-chat::before{content:"\f268"}.bi-check-all::before{content:"\f269"}.bi-check-circle-fill::before{content:"\f26a"}.bi-check-circle::before{content:"\f26b"}.bi-check-square-fill::before{content:"\f26c"}.bi-check-square::before{content:"\f26d"}.bi-check::before{content:"\f26e"}.bi-check2-all::before{content:"\f26f"}.bi-check2-circle::before{content:"\f270"}.bi-check2-square::before{content:"\f271"}.bi-check2::before{content:"\f272"}.bi-chevron-bar-contract::before{content:"\f273"}.bi-chevron-bar-down::before{content:"\f274"}.bi-chevron-bar-expand::before{content:"\f275"}.bi-chevron-bar-left::before{content:"\f276"}.bi-chevron-bar-right::before{content:"\f277"}.bi-chevron-bar-up::before{content:"\f278"}.bi-chevron-compact-down::before{content:"\f279"}.bi-chevron-compact-left::before{content:"\f27a"}.bi-chevron-compact-right::before{content:"\f27b"}.bi-chevron-compact-up::before{content:"\f27c"}.bi-chevron-contract::before{content:"\f27d"}.bi-chevron-double-down::before{content:"\f27e"}.bi-chevron-double-left::before{content:"\f27f"}.bi-chevron-double-right::before{content:"\f280"}.bi-chevron-double-up::before{content:"\f281"}.bi-chevron-down::before{content:"\f282"}.bi-chevron-expand::before{content:"\f283"}.bi-chevron-left::before{content:"\f284"}.bi-chevron-right::before{content:"\f285"}.bi-chevron-up::before{content:"\f286"}.bi-circle-fill::before{content:"\f287"}.bi-circle-half::before{content:"\f288"}.bi-circle-square::before{content:"\f289"}.bi-circle::before{content:"\f28a"}.bi-clipboard-check::before{content:"\f28b"}.bi-clipboard-data::before{content:"\f28c"}.bi-clipboard-minus::before{content:"\f28d"}.bi-clipboard-plus::before{content:"\f28e"}.bi-clipboard-x::before{content:"\f28f"}.bi-clipboard::before{content:"\f290"}.bi-clock-fill::before{content:"\f291"}.bi-clock-history::before{content:"\f292"}.bi-clock::before{content:"\f293"}.bi-cloud-arrow-down-fill::before{content:"\f294"}.bi-cloud-arrow-down::before{content:"\f295"}.bi-cloud-arrow-up-fill::before{content:"\f296"}.bi-cloud-arrow-up::before{content:"\f297"}.bi-cloud-check-fill::before{content:"\f298"}.bi-cloud-check::before{content:"\f299"}.bi-cloud-download-fill::before{content:"\f29a"}.bi-cloud-download::before{content:"\f29b"}.bi-cloud-drizzle-fill::before{content:"\f29c"}.bi-cloud-drizzle::before{content:"\f29d"}.bi-cloud-fill::before{content:"\f29e"}.bi-cloud-fog-fill::before{content:"\f29f"}.bi-cloud-fog::before{content:"\f2a0"}.bi-cloud-fog2-fill::before{content:"\f2a1"}.bi-cloud-fog2::before{content:"\f2a2"}.bi-cloud-hail-fill::before{content:"\f2a3"}.bi-cloud-hail::before{content:"\f2a4"}.bi-cloud-haze-1::before{content:"\f2a5"}.bi-cloud-haze-fill::before{content:"\f2a6"}.bi-cloud-haze::before{content:"\f2a7"}.bi-cloud-haze2-fill::before{content:"\f2a8"}.bi-cloud-lightning-fill::before{content:"\f2a9"}.bi-cloud-lightning-rain-fill::before{content:"\f2aa"}.bi-cloud-lightning-rain::before{content:"\f2ab"}.bi-cloud-lightning::before{content:"\f2ac"}.bi-cloud-minus-fill::before{content:"\f2ad"}.bi-cloud-minus::before{content:"\f2ae"}.bi-cloud-moon-fill::before{content:"\f2af"}.bi-cloud-moon::before{content:"\f2b0"}.bi-cloud-plus-fill::before{content:"\f2b1"}.bi-cloud-plus::before{content:"\f2b2"}.bi-cloud-rain-fill::before{content:"\f2b3"}.bi-cloud-rain-heavy-fill::before{content:"\f2b4"}.bi-cloud-rain-heavy::before{content:"\f2b5"}.bi-cloud-rain::before{content:"\f2b6"}.bi-cloud-slash-fill::before{content:"\f2b7"}.bi-cloud-slash::before{content:"\f2b8"}.bi-cloud-sleet-fill::before{content:"\f2b9"}.bi-cloud-sleet::before{content:"\f2ba"}.bi-cloud-snow-fill::before{content:"\f2bb"}.bi-cloud-snow::before{content:"\f2bc"}.bi-cloud-sun-fill::before{content:"\f2bd"}.bi-cloud-sun::before{content:"\f2be"}.bi-cloud-upload-fill::before{content:"\f2bf"}.bi-cloud-upload::before{content:"\f2c0"}.bi-cloud::before{content:"\f2c1"}.bi-clouds-fill::before{content:"\f2c2"}.bi-clouds::before{content:"\f2c3"}.bi-cloudy-fill::before{content:"\f2c4"}.bi-cloudy::before{content:"\f2c5"}.bi-code-slash::before{content:"\f2c6"}.bi-code-square::before{content:"\f2c7"}.bi-code::before{content:"\f2c8"}.bi-collection-fill::before{content:"\f2c9"}.bi-collection-play-fill::before{content:"\f2ca"}.bi-collection-play::before{content:"\f2cb"}.bi-collection::before{content:"\f2cc"}.bi-columns-gap::before{content:"\f2cd"}.bi-columns::before{content:"\f2ce"}.bi-command::before{content:"\f2cf"}.bi-compass-fill::before{content:"\f2d0"}.bi-compass::before{content:"\f2d1"}.bi-cone-striped::before{content:"\f2d2"}.bi-cone::before{content:"\f2d3"}.bi-controller::before{content:"\f2d4"}.bi-cpu-fill::before{content:"\f2d5"}.bi-cpu::before{content:"\f2d6"}.bi-credit-card-2-back-fill::before{content:"\f2d7"}.bi-credit-card-2-back::before{content:"\f2d8"}.bi-credit-card-2-front-fill::before{content:"\f2d9"}.bi-credit-card-2-front::before{content:"\f2da"}.bi-credit-card-fill::before{content:"\f2db"}.bi-credit-card::before{content:"\f2dc"}.bi-crop::before{content:"\f2dd"}.bi-cup-fill::before{content:"\f2de"}.bi-cup-straw::before{content:"\f2df"}.bi-cup::before{content:"\f2e0"}.bi-cursor-fill::before{content:"\f2e1"}.bi-cursor-text::before{content:"\f2e2"}.bi-cursor::before{content:"\f2e3"}.bi-dash-circle-dotted::before{content:"\f2e4"}.bi-dash-circle-fill::before{content:"\f2e5"}.bi-dash-circle::before{content:"\f2e6"}.bi-dash-square-dotted::before{content:"\f2e7"}.bi-dash-square-fill::before{content:"\f2e8"}.bi-dash-square::before{content:"\f2e9"}.bi-dash::before{content:"\f2ea"}.bi-diagram-2-fill::before{content:"\f2eb"}.bi-diagram-2::before{content:"\f2ec"}.bi-diagram-3-fill::before{content:"\f2ed"}.bi-diagram-3::before{content:"\f2ee"}.bi-diamond-fill::before{content:"\f2ef"}.bi-diamond-half::before{content:"\f2f0"}.bi-diamond::before{content:"\f2f1"}.bi-dice-1-fill::before{content:"\f2f2"}.bi-dice-1::before{content:"\f2f3"}.bi-dice-2-fill::before{content:"\f2f4"}.bi-dice-2::before{content:"\f2f5"}.bi-dice-3-fill::before{content:"\f2f6"}.bi-dice-3::before{content:"\f2f7"}.bi-dice-4-fill::before{content:"\f2f8"}.bi-dice-4::before{content:"\f2f9"}.bi-dice-5-fill::before{content:"\f2fa"}.bi-dice-5::before{content:"\f2fb"}.bi-dice-6-fill::before{content:"\f2fc"}.bi-dice-6::before{content:"\f2fd"}.bi-disc-fill::before{content:"\f2fe"}.bi-disc::before{content:"\f2ff"}.bi-discord::before{content:"\f300"}.bi-display-fill::before{content:"\f301"}.bi-display::before{content:"\f302"}.bi-distribute-horizontal::before{content:"\f303"}.bi-distribute-vertical::before{content:"\f304"}.bi-door-closed-fill::before{content:"\f305"}.bi-door-closed::before{content:"\f306"}.bi-door-open-fill::before{content:"\f307"}.bi-door-open::before{content:"\f308"}.bi-dot::before{content:"\f309"}.bi-download::before{content:"\f30a"}.bi-droplet-fill::before{content:"\f30b"}.bi-droplet-half::before{content:"\f30c"}.bi-droplet::before{content:"\f30d"}.bi-earbuds::before{content:"\f30e"}.bi-easel-fill::before{content:"\f30f"}.bi-easel::before{content:"\f310"}.bi-egg-fill::before{content:"\f311"}.bi-egg-fried::before{content:"\f312"}.bi-egg::before{content:"\f313"}.bi-eject-fill::before{content:"\f314"}.bi-eject::before{content:"\f315"}.bi-emoji-angry-fill::before{content:"\f316"}.bi-emoji-angry::before{content:"\f317"}.bi-emoji-dizzy-fill::before{content:"\f318"}.bi-emoji-dizzy::before{content:"\f319"}.bi-emoji-expressionless-fill::before{content:"\f31a"}.bi-emoji-expressionless::before{content:"\f31b"}.bi-emoji-frown-fill::before{content:"\f31c"}.bi-emoji-frown::before{content:"\f31d"}.bi-emoji-heart-eyes-fill::before{content:"\f31e"}.bi-emoji-heart-eyes::before{content:"\f31f"}.bi-emoji-laughing-fill::before{content:"\f320"}.bi-emoji-laughing::before{content:"\f321"}.bi-emoji-neutral-fill::before{content:"\f322"}.bi-emoji-neutral::before{content:"\f323"}.bi-emoji-smile-fill::before{content:"\f324"}.bi-emoji-smile-upside-down-fill::before{content:"\f325"}.bi-emoji-smile-upside-down::before{content:"\f326"}.bi-emoji-smile::before{content:"\f327"}.bi-emoji-sunglasses-fill::before{content:"\f328"}.bi-emoji-sunglasses::before{content:"\f329"}.bi-emoji-wink-fill::before{content:"\f32a"}.bi-emoji-wink::before{content:"\f32b"}.bi-envelope-fill::before{content:"\f32c"}.bi-envelope-open-fill::before{content:"\f32d"}.bi-envelope-open::before{content:"\f32e"}.bi-envelope::before{content:"\f32f"}.bi-eraser-fill::before{content:"\f330"}.bi-eraser::before{content:"\f331"}.bi-exclamation-circle-fill::before{content:"\f332"}.bi-exclamation-circle::before{content:"\f333"}.bi-exclamation-diamond-fill::before{content:"\f334"}.bi-exclamation-diamond::before{content:"\f335"}.bi-exclamation-octagon-fill::before{content:"\f336"}.bi-exclamation-octagon::before{content:"\f337"}.bi-exclamation-square-fill::before{content:"\f338"}.bi-exclamation-square::before{content:"\f339"}.bi-exclamation-triangle-fill::before{content:"\f33a"}.bi-exclamation-triangle::before{content:"\f33b"}.bi-exclamation::before{content:"\f33c"}.bi-exclude::before{content:"\f33d"}.bi-eye-fill::before{content:"\f33e"}.bi-eye-slash-fill::before{content:"\f33f"}.bi-eye-slash::before{content:"\f340"}.bi-eye::before{content:"\f341"}.bi-eyedropper::before{content:"\f342"}.bi-eyeglasses::before{content:"\f343"}.bi-facebook::before{content:"\f344"}.bi-file-arrow-down-fill::before{content:"\f345"}.bi-file-arrow-down::before{content:"\f346"}.bi-file-arrow-up-fill::before{content:"\f347"}.bi-file-arrow-up::before{content:"\f348"}.bi-file-bar-graph-fill::before{content:"\f349"}.bi-file-bar-graph::before{content:"\f34a"}.bi-file-binary-fill::before{content:"\f34b"}.bi-file-binary::before{content:"\f34c"}.bi-file-break-fill::before{content:"\f34d"}.bi-file-break::before{content:"\f34e"}.bi-file-check-fill::before{content:"\f34f"}.bi-file-check::before{content:"\f350"}.bi-file-code-fill::before{content:"\f351"}.bi-file-code::before{content:"\f352"}.bi-file-diff-fill::before{content:"\f353"}.bi-file-diff::before{content:"\f354"}.bi-file-earmark-arrow-down-fill::before{content:"\f355"}.bi-file-earmark-arrow-down::before{content:"\f356"}.bi-file-earmark-arrow-up-fill::before{content:"\f357"}.bi-file-earmark-arrow-up::before{content:"\f358"}.bi-file-earmark-bar-graph-fill::before{content:"\f359"}.bi-file-earmark-bar-graph::before{content:"\f35a"}.bi-file-earmark-binary-fill::before{content:"\f35b"}.bi-file-earmark-binary::before{content:"\f35c"}.bi-file-earmark-break-fill::before{content:"\f35d"}.bi-file-earmark-break::before{content:"\f35e"}.bi-file-earmark-check-fill::before{content:"\f35f"}.bi-file-earmark-check::before{content:"\f360"}.bi-file-earmark-code-fill::before{content:"\f361"}.bi-file-earmark-code::before{content:"\f362"}.bi-file-earmark-diff-fill::before{content:"\f363"}.bi-file-earmark-diff::before{content:"\f364"}.bi-file-earmark-easel-fill::before{content:"\f365"}.bi-file-earmark-easel::before{content:"\f366"}.bi-file-earmark-excel-fill::before{content:"\f367"}.bi-file-earmark-excel::before{content:"\f368"}.bi-file-earmark-fill::before{content:"\f369"}.bi-file-earmark-font-fill::before{content:"\f36a"}.bi-file-earmark-font::before{content:"\f36b"}.bi-file-earmark-image-fill::before{content:"\f36c"}.bi-file-earmark-image::before{content:"\f36d"}.bi-file-earmark-lock-fill::before{content:"\f36e"}.bi-file-earmark-lock::before{content:"\f36f"}.bi-file-earmark-lock2-fill::before{content:"\f370"}.bi-file-earmark-lock2::before{content:"\f371"}.bi-file-earmark-medical-fill::before{content:"\f372"}.bi-file-earmark-medical::before{content:"\f373"}.bi-file-earmark-minus-fill::before{content:"\f374"}.bi-file-earmark-minus::before{content:"\f375"}.bi-file-earmark-music-fill::before{content:"\f376"}.bi-file-earmark-music::before{content:"\f377"}.bi-file-earmark-person-fill::before{content:"\f378"}.bi-file-earmark-person::before{content:"\f379"}.bi-file-earmark-play-fill::before{content:"\f37a"}.bi-file-earmark-play::before{content:"\f37b"}.bi-file-earmark-plus-fill::before{content:"\f37c"}.bi-file-earmark-plus::before{content:"\f37d"}.bi-file-earmark-post-fill::before{content:"\f37e"}.bi-file-earmark-post::before{content:"\f37f"}.bi-file-earmark-ppt-fill::before{content:"\f380"}.bi-file-earmark-ppt::before{content:"\f381"}.bi-file-earmark-richtext-fill::before{content:"\f382"}.bi-file-earmark-richtext::before{content:"\f383"}.bi-file-earmark-ruled-fill::before{content:"\f384"}.bi-file-earmark-ruled::before{content:"\f385"}.bi-file-earmark-slides-fill::before{content:"\f386"}.bi-file-earmark-slides::before{content:"\f387"}.bi-file-earmark-spreadsheet-fill::before{content:"\f388"}.bi-file-earmark-spreadsheet::before{content:"\f389"}.bi-file-earmark-text-fill::before{content:"\f38a"}.bi-file-earmark-text::before{content:"\f38b"}.bi-file-earmark-word-fill::before{content:"\f38c"}.bi-file-earmark-word::before{content:"\f38d"}.bi-file-earmark-x-fill::before{content:"\f38e"}.bi-file-earmark-x::before{content:"\f38f"}.bi-file-earmark-zip-fill::before{content:"\f390"}.bi-file-earmark-zip::before{content:"\f391"}.bi-file-earmark::before{content:"\f392"}.bi-file-easel-fill::before{content:"\f393"}.bi-file-easel::before{content:"\f394"}.bi-file-excel-fill::before{content:"\f395"}.bi-file-excel::before{content:"\f396"}.bi-file-fill::before{content:"\f397"}.bi-file-font-fill::before{content:"\f398"}.bi-file-font::before{content:"\f399"}.bi-file-image-fill::before{content:"\f39a"}.bi-file-image::before{content:"\f39b"}.bi-file-lock-fill::before{content:"\f39c"}.bi-file-lock::before{content:"\f39d"}.bi-file-lock2-fill::before{content:"\f39e"}.bi-file-lock2::before{content:"\f39f"}.bi-file-medical-fill::before{content:"\f3a0"}.bi-file-medical::before{content:"\f3a1"}.bi-file-minus-fill::before{content:"\f3a2"}.bi-file-minus::before{content:"\f3a3"}.bi-file-music-fill::before{content:"\f3a4"}.bi-file-music::before{content:"\f3a5"}.bi-file-person-fill::before{content:"\f3a6"}.bi-file-person::before{content:"\f3a7"}.bi-file-play-fill::before{content:"\f3a8"}.bi-file-play::before{content:"\f3a9"}.bi-file-plus-fill::before{content:"\f3aa"}.bi-file-plus::before{content:"\f3ab"}.bi-file-post-fill::before{content:"\f3ac"}.bi-file-post::before{content:"\f3ad"}.bi-file-ppt-fill::before{content:"\f3ae"}.bi-file-ppt::before{content:"\f3af"}.bi-file-richtext-fill::before{content:"\f3b0"}.bi-file-richtext::before{content:"\f3b1"}.bi-file-ruled-fill::before{content:"\f3b2"}.bi-file-ruled::before{content:"\f3b3"}.bi-file-slides-fill::before{content:"\f3b4"}.bi-file-slides::before{content:"\f3b5"}.bi-file-spreadsheet-fill::before{content:"\f3b6"}.bi-file-spreadsheet::before{content:"\f3b7"}.bi-file-text-fill::before{content:"\f3b8"}.bi-file-text::before{content:"\f3b9"}.bi-file-word-fill::before{content:"\f3ba"}.bi-file-word::before{content:"\f3bb"}.bi-file-x-fill::before{content:"\f3bc"}.bi-file-x::before{content:"\f3bd"}.bi-file-zip-fill::before{content:"\f3be"}.bi-file-zip::before{content:"\f3bf"}.bi-file::before{content:"\f3c0"}.bi-files-alt::before{content:"\f3c1"}.bi-files::before{content:"\f3c2"}.bi-film::before{content:"\f3c3"}.bi-filter-circle-fill::before{content:"\f3c4"}.bi-filter-circle::before{content:"\f3c5"}.bi-filter-left::before{content:"\f3c6"}.bi-filter-right::before{content:"\f3c7"}.bi-filter-square-fill::before{content:"\f3c8"}.bi-filter-square::before{content:"\f3c9"}.bi-filter::before{content:"\f3ca"}.bi-flag-fill::before{content:"\f3cb"}.bi-flag::before{content:"\f3cc"}.bi-flower1::before{content:"\f3cd"}.bi-flower2::before{content:"\f3ce"}.bi-flower3::before{content:"\f3cf"}.bi-folder-check::before{content:"\f3d0"}.bi-folder-fill::before{content:"\f3d1"}.bi-folder-minus::before{content:"\f3d2"}.bi-folder-plus::before{content:"\f3d3"}.bi-folder-symlink-fill::before{content:"\f3d4"}.bi-folder-symlink::before{content:"\f3d5"}.bi-folder-x::before{content:"\f3d6"}.bi-folder::before{content:"\f3d7"}.bi-folder2-open::before{content:"\f3d8"}.bi-folder2::before{content:"\f3d9"}.bi-fonts::before{content:"\f3da"}.bi-forward-fill::before{content:"\f3db"}.bi-forward::before{content:"\f3dc"}.bi-front::before{content:"\f3dd"}.bi-fullscreen-exit::before{content:"\f3de"}.bi-fullscreen::before{content:"\f3df"}.bi-funnel-fill::before{content:"\f3e0"}.bi-funnel::before{content:"\f3e1"}.bi-gear-fill::before{content:"\f3e2"}.bi-gear-wide-connected::before{content:"\f3e3"}.bi-gear-wide::before{content:"\f3e4"}.bi-gear::before{content:"\f3e5"}.bi-gem::before{content:"\f3e6"}.bi-geo-alt-fill::before{content:"\f3e7"}.bi-geo-alt::before{content:"\f3e8"}.bi-geo-fill::before{content:"\f3e9"}.bi-geo::before{content:"\f3ea"}.bi-gift-fill::before{content:"\f3eb"}.bi-gift::before{content:"\f3ec"}.bi-github::before{content:"\f3ed"}.bi-globe::before{content:"\f3ee"}.bi-globe2::before{content:"\f3ef"}.bi-google::before{content:"\f3f0"}.bi-graph-down::before{content:"\f3f1"}.bi-graph-up::before{content:"\f3f2"}.bi-grid-1x2-fill::before{content:"\f3f3"}.bi-grid-1x2::before{content:"\f3f4"}.bi-grid-3x2-gap-fill::before{content:"\f3f5"}.bi-grid-3x2-gap::before{content:"\f3f6"}.bi-grid-3x2::before{content:"\f3f7"}.bi-grid-3x3-gap-fill::before{content:"\f3f8"}.bi-grid-3x3-gap::before{content:"\f3f9"}.bi-grid-3x3::before{content:"\f3fa"}.bi-grid-fill::before{content:"\f3fb"}.bi-grid::before{content:"\f3fc"}.bi-grip-horizontal::before{content:"\f3fd"}.bi-grip-vertical::before{content:"\f3fe"}.bi-hammer::before{content:"\f3ff"}.bi-hand-index-fill::before{content:"\f400"}.bi-hand-index-thumb-fill::before{content:"\f401"}.bi-hand-index-thumb::before{content:"\f402"}.bi-hand-index::before{content:"\f403"}.bi-hand-thumbs-down-fill::before{content:"\f404"}.bi-hand-thumbs-down::before{content:"\f405"}.bi-hand-thumbs-up-fill::before{content:"\f406"}.bi-hand-thumbs-up::before{content:"\f407"}.bi-handbag-fill::before{content:"\f408"}.bi-handbag::before{content:"\f409"}.bi-hash::before{content:"\f40a"}.bi-hdd-fill::before{content:"\f40b"}.bi-hdd-network-fill::before{content:"\f40c"}.bi-hdd-network::before{content:"\f40d"}.bi-hdd-rack-fill::before{content:"\f40e"}.bi-hdd-rack::before{content:"\f40f"}.bi-hdd-stack-fill::before{content:"\f410"}.bi-hdd-stack::before{content:"\f411"}.bi-hdd::before{content:"\f412"}.bi-headphones::before{content:"\f413"}.bi-headset::before{content:"\f414"}.bi-heart-fill::before{content:"\f415"}.bi-heart-half::before{content:"\f416"}.bi-heart::before{content:"\f417"}.bi-heptagon-fill::before{content:"\f418"}.bi-heptagon-half::before{content:"\f419"}.bi-heptagon::before{content:"\f41a"}.bi-hexagon-fill::before{content:"\f41b"}.bi-hexagon-half::before{content:"\f41c"}.bi-hexagon::before{content:"\f41d"}.bi-hourglass-bottom::before{content:"\f41e"}.bi-hourglass-split::before{content:"\f41f"}.bi-hourglass-top::before{content:"\f420"}.bi-hourglass::before{content:"\f421"}.bi-house-door-fill::before{content:"\f422"}.bi-house-door::before{content:"\f423"}.bi-house-fill::before{content:"\f424"}.bi-house::before{content:"\f425"}.bi-hr::before{content:"\f426"}.bi-hurricane::before{content:"\f427"}.bi-image-alt::before{content:"\f428"}.bi-image-fill::before{content:"\f429"}.bi-image::before{content:"\f42a"}.bi-images::before{content:"\f42b"}.bi-inbox-fill::before{content:"\f42c"}.bi-inbox::before{content:"\f42d"}.bi-inboxes-fill::before{content:"\f42e"}.bi-inboxes::before{content:"\f42f"}.bi-info-circle-fill::before{content:"\f430"}.bi-info-circle::before{content:"\f431"}.bi-info-square-fill::before{content:"\f432"}.bi-info-square::before{content:"\f433"}.bi-info::before{content:"\f434"}.bi-input-cursor-text::before{content:"\f435"}.bi-input-cursor::before{content:"\f436"}.bi-instagram::before{content:"\f437"}.bi-intersect::before{content:"\f438"}.bi-journal-album::before{content:"\f439"}.bi-journal-arrow-down::before{content:"\f43a"}.bi-journal-arrow-up::before{content:"\f43b"}.bi-journal-bookmark-fill::before{content:"\f43c"}.bi-journal-bookmark::before{content:"\f43d"}.bi-journal-check::before{content:"\f43e"}.bi-journal-code::before{content:"\f43f"}.bi-journal-medical::before{content:"\f440"}.bi-journal-minus::before{content:"\f441"}.bi-journal-plus::before{content:"\f442"}.bi-journal-richtext::before{content:"\f443"}.bi-journal-text::before{content:"\f444"}.bi-journal-x::before{content:"\f445"}.bi-journal::before{content:"\f446"}.bi-journals::before{content:"\f447"}.bi-joystick::before{content:"\f448"}.bi-justify-left::before{content:"\f449"}.bi-justify-right::before{content:"\f44a"}.bi-justify::before{content:"\f44b"}.bi-kanban-fill::before{content:"\f44c"}.bi-kanban::before{content:"\f44d"}.bi-key-fill::before{content:"\f44e"}.bi-key::before{content:"\f44f"}.bi-keyboard-fill::before{content:"\f450"}.bi-keyboard::before{content:"\f451"}.bi-ladder::before{content:"\f452"}.bi-lamp-fill::before{content:"\f453"}.bi-lamp::before{content:"\f454"}.bi-laptop-fill::before{content:"\f455"}.bi-laptop::before{content:"\f456"}.bi-layer-backward::before{content:"\f457"}.bi-layer-forward::before{content:"\f458"}.bi-layers-fill::before{content:"\f459"}.bi-layers-half::before{content:"\f45a"}.bi-layers::before{content:"\f45b"}.bi-layout-sidebar-inset-reverse::before{content:"\f45c"}.bi-layout-sidebar-inset::before{content:"\f45d"}.bi-layout-sidebar-reverse::before{content:"\f45e"}.bi-layout-sidebar::before{content:"\f45f"}.bi-layout-split::before{content:"\f460"}.bi-layout-text-sidebar-reverse::before{content:"\f461"}.bi-layout-text-sidebar::before{content:"\f462"}.bi-layout-text-window-reverse::before{content:"\f463"}.bi-layout-text-window::before{content:"\f464"}.bi-layout-three-columns::before{content:"\f465"}.bi-layout-wtf::before{content:"\f466"}.bi-life-preserver::before{content:"\f467"}.bi-lightbulb-fill::before{content:"\f468"}.bi-lightbulb-off-fill::before{content:"\f469"}.bi-lightbulb-off::before{content:"\f46a"}.bi-lightbulb::before{content:"\f46b"}.bi-lightning-charge-fill::before{content:"\f46c"}.bi-lightning-charge::before{content:"\f46d"}.bi-lightning-fill::before{content:"\f46e"}.bi-lightning::before{content:"\f46f"}.bi-link-45deg::before{content:"\f470"}.bi-link::before{content:"\f471"}.bi-linkedin::before{content:"\f472"}.bi-list-check::before{content:"\f473"}.bi-list-nested::before{content:"\f474"}.bi-list-ol::before{content:"\f475"}.bi-list-stars::before{content:"\f476"}.bi-list-task::before{content:"\f477"}.bi-list-ul::before{content:"\f478"}.bi-list::before{content:"\f479"}.bi-lock-fill::before{content:"\f47a"}.bi-lock::before{content:"\f47b"}.bi-mailbox::before{content:"\f47c"}.bi-mailbox2::before{content:"\f47d"}.bi-map-fill::before{content:"\f47e"}.bi-map::before{content:"\f47f"}.bi-markdown-fill::before{content:"\f480"}.bi-markdown::before{content:"\f481"}.bi-mask::before{content:"\f482"}.bi-megaphone-fill::before{content:"\f483"}.bi-megaphone::before{content:"\f484"}.bi-menu-app-fill::before{content:"\f485"}.bi-menu-app::before{content:"\f486"}.bi-menu-button-fill::before{content:"\f487"}.bi-menu-button-wide-fill::before{content:"\f488"}.bi-menu-button-wide::before{content:"\f489"}.bi-menu-button::before{content:"\f48a"}.bi-menu-down::before{content:"\f48b"}.bi-menu-up::before{content:"\f48c"}.bi-mic-fill::before{content:"\f48d"}.bi-mic-mute-fill::before{content:"\f48e"}.bi-mic-mute::before{content:"\f48f"}.bi-mic::before{content:"\f490"}.bi-minecart-loaded::before{content:"\f491"}.bi-minecart::before{content:"\f492"}.bi-moisture::before{content:"\f493"}.bi-moon-fill::before{content:"\f494"}.bi-moon-stars-fill::before{content:"\f495"}.bi-moon-stars::before{content:"\f496"}.bi-moon::before{content:"\f497"}.bi-mouse-fill::before{content:"\f498"}.bi-mouse::before{content:"\f499"}.bi-mouse2-fill::before{content:"\f49a"}.bi-mouse2::before{content:"\f49b"}.bi-mouse3-fill::before{content:"\f49c"}.bi-mouse3::before{content:"\f49d"}.bi-music-note-beamed::before{content:"\f49e"}.bi-music-note-list::before{content:"\f49f"}.bi-music-note::before{content:"\f4a0"}.bi-music-player-fill::before{content:"\f4a1"}.bi-music-player::before{content:"\f4a2"}.bi-newspaper::before{content:"\f4a3"}.bi-node-minus-fill::before{content:"\f4a4"}.bi-node-minus::before{content:"\f4a5"}.bi-node-plus-fill::before{content:"\f4a6"}.bi-node-plus::before{content:"\f4a7"}.bi-nut-fill::before{content:"\f4a8"}.bi-nut::before{content:"\f4a9"}.bi-octagon-fill::before{content:"\f4aa"}.bi-octagon-half::before{content:"\f4ab"}.bi-octagon::before{content:"\f4ac"}.bi-option::before{content:"\f4ad"}.bi-outlet::before{content:"\f4ae"}.bi-paint-bucket::before{content:"\f4af"}.bi-palette-fill::before{content:"\f4b0"}.bi-palette::before{content:"\f4b1"}.bi-palette2::before{content:"\f4b2"}.bi-paperclip::before{content:"\f4b3"}.bi-paragraph::before{content:"\f4b4"}.bi-patch-check-fill::before{content:"\f4b5"}.bi-patch-check::before{content:"\f4b6"}.bi-patch-exclamation-fill::before{content:"\f4b7"}.bi-patch-exclamation::before{content:"\f4b8"}.bi-patch-minus-fill::before{content:"\f4b9"}.bi-patch-minus::before{content:"\f4ba"}.bi-patch-plus-fill::before{content:"\f4bb"}.bi-patch-plus::before{content:"\f4bc"}.bi-patch-question-fill::before{content:"\f4bd"}.bi-patch-question::before{content:"\f4be"}.bi-pause-btn-fill::before{content:"\f4bf"}.bi-pause-btn::before{content:"\f4c0"}.bi-pause-circle-fill::before{content:"\f4c1"}.bi-pause-circle::before{content:"\f4c2"}.bi-pause-fill::before{content:"\f4c3"}.bi-pause::before{content:"\f4c4"}.bi-peace-fill::before{content:"\f4c5"}.bi-peace::before{content:"\f4c6"}.bi-pen-fill::before{content:"\f4c7"}.bi-pen::before{content:"\f4c8"}.bi-pencil-fill::before{content:"\f4c9"}.bi-pencil-square::before{content:"\f4ca"}.bi-pencil::before{content:"\f4cb"}.bi-pentagon-fill::before{content:"\f4cc"}.bi-pentagon-half::before{content:"\f4cd"}.bi-pentagon::before{content:"\f4ce"}.bi-people-fill::before{content:"\f4cf"}.bi-people::before{content:"\f4d0"}.bi-percent::before{content:"\f4d1"}.bi-person-badge-fill::before{content:"\f4d2"}.bi-person-badge::before{content:"\f4d3"}.bi-person-bounding-box::before{content:"\f4d4"}.bi-person-check-fill::before{content:"\f4d5"}.bi-person-check::before{content:"\f4d6"}.bi-person-circle::before{content:"\f4d7"}.bi-person-dash-fill::before{content:"\f4d8"}.bi-person-dash::before{content:"\f4d9"}.bi-person-fill::before{content:"\f4da"}.bi-person-lines-fill::before{content:"\f4db"}.bi-person-plus-fill::before{content:"\f4dc"}.bi-person-plus::before{content:"\f4dd"}.bi-person-square::before{content:"\f4de"}.bi-person-x-fill::before{content:"\f4df"}.bi-person-x::before{content:"\f4e0"}.bi-person::before{content:"\f4e1"}.bi-phone-fill::before{content:"\f4e2"}.bi-phone-landscape-fill::before{content:"\f4e3"}.bi-phone-landscape::before{content:"\f4e4"}.bi-phone-vibrate-fill::before{content:"\f4e5"}.bi-phone-vibrate::before{content:"\f4e6"}.bi-phone::before{content:"\f4e7"}.bi-pie-chart-fill::before{content:"\f4e8"}.bi-pie-chart::before{content:"\f4e9"}.bi-pin-angle-fill::before{content:"\f4ea"}.bi-pin-angle::before{content:"\f4eb"}.bi-pin-fill::before{content:"\f4ec"}.bi-pin::before{content:"\f4ed"}.bi-pip-fill::before{content:"\f4ee"}.bi-pip::before{content:"\f4ef"}.bi-play-btn-fill::before{content:"\f4f0"}.bi-play-btn::before{content:"\f4f1"}.bi-play-circle-fill::before{content:"\f4f2"}.bi-play-circle::before{content:"\f4f3"}.bi-play-fill::before{content:"\f4f4"}.bi-play::before{content:"\f4f5"}.bi-plug-fill::before{content:"\f4f6"}.bi-plug::before{content:"\f4f7"}.bi-plus-circle-dotted::before{content:"\f4f8"}.bi-plus-circle-fill::before{content:"\f4f9"}.bi-plus-circle::before{content:"\f4fa"}.bi-plus-square-dotted::before{content:"\f4fb"}.bi-plus-square-fill::before{content:"\f4fc"}.bi-plus-square::before{content:"\f4fd"}.bi-plus::before{content:"\f4fe"}.bi-power::before{content:"\f4ff"}.bi-printer-fill::before{content:"\f500"}.bi-printer::before{content:"\f501"}.bi-puzzle-fill::before{content:"\f502"}.bi-puzzle::before{content:"\f503"}.bi-question-circle-fill::before{content:"\f504"}.bi-question-circle::before{content:"\f505"}.bi-question-diamond-fill::before{content:"\f506"}.bi-question-diamond::before{content:"\f507"}.bi-question-octagon-fill::before{content:"\f508"}.bi-question-octagon::before{content:"\f509"}.bi-question-square-fill::before{content:"\f50a"}.bi-question-square::before{content:"\f50b"}.bi-question::before{content:"\f50c"}.bi-rainbow::before{content:"\f50d"}.bi-receipt-cutoff::before{content:"\f50e"}.bi-receipt::before{content:"\f50f"}.bi-reception-0::before{content:"\f510"}.bi-reception-1::before{content:"\f511"}.bi-reception-2::before{content:"\f512"}.bi-reception-3::before{content:"\f513"}.bi-reception-4::before{content:"\f514"}.bi-record-btn-fill::before{content:"\f515"}.bi-record-btn::before{content:"\f516"}.bi-record-circle-fill::before{content:"\f517"}.bi-record-circle::before{content:"\f518"}.bi-record-fill::before{content:"\f519"}.bi-record::before{content:"\f51a"}.bi-record2-fill::before{content:"\f51b"}.bi-record2::before{content:"\f51c"}.bi-reply-all-fill::before{content:"\f51d"}.bi-reply-all::before{content:"\f51e"}.bi-reply-fill::before{content:"\f51f"}.bi-reply::before{content:"\f520"}.bi-rss-fill::before{content:"\f521"}.bi-rss::before{content:"\f522"}.bi-rulers::before{content:"\f523"}.bi-save-fill::before{content:"\f524"}.bi-save::before{content:"\f525"}.bi-save2-fill::before{content:"\f526"}.bi-save2::before{content:"\f527"}.bi-scissors::before{content:"\f528"}.bi-screwdriver::before{content:"\f529"}.bi-search::before{content:"\f52a"}.bi-segmented-nav::before{content:"\f52b"}.bi-server::before{content:"\f52c"}.bi-share-fill::before{content:"\f52d"}.bi-share::before{content:"\f52e"}.bi-shield-check::before{content:"\f52f"}.bi-shield-exclamation::before{content:"\f530"}.bi-shield-fill-check::before{content:"\f531"}.bi-shield-fill-exclamation::before{content:"\f532"}.bi-shield-fill-minus::before{content:"\f533"}.bi-shield-fill-plus::before{content:"\f534"}.bi-shield-fill-x::before{content:"\f535"}.bi-shield-fill::before{content:"\f536"}.bi-shield-lock-fill::before{content:"\f537"}.bi-shield-lock::before{content:"\f538"}.bi-shield-minus::before{content:"\f539"}.bi-shield-plus::before{content:"\f53a"}.bi-shield-shaded::before{content:"\f53b"}.bi-shield-slash-fill::before{content:"\f53c"}.bi-shield-slash::before{content:"\f53d"}.bi-shield-x::before{content:"\f53e"}.bi-shield::before{content:"\f53f"}.bi-shift-fill::before{content:"\f540"}.bi-shift::before{content:"\f541"}.bi-shop-window::before{content:"\f542"}.bi-shop::before{content:"\f543"}.bi-shuffle::before{content:"\f544"}.bi-signpost-2-fill::before{content:"\f545"}.bi-signpost-2::before{content:"\f546"}.bi-signpost-fill::before{content:"\f547"}.bi-signpost-split-fill::before{content:"\f548"}.bi-signpost-split::before{content:"\f549"}.bi-signpost::before{content:"\f54a"}.bi-sim-fill::before{content:"\f54b"}.bi-sim::before{content:"\f54c"}.bi-skip-backward-btn-fill::before{content:"\f54d"}.bi-skip-backward-btn::before{content:"\f54e"}.bi-skip-backward-circle-fill::before{content:"\f54f"}.bi-skip-backward-circle::before{content:"\f550"}.bi-skip-backward-fill::before{content:"\f551"}.bi-skip-backward::before{content:"\f552"}.bi-skip-end-btn-fill::before{content:"\f553"}.bi-skip-end-btn::before{content:"\f554"}.bi-skip-end-circle-fill::before{content:"\f555"}.bi-skip-end-circle::before{content:"\f556"}.bi-skip-end-fill::before{content:"\f557"}.bi-skip-end::before{content:"\f558"}.bi-skip-forward-btn-fill::before{content:"\f559"}.bi-skip-forward-btn::before{content:"\f55a"}.bi-skip-forward-circle-fill::before{content:"\f55b"}.bi-skip-forward-circle::before{content:"\f55c"}.bi-skip-forward-fill::before{content:"\f55d"}.bi-skip-forward::before{content:"\f55e"}.bi-skip-start-btn-fill::before{content:"\f55f"}.bi-skip-start-btn::before{content:"\f560"}.bi-skip-start-circle-fill::before{content:"\f561"}.bi-skip-start-circle::before{content:"\f562"}.bi-skip-start-fill::before{content:"\f563"}.bi-skip-start::before{content:"\f564"}.bi-slack::before{content:"\f565"}.bi-slash-circle-fill::before{content:"\f566"}.bi-slash-circle::before{content:"\f567"}.bi-slash-square-fill::before{content:"\f568"}.bi-slash-square::before{content:"\f569"}.bi-slash::before{content:"\f56a"}.bi-sliders::before{content:"\f56b"}.bi-smartwatch::before{content:"\f56c"}.bi-snow::before{content:"\f56d"}.bi-snow2::before{content:"\f56e"}.bi-snow3::before{content:"\f56f"}.bi-sort-alpha-down-alt::before{content:"\f570"}.bi-sort-alpha-down::before{content:"\f571"}.bi-sort-alpha-up-alt::before{content:"\f572"}.bi-sort-alpha-up::before{content:"\f573"}.bi-sort-down-alt::before{content:"\f574"}.bi-sort-down::before{content:"\f575"}.bi-sort-numeric-down-alt::before{content:"\f576"}.bi-sort-numeric-down::before{content:"\f577"}.bi-sort-numeric-up-alt::before{content:"\f578"}.bi-sort-numeric-up::before{content:"\f579"}.bi-sort-up-alt::before{content:"\f57a"}.bi-sort-up::before{content:"\f57b"}.bi-soundwave::before{content:"\f57c"}.bi-speaker-fill::before{content:"\f57d"}.bi-speaker::before{content:"\f57e"}.bi-speedometer::before{content:"\f57f"}.bi-speedometer2::before{content:"\f580"}.bi-spellcheck::before{content:"\f581"}.bi-square-fill::before{content:"\f582"}.bi-square-half::before{content:"\f583"}.bi-square::before{content:"\f584"}.bi-stack::before{content:"\f585"}.bi-star-fill::before{content:"\f586"}.bi-star-half::before{content:"\f587"}.bi-star::before{content:"\f588"}.bi-stars::before{content:"\f589"}.bi-stickies-fill::before{content:"\f58a"}.bi-stickies::before{content:"\f58b"}.bi-sticky-fill::before{content:"\f58c"}.bi-sticky::before{content:"\f58d"}.bi-stop-btn-fill::before{content:"\f58e"}.bi-stop-btn::before{content:"\f58f"}.bi-stop-circle-fill::before{content:"\f590"}.bi-stop-circle::before{content:"\f591"}.bi-stop-fill::before{content:"\f592"}.bi-stop::before{content:"\f593"}.bi-stoplights-fill::before{content:"\f594"}.bi-stoplights::before{content:"\f595"}.bi-stopwatch-fill::before{content:"\f596"}.bi-stopwatch::before{content:"\f597"}.bi-subtract::before{content:"\f598"}.bi-suit-club-fill::before{content:"\f599"}.bi-suit-club::before{content:"\f59a"}.bi-suit-diamond-fill::before{content:"\f59b"}.bi-suit-diamond::before{content:"\f59c"}.bi-suit-heart-fill::before{content:"\f59d"}.bi-suit-heart::before{content:"\f59e"}.bi-suit-spade-fill::before{content:"\f59f"}.bi-suit-spade::before{content:"\f5a0"}.bi-sun-fill::before{content:"\f5a1"}.bi-sun::before{content:"\f5a2"}.bi-sunglasses::before{content:"\f5a3"}.bi-sunrise-fill::before{content:"\f5a4"}.bi-sunrise::before{content:"\f5a5"}.bi-sunset-fill::before{content:"\f5a6"}.bi-sunset::before{content:"\f5a7"}.bi-symmetry-horizontal::before{content:"\f5a8"}.bi-symmetry-vertical::before{content:"\f5a9"}.bi-table::before{content:"\f5aa"}.bi-tablet-fill::before{content:"\f5ab"}.bi-tablet-landscape-fill::before{content:"\f5ac"}.bi-tablet-landscape::before{content:"\f5ad"}.bi-tablet::before{content:"\f5ae"}.bi-tag-fill::before{content:"\f5af"}.bi-tag::before{content:"\f5b0"}.bi-tags-fill::before{content:"\f5b1"}.bi-tags::before{content:"\f5b2"}.bi-telegram::before{content:"\f5b3"}.bi-telephone-fill::before{content:"\f5b4"}.bi-telephone-forward-fill::before{content:"\f5b5"}.bi-telephone-forward::before{content:"\f5b6"}.bi-telephone-inbound-fill::before{content:"\f5b7"}.bi-telephone-inbound::before{content:"\f5b8"}.bi-telephone-minus-fill::before{content:"\f5b9"}.bi-telephone-minus::before{content:"\f5ba"}.bi-telephone-outbound-fill::before{content:"\f5bb"}.bi-telephone-outbound::before{content:"\f5bc"}.bi-telephone-plus-fill::before{content:"\f5bd"}.bi-telephone-plus::before{content:"\f5be"}.bi-telephone-x-fill::before{content:"\f5bf"}.bi-telephone-x::before{content:"\f5c0"}.bi-telephone::before{content:"\f5c1"}.bi-terminal-fill::before{content:"\f5c2"}.bi-terminal::before{content:"\f5c3"}.bi-text-center::before{content:"\f5c4"}.bi-text-indent-left::before{content:"\f5c5"}.bi-text-indent-right::before{content:"\f5c6"}.bi-text-left::before{content:"\f5c7"}.bi-text-paragraph::before{content:"\f5c8"}.bi-text-right::before{content:"\f5c9"}.bi-textarea-resize::before{content:"\f5ca"}.bi-textarea-t::before{content:"\f5cb"}.bi-textarea::before{content:"\f5cc"}.bi-thermometer-half::before{content:"\f5cd"}.bi-thermometer-high::before{content:"\f5ce"}.bi-thermometer-low::before{content:"\f5cf"}.bi-thermometer-snow::before{content:"\f5d0"}.bi-thermometer-sun::before{content:"\f5d1"}.bi-thermometer::before{content:"\f5d2"}.bi-three-dots-vertical::before{content:"\f5d3"}.bi-three-dots::before{content:"\f5d4"}.bi-toggle-off::before{content:"\f5d5"}.bi-toggle-on::before{content:"\f5d6"}.bi-toggle2-off::before{content:"\f5d7"}.bi-toggle2-on::before{content:"\f5d8"}.bi-toggles::before{content:"\f5d9"}.bi-toggles2::before{content:"\f5da"}.bi-tools::before{content:"\f5db"}.bi-tornado::before{content:"\f5dc"}.bi-trash-fill::before{content:"\f5dd"}.bi-trash::before{content:"\f5de"}.bi-trash2-fill::before{content:"\f5df"}.bi-trash2::before{content:"\f5e0"}.bi-tree-fill::before{content:"\f5e1"}.bi-tree::before{content:"\f5e2"}.bi-triangle-fill::before{content:"\f5e3"}.bi-triangle-half::before{content:"\f5e4"}.bi-triangle::before{content:"\f5e5"}.bi-trophy-fill::before{content:"\f5e6"}.bi-trophy::before{content:"\f5e7"}.bi-tropical-storm::before{content:"\f5e8"}.bi-truck-flatbed::before{content:"\f5e9"}.bi-truck::before{content:"\f5ea"}.bi-tsunami::before{content:"\f5eb"}.bi-tv-fill::before{content:"\f5ec"}.bi-tv::before{content:"\f5ed"}.bi-twitch::before{content:"\f5ee"}.bi-twitter::before{content:"\f5ef"}.bi-type-bold::before{content:"\f5f0"}.bi-type-h1::before{content:"\f5f1"}.bi-type-h2::before{content:"\f5f2"}.bi-type-h3::before{content:"\f5f3"}.bi-type-italic::before{content:"\f5f4"}.bi-type-strikethrough::before{content:"\f5f5"}.bi-type-underline::before{content:"\f5f6"}.bi-type::before{content:"\f5f7"}.bi-ui-checks-grid::before{content:"\f5f8"}.bi-ui-checks::before{content:"\f5f9"}.bi-ui-radios-grid::before{content:"\f5fa"}.bi-ui-radios::before{content:"\f5fb"}.bi-umbrella-fill::before{content:"\f5fc"}.bi-umbrella::before{content:"\f5fd"}.bi-union::before{content:"\f5fe"}.bi-unlock-fill::before{content:"\f5ff"}.bi-unlock::before{content:"\f600"}.bi-upc-scan::before{content:"\f601"}.bi-upc::before{content:"\f602"}.bi-upload::before{content:"\f603"}.bi-vector-pen::before{content:"\f604"}.bi-view-list::before{content:"\f605"}.bi-view-stacked::before{content:"\f606"}.bi-vinyl-fill::before{content:"\f607"}.bi-vinyl::before{content:"\f608"}.bi-voicemail::before{content:"\f609"}.bi-volume-down-fill::before{content:"\f60a"}.bi-volume-down::before{content:"\f60b"}.bi-volume-mute-fill::before{content:"\f60c"}.bi-volume-mute::before{content:"\f60d"}.bi-volume-off-fill::before{content:"\f60e"}.bi-volume-off::before{content:"\f60f"}.bi-volume-up-fill::before{content:"\f610"}.bi-volume-up::before{content:"\f611"}.bi-vr::before{content:"\f612"}.bi-wallet-fill::before{content:"\f613"}.bi-wallet::before{content:"\f614"}.bi-wallet2::before{content:"\f615"}.bi-watch::before{content:"\f616"}.bi-water::before{content:"\f617"}.bi-whatsapp::before{content:"\f618"}.bi-wifi-1::before{content:"\f619"}.bi-wifi-2::before{content:"\f61a"}.bi-wifi-off::before{content:"\f61b"}.bi-wifi::before{content:"\f61c"}.bi-wind::before{content:"\f61d"}.bi-window-dock::before{content:"\f61e"}.bi-window-sidebar::before{content:"\f61f"}.bi-window::before{content:"\f620"}.bi-wrench::before{content:"\f621"}.bi-x-circle-fill::before{content:"\f622"}.bi-x-circle::before{content:"\f623"}.bi-x-diamond-fill::before{content:"\f624"}.bi-x-diamond::before{content:"\f625"}.bi-x-octagon-fill::before{content:"\f626"}.bi-x-octagon::before{content:"\f627"}.bi-x-square-fill::before{content:"\f628"}.bi-x-square::before{content:"\f629"}.bi-x::before{content:"\f62a"}.bi-youtube::before{content:"\f62b"}.bi-zoom-in::before{content:"\f62c"}.bi-zoom-out::before{content:"\f62d"}.bi-bank::before{content:"\f62e"}.bi-bank2::before{content:"\f62f"}.bi-bell-slash-fill::before{content:"\f630"}.bi-bell-slash::before{content:"\f631"}.bi-cash-coin::before{content:"\f632"}.bi-check-lg::before{content:"\f633"}.bi-coin::before{content:"\f634"}.bi-currency-bitcoin::before{content:"\f635"}.bi-currency-dollar::before{content:"\f636"}.bi-currency-euro::before{content:"\f637"}.bi-currency-exchange::before{content:"\f638"}.bi-currency-pound::before{content:"\f639"}.bi-currency-yen::before{content:"\f63a"}.bi-dash-lg::before{content:"\f63b"}.bi-exclamation-lg::before{content:"\f63c"}.bi-file-earmark-pdf-fill::before{content:"\f63d"}.bi-file-earmark-pdf::before{content:"\f63e"}.bi-file-pdf-fill::before{content:"\f63f"}.bi-file-pdf::before{content:"\f640"}.bi-gender-ambiguous::before{content:"\f641"}.bi-gender-female::before{content:"\f642"}.bi-gender-male::before{content:"\f643"}.bi-gender-trans::before{content:"\f644"}.bi-headset-vr::before{content:"\f645"}.bi-info-lg::before{content:"\f646"}.bi-mastodon::before{content:"\f647"}.bi-messenger::before{content:"\f648"}.bi-piggy-bank-fill::before{content:"\f649"}.bi-piggy-bank::before{content:"\f64a"}.bi-pin-map-fill::before{content:"\f64b"}.bi-pin-map::before{content:"\f64c"}.bi-plus-lg::before{content:"\f64d"}.bi-question-lg::before{content:"\f64e"}.bi-recycle::before{content:"\f64f"}.bi-reddit::before{content:"\f650"}.bi-safe-fill::before{content:"\f651"}.bi-safe2-fill::before{content:"\f652"}.bi-safe2::before{content:"\f653"}.bi-sd-card-fill::before{content:"\f654"}.bi-sd-card::before{content:"\f655"}.bi-skype::before{content:"\f656"}.bi-slash-lg::before{content:"\f657"}.bi-translate::before{content:"\f658"}.bi-x-lg::before{content:"\f659"}.bi-safe::before{content:"\f65a"}.bi-apple::before{content:"\f65b"}.bi-microsoft::before{content:"\f65d"}.bi-windows::before{content:"\f65e"}.bi-behance::before{content:"\f65c"}.bi-dribbble::before{content:"\f65f"}.bi-line::before{content:"\f660"}.bi-medium::before{content:"\f661"}.bi-paypal::before{content:"\f662"}.bi-pinterest::before{content:"\f663"}.bi-signal::before{content:"\f664"}.bi-snapchat::before{content:"\f665"}.bi-spotify::before{content:"\f666"}.bi-stack-overflow::before{content:"\f667"}.bi-strava::before{content:"\f668"}.bi-wordpress::before{content:"\f669"}.bi-vimeo::before{content:"\f66a"}.bi-activity::before{content:"\f66b"}.bi-easel2-fill::before{content:"\f66c"}.bi-easel2::before{content:"\f66d"}.bi-easel3-fill::before{content:"\f66e"}.bi-easel3::before{content:"\f66f"}.bi-fan::before{content:"\f670"}.bi-fingerprint::before{content:"\f671"}.bi-graph-down-arrow::before{content:"\f672"}.bi-graph-up-arrow::before{content:"\f673"}.bi-hypnotize::before{content:"\f674"}.bi-magic::before{content:"\f675"}.bi-person-rolodex::before{content:"\f676"}.bi-person-video::before{content:"\f677"}.bi-person-video2::before{content:"\f678"}.bi-person-video3::before{content:"\f679"}.bi-person-workspace::before{content:"\f67a"}.bi-radioactive::before{content:"\f67b"}.bi-webcam-fill::before{content:"\f67c"}.bi-webcam::before{content:"\f67d"}.bi-yin-yang::before{content:"\f67e"}.bi-bandaid-fill::before{content:"\f680"}.bi-bandaid::before{content:"\f681"}.bi-bluetooth::before{content:"\f682"}.bi-body-text::before{content:"\f683"}.bi-boombox::before{content:"\f684"}.bi-boxes::before{content:"\f685"}.bi-dpad-fill::before{content:"\f686"}.bi-dpad::before{content:"\f687"}.bi-ear-fill::before{content:"\f688"}.bi-ear::before{content:"\f689"}.bi-envelope-check-1::before{content:"\f68a"}.bi-envelope-check-fill::before{content:"\f68b"}.bi-envelope-check::before{content:"\f68c"}.bi-envelope-dash-1::before{content:"\f68d"}.bi-envelope-dash-fill::before{content:"\f68e"}.bi-envelope-dash::before{content:"\f68f"}.bi-envelope-exclamation-1::before{content:"\f690"}.bi-envelope-exclamation-fill::before{content:"\f691"}.bi-envelope-exclamation::before{content:"\f692"}.bi-envelope-plus-fill::before{content:"\f693"}.bi-envelope-plus::before{content:"\f694"}.bi-envelope-slash-1::before{content:"\f695"}.bi-envelope-slash-fill::before{content:"\f696"}.bi-envelope-slash::before{content:"\f697"}.bi-envelope-x-1::before{content:"\f698"}.bi-envelope-x-fill::before{content:"\f699"}.bi-envelope-x::before{content:"\f69a"}.bi-explicit-fill::before{content:"\f69b"}.bi-explicit::before{content:"\f69c"}.bi-git::before{content:"\f69d"}.bi-infinity::before{content:"\f69e"}.bi-list-columns-reverse::before{content:"\f69f"}.bi-list-columns::before{content:"\f6a0"}.bi-meta::before{content:"\f6a1"}.bi-mortorboard-fill::before{content:"\f6a2"}.bi-mortorboard::before{content:"\f6a3"}.bi-nintendo-switch::before{content:"\f6a4"}.bi-pc-display-horizontal::before{content:"\f6a5"}.bi-pc-display::before{content:"\f6a6"}.bi-pc-horizontal::before{content:"\f6a7"}.bi-pc::before{content:"\f6a8"}.bi-playstation::before{content:"\f6a9"}.bi-plus-slash-minus::before{content:"\f6aa"}.bi-projector-fill::before{content:"\f6ab"}.bi-projector::before{content:"\f6ac"}.bi-qr-code-scan::before{content:"\f6ad"}.bi-qr-code::before{content:"\f6ae"}.bi-quora::before{content:"\f6af"}.bi-quote::before{content:"\f6b0"}.bi-robot::before{content:"\f6b1"}.bi-send-check-fill::before{content:"\f6b2"}.bi-send-check::before{content:"\f6b3"}.bi-send-dash-fill::before{content:"\f6b4"}.bi-send-dash::before{content:"\f6b5"}.bi-send-exclamation-1::before{content:"\f6b6"}.bi-send-exclamation-fill::before{content:"\f6b7"}.bi-send-exclamation::before{content:"\f6b8"}.bi-send-fill::before{content:"\f6b9"}.bi-send-plus-fill::before{content:"\f6ba"}.bi-send-plus::before{content:"\f6bb"}.bi-send-slash-fill::before{content:"\f6bc"}.bi-send-slash::before{content:"\f6bd"}.bi-send-x-fill::before{content:"\f6be"}.bi-send-x::before{content:"\f6bf"}.bi-send::before{content:"\f6c0"}.bi-steam::before{content:"\f6c1"}.bi-terminal-dash-1::before{content:"\f6c2"}.bi-terminal-dash::before{content:"\f6c3"}.bi-terminal-plus::before{content:"\f6c4"}.bi-terminal-split::before{content:"\f6c5"}.bi-ticket-detailed-fill::before{content:"\f6c6"}.bi-ticket-detailed::before{content:"\f6c7"}.bi-ticket-fill::before{content:"\f6c8"}.bi-ticket-perforated-fill::before{content:"\f6c9"}.bi-ticket-perforated::before{content:"\f6ca"}.bi-ticket::before{content:"\f6cb"}.bi-tiktok::before{content:"\f6cc"}.bi-window-dash::before{content:"\f6cd"}.bi-window-desktop::before{content:"\f6ce"}.bi-window-fullscreen::before{content:"\f6cf"}.bi-window-plus::before{content:"\f6d0"}.bi-window-split::before{content:"\f6d1"}.bi-window-stack::before{content:"\f6d2"}.bi-window-x::before{content:"\f6d3"}.bi-xbox::before{content:"\f6d4"}.bi-ethernet::before{content:"\f6d5"}.bi-hdmi-fill::before{content:"\f6d6"}.bi-hdmi::before{content:"\f6d7"}.bi-usb-c-fill::before{content:"\f6d8"}.bi-usb-c::before{content:"\f6d9"}.bi-usb-fill::before{content:"\f6da"}.bi-usb-plug-fill::before{content:"\f6db"}.bi-usb-plug::before{content:"\f6dc"}.bi-usb-symbol::before{content:"\f6dd"}.bi-usb::before{content:"\f6de"}.bi-boombox-fill::before{content:"\f6df"}.bi-displayport-1::before{content:"\f6e0"}.bi-displayport::before{content:"\f6e1"}.bi-gpu-card::before{content:"\f6e2"}.bi-memory::before{content:"\f6e3"}.bi-modem-fill::before{content:"\f6e4"}.bi-modem::before{content:"\f6e5"}.bi-motherboard-fill::before{content:"\f6e6"}.bi-motherboard::before{content:"\f6e7"}.bi-optical-audio-fill::before{content:"\f6e8"}.bi-optical-audio::before{content:"\f6e9"}.bi-pci-card::before{content:"\f6ea"}.bi-router-fill::before{content:"\f6eb"}.bi-router::before{content:"\f6ec"}.bi-ssd-fill::before{content:"\f6ed"}.bi-ssd::before{content:"\f6ee"}.bi-thunderbolt-fill::before{content:"\f6ef"}.bi-thunderbolt::before{content:"\f6f0"}.bi-usb-drive-fill::before{content:"\f6f1"}.bi-usb-drive::before{content:"\f6f2"}.bi-usb-micro-fill::before{content:"\f6f3"}.bi-usb-micro::before{content:"\f6f4"}.bi-usb-mini-fill::before{content:"\f6f5"}.bi-usb-mini::before{content:"\f6f6"}.bi-cloud-haze2::before{content:"\f6f7"}.bi-device-hdd-fill::before{content:"\f6f8"}.bi-device-hdd::before{content:"\f6f9"}.bi-device-ssd-fill::before{content:"\f6fa"}.bi-device-ssd::before{content:"\f6fb"}.bi-displayport-fill::before{content:"\f6fc"}.bi-mortarboard-fill::before{content:"\f6fd"}.bi-mortarboard::before{content:"\f6fe"}.bi-terminal-x::before{content:"\f6ff"}.bi-arrow-through-heart-fill::before{content:"\f700"}.bi-arrow-through-heart::before{content:"\f701"}.bi-badge-sd-fill::before{content:"\f702"}.bi-badge-sd::before{content:"\f703"}.bi-bag-heart-fill::before{content:"\f704"}.bi-bag-heart::before{content:"\f705"}.bi-balloon-fill::before{content:"\f706"}.bi-balloon-heart-fill::before{content:"\f707"}.bi-balloon-heart::before{content:"\f708"}.bi-balloon::before{content:"\f709"}.bi-box2-fill::before{content:"\f70a"}.bi-box2-heart-fill::before{content:"\f70b"}.bi-box2-heart::before{content:"\f70c"}.bi-box2::before{content:"\f70d"}.bi-braces-asterisk::before{content:"\f70e"}.bi-calendar-heart-fill::before{content:"\f70f"}.bi-calendar-heart::before{content:"\f710"}.bi-calendar2-heart-fill::before{content:"\f711"}.bi-calendar2-heart::before{content:"\f712"}.bi-chat-heart-fill::before{content:"\f713"}.bi-chat-heart::before{content:"\f714"}.bi-chat-left-heart-fill::before{content:"\f715"}.bi-chat-left-heart::before{content:"\f716"}.bi-chat-right-heart-fill::before{content:"\f717"}.bi-chat-right-heart::before{content:"\f718"}.bi-chat-square-heart-fill::before{content:"\f719"}.bi-chat-square-heart::before{content:"\f71a"}.bi-clipboard-check-fill::before{content:"\f71b"}.bi-clipboard-data-fill::before{content:"\f71c"}.bi-clipboard-fill::before{content:"\f71d"}.bi-clipboard-heart-fill::before{content:"\f71e"}.bi-clipboard-heart::before{content:"\f71f"}.bi-clipboard-minus-fill::before{content:"\f720"}.bi-clipboard-plus-fill::before{content:"\f721"}.bi-clipboard-pulse::before{content:"\f722"}.bi-clipboard-x-fill::before{content:"\f723"}.bi-clipboard2-check-fill::before{content:"\f724"}.bi-clipboard2-check::before{content:"\f725"}.bi-clipboard2-data-fill::before{content:"\f726"}.bi-clipboard2-data::before{content:"\f727"}.bi-clipboard2-fill::before{content:"\f728"}.bi-clipboard2-heart-fill::before{content:"\f729"}.bi-clipboard2-heart::before{content:"\f72a"}.bi-clipboard2-minus-fill::before{content:"\f72b"}.bi-clipboard2-minus::before{content:"\f72c"}.bi-clipboard2-plus-fill::before{content:"\f72d"}.bi-clipboard2-plus::before{content:"\f72e"}.bi-clipboard2-pulse-fill::before{content:"\f72f"}.bi-clipboard2-pulse::before{content:"\f730"}.bi-clipboard2-x-fill::before{content:"\f731"}.bi-clipboard2-x::before{content:"\f732"}.bi-clipboard2::before{content:"\f733"}.bi-emoji-kiss-fill::before{content:"\f734"}.bi-emoji-kiss::before{content:"\f735"}.bi-envelope-heart-fill::before{content:"\f736"}.bi-envelope-heart::before{content:"\f737"}.bi-envelope-open-heart-fill::before{content:"\f738"}.bi-envelope-open-heart::before{content:"\f739"}.bi-envelope-paper-fill::before{content:"\f73a"}.bi-envelope-paper-heart-fill::before{content:"\f73b"}.bi-envelope-paper-heart::before{content:"\f73c"}.bi-envelope-paper::before{content:"\f73d"}.bi-filetype-aac::before{content:"\f73e"}.bi-filetype-ai::before{content:"\f73f"}.bi-filetype-bmp::before{content:"\f740"}.bi-filetype-cs::before{content:"\f741"}.bi-filetype-css::before{content:"\f742"}.bi-filetype-csv::before{content:"\f743"}.bi-filetype-doc::before{content:"\f744"}.bi-filetype-docx::before{content:"\f745"}.bi-filetype-exe::before{content:"\f746"}.bi-filetype-gif::before{content:"\f747"}.bi-filetype-heic::before{content:"\f748"}.bi-filetype-html::before{content:"\f749"}.bi-filetype-java::before{content:"\f74a"}.bi-filetype-jpg::before{content:"\f74b"}.bi-filetype-js::before{content:"\f74c"}.bi-filetype-jsx::before{content:"\f74d"}.bi-filetype-key::before{content:"\f74e"}.bi-filetype-m4p::before{content:"\f74f"}.bi-filetype-md::before{content:"\f750"}.bi-filetype-mdx::before{content:"\f751"}.bi-filetype-mov::before{content:"\f752"}.bi-filetype-mp3::before{content:"\f753"}.bi-filetype-mp4::before{content:"\f754"}.bi-filetype-otf::before{content:"\f755"}.bi-filetype-pdf::before{content:"\f756"}.bi-filetype-php::before{content:"\f757"}.bi-filetype-png::before{content:"\f758"}.bi-filetype-ppt-1::before{content:"\f759"}.bi-filetype-ppt::before{content:"\f75a"}.bi-filetype-psd::before{content:"\f75b"}.bi-filetype-py::before{content:"\f75c"}.bi-filetype-raw::before{content:"\f75d"}.bi-filetype-rb::before{content:"\f75e"}.bi-filetype-sass::before{content:"\f75f"}.bi-filetype-scss::before{content:"\f760"}.bi-filetype-sh::before{content:"\f761"}.bi-filetype-svg::before{content:"\f762"}.bi-filetype-tiff::before{content:"\f763"}.bi-filetype-tsx::before{content:"\f764"}.bi-filetype-ttf::before{content:"\f765"}.bi-filetype-txt::before{content:"\f766"}.bi-filetype-wav::before{content:"\f767"}.bi-filetype-woff::before{content:"\f768"}.bi-filetype-xls-1::before{content:"\f769"}.bi-filetype-xls::before{content:"\f76a"}.bi-filetype-xml::before{content:"\f76b"}.bi-filetype-yml::before{content:"\f76c"}.bi-heart-arrow::before{content:"\f76d"}.bi-heart-pulse-fill::before{content:"\f76e"}.bi-heart-pulse::before{content:"\f76f"}.bi-heartbreak-fill::before{content:"\f770"}.bi-heartbreak::before{content:"\f771"}.bi-hearts::before{content:"\f772"}.bi-hospital-fill::before{content:"\f773"}.bi-hospital::before{content:"\f774"}.bi-house-heart-fill::before{content:"\f775"}.bi-house-heart::before{content:"\f776"}.bi-incognito::before{content:"\f777"}.bi-magnet-fill::before{content:"\f778"}.bi-magnet::before{content:"\f779"}.bi-person-heart::before{content:"\f77a"}.bi-person-hearts::before{content:"\f77b"}.bi-phone-flip::before{content:"\f77c"}.bi-plugin::before{content:"\f77d"}.bi-postage-fill::before{content:"\f77e"}.bi-postage-heart-fill::before{content:"\f77f"}.bi-postage-heart::before{content:"\f780"}.bi-postage::before{content:"\f781"}.bi-postcard-fill::before{content:"\f782"}.bi-postcard-heart-fill::before{content:"\f783"}.bi-postcard-heart::before{content:"\f784"}.bi-postcard::before{content:"\f785"}.bi-search-heart-fill::before{content:"\f786"}.bi-search-heart::before{content:"\f787"}.bi-sliders2-vertical::before{content:"\f788"}.bi-sliders2::before{content:"\f789"}.bi-trash3-fill::before{content:"\f78a"}.bi-trash3::before{content:"\f78b"}.bi-valentine::before{content:"\f78c"}.bi-valentine2::before{content:"\f78d"}.bi-wrench-adjustable-circle-fill::before{content:"\f78e"}.bi-wrench-adjustable-circle::before{content:"\f78f"}.bi-wrench-adjustable::before{content:"\f790"}.bi-filetype-json::before{content:"\f791"}.bi-filetype-pptx::before{content:"\f792"}.bi-filetype-xlsx::before{content:"\f793"}

    `

    var new_sty = document.createElement("style");
    new_sty.setAttribute("type", "text/css");
    new_sty.appendChild(document.createTextNode(my_css));
    document.body.appendChild(new_sty);

    function getItem(name) {
        var itemid = itemarray[name];
        var lowestbazaar = getLowestBazaar(itemid);
        var marketprice = getMarketPrice(itemid);

    }

    function cap(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    $(document).on("click", "#addId", function () {
        itemstocheck.push(String($(this).html()))
        localStorage.setItem("itemstocheck", JSON.stringify(itemstocheck));
        //console.log(itemstocheck);
    })
    $(document).on("keyup", "#searchbar", function () {
        var searchinput = $(this).val();
        searchinput = cap(searchinput)
        for (var key in itemarray) {
            //console.log(key + key.indexOf(searchinput));
            if (key.indexOf(searchinput) != -1) {
                $("#searchbarresult").html("<b>" + key + "<b><br>ID - <span id='addId' style='cursor:pointer;' title='Add to price checker'>" + itemarray[key] + "</span><br><br>");
                break;
            }
        }
    });

    'use strict';

    var hash = $(location).attr('hash');
    var t = setTimeout(function () {
        //console.log("Loaded Cake's autofiller");
        // Highlight items that are a % lower than the next lowest bazaar price
    }, 1000)

    $(document).on("click", "#checkMarketPrices", function () {
        $("#checkMarketPrices").html("Checking market...");
        $("#checkMarketPrices").prop("disabled", true);
        $('.ca-result').html("");
        var interval = 500
        var countindex = 0;
      var itemname = ""
        $('.ca-result').append("Looking for profitable plushies..<br>");

        itemstocheck.forEach(function (element, index) {
          
        
            countindex++;
            setTimeout(function () {
                if (c_api_key !== '' && c_api_key !== undefined) {
                    var title = $(this);

                    var bazaar1
                    var bazaar2

                    var itemID = element

                    $.getJSON("https://api.torn.com/torn/" + itemID + "?selections=items&key=" + c_api_key, function (data) {
                        marketitem = data.items[itemID] // buy_price, circulation, description, effect, image, market_value, name, requirement, sell_price, type, weapon_type
                        $.getJSON("https://api.torn.com/market/" + itemID + "?selections=bazaar&key=" + c_api_key, function (databazaar) {

                            var factor = databazaar.bazaar[1].cost / databazaar.bazaar[0].cost
                            marketprice = marketitem.market_value
                            var diff = marketprice - databazaar.bazaar[0].cost;
                            ////console.log(databazaar.bazaar[0]);
                            var bazaarcostone = databazaar.bazaar[0].cost;
                            var bazaarcosttwo = databazaar.bazaar[1].cost;
                            var bazaarquant = databazaar.bazaar[0].quantity;
                            var totalmarket = (marketprice * pricefactor) * bazaarquant;
                            var totalprofit;
                            if (localStorage.getItem("marketorbazaar") == "bazaar") {
                                totalprofit = (bazaarcosttwo * pricefactor) - bazaarcostone;
                                console.log("checking based on second lowest bazaar price * factor");
                            } else {
                                totalprofit = marketprice * pricefactor - bazaarcostone;
                                console.log("checking based on marketprice * factor");
                            }
                            totalprofit = Math.round(totalprofit)
                            $.ajax({
                                url: "imarket.php",
                                type: "POST",
                                data: {
                                    step: 'getShopList1',
                                    itemID: itemID
                                },
                            }).done(function (data) {
                                var thelink
                                var lines = data.split('\n');

                                thelink = lines[20]
                                var linkarray = thelink.split(/\"/)
                                linkarray[3] = linkarray[3] + "&tt_itemid=" + itemID
                                thelink = linkarray[0] + linkarray[1] + linkarray[2] + linkarray[3] + linkarray[4];
                              
                              for (var k in itemarray) {
                                  if (itemarray[k] == element) {
                                   
                                      itemname = k;
                                  }
                              }
                                if (totalprofit >= 100000) {
                                    $('.ca-result').append("<b>" + itemname + "</b><br>Profit " + thelink + "<span style='color:white; background:green;padding:3px;margin:3px;line-height: 27px;'>$" + totalprofit + " each</span> </a></span><br>")

                                } else if (totalprofit > 0) {
                                    $('.ca-result').append("<b>" + itemname + "</b><br>Profit " + thelink + "<span style='color:white; background:orange;padding:3px;margin:3px;line-height: 27px;'>$" + totalprofit + " each</span> </a></span><br>")

                                } else {
                                    //$('.ca-result').append("<b>" + element + "</b><br>Profit "+thelink+"<span style='color:white; background:red;padding:3px;margin:3px;line-height: 27px;'>$"+totalprofit+" total</span> </a></span><br>")
                                }

                                //$(title).append("<br><b style='color:green;'>"+thelink+"BUY</a></b>")
                                countindex--;
                                //console.log("index=" + countindex + "\n");

                                if (countindex == 0) {
                                    $('.ca-result').append("Done checking");
                                    $("#checkMarketPrices").html("Check Marketprices");
                                    $("#checkMarketPrices").prop("disabled", false);
                                }

                            });
                        });
                    })
                }

            }, interval * countindex)
        })

    })

    var sidebarContent;

    if (pricefactor !== undefined && c_api_key !== '') {
        sidebarContent = `
<span id="ca-pricefactor">
        <span class="ca-subtitle">Price factor</span>
        <input class='ca-inputtext' id='c-pricefactor' type='number' step='0.01' value='` + pricefactor + `'/>
      </span>
        <a id='calctrade' class='ca-btn'>Calc. Trade val.</a>
      <span id="ca-tool-content" class="ca-selector">
      <a href="https://www.torn.com/imarket.php#/p=market&cat=plushies" class="ca-btn"><span class="icon-btn material-symbols-outlined">smart_toy</span>Shop Plushies</a>
            <a href="https://www.torn.com/imarket.php#/p=market&cat=flowers" class="ca-btn"><span class="icon-btn material-symbols-outlined">potted_plant</span>Shop Flowers</a>
            <a href="https://www.torn.com/bazaar.php#/manage" class="ca-btn"><span class="icon-btn material-symbols-outlined">edit_calendar</span>Manage Bazaar</a>
            <a href="https://www.torn.com/bazaar.php#/add" class="ca-btn"><span class="icon-btn material-symbols-outlined">add_shopping_cart</span>Add to Bazaar</a>
            <a href="https://www.torn.com/shops.php?step=bitsnbobs" class="ca-btn"><span class="icon-btn material-symbols-outlined">local_convenience_store</span>Bits 'n Bobs</a>
            <a href="https://www.torn.com/imarket.php" class="ca-btn"><span class="icon-btn material-symbols-outlined">storefront</span>Item Market</a>
            <a href="https://www.torn.com/page.php?sid=stocks" class="ca-btn"><span class="icon-btn material-symbols-outlined">auto_graph</span>Stocks</a>
            <a href="https://www.torn.com/travelagency.php" class="ca-btn"><span class="icon-btn material-symbols-outlined">airplanemode_active</span>Travel</a>
            Search item ID(case sensitive):<br><br>
            <input style="color:black;border:1px solid black; line-height:1em;margin-bottom:1em;" id="searchbar" placeholder="search..."/><br><span id="searchbarresult"></span><br><br>
      <div style="display:none;" id="pagespecific">
      <h5 id="resulttitle" style="margin:10px 0px 10px 0px;color:#000;">Page results:</h5>

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
                for (var offset = 0; offset < 24; offset++) {
                    fromtime = addHours(offset, startOfDay);
                    totime = addHours(offset + 1, startOfDay);

                    $.getJSON("https://api.torn.com/user?selections=log&from=" + fromtime + "&to=" + totime + "&key=BXsG3twhC5G1v230", function (data) {
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
                    if (totime - 3600 >= new Date().getTime() / 1000) { break; }

                    await timer(500); // then the created Promise can be awaited

                }
                var totalbought = 0;
                var totalsold = 0;
                console.log(logs);
                for (line in logs) {
                    if (logs[line].title == "Bazaar sell") {
                        totalsold = totalsold + logs[line].data.total_cost;
                    }
                    if (logs[line].title == "Bazaar buy") {
                        totalbought = totalbought + logs[line].data.total_cost;
                    }
                }
                $("#showprofits").html("Show today's profits");
                if (totalsold - totalbought < 0) {
                    $(".ca-result").html("Profit made today:<br><span style='color:red;'>$" + addCommas(totalsold - totalbought) + "</span><br>Purchasing:<br>$" + addCommas(totalbought) + "<br>Bazaar profit:<br>$" + addCommas(totalsold) + "<br>")
                } else {
                    $(".ca-result").html("Profit made today:<br><span style='color:green;'>$" + addCommas(totalsold - totalbought) + "</span><br>Purchasing:<br>$" + addCommas(totalbought) + "<br>Bazaar profit:<br>$" + addCommas(totalsold) + "<br>")
                }


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


    } else {
        sidebarContent = `<span>Please fill in your <a style="text-decoration:underline;color:white;" href="https://www.torn.com/preferences.php#tab=api">API Key</a> above, then refresh the page</span><span class='ca-result'></span>`
    }
    setInterval(function () {
        if ($(".ca-result").html() === "") {
            $("#pagespecific").hide();
        } else {
            $("#pagespecific").show();
        }
    }, 1000);
    $("body").append(`
  <div id='c-autofiller-container'>
    <div id='ca-inner' style='position:relative;'>
        <span id="ca-pluginname">
          <span class="ca-title">Cake's autofiller <pre>${version}</pre> <a class="ca-author" href="https://www.torn.com/profiles.php?XID=2016971">Author ></a></span>
        </span>
        <span id="ca-api">
        <span class="ca-subtitle"><a style="text-decoration:underline;color:white;" href="https://www.torn.com/preferences.php#tab=api">API Key ></a></span>
        <input class='ca-inputtext' id='c_api_key' type='text' value='` + c_api_key + `'/>
      </span>
      `+ sidebarContent + `
  </div>
  </div><span class="c-toggler"></span>`);
    addButton()
    addTravelCayman()
    buyStockFast()
    sellStockShares()
    addPriceCheck()
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



    $("#c-pricefactor").on('change', function () {
        pricefactor = $(this).val();
        localStorage.setItem("pricefactor", pricefactor);

    });

    //Price Checker


    //inventory on click info-msg
    $(document).on("click", "span.bold", function () {
        var marketitem
        var lowestbazaar
        var yourprice
        var marketprice
        var content = $(this).text()
        content = content.replace(/The /g, "");
        var itemid = itemarray[content]

        $.getJSON("https://api.torn.com/torn/" + itemid + "?selections=items&key=" + c_api_key, function (data) {
            marketitem = data.items[itemid] // buy_price, circulation, description, effect, image, market_value, name, requirement, sell_price, type, weapon_type

            $.getJSON("https://api.torn.com/market/" + itemid + "?selections=bazaar&key=" + c_api_key, function (databazaar) {
                lowestbazaar = databazaar.bazaar[0].cost
                marketprice = marketitem.market_value
                if (localStorage.getItem("marketorbazaar") == "bazaar")
                    yourprice = Math.ceil(lowestbazaar * parseFloat(pricefactor))
                if (localStorage.getItem("marketorbazaar") == "market")
                    yourprice = Math.ceil(marketprice * parseFloat(pricefactor))
                $(".ca-result").html(`<b>Pricefactor: ` + pricefactor + `<br><b>` + marketitem.name + `</b><br>Lowest Bazaar<br> $` + addCommas(lowestbazaar) + `<br>Marketprice<br>$` + addCommas(marketprice) + `<br>Your price<br> $` + addCommas(yourprice) + `<br>`);
            });
        })
    })
    //
    //click on name in catalog item market
    $(document).on("click", "span.searchname", function () {
        var marketitem
        var lowestbazaar
        var yourprice
        var marketprice
        var itemid = itemarray[$(this).text()]

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

                $(".ca-result").html(`<b>Pricefactor: ` + pricefactor + `<br><b>` + marketitem.name + `</b><br>Lowest Bazaar<br> $` + addCommas(lowestbazaar) + `<br>Marketprice<br>$` + addCommas(marketprice) + `<br>Your price<br> $` + addCommas(yourprice) + `<br>`);
            });
        })
    })
    //click on item name in catalog item market dropdown for bazaar and item market
    $(document).on("click", ".item-t.right", function () {
        var marketitem
        var lowestbazaar
        var yourprice
        var marketprice

        if ($(this).text().indexOf("(") >= 0) {
            var thename = $(this).text().split('(')[0]
            var itemid = itemarray[thename.trim()]
        } else {
            var itemid = itemarray[$(this).text().trim()]
        }

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
                $(".ca-result").html(`<b>Pricefactor: ` + pricefactor + `<br><b>` + marketitem.name + `</b><br>Lowest Bazaar<br> $` + addCommas(lowestbazaar) + `<br>Marketprice<br>$` + addCommas(marketprice) + `<br>Your price<br> $` + addCommas(yourprice) + `<br>`);
            });
        })
    })
    $(document).on("click", "p[class^=name__]", function () {
        var marketitem
        var lowestbazaar
        var yourprice
        var marketprice
        var itemid = itemarray[$(this).text().trim()]

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
    })
    if (localStorage.getItem("tornApi") !== null) {
        $("#ca-api").hide();
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
                    totals = `<span>total (x` + newchecker + `):</span><br>$` + addCommas(parseInt(newchecker) * yourprice)


                    GM_setClipboard(yourprice, "text");
                    $(".ca-result").html(`<b>Pricefactor: ` + pricefactor + `<br><b>` + marketitem.name + `</b><br><span>Lowest Bazaar</span><br> $` + addCommas(lowestbazaar) + `<br><span><span>Marketprice</span><br>$` + addCommas(marketprice) + `<br><span>Your price</span><br> $` + addCommas(yourprice) + `<br>` + totals);

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

    var observer = new MutationObserver(function (mutations) {
        if ($("div.amount").length) {
            observer.disconnect();
        }



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
    var observerTarget = $(".content-wrapper")[0];
    var observerConfig = {
        attributes: false,
        childList: true,
        characterData: false,
        subtree: true
    };
    observer.observe(observerTarget, observerConfig);


})();