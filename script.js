const productGroups = [
    {
        name: "SRI SAI'S SOUND CRACKERS",
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
        name: "SRI SAI'S CHORSA CRACKERS",
        products: [
            { id: 7, name: "28 CHORSA TURKEY,TAJ", price: 44 },
            { id: 8, name: "56 CHORSA TURKEY,TAJ", price: 82 }
        ]
    },
    {
        name: "SRI SAI'S GAINT CRACKERS",
        products: [
            { id: 9, name: "28 SUPER GAINT TIGER,TAJ", price: 63 },
            { id: 10, name: "56 SUPER GAINT TIGER,TAJ", price: 126 }
        ]
    },
    {
        name: "SRI SAI'S DELUXE CRACKERS",
        products: [
            { id: 11, name: "24 DELUXE", price: 122 },
            { id: 12, name: "28 DELUXE", price: 145 },
            { id: 13, name: "50 DELUXE", price: 270 }
        ]
    },
    {
        name: "SRI SAI'S BUJILI CRACKERS",
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
        name: "SRI SAI'S BOMBS",
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
        name: "SRI SAI'S GROUND CHAKKARS",
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
        name: "SRI SAI'S FLOWER POTS",
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
        name: "SRI SAI'S CHILDREN'S SPECIAL",
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
        name: "SRI SAI'S ROCKETS",
        products: [
            { id: 55, name: "COLOUR ROCKET", price: 144 },
            { id: 56, name: "ROCKET BOMB", price: 149 },
            { id: 57, name: "LUNIK EXPRESS", price: 263 },
            { id: 58, name: "DOUBLE SOUND ROCKET", price: 279 },
            { id: 59, name: "THREE SOUND ROCKET", price: 290 }
        ]
    },
    {
        name: "SRI SAI'S MEGA ROCKET",
        products: [
            { id: 60, name: "NIRBHAV ROCKET", price: 838 },
            { id: 61, name: "AGNI ROCKET", price: 838 },
            { id: 62, name: "BRAMOTS ROCKET", price: 838 },
            { id: 63, name: "PRITHIVI ROCKET", price: 838 },
            { id: 64, name: "SHOURYA ROCKET", price: 838 }
        ]
    },
    {
        name: "SRI SAI'S AERIALS",
        products: [
            { id: 65, name: "DARLING DANCER", price: 281 },
            { id: 66, name: "MEGA SIREN", price: 585 },
            { id: 67, name: "7 COLOUR SHOTS (5PCS)", price: 270 },
            { id: 68, name: "EMERALD ROBO (5PCS)", price: 306 },
            { id: 69, name: "SILVER ROBO (5PCS)", price: 306 },
            { id: 70, name: "RUSSIA ROBO (5PCS)", price: 306 },
            { id: 71, name: "SAI SKY PENDA", price: 396 }
        ]
    },
    {
        name: "SRI SAI'S SOUND NOVELTIES",
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
        name: "SRI SAI'S SKY SHOT COLOURS WINDOW",
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
        name: "SRI SAI'S 1 3/4\" FANCY (3 PIECES PACKING)",
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
        name: "SRI SAI'S RANG DHARBAR (2\" FANCY SINGLE PCS)",
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
        name: "SRI SAI'S 2\" FANCY (3 PIECES WITH MULTI COLOUR PACKING)",
        products: [
            { id: 105, name: "FOLK", price: 855 },
            { id: 106, name: "SWING", price: 855 },
            { id: 107, name: "GYPSY", price: 855 },
            { id: 108, name: "BALLE", price: 855 }
        ]
    },
    {
        name: "SRI SAI'S 2 3/4\" FANCY (2 PCS PACKING)",
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
        name: "SRI SAI'S AKASH MELA (3 1/2\" FANCY)",
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
        name: "SRI SAI'S 3 1/2\" FANCY (DOUBLE BALL FUNCTION)",
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
        name: "SRI SAI'S 3 1/2\" FANCY (7 STEP FUNCTION)",
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
        name: "SRI SAI'S 4\" FANCY (2 PCS PACKING WINDOW)",
        products: [
            { id: 137, name: "DING DONG", price: 2403 },
            { id: 138, name: "JIM JAM", price: 2403 },
            { id: 139, name: "ZIG ZAG", price: 2403 },
            { id: 140, name: "YIN YANG", price: 2403 }
        ]
    },
    {
        name: "SRI SAI'S 5\" FANCY (2 PCS PACKING WINDOW)",
        products: [
            { id: 141, name: "APPLE", price: 3213 },
            { id: 142, name: "GRAPES", price: 3213 },
            { id: 143, name: "MANGO", price: 3213 },
            { id: 144, name: "PINEAPPLE", price: 3213 }
        ]
    },
    {
        name: "SRI SAI' NEW ARRIVAL",
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
        name: "SRI SAI'S MULTI COLOURS AERIAL",
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
        name: "SRI SAI'S SPARKLERS",
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
        name: "SRI SAI'S GIFT BOXES",
        products: [
            { id: 201, name: "JOLLY 16 ITEMS", price: 498 },
            { id: 202, name: "FANTASY 21 ITEMS", price: 686 },
            { id: 203, name: "ENJOY 25 ITEMS", price: 873 },
            { id: 204, name: "BEAUTY 30 ITEMS", price: 1057 },
            { id: 205, name: "SHINY 35 ITEMS", price: 1260 },
            { id: 206, name: "JAMMAI 40 ITEMS", price: 1404 },
            { id: 207, name: "DISNEY 45 ITEMS", price: 1651 },
            { id: 208, name: "LUXURY 50 ITEMS", price: 2115 },
            { id: 209, name: "ROYAL GALAXY 60 ITEMS", price: 2466 }
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

const CUSTOMER_DISCOUNT_RATE = 0.50;
const SHOWCASE_DISCOUNT_RATE = 0.;
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

const reviewButton = document.getElementById("reviewButton");
const backButton = document.getElementById("backButton");
const invoiceButton = document.getElementById("invoiceButton");
const invoiceBackButton = document.getElementById("invoiceBackButton");
const printButton = document.getElementById("printButton");

const invoiceDateEl = document.getElementById("invoiceDate");
const invoiceNumberEl = document.getElementById("invoiceNumber");
const invoiceProductCountEl = document.getElementById("invoiceProductCount");
const invoiceTotalQuantityEl = document.getElementById("invoiceTotalQuantity");
const invoiceGrandTotalEl = document.getElementById("invoiceGrandTotal");
const invoiceGrandOfferTotalEl = document.getElementById("invoiceGrandOfferTotal");
const customerNameEl = document.getElementById("customerName");
const customerPhoneEl = document.getElementById("customerPhone");
const customerAddressEl = document.getElementById("customerAddress");
const invoiceCustomerNameEl = document.getElementById("invoiceCustomerName");
const invoiceCustomerPhoneEl = document.getElementById("invoiceCustomerPhone");
const invoiceCustomerAddressEl = document.getElementById("invoiceCustomerAddress");
const totalAmountTitle = document.getElementById("totalAmountTitle");

const products = productGroups.flatMap((group) => group.products);
const productGroupById = new Map();

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

function calculatePrices(price, quantity) {
    const showcasedOriginalPrice = (price );
    const customerOfferPrice = price * customerOfferRate;

    const rowTotal = quantity * showcasedOriginalPrice;
    const rowOfferTotal = quantity * customerOfferPrice;

    return {
        showcasedOriginalPrice,
        customerOfferPrice,
        rowTotal,
        rowOfferTotal
    };
}

function buildPricePairCell(originalAmount, offerAmount) {
    return `
        <td class="price-pair-cell">
            <div class="price-line"><span class="amount-original">${formatAmount(originalAmount)}</span></div>
            <div class="price-line"><span class="amount-offer">${formatAmount(offerAmount)}</span></div>
        </td>
    `;
}

function createRowMarkup(product) {
    const pricing = calculatePrices(product.price, 0);

    return `
        <tr>
            <td>${product.id}</td>
            <td>${product.name}</td>
            ${buildPricePairCell(pricing.showcasedOriginalPrice, pricing.customerOfferPrice)}
            <td >
                <input
                    type="number"
                    min="0"
                    value="0"
                    class="quantity"
                    data-id="${product.id}"
                    aria-label="Quantity for ${product.name}"
                >
            </td>
            <td class="money amount-original" style="display:none" id="total-${product.id}">0.00</td>
            <td class="money amount-offer" id="offer-total-${product.id}">0.00</td>
        </tr>
    `;
}

function renderAccordion() {
    accordion.innerHTML = "";

    productGroups.forEach((group, index) => {
        const isOpen = true;
        const panelId = `group-panel-${index}`;

        const section = document.createElement("section");
        section.className = "accordion-item";

        section.innerHTML = `
            <button class="accordion-trigger" type="button" aria-expanded="${isOpen}" aria-controls="${panelId}">
                <span>${group.name}</span>
                <span class="accordion-meta">${group.products.length} items</span>
            </button>
            <div class="accordion-panel ${isOpen ? "open" : ""}" id="${panelId}">
                <div class="table-wrap">
                    <table aria-label="${group.name} product list with pricing and totals">
                        <thead>
                            <tr>
                                <th>SI.No</th>
                                <th>Product Name</th>
                                <th>Price (Original / Offer)</th>
                                <th>Quantity</th>
                                <th style='display:none'>Total Amount demo</th>
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

    products.forEach((product) => {
        const qtyInput = document.querySelector(`input[data-id="${product.id}"]`);
        const quantity = Math.max(0, Number(qtyInput?.value) || 0);
        const pricing = calculatePrices(product.price, quantity);

        if (quantity > 0) {
            selectedProductCount += 1;
        }

        document.getElementById(`total-${product.id}`).textContent = formatAmount(pricing.rowTotal);
        document.getElementById(`offer-total-${product.id}`).textContent = formatAmount(pricing.rowOfferTotal);

        grandTotal += pricing.rowTotal;
        grandOfferTotal += pricing.rowOfferTotal;
    });

    productCountEl.textContent = String(selectedProductCount);
    totalDiscountEl.textContent = formatAmount(grandTotal - grandOfferTotal);
    grandTotalEl.textContent = formatAmount(grandTotal);
    grandOfferTotalEl.textContent = formatAmount(grandOfferTotal);
}

function getSelectedProducts() {
    return products
        .map((product) => {
            const qtyInput = document.querySelector(`input[data-id="${product.id}"]`);
            const quantity = Math.max(0, Number(qtyInput?.value) || 0);
            return { product, quantity };
        })
        .filter((item) => item.quantity > 0);
}

function getCurrentGrandOfferTotal() {
    return products.reduce((sum, product) => {
        const qtyInput = document.querySelector(`input[data-id="${product.id}"]`);
        const quantity = Math.max(0, Number(qtyInput?.value) || 0);
        const pricing = calculatePrices(product.price, quantity);
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

function isCustomerDetailsValid() {
    const customer = getCustomerDetails();
    const cleanedPhone = customer.phone.replace(/\D/g, "");

    return (
        customer.name.length > 1
        && cleanedPhone.length >= 10
        && customer.address.length > 5
    );
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
        const pricing = calculatePrices(product.price, quantity);

        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>PC-${String(product.id)}</td>
            <td>${productGroupById.get(product.id)}</td>
            <td>${product.name}</td>
            ${buildPricePairCell(pricing.showcasedOriginalPrice, pricing.customerOfferPrice)}
            <td>${quantity}</td>
            <td class="money amount-original totalAmountValue" >${formatAmount(pricing.rowTotal)} demo</td>
            <td class="money amount-offer">${formatAmount(pricing.rowOfferTotal)}</td>
        `;

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
        const pricing = calculatePrices(product.price, quantity);

        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>PC-${String(product.id)}</td>
            <td>${productGroupById.get(product.id)}</td>
            <td>${product.name}</td>
            ${buildPricePairCell(pricing.showcasedOriginalPrice, pricing.customerOfferPrice)}
            <td>${quantity}</td>
            <td class="money amount-original" style="display:none">${formatAmount(pricing.rowTotal)}</td>
            <td class="money amount-offer">${formatAmount(pricing.rowOfferTotal)}</td>
        `;
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

function showReviewScreen() {
    if (!isMinimumOrderMet()) {
        minimumOrderMessage.classList.remove("hidden");
        return;
    }

    minimumOrderMessage.classList.add("hidden");
    renderReviewTable();
    selectionScreen.classList.add("hidden");
    invoiceScreen.classList.add("hidden");
    reviewScreen.classList.remove("hidden");
}

function showSelectionScreen() {
    customerFormMessage.classList.add("hidden");
    invoiceScreen.classList.add("hidden");
    reviewScreen.classList.add("hidden");
    selectionScreen.classList.remove("hidden");
}

function showInvoiceScreen() {
    const selectedItems = getSelectedProducts();
    if (selectedItems.length === 0) {
        reviewEmptyState.classList.remove("hidden");
        return;
    }

    if (!isMinimumOrderMet()) {
        customerFormMessage.textContent = "Minimum order not met. Total Offer Amount must be at least 3,000.00.";
        customerFormMessage.classList.remove("hidden");
        return;
    }

    if (!isCustomerDetailsValid()) {
        customerFormMessage.textContent = "Please fill customer name, mobile number, and delivery address to generate invoice.";
        customerFormMessage.classList.remove("hidden");
        return;
    }

    reviewEmptyState.classList.add("hidden");
    customerFormMessage.classList.add("hidden");
    renderInvoice();

    const today = new Date();
    invoiceDateEl.textContent = today.toLocaleDateString("en-IN");
    invoiceNumberEl.textContent = getNextInvoiceNumber();

    const customer = getCustomerDetails();
    invoiceCustomerNameEl.textContent = customer.name;
    invoiceCustomerPhoneEl.textContent = customer.phone;
    invoiceCustomerAddressEl.textContent = customer.address;

    selectionScreen.classList.add("hidden");
    reviewScreen.classList.add("hidden");
    invoiceScreen.classList.remove("hidden");
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
        minimumOrderMessage.classList.add("hidden");
        updateTotals();
    }
});

accordion.addEventListener("click", (event) => {
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

reviewButton.addEventListener("click", () => {
    showReviewScreen();
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

// printButton.addEventListener("click", async() => {
//     //window.print();
//     invoiceBackButton.classList.add("hidden");
//     printButton.classList.add("hidden");
//     await downloadCurrentPagePDF()
//     invoiceBackButton.classList.remove("hidden");
//     printButton.classList.add("hidden");
// });

printButton.addEventListener("click", async () => {
    invoiceBackButton.classList.add("hidden");
    printButton.classList.add("hidden");

    try {
        await downloadCurrentPagePDF();
    } catch (error) {
        console.error("PDF generation failed:", error);
        alert("Unable to generate PDF. Please try again.");
    } finally {
        invoiceBackButton.classList.remove("hidden");
        printButton.classList.remove("hidden");
    }
});

async function downloadCurrentPagePDF() {
    const { jsPDF } = window.jspdf;

    const invoice = document.getElementById("invoiceScreen");

    if (!invoice) {
        alert("Invoice screen not found.");
        return;
    }

    // Create a clone so the real webpage is not changed
    const pdfContainer = invoice.cloneNode(true);

    // Remove buttons from PDF
    const buttons = pdfContainer.querySelectorAll(".actions");
    buttons.forEach(button => button.remove());

    // Give PDF a fixed desktop/A4-friendly layout
    pdfContainer.style.display = "block";
    pdfContainer.style.position = "absolute";
    pdfContainer.style.left = "-10000px";
    pdfContainer.style.top = "0";
    pdfContainer.style.width = "1100px";
    pdfContainer.style.maxWidth = "1100px";
    pdfContainer.style.background = "#ffffff";
    pdfContainer.style.padding = "20px";
    pdfContainer.style.boxSizing = "border-box";

    // Make invoice table readable on mobile and desktop PDF
    const tableWraps = pdfContainer.querySelectorAll(".table-wrap");

    tableWraps.forEach(wrapper => {
        wrapper.style.width = "100%";
        wrapper.style.overflow = "visible";
    });

    const tables = pdfContainer.querySelectorAll("table");

    tables.forEach(table => {
        table.style.width = "100%";
        table.style.minWidth = "0";
        table.style.tableLayout = "auto";
    });

    const cells = pdfContainer.querySelectorAll("th, td");

    cells.forEach(cell => {
        cell.style.fontSize = "12px";
        cell.style.padding = "8px";
        cell.style.whiteSpace = "normal";
        cell.style.wordBreak = "normal";
        cell.style.overflowWrap = "break-word";
    });

    // Make customer address readable
    const address = pdfContainer.querySelector("#invoiceCustomerAddress");

    if (address) {
        address.style.whiteSpace = "pre-wrap";
        address.style.wordBreak = "break-word";
    }

    // Add PDF clone to page temporarily
    document.body.appendChild(pdfContainer);

    // Allow browser to render clone
    await new Promise(resolve => setTimeout(resolve, 300));

    // Capture invoice only
    const canvas = await html2canvas(pdfContainer, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: "#ffffff",
        logging: false
    });

    // Remove temporary clone
    document.body.removeChild(pdfContainer);

    const imgData = canvas.toDataURL("image/jpeg", 0.95);

    // A4 PDF
    const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4"
    });

    const pageWidth = 210;
    const pageHeight = 297;

    const margin = 8;
    const usableWidth = pageWidth - (margin * 2);

    const imageHeight =
        (canvas.height * usableWidth) / canvas.width;

    let heightLeft = imageHeight;
    let position = margin;

    // First page
    pdf.addImage(
        imgData,
        "JPEG",
        margin,
        position,
        usableWidth,
        imageHeight
    );

    heightLeft -= (pageHeight - margin);

    // Additional pages
    while (heightLeft > 0) {
        position = margin - (imageHeight - heightLeft);

        pdf.addPage();

        pdf.addImage(
            imgData,
            "JPEG",
            margin,
            position,
            usableWidth,
            imageHeight
        );

        heightLeft -= (pageHeight - margin);
    }

    // Get customer name for filename
    const customerName =
        customerNameEl.value.trim()
            .replace(/[^a-zA-Z0-9]/g, "_")
            .substring(0, 30) || "Customer";

    const invoiceNumber =
        invoiceNumberEl.textContent || "Invoice";

    pdf.save(
        `Seyon-Crackers-${invoiceNumber}-${customerName}.pdf`
    );
}
// async function downloadCurrentPagePDF() {
//     const { jsPDF } = window.jspdf;

//     // Capture the current page
//     const canvas = await html2canvas(document.body, {
//         scale: 2,
//         useCORS: true,
//         backgroundColor: "#ffffff"
//     });

//     const imgData = canvas.toDataURL("image/jpeg", 0.95);

//     // A4 PDF
//     const pdf = new jsPDF("p", "mm", "a4");

//     const pageWidth = 210;
//     const pageHeight = 297;

//     const imgWidth = pageWidth;
//     const imgHeight = (canvas.height * imgWidth) / canvas.width;

//     let heightLeft = imgHeight;
//     let position = 0;

//     // First page
//     pdf.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight);
//     heightLeft -= pageHeight;

//     // Additional pages
//     while (heightLeft > 0) {
//         position = heightLeft - imgHeight;
//         pdf.addPage();
//         pdf.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight);
//         heightLeft -= pageHeight;
//     }

//     pdf.save("Seyon-Crackers-Page.pdf");
// }

//initBasicSourceProtection();
renderAccordion();
updateTotals();
