// ============================================
// NAVBAR SCROLL EFFECT
// ============================================
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 60) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// ============================================
// MOBILE MENU TOGGLE
// ============================================
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
  });
});

// ============================================
// IMAGE GALLERY MODAL
// ============================================
const imageModal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const imageModalClose = document.getElementById("imageModalClose");

document.querySelectorAll(".gallery-item").forEach((item) => {
  item.addEventListener("click", () => {
    const imgSrc = item.getAttribute("data-img");
    modalImage.src = imgSrc;
    imageModal.classList.add("active");
    document.body.style.overflow = "hidden";
  });
});

imageModalClose.addEventListener("click", () => {
  imageModal.classList.remove("active");
  document.body.style.overflow = "";
});

document
  .querySelector("#imageModal .modal-overlay")
  .addEventListener("click", () => {
    imageModal.classList.remove("active");
    document.body.style.overflow = "";
  });

// ============================================
// PACKAGE DATA (with extra images)
// ============================================
const packageData = {
  // 6 DAYS
  "day1-6": {
    title: "Day 1: Spice Farm + Prison Island + Stone Town",
    meta: "Duration: full day | Pick-up: 9:00 AM",
    desc: `<p>Your journey begins with a 9:00 AM hotel pickup. First, visit a traditional Spice Farm, where you'll discover Zanzibar's famous spices, tropical fruits, and medicinal plants while enjoying fresh fruit tasting. Next, head to Prison Island by boat to meet the giant Aldabra tortoises and learn about the island's fascinating history. Afterward, continue with a Stone Town Walking Tour, exploring the Old Slave Market, Darajani Market, Old Fort, House of Wonders, Freddie Mercury House, Forodhani Gardens, and the charming narrow streets filled with local culture and history. After an unforgettable day exploring the best of Zanzibar, you'll be transferred back to your hotel.</p>`,
    extraImages: ["./images/13.jpeg", "./images/24.jpeg"],
  },
  "day2-6": {
    title: "Day 2: Mnemba Island & Sunset Cruise at Kendwa Beach",
    meta: "Duration: full day | Pick-up: 9:00 AM",
    desc: `<p>Your day begins with a 9:00 AM hotel pickup and a transfer to the departure point for your Mnemba Island excursion. Enjoy snorkeling in the crystal-clear waters, discover colorful coral reefs and tropical fish, relax on the beautiful sandbank (weather permitting), and keep an eye out for dolphins in their natural habitat. After your ocean adventure, you'll have time to relax before heading to Kendwa Beach for a magical Sunset Cruise. Sail along Zanzibar's stunning coastline, take in breathtaking sunset views, enjoy the refreshing sea breeze, and create unforgettable memories as the sun sets over the Indian Ocean. After the cruise, you'll be transferred back to your hotel.</p>`,
    extraImages: ["./images/31.jpeg", "./images/32.jpeg"],
  },
  "day3-6": {
    title: "Day 3: Jozani Forest + Salaam Cave + Mtende Beach + The Rock",
    meta: "Duration: full day | Pick-up: 9:00 AM",
    desc: `<p>Your tour begins with a 9:00 AM hotel pickup and a drive to Jozani Forest, home to the rare Zanzibar Red Colobus Monkeys and a beautiful mangrove boardwalk. Next, visit Salaam Cave, where you can swim in crystal-clear natural water, feed sea turtles, and enjoy the peaceful surroundings. Continue to the stunning Mtende Beach, known for its white sand, turquoise water, and breathtaking coastal scenery. End your journey at the famous The Rock Restaurant, one of Zanzibar's most iconic dining spots, where you can admire spectacular ocean views and enjoy a delicious meal or refreshing drink (meal not included). After an unforgettable day exploring Zanzibar's nature and coastline, you'll be transferred back to your hotel.</p>`,
    extraImages: ["./images/30.jpeg", "./images/3.jpeg"],
  },
  "day4-6": {
    title: "Day 4: Safari Blue",
    meta: "Duration: full day | Pick-up: 8:00 AM",
    desc: `<p>Your adventure starts with a 8:00 AM hotel pickup and a transfer to Fumba, where you'll board a traditional wooden dhow for the famous Safari Blue excursion. Cruise across the crystal-clear waters of the Indian Ocean, snorkel among vibrant coral reefs, relax on a pristine sandbank, and swim in a natural lagoon surrounded by mangrove trees. Enjoy a freshly prepared seafood barbecue with tropical fruits and refreshing drinks while taking in the beauty of Zanzibar's coastline. This full-day experience offers the perfect combination of sailing, swimming, snorkeling, and relaxation before returning to your hotel with unforgettable memories.</p>`,
    extraImages: ["./images/10.jpeg", "./images/17.jpeg"],
  },
  "day5-6": {
    title: "Day 5: Village Visit & Cooking Class",
    meta: "Duration: full day | Pick-up: 9:00 AM",
    desc: `<p>Your experience begins with a 9:00 AM hotel pickup and a warm welcome to a local village. Discover Zanzibar's rich culture as you explore traditional homes, meet friendly locals, and learn about their daily way of life. Then, join a hands-on cooking class where you'll prepare authentic Zanzibari dishes using fresh local ingredients and aromatic spices. After enjoying the delicious meal you've helped create, you'll have time to interact with the community and experience the true taste and traditions of Zanzibar before returning to your hotel.</p>`,
    extraImages: ["./images/17.jpeg", "./images/34.jpeg"],
  },
  "day6-6": {
    title: "Day 6: Starfish at Pingwe + Paje Beach",
    meta: "Duration: full day | Pick-up: 9:00 AM",
    desc: `<p>Your day starts with a 9:00 AM hotel pickup and a scenic drive to Pingwe, where you'll have the chance to see beautiful starfish in their natural shallow-water habitat during low tide. Enjoy the peaceful surroundings, take memorable photos, and learn about the local marine ecosystem while respecting the wildlife. Continue to Paje Beach, one of Zanzibar's most stunning beaches, famous for its white sand, turquoise waters, and laid-back atmosphere. Relax on the beach, swim in the warm Indian Ocean, or simply enjoy the breathtaking coastal views before returning to your hotel.</p>`,
    extraImages: ["./images/15.jpeg", "./images/11.jpeg"],
  },
  // 5 DAYS
  "day1-5": {
    title: "Day 1: Mnemba Island, Nungwi Beach & Sunset Cruise",
    meta: "Duration: full day | Pick-up: 9:00 AM",
    desc: `<p>Your day begins with a hotel pickup and a transfer for your Mnemba Island excursion, with a chance to spot dolphins along the way. Snorkel in crystal-clear waters among vibrant coral reefs, then relax on Nungwi Beach, known for its soft white sand and laid-back atmosphere. As the afternoon winds down, board a traditional dhow for a magical sunset cruise along Zanzibar's coastline before returning to your hotel.</p>`,
    extraImages: ["./images/31.jpeg", "./images/10.jpeg"],
  },
  "day2-5": {
    title: "Day 2: Spice Farm, Prison Island & Stone Town",
    meta: "Duration: full day | Pick-up: 9:00 AM",
    desc: `<p>Discover Zanzibar's famous spices on a guided Spice Farm tour, with fresh fruit tasting along the way. Continue to Prison Island by boat to meet the giant Aldabra tortoises and learn about the island's history. End the day with a Stone Town Walking Tour through the Old Fort, House of Wonders, local markets, and the narrow historic streets of this UNESCO World Heritage Site.</p>`,
    extraImages: ["./images/13.jpeg", "./images/17.jpeg"],
  },
  "day3-5": {
    title: "Day 3: Jozani Forest, Salaam Cave, Mtende Beach & The Rock",
    meta: "Duration: full day | Pick-up: 9:00 AM",
    desc: `<p>Visit Jozani Forest to spot the rare Zanzibar Red Colobus Monkeys along a peaceful mangrove boardwalk. Continue to Salaam Cave for a swim in crystal-clear natural water and a chance to meet friendly sea turtles. Relax on the stunning white sands of Mtende Beach, one of Zanzibar's most beautiful stretches of coastline, before finishing at the iconic The Rock Restaurant for spectacular ocean views.</p>`,
    extraImages: ["./images/37.jpeg", "./images/4.jpeg"],
  },
  // 4 DAYS
  "day1-4": {
    title:
      "Day 1: Spice Farm, Prison Island, Nakupenda Sandbank, Stone Town & Night Food Market",
    meta: "Duration: full day | Pick-up: 9:00 AM",
    desc: `<p>Start with a visit to a Spice Farm to learn about Zanzibar's famous spices, then head to Prison Island to meet the giant tortoises. Relax and swim at the beautiful Nakupenda Sandbank before exploring the history and culture of Stone Town. Wrap up the day with local food and lively atmosphere at the Stone Town Night Food Market.</p>`,
    extraImages: ["./images/8.jpeg", "./images/7.jpeg"],
  },
  "day2-4": {
    title: "Day 2: Mnemba Island, Sea Turtles, Kendwa Beach & Sunset Cruise",
    meta: "Duration: full day | Pick-up: 9:00 AM",
    desc: `<p>Enjoy a snorkeling and marine life experience at Mnemba Island, then visit the sea turtles for a swim alongside them. Relax at Kendwa Beach, one of Zanzibar's most scenic stretches of coastline, and end the day with a beautiful sunset cruise along the coast.</p>`,
    extraImages: ["./images/2.jpeg", "./images/6.jpeg"],
  },
  // MIKUMI DAY TRIP SAFARI
  mikumi: {
    title: "Mikumi National Park Safari",
    meta: "Duration: full day | Flight departs: 06:30 or 07:00",
    desc: `<p>Fly from Zanzibar direct to Mikumi, where you'll meet your safari guide at the park for a short briefing before setting off. The morning safari begins at 07:20, followed by a lunch break at 12:30 and an afternoon safari at 13:30. The return flight to Zanzibar departs at 15:00, arriving back around 15:45.</p>
        <ul class="package-includes-list">
            <li><i class="fas fa-check"></i> Flight round trip</li>
            <li><i class="fas fa-check"></i> Entrance fees</li>
            <li><i class="fas fa-check"></i> Open jeep</li>
            <li><i class="fas fa-check"></i> Lunch and soft drinks</li>
        </ul>`,
    extraImages: ["./images/36.jpeg"],
  },
  // 3 DAYS
  "day1-3": {
    title: "Day 1: Jozani Forest + Salaam Cave + The Rock",
    meta: "Duration: full day | Pick-up: 9:00 AM",
    desc: `<p>Start your Zanzibar journey by exploring the beautiful Jozani Forest, home to the rare Zanzibar Red Colobus Monkeys and a peaceful mangrove boardwalk. Continue to the stunning Salaam Cave, where you can swim in crystal-clear natural water, relax in a peaceful setting, and even feed friendly turtles. End the day at the iconic The Rock Restaurant, one of Zanzibar's most famous landmarks, where you can enjoy breathtaking ocean views and capture unforgettable photos while tasting delicious seafood (meal optional).</p>`,
    extraImages: ["./images/37.jpeg", "./images/38.jpeg"],
  },
  "day2-3": {
    title: "Day 2: Mnemba Island — Swimming with Dolphins",
    meta: "Duration: full day | Pick-up: 8:30 AM",
    desc: `<p>Enjoy an unforgettable ocean experience at Mnemba Island, one of Zanzibar's top snorkeling destinations. Start the day with the chance to see and swim alongside wild dolphins in their natural habitat. Continue with snorkeling in the crystal-clear turquoise waters, where you'll discover colorful coral reefs and tropical fish. Relax on the beautiful sandbank (tide permitting), swim in the warm Indian Ocean, and enjoy fresh tropical fruits before returning to your hotel.</p>`,
    extraImages: ["./images/16.jpeg", "./images/60.jpeg"],
  },
  "day3-3": {
    title: "Day 3: Spice Farm + Prison Island + Stone Town",
    meta: "Duration: full day | Pick-up: 9:00 AM",
    desc: `<p>Experience the rich culture and history of Zanzibar on this full-day tour. Begin at the Spice Farm, where you'll discover why Zanzibar is known as the "Spice Island" by seeing, smelling, and tasting fresh tropical spices and fruits. Next, take a boat trip to Prison Island to meet the famous giant Aldabra tortoises and learn about the island's fascinating history. End your journey with a guided Stone Town Walking Tour, exploring narrow streets, historic buildings, local markets, and the vibrant culture of Zanzibar's UNESCO World Heritage Site.</p>`,
    extraImages: ["./images/24.jpeg", "./images/33.jpeg"],
  },
};

// ============================================
// PACKAGE MODAL
// ============================================
const packageModal = document.getElementById("packageModal");
const packageModalBody = document.getElementById("packageModalBody");
const packageModalClose = document.getElementById("packageModalClose");
const whatsappNumber = "255711322064";

document.querySelectorAll(".package-more").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    const key = btn.getAttribute("data-package");
    const data = packageData[key];
    if (!data) return;

    // Build extra images carousel
    let extraImagesHtml = "";
    if (data.extraImages && data.extraImages.length > 0) {
      extraImagesHtml = `
                <div class="modal-extra-images">
                    <h4><i class="fas fa-images"></i> More from this experience</h4>
                    <div class="extra-images-scroll">
                        ${data.extraImages.map((img) => `<img src="${img}" alt="Extra view" loading="lazy" />`).join("")}
                    </div>
                </div>
            `;
    }

    const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi%20Ahmed%20Dezan%20Tours%2C%20I'm%20interested%20in%20the%20package%3A%20${encodeURIComponent(data.title)}`;

    packageModalBody.innerHTML = `
            <h2>${data.title}</h2>
            <div class="package-meta"><i class="far fa-clock"></i> ${data.meta}</div>
            <div class="package-full-desc">${data.desc}</div>
            <div class="package-inclusive-note">
                <i class="fas fa-gem"></i> <strong>One-time payment covers everything:</strong> transport, meals, entry fees, and expert guide – no hidden costs!
            </div>
            ${extraImagesHtml}
            <a href="${whatsappLink}" target="_blank" class="modal-whatsapp-btn">
                <i class="fab fa-whatsapp"></i> Book Now via WhatsApp
            </a>
        `;

    packageModal.classList.add("active");
    document.body.style.overflow = "hidden";
  });
});

packageModalClose.addEventListener("click", () => {
  packageModal.classList.remove("active");
  document.body.style.overflow = "";
});

packageModal.querySelector(".modal-overlay").addEventListener("click", () => {
  packageModal.classList.remove("active");
  document.body.style.overflow = "";
});

// ============================================
// TESTIMONIALS CAROUSEL
// ============================================
const track = document.getElementById("testimonialsTrack");
const slides = track.querySelectorAll(".testimonial-slide");
const prevBtn = document.getElementById("carouselPrev");
const nextBtn = document.getElementById("carouselNext");
let currentIndex = 0;
const totalSlides = slides.length;

function updateCarousel() {
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateCarousel();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateCarousel();
});

let autoPlay = setInterval(() => {
  nextBtn.click();
}, 5000);

const carouselContainer = document.querySelector(".testimonials-carousel");
carouselContainer.addEventListener("mouseenter", () => clearInterval(autoPlay));
carouselContainer.addEventListener("mouseleave", () => {
  autoPlay = setInterval(() => {
    nextBtn.click();
  }, 5000);
});

// ============================================
// CONTACT FORM (demo)
// ============================================
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you for your message! We will get back to you soon.");
  e.target.reset();
});

// ============================================
// NEWSLETTER FORM (demo)
// ============================================
document.getElementById("newsletterForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("You're subscribed! Check your inbox for island inspiration.");
  e.target.reset();
});
