const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.set("port", process.env.PORT || 3001);

app.locals.title = "TheReadingRoom";

app.locals.childrensBooks = [
    {
	id: 1,
	title: "The Very Hungry Caterpillar Eats Lunch A Colors Book",
	author: "Eric Carle",
	age_range: "0-2",
	review: "Introduce your littlest ones to a variety of foods and Eric Carle’s iconic art at the same time with this die-cut board book. Follow the Very Hungry Caterpillar through lunch meals from mac and cheese to sandwiches to tacos.",
	image: "https://tinybeans.com/wp-content/uploads/2022/02/9780593384114.jpg?w=250",
	genre: "board",
	others: ["The Very Hungry Caterpillar", "Brown Bear, What Do You See?", "The Tiny Seed"]
},
{
	id: 2,
	title: "Goodnight Goodnight Construction Site",
	author: "Sherri Duskey Rinker",
	age_range: "3-5",
	review: "Toddlers who love trucks and constructions sites will enjoy the simple bedtime story. Perhaps reading the book will make the bedtime routine go more smoothly. Parents will enjoy the cute and soothing story as well. The rhyming verse makes this story even more fun.",
	image: "https://m.media-amazon.com/images/I/61c7hni0MdL._AC_SY780_.jpg",
	genre: "picture",
	others: ["Road Crew Coming Through", "Mighty, Mighty Construction Site", "Construction Site Mission: Demolition"]
},
{
	id: 3,
	title: "How to Catch a Unicorn",
	author: "Adam Wallace",
	age_range: "6-8",
	review: "This newest book in the New York Times bestselling How to Catch series features one of the world’s most elusive mythical creatures — the unicorn! Filled with zany traps and lots of rainbow unicorn fun, this is the unicorn book of the year! Can you catch the unicorn? You’ll have to use your brain, So set your traps and prep your team to pet that rainbow mane!",
	image: "https://m.media-amazon.com/images/P/1492669733.01._SCLZZZZZZZ_SX500_.jpg",
	genre: "picture",
	others: ["How to Catch a Mermaid", "How to Catch a Dragon", "How to Catch a Monster"]
},
{
	id: 4,
	title: "If You Happen to Have a Dinosaur",
	author: "Linda Bailey",
	age_range: "0-2",
	review: "This delightfully absurd exploration of the domestic uses of dinosaurs -- and the things dinos just aren't good for at all -- is guaranteed to tickle funny bones and spark imaginations. If you read carefully, you'll learn how to make your dinosaur last a very long time.",
	image: "https://m.media-amazon.com/images/I/51Te8aejnuL._SY498_BO1,204,203,200_.jpg",
	genre: "board",
	others: ["Princesses Versus Dinosaurs", "If Kids Ruled the World"]
},
{
	id: 5,
	title: "Giraffes Can’t Dance",
	author: "Giles Andreae",
	age_range: "0-2",
	review: "Giraffes Can't Dance is a touching tale of Gerald the giraffe, who wants nothing more than to dance. With light-footed rhymes and high-stepping illustrations, this tale is gentle inspiration for every child with dreams of greatness.",
	image: "https://d1b14unh5d6w7g.cloudfront.net/0545392551.01.S001.LXXXXXXX.jpg?Expires=1667868463&Signature=g1N724zWyOtYFy~0g8wfLezDpRYNYRRSaqVj3yhNGIIRyYC8PdZ-qESbR0LeX3peXujn3DfDsDm~MQZJeyg2k6hA5kHtW3lDOxhtVjmLwXWeRCUE3A1TmXwDzFU5nN2ed8RklyBjnI0kEb0TR5MRf5twA4ZjEeo9LSKlPTSCJQM_&Key-Pair-Id=APKAIUO27P366FGALUMQ",
	genre: "board",
	others: ["Commotion in the Ocean", "Rumble in the Jungle"]
},
{
	id: 6,
	title: "Tiny T. Rex and the Impossible Hug",
	author: "Jonathan Stutzman",
	age_range: "3-5",
	review: "This is an engaging story of a tiny T. Rex dinosaur who confronts obstacles and overcomes physical limitations to help his friend Pointy who needs cheering up",
	image: "https://m.media-amazon.com/images/I/41n94808jOL._SY492_BO1,204,203,200_.jpg",
	genre: "picture",
	others: ["Tiny T. Rex and the Very Very Dark", "Tiny T. Rex and the Tricks of Treating", "Tiny T. Rex and the Perfect Valentine"]
},
{
	id: 7,
	title: "Not Quite Narwhal",
	author: "Jessie Sima",
	age_range: "6-8",
	review: "Parents need to know that debut author-illustrator Jessie Sima brings a unicorn story about being different. Love and acceptance flow easily in this sparkly story painted in pastels and filled with rainbows.",
	image: "https://m.media-amazon.com/images/I/51aoBcKuQZL._SX497_BO1,204,203,200_.jpg",
	genre: "picture",
	others: ["Perfectly Pegasus"]
},
{
	id: 8,
	title: "Chicka Chicka Boom Boom ",
	author: "Bill Martin Jr.",
	age_range: "3-5",
	review: "Countless children—and their parents—can joyfully recite the familiar words of this beloved alphabet chant. Bill Martin, Jr., and John Archambault’s rhythmic text keeps the beat with Caldecott Honor illustrator Lois Ehlert’s bold, cheerful art. This winning combination has made the Chicka Chicka series an enduring classic.",
	image: "https://m.media-amazon.com/images/I/51Uvw0rSDgL._SX377_BO1,204,203,200_.jpg",
	genre: "picture",
	others: ["Chicka Chicka 1 2 3", "Chicka Chicka, a b c"]
},
{
	id: 9,
	title: "Little Blue Truck",
	author: "Alice Schertle",
	age_range: "3-5",
	review: "Beep! Beep! Beep! Meet Blue. A muddy country road is no match for this little pick up--that is, until he gets stuck while pushing a dump truck out of the muck. Filled with truck sounds and animals noises, here is a rollicking homage to the power of friendship and the rewards of helping others.",
	image: "https://m.media-amazon.com/images/I/51YBN1G7VwL._SY398_BO1,204,203,200_.jpg",
	genre: "picture",
	others: ["Little Blue Truck Makes a Friend", "Little Blue Truck Leads the Way", "Little Blue Truck’s Christmas", "Little Blue Truck’s Valentine", "Time for School, Little Blue Truck", "Good Night Little Blue Truck"]
},
{
	id: 10,
	title: "Llama Llama Red Pajama",
	author: "Anna Dewdney",
	age_range: "0-2",
	review: "Llama Llama’s tale of nighttime drama has charmed readers for over a decade and makes an ideal story for bedtime reading. Anna Dewdney’s infectious rhyming text and expressive artwork are available to the youngest readers. Children will relate to Baby Llama's need for comfort, as much as parents will appreciate Mama Llama's reassuring message.",
	image: "https://m.media-amazon.com/images/I/51yl9ApJ+pL._SX481_BO1,204,203,200_.jpg",
	genre: "board",
	others: ["Llama Llama Misses Mama", "Llama Time to Share", "Llama Llama Mad at Mama", "Llama Llama Gram and Grandpa"]
},
{
	id: 11,
	title: "Mother Bruce",
	author: "Ryan T. Higgins",
	age_range: "3-5",
	review: "A children’s book about a bear who loves to eat eggs and keep to himself. He is sort of a grump and does not seem to like anybody or anything, except for eggs. Children will love the story because it is so adorable and the drawn illustrations are cute and colorful. It is any easy and engaging read.",
	image: "https://m.media-amazon.com/images/I/61Rlmy2OeZL.jpg",
	genre: "picture",
	others: ["Bruce’s Big Storm", "Hotel Bruce", "The Bruce Swap", "Thanks for Nothing", "Bruce’s Big Move", "Be Quiet"]
},
{
	id: 12,
	title: "My Mouth is a Volcano!",
	author: "Julia Cook",
	age_range: "6-8",
	review: "This book takes an empathetic approach to the habit of interrupting and teaches children a witty technique to help them manage their rambunctious thoughts and words. Told from Louis' perspective, this story provides parents, teachers, and counselors with an entertaining way to teach children the value of respecting others by listening and waiting for their turn to speak.",
	image: "https://m.media-amazon.com/images/I/51ANPXZ0iqL._SX260_.jpg",
	genre: "picture",
	others: ["I have Ants in my Pants", "But It’s Not My Fault", "A Bad Case of Tattle Tongue"]
},
{
	id: 13,
	title: "Grumpy Monkey",
	author: "Suzanne Lang",
	age_range: "3-5",
	review: "Suzanne and Max Lang bring hilarity and levity to this very important lesson on emotional literacy, demonstrating to kids that they are allowed to feel their feelings.",
	image: "https://m.media-amazon.com/images/I/51KqjfZALyL._SX260_.jpg",
	genre: "picture",
	others: ["Grumpy Monkey, Up All Night", "Grumpy Monkey, Party Time"]
},
{
	id: 14,
	title: "The Color Monster",
	author: "Anna Llenas",
	age_range: "3-5",
	review: "Unpack feelings with color in this international bestseller that helps young readers identify emotions and feel more in control.As this adorable monster learns to sort and define his mixed up emotions, he gains self-awareness and peace as a result. Everyone will enjoy sharing this concept book that taps into both socio-emotional growth and color concepts in a simple, friendly way.",
	image: "https://m.media-amazon.com/images/I/61CXwBPEdkL._SX260_.jpg",
	genre: "picture",
	others: ["The Color Monster Goes to School"]
},
{
	id: 15,
	title: "Dragons Love Tacos",
	author: "Adam Rubin",
	age_range: "3-5",
	review: "Dragons love tacos. Unfortunately, where there are tacos, there is also salsa. And if a dragon accidentally eats spicy salsa...oh, boy. You're in red-hot trouble. The award-winning team behind Those Darn Squirrels! has created an unforgettable, laugh-until-salsa-comes-out-of-your-nose tale of new friends and the perfect snack.",
	image: "https://m.media-amazon.com/images/I/61P9zL-N6SL.jpg",
	genre: "picture",
	others: ["Dragons Love Tacos 2, the Sequel", "Secret Pizza Party", "Those Darn Squirrels"]
},
{
	id: 16,
	title: "Goodnight Moon",
	author: "Margaret Wise Brown",
	age_range: "0-2",
	review: "In this classic of children's literature, beloved by generations of readers and listeners, the quiet poetry of the words and the gentle, lulling illustrations combine to make a perfect book for the end of the day.One of the most beloved books of all time, this book is a must for every bookshelf and a time-honored gift for baby showers and other special events.",
	image: "https://m.media-amazon.com/images/I/619Yj9clFvL.jpg",
	genre: "board",
	others: ["The Runaway Bunny"]
},
{
	id: 17,
	title: "Harold and the Purple Crayon",
	author: "Crockett Johnson",
	age_range: "3-5",
	review: "From beloved children’s book creator Crockett Johnson comes a timeless classic! This imagination-sparking picture book belongs on every child’s bookshelf. Harold and his trusty crayon travel through woods and across seas and past dragons before returning to bed, safe and sound. Full of funny twists and surprises, this charming story shows just how far your imagination can take you.",
	image: "https://m.media-amazon.com/images/I/51aa993SYIL.jpg",
	genre: "picture",
	others: ["Harold’s Treasure Hunt", "Harold’s ABCs", "Harold at the North Pole"]
},
{
	id: 18,
	title: "If Animals Kissed Good Night",
	author: "Anne Whitford Paul",
	age_range: "0-2",
	review: "What if animals did what YOU do? This bestselling story imagines how animals would kiss their loved ones good night! If animals kissed good night like we do...how would they do it? And across the animal kingdom, every creature would share love in a unique way.",
	image: "https://m.media-amazon.com/images/I/51PRQuO-xjL._SY498_BO1,204,203,200_.jpg",
	genre: "board",
	others: ["If Animals Said I Love You", "If Animals Tried to be Kind", "If Animals Went to School"]
},
{
	id: 19,
	title: "The Kissing Hand",
	author: "Audrey Penn",
	age_range: "3-5",
	review: "Since its first publication in 1993, this heartwarming book has become a children's classic that has touched the lives of millions of children and their parents, especially at times of separation, whether starting school, entering daycare, or going to camp. It is widely used by kindergarten teachers on the first day of school.",
	image: "https://m.media-amazon.com/images/I/51R27R4XSKL.jpg",
	genre: "picture",
	others: ["A Kiss Goodbye", "Chester the Brave"]
},
{
	id: 20,
	title: "Dear Zoo",
	author: "Audrey Penn",
	age_range: "0-2",
	review: "This interactive book offers minimal clues to help your baby guess which animal is under the flap (container). With repetitive phrases, large text, and bright illustrations, it encourages pre-readers to participate. The touch and feel elements throughout the book are great for sensory development. It also helps refine children’s motor skills and hand-eye coordination. It’s a must-have for 2-year-olds!",
	image: "https://m.media-amazon.com/images/I/51-N3ZAb7DL.jpg",
	genre: "board",
	others: ["Oh Dear", "Look After Us", "Dinosaurs"]
},

{
	id: 21,
	title: "The Day the Crayons Quit",
	author: "Drew Daywalt",
	age_range: "3-5",
	review: "Author Drew Daywalt and international bestseller Oliver Jeffers team up to create a colorful solution to a crayon-based crisis in this playful, imaginative story that will have children laughing and playing with their crayons in a whole new way.",
	image: "https://m.media-amazon.com/images/I/51JNz57DqLL._SX495_BO1,204,203,200_.jpg",
	genre: "picture",
	others: ["The Day the Crayons Came Home", "Love from the Crayons", "The Crayons’ Book of Colors", "The Crayons’ Book of Numbers"]
},

{
	id: 22,
	title: "The Pigeon Needs a Bath",
	author: "Mo Willems",
	age_range: "3-5",
	review: "Persuasive Pigeon is back. He doesn't feel that he really needs a bath. Through simple flat-line illustrations, this bird's expressions and attitude are easy to discern. Pigeon fans will not want to miss this book, a must add to all libraries, for any reader appreciating the perfect art of persuasion.",
	image: "https://m.media-amazon.com/images/I/51Cf6tNKCSL._SX497_BO1,204,203,200_.jpg",
	genre: "picture",
	others: ["The Pigeon Will Ride the Roller Coaster!", "Don’t Let the Pigeon Drive the Bus!", "The Pigeon Has to Go to School!", "The Duckling Gets a Cookie!?"]
},

{
	id: 23,
	title: "The Bad Seed",
	author: "Jory John",
	age_range: "6-8",
	review: "With Jory John’s charming and endearing text and bold expressive illustrations by Pete Oswald, a funny yet touching tale that reminds us of the remarkably transformative power of will, acceptance, and just being you. Perfect for readers young and old, it proves that positive change is possible for each and every one of us.",
	image: "https://m.media-amazon.com/images/I/51bF0nmBXyL._SX260_.jpg",
	genre: "picture",
	others: ["The Good Egg", "The Smart Cookie", "The Cool Bean", "The Couch Potato"]
},

{
	id: 24,
	title: "If You Give a Mouse a Cookie",
	author: "Laura Numeroff",
	age_range: "3-5",
	review: "The consequences of giving a cookie to this energetic mouse run the young host ragged, but young readers will come away smiling at the antics that tumble like dominoes through the pages of this delightful picture book.",
	image: "https://m.media-amazon.com/images/I/51N6ICWIpEL._SX260_.jpg",
	genre: "picture",
	others: ["If You Give a Pig a Pancake", "If You Give a Moose a Muffin", "If You Take a Mouse to School"]
},

{
	id: 25,
	title: "Pete the Cat, I Love my White Shoes",
	author: "James Dean & Eric Litwin",
	age_range: "3-5",
	review: "Bright, childlike illustrations show the long-limbed feline regularly altering his footwear but continuing not to watch where he's walking. The moral of the story keep going no matter what happens to you in life may sound like good advice, but it doesn't instill any sense of power in children it just tells them to accept their fate.",
	image: "https://m.media-amazon.com/images/I/51pVGvqxmqL._SX260_.jpg",
	genre: "picture",
	others: ["Pete the Cat, Rocking in my School Shoes", "Pete the Cat and his Four Groovy Buttons"]
},

{
	id: 26,
	title: "Moo Baa LaLaLa",
	author: "Sandra Boynton",
	age_range: "0-2",
	review: "Sandra Boynton’s wildly popular book features her lively and spirited text that introduces readers to animals and the noises they make. A final spread begs the little ones and their caregivers to OINK!, SNORT!, QUACK!, and MEOW! in a noisy animal ending.",
	image: "https://m.media-amazon.com/images/I/51gmlQCOBVL._SY498_BO1,204,203,200_.jpg",
	genre: "board",
	others: ["But Not the Hippo", "But Not the Armadillo", "The Belly Button Book", "Snuggle Puppy", "Barnyard Dance"]
},

{
	id: 27,
	title: "Click, Clack, Moo, Cows that Type",
	author: "Doreen Cronin",
	age_range: "3-5",
	review: "The quirky, hilarious farmyard tale that started it all from the bestselling duo of Doreen Cronin and Betsy Lewin! Listen in on the fun as a bunch of literate cows turn Farmer Brown’s farm upside down!",
	image: "https://m.media-amazon.com/images/I/610OnXioufL._SX260_.jpg",
	genre: "picture",
	others: ["Duck for President", "Click, Clack, Boo", "Giggle, Giggle, Quack", "Dooby Dooby Moo"]
},

{
	id: 28,
	title: "Duck and Goose, Colors",
	author: "Tad Hills",
	age_range: "0-2",
	review: "These humorous and expressive characters make learning the colors easy and fun. From New York Times bestselling author and illustrator Tad Hills comes another concept book starring our favorite feathered friends. Duck and Goose introduce basic colors in this sturdy board book, perfect for toddlers and preschoolers.",
	image: "https://m.media-amazon.com/images/I/51xwCzk+bBL._SX260_.jpg",
	genre: "board",
	others: ["Duck and Goose, Let’s Dance", "Duck, Duck, Goose", "Duck and Goose"]
},

{
	id: 29,
	title: "The Snowy Day",
	author: "Ezra Jack Keats",
	age_range: "3-5",
	review: "The magic and wonder of winter’s first snowfall is perfectly captured in Ezra Jack Keat’s Caldecott Medal-winning picture book. This celebrated classic has been shared by generations of readers and listeners, a must-have for every child’s bookshelf and a perfect gift for the holiday season.",
	image: "https://m.media-amazon.com/images/I/51LwzcuCC8L._SX260_.jpg",
	genre: "picture",
	others: ["Whistle for Willie", "A Letter to Amy", "Peter’s Chair", "Pet Show!"]
},

{
	id: 30,
	title: "Pat the Bunny",
	author: "Dorothy Kunhardt",
	age_range: "0-2",
	review: "For generations, Pat the Bunny has been creating special first-time moments between parents and their children. This classic touch-and-feel book offers babies a playful and engaging experience, all the while creating cherished memories that will last a lifetime.",
	image: "https://m.media-amazon.com/images/I/51dxWXcAKxL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
	genre: "board",
	others: ["Pat the Puppy"]
},

{
	id: 31,
	title: "The Rainbow Fish",
	author: "Marcus Pfistert",
	age_range: "3-5",
	review: "Eye-catching foil stamping, glittering on every page, offers instant child appeal, but it is the universal message at the heart of this simple story about a beautiful fish who learns to make friends by sharing his most prized possessions that gives the book its lasting value.",
	image: "https://m.media-amazon.com/images/I/51ooKjIzgGL._SX372_BO1,204,203,200_.jpg",
	genre: "picture",
	others: ["Rainbow Fish Discovers the Deep Sea", "Rainbow Fish and the Storyteller", "Rainbow Fish to the Rescue"]
},

{
	id: 32,
	title: "I’m Still Up",
	author: "Antoinette Portis",
	age_range: "0-2",
	review: "Perfect for babies and their loved ones, this is a joyful story about the age-old struggle of bed time, and a soothing reminder that when Mommy and Daddy, the cat and the dog and even the sun are sleepy, baby might be, too. By repeating shapes, words, and language, it will help your baby learn new words and routines while you read a bedtime story.",
	image: "https://m.media-amazon.com/images/I/51q0qoJlB0L._SY498_BO1,204,203,200_.jpg",
	genre: "board",
	others: ["I’m Up", "Not a Stick", "Not a Box"]
},

{
	id: 33,
	title: "The Carrot Seed",
	author: "Ruth Krauss",
	age_range: "0-2",
	review: "This beloved classic celebrates patience, determination, and believing in yourself. First published in 1945 and never out of print, the timeless combination of Ruth Krauss's simple text and Crockett Johnson's eloquent illustrations creates a triumphant and deeply satisfying story for readers of all ages.",
	image: "https://m.media-amazon.com/images/I/51rwXmtc25L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
	genre: "board",
	others: ["I Can Fly"]
},

{
	id: 34,
	title: "I’ll Love You Till the Cows Come Home",
	author: "Kathryn Cristaldi",
	age_range: "0-2",
	review: "Love knows no bounds in this tender tribute to the depths of family love. This board book is filled with warm, funny art and rhythmic, romping text, perfect for curling up with your little one at the end of the day...or anytime you want to express your love.",
	image: "https://m.media-amazon.com/images/I/51iKMJAmXrL._SY498_BO1,204,203,200_.jpg",
	genre: "board",
	others: [ ]
},

{
	id: 35,
	title: "Harry and the Dirty Dog",
	author: "Gene Zion",
	age_range: "3-5",
	review: "This book has become a classic, entertaining young readers for decades. Perfect for young fans of dogs...especially ones who also don't always want a bath!",
	image: "https://m.media-amazon.com/images/I/51nSQSDoCnL.jpg",
	genre: "picture",
	others: ["Harry and the Guinea Pig", "Harry By the Sea", "No Roses for Harry!" ]
},
{
	id: 36,
	title: "Goodnight Gorilla",
	author: "Peggy Rathmann",
	age_range: "0-2",
	review: "It's bedtime at the zoo, and all the animals are going to sleep. Or are they? 	Who's that short, furry guy with the keys in his hand and the mischievous grin? Sneak along behind the zookeeper's back and see who gets the last laugh in this riotous good-night romp.",
	image: "https://m.media-amazon.com/images/I/515KRQyNLiL._SX260_.jpg",
	genre: "board",
	others: ["Officer Buckle and Gloria"]
},

{
	id: 37,
	title: "Cloudy with a Chance of Meatballs",
	author: "Judi Barrett",
	age_range: "6-8",
	review: "An imaginative story of amazing food weather, this book is a favorite of grown-ups and children everywhere.",
	image: "https://m.media-amazon.com/images/I/61lHzGL9j3L._SX260_.jpg",
	genre: "picture",
	others: ["Pickles to Pittsburgh", "The Marshmallow Incident"]
},

{
	id: 38,
	title: "Alexander and the Terrible, Horrible, No Good, Very Bad Day",
	author: "Judith Viorst",
	age_range: "6-8",
	review: "Judith Viorst flawlessly and humorously captures a child's testy temperament, rendering Alexander sympathetic rather than whiny. Our hero's gum-styled hair and peevish countenance are artfully depicted by Ray Cruz's illustrations. An ALA Notable Book, it is a great antidote to bad days everywhere, sure to put a smile on even the crabbiest of faces.",
	image: "https://m.media-amazon.com/images/I/51cnBF138XL.jpg",
	genre: "picture",
	others: ["Alexander, Who Used to Be Rich Last Sunday"]
},

{
	id: 39,
	title: "Pink is NOT a Color",
	author: "Lindsay Ward",
	age_range: "6-8",
	review: "Featuring the world of colors introduced in 'This Book Is Gray', this is a tale about appreciating who you are and realizing that only you can decide what makes you happy.",
	image: "https://m.media-amazon.com/images/I/41e425myOtL._SX384_BO1,204,203,200_.jpg",
	genre: "picture",
	others: ["This Book is Gray"]
},

{
	id: 40,
	title: "Dear Mrs. LaRue: Letters From Obedience School",
	author: "Mark Teague",
	age_range: "6-8",
	review: "A tail-wagger of a book that will have readers howling with amusement. The humorous acrylic illustrations are, at times, a howl... charming Ike will likely find a home in many picture-book collections.",
	image: "https://m.media-amazon.com/images/I/51DktU0E5EL._SX373_BO1,204,203,200_.jpg",
	genre: "picture",
	others: ["King Kong’s Cousin", "How I Spent My Summer Vacation"]
},
{
	id: 41,
	title: "The Year We Learned to Fly",
	author: "Jacqueline Woodson",
	age_range: "3-5",
	review: "Jacqueline Woodson’s lyrical text and Rafael Lopez’s dazzling art celebrate the extraordinary ability to lift ourselves up and imagine a better world.",
	image: "https://m.media-amazon.com/images/I/51DXgChzPQL._SX260_.jpg",
	genre: "picture",
	others: ["The Day You Begin", "Pecan Pie Baby"]
},
{
	id: 42,
	title: "The Yoga Bunny",
	author: "Brian Russo",
	age_range: "0-2",
	review: "This book helps readers relax and unwind as they learn beginning yoga poses, from downward dog to tree pose. Debut author-illustrator Brian Russo shows readers just how relaxing yoga can be.",
	image: "https://m.media-amazon.com/images/I/51oMdxxo9ML._SX260_.jpg",
	genre: "board",
	others: [ ]
},
{
	id: 43,
	title: "The Knight Owl",
	author: "Christopher Denise",
	age_range: "3-5",
	review: "A determined Owl builds strength and confidence in this medieval picture book about the real mettle of a hero: wits, humor, and heart. Full of wordplay and optimism, this surprising display of bravery proves that cleverness (and friendship) can rule over brawn.",
	image: "https://m.media-amazon.com/images/I/519mfvpS89S._SX260_.jpg",
	genre: "picture",
	others: [ ]
}
]

app.get("/api/v1/childrensbooks", (request, response) => {
	const kidBooks = app.locals.childrensBooks;
  
	response.json({ kidBooks });
  });
  
  app.listen(app.get("port"), () => {
	console.log(
	  `${app.locals.title} is running on http://localhost:${app.get("port")}.`
	);
  });