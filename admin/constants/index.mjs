const cat = {
  tvAndAudio: "tvAndAudio",
  tvBox: "tvBox",
  powerTools: "powerTools",
  headphones: "headphones",
  cellPhones: "cellPhones",
  smartWatches: "smartWatches",
  gameAndVideo: "gameAndVideo",
  robotClean: "robotClean",
  sportWatches: "sportWatches",
  tablets: "tablets",
  computersAndLaptop: "computersAndLaptop",
  camerasAndPhotos: "camerasAndPhotos",
};
export const categories = [
  {
    _id: 1001,
    name: "TV & Audio",
    image: "https://static.vecteezy.com/system/resources/previews/050/756/176/large_2x/modern-tv-with-speakers-and-soundbar-setup-free-png.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore.",
    _base: "tvAndAudio",
  },
  {
    _id: 1002,
    name: "TV Box",
    image: "https://png.pngtree.com/png-clipart/20250218/original/pngtree-android-smart-tv-box-png-image_20459582.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore.",
    _base: "tvBox",
  },
  {
    _id: 1003,
    name: "Power Tools",
    image: "https://static.vecteezy.com/system/resources/previews/052/243/885/non_2x/electric-drill-isolated-on-transparent-background-png.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore.",
    _base: "powerTools",
  },
  {
    _id: 1004,
    name: "Headphones",
    image: "https://static.vecteezy.com/system/resources/previews/024/558/883/non_2x/black-wireless-headphones-isolated-on-transparent-background-ai-generated-png.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore.",
    _base: "headphones",
  },
  {
    _id: 1005,
    name: "Cell Phones",
    image: "https://static.vecteezy.com/system/resources/previews/054/679/668/non_2x/abstract-colorful-smartphone-screen-free-png.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore.",
    _base: "cellPhones",
  },
  {
    _id: 1006,
    name: "Smart Watches",
    image: "https://static.vecteezy.com/system/resources/previews/055/181/798/large_2x/apple-watch-silver-band-smartwatch-display-apps-time-free-png.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore.",
    _base: "smartWatches",
  },
  {
    _id: 1007,
    name: "Game & Video",
    image: "https://static.vecteezy.com/system/resources/previews/013/007/612/large_2x/set-of-console-game-device-handheld-portable-free-png.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore.",
    _base: "gameAndVideo",
  },
  {
    _id: 1008,
    name: "Robot Clean",
    image: "https://static.vecteezy.com/system/resources/previews/056/706/441/large_2x/luxury-business-traveler-with-luggage-working-on-laptop-airport-lounge-digital-art-modern-environment-close-up-perspective-free-png.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore.",
    _base: "robotClean",
  },
  {
    _id: 1009,
    name: "Sport Watches",
    image: "https://static.vecteezy.com/system/resources/previews/021/478/893/large_2x/watch-isolated-on-transparent-free-png.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore.",
    _base: "sportWatches",
  },
  {
    _id: 1010,
    name: "Tablets",
    image: "https://static.vecteezy.com/system/resources/previews/054/589/947/large_2x/colorful-medication-tablet-on-transparent-surface-free-png.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore.",
    _base: "tablets",
  },
  {
    _id: 1011,
    name: "Computers & Laptop",
    image: "https://static.vecteezy.com/system/resources/previews/047/824/500/large_2x/high-quality-realistic-beautiful-computer-monitor-image-free-png.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore.",
    _base: "computersAndLaptop",
  },
  {
    _id: 1012,
    name: "Cameras & Photos",
    image: "https://static.vecteezy.com/system/resources/previews/036/746/240/large_2x/ai-generated-3d-camera-isolated-on-transparent-background-free-png.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore.",
    _base: "camerasAndPhotos",
  },
];

export const highlightsProducts = [
  {
    _id: 3001,
    name: "New Deals at Best Prices",
    title: "From $40.00",
    buttonTitle: "Browse Deals",
    image: "https://thegadgetflow.com/wp-content/uploads/2025/02/Best-closed-back-headphones-001-1024x614.jpg",
    _base: "/product",
    color: "#ffffff",
  },
  {
    _id: 3002,
    name: "Xiaomi 15 Ultra",
    title: "From $40.00",
    buttonTitle: "Shop Cellphone",
    image: "https://i02.appmifile.com/mi-com-product/fly-birds/xiaomi-15-ultra/pc/8d37a7f2e7af06521ae6b5f32924d141.jpg?f=webp",
    _base: "/category/cellPhones",
    color: "#ffffff",
  },
  {
    _id: 3003,
    name: "1000 mAh Power Bank",
    title: "From $40.00",
    buttonTitle: "Shop Now",
    image: "https://www.gizmochina.com/wp-content/uploads/2024/12/Xiaomi-33W-20000mAh-Power-Bank-Integrated-Cable-in-hand-1536x876.webp",
    _base: "/product",
    color: "#000000",
  },
];

export const blogsData = [
  {
    _id: 4001,
    image: "https://m-cdn.phonearena.com/images/reviews/253266-image/AA0-8576.webp",
    title: "iPhone 15 rear camera design will be available",
    _base: "Technology",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi vitae minus atque ratione. Sequi eos aspernatur delectus officia nemo ipsum facere debitis fugiat eum, quod quia, eligendi nihil sapiente perferendis modi quisquam reiciendis minima esse dolorem, molestias aut? Eum, repudiandae sit ipsum officiis unde reprehenderit inventore odio doloremque recusandae nobis voluptatem ipsa atque, veritatis adipisci reiciendis.",
  },
  {
    _id: 4002,
    image: "https://sony.scene7.com/is/image/sonyglobalsolutions/TVFY24_AE_Layout_2acc-image-m?$originalDimensions$&fmt=png-alpha",
    title: "Setup your surround sound speaker",
    _base: "Samrt thing",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi vitae minus atque ratione. Sequi eos aspernatur delectus officia nemo ipsum facere debitis fugiat eum, quod quia, eligendi nihil sapiente perferendis modi quisquam reiciendis minima esse dolorem, molestias aut? Eum, repudiandae sit ipsum officiis unde reprehenderit inventore odio doloremque recusandae nobis voluptatem ipsa atque, veritatis adipisci reiciendis.",
  },
  {
    _id: 4003,
    image: "https://modulepeak.com/wp-content/uploads/2022/02/blog_geart_02-870x563.jpg",
    title: "Hook up a receiver for your home theater",
    _base: "Life style",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi vitae minus atque ratione. Sequi eos aspernatur delectus officia nemo ipsum facere debitis fugiat eum, quod quia, eligendi nihil sapiente perferendis modi quisquam reiciendis minima esse dolorem, molestias aut? Eum, repudiandae sit ipsum officiis unde reprehenderit inventore odio doloremque recusandae nobis voluptatem ipsa atque, veritatis adipisci reiciendis.",
  },
];

export const products = [
  {
    _id: 2001,
    name: "Divoom Tivoo Portable Bluetooth Speaker Smart Clock Alarm Pixel Art DIY By App LED Light Sign In Decoration Unique Gift",
    images: [
      "https://www.divoom-gz.com/Uploads/Picture/2018-03-14/5aa8977931512.png",
      "https://www.divoom-gz.com/Uploads/Picture/2018-03-14/5aa8d90918d27.png",
      "https://www.divoom-gz.com/Uploads/Picture/2018-03-14/5aa8d9a91522d.png",
      "https://www.divoom-gz.com/Uploads/Picture/2018-03-14/5aa8da33b2aaf.png",
      "https://www.divoom-gz.com/Uploads/Picture/2018-03-14/5aa8da8c93cc5.png",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    regularPrice: 600,
    discountedPrice: 580,
    quantity: 1,
    rating: 4.5,
    reviews: 50,
    category: "TV & Audio",
    colors: ["white", "black", "red", "blue", "pink", "green"],
    brand: "Samsung",
    isStock: true,
    overView: "Blutooth Speaker",
    isNew: true,
    _base: cat?.tvAndAudio,
  },
  {
    _id: 2002,
    name: "Xiaomi Mi Watch Lite GPS Bluetooth 5.1 Smart Watch Sports Fitness Heart Rate Monitor 1.4 Inch TFTLCD Screen 5 ATM Waterproof Mi Band",
    images: [
      "https://gamextreme.ph/cdn/shop/products/Xiaomi-Mi-Watch-Lite-BLK2_medium.png?v=1634266032",
      "https://gamextreme.ph/cdn/shop/products/Xiaomi-Mi-Watch-Lite-Ivory-2_medium.png?v=1634266032",
      "https://gamextreme.ph/cdn/shop/products/Xiaomi-Mi-Watch-Lite-B2_medium.png?v=1634266033",
      "https://gamextreme.ph/cdn/shop/products/Xiaomi-Mi-Watch-Lite-B2_medium.png?v=1634266033",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    regularPrice: 250,
    discountedPrice: 180,
    quantity: 1,
    rating: 4.8,
    reviews: 80,
    category: "Smart Watches",
    colors: ["black", "ivory", "navy-blue", "grayish-blue"],
    brand: "Samsung",
    isStock: true,
    overView: "Smart health watch",
    isNew: false,
    _base: cat?.smartWatches,
  },
  {
    _id: 2003,
    name: "Fitness M3 Color Screen Smart Sport Bracelet Activity Running Tracker Heart Rate For Children Men Women Watch For IOS Android",
    images: [
      "https://gamextreme.ph/cdn/shop/products/Xioami-Mi-Smart-Band-6-1_1024x1024.png?v=1634272849",
      "https://gamextreme.ph/cdn/shop/products/Xioami-Mi-Smart-Band-6-3.png?v=1634272844",
      "https://gamextreme.ph/cdn/shop/products/Xioami-Mi-Smart-Band-6-5_1024x1024.png?v=1634272845",
      "https://gamextreme.ph/cdn/shop/products/Xioami-Mi-Smart-Band-6-6.png?v=1634272844",
      "https://gamextreme.ph/cdn/shop/products/Xioami-Mi-Smart-Band-6-7.png?v=1634272845",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    regularPrice: 650,
    discountedPrice: 570,
    quantity: 1,
    rating: 4.2,
    reviews: 30,
    category: "Sport Watches",
    colors: ["black", "yellow ", "ivory", "orange", "blue"],
    brand: "MI Exclusive",
    isStock: true,
    overView: "Smart health watch",
    isNew: true,
    _base: cat?.sportWatches,
  },
  {
    _id: 2004,
    name: "SJ8 Air 1290P 4K 60fps Action Camera WIFI Remote Control Waterproof Sports DV FPV Camera",
    images: [
      "https://static.sjcam.com/shop/uploads/2022/11/SJ8-AIR-BLACK-06-600x600.png",
      "https://static.sjcam.com/shop/uploads/2022/11/SJ8-AIR-Khaki-04-600x600.png",
      "https://shoplineimg.com/5edf0c874547ab001876b26d/5eea04433760ed002a0ba51e/800x.webp?source_format=jpg",
      "https://shoplineimg.com/5edf0c874547ab001876b26d/5eea0443bd6691002b79232e/800x.webp?source_format=jpg"
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    regularPrice: 400,
    discountedPrice: 350,
    quantity: 1,
    rating: 4.2,
    reviews: 120,
    category: "Camera & Photos",
    colors: ["black", "khaki", "white", "pink"],
    brand: "Lorem ipsum dolor sit",
    isStock: false,
    overView: "Cameras & Photos",
    isNew: false,
    _base: cat?.camerasAndPhotos,
  },
  {
    _id: 2005,
    name: "Redmi Xiaoai Speaker Play 2.4GHz 1.75 Inch Voice Remote Control Music Player Bluetooth 4.2 Mi Speaker For Android Iphone",
    images: [
      "https://ae-pic-a1.aliexpress-media.com/kf/S40dacc2166d944d8be4525e745fb40f3d.jpg_960x960q75.jpg_.avif",
      "https://ae-pic-a1.aliexpress-media.com/kf/Sfcb673326650447183273ffd501185667.jpg_960x960q75.jpg_.avif",
      "https://media.karousell.com/media/photos/products/2020/10/6/xiaomi_redmi_xiaoai_speaker_pl_1601992270_c1bdbffa_progressive.jpg"
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    regularPrice: 90,
    discountedPrice: 80,
    quantity: 1,
    rating: 4.2,
    reviews: 20,
    category: "TV & Audio",
    colors: ["white", "blue", "green"],
    brand: "Lorem ipsum dolor sit",
    isStock: true,
    overView: "Blutooth Speaker",
    isNew: true,
    _base: cat?.tvAndAudio,
  },
  {
    _id: 2006,
    name: "Xiaomi Mi Watch Lite GPS Bluetooth 5.1 Smart Watch Sports Fitness Heart Rate Monitor 1.4 Inch TFTLCD Screen 5 ATM Waterproof Mi Band",
    images: [
      "https://gamextreme.ph/cdn/shop/products/Xiaomi-Mi-Watch-Lite-B2_medium.png?v=1634266033",
      "https://gamextreme.ph/cdn/shop/products/Xiaomi-Mi-Watch-Lite-BLK2_medium.png?v=1634266032",
      "https://gamextreme.ph/cdn/shop/products/Xiaomi-Mi-Watch-Lite-Ivory-2_medium.png?v=1634266032",
      "https://gamextreme.ph/cdn/shop/products/Xiaomi-Mi-Watch-Lite-B2_medium.png?v=1634266033",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    regularPrice: 250,
    discountedPrice: 180,
    quantity: 1,
    rating: 4.8,
    reviews: 80,
    category: "Smart Watches",
    colors: ["navy-blue", "black", "ivory", "grayish-blue"],
    brand: "Samsung",
    isStock: true,
    overView: "Smart health watch",
    isNew: false,
    _base: cat?.smartWatches,
  },
  {
    _id: 2007,
    name: "Kinganda BT513 Foldable Bluetooth Headphones With Mic",
    images: [
      "https://chinesco.com/wp-content/uploads/2022/02/product_gear_19_6-600x600.jpg",
      "https://chinesco.com/wp-content/uploads/2022/02/product_gear_19_2-600x600.jpg",
      "https://chinesco.com/wp-content/uploads/2022/02/product_gear_19_5-600x600.jpg"
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    regularPrice: 600,
    discountedPrice: 550,
    quantity: 1,
    rating: 4,
    reviews: 60,
    category: "Headphones & Speakers",
    colors: ["black", "orange", "white"],
    brand: "Lorem ipsum dolor sit",
    isStock: true,
    overView: "Microphones",
    isNew: true,
    _base: cat.headphones,
  },
  {
    _id: 2008,
    name: "New Product Form Lapbook Light Handlift Business Office Game Ben EDP 13.5 In – Black China",
    images: [
      "https://woo.cleverpay.store/wp-content/uploads/2022/02/product_supergear_04_1-600x600.jpg",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    regularPrice: 1100,
    discountedPrice: 1080,
    quantity: 1,
    rating: 4.7,
    reviews: 190,
    category: "Computers & Laptops",
    colors: ["black"],
    brand: "Lorem ipsum dolor sit",
    isStock: true,
    overView: "Computer Components",
    isNew: false,
    _base: cat?.computersAndLaptop,
  },
  {
    _id: 2009,
    name: "VIOMI V2 Pro LDS Sensor 2 In 1 Sweeping Mopping Robot Wet And Dry Vacuum Cleaner 2100Pa Strong Suction Self-Charging",
    images: [
      "https://chinesco.com/wp-content/uploads/2022/02/product_gear_26_3.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2022/2/WJ/JC/DS/106607141/viomi-robot-vacuum-v2-max-1000x1000.png",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    regularPrice: 450,
    discountedPrice: 380,
    quantity: 1,
    rating: 4.2,
    reviews: 70,
    category: "Robot Clean",
    colors: ["silver", "black"],
    brand: "Lorem ipsum dolor sit",
    isStock: true,
    overView: "Robot Clean",
    isNew: true,
    _base: cat?.robotClean,
  },
  {
    _id: 2010,
    name: "Global Version Redmi Note 9 Pro 6GB RAM 64GB ROM Smartphone Mobile Phone",
    images: [
      "https://www.compex.com.ph/cdn/shop/products/XiaomiRedmiNote9ProTropicalGreen_540x.jpg?v=1597307942",
      "https://www.compex.com.ph/cdn/shop/products/XiaomiRedmiNote9ProInterstellarGrey_540x.jpg?v=1597307942",
      "https://www.compex.com.ph/cdn/shop/products/XiaomiRedmiNote9ProGlacierWhite_540x.jpg?v=1597307942",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    regularPrice: 305,
    discountedPrice: 285,
    quantity: 1,
    rating: 4.1,
    reviews: 160,
    category: "Cell Phones",
    colors: ["green", "black", "white"],
    brand: "Lorem ipsum dolor sit",
    isStock: true,
    overView: "Cual Sim Phones",
    isNew: true,
    _base: cat?.cellPhones,
  },
  {
    _id: 2011,
    name: "DIDSeth Pan Tilt Security Light Camera Full HD 1080P Wireless Wi-Fi IP Camera Home Dome Surveillance Cameras",
    images: [
      "https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_27_1-600x600.jpg",
      "https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_27_2-600x600.jpg",
      "https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_gear_27_3-600x600.jpg",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    regularPrice: 350,
    discountedPrice: 280,
    quantity: 1,
    rating: 3.8,
    reviews: 250,
    category: "Cameras & Photos",
    colors: ["white"],
    brand: "Lorem ipsum dolor sit",
    isStock: true,
    overView: "Security & Protection",
    isNew: true,
    _base: cat?.camerasAndPhotos,
  },
  {
    _id: 2012,
    name: "Electric Hot Melt Glue Gun Cordless Repair DIY Tool Heating Mini Glue Gun With Glue Sticks",
    images: [
      "https://digitlands.co/cdn/shop/products/01-5-cib_900x.jpg?v=1638023137",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    regularPrice: 150,
    discountedPrice: 80,
    quantity: 1,
    rating: 4.7,
    reviews: 90,
    category: "Power Tools",
    colors: ["white"],
    brand: "Lorem ipsum dolor sit",
    isStock: true,
    overView: "Power Tools",
    isNew: true,
    _base: cat?.powerTools,
  },
  {
    _id: 2013,
    name: "MECOOL KH3 Android 10.0 Smart 4K 60fps TV Box – Black 2GB RAM + 16GB ROM",
    images: [
      "https://s.alicdn.com/@sc04/kf/H0cae2a96fe984a8b97ef8e9e718fec814.jpg_720x720q50.jpg",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    regularPrice: 210,
    discountedPrice: 200,
    quantity: 1,
    rating: 3.9,
    reviews: 100,
    category: "TV Box",
    colors: ["black"],
    brand: "Lorem ipsum dolor sit",
    isStock: true,
    overView: "TV Box",
    isNew: true,
    _base: cat?.tvBox,
  },
  {
    _id: 2014,
    name: "Sony PS4 Controller Bluetooth Vibration Gamepad For Playstation 4 Detroit Wireless Joystick For PS4 Games Consol",
    images: [
      "https://www.gamegear.net/cdn/shop/products/product-image-1239267009_600x.jpg?v=1585458097",
      "https://www.gamegear.net/cdn/shop/products/product-image-1239267010_600x.jpg?v=1585458097",
      "https://www.gamegear.net/cdn/shop/products/product-image-1239267008_600x.jpg?v=1585458097",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    regularPrice: 80,
    discountedPrice: 75,
    quantity: 1,
    rating: 4.2,
    reviews: 110,
    category: "Game and Video",
    colors: ["blue", "red", "green"],
    brand: "Lorem ipsum dolor sit",
    isStock: true,
    overView: "Game & Video",
    isNew: true,
    _base: cat?.gameAndVideo,
  },
  {
    _id: 2015,
    name: "GSR 120-Li Hand Drill 12V Lithium Drill Household Power Tool Screwdriver With One Battery – GSR120-LI 1Battery",
    images: [
      "https://www.gigatools.ph/cdn/shop/products/gsr120.jpg?v=1587399374&width=800",
      "https://i.ibb.co/m6ZN7LX/soundBox.webp",
      "https://i.ibb.co/wdV3b9q/vaccum.webp",
      "https://i.ibb.co/tcdSfrr/blueGun.jpg",
      "https://i.ibb.co/pw0fGmx/gaming-Controller.webp",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    regularPrice: 560,
    discountedPrice: 400,
    quantity: 1,
    rating: 4,
    reviews: 300,
    category: "Power Tools",
    colors: ["red", "blue", "green", "yellow", "black", "white"],
    brand: "Lorem ipsum dolor sit",
    isStock: true,
    overView: "Power Tools",
    isNew: true,
    _base: cat?.powerTools,
  },
  {
    _id: 2016,
    name: "Xiaomi Mi Outdoor Speaker Bluetooth 5.0 IP55 Waterproof Dustproof Portable Wireless Speaker",
    images: [
      "https://cdn.webshopapp.com/shops/256009/files/357564188/450x450x2/xiaomi-xiaomi-mi-outdoor-bluetooth-speaker.jpg",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    regularPrice: 250,
    discountedPrice: 240,
    quantity: 1,
    rating: 4.2,
    reviews: 110,
    category: "TV and Audio",
    colors: ["black"],
    brand: "Lorem ipsum dolor sit",
    isStock: true,
    overView: "Blutooth Speakers",
    isNew: true,
    _base: cat?.tvAndAudio,
  },
  {
    _id: 2017,
    name: "Global Version Mi TV Stick Android TV 9.0 Smart 2K HDR 1GB RAM 8GB ROM Bluetooth 4.2 Mini TV Dongle",
    images: [
      "https://m.media-amazon.com/images/I/51mJOb5FFDL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/51fgAX1PD0L._AC_SL1028_.jpg",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    regularPrice: 60,
    discountedPrice: 55,
    quantity: 1,
    rating: 4,
    reviews: 100,
    category: "TV Box",
    colors: ["black", "black"],
    brand: "Lorem ipsum dolor sit",
    isStock: true,
    overView: "TV Box",
    isNew: true,
    _base: cat?.tvBox,
  },
  {
    _id: 2018,
    name: "Xiaomi Mijia LCD Writing Tablet With Pen 10 13.5inch Digital Drawing Message Graphics Electronic Handwriting Pad With Pen",
    images: [
      "https://xiaomistoreph.com/cdn/shop/products/MiWebsite-MiLCDWritingTablet_768x768.png?v=1722617394",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    regularPrice: 350,
    discountedPrice: 330,
    quantity: 1,
    rating: 4.2,
    reviews: 70,
    category: "Tablets",
    colors: ["white"],
    brand: "Lorem ipsum dolor sit",
    isStock: true,
    overView: "Tablets",
    isNew: true,
    _base: cat?.tablets,
  },
  {
    _id: 2019,
    name: "New Creative Cloth Art Home Outdoors Bluetooth Sound Box",
    images: [
      "https://www.gulpofficial.com/wp-content/uploads/2022/02/product_supergear_12_1-600x600.jpg",
      "https://www.gulpofficial.com/wp-content/uploads/2022/02/product_supergear_12_2-600x600.jpg",
      "https://www.gulpofficial.com/wp-content/uploads/2022/02/product_supergear_12_3-600x600.jpg",
      "https://www.gulpofficial.com/wp-content/uploads/2022/02/product_supergear_12_4-600x600.jpg",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    regularPrice: 120,
    discountedPrice: 100,
    quantity: 1,
    rating: 4.1,
    reviews: 20,
    category: "Bluetooth Speakers",
    colors: ["grey"],
    brand: "Lorem ipsum dolor sit",
    isStock: true,
    overView: "Bluetooth Speakers",
    isNew: true,
    _base: cat?.tvAndAudio,
  },
  {
    _id: 2020,
    name: "Global Version Redmi Note 9 Pro 6GB RAM 64GB ROM Smartphone Mobile Phone",
    images: [
      "https://www.compex.com.ph/cdn/shop/products/XiaomiRedmiNote9ProGlacierWhite_540x.jpg?v=1597307942",
      "https://www.compex.com.ph/cdn/shop/products/XiaomiRedmiNote9ProTropicalGreen_540x.jpg?v=1597307942",
      "https://www.compex.com.ph/cdn/shop/products/XiaomiRedmiNote9ProInterstellarGrey_540x.jpg?v=1597307942",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    regularPrice: 305,
    discountedPrice: 285,
    quantity: 1,
    rating: 4.1,
    reviews: 160,
    category: "Cell Phones",
    colors: ["white", "green", "black"],
    brand: "Lorem ipsum dolor sit",
    isStock: true,
    overView: "Cual Sim Phones",
    isNew: true,
    _base: cat?.cellPhones,
  },
  {
    _id: 2021,
    name: "L21 Bluetooth Earphone Wireless Earbuds 5.0 TWS Headsets Dual Earbuds Bass Sound For Huawei Xiaomi IPhone Samsung Mobile Phones",
    images: [
      "https://ae-pic-a1.aliexpress-media.com/kf/Sd7930af253de450b898f7ea99bfd57e6o.jpg_960x960q75.jpg_.avif",
      "https://ae-pic-a1.aliexpress-media.com/kf/S6c7a3e9472994918b52ab1368cd46d47l.jpg_960x960q75.jpg_.avif",
      "https://ae-pic-a1.aliexpress-media.com/kf/S3372edba9fdb45bb9565d971a721858ep.jpg_960x960q75.jpg_.avif",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    regularPrice: 350,
    discountedPrice: 320,
    quantity: 1,
    rating: 3.9,
    reviews: 10,
    category: "Headphones",
    colors: ["pink", "black", "white"],
    brand: "Lorem ipsum dolor sit",
    isStock: true,
    overView: "Fitness Headphones",
    isNew: true,
    _base: cat?.headphones,
  },
  {
    _id: 2022, // amazing website
    name: "Roborock S7 Robot Vacuum Cleaner For Home Sonic Mopping Ultrasonic Carpet Clean Alexa Mop Lifting Upgrade For S5 Max",
    images: [
      "	https://cdn.shopify.com/s/files/1/0261/9844/2046/t/26/assets/s7pro_s7proultra-s1-23.png?v=1",
      "https://i.ibb.co/m6ZN7LX/soundBox.webp",
      "https://i.ibb.co/wdV3b9q/vaccum.webp",
      "https://i.ibb.co/tcdSfrr/blueGun.jpg",
      "https://i.ibb.co/pw0fGmx/gaming-Controller.webp",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    regularPrice: 250,
    discountedPrice: 240,
    quantity: 1,
    rating: 4.2,
    reviews: 100,
    category: "Robot Clean",
    colors: ["white"],
    brand: "Lorem ipsum dolor sit",
    isStock: true,
    overView: "Robot Clean",
    isNew: true,
    _base: cat?.robotClean,
  },
  {
    _id: 2023,
    name: "Klipsch R-120SW Powerful Detailed Home Speaker – Unit",
    images: [
      "https://m.media-amazon.com/images/I/91Ef5beEgqL._AC_SL1500_.jpg",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    regularPrice: 600,
    discountedPrice: 580,
    quantity: 1,
    rating: 4.7,
    reviews: 200,
    category: "TV & Audio",
    colors: ["black"],
    brand: "Lorem ipsum dolor sit",
    isStock: true,
    overView: "Bluetooth Speaker",
    isNew: true,
    _base: cat?.tvAndAudio,
  },
  {
    _id: 2024,
    name: "ZY418 Ultra-Thin Sport MP3 MP4 Music Player",
    images: [
      "	https://www.gulpofficial.com/wp-content/uploads/2022/02/product_gear_29_3-600x600.jpg",
      "hhttps://www.gulpofficial.com/wp-content/uploads/2022/02/product_gear_29_1-600x600.jpg",
      "https://www.gulpofficial.com/wp-content/uploads/2022/02/product_gear_29_2-600x600.jpg",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    regularPrice: 80,
    discountedPrice: 70,
    quantity: 1,
    rating: 4.2,
    reviews: 60,
    category: "TV & Audio",
    colors: ["blue", "black", "white"],
    brand: "Lorem ipsum dolor sit",
    isStock: true,
    overView: "MP3 Player",
    isNew: true,
    _base: cat?.tvAndAudio,
  },
  {
    _id: 2025,
    name: "Xiaomi Mi Watch Lite GPS Bluetooth 5.1 Smart Watch Sports Fitness Heart Rate Monitor 1.4 Inch TFTLCD Screen 5 ATM Waterproof Mi Band",
    images: [
      "https://gamextreme.ph/cdn/shop/products/Xiaomi-Mi-Watch-Lite-BLK2_medium.png?v=1634266032",
      "https://gamextreme.ph/cdn/shop/products/Xiaomi-Mi-Watch-Lite-Ivory-2_medium.png?v=1634266032",
      "https://gamextreme.ph/cdn/shop/products/Xiaomi-Mi-Watch-Lite-B2_medium.png?v=1634266033",
      "https://gamextreme.ph/cdn/shop/products/Xiaomi-Mi-Watch-Lite-B2_medium.png?v=1634266033",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    regularPrice: 250,
    discountedPrice: 180,
    quantity: 1,
    rating: 4.8,
    reviews: 80,
    category: "Smart Watches",
    colors: ["black", "ivory", "navy-blue", "grayish-blue"],
    brand: "Samsung",
    isStock: true,
    overView: "Smart health watch",
    isNew: false,
    _base: cat?.smartWatches,
  },
];