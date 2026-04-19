(function () {
  "use strict";

  const STRINGS = {
    en: {
      brand: "JMS Bakery & Cafe",
      nav_menu: "Menu",
      nav_offers: "Offers",
      nav_location: "Location",
      hero_eyebrow: "Fresh daily · Warm welcome",
      hero_title: "Baked with care, served with heart.",
      hero_lead:
        "Artisan breads, pastries, and specialty coffee in a cozy neighborhood cafe. Perfect for breakfast, lunch, or an afternoon treat.",
      hero_cta_menu: "View menu",
      hero_cta_visit: "Visit us",
      menu_title: "Our menu",
      menu_sub:
        "Prices in Nepalese Rupees (NPR), in line with typical local bakery and fast-food menus in Nepal. Seasonal items may vary — ask about allergens.",
      offers_title: "Current offers",
      offers_sub: "Limited-time deals for dine-in and takeaway.",
      loc_title: "Find us",
      loc_sub: "Located in Chandani — easy to reach by car or local transport.",
      loc_hours_title: "Opening hours",
      loc_contact_title: "Contact",
      loc_phone_label: "Phone",
      loc_email_label: "Email",
      loc_address_title: "Address",
      loc_address: "W3PR+94Q, Chandani 10400, Nepal",
      loc_open_maps: "Open in Google Maps",
      loc_map_note: "Same location as our Google Maps listing.",
      footer_tagline: "JMS Bakery & Cafe — See you soon.",
      menu_categories: [
        {
          key: "bakery",
          title: "Bakery",
          meta: "Fresh breads & pastries (baked daily)",
          image:
            "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80",
          imageAlt: "Assorted croissants and pastries",
          items: [
            { name: "White sandwich loaf", price: "Rs. 130" },
            { name: "Brown / atta loaf", price: "Rs. 150" },
            { name: "Plain butter croissant", price: "Rs. 300" },
            { name: "Cheese croissant", price: "Rs. 350" },
            { name: "Chocolate croissant", price: "Rs. 350" },
            { name: "Cinnamon roll", price: "Rs. 350" },
            { name: "Chocolate danish", price: "Rs. 400" },
            { name: "Swiss roll (per slice)", price: "Rs. 300" },
          ],
        },
        {
          key: "cakes",
          title: "Cakes & pastries",
          meta: "Slices & custom orders",
          image:
            "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
          imageAlt: "Layered chocolate cake slice",
          items: [
            { name: "Black forest (slice)", price: "Rs. 280" },
            { name: "Red velvet (slice)", price: "Rs. 300" },
            { name: "Carrot cake (slice)", price: "Rs. 400" },
            { name: "Banana cake (slice)", price: "Rs. 400" },
            { name: "Éclair / cream pastry", price: "Rs. 220" },
            { name: "Brownie square", price: "Rs. 160" },
            { name: "Custom cake (1 kg, from)", price: "from Rs. 2,000" },
          ],
        },
        {
          key: "fastfood",
          title: "Fast food — local favourites",
          meta: "Momo, chowmein & more (Nepali cafe style)",
          image:
            "https://images.unsplash.com/photo-1626803776151-2bf0a6e5d68e?auto=format&fit=crop&w=800&q=80",
          imageAlt: "Steamed dumplings on a plate",
          items: [
            { name: "Veg steamed momo (10 pcs)", price: "Rs. 259" },
            { name: "Chicken steamed momo (10 pcs)", price: "Rs. 279" },
            { name: "Buff steamed momo (10 pcs)", price: "Rs. 269" },
            { name: "Fried chicken momo (10 pcs)", price: "Rs. 320" },
            { name: "Veg chowmein", price: "Rs. 229" },
            { name: "Chicken chowmein", price: "Rs. 349" },
            { name: "Egg chowmein", price: "Rs. 279" },
            { name: "Veg fried rice", price: "Rs. 219" },
            { name: "Chicken fried rice", price: "Rs. 319" },
            { name: "Veg spring roll (4 pcs)", price: "Rs. 180" },
          ],
        },
        {
          key: "drinks",
          title: "Hot & cold drinks",
          meta: "Coffee, tea & refreshments",
          image:
            "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80",
          imageAlt: "Cups of coffee on a table",
          items: [
            { name: "Espresso", price: "Rs. 120" },
            { name: "Americano", price: "Rs. 150" },
            { name: "Cappuccino", price: "Rs. 180" },
            { name: "Iced latte", price: "Rs. 200" },
            { name: "Masala chiya", price: "Rs. 60" },
            { name: "Hot chocolate", price: "Rs. 150" },
            { name: "Fresh lime soda", price: "Rs. 120" },
            { name: "Seasonal juice", price: "Rs. 160" },
          ],
        },
      ],
      offers: [
        {
          badge: "Weekday",
          title: "Morning pair — 8–11am",
          body: "Any bakery pastry + regular coffee for Rs. 450.",
        },
        {
          badge: "Family",
          title: "Cake pre-orders",
          body: "10% off whole cakes ordered 48 hours in advance.",
        },
        {
          badge: "Loyalty",
          title: "Stamp card",
          body: "Buy 8 drinks, get the 9th free.",
        },
        {
          badge: "Seasonal",
          title: "Festive specials",
          body: "Ask for our holiday menu — limited batches weekly.",
        },
      ],
      hours: [
        { day: "Sunday – Thursday", time: "7:00am – 9:00pm" },
        { day: "Friday – Saturday", time: "7:00am – 10:00pm" },
      ],
    },
    ne: {
      brand: "जेएमएस बेकरी र क्याफे",
      nav_menu: "मेनु",
      nav_offers: "अफरहरू",
      nav_location: "स्थान",
      hero_eyebrow: "दैनिक ताजा · हार्दिक स्वागत",
      hero_title: "मायाले पकाइएको, मनले सेवा गरिएको।",
      hero_lead:
        "हस्तनिर्मित रोटी, पेस्ट्री र विशेष कफी — आरामदायी क्याफेमा। ब्रेकफास्ट, लन्च वा दिउँसोको नास्ताका लागि उपयुक्त।",
      hero_cta_menu: "मेनु हेर्नुहोस्",
      hero_cta_visit: "हामीलाई भेट्नुहोस्",
      menu_title: "हाम्रो मेनु",
      menu_sub:
        "मूल्य नेपाली रुपैयाँ (NPR) मा छन् — स्थानीय बेकरी र फास्ट फुड मेनुसँग मिल्दो। मौसम अनुसार फरक हुन सक्छ — एलर्जीका बारेमा सोध्नुहोस्।",
      offers_title: "हालका अफरहरू",
      offers_sub: "डाइन-इन र टेकअवेका लागि सीमित समयका मूल्य छुट।",
      loc_title: "हामीलाई भेट्नुहोस्",
      loc_sub: "चाँदनीमा अवस्थित — गाडी वा स्थानीय यातायातबाट सजिलै पुग्न सकिन्छ।",
      loc_hours_title: "खुल्ने समय",
      loc_contact_title: "सम्पर्क",
      loc_phone_label: "फोन",
      loc_email_label: "इमेल",
      loc_address_title: "ठेगाना",
      loc_address: "डब्ल्यु३पीआर+९४क्यू, चाँदनी १०४००, नेपाल",
      loc_open_maps: "गुगल नक्सामा खोल्नुहोस्",
      loc_map_note: "हाम्रो गुगल नक्सा सूचीसँगैको स्थान।",
      footer_tagline: "जेएमएस बेकरी र क्याफे — फेरि भेटौँला।",
      menu_categories: [
        {
          key: "bakery",
          title: "बेकरी",
          meta: "ताजा रोटी र पेस्ट्री (दैनिक)",
          image:
            "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80",
          imageAlt: "क्रोइसान्ट र पेस्ट्री",
          items: [
            { name: "सेतो स्यान्डविच लोफ", price: "रु. १३०" },
            { name: "खैरो / आट्टा लोफ", price: "रु. १५०" },
            { name: "सादा बटर क्रोइसान्ट", price: "रु. ३००" },
            { name: "चीज क्रोइसान्ट", price: "रु. ३५०" },
            { name: "चकलेट क्रोइसान्ट", price: "रु. ३५०" },
            { name: "सिनामन रोल", price: "रु. ३५०" },
            { name: "चकलेट डेनिस", price: "रु. ४००" },
            { name: "स्विस रोल (प्रति स्लाइस)", price: "रु. ३००" },
          ],
        },
        {
          key: "cakes",
          title: "केक र पेस्ट्री",
          meta: "स्लाइस र अर्डर अनुसार",
          image:
            "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
          imageAlt: "चकलेट केक",
          items: [
            { name: "ब्ल्याक फरेस्ट (स्लाइस)", price: "रु. २८०" },
            { name: "रेड भेलभेट (स्लाइस)", price: "रु. ३००" },
            { name: "गाजरको केक (स्लाइस)", price: "रु. ४००" },
            { name: "केराको केक (स्लाइस)", price: "रु. ४००" },
            { name: "एक्लेयर / क्रिम पेस्ट्री", price: "रु. २२०" },
            { name: "ब्राउनी", price: "रु. १६०" },
            { name: "अनुकूलन केक (१ किग्रा, देखि)", price: "रु. २,००० देखि" },
          ],
        },
        {
          key: "fastfood",
          title: "फास्ट फुड — स्थानीय मनपर्ने",
          meta: "म:म:, चाउमिन आदि (नेपाली क्याफे शैली)",
          image:
            "https://images.unsplash.com/photo-1626803776151-2bf0a6e5d68e?auto=format&fit=crop&w=800&q=80",
          imageAlt: "भापेको म:म:",
          items: [
            { name: "तरकारी म:म: भापेको (१० वटा)", price: "रु. २५९" },
            { name: "कुखुराको म:म: भापेको (१० वटा)", price: "रु. २७९" },
            { name: "बफ म:म: भापेको (१० वटा)", price: "रु. २६९" },
            { name: "कुखुराको म:म: तलेको (१० वटा)", price: "रु. ३२०" },
            { name: "तरकारी चाउमिन", price: "रु. २२९" },
            { name: "कुखुराको चाउमिन", price: "रु. ३४९" },
            { name: "अन्डाको चाउमिन", price: "रु. २७९" },
            { name: "तरकारी भुजिया भात", price: "रु. २१९" },
            { name: "कुखुराको भुजिया भात", price: "रु. ३१९" },
            { name: "तरकारी स्प्रिङ रोल (४ वटा)", price: "रु. १८०" },
          ],
        },
        {
          key: "drinks",
          title: "तातो र चिसो पेय",
          meta: "कफी, चिया र अन्य",
          image:
            "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80",
          imageAlt: "कफीका कप",
          items: [
            { name: "एस्प्रेसो", price: "रु. १२०" },
            { name: "अमेरिकानो", price: "रु. १५०" },
            { name: "क्यापुचिनो", price: "रु. १८०" },
            { name: "आइस्ड लाटे", price: "रु. २००" },
            { name: "मसाला चिया", price: "रु. ६०" },
            { name: "हट चकलेट", price: "रु. १५०" },
            { name: "लाइम सोडा", price: "रु. १२०" },
            { name: "मौसमी जुस", price: "रु. १६०" },
          ],
        },
      ],
      offers: [
        {
          badge: "कार्यदिन",
          title: "बिहानको जोडी — ८–११ बजे",
          body: "जुनसुकै बेकरी पेस्ट्री + नियमित कफी रु. ४५० मा।",
        },
        {
          badge: "परिवार",
          title: "केक अग्रिम अर्डर",
          body: "४८ घण्टा अगाडि अर्डर गर्दा पूरा केकमा १०% छुट।",
        },
        {
          badge: "नियमित ग्राहक",
          title: "स्ट्याम्प कार्ड",
          body: "८ पेय किन्दा ९ औँ निःशुल्क।",
        },
        {
          badge: "मौसमी",
          title: "पर्व विशेष",
          body: "हाम्रो पर्व मेनु सोध्नुहोस् — हप्तामा सीमित मात्रा।",
        },
      ],
      hours: [
        { day: "आइतबार – बिहिबार", time: "७:०० बिहान – ९:०० बेलुका" },
        { day: "शुक्रबार – शनिबार", time: "७:०० बिहान – १०:०० बेलुका" },
      ],
    },
  };

  const STORAGE_KEY = "jms-lang";
  const menuRoot = document.getElementById("menu-root");
  const offersRoot = document.getElementById("offers-root");
  const hoursRoot = document.getElementById("hours-root");
  const yearEl = document.getElementById("year");

  function getLang() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "ne" || stored === "en") return stored;
    const nav = navigator.language || "";
    return nav.toLowerCase().startsWith("ne") ? "ne" : "en";
  }

  function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
    document.body.setAttribute("lang", lang);
    applyStrings(lang);
    renderMenu(lang);
    renderOffers(lang);
    renderHours(lang);
    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      const isActive = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("is-active", isActive);
      btn.setAttribute("aria-pressed", isActive ? "true" : "false");
    });
  }

  function applyStrings(lang) {
    const t = STRINGS[lang];
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      const key = el.getAttribute("data-i18n");
      if (t[key] !== undefined) el.textContent = t[key];
    });
  }

  function renderMenu(lang) {
    const cats = STRINGS[lang].menu_categories;
    menuRoot.innerHTML = "";
    cats.forEach(function (cat) {
      const card = document.createElement("article");
      card.className = "menu-card";
      if (cat.image) {
        const photo = document.createElement("div");
        photo.className = "menu-card-photo";
        const img = document.createElement("img");
        img.src = cat.image;
        img.alt = cat.imageAlt || cat.title;
        img.loading = "lazy";
        img.decoding = "async";
        img.width = 800;
        img.height = 500;
        photo.appendChild(img);
        card.appendChild(photo);
      }
      const h = document.createElement("h3");
      h.textContent = cat.title;
      const meta = document.createElement("p");
      meta.className = "menu-meta";
      meta.textContent = cat.meta;
      const ul = document.createElement("ul");
      ul.className = "menu-items";
      cat.items.forEach(function (it) {
        const li = document.createElement("li");
        li.className = "menu-item";
        const name = document.createElement("span");
        name.className = "item-name";
        name.textContent = it.name;
        const price = document.createElement("span");
        price.className = "item-price";
        price.textContent = it.price;
        li.appendChild(name);
        li.appendChild(price);
        ul.appendChild(li);
      });
      card.appendChild(h);
      card.appendChild(meta);
      card.appendChild(ul);
      menuRoot.appendChild(card);
    });
  }

  function renderOffers(lang) {
    const offers = STRINGS[lang].offers;
    offersRoot.innerHTML = "";
    offers.forEach(function (o) {
      const li = document.createElement("li");
      li.className = "offer-card";
      const badge = document.createElement("span");
      badge.className = "offer-badge";
      badge.textContent = o.badge;
      const h = document.createElement("h3");
      h.textContent = o.title;
      const p = document.createElement("p");
      p.textContent = o.body;
      li.appendChild(badge);
      li.appendChild(h);
      li.appendChild(p);
      offersRoot.appendChild(li);
    });
  }

  function renderHours(lang) {
    const hours = STRINGS[lang].hours;
    hoursRoot.innerHTML = "";
    hours.forEach(function (row) {
      const li = document.createElement("li");
      const d = document.createElement("span");
      d.textContent = row.day;
      const t = document.createElement("span");
      t.textContent = row.time;
      li.appendChild(d);
      li.appendChild(t);
      hoursRoot.appendChild(li);
    });
  }

  document.querySelectorAll(".lang-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const lang = btn.getAttribute("data-lang");
      if (lang === "en" || lang === "ne") setLang(lang);
    });
  });

  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  setLang(getLang());
})();
