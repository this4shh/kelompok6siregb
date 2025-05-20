// Sample product data
const products = [
    {
        id: 1,
        name: "Dell XPS 15 (2023)",
        price: 1799.99,
        category: "ultrabooks",
        brand: "dell",
        image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "The Dell XPS 15 is a premium ultrabook with stunning 4K display and powerful performance.",
        specs: [
            "15.6\" 4K UHD Touch Display",
            "Intel Core i7-11800H",
            "16GB DDR4 RAM",
            "512GB NVMe SSD",
            "NVIDIA GeForce RTX 3050 Ti",
            "Windows 11 Pro"
        ]
    },
    {
        id: 2,
        name: "ASUS ROG Zephyrus G15",
        price: 2199.99,
        category: "gaming",
        brand: "asus",
        image: "https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Powerful gaming laptop with AMD Ryzen 9 and NVIDIA RTX 3080 for ultimate gaming performance.",
        specs: [
            "15.6\" QHD 165Hz Display",
            "AMD Ryzen 9 5900HS",
            "32GB DDR4 RAM",
            "1TB NVMe SSD",
            "NVIDIA GeForce RTX 3080",
            "Windows 11 Home"
        ]
    },
    {
        id: 3,
        name: "MacBook Pro 16\" M2 Max",
        price: 3499.99,
        category: "ultrabooks",
        brand: "apple",
        image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "The most powerful MacBook Pro ever with M2 Max chip and stunning Liquid Retina XDR display.",
        specs: [
            "16.2\" Liquid Retina XDR Display",
            "Apple M2 Max Chip",
            "32GB Unified Memory",
            "1TB SSD Storage",
            "38-core GPU",
            "macOS Ventura"
        ]
    },
    {
        id: 4,
        name: "Lenovo ThinkPad X1 Carbon",
        price: 1599.99,
        category: "business",
        brand: "lenovo",
        image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Legendary business laptop with military-grade durability and best-in-class keyboard.",
        specs: [
            "14\" WQXGA IPS Display",
            "Intel Core i7-1165G7",
            "16GB LPDDR4X RAM",
            "512GB NVMe SSD",
            "Intel Iris Xe Graphics",
            "Windows 11 Pro"
        ]
    },
    {
        id: 5,
        name: "HP Spectre x360 14",
        price: 1399.99,
        category: "ultrabooks",
        brand: "hp",
        image: "https://images.unsplash.com/photo-1618410320929-65c181f5f8c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Elegant 2-in-1 convertible laptop with OLED display and premium design.",
        specs: [
            "14\" 3K2K OLED Touch Display",
            "Intel Core i7-1165G7",
            "16GB LPDDR4X RAM",
            "1TB NVMe SSD",
            "Intel Iris Xe Graphics",
            "Windows 11 Home"
        ]
    },
    {
        id: 6,
        name: "Alienware m15 R7",
        price: 2499.99,
        category: "gaming",
        brand: "dell",
        image: "https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "High-performance gaming laptop with advanced cooling and RGB lighting.",
        specs: [
            "15.6\" QHD 240Hz Display",
            "Intel Core i9-12900H",
            "32GB DDR5 RAM",
            "1TB NVMe SSD",
            "NVIDIA GeForce RTX 3070 Ti",
            "Windows 11 Home"
        ]
    },
    {
        id: 7,
        name: "MSI GS66 Stealth",
        price: 1899.99,
        category: "gaming",
        brand: "msi",
        image: "https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Sleek gaming laptop with powerful RTX graphics and high refresh rate display.",
        specs: [
            "15.6\" FHD 300Hz Display", 
            "Intel Core i7-11800H", 
            "16GB DDR4 RAM", 
            "1TB NVMe SSD", 
            "NVIDIA GeForce RTX 3070", 
            "Windows 11 Home"
        ]
    },
    {
        id: 8,
        name: "Acer Swift 5",
        price: 999.99,
        category: "ultrabooks",
        brand: "acer",
        image: "https://images.unsplash.com/photo-1618410320929-65c181f5f8c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Ultra-light laptop with impressive battery life and antimicrobial coating.",
        specs: [
            "14\" FHD IPS Touch Display",
            "Intel Core i5-1135G7",
            "8GB LPDDR4X RAM",
            "512GB NVMe SSD",
            "Intel Iris Xe Graphics",
            "Windows 11 Home"
        ]
    },
    {
        id: 9,
        name: "Microsoft Surface Laptop 4",
        price: 1299.99,
        category: "ultrabooks",
        brand: "microsoft",
        image: "https://images.unsplash.com/photo-1618410320929-65c181f5f8c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Sleek and stylish laptop with great keyboard and touchscreen display.",
        specs: [
            "13.5\" PixelSense Touch Display",
            "AMD Ryzen 5 4680U",
            "8GB RAM",
            "256GB SSD",
            "AMD Radeon Graphics",
            "Windows 11 Home"
        ]
    },
    {
        id: 10,
        name: "Razer Blade 15",
        price: 2299.99,
        category: "gaming",
        brand: "razer",
        image: "https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Premium gaming laptop with excellent build quality and powerful performance.",
        specs: [
            "15.6\" FHD 360Hz Display",
            "Intel Core i7-12700H",
            "16GB DDR5 RAM",
            "1TB NVMe SSD",
            "NVIDIA GeForce RTX 3080",
            "Windows 11 Home"
        ]
    }
];

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('productContainer')) {
        setupFilters();
        loadProducts();
    }
    
    if (document.getElementById('productName')) {
        loadProductDetails();
    }
});

// Setup filter event listeners
function setupFilters() {
    const categoryFilter = document.getElementById('categoryFilter');
    const priceFilter = document.getElementById('priceFilter');
    const brandFilter = document.getElementById('brandFilter');
    
    // Set initial value from URL params
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('category');
    
    if (categoryParam && categoryFilter) {
        categoryFilter.value = categoryParam;
    }
    
    // Add event listeners
    if (categoryFilter) {
        categoryFilter.addEventListener('change', loadProducts);
    }
    
    if (priceFilter) {
        priceFilter.addEventListener('change', loadProducts);
    }
    
    if (brandFilter) {
        brandFilter.addEventListener('change', loadProducts);
    }
}

// Load products onto the page with filters
function loadProducts() {
    const container = document.getElementById('productContainer');
    if (!container) return;
    
    container.innerHTML = '';
    
    // Get filter values
    const categoryFilter = document.getElementById('categoryFilter').value;
    const priceFilter = document.getElementById('priceFilter').value;
    const brandFilter = document.getElementById('brandFilter').value;
    
    // Apply filters
    let filteredProducts = products;
    
    // Category filter
    if (categoryFilter && categoryFilter !== 'all') {
        filteredProducts = filteredProducts.filter(p => p.category === categoryFilter);
    }
    
    // Price filter
    if (priceFilter && priceFilter !== 'all') {
        if (priceFilter === '0-1000') {
            filteredProducts = filteredProducts.filter(p => p.price < 1000);
        } else if (priceFilter === '1000-2000') {
            filteredProducts = filteredProducts.filter(p => p.price >= 1000 && p.price <= 2000);
        } else if (priceFilter === '2000+') {
            filteredProducts = filteredProducts.filter(p => p.price > 2000);
        }
    }
    
    // Brand filter
    if (brandFilter && brandFilter !== 'all') {
        filteredProducts = filteredProducts.filter(p => p.brand === brandFilter);
    }
    
    // Show message if no products match filters
    if (filteredProducts.length === 0) {
        container.innerHTML = `
            <div class="col-12 text-center py-5">
                <h3>No products match your filters</h3>
                <p>Try adjusting your filter criteria or <button class="btn btn-link p-0" onclick="resetFilters()">reset all filters</button>.</p>
            </div>
        `;
        return;
    }
    
    // Display products
    filteredProducts.forEach(product => {
        const col = document.createElement('div');
        col.className = 'col-md-4 col-lg-3 mb-4';
        col.innerHTML = `
            <div class="card product-card h-100">
                <img src="${product.image}" class="card-img-top product-card-img" alt="${product.name}">
                <div class="card-body product-card-body">
                    <h5 class="card-title product-card-title">${product.name}</h5>
                    <h6 class="product-card-price">$${product.price.toFixed(2)}</h6>
                    <ul class="product-card-specs">
                        ${product.specs.slice(0, 2).map(spec => `<li>${spec}</li>`).join('')}
                    </ul>
                    <a href="product-detail.html?id=${product.id}" class="btn btn-primary mt-auto">View Details</a>
                </div>
            </div>
        `;
        container.appendChild(col);
    });
}

// Reset all filters
function resetFilters() {
    document.getElementById('categoryFilter').value = 'all';
    document.getElementById('priceFilter').value = 'all';
    document.getElementById('brandFilter').value = 'all';
    loadProducts();
}

// Load product details
function loadProductDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    
    if (!productId) {
        window.location.href = 'products.html';
        return;
    }
    
    const product = products.find(p => p.id === productId);
    if (!product) {
        window.location.href = 'products.html';
        return;
    }
    
    // Set page title
    document.title = `${product.name} - TechHub`;
    
    // Set product info
    document.getElementById('productName').textContent = product.name;
    document.getElementById('productImage').src = product.image;
    document.getElementById('productPrice').textContent = `$${product.price.toFixed(2)}`;
    document.getElementById('productDescription').textContent = product.description;
    
    // Set specs
    const specsContainer = document.getElementById('productSpecs');
    specsContainer.innerHTML = '';
    product.specs.slice(0, 4).forEach(spec => {
        const li = document.createElement('li');
        li.className = 'mb-2';
        li.innerHTML = `<i class="fas fa-check text-primary me-2"></i>${spec}`;
        specsContainer.appendChild(li);
    });
    
    // Set full description
    document.getElementById('productFullDescription').innerHTML = `
        <p>${product.description}</p>
        <p>The ${product.name} is designed for professionals who demand the best in performance and portability. With its premium build quality and cutting-edge components, this laptop delivers exceptional performance for work and play.</p>
        <p>Featuring ${product.specs[0].toLowerCase()} and powered by ${product.specs[1]}, this laptop offers seamless multitasking and stunning visuals. The ${product.specs[4]} ensures smooth graphics performance for creative work and gaming.</p>
        <p>Whether you're a creative professional, business user, or gaming enthusiast, the ${product.name} provides the power and features you need to excel in your tasks.</p>
    `;
    
    // Set full specs
    const fullSpecsContainer = document.getElementById('productFullSpecs');
    fullSpecsContainer.innerHTML = '';
    
    // Add more detailed specs
    const detailedSpecs = [
        { name: "Display", value: product.specs[0] },
        { name: "Processor", value: product.specs[1] },
        { name: "Memory", value: product.specs[2] },
        { name: "Storage", value: product.specs[3] },
        { name: "Graphics", value: product.specs[4] },
        { name: "Operating System", value: product.specs[5] },
        { name: "Weight", value: getRandomWeight(product.category) },
        { name: "Battery Life", value: getRandomBatteryLife(product.category) },
        { name: "Ports", value: getRandomPorts() },
        { name: "Wireless", value: "Wi-Fi 6E, Bluetooth 5.2" },
        { name: "Warranty", value: "1 Year Limited Warranty" }
    ];
    
    detailedSpecs.forEach(spec => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <th scope="row" style="width: 30%">${spec.name}</th>
            <td>${spec.value}</td>
        `;
        fullSpecsContainer.appendChild(tr);
    });
    
    // Load related products
    const relatedProducts = products.filter(p => 
        p.id !== productId && (p.category === product.category || p.brand === product.brand)
    );
    
    const relatedContainer = document.getElementById('relatedProducts');
    relatedContainer.innerHTML = '';
    
    relatedProducts.slice(0, 4).forEach(related => {
        const col = document.createElement('div');
        col.className = 'col-md-3 col-6';
        col.innerHTML = `
            <div class="card product-card h-100">
                <img src="${related.image}" class="card-img-top product-card-img" alt="${related.name}">
                <div class="card-body product-card-body">
                    <h5 class="card-title product-card-title">${related.name}</h5>
                    <h6 class="product-card-price">$${related.price.toFixed(2)}</h6>
                    <a href="product-detail.html?id=${related.id}" class="btn btn-outline-primary mt-auto">View Details</a>
                </div>
            </div>
        `;
        relatedContainer.appendChild(col);
    });
}

// Helper functions to generate random specifications
function getRandomWeight(category) {
    if (category === 'ultrabooks') {
        return `${(Math.random() * 0.7 + 1.1).toFixed(2)} kg`;
    } else if (category === 'business') {
        return `${(Math.random() * 0.8 + 1.3).toFixed(2)} kg`;
    } else if (category === 'gaming') {
        return `${(Math.random() * 1.2 + 2.0).toFixed(2)} kg`;
    }
    return `${(Math.random() * 1.0 + 1.5).toFixed(2)} kg`;
}

function getRandomBatteryLife(category) {
    if (category === 'ultrabooks') {
        return `Up to ${Math.floor(Math.random() * 5 + 10)} hours`;
    } else if (category === 'business') {
        return `Up to ${Math.floor(Math.random() * 4 + 8)} hours`;
    } else if (category === 'gaming') {
        return `Up to ${Math.floor(Math.random() * 3 + 4)} hours`;
    }
    return `Up to ${Math.floor(Math.random() * 4 + 6)} hours`;
}

function getRandomPorts() {
    const ports = [
        "2x USB-C Thunderbolt 4",
        "2x USB-A 3.2",
        "1x HDMI 2.1",
        "1x SD Card Reader",
        "1x 3.5mm Audio Jack",
        "1x DisplayPort",
        "1x Ethernet Port"
    ];
    
    const selectedPorts = [];
    const numPorts = Math.floor(Math.random() * 3) + 3; // 3-5 ports
    
    for (let i = 0; i < numPorts; i++) {
        const randomIndex = Math.floor(Math.random() * ports.length);
        const port = ports[randomIndex];
        if (!selectedPorts.includes(port)) {
            selectedPorts.push(port);
        }
    }
    
    return selectedPorts.join(", ");
}