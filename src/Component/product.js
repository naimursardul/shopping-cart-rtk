const products = [
    {
      "id": "124e13b9-2d54-4b2f-a74d-a77b362d6ead",
      "category": "Men's Sneaker",
      "name": "ULTRABOOST 22 SHOES",
      "seller": "Addidas",
      "price": 420,
      "stock": 20,
      "ratings": 4,
      "ratingsCount": 3725,
      "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fbaf991a78bc4896a3e9ad7800abcec6_9366/Ultraboost_22_Shoes_Black_GZ0127_01_standard.jpg",
      "shipping": 1,
      "quantity": 1
    },
    {
      "id": "307f166f-1d04-4573-bc37-2f461ea9d4f7",
      "category": "Men's Sneaker",
      "name": "SUPERNOVA SHOES",
      "seller": "Addidas",
      "price": 245,
      "stock": 20,
      "ratings": 4,
      "ratingsCount": 3972,
      "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/69cbc73d0cb846889f89acbb011e68cb_9366/Supernova_Shoes_Black_S42722_01_standard.jpg",
      "shipping": 1,
      "quantity": 1
    },
    {
      "id": "4bf9798f-63bc-4a83-b0c6-6a3b816fe922",
      "category": "Men's Sneaker",
      "name": "LITE RACER ADAPT 3.0 SHOES",
      "seller": "Addidas",
      "price": 229,
      "stock": 10,
      "ratings": 5,
      "ratingsCount": 1764,
      "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/96a5f085fedf4e678095abad01056711_9366/Lite_Racer_Adapt_3.0_Shoes_Black_FX8802_01_standard.jpg",
      "shipping": 32,
      "quantity": 1
    },
    {
      "id": "9496d72b-04ec-41f8-9bc3-0a7c9697be8e",
      "category": "Men's Sneaker",
      "name": "4DFWD SHOES",
      "seller": "Addidas",
      "price": 287,
      "stock": 11,
      "ratings": 4,
      "ratingsCount": 799,
      "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8c5d1994dfd343e28567ad4400dd351d_9366/4DFWD_Shoes_Black_Q46447_01_standard.jpg",
      "shipping": 49,
      "quantity": 1
    },
    {
      "id": "6e5593d3-557b-43cf-8dab-a5140faedfb0",
      "category": "Men's Sneaker",
      "name": "KAPTIR 2.0 SHOES",
      "seller": "Addidas",
      "price": 138,
      "stock": 19,
      "ratings": 3,
      "ratingsCount": 4372,
      "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0846e90b15144861b33dacf500e3cfd1_9366/Kaptir_2.0_Shoes_White_H00276_01_standard.jpg",
      "shipping": 19,
      "quantity": 1
    },
    {
      "id": "9c0c13c2-54e4-4001-809b-afbd9d84037d",
      "category": "Men's Sneaker",
      "name": "4DFWD PULSE SHOES",
      "seller": "Addidas",
      "price": 226,
      "stock": 1,
      "ratings": 4,
      "ratingsCount": 2870,
      "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9a8256bb7ca34da49ff8ad5600bb2812_9366/4DFWD_Pulse_Shoes_White_Q46221_01_standard.jpg",
      "shipping": 15,
      "quantity": 1
    },
    {
      "id": "c9d1f410-d28f-49d9-9b01-d759b5acbeea",
      "category": "Men's Sneaker",
      "name": "ZX 1K BOOST SHOES",
      "seller": "Addidas",
      "price": 319,
      "stock": 7,
      "ratings": 4,
      "ratingsCount": 1360,
      "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0e540bae86d5456aa034ada300ebf46c_9366/ZX_1K_Boost_Shoes_Grey_H00430_01_standard.jpg",
      "shipping": 50,
      "quantity": 1
    },
    {
      "id": "1564a06b-692f-4f2e-8413-9c8a1cc2da77",
      "category": "Men's Sneaker",
      "name": "NMD_R1 V2 SHOES",
      "seller": "Addidas",
      "price": 260,
      "stock": 4,
      "ratings": 5,
      "ratingsCount": 1976,
      "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c2a18c4e3f104d52a697ad6a01477bb7_9366/NMD_R1_V2_Shoes_Black_GX6367_01_standard.jpg",
      "shipping": 46,
      "quantity": 1
    },
    {
      "id": "ac44095f-230e-4502-8816-dea3eaae8320",
      "category": "Men's Sneaker",
      "name": "NMD_R1 PRIMEBLUE SHOES",
      "seller": "Addidas",
      "price": 437,
      "stock": 1,
      "ratings": 4,
      "ratingsCount": 565,
      "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0e03e7a2a9cb44dfac2bad6a00f95888_9366/NMD_R1_Primeblue_Shoes_White_GZ9261_01_standard.jpg",
      "shipping": 36,
      "quantity": 1
    },
    {
      "id": "0298e695-1f9b-49b1-9961-8a8460f95b1c",
      "category": "Men's Boot",
      "name": "TERREX FREE HIKER GORE-TEX HIKING SHOES",
      "seller": "Addidas",
      "price": 132,
      "stock": 1,
      "ratings": 3,
      "ratingsCount": 128,
      "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/12cf12ac1c8e484ea487ad6400ee3444_9366/Terrex_Free_Hiker_Gore-Tex_Hiking_Shoes_Black_GZ0355_01_standard.jpg",
      "shipping": 13,
      "quantity": 1
    },
    {
      "id": "3cfe9adc-c27f-4be4-a859-a5c98ce88a27",
      "category": "Men's Boot",
      "name": "TERREX AX4 MID GORE-TEX HIKING SHOES",
      "seller": "Addidas",
      "price": 111,
      "stock": 19,
      "ratings": 4,
      "ratingsCount": 894,
      "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/dfa8c9a7d2864065b27fad7400b2e05e_9366/Terrex_AX4_Mid_GORE-TEX_Hiking_shoes_Black_FY9638_01_standard.jpg",
      "shipping": 27,
      "quantity": 1
    },
    {
      "id": "6602468a-a3a8-4c2c-9d3a-fd54e2c5daf7",
      "category": "Men's Boot",
      "name": "RESPONSE 3MC ADV BOOTS",
      "seller": "Addidas",
      "price": 104,
      "stock": 6,
      "ratings": 5,
      "ratingsCount": 354,
      "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b513f2cec8b440978d60ab6d014ad452_9366/Response_3MC_ADV_Boots_Black_EG9391_01_standard.jpg",
      "shipping": 26,
      "quantity": 1
    },
    {
      "id": "5db3ee2f-2eb7-4764-942d-894f72198e86",
      "category": "Men's Boot",
      "name": "TACTICAL LEXICON ADV BOOTS",
      "seller": "Addidas",
      "price": 151,
      "stock": 3,
      "ratings": 4,
      "ratingsCount": 584,
      "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f5350f3d583c46038534ab6d01445e2a_9366/Tactical_Lexicon_ADV_Boots_Grey_EG9386_01_standard.jpg",
      "shipping": 33,
      "quantity": 1
    },
    {
      "id": "9b169efb-0966-40f3-b9c2-79b16cb96388",
      "category": "Men's Boot",
      "name": "Superstar Boots",
      "seller": "Addidas",
      "price": 151,
      "stock": 13,
      "ratings": 3,
      "ratingsCount": 1010,
      "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/6853ac5565a9407bae19ac080120d9d7_9366/Superstar_Boots_Red_FZ2642_01_standard.jpg",
      "shipping": 4,
      "quantity": 1
    },
    {
      "id": "fb1f9913-d903-498c-9e4a-16d363aa2eba",
      "category": "Men's Boot",
      "name": "TACTICAL LEXICON ADV BOOTS",
      "seller": "Addidas",
      "price": 199,
      "stock": 14,
      "ratings": 4,
      "ratingsCount": 2422,
      "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3a819de9f29c498fae13ab6d01473c4d_9366/Tactical_Lexicon_ADV_Boots_White_EG9385_01_standard.jpg",
      "shipping": 39,
      "quantity": 1
    },
    {
      "id": "fe48e340-4dc9-44b3-911b-9308b4f530b3",
      "category": "Men's Boot",
      "name": "TERREX TRAILMAKER MID COLD.RDY HIKING SHOES",
      "seller": "Addidas",
      "price": 110,
      "stock": 16,
      "ratings": 3,
      "ratingsCount": 1533,
      "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c2ee4c27eba64258bcbaad5100e5d998_9366/Terrex_Trailmaker_Mid_COLD.RDY_Hiking_Shoes_Brown_FZ3370_01_standard.jpg",
      "shipping": 33,
      "quantity": 1
    },
    {
      "id": "2e06fa90-2961-4867-8322-6fdcca2f086a",
      "category": "Men's Boot",
      "name": "TERREX FREE HIKER GORE-TEX HIKING SHOES",
      "seller": "Addidas",
      "price": 155,
      "stock": 4,
      "ratings": 5,
      "ratingsCount": 1351,
      "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/efbedb26b92e4affa103ad6b008a789a_9366/Terrex_Free_Hiker_Gore-Tex_Hiking_Shoes_Grey_GZ0356_01_standard.jpg",
      "shipping": 38,
      "quantity": 1
    },
    {
      "id": "008c06dd-04e4-4923-b840-927bd6b4c2de",
      "category": "Men's Boot",
      "name": "TERREX AGRAVIC TECH PRO TRAIL RUNNING SHOES",
      "seller": "Addidas",
      "price": 118,
      "stock": 8,
      "ratings": 3,
      "ratingsCount": 1798,
      "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0a340319370844e99645abc90091df96_9366/Terrex_Agravic_Tech_Pro_Trail_Running_Shoes_Black_FU7634_01_standard.jpg",
      "shipping": 37,
      "quantity": 1
    },
    {
      "id": "b4d83415-d20a-4bba-8629-22b2780b6e93",
      "category": "Men's Boot",
      "name": "TERREX FREE HIKER COLD.RDY HIKING BOOTS",
      "seller": "Addidas",
      "price": 169,
      "stock": 17,
      "ratings": 5,
      "ratingsCount": 2833,
      "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2ded0bee28b249bbb19cad5000818b77_9366/Terrex_Free_Hiker_COLD.RDY_Hiking_Boots_Black_FZ3364_01_standard.jpg",
      "shipping": 10,
      "quantity": 1
    },
  ]

  export default products;

  