// Mock data for Indian restaurants
export const restaurants = [
  {
    id: 1,
    name: "Spice Garden",
    cuisine: "North Indian",
    location: "Mumbai, Maharashtra",
    rating: 4.5,
    priceRange: "",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Authentic North Indian cuisine with traditional flavors and modern presentation. Known for our tandoor specialties and rich curries.",
    phone: "+91 98765 43210",
    address: "123 MG Road, Bandra West, Mumbai - 400050",
    hours: "11:00 AM - 11:00 PM",
    menu: {
      appetizers: [
        { name: "Samosa (2 pcs)", price: 120, description: "Crispy pastry filled with spiced potatoes and peas", vegetarian: true },
        { name: "Chicken Tikka", price: 350, description: "Tender chicken pieces marinated in yogurt and spices", vegetarian: false },
        { name: "Paneer Tikka", price: 280, description: "Cottage cheese cubes grilled with bell peppers and onions", vegetarian: true },
        { name: "Aloo Chaat", price: 150, description: "Spiced potato chunks with chutneys and yogurt", vegetarian: true }
      ],
      mains: [
        { name: "Butter Chicken", price: 420, description: "Creamy tomato-based curry with tender chicken pieces", vegetarian: false },
        { name: "Paneer Makhani", price: 380, description: "Rich and creamy cottage cheese curry", vegetarian: true },
        { name: "Dal Makhani", price: 320, description: "Slow-cooked black lentils in creamy tomato gravy", vegetarian: true },
        { name: "Biryani (Chicken)", price: 450, description: "Fragrant basmati rice with spiced chicken", vegetarian: false },
        { name: "Biryani (Vegetable)", price: 380, description: "Aromatic rice with mixed vegetables and saffron", vegetarian: true },
        { name: "Rogan Josh", price: 480, description: "Traditional Kashmiri lamb curry with aromatic spices", vegetarian: false }
      ],
      breads: [
        { name: "Naan", price: 80, description: "Soft leavened bread baked in tandoor", vegetarian: true },
        { name: "Garlic Naan", price: 100, description: "Naan topped with fresh garlic and herbs", vegetarian: true },
        { name: "Roti", price: 60, description: "Whole wheat flatbread", vegetarian: true },
        { name: "Kulcha", price: 90, description: "Stuffed bread with onions or potatoes", vegetarian: true }
      ],
      desserts: [
        { name: "Gulab Jamun", price: 120, description: "Sweet milk dumplings in sugar syrup", vegetarian: true },
        { name: "Ras Malai", price: 150, description: "Soft cheese dumplings in sweetened milk", vegetarian: true },
        { name: "Kulfi", price: 100, description: "Traditional Indian ice cream", vegetarian: true }
      ]
    },
    tableTypes: [
      { type: "2-seater", price: 0, description: "Perfect for couples" },
      { type: "4-seater", price: 100, description: "Ideal for small families" },
      { type: "6-seater", price: 200, description: "Great for family gatherings" },
      { type: "Private Booth", price: 500, description: "Exclusive private dining experience" }
    ]
  },
  {
    id: 2,
    name: "South Spice Express",
    cuisine: "South Indian",
    location: "Bangalore, Karnataka",
    rating: 4.3,
    priceRange: "",
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Traditional South Indian delicacies with authentic flavors. Famous for dosas, idlis, and filter coffee.",
    phone: "+91 98765 43211",
    address: "456 Brigade Road, Bangalore - 560001",
    hours: "7:00 AM - 10:00 PM",
    menu: {
      breakfast: [
        { name: "Masala Dosa", price: 150, description: "Crispy crepe with spiced potato filling", vegetarian: true },
        { name: "Idli Sambar (4 pcs)", price: 120, description: "Steamed rice cakes with lentil curry", vegetarian: true },
        { name: "Vada Sambar (3 pcs)", price: 140, description: "Fried lentil donuts with sambar", vegetarian: true },
        { name: "Upma", price: 100, description: "Semolina porridge with vegetables", vegetarian: true },
        { name: "Pongal", price: 130, description: "Rice and lentil porridge with black pepper", vegetarian: true }
      ],
      mains: [
        { name: "Chettinad Chicken", price: 380, description: "Spicy chicken curry from Tamil Nadu", vegetarian: false },
        { name: "Fish Curry", price: 420, description: "Coconut-based fish curry with curry leaves", vegetarian: false },
        { name: "Sambar Rice", price: 180, description: "Rice served with lentil curry and vegetables", vegetarian: true },
        { name: "Rasam Rice", price: 160, description: "Tangy tomato-based soup with rice", vegetarian: true },
        { name: "Bisi Bele Bath", price: 200, description: "Karnataka special rice dish with lentils and vegetables", vegetarian: true }
      ],
      snacks: [
        { name: "Medu Vada", price: 80, description: "Crispy lentil donuts", vegetarian: true },
        { name: "Bhajji", price: 120, description: "Mixed vegetable fritters", vegetarian: true },
        { name: "Mysore Pak", price: 100, description: "Traditional sweet made with gram flour", vegetarian: true }
      ],
      beverages: [
        { name: "Filter Coffee", price: 60, description: "Traditional South Indian coffee", vegetarian: true },
        { name: "Buttermilk", price: 50, description: "Spiced yogurt drink", vegetarian: true },
        { name: "Fresh Lime Soda", price: 70, description: "Refreshing lime drink", vegetarian: true }
      ]
    },
    tableTypes: [
      { type: "2-seater", price: 0, description: "Perfect for breakfast dates" },
      { type: "4-seater", price: 50, description: "Family dining" },
      { type: "6-seater", price: 100, description: "Group meals" },
      { type: "Traditional Floor Seating", price: 150, description: "Authentic dining experience" }
    ]
  },
  {
    id: 3,
    name: "Royal Rajasthani",
    cuisine: "Rajasthani",
    location: "Jaipur, Rajasthan",
    rating: 4.7,
    priceRange: "",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Experience royal Rajasthani cuisine in a palace-like setting. Traditional thali and royal delicacies.",
    phone: "+91 98765 43212",
    address: "789 Palace Road, Pink City, Jaipur - 302001",
    hours: "12:00 PM - 11:00 PM",
    menu: {
      thalis: [
        { name: "Royal Rajasthani Thali", price: 650, description: "Complete meal with dal, vegetables, bread, rice, and sweets", vegetarian: true },
        { name: "Maharaja Non-Veg Thali", price: 850, description: "Royal feast with meat curries, vegetables, and bread", vegetarian: false },
        { name: "Mini Thali", price: 450, description: "Smaller portion of traditional thali", vegetarian: true }
      ],
      specialties: [
        { name: "Laal Maas", price: 550, description: "Fiery red meat curry - Rajasthani specialty", vegetarian: false },
        { name: "Gatte ki Sabzi", price: 320, description: "Gram flour dumplings in spicy curry", vegetarian: true },
        { name: "Ker Sangri", price: 280, description: "Desert beans and berries curry", vegetarian: true },
        { name: "Mohan Maas", price: 580, description: "Sweet and savory meat curry", vegetarian: false }
      ],
      breads: [
        { name: "Bajra Roti", price: 70, description: "Millet flour flatbread", vegetarian: true },
        { name: "Makki ki Roti", price: 80, description: "Corn flour flatbread", vegetarian: true },
        { name: "Kachori", price: 120, description: "Fried bread stuffed with lentils", vegetarian: true }
      ],
      sweets: [
        { name: "Ghevar", price: 180, description: "Traditional Rajasthani sweet", vegetarian: true },
        { name: "Malpua", price: 150, description: "Sweet pancakes in sugar syrup", vegetarian: true },
        { name: "Rabri", price: 140, description: "Thickened sweetened milk", vegetarian: true }
      ]
    },
    tableTypes: [
      { type: "2-seater", price: 200, description: "Romantic royal dining" },
      { type: "4-seater", price: 300, description: "Family royal experience" },
      { type: "6-seater", price: 500, description: "Group royal feast" },
      { type: "Royal Suite", price: 1500, description: "Private palace dining with live music" }
    ]
  },
  {
    id: 4,
    name: "Bengali Bhoj",
    cuisine: "Bengali",
    location: "Kolkata, West Bengal",
    rating: 4.4,
    priceRange: "",
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Authentic Bengali cuisine with fresh fish, aromatic rice, and traditional sweets. A taste of Bengal's rich culinary heritage.",
    phone: "+91 98765 43213",
    address: "321 Park Street, Kolkata - 700016",
    hours: "11:00 AM - 10:30 PM",
    menu: {
      fish: [
        { name: "Hilsa Fish Curry", price: 450, description: "Bengali delicacy with mustard sauce", vegetarian: false },
        { name: "Fish Fry", price: 320, description: "Crispy fried fish with Bengali spices", vegetarian: false },
        { name: "Chingri Malai Curry", price: 520, description: "Prawns in coconut milk curry", vegetarian: false },
        { name: "Machher Jhol", price: 380, description: "Light fish curry with potatoes", vegetarian: false }
      ],
      vegetarian: [
        { name: "Aloo Posto", price: 250, description: "Potatoes cooked with poppy seeds", vegetarian: true },
        { name: "Shukto", price: 280, description: "Mixed vegetable curry with bitter gourd", vegetarian: true },
        { name: "Dal", price: 180, description: "Bengali style lentil curry", vegetarian: true },
        { name: "Begun Bhaja", price: 150, description: "Crispy fried eggplant slices", vegetarian: true }
      ],
      rice: [
        { name: "Steamed Rice", price: 80, description: "Perfectly steamed basmati rice", vegetarian: true },
        { name: "Pulao", price: 220, description: "Fragrant rice with whole spices", vegetarian: true },
        { name: "Khichuri", price: 180, description: "Rice and lentil comfort food", vegetarian: true }
      ],
      sweets: [
        { name: "Rasgulla (4 pcs)", price: 120, description: "Soft cottage cheese balls in syrup", vegetarian: true },
        { name: "Sandesh", price: 100, description: "Fresh cottage cheese sweet", vegetarian: true },
        { name: "Mishti Doi", price: 80, description: "Sweet yogurt", vegetarian: true },
        { name: "Kaju Katli", price: 160, description: "Cashew fudge", vegetarian: true }
      ]
    },
    tableTypes: [
      { type: "2-seater", price: 0, description: "Cozy Bengali dining" },
      { type: "4-seater", price: 100, description: "Family style dining" },
      { type: "6-seater", price: 200, description: "Traditional large family meals" },
      { type: "Heritage Corner", price: 400, description: "Special seating with Bengali cultural ambiance" }
    ]
  },
  {
    id: 5,
    name: "Punjabi Dhaba Express",
    cuisine: "Punjabi",
    location: "Delhi, NCR",
    rating: 4.2,
    priceRange: "",
    image: "https://images.unsplash.com/photo-1628294895950-9805252327bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Hearty Punjabi food served dhaba style. Known for butter chicken, sarson da saag, and fresh kulchas.",
    phone: "+91 98765 43214",
    address: "567 CP Connaught Place, New Delhi - 110001",
    hours: "10:00 AM - 12:00 AM",
    menu: {
      mains: [
        { name: "Sarson da Saag", price: 280, description: "Mustard greens curry with makki di roti", vegetarian: true },
        { name: "Rajma", price: 250, description: "Kidney beans curry with rice", vegetarian: true },
        { name: "Chole", price: 220, description: "Spiced chickpea curry", vegetarian: true },
        { name: "Chicken Curry", price: 350, description: "Traditional Punjabi chicken curry", vegetarian: false },
        { name: "Mutton Curry", price: 450, description: "Tender mutton in rich gravy", vegetarian: false },
        { name: "Palak Paneer", price: 280, description: "Cottage cheese in spinach gravy", vegetarian: true }
      ],
      tandoor: [
        { name: "Tandoori Chicken", price: 380, description: "Half chicken marinated and grilled", vegetarian: false },
        { name: "Seekh Kebab", price: 320, description: "Minced meat skewers", vegetarian: false },
        { name: "Paneer Tikka", price: 280, description: "Grilled cottage cheese cubes", vegetarian: true },
        { name: "Tandoori Roti", price: 50, description: "Bread baked in clay oven", vegetarian: true }
      ],
      breads: [
        { name: "Butter Naan", price: 90, description: "Soft bread with butter", vegetarian: true },
        { name: "Kulcha", price: 100, description: "Stuffed bread with onions or potatoes", vegetarian: true },
        { name: "Paratha", price: 80, description: "Layered flatbread", vegetarian: true },
        { name: "Makki di Roti", price: 70, description: "Corn flour flatbread", vegetarian: true }
      ],
      beverages: [
        { name: "Lassi", price: 80, description: "Sweet or salty yogurt drink", vegetarian: true },
        { name: "Masala Chai", price: 40, description: "Spiced Indian tea", vegetarian: true },
        { name: "Fresh Lime Water", price: 60, description: "Refreshing lime drink", vegetarian: true }
      ]
    },
    tableTypes: [
      { type: "2-seater", price: 0, description: "Quick dhaba style dining" },
      { type: "4-seater", price: 50, description: "Family dhaba experience" },
      { type: "6-seater", price: 100, description: "Group dining" },
      { type: "Outdoor Charpoy", price: 200, description: "Traditional rope bed dining under stars" }
    ]
  }
];

export default restaurants;