const productGroups = [
    {
        name: "SOUND CRACKERS",
        products: [
            { id: 1, name: "4\" LAKSHMI DELUXE,BHEEM,SPIDER", price: 66 },
            { id: 2, name: "4\" LAKSHMI,PARROT,SPIDER,BHEEM", price: 55 },
            { id: 3, name: "3 1/2\" LAKSHMI,BHEEM,SPIDER", price: 36 },
            { id: 4, name: "2 3/4\" KURUVI", price: 30 },
            { id: 5, name: "TWO SOUND CRACKERS", price: 72 },
            { id: 6, name: "TWO SOUND GREEN", price: 132 }
        ]
    },
    {
        name: "CHORSA CRACKERS",
        products: [
            { id: 7, name: "28 CHORSA TURKEY,TAJ", price: 44 },
            { id: 8, name: "56 CHORSA TURKEY,TAJ", price: 82 }
        ]
    },
    {
        name: "GAINT CRACKERS",
        products: [
            { id: 9, name: "28 SUPER GAINT TIGER,TAJ", price: 63 },
            { id: 10, name: "56 SUPER GAINT TIGER,TAJ", price: 126 }
        ]
    },
    {
        name: "DELUXE CRACKERS",
        products: [
            { id: 11, name: "24 DELUXE", price: 122 },
            { id: 12, name: "28 DELUXE", price: 145 },
            { id: 13, name: "50 DELUXE", price: 270 }
        ]
    },
    {
        name: "BUJILI CRACKERS",
        products: [
            { id: 14, name: "RED BUJILI (100 PCS)", price: 81 },
            { id: 15, name: "STRIPPED BUJILI (100 PCS)", price: 87 },
            { id: 16, name: "RED BUJILI (50 PCS)", price: 44 },
            { id: 17, name: "STRIPPED BUJILI (50 PCS)", price: 45 },
            { id: 18, name: "JOLLY 100", price: 126 },
            { id: 19, name: "FANTASY 200", price: 252 },
            { id: 20, name: "ENJOY 300", price: 378 },
            { id: 21, name: "BEAUTY 600", price: 756 },
            { id: 22, name: "SHINY 1000", price: 945 },
            { id: 23, name: "JAMMAI 2000", price: 1890 },
            { id: 24, name: "DISNEY 3000", price: 2835 },
            { id: 25, name: "LUXURY 5000", price: 4725 },
            { id: 26, name: "ROYAL GALAXY 10000", price: 9450 }
        ]
    },
    {
        name: "BOMBS",
        products: [
            { id: 27, name: "BULLET BOMB", price: 66 },
            { id: 28, name: "BATMEN BOMB", price: 102 },
            { id: 29, name: "HYDRO BOMB GREEN", price: 153 },
            { id: 30, name: "JURRASIC BOMB (3PLY)", price: 231 },
            { id: 31, name: "TRACER BOMB GREEN (5PLY)", price: 270 },
            { id: 32, name: "DIGITAL BOMB GREEN", price: 390 }
        ]
    },
    {
        name: "GROUND CHAKKARS",
        products: [
            { id: 33, name: "GROUND CHAKKAR BIG (25PCS)", price: 195 },
            { id: 34, name: "GROUND CHAKKAR BIG (10 PCS)", price: 97 },
            { id: 35, name: "GROUND CHAKKAR ASOKA", price: 130 },
            { id: 36, name: "GROUND CHAKKAR SPECIAL", price: 160 },
            { id: 37, name: "GROUND CHAKKAR DELUXE", price: 317 },
            { id: 38, name: "SPINNER SPECIAL", price: 168 },
            { id: 39, name: "SPINNER DELUXE", price: 327 }
        ]
    },
    {
        name: "FLOWER POTS",
        products: [
            { id: 40, name: "FLOWER POTS SMALL GREEN", price: 130 },
            { id: 41, name: "FLOWER POTS BIG GREEN", price: 180 },
            { id: 42, name: "FLOWER POTS SPECIAL GREEN", price: 231 },
            { id: 43, name: "FLOWER POTS ASOKA GREEN", price: 347 },
            { id: 44, name: "FLOWER POTS DELUXE GREEN", price: 372 },
            { id: 45, name: "FLOWER POTS SUPER DELUXE", price: 465 },
            { id: 46, name: "COLOUR KOTI", price: 573 },
            { id: 47, name: "COLOUR KOTI DELUXE", price: 706 },
            { id: 48, name: "GANGA JAMUNA", price: 149 }
        ]
    },
    {
        name: "CHILDREN'S SPECIAL",
        products: [
            { id: 49, name: "1 1/2\" TWINKLING STAR", price: 72 },
            { id: 50, name: "4\" TWINKLING STAR DELUXE", price: 162 },
            { id: 51, name: "JIL BHAI", price: 662 },
            { id: 52, name: "7\" PENCIL", price: 72 },
            { id: 53, name: "12\" DELUXE PENCIL", price: 160 },
            { id: 54, name: "15\" ALAADIN PENCIL", price: 252 }
        ]
    },
    {
        name: "ROCKETS",
        products: [
            { id: 55, name: "COLOUR ROCKET", price: 144 },
            { id: 56, name: "ROCKET BOMB", price: 149 },
            { id: 57, name: "LUNIK EXPRESS", price: 263 },
            { id: 58, name: "DOUBLE SOUND ROCKET", price: 279 },
            { id: 59, name: "THREE SOUND ROCKET", price: 290 }
        ]
    },
    {
        name: "MEGA ROCKET",
        products: [
            { id: 60, name: "NIRBHAV ROCKET", price: 838 },
            { id: 61, name: "AGNI ROCKET", price: 838 },
            { id: 62, name: "BRAMOTS ROCKET", price: 838 },
            { id: 63, name: "PRITHIVI ROCKET", price: 838 },
            { id: 64, name: "SHOURYA ROCKET", price: 838 }
        ]
    },
    {
        name: "AERIALS",
        products: [
            { id: 65, name: "DARLING DANCER", price: 281 },
            { id: 66, name: "MEGA SIREN", price: 585 },
            { id: 67, name: "7 COLOUR SHOTS (5PCS)", price: 270 },
            { id: 68, name: "EMERALD ROBO (5PCS)", price: 306 },
            { id: 69, name: "SILVER ROBO (5PCS)", price: 306 },
            { id: 70, name: "RUSSIA ROBO (5PCS)", price: 306 },
            { id: 71, name: "SKY PENDA", price: 396 }
        ]
    },
    {
        name: "SOUND NOVELTIES",
        products: [
            { id: 72, name: "CHUT PUT", price: 138 },
            { id: 73, name: "MAGIC POPS", price: 95 },
            { id: 74, name: "GOLDEN STAR 5 PCS", price: 179 },
            { id: 75, name: "SILVER STAR 5 PCS", price: 179 },
            { id: 76, name: "WONDER STAR 5 PCS", price: 179 },
            { id: 77, name: "HELICOPTER", price: 630 },
            { id: 78, name: "MILKY WHITY", price: 224 },
            { id: 79, name: "JOLLY RED", price: 224 },
            { id: 80, name: "DOLLY GREEN", price: 224 },
            { id: 81, name: "BUBBLY GOLD", price: 224 },
            { id: 82, name: "SPIN", price: 364 },
            { id: 83, name: "DISCO WHEEL", price: 393 },
            { id: 84, name: "CRACKTAIL (FOUNTAIN CRACKLING 3PCS)", price: 889 }
        ]
    },
    {
        name: "SKY SHOT COLOURS WINDOW",
        products: [
            { id: 85, name: "LAZER SHOW", price: 342 },
            { id: 86, name: "ONLINE 3", price: 342 },
            { id: 87, name: "SKY KING", price: 342 },
            { id: 88, name: "SKY GEL", price: 342 },
            { id: 89, name: "SKY DANCER", price: 342 },
            { id: 90, name: "STAR WAR", price: 342 }
        ]
    },
    {
        name: "1 3/4\" FANCY (3 PIECES PACKING)",
        products: [
            { id: 91, name: "GREEN ANGELS", price: 737 },
            { id: 92, name: "MUST U MUST", price: 737 },
            { id: 93, name: "LAL MARCHI", price: 737 },
            { id: 94, name: "PALM TREE", price: 737 },
            { id: 95, name: "RANGELA", price: 737 },
            { id: 96, name: "CITY RAIDER", price: 737 },
            { id: 97, name: "HULKWAR (CRACKLING 3 PCS)", price: 840 }
        ]
    },
    {
        name: "RANG DHARBAR (2\" FANCY SINGLE PCS)",
        products: [
            { id: 98, name: "GREEN CROSS", price: 414 },
            { id: 99, name: "RED CROSS", price: 414 },
            { id: 100, name: "GOLDEN ANGEL", price: 414 },
            { id: 101, name: "STAR NIGHT", price: 414 },
            { id: 102, name: "RANGA DE BESNTI", price: 414 },
            { id: 103, name: "CHINY DELIGHT", price: 414 },
            { id: 104, name: "VIP", price: 414 }
        ]
    },
    {
        name: "2\" FANCY (3 PIECES WITH MULTI COLOUR PACKING)",
        products: [
            { id: 105, name: "FOLK", price: 855 },
            { id: 106, name: "SWING", price: 855 },
            { id: 107, name: "GYPSY", price: 855 },
            { id: 108, name: "BALLE", price: 855 }
        ]
    },
    {
        name: "2 3/4\" FANCY (2 PCS PACKING)",
        products: [
            { id: 109, name: "JUNGLE BEATS (GREEN)", price: 1009 },
            { id: 110, name: "THUNDER HUNDER (RED)", price: 1009 },
            { id: 111, name: "BAD SOLIDER (RED & GREEN)", price: 1009 },
            { id: 112, name: "FUZZY GOLD (YELLOW)", price: 1009 },
            { id: 113, name: "PEARL DROPS (WHITE)", price: 1009 },
            { id: 114, name: "NESCAFE (SUN RISE FUNCTION)", price: 1009 },
            { id: 115, name: "GOLDEN HARVEST (Gold & Crackling)", price: 1009 },
            { id: 116, name: "MARS ATTACK (Red with crackling)", price: 1009 },
            { id: 117, name: "MOON BLAST (White with cracking)", price: 1009 }
        ]
    },
    {
        name: "AKASH MELA (3 1/2\" FANCY)",
        products: [
            { id: 118, name: "BALLE BALLE", price: 801 },
            { id: 119, name: "GREEN SHOWER", price: 804 },
            { id: 120, name: "LAAL HARA", price: 804 },
            { id: 121, name: "WHITE CHICKS", price: 801 },
            { id: 122, name: "CRACKLING STAR", price: 804 },
            { id: 123, name: "GALAXY GOLD", price: 804 },
            { id: 124, name: "SILVER TRICKS", price: 801 }
        ]
    },
    {
        name: "3 1/2\" FANCY (DOUBLE BALL FUNCTION)",
        products: [
            { id: 125, name: "BRAVE (Double Ball Function)", price: 1233 },
            { id: 126, name: "CLARA (Double Ball Function)", price: 1233 },
            { id: 127, name: "HERO (Double Ball Function)", price: 1233 },
            { id: 128, name: "LORAX (Double Ball Function)", price: 1233 },
            { id: 129, name: "RIO (Double Ball Function)", price: 1233 },
            { id: 130, name: "MOANA (Double Ball Function)", price: 1233 }
        ]
    },
    {
        name: "3 1/2\" FANCY (7 STEP FUNCTION)",
        products: [
            { id: 131, name: "AGRA INDIA (7 STEP FUNCTION)", price: 1080 },
            { id: 132, name: "MASCO RUSSIA (7 STEP FUNCTION)", price: 1080 },
            { id: 133, name: "PARIS FRANCE (7 STEP FUNCTION)", price: 1080 },
            { id: 134, name: "EGYPT (7 STEP FUNCTION)", price: 1080 },
            { id: 135, name: "NEW YORK (7 STEP FUNCTION)", price: 1080 },
            { id: 136, name: "ROME ITALY (7 STEP FUNCTION)", price: 1080 }
        ]
    },
    {
        name: "4\" FANCY (2 PCS PACKING WINDOW)",
        products: [
            { id: 137, name: "DING DONG", price: 2403 },
            { id: 138, name: "JIM JAM", price: 2403 },
            { id: 139, name: "ZIG ZAG", price: 2403 },
            { id: 140, name: "YIN YANG", price: 2403 }
        ]
    },
    {
        name: "5\" FANCY (2 PCS PACKING WINDOW)",
        products: [
            { id: 141, name: "APPLE", price: 3213 },
            { id: 142, name: "GRAPES", price: 3213 },
            { id: 143, name: "MANGO", price: 3213 },
            { id: 144, name: "PINEAPPLE", price: 3213 }
        ]
    },
    {
        name: "NEW ARRIVAL",
        products: [
            { id: 145, name: "CHUBBY DUBBIES", price: 207 },
            { id: 146, name: "RIO (FOUNTAIN MINI)", price: 90 },
            { id: 147, name: "KASHMORA", price: 343 },
            { id: 148, name: "PEACOCK", price: 378 },
            { id: 149, name: "PEACOCK BIG", price: 1058 },
            { id: 150, name: "BARBIE", price: 633 },
            { id: 151, name: "VIVO", price: 238 },
            { id: 152, name: "JIGGLERS", price: 809 },
            { id: 153, name: "TURBO SKY", price: 500 },
            { id: 154, name: "TRI COLOUR FOUNTAIN", price: 945 }
        ]
    },
    {
        name: "MULTI COLOURS AERIAL",
        products: [
            { id: 155, name: "12 COLOUR STARS", price: 438 },
            { id: 156, name: "AERIAL CRACKLING", price: 473 },
            { id: 157, name: "PUBG 15 SHOTS", price: 843 },
            { id: 158, name: "MAZA 30 SHOT/POP 30 SHOTS", price: 1558 },
            { id: 159, name: "FESTIVAL FUN 25 SHOTS", price: 893 },
            { id: 160, name: "JUBLEE 25 SHOT", price: 1440 },
            { id: 161, name: "CARNIVAL 50 SHOT", price: 1685 },
            { id: 162, name: "HOLIWALI 50 SHOTS", price: 2601 },
            { id: 163, name: "JAMAI 60 SHOTS/RUSH 60 SHOT", price: 3417 },
            { id: 164, name: "GANGWAR 60 SHOTS", price: 3457 },
            { id: 165, name: "BOSS KI MASS 100 SHOTS", price: 5220 },
            { id: 166, name: "NIGHT RIDER 120 SHOTS", price: 6234 },
            { id: 167, name: "ENJOY 240 SHOTS", price: 12478 },
            { id: 168, name: "PYRO NIGHT 32 SHOTS", price: 11340 },
            { id: 169, name: "PARADISE 20 SHOT", price: 7088 },
            { id: 170, name: "TRIXSHOT (3*40)", price: 5859 },
            { id: 171, name: "GREAT SHOW (40*40) (NEW)", price: 8505 },
            { id: 172, name: "WONDERLA (16 SHOT) (NEW)", price: 15782 }
        ]
    },
    {
        name: "SPARKLERS",
        products: [
            { id: 173, name: "7 Cm Electric Sparklers", price: 23 },
            { id: 174, name: "7 Cm Glittering Sparklers", price: 29 },
            { id: 175, name: "7 Cm Green Sparklers", price: 34 },
            { id: 176, name: "7 Cm Red Sparklers", price: 39 },
            { id: 177, name: "7 Cm Fifty-Fifty Sparklers", price: 40 },
            { id: 178, name: "10 Cm Electric Sparklers", price: 41 },
            { id: 179, name: "10 Cm Glittering Sparklers", price: 43 },
            { id: 180, name: "10 Cm Green Sparklers", price: 54 },
            { id: 181, name: "10 Cm Red Sparklers", price: 54 },
            { id: 182, name: "10 Cm Blue Sparklers", price: 57 },
            { id: 183, name: "12 Cm Electric Sparklers", price: 66 },
            { id: 184, name: "12 Cm Glittering Sparklers", price: 73 },
            { id: 185, name: "12 Cm Green Sparklers", price: 80 },
            { id: 186, name: "12 Cm Red Sparklers", price: 82 },
            { id: 187, name: "12 Cm Silver Drops Sparklers", price: 92 },
            { id: 188, name: "15 Cm Electric Sparklers", price: 113 },
            { id: 189, name: "15 Cm Glittering Sparklers", price: 125 },
            { id: 190, name: "15 Cm Green Sparklers", price: 142 },
            { id: 191, name: "15 Cm Red Sparklers", price: 150 },
            { id: 192, name: "30 Cm Electric Sparklers", price: 113 },
            { id: 193, name: "30 Cm Glittering Sparklers", price: 125 },
            { id: 194, name: "30 Cm Green Sparklers", price: 142 },
            { id: 195, name: "30 Cm Red Sparklers", price: 150 },
            { id: 196, name: "50 Cm Electric Sparklers", price: 392 },
            { id: 197, name: "50 Cm Glittering Sparklers", price: 437 },
            { id: 198, name: "70 Cm Electric Sparklers", price: 612 },
            { id: 199, name: "70 Cm Glittering Sparklers", price: 659 },
            { id: 200, name: "FIRE FLY (ROTATOR SPARKLERS)", price: 630 }
        ]
    },
    {
        name: "GIFT BOXES",
        products: [
            { id: 201, name: "JOLLY 16 ITEMS", price: 375,isFixedPrice: true },
            { id: 202, name: "FANTASY 21 ITEMS", price: 475,isFixedPrice: true },
            { id: 203, name: "ENJOY 25 ITEMS", price: 590,isFixedPrice: true },
            { id: 204, name: "BEAUTY 30 ITEMS", price: 690,isFixedPrice: true },
            { id: 205, name: "SHINY 35 ITEMS", price: 850,isFixedPrice: true },
            { id: 206, name: "JAMMAI 40 ITEMS", price: 990,isFixedPrice: true },
            { id: 207, name: "DISNEY 45 ITEMS", price: 1155,isFixedPrice: true },
            { id: 208, name: "LUXURY 50 ITEMS", price: 1350,isFixedPrice: true },
            { id: 209, name: "ROYAL GALAXY 60 ITEMS", price: 1560,isFixedPrice: true }
        ]
    },
    {
        name: "COLOUR MATCHES",
        products: [
            { id: 210, name: "MINI DELUXE", price: 91 },
            { id: 211, name: "KODI BABA", price: 119 },
            { id: 212, name: "MATRIX", price: 150 },
            { id: 213, name: "PLUMBS", price: 272 },
            { id: 214, name: "NOKIA", price: 511 },
            { id: 215, name: "TASARA", price: 533 },
            { id: 221, name: "ROLL CAP", price: 164 }
        ]
    }
];

const CUSTOMER_DISCOUNT_RATE = 0.5;
const SHOWCASE_DISCOUNT_RATE = 0.8;
const MIN_ORDER_OFFER_AMOUNT = 3000;

const customerOfferRate = 1 - CUSTOMER_DISCOUNT_RATE;
const showcaseOriginalRate = 1 - SHOWCASE_DISCOUNT_RATE;

const accordion = document.getElementById("productAccordion");
const productCountEl = document.getElementById("productCount");
const totalDiscountEl = document.getElementById("totalDiscount");
const grandTotalEl = document.getElementById("grandTotal");
const grandOfferTotalEl = document.getElementById("grandOfferTotal");

const selectionScreen = document.getElementById("selectionScreen");
const reviewScreen = document.getElementById("reviewScreen");
const invoiceScreen = document.getElementById("invoiceScreen");

const reviewTableBody = document.getElementById("reviewTableBody");
const invoiceTableBody = document.getElementById("invoiceTableBody");
const reviewEmptyState = document.getElementById("reviewEmptyState");
const minimumOrderMessage = document.getElementById("minimumOrderMessage");
const customerFormMessage = document.getElementById("customerFormMessage");
const minimumOrderBannerEl = document.querySelector(".minimum-order-banner");
const orderProgressBarEl = document.getElementById("orderProgressBar");
const orderProgressTextEl = document.getElementById("orderProgressText");
const orderTargetCardEl = document.getElementById("orderTargetCard");
const orderTargetAmountEl = document.getElementById("orderTargetAmount");
const productSearchEl = document.getElementById("productSearch");
const groupFilterEl = document.getElementById("groupFilter");
const catalogEmptyStateEl = document.getElementById("catalogEmptyState");
const mobileMiniCartEl = document.getElementById("mobileMiniCart");
const miniCartItemCountEl = document.getElementById("miniCartItemCount");
const miniCartQuantityEl = document.getElementById("miniCartQuantity");
const miniCartDiscountEl = document.getElementById("miniCartDiscount");
const miniCartGrandTotalEl = document.getElementById("miniCartGrandTotal");
const miniCartOfferTotalEl = document.getElementById("miniCartOfferTotal");
const miniCartResetButton = document.getElementById("miniCartResetButton");
const miniCartReviewButton = document.getElementById("miniCartReviewButton");
const downloadToastEl = document.getElementById("downloadToast");
const webResetButtons = document.querySelectorAll(".reset-session-button");

const reviewButton = document.getElementById("reviewButton");
const backButton = document.getElementById("backButton");
const invoiceButton = document.getElementById("invoiceButton");
const invoiceBackButton = document.getElementById("invoiceBackButton");
const printButton = document.getElementById("printButton");

const invoiceDateEl = document.getElementById("invoiceDate");
const invoiceNumberEl = document.getElementById("invoiceNumber");
const reviewProductCountEl = document.getElementById("reviewProductCount");
const reviewTotalQuantityEl = document.getElementById("reviewTotalQuantity");
const reviewGrandTotalEl = document.getElementById("reviewGrandTotal");
const reviewGrandOfferTotalEl = document.getElementById("reviewGrandOfferTotal");
const invoiceProductCountEl = document.getElementById("invoiceProductCount");
const invoiceTotalQuantityEl = document.getElementById("invoiceTotalQuantity");
const invoiceGrandTotalEl = document.getElementById("invoiceGrandTotal");
const invoiceGrandOfferTotalEl = document.getElementById("invoiceGrandOfferTotal");
const customerNameEl = document.getElementById("customerName");
const customerPhoneEl = document.getElementById("customerPhone");
const customerAddressEl = document.getElementById("customerAddress");
const customerNameErrorEl = document.getElementById("customerNameError");
const customerPhoneErrorEl = document.getElementById("customerPhoneError");
const customerAddressErrorEl = document.getElementById("customerAddressError");
const invoiceCustomerNameEl = document.getElementById("invoiceCustomerName");
const invoiceCustomerPhoneEl = document.getElementById("invoiceCustomerPhone");
const invoiceCustomerAddressEl = document.getElementById("invoiceCustomerAddress");
const screens = [selectionScreen, reviewScreen, invoiceScreen];
const groupDisplayMeta = {
    "SOUND CRACKERS": { icon: "S", theme: "electronics" },
    "CHORSA CRACKERS": { icon: "C", theme: "peripherals" },
    "GAINT CRACKERS": { icon: "G", theme: "accessories" },
    "DELUXE CRACKERS": { icon: "D", theme: "gift-boxes" },
    "BUJILI CRACKERS": { icon: "B", theme: "electronics" },
    "BOMBS": { icon: "B", theme: "peripherals" },
    "GROUND CHAKKARS": { icon: "G", theme: "accessories" },
    "FLOWER POTS": { icon: "F", theme: "gift-boxes" },
    "CHILDREN'S SPECIAL": { icon: "C", theme: "electronics" },
    "ROCKETS": { icon: "R", theme: "peripherals" },
    "MEGA ROCKET": { icon: "M", theme: "accessories" },
    "AERIALS": { icon: "A", theme: "gift-boxes" },

    "SOUND NOVELTIES": { icon: "N", theme: "electronics" },
    "SKY SHOT COLOURS WINDOW": { icon: "S", theme: "peripherals" },
    "1 3/4\" FANCY (3 PIECES PACKING)": { icon: "F", theme: "accessories" },
    "RANG DHARBAR (2\" FANCY SINGLE PCS)": { icon: "R", theme: "gift-boxes" },
    "2\" FANCY (3 PIECES WITH MULTI COLOUR PACKING)": { icon: "F", theme: "electronics" },
    "2 3/4\" FANCY (2 PCS PACKING)": { icon: "F", theme: "peripherals" },
    "AKASH MELA (3 1/2\" FANCY)": { icon: "A", theme: "accessories" },
    "3 1/2\" FANCY (DOUBLE BALL FUNCTION)": { icon: "D", theme: "gift-boxes" },
    "3 1/2\" FANCY (7 STEP FUNCTION)": { icon: "7", theme: "electronics" },
    "4\" FANCY (2 PCS PACKING WINDOW)": { icon: "4", theme: "peripherals" },
    "5\" FANCY (2 PCS PACKING WINDOW)": { icon: "5", theme: "accessories" },
    "NEW ARRIVAL": { icon: "A", theme: "gift-boxes" },
    
    "MULTI COLOURS AERIAL": { icon: "M", theme: "electronics" },
    "SPARKLERS": { icon: "S", theme: "peripherals" },
    "GIFT BOXES": { icon: "G", theme: "accessories" },
    "COLOUR MATCHES": { icon: "R", theme: "gift-boxes" }
};
const QUANTITY_STORAGE_KEY = "novamart.quantities";
const CUSTOMER_STORAGE_KEY = "novamart.customer.details";

const products = productGroups.flatMap((group) => group.products);
const productGroupById = new Map();
const quantityState = new Map(products.map((product) => [product.id, 0]));
let downloadToastTimer = null;

productGroups.forEach((group) => {
    group.products.forEach((product) => {
        productGroupById.set(product.id, group.name);
    });
});

function formatAmount(value) {
    return value.toLocaleString("en-IN", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

function loadStoredJson(storageKey) {
    try {
        const rawValue = localStorage.getItem(storageKey);
        return rawValue ? JSON.parse(rawValue) : null;
    } catch {
        return null;
    }
}

function saveStoredJson(storageKey, value) {
    try {
        localStorage.setItem(storageKey, JSON.stringify(value));
    } catch {
        // Ignore storage quota or privacy-mode write failures.
    }
}

function persistQuantities() {
    saveStoredJson(QUANTITY_STORAGE_KEY, Object.fromEntries(quantityState));
}

function persistCustomerDetails() {
    saveStoredJson(CUSTOMER_STORAGE_KEY, getCustomerDetails());
}

function clearStoredSession() {
    try {
        localStorage.removeItem(QUANTITY_STORAGE_KEY);
        localStorage.removeItem(CUSTOMER_STORAGE_KEY);
    } catch {
        // Ignore storage clear failures.
    }
}

function restoreQuantities() {
    const storedQuantities = loadStoredJson(QUANTITY_STORAGE_KEY);
    if (!storedQuantities || typeof storedQuantities !== "object") {
        return;
    }

    products.forEach((product) => {
        const storedValue = Number(storedQuantities[product.id]);
        if (Number.isFinite(storedValue) && storedValue >= 0) {
            quantityState.set(product.id, storedValue);
        }
    });
}

function restoreCustomerDetails() {
    const storedCustomer = loadStoredJson(CUSTOMER_STORAGE_KEY);
    if (!storedCustomer || typeof storedCustomer !== "object") {
        return;
    }

    customerNameEl.value = typeof storedCustomer.name === "string" ? storedCustomer.name : "";
    customerPhoneEl.value = typeof storedCustomer.phone === "string" ? storedCustomer.phone : "";
    customerAddressEl.value = typeof storedCustomer.address === "string" ? storedCustomer.address : "";
}

function getNextInvoiceNumber() {
    const storageKey = "novamart.invoice.counter";
    const currentCounter = Number(localStorage.getItem(storageKey)) || 0;
    const nextCounter = currentCounter + 1;
    localStorage.setItem(storageKey, String(nextCounter));

    const now = new Date();
    const datePart = `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, "0")}${String(now.getDate()).padStart(2, "0")}`;
    const timePart = `${String(now.getHours()).padStart(2, "0")}${String(now.getMinutes()).padStart(2, "0")}${String(now.getSeconds()).padStart(2, "0")}${String(now.getMilliseconds()).padStart(3, "0")}`;
    const counterPart = String(nextCounter).padStart(5, "0");

    return `INV-${datePart}-${timePart}-${counterPart}`;
}

function calculatePrices(product, quantity) {
    const isFixedPrice = Boolean(product.isFixedPrice);
    const showcasedOriginalPrice = isFixedPrice
        ? product.price
        : (product.price * customerOfferRate) / showcaseOriginalRate;
    const customerOfferPrice = isFixedPrice
        ? product.price
        : product.price * customerOfferRate;

    const rowTotal = quantity * showcasedOriginalPrice;
    const rowOfferTotal = quantity * customerOfferPrice;

    return {
        showcasedOriginalPrice,
        customerOfferPrice,
        rowTotal,
        rowOfferTotal
    };
}

function buildPricePairCell(originalAmount, offerAmount, isFixedPrice = false) {
    if (isFixedPrice) {
        return `
            <td class="price-pair-cell" data-label="Price">
                <div class="price-line"><span class="amount-fixed">${formatAmount(originalAmount)}</span></div>
                <div class="price-line"><span class="price-tag">No offer applied</span></div>
            </td>
        `;
    }

    return `
        <td class="price-pair-cell" data-label="Price">
            <div class="price-line"><span class="amount-original">${formatAmount(originalAmount)}</span></div>
            <div class="price-line"><span class="amount-offer">${formatAmount(offerAmount)}</span></div>
        </td>
    `;
}

function createRowMarkup(product) {
    const quantity = quantityState.get(product.id) || 0;
    const pricing = calculatePrices(product, quantity);
    const productName = product.isFixedPrice
        ? `${product.name} <span class="price-tag">Fixed Price</span>`
        : product.name;

    return `
        <tr id="product-row-${product.id}">
            <td data-label="SI.No" style="display:none">${product.id}</td>
            <td data-label="Product Name" style="color:red; font-weight: bold;">${productName}</td>
            ${buildPricePairCell(pricing.showcasedOriginalPrice, pricing.customerOfferPrice, product.isFixedPrice)}
            <td data-label="Quantity">${buildQuantityStepper(product, quantity)}</td>
            <td class="money amount-offer" id="offer-total-${product.id}" data-label="Total Offer Amount">0.00</td>
        </tr>
    `;
}

function buildQuantityStepper(product, quantity) {
    return `
        <div class="quantity-stepper">
            <button type="button" class="quantity-action" data-action="decrease" data-id="${product.id}" aria-label="Decrease quantity for ${product.name}">-</button>
            <input
                type="number"
                min="0"
                value="${quantity}"
                class="quantity"
                data-id="${product.id}"
                aria-label="Quantity for ${product.name}"
            >
            <button type="button" class="quantity-action" data-action="increase" data-id="${product.id}" aria-label="Increase quantity for ${product.name}">+</button>
        </div>
    `;
}

function syncQuantityInputs(productId, quantity) {
    document.querySelectorAll(`input[data-id="${productId}"]`).forEach((input) => {
        input.value = String(quantity);
    });
}

function refreshQuantityDependentViews() {
    updateTotals();

    if (!reviewScreen.classList.contains("hidden") && !isMinimumOrderMet()) {
        showSelectionScreen();
        showMinimumOrderWarning();
        return;
    }

    if (!reviewScreen.classList.contains("hidden")) {
        renderReviewTable();
    }

    if (!invoiceScreen.classList.contains("hidden")) {
        renderInvoice();
    }
}

function setQuantityValue(productId, nextValue) {
    const quantity = Math.max(0, nextValue);

    quantityState.set(productId, quantity);
    syncQuantityInputs(productId, quantity);
    minimumOrderMessage.classList.add("hidden");
    persistQuantities();
    refreshQuantityDependentViews();
}

function matchesCatalogFilters(product, groupName) {
    const searchTerm = productSearchEl.value.trim().toLowerCase();
    const selectedGroup = groupFilterEl.value;
    const matchesGroup = selectedGroup === "all" || selectedGroup === groupName;
    const matchesSearch = searchTerm.length === 0
        || product.name.toLowerCase().includes(searchTerm)
        || String(product.id).includes(searchTerm);

    return matchesGroup && matchesSearch;
}

function populateGroupFilter() {
    const options = productGroups
        .map((group) => `<option value="${group.name}">${group.name}</option>`)
        .join("");

    groupFilterEl.insertAdjacentHTML("beforeend", options);
}

function buildReviewRowMarkup(product, quantity, pricing, index) {
    return `
        <td data-label="SI.No">${index + 1}</td>
        <td data-label="Product Code">${String(product.id)}</td>
        <td data-label="Group">${productGroupById.get(product.id)}</td>
        <td data-label="Product Name">${product.name}</td>
        ${buildPricePairCell(pricing.showcasedOriginalPrice, pricing.customerOfferPrice, product.isFixedPrice)}
        <td data-label="Quantity">${buildQuantityStepper(product, quantity)}</td>
        <td class="money amount-offer" data-label="Total Offer Amount">${formatAmount(pricing.rowOfferTotal)}</td>
    `;
}

function buildInvoiceRowMarkup(product, quantity, pricing, index) {
    return `
        <td data-label="SI.No">${index + 1}</td>
        <td data-label="Product Code">${String(product.id)}</td>
        <td data-label="Group">${productGroupById.get(product.id)}</td>
        <td data-label="Product Name">${product.name}</td>
        ${buildPricePairCell(pricing.showcasedOriginalPrice, pricing.customerOfferPrice, product.isFixedPrice)}
        <td data-label="Quantity">${quantity}</td>
        <td class="money amount-offer" data-label="Total Offer Amount">${formatAmount(pricing.rowOfferTotal)}</td>
    `;
}

function updateMinimumOrderProgress(currentOfferTotal) {
    const progressPercentage = Math.min((currentOfferTotal / MIN_ORDER_OFFER_AMOUNT) * 100, 100);
    const remainingAmount = Math.max(MIN_ORDER_OFFER_AMOUNT - currentOfferTotal, 0);
    const hasReachedMinimum = currentOfferTotal >= MIN_ORDER_OFFER_AMOUNT;

    orderProgressBarEl.style.width = `${progressPercentage}%`;
    orderProgressBarEl.classList.toggle("is-complete", hasReachedMinimum);
    orderTargetCardEl.classList.toggle("is-complete", hasReachedMinimum);
    orderTargetAmountEl.textContent = hasReachedMinimum
        ? "Unlocked"
        : `${formatAmount(remainingAmount)}`;
    orderProgressTextEl.textContent = hasReachedMinimum
        ? `Target reached. ${formatAmount(currentOfferTotal)} of ${formatAmount(MIN_ORDER_OFFER_AMOUNT)}`
        : `${formatAmount(currentOfferTotal)} of ${formatAmount(MIN_ORDER_OFFER_AMOUNT)} reached. Add ${formatAmount(remainingAmount)} more.`;
}

function updateProductRowState(productId, quantity) {
    const row = document.getElementById(`product-row-${productId}`);
    if (!row) {
        return;
    }

    row.classList.toggle("row-selected", quantity > 0);
}

function updateMiniCartSummary(selectedProductCount, totalQuantity, grandTotal, grandOfferTotal) {
    const hasSelections = selectedProductCount > 0;
    const totalDiscount = grandTotal - grandOfferTotal;

    miniCartItemCountEl.textContent = `${selectedProductCount} item${selectedProductCount === 1 ? "" : "s"}`;
    miniCartQuantityEl.textContent = `Qty ${totalQuantity}`;
    miniCartDiscountEl.textContent = formatAmount(totalDiscount);
    miniCartGrandTotalEl.textContent = formatAmount(grandTotal);
    miniCartOfferTotalEl.textContent = formatAmount(grandOfferTotal);
    mobileMiniCartEl.classList.toggle("has-items", hasSelections);
    miniCartReviewButton.disabled = !hasSelections;
    miniCartResetButton.disabled = !hasSelections && !getCustomerDetails().name && !getCustomerDetails().phone && !getCustomerDetails().address;
}

function updateMiniCartScrollState() {
    const shouldCompact = window.innerWidth <= 780 && window.scrollY > 160;
    mobileMiniCartEl.classList.toggle("is-compact", shouldCompact);
}

function updateMiniCartVisibility(targetScreen) {
    const shouldShow = targetScreen === selectionScreen || targetScreen === reviewScreen;
    mobileMiniCartEl.classList.toggle("hidden", !shouldShow);
}

function updateMiniCartAction(targetScreen) {
    const isReviewScreen = targetScreen === reviewScreen;

    miniCartReviewButton.textContent = isReviewScreen ? "Generate Invoice" : "Review";
    miniCartReviewButton.setAttribute("aria-label", isReviewScreen ? "Generate invoice" : "Review selected products");
}

function showMinimumOrderWarning() {
    const currentOfferTotal = getCurrentGrandOfferTotal();
    const remainingAmount = Math.max(MIN_ORDER_OFFER_AMOUNT - currentOfferTotal, 0);

    minimumOrderMessage.textContent = `Minimum order not met. Add ${formatAmount(remainingAmount)} more to reach an offer total of ${formatAmount(MIN_ORDER_OFFER_AMOUNT)}.`;
    minimumOrderMessage.classList.remove("hidden");

    requestAnimationFrame(() => {
        selectionScreen.scrollIntoView({ behavior: "auto", block: "start" });
        minimumOrderBannerEl.scrollIntoView({ behavior: "smooth", block: "start" });
    });
}

function resetSession() {
    products.forEach((product) => {
        quantityState.set(product.id, 0);
    });

    customerNameEl.value = "";
    customerPhoneEl.value = "";
    customerAddressEl.value = "";
    invoiceCustomerNameEl.textContent = "-";
    invoiceCustomerPhoneEl.textContent = "-";
    invoiceCustomerAddressEl.textContent = "-";
    reviewEmptyState.classList.add("hidden");
    minimumOrderMessage.classList.add("hidden");
    setFieldError(customerNameEl, customerNameErrorEl, "");
    setFieldError(customerPhoneEl, customerPhoneErrorEl, "");
    setFieldError(customerAddressEl, customerAddressErrorEl, "");
    clearStoredSession();
    renderAccordion();
    refreshQuantityDependentViews();
    showScreen(selectionScreen, "back");
    showDownloadToast("Selection reset");
}

function renderAccordion() {
    accordion.innerHTML = "";

    const filteredGroups = productGroups
        .map((group) => ({
            ...group,
            products: group.products.filter((product) => matchesCatalogFilters(product, group.name))
        }))
        .filter((group) => group.products.length > 0);

    if (filteredGroups.length === 0) {
        catalogEmptyStateEl.classList.remove("hidden");
        return;
    }

    catalogEmptyStateEl.classList.add("hidden");

    filteredGroups.forEach((group, index) => {
        const isOpen = true;
        const panelId = `group-panel-${index}`;
        const groupMeta = groupDisplayMeta[group.name] || { icon: group.name.charAt(0), theme: "default" };

        const section = document.createElement("section");
        section.className = `accordion-item group-theme-${groupMeta.theme}`;

        section.innerHTML = `
            <button class="accordion-trigger" type="button" aria-expanded="${isOpen}" aria-controls="${panelId}">
                <span class="accordion-title"><span class="accordion-icon">${groupMeta.icon}</span><span>${group.name}</span></span>
                <span class="accordion-meta">${group.products.length} items</span>
            </button>
            <div class="accordion-panel ${isOpen ? "open" : ""}" id="${panelId}">
                <div class="table-wrap">
                    <table aria-label="${group.name} product list with pricing and totals">
                        <thead>
                            <tr>
                                <th style="display:none">SI.No</th>
                                <th>Product Name</th>
                                <th>Price (Original / Offer)</th>
                                <th>Quantity</th>
                                <th>Total Offer Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${group.products.map((product) => createRowMarkup(product)).join("")}
                        </tbody>
                    </table>
                </div>
            </div>
        `;

        accordion.appendChild(section);
    });
}

function updateTotals() {
    let grandTotal = 0;
    let grandOfferTotal = 0;
    let selectedProductCount = 0;
    let totalQuantity = 0;

    products.forEach((product) => {
        const quantity = quantityState.get(product.id) || 0;
        const pricing = calculatePrices(product, quantity);

        if (quantity > 0) {
            selectedProductCount += 1;
        }

        const offerTotalCell = document.getElementById(`offer-total-${product.id}`);
        if (offerTotalCell) {
            offerTotalCell.textContent = formatAmount(pricing.rowOfferTotal);
        }
        updateProductRowState(product.id, quantity);

        grandTotal += pricing.rowTotal;
        grandOfferTotal += pricing.rowOfferTotal;
        totalQuantity += quantity;
    });

    productCountEl.textContent = String(selectedProductCount);
    totalDiscountEl.textContent = formatAmount(grandTotal - grandOfferTotal);
    grandTotalEl.textContent = formatAmount(grandTotal);
    grandOfferTotalEl.textContent = formatAmount(grandOfferTotal);
    reviewProductCountEl.textContent = String(selectedProductCount);
    reviewTotalQuantityEl.textContent = String(totalQuantity);
    reviewGrandTotalEl.textContent = formatAmount(grandTotal);
    reviewGrandOfferTotalEl.textContent = formatAmount(grandOfferTotal);
    updateMinimumOrderProgress(grandOfferTotal);
    updateMiniCartSummary(selectedProductCount, totalQuantity, grandTotal, grandOfferTotal);
}

function getSelectedProducts() {
    return products
        .map((product) => ({ product, quantity: quantityState.get(product.id) || 0 }))
        .filter((item) => item.quantity > 0);
}

function getCurrentGrandOfferTotal() {
    return products.reduce((sum, product) => {
        const quantity = quantityState.get(product.id) || 0;
        const pricing = calculatePrices(product, quantity);
        return sum + pricing.rowOfferTotal;
    }, 0);
}

function isMinimumOrderMet() {
    return getCurrentGrandOfferTotal() >= MIN_ORDER_OFFER_AMOUNT;
}

function getCustomerDetails() {
    return {
        name: customerNameEl.value.trim(),
        phone: customerPhoneEl.value.trim(),
        address: customerAddressEl.value.trim()
    };
}

function setFieldError(field, errorEl, message = "") {
    const hasError = Boolean(message);

    field.classList.toggle("input-error", hasError);
    errorEl.textContent = message;
    errorEl.classList.toggle("hidden", !hasError);
    field.setAttribute("aria-invalid", String(hasError));
}

function validateCustomerDetails() {
    const customer = getCustomerDetails();
    const cleanedPhone = customer.phone.replace(/\D/g, "");
    const errors = {
        name: customer.name.length > 1 ? "" : "Please enter at least 2 characters.",
        phone: cleanedPhone.length >= 10 ? "" : "Please enter a valid 10-digit mobile number.",
        address: customer.address.length > 5 ? "" : "Please enter at least 6 characters for the address."
    };

    setFieldError(customerNameEl, customerNameErrorEl, errors.name);
    setFieldError(customerPhoneEl, customerPhoneErrorEl, errors.phone);
    setFieldError(customerAddressEl, customerAddressErrorEl, errors.address);

    return {
        isValid: !errors.name && !errors.phone && !errors.address,
        firstInvalidField: errors.name ? customerNameEl : errors.phone ? customerPhoneEl : errors.address ? customerAddressEl : null
    };
}

function renderReviewTable() {
    const selectedItems = getSelectedProducts();
    reviewTableBody.innerHTML = "";

    if (selectedItems.length === 0) {
        reviewEmptyState.classList.remove("hidden");
        return;
    }

    reviewEmptyState.classList.add("hidden");

    selectedItems.forEach(({ product, quantity }, index) => {
        const pricing = calculatePrices(product, quantity);

        const row = document.createElement("tr");
        row.innerHTML = buildReviewRowMarkup(product, quantity, pricing, index);

        reviewTableBody.appendChild(row);
    });
}

function renderInvoice() {
    const selectedItems = getSelectedProducts();
    invoiceTableBody.innerHTML = "";

    let grandTotal = 0;
    let grandOfferTotal = 0;
    let totalQuantity = 0;

    selectedItems.forEach(({ product, quantity }, index) => {
        const pricing = calculatePrices(product, quantity);

        const row = document.createElement("tr");
        row.innerHTML = buildInvoiceRowMarkup(product, quantity, pricing, index);
        invoiceTableBody.appendChild(row);

        grandTotal += pricing.rowTotal;
        grandOfferTotal += pricing.rowOfferTotal;
        totalQuantity += quantity;
    });

    invoiceProductCountEl.textContent = String(selectedItems.length);
    invoiceTotalQuantityEl.textContent = String(totalQuantity);
    invoiceGrandTotalEl.textContent = formatAmount(grandTotal);
    invoiceGrandOfferTotalEl.textContent = formatAmount(grandOfferTotal);
}

function showScreen(targetScreen, direction = "forward") {
    window.scrollTo({ top: 0, behavior: "auto" });
    updateMiniCartVisibility(targetScreen);
    updateMiniCartAction(targetScreen);

    screens.forEach((screen) => {
        const isTarget = screen === targetScreen;
        screen.classList.toggle("hidden", !isTarget);
        screen.classList.remove("screen-active");
        screen.classList.remove("screen-forward", "screen-back");
    });

    void targetScreen.offsetWidth;
    targetScreen.classList.add(direction === "back" ? "screen-back" : "screen-forward");
    targetScreen.classList.add("screen-active");
}

function showReviewScreen() {
    if (!isMinimumOrderMet()) {
        showMinimumOrderWarning();
        return;
    }

    minimumOrderMessage.classList.add("hidden");
    renderReviewTable();
    showScreen(reviewScreen, "forward");
}

function showSelectionScreen() {
    showScreen(selectionScreen, "back");
}

function showInvoiceScreen() {
    const selectedItems = getSelectedProducts();
    if (selectedItems.length === 0) {
        reviewEmptyState.classList.remove("hidden");
        return;
    }

    if (!isMinimumOrderMet()) {
        return;
    }

    const customerValidation = validateCustomerDetails();
    if (!customerValidation.isValid) {
        customerValidation.firstInvalidField?.focus();
        return;
    }

    reviewEmptyState.classList.add("hidden");
    renderInvoice();

    const today = new Date();
    invoiceDateEl.textContent = today.toLocaleDateString("en-IN");
    invoiceNumberEl.textContent = getNextInvoiceNumber();

    const customer = getCustomerDetails();
    invoiceCustomerNameEl.textContent = customer.name;
    invoiceCustomerPhoneEl.textContent = customer.phone;
    invoiceCustomerAddressEl.textContent = customer.address;

    showScreen(invoiceScreen, "forward");
}

function sanitizeFileName(value) {
    return value.replace(/[\\/:*?"<>|]+/g, "-").replace(/\s+/g, " ").trim();
}

function buildDownloadDocument() {
    const invoiceNumber = invoiceNumberEl.textContent.trim() || "invoice";
    const invoiceCustomerName = invoiceCustomerNameEl.textContent.trim();
    const customerName = invoiceCustomerName && invoiceCustomerName !== "-"
        ? invoiceCustomerName
        : getCustomerDetails().name || "customer";
    const companyHeading = document.querySelector(".header").innerHTML;
    const invoiceMarkup = `
        <header class="download-header">${companyHeading}</header>
        <section class="download-invoice">
            ${invoiceScreen.querySelector(".review-header").outerHTML}
            ${invoiceScreen.querySelector(".invoice-meta").outerHTML}
            ${invoiceScreen.querySelector(".invoice-customer").outerHTML}
            ${invoiceScreen.querySelector(".table-wrap").outerHTML}
            ${invoiceScreen.querySelector(".invoice-summary").outerHTML}
            ${invoiceScreen.querySelector(".invoice-terms").outerHTML}
        </section>
    `;

    return {
        fileName: `${sanitizeFileName(customerName)}-${sanitizeFileName(invoiceNumber)}.html`,
        html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${invoiceNumber}</title>
    <style>
        body {
            margin: 0;
            padding: 24px;
            font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
            color: #1f2937;
            background: #f8fafc;
        }

        .sheet {
            max-width: 980px;
            margin: 0 auto;
            background: #ffffff;
            border: 1px solid #dbe4ee;
            border-radius: 18px;
            overflow: hidden;
            box-shadow: 0 18px 40px rgba(15, 23, 42, 0.08);
        }

        .download-header {
            padding: 22px 24px;
            background: linear-gradient(120deg, #ecfeff, #eff6ff);
            border-bottom: 2px solid #cbd5e1;
        }

        .download-header h1,
        .download-invoice h2,
        .download-invoice h3 {
            margin-top: 0;
        }

        .download-header p {
            margin: 4px 0 0;
            color: #4b5563;
        }

        .download-invoice {
            padding: 20px 24px 24px;
        }

        .review-header {
            padding: 0 0 12px;
            border-bottom: 2px solid #0f766e;
            margin-bottom: 14px;
        }

        .invoice-meta {
            display: flex;
            flex-wrap: wrap;
            gap: 12px 18px;
            padding: 0 0 14px;
            color: #4b5563;
        }

        .invoice-customer,
        .invoice-terms,
        .summary-item {
            border: 1px solid #dbe4ee;
            border-radius: 12px;
            background: #ffffff;
        }

        .invoice-customer {
            margin-bottom: 14px;
            padding: 12px 14px;
            background: #f8fafc;
        }

        .invoice-customer p {
            margin: 4px 0;
        }

        .table-wrap {
            overflow: auto;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 16px;
        }

        th,
        td {
            padding: 10px 12px;
            border: 1px solid #e5e7eb;
            text-align: left;
            font-size: 14px;
            vertical-align: top;
        }

        th {
            background: #f8fafc;
        }

        .summary {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;
            margin-bottom: 16px;
        }

        .summary-item {
            padding: 14px;
        }

        .label {
            display: block;
            margin-bottom: 6px;
            color: #6b7280;
        }

        .amount-original {
            color: #b91c1c;
            text-decoration: line-through;
        }

        .amount-offer {
            color: #166534;
            font-weight: 700;
        }

        .amount-fixed {
            color: #0f172a;
            font-weight: 700;
        }

        .price-line {
            line-height: 1.4;
        }

        .price-tag {
            font-size: 11px;
            font-weight: 700;
            color: #6b7280;
            text-transform: uppercase;
        }

        .invoice-terms {
            padding: 12px 14px;
            background: #fafafa;
        }

        .invoice-terms ol {
            margin: 0;
            padding-left: 18px;
        }

        @media print {
            body {
                padding: 0;
                background: #ffffff;
            }

            .sheet {
                max-width: none;
                border: 0;
                border-radius: 0;
                box-shadow: none;
            }
        }
    </style>
 </head>
<body>
    <main class="sheet">${invoiceMarkup}</main>
</body>
</html>`
    };
}

function downloadInvoice() {
    const { fileName, html } = buildDownloadDocument();

    const blob = new Blob([html], {
        type: "text/html;charset=utf-8"
    });

    // Create the actual file
    const file = new File([blob], fileName, {
        type: "text/html"
    });

    // Download the file
    const downloadUrl = URL.createObjectURL(file);
    const link = document.createElement("a");

    link.href = downloadUrl;
    link.download = fileName;

    document.body.appendChild(link);
    link.click();
    link.remove();

    showDownloadToast("Invoice downloaded. Please attach the PDF in WhatsApp.");
    setTimeout(() => {
        URL.revokeObjectURL(downloadUrl);

        // Open WhatsApp
        const phoneNumber = "917010942234";

        window.open(
            `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                "Hello, I am sharing my invoice."
            )}`,
            "_blank"
        );
    }, 500);

}




function showDownloadToast(message = "Invoice downloaded. Please attach the PDF in WhatsApp") {
    if (downloadToastTimer) {
        clearTimeout(downloadToastTimer);
    }

    downloadToastEl.textContent = message;
    downloadToastEl.classList.remove("hidden");
    downloadToastEl.classList.add("toast-visible");

    downloadToastTimer = window.setTimeout(() => {
        downloadToastEl.classList.remove("toast-visible");
        downloadToastEl.classList.add("hidden");
        downloadToastTimer = null;
    }, 2200);
}

function initBasicSourceProtection() {
    document.addEventListener("contextmenu", (event) => {
        event.preventDefault();
    });

    document.addEventListener("keydown", (event) => {
        const key = event.key.toLowerCase();
        const isCtrlOrMeta = event.ctrlKey || event.metaKey;

        if (event.key === "F12") {
            event.preventDefault();
            return;
        }

        if (isCtrlOrMeta && (key === "u" || key === "s" || key === "p")) {
            event.preventDefault();
        }

        if (event.ctrlKey && event.shiftKey && (key === "i" || key === "j" || key === "c")) {
            event.preventDefault();
        }
    });
}

accordion.addEventListener("input", (event) => {
    if (event.target.classList.contains("quantity")) {
        setQuantityValue(Number(event.target.dataset.id), Number(event.target.value) || 0);
    }
});

accordion.addEventListener("click", (event) => {
    const quantityButton = event.target.closest(".quantity-action");
    if (quantityButton) {
        const productId = quantityButton.dataset.id;
        const input = event.target.closest("tr")?.querySelector(`input[data-id="${productId}"]`)
            || document.querySelector(`input[data-id="${productId}"]`);
        if (input) {
            const currentValue = Math.max(0, Number(input.value) || 0);
            const nextValue = quantityButton.dataset.action === "increase"
                ? currentValue + 1
                : currentValue - 1;
            setQuantityValue(Number(productId), nextValue);
        }
        return;
    }

    const trigger = event.target.closest(".accordion-trigger");
    if (!trigger) {
        return;
    }

    const panelId = trigger.getAttribute("aria-controls");
    const panel = document.getElementById(panelId);
    const expanded = trigger.getAttribute("aria-expanded") === "true";

    trigger.setAttribute("aria-expanded", String(!expanded));
    panel.classList.toggle("open", !expanded);
});

reviewTableBody.addEventListener("input", (event) => {
    if (event.target.classList.contains("quantity")) {
        setQuantityValue(Number(event.target.dataset.id), Number(event.target.value) || 0);
    }
});

reviewTableBody.addEventListener("click", (event) => {
    const quantityButton = event.target.closest(".quantity-action");
    if (!quantityButton) {
        return;
    }

    const productId = Number(quantityButton.dataset.id);
    const input = event.target.closest("tr")?.querySelector(`input[data-id="${productId}"]`);
    const currentValue = Math.max(0, Number(input?.value) || 0);
    const nextValue = quantityButton.dataset.action === "increase"
        ? currentValue + 1
        : currentValue - 1;

    setQuantityValue(productId, nextValue);
});

reviewButton.addEventListener("click", () => {
    showReviewScreen();
});

miniCartReviewButton.addEventListener("click", () => {
    if (!reviewScreen.classList.contains("hidden")) {
        showInvoiceScreen();
        return;
    }

    showReviewScreen();
});

miniCartResetButton.addEventListener("click", () => {
    resetSession();
});

webResetButtons.forEach((button) => {
    button.addEventListener("click", () => {
        resetSession();
    });
});

backButton.addEventListener("click", () => {
    showSelectionScreen();
});

invoiceButton.addEventListener("click", () => {
    showInvoiceScreen();
});

invoiceBackButton.addEventListener("click", () => {
    showReviewScreen();
});

printButton.addEventListener("click", () => {
    downloadInvoice();
});

[customerNameEl, customerPhoneEl, customerAddressEl].forEach((field) => {
    field.addEventListener("input", () => {
        validateCustomerDetails();
        persistCustomerDetails();
    });
});

//initBasicSourceProtection();
restoreQuantities();
restoreCustomerDetails();
populateGroupFilter();
renderAccordion();
updateTotals();
showScreen(selectionScreen, "forward");

productSearchEl.addEventListener("input", () => {
    renderAccordion();
    updateTotals();
});

groupFilterEl.addEventListener("change", () => {
    renderAccordion();
    updateTotals();
});

window.addEventListener("scroll", updateMiniCartScrollState, { passive: true });
window.addEventListener("resize", updateMiniCartScrollState);
updateMiniCartScrollState();
