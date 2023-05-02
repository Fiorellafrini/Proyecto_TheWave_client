import React from 'react'
//import { Pie, PieChart, Tooltip, Cell } from 'recharts';



function EstadisticasTorta() {
    	let DataStats = [
  {
    brands_id: 3,
    type_id: 3,
    size: "L",
    price: "17500",
    user_id: "",
    imagen: [
      "https://res.cloudinary.com/djngalumm/image/upload/v1681861259/images/uc_sdg2h8.png",
      "https://res.cloudinary.com/djngalumm/image/upload/v1681863884/images/uc_wzegwu.png",
    ],
    name: "Stand Up Paddle Board Vesl-3569",
    stock: 8,
    description:
      "This Vesl stand-up paddleboard is ideal for intermediate users. It offers great stability and maneuverability in the water.",
  },
  {
    brands_id: 3,
    type_id: 3,
    size: "S",
    price: "12000",
    user_id: "",
    imagen: [
      "https://res.cloudinary.com/djngalumm/image/upload/f_auto,q_auto/v1681871131/images/uc_idlwqv.png",
      // "https://drive.google.com/uc?export=view&id=16-FRC2dOr1gb6WB8s6_NiI7zZpm3sPYd",
    ],
    name: "Stand Up Paddle Board Vesl-2507",
    stock: 10,
    description:
      "This stand up paddle board is perfect for beginner users. Its high-quality construction ensures great stability and buoyancy in the water.",
  },
  {
    brands_id: 3,
    type_id: 3,
    size: "L",
    price: "25500",
    user_id: "",
    imagen: [
      // https://res.cloudinary.com/djngalumm/image/upload/f_auto,q_auto/v1681876652/images/images_lr4qia.jpg",
      "https://res.cloudinary.com/djngalumm/image/upload/f_auto,q_auto/v1681871482/images/uc_dmubfm.png",
      
    ],
    name: "Stand Up Paddle Board Vesl-1559",
    stock: 5,
    description:
      "If you are an advanced user looking for a high-quality stand-up paddleboard, this is a great option. This board from Vesl brand offers excellent performance on the water, thanks to its sturdy construction and innovative design.",
  },
  {
    brands_id: 3,
    type_id: 3,
    size: "XL",
    price: "10500",
    user_id: "",
    imagen: [
      "https://res.cloudinary.com/djngalumm/image/upload/f_auto,q_auto/v1681871550/images/uc_ofkuo8.png",
      "https://res.cloudinary.com/djngalumm/image/upload/f_auto,q_auto/v1681871629/images/uc_vsvd3j.png",
    ],
    name: "Stand Up Paddle Board Vesl-Hunter",
    stock: 1,
    description:
      "If you are an advanced user looking for a high-quality stand up paddle board, this is a great option. This board from the brand Vesl offers excellent performance on the water, thanks to its sturdy construction and innovative design.",
  },
  {
    brands_id: 3,
    type_id: 3,
    size: "XL",
    price: "10500",
    user_id: "",
    imagen: [
      "https://res.cloudinary.com/djngalumm/image/upload/f_auto,q_auto/v1681871688/images/uc_b5eesv.png",
      "https://res.cloudinary.com/djngalumm/image/upload/f_auto,q_auto/v1681871772/images/uc_cdzw1s.png",
    ],
    name: "Stand Up Paddle Board Vesl-Hunter",
    stock: 10,
    description:
      "The Vesl-Hunter Stand Up Paddleboard is the perfect choice for those looking to venture into the world of paddle surfing. With a sturdy and durable construction, this board provides excellent stability and maneuverability on the water. Additionally, its modern and eye-catching design makes it the ideal choice for those looking to stand out in the sea. Get yours now and start exploring new water routes in style!",
  },
  {
    brands_id: 4,
    type_id: 4,
    size: "L",
    price: "22000",
    user_id: "",
    imagen: [
      "https://res.cloudinary.com/djngalumm/image/upload/f_auto,q_auto/v1681871844/images/uc_mkwnkd.png",
      "https://res.cloudinary.com/djngalumm/image/upload/f_auto,q_auto/v1681871900/images/uc_lceuxj.png", // imgaen repetoda
    ],
    name: "Surfboard Russell-Hunter-Hunter v2",
    stock: 7,
    description:
      "Experience the thrill of the water with the Russell-Hunter-Hunter v2 surfboard. Designed for medium to large waves, this board provides the stability and maneuverability you need to take on the most challenging swells.",
  },
  {
    brands_id: 1,
    type_id: 4,
    size: "M",
    price: "17000",
    user_id: "",
    imagen: [
      "https://res.cloudinary.com/djngalumm/image/upload/f_auto,q_auto/v1681872075/images/uc_hfcfja.png",
      "https://res.cloudinary.com/djngalumm/image/upload/f_auto,q_auto/v1681872127/images/uc_s1uel3.png", // repetida
    ],
    name: "Surfboard Hurley-Geometry v1",
    stock: 4,
    description:
      "This board is perfect for small to medium-sized waves. The combination of durable materials and a functional design will allow you to improve your skills in the water.",
  },
  {
    brands_id: 1,
    type_id: 4,
    size: "L",
    price: "17000",
    user_id: "",
    imagen: [
      "https://res.cloudinary.com/djngalumm/image/upload/f_auto,q_auto/v1681872189/images/uc_ph75tx.png",
      "https://res.cloudinary.com/djngalumm/image/upload/f_auto,q_auto/v1681872189/images/uc_ph75tx.png", // repetida
    ],
    name: "Surfboard Hurley-Geometry v2",
    stock: 10,
    description:
      "Conquer the sea in style with the Hurley-Geometry v2 surfboard. Designed for intermediate to advanced surfers, this board is perfect for medium to large waves. Enjoy the stability and speed you need to push your limits and take your surfing to the next level.",
  },
  {
    brands_id: 1,
    type_id: 4,
    size: "M",
    price: "16750",
    user_id: "",
    imagen: [
      "https://res.cloudinary.com/djngalumm/image/upload/f_auto,q_auto/v1681872372/images/uc_lvgypx.png",
      "https://res.cloudinary.com/djngalumm/image/upload/f_auto,q_auto/v1681872438/images/uc_cps6un.png",
    ],
    name: "Surfboard Hurley-Geometry v3",
    stock: 9,
    description:
      "Designed for intermediate and advanced riders, this surfboard offers greater maneuverability in big and strong waves, thanks to its fin configuration and deep concave on the underside.",
  },
  {
    brands_id: 5,
    type_id: 4,
    size: "S",
    price: "23750",
    user_id: "",
    imagen: [
      "https://res.cloudinary.com/djngalumm/image/upload/f_auto,q_auto/v1681872501/images/uc_xygxlv.png",
      "https://res.cloudinary.com/djngalumm/image/upload/f_auto,q_auto/v1681872550/images/uc_hwsurf.png",
    ],
    name: "Surfboard Wave-Freestyle v4",
    stock: 3,
    description:
      "This surfboard is perfect for riders seeking a balance between speed and maneuverability. Its flat shape and fin system provide greater stability and control in small and medium waves, while its swallow tail design allows for greater grip in larger and more powerful waves.",
  },
  {
    brands_id: 5,
    type_id: 4,
    size: "S",
    price: "13750",
    user_id: "",
    imagen: [
      "https://res.cloudinary.com/djngalumm/image/upload/f_auto,q_auto/v1681872614/images/uc_ylulds.png",
      "https://res.cloudinary.com/djngalumm/image/upload/f_auto,q_auto/v1681872682/images/uc_ey1edp.png",
    ],
    name: "Surfboard Wave-Freestyle v1",
    stock: 9,
    description:
      "The Wave-Freestyle v1 surfboard is an excellent choice for those seeking high performance in the water. With its versatile design, this board allows for easy execution of radical maneuvers while maintaining stability at all times.",
  },
  {
    brands_id: 6,
    type_id: 4,
    size: "M",
    price: "33750",
    user_id: "",
    imagen: [
      "https://res.cloudinary.com/djngalumm/image/upload/f_auto,q_auto/v1681872726/images/uc_u3gx3u.png",
      "https://res.cloudinary.com/djngalumm/image/upload/f_auto,q_auto/v1681872781/images/uc_icurnu.png",
    ],
    name: "Surfboard JOBE",
    stock: 10,
    description:
      "The JOBE surfboard is an excellent option for those seeking high performance in the water. With its versatile design, this board allows for radical maneuvers with ease while maintaining stability at all times.",
  },
  {
    brands_id: 6,
    type_id: 4,
    size: "L",
    price: "39050",
    user_id: "",
    imagen: [
      "https://res.cloudinary.com/djngalumm/image/upload/f_auto,q_auto/v1681873915/images/uc_uy5xeh.png",
      "https://res.cloudinary.com/djngalumm/image/upload/f_auto,q_auto/v1681874021/images/uc_l5zn3w.png",
    ],
    name: "Surfboard JOBE-Explorer",
    stock: 10,
    description:
      "The JOBE-Explorer surfboard is an excellent option for those seeking high performance on the water. With its versatile design, this board allows for easy execution of radical maneuvers while maintaining stability at all times.",
  },
  {
    brands_id: 7,
    type_id: 4,
    size: "XXL",
    price: "11750",
    user_id: "",
    imagen: [
      "https://res.cloudinary.com/djngalumm/image/upload/f_auto,q_auto/v1681873766/images/uc_dle3rs.png",
      "https://res.cloudinary.com/djngalumm/image/upload/f_auto,q_auto/v1681873827/images/uc_ddcanw.png",
    ],
    name: "Surfboard Compact-a",
    stock: 4,
    description:
      "The Compact-a surfboard is ideal for surfers seeking high performance in big waves. Its modern and sleek design allows for excellent maneuverability and speed, thanks to its shape and structure. Additionally, its size provides great stability and safety in extreme surf conditions.",
  },
  {
    brands_id: 8,
    type_id: 5,
    size: "S",
    price: "9750",
    user_id: "",
    imagen: [
      "https://res.cloudinary.com/djngalumm/image/upload/f_auto,q_auto/v1681873627/images/uc_jfxuui.png",
      "https://res.cloudinary.com/djngalumm/image/upload/f_auto,q_auto/v1681873692/images/uc_lbepju.png",
    ],
    name: "WakeBoard SungShot-Blue",
    stock: 1,
    description:
      "The SungShot-Blue wakeboard is perfect for those who want to experience the thrill of performing stunts and tricks on the water. Its size is ideal for greater control and maneuverability, making it suitable for both beginners and expert wakeboarders. Its multiple fin design allows for greater stability and control on the water, enabling you to perform your tricks with greater confidence.",
  },
  {
    brands_id: 9,
    type_id: 2,
    size: "XL",
    price: "8000",
    user_id: "",
    imagen: [
      "https://res.cloudinary.com/djngalumm/image/upload/f_auto,q_auto/v1681873582/images/uc_ihmd5t.png",
    ],
    name: "Billabong Womens Wetsuit - Black",
    stock: 8,
    description:
      "This Billabong wetsuit for women in black is perfect for water activities such as surfing, paddle boarding, or diving. Made with high-quality materials, it will keep you warm and comfortable in the water while protecting you from UV rays.",
  },
  {
    brands_id: 9,
    type_id: 2,
    size: "M",
    price: "11000",
    user_id: "",
    imagen: [
      "https://res.cloudinary.com/djngalumm/image/upload/f_auto,q_auto/v1681873477/images/uc_py4sgp.png",
    ],
    name: "Billabong Men's Storm Wetsuit - Black",
    stock: 0,
    description:
      "If you're looking for a high-quality wetsuit for men, this Billabong model is an excellent choice. Designed to withstand the coldest climates, it is perfect for activities such as surfing and paddleboarding.",
  },
  {
    brands_id: 12,
    type_id: 2,
    size: "XL",
    price: "16400",
    user_id: "",
    imagen: [
      "https://res.cloudinary.com/djngalumm/image/upload/f_auto,q_auto/v1681873398/images/uc_het9tr.png",
    ],
    name: "Gill Zenlite Wetsuit - Blue",
    stock: 10,
    description:
      "The Gill Zenlite wetsuit is a high-quality option for experienced divers. With a tight-fitting design and 3mm neoprene construction, it will keep you warm and comfortable in cold waters.",
  },
  {
    brands_id: 11,
    type_id: 2,
    size: "S",
    price: "13000",
    user_id: "",
    imagen: [
      "https://res.cloudinary.com/djngalumm/image/upload/f_auto,q_auto/v1681873311/images/uc_clytzf.png",
    ],
    name: "Orca Synergy Women's Wetsuit - Wild Blue",
    stock: 7,
    description:
      "If you are a woman who loves water activities, the Orca Synergy wetsuit is an excellent choice. With a 3mm neoprene construction and a snug design, it will keep you warm and comfortable in the water.",
  },
  {
    brands_id: 10,
    type_id: 2,
    size: "XXL",
    price: "11150",
    user_id: "",
    imagen: [
      "https://res.cloudinary.com/djngalumm/image/upload/f_auto,q_auto/v1681873235/images/uc_vaeqrt.png",
    ],
    name: "O'neill Men's Hammer 2mm Wetsuit - Slate / Black",
    stock: 8,
    description:
      "This O'neill wetsuit is perfect for men looking for a durable and comfortable option for water activities such as surfing and paddle boarding. With a 2mm neoprene construction and a snug design, it will keep you comfortable and protected in the water.",
  },
  {
    brands_id: 10,
    type_id: 2,
    size: "M",
    price: "10000",
    user_id: "",
    imagen: [
      "https://res.cloudinary.com/djngalumm/image/upload/f_auto,q_auto/v1681873159/images/uc_xcbgyv.png",
    ],
    name: "O'neill Mens Atlanta 2mm Back Zip Wetsuit - Black-Blue",
    stock: 10,
    description:
      "If you are looking for a durable and comfortable wetsuit for water activities such as surfing and paddleboarding, the O'Neill Atlanta model is an excellent choice. With a 2mm neoprene construction and a snug design, it will keep you comfortable and protected in the water.",
  },
  {
    brands_id: 13,
    type_id: 1,
    size: "S",
    price: "7500",
    user_id: "",
    imagen: [
      "https://res.cloudinary.com/djngalumm/image/upload/f_auto,q_auto/v1681873078/images/uc_psmcl3.png",
    ],
    name: "Diving Fins - Powerjet",
    stock: 10,
    description:
      "These Powerjet diving fins are perfect for divers looking for a durable and efficient option. With an ergonomic design and a sturdy construction, they will help you move easily through the water.",
  },
  {
    brands_id: 14,
    type_id: 1,
    size: "XL",
    price: "6500",
    user_id: "",
    imagen: [
      "https://res.cloudinary.com/djngalumm/image/upload/f_auto,q_auto/v1681873025/images/uc_ux5k9f.png",
    ],
    name: "Diving Fins World One 50",
    stock: 2,
    description:
      "The Mundial One 50 Fin diving fins are an excellent choice for divers seeking a durable and comfortable option. With an ergonomic design and high-quality construction, they will help you move easily through the water.",
  },
  {
    brands_id: 14,
    type_id: 1,
    size: "L",
    price: "6500",
    user_id: "",
    imagen: [
      "https://res.cloudinary.com/djngalumm/image/upload/f_auto,q_auto/v1681872961/images/uc_xph6wq.png",
    ],
    name: "Diving fins Mundial One",
    stock: 5,
    description:
      "If you are a freediver looking for a durable and efficient option, these Mundial One diving fins are an excellent choice. With an ergonomic design and a sturdy construction, they will help you move easily in the water.",
  },
  {
    brands_id: 13,
    type_id: 1,
    size: "M",
    price: "9000",
    user_id: "",
    imagen: [
      "https://res.cloudinary.com/djngalumm/image/upload/f_auto,q_auto/v1681872910/images/uc_p4w6vo.png",
    ],
    name: "Diving fins - Nude - Powerjet",
    stock: 6,
    description:
      "These Bare Powerjet diving fins are ideal for any type of diving. With an aerodynamic design and a high-strength structure, these fins provide great propulsion in the water, allowing the diver to move with ease and speed.",
  },
    ];
 //   const COLORS = ['#ce93d8', '#5c6bc0', '#b39ddb', '#4dd0e1', '#f48fb1', '#d500f9']
  return (
    <div>
      
 </div>
  );
}

export default EstadisticasTorta;
