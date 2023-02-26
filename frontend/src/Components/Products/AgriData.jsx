const AgriData = [
  "Agriculture & Gardening - Made In Japan",
  "Agriculture Implements",
  "Artificial Gras",
  "Blowers",
  "Brush Cutter and Accessories",
  "Chaff Cutter",
];
export default AgriData;

const Breakpoints = (base, sm, md) => {
  if (base.includes("rem") && sm.includes("rem") && md.includes("rem")) {
    // console.log("Yes")
    return { base: base, sm: sm, md: md };
  } else {
    // console.log("No")
    if (!base.includes("rem")) {
      base = base + "rem";
    }
    if (!sm.includes("rem")) {
      sm = sm + "rem";
    }
    if (!md.includes("rem")) {
      md = md + "rem";
    }
    return { base: base, sm: sm, md: md };
  }
};

export { Breakpoints };

export const AgriDataArray = () => {
  return [
    {
      title:
        "AgriPro Rice Mill Roller Light for Butterfly Combined Rice Mill APCRM6N9FC",
      price: 2480,
      quantity: 1,
      brand: "AgriPro",
      category: "Agriculture Garden & Landscaping",
      sub_category: "Grain Processing Machine",
      images: [
        {
          image_url:
            "https://static1.industrybuying.com/products/agriculture-garden-landscaping/grain-processing-machine/AGR.GRA.105747383_1668203505142.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/agriculture-garden-landscaping/grain-processing-machine/AGR.GRA.105747383_1668203506602.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/agriculture-garden-landscaping/grain-processing-machine/AGR.GRA.105747383_1668203506121.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/agriculture-garden-landscaping/grain-processing-machine/AGR.GRA.105747383_1668203505560.webp",
        },
      ],
    },
    {
      title: "Rico Italy Rice Mill with Motor P4RI RF 86",
      price: 31800,
      quantity: 1,
      brand: "Rico Italy",
      category: "Agriculture Garden & Landscaping",
      sub_category: "Grain Processing Machine",
      images: [
        {
          image_url:
            "https://static1.industrybuying.com/products/agriculture-garden-landscaping/grain-processing-machine/AGR.GRA.45857918_1668211409477.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/agriculture-garden-landscaping/grain-processing-machine/AGR.GRA.45857918_1668211409914.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/agriculture-garden-landscaping/grain-processing-machine/AGR.GRA.45857918_1668211410544.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/agriculture-garden-landscaping/grain-processing-machine/AGR.GRA.45857918_1668211409477.webp",
        },
      ],
    },
    {
      title: "AgriPro Mini Power Tiller APMT52",
      price: 10900,
      quantity: 1,
      brand: "AgriPro",
      category: "Agriculture Garden & Landscaping",
      sub_category: "Tillers and Cultivator",
      images: [
        {
          image_url:
            "https://static1.industrybuying.com/products/agriculture-garden-landscaping/tillers-and-cultivator/tillers/AGR.TIL.41517227_1667990253322.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/agriculture-garden-landscaping/tillers-and-cultivator/tillers/AGR.TIL.41517227_1667990253830.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/agriculture-garden-landscaping/tillers-and-cultivator/tillers/AGR.TIL.41517227_1667990254350.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/agriculture-garden-landscaping/tillers-and-cultivator/tillers/AGR.TIL.41517227_1667990254892.webp",
        },
      ],
    },
    {
      title: "Agripro Power Cultivator 7 HP Gear Transmission APC100FQ",
      price: 39900,
      quantity: 1,
      brand: "AgriPro",
      category: "Agriculture Garden & Landscaping",
      sub_category: "Tillers and Cultivator",
      images: [
        {
          image_url:
            "https://static1.industrybuying.com/products/agriculture-garden-landscaping/tillers-and-cultivator/cultivator/AGR.CUL.42018780_1668009262446.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/agriculture-garden-landscaping/tillers-and-cultivator/cultivator/AGR.CUL.42018780_1668009262878.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/agriculture-garden-landscaping/tillers-and-cultivator/cultivator/AGR.CUL.42018780_1668009263483.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/agriculture-garden-landscaping/tillers-and-cultivator/cultivator/AGR.CUL.42018780_1668009263950.webp",
        },
      ],
    },
    {
      title:
        "Agripro 28mm/26mm Round BladeTiller Attachment for Brush Cutter APTARB1428",
      price: 2480,
      quantity: 0,
      brand: "AgriPro",
      category: "Agriculture Garden & Landscaping",
      sub_category: "Tillers and Cultivator",
      images: [
        {
          image_url:
            "https://static1.industrybuying.com/products/agriculture-garden-landscaping/tillers-and-cultivator/tillers/AGR.TIL.26824631_1668333338142.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/agriculture-garden-landscaping/tillers-and-cultivator/tillers/AGR.TIL.26824631_1668333338718.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/agriculture-garden-landscaping/tillers-and-cultivator/tillers/AGR.TIL.26824631_1668333339256.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/agriculture-garden-landscaping/tillers-and-cultivator/tillers/AGR.TIL.26824631_1668333338718.webp",
        },
      ],
    },
    {
      title:
        "Agripro APC-DTB Deep Tilling Blade for 7 & 9 HP Cultivator Set of 2",
      price: 5280,
      quantity: 0,
      brand: "AgriPro",
      category: "Agriculture Garden & Landscaping",
      sub_category: "Tillers and Cultivator",
      images: [
        {
          image_url:
            "https://static1.industrybuying.com/products/agriculture-garden-landscaping/tillers-and-cultivator/cultivator-attachments/AGR.CUL.47134192_1668384816466.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/agriculture-garden-landscaping/tillers-and-cultivator/cultivator-attachments/AGR.CUL.47134192_1668384816997.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/agriculture-garden-landscaping/tillers-and-cultivator/cultivator-attachments/AGR.CUL.47134192_1668384817534.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/agriculture-garden-landscaping/tillers-and-cultivator/cultivator-attachments/AGR.CUL.47134192_1668384817534.webp",
        },
      ],
    },
    {
      title:
        "Katyayani NPK 20 20 20 Fertilizer With 2 Sample -Mix Micronutrients And Organic Humic Acid 960gm",
      price: 158,
      quantity: 1,
      brand: "Katyayani",
      category: "Agriculture Garden & Landscaping",
      sub_category: "Fertilizer and Pest Control",
      images: [
        {
          image_url:
            "https://static1.industrybuying.com/products/agriculture-garden-landscaping/fertilizer-and-pest-control/fertilizer/AGR.FER.106181708_1668247168417.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/agriculture-garden-landscaping/fertilizer-and-pest-control/fertilizer/AGR.FER.106181708_1668247168035.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/agriculture-garden-landscaping/fertilizer-and-pest-control/fertilizer/AGR.FER.106181708_1668247168417.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/agriculture-garden-landscaping/fertilizer-and-pest-control/fertilizer/AGR.FER.106181708_1668247168978.webp",
        },
      ],
    },
    {
      title: "Katyayani Flowering Fertilizer Booster 250ml",
      price: 258,
      quantity: 0,
      brand: "Katyayani",
      category: "Agriculture Garden & Landscaping",
      sub_category: "Fertilizer and Pest Control",
      images: [
        {
          image_url:
            "https://static1.industrybuying.com/products/agriculture-garden-landscaping/fertilizer-and-pest-control/fertilizer/AGR.FER.46181651_1668247160635.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/agriculture-garden-landscaping/fertilizer-and-pest-control/fertilizer/AGR.FER.46181651_1668247161162.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/agriculture-garden-landscaping/fertilizer-and-pest-control/fertilizer/AGR.FER.46181651_1668247161470.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/agriculture-garden-landscaping/fertilizer-and-pest-control/fertilizer/AGR.FER.46181651_1668247160635.webp",
        },
      ],
    },
    {
      title: "HPM SUPER SONATA Herbal Extract Natural seaweed 250 ml",
      price: 628,
      quantity: 0,
      brand: "HPM",
      category: "Agriculture Garden & Landscaping",
      sub_category: "Fertilizer and Pest Control",
      images: [
        {
          image_url:
            "https://static1.industrybuying.com/products/agriculture-garden-landscaping/fertilizer-and-pest-control/pesticide/AGR.PES.26530477_1668292800081.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/agriculture-garden-landscaping/fertilizer-and-pest-control/pesticide/AGR.PES.26530477_1668292800658.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/agriculture-garden-landscaping/fertilizer-and-pest-control/pesticide/AGR.PES.26530477_1668292801131.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/agriculture-garden-landscaping/fertilizer-and-pest-control/pesticide/AGR.PES.26530477_1668292800081.webp",
        },
      ],
    },
    {
      title: "Katyayani All In 1 Organic Fungicide 100gm",
      price: 199,
      quantity: 0,
      brand: "Katyayani",
      category: "Agriculture Garden & Landscaping",
      sub_category: "Fertilizer and Pest Control",
      images: [
        {
          image_url:
            "https://static1.industrybuying.com/products/agriculture-garden-landscaping/fertilizer-and-pest-control/fungicide/AGR.FUN.26181733_1668247173507.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/agriculture-garden-landscaping/fertilizer-and-pest-control/fungicide/AGR.FUN.26181733_1668247174008.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/agriculture-garden-landscaping/fertilizer-and-pest-control/fungicide/AGR.FUN.26181733_1668247174496.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/agriculture-garden-landscaping/fertilizer-and-pest-control/fungicide/AGR.FUN.26181733_1668247174992.webp",
        },
      ],
    },
    {
      title:
        "IB Basics Black Full Back Mesh Office Chair SS026 Pack of 2 Piece",
      price: 5680,
      quantity: 0,
      brand: "IB BASICS",
      category: "Office Supplies",
      sub_category: "Office Furniture",
      images: [
        {
          image_url:
            "https://static1.industrybuying.com/products/office-supplies/office-furniture/office-chairs/OFF.OFF.91536387_1667991100244.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/office-supplies/office-furniture/office-chairs/OFF.OFF.91536387_1667991101444.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/office-supplies/office-furniture/office-chairs/OFF.OFF.91536387_1667991101933.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/office-supplies/office-furniture/office-chairs/OFF.OFF.91536387_1667991100790.webp",
        },
      ],
    },
    {
      title: "ERGO office Chair combo RSC - 547 Pack of 2 piece",
      price: 9990,
      quantity: 2,
      brand: "ERGO Chairs",
      category: "Office Supplies",
      sub_category: "Office Furniture",
      images: [
        {
          image_url:
            "https://static1.industrybuying.com/products/office-supplies/office-furniture/office-chairs/OFF.OFF.101016715_1667972433598.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/office-supplies/office-furniture/office-chairs/OFF.OFF.101016715_1667972434136.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/office-supplies/office-furniture/office-chairs/OFF.OFF.101016715_1667972434600.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/office-supplies/office-furniture/office-chairs/OFF.OFF.101016715_1667972435199.webp",
        },
      ],
    },
    {
      title: "IB BASICS Stainless Steel Waiting Bench 3 Seat SW003",
      price: 9580,
      quantity: 0,
      brand: "IB BASICS",
      category: "Office Supplies",
      sub_category: "Office Furniture",
      images: [
        {
          image_url:
            "https://static1.industrybuying.com/products/office-supplies/office-furniture/office-chairs/OFF.OFF.81815767_1668000249257.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/office-supplies/office-furniture/office-chairs/OFF.OFF.81815767_1668000249816.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/office-supplies/office-furniture/office-chairs/OFF.OFF.81815767_1668000250283.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/office-supplies/office-furniture/office-chairs/OFF.OFF.81815767_1668000250947.webp",
        },
      ],
    },
    {
      title: "Roarwood High Back Tan Revolving Executive Office Chair RW027",
      price: 5480,
      quantity: 1,
      brand: "RoarWood",
      category: "Office Supplies",
      sub_category: "Office Furniture",
      images: [
        {
          image_url:
            "https://static1.industrybuying.com/products/office-supplies/office-furniture/office-chairs/OFF.OFF.46252706_1668257971747.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/office-supplies/office-furniture/office-chairs/OFF.OFF.46252706_1668257973567.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/office-supplies/office-furniture/office-chairs/OFF.OFF.46252706_1668257974565.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/office-supplies/office-furniture/office-chairs/OFF.OFF.46252706_1668257972669.webp",
        },
      ],
    },
    {
      title: "JK Copier Paper A4 Size 75GSM",
      price: 1640,
      quantity: 0,
      brand: "JK",
      category: "Office Supplies",
      sub_category: "Paper & Paper Products",
      images: [
        {
          image_url:
            "https://static1.industrybuying.com/products/office-supplies/paper-paper-products/copy-multipurpose-paper/OF.OF.PA.CO.CO.315981_1667853831599.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/office-supplies/paper-paper-products/copy-multipurpose-paper/OF.OF.PA.CO.CO.315981_1667853832042.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/office-supplies/paper-paper-products/copy-multipurpose-paper/OF.OF.PA.CO.CO.315981_1667853832532.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/office-supplies/paper-paper-products/copy-multipurpose-paper/OF.OF.PA.CO.CO.315981_1667853833755.webp",
        },
      ],
    },
    {
      title: "Paperone Digital inkjet & Laser Paper A4 Size 100GSM",
      price: 499,
      quantity: 0,
      brand: "Paperone",
      category: "Office Supplies",
      sub_category: "Paper & Paper Products",
      images: [
        {
          image_url:
            "https://static1.industrybuying.com/products/office-supplies/paper-paper-products/copy-multipurpose-paper/OFF.COP.54964230_1668147909740.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/office-supplies/paper-paper-products/copy-multipurpose-paper/OFF.COP.54964230_1668147910167.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/office-supplies/paper-paper-products/copy-multipurpose-paper/OFF.COP.54964230_1668147910559.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/office-supplies/paper-paper-products/copy-multipurpose-paper/OFF.COP.54964230_1668147911037.webp",
        },
      ],
    },
    {
      title: "Texet LMA4-VX Automatic Laminator with Jam Release Control",
      price: 1280,
      quantity: 0,
      brand: "Texet",
      category: "Office Supplies",
      sub_category: "Binding & Lamination",
      images: [
        {
          image_url:
            "https://static1.industrybuying.com/products/office-supplies/binding-lamination/laminating-machines/OFF.LAM.45302505_1668171438385.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/office-supplies/binding-lamination/laminating-machines/OFF.LAM.45302505_1668171439711.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/office-supplies/binding-lamination/laminating-machines/OFF.LAM.45302505_1668171441226.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/office-supplies/binding-lamination/laminating-machines/OFF.LAM.45302505_1668171440690.webp",
        },
      ],
    },
    {
      title:
        "GBC CombBind C150PRO Comb Binding Machine with Large Capacity Clipping Tray and 20 Sheet Punch Capacity, 450 Sheet Bind Capacity",
      price: 31800,
      quantity: 4,
      brand: "GBC",
      category: "Office Supplies",
      sub_category: "Binding & Lamination",
      images: [
        {
          image_url:
            "https://static1.industrybuying.com/products/office-supplies/binding-lamination/comb-binding-machine/OFF.COM.106471508_1668285193929.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/office-supplies/binding-lamination/comb-binding-machine/OFF.COM.106471508_1668285194536.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/office-supplies/binding-lamination/comb-binding-machine/OFF.COM.106471508_1668285194939.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/office-supplies/binding-lamination/comb-binding-machine/OFF.COM.106471508_1668285196723.webp",
        },
      ],
    },
    {
      title: "GBC 1712000 A4 2 Roller Laminating Machine",
      price: 288000,
      quantity: 0,
      brand: "GBC",
      category: "Office Supplies",
      sub_category: "Binding & Lamination",
      images: [
        {
          image_url:
            "https://static1.industrybuying.com/products/office-supplies/binding-lamination/laminating-machines/OFF.LAM.87761716_1672925934157.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/office-supplies/binding-lamination/laminating-machines/OFF.LAM.87761716_1672925934608.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/office-supplies/binding-lamination/laminating-machines/OFF.LAM.87761716_1672925935109.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/office-supplies/binding-lamination/laminating-machines/OFF.LAM.87761716_1672925935109.webp",
        },
      ],
    },
    {
      title:
        "Immech 4 Inch (100L X 2.5W) Multi Purpose Self Locking Cable Tie UV Resistant Black (Pack of 100)",
      price: 162,
      quantity: 0,
      brand: "Immech",
      category: "Electrical",
      sub_category: "Cable Accessories",
      images: [
        {
          image_url:
            "https://static1.industrybuying.com/products/electrical/cable-accessories/cable-ties/ELE.CAB.67478447_1669817508584.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/electrical/cable-accessories/cable-ties/ELE.CAB.67478447_1669817510129.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/electrical/cable-accessories/cable-ties/ELE.CAB.67478447_1669817511171.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/electrical/cable-accessories/cable-ties/ELE.CAB.67478447_1669817510714.webp",
        },
      ],
    },
    {
      title: "Selectric 300x4.8 mm Nylon Cable Ties White ( Pack of 100 )",
      price: 188,
      quantity: 0,
      brand: "Selectric",
      category: "Electrical",
      sub_category: "Cable Accessories",
      images: [
        {
          image_url:
            "https://static1.industrybuying.com/products/electrical/cable-accessories/cable-ties/ELE.CAB.84227932_1668109237634.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/electrical/cable-accessories/cable-ties/ELE.CAB.84227932_1668109238080.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/electrical/cable-accessories/cable-ties/ELE.CAB.84227932_1668109238543.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/electrical/cable-accessories/cable-ties/ELE.CAB.84227932_1668109237634.webp",
        },
      ],
    },
    {
      title:
        "Immech 1mm Fiberglass Insulation Sleeves, Silicone Coated Wire Sleeve for Good Wire Protection 1 Meter",
      price: 264,
      quantity: 0,
      brand: "Immech",
      category: "Electrical",
      sub_category: "Cable Accessories",
      images: [
        {
          image_url:
            "https://static1.industrybuying.com/products/electrical/cable-accessories/spare-accessories/ELE.SPA.57220707_1668401012191.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/electrical/cable-accessories/spare-accessories/ELE.SPA.57220707_1668401012767.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/electrical/cable-accessories/spare-accessories/ELE.SPA.57220707_1668401013173.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/electrical/cable-accessories/spare-accessories/ELE.SPA.57220707_1668401013762.webp",
        },
      ],
    },
    {
      title: "Symphony Storm 70i Desert Tower Air Cooler 70-litres with Remote",
      price: 21800,
      quantity: 0,
      brand: "Symphony",
      category: "Electrical",
      sub_category: "Electrical Appliances",
      images: [
        {
          image_url:
            "https://static1.industrybuying.com/products/electrical/electrical-appliances/air-coolers/ELE.COO.71517737_1667990297210.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/electrical/electrical-appliances/air-coolers/ELE.COO.71517737_1667990298372.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/electrical/electrical-appliances/air-coolers/ELE.COO.71517737_1667990298875.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/electrical/electrical-appliances/air-coolers/ELE.COO.71517737_1667990299300.webp",
        },
      ],
    },
    {
      title:
        "Havells Ventil Air DSP 230mm Exhaust Fan (Choco Brown) (FHVVEMTBRN09)",
      price: 1990,
      quantity: 0,
      brand: "Havells",
      category: "Electrical",
      sub_category: "Electrical Appliances",
      images: [
        {
          image_url:
            "https://static1.industrybuying.com/products/electrical/electrical-appliances/exhaust-fan/EL.FA.EX.1635716_1667938467690.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/electrical/electrical-appliances/exhaust-fan/EL.FA.EX.1635716_1667938468131.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/electrical/electrical-appliances/exhaust-fan/EL.FA.EX.1635716_1667938469124.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/electrical/electrical-appliances/exhaust-fan/EL.FA.EX.1635716_1667938470871.webp",
        },
      ],
    },
    {
      title:
        "Candes Florence 1200 mm Energy Saving 3 Blade Ceiling Fan (Gold, Pack of 2)",
      price: 3780,
      quantity: 0,
      brand: "Candes",
      category: "Electrical",
      sub_category: "Electrical Appliances",
      images: [
        {
          image_url:
            "https://static1.industrybuying.com/products/electrical/electrical-appliances/ceiling-fans/ELE.CEI.97690543_1672288634132.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/electrical/electrical-appliances/ceiling-fans/ELE.CEI.97690543_1672288634629.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/electrical/electrical-appliances/ceiling-fans/ELE.CEI.97690543_1672288635107.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/electrical/electrical-appliances/ceiling-fans/ELE.CEI.97690543_1672288635973.webp",
        },
      ],
    },
    {
      title:
        "ELC T-200D 200Ws Travel Voltage Converter 220v to 110v Step Down Converter",
      price: 2680,
      quantity: 0,
      brand: "ELC",
      category: "Electrical",
      sub_category: "Generators and Transformers",
      images: [
        {
          image_url:
            "https://static1.industrybuying.com/products/electrical/generators-and-transformers/transformer/ELE.TRA.56135213_1668240524044.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/electrical/generators-and-transformers/transformer/ELE.TRA.56135213_1668240525548.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/electrical/generators-and-transformers/transformer/ELE.TRA.56135213_1668240526207.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/electrical/generators-and-transformers/transformer/ELE.TRA.56135213_1668240527544.webp",
        },
      ],
    },
    {
      title:
        "LiteFuze LT-750 750W Step Down Voltage Transformer 220V to 110V Voltage Converter",
      price: 6870,
      quantity: 0,
      brand: "LiteFuze",
      category: "Electrical",
      sub_category: "Generators and Transformers",
      images: [
        {
          image_url:
            "https://static1.industrybuying.com/products/electrical/generators-and-transformers/transformer/ELE.TRA.26135242_1668240534828.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/electrical/generators-and-transformers/transformer/ELE.TRA.26135242_1668240535364.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/electrical/generators-and-transformers/transformer/ELE.TRA.26135242_1668240536268.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/electrical/generators-and-transformers/transformer/ELE.TRA.26135242_1668240536772.webp",
        },
      ],
    },
    {
      title: "Kalinga Plus 2.5 Sq.mm (Length 90 m) FR PVC Insulated Cable Red",
      price: 1480,
      quantity: 0,
      brand: "Kalinga",
      category: "Electrical",
      sub_category: "Cables and Wires",
      images: [
        {
          image_url:
            "https://static1.industrybuying.com/products/electrical/cables-and-wires/flame-retardant-fr-house-wires/EL.CA.HO.HA.169532_1673956439888.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/electrical/cables-and-wires/flame-retardant-fr-house-wires/EL.CA.HO.HA.169532_1673956440884.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/electrical/cables-and-wires/flame-retardant-fr-house-wires/EL.CA.HO.HA.169532_1673956441494.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/electrical/cables-and-wires/flame-retardant-fr-house-wires/EL.CA.HO.HA.169532_1673956443619.webp",
        },
      ],
    },
    {
      title:
        "Super Gec Premium 0.75 mm 2 Core Multi Strand FR Copper Wire Black (10m Roll)",
      price: 258,
      quantity: 0,
      brand: "SUPER GEC",
      category: "Electrical",
      sub_category: "Cables and Wires",
      images: [
        {
          image_url:
            "https://static1.industrybuying.com/products/electrical/cables-and-wires/flame-retardant-fr-house-wires/ELE.FLA.37807587_1673549680430.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/electrical/cables-and-wires/flame-retardant-fr-house-wires/ELE.FLA.37807587_1673549681007.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/electrical/cables-and-wires/flame-retardant-fr-house-wires/ELE.FLA.37807587_1673549682725.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/electrical/cables-and-wires/flame-retardant-fr-house-wires/ELE.FLA.37807587_1673549682234.webp",
        },
      ],
    },
    {
      title:
        "LG Gram Intel Core i5 8th Gen Laptop 14Z980-G.AP52A2 14 Inch (8GB-256GB SSD-Window 10 Pro) Dark Silver",
      price: 68900,
      quantity: 0,
      brand: "LG",
      category: "IT & Electronics",
      sub_category: "Laptops",
      images: [
        {
          image_url:
            "https://static1.industrybuying.com/products/it-electronics/laptops/ITE.LAP.97325000_1668418319420.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/it-electronics/laptops/ITE.LAP.97325000_1668418319931.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/it-electronics/laptops/ITE.LAP.97325000_1668418320411.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/it-electronics/laptops/ITE.LAP.97325000_1668418321329.webp",
        },
      ],
    },
    {
      title:
        "Lenovo i7-1165G7,AX201,8 +8 GB,512GB SSD M.2 2280 NVMe TLC OP,Win 10 Pro No OA 2.1MFG Flag Intel Iris Xe Graphics Fingerprint BK,3 Cell WLAN WLAN Card",
      price: 118000,
      quantity: 0,
      brand: "Lenovo",
      category: "IT & Electronics",
      sub_category: "Laptops",
      images: [
        {
          image_url:
            "https://static1.industrybuying.com/products/it-electronics/laptops/ITE.LAP.97806103_1673527393808.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/it-electronics/laptops/ITE.LAP.97806103_1673527396279.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/it-electronics/laptops/ITE.LAP.97806103_1673527395925.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/it-electronics/laptops/ITE.LAP.97806103_1673527395482.webp",
        },
      ],
    },
    {
      title:
        "Dell Inspiron 3511 Laptop Intel i3-1115G4 8 GB/512 GB SSD 15.6 Inch Win 11 + MS Office H&S 2019 Carbon Black",
      price: 48000,
      quantity: 0,
      brand: "Dell",
      category: "IT & Electronics",
      sub_category: "Laptops",
      images: [
        {
          image_url:
            "https://static1.industrybuying.com/products/it-electronics/laptops/ITE.LAP.57773002_1673009949232.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/it-electronics/laptops/ITE.LAP.57773002_1673009949768.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/it-electronics/laptops/ITE.LAP.57773002_1673009950437.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/it-electronics/laptops/ITE.LAP.57773002_1673009950886.webp",
        },
      ],
    },
    {
      title:
        "Audiovan Alloy Steel Classic Design Stainless Steel TV Tripod Stand 72 inch",
      price: 7990,
      quantity: 3,
      brand: "Audiovan",
      category: "IT & Electronics",
      sub_category: "Projectors & Accessories",
      images: [
        {
          image_url:
            "https://static1.industrybuying.com/products/it-electronics/projectors-accessories/projector-tripod-stand/ITE.PRO.66606683_1668303398840.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/it-electronics/projectors-accessories/projector-tripod-stand/ITE.PRO.66606683_1668303398232.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/it-electronics/projectors-accessories/projector-tripod-stand/ITE.PRO.66606683_1668303399428.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/it-electronics/projectors-accessories/projector-tripod-stand/ITE.PRO.66606683_1668303399946.webp",
        },
      ],
    },
    {
      title:
        "Egate O9 Pro Automatic Smart Projector Native Full HD 1080p + 4K Support 6D Digital Correction| Android 9 O52Q62",
      price: 29900,
      quantity: 0,
      brand: "Egate",
      category: "IT & Electronics",
      sub_category: "Projectors & Accessories",
      images: [
        {
          image_url:
            "https://static1.industrybuying.com/products/it-electronics/projectors-accessories/projectors/ITE.PRO.57342944_1668577703919.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/it-electronics/projectors-accessories/projectors/ITE.PRO.57342944_1668577704620.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/it-electronics/projectors-accessories/projectors/ITE.PRO.57342944_1668577705351.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/it-electronics/projectors-accessories/projectors/ITE.PRO.57342944_1668577704620.webp",
        },
      ],
    },
    {
      title: "Play MP6 WIFI Full HD LED Projector (White;Black)",
      price: 11800,
      quantity: 0,
      brand: "Play",
      category: "IT & Electronics",
      sub_category: "Projectors & Accessories",
      images: [
        {
          image_url:
            "https://static1.industrybuying.com/products/it-electronics/projectors-accessories/projectors/ITE.PRO.37635512_1671618870196.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/it-electronics/projectors-accessories/projectors/ITE.PRO.37635512_1671618871135.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/it-electronics/projectors-accessories/projectors/ITE.PRO.37635512_1671618871716.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/it-electronics/projectors-accessories/projectors/ITE.PRO.37635512_1671618873420.webp",
        },
      ],
    },
    {
      title:
        "Zebronics Zeb-Thunder Wireless Bluetooth Over The Ear Headphone with Mic Blue",
      price: 578,
      quantity: 0,
      brand: "Zebronics",
      category: "IT & Electronics",
      sub_category: "Audio",
      images: [
        {
          image_url:
            "https://static1.industrybuying.com/products/it-electronics/audio/headphones/ITE.HEA.75166200_1668161214584.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/it-electronics/audio/headphones/ITE.HEA.75166200_1668161215183.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/it-electronics/audio/headphones/ITE.HEA.75166200_1668161215757.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/it-electronics/audio/headphones/ITE.HEA.75166200_1668161214584.webp",
        },
      ],
    },
    {
      title: "Ptron Tangent Duo In-Ear Wireless Neckband (Black)",
      price: 458,
      quantity: 0,
      brand: "pTron",
      category: "IT & Electronics",
      sub_category: "Audio",
      images: [
        {
          image_url:
            "https://static1.industrybuying.com/products/it-electronics/audio/headphones/ITE.HEA.47590907_1671028560263.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/it-electronics/audio/headphones/ITE.HEA.47590907_1671028560810.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/it-electronics/audio/headphones/ITE.HEA.47590907_1671028561422.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/it-electronics/audio/headphones/ITE.HEA.47590907_1671028562618.webp",
        },
      ],
    },
    {
      title: "boAt Airdopes 131 Wireless Earbuds Active Black",
      price: 1380,
      quantity: 0,
      brand: "Boat",
      category: "IT & Electronics",
      sub_category: "Audio",
      images: [
        {
          image_url:
            "https://static1.industrybuying.com/products/it-electronics/audio/headphones/COR.EAR.55666136_1668198156370.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/it-electronics/audio/headphones/COR.EAR.55666136_1668198156863.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/it-electronics/audio/headphones/COR.EAR.55666136_1668198157373.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/it-electronics/audio/headphones/COR.EAR.55666136_1668198156370.webp",
        },
      ],
    },
    {
      title: "Umeister HEF-81 1-Tank 1-Basket Electric Fryer - 6Ltr",
      price: 2980,
      quantity: 0,
      brand: "UMeister",
      category: "Furniture, Hospitality and Food Service",
      sub_category: "Food Service & Storage Equipment",
      images: [
        {
          image_url:
            "https://static1.industrybuying.com/products/furniture-hospitality-and-food-service/food-service-storage-equipment/FUR.FOO.95438722_1668182284316.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/furniture-hospitality-and-food-service/food-service-storage-equipment/FUR.FOO.95438722_1668182285226.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/furniture-hospitality-and-food-service/food-service-storage-equipment/FUR.FOO.95438722_1668182286642.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/furniture-hospitality-and-food-service/food-service-storage-equipment/FUR.FOO.95438722_1668182289227.webp",
        },
      ],
    },
    {
      title:
        "UMeister Heavy Duty 4 Slice Stainless Steel Electric Bread Toaster HET-4",
      price: 6490,
      quantity: 0,
      brand: "UMeister",
      category: "Furniture, Hospitality and Food Service",
      sub_category: "Food Service & Storage Equipment",
      images: [
        {
          image_url:
            "https://static1.industrybuying.com/products/furniture-hospitality-and-food-service/food-service-storage-equipment/FUR.FOO.25438732_1668182289692.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/furniture-hospitality-and-food-service/food-service-storage-equipment/FUR.FOO.25438732_1668182291467.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/furniture-hospitality-and-food-service/food-service-storage-equipment/FUR.FOO.25438732_1668182291978.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/furniture-hospitality-and-food-service/food-service-storage-equipment/FUR.FOO.25438732_1668182290549.webp",
        },
      ],
    },
    {
      title: "Kitchenrama 1 kW French Fries Chips Dump KW 819",
      price: 19800,
      quantity: 0,
      brand: "Kitchenrama",
      category: "Furniture, Hospitality and Food Service",
      sub_category: "Food Service & Storage Equipment",
      images: [
        {
          image_url:
            "https://static1.industrybuying.com/products/furniture-hospitality-and-food-service/food-service-storage-equipment/FUR.FOO.47444137_1669634603107.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/furniture-hospitality-and-food-service/food-service-storage-equipment/FUR.FOO.47444137_1669634603719.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/furniture-hospitality-and-food-service/food-service-storage-equipment/FUR.FOO.47444137_1669634604120.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/furniture-hospitality-and-food-service/food-service-storage-equipment/FUR.FOO.47444137_1669634603107.webp",
        },
      ],
    },
    {
      title: "Aquaguard Essence RO+Auto UV Ayur 6 Ltr Water Purifier (White)",
      price: 32900,
      quantity: 0,
      brand: "Aquaguard",
      category: "Furniture, Hospitality and Food Service",
      sub_category: "Purifiers",
      images: [
        {
          image_url:
            "https://static1.industrybuying.com/products/furniture-hospitality-and-food-service/purifiers/water-purifier/FUR.WAT.45753033_1668203851702.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/furniture-hospitality-and-food-service/purifiers/water-purifier/FUR.WAT.45753033_1668203852659.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/furniture-hospitality-and-food-service/purifiers/water-purifier/FUR.WAT.45753033_1668203853132.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/furniture-hospitality-and-food-service/purifiers/water-purifier/FUR.WAT.45753033_1668203854156.webp",
        },
      ],
    },
    {
      title:
        "Livpure Platino Plus 8.5 L DX Ecocare Copper + RO + Pure UV + UF + Mineraliser 15 LPH Water Purifier (White)",
      price: 17900,
      quantity: 0,
      brand: "Livpure",
      category: "Furniture, Hospitality and Food Service",
      sub_category: "Purifiers",
      images: [
        {
          image_url:
            "https://static1.industrybuying.com/products/furniture-hospitality-and-food-service/purifiers/water-purifier/FUR.WAT.46792207_1668329055837.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/furniture-hospitality-and-food-service/purifiers/water-purifier/FUR.WAT.46792207_1668329056330.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/furniture-hospitality-and-food-service/purifiers/water-purifier/FUR.WAT.46792207_1668329056816.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/furniture-hospitality-and-food-service/purifiers/water-purifier/FUR.WAT.46792207_1668329057297.webp",
        },
      ],
    },
    {
      title:
        "Livpure Pep Pro Grand 7 L RO + UV + Mineraliser Electrical Water Purifier (Black)",
      price: 13800,
      quantity: 0,
      brand: "Livpure",
      category: "Furniture, Hospitality and Food Service",
      sub_category: "Purifiers",
      images: [
        {
          image_url:
            "https://static1.industrybuying.com/products/furniture-hospitality-and-food-service/purifiers/water-purifier/FUR.WAT.106792238_1668329061035.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/furniture-hospitality-and-food-service/purifiers/water-purifier/FUR.WAT.106792238_1668329061580.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/furniture-hospitality-and-food-service/purifiers/water-purifier/FUR.WAT.106792238_1668329061973.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/furniture-hospitality-and-food-service/purifiers/water-purifier/FUR.WAT.106792238_1668329061580.webp",
        },
      ],
    },
    {
      title:
        "Marcoware Burmese Teak Foldable Wall Mounted Shower/Steam Room/Shoe Wearing Chair Bench",
      price: 4388,
      quantity: 0,
      brand: "Marcoware",
      category: "Furniture, Hospitality and Food Service",
      sub_category: "Furniture",
      images: [
        {
          image_url:
            "https://static1.industrybuying.com/products/furniture-hospitality-and-food-service/furniture/bedroom-accessories/FUR.BED.97633135_1671602936567.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/furniture-hospitality-and-food-service/furniture/bedroom-accessories/FUR.BED.97633135_1671602937599.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/furniture-hospitality-and-food-service/furniture/bedroom-accessories/FUR.BED.97633135_1671602939155.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/furniture-hospitality-and-food-service/furniture/bedroom-accessories/FUR.BED.97633135_1671602939614.webp",
        },
      ],
    },
    {
      title: "Da URBAN Classic Brown Adjustable Bar Stool",
      price: 3680,
      quantity: 1,
      brand: "Da URBAN",
      category: "Furniture, Hospitality and Food Service",
      sub_category: "Furniture",
      images: [
        {
          image_url:
            "https://static1.industrybuying.com/products/furniture-hospitality-and-food-service/furniture/cafe-chairs-and-barstools/FUR.CAF.84818067_1668139822528.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/furniture-hospitality-and-food-service/furniture/cafe-chairs-and-barstools/FUR.CAF.84818067_1668139823176.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/furniture-hospitality-and-food-service/furniture/cafe-chairs-and-barstools/FUR.CAF.84818067_1668139823725.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/furniture-hospitality-and-food-service/furniture/cafe-chairs-and-barstools/FUR.CAF.84818067_1668139824157.webp",
        },
      ],
    },
    {
      title: "RW REST WELL Arjun Brown Modern Wenge Plastic Dining Table",
      price: 1780,
      quantity: 3,
      brand: "RW Rest Well",
      category: "Furniture, Hospitality and Food Service",
      sub_category: "Furniture",
      images: [
        {
          image_url:
            "https://static1.industrybuying.com/products/furniture-hospitality-and-food-service/furniture/table-and-chair-set/FUR.TAB.67494236_1669986516884.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/furniture-hospitality-and-food-service/furniture/table-and-chair-set/FUR.TAB.67494236_1669986517358.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/furniture-hospitality-and-food-service/furniture/table-and-chair-set/FUR.TAB.67494236_1669986517945.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/furniture-hospitality-and-food-service/furniture/table-and-chair-set/FUR.TAB.67494236_1669986517358.webp",
        },
      ],
    },
    {
      title: "IB BASICS 2 * 3 ft Blue ESD Conductive Mat",
      price: 388,
      quantity: 0,
      brand: "IB BASICS",
      category: "Furniture, Hospitality and Food Service",
      sub_category: "Mats & Carpets",
      images: [
        {
          image_url:
            "https://static1.industrybuying.com/products/furniture-hospitality-and-food-service/mats-carpets/FUR.MAT.23151344_1672840318769.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/furniture-hospitality-and-food-service/mats-carpets/FUR.MAT.23151344_1672840319262.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/furniture-hospitality-and-food-service/mats-carpets/FUR.MAT.23151344_1672840319813.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/furniture-hospitality-and-food-service/mats-carpets/FUR.MAT.23151344_1672840319813.webp",
        },
      ],
    },
    {
      title: "Ionix 5m Anti Slip Mat-Grey",
      price: 349,
      quantity: 0,
      brand: "Ionix",
      category: "Furniture, Hospitality and Food Service",
      sub_category: "Mats & Carpets",
      images: [
        {
          image_url:
            "https://static1.industrybuying.com/products/furniture-hospitality-and-food-service/mats-carpets/FUR.MAT.107783736_1673269861888.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/furniture-hospitality-and-food-service/mats-carpets/FUR.MAT.107783736_1673269862483.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/furniture-hospitality-and-food-service/mats-carpets/FUR.MAT.107783736_1673269863124.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/furniture-hospitality-and-food-service/mats-carpets/FUR.MAT.107783736_1673269863124.webp",
        },
      ],
    },
    {
      title: "Nilkamal Travelit Maroon Multipurpose Mat",
      price: 1999,
      quantity: 1,
      brand: "NILKAMAL",
      category: "Furniture, Hospitality and Food Service",
      sub_category: "Mats & Carpets",
      images: [
        {
          image_url:
            "https://static1.industrybuying.com/products/furniture-hospitality-and-food-service/mats-carpets/FUR.MAT.105271827_1668168736929.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/furniture-hospitality-and-food-service/mats-carpets/FUR.MAT.105271827_1668168737935.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/furniture-hospitality-and-food-service/mats-carpets/FUR.MAT.105271827_1668168738416.webp",
        },
        {
          image_url:
            "https://static1.industrybuying.com/products/furniture-hospitality-and-food-service/mats-carpets/FUR.MAT.105271827_1668168736929.webp",
        },
      ],
    },
  ];
};

export const MinAndMax = (Array) => {
  let min = Infinity;
  let max = -Infinity;
  for (let i = 0; i < Array.length; i++) {
    if (Array[i].price < min) {
      min = Array[i].price;
    }
    if (Array[i].price > max) {
      max = Array[i].price;
    }
  }
  return [min, max];
};

export const BrandNames = (Array) => {
  let obj = {};
  for (let i = 0; i < Array.length; i++) {
    if (obj[Array[i].brand] === undefined) {
      obj[Array[i].brand] = 1;
    } else {
      obj[Array[i].brand]++;
    }
  }
  let array = [];
  for (let key in obj) {
    array.push([key, obj[key]]);
  }
  return array;
};

export const DiscountInFilter = () => {
  return ["Upto 10% (2)", "10% - 20% (1)", "30% - 40% (1)", "40% - 50%"]
};