// Central content for West Prime Hotel & Restaurant, Calbayog City, Samar.
// Photos: free Unsplash placeholders — swap for real property images before presenting.
// TODO: confirm Booking.com rating; add real phone/email from Facebook.

export const location = {
  city: "Calbayog City",
  province: "Samar",
  country: "Philippines",
  region: "Calbayog City, Samar",
  regionFull: "Calbayog City, Samar, Philippines",
  address:
    "Pan-Philippine (Maharlika) Highway, Brgy. Capoocan, in front of the Calbayog Convention Center, Calbayog City 6710, Samar, Philippines",
  airport: "Calbayog Airport",
  conventionCenter: "Calbayog Convention Center",
  barangay: "Brgy. Capoocan",
};

export type Room = {
  id: string;
  name: string;
  tagline: string;
  price: number; // PHP per night
  bed: string;
  aircon: string;
  view: string;
  tv: string;
  description: string;
  hero: string;
  gallery: string[];
};

export const rooms: Room[] = [
  {
    id: "standard",
    name: "Standard Room",
    tagline: "Comfort, simply done",
    price: 2200,
    bed: "Queen or twin beds",
    aircon: "Air-conditioned",
    view: "City view",
    tv: "Cable TV",
    description:
      "A clean, quiet room with everything you need for a good night in Calbayog City — crisp linens, a private bathroom with walk-in shower and bidet, and soundproof windows that keep the city hum at a gentle distance.",
    hero: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1400&q=80",
    ],
  },
  {
    id: "deluxe",
    name: "Deluxe Room",
    tagline: "A little more room to breathe",
    price: 2800,
    bed: "Queen bed",
    aircon: "Air-conditioned",
    view: "City view",
    tv: "Cable TV",
    description:
      "More space to settle in after a long drive along the Maharlika Highway. Complimentary toiletries and fresh towels, a well-lit desk, and the same soundproof comfort our returning guests ask for by name.",
    hero: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1400&q=80",
    ],
  },
  {
    id: "family",
    name: "Family Room",
    tagline: "Room for everyone",
    price: 3500,
    bed: "Multiple beds",
    aircon: "Air-conditioned",
    view: "City view",
    tv: "Cable TV",
    description:
      "Built for families passing through Samar — generous sleeping space, a bathroom that keeps up with busy mornings, and room service when the little ones need an early dinner from the restaurant downstairs.",
    hero: "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1400&q=80",
    ],
  },
  {
    id: "premier",
    name: "Premier Room",
    tagline: "Our finest stay",
    price: 4200,
    bed: "King bed",
    aircon: "Air-conditioned",
    view: "City view & balcony",
    tv: "Cable TV",
    description:
      "The room we save for guests who want the best of West Prime — a private balcony or terrace overlooking Calbayog City, extra space to unwind, and the same warm service that keeps people coming back year after year.",
    hero: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?auto=format&fit=crop&w=1400&q=80",
    ],
  },
];

export type Dish = {
  name: string;
  note: string;
  price: number;
  image: string;
};

export const dishes: Dish[] = [
  {
    name: "Sinigang na Baboy",
    note: "Tamarind broth, fresh vegetables, steamed rice",
    price: 280,
    image:
      "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Kare-Kare",
    note: "Oxtail & tripe in peanut sauce, bagoong on the side",
    price: 320,
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Crispy Pata",
    note: "Slow-braised, deep-fried to a crackling finish",
    price: 650,
    image:
      "https://images.unsplash.com/photo-1546964124-0cce460f38ef?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Pancit Canton",
    note: "Stir-fried noodles, vegetables, your choice of protein",
    price: 180,
    image:
      "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=1200&q=80",
  },
];

export type Facility = {
  name: string;
  detail: string;
  icon: string;
};

export const facilities: Facility[] = [
  { name: "Free Wi-Fi", detail: "Throughout the hotel", icon: "wifi" },
  { name: "Free Parking", detail: "On-site for guests", icon: "parking" },
  { name: "Airport Transfer", detail: "Calbayog Airport", icon: "airport" },
  { name: "Restaurant & Bar", detail: "West Prime Restaurant", icon: "dining" },
  { name: "Cafe / Breakfast", detail: "Morning silog & coffee", icon: "cafe" },
  { name: "Room Service", detail: "To your door", icon: "roomService" },
  { name: "Family Rooms", detail: "Space for groups", icon: "family" },
  { name: "Smoke-Free", detail: "Clean air throughout", icon: "smokeFree" },
  { name: "24/7 Front Desk", detail: "Always here for you", icon: "frontDesk" },
];

export type Review = {
  quote: string;
  name: string;
  origin: string;
};

export const reviews: Review[] = [
  {
    quote:
      "We stay here every time we visit family in Samar. The staff remember our names, the rooms are always spotless, and we never skip dinner at the restaurant.",
    name: "Maria Elena Santos",
    origin: "Manila, Philippines",
  },
  {
    quote:
      "Flew into Calbayog City for work and was at the hotel in fifteen minutes. Comfortable room, strong Wi-Fi, and the sinigang at West Prime Restaurant might be the best in town.",
    name: "Daniel Reyes",
    origin: "Ormoc City, Philippines",
  },
  {
    quote:
      "A well-loved hotel with a restaurant locals genuinely recommend. Clean, quiet rooms with city views — exactly what we needed before exploring the cathedral and Nijaga Park.",
    name: "Grace Tan",
    origin: "Tacloban City, Philippines",
  },
];

export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: "Stay", href: "#stay" },
  { label: "Dine", href: "#dine" },
  { label: "Amenities", href: "#amenities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export const hotel = {
  name: "West Prime Hotel & Restaurant",
  shortName: "West Prime",
  restaurant: "West Prime Restaurant",
  tagline:
    "Where comfort meets contemporary elegance in the heart of Calbayog City.",
  address: location.address,
  // TODO: add real phone & email from West Prime Facebook page before presenting
  phone: "+63 XXX XXX XXXX",
  email: "info@westprimehotel.com",
  reservations: "reservations@westprimehotel.com",
  checkIn: "2:00 PM",
  checkOut: "12:00 NN",
  roomCount: 11,
  bookingRating: "8/10",
};
