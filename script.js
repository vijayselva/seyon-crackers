const productGroups = [
    {
        name: "Electronics",
        products: [
            { id: 1, name: "Laptop", price: 41 },
            { id: 2, name: "Smartphone", price: 390 },
            { id: 3, name: "Headphones", price: 195 }
        ]
    },
    {
        name: "Computer Peripherals",
        products: [
            { id: 4, name: "Keyboard", price: 10 },
            { id: 5, name: "Mouse", price: 250 }
        ]
    },
    {
        name: "Accessories",
        products: [
            { id: 6, name: "USB Hub", price: 180 },
            { id: 7, name: "Laptop Stand", price: 2466 }
        ]
    }
];

const CUSTOMER_DISCOUNT_RATE = 0.5;
const SHOWCASE_DISCOUNT_RATE = 0.9;
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
    const showcasedOriginalPrice = (price * customerOfferRate) / showcaseOriginalRate;
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
            <td>
                <input
                    type="number"
                    min="0"
                    value="0"
                    class="quantity"
                    data-id="${product.id}"
                    aria-label="Quantity for ${product.name}"
                >
            </td>
            <td class="money amount-original" id="total-${product.id}">0.00</td>
            <td class="money amount-offer" id="offer-total-${product.id}">0.00</td>
        </tr>
    `;
}

function renderAccordion() {
    accordion.innerHTML = "";

    productGroups.forEach((group, index) => {
        const isOpen = index === 0;
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
                                <th>Total Amount</th>
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
            <td>${String(product.id)}</td>
            <td>${productGroupById.get(product.id)}</td>
            <td>${product.name}</td>
            ${buildPricePairCell(pricing.showcasedOriginalPrice, pricing.customerOfferPrice)}
            <td>${quantity}</td>
            <td class="money amount-original">${formatAmount(pricing.rowTotal)}</td>
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
            <td>${String(product.id)}</td>
            <td>${productGroupById.get(product.id)}</td>
            <td>${product.name}</td>
            ${buildPricePairCell(pricing.showcasedOriginalPrice, pricing.customerOfferPrice)}
            <td>${quantity}</td>
            <td class="money amount-original">${formatAmount(pricing.rowTotal)}</td>
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

printButton.addEventListener("click", () => {
    window.print();
});

initBasicSourceProtection();
renderAccordion();
updateTotals();
