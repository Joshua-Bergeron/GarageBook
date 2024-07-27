export const years = Array.from(new Array(75), (val, index) =>
  (new Date().getFullYear() - index).toString()
);

export const carMakes = [
  "Abarth",
  "Alfa Romeo",
  "Aston Martin",
  "Audi",
  "Bentley",
  "BMW",
  "Bugatti",
  "Cadillac",
  "Chevrolet",
  "Chrysler",
  "Citroën",
  "Dacia",
  "Daewoo",
  "Daihatsu",
  "Dodge",
  "Donkervoort",
  "DS",
  "Ferrari",
  "Fiat",
  "Fisker",
  "Ford",
  "Honda",
  "Hummer",
  "Hyundai",
  "Infiniti",
  "Iveco",
  "Jaguar",
  "Jeep",
  "Kia",
  "KTM",
  "Lada",
  "Lamborghini",
  "Lancia",
  "Land Rover",
  "Landwind",
  "Lexus",
  "Lotus",
  "Maserati",
  "Maybach",
  "Mazda",
  "McLaren",
  "Mercedes-Benz",
  "MG",
  "Mini",
  "Mitsubishi",
  "Morgan",
  "Nissan",
  "Opel",
  "Peugeot",
  "Porsche",
  "Renault",
  "Rolls-Royce",
  "Rover",
  "Saab",
  "Seat",
  "Skoda",
  "Smart",
  "SsangYong",
  "Subaru",
  "Suzuki",
  "Tesla",
  "Toyota",
  "Volkswagen",
  "Volvo",
];

export const carModels = [
  "ILX",
  "MDX",
  "NSX",
  "RDX",
  "RLX",
  "TLX",
  "4C",
  "Giulia",
  "Stelvio",
  "DB11",
  "DBS",
  "Vantage",
  "Rapide",
  "Vanquish",
  "A1",
  "A3",
  "A4",
  "A5",
  "A6",
  "A7",
  "A8",
  "Q2",
  "Q3",
  "Q5",
  "Q7",
  "Q8",
  "TT",
  "R8",
  "e-tron",
  "Bentayga",
  "Continental",
  "Flying Spur",
  "Mulsanne",
  "1 Series",
  "2 Series",
  "3 Series",
  "4 Series",
  "5 Series",
  "6 Series",
  "7 Series",
  "8 Series",
  "X1",
  "X2",
  "X3",
  "X4",
  "X5",
  "X6",
  "X7",
  "Z4",
  "Chiron",
  "Veyron",
  "Enclave",
  "Encore",
  "Envision",
  "LaCrosse",
  "Regal",
  "ATS",
  "CT6",
  "CTS",
  "Escalade",
  "XT4",
  "XT5",
  "XT6",
  "Blazer",
  "Bolt EV",
  "Camaro",
  "Colorado",
  "Corvette",
  "Equinox",
  "Impala",
  "Malibu",
  "Silverado",
  "Suburban",
  "Tahoe",
  "Traverse",
  "Trax",
  "300",
  "Pacifica",
  "Voyager",
  "C1",
  "C3",
  "C4",
  "C5",
  "C6",
  "Berlingo",
  "Duster",
  "Logan",
  "Sandero",
  "Lanos",
  "Leganza",
  "Nubira",
  "Copen",
  "Terios",
  "Challenger",
  "Charger",
  "Durango",
  "Journey",
  "D8",
  "DS 3",
  "DS 4",
  "DS 5",
  "DS 7 Crossback",
  "488",
  "812 Superfast",
  "California",
  "GTC4Lusso",
  "Portofino",
  "124 Spider",
  "500",
  "500X",
  "Panda",
  "Tipo",
  "Karma",
  "Bronco",
  "Edge",
  "Escape",
  "Expedition",
  "Explorer",
  "F-150",
  "Fusion",
  "Mustang",
  "Ranger",
  "Taurus",
  "G70",
  "G80",
  "G90",
  "Acadia",
  "Canyon",
  "Sierra",
  "Terrain",
  "Yukon",
  "Accord",
  "Civic",
  "CR-V",
  "Fit",
  "HR-V",
  "Insight",
  "Odyssey",
  "Passport",
  "Pilot",
  "Ridgeline",
  "H1",
  "H2",
  "H3",
  "Elantra",
  "Kona",
  "Palisade",
  "Santa Fe",
  "Sonata",
  "Tucson",
  "Venue",
  "Q50",
  "Q60",
  "QX50",
  "QX60",
  "QX80",
  "E-Pace",
  "F-Pace",
  "F-Type",
  "I-Pace",
  "XE",
  "XF",
  "XJ",
  "Cherokee",
  "Compass",
  "Gladiator",
  "Grand Cherokee",
  "Renegade",
  "Wrangler",
  "Forte",
  "K5",
  "Niro",
  "Rio",
  "Seltos",
  "Sorento",
  "Soul",
  "Sportage",
  "Stinger",
  "Telluride",
  "Aventador",
  "Huracan",
  "Urus",
  "Defender",
  "Discovery",
  "Range Rover",
  "Range Rover Evoque",
  "Range Rover Sport",
  "Range Rover Velar",
  "ES",
  "GS",
  "GX",
  "IS",
  "LC",
  "LS",
  "LX",
  "NX",
  "RC",
  "RX",
  "UX",
  "Aviator",
  "Corsair",
  "MKC",
  "MKZ",
  "Nautilus",
  "Navigator",
  "Elise",
  "Evora",
  "Exige",
  "Ghibli",
  "GranTurismo",
  "Levante",
  "Quattroporte",
  "CX-3",
  "CX-30",
  "CX-5",
  "CX-9",
  "Mazda3",
  "Mazda6",
  "MX-5 Miata",
  "570S",
  "600LT",
  "720S",
  "GT",
  "A-Class",
  "B-Class",
  "C-Class",
  "CLA",
  "CLS",
  "E-Class",
  "G-Class",
  "GLA",
  "GLB",
  "GLC",
  "GLE",
  "GLS",
  "S-Class",
  "Clubman",
  "Convertible",
  "Countryman",
  "Hardtop 2 Door",
  "Hardtop 4 Door",
  "Eclipse Cross",
  "Mirage",
  "Outlander",
  "Outlander Sport",
  "Altima",
  "Armada",
  "Frontier",
  "Kicks",
  "Leaf",
  "Maxima",
  "Murano",
  "Pathfinder",
  "Rogue",
  "Sentra",
  "Titan",
  "Versa",
  "2008",
  "3008",
  "5008",
  "208",
  "308",
  "508",
  "718 Boxster",
  "718 Cayman",
  "911",
  "Cayenne",
  "Macan",
  "Panamera",
  "Taycan",
  "1500",
  "2500",
  "3500",
  "ProMaster",
  "Captur",
  "Clio",
  "Kadjar",
  "Koleos",
  "Megane",
  "Talisman",
  "Cullinan",
  "Dawn",
  "Ghost",
  "Phantom",
  "Wraith",
  "9-3",
  "9-5",
  "Arona",
  "Ateca",
  "Ibiza",
  "Leon",
  "Tarraco",
  "Fabia",
  "Karoq",
  "Kodiaq",
  "Octavia",
  "Superb",
  "Ascent",
  "BRZ",
  "Crosstrek",
  "Forester",
  "Impreza",
  "Legacy",
  "Outback",
  "WRX",
  "Alto",
  "Baleno",
  "Celerio",
  "Ignis",
  "Swift",
  "Vitara",
  "Model 3",
  "Model S",
  "Model X",
  "Model Y",
  "Roadster",
  "4Runner",
  "Avalon",
  "Camry",
  "Corolla",
  "Highlander",
  "Land Cruiser",
  "Prius",
  "RAV4",
  "Sequoia",
  "Sienna",
  "Supra",
  "Tacoma",
  "Tundra",
  "Venza",
  "Yaris",
  "Arteon",
  "Atlas",
  "Beetle",
  "Golf",
  "Jetta",
  "Passat",
  "Tiguan",
  "Touareg",
  "S60",
  "S90",
  "V60",
  "V90",
  "XC40",
  "XC60",
  "XC90",
];

export const carColors = [
  "Black",
  "White",
  "Gray",
  "Silver",
  "Red",
  "Blue",
  "Brown",
  "Green",
  "Yellow",
  "Gold",
  "Orange",
  "Purple",
  "Pink",
  "Beige",
  "Maroon",
  "Teal",
  "Navy",
  "Magenta",
  "Turquoise",
  "Burgundy",
  "Champagne",
  "Cyan",
  "Ivory",
  "Lime",
  "Olive",
  "Peach",
  "Plum",
  "Rose",
  "Tan",
  "Violet",
];
