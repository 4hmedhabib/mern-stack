const urlLink = "../assets/images";

const freshFoods = [
  {
    id: "FF-001",
    name: "Fresh Red Bell Pepper",
    category: ["Fresh Produce"],
    price: 1.38,
    originalPrice: 1.38,
    description:
      "Enhance your meals with the delicious flavor of Red Bell Peppers. This vegetable contains essential vitamins such as A and C, and minerals including calcium and magnesium. Red bell pepper, also known as red capsicum, has a crisp flavor that enhances a variety of recipes. Dice bell peppers and put them in a hearty chili, slice them, saute them with onions or stir-fry with thinly-sliced steak and serve with rice. A hollowed-out red bell pepper can be filled with sausage, mushrooms and rice to create a delicious stuffed pepper that will have the family asking for seconds. They also taste delicious raw alongside other vegetables. Add your favorite dip for a healthy, crunchy crudite. Cooked or uncooked, Red Bell Peppers are an excellent item to have on hand.",
    imgUrl: urlLink + "./red-bell-pepper.jpeg",
  },
  {
    id: "FF-002",
    name: "Fresh Yellow Bell Pepper",
    category: ["Fresh Produce"],
    price: 1.23,
    originalPrice: 1.38,
    description:
      "Enhance your meals with the delicious flavor of Yellow Bell Peppers. This vegetable contains essential vitamins such as A and C, and minerals including calcium and magnesium. Yellow bell pepper, also known as yellow capsicum, has a crisp flavor that enhances a variety of recipes. Dice bell peppers and put them in a hearty chili, slice them and add to a deli sandwich, saute them with onions and serve on a hoagie roll with a bratwurst, or stir-fry with thinly-sliced steak and serve with rice. A hollowed-out yellow bell pepper can be filled with sausage, mushrooms and rice to create a delicious stuffed pepper that will have the family asking for seconds. Lunches and dinners are more scrumptious when fresh yellow peppers are part of the meal. They also taste delicious raw alongside other vegetables. Add your favorite dip for a healthy, crunchy crudite. Cooked or uncooked, Yellow Bell Peppers are an excellent item to have on hand.",
    imgUrl: urlLink + "./yellow-bell-pepper.jpeg",
  },
  {
    id: "FF-003",
    name: "Serrano Pepper",
    category: ["Fresh Produce"],
    price: 0.34,
    originalPrice: 0.34,
    description:
      "Enhance your meals with the delicious flavor of Serrano Peppers. Naturally low in calories, fat, and cholesterol, this vegetable is a great source of vitamins C, B6, and A, as well as iron and magnesium. Serrano peppers have a bright and biting flavor that enhances a variety of recipes. Make a zesty pico de gallo or salsa using fresh serrano peppers, add to a sweet peach jam to make a glaze for hot wings, or add to eggs for out of this world huevos rancheros. You can even add some diced serrano peppers and cheese to cornbread batter for a delectable chile cheese cornbread that will have everyone asking for seconds. Lunches and dinners are more scrumptious when fresh Serrano Peppers are part of the meal.",
    imgUrl: urlLink + "./serrano-peppers.jpeg",
  },
  {
    id: "FF-005",
    name: "Red Onions",
    category: ["Fresh Produce"],
    price: 0.78,
    originalPrice: 1.25,
    description:
      "Red Onions offer a delicious and simple way to add more vegetables to your diet. These onions are perfect for adding to your favorite recipes. Add them to your favorite pasta sauces; use them to top pizza; enhance the flavors of your soups, stews, and gumbo, incorporate them into meatloaf; or make delicious omelets or hearty casseroles. You can also dice them and put them in a zesty stir fry or dip the onions in batter to fry up some crowd-pleasing onion rings. Try them in a spicy salsa recipe or on your hamburgers and hot dogs. However you choose to use them, these white onions are a must-have for every kitchen pantry. Red Onions are tasty, versatile and the ideal choice for health-conscious individual.",
    imgUrl: urlLink + "./red-onion.jpeg",
  },
  {
    id: "FF-006",
    name: "Lemons",
    category: ["Fresh Produce"],
    price: 0.62,
    originalPrice: 0.62,
    description:
      "Stock up on several of these juicy Lemons to enjoy with each day while meal planning. Squeeze a few to make delicious homemade lemonade and provide a healthy dose of vitamin C to your diet. Drizzle lemon juice over fish or add it to your favorite sauces. Serve slices with your favorite cocktails and use when baking cakes, cookies and tarts. They are sold in-store at a per-unit price, so you can stock up on as many as you need. You can even buy just one single lemon at a time. Pair them with other fresh fruit from Fresh Mart.",
    imgUrl: urlLink + "./lime.jpeg",
  },
  {
    id: "FF-007",
    name: "Green Skin Avocados",
    category: ["Fresh Produce"],
    price: 2.48,
    originalPrice: 3.62,
    description:
      'Green Skin Avocados aren\'t just great-tasting fresh produce items, but they are a nutrient-dense food enjoyed around the world. They are a versatile ingredient that can be used in many different types of recipes and dishes. Enjoy it on its own or as part of a salad, fresh guacamole, taco, burrito or avocado toast. Not only is an avocado a great ingredient to use in numerous ways, but it is also a healthy food that contributes unsaturated "good" fats and a variety of vitamins including vitamin E, vitamin K, vitamin C, and vitamins B5 and B9. These avocados are larger, have smooth skin, and with most varieties remain green when ripe. The possibilities are deliciously endless with Aguacate de Repubilca Dominicana.',
    imgUrl: urlLink + "./green-skin-avocados.jpeg",
  },
  {
    id: "FF-008",
    name: "Fresh Papaya, Size Varies",
    category: ["Fresh Produce", "Papaya"],
    price: 3.19,
    originalPrice: 3.19,
    description:
      "Get flavor and nutrition with our Fresh Solo Papaya. Papaya is a tropical fruit that originated in the tropics of the Americas and is known to be a great source of vitamins C, A, fiber, and antioxidants. When ripe, this fruit has a butter-like texture with a fairly sweet flavor similar to cantaloupe and can be eaten raw, without skin or seeds. Papaya can be prepared in a variety of ways; you can mix them with grapefruit and avocado for a bright summer salad, add them to a zesty salsa for some sweetness, freeze them and turn them into refreshing popsicle spears, or bake them in the oven with a melted brown sugar mixture. The sky's the limit! Get ready for a taste-bud party with Fresh Solo Papaya.",
    imgUrl: urlLink + "./fresh-papaya-size-varies.png",
  },
  {
    id: "FF-009",
    name: "Yellow Onions",
    category: ["Fresh Produce", "Onion"],
    price: 0.54,
    originalPrice: 1.19,
    description:
      "Get ready to roast, caramelize, and grill these Yellow Onions to absolute perfection! Thanks to their mild, all-purpose flavor, sweet onions are known to be less pungent than other varieties of onions, making them a lovely choice when it comes to salads, relishes, and so much more. Whip up an onion confit for serving atop meats or pizzas, roast a few slices to stack on sandwiches or burgers, or dip into a batter and deep-fry until they turn into golden onion rings. Plus, these onions are packed with nutrients, so you can feel good about eating them. Get ready for some delicious dishes with our Yellow Onions.",
    imgUrl: urlLink + "./yellow-union.jpeg",
  },
  {
    id: "FF-010",
    name: "Tomatoes On The Vine",
    category: ["Fresh Produce", "Tomatoes"],
    price: 1.98,
    originalPrice: 2.53,
    description:
      "Create something wholesome and delicious with Tomatoes On The Vine. These ripe tomatoes are the perfect ingredient for a variety of tasty dishes. Use them to make a decadent tomato sauce for a pasta dish try slicing them up and pairing with mozzarella cheese, basil and balsamic vinegar for a refreshing caprese salad or simply enjoy them on their own as a nutritious snack. They would make a comforting and appetizing tomato soup and a flavorful salsa. You could also slice them up and use them to top burgers and pizza or use them to make a delicious grilled cheese and tomato sandwich. However you choose to use them, these tomatoes will add flavor and taste to any meal. Elevate your recipes with Tomatoes On The Vine.",
    imgUrl: urlLink + "./yellow-union.jpeg",
  },
  {
    id: "FF-011",
    name: "White Unions",
    category: ["Fresh Produce", "Unions"],
    price: 0.7,
    originalPrice: 0.7,
    description:
      "White Onions offer a delicious and simple way to add more vegetables to your diet. These onions are perfect for adding to your favorite recipes. Add them to your favorite pasta sauces; use them to top pizza; enhance the flavors of your soups, stews, and gumbo, incorporate them into meatloaf; or make delicious omelets or hearty casseroles. You can also dice them and put them in a zesty stir fry or dip the onions in batter to fry up some crowd-pleasing onion rings. Try them in a spicy salsa recipe or on your hamburgers and hot dogs. However you choose to use them, these white onions are a must-have for every kitchen pantry. White Onions are tasty, versatile and the ideal choice for health-conscious individual.",
    imgUrl: urlLink + "./white-union.jpeg",
  },
  {
    id: "FF-012",
    name: "Organic Green Cabbage, Head",
    category: ["Fresh Produce", "Cabbage"],
    price: 3.12,
    originalPrice: 4.16,
    description:
      "Organic Green Cabbage is delicious and nutritious! This crunchy veggie can be eaten raw or fried, broiled, steamed, grilled, and more. From soups and stews to casseroles and meat pies, cabbage has been a wholesome, hearty staple in in the world of cooking for centuries. Not only is it an affordable, family-friendly option, but it's also packed full of important vitamins and minerals, including fiber, folate, potassium, magnesium, vitamins A, C, K, and more. So whether it's corned beef and cabbage, fried cabbage with sausage, or a cabbage stir fry, you can feel good about indulging in this highly nutritious vegetable. Stock up on Organic Green Cabbage and invite family and friends over for a heart-warming meal and a good ol' time!",
    imgUrl: urlLink + "./organic-green-cabbage-head.jpeg",
  },
  {
    id: "FF-013",
    name: "Romaine Lettuce",
    category: ["Fresh Produce", "Lettuce"],
    price: 2.24,
    originalPrice: 2.24,
    description:
      "The story of Ratto Bros. began in 1905 when Antone L. Ratto, son of Italian immigrants, started a vegetable business on Bay Farm Island near Oakland, California where he delivered produce to customers from a horse-drawn cart. Antone was blessed with five sons who followed in their father's footsteps to become farmers themselves. It has been said that Antone and his sons were so skilled at farming that they could magically make the water run uphill to irrigate their crops.",
    imgUrl: urlLink + "./romaine-lettuce.jpeg",
  },
  {
    id: "FF-014",
    name: "Whole Carrots",
    category: ["Fresh Produce", "Carrots"],
    price: 0.98,
    originalPrice: 1.98,
    description:
      "This 1 lb. Bag of Whole Carrots can make a versatile addition to various meals. They have a crisp crunch and a bold taste. These California carrots are easy to cut into pieces for adding to a stew, pot roast or meat pie. Slice them thin and add them to a salad with some lettuce, tomatoes, olives and other ingredients. These fresh carrots are also ideal for dipping in dressing.",
    imgUrl: urlLink + "./whole-carrots.jpeg",
  },
  {
    id: "FF-015",
    name: "Garlic",
    category: ["Fresh Produce", "Garlic"],
    price: 0.47,
    originalPrice: 0.47,
    description:
      "Take your culinary creations to the next level with this flavorful fresh Garlic. Garlic's signature flavors become caramelized and sweeter when cooked, making it a perfect accompaniment to many dishes such as pasta, shrimp, chicken, stews, and more. Garlic also goes great in creamed soups, on all types of roasts, in a variety of egg dishes, or used simply with sauteed or roasted vegetables. To prepare garlic for cooking, you'll need to break it up into individual cloves and peel the skin. Once you've done this, you can mince the garlic by chopping it into fine pieces. Spice up your next meal with a tasty clove of fresh Garlic.",
    imgUrl: urlLink + "./garlic.jpeg",
  },
  {
    id: "FF-016",
    name: "Fresh Red Seedless Grape",
    category: ["Fresh Produce", "Grape"],
    price: 4.47,
    originalPrice: 5.88,
    description:
      "Treat yourself to the delicious, juicy flavor of Fresh Red Seedless Grapes. These grapes are bursting with flavor and are completely seedles. Prized for their lush, juicy pulp, very sweet flavors, and highly aromatic skins that offer a pleasant chewiness, they are also perfect for creating stunning cheese boards and charcuterie plates by pairing them with fresh cheese, crackers, or delectable meats like prosciutto. If you want to be really creative, you can freeze them and use them and ice cubes that won't melt and release water into your favorite drinks. Treat yourself to the fresh taste of Fresh Red Seedless Grapes.",
    imgUrl: urlLink + "./fresh-red-seedless-grape.jpeg",
  },
  {
    id: "FF-017",
    name: "Fresh Green Seedless Grape",
    category: ["Fresh Produce", "Grape"],
    price: 5.36,
    originalPrice: 5.36,
    description:
      "Treat yourself to the delicious, juicy flavor of Fresh Green Seedless Grapes. These grapes are bursting with flavor and are completely seedles. Prized for their lush, juicy pulp, very sweet flavors, and highly aromatic skins that offer a pleasant chewiness, they are also perfect for creating stunning cheese boards and charcuterie plates by pairing them with fresh cheese, crackers, or delectable meats like prosciutto. If you want to be really creative, you can freeze them and use them and ice cubes that won't melt and release water into your favorite drinks. Treat yourself to the fresh taste of Fresh Red Seedless Grapes.",
    imgUrl: urlLink + "./fresh-green-seedless-grape",
  },
  {
    id: "FF-018",
    name: "Clementines",
    category: ["Fresh Produce", "Clementines"],
    price: 4.5,
    originalPrice: 5.73,
    description:
      "Mandarins: Sweet, seedless and easy to peel. Mandarins are the coveted leader of the citrus category—high in Vitamin C, and an immunity boosting superfood.",
    imgUrl: urlLink + "./clementines.jpeg",
  },
  {
    id: "FF-019",
    name: "Fresh Mini Cucumber",
    category: ["Fresh Produce", "Cucumber"],
    price: 2.44,
    originalPrice: 3.68,
    description:
      "Enjoy the crisp, delicious flavor of Organic Mini Cucumbers. Packed with nutritional benefits such as being naturally low in calories, carbohydrates, sodium, fat, and cholesterol, cucumbers also provide potassium, fiber, and vitamin C and clock in at a cool 16 calories per cup. Use these organic mini cucumbers to make delicious treats such as a cucumber salad with tomatoes and onions in a vinaigrette dressing, toss with fresh mozzarella, tomatoes, and a drizzle of balsamic vinegar, mix diced cucumbers with Greek yogurt, lemon, dill, and garlic for a refreshing tzatziki sauce for gyros or veggies, add to a crisp, fresh veggie salad, or thinly slice and add to a vinegar brine for quick pickles. Any way you slice, dice, or spiralize them, Organic Mini Cucumbers are a refreshing, healthy addition to any meal.",
    imgUrl: urlLink + "./fresh-mini-cucumber.jpeg",
  },
  {
    id: "FF-020",
    name: "Bartlett Pears, Bulk",
    category: ["Fresh Produce", "Pears"],
    price: 1.31,
    originalPrice: 2.68,
    description:
      "Savor the sweet taste of Bartlett Pears. Bartlett pears are aromatic and have a definitive pear flavor that makes them great for breakfast, lunch, dinner, and dessert. Chop the pears up and add them to muffins with walnuts and vanilla for a sweet treat that’s great for breakfast to get your morning started on a high note. Slice them up and top a pizza with prosciutto, goat cheese, and arugula for a mouthwatering meal perfect for a family dinner or dinner party. Cut the pear in half and cook it in a skillet with butter, brown sugar, and vanilla for a decadent dessert. Enjoy tasty meals any time of day with Bartlett Pears.",
    imgUrl: urlLink + "./bartlett-pears.jpeg",
  },
  {
    id: "FF-021",
    name: "Red Delicious Apples, Bulk",
    category: ["Fresh Produce", "Apple"],
    price: 1.07,
    originalPrice: 2.02,
    description:
      "Savor the sweet taste of Red Delicious Apples. Red Delicious apples have a classic sweet flavor and are crisp and juicy with higher antioxidants due to the rich deep red skin. Perfect for snacking, they have a creamy white flesh with low acidity. Chop the apples up and add them to a slow cooker with lemon juice, water and cinnamon for a sweet and tasty apple sauce that everyone is sure to love. Add it to your favorite smoothie or juice blend for a morning pick me up to get your day started right. Serve with a dollop of peanut butter and enjoy as a healthy snack that both kids and adults will love. Enjoy the delicious taste of Red Delicious Apples.",
    imgUrl: urlLink + "./red-apple.jpeg",
  },
  {
    id: "FF-022",
    name: "Cantaloupe",
    category: ["Fresh Produce", "Cantaloupe"],
    price: 2.98,
    originalPrice: 3.88,
    description:
      "Treat yourself to the refreshing flavor of a fresh Cantaloupe. Enjoy this tasty melon on its own as a healthy snack or incorporate it into a variety of delicious recipes. For breakfast, you can make a sweet fruit bowl with sliced cantaloupe, strawberries, pineapple, and kiwi. For an extra special treat, top with a dollop of whipped cream. Cut it into small pieces and put it in a fresh salad along with chicken, cucumbers, tomatoes, and a light dressing. You can even use cantaloupe to make a refreshing summer cocktail, a spreadable jam or a light sorbet. Enjoy the sweet and juicy taste of fresh Cantaloupe.",
    imgUrl: urlLink + "./cantaloupe.jpeg",
  },
  {
    id: "FF-023",
    name: "Fresh Corn on the Cob",
    category: ["Fresh Produce", "Corn"],
    price: 1.25,
    originalPrice: 0.72,
    description:
      "It's not truly summer until you've had some Fresh Corn on the Cob. There's nothing like freshly picked corn straight from the fields, cooked until the kernels are tender and bursting with sweet juice! This summer staple is perfect for casual dinners, BBQs, picnics, and camping trips. Just boil some up in salted water until it becomes sweet, juicy, and piping hot and then brush it with butter, salt, and pepper for a delicious and nutritious treat. Corn can be roasted, broiled, steamed, grilled, or microwaved and added to stews, casseroles, salads, or salsa. Enjoy this vegetable knowing it's low in calories and is also a great source of potassium, fiber, and antioxidants. Amp up the summer fun with some Fresh Corn on the Cob.",
    imgUrl: urlLink + "./corn.jpeg",
  },
  {
    id: "FF-024",
    name: "Honeydew Melon",
    category: ["Fresh Produce", "Melon"],
    price: 3.88,
    originalPrice: 4.72,
    description:
      "The honeydew melon is one of the two main cultivar types in Cucumis melo Inodorus Group. It is characterized by the smooth rind and lack of musky odor. The other main type in the Inodorus Group is the wrinkle-rind casaba melon.",
    imgUrl: urlLink + "./honeyden-elon.jpeg",
  },
  {
    id: "FF-025",
    name: "Fresh Strawberries",
    category: ["Fresh Produce", "Strawberries"],
    price: 2.58,
    originalPrice: 3.85,
    description:
      "The garden strawberry is a widely grown hybrid species of the genus Fragaria, collectively known as the strawberries, which are cultivated worldwide for their fruit. The fruit is widely appreciated for its characteristic aroma, bright red color, juicy texture, and sweetness.",
    imgUrl: urlLink + "./fresh-strawberries.jpeg",
  },
  {
    id: "FF-026",
    name: "Organic Bananas",
    category: ["Fresh Produce", "Bananas"],
    price: 1.7,
    originalPrice: 2.85,
    description:
      "Enjoy the sweet, tropical taste of Organic Bananas. Bananas are a good source of several vitamins and minerals including potassium, vitamin B6 and vitamin C and are low in sodium. Enjoy them at breakfast, lunch, dessert, or anytime you want a healthy snack. Use them to make a loaf of moist banana bread and enjoy with a hot cup of coffee in the mornings or layer them with pudding and vanilla wafer cookies for a light, sweet banana pudding that's perfect for dessert. Simply peel open the banana and savor the delicious taste of this sweet fruit. Bring home Organic Bananas and make them a part of your day.",
    imgUrl: urlLink + "./bananas.jpeg",
  },
  {
    id: "FF-027",
    name: "Freshness Watermelon",
    category: ["Fresh Produce", "Watermelon"],
    price: 4.47,
    originalPrice: 5.85,
    description:
      "Watermelon is a flowering plant species of the Cucurbitaceae family and the name of its edible fruit. A scrambling and trailing vine-like plant, it is a highly cultivated fruit worldwide, with more than 1,000 varieties.",
    imgUrl: urlLink + "./whole-and-slices-watermelon.jpg",
  },
  {
    id: "FF-028",
    name: "Fresh Cilantro",
    category: ["Fresh Produce", "Cilantro"],
    price: 0.88,
    originalPrice: 1.85,
    description:
      "Fresh Cilantro - A great addition to your favorite ethnic dishes! Use Fresh Cilantro to whip up a quick salsa or pico de gallo. Add Fresh Cilantro to your favorite guacamole or sprinkle over tacos! Fresh Cilantro has bright green, full leaves that can be removed from the stems, chopped, and added to all of your favorite dishes.",
    imgUrl: urlLink + "./cilantro_title.jpg",
  },
  {
    id: "FF-029",
    name: "Pomegranate",
    category: ["Fresh Produce", "Pomegranate"],
    price: 1.98,
    originalPrice: 2.42,
    description:
      "Add a some zing to your meals with with Fresh Pomegranate. It has a sweet and tangy flavor that's made it a Mediterranean favorite for centuries. Pomegranate fruit is soft and tender and you can squeeze it for juice. This product is filled with edible seeds. At only 72 calories per serving this product is an easy indulgence to add to your diet plan.",
    imgUrl: urlLink + "./pomegranate.jpeg",
  },
  {
    id: "FF-029",
    name: "Pomegranate",
    category: ["Fresh Produce", "Pomegranate"],
    price: 1.98,
    originalPrice: 2.42,
    description:
      "Add a some zing to your meals with with Fresh Pomegranate. It has a sweet and tangy flavor that's made it a Mediterranean favorite for centuries. Pomegranate fruit is soft and tender and you can squeeze it for juice. This product is filled with edible seeds. At only 72 calories per serving this product is an easy indulgence to add to your diet plan.",
    imgUrl: urlLink + "./pomegranate.jpeg",
  },
  {
    id: "FF-030",
    name: "Mango Fruit",
    category: ["Fresh Produce", "Mango"],
    price: 0.98,
    originalPrice: 1.42,
    description:
      "A mango is an edible stone fruit produced by the tropical tree Mangifera indica which is believed to have originated from the region between northwestern Myanmar, Bangladesh, and northeastern India.",
    imgUrl: urlLink + "./mango-fruit.jpg",
  },
  {
    id: "FF-031",
    name: "Beets",
    category: ["Fresh Produce", "Beets"],
    price: 2.44,
    originalPrice: 3.42,
    description:
      "The beetroot is the taproot portion of a beet plant, usually known in North America as beets while the vegetable is referred to as beetroot in British English, and also known as the table beet, garden beet, red beet, dinner beet or golden beet",
    imgUrl: urlLink + "./mango-fruit.jpg",
  },
];
