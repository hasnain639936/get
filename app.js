// Shail Jet Ski & Hut Booking App
// Main interactive controller - Fully Responsive

const CATALOG = [
  {
    id: 'js-1',
    type: 'jetski',
    title: 'Yamaha WaveRunner FX SVHO',
    subtitle: 'Supercharged Performance Tourer',
    badge: 'Most Popular',
    badgeColor: 'bg-orange-500',
    pricePerHour: 140,
    priceHalfDay: 480,
    priceFullDay: 850,
    rating: 4.9,
    reviewsCount: 142,
    capacity: '1 - 3 Riders',
    speed: '68 mph / 110 km/h',
    power: '250 HP Super Vortex High Output',
    image: 'https://images.unsplash.com/photo-1568430462989-44163eb1752f?auto=format&fit=crop&w=1200&q=80',
    description: 'Experience exhilarating speed and cutting-edge marine engineering with the Yamaha FX SVHO. Features integrated audio speakers, RiDE dual throttle control, and plush touring cruiser seats.',
    features: ['Yamaha Connext 7" Touchscreen', 'RiDE dual throttle system', 'Waterproof Bluetooth Audio System', 'Dual USB charging ports', 'Life jackets & safety lanyard included'],
    included: ['Coast Guard Approved Life Vests', 'Fuel & Pre-trip Safety Briefing', 'Waterproof Phone Pouch', 'Secure Shore Locker']
  },
  {
    id: 'js-2',
    type: 'jetski',
    title: 'Sea-Doo Spark Trixx 3-Up',
    subtitle: 'Agile Stunt & Freestyle Rocket',
    badge: 'Fun & Playful',
    badgeColor: 'bg-cyan-600',
    pricePerHour: 95,
    priceHalfDay: 340,
    priceFullDay: 620,
    rating: 4.8,
    reviewsCount: 98,
    capacity: '1 - 2 Riders',
    speed: '50 mph / 80 km/h',
    power: '90 HP Rotax 900 ACE Engine',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
    description: 'Tailored for tail stands, quick spins, and effortless carving in coastal waters. Lightweight polytec hull makes it ultra-responsive for riders of all experience levels.',
    features: ['Extended Range Variable Trim (VTS)', 'Step Wedges for easy tail stands', 'Adjustable Handlebars', 'Ultra-light agile maneuverability'],
    included: ['Life Jackets with Safety Whistle', 'Beginner Riding Instruction', 'Fuel Included', 'Free GoPro Mount']
  },
  {
    id: 'js-3',
    type: 'jetski',
    title: 'Kawasaki Ultra 310LX Jet Ski',
    subtitle: 'The King of Luxury & Raw Muscle',
    badge: 'VIP Flagship',
    badgeColor: 'bg-emerald-600',
    pricePerHour: 165,
    priceHalfDay: 580,
    priceFullDay: 980,
    rating: 5.0,
    reviewsCount: 84,
    capacity: '1 - 3 Riders',
    speed: '72 mph / 115 km/h',
    power: '310 HP Supercharged Intercooled',
    image: 'https://images.unsplash.com/photo-1559827291-72ee739d0d9a?auto=format&fit=crop&w=1200&q=80',
    description: 'The most powerful production personal watercraft on the open ocean. Equipped with the JETSOUND 4x speaker audio system, LXury seat with heat-resistant vinyl, and supreme open-ocean wave handling.',
    features: ['JETSOUND 4-Speaker Audio', 'Supercharged 310 HP 1.5L Engine', 'Deep-V offshore stability hull', 'Electric Cruise Control & No-Wake Mode'],
    included: ['Premium Impact Life Vests', 'Uncapped Fuel Allowance', 'Dedicated Water Marshall Escort Option', 'Complimentary Drone 1-minute Action Reel']
  },
  {
    id: 'hut-1',
    type: 'hut',
    title: 'The Sunset Palm Beach Hut',
    subtitle: 'Cozy Thatched Waterfront Retreat',
    badge: 'Beachfront Prime',
    badgeColor: 'bg-amber-500',
    pricePerHour: 55,
    priceHalfDay: 190,
    priceFullDay: 320,
    rating: 4.85,
    reviewsCount: 112,
    capacity: 'Up to 4 Guests',
    speed: 'Direct Beach Walk-in',
    power: 'Eco Solar Powered & Ceiling Fan',
    image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1200&q=80',
    description: 'Charming Polynesian-inspired natural palm-thatch beach hut steps away from the water. Includes double hammocks, bamboo loungers, and prime sunset panoramas.',
    features: ['Double breezy hammock', 'Twin hardwood sun loungers', 'Ice cooler with fresh drinking water', 'High-speed coastal WiFi & power outlets'],
    included: ['Fresh Beach Towels', 'Sunscreen & Aloe Vera Kit', 'Chilled Coconut Water on Arrival', 'Private Beach Umbrella']
  },
  {
    id: 'hut-2',
    type: 'hut',
    title: 'Ocean Breeze Luxury Cabana',
    subtitle: 'Spacious Family & Friends Oasis',
    badge: 'Top Rated Cabana',
    badgeColor: 'bg-blue-600',
    pricePerHour: 85,
    priceHalfDay: 280,
    priceFullDay: 480,
    rating: 4.95,
    reviewsCount: 167,
    capacity: 'Up to 8 Guests',
    speed: 'Private Beach Deck',
    power: 'Full AC & Chilled Mini-Fridge',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80',
    description: 'Designed for comfort and seaside celebrations. Features plush daybeds, misting fans, private outdoor rinse shower, and direct access to both calm swimming water and the jet ski dock.',
    features: ['Plush sectional outdoor sofa', 'Chilled mini-fridge & ice maker', 'Fresh water rain rinse shower', 'Bluetooth Bose SoundLink outdoor audio', 'Curtains for complete privacy'],
    included: ['Welcome Tropical Fruit Platter', 'Unlimited Bottled Mineral Water', 'Beach Games (Paddleball, Spikeball, Frisbee)', 'Dedicated Beach Attendant']
  },
  {
    id: 'hut-3',
    type: 'hut',
    title: 'The VIP Royal Coral Pavilion',
    subtitle: 'Ultra-Exclusive Private Overwater Cabana',
    badge: 'Ultra Luxury',
    badgeColor: 'bg-purple-600',
    pricePerHour: 140,
    priceHalfDay: 490,
    priceFullDay: 850,
    rating: 5.0,
    reviewsCount: 76,
    capacity: 'Up to 14 Guests',
    speed: 'Overwater Stilt Access',
    power: 'Air Conditioned Suite + Open Sun Terrace',
    image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80',
    description: 'The pinnacle of coastal hospitality at Shail Watersports. Elevated stilt pavilion over turquoise lagoons with private over-water net hammock, dining pergola, personal butler service, and dedicated jet ski docking slips.',
    features: ['Over-water hammock net suspended over the tide', 'Private barbecue grill & dining set', 'Direct jet ski tie-up dock', 'Smart TV with streaming for beach parties', 'Private bathroom & change suite'],
    included: ['Dedicated Butler & Beach Mixologist', 'Chef Special Gourmet BBQ Grill Setup', 'Sparkling Coastal Mocktails / Drinks', 'Snorkeling gear for all guests']
  },
  {
    id: 'combo-1',
    type: 'combo',
    title: 'The Shail Wave & Chill Combo',
    subtitle: '2h Jet Ski Adventure + Full-Day Cabana',
    badge: 'Best Value Bundle (Save 25%)',
    badgeColor: 'bg-rose-500',
    pricePerHour: 180,
    priceHalfDay: 499,
    priceFullDay: 799,
    rating: 4.98,
    reviewsCount: 204,
    capacity: '2 - 6 People',
    speed: 'WaveRunner + Luxury Cabana',
    power: 'Best of Both Worlds',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    description: 'The ultimate beach day package. Split your day between high-octane open sea jet skiing and pure relaxation in your private beachfront cabana with chilled drinks and towels ready when you dock.',
    features: ['2-Hour Yamaha WaveRunner rental with full fuel', 'All-Day Ocean Breeze Cabana reservation', 'GoPro 4K video rental with 64GB SD card included', 'VIP priority boarding at the Shail dock'],
    included: ['Full safety gear & lockers', 'Lunch snack basket & tropical beverages', 'Private sun loungers & rinse station', 'Free reschedule guarantee']
  }
];

const ADDONS = [
  { id: 'gopro', name: 'GoPro Hero 12 Black 4K Rental + 64GB SD', price: 29, icon: 'fa-camera' },
  { id: 'guide', name: 'Private Marine Safari Guide / Instructor (1h)', price: 35, icon: 'fa-compass' },
  { id: 'wetsuit', name: 'Pro Wetsuit & Polarized Floating Sunglasses', price: 15, icon: 'fa-vest' },
  { id: 'bbq', name: 'Beachside BBQ Grill Set & Charcoal Pack', price: 45, icon: 'fa-fire' },
  { id: 'snorkel', name: 'Snorkeling Mask & Fins Set (Up to 4)', price: 25, icon: 'fa-mask' },
  { id: 'drinks', name: 'Chilled Coconut & Artisan Drink Cooler Crate', price: 30, icon: 'fa-wine-bottle' }
];

const TIME_SLOTS = [
  { time: '09:00 AM - 10:00 AM', label: 'Morning Calm Waters', extra: 0 },
  { time: '10:30 AM - 11:30 AM', label: 'Warm Morning Glow', extra: 0 },
  { time: '12:00 PM - 01:00 PM', label: 'Midday Ocean Sun', extra: 0 },
  { time: '02:00 PM - 03:00 PM', label: 'Peak Adventure Hours', extra: 0 },
  { time: '03:30 PM - 04:30 PM', label: 'Afternoon Breezes', extra: 0 },
  { time: '05:00 PM - 06:00 PM', label: 'Golden Hour Sunset Special', extra: 15, tag: 'Sunset Highlight 🌅' }
];

// Currencies relative to USD
const CURRENCIES = {
  USD: { symbol: '$', rate: 1.0 },
  EUR: { symbol: '€', rate: 0.92 },
  GBP: { symbol: '£', rate: 0.79 },
  AED: { symbol: 'AED ', rate: 3.67 },
  CAD: { symbol: 'CA$', rate: 1.36 }
};

let currentCurrency = 'USD';
let activeFilter = 'all';
let selectedProduct = null;
let bookingDraft = {
  productId: null,
  date: new Date().toISOString().split('T')[0],
  duration: '1h',
  slot: TIME_SLOTS[0].time,
  guests: 1,
  selectedAddons: [],
  customer: {
    name: '',
    email: '',
    phone: '',
    notes: '',
    waiverAgreed: false
  },
  paymentMethod: 'card'
};

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  renderCatalog();
  setupEventListeners();
  loadBookingsCount();
  setupDefaultDates();
});

function formatPrice(amountUsd) {
  const conf = CURRENCIES[currentCurrency];
  const converted = Math.round(amountUsd * conf.rate);
  return `${conf.symbol}${converted}`;
}

function setupDefaultDates() {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  const minDate = `${yyyy}-${mm}-${dd}`;

  const heroDate = document.getElementById('heroBookingDate');
  if (heroDate) {
    heroDate.value = minDate;
    heroDate.min = minDate;
  }
}

function toggleMobileMenu() {
  const mobileNav = document.getElementById('mobileNav');
  if (mobileNav) {
    mobileNav.classList.toggle('hidden');
  }
}

// Render Products Catalog (Responsive Cards)
function renderCatalog() {
  const grid = document.getElementById('catalogGrid');
  if (!grid) return;

  const filtered = CATALOG.filter(item => {
    if (activeFilter === 'all') return true;
    return item.type === activeFilter;
  });

  grid.innerHTML = filtered.map(item => `
    <div class="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-md sm:shadow-lg border border-slate-100 flex flex-col card-hover">
      
      <!-- Responsive Image Container -->
      <div class="relative h-56 sm:h-64 w-full overflow-hidden group">
        <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
        <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
        
        <!-- Badges -->
        <div class="absolute top-3 left-3 sm:top-4 sm:left-4 flex gap-1.5 flex-wrap max-w-[80%]">
          <span class="px-2.5 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs font-bold uppercase tracking-wider rounded-full text-white ${item.badgeColor} shadow">
            ${item.badge}
          </span>
          <span class="px-2.5 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs font-semibold rounded-full bg-slate-900/70 text-white backdrop-blur-sm">
            <i class="fa-solid ${item.type === 'jetski' ? 'fa-water' : (item.type === 'hut' ? 'fa-umbrella-beach' : 'fa-star')} mr-1"></i>
            ${item.type === 'jetski' ? 'Jet Ski' : (item.type === 'hut' ? 'Beach Hut' : 'Combo')}
          </span>
        </div>

        <!-- Rating -->
        <div class="absolute top-3 right-3 sm:top-4 sm:right-4 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-white/95 backdrop-blur-sm text-slate-800 text-[11px] sm:text-xs font-bold flex items-center shadow">
          <i class="fa-solid fa-star text-amber-400 mr-1 text-[10px]"></i>
          <span>${item.rating}</span>
        </div>

        <!-- Price banner inside image bottom -->
        <div class="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-end justify-between text-white">
          <div>
            <span class="text-[10px] sm:text-xs text-sky-200 uppercase font-semibold">From</span>
            <div class="text-xl sm:text-2xl font-extrabold font-heading">
              ${formatPrice(item.pricePerHour)}
              <span class="text-xs font-normal text-slate-200">/hr</span>
            </div>
          </div>
          <button onclick="openDetailsModal('${item.id}')" class="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl bg-white/20 hover:bg-white/30 backdrop-blur-sm text-xs font-medium text-white transition">
            <i class="fa-solid fa-circle-info mr-1"></i> Specs
          </button>
        </div>
      </div>

      <!-- Content -->
      <div class="p-4 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 class="text-lg sm:text-xl font-bold text-slate-900 font-heading mb-0.5">${item.title}</h3>
          <p class="text-xs sm:text-sm text-sky-600 font-medium mb-2">${item.subtitle}</p>
          <p class="text-slate-600 text-xs sm:text-sm line-clamp-2 mb-3 sm:mb-4">${item.description}</p>

          <!-- Quick Specs Grid -->
          <div class="grid grid-cols-2 gap-2 text-xs bg-slate-50 p-2.5 sm:p-3 rounded-xl sm:rounded-2xl border border-slate-100 mb-3 sm:mb-4">
            <div class="flex items-center text-slate-700 truncate">
              <i class="fa-solid fa-users text-sky-500 w-4 sm:w-5"></i>
              <span class="truncate">${item.capacity}</span>
            </div>
            <div class="flex items-center text-slate-700 truncate">
              <i class="fa-solid ${item.type === 'jetski' ? 'fa-gauge-high' : 'fa-location-dot'} text-sky-500 w-4 sm:w-5"></i>
              <span class="truncate">${item.speed}</span>
            </div>
            <div class="flex items-center text-slate-700 col-span-2 truncate">
              <i class="fa-solid ${item.type === 'jetski' ? 'fa-bolt' : 'fa-sun'} text-amber-500 w-4 sm:w-5"></i>
              <span class="truncate">${item.power}</span>
            </div>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="pt-3 sm:pt-4 border-t border-slate-100 flex items-center gap-2 sm:gap-3">
          <button onclick="startBooking('${item.id}')" class="flex-1 py-2.5 sm:py-3 px-4 rounded-xl bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-700 hover:to-cyan-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-sky-500/20 transition flex items-center justify-center gap-2">
            <span>Book Now</span>
            <i class="fa-solid fa-arrow-right text-[10px] sm:text-xs"></i>
          </button>
          <button onclick="openDetailsModal('${item.id}')" title="View Full Specs" class="p-2.5 sm:p-3 rounded-xl border border-slate-200 text-slate-600 hover:text-sky-600 hover:bg-sky-50 transition">
            <i class="fa-solid fa-eye text-xs sm:text-sm"></i>
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// Filter button click handler
function setFilter(type) {
  activeFilter = type;
  document.querySelectorAll('.filter-btn').forEach(btn => {
    const btnType = btn.getAttribute('data-filter');
    if (btnType === type) {
      btn.className = 'filter-btn shrink-0 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-sky-600 text-white shadow-md shadow-sky-500/20 transition';
    } else {
      btn.className = 'filter-btn shrink-0 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-white text-slate-600 hover:bg-slate-100 border border-slate-200 transition';
    }
  });
  renderCatalog();
}

// Quick Search from Hero
function executeHeroSearch() {
  const typeSelect = document.getElementById('heroBookingType');
  const dateInput = document.getElementById('heroBookingDate');
  const guestsInput = document.getElementById('heroBookingGuests');

  if (typeSelect) {
    const val = typeSelect.value;
    if (val !== 'all') {
      setFilter(val);
    } else {
      setFilter('all');
    }
  }

  if (dateInput && dateInput.value) {
    bookingDraft.date = dateInput.value;
  }
  if (guestsInput && guestsInput.value) {
    bookingDraft.guests = parseInt(guestsInput.value) || 1;
  }

  const catalogSection = document.getElementById('catalogSection');
  if (catalogSection) {
    catalogSection.scrollIntoView({ behavior: 'smooth' });
  }

  showToast('Filtered results based on your beach preferences!', 'info');
}

// Open Responsive Details Modal
function openDetailsModal(id) {
  const item = CATALOG.find(x => x.id === id);
  if (!item) return;

  selectedProduct = item;
  const modal = document.getElementById('detailsModal');
  const content = document.getElementById('detailsModalContent');

  content.innerHTML = `
    <div class="relative">
      <img src="${item.image}" alt="${item.title}" class="w-full h-52 sm:h-72 md:h-88 object-cover">
      <button onclick="closeDetailsModal()" class="absolute top-3 right-3 sm:top-4 sm:right-4 w-9 h-9 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white flex items-center justify-center transition">
        <i class="fa-solid fa-xmark text-sm sm:text-base"></i>
      </button>
      <div class="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-6 sm:right-6 flex flex-col sm:flex-row sm:items-end justify-between text-white gap-2">
        <div>
          <span class="px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-bold ${item.badgeColor} uppercase tracking-wider">${item.badge}</span>
          <h2 class="text-xl sm:text-3xl font-extrabold font-heading mt-1 drop-shadow-md leading-tight">${item.title}</h2>
          <p class="text-xs sm:text-sm text-sky-200 font-medium">${item.subtitle}</p>
        </div>
        <div class="text-left sm:text-right">
          <div class="text-xl sm:text-3xl font-black font-heading">${formatPrice(item.pricePerHour)}<span class="text-xs font-normal text-slate-200">/hr</span></div>
          <div class="text-[10px] sm:text-xs text-sky-200">Half Day: ${formatPrice(item.priceHalfDay)} | Full Day: ${formatPrice(item.priceFullDay)}</div>
        </div>
      </div>
    </div>

    <div class="p-4 sm:p-7 space-y-4 sm:space-y-6">
      <div>
        <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">Overview</h4>
        <p class="text-slate-700 text-xs sm:text-sm leading-relaxed">${item.description}</p>
      </div>

      <!-- Specs matrix (2 cols on mobile, 4 on desktop) -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4">
        <div class="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-sky-50/70 border border-sky-100 text-center">
          <i class="fa-solid fa-users text-sky-600 text-base sm:text-xl mb-1"></i>
          <div class="text-[10px] sm:text-xs text-slate-500 font-medium">Capacity</div>
          <div class="text-xs sm:text-sm font-bold text-slate-800">${item.capacity}</div>
        </div>
        <div class="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-cyan-50/70 border border-cyan-100 text-center">
          <i class="fa-solid ${item.type === 'jetski' ? 'fa-gauge-high' : 'fa-umbrella-beach'} text-cyan-600 text-base sm:text-xl mb-1"></i>
          <div class="text-[10px] sm:text-xs text-slate-500 font-medium">Speed / Location</div>
          <div class="text-xs sm:text-sm font-bold text-slate-800">${item.speed}</div>
        </div>
        <div class="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-amber-50/70 border border-amber-100 text-center">
          <i class="fa-solid fa-bolt text-amber-500 text-base sm:text-xl mb-1"></i>
          <div class="text-[10px] sm:text-xs text-slate-500 font-medium">Power</div>
          <div class="text-xs sm:text-sm font-bold text-slate-800 truncate">${item.power.split(' ')[0]} ${item.power.split(' ')[1] || ''}</div>
        </div>
        <div class="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-emerald-50/70 border border-emerald-100 text-center">
          <i class="fa-solid fa-star text-amber-400 text-base sm:text-xl mb-1"></i>
          <div class="text-[10px] sm:text-xs text-slate-500 font-medium">Rating</div>
          <div class="text-xs sm:text-sm font-bold text-slate-800">${item.rating} (${item.reviewsCount})</div>
        </div>
      </div>

      <!-- Features & What's included -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <div>
          <h4 class="text-xs sm:text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-water text-sky-600"></i> Features & Tech
          </h4>
          <ul class="space-y-1.5">
            ${item.features.map(f => `
              <li class="flex items-center text-xs sm:text-sm text-slate-700">
                <i class="fa-solid fa-check text-sky-600 mr-2 text-xs"></i> ${f}
              </li>
            `).join('')}
          </ul>
        </div>
        <div>
          <h4 class="text-xs sm:text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-shield-halved text-emerald-600"></i> Included with Rental
          </h4>
          <ul class="space-y-1.5">
            ${item.included.map(inc => `
              <li class="flex items-center text-xs sm:text-sm text-slate-700">
                <i class="fa-solid fa-circle-check text-emerald-500 mr-2 text-xs"></i> ${inc}
              </li>
            `).join('')}
          </ul>
        </div>
      </div>

      <!-- Action buttons -->
      <div class="pt-4 sm:pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
        <button onclick="closeDetailsModal()" class="w-full sm:w-auto px-5 py-3 rounded-xl border border-slate-200 text-slate-600 font-semibold text-xs sm:text-sm hover:bg-slate-50">Close</button>
        <button onclick="closeDetailsModal(); startBooking('${item.id}');" class="w-full sm:w-auto flex-1 px-8 py-3 rounded-xl bg-gradient-to-r from-sky-600 to-cyan-600 text-white font-bold text-xs sm:text-sm shadow-lg shadow-sky-500/25 transition">
          Proceed to Booking
        </button>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
}

function closeDetailsModal() {
  document.getElementById('detailsModal').classList.add('hidden');
}

// ----------------- RESPONSIVE BOOKING WIZARD -----------------

function startBooking(id) {
  const item = CATALOG.find(x => x.id === id);
  if (!item) return;

  selectedProduct = item;
  bookingDraft.productId = id;
  bookingDraft.selectedAddons = [];

  const heroDate = document.getElementById('heroBookingDate');
  if (heroDate && heroDate.value) {
    bookingDraft.date = heroDate.value;
  }

  const modal = document.getElementById('bookingWizardModal');
  modal.classList.remove('hidden');

  renderBookingStep(1);
}

function closeBookingWizard() {
  document.getElementById('bookingWizardModal').classList.add('hidden');
}

function renderBookingStep(stepNumber) {
  const stepContainer = document.getElementById('wizardStepContent');
  const stepIndicator = document.getElementById('wizardStepIndicator');

  stepIndicator.innerHTML = `
    <div class="flex items-center justify-between max-w-sm sm:max-w-md mx-auto mb-5 sm:mb-7 px-1">
      <div class="flex items-center gap-1.5 sm:gap-2 ${stepNumber >= 1 ? 'text-sky-600 font-bold' : 'text-slate-400'}">
        <div class="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm ${stepNumber >= 1 ? 'bg-sky-600 text-white shadow' : 'bg-slate-200 text-slate-600'}">1</div>
        <span class="text-[11px] sm:text-xs">Schedule</span>
      </div>
      <div class="flex-1 h-0.5 mx-2 sm:mx-3 ${stepNumber >= 2 ? 'bg-sky-600' : 'bg-slate-200'}"></div>
      <div class="flex items-center gap-1.5 sm:gap-2 ${stepNumber >= 2 ? 'text-sky-600 font-bold' : 'text-slate-400'}">
        <div class="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm ${stepNumber >= 2 ? 'bg-sky-600 text-white shadow' : 'bg-slate-200 text-slate-600'}">2</div>
        <span class="text-[11px] sm:text-xs">Add-ons</span>
      </div>
      <div class="flex-1 h-0.5 mx-2 sm:mx-3 ${stepNumber >= 3 ? 'bg-sky-600' : 'bg-slate-200'}"></div>
      <div class="flex items-center gap-1.5 sm:gap-2 ${stepNumber >= 3 ? 'text-sky-600 font-bold' : 'text-slate-400'}">
        <div class="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm ${stepNumber >= 3 ? 'bg-sky-600 text-white shadow' : 'bg-slate-200 text-slate-600'}">3</div>
        <span class="text-[11px] sm:text-xs">Checkout</span>
      </div>
    </div>
  `;

  if (stepNumber === 1) renderStep1(stepContainer);
  else if (stepNumber === 2) renderStep2(stepContainer);
  else if (stepNumber === 3) renderStep3(stepContainer);
}

// STEP 1: Schedule & Slots
function renderStep1(container) {
  const item = selectedProduct;
  const today = new Date().toISOString().split('T')[0];

  container.innerHTML = `
    <div class="space-y-5">
      <!-- Item summary banner -->
      <div class="flex items-center gap-3 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-sky-50 border border-sky-100">
        <img src="${item.image}" alt="${item.title}" class="w-14 h-14 sm:w-20 sm:h-20 rounded-lg sm:rounded-xl object-cover shrink-0">
        <div class="flex-1 min-w-0">
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-600">${item.badge}</span>
          <h3 class="font-bold text-slate-900 font-heading text-sm sm:text-lg truncate">${item.title}</h3>
          <p class="text-[11px] sm:text-xs text-slate-500 truncate">${item.subtitle}</p>
        </div>
        <div class="text-right shrink-0">
          <div class="text-base sm:text-lg font-black text-sky-700">${formatPrice(item.pricePerHour)}<span class="text-[10px] font-normal text-slate-500">/hr</span></div>
        </div>
      </div>

      <!-- Duration selector (2 cols mobile, 4 cols desktop) -->
      <div>
        <label class="block text-xs sm:text-sm font-bold text-slate-800 mb-2">Select Duration</label>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
          <button type="button" onclick="selectDuration('1h')" id="dur-1h" class="duration-opt p-2.5 sm:p-3 rounded-xl sm:rounded-2xl border ${bookingDraft.duration === '1h' ? 'border-sky-600 bg-sky-50/70 text-sky-900 ring-2 ring-sky-500' : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'} text-center transition">
            <div class="font-bold text-xs sm:text-sm">1 Hour</div>
            <div class="text-[10px] sm:text-xs text-slate-500 mt-0.5">${formatPrice(item.pricePerHour)}</div>
          </button>
          <button type="button" onclick="selectDuration('2h')" id="dur-2h" class="duration-opt p-2.5 sm:p-3 rounded-xl sm:rounded-2xl border ${bookingDraft.duration === '2h' ? 'border-sky-600 bg-sky-50/70 text-sky-900 ring-2 ring-sky-500' : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'} text-center transition">
            <div class="font-bold text-xs sm:text-sm">2 Hours</div>
            <div class="text-[10px] sm:text-xs text-slate-500 mt-0.5">${formatPrice(item.pricePerHour * 2 * 0.95)} <span class="text-emerald-600 font-bold">(-5%)</span></div>
          </button>
          <button type="button" onclick="selectDuration('half')" id="dur-half" class="duration-opt p-2.5 sm:p-3 rounded-xl sm:rounded-2xl border ${bookingDraft.duration === 'half' ? 'border-sky-600 bg-sky-50/70 text-sky-900 ring-2 ring-sky-500' : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'} text-center transition">
            <div class="font-bold text-xs sm:text-sm">Half Day (4h)</div>
            <div class="text-[10px] sm:text-xs text-slate-500 mt-0.5">${formatPrice(item.priceHalfDay)}</div>
          </button>
          <button type="button" onclick="selectDuration('full')" id="dur-full" class="duration-opt p-2.5 sm:p-3 rounded-xl sm:rounded-2xl border ${bookingDraft.duration === 'full' ? 'border-sky-600 bg-sky-50/70 text-sky-900 ring-2 ring-sky-500' : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'} text-center transition">
            <div class="font-bold text-xs sm:text-sm">Full Day (8h)</div>
            <div class="text-[10px] sm:text-xs text-slate-500 mt-0.5">${formatPrice(item.priceFullDay)}</div>
          </button>
        </div>
      </div>

      <!-- Date & Guests -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <div>
          <label class="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5">Reservation Date</label>
          <input type="date" id="wizardDate" min="${today}" value="${bookingDraft.date}" class="w-full p-2.5 sm:p-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-sky-500 text-xs sm:text-sm font-medium text-slate-800">
        </div>
        <div>
          <label class="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5">Riders / Guests</label>
          <select id="wizardGuests" class="w-full p-2.5 sm:p-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-sky-500 text-xs sm:text-sm font-medium text-slate-800">
            <option value="1" ${bookingDraft.guests == 1 ? 'selected' : ''}>1 Rider / Guest</option>
            <option value="2" ${bookingDraft.guests == 2 ? 'selected' : ''}>2 Guests</option>
            <option value="3" ${bookingDraft.guests == 3 ? 'selected' : ''}>3 Guests</option>
            <option value="4" ${bookingDraft.guests == 4 ? 'selected' : ''}>4 Guests</option>
            <option value="6" ${bookingDraft.guests == 6 ? 'selected' : ''}>6 Guests (Cabana)</option>
            <option value="10" ${bookingDraft.guests == 10 ? 'selected' : ''}>8 - 14 Guests (VIP Pavilion)</option>
          </select>
        </div>
      </div>

      <!-- Time Slots -->
      <div>
        <label class="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5">Launch / Check-In Time Slot</label>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
          ${TIME_SLOTS.map(ts => `
            <div onclick="selectTimeSlot('${ts.time}')" class="slot-opt cursor-pointer p-2.5 sm:p-3 rounded-xl border ${bookingDraft.slot === ts.time ? 'border-sky-600 bg-sky-50/80 ring-2 ring-sky-500' : 'border-slate-200 bg-white hover:bg-slate-50'} flex items-center justify-between transition">
              <div class="flex items-center gap-2.5">
                <i class="fa-regular fa-clock text-sky-600 text-xs sm:text-sm"></i>
                <div>
                  <div class="text-xs sm:text-sm font-semibold text-slate-800">${ts.time}</div>
                  <div class="text-[10px] text-slate-500">${ts.label}</div>
                </div>
              </div>
              ${ts.tag ? `<span class="px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-200">${ts.tag}</span>` : ''}
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Controls -->
      <div class="pt-4 border-t border-slate-200 flex flex-col-reverse sm:flex-row justify-between items-center gap-2.5">
        <button type="button" onclick="closeBookingWizard()" class="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-100 text-xs sm:text-sm font-semibold">Cancel</button>
        <button type="button" onclick="saveStep1AndContinue()" class="w-full sm:w-auto px-7 py-3 rounded-xl bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-700 hover:to-cyan-700 text-white font-bold text-xs sm:text-sm shadow-md transition flex items-center justify-center gap-2">
          <span>Next: Add-ons</span>
          <i class="fa-solid fa-arrow-right text-[10px]"></i>
        </button>
      </div>
    </div>
  `;
}

function selectDuration(dur) {
  bookingDraft.duration = dur;
  document.querySelectorAll('.duration-opt').forEach(btn => {
    btn.className = 'duration-opt p-2.5 sm:p-3 rounded-xl sm:rounded-2xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 text-center transition';
  });
  const el = document.getElementById(`dur-${dur}`);
  if (el) {
    el.className = 'duration-opt p-2.5 sm:p-3 rounded-xl sm:rounded-2xl border border-sky-600 bg-sky-50/70 text-sky-900 ring-2 ring-sky-500 text-center transition';
  }
}

function selectTimeSlot(slot) {
  bookingDraft.slot = slot;
  renderBookingStep(1);
}

function saveStep1AndContinue() {
  const dateInput = document.getElementById('wizardDate');
  const guestsInput = document.getElementById('wizardGuests');
  if (dateInput) bookingDraft.date = dateInput.value;
  if (guestsInput) bookingDraft.guests = parseInt(guestsInput.value) || 1;

  renderBookingStep(2);
}

// STEP 2: Custom Add-ons
function renderStep2(container) {
  container.innerHTML = `
    <div class="space-y-4 sm:space-y-5">
      <div>
        <h3 class="text-base sm:text-lg font-bold text-slate-900 font-heading mb-0.5">Customize Your Wave Experience</h3>
        <p class="text-xs text-slate-500">Enhance your session with 4K recording, pro safety suits, or refreshments.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-3">
        ${ADDONS.map(addon => {
          const isSelected = bookingDraft.selectedAddons.includes(addon.id);
          return `
            <div onclick="toggleAddon('${addon.id}')" class="cursor-pointer p-3 sm:p-3.5 rounded-xl sm:rounded-2xl border ${isSelected ? 'border-sky-600 bg-sky-50/80 ring-2 ring-sky-500' : 'border-slate-200 bg-white hover:border-slate-300'} flex items-center justify-between transition">
              <div class="flex items-center gap-3 pr-2 min-w-0">
                <div class="w-9 h-9 rounded-xl ${isSelected ? 'bg-sky-600 text-white' : 'bg-slate-100 text-slate-600'} flex items-center justify-center shrink-0">
                  <i class="fa-solid ${addon.icon} text-sm"></i>
                </div>
                <div class="min-w-0">
                  <div class="text-xs sm:text-sm font-bold text-slate-800 truncate">${addon.name}</div>
                  <div class="text-[11px] font-semibold text-sky-600">+${formatPrice(addon.price)}</div>
                </div>
              </div>
              <div class="shrink-0 ml-2">
                <div class="w-5 h-5 rounded-full border-2 flex items-center justify-center ${isSelected ? 'border-sky-600 bg-sky-600 text-white' : 'border-slate-300'}">
                  ${isSelected ? '<i class="fa-solid fa-check text-[10px]"></i>' : ''}
                </div>
              </div>
            </div>
          `;
        }).join('')}
      </div>

      <div class="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
        <div>
          <span class="text-[10px] sm:text-xs text-slate-500">Subtotal (Craft + Add-ons)</span>
          <div class="text-base sm:text-lg font-black text-slate-800">${formatPrice(calculateTotalPrice().total)}</div>
        </div>
        <span class="text-[10px] sm:text-xs text-slate-400">Taxes at final step</span>
      </div>

      <div class="pt-4 border-t border-slate-200 flex flex-col-reverse sm:flex-row justify-between items-center gap-2.5">
        <button type="button" onclick="renderBookingStep(1)" class="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-100 text-xs sm:text-sm font-semibold flex items-center justify-center gap-2">
          <i class="fa-solid fa-arrow-left text-xs"></i>
          <span>Back</span>
        </button>
        <button type="button" onclick="renderBookingStep(3)" class="w-full sm:w-auto px-7 py-3 rounded-xl bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-700 hover:to-cyan-700 text-white font-bold text-xs sm:text-sm shadow-md transition flex items-center justify-center gap-2">
          <span>Continue to Final Checkout</span>
          <i class="fa-solid fa-arrow-right text-xs"></i>
        </button>
      </div>
    </div>
  `;
}

function toggleAddon(addonId) {
  const index = bookingDraft.selectedAddons.indexOf(addonId);
  if (index > -1) {
    bookingDraft.selectedAddons.splice(index, 1);
  } else {
    bookingDraft.selectedAddons.push(addonId);
  }
  renderBookingStep(2);
}

// STEP 3: Guest Info, Waiver & Payment
function renderStep3(container) {
  const calc = calculateTotalPrice();
  const item = selectedProduct;

  container.innerHTML = `
    <div class="space-y-5">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-5">
        <!-- Guest Details & Payment -->
        <div class="lg:col-span-7 space-y-4">
          <div>
            <h3 class="text-base sm:text-lg font-bold text-slate-900 font-heading mb-0.5">Primary Guest Details</h3>
            <p class="text-xs text-slate-500">Boarding passes and receipt will be sent here.</p>
          </div>

          <div class="space-y-3">
            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1">Full Legal Name *</label>
              <input type="text" id="custName" value="${bookingDraft.customer.name}" placeholder="Captain Alex Morgan" class="w-full p-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-sky-500 text-xs sm:text-sm">
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                <input type="email" id="custEmail" value="${bookingDraft.customer.email}" placeholder="alex@oceanvibes.com" class="w-full p-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-sky-500 text-xs sm:text-sm">
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">Mobile Phone *</label>
                <input type="tel" id="custPhone" value="${bookingDraft.customer.phone}" placeholder="+1 (555) 019-2834" class="w-full p-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-sky-500 text-xs sm:text-sm">
              </div>
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1">Special Requests (Optional)</label>
              <input type="text" id="custNotes" value="${bookingDraft.customer.notes}" placeholder="e.g. Birthday banner, sunset photo spot" class="w-full p-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-sky-500 text-xs sm:text-sm">
            </div>
          </div>

          <!-- Payment Options -->
          <div class="pt-2">
            <label class="block text-xs font-bold text-slate-700 mb-1.5">Payment Method</label>
            <div class="grid grid-cols-3 gap-2 text-center text-xs">
              <label class="cursor-pointer p-2.5 rounded-xl border border-sky-500 bg-sky-50 font-bold text-sky-800 flex flex-col items-center gap-1">
                <input type="radio" name="paymethod" value="card" checked class="hidden">
                <i class="fa-solid fa-credit-card text-sky-600 text-sm"></i>
                <span class="text-[11px]">Card</span>
              </label>
              <label class="cursor-pointer p-2.5 rounded-xl border border-slate-200 bg-white font-medium text-slate-700 hover:bg-slate-50 flex flex-col items-center gap-1">
                <input type="radio" name="paymethod" value="applepay" class="hidden">
                <i class="fa-brands fa-apple text-slate-900 text-sm"></i>
                <span class="text-[11px]">Apple/Google</span>
              </label>
              <label class="cursor-pointer p-2.5 rounded-xl border border-slate-200 bg-white font-medium text-slate-700 hover:bg-slate-50 flex flex-col items-center gap-1">
                <input type="radio" name="paymethod" value="beach" class="hidden">
                <i class="fa-solid fa-money-bill-wave text-emerald-600 text-sm"></i>
                <span class="text-[11px]">At Beach</span>
              </label>
            </div>
          </div>

          <!-- Waiver Checkbox -->
          <div class="p-3 rounded-xl bg-amber-50/80 border border-amber-200 text-[11px] sm:text-xs text-amber-900">
            <div class="flex items-start gap-2">
              <input type="checkbox" id="waiverCheck" class="mt-0.5 rounded text-sky-600 focus:ring-sky-500 shrink-0">
              <label for="waiverCheck" class="cursor-pointer">
                <strong>Safety & Age Confirmation:</strong> Drivers are 18+, agree to wear provided life vests, and follow all safety zone rules.
              </label>
            </div>
          </div>
        </div>

        <!-- Summary Card -->
        <div class="lg:col-span-5 bg-slate-50 p-4 rounded-xl sm:rounded-2xl border border-slate-200 flex flex-col justify-between">
          <div class="space-y-3">
            <h4 class="text-xs font-bold text-slate-900 uppercase tracking-wider pb-1.5 border-b border-slate-200">
              Trip Summary
            </h4>

            <div>
              <div class="font-bold text-slate-800 text-sm sm:text-base">${item.title}</div>
              <div class="text-[11px] text-sky-600 font-semibold">${item.subtitle}</div>
            </div>

            <div class="text-xs space-y-1 text-slate-600 bg-white p-2.5 rounded-xl border border-slate-200">
              <div class="flex justify-between"><span>Date:</span> <span class="font-semibold text-slate-800">${bookingDraft.date}</span></div>
              <div class="flex justify-between"><span>Slot:</span> <span class="font-semibold text-slate-800 truncate ml-2">${bookingDraft.slot.split(' - ')[0]}</span></div>
              <div class="flex justify-between"><span>Duration:</span> <span class="font-semibold text-slate-800">${getDurationLabel(bookingDraft.duration)}</span></div>
            </div>

            <!-- Price Breakdown -->
            <div class="pt-2 border-t border-slate-200 space-y-1 text-xs">
              <div class="flex justify-between text-slate-600"><span>Base Rate</span> <span>${formatPrice(calc.basePrice)}</span></div>
              ${calc.addonsTotal > 0 ? `<div class="flex justify-between text-slate-600"><span>Add-ons</span> <span>+${formatPrice(calc.addonsTotal)}</span></div>` : ''}
              <div class="flex justify-between text-slate-600"><span>Fuel & Gear</span> <span class="text-emerald-600 font-semibold">Included FREE</span></div>
              <div class="flex justify-between text-slate-600"><span>Harbor Tax (7%)</span> <span>${formatPrice(calc.tax)}</span></div>
              <div class="pt-1.5 border-t border-slate-300 flex justify-between text-sm sm:text-base font-black text-slate-900">
                <span>Total Due</span>
                <span class="text-sky-700">${formatPrice(calc.grandTotal)}</span>
              </div>
            </div>
          </div>

          <div class="mt-4">
            <button type="button" onclick="confirmAndFinalizeBooking()" class="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-700 hover:to-cyan-700 text-white font-extrabold text-xs sm:text-sm shadow-lg transition flex items-center justify-center gap-2">
              <i class="fa-solid fa-lock"></i>
              <span>Confirm & Secure Booking</span>
            </button>
          </div>
        </div>
      </div>

      <div class="pt-3 border-t border-slate-200 flex justify-start">
        <button type="button" onclick="renderBookingStep(2)" class="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-100 text-xs sm:text-sm font-semibold flex items-center gap-2">
          <i class="fa-solid fa-arrow-left text-xs"></i>
          <span>Back to Add-ons</span>
        </button>
      </div>
    </div>
  `;
}

function getDurationLabel(dur) {
  if (dur === '1h') return '1 Hour';
  if (dur === '2h') return '2 Hours';
  if (dur === 'half') return 'Half Day (4h)';
  if (dur === 'full') return 'Full Day (8h)';
  return dur;
}

function calculateTotalPrice() {
  const item = selectedProduct || CATALOG[0];
  let basePrice = item.pricePerHour;

  if (bookingDraft.duration === '2h') {
    basePrice = item.pricePerHour * 2 * 0.95;
  } else if (bookingDraft.duration === 'half') {
    basePrice = item.priceHalfDay;
  } else if (bookingDraft.duration === 'full') {
    basePrice = item.priceFullDay;
  }

  let addonsTotal = 0;
  bookingDraft.selectedAddons.forEach(id => {
    const addon = ADDONS.find(a => a.id === id);
    if (addon) addonsTotal += addon.price;
  });

  const total = basePrice + addonsTotal;
  const tax = Math.round(total * 0.07);
  const grandTotal = total + tax;

  return { basePrice, addonsTotal, total, tax, grandTotal };
}

// Final confirmation
function confirmAndFinalizeBooking() {
  const nameInput = document.getElementById('custName');
  const emailInput = document.getElementById('custEmail');
  const phoneInput = document.getElementById('custPhone');
  const notesInput = document.getElementById('custNotes');
  const waiverCheck = document.getElementById('waiverCheck');

  if (!nameInput || !nameInput.value.trim()) {
    showToast('Please enter your full name', 'error');
    nameInput?.focus();
    return;
  }
  if (!emailInput || !emailInput.value.trim() || !emailInput.value.includes('@')) {
    showToast('Please enter a valid email address', 'error');
    emailInput?.focus();
    return;
  }
  if (!phoneInput || !phoneInput.value.trim()) {
    showToast('Please enter your contact mobile number', 'error');
    phoneInput?.focus();
    return;
  }
  if (!waiverCheck || !waiverCheck.checked) {
    showToast('Please accept the safety and waiver agreement', 'error');
    return;
  }

  bookingDraft.customer.name = nameInput.value.trim();
  bookingDraft.customer.email = emailInput.value.trim();
  bookingDraft.customer.phone = phoneInput.value.trim();
  bookingDraft.customer.notes = notesInput ? notesInput.value.trim() : '';

  const calc = calculateTotalPrice();
  const refCode = 'SHAIL-' + Math.floor(100000 + Math.random() * 900000);

  const completedBooking = {
    id: refCode,
    product: selectedProduct,
    date: bookingDraft.date,
    duration: bookingDraft.duration,
    durationLabel: getDurationLabel(bookingDraft.duration),
    slot: bookingDraft.slot,
    guests: bookingDraft.guests,
    addons: bookingDraft.selectedAddons.map(id => ADDONS.find(a => a.id === id)),
    customer: { ...bookingDraft.customer },
    pricing: { ...calc },
    createdAt: new Date().toISOString(),
    status: 'CONFIRMED'
  };

  saveBookingToStorage(completedBooking);
  closeBookingWizard();
  openReceiptModal(completedBooking);
  loadBookingsCount();
  showToast('Booking confirmed! Your boarding pass is ready.', 'success');
}

// ----------------- RESPONSIVE RECEIPT & E-TICKET -----------------

function openReceiptModal(booking) {
  const modal = document.getElementById('bookingReceiptModal');
  const content = document.getElementById('receiptModalContent');

  content.innerHTML = `
    <div class="p-4 sm:p-7 bg-white max-w-xl mx-auto rounded-2xl sm:rounded-3xl shadow-2xl">
      <div class="text-center mb-4 sm:mb-6">
        <div class="w-12 h-12 sm:w-14 sm:h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 shadow-inner">
          <i class="fa-solid fa-check text-xl sm:text-2xl"></i>
        </div>
        <span class="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
          Booking Confirmed
        </span>
        <h2 class="text-xl sm:text-2xl font-black font-heading text-slate-900 mt-1.5">Shail Boarding Pass</h2>
        <p class="text-[11px] text-slate-500">Present this digital pass at the Shail Beach Welcome Desk.</p>
      </div>

      <!-- Ticket Card -->
      <div class="bg-gradient-to-br from-sky-500 to-cyan-600 rounded-2xl sm:rounded-3xl p-4 sm:p-6 text-white shadow-xl relative overflow-hidden">
        <div class="flex justify-between items-start mb-3">
          <div>
            <div class="text-[10px] text-sky-100 font-semibold uppercase">Booking Ref</div>
            <div class="text-lg sm:text-2xl font-black font-mono tracking-wider">${booking.id}</div>
          </div>
          <span class="px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-bold uppercase">
            ${booking.status}
          </span>
        </div>

        <div class="border-t border-white/20 pt-3 mb-3">
          <h3 class="text-base sm:text-xl font-black font-heading leading-tight">${booking.product.title}</h3>
          <p class="text-[11px] text-sky-100">${booking.product.subtitle}</p>
        </div>

        <div class="grid grid-cols-2 gap-2 text-xs bg-white/10 p-2.5 sm:p-3 rounded-xl backdrop-blur-sm">
          <div>
            <span class="text-sky-200 text-[9px] uppercase font-semibold">Date</span>
            <div class="font-bold text-xs truncate">${booking.date}</div>
          </div>
          <div>
            <span class="text-sky-200 text-[9px] uppercase font-semibold">Slot</span>
            <div class="font-bold text-xs truncate">${booking.slot.split(' - ')[0]}</div>
          </div>
          <div>
            <span class="text-sky-200 text-[9px] uppercase font-semibold">Duration</span>
            <div class="font-bold text-xs">${booking.durationLabel}</div>
          </div>
          <div>
            <span class="text-sky-200 text-[9px] uppercase font-semibold">Guest</span>
            <div class="font-bold text-xs truncate">${booking.customer.name}</div>
          </div>
        </div>

        <!-- Simulated QR Code Container -->
        <div class="mt-3 pt-3 border-t border-white/20 flex items-center justify-between">
          <div class="text-[10px] text-sky-100">
            <div>Gate: Dock Pier B</div>
            <div>Arrival: 15 mins prior</div>
          </div>
          <div class="bg-white p-1.5 rounded-lg shadow">
            <canvas id="ticketQrCanvas" width="60" height="60"></canvas>
          </div>
        </div>
      </div>

      <!-- Detail list -->
      <div class="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1.5">
        <div class="flex justify-between text-slate-600">
          <span>Total Reserved:</span>
          <span class="font-extrabold text-slate-900">${formatPrice(booking.pricing.grandTotal)}</span>
        </div>
        <div class="flex justify-between text-slate-500">
          <span>Confirmation:</span>
          <span class="font-medium text-slate-700 truncate max-w-[180px]">${booking.customer.email}</span>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="mt-4 flex flex-col sm:flex-row gap-2 no-print">
        <button onclick="window.print()" class="flex-1 py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-2 transition">
          <i class="fa-solid fa-print"></i>
          <span>Print / PDF</span>
        </button>
        <button onclick="closeReceiptModal()" class="flex-1 py-2.5 px-4 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold text-xs flex items-center justify-center transition">
          <span>Done</span>
        </button>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');

  setTimeout(() => {
    drawSimulatedQr(booking.id);
  }, 50);
}

function drawSimulatedQr(text) {
  const canvas = document.getElementById('ticketQrCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const size = 60;
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, size, size);

  ctx.fillStyle = '#0f172a';
  function drawMarker(x, y) {
    ctx.fillRect(x, y, 14, 14);
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(x + 2, y + 2, 10, 10);
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(x + 4, y + 4, 6, 6);
  }
  drawMarker(3, 3);
  drawMarker(43, 3);
  drawMarker(3, 43);

  let seed = 0;
  for (let i = 0; i < text.length; i++) seed += text.charCodeAt(i);
  for (let r = 0; r < 12; r++) {
    for (let c = 0; c < 12; c++) {
      if ((r < 4 && c < 4) || (r < 4 && c > 7) || (r > 7 && c < 4)) continue;
      if ((seed * (r + 1) * (c + 1)) % 7 < 3) {
        ctx.fillRect(6 + c * 3.5, 6 + r * 3.5, 3, 3);
      }
    }
  }
}

function closeReceiptModal() {
  document.getElementById('bookingReceiptModal').classList.add('hidden');
}

// ----------------- STORAGE & MY BOOKINGS -----------------

function getSavedBookings() {
  try {
    const raw = localStorage.getItem('shail_bookings');
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveBookingToStorage(booking) {
  const list = getSavedBookings();
  list.unshift(booking);
  localStorage.setItem('shail_bookings', JSON.stringify(list));
}

function loadBookingsCount() {
  const list = getSavedBookings();
  const countBadge = document.getElementById('myBookingsBadge');
  if (countBadge) {
    if (list.length > 0) {
      countBadge.innerText = list.length;
      countBadge.classList.remove('hidden');
    } else {
      countBadge.classList.add('hidden');
    }
  }
}

function openMyBookingsModal() {
  const modal = document.getElementById('myBookingsModal');
  const container = document.getElementById('myBookingsList');
  const list = getSavedBookings();

  if (list.length === 0) {
    container.innerHTML = `
      <div class="text-center py-10">
        <div class="w-14 h-14 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-2">
          <i class="fa-solid fa-calendar-xmark text-xl"></i>
        </div>
        <h4 class="font-bold text-slate-800 text-sm">No active bookings found</h4>
        <p class="text-xs text-slate-500 mt-1 max-w-xs mx-auto">Explore our fleet and reserve your coastal getaway!</p>
        <button onclick="closeMyBookingsModal(); document.getElementById('catalogSection').scrollIntoView({behavior: 'smooth'})" class="mt-4 px-4 py-2 rounded-xl bg-sky-600 text-white text-xs font-bold hover:bg-sky-700 transition">
          Browse Fleet
        </button>
      </div>
    `;
  } else {
    container.innerHTML = `
      <div class="space-y-3">
        ${list.map(b => `
          <div class="p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-200 bg-white shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div class="flex items-center gap-3">
              <img src="${b.product.image}" class="w-12 h-12 sm:w-14 sm:h-14 rounded-lg object-cover shrink-0">
              <div class="min-w-0">
                <div class="flex items-center gap-1.5 flex-wrap">
                  <span class="text-[11px] font-mono font-bold text-sky-700 bg-sky-50 px-1.5 py-0.5 rounded">${b.id}</span>
                  <span class="text-[9px] font-bold uppercase px-1.5 py-0.5 rounded-full ${b.status === 'CANCELLED' ? 'bg-rose-100 text-rose-700' : 'bg-emerald-100 text-emerald-700'}">${b.status}</span>
                </div>
                <h4 class="font-bold text-slate-900 text-xs sm:text-sm mt-0.5 truncate">${b.product.title}</h4>
                <p class="text-[10px] text-slate-500">${b.date} • ${b.durationLabel}</p>
              </div>
            </div>

            <div class="flex items-center gap-2 justify-end pt-2 sm:pt-0 border-t sm:border-0 border-slate-100">
              <button onclick="showTicketFromStorage('${b.id}')" class="px-3 py-1.5 rounded-lg bg-sky-50 hover:bg-sky-100 text-sky-700 text-xs font-bold transition">
                <i class="fa-solid fa-qrcode mr-1"></i> Pass
              </button>
              ${b.status !== 'CANCELLED' ? `
                <button onclick="cancelBooking('${b.id}')" class="px-2.5 py-1.5 rounded-lg border border-rose-200 hover:bg-rose-50 text-rose-600 text-xs font-semibold transition">
                  Cancel
                </button>
              ` : ''}
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  modal.classList.remove('hidden');
}

function closeMyBookingsModal() {
  document.getElementById('myBookingsModal').classList.add('hidden');
}

function showTicketFromStorage(id) {
  const list = getSavedBookings();
  const b = list.find(x => x.id === id);
  if (b) {
    closeMyBookingsModal();
    openReceiptModal(b);
  }
}

function cancelBooking(id) {
  if (confirm(`Cancel reservation ${id}? Free full refund applies.`)) {
    const list = getSavedBookings();
    const target = list.find(x => x.id === id);
    if (target) {
      target.status = 'CANCELLED';
      localStorage.setItem('shail_bookings', JSON.stringify(list));
      openMyBookingsModal();
      showToast(`Reservation ${id} has been cancelled`, 'info');
    }
  }
}

// ----------------- TOAST NOTIFICATIONS -----------------

function showToast(message, type = 'info') {
  const toastContainer = document.getElementById('toastContainer');
  if (!toastContainer) return;

  const toast = document.createElement('div');
  const bg = type === 'success' ? 'bg-emerald-600 text-white' : (type === 'error' ? 'bg-rose-600 text-white' : 'bg-slate-900 text-white');
  const icon = type === 'success' ? 'fa-check' : (type === 'error' ? 'fa-triangle-exclamation' : 'fa-bell');

  toast.className = `p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-xl ${bg} text-xs font-semibold flex items-center gap-2.5 transform translate-y-4 opacity-0 transition-all duration-300 pointer-events-auto`;
  toast.innerHTML = `
    <i class="fa-solid ${icon} text-sm shrink-0"></i>
    <span>${message}</span>
  `;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.classList.remove('translate-y-4', 'opacity-0');
  }, 10);

  setTimeout(() => {
    toast.classList.add('translate-y-4', 'opacity-0');
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// ----------------- CURRENCY -----------------

function setCurrency(curr) {
  if (CURRENCIES[curr]) {
    currentCurrency = curr;
    const lbl = document.getElementById('currencyLabel');
    if (lbl) lbl.innerText = curr;
    renderCatalog();
    showToast(`Currency switched to ${curr}`, 'info');
  }
}

// ----------------- EVENT LISTENERS -----------------

function setupEventListeners() {
  const mobileToggle = document.getElementById('mobileMenuToggle');
  if (mobileToggle) {
    mobileToggle.addEventListener('click', toggleMobileMenu);
  }

  document.querySelectorAll('.faq-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const content = btn.nextElementSibling;
      const icon = btn.querySelector('.faq-icon');
      if (content) {
        content.classList.toggle('hidden');
        if (icon) icon.classList.toggle('rotate-180');
      }
    });
  });

  const newsForm = document.getElementById('newsletterForm');
  if (newsForm) {
    newsForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = document.getElementById('newsletterEmail');
      if (emailInput && emailInput.value) {
        showToast('Thanks for joining the Shail Beach Club! Check your inbox for $20 off code.', 'success');
        emailInput.value = '';
      }
    });
  }
}
