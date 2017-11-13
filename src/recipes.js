function getDate(daysAgo = 0) {
  return Date.now() - (daysAgo * 24 * 60 * 60 * 1000);
}

module.exports = [
  {
    name: 'Fried Eggs',
    directions: 'Heat butter in nonstick skillet. Break eggs and slip into pan, one at a time. Cook slowly until whites are completely set and yolks begin to thicken but are not hard, 5 to 6 minutes. Slide turner under each egg and carefully flip it over in pan. Cook second side to desired doneness. Sprinkle with salt and pepper. Serve immediately.',
    ingredients: [
      {name: 'eggs', quantity: '2-4'},
      {name: 'butter'},
      {name: 'salt'},
      {name: 'pepper'},
    ],
    category: 'breakfast',
    tags: ['quick&easy', 'healthy'],
    time: '9 minutes',
    yields: '2 to 4 servings',
    image: 'assets/images/fried-eggs.jpg',
    addedAt: getDate(0),
    slug: 'fried-eggs',
  },
  {
    name: 'Pancakes',
    directions: 'Whisk eggs, milk and vanilla together in a jug. Sift flour into a large bowl. Stir in sugar. Make a well in the centre. Add milk mixture. Whisk until just combined. Heat a large non-stick frying pan over medium heat. Grease pan with butter. cook 2 pancakes for 2 minutes or until bubbles appear on surface. Turn and cook for a further 1-2 minutes or until cooked through.',
    ingredients: [
      {name: 'eggs', quantity: '2'},
      {name: 'milk', quantity: '1 3/4 cup'},
      {name: 'vanilla essence', quantity: '1 teaspoon'},
      {name: 'flour', quantity: '2 cups'},
      {name: 'butter'},
    ],
    category: 'breakfast',
    tags: ['quick&easy'],
    time: '35 minutes',
    yields: '16 pancakes',
    image: 'assets/images/pancakes.jpg',
    addedAt: getDate(2),
    slug: 'pancakes',
  },
  {
    name: 'Oatmeal',
    directions: 'Prepare the oats according to the package directions. Top with the fruits and sunflower seeds.',
    ingredients: [
      {name: 'quick-cooking oats', quantity: '1 serving'},
      {name: 'fruits', quantity: '1/2 cup'},
      {name: 'sunflower seeds', quantity: '1 tablespoon'},
    ],
    category: 'breakfast',
    tags: ['quick&easy', 'healthy', 'vegan'],
    time: '10 minutes',
    yields: '1 serve',
    image: 'assets/images/oatmeal.jpg',
    addedAt: getDate(5),
    slug: 'oatmeal',
  },
  {
    name: 'Waffles',
    directions: 'Combine almond milk and vinegar in a small mixing bowl and let set for a few minutes. Then add olive oil. Add dry ingredients to a large mixing bowl and whisk until well combined. Add wet ingredients to dry and mix until well incorporated. Let set for 5-10 minutes while your waffle iron preheats. Once waffle iron is ready, pour on about 1/2 cup of batter. Cook according to manufacturer instructions. Serve immediately with desired toppings.',
    ingredients: [
      {name: 'unsweetened almond milk ', quantity: '1 1/4 cup'},
      {name: 'white or apple cider vinegar', quantity: '1 teaspoon'},
      {name: 'olive', quantity: '1/4 cup'},
      {name: 'agave nectar', quantity: '1/4 cup'},
      {name: 'gluten-free rolled oats', quantity: '1/2 cup'},
      {name: 'gluten-free flour blend', quantity: '1 3/4 cups'},
      {name: 'baking powder', quantity: '1 1/2 teaspoon'},
      {name: 'pinch sea salt'},
    ],
    category: 'breakfast',
    tags: ['vegan', 'gluten free', 'healthy'],
    time: '30 minutes',
    yields: '5 - 6 servings',
    image: 'assets/images/waffles.jpg',
    addedAt: getDate(8),
    slug: 'waffles',
  },
  {
    name: 'Bacon and Tomato Sandwich',
    directions: 'Assemble sandwich.',
    ingredients: [
      {name: 'bread (toasted if desired)', quantity: '2 slices'},
      {name: 'bacon', quantity: '4 slices'},
      {name: 'tomato', quantity: '1'},
      {name: 'mayonnaise', quantity: '1 tablespoon'},
      {name: 'salt and paper'},
    ],
    category: 'breakfast',
    tags: ['quick&easy', 'meat'],
    time: '2 minutes',
    yields: '1 serving',
    image: 'assets/images/bacon-tomato-sandwich.jpg',
    addedAt: getDate(14),
    slug: 'bacon-and-tomato-sandwich',
  },
  {
    name: 'Bacon & Cheese Fries',
    directions: 'Cook French fries according to package directions. Place fries on a broiler-proof dish or platter. Sprinkle with cheese, onions and bacon. Broil for 1-2 minutes or until cheese is melted. Serve with ranch dressing.',
    ingredients: [
      {name: 'french fries', quantity: '1 package'},
      {name: 'grated cheese', quantity: '1 cup'},
      {name: 'crumbled cooked bacon', quantity: '1/4 cup'},
      {name: 'thinly sliced green onions', quantity: '1/2 cup'},
      {name: 'ranch salad dressing'},
    ],
    category: 'dinner',
    tags: ['meat', 'quick&easy'],
    time: '25 minutes',
    yields: '8 - 10 servings',
    image: 'assets/images/bacon-cheese-fries.jpg',
    addedAt: getDate(3),
    slug: 'bacon-and-cheese-fries',
  },
  {
    name: 'Spaghetti with Asparagus, Smoked Mozzarella and Prosciutto',
    directions: 'Cook the asparagus in a large pot of boiling salted water until crisp tender, about 2 to 3 minutes. When cool, strain, cut asparagus into 1-inch pieces, and set aside. Cook the pasta until al dente. Heat the oil in a heavy large skillet over medium heat. Add asparagus to the skillet. Season with salt and pepper, to taste. Add the pasta, prosciutto and mozzarella. Season with salt and pepper, to taste, and serve.',
    ingredients: [
      {name: 'spaghetti', quantity: '3/4 pound'},
      {name: 'asparagus', quantity: '2 pounds'},
      {name: 'mozzarella cheese', quantity: 'about 1 cup'},
      {name: 'thinly sliced prosciutto', quantity: '6 ounces'},
      {name: 'olive oil', quantity: '4 tablespoons'},
      {name: 'salt and pepper'},
    ],
    category: 'dinner',
    tags: ['meat', 'quic&easy', 'healthy'],
    time: '25 minutes',
    yields: '6 to 8 servings',
    image: 'assets/images/mozarella-spaghetti',
    addedAt: getDate(5),
    slug: 'spaghetti-with-asparagus-smoked-mozzarella-and-prosciutto',
  },
  {
    name: 'Beef Noodle Soup',
    directions: 'Cut beef into larger chunks and then place in a large pot with enough cold water. Throw one spring onion and several ginger slices, bring to a boil and then pick the beef chunks out. Heat up around 2 tablespoons of oil for half minute over slow fire, then place garlic, ginger, and onion in, fry until aromatic. Return cooked beef and stir for several minutes until the beef is slightly browned, place tomato wedges and add warm stock to cover all the content. Bring to boil and then slow down the fire and simmer for around 1 hour. Pick the beef out and strain the liquid to remove cooked vegetables and spices, add salt to taste and simmer for another 15-20 minutes. Cook noodles according to package instructions. Transfer noodles to serving bowl, pour in soup base and top with beef.',
    ingredients: [
      {name: 'beef shank or sirloin', quantity: '1000g'},
      {name: 'beef bone stock', quantity: '2L'},
      {name: 'vegetable oil', quantity: '2 tablespoons'},
      {name: 'tomato', quantity: '1 middle size'},
      {name: 'red onion', quantity: '1/2'},
      {name: 'soy sauce', quantity: '2 tablespoons'},
      {name: 'noodles', quantity: 'for 3 - 4 servings'},
      {name: 'Sichuan peppercorn', quantity: '1 teaspoon'},
      {name: 'salt'},
    ],
    category: 'dinner',
    tags: ['meat', 'healthy', 'spicy'],
    time: 'about 2 hours',
    yields: '4 - 6 servings',
    image: 'assets/images/beef-noodle-soup.jpg',
    addedAt: getDate(9),
    slug: 'beef-noodle-soup',
  },
  {
    name: 'Clams in White Wine',
    directions: 'In a large skillet with a lid, heat butter and olive oil over medium heat. Once butter melts, add shallot and garlic. Cook about 1 minute. Add clams to skillet, pour wine over the top. Cover and cook for 10 minutes or until shells open. Try to refrain from removing the lid during the first 10 minutes. Carefully transfer clams and broth to a serving bowl.',
    ingredients: [
      {name: 'manila clams', quantity: '1 1/2 pounds'},
      {name: 'white wine', quantity: '1/2 cup'},
      {name: 'olive oil', quantity: '1 tablespoon'},
      {name: 'butter', quantity: '1 tablespoon'},
      {name: 'shallot', quantity: '1'},
      {name: 'garlic', quantity: '3 cloves'},
    ],
    category: 'dinner',
    tags: ['quick&easy', 'healthy'],
    time: '21 minutes',
    yields: '4 servings',
    image: 'assets/images/clams.jpg',
    addedAt: getDate(13),
    slug: 'clams-in-white-wine',
  },
  {
    name: 'Vegan Dumplings',
    directions: 'Combine flour, water and salt in a bowl. Mix to form a slightly sticky dough. Divide into 12. Roll out each ball between two sheets of wax paper as thin as possible. Add all the veggies to a non-stick skillet over medium high heat. Once they begin to sizzle, add about 1/3 cup of water, cover the pan, and let them steam for 4-5 minutes over medium heat till soft. Remove from heat and allow to cool for 5-10 minutes. Remove one wrapper from the bowl. Spoon about a teaspoon of filling into the center of the wrapper. Fold in half and press the edges together firmly. Fill a shallow pan with enough water to completely cover the bottom. Bring to a boil. Add your dumplings. Cover and steam for 5-6 minutes. Remove from the pan. Serve plain or with dipping sauce of your choice.',
    ingredients: [
      {name: 'white rice flour', quantity: '1 cup'},
      {name: 'tapioca flour', quantity: '1/2 cup'},
      {name: 'boiling water', quantity: '1 cup'},
      {name: 'salt', quantity: '1/2 teaspoon'},
      {name: 'chopped mushrooms', quantity: '1 cup'},
      {name: 'shredded carrots', quantity: '1 cup'},
      {name: 'cabbage', quantity: '2 cups'},
    ],
    category: 'dinner',
    tags: ['vegan', 'gluten free', 'healthy'],
    time: '45 minutes',
    yields: '15 dumplings',
    image: 'assets/images/dumplings.jpg',
    addedAt: getDate(15),
    slug: 'vegan-dumplings',
  },
  {
    name: 'Vegan Strawberry Ice Cream',
    directions: 'Combine all ingredients in a strong blender or food processor and mix just until smooth. Transfer to a plastic container and place in freezer for 30 minutes. Churn the mixture with a sturdy whisk or fork, breaking up any ice crystals or frozen bits; return it to the freezer for another half-hour. Repeat until it firms up (about 3 hours altogether).',
    ingredients: [
      {name: 'frozen strawberries', quantity: '1 pound'},
      {name: 'coconut milk', quantity: '1 can'},
      {name: 'liquid Stevia', quantity: '1/4 teaspoon'},
      {name: 'lemon juice', quantity: '1 1/2 teaspoons'},
    ],
    category: 'dessert',
    tags: ['vegan', 'quick&easy'],
    time: '3 hours',
    yields: '8 servings',
    image: 'assets/images/ice-cream.jpg',
    addedAt: getDate(1),
    slug: 'vegan-strawberry-ice-cream',
  },
  {
    name: 'Tiramisu',
    directions: 'Combine egg yolks and sugar in the top of a double boiler, over boiling water. Reduce heat to low, and cook for about 10 minutes, stirring constantly. Add Mascarpone to whipped yolks, beat until combined. In a separate bowl, whip cream to stiff peaks. Gently fold the whipped cream in the mascarpone sabayon mixture and set aside. Mix the cold espresso with the coffee liquor and dip the lady fingers into the mixture. Arrange the lady fingers in the bottom of a baking dish.Spoon half the mascarpone cream filling over the lady fingers. Repeat process. Refrigerate 4 hours or overnight. Dust with cocoa before serving.',
    ingredients: [
      {name: 'egg yolks', quantity: '6'},
      {name: 'sugar', quantity: '1 cup'},
      {name: 'mascarpone cheese', quantity: '1 1/4 cup'},
      {name: 'heavy whipping cream', quantity: '1 3/4 cup'},
      {name: 'Italian Lady fingers', quantity: '2 - 7 oz packages'},
      {name: 'cold espresso or strong coffee', quantity: '1 cup'},
      {name: 'coffee flavored Liqueur', quantity: '1/2 cup'},      
      {name: 'cocoa for dusting ', quantity: '1 ounce'},      
    ],
    category: 'dessert',
    tags: [],
    time: '40 minutes',
    yields: '9 servings',
    image: 'assets/images/tiramisu.jpg',
    addedAt: getDate(2),
    slug: 'tiramisu',
  },
  {
    name: 'Strawberry Smoothie',
    directions: 'In blender, place yogurt, strawberries and juice. Cover. Blend on medium speed about 2 minutes or until smooth. Pour into serving glass. Serve immediately.',
    ingredients: [
      {name: 'strawberry yogurt', quantity: '1 container'},
      {name: 'sliced fresh or frozen strawberries', quantity: '1/2 cup'},
      {name: 'orange or pineapple juice', quantity: '1/2 cup'},
    ],
    category: 'dessert',
    tags: ['quick&easy'],
    time: '10 minutes',
    yields: '1 serving',
    image: 'assets/images/strawberry-smoothie.jpg',
    addedAt: getDate(6),
    slug: 'strawberry-smoothie',
  },
  {
    name: 'Cheesecake',
    directions: 'Preheat the oven to 350°F. Make the crust by stirring together all of the crust ingredients, mixing until thoroughly combined. Press the crumbs into the bottom and up the sides of the pie pan. Make the filling by mixing together the room-temperature cream cheese and sugar until smooth. Mix in the eggs and vanilla, again mixing until smooth. Pour the filling into the crust. Place the cheesecake in the oven. Bake it for 20 minutes, then add a crust shield. Bake for an additional 10 minutes (for a total of about 30 minutes). Remove the cheesecake from the oven, and set it on a rack to cool.',
    ingredients: [
      {name: 'graham cracker', quantity: '1 1/2 cups'},
      {name: 'sugar', quantity: '1 cup'},
      {name: 'melted butter', quantity: '1/3 cup'},
      {name: 'salt', quantity: '1/8 teaspoon'},
      {name: 'cream cheese', quantity: '2 cups'},
      {name: 'eggs', quantity: '2'},
      {name: 'vanilla extract', quantity: '1 teaspoon'},
    ],
    category: 'dessert',
    tags: [],
    time: '108 minutes',
    yields: '8 - 10 servings',
    image: 'assets/images/cheesecake.jpg',
    addedAt: getDate(12),
    slug: 'cheesecake',
  },
  {
    name: 'Coconut Panna Cotta',
    directions: 'Pour the coconut milk and milk into a saucepan, then add the sugar. Split the vanilla pod in half and scrape out the seeds, then add to the pan with the empty pod. Bring to the boil, then remove from the heat and leave to infuse for 5 mins. Spoon 200ml of the hot mixture into a small bowl. Shake over the gelatine and whisk into the mixture until dissolved. Pour into 6 x 200ml metal dariole moulds and place in the fridge for at least 2 hrs until firm with a slight wobble.',
    ingredients: [
      {name: 'coconut milk', quantity: '800ml'},
      {name: 'full-fat milk', quantity: '400ml'},
      {name: 'caster sugar', quantity: '100g'},
      {name: 'vanilla pod', quantity: '1'},
      {name: 'powdered gelatine', quantity: '2 x 12g sachets'},
      {name: 'coconut chips', quantity: 'handful'},
    ],
    category: 'dessert',
    tags: ['quick&easy'],
    time: '20 minutes',
    yields: '6 servings',
    image: 'assets/images/panna-cotta.jpg',
    addedAt: getDate(16),
    slug: 'coconut-panna-cotta',
  },
  {
    name: 'Burger',
    directions: 'In a bowl, mix ground beef, egg, onion, bread crumbs, salt and pepper until well blended. Divide mixture into four equal portions and shape each into a patty. Lay burgers on an oiled barbecue grill. Cook burgers, turning once, until browned on both sides and no longer pink inside, 7 to 8 minutes total. Remove from grill. Lay buns, cut side down, on grill and cook until lightly toasted, 30 seconds to 1 minute. Spread mayonnaise on bun bottoms. Add lettuce, burger, onion, and salt and pepper to taste.',
    ingredients: [
      {name: 'ground lean beef', quantity: '1 pound'},
      {name: 'egg', quantity: '1'},
      {name: 'minced onion', quantity: '1/2 cup'},
      {name: 'bread crumbs', quantity: '1/4 cup'},
      {name: 'hamburger buns', quantity: '4'},
      {name: 'mayonnaise', quantity: 'about 1/4 cup'},
      {name: 'red onion', quantity: '4 thin slices'},
      {name: 'iceberg lettuce', quantity: '4 leaves'},
      {name: 'salt and pepper'},
    ],
    category: 'snacks',
    tags: ['meat'],
    time: '30 minutes',
    yields: '4 servings',
    image: 'assets/images/burger.jpg',
    addedAt: getDate(0),
    slug: 'burger',
  },
  {
    name: 'French Fries',
    directions: 'Cut the Potatoes. Put the cut potatoes in a large bowl, cover with cool water, and soak for at least 20 minutes. Drain the potatoes and pat them dry with paper towels. Bring at least 2 inches of oil in a large pot. Fry potatoes, at this fairly low temperature until the fries are cooked through but still as pale as they were when you put them in the oil, about 5 minutes. Lift the potatoes out of the oil and let the rest of it drain. Just before serving fry over high heat, till a golden brown and serve.',
    ingredients: [
      {name: 'potatoes', quantity: '250g'},
      {name: 'salt', quantity: '1 tablespoon'},
      {name: 'oil'},
    ],
    category: 'snacks',
    tags: ['quic&easy'],
    time: '30 minutes',
    yields: '1 serving',
    image: 'assets/images/french-fries.jpg',
    addedAt: getDate(1),
    slug: 'french-fries',
  },
  {
    name: 'Popcorn',
    directions: 'Heat the oil in a saucepan or pot with a lid set over medium-high heat. Pour in popcorn kernels and sprinkle enough salt to lightly cover the layer of kernels. Add the butter to the pot and cover with the lid. As soon as the kernels start to pop, shake the pan back and forth across the burner constantly until the popping slows down. As soon as the pops are about 2 seconds apart, remove from the heat and pour into a serving bowl. Taste, and season with additional salt if desired.',
    ingredients: [
      {name: 'peanut oil', quantity: '3 tablespoons'},
      {name: 'butter', quantity: '2 tablespoons'},
      {name: 'unpopped popcorn', quantity: '1/2 cup'},
      {name: 'salt', quantity: '1/2 teaspoon'},
    ],
    category: 'snacks',
    tags: ['quick&easy'],
    time: '10 minutes',
    yields: '5 servings',
    image: 'assets/images/popcorn.jpg',
    addedAt: getDate(3),
    slug: 'popcorn',
  },
  {
    name: 'Tomato Bruschetta',
    directions: 'Preheat oven to 300°F. Tear each tomato in half and press out and discard the seeds. Arrange tomatoes on prepared baking sheet in one layer, season with salt, and drizzle all over with olive oil. Transfer to oven and cook until excess juices have evaporated (about 1 hour). Transfer oven-roasted tomatoes to a work surface and chop finely. Transfer to a large mixing bowl. Add olive oil and basil and stir well. Season with salt and add red wine vinegar, about 1 teaspoon at a time, until tomatoes are very lightly tart. Stir in a pinch of sugar. Rub top sides of toasts all over with garlic. Spoon tomatoes on top and serve.',
    ingredients: [
      {name: 'peeled whole tomatoes', quantity: '2 cans'},
      {name: 'olive oil', quantity: '1/4 cup'},
      {name: 'basil leaves', quantity: '15'},
      {name: 'freshly toasted sliced bread', quantity: ''},
      {name: 'red wine vinegar', quantity: 'to taste'},
      {name: 'sugar', quantity: 'to taste'},
      {name: 'halved garlic cloves'},
      {name: 'salt'},
    ],
    category: 'snacks',
    tags: ['quick&easy', 'vegan'],
    time: '25 minutes',
    yields: '2 servings',
    image: 'assets/images/bruschetta.jpg',
    addedAt: getDate(6),
    slug: 'tomato-bruschetta',
  },
  {
    name: 'Mixed Nuts',
    directions: 'Simply mix everything in a large mixing bow.',
    ingredients: [
      {name: 'European almonds', quantity: '1/4 cup'},
      {name: 'walnuts', quantity: '1/4 cup'},
      {name: 'hazelnuts', quantity: '1/4 cup'},
      {name: 'cashews', quantity: '1/4 cup'},
      {name: 'pumpkin seeds', quantity: '3 Tbsp'},
      {name: 'sunflower seeds', quantity: '2 Tbsp'},
      {name: 'organic raisins', quantity: '3 Tbsp'},
      {name: 'organic dried cranberries', quantity: '3 Tbsp'},      
      {name: 'dried goji berries', quantity: '2 Tbsp'},      
    ],
    category: 'snacks',
    tags: ['quick&easy', 'vegan'],
    time: '2 minutes',
    yields: '8 servings',
    image: 'assets/images/nuts.jpg',
    addedAt: getDate(11),
    slug: 'mixed-nuts',
  },
  {
    name: 'Strawberry Cocktail',
    directions: 'Put a few strawberries into a tall 16 oz glass and muddle with a spoon. Add Seagram\'s Escapes, Sprite, Club Soda, a squeeze of fresh lime and stir. Fill glass with ice. Garnish with strawberry or a lime and enjoy!',
    ingredients: [
      {name: 'fresh strawberries', quantity: '2-3'},
      {name: 'Seagram\'s Escapes Strawberry Daiquiri', quantity: '6 oz'},
      {name: 'Sprite', quantity: '3 oz'},
      {name: 'Club Soda', quantity: '3 oz'},
      {name: 'fresh lime', quantity: '1 squeeze'},
      {name: 'ice'},
    ],
    category: 'drinks',
    tags: ['quick&easy'],
    time: '5 minutes',
    yields: '1 glass',
    image: 'assets/images/strawberry-cocktail.jpg',
    addedAt: getDate(1),
    slug: 'strawberry-cocktail',
  },
  {
    name: 'Nettle Tea Mojito',
    directions: 'Brew tea all together with the 1/2 cup hot water and 2 tea bags in a cup. To your cocktail glasses, split the tea in half, pouring in each glass. Add 1/4 tsp of raw honey to each glass and stir to dissolve in the hot water. Next, squeeze half a lime in each glass and stir. Tear mint leaves up by hand a bit to release some of the oils and divide evenly amongst glasses. Now add your crushed ice, followed by your sparkling or cold water to fill to the top with. Garnish with whole mint leaves and serve.',
    ingredients: [
      {name: 'lime', quantity: '1'},
      {name: 'hot water', quantity: '1/2 cup'},
      {name: 'Nettle Tea', quantity: '2 bags'},
      {name: 'raw honey', quantity: '1/2 teaspoon'},
      {name: 'crushed ice', quantity: '1 cup'},
      {name: 'sparkling water', quantity: '1/2 cup'},
      {name: 'fresh mint leaves', quantity: '1/2 cup'}, 
    ],
    category: 'drinks',
    tags: ['quick&easy'],
    time: '15 minutes',
    yields: '2 servings',
    image: 'assets/images/tea-mojito.jpg',
    addedAt: getDate(3),
    slug: 'nettle-tea-mojito',
  },
  {
    name: 'Matcha Green Tea Latte',
    directions: 'Spoon the matcha green tea powder and the sugar into a mug or cup. Add the warm water and mix with a spoon or with a whisk until it is a smooth dark green paste to ensure no lumps form. Warm the milk in a small saucepan and pour into the mug until nearly full. Use cold milk for an iced latte. Use a whisk to mix the paste and milk together until smooth and light green in colour.',
    ingredients: [
      {name: 'matcha green tea powder', quantity: '1 teaspoon'},
      {name: 'sugar', quantity: '2 teaspoons'},
      {name: 'warm water', quantity: '3 tablespoons'},
      {name: 'cold milk', quantity: '250ml'},      
    ],
    category: 'drinks',
    tags: ['quick&easy'],
    time: '5 minutes',
    yields: '1 serving',
    image: 'assets/images/matcha-latte.jpg',
    addedAt: getDate(7),
    slug: 'matcha-green-tea-latte',
  },
  {
    name: 'Mint Lemonade',
    directions: 'Blend the lemon juice, agave nectar, and mint leaves on high speed for 10 to 15 seconds or until the mint leaves are well blended. Pour into a pitcher and add 6 cups of the water. Keep adding water until it reaches your desired strength.',
    ingredients: [
      {name: 'freshly squeezed lemon juice', quantity: '1/2 cup'},
      {name: 'raw agave nectar', quantity: '1/2 cup'},
      {name: 'mint leaves', quantity: '1/2 cup'},
      {name: 'water', quantity: '6 to 8 cups'},
    ],
    category: 'drinks',
    tags: ['vegan', 'quick&easy'],
    time: '10 minutes',
    yields: '4 servings',
    image: 'assets/images/lemonade.jpg',
    addedAt: getDate(13),
    slug: 'mint-lemonade',
  },
  {
    name: 'Espresso',
    directions: 'Place ground coffee in the filter of a drip coffeemaker. Add water; brew according to manufacturer\'s instructions. Serve immediately in espresso cups.',
    ingredients: [
      {name: 'ground coffee', quantity: '1/2 cup'},
      {name: 'cold water', quantity: '1 1/2 cups'},
    ],
    category: 'drinks',
    tags: ['quick&easy'],
    time: '10 minutes',
    yields: '4 servings',
    image: 'assets/images/espresso.jpg',
    addedAt: getDate(14),
    slug: 'espresso',
  },
];
