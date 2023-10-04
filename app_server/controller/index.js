const homelist = (req, res) => {
    res.render('index', {
        title: 'Restaurant Finder'
    })
}

const restaurantList = (req, res) => {
    res.render('restaurant-list', {
        title: 'Restaurant List',
        restaurants: [
          {
            title: "Minerva",
            rating: 3,
            class: "Banjara-Hills restaurant",
            resnum: 0,
            imgSrc: '/images/minerva.jpeg',
            veg: '🥬 Veg',
          },
          {
            title: "Blue Fox",
            rating: 4,
            class: "Banjara-Hills restaurant",
            resnum: 1,
            imgSrc: '/images/bluefox.jpeg',
            veg: '🍗 Non Veg',
          },
          {
            title: "Chef's Spot",
            rating: 5,
            class: "Banjara-Hills restaurant",
            resnum: 2,
            imgSrc: '/images/chefs-spot.jpeg',
            veg: '🥬 Veg',
          },
          {
            title: "Mirosa Cafe",
            rating: 4,
            class: "Mehdipatnam restaurant",
            resnum: 3,
            imgSrc: '/images/mirosa.jpeg',
            veg: '🥬 Veg',
          },
          {
            title: "Green Garden Grill",
            rating: 4,
            class: "Mehdipatnam restaurant",
            resnum: 4,
            imgSrc: '/images/gardengreen.jpeg',
            veg: '🍗 Non Veg',
          },
          {
            title: "Tasty Delights",
            rating: 3,
            class: "Jubilee-Hills restaurant",
            resnum: 5,
            imgSrc: '/images/haiking.webp',
            veg: '🥬 Veg',
          },
          {
            title: "Spice Fusion",
            rating: 4,
            class: "Jubilee-Hills restaurant",
            resnum: 6,
            imgSrc: '/images/spice-fusion.jpeg',
            veg: '🍗 Non Veg',
          },
          {
            title: "Cafe Mocha",
            rating: 4,
            class: "Narayanguda restaurant",
            resnum: 7,
            imgSrc: '/images/c1.jpeg',
            veg: '🥬 Veg',
          },
          {
            title: "Ocean View Restaurant",
            rating: 4,
            class: "Himayath-Nagar restaurant",
            resnum: 8,
            imgSrc: '/images/oceanview.jpeg',
            veg: '🍗 Non Veg',
          },
          {
            title: "Sunset Cafe",
            rating: 4,
            class: "Himayath-Nagar restaurant",
            resnum: 9,
            imgSrc: '/images/sunset-cafe.jpeg',
            veg: '🥬 Veg',
          }
        ]
    })
}

const about = (req, res) => {
    res.render('about', {
        title: 'About'
    })
}

const restaurantInfo = (req, res) => {
    res.render('restaurant-info', {
        title: 'Restaurant',
        resnum: req.query.param1,
        restaurants: [
            {
                title: "Minerva",
                rating: 3,
                
                photo1: '/images/min1.avif',
                photo2: '/images/min.jpeg',
                popfoods: [
                    {
                        name: "Truffle Risotto",
                        desc: "Experience the richness of truffle-infused Arborio rice, perfectly cooked to creamy perfection.",
                        imgSrc: "/images/truffle.jpeg"
                    },
                    {
                        name: "Grilled Salmon with Citrus Glaze",
                        desc: "Delight in our expertly grilled salmon, topped with a zesty citrus glaze and served with seasonal vegetables.",
                        imgSrc: "/images/salmon.jpeg"
                    },
                    {
                      name: "Beef Wellington",
                      desc: "Tender beef filet wrapped in puff pastry, served with mushroom duxelles and a red wine reduction.",
                      imgSrc: "/images/beef-wellington.jpeg"
                    }
                ]
            }, {
                title: "Blue Fox",
                rating: 4,
                
                photo1: '/images/blue.jpeg',
                photo2: '/images/blue1.jpeg',
                popfoods: [
                    {
                      name: "Margherita Pizza",
                      desc: "Classic pizza topped with fresh tomatoes, mozzarella cheese, and basil leaves.",
                      imgSrc: "/images/pizza.jpeg"
                    },
                    {
                      name: "Spaghetti Carbonara",
                      desc: "Traditional Italian pasta dish made with eggs, cheese, pancetta, and black pepper.",
                      imgSrc: "/images/spaghetti.jpeg"
                    },
                    {
                      name: "Chicken Alfredo",
                      desc: "Creamy Alfredo sauce with grilled chicken and fettuccine pasta.",
                      imgSrc: "/images/chicken-alfredo.jpeg"
                    },
                    // Add more food items for this restaurant
                  ]
            }, {
                title: "Chef's Spot",
                rating: 5,
                photo1: '/images/chef2.jpeg',
                photo2: '/images/c3.jpeg',
                popfoods: [
                    {
                      name: "Sashimi Platter",
                      desc: "An assortment of fresh, thinly sliced raw fish served with pickled ginger and wasabi.",
                      imgSrc: "/images/sashimi.jpeg"
                    },
                    {
                      name: "Dragon Roll",
                      desc: "A sushi roll filled with eel, avocado, cucumber, and topped with sweet soy sauce and eel sauce.",
                      imgSrc: "/images/dragon-roll.jpeg"
                    },
                    {
                      name: "Tempura Shrimp",
                      desc: "Crispy battered shrimp served with a tangy dipping sauce.",
                      imgSrc: "/images/tempura-shrimp.jpeg"
                    }
                    // Add more food items for this restaurant
                  ]
            }, {
                title: "Mirosa Cafe",
                rating: 4,
                photo1: '/images/mir.jpeg',
                photo2: '/images/mir1.jpeg',
                popfoods: [
                    {
                      name: "Miso Soup",
                      desc: "Traditional Japanese soup made with soybean paste, seaweed, and tofu.",
                      imgSrc: "/images/miso-soup.jpeg"
                    },
                    {
                      name: "Caprese Salad",
                      desc: "Fresh mozzarella, tomatoes, and basil drizzled with balsamic glaze.",
                      imgSrc: "/images/caprese-salad.jpeg"
                    },      {
                        name: "Lobster Bisque",
                        desc: "Rich and creamy lobster soup, garnished with chives and a touch of brandy.",
                        imgSrc: "/images/lobster-bisque.jpeg"
                      },
                ]
            },
            {
                title: "Green Garden Grill",
                rating: 4,
                photo1: '/images/garden.jpeg',
                photo2: '/images/green.jpeg',
                popfoods: [
                    {
                        name: "Rainbow Roll",
                        desc: "A colorful sushi roll featuring assorted fish, avocado, and cucumber.",
                        imgSrc: "/images/rainbow-roll.jpeg"
                      },
                      {
                        name: "Beef Teriyaki",
                        desc: "Sliced beef marinated in teriyaki sauce and grilled to perfection, served with steamed rice.",
                        imgSrc: "/images/beef-teriyaki.jpeg"
                      },      {
                        name: "BBQ Ribs",
                        desc: "Tender, slow-cooked ribs smothered in BBQ sauce and served with coleslaw and cornbread.",
                        imgSrc: "/images/bbq-ribs.jpeg"
                      },
                ]
            },
            {
                title: "Tasty Delights",
                rating: 3,
                photo1: '/images/cafemocha.jpeg',
                photo2: '/images/oceanview1.jpeg',
                popfoods: [
                    {
                        name: "Shrimp Scampi",
                        desc: "Garlic butter sautéed shrimp served over linguine pasta with a hint of lemon.",
                        imgSrc: "/images/shrimp-scampi.jpeg"
                      },
                      {
                        name: "Tempura Shrimp",
                        desc: "Crispy battered shrimp served with a tangy dipping sauce.",
                        imgSrc: "/images/tempura-shrimp.jpeg"
                      },      {
                        name: "Lobster Bisque",
                        desc: "Rich and creamy lobster soup, garnished with chives and a touch of brandy.",
                        imgSrc: "/images/lobster-bisque.jpeg"
                      },
                ]
            },
            {
                title: "Spice Fusion",
                rating: 4,
                photo1: '/images/spice.jpeg',
                photo2: '/images/spice-fusion.jpeg',
                popfoods: [      {
                    name: "Lobster Bisque",
                    desc: "Rich and creamy lobster soup, garnished with chives and a touch of brandy.",
                    imgSrc: "/images/lobster-bisque.jpeg"
                  },
                  // Add newer food items for this restaurant
                  {
                    name: "Chocolate Fondant",
                    desc: "Indulge in a warm, gooey chocolate fondant served with a scoop of vanilla ice cream.",
                    imgSrc: "/images/chocolate-fondant.jpeg"
                  },
                  {
                    name: "Vegetarian Paella",
                    desc: "A flavorful Spanish dish with saffron-infused rice, vegetables, and a variety of spices.",
                    imgSrc: "/images/paella.jpeg"
                  }]
            },
            {
                title: "Cafe Mocha",
                rating: 4,
                photo1: '/images/cafe-mocha.jpeg',
                photo2: '/images/cafemocha1.jpeg',
                popfoods: [
                  {
                    name: "Cappuccino",
                    desc: "A classic Italian coffee made with espresso and steamed milk.",
                    imgSrc: "/images/cappuchino.jpeg"
                  },
                  {
                    name: "Croissant",
                    desc: "A buttery and flaky pastry perfect for breakfast or a snack.",
                    imgSrc: "/images/croissant.jpeg"
                  },
                  // Add more food items for this restaurant
                ]
              },
              {
                title: "Ocean View Restaurant",
                rating: 4,
                photo1: '/images/oceanview.jpeg',
                photo2: '/images/oceanview1.jpeg',
                popfoods: [
                  {
                    name: "Grilled Lobster",
                    desc: "Fresh lobster grilled to perfection and served with garlic butter sauce.",
                    imgSrc: "/images/lobster-bisque.jpeg"
                  },
                  {
                    name: "Seafood Paella",
                    desc: "A flavorful Spanish dish with saffron-infused rice, seafood, and a variety of spices.",
                    imgSrc: "/images/paella.jpeg"
                  },
                  // Add more food items for this restaurant
                ]
              },
              {
                title: "Sunset Cafe",
                rating: 4,
                photo1: '/images/SunsetCafe.jpeg',
                photo2: '/images/sunset-cafe.jpeg',
                popfoods: [
                  {
                    name: "Mango Tango Smoothie",
                    desc: "A refreshing blend of mango, yogurt, and honey for a tropical delight.",
                    imgSrc: "/images/mango.jpeg"
                  },
                  {
                    name: "Caprese Salad",
                    desc: "Fresh mozzarella, tomatoes, and basil drizzled with balsamic glaze.",
                    imgSrc: "/images/caprese-salad.jpeg"
                  },
                  // Add more food items for this restaurant
                ]
              }
        ]
    })
}

module.exports = {
    homelist,
    restaurantList,
    restaurantInfo,
    about
}