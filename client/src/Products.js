import React, { useState } from 'react';
import './Products.css'; // Import the CSS file for styling
import FilterBar from './FilterBar';
// import ProductCard from './ProductPage';
// import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Products() {
  // const [selectedCategory, setSelectedCategory] = useState('');
  // const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const navigate = useNavigate();

  // Define the available categories and subcategories
  const categories = [
    'Light Fixtures','Glass Railing Systems','Windows',
    'Medicine Cabinets', 'Mirrors','Cabinet Pulls and Handles',
    'Shower Glass Enclosures','Bathroom Accessories','Window Shades',
    'Solid Wood Doors','Plumbing Fixtures',
  ];

  const subcategories =[
    'Pendant', 'Sconce', 'Flush Mount', 'Recessed', 
    'Under Cabinet', 'Indoor', 'Outdoor', 'Tempered', 
    'Laminated', 'Illuminated', 'Non-illuminated', 
    'Acrylic', 'Stainless Steel & Plating', 'Iron', 'Leather', 
    'Mirror Frame', 'Panel', 'Traditional & Transiotional', 
    'Towel Bars', 'Grab Bars', 'Toilet Paper Holders', 'Robe Hooks', 
    'Manual', 'Electric', "With Frame", "Without Frame", 
    "Interior", 'Sinks', 'Faucets', 'Showers'
  ]

  const allProducts = [
    {
        category: 'Mirrors',
        type: 'Acrylic',
        model: '20380',
        description: 'Acrylic and brass starburst mirror. Non-beveled center mirror. D-ring hardware provided.',
        availability: 'IN STOCK',
        dimensions: '34 X 34',
        material: 'ACRYLIC, BRASS, WOOD & MIRROR',
        finish: 'ACRYLIC & BRUSHED BRASS',
        images: [
            'https://www.mirrorhome.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/2/0/20380_front_new_shot_2021_1500_1.jpg', 
            'https://www.mirrorhome.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/0/20380_side_new_shot_2021_1500.jpg', 
            'https://www.mirrorhome.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/0/20380_lifestyle_1500.jpg'
        ],
        weight: '22 LBS',
        bevel: 'NO',
        shippingDetails: {
        boxedWeight: '110 LBS', 
        shippingDimensions: '26 X 47 X 67',
        method: 'FREIGHT'
        }
    }, 
    {
        category: 'Mirrors',
        type: 'Acrylic',
        model: '20381',
        description: 'Acrylic and stainless steel starburst mirror. Non-beveled center mirror. D-ring hardware provided.',
        availability: 'IN STOCK',
        dimensions: '34 X 34',
        material: 'ACRYLIC, STAINLESS STEEL, WOOD & MIRROR',
        finish: 'ACRYLIC & POLISHED STAINLESS STEEL',
        images: [
            'https://www.mirrorhome.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/0/20381_3.jpg',
            'https://www.mirrorhome.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/2/0/20381_side.jpg',
            'https://www.mirrorhome.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/2/0/20381_lifestyle_website_1500x1500.jpg'
        ],
        weight: '22 LBS',
        bevel: 'NO',
        shippingDetails: {
        boxedWeight: '110 LBS', 
        shippingDimensions: '26 X 47 X 67',
        method: 'FREIGHT'
        }
    },
    {
        category: 'Mirrors',
        type: 'Acrylic',
        model: "20384",
        description: "Acrylic and brass pagoda mirror. Non-beveled center mirror. D-ring hardware provided.",
        availability: "IN STOCK",
        dimensions: "30 X 46",
        material: "ACRYLIC, BRASS, WOOD & MIRROR",
        finish:  "ACRYLIC & BRUSHED BRASS",
        images: [
            'https://www.mirrorhome.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/2/0/20384_front_new_shot_2021_1500.jpg',
            'https://www.mirrorhome.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/2/0/20384_side_new_shot_2021_1500_1.jpg',
            'https://www.mirrorhome.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/0/20384_lifestyle_website_1500x1500.jpg'
        ],
        weight: "34.00 LBS",
        bevel: "YES",
        shippingDetails: {
        boxedWeight: "93.00 LBS",
        shippingDimensions: "26 X 47 X 67",
        method: "FREIGHT"
        }
    },
    {
        category: 'Mirrors',
        type: 'Acrylic',
        model: "20385",
        description: "Acrylic and nickel pagoda mirror. Non-beveled center mirror. D-ring hardware provided.",
        availability: "IN STOCK",
        dimensions: "30 X 46",
        material: "ACRYLIC, NICKEL, WOOD & MIRROR",
        finish: "ACRYLIC & POLISHED NICKEL",
        images: [
            "https://www.mirrorhome.com/media/catalog/product/cache/1/thumbnail/480x/602f0fa2c1f0d1ba5e241f914e856ff9/2/0/20385_front_new_shot_2021_1500_1.jpg",
            "https://www.mirrorhome.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/2/0/20385_side_new_shot_2021_1500.jpg",
            "https://www.mirrorhome.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/0/20384_lifestyle_website_1500x1500.jpg"
        ],
        weight: "34.00 LBS",
        bevel: "YES",
        shippingDetails: {
        boxedWeight: "93.00 LBS",
        shippingDimensions: "26 X 47 X 67",
        method: "FREIGHT"
        }
    },
    {
        category: 'Mirrors',
        type: 'Acrylic',
        model: "20386",
        description: "Acrylic and brass round mirror. Non-beveled center mirror. D-ring hardware provided.",
        availability: "IN STOCK",
        dimensions: "36 X 36",
        material: "ACRYLIC, BRASS, WOOD & MIRROR",
        finish: "ACRYLIC & BRUSHED BRASS",
        images: [
            "https://www.mirrorhome.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/2/0/20386_3.jpg",
            "https://www.mirrorhome.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/2/0/20386_side_1.jpg",
            "https://www.mirrorhome.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/2/0/20387_lifesyle_1500.jpg"
        ],
        weight: "38.00 LBS",
        bevel: "YES",
        shippingDetails: {
        boxedWeight: "102.00 LBS",
        shippingDimensions: "26 X 53 X 67",
        method: "FREIGHT"
        }
    },
    {
        category: 'Mirrors',
        type: 'Acrylic',
        model: "20387",
        description: "Acrylic and polished stainless steel round mirror. Non-beveled center mirror. Cleat hardware provided.",
        availability: "IN STOCK",
        dimensions: "36 X 36",
        material: "ACRYLIC, NICKEL, WOOD & MIRROR",
        finish: "ACRYLIC & POLISHED NICKEL",
        images: [
            "https://www.mirrorhome.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/2/0/20387_front_new_shot_2021.jpg",
            "https://www.mirrorhome.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/2/0/20387_side_new_shot_2021_1500-recovered.jpg",
            "https://www.mirrorhome.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/2/0/20387_lifesyle_1500.jpg"
        ],
        weight: "38.00 LBS",
        bevel: "YES",
        shippingDetails: {
        boxedWeight: "102.00 LBS",
        shippingDimensions: "26 X 53 X 67",
        method: "FREIGHT"
        }
    }, 
    {
        category: 'Mirrors',
        type: 'Stainless Steel & Plating',
        model: 'CK1101',
        description: 'Designed by Celerie Kemble. Hand carved rectangle mirror finished in dark mahogany surrounded by burnished brass hardware. Non-beveled center mirror. Cleat hanging hardware provided. Item can hang horizontally or vertically.',
        availability: 'IN STOCK',
        dimensions: '32 X 44',
        material: 'STAINLESS STEEL, WOOD & MIRROR',
        finish: 'DARK MAHOGANY & BURNISHED BRASS',
        images: [
            'https://www.mirrorhome.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/c/k/ck1101_1.jpg', 
            'https://www.mirrorhome.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/c/k/ck1101_detail1_1.jpg',
            'https://www.mirrorhome.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/c/k/ck1101-pss_lifestyle_.jpg'
        ],
        weight: '36.00 LBS',
        bevel: 'NO',
        shippingDetails: {
        boxedWeight: '54.00 LBS',
        shippingDimensions: '41 X 56 X 8',
        method: 'GROUND'
        }
    },
    {
        category: 'Mirrors',
        type: 'Stainless Steel & Plating',
        model: 'CK1112',
        description: 'Designed by Celerie Kemble. Hand welded rectangle mirror finished in burnished brass. Non-beveled center mirror. Cleat hanging hardware provided. Item can hang horizontally or vertically.',
        availability: 'IN STOCK',
        dimensions: '30 X 40',
        material: 'STAINLESS STEEL, WOOD & MIRROR',
        finish: 'BURNISHED BRASS',
        images: [
            'https://www.mirrorhome.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/c/k/ck1112_1500-1.jpg',
            'https://www.mirrorhome.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/c/k/ck1112_side_1500x1500.jpg',
            'https://www.mirrorhome.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/c/k/ck1112__lifestyle_1500.jpg'
        ],
        weight: '39.00 LBS',
        bevel: 'NO',
        shippingDetails: {
        boxedWeight: '99.00 LBS',
        shippingDimensions: '24 X 40 X 72',
        method: 'FREIGHT'
        }
    }, 
    
      {
        category: 'Mirrors',
        type: 'Iron',
        model: '20668-BGL',
        description: 'Hand welded iron mirror finished in Burnished Gold Leaf. Beveled center mirror. Cleat hardware provided.',
        availability: '28 DAYS',
        dimensions: '24 X 40',
        material: 'IRON, WOOD & MIRROR',
        finish: 'BURNISHED GOLD LEAF',
        images: [
            'https://www.mirrorhome.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/2/0/20668-bgl_website_1500x1500.jpg',
            'https://www.mirrorhome.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/0/20668-bgl_side_website_1500x1500.jpg',
            'https://www.mirrorhome.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/2/0/20668-bgl_lifstyle_website_1500x1500.jpg'
        ],
        weight: '32.00 LBS',
        bevel: 'YES',
        shippingDetails: {
          boxedWeight: '42.00 LBS',
          shippingDimensions: '41 X 51 X 8',
          method: 'GROUND'
        }
      }, 
      {
        category: 'Mirrors',
        type: 'Iron',
        model: '20669-BGL',
        description: 'Hand welded iron mirror finished in Burnished Gold Leaf. Beveled center mirror. Cleat hardware provided.',
        availability: 'IN STOCK',
        dimensions: '30 X 40',
        material: 'IRON, WOOD & MIRROR',
        finish: 'BURNISHED GOLD LEAF',
        images: [
            'https://www.mirrorhome.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/2/0/20668-bgl_website_1500x1500.jpg',
            'https://www.mirrorhome.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/0/20668-bgl_side_website_1500x1500.jpg',
            'https://www.mirrorhome.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/2/0/20668-bgl_lifstyle_website_1500x1500.jpg'
        ],
        weight: '28.00 LBS',
        bevel: 'YES',
        shippingDetails: {
          boxedWeight: '42.00 LBS',
          shippingDimensions: '41 X 51 X 8',
          method: 'GROUND'
        }
      }, 
      {
        category: 'Light Fixtures',
        type: 'Flush Mount',
        model: '4-Light Farmhouse',
        description: 'Vintage industrial light fixture: this ceiling light combines retro solid wood and black metal to create a unique vintage and modern industrial charm, brings you a cozy and artistic flavor home atmosphere.',
        availability: 'IN STOCK',
        dimensions: '12.6 X 12.6',
        material: 'Metal & Wood/Bamboo',
        finish: 'Brown',
        images: [
            'https://images.thdstatic.com/productImages/8310a911-a8ce-498d-a245-1cd356e707fc/svn/brown-aiwen-flush-mount-ceiling-lights-mb-8834bk-64_600.jpg', 
            'https://images.thdstatic.com/productImages/44308e73-a772-4d18-b73d-61f935c41351/svn/brown-aiwen-flush-mount-ceiling-lights-mb-8834bk-c3_1000.jpg', 
            "https://images.thdstatic.com/productImages/7917d1a8-480d-4531-bd5d-bfcf6c149304/svn/brown-aiwen-flush-mount-ceiling-lights-mb-8834bk-1d_1000.jpg"
        ],
        weight: '6.3 LBS',
        bevel: 'NO',
        shippingDetails: {
        boxedWeight: '15 LBS', 
        shippingDimensions: '15 X 15 X 6',
        method: 'GROUND'
        }
    }, 
    {
      category: 'Light Fixtures',
      type: 'Flush Mount',
      model: 'Integrated LED Flush Mount',
      description: 'This Commercial Electric 12 in. LED Flush mount includes both an oil rubbed bronze and brushed nickel trim allowing you to select the best finish to compliment your decor.',
      availability: 'IN STOCK',
      dimensions: '12 X 12',
      material: 'Plastic',
      finish: 'Brushed Nickel and Oil-rubbed bronze',
      images: [
        'https://images.thdstatic.com/productImages/778c9abc-4fc8-4f7a-bfbc-d41942275836/svn/brushed-nickel-and-oil-rubbed-bronze-commercial-electric-flush-mount-ceiling-lights-ca8aa018er125-a0_1000.jpg',
          'https://images.thdstatic.com/productImages/7ab83d82-9df8-47af-b33e-10da7ce6b897/svn/brushed-nickel-and-oil-rubbed-bronze-commercial-electric-flush-mount-ceiling-lights-ca8aa018er125-40_1000.jpg', 
          'https://images.thdstatic.com/productImages/0eb84f8b-676f-41e1-bcd1-7dee44aea509/svn/brushed-nickel-and-oil-rubbed-bronze-commercial-electric-flush-mount-ceiling-lights-ca8aa018er125-e1_1000.jpg'
      ],
      weight: '1.27 LBS',
      bevel: 'YES',
      shippingDetails: {
      boxedWeight: '3 LBS', 
      shippingDimensions: '14 X 14 X 3',
      method: 'GROUND'
      }
  }, 
  {
    category: 'Light Fixtures',
    type: 'Pendant',
    model: 'Palla 4-Light Gold Globe',
    description: 'Finished in a contemporary gold, this four-light chandelier features an atomic design with four bulbs to fill your home with warm light.',
    availability: 'IN STOCK',
    dimensions: '6 X 13 X 6',
    material: 'Metal',
    finish: 'Gold & White',
    images: [
      'https://images.thdstatic.com/productImages/7ab0d696-e8a2-40cf-a893-be8c79104ebf/svn/gold-home-decorators-collection-pendant-lights-39719-hbo-64_1000.jpg',
        'https://images.thdstatic.com/productImages/4a0dc154-3d4b-410c-abb2-6c535ab5fd22/svn/gold-home-decorators-collection-pendant-lights-39719-hbo-40_1000.jpg', 
        'https://images.thdstatic.com/productImages/c615317b-d9f2-4a0d-ac0f-68d3dbda6576/svn/gold-home-decorators-collection-pendant-lights-39719-hbo-e1_1000.jpg'
    ],
    weight: '8.55 LBS',
    bevel: 'YES',
    shippingDetails: {
    boxedWeight: '8 LBS', 
    shippingDimensions: '8 X 15 X 8',
    method: 'GROUND'
    }
}, 
{
  category: 'Light Fixtures',
  type: 'Pendant',
  model: 'Lowry 3-Light Brushed Gold Dome',
  description: 'Shed light and style in any room with the Lowry Ceiling Mount 3-Light Pendant FIxture by Home Decortors Collection.',
  availability: 'IN STOCK',
  dimensions: '12 X 12',
  material: 'Metal',
  finish: 'Gold & Glass',
  images: [
    'https://images.thdstatic.com/productImages/fa7b1211-1e4e-4de6-bdcc-b318ddc6c206/svn/brushed-gold-home-decorators-collection-pendant-lights-hdli014-64_1000.jpg',
      'https://images.thdstatic.com/productImages/3a7a0c64-84ed-4738-8141-7d8e57914b3d/svn/brushed-gold-home-decorators-collection-pendant-lights-hdli014-4f_1000.jpg', 
      'https://images.thdstatic.com/productImages/823dfa9e-ea9b-4cdf-97ec-be79172856bb/svn/brushed-gold-home-decorators-collection-pendant-lights-hdli014-e1_1000.jpg'
  ],
  weight: '8 LBS',
  bevel: 'YES',
  shippingDetails: {
  boxedWeight: '10 LBS', 
  shippingDimensions: '14 X 14 X 3',
  method: 'GROUND'
  }
}, 
{
  category: 'Light Fixtures',
  type: 'Sconce',
  model: 'Calhoun Clear Glass Farmhouse',
  description: 'Manifest an atmosphere of positive energy and renewal by updating your bathroom decor with the vintage-inspired Calhoun collections one-light bath vanity bracket.',
  availability: 'IN STOCK',
  dimensions: '7 X 5 X 9',
  material: 'Steel',
  finish: 'Bronze',
  images: [
    'https://images.thdstatic.com/productImages/31cc1140-6c78-4b70-a97f-e0f5fbe8e329/svn/antique-bronze-progress-lighting-wall-sconces-p300045-020-64_1000.jpg',
      'https://images.thdstatic.com/productImages/6e40e509-cb89-4cb2-ba4a-a403babd1069/svn/antique-bronze-progress-lighting-wall-sconces-p300045-020-40_1000.jpg', 
      'https://images.thdstatic.com/productImages/5f092825-8139-4ac1-bd29-d35c8ba7c7f9/svn/antique-bronze-progress-lighting-wall-sconces-p300045-020-e1_1000.jpg'
  ],
  weight: '4 LBS',
  bevel: 'YES',
  shippingDetails: {
  boxedWeight: '7 LBS', 
  shippingDimensions: '8 X 6 X 10',
  method: 'GROUND'
  }
}, 
{
  category: 'Light Fixtures',
  type: 'Recessed',
  model: 'HLBSL6 Dimmable Indoor Integrated LED',
  description: 'The Halo HLB6 Selectable 4-Pack is a complete ultra-thin direct mount downlight that offers you the option of choosing your color temperature directly on the fixture.',
  availability: 'IN STOCK',
  dimensions: '7 X 7 X 2',
  material: 'Plastic',
  finish: 'White',
  images: [
    'https://images.thdstatic.com/productImages/e7e89d92-2d18-48c6-af74-59d1444bc693/svn/halo-recessed-lighting-kits-hlbsl6099fs35-4pk-40_1000.jpg',
      'https://images.thdstatic.com/productImages/c0f25cd5-119d-4028-9270-7c07a43e1c55/svn/halo-recessed-lighting-kits-hlbsl6099fs35-4pk-e1_1000.jpg', 
      'https://images.thdstatic.com/productImages/f7921210-f26e-4a8e-b3d8-f23fe8edb592/svn/halo-recessed-lighting-kits-hlbsl6099fs35-4pk-66_1000.jpg'
  ],
  weight: '2.2 LBS',
  bevel: 'YES',
  shippingDetails: {
  boxedWeight: '3 LBS', 
  shippingDimensions: '8 X 8 X 3',
  method: 'GROUND'
  }
}, 
{
  category: 'Light Fixtures',
  type: 'Under Cabinet',
  model: 'LED Tunable White Tape Light Kit',
  description: 'LED strip lighting with tunable white color from 5000K to 2700K white is great for indoor applications including under cabinets, accents or any space a low profile and flexible lighting solution is needed.',
  availability: 'IN STOCK',
  dimensions: '16 X 2',
  material: 'Plastic',
  finish: 'White',
  images: [
      'https://images.thdstatic.com/productImages/22d66483-cb90-4633-bb25-81559eef67f4/svn/commercial-electric-led-strip-lights-421510-64_1000.jpg', 
      'https://images.thdstatic.com/productImages/733d2551-c7a9-4444-9cd1-1f2523554c6e/svn/commercial-electric-led-strip-lights-421510-1f_1000.jpg',
      'https://images.thdstatic.com/productImages/820f34b9-5c6b-4b38-aec3-0acac788104f/svn/commercial-electric-led-strip-lights-421510-44_1000.jpg'
      
  ],
  weight: '1 LBS',
  bevel: 'YES',
  shippingDetails: {
  boxedWeight: '2 LBS', 
  shippingDimensions: '16 X 2',
  method: 'GROUND'
  }
}, 
{
  category: 'Light Fixtures',
  type: 'Under Cabinet',
  model: 'Direct Wire Aluminum LED White',
  description: 'LED direct-wire under cabinet light has an integrated driver to provide good quality and long lifespan. The installation is easy even for starter.',
  availability: 'IN STOCK',
  dimensions: '2 X 24 X 4',
  material: 'Metal',
  finish: 'White',
  images: [
      'https://images.thdstatic.com/productImages/3e56de1c-4933-4674-9129-a778b6f1c596/svn/white-commercial-electric-under-cabinet-bar-lights-pl9035-64_1000.jpg', 
      'https://images.thdstatic.com/productImages/6daae2d7-336d-4b21-b326-7afc528ef6c6/svn/white-commercial-electric-under-cabinet-bar-lights-pl9035-77_1000.jpg',
      'https://images.thdstatic.com/productImages/de658a3c-713b-4ae2-a9b6-bf143099ea32/svn/white-commercial-electric-under-cabinet-bar-lights-pl9035-e1_1000.jpg'
      
  ],
  weight: '2 LBS',
  bevel: 'YES',
  shippingDetails: {
  boxedWeight: '4 LBS', 
  shippingDimensions: '4 X 16 X 6',
  method: 'GROUND'
  }
}, 
{
  category: 'Glass Railing Systems',
  type: 'Outdoor',
  model: 'CVGR Hercules Glass Panel',
  description: 'TOTAL MINIMUM ORDER OF 2 PANELS REQUIRED. CVGRailings Hercules Glass Tempered Laminated glass panels are strong, safe and feature our NEW Lever Spigot (patent pending) made from Duplex Stainless Steel 2205 which offers greater strength and greater corrosion protection than 316 Stainless Steel.',
  availability: 'IN STOCK',
  dimensions: '40 X 42',
  material: 'Glass',
  finish: 'Clear',
  images: [
      'https://images.thdstatic.com/productImages/a6456b9e-e2e3-40e5-b8b8-8235718ffbb3/svn/clearview-glass-railings-deck-railing-systems-cvgr-1001-42-64_1000.jpg', 
      'https://images.thdstatic.com/productImages/735e582b-dfd3-4cb8-9ec2-0047d5a31096/svn/clearview-glass-railings-deck-railing-systems-cvgr-1001-42-c3_1000.jpg',
      'https://images.thdstatic.com/productImages/52a78c98-b8d5-43b7-8892-47d55bab13cf/svn/clearview-glass-railings-deck-railing-systems-cvgr-1001-42-1f_1000.jpg'
      
  ],
  weight: '73.5 LBS',
  bevel: 'YES',
  shippingDetails: {
  boxedWeight: '75 LBS', 
  shippingDimensions: '42 X 44',
  method: 'GROUND'
  }
}, 
{
  category: 'Glass Railing Systems',
  type: 'Indoor',
  model: 'Reroute Prime Interior Spiral Staircase',
  description: 'Create space, maximize floor area and leave a unique mark on your home with Mylens spiral stair kits. With an innovative design, the DIY Spiral Stairs by Mylen is sure to let you create the perfect staircase for your home.',
  availability: 'IN STOCK',
  dimensions: '154 X 42 X 42',
  material: 'Steel',
  finish: 'Steel',
  images: [
      'https://images.thdstatic.com/productImages/1173ff04-c243-485e-bb00-ce7526c069b7/svn/mylen-stairs-spiral-staircase-kits-ec42p11a002-64_1000.jpg', 
      'https://images.thdstatic.com/productImages/f78be456-c132-4502-952e-55c898e23487/svn/mylen-stairs-spiral-staircase-kits-ec42p11a002-e1_1000.jpg',
      'https://images.thdstatic.com/productImages/e77bc2f3-5a7f-43a8-a604-a239eef5e7a1/svn/mylen-stairs-spiral-staircase-kits-ec42p11a002-4f_1000.jpg'
      
  ],
  weight: '308 LBS',
  bevel: 'YES',
  shippingDetails: {
  boxedWeight: '315 LBS', 
  shippingDimensions: '156 X 44 X 44',
  method: 'GROUND'
  }
}, 
{
  category: 'Windows',
  type: 'Tempered',
  model: 'White Vinyl Left-Hand Sliding Window',
  description: 'Ply Gem Vinyl Windows you can choose with confidence whether you are building a new home or updating the place you have lived in for years',
  availability: 'IN STOCK',
  dimensions: '12 X 36 X 3',
  material: 'Vinyl',
  finish: 'White',
  images: [
      'https://images.thdstatic.com/productImages/b3f21f7f-5814-4025-b4ef-96507e6df8b3/svn/ply-gem-sliding-windows-classic-sl-36x12-hpscob-tempered-wui-64_1000.jpg', 
      'https://images.thdstatic.com/productImages/734b67be-d9d9-400a-af1e-a305e42fe2c2/svn/ply-gem-sliding-windows-classic-sl-36x12-hpscob-tempered-wui-c3_1000.jpg',
      'https://images.thdstatic.com/productImages/b3f21f7f-5814-4025-b4ef-96507e6df8b3/svn/ply-gem-sliding-windows-classic-sl-36x12-hpscob-tempered-wui-64_1000.jpg'
      
  ],
  weight: '19 LBS',
  bevel: 'YES',
  shippingDetails: {
  boxedWeight: '22 LBS', 
  shippingDimensions: '14 X 28 X 6',
  method: 'GROUND'
  }
}, 
{
  category: 'Windows',
  type: 'Tempered',
  model: 'Fixed Self-Flashing Skylight',
  description: 'For more than 40-years our skylights have been making homes look brighter and more cheerful. and even bigger. You get more than your moneys worth with Sun-Tek.',
  availability: 'IN STOCK',
  dimensions: '55 X 31 X 2',
  material: 'Aluminum',
  finish: 'Bronze',
  images: [
      'https://images.thdstatic.com/productImages/c3c1b75d-c40d-4e20-9f3c-5a72866a4eb8/svn/sun-tek-fixed-skylights-fgc-2549-e-c-b-64_1000.jpg', 
      'https://images.thdstatic.com/productImages/6e83b425-1569-4ebc-87cb-cbe1617cdfd6/svn/sun-tek-fixed-skylights-fgc-2549-e-c-b-c3_1000.jpg',
      'https://images.thdstatic.com/productImages/db390a03-0fc2-4bb2-ba93-683dff080d2a/svn/sun-tek-fixed-skylights-fgc-2549-e-c-b-4f_1000.jpg'
      
  ],
  weight: '5 LBS',
  bevel: 'YES',
  shippingDetails: {
  boxedWeight: '8 LBS', 
  shippingDimensions: '14 X 14 X 3',
  method: 'GROUND'
  }
}, 
{
  category: 'Windows',
  type: 'Laminated',
  model: 'Fresh Air Venting Deck-Mount Skylight',
  description: 'VELUX VS operable "Fresh Air" Skylights can be opened to create a chimney effect that draws air upward to improve air circulation and air quality within your home.',
  availability: 'IN STOCK',
  dimensions: '47 X 22 X 5',
  material: 'Aluminum',
  finish: 'Charcoal',
  images: [
      'https://images.thdstatic.com/productImages/27ef7d22-0d9c-4e68-9959-bb939110efb2/svn/velux-vented-skylights-vs-c06-2004-40_1000.jpg', 
      'https://images.thdstatic.com/productImages/eb12d321-5e65-47fa-8891-b1f99b2cef0f/svn/velux-vented-skylights-vs-c06-2004-64_1000.jpg',
      'https://images.thdstatic.com/productImages/ebefd694-4c5e-4ab5-a4fc-530f79dc7920/svn/velux-vented-skylights-vs-c06-2004-77_1000.jpg'
      
  ],
  weight: '60 LBS',
  bevel: 'YES',
  shippingDetails: {
  boxedWeight: '63 LBS', 
  shippingDimensions: '48 X 24 X 6',
  method: 'GROUND'
  }
}, 
{
  category: 'Windows',
  type: 'Laminated',
  model: 'Venting Flat Roof Skylight',
  description: 'This insulated roof access skylight has an extra utility feature which provides safe and convenient access to the roof.',
  availability: 'IN STOCK',
  dimensions: '56 X 45 X 7.5',
  material: 'PVC',
  finish: 'White',
  images: [
      'https://images.thdstatic.com/productImages/5e3a4982-77bf-4550-b982-2b0485ae5e2f/svn/fakro-vented-skylights-drf-du6-3648-64_1000.jpg', 
      'https://images.thdstatic.com/productImages/8a1f070f-3e35-4258-a142-d004c1c283a0/svn/fakro-vented-skylights-drf-du6-3648-1f_1000.jpg',
      'https://images.thdstatic.com/productImages/e7f81291-1a52-40f2-b32d-c87b6ecd4501/svn/fakro-vented-skylights-drf-du6-3648-c3_1000.jpg'
      
  ],
  weight: '15 LBS',
  bevel: 'YES',
  shippingDetails: {
  boxedWeight: '20 LBS', 
  shippingDimensions: '60 X 50 X 8',
  method: 'GROUND'
  }
}, 
  {
    category: 'Medicine Cabinets',
    type: 'Illuminated',
    model: 'Rectangular Silver Aluminum Medicine Cabinet',
    description: 'A staple in any master bath or powder room, this 24 in. W x 30 in. H frameless bathroom medicine cabinet has a mirror door for multi-faceted styling. ',
    availability: 'IN STOCK',
    dimensions: '24 X 30 X 5.31',
    material: 'Aluminum',
    finish: 'Silver',
    images: [
        'https://images.thdstatic.com/productImages/0a4670e5-78c6-4b2c-91a4-349d013019a7/svn/silver-exbrite-medicine-cabinets-with-mirrors-hoy1dhmc2430l-64_1000.jpg', 
        'https://images.thdstatic.com/productImages/a3c025e3-07b1-4ea0-9dec-e644c774340a/svn/silver-exbrite-medicine-cabinets-with-mirrors-hoy1dhmc2430l-e1_1000.jpg',
        'https://images.thdstatic.com/productImages/eaf37519-2380-4e1d-b2c7-90105eb9dd15/svn/silver-exbrite-medicine-cabinets-with-mirrors-hoy1dhmc2430l-fa_1000.jpg'
        
    ],
    weight: '33 LBS',
    bevel: 'YES',
    shippingDetails: {
    boxedWeight: '35 LBS', 
    shippingDimensions: '26 X 32 X 6',
    method: 'GROUND'
    }
  }, 
  {
    category: 'Medicine Cabinets',
    type: 'Illuminated',
    model: 'Dimmable Medicine Cabinet with Mirror, LED and Shelves',
    description: 'The ExBrite bathroom medicine cabinet comes with everything you need to create an elegant and modern bathroom, with every convenience right in front of you. ',
    availability: 'IN STOCK',
    dimensions: '48 X 32 X 5',
    material: 'Aluminum',
    finish: 'Silver',
    images: [
        'https://images.thdstatic.com/productImages/d71a77fb-13d3-49d2-a51f-c831f073ac36/svn/silver-exbrite-medicine-cabinets-with-mirrors-dhmc4832v5fx-64.0_max.jpg', 
        'https://images.thdstatic.com/productImages/d40a33d1-0c44-4114-abc7-131d3e8a0e72/svn/silver-exbrite-medicine-cabinets-with-mirrors-dhmc4832v5fx-40_1000.jpg',
        'https://images.thdstatic.com/productImages/4e13829c-8ef0-4cf4-9258-5a904f15db62/svn/silver-exbrite-medicine-cabinets-with-mirrors-dhmc4832v5fx-c3_1000.jpg'
        
    ],
    weight: '74 LBS',
    bevel: 'YES',
    shippingDetails: {
    boxedWeight: '78 LBS', 
    shippingDimensions: '50 X 34 X 8',
    method: 'GROUND'
    }
  }, 
  {
    category: 'Medicine Cabinets',
    type: 'Non-illuminated',
    model: 'H Framed Surface-Mount Bathroom Medicine Cabinet',
    description: 'The Glacier Bay 23-1/8 in. W x 27-7/8 in. H x 7-1/2 in. D White Framed Surface-Mount Bathroom Medicine Cabinet is a great addition to your bathroom or powder room.',
    availability: 'IN STOCK',
    dimensions: '23.13 X 27.88 X 7.5',
    material: 'Wood',
    finish: 'White',
    images: [
        'https://images.thdstatic.com/productImages/277a5f8e-6a6a-46fd-84f4-231c70a0ddd7/svn/white-glacier-bay-medicine-cabinets-without-mirrors-45396-64.0_max.jpg', 
        'https://images.thdstatic.com/productImages/d91cb834-273d-41d2-8f84-633b79e7f99b/svn/white-glacier-bay-medicine-cabinets-without-mirrors-45396-40_1000.jpg',
        'https://images.thdstatic.com/productImages/cb462bb0-f2ad-45b7-879c-e11be6299c10/svn/white-glacier-bay-medicine-cabinets-without-mirrors-45396-31.4_max.jpg'
        
    ],
    weight: '28 LBS',
    bevel: 'YES',
    shippingDetails: {
    boxedWeight: '30 LBS', 
    shippingDimensions: '25 X 38 X 8',
    method: 'GROUND'
    }
  }, 
  {
    category: 'Medicine Cabinets',
    type: 'Non-illuminated',
    model: 'Surface Mount Bathroom Medicine Cabinet with Mirror',
    description: 'A perfect complement to any bathroom style, the Glacier Bay 16 in. W x 26 in. H x 4-1/2 in. D Frameless Recessed or Surface-Mount Bathroom Medicine Cabinet features beveled edges and a classic frameless design.',
    availability: 'IN STOCK',
    dimensions: '29.06 X 18.63 X 7.03',
    material: 'Wood',
    finish: 'White',
    images: [
        'https://images.thdstatic.com/productImages/17293796-f72a-4e8a-a53b-689305fb3d4d/svn/white-glacier-bay-medicine-cabinets-with-mirrors-45406-4f.2_max.jpg', 
        'https://images.thdstatic.com/productImages/1700ae9f-d72f-471f-b86f-e42c1e654b94/svn/white-glacier-bay-medicine-cabinets-with-mirrors-45406-e1.1_max.jpg',
        'https://images.thdstatic.com/productImages/c6639505-7e20-492f-b732-e2a52f56f5f8/svn/white-glacier-bay-medicine-cabinets-with-mirrors-45406-31.3_max.jpg'
        
    ],
    weight: '11.4 LBS',
    bevel: 'YES',
    shippingDetails: {
    boxedWeight: '13 LBS', 
    shippingDimensions: '32 X 20 X 8',
    method: 'GROUND'
    }
  }, 
  {
    category: 'Cabinet Pulls and Handles',
    type: '',
    model: 'European Style Nickel Bar Cabinet Pull',
    description: 'These cabinet pulls also work beautifully on bath storage cabinets, china cabinets and chests of drawers.',
    availability: 'IN STOCK',
    dimensions: '5.75 X .5 X 1.25',
    material: 'Steel',
    finish: 'Nickel',
    images: [
        'https://images.thdstatic.com/productImages/f6738908-04a2-4f90-8928-f9011de976eb/svn/dynasty-hardware-drawer-pulls-p-1001-sn-25pk-64_1000.jpg', 
        'https://images.thdstatic.com/productImages/d8ec3e69-5753-426e-b432-4fbbead0e44c/svn/dynasty-hardware-drawer-pulls-p-1001-sn-25pk-1d_1000.jpg',
        'https://images.thdstatic.com/productImages/0c3db836-33e7-453d-b0ed-695775ff8537/svn/dynasty-hardware-drawer-pulls-p-1001-sn-25pk-e1_1000.jpg'
        
    ],
    weight: '5 LBS',
    bevel: 'YES',
    shippingDetails: {
    boxedWeight: '8 LBS', 
    shippingDimensions: '8 X 2 X 2',
    method: 'GROUND'
    }
  }, 
  {
    category: 'Cabinet Pulls and Handles',
    type: '',
    model: 'Euro Style Solid Cabinet Drawer Bar Pulls',
    description: 'Instantly upgrade the decor in your kitchen, bathroom or bedroom with these extra thick Euro cabinet bar pulls by GlideRite Hardware. ',
    availability: 'IN STOCK',
    dimensions: '6.5 X .56 X 1.25',
    material: 'Steel',
    finish: 'Black',
    images: [
        'https://images.thdstatic.com/productImages/793320bf-0623-4362-9925-cd079c68b453/svn/gliderite-drawer-pulls-4007-128-mb-10-64_1000.jpg', 
        'https://images.thdstatic.com/productImages/53f20a42-4393-4b53-822f-c5e084186cc0/svn/gliderite-drawer-pulls-4007-128-mb-10-1f_1000.jpg',
        'https://images.thdstatic.com/productImages/cac93059-e88a-4483-b999-6840ae357210/svn/gliderite-drawer-pulls-4007-128-mb-10-44_1000.jpg'
        
    ],
    weight: '5 LBS',
    bevel: 'YES',
    shippingDetails: {
    boxedWeight: '8 LBS', 
    shippingDimensions: '8 X 2 X 2',
    method: 'GROUND'
    }
  }, 
  {
    category: 'Cabinet Pulls and Handles',
    type: '',
    model: 'Satin Nickel Cabinet Drawer Pull',
    description: 'The Ethan pull from Liberty has a familiar shape and smooth curves that gives your cabinetry a fresh update.',
    availability: 'IN STOCK',
    dimensions: '4.06 X .77 X .43 ',
    material: 'Zinc',
    finish: 'Nickel',
    images: [
        'https://images.thdstatic.com/productImages/a615580d-179e-473f-a2fe-4c1ddad8f8d1/svn/liberty-drawer-pulls-p13101j-sn-c-64_1000.jpg', 
        'https://images.thdstatic.com/productImages/baf13ad5-a2d8-4c01-a894-76ecf7922a07/svn/liberty-drawer-pulls-p13101j-sn-c-e1_1000.jpg',
        'https://images.thdstatic.com/productImages/fd773345-d35a-4140-beae-7f572c564281/svn/liberty-drawer-pulls-p13101j-sn-c-66_1000.jpg'
        
    ],
    weight: '0 LBS',
    bevel: 'YES',
    shippingDetails: {
    boxedWeight: '8 LBS', 
    shippingDimensions: '6 X 3 X 3',
    method: 'GROUND'
    }
  }, 
]








const [filteredProducts, setFilteredProducts] = useState(allProducts);

  const handleFilter = (category, subcategory) => {
    // setSelectedCategory(category);
    // setSelectedSubcategory(subcategory);

    const filtered = allProducts.filter((product) => {
        if (category && category !== 'All' && product.category !== category) {
          return false;
        }
        if (subcategory && subcategory !== 'All' && product.type !== subcategory) {
          return false;
        }
        return true;
      });
  
      setFilteredProducts(filtered);
    };

  // const selectedCategoryObj = categories.find((category) => category.name === selectedCategory);

  function handleClick(product){
    navigate('/product-page', {state: product})
  }

  return (
    <div className="products">
      <FilterBar
        categories={categories}
        subcategories={subcategories}
        handleFilter={handleFilter}
        className="zing"
      />

      {/* Product listing */}
      <div className="product-grid">
        {filteredProducts.map((product) => (
        // <NavLink key={product.id} to={`/`} className="product-card" product={product}>
            <div key={product.model} onClick={()=> {handleClick(product)}} className="product-card">
            <h2>{product.model}</h2>
            <div className="product-image">
              <img src={product.images[0]} alt={product.model} />
            </div>
            <div className="product-info">
              <h3>{product.type}</h3>
              <p>- {product.dimensions}</p>
              <p>- {product.material}</p>
              <p>- {product.availability}</p>
            </div>
            </div>
        // </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Products;

    // {
    //     category: 'Light Fixtures',
    //     products: []
    // }, 
    // {
    //     category: 'Glass Railing Systems',
    //     products: []
    // }, 
    // {
    //     category: 'Windows',
    //     products: []
    // }, 
    // {
    //     category: 'Medicine Cabinets',
    //     products: []
    // }, 
    // {
    //     category: 'Cabinet Pulls and Handles',
    //     products: []
    // }, 
    // {
    //     category: 'Shower Glass Enclosures',
    //     products: []
    // }, 
    // {
    //     category: 'Bathroom Accessories',
    //     products: []
    // }, 
    // {
    //     category: 'Window Shades',
    //     products: []
    // }, 
    // {
    //     category: 'Solid Wood Doors',
    //     products: []
    // }, 
    // {
    //     category: 'Plumbing Fixtures',
    //     products: []
    // }

    // const categories = [
    //     {
    //       name: 'Light Fixtures',
    //       subcategories: ['Pendant', 'Sconce', 'Flush Mount', 'Recessed', 'Under Cabinet'],
    //     },
    //     {
    //       name: 'Glass Railing Systems',
    //       subcategories: ['Indoor', 'Outdoor'],
    //     },
    //     {
    //       name: 'Windows',
    //       subcategories: ['Tempered', 'Laminated'],
    //     },
    //     {
    //       name: 'Medicine Cabinets',
    //       subcategories: ['Illuminated', 'Non-illuminated'],
    //     },
    //     {
    //       name: 'Mirrors',
    //       subcategories: ['Acrylic', 'Stainless Steel & Plating', 'Iron', 'Leather', 'Mirror Frame', 'Panel', 'Traditional & Transiotional'],
    //     },
    //     {
    //       name: 'Cabinet Pulls and Handles',
    //       subcategories: [],
    //     },
    //     {
    //       name: 'Shower Glass Enclosures',
    //       subcategories: [],
    //     },
    //     {
    //       name: 'Bathroom Accessories',
    //       subcategories: ['Towel Bars', 'Grab Bars', 'Toilet Paper Holders', 'Robe Hooks'],
    //     },
    //     {
    //       name: 'Window Shades',
    //       subcategories: ['Manual', 'Electric'],
    //     },
    //     {
    //       name: 'Solid Wood Doors',
    //       subcategories: ["With Frame", "Without Frame", "Interior"],
    //     },
    //     {
    //       name: 'Plumbing Fixtures',
    //       subcategories: ['Sinks', 'Faucets', 'Showers'],
    //     },
    //   ];
    

    //needs another pick 
    // {
    //   category: 'Mirrors',
    //   type: 'Stainless Steel & Plating',
    //   model: '20668-BN',
    //   description: 'Hand welded stainless steel finished in black nickel. Beveled center mirror. Cleat hardware provided.',
    //   availability: 'IN STOCK',
    //   dimensions: '24 X 40',
    //   material: 'STAINLESS STEEL, WOOD & MIRROR',
    //   finish: 'BLACK NICKEL',
    //   images: [
    //       'https://www.mirrorhome.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/2/0/20669-bn_front_1500-1.jpg',
    //       'https://www.mirrorhome.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/2/0/20669-bn_side_1500.jpg'
    //   ],
    //   weight: '32.00 LBS',
    //   bevel: 'YES',
    //   shippingDetails: {
    //     boxedWeight: '42.00 LBS',
    //     shippingDimensions: '41 X 51 X 8',
    //     method: 'GROUND'
    //   }
    // }, 

    // {
    //   category: 'Mirrors',
    //   type: 'Stainless Steel & Plating',
    //   model: '20780-BN',
    //   description: 'Rectangle mirror with hand cut black nickel details. Non-beveled center mirror. Cleat hardware provided.',
    //   availability: 'IN STOCK',
    //   dimensions: '24 X 40',
    //   material: 'STAINLESS STEEL, WOOD & MIRROR',
    //   finish: 'BLACK NICKEL',
    //   images: ['https://www.mirrorhome.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/0/20780-bn_1.jpg',
    //   'https://www.mirrorhome.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/0/20780-bn_side_1.jpg',

    //   ],
    //   weight: '27.00 LBS',
    //   bevel: 'YES',
    //   shippingDetails: {
    //     boxedWeight: '53.00 LBS',
    //     shippingDimensions: '41 X 52 X 8',
    //     method: 'GROUND'
    //   }
    // }
