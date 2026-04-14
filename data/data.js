/**
 * BHUK.IN — data.js
 * All site content as placeholders. Replace with API fetch for backend.
 */
const BHUK = {

  site: {
    name:      "Multi Restaurant",
    brand:     "Karenderia",
    tagline:   "Order Delicious Food from the Comfort of Your Home",
    logo:      "assets/img/logo.png",
    website:   "bhuk.in",
    copyright: "© Karenderia"
  },

  nav: {
    links: [
      { label:"Home",          href:"index.html" },
      { label:"Restaurants",   href:"restaurants.html" },
      { label:"About Us",      href:"about.html" },
      { label:"Services",      href:"about.html#services" },
      { label:"Find a Store",  href:"restaurants.html" },
      { label:"Contact Us",    href:"contact.html" }
    ],
    login_link:    "login.html",
    signup_link:   "register.html",
    merchant_link: "merchant-signup.html",
    delivery_link: "delivery-signup.html"
  },

  hero: {
    title:               "Let's find best food for you",
    search_placeholder:  "Enter your street and house number",
    hero_img_left:       "assets/img/hero-left.png",
    hero_img_right:      "assets/img/hero-right.png"
  },

  cuisines: [
    { id:"burgers",    name:"Burgers",    icon:"🍔", img:"assets/img/cuisines/burgers.png",    color:"#FF6B35" },
    { id:"steak",      name:"Steak",      icon:"🥩", img:"assets/img/cuisines/steak.png",      color:"#8B2635" },
    { id:"vegetarian", name:"Vegetarian", icon:"🥗", img:"assets/img/cuisines/vegetarian.png", color:"#4CAF50" },
    { id:"pizza",      name:"Pizza",      icon:"🍕", img:"assets/img/cuisines/pizza.png",      color:"#FF9800" },
    { id:"korean",     name:"Korean",     icon:"🍜", img:"assets/img/cuisines/korean.png",     color:"#E91E63" },
    { id:"healthy",    name:"Healthy",    icon:"🥑", img:"assets/img/cuisines/healthy.png",    color:"#2196F3" },
    { id:"chinese",    name:"Chinese",    icon:"🥡", img:"assets/img/cuisines/chinese.png",    color:"#FF5722" },
    { id:"thai",       name:"Thai",       icon:"🍛", img:"assets/img/cuisines/thai.png",       color:"#9C27B0" },
    { id:"indian",     name:"Indian",     icon:"🍲", img:"assets/img/cuisines/indian.png",     color:"#FF9800" },
    { id:"sushi",      name:"Sushi",      icon:"🍱", img:"assets/img/cuisines/sushi.png",      color:"#00BCD4" },
    { id:"desserts",   name:"Desserts",   icon:"🍰", img:"assets/img/cuisines/desserts.png",   color:"#E91E63" },
    { id:"drinks",     name:"Drinks",     icon:"🥤", img:"assets/img/cuisines/drinks.png",     color:"#3F51B5" }
  ],

  restaurants: [
    { id:"r001", name:"The Burger House",    cuisine:["burgers"],    rating:4.8, reviews:320, delivery_time:"20-30 min", delivery_fee:"Free",  min_order:"$5",  price_range:"$$",   tags:["Popular","Fast"],     img:"assets/img/restaurants/r001.jpg", address:"123 Main St",         open:true,
      menu:[
        { id:"m001", name:"Classic Burger",       price:8.99,  img:"assets/img/menu/m001.jpg", desc:"Juicy beef patty with lettuce, tomato & special sauce",    category:"Burgers", popular:true  },
        { id:"m002", name:"Double Smash Burger",  price:12.99, img:"assets/img/menu/m002.jpg", desc:"Two smashed patties with American cheese & pickles",        category:"Burgers", popular:true  },
        { id:"m003", name:"BBQ Bacon Burger",     price:13.99, img:"assets/img/menu/m003.jpg", desc:"Smoky BBQ sauce, crispy bacon, cheddar cheese",             category:"Burgers", popular:false },
        { id:"m004", name:"Veggie Burger",        price:9.99,  img:"assets/img/menu/m004.jpg", desc:"Plant-based patty with avocado & sprouts",                 category:"Burgers", popular:false },
        { id:"m005", name:"Cheese Fries",         price:4.99,  img:"assets/img/menu/m005.jpg", desc:"Crispy fries loaded with melted cheddar sauce",            category:"Sides",   popular:true  },
        { id:"m006", name:"Onion Rings",          price:3.99,  img:"assets/img/menu/m006.jpg", desc:"Golden fried onion rings with dipping sauce",              category:"Sides",   popular:false },
        { id:"m007", name:"Chocolate Shake",      price:5.99,  img:"assets/img/menu/m007.jpg", desc:"Thick creamy chocolate milkshake",                         category:"Drinks",  popular:true  }
      ]
    },
    { id:"r002", name:"Pizza Palace",          cuisine:["pizza"],      rating:4.6, reviews:210, delivery_time:"25-40 min", delivery_fee:"$1.99", min_order:"$10", price_range:"$$",   tags:["Bestseller"],         img:"assets/img/restaurants/r002.jpg", address:"45 Oak Avenue",       open:true,
      menu:[
        { id:"m010", name:"Margherita Pizza",     price:11.99, img:"assets/img/menu/m010.jpg", desc:"Classic tomato base, fresh mozzarella, basil",             category:"Pizza",   popular:true  },
        { id:"m011", name:"Pepperoni Pizza",      price:13.99, img:"assets/img/menu/m011.jpg", desc:"Generous pepperoni, mozzarella, tomato sauce",             category:"Pizza",   popular:true  },
        { id:"m012", name:"BBQ Chicken Pizza",    price:14.99, img:"assets/img/menu/m012.jpg", desc:"Smoky BBQ base, grilled chicken, red onions",              category:"Pizza",   popular:false },
        { id:"m013", name:"Veggie Supreme",       price:12.99, img:"assets/img/menu/m013.jpg", desc:"Bell peppers, mushrooms, olives, onions & tomatoes",       category:"Pizza",   popular:false },
        { id:"m014", name:"Garlic Bread",         price:4.99,  img:"assets/img/menu/m014.jpg", desc:"Toasted bread with garlic butter & herbs",                 category:"Sides",   popular:true  },
        { id:"m015", name:"Caesar Salad",         price:7.99,  img:"assets/img/menu/m015.jpg", desc:"Romaine, croutons, parmesan & caesar dressing",            category:"Salads",  popular:false }
      ]
    },
    { id:"r003", name:"Green Bowl",            cuisine:["vegetarian","healthy"], rating:4.7, reviews:185, delivery_time:"15-25 min", delivery_fee:"Free", min_order:"$8", price_range:"$", tags:["Healthy","Vegan-friendly"], img:"assets/img/restaurants/r003.jpg", address:"78 Park Lane", open:true,
      menu:[
        { id:"m020", name:"Buddha Bowl",          price:12.99, img:"assets/img/menu/m020.jpg", desc:"Quinoa, roasted veggies, avocado & tahini dressing",        category:"Bowls",   popular:true  },
        { id:"m021", name:"Acai Bowl",            price:10.99, img:"assets/img/menu/m021.jpg", desc:"Acai blend topped with granola, berries & honey",           category:"Bowls",   popular:true  },
        { id:"m022", name:"Green Detox Juice",    price:6.99,  img:"assets/img/menu/m022.jpg", desc:"Spinach, cucumber, celery, apple & ginger",                category:"Drinks",  popular:false },
        { id:"m023", name:"Avocado Toast",        price:9.99,  img:"assets/img/menu/m023.jpg", desc:"Sourdough toast, smashed avocado, poached egg",            category:"Breakfast",popular:true },
        { id:"m024", name:"Lentil Soup",          price:7.99,  img:"assets/img/menu/m024.jpg", desc:"Hearty red lentil soup with cumin & lemon",                category:"Soups",   popular:false }
      ]
    },
    { id:"r004", name:"Seoul Kitchen",         cuisine:["korean"],     rating:4.9, reviews:412, delivery_time:"30-45 min", delivery_fee:"$2.99", min_order:"$15", price_range:"$$$",  tags:["Top Rated","Authentic"], img:"assets/img/restaurants/r004.jpg", address:"22 Korea Town Blvd", open:true,
      menu:[
        { id:"m030", name:"Bibimbap",             price:14.99, img:"assets/img/menu/m030.jpg", desc:"Rice bowl with mixed vegetables, egg & gochujang",          category:"Rice",    popular:true  },
        { id:"m031", name:"Korean BBQ Beef",      price:18.99, img:"assets/img/menu/m031.jpg", desc:"Marinated beef bulgogi with steamed rice & banchan",         category:"BBQ",     popular:true  },
        { id:"m032", name:"Kimchi Jjigae",        price:12.99, img:"assets/img/menu/m032.jpg", desc:"Spicy kimchi stew with tofu & pork",                        category:"Stew",    popular:false },
        { id:"m033", name:"Korean Fried Chicken", price:16.99, img:"assets/img/menu/m033.jpg", desc:"Crispy double-fried chicken with sweet chili glaze",        category:"Chicken", popular:true  }
      ]
    },
    { id:"r005", name:"Prime Steakhouse",      cuisine:["steak"],      rating:4.7, reviews:275, delivery_time:"35-50 min", delivery_fee:"$3.99", min_order:"$20", price_range:"$$$$", tags:["Premium","Fine Dining"], img:"assets/img/restaurants/r005.jpg", address:"9 Grill Street", open:true,
      menu:[
        { id:"m040", name:"Ribeye Steak",         price:34.99, img:"assets/img/menu/m040.jpg", desc:"12oz prime ribeye, garlic butter, rosemary",                category:"Steaks",  popular:true  },
        { id:"m041", name:"Filet Mignon",         price:42.99, img:"assets/img/menu/m041.jpg", desc:"8oz tenderloin, béarnaise sauce, truffle fries",            category:"Steaks",  popular:true  },
        { id:"m042", name:"Mashed Potatoes",      price:6.99,  img:"assets/img/menu/m042.jpg", desc:"Creamy butter mashed potatoes with chives",                 category:"Sides",   popular:true  },
        { id:"m043", name:"Onion Soup",           price:8.99,  img:"assets/img/menu/m043.jpg", desc:"Classic French onion soup with gruyère crouton",            category:"Starters",popular:false }
      ]
    },
    { id:"r006", name:"Dragon Palace",         cuisine:["chinese"],    rating:4.5, reviews:198, delivery_time:"25-35 min", delivery_fee:"$1.99", min_order:"$12", price_range:"$$",   tags:["Popular"],            img:"assets/img/restaurants/r006.jpg", address:"55 Chinatown Ave",    open:true,
      menu:[
        { id:"m050", name:"Kung Pao Chicken",     price:13.99, img:"assets/img/menu/m050.jpg", desc:"Spicy stir-fried chicken with peanuts & veggies",           category:"Chicken", popular:true  },
        { id:"m051", name:"Dim Sum Basket",       price:10.99, img:"assets/img/menu/m051.jpg", desc:"Assorted steamed dumplings with dipping sauce",             category:"Dim Sum", popular:true  },
        { id:"m052", name:"Peking Duck",          price:22.99, img:"assets/img/menu/m052.jpg", desc:"Crispy duck with pancakes, hoisin & cucumber",              category:"Duck",    popular:false },
        { id:"m053", name:"Fried Rice",           price:9.99,  img:"assets/img/menu/m053.jpg", desc:"Wok-fried rice with egg, vegetables & soy sauce",           category:"Rice",    popular:true  }
      ]
    },
    { id:"r007", name:"Bangkok Street",        cuisine:["thai"],       rating:4.6, reviews:167, delivery_time:"25-40 min", delivery_fee:"Free",  min_order:"$10", price_range:"$$",   tags:["Authentic"],          img:"assets/img/restaurants/r007.jpg", address:"31 Spice Road",       open:false,
      menu:[
        { id:"m060", name:"Pad Thai",             price:12.99, img:"assets/img/menu/m060.jpg", desc:"Stir-fried rice noodles with shrimp, egg & peanuts",        category:"Noodles", popular:true  },
        { id:"m061", name:"Green Curry",          price:13.99, img:"assets/img/menu/m061.jpg", desc:"Coconut green curry with chicken, bamboo & basil",          category:"Curry",   popular:true  },
        { id:"m062", name:"Mango Sticky Rice",    price:7.99,  img:"assets/img/menu/m062.jpg", desc:"Sweet coconut sticky rice with fresh mango slices",         category:"Desserts",popular:true  }
      ]
    },
    { id:"r008", name:"Sushi Sakura",          cuisine:["sushi"],      rating:4.8, reviews:302, delivery_time:"30-45 min", delivery_fee:"$2.99", min_order:"$18", price_range:"$$$",  tags:["Top Rated"],          img:"assets/img/restaurants/r008.jpg", address:"7 Cherry Blossom St", open:true,
      menu:[
        { id:"m070", name:"Salmon Nigiri (6pc)",  price:14.99, img:"assets/img/menu/m070.jpg", desc:"Fresh Atlantic salmon over seasoned sushi rice",            category:"Nigiri",  popular:true  },
        { id:"m071", name:"Dragon Roll",          price:16.99, img:"assets/img/menu/m071.jpg", desc:"Shrimp tempura topped with avocado & unagi sauce",          category:"Rolls",   popular:true  },
        { id:"m072", name:"Spicy Tuna Roll",      price:13.99, img:"assets/img/menu/m072.jpg", desc:"Spicy tuna, cucumber, sesame & sriracha mayo",              category:"Rolls",   popular:false },
        { id:"m073", name:"Miso Soup",            price:3.99,  img:"assets/img/menu/m073.jpg", desc:"Traditional miso broth with tofu & seaweed",               category:"Soups",   popular:false }
      ]
    },
    { id:"r009", name:"Spice of India",        cuisine:["indian"],     rating:4.7, reviews:389, delivery_time:"30-45 min", delivery_fee:"Free",  min_order:"$12", price_range:"$$",   tags:["Popular","Spicy"],    img:"assets/img/restaurants/r009.jpg", address:"14 Curry Lane",       open:true,
      menu:[
        { id:"m080", name:"Butter Chicken",       price:14.99, img:"assets/img/menu/m080.jpg", desc:"Tender chicken in rich tomato-butter cream sauce",          category:"Mains",   popular:true  },
        { id:"m081", name:"Biryani",              price:13.99, img:"assets/img/menu/m081.jpg", desc:"Fragrant basmati rice with spiced lamb & saffron",          category:"Rice",    popular:true  },
        { id:"m082", name:"Garlic Naan",          price:3.99,  img:"assets/img/menu/m082.jpg", desc:"Soft leavened bread with garlic butter from tandoor",       category:"Bread",   popular:true  },
        { id:"m083", name:"Mango Lassi",          price:4.99,  img:"assets/img/menu/m083.jpg", desc:"Chilled yogurt-based mango drink",                         category:"Drinks",  popular:true  }
      ]
    },
    { id:"r010", name:"Sweet Endings",         cuisine:["desserts"],   rating:4.5, reviews:143, delivery_time:"20-30 min", delivery_fee:"$1.99", min_order:"$8",  price_range:"$",    tags:["Sweet","New"],        img:"assets/img/restaurants/r010.jpg", address:"88 Sugar Lane",       open:true,
      menu:[
        { id:"m090", name:"Chocolate Lava Cake",  price:7.99,  img:"assets/img/menu/m090.jpg", desc:"Warm chocolate cake with molten centre & vanilla ice cream",category:"Cakes",   popular:true  },
        { id:"m091", name:"Crème Brûlée",         price:8.99,  img:"assets/img/menu/m091.jpg", desc:"Classic vanilla custard with caramelised sugar crust",      category:"Classics",popular:true  },
        { id:"m092", name:"Tiramisu",             price:7.99,  img:"assets/img/menu/m092.jpg", desc:"Espresso-soaked ladyfingers with mascarpone cream",         category:"Classics",popular:false },
        { id:"m093", name:"Strawberry Cheesecake",price:8.99,  img:"assets/img/menu/m093.jpg", desc:"Creamy cheesecake with fresh strawberry coulis",           category:"Cakes",   popular:true  }
      ]
    }
  ],

  join_cards: [
    { title:"Join Our Network of Restaurants",   desc:"Discover the advantages of partnering with us and see how we can help your business grow.",                                       cta:"Signup now",     link:"merchant-signup.html",  img:"assets/img/join-restaurant.jpg" },
    { title:"Order Your Favorite Dishes Online!", desc:"Enjoy a seamless food ordering experience with fast delivery from your favorite local restaurants.",                              cta:"Signup now",     link:"register.html",         img:"assets/img/join-customer.jpg"   },
    { title:"Join as a delivery person!",         desc:"Start earning extra income by delivering to homes. Enjoy top rates and great benefits as part of our team.",                     cta:"Register now!",  link:"delivery-signup.html",  img:"assets/img/join-delivery.jpg"   }
  ],

  app: {
    left_label:  "Best restaurants",
    left_title:  "In your pocket",
    left_desc:   "Order from your favorite restaurants & track on the go, with the all-new K app.",
    right_label: "Download",
    right_title: "K mobile app",
    phone_img:   "assets/img/mobile-app.png",
    appstore_img:"assets/img/app-store.png",
    playstore_img:"assets/img/google-play.png",
    appstore_link:"#",
    playstore_link:"#"
  },

  merchant: {
    title:    "Become Restaurant partner",
    subtitle: "Get a sales boost of up to 30% from takeaways",
    hero_img: "assets/img/merchant-hero.png",
    benefits: [
      { icon:"assets/img/icons/increase-sales.png", emoji:"📈", title:"Increase sales",       subtitle:"Keep the kitchen busy",        desc:"Join a well-oiled marketing machine and watch the orders come in through your door and online." },
      { icon:"assets/img/icons/more-customers.png",  emoji:"👥", title:"Reach more customers", subtitle:"Meet them and keep them",       desc:"Attract new local customers and keep them coming back for more." },
      { icon:"assets/img/icons/services.png",        emoji:"🛠️", title:"Use our services",     subtitle:"For businesses big and small",  desc:"Whatever your size we have tools, business support and savings to help grow your business." }
    ],
    cta_label: "Overtake competitors",
    cta_title: "Become a Multi Restaurant partner today.",
    cta_img:   "assets/img/merchant-cta-bg.jpg"
  },

  delivery: {
    title:    "Become our delivery partner",
    subtitle: "Get paid to deliver"
  },

  about: {
    title:         "About Us",
    hero_desc:     "We connect hungry people with the best local restaurants. Fast, fresh, and always on time.",
    mission_title: "Our Mission",
    mission_text:  "Bhuk.in was founded with a simple belief: everyone deserves access to great food without the hassle. We partner with the best local restaurants to bring you a seamless ordering experience — from your first scroll to the final bite.",
    vision_title:  "Our Vision",
    vision_text:   "To be the most loved food delivery platform in every city we operate — known for reliability, variety, and support for local food businesses.",
    stats: [
      { value:"500+", label:"Restaurant Partners" },
      { value:"50K+", label:"Happy Customers" },
      { value:"12",   label:"Cities Covered" },
      { value:"4.8★", label:"Average Rating" }
    ],
    team: [
      { name:"Arjun Sharma",  role:"Founder & CEO",         avatar:"assets/img/team/team-01.jpg" },
      { name:"Priya Mehta",   role:"Head of Operations",     avatar:"assets/img/team/team-02.jpg" },
      { name:"Rohan Gupta",   role:"Lead Developer",         avatar:"assets/img/team/team-03.jpg" },
      { name:"Sneha Patel",   role:"Marketing Director",     avatar:"assets/img/team/team-04.jpg" }
    ],
    values: [
      { icon:"🚀", title:"Speed",     desc:"We know you're hungry. Our delivery partners are trained for fast, safe deliveries." },
      { icon:"🌿", title:"Freshness", desc:"We only partner with restaurants that maintain the highest food quality standards." },
      { icon:"🤝", title:"Community", desc:"We champion local restaurants and help them thrive in the digital economy." },
      { icon:"🛡️", title:"Safety",   desc:"Contactless delivery, verified drivers, and secure payments — your safety is our priority." }
    ]
  },

  contact: {
    title:    "Contact Us",
    subtitle: "We'd love to hear from you",
    email:    "support@bhuk.in",
    phone:    "+91 98765 43210",
    address:  "12 Food Street, Mumbai, Maharashtra, India 400001",
    hours:    "Mon–Sun: 9 AM – 11 PM"
  },

  privacy: {
    title: "Privacy Policy",
    intro: "Welcome to Bhuk.in (\"Karenderia\"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our mobile application.",
    sections: [
      { heading:"1. Information We Collect",   content:"We collect information you provide directly to us:", items:["Name, email address, phone number and delivery address when you register","Payment information processed securely through third-party payment processors","Order history, preferences, and delivery instructions","Device information, IP address, and usage data"] },
      { heading:"2. How We Use Your Information", content:"We use the information we collect to:", items:["Process and fulfil your food orders and deliveries","Send order confirmations and delivery updates","Improve our platform and personalise your experience","Communicate promotional offers (you can opt out at any time)","Comply with legal obligations"] },
      { heading:"3. Sharing Your Information",  content:"We may share your information with:", items:["Restaurant partners to fulfil your orders","Delivery partners to complete delivery to your address","Payment processors to handle transactions securely","Analytics providers to help us understand platform usage"] },
      { heading:"4. Data Security",             content:"We implement industry-standard security measures including SSL encryption, secure servers, and regular security audits. No transmission over the internet is 100% secure." },
      { heading:"5. Your Rights",               content:"You have the right to:", items:["Access and receive a copy of your personal data","Correct inaccurate data or request deletion","Opt out of marketing communications at any time"] },
      { heading:"6. Contact Us",                content:"If you have questions about this Privacy Policy, please contact us at support@bhuk.in." }
    ]
  },

  terms: {
    title: "Terms and Conditions",
    intro: "Welcome to Bhuk.in. By accessing or using our website, mobile application, or services, you agree to be bound by these Terms and Conditions. Please read them carefully before placing an order.",
    sections: [
      { heading:"1. Acceptance of Terms",       content:"By creating an account or placing an order on Bhuk.in, you confirm that you are at least 18 years old and accept these terms in full." },
      { heading:"2. Ordering & Payment",        content:"All orders are subject to availability and confirmation.", items:["Prices displayed include applicable taxes unless otherwise stated","Payment must be made at the time of ordering","Orders are confirmed only once payment is successfully processed","We reserve the right to cancel orders due to unavailability"] },
      { heading:"3. Delivery",                  content:"Delivery times are estimates only and may vary due to:", items:["High order volume during peak hours","Weather conditions or traffic","Distance from restaurant to delivery address","Restaurant preparation times"] },
      { heading:"4. Refunds & Cancellations",   content:"You may cancel an order within 2 minutes of placing it. Refunds for valid complaints will be processed within 3–5 business days." },
      { heading:"5. User Conduct",              content:"You agree not to:", items:["Provide false information when registering or ordering","Use the platform for fraudulent transactions","Post offensive or defamatory reviews","Attempt to hack or misuse the platform in any way"] },
      { heading:"6. Governing Law",             content:"These Terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Mumbai." }
    ]
  },

  footer: {
    company_links:  [
      { label:"Test with video",      href:"#" },
      { label:"Privacy policy",       href:"privacy.html" },
      { label:"Terms and conditions", href:"terms.html" },
      { label:"About Us",             href:"about.html" }
    ],
    service_links:  [
      { label:"Find a store",  href:"restaurants.html" },
      { label:"Services",      href:"about.html#services" },
      { label:"Contact Us",    href:"contact.html" }
    ],
    category_links: [
      { label:"Grocery",         href:"restaurants.html?cuisine=grocery" },
      { label:"Parcel Delivery", href:"delivery-signup.html" },
      { label:"Fast Food",       href:"restaurants.html?cuisine=burgers" }
    ],
    appstore_link:  "#",
    playstore_link: "#",
    appstore_img:   "assets/img/app-store.png",
    playstore_img:  "assets/img/google-play.png"
  },

  country_codes: [
    { code:"+91",  flag:"🇮🇳", name:"India"     },
    { code:"+1",   flag:"🇺🇸", name:"USA"       },
    { code:"+44",  flag:"🇬🇧", name:"UK"        },
    { code:"+61",  flag:"🇦🇺", name:"Australia" },
    { code:"+971", flag:"🇦🇪", name:"UAE"       }
  ]
};
