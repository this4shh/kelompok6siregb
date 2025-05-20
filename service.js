const services = [
  {
    id: 1,
    name: "Dukungan IT Di Tempat",
    category: "it-support",
    duration: "medium",
    description: "Dukungan teknis di lokasi perusahaan Anda selama 4-7 hari.",
    icon: "fa-tools",
    price: "Rp 500.000"
  },
  {
    id: 2,
    name: "Konsultasi Keamanan Jaringan",
    category: "consulting",
    duration: "short",
    description: "Audit keamanan dan konsultasi selama 1-3 hari untuk melindungi data Anda.",
    icon: "fa-shield-alt",
    price: "Rp 300.000"
  },
  {
    id: 3,
    name: "Pelatihan Pemrograman Dasar",
    category: "training",
    duration: "long",
    description: "Kursus pemrograman untuk pemula selama lebih dari 7 hari.",
    icon: "fa-code",
    price: "Rp 750.000"
  },
  {
    id: 4,
    name: "Pemeliharaan Server",
    category: "it-support",
    duration: "short",
    description: "Pemeriksaan dan pemeliharaan server rutin dalam waktu 1-3 hari.",
    icon: "fa-server",
    price: "Rp 400.000"
  },
  {
    id: 5,
    name: "Konsultasi Infrastruktur IT",
    category: "consulting",
    duration: "medium",
    description: "Analisis dan perencanaan infrastruktur selama 4-7 hari.",
    icon: "fa-network-wired",
    price: "Rp 800.000"
  },
  {
    id: 6,
    name: "Pelatihan Keamanan Siber",
    category: "training",
    duration: "medium",
    description: "Pelatihan kesadaran keamanan siber selama 4-7 hari.",
    icon: "fa-user-shield",
    price: "Rp 1.000.000"
  },
  {
    id: 7,
    name: "Dukungan Migrasi Cloud",
    category: "it-support",
    duration: "long",
    description: "Dukungan untuk migrasi sistem Anda ke cloud selama lebih dari 7 hari.",
    icon: "fa-cloud",
    price: "Rp 1.000.000"
  },
  {
    id: 8,
    name: "Konsultasi Strategi IT",
    category: "consulting",
    duration: "long",
    description: "Mengembangkan strategi dan peta jalan IT Anda selama lebih dari 7 hari.",
    icon: "fa-lightbulb",
    price: "Rp 750.000"
  },
  {
    id: 9,
    name: "Workshop Pemrograman Lanjutan",
    category: "training",
    duration: "short",
    description: "Workshop koding lanjutan berdurasi 1-3 hari.",
    icon: "fa-laptop-code",
    price: "Rp 900.000"
  },
];

// Initialize modal and toast
const bookingModal = new bootstrap.Modal(document.getElementById('bookingModal'));
const confirmationToast = new bootstrap.Toast(document.getElementById('confirmationToast'));

function displayServices(list) {
  const container = document.getElementById("serviceContainer");
  container.innerHTML = "";

  if (list.length === 0) {
    container.innerHTML = `<p class="text-center">Layanan tidak ditemukan.</p>`;
    return;
  }

  list.forEach(service => {
    const col = document.createElement("div");
    col.className = "col-md-4";

    col.innerHTML = `
      <div class="card h-100 shadow-sm">
        <div class="card-body d-flex flex-column">
          <div class="mb-3 text-primary fs-2 text-center">
            <i class="fas ${service.icon}"></i>
          </div>
          <h5 class="card-title">${service.name}</h5>
          <p class="card-text flex-grow-1">${service.description}</p>
          <p><strong>Durasi:</strong> ${durationText(service.duration)}</p>
          <p class="price-tag">${service.price}</p>
          <button class="btn btn-primary mt-auto book-btn" data-service-id="${service.id}">Pesan Sekarang</button>
        </div>
      </div>
    `;

    container.appendChild(col);
  });

  // Add event listeners to all book buttons
  document.querySelectorAll('.book-btn').forEach(button => {
    button.addEventListener('click', function() {
      const serviceId = parseInt(this.getAttribute('data-service-id'));
      const service = services.find(s => s.id === serviceId);
      showBookingForm(service);
    });
  });
}

function durationText(duration) {
  switch (duration) {
    case "short": return "1-3 hari";
    case "medium": return "4-7 hari";
    case "long": return "> 7 hari";
    default: return "-";
  }
}

function showBookingForm(service) {
  document.getElementById('selectedServiceName').textContent = service.name;
  document.getElementById('selectedServiceDesc').textContent = service.description;
  document.getElementById('selectedServiceDuration').textContent = durationText(service.duration);
  document.getElementById('selectedServicePrice').textContent = service.price;
  document.getElementById('serviceModalTitle').textContent = `Pesan: ${service.name}`;
  
  // Set minimum date to today
  const today = new Date().toISOString().split('T')[0];
  document.getElementById('bookingDate').setAttribute('min', today);
  
  bookingModal.show();
}

function filterServices() {
  const category = document.getElementById("categoryFilter").value;
  const duration = document.getElementById("durationFilter").value;

  let filtered = services;

  if (category !== "all") filtered = filtered.filter(s => s.category === category);
  if (duration !== "all") filtered = filtered.filter(s => s.duration === duration);

  displayServices(filtered);
}

// Event Listeners
document.getElementById("categoryFilter").addEventListener("change", filterServices);
document.getElementById("durationFilter").addEventListener("change", filterServices);
document.getElementById("confirmBooking").addEventListener("click", confirmBooking);

function confirmBooking() {
  // Validate form
  const form = document.getElementById('bookingForm');
  if (!form.checkValidity()) {
    form.classList.add('was-validated');
    return;
  }

  // In a real app, you would send this data to a server
  const bookingData = {
    service: document.getElementById('selectedServiceName').textContent,
    customerName: document.getElementById('customerName').value,
    customerEmail: document.getElementById('customerEmail').value,
    bookingDate: document.getElementById('bookingDate').value
  };

  // Show confirmation
  bookingModal.hide();
  confirmationToast.show();

  // Reset form
  form.reset();
  form.classList.remove('was-validated');
}

// Initialize
window.addEventListener("DOMContentLoaded", () => {
  displayServices(services);
});