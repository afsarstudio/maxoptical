"use client";

import * as React from "react";
import { 
  Phone, 
  MapPin, 
  Clock, 
  Glasses, 
  CheckCircle2, 
  Eye, 
  Star, 
  Search, 
  Calendar, 
  ChevronRight, 
  ChevronDown,
  MessageSquare, 
  Send, 
  ShieldCheck, 
  Award, 
  Truck, 
  Percent, 
  HelpCircle, 
  X, 
  Menu, 
  Heart,
  FileText,
  ShoppingBag,
  Plus,
  Minus,
  Trash2,
  ArrowLeftRight
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// --- Types & Data Interfaces ---

interface Product {
  id: string;
  name: string;
  category: "frames" | "sunglasses" | "lenses";
  price: string;
  rating: number;
  image: string;
  badge: string;
  material: string;
  colors: string[];
}

interface CartItem {
  id: string;
  name: string;
  price: string;
  image: string;
  quantity: number;
}

interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  date: string;
}

// --- Data ---

const INITIAL_PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "AeroTitanium Classic",
    category: "frames",
    price: "₹1,499",
    rating: 4.9,
    image: "/images/max-optical/client-folder/WhatsApp Image 2026-08-08 at 1.43.25 PM (1).jpeg",
    badge: "Bestseller",
    material: "Beta-Titanium",
    colors: ["Gold", "Silver", "Matte Black"]
  },
  {
    id: "p2",
    name: "Urban Acetate Rounded",
    category: "frames",
    price: "₹999",
    rating: 4.8,
    image: "/images/max-optical/client-folder/WhatsApp Image 2026-08-08 at 2.15.28 PM.jpeg",
    badge: "Trending",
    material: "Handcrafted Acetate",
    colors: ["Tortoise", "Crystal Clear", "Slate Gray"]
  },
  {
    id: "p3",
    name: "Khurram Nagar Classic Club",
    category: "frames",
    price: "₹1,299",
    rating: 4.9,
    image: "/images/max-optical/client-folder/WhatsApp Image 2026-08-08 at 2.15.27 PM.jpeg",
    badge: "New Arrival",
    material: "Acetate + Steel",
    colors: ["Black Gold", "Brown Havana"]
  },
  {
    id: "p4",
    name: "Polarized Horizon Aviator",
    category: "sunglasses",
    price: "₹1,899",
    rating: 4.9,
    image: "/images/max-optical/client-folder/WhatsApp Image 2026-08-08 at 1.43.24 PM.jpeg",
    badge: "Polarized",
    material: "Stainless Steel",
    colors: ["Gold/Green", "Silver/Blue", "Black/Smoke"]
  },
  {
    id: "p5",
    name: "Vintage Wayfarer Premium",
    category: "sunglasses",
    price: "₹1,599",
    rating: 4.8,
    image: "/images/max-optical/client-folder/WhatsApp Image 2026-08-08 at 1.43.26 PM.jpeg",
    badge: "UV400 Protection",
    material: "Sustainably Sourced Acetate",
    colors: ["Piano Black", "Warm Tortoise"]
  },
  {
    id: "p6",
    name: "MaxShield Blue-Cut Lenses",
    category: "lenses",
    price: "₹799",
    rating: 4.9,
    image: "/images/max-optical/client-folder/WhatsApp Image 2026-08-08 at 1.43.27 PM.jpeg",
    badge: "Eye Comfort",
    material: "Polycarbonate (Index 1.6)",
    colors: ["Anti-Glare Coating"]
  }
];

const INITIAL_TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Amit Trivedi",
    location: "Khurram Nagar, Lucknow",
    rating: 5,
    comment: "Excellent service! Visited for computerized eye testing. The optometrist was very patient, explained my prescription carefully, and helped me select perfect blue-cut glasses for my laptop work.",
    date: "July 24, 2026"
  },
  {
    id: "t2",
    name: "Sana Khan",
    location: "Indira Nagar, Lucknow",
    rating: 5,
    comment: "Max Optical has the best collection of lightweight frames in Lucknow at highly affordable prices. Got my sunglasses with power lenses fitted perfectly in just 24 hours. Recommended!",
    date: "August 2, 2026"
  },
  {
    id: "t3",
    name: "Rajesh Kapoor",
    location: "Aliganj, Lucknow",
    rating: 5,
    comment: "Very friendly behavior by the staff near Sector 8. They adjusted my old frames for free and delivered my son's prescription lenses on time. Honest pricing and genuine brand quality.",
    date: "August 6, 2026"
  }
];

// FAQ_ITEMS and FAQ sections

const FAQ_ITEMS = [
  {
    question: "Do you do home eye testing?",
    answer: "Yes! We provide professional computerized eye testing at your doorstep across Khurram Nagar and surrounding Lucknow localities. Simply select our Home Eye Testing service in the scheduling portal above or contact us on WhatsApp to coordinate a session at your convenience."
  },
  {
    question: "How long does it take to get my glasses?",
    answer: "For standard power lens prescriptions, we can deliver your fully custom-fitted glasses in less than 24 hours. For high-index, progressive, bifocal, or custom blue-cut lens configurations, it typically takes 2 to 3 business days for laboratory calibration and precision mounting."
  },
  {
    question: "Do you offer warranty on frames and lenses?",
    answer: "Absolutely! All our premium designer and titanium frames come with a 6-month to 1-year replacement warranty against manufacturing defects. In addition, certified optical lenses from Zeiss, Essilor, and Kodak include official brand warranty cards with matching authenticity certificates."
  },
  {
    question: "Can I put new lenses in my existing frames?",
    answer: "Yes, you can! If your current frame is structurally stable and in good condition, our state-of-the-art laboratory can precisely cut, bevel, and mount new prescription lenses into it. We also offer complimentary alignment adjustments and ultrasonic deep cleaning for your frame when you do so."
  },
  {
    question: "Do you provide computerized eye testing at the store? Is there a fee?",
    answer: "Computerized autorefractometer eye testing at our Khurram Nagar showroom is 100% free of charge! There is absolutely no obligation to purchase. Our trained optical team will check your focal depth, pupil distance, and current power alignment to ensure total comfort."
  },
  {
    question: "What types of specialty lens treatments do you offer?",
    answer: "We offer a full spectrum of high-tech treatments: anti-reflective coatings (ARC), blue-light blocking filters for digital displays, hydrophobic dust-repellent seals, ultra-thin high-index compositions for stronger corrections, and smart light-adaptive lenses (Transitions) that adjust density dynamically based on sunlight."
  }
];

export default function MaxOpticalHome() {
  // --- States ---
  const [activeTab, setActiveTab] = React.useState<"all" | "frames" | "sunglasses" | "lenses">("all");
  const [selectedCompareIds, setSelectedCompareIds] = React.useState<string[]>([]);
  const [isCompareModalOpen, setIsCompareModalOpen] = React.useState(false);
  const [products, setProducts] = React.useState<Product[]>(INITIAL_PRODUCTS);
  const [testimonials, setTestimonials] = React.useState<Testimonial[]>(INITIAL_TESTIMONIALS);
  const [selectedService, setSelectedService] = React.useState<string | null>(null);

  // Stylist Quiz State
  const [quizStep, setQuizStep] = React.useState<number>(0); // 0: Start, 1: Face Shape, 2: Lifestyle, 3: Lens Needs, 4: Result
  const [quizFaceShape, setQuizFaceShape] = React.useState<string>("");
  const [quizLifestyle, setQuizLifestyle] = React.useState<string>("");
  const [quizLens, setQuizLens] = React.useState<string>("");

  // Appointment Form State
  const [bookingForm, setBookingForm] = React.useState({
    name: "",
    phone: "",
    date: "",
    timeSlot: "11:00 AM - 12:00 PM",
    service: "Free Computerized Eye Testing"
  });
  const [bookingResult, setBookingResult] = React.useState<{ ticket: string; success: boolean } | null>(null);

  // Review Form State
  const [reviewForm, setReviewForm] = React.useState({
    name: "",
    location: "Lucknow",
    comment: "",
    rating: 5
  });
  const [reviewSuccess, setReviewSuccess] = React.useState<boolean>(false);
  const [copiedCoupon, setCopiedCoupon] = React.useState<string | null>(null);

  // Cart State
  const [cart, setCart] = React.useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = React.useState<boolean>(false);

  // Search and Filter State
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const [priceRange, setPriceRange] = React.useState<number>(2000);

  // Mobile navigation drawer
  const [isMobileNavOpen, setIsMobileNavOpen] = React.useState<boolean>(false);

  // FAQ state
  const [openFaqIndex, setOpenFaqIndex] = React.useState<number | null>(null);

  const handleToggleCompare = (id: string) => {
    setSelectedCompareIds(prev => {
      if (prev.includes(id)) {
        return prev.filter(x => x !== id);
      }
      if (prev.length >= 2) {
        return [prev[1], id];
      }
      return [...prev, id];
    });
  };

  // Lock body scroll when side drawers are open for premium mobile UX
  React.useEffect(() => {
    if (isCartOpen || isMobileNavOpen || isCompareModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isCartOpen, isMobileNavOpen, isCompareModalOpen]);

  // --- Functions ---
  
  // Handle appointment booking
  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingForm.name || !bookingForm.phone || !bookingForm.date) {
      alert("Please fill all required fields to secure your slot.");
      return;
    }
    const randomTicketNum = Math.floor(1000 + Math.random() * 9000);
    const ticketCode = `MAX-${new Date(bookingForm.date).getFullYear() % 100}-${randomTicketNum}`;
    
    setBookingResult({
      ticket: ticketCode,
      success: true
    });
  };

  // Reset booking
  const resetBooking = () => {
    setBookingForm({
      name: "",
      phone: "",
      date: "",
      timeSlot: "11:00 AM - 12:00 PM",
      service: "Free Computerized Eye Testing"
    });
    setBookingResult(null);
  };

  // Handle testimonial submission
  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewForm.name || !reviewForm.comment) {
      alert("Please provide both your name and feedback to publish.");
      return;
    }

    const newTestimonial: Testimonial = {
      id: `t-custom-${Date.now()}`,
      name: reviewForm.name,
      location: reviewForm.location.includes("Lucknow") ? reviewForm.location : `${reviewForm.location}, Lucknow`,
      rating: reviewForm.rating,
      comment: reviewForm.comment,
      date: "Today"
    };

    setTestimonials([newTestimonial, ...testimonials]);
    setReviewForm({
      name: "",
      location: "Lucknow",
      comment: "",
      rating: 5
    });
    setReviewSuccess(true);
    setTimeout(() => setReviewSuccess(false), 4000);
  };

  // Get Stylist Recommendation
  const getStylistRecommendation = () => {
    let frameRec = "Khurram Nagar Titanium Round";
    let frameReason = "Softens sharp angles and fits naturally on square or heart contours.";
    let lensRec = "MaxShield Blue-Cut Anti-Reflective Lenses";
    let lensReason = "Excellent protection against glare from digital devices during work.";

    if (quizFaceShape === "round") {
      frameRec = "Classic Rectangular Club";
      frameReason = "Adds structured definition, sharpness, and clean lines to balance rounder proportions.";
    } else if (quizFaceShape === "oval") {
      frameRec = "Urban Acetate Rounded or Elite Aviator";
      frameReason = "Symmetrical proportions permit experimenting with bold curves or dual-bar frames.";
    }

    if (quizLifestyle === "outdoors") {
      lensRec = "ProPolarized UV400 Sun Lenses";
      lensReason = "Reduces blinding road glare and blocks 100% harmful ultraviolet rays.";
    } else if (quizLifestyle === "fashion") {
      lensRec = "Light-Adaptive Photofit Adaptive Lenses";
      lensReason = "Transitions flawlessly from crystal-clear indoors to cool charcoal dark sunglasses in direct Lucknow sunlight.";
    }

    return { frameRec, frameReason, lensRec, lensReason };
  };

  // Cart Actions
  const addToCart = (product: Product) => {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setCart(cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
    } else {
      setCart([...cart, { id: product.id, name: product.name, price: product.price, image: product.image, quantity: 1 }]);
    }
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(cart.map(item => {
      if (item.id === id) {
        const newQty = item.quantity + delta;
        return newQty > 0 ? { ...item, quantity: newQty } : item;
      }
      return item;
    }));
  };

  const cartTotal = cart.reduce((total, item) => {
    const numericPrice = parseInt(item.price.replace(/[^\d]/g, ""));
    return total + (numericPrice * item.quantity);
  }, 0);

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const handleCopyCoupon = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCoupon(code);
    setTimeout(() => setCopiedCoupon(null), 2500);
  };

  const filteredProducts = products.filter(product => {
    const matchesTab = activeTab === "all" || product.category === activeTab;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.material.toLowerCase().includes(searchQuery.toLowerCase());
    const numericPrice = parseInt(product.price.replace(/[^\d]/g, ""));
    const matchesPrice = numericPrice <= priceRange;
    return matchesTab && matchesSearch && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-600 selection:text-white antialiased font-sans flex flex-col">
      
      {/* --- TOP BANNER (Announcement) --- */}
      <div id="announcement-banner" className="bg-gradient-to-r from-blue-900 via-indigo-950 to-blue-900 text-white text-[10px] md:text-xs py-3 px-4 text-center font-bold tracking-widest uppercase flex justify-between items-center w-full border-b border-white/10 shadow-md">
        <div className="flex items-center gap-2 mx-auto">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping shrink-0"></span>
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-400 absolute shrink-0"></span>
          <span className="ml-1 tracking-wide md:tracking-wider text-blue-50 text-[9px] xs:text-[10px] md:text-xs text-center leading-normal whitespace-normal select-none">
            ⚡ PREMIUM EXCLUSIVE: Get a FREE Computerized Eye Checkup (Worth ₹350) with any frame!
          </span>
        </div>
        <a href="tel:08299687381" className="hidden md:flex items-center gap-1.5 hover:text-blue-200 transition-colors shrink-0">
          <Phone className="w-3.5 h-3.5 text-emerald-400" />
          <span>Call: 082996 87381</span>
        </a>
      </div>

      {/* --- HEADER --- */}
      <header id="main-header" className="sticky top-0 z-[1000] bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm transition-all duration-300">
        
        {/* Mobile Header (max-width: 768px) */}
        <div className="md:hidden flex h-16 items-center justify-between px-4 w-full">
          {/* LEFT: Logo & Brand Name */}
          <a href="#" className="flex items-center gap-2 group shrink-0">
            <div className="w-9 h-9 rounded-xl bg-blue-950 flex items-center justify-center text-white shadow-md shadow-blue-950/20 group-hover:scale-105 transition-transform duration-300">
              <Glasses className="w-5 h-5 text-white" />
            </div>
            <span className="font-serif text-lg font-black tracking-tight text-blue-950 uppercase leading-none select-none">Max Optical</span>
          </a>

          {/* RIGHT: Call icon & Hamburger icon */}
          <div className="flex items-center gap-2 shrink-0">
            <a 
              href="tel:08299687381"
              className="p-2.5 rounded-full text-slate-700 bg-slate-50 hover:bg-slate-100 transition-colors border border-slate-200 flex items-center justify-center cursor-pointer min-w-[44px] min-h-[44px]"
              aria-label="Call Max Optical"
            >
              <Phone className="w-5 h-5 text-blue-900" />
            </a>
            
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-full text-slate-700 bg-slate-50 hover:bg-slate-100 transition-colors border border-slate-200 flex items-center justify-center cursor-pointer min-w-[44px] min-h-[44px]"
              aria-label="Open Shopping Cart"
            >
              <ShoppingBag className="w-5 h-5 text-blue-950" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white font-black text-[9px] w-5 h-5 rounded-full flex items-center justify-center shadow-md shadow-blue-600/30">
                  {cartCount}
                </span>
              )}
            </button>

            <button 
              onClick={() => setIsMobileNavOpen(true)}
              className="p-2.5 rounded-full text-slate-700 bg-slate-50 hover:bg-slate-100 transition-colors border border-slate-200 cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center"
              id="mobile-menu-toggle"
              aria-label="Toggle navigation menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Desktop & Tablet Header (min-width: 768px) */}
        <div className="hidden md:flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 items-center justify-between gap-4 w-full">
          {/* LEFT: Logo area */}
          <a href="#" className="flex items-center gap-3 group shrink-0">
            <div className="w-10 h-10 rounded-xl bg-blue-950 flex items-center justify-center text-white shadow-md shadow-blue-950/20 group-hover:scale-105 transition-transform duration-300">
              <Glasses className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl lg:text-2xl font-black tracking-tight text-blue-950 uppercase leading-none">Max Optical</span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-slate-400 font-bold mt-1.5 block">LUCKNOW / SECTOR 8</span>
            </div>
          </a>

          {/* CENTER: Navigation Links (hidden on tablet 768px-1024px, shown on desktop lg/xl) */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-7 text-xs uppercase tracking-widest font-extrabold text-slate-600 shrink-0">
            <a href="#about" className="hover:text-blue-900 transition-colors py-2 px-1 hover:bg-slate-50 rounded-lg">ABOUT US</a>
            <a href="#services" className="hover:text-blue-900 transition-colors py-2 px-1 hover:bg-slate-50 rounded-lg">SERVICES</a>
            <a href="#tryon" className="hover:text-blue-900 transition-colors py-2 px-1 hover:bg-slate-50 rounded-lg">TRY-ON</a>
            <a href="#products" className="hover:text-blue-900 transition-colors py-2 px-1 hover:bg-slate-50 rounded-lg">CATALOG</a>
            <a href="#testimonials" className="hover:text-blue-900 transition-colors py-2 px-1 hover:bg-slate-50 rounded-lg">REVIEWS</a>
            <a href="#contact" className="hover:text-blue-900 transition-colors py-2 px-1 hover:bg-slate-50 rounded-lg">CONTACT</a>
          </nav>

          {/* RIGHT: Action Buttons (Call & Book Eye Test & Hamburger for Tablet) */}
          <div className="flex items-center gap-2.5 shrink-0">
            
            {/* Call button - Visible on Desktop, hidden on Tablet below lg */}
            <a 
              href="tel:08299687381"
              className="hidden lg:flex items-center gap-2 px-4 h-11 rounded-full border border-slate-200 text-xs font-bold uppercase tracking-widest text-blue-950 bg-slate-50 hover:bg-slate-100 hover:border-blue-900/40 transition-all shadow-sm select-none"
              id="header-call-btn"
            >
              <Phone className="w-3.5 h-3.5 text-blue-900 shrink-0" />
              <span>082996 87381</span>
            </a>

            {/* Primary "BOOK EYE TEST" Button - Visible on both Tablet and Desktop */}
            <a 
              href="#book"
              className="px-5 h-11 rounded-full bg-blue-900 text-white text-xs font-bold uppercase tracking-widest hover:bg-blue-950 hover:scale-[1.02] active:scale-95 transition-all shadow-md shadow-blue-900/10 flex items-center justify-center select-none"
              id="header-book-btn"
            >
              BOOK EYE TEST
            </a>

            {/* Cart Button */}
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 h-11 w-11 rounded-full text-slate-700 bg-slate-50 hover:bg-slate-100 transition-colors border border-slate-200 flex items-center justify-center cursor-pointer"
              aria-label="Open Shopping Cart"
            >
              <ShoppingBag className="w-5 h-5 text-blue-950" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white font-black text-[9px] w-5 h-5 rounded-full flex items-center justify-center shadow-md shadow-blue-600/30">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Tablet Hamburger (Visible on lg:hidden, hidden on lg/xl desktop) */}
            <button 
              onClick={() => setIsMobileNavOpen(true)}
              className="lg:hidden p-2.5 h-11 w-11 rounded-full text-slate-700 bg-slate-50 hover:bg-slate-100 transition-colors border border-slate-200 cursor-pointer flex items-center justify-center"
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileNavOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileNavOpen(false)}
              className="fixed inset-0 z-[1100] bg-black/40 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="fixed right-0 top-0 bottom-0 z-[1200] w-[85vw] sm:w-80 max-w-[340px] bg-white p-6 shadow-2xl border-l border-slate-100 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-lg bg-blue-950 flex items-center justify-center text-white shadow-md">
                      <Glasses className="w-5 h-5" />
                    </div>
                    <span className="font-serif font-black text-lg text-blue-950 uppercase tracking-tight">Max Optical</span>
                  </div>
                  <button 
                    onClick={() => setIsMobileNavOpen(false)}
                    className="p-2 rounded-full text-slate-400 hover:text-slate-600 border border-slate-100 hover:bg-slate-50 min-w-[40px] min-h-[40px] flex items-center justify-center cursor-pointer"
                    aria-label="Close navigation menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <nav className="flex flex-col gap-2 mt-6 text-xs uppercase tracking-widest font-extrabold text-slate-600">
                  <a 
                    href="#about" 
                    onClick={() => setIsMobileNavOpen(false)} 
                    className="hover:text-blue-900 hover:bg-slate-50 p-3.5 rounded-xl transition-colors min-h-[44px] flex items-center"
                  >
                    ABOUT US
                  </a>
                  <a 
                    href="#services" 
                    onClick={() => setIsMobileNavOpen(false)} 
                    className="hover:text-blue-900 hover:bg-slate-50 p-3.5 rounded-xl transition-colors min-h-[44px] flex items-center"
                  >
                    SERVICES
                  </a>
                  <a 
                    href="#tryon" 
                    onClick={() => setIsMobileNavOpen(false)} 
                    className="text-blue-900 bg-blue-50/50 hover:bg-blue-50 p-3.5 flex items-center gap-2 rounded-xl border border-blue-100/50 transition-colors min-h-[44px]"
                  >
                    <Eye className="w-4.5 h-4.5 shrink-0 text-blue-900" /> 
                    <span>TRY-ON</span>
                  </a>
                  <a 
                    href="#products" 
                    onClick={() => setIsMobileNavOpen(false)} 
                    className="hover:text-blue-900 hover:bg-slate-50 p-3.5 rounded-xl transition-colors min-h-[44px] flex items-center"
                  >
                    CATALOG
                  </a>
                  <a 
                    href="#testimonials" 
                    onClick={() => setIsMobileNavOpen(false)} 
                    className="hover:text-blue-900 hover:bg-slate-50 p-3.5 rounded-xl transition-colors min-h-[44px] flex items-center"
                  >
                    REVIEWS
                  </a>
                  <a 
                    href="#contact" 
                    onClick={() => setIsMobileNavOpen(false)} 
                    className="hover:text-blue-900 hover:bg-slate-50 p-3.5 rounded-xl transition-colors min-h-[44px] flex items-center"
                  >
                    CONTACT
                  </a>
                </nav>
              </div>

              <div className="flex flex-col gap-3 mt-auto pt-6 border-t border-slate-100">
                <a 
                  href="#book"
                  onClick={() => setIsMobileNavOpen(false)}
                  className="w-full text-center py-4 rounded-full bg-blue-900 hover:bg-blue-950 text-white text-xs font-black uppercase tracking-widest transition-colors shadow-md shadow-blue-900/10 min-h-[44px] flex items-center justify-center"
                >
                  BOOK EYE TEST
                </a>
                <a 
                  href="tel:08299687381"
                  className="flex items-center justify-center gap-2 px-4 py-4 rounded-full border border-blue-900/20 text-xs font-black uppercase tracking-widest text-blue-950 bg-slate-50 hover:bg-slate-100 transition-all min-h-[44px]"
                >
                  <Phone className="w-4 h-4 text-blue-900 shrink-0" />
                  CALL 082996 87381
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* --- CART DRAWER --- */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 z-45 bg-black/40 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 z-50 w-full sm:max-w-md bg-white p-5 sm:p-6 shadow-2xl border-l border-slate-100 flex flex-col justify-between"
            >
              <div className="flex flex-col h-full overflow-hidden">
                {/* Cart Header */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-5 mb-5 shrink-0">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shadow-inner">
                      <ShoppingBag className="w-4.5 h-4.5" />
                    </div>
                    <span className="font-serif font-black text-lg text-blue-950 uppercase tracking-tight">Your Cart</span>
                    <span className="bg-blue-100 text-blue-800 text-[10px] font-bold px-2 py-0.5 rounded-full">{cartCount} {cartCount === 1 ? 'item' : 'items'}</span>
                  </div>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="p-1.5 rounded-full text-slate-400 hover:text-slate-600 border border-slate-100 hover:bg-slate-50 cursor-pointer"
                  >
                    <X className="w-4.5 h-4.5" />
                  </button>
                </div>

                {/* Cart Items List */}
                <div className="flex-grow overflow-y-auto pr-1 space-y-4">
                  {cart.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-full text-center py-12">
                      <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 mb-4 border border-slate-100">
                        <ShoppingBag className="w-8 h-8" />
                      </div>
                      <h4 className="font-serif font-bold text-slate-800 text-base mb-1.5">Your cart is empty</h4>
                      <p className="text-xs text-slate-400 max-w-[240px] leading-relaxed mb-6">
                        Looks like you haven&apos;t added any premium eyewear to your cart yet.
                      </p>
                      <button
                        onClick={() => {
                          setIsCartOpen(false);
                          document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="px-6 py-2.5 bg-blue-900 hover:bg-blue-950 text-white rounded-full text-[10px] font-bold uppercase tracking-widest transition-all cursor-pointer"
                      >
                        Start Shopping
                      </button>
                    </div>
                  ) : (
                    cart.map(item => (
                      <div key={item.id} className="flex gap-4 p-3 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-slate-200 transition-all duration-200 group">
                        <div className="w-16 h-16 rounded-lg bg-slate-100 overflow-hidden shrink-0 border border-slate-150">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                        </div>
                        <div className="flex-grow flex flex-col justify-between">
                          <div>
                            <div className="flex justify-between items-start gap-1">
                              <h5 className="font-serif font-bold text-xs text-blue-950 leading-tight group-hover:text-blue-600 transition-colors line-clamp-1">
                                {item.name}
                              </h5>
                              <button 
                                onClick={() => removeFromCart(item.id)}
                                className="text-slate-400 hover:text-rose-600 p-0.5 transition-colors cursor-pointer"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                            <span className="text-xs font-serif font-black text-blue-900 block mt-1">{item.price}</span>
                          </div>
                          
                          <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center gap-2 border border-slate-200 bg-white rounded-md px-1.5 py-0.5">
                              <button 
                                onClick={() => updateQuantity(item.id, -1)}
                                className="text-slate-500 hover:text-blue-600 p-0.5 cursor-pointer"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="text-xs font-bold text-slate-800 px-1">{item.quantity}</span>
                              <button 
                                onClick={() => updateQuantity(item.id, 1)}
                                className="text-slate-500 hover:text-blue-600 p-0.5 cursor-pointer"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                {/* Cart Footer */}
                {cart.length > 0 && (
                  <div className="border-t border-slate-100 pt-5 mt-5 shrink-0">
                    <div className="space-y-1.5 mb-5 text-xs">
                      <div className="flex justify-between text-slate-500">
                        <span>Subtotal</span>
                        <span>₹{cartTotal.toLocaleString("en-IN")}</span>
                      </div>
                      <div className="flex justify-between text-slate-500">
                        <span>GST Fitting & Labor</span>
                        <span className="text-emerald-600 font-bold uppercase tracking-wider text-[10px]">FREE</span>
                      </div>
                      <div className="flex justify-between text-slate-500 pb-1.5 border-b border-slate-50">
                        <span>Delivery</span>
                        <span className="text-emerald-600 font-bold uppercase tracking-wider text-[10px]">FREE</span>
                      </div>
                      <div className="flex justify-between text-blue-950 font-black text-sm pt-1.5">
                        <span className="font-serif">Estimated Total</span>
                        <span className="font-serif text-base text-blue-900">₹{cartTotal.toLocaleString("en-IN")}</span>
                      </div>
                    </div>

                    <a 
                      href={`https://wa.me/918299687381?text=${encodeURIComponent(
                        `Hi Max Optical, I would like to order the following products from your website:\n\n` +
                        cart.map(item => `• ${item.name} x ${item.quantity} (${item.price})`).join("\n") +
                        `\n\nEstimated Total: ₹${cartTotal.toLocaleString("en-IN")}\n\nPlease confirm availability and payment options!`
                      )}`}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full text-center block py-4 bg-blue-900 hover:bg-blue-950 text-white rounded-full text-xs font-bold uppercase tracking-widest transition-all shadow-md shadow-blue-900/10 hover:shadow-lg hover:shadow-blue-900/20 cursor-pointer text-center flex items-center justify-center"
                    >
                      Enquire Order on WhatsApp
                    </a>
                    
                    <p className="text-[10px] text-slate-400 text-center mt-3 leading-normal">
                      We accept Cash on Delivery (COD) & UPI Transfers across Lucknow.
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* --- FLOATING COMPARE BAR --- */}
      <AnimatePresence>
        {selectedCompareIds.length > 0 && (
          <motion.div
            initial={{ y: 100, opacity: 0, x: "-50%" }}
            animate={{ y: 0, opacity: 1, x: "-50%" }}
            exit={{ y: 100, opacity: 0, x: "-50%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[1050] bg-white border border-slate-200 shadow-xl rounded-2xl px-6 py-4 flex items-center gap-6 max-w-[95%] w-max select-none"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                <ArrowLeftRight className="w-4 h-4" />
              </div>
              <div className="hidden sm:block">
                <span className="block text-[10px] font-black uppercase tracking-widest text-slate-400">Comparison Bar</span>
                <span className="block text-xs font-serif font-black text-blue-950">
                  {selectedCompareIds.length === 1 ? "Select 1 more product" : "2 items ready for compare"}
                </span>
              </div>
            </div>

            {/* Selected Thumbnails */}
            <div className="flex items-center gap-2">
              {selectedCompareIds.map(id => {
                const prod = products.find(p => p.id === id);
                if (!prod) return null;
                return (
                  <div key={id} className="relative group w-11 h-11 rounded-lg border border-slate-200 overflow-hidden bg-slate-50">
                    <img src={prod.image} alt={prod.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    <button
                      onClick={() => handleToggleCompare(id)}
                      className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white cursor-pointer animate-fade"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                );
              })}
              {selectedCompareIds.length < 2 && (
                <div className="w-11 h-11 rounded-lg border-2 border-dashed border-slate-200 flex items-center justify-center text-slate-300 text-xs font-bold bg-slate-50/50">
                  +
                </div>
              )}
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-2">
              <button
                disabled={selectedCompareIds.length !== 2}
                onClick={() => setIsCompareModalOpen(true)}
                className={`px-5 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all shadow-sm flex items-center gap-1.5 ${
                  selectedCompareIds.length === 2
                    ? "bg-blue-900 hover:bg-blue-950 text-white hover:shadow shadow-blue-900/10 cursor-pointer"
                    : "bg-slate-100 text-slate-400 cursor-not-allowed"
                }`}
              >
                <span>Compare Now</span>
                <ArrowLeftRight className="w-3 h-3" />
              </button>

              <button
                onClick={() => setSelectedCompareIds([])}
                className="p-2 rounded-full border border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-slate-700 transition-all cursor-pointer"
                title="Clear selections"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- SIDE-BY-SIDE COMPARE MODAL --- */}
      <AnimatePresence>
        {isCompareModalOpen && (
          <>
            {/* Modal Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCompareModalOpen(false)}
              className="fixed inset-0 z-[1100] bg-black/60 backdrop-blur-sm"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed inset-4 sm:inset-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:w-full sm:max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 z-[1150] overflow-hidden flex flex-col max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50 shrink-0">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                    <ArrowLeftRight className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-serif font-black text-lg text-blue-950 uppercase tracking-tight">Compare Frames</h3>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Side-By-Side Spec Sheet</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsCompareModalOpen(false)}
                  className="p-1.5 rounded-full text-slate-400 hover:text-slate-600 border border-slate-150 hover:bg-white cursor-pointer transition-colors"
                >
                  <X className="w-4.5 h-4.5" />
                </button>
              </div>

              {/* Modal Content - Scrollable Table Area */}
              <div className="p-6 overflow-y-auto space-y-6">
                <div className="grid grid-cols-2 gap-4 md:gap-8 divide-x divide-slate-100">
                  {selectedCompareIds.map((id, index) => {
                    const prod = products.find(p => p.id === id);
                    if (!prod) return null;

                    return (
                      <div key={id} className={`space-y-6 flex flex-col justify-between ${index === 1 ? "pl-4 md:pl-8" : ""}`}>
                        
                        {/* Visual & Core info */}
                        <div className="space-y-4">
                          {/* Image */}
                          <div className="aspect-16/10 rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 relative group">
                            <img src={prod.image} alt={prod.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                            <div className="absolute top-3 left-3 bg-blue-950/90 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[8px] font-bold text-white uppercase tracking-wider">
                              {prod.badge}
                            </div>
                            <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md text-slate-950 px-2.5 py-0.5 rounded-full text-[9px] font-bold flex items-center gap-0.5 border border-slate-100">
                              <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                              {prod.rating}
                            </div>
                          </div>

                          {/* Name */}
                          <div>
                            <span className="text-[9px] font-extrabold uppercase tracking-widest text-blue-600">Model Option {index + 1}</span>
                            <h4 className="font-serif font-black text-base text-blue-950 leading-tight mt-1">{prod.name}</h4>
                          </div>
                        </div>

                        {/* Side-by-side Spec block */}
                        <div className="space-y-4 bg-slate-50/50 rounded-2xl p-4 border border-slate-100/60 text-xs">
                          {/* Price */}
                          <div className="flex flex-col gap-0.5">
                            <span className="text-[9px] font-extrabold uppercase tracking-wider text-slate-400">Price</span>
                            <span className="font-serif font-black text-base text-blue-600">{prod.price}</span>
                          </div>

                          {/* Category */}
                          <div className="flex flex-col gap-1">
                            <span className="text-[9px] font-extrabold uppercase tracking-wider text-slate-400">Category</span>
                            <div>
                              <span className="inline-block bg-blue-50 text-blue-700 border border-blue-100 rounded-full px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider">
                                {prod.category}
                              </span>
                            </div>
                          </div>

                          {/* Frame Material */}
                          <div className="flex flex-col gap-1">
                            <span className="text-[9px] font-extrabold uppercase tracking-wider text-slate-400">Material Spec</span>
                            <span className="font-semibold text-slate-700">{prod.material}</span>
                          </div>

                          {/* Available Colors */}
                          {prod.category !== "lenses" && (
                            <div className="flex flex-col gap-1.5">
                              <span className="text-[9px] font-extrabold uppercase tracking-wider text-slate-400">Available Colors</span>
                              <div className="flex flex-wrap gap-1">
                                {prod.colors.map((c, i) => (
                                  <span key={i} className="bg-white border border-slate-150 text-slate-600 px-2 py-0.5 rounded-full text-[9px] font-medium">{c}</span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Action buttons */}
                        <div className="pt-2 space-y-2">
                          <button
                            onClick={() => {
                              addToCart(prod);
                              setIsCompareModalOpen(false);
                            }}
                            className="w-full py-3 rounded-full bg-blue-900 hover:bg-blue-950 text-white text-[10px] font-bold uppercase tracking-widest transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
                          >
                            <ShoppingBag className="w-3.5 h-3.5" />
                            <span>Add to Cart</span>
                          </button>

                          <a
                            href={`https://wa.me/918299687381?text=Hi%20Max%20Optical,%20I%20am%20comparing%20frames%20and%20want%20to%20enquire%20about%20${encodeURIComponent(prod.name)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full block py-2.5 text-center rounded-full border border-slate-200 text-slate-700 bg-white hover:bg-slate-50 text-[10px] font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1"
                          >
                            <MessageSquare className="w-3.5 h-3.5" />
                            <span>Enquire on WhatsApp</span>
                          </a>
                        </div>

                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Modal Footer banner */}
              <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 text-center text-[10px] text-slate-400 shrink-0">
                Both frames can be customized with premium Blue-Cut, Anti-Glare, or Progressive lenses at our Lucknow store.
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <main className="grow">

        {/* --- HERO SECTION --- */}
        <section id="hero" className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28 lg:pt-32 lg:pb-36 border-b border-slate-200 bg-slate-950">
          
          {/* Immersive background image with dark gradient overlay & glass backdrop filter */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/max-optical/client-folder/WhatsApp Image 2026-08-08 at 1.43.29 PM.jpeg"
              alt="Premium Eyewear Boutique"
              className="w-full h-full object-cover opacity-35"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/95 to-slate-950/60" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/10 to-slate-950" />
          </div>

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="flex flex-col items-center justify-center">
              
              {/* Center Column: Vision Copywriting */}
              <div className="flex flex-col justify-center items-center text-center">
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex bg-blue-500/10 border border-blue-400/20 text-blue-300 text-[10px] px-3.5 py-1.5 font-bold tracking-widest uppercase self-center mb-5 rounded-full backdrop-blur-md"
                >
                  📍 Best Optical Clinic in Lucknow
                </motion.div>
 
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="font-serif font-extrabold leading-[1.1] sm:leading-[1.05] tracking-tight text-white mb-6 text-balance max-w-3xl mx-auto"
                  style={{ fontSize: "clamp(2.2rem, 7.2vw, 4.5rem)" }}
                >
                  Find Your Perfect Frame 👓
                </motion.h1>
 
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed font-sans"
                >
                  Premium Eyewear & Eye Testing in Lucknow. Get certified computerized vision testing, custom lens fitting, and top-tier frame styles designed for ultimate comfort.
                </motion.p>
 
                {/* Call-to-actions */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                  <a 
                    href="#products"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold uppercase tracking-widest text-xs rounded-full hover:bg-blue-500 hover:scale-[1.03] active:scale-[0.98] transition-all shadow-lg shadow-blue-600/20 hover:shadow-xl hover:shadow-blue-600/30"
                    id="hero-shop-now-btn"
                  >
                    Shop Now
                  </a>
                  <a 
                    href="#book"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 font-bold uppercase tracking-widest text-xs rounded-full hover:bg-white/20 hover:scale-[1.03] active:scale-[0.98] transition-all"
                    id="hero-book-test-btn"
                  >
                    Book Eye Test
                  </a>
                </motion.div>
 
                {/* Highlight Offer Promo Badge */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mt-6 flex items-center justify-center gap-2 text-xs text-emerald-400 font-semibold"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Free Computerized Diagnostics Worth ₹350! (With Frame purchase)</span>
                </motion.div>
 
                {/* Local Credibility Badge row */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-12 pt-8 border-t border-slate-800/80 flex gap-8 justify-center text-center"
                >
                  <div>
                    <span className="block text-3xl font-black font-serif text-white">4.9★</span>
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Google Rating</span>
                  </div>
                  <div>
                    <span className="block text-3xl font-black font-serif text-white">15+</span>
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Years Exp</span>
                  </div>
                  <div>
                    <span className="block text-3xl font-black font-serif text-white">10k+</span>
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Lenses Fitted</span>
                  </div>
                </motion.div>
              </div>
 
            </div>
          </div>
        </section>

        {/* --- STATS ACCENTS (DENSE METRIC BANNER) --- */}
        <section className="bg-slate-50/50 py-10 md:py-12 border-b border-slate-100 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-center">
              <div className="p-5 sm:p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
                <span className="text-3xl lg:text-4xl font-serif font-black text-blue-900 block">4.9★</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mt-2">Google Rating</span>
              </div>
              <div className="p-5 sm:p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
                <span className="text-3xl lg:text-4xl font-serif font-black text-blue-900 block">15+</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mt-2">Years of Trust</span>
              </div>
              <div className="p-5 sm:p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
                <span className="text-3xl lg:text-4xl font-serif font-black text-blue-900 block">10k+</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mt-2">Happy Customers</span>
              </div>
              <div className="p-5 sm:p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
                <span className="text-3xl lg:text-4xl font-serif font-black text-blue-900 block">500+</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mt-2">Designer Frames</span>
              </div>
            </div>
          </div>
        </section>

        {/* --- CATEGORY SECTION --- */}
        <section id="categories" className="py-16 md:py-20 lg:py-24 bg-white border-b border-slate-100/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-blue-600 block mb-3">Explore Collections</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-black text-blue-950 leading-tight mb-4">
                Shop By Category
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 max-w-lg mx-auto leading-relaxed">
                Discover our handpicked selections of durable materials, premium glare-blocking lenses, and everyday visual comfort options.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {/* Eyeglasses */}
              <div 
                onClick={() => {
                  setActiveTab("frames");
                  document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group relative cursor-pointer overflow-hidden rounded-2xl border border-slate-100 bg-slate-50/50 p-8 shadow-sm hover:shadow-xl hover:border-blue-500/20 transition-all duration-300 flex flex-col justify-between min-h-[220px]"
                id="cat-eyeglasses"
              >
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl group-hover:scale-125 transition-transform" />
                
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 shadow-sm shadow-blue-950/5 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <Glasses className="w-7 h-7" />
                  </div>
                  <h3 className="font-serif font-black text-xl text-blue-950 mb-2">Eyeglasses</h3>
                  <p className="text-xs text-slate-500 leading-relaxed max-w-[240px]">
                    Single-vision, progressive, and computer glasses designed for style and precision.
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-600 mt-6">
                  <span>Browse Frames</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>

              {/* Sunglasses */}
              <div 
                onClick={() => {
                  setActiveTab("sunglasses");
                  document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group relative cursor-pointer overflow-hidden rounded-2xl border border-slate-100 bg-slate-50/50 p-8 shadow-sm hover:shadow-xl hover:border-blue-500/20 transition-all duration-300 flex flex-col justify-between min-h-[220px]"
                id="cat-sunglasses"
              >
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl group-hover:scale-125 transition-transform" />

                <div>
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 shadow-sm shadow-emerald-950/5 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                    <ShieldCheck className="w-7 h-7" />
                  </div>
                  <h3 className="font-serif font-black text-xl text-blue-950 mb-2">Sunglasses</h3>
                  <p className="text-xs text-slate-500 leading-relaxed max-w-[240px]">
                    100% UV protection and polarized lens choices for perfect contrast in the Lucknow sun.
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-600 mt-6">
                  <span>Browse Sunglasses</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>

              {/* Contact Lenses */}
              <div 
                onClick={() => {
                  setActiveTab("lenses");
                  document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group relative cursor-pointer overflow-hidden rounded-2xl border border-slate-100 bg-slate-50/50 p-8 shadow-sm hover:shadow-xl hover:border-blue-500/20 transition-all duration-300 flex flex-col justify-between min-h-[220px]"
                id="cat-lenses"
              >
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl group-hover:scale-125 transition-transform" />

                <div>
                  <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6 shadow-sm shadow-indigo-950/5 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="font-serif font-black text-xl text-blue-950 mb-2">Contact Lenses</h3>
                  <p className="text-xs text-slate-500 leading-relaxed max-w-[240px]">
                    Premium daily, weekly, and cosmetic contact lenses with high moisture retention.
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-indigo-600 mt-6">
                  <span>Browse Lenses</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- TRUSTED BY BRAND PARTNERS SECTION --- */}
        <section className="py-12 md:py-16 lg:py-20 bg-white border-b border-slate-100/50 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-12">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-blue-600 block mb-3">Authorized Retailer & Partner</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-black text-blue-950 leading-tight mb-4">
                Premium Brands Carried At Our Store
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 max-w-lg mx-auto leading-relaxed">
                We carry only 100% genuine and certified frames, lenses, and contact lenses from the world&apos;s leading optical manufacturers.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5 lg:gap-6 items-stretch">
              {/* Ray-Ban */}
              <div className="flex flex-col items-center justify-center p-6 bg-slate-50/50 hover:bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 group">
                <span className="font-serif italic font-black text-2xl tracking-tight text-slate-800 group-hover:text-slate-950 transition-colors">Ray•Ban</span>
                <span className="text-[9px] font-bold text-slate-400 group-hover:text-blue-600 uppercase tracking-widest mt-2 transition-colors">Classic Frames</span>
              </div>

              {/* Oakley */}
              <div className="flex flex-col items-center justify-center p-6 bg-slate-50/50 hover:bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 group">
                <span className="font-sans font-black text-lg tracking-[0.15em] text-slate-700 uppercase italic group-hover:text-slate-900 transition-colors">OAKLEY</span>
                <span className="text-[9px] font-bold text-slate-400 group-hover:text-blue-600 uppercase tracking-widest mt-2 transition-colors">Sport Active</span>
              </div>

              {/* Zeiss */}
              <div className="flex flex-col items-center justify-center p-6 bg-slate-50/50 hover:bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 group">
                <span className="font-sans font-black text-xl tracking-wide text-blue-900 group-hover:text-blue-950 transition-colors">ZEISS</span>
                <span className="text-[9px] font-bold text-slate-400 group-hover:text-blue-600 uppercase tracking-widest mt-2 transition-colors">German Optics</span>
              </div>

              {/* Essilor */}
              <div className="flex flex-col items-center justify-center p-6 bg-slate-50/50 hover:bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 group">
                <span className="font-sans font-semibold text-xl tracking-tight text-slate-800 group-hover:text-slate-950 transition-colors">essilor</span>
                <span className="text-[9px] font-bold text-slate-400 group-hover:text-blue-600 uppercase tracking-widest mt-2 transition-colors">Advanced Lenses</span>
              </div>

              {/* Vogue */}
              <div className="flex flex-col items-center justify-center p-6 bg-slate-50/50 hover:bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 group">
                <span className="font-serif font-black text-xl tracking-widest text-slate-800 uppercase italic group-hover:text-slate-950 transition-colors">VOGUE</span>
                <span className="text-[9px] font-bold text-slate-400 group-hover:text-blue-600 uppercase tracking-widest mt-2 transition-colors">Fashion Chic</span>
              </div>

              {/* Acuvue */}
              <div className="flex flex-col items-center justify-center p-6 bg-slate-50/50 hover:bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 group">
                <span className="font-sans font-bold text-lg text-blue-950 tracking-wider group-hover:text-blue-900 transition-colors">ACUVUE</span>
                <span className="text-[9px] font-bold text-slate-400 group-hover:text-blue-600 uppercase tracking-widest mt-2 transition-colors">Contact Lenses</span>
              </div>
            </div>
          </div>
        </section>

        {/* --- ABOUT SECTION --- */}
        <section id="about" className="py-16 md:py-20 lg:py-24 bg-white border-b border-slate-100/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center">
              
              {/* Image Collage / Decorative Left Side */}
              <div className="lg:col-span-5 relative">
                <div className="relative aspect-3/4 rounded-2xl overflow-hidden border border-slate-100 shadow-xl">
                  <img 
                    src="/images/max-optical/client-folder/WhatsApp Image 2026-08-08 at 7.14.32 PM.jpeg" 
                    alt="Premium eyeglasses design" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="text-[9px] uppercase font-bold tracking-widest text-blue-300 block mb-1">Max Optical Showroom</span>
                    <span className="font-serif font-bold text-lg block">Sector 8, Khurram Nagar, Lucknow</span>
                  </div>
                </div>
                
                {/* Overlap badge */}
                <div className="absolute bottom-4 right-4 sm:-bottom-6 sm:-right-6 bg-white border border-slate-100 rounded-2xl p-5 shadow-2xl max-w-xs hidden sm:block">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-900 shrink-0">
                      <ShieldCheck className="w-5.5 h-5.5" />
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 block text-sm">Certified Lenses</span>
                      <span className="text-xs text-slate-500 block mt-1 leading-relaxed">Authorized retailer for premium lens manufacturers including anti-glare & progressives.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Right Side */}
              <div className="lg:col-span-7">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-blue-600 block mb-3">About Our Eye Clinic</span>
                <h2 className="font-serif text-3xl sm:text-4xl font-black text-blue-950 leading-tight mb-6">
                  Providing Premium Eye Care to Lucknow for Over 15 Years
                </h2>
                
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Located in the vibrant neighborhood of <strong>Khurram Nagar</strong>, Lucknow, <strong>Max Optical</strong> is dedicated to delivering highly personalized optical services. Our passion is helping you find eyewear that is comfortable, provides absolute clarity, and highlights your unique style.
                </p>
                
                <p className="text-slate-600 mb-8 leading-relaxed">
                  We blend precise, computerized eye examinations with a premium fashion showroom. Our inventory boasts hundreds of durable frames, sleek polarized sunglasses, and specialized progressives. We focus heavily on optical accuracy, fitting precision, and budget friendliness.
                </p>

                {/* Pillars / Key value blocks */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex items-start gap-3.5">
                    <div className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 block text-sm">Computerized Testing</span>
                      <span className="text-xs text-slate-500 block mt-1 leading-relaxed">State-of-the-art autorefractors for lens accuracy.</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3.5">
                    <div className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 block text-sm">Genuine Global Brands</span>
                      <span className="text-xs text-slate-500 block mt-1 leading-relaxed">100% genuine frames, coatings, and prescription models.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 block text-sm">Instant Power Fitting</span>
                      <span className="text-xs text-slate-500 block mt-1 leading-relaxed">Standard single-vision lenses completed within hours.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 block text-sm">Comfort Guarantee</span>
                      <span className="text-xs text-slate-500 block mt-1 leading-relaxed">Free 30-day adjustments and nose-pad fitting support.</span>
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <a 
                    href="#book" 
                    className="inline-flex items-center gap-1.5 text-blue-600 font-bold uppercase tracking-widest text-xs hover:text-blue-700 border-b-2 border-blue-100 hover:border-blue-600 pb-1.5 transition-all"
                  >
                    <span>Schedule an in-store eye checkup now</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* --- SERVICES SECTION --- */}
        <section id="services" className="py-16 md:py-20 lg:py-24 bg-slate-50/50 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Centered Heading */}
            <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-blue-600 block mb-3">Professional Services</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-black text-blue-950 leading-tight mb-4">
                Full-Service Optical Solutions
              </h2>
              <p className="text-sm text-slate-500 max-w-md mx-auto">
                From specialized diagnostic checks to computerized fashion lens fitting, we focus on optimal corrective accuracy. Click any card below to see detailed clinical benefits.
              </p>
            </div>

            {/* Grid of Services */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6">
              
              {/* Service 1 */}
              <div 
                onClick={() => setSelectedService("checkup")}
                className="bg-white rounded-2xl border border-slate-100 p-7 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1 hover:border-blue-500/20 transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 shadow-sm shadow-blue-900/5">
                    <Eye className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif font-extrabold text-lg text-blue-950 mb-2.5">Computerized Eye Checkup</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Advanced clinical examination to measure spherical power, cylindrical astigmatism, and eye relaxation.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-50 flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-blue-600">
                  <span>Learn benefits</span>
                  <ChevronRight className="w-4 h-4 text-blue-600 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </div>

              {/* Service 2 */}
              <div 
                onClick={() => setSelectedService("prescription")}
                className="bg-white rounded-2xl border border-slate-100 p-7 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1 hover:border-blue-500/20 transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 shadow-sm shadow-blue-900/5">
                    <Glasses className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif font-extrabold text-lg text-blue-950 mb-2.5">Prescription Glasses</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Single vision, bifocal, and progressive lenses formulated with modern anti-glare, blue-cut coatings.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-50 flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-blue-600">
                  <span>Learn benefits</span>
                  <ChevronRight className="w-4 h-4 text-blue-600 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </div>

              {/* Service 3 */}
              <div 
                onClick={() => setSelectedService("sunglasses")}
                className="bg-white rounded-2xl border border-slate-100 p-7 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1 hover:border-blue-500/20 transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 shadow-sm shadow-blue-900/5">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif font-extrabold text-lg text-blue-950 mb-2.5">Designer Sunglasses</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    100% UVA & UVB block lenses. Protect your eyes in style with beautiful polarized frame models.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-50 flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-blue-600">
                  <span>Learn benefits</span>
                  <ChevronRight className="w-4 h-4 text-blue-600 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </div>

              {/* Service 4 */}
              <div 
                onClick={() => setSelectedService("lenses")}
                className="bg-white rounded-2xl border border-slate-100 p-7 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1 hover:border-blue-500/20 transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 shadow-sm shadow-blue-900/5">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif font-extrabold text-lg text-blue-950 mb-2.5">Contact Lenses</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Hydrating daily, weekly, and monthly lenses from brand partners like Bausch + Lomb and Acuvue.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-50 flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-blue-600">
                  <span>Learn benefits</span>
                  <ChevronRight className="w-4 h-4 text-blue-600 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* --- SERVICE MODAL (DETAILS) --- */}
        <AnimatePresence>
          {selectedService && (
            <>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedService(null)}
                className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
              />
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                className="fixed inset-4 max-w-xl mx-auto my-auto z-50 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-100 p-6 sm:p-8 h-fit"
              >
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shadow-inner">
                      <Glasses className="w-4.5 h-4.5" />
                    </div>
                    <h3 className="font-serif font-black text-lg sm:text-xl text-blue-950 uppercase tracking-tight">
                      {selectedService === "checkup" && "Computerized Eye Checkup"}
                      {selectedService === "prescription" && "Prescription Lenses Fitting"}
                      {selectedService === "sunglasses" && "Designer Polarized Sunglasses"}
                      {selectedService === "lenses" && "Contact Lenses Fitting"}
                    </h3>
                  </div>
                  <button 
                    onClick={() => setSelectedService(null)}
                    className="p-1.5 rounded-full text-slate-400 hover:text-slate-600 border border-slate-100 hover:bg-slate-50 transition-all"
                  >
                    <X className="w-4.5 h-4.5" />
                  </button>
                </div>

                <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
                  {selectedService === "checkup" && (
                    <>
                      <p>At Max Optical, eye health is our utmost priority. Our clinical diagnostic team utilizes fully computerized autorefractors and digital lensometers to verify your vision prescription with precision.</p>
                      <h4 className="font-bold text-blue-950 uppercase tracking-wider text-[10px]">What is included in the test?</h4>
                      <ul className="list-disc pl-5 space-y-1.5 text-slate-500">
                        <li>Autorefractometer measurements for rapid baseline mapping.</li>
                        <li>Subjective refraction with trial frame lenses for ultimate comfort.</li>
                        <li>Astigmatism evaluation and cylinder power fine-tuning.</li>
                        <li>Professional advice for digital screens and laptop anti-fatigue setups.</li>
                      </ul>
                      <p className="font-bold text-blue-600 uppercase tracking-wider text-[11px] mt-2.5">Estimated duration: 15-20 minutes. Cost: FREE with any frame purchase.</p>
                    </>
                  )}

                  {selectedService === "prescription" && (
                    <>
                      <p>We source state-of-the-art prescription lenses tailored for high-use laptops, mobile phones, and nighttime driving. From high-index ultra-thin lenses to customized progressive fits.</p>
                      <h4 className="font-bold text-blue-950 uppercase tracking-wider text-[10px]">Available Options:</h4>
                      <ul className="list-disc pl-5 space-y-1.5 text-slate-500">
                        <li><strong>Blue-Shield Anti-Reflective</strong>: Blocks eye-straining digital blue rays.</li>
                        <li><strong>Photochromic / Transition</strong>: Automatically darkens on contact with Lucknow sunlight.</li>
                        <li><strong>Double-Sided Hard Scratch-Resistant Coating</strong>: Protects longevity.</li>
                        <li><strong>Progressive Lenses</strong>: Multi-focal fields without visual dividing lines.</li>
                      </ul>
                    </>
                  )}

                  {selectedService === "sunglasses" && (
                    <>
                      <p>Protect your eyes from the hot tropical Lucknow sun with polarized and UV400 fashion shades. Our collections protect against 100% of solar radiation while retaining accurate contrast.</p>
                      <h4 className="font-bold text-blue-950 uppercase tracking-wider text-[10px]">Our Collection Includes:</h4>
                      <ul className="list-disc pl-5 space-y-1.5 text-slate-500">
                        <li>Power Sunglasses: Customized with your visual distance prescription.</li>
                        <li>Classic Aviators, Retro Clubmasters, and Lightweight Sports wraps.</li>
                        <li>Authorized premium quality and hardware construction.</li>
                      </ul>
                    </>
                  )}

                  {selectedService === "lenses" && (
                    <>
                      <p>Enjoy active freedom without heavy glass frames. We carry extensive inventories of soft spherical contact lenses, astigmatic toric lenses, and customized medical fits.</p>
                      <h4 className="font-bold text-blue-950 uppercase tracking-wider text-[10px]">Brand Offerings:</h4>
                      <ul className="list-disc pl-5 space-y-1.5 text-slate-500">
                        <li>Bausch & Lomb, Alcon, and Acuvue authorized supplies.</li>
                        <li>Colored cosmetic lenses for casual and traditional events.</li>
                        <li>Hydrating solutions for comfortable all-day computer wear.</li>
                      </ul>
                    </>
                  )}
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 flex gap-3">
                  <a 
                    href="#book"
                    onClick={() => setSelectedService(null)}
                    className="flex-1 text-center py-3.5 bg-blue-900 hover:bg-blue-950 text-white rounded-full text-xs font-bold uppercase tracking-widest transition-all shadow-md shadow-blue-900/10"
                  >
                    Schedule In-Store Now
                  </a>
                  <button 
                    onClick={() => setSelectedService(null)}
                    className="flex-1 py-3.5 border border-slate-200 text-slate-700 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-slate-50 transition-all"
                  >
                    Close Window
                  </button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* --- INTERACTIVE FRAME STYLIST QUIZ --- */}
        <section id="stylist-quiz" className="py-16 md:py-20 lg:py-24 bg-white border-b border-slate-100/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="bg-gradient-to-br from-blue-950 via-slate-950 to-blue-950 rounded-3xl text-white p-6 sm:p-10 lg:p-12 shadow-2xl border border-white/5 relative overflow-hidden">
              
              {/* Soft background decor blurs */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

              {quizStep === 0 && (
                <div className="text-center relative z-10 py-6">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-6 text-blue-400">
                    <Glasses className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif font-black text-2xl sm:text-3xl text-white uppercase tracking-tight mb-4">Find Your Perfect Eyewear Frame</h3>
                  <p className="text-sm text-slate-300 max-w-lg mx-auto mb-8 leading-relaxed">
                    Take our 45-second computerized frame recommender quiz. We analyze your face shape and lifestyle to suggest optimal frames and protective lens coatings.
                  </p>
                  <button
                    onClick={() => setQuizStep(1)}
                    className="px-8 py-3.5 bg-white text-blue-950 hover:bg-blue-50 font-bold text-xs uppercase tracking-widest rounded-full transition-all hover:scale-105 active:scale-[0.98] shadow-lg shadow-white/5"
                  >
                    Start Styling Quiz
                  </button>
                </div>
              )}

              {quizStep === 1 && (
                <div className="relative z-10">
                  <span className="text-[9px] text-blue-400 font-bold uppercase tracking-widest block mb-1">Step 1 of 3</span>
                  <h4 className="font-serif font-bold text-xl sm:text-2xl text-white mb-6 uppercase tracking-tight">Select your natural face shape:</h4>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                    {[
                      { id: "oval", name: "Oval Face", desc: "Balanced proportions, soft curves" },
                      { id: "round", name: "Round Face", desc: "Equal width/length, soft chin" },
                      { id: "square", name: "Square Face", desc: "Strong jawline, wide temples" },
                      { id: "heart", name: "Heart Face", desc: "Wide forehead, pointed chin" }
                    ].map(shape => (
                      <button
                        key={shape.id}
                        onClick={() => setQuizFaceShape(shape.id)}
                        className={`p-4 rounded-2xl text-left border transition-all duration-300 ${
                          quizFaceShape === shape.id 
                            ? "border-blue-400 bg-blue-500/20 text-white font-semibold shadow-lg shadow-blue-500/10" 
                            : "border-white/10 bg-slate-950/40 text-slate-300 hover:bg-white/5"
                        }`}
                      >
                        <span className="font-bold text-sm block text-white">{shape.name}</span>
                        <span className="text-[10px] text-slate-400 block mt-1.5 leading-normal">{shape.desc}</span>
                      </button>
                    ))}
                  </div>

                  <div className="flex justify-between">
                    <button 
                      onClick={() => setQuizStep(0)}
                      className="px-5 py-2 text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-colors"
                    >
                      Back
                    </button>
                    <button 
                      disabled={!quizFaceShape}
                      onClick={() => setQuizStep(2)}
                      className={`px-7 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                        quizFaceShape 
                          ? "bg-white text-slate-950 hover:bg-blue-50 hover:scale-105" 
                          : "bg-white/10 text-slate-500 cursor-not-allowed"
                      }`}
                    >
                      Continue
                    </button>
                  </div>
                </div>
              )}

              {quizStep === 2 && (
                <div className="relative z-10">
                  <span className="text-[9px] text-blue-400 font-bold uppercase tracking-widest block mb-1">Step 2 of 3</span>
                  <h4 className="font-serif font-bold text-xl sm:text-2xl text-white mb-6 uppercase tracking-tight">What is your primary daily activity?</h4>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                    {[
                      { id: "screens", name: "Laptop & Phones", desc: "Hours of daily screen work" },
                      { id: "outdoors", name: "Driving & Outdoors", desc: "Active transit, sunny environments" },
                      { id: "fashion", name: "Fashion & Style", desc: "Statement looks, everyday meetings" }
                    ].map(act => (
                      <button
                        key={act.id}
                        onClick={() => setQuizLifestyle(act.id)}
                        className={`p-4 rounded-2xl text-left border transition-all duration-300 ${
                          quizLifestyle === act.id 
                            ? "border-blue-400 bg-blue-500/20 text-white font-semibold shadow-lg shadow-blue-500/10" 
                            : "border-white/10 bg-slate-950/40 text-slate-300 hover:bg-white/5"
                        }`}
                      >
                        <span className="font-bold text-sm block text-white">{act.name}</span>
                        <span className="text-[10px] text-slate-400 block mt-1.5 leading-normal">{act.desc}</span>
                      </button>
                    ))}
                  </div>

                  <div className="flex justify-between">
                    <button 
                      onClick={() => setQuizStep(1)}
                      className="px-5 py-2 text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-colors"
                    >
                      Back
                    </button>
                    <button 
                      disabled={!quizLifestyle}
                      onClick={() => setQuizStep(3)}
                      className={`px-7 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                        quizLifestyle 
                          ? "bg-white text-slate-950 hover:bg-blue-50 hover:scale-105" 
                          : "bg-white/10 text-slate-500 cursor-not-allowed"
                      }`}
                    >
                      Continue
                    </button>
                  </div>
                </div>
              )}

              {quizStep === 3 && (
                <div className="relative z-10">
                  <span className="text-[9px] text-blue-400 font-bold uppercase tracking-widest block mb-1">Step 3 of 3</span>
                  <h4 className="font-serif font-bold text-xl sm:text-2xl text-white mb-6 uppercase tracking-tight">Do you currently wear prescription glasses?</h4>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                    {[
                      { id: "yes_single", name: "Yes, Single Vision", desc: "Need constant reading or distance aid" },
                      { id: "yes_progressive", name: "Yes, Progressive/Bifocal", desc: "Need multifocal assistance" },
                      { id: "no", name: "No / Just Fashion", desc: "Seeking protective blue-cuts or zero-power shades" }
                    ].map(lens => (
                      <button
                        key={lens.id}
                        onClick={() => setQuizLens(lens.id)}
                        className={`p-4 rounded-2xl text-left border transition-all duration-300 ${
                          quizLens === lens.id 
                            ? "border-blue-400 bg-blue-500/20 text-white font-semibold shadow-lg shadow-blue-500/10" 
                            : "border-white/10 bg-slate-950/40 text-slate-300 hover:bg-white/5"
                        }`}
                      >
                        <span className="font-bold text-sm block text-white">{lens.name}</span>
                        <span className="text-[10px] text-slate-400 block mt-1.5 leading-normal">{lens.desc}</span>
                      </button>
                    ))}
                  </div>

                  <div className="flex justify-between">
                    <button 
                      onClick={() => setQuizStep(2)}
                      className="px-5 py-2 text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-colors"
                    >
                      Back
                    </button>
                    <button 
                      disabled={!quizLens}
                      onClick={() => setQuizStep(4)}
                      className={`px-7 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                        quizLens 
                          ? "bg-white text-slate-950 hover:bg-blue-50 hover:scale-105" 
                          : "bg-white/10 text-slate-500 cursor-not-allowed"
                      }`}
                    >
                      See Recommendations
                    </button>
                  </div>
                </div>
              )}

              {quizStep === 4 && (
                <div className="relative z-10">
                  <h4 className="font-serif font-black text-xl sm:text-2xl text-white uppercase tracking-tight mb-2">Your Bespoke Style Report</h4>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-blue-400 mb-6 pb-4 border-b border-white/10">
                    Hand-compiled recommendations from Max Optical Optometrists.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    
                    {/* Frame Recommendation */}
                    <div className="bg-white/5 p-6 rounded-2xl border border-white/10 shadow-inner">
                      <span className="text-[9px] text-blue-300 font-bold uppercase tracking-widest block mb-1">Recommended Frame Style</span>
                      <span className="font-serif font-bold text-lg text-white block mb-2">{getStylistRecommendation().frameRec}</span>
                      <p className="text-xs text-slate-300 leading-relaxed">{getStylistRecommendation().frameReason}</p>
                    </div>

                    {/* Lens Recommendation */}
                    <div className="bg-white/5 p-6 rounded-2xl border border-white/10 shadow-inner">
                      <span className="text-[9px] text-blue-300 font-bold uppercase tracking-widest block mb-1">Recommended Lens Formulation</span>
                      <span className="font-serif font-bold text-lg text-white block mb-2">{getStylistRecommendation().lensRec}</span>
                      <p className="text-xs text-slate-300 leading-relaxed">{getStylistRecommendation().lensReason}</p>
                    </div>

                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                    <a 
                      href="#book"
                      onClick={() => setQuizStep(0)}
                      className="w-full sm:w-auto px-7 py-3.5 bg-white text-blue-950 text-center text-xs font-bold uppercase tracking-widest rounded-full hover:bg-blue-50 transition-all hover:scale-105 shadow-md shadow-white/5"
                    >
                      Book Free Testing to Try This Frame
                    </a>
                    <button 
                      onClick={() => {
                        setQuizStep(0);
                        setQuizFaceShape("");
                        setQuizLifestyle("");
                        setQuizLens("");
                      }}
                      className="w-full sm:w-auto px-7 py-3.5 border border-white/20 text-slate-300 hover:text-white rounded-full text-xs font-bold uppercase tracking-widest transition-all"
                    >
                      Retake Quiz
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </section>

        {/* --- PRODUCTS EXPLORER SECTION --- */}
        <section id="products" className="py-16 md:py-20 lg:py-24 bg-slate-50/50 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Top row with section headers */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-blue-600 block mb-3">Our Collections</span>
                <h2 className="font-serif text-3xl sm:text-4xl font-black text-blue-950 leading-tight mb-1">
                  Curated Catalog
                </h2>
              </div>

              {/* Tabs list */}
              <div className="flex flex-wrap gap-1 bg-slate-100 p-1 rounded-full self-start md:self-end border border-slate-200/60">
                {(["all", "frames", "sunglasses", "lenses"] as const).map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-5 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${
                      activeTab === tab 
                        ? "bg-blue-950 text-white shadow-sm" 
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/40"
                    }`}
                  >
                    {tab === "all" ? "All Products" : tab}
                  </button>
                ))}
              </div>
            </div>

            {/* --- SEARCH & PRICE FILTER BAR --- */}
            <div className="bg-white rounded-2xl border border-slate-100 p-6 mb-12 shadow-sm shadow-blue-950/5 flex flex-col md:flex-row gap-6 items-center justify-between">
              {/* Search input */}
              <div className="relative w-full md:max-w-md">
                <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input 
                  type="text"
                  placeholder="Search frames by name, material, or color..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-slate-50/85 border border-slate-200 focus:border-blue-500/50 focus:bg-white rounded-xl text-xs outline-none transition-all placeholder:text-slate-400 text-slate-800 font-medium"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-bold uppercase text-slate-400 hover:text-slate-600"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Price slider */}
              <div className="w-full md:max-w-xs flex flex-col gap-2">
                <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-wider text-slate-500">
                  <span>Price Range Filter</span>
                  <span className="text-blue-600">Max Price: ₹{priceRange}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-bold text-slate-400">₹500</span>
                  <input 
                    type="range"
                    min="500"
                    max="2000"
                    step="100"
                    value={priceRange}
                    onChange={(e) => setPriceRange(parseInt(e.target.value))}
                    className="flex-grow accent-blue-900 h-1.5 bg-slate-100 rounded-lg cursor-pointer"
                  />
                  <span className="text-[10px] font-bold text-slate-400">₹2000</span>
                </div>
              </div>
            </div>

            {/* Products grid */}
            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-3xl border border-slate-100 p-16 text-center shadow-sm max-w-lg mx-auto">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-4">
                  <Search className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-black text-lg text-blue-950 mb-1">No matching eyewear found</h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-6">
                  Try adjusting your search terms or moving the price filter range slider to discover more styles.
                </p>
                <button 
                  onClick={() => {
                    setSearchQuery("");
                    setPriceRange(2000);
                  }}
                  className="px-6 py-2.5 bg-blue-900 hover:bg-blue-950 text-white rounded-full text-[10px] font-bold uppercase tracking-widest transition-all cursor-pointer"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
                {filteredProducts.map(product => (
                  <div 
                    key={product.id} 
                    className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1 hover:border-blue-500/10 transition-all duration-300 group flex flex-col"
                  >
                    
                    {/* Image block */}
                    <div className="relative aspect-4/3 overflow-hidden bg-slate-50 rounded-t-2xl">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                      
                      {/* Badge */}
                      <div className="absolute top-3 left-3 bg-blue-950/90 backdrop-blur-md px-3 py-1 rounded-full text-[9px] font-bold text-white uppercase tracking-wider shadow-sm">
                        {product.badge}
                      </div>

                      {/* Compare Selection Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleToggleCompare(product.id);
                        }}
                        className={`absolute top-3 right-3 z-10 px-2.5 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-wider shadow-sm transition-all flex items-center gap-1.5 cursor-pointer ${
                          selectedCompareIds.includes(product.id)
                            ? "bg-blue-600 text-white border border-blue-600"
                            : "bg-white/95 hover:bg-white text-slate-700 hover:text-slate-900 border border-slate-100"
                        }`}
                      >
                        <ArrowLeftRight className="w-3 h-3" />
                        <span>{selectedCompareIds.includes(product.id) ? "Selected" : "Compare"}</span>
                      </button>

                      {/* Quick Rating Badge */}
                      <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md text-slate-950 px-2.5 py-1 rounded-full text-[10px] font-bold flex items-center gap-1 border border-slate-100 shadow-sm">
                        <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                        {product.rating}
                      </div>
                    </div>

                    {/* Info block */}
                    <div className="pt-4 px-5 pb-5 sm:pt-5 sm:px-6 sm:pb-6 flex-grow flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start gap-2 mb-2">
                          <h3 className="font-serif font-extrabold text-lg text-blue-950 leading-tight group-hover:text-blue-600 transition-colors">
                            {product.name}
                          </h3>
                          <span className="font-serif font-black text-base text-blue-600 shrink-0">
                            {product.price}
                          </span>
                        </div>

                        <div className="text-xs text-slate-500 space-y-1.5 mb-4 leading-relaxed">
                          <span className="block"><strong>Material:</strong> {product.material}</span>
                          {product.category !== "lenses" && (
                            <div className="flex items-center gap-1">
                              <strong>Colors:</strong> 
                              {product.colors.map((c, i) => (
                                <span key={i} className="bg-slate-50 border border-slate-100 text-slate-600 px-2 py-0.5 rounded-full text-[9px]">{c}</span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="pt-4 border-t border-slate-50 space-y-2">
                        <button 
                          onClick={() => addToCart(product)}
                          className="w-full py-3 rounded-full bg-blue-900 hover:bg-blue-950 text-white text-[10px] font-bold uppercase tracking-widest transition-all shadow-md shadow-blue-900/5 hover:shadow-lg hover:shadow-blue-900/15 flex items-center justify-center gap-1.5 cursor-pointer"
                        >
                          <ShoppingBag className="w-4 h-4" />
                          <span>Add to Cart</span>
                        </button>

                        <div className="flex items-center gap-2">
                          <a 
                            href={`https://wa.me/918299687381?text=Hi%20Max%20Optical,%20I%20am%20interested%20in%20enquiring%20about%20${encodeURIComponent(product.name)}`}
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex-grow py-2.5 rounded-full border border-emerald-100 text-emerald-800 bg-emerald-50/30 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 text-[10px] font-bold uppercase tracking-wider text-center transition-all flex items-center justify-center gap-1"
                          >
                            <MessageSquare className="w-3.5 h-3.5" /> 
                            <span>Enquire</span>
                          </a>
                          <a 
                            href="tel:08299687381"
                            className="py-2.5 px-3 rounded-full border border-slate-100 text-slate-500 hover:bg-slate-50 hover:text-blue-600 transition-all"
                          >
                            <Phone className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </div>
                    </div>

                  </div>
                ))}
              </div>
            )}

            {/* Catalog Info notice */}
            <div className="mt-12 text-center bg-blue-50/30 rounded-2xl border border-blue-100/50 p-6 max-w-2xl mx-auto flex items-center justify-center gap-3">
              <span className="inline-block w-2 h-2 rounded-full bg-blue-600 shrink-0" />
              <span className="text-xs text-slate-600 font-bold uppercase tracking-wide">
                We adjust lens power fitting in-house using digital computerized equipment. Custom prescriptions available.
              </span>
            </div>

          </div>
        </section>

        {/* --- OFFERS SECTION --- */}
        <section id="offers" className="py-16 md:py-20 lg:py-24 bg-white border-b border-slate-100/50 relative overflow-hidden">
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-48 h-48 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-blue-600 block mb-3">Limited-Time Promotions</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-black text-blue-950 leading-tight mb-4">
                Exclusive Seasonal Offers
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 max-w-lg mx-auto leading-relaxed">
                Save big on premium eyecare. Grab our popular Buy 1 Get 1 Free bundles or activate exclusive digital discount coupons today!
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              {/* Banner 1: BOGO Offer */}
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950 text-white p-8 sm:p-10 shadow-xl border border-white/5 flex flex-col justify-between min-h-[340px] group">
                <div className="absolute top-0 right-0 -mt-6 -mr-6 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-500" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl" />
                
                <div className="relative z-10">
                  <div className="inline-flex bg-blue-500/20 border border-blue-400/30 text-blue-300 text-[10px] font-extrabold px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-6">
                    💥 Mega In-Store Deal
                  </div>
                  <h3 className="font-serif text-3xl sm:text-4xl font-black tracking-tight mb-4 leading-none">
                    BUY 1 GET 1 <br />
                    <span className="text-blue-400">FREE !</span>
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed max-w-sm mb-6">
                    Purchase any premium designer frame with blue-cut anti-glare lens packages, and get a second complete set (Frame + Lenses) 100% FREE! Perfect for families.
                  </p>
                </div>

                <div className="relative z-10 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between pt-6 border-t border-white/5 mt-auto">
                  <button 
                    onClick={() => {
                      setActiveTab("frames");
                      document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="px-6 py-3 bg-white text-blue-950 hover:bg-blue-50 text-[10px] font-bold uppercase tracking-widest rounded-full transition-all shadow-md cursor-pointer"
                  >
                    Shop Eligible Frames
                  </button>
                  <span className="text-[10px] text-slate-400 font-medium">
                    *T&C Apply. Valid in-store at Khurram Nagar showroom.
                  </span>
                </div>
              </div>

              {/* Banner 2: Digital Discount Coupons */}
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-50 to-white border border-slate-100 p-8 sm:p-10 shadow-xl flex flex-col justify-between min-h-[340px] group">
                <div className="absolute top-0 right-0 -mt-6 -mr-6 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl" />
                
                <div>
                  <div className="inline-flex bg-blue-50 text-blue-600 border border-blue-100 text-[10px] font-extrabold px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-6">
                    🎟️ Digital Coupon Code
                  </div>
                  <h3 className="font-serif text-3xl sm:text-4xl font-black text-blue-950 tracking-tight mb-4 leading-none">
                    FLAT 20% OFF <br />
                    <span className="text-blue-600">Contact Lenses</span>
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed max-w-sm mb-6">
                    Get extra savings on top-quality hydrating contact lenses from Alcon, Bausch + Lomb, and CooperVision. Copy code and claim on WhatsApp checkout.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between pt-6 border-t border-slate-100 mt-auto">
                  {/* Coupon Interactive Copy Button */}
                  <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 rounded-xl p-1.5 self-start sm:self-auto w-full sm:w-auto">
                    <span className="font-mono text-xs font-extrabold tracking-wider text-slate-800 px-3 uppercase">LENS20</span>
                    <button 
                      onClick={() => handleCopyCoupon("LENS20")}
                      className={`px-4 py-2 rounded-lg text-[9px] font-bold uppercase tracking-widest transition-all cursor-pointer ${
                        copiedCoupon === "LENS20" 
                          ? "bg-emerald-600 text-white" 
                          : "bg-blue-900 text-white hover:bg-blue-950"
                      }`}
                    >
                      {copiedCoupon === "LENS20" ? "Copied!" : "Copy Code"}
                    </button>
                  </div>
                  
                  <span className="text-[10px] text-slate-400 font-medium self-center">
                    *Applies on Alcon & Bausch+Lomb monthly packs.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- WHY CHOOSE US SECTION --- */}
        <section id="why" className="py-16 md:py-20 lg:py-24 bg-white border-b border-slate-100/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center">
              
              {/* Copy Left Side */}
              <div className="lg:col-span-6">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-blue-600 block mb-3">Why Lucknow Chooses Us</span>
                <h2 className="font-serif text-3xl sm:text-4xl font-black text-blue-950 leading-tight mb-6">
                  Trusted Professional Eye Care
                </h2>
                <p className="text-sm text-slate-500 mb-8 leading-relaxed">
                  For over a decade, Khurram Nagar has relied on Max Optical for precision testing and quality fits. We combine the clinical accuracy of an eye diagnostic center with a modern designer optical boutique.
                </p>

                <div className="space-y-6">
                  
                  {/* Block 1 */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 shadow-sm shadow-blue-500/5">
                      <Heart className="w-5.5 h-5.5" />
                    </div>
                    <div>
                      <h4 className="font-serif font-extrabold text-base text-blue-950">1,000+ Happy Customers</h4>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                        Over 1,000 loyal customers in Lucknow trust us with their vision care. Our ratings and reviews reflect our core commitment to precision, quality, and lifetime adjustments.
                      </p>
                    </div>
                  </div>

                  {/* Block 2 */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 shadow-sm shadow-blue-500/5">
                      <Award className="w-5.5 h-5.5" />
                    </div>
                    <div>
                      <h4 className="font-serif font-extrabold text-base text-blue-950">Premium Quality Guarantee</h4>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                        We source premium hand-polished acetates, flexible TR90 memory shapes, and surgical titanium alloys. All lenses are authentic with official UV400 and anti-glare certifications.
                      </p>
                    </div>
                  </div>

                  {/* Block 3 */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 shadow-sm shadow-blue-500/5">
                      <Eye className="w-5.5 h-5.5" />
                    </div>
                    <div>
                      <h4 className="font-serif font-extrabold text-base text-blue-950">100% Free Computerized Eye Test</h4>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                        Get your accurate eye prescription using our state-of-the-art computerized auto-refractometers at ₹0 cost. Skip the clinics and get precise clinical testing instantly in-store.
                      </p>
                    </div>
                  </div>

                  {/* Block 4 */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 shadow-sm shadow-blue-500/5">
                      <Truck className="w-5.5 h-5.5" />
                    </div>
                    <div>
                      <h4 className="font-serif font-extrabold text-base text-blue-950">Express 24-Hr Custom Fitting</h4>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                        No more waiting weeks for your eyewear. Our digital in-house lens-cutting laboratory finishes edge-bevel styling and frame fitting in under 24 hours.
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Graphical Promo right side */}
              <div className="lg:col-span-6 relative flex justify-center">
                <div className="relative w-full max-w-sm sm:max-w-md bg-gradient-to-br from-blue-950 via-slate-950 to-blue-950 rounded-3xl text-white p-8 sm:p-10 shadow-2xl border border-white/5 overflow-hidden">
                  
                  {/* Decorative ambient lighting glow */}
                  <div className="absolute -top-12 -right-12 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl pointer-events-none" />

                  <div className="relative z-10 text-center space-y-6 py-4">
                    <span className="text-[10px] font-bold tracking-widest uppercase bg-white/5 text-blue-300 py-1 px-3.5 rounded-full border border-white/10">
                      Exclusive In-Store Offer
                    </span>
                    
                    <h3 className="font-serif text-3xl font-black leading-tight uppercase tracking-tight text-white">
                      Free Computerized Testing
                    </h3>
                    
                    <p className="text-xs text-slate-300 leading-relaxed max-w-xs mx-auto">
                      Schedule your eye testing online today and get a complimentary testing certificate. Complete evaluation with trial frame adjustments.
                    </p>

                    <div className="text-4xl font-black font-serif py-2 text-white">
                      ₹0 <span className="text-sm font-normal text-slate-400 line-through">Worth ₹350</span>
                    </div>

                    <div className="pt-2">
                      <a 
                        href="#book"
                        className="inline-block px-8 py-3.5 bg-white text-blue-950 font-bold rounded-full text-xs uppercase tracking-widest hover:bg-blue-50 transition-all hover:scale-105 shadow-md shadow-white/5"
                      >
                        Claim My Appointment
                      </a>
                    </div>

                    <div className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                      *Valid only on computerized diagnostic machines in-store at Khurram Nagar branch.
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* --- BOOK APPOINTMENT SECTION --- */}
        <section id="book" className="py-16 md:py-20 lg:py-24 bg-slate-50/30 border-b border-slate-100/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              
              <div className="text-center max-w-2xl mx-auto mb-10 lg:mb-12">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-blue-600 block mb-3">Scheduling Portal</span>
                <h2 className="font-serif text-3xl sm:text-4xl font-black text-blue-950 leading-tight mb-4">
                  Secure Your Slot
                </h2>
                <p className="text-xs text-slate-500 max-w-lg mx-auto leading-relaxed">
                Save time and skip the waiting queue. Reserve an appointment for computerized refraction testing, custom styling, or contact lens advice.
              </p>
            </div>

            <div className="bg-white rounded-3xl border border-slate-100 p-6 sm:p-10 shadow-xl shadow-blue-900/5">
              
              {!bookingResult ? (
                <form onSubmit={handleBookingSubmit} className="space-y-6">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Your Full Name */}
                    <div>
                      <label htmlFor="booking-name" className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest block mb-2">
                        Your Full Name <span className="text-rose-600">*</span>
                      </label>
                      <input 
                        type="text" 
                        id="booking-name"
                        value={bookingForm.name}
                        onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                        placeholder="e.g. Amit Kumar" 
                        required
                        className="w-full px-5 py-3.5 rounded-full border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all text-sm"
                      />
                    </div>

                    {/* WhatsApp/Mobile Number */}
                    <div>
                      <label htmlFor="booking-phone" className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest block mb-2">
                        WhatsApp/Mobile Number <span className="text-rose-600">*</span>
                      </label>
                      <input 
                        type="tel" 
                        id="booking-phone"
                        value={bookingForm.phone}
                        onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                        placeholder="e.g. 082996 87381" 
                        required
                        className="w-full px-5 py-3.5 rounded-full border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Preferred Date */}
                    <div>
                      <label htmlFor="booking-date" className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest block mb-2">
                        Preferred Date <span className="text-rose-600">*</span>
                      </label>
                      <input 
                        type="date" 
                        id="booking-date"
                        value={bookingForm.date}
                        onChange={(e) => setBookingForm({ ...bookingForm, date: e.target.value })}
                        required
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-5 py-3.5 rounded-full border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all text-sm"
                      />
                    </div>

                    {/* Preferred Time Slot */}
                    <div>
                      <label htmlFor="booking-time" className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest block mb-2">
                        Preferred Time Slot
                      </label>
                      <select 
                        id="booking-time"
                        value={bookingForm.timeSlot}
                        onChange={(e) => setBookingForm({ ...bookingForm, timeSlot: e.target.value })}
                        className="w-full px-5 py-3.5 rounded-full border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all text-sm cursor-pointer"
                      >
                        <option>10:00 AM - 11:30 AM</option>
                        <option>11:30 AM - 01:00 PM</option>
                        <option>01:00 PM - 02:30 PM</option>
                        <option>03:30 PM - 05:00 PM</option>
                        <option>05:00 PM - 06:30 PM</option>
                        <option>06:30 PM - 08:30 PM</option>
                      </select>
                    </div>
                  </div>

                  {/* Required Service */}
                  <div>
                    <label htmlFor="booking-service" className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest block mb-2">
                      Required Service
                    </label>
                    <select 
                      id="booking-service"
                      value={bookingForm.service}
                      onChange={(e) => setBookingForm({ ...bookingForm, service: e.target.value })}
                      className="w-full px-5 py-3.5 rounded-full border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all text-sm cursor-pointer"
                    >
                      <option>Free Computerized Eye Testing</option>
                      <option>Eyewear Prescription & Power Fitting</option>
                      <option>Contact Lens Fitting & Advice</option>
                      <option>Designer Sunglasses Selection</option>
                      <option>Frame Adjustments & Repair</option>
                    </select>
                  </div>

                  <div className="pt-2 text-center">
                    <button 
                      type="submit"
                      className="w-full px-8 py-4 bg-blue-900 hover:bg-blue-950 text-white font-extrabold rounded-full text-xs uppercase tracking-widest transition-all hover:scale-[1.01] shadow-lg shadow-blue-900/10"
                      id="submit-booking-btn"
                    >
                      Book Free Appointment
                    </button>
                    <p className="text-[10px] text-slate-400 mt-3 font-medium uppercase tracking-wider">
                      *We respect your privacy. No spam. You will receive one confirmation ping on WhatsApp.
                    </p>
                  </div>

                </form>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-6 space-y-6"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mx-auto shadow-inner">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div className="max-w-md mx-auto">
                    <h3 className="font-serif font-black text-2xl text-blue-950 uppercase tracking-tight">Appointment Requested!</h3>
                    <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                      Your diagnostic slot has been initialized. To secure and guarantee instant confirmation, please click below to send a quick WhatsApp confirmation to our team.
                    </p>
                  </div>

                  {/* Booking Ticket Card */}
                  <div className="bg-slate-50 border border-slate-150 rounded-2xl p-6 max-w-sm mx-auto text-left space-y-3 relative overflow-hidden shadow-inner">
                    
                    <div className="flex justify-between items-center pb-2 border-b border-slate-200/55">
                      <span className="text-[9px] uppercase font-bold tracking-widest text-slate-400">Appointment Pass</span>
                      <span className="font-mono text-xs font-bold text-slate-900 bg-white px-2.5 py-0.5 rounded-md border border-slate-100 shadow-sm">
                        {bookingResult.ticket}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-xs">
                      <div>
                        <span className="text-[9px] font-semibold text-slate-400 uppercase tracking-wider block">Patient</span>
                        <span className="font-bold text-slate-800 truncate block">{bookingForm.name}</span>
                      </div>
                      <div>
                        <span className="text-[9px] font-semibold text-slate-400 uppercase tracking-wider block">Service</span>
                        <span className="font-bold text-slate-800 truncate block">{bookingForm.service.split(" ")[0]}...</span>
                      </div>
                      <div>
                        <span className="text-[9px] font-semibold text-slate-400 uppercase tracking-wider block">Date</span>
                        <span className="font-bold text-slate-800 block">{bookingForm.date}</span>
                      </div>
                      <div>
                        <span className="text-[9px] font-semibold text-slate-400 uppercase tracking-wider block">Preferred Time</span>
                        <span className="font-bold text-slate-800 block">{bookingForm.timeSlot.split(" - ")[0]}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto pt-4">
                    <a 
                      href={`https://wa.me/918299687381?text=Hi%20Max%20Optical!%20I%2527d%20like%20to%20confirm%20my%20appointment%20pass%20(${bookingResult.ticket})%20for%20a%20${encodeURIComponent(bookingForm.service)}%20on%20${bookingForm.date}.`}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 py-3.5 px-5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-1.5 transition-all shadow-lg shadow-emerald-600/15"
                    >
                      <MessageSquare className="w-4.5 h-4.5" /> Confirm on WhatsApp
                    </a>
                    <button 
                      onClick={resetBooking}
                      className="py-3.5 px-5 border border-slate-200 text-slate-600 hover:bg-slate-50 rounded-full text-xs font-bold uppercase tracking-widest transition-all"
                    >
                      Book Another Slot
                    </button>
                  </div>
                </motion.div>
              )}

            </div>
          </div>
        </div>
      </section>

        {/* --- REVIEWS & TESTIMONIALS --- */}
        <section id="testimonials" className="py-16 md:py-20 lg:py-24 bg-white border-b border-slate-100/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16">
              
              {/* Left Side: Rating stats and custom Review write panel */}
              <div className="lg:col-span-5 space-y-8">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-blue-600 block mb-3">Customer Feedback</span>
                  <h2 className="font-serif text-3xl sm:text-4xl font-black text-blue-950 leading-tight mb-4">
                    What Our Patrons Say
                  </h2>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                    Max Optical takes pride in every lens we fit and customer we serve near Khurram Nagar. Check out our real ratings or post your own.
                  </p>
                </div>

                {/* Rating score badge */}
                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 flex items-center gap-5 shadow-inner">
                  <div className="text-4xl sm:text-5xl font-black font-serif text-blue-950">
                    4.9
                  </div>
                  <div>
                    <div className="flex text-amber-400 mb-1">
                      {[1, 2, 3, 4, 5].map(star => (
                        <Star key={star} className="w-4.5 h-4.5 fill-current" />
                      ))}
                    </div>
                    <span className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest block">
                      Based on 320+ Lucknow Reviews
                    </span>
                  </div>
                </div>

                {/* Post Review Form */}
                <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-xl shadow-blue-900/5">
                  <h3 className="font-serif font-black text-sm text-blue-950 mb-4 uppercase tracking-wider flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-blue-600" /> 
                    <span>Share Your Experience</span>
                  </h3>

                  <form onSubmit={handleReviewSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <input 
                          type="text" 
                          required
                          value={reviewForm.name}
                          onChange={(e) => setReviewForm({ ...reviewForm, name: e.target.value })}
                          placeholder="Your Name" 
                          className="w-full px-4 py-2.5 border border-slate-200 bg-white rounded-full focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 text-xs transition-all"
                        />
                      </div>
                      <div>
                        <input 
                          type="text" 
                          value={reviewForm.location}
                          onChange={(e) => setReviewForm({ ...reviewForm, location: e.target.value })}
                          placeholder="Location" 
                          className="w-full px-4 py-2.5 border border-slate-200 bg-white rounded-full focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 text-xs transition-all"
                        />
                      </div>
                    </div>

                    {/* Star selector */}
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Your Rating:</span>
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map(num => (
                          <button
                            key={num}
                            type="button"
                            onClick={() => setReviewForm({ ...reviewForm, rating: num })}
                            className="p-0.5 focus:outline-none hover:scale-110 transition-transform"
                          >
                            <Star className={`w-5 h-5 ${num <= reviewForm.rating ? "fill-amber-400 text-amber-400" : "text-slate-200"}`} />
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <textarea 
                        required
                        value={reviewForm.comment}
                        onChange={(e) => setReviewForm({ ...reviewForm, comment: e.target.value })}
                        placeholder="Write your honest feedback here..." 
                        rows={3}
                        className="w-full px-4 py-3 border border-slate-200 bg-white rounded-2xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 text-xs transition-all leading-relaxed"
                      />
                    </div>

                    <button 
                      type="submit"
                      className="w-full py-3.5 bg-blue-900 hover:bg-blue-950 text-white rounded-full text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-1.5 shadow-md shadow-blue-900/10"
                    >
                      <Send className="w-3.5 h-3.5" /> Publish Testimonial
                    </button>
                    
                    <AnimatePresence>
                      {reviewSuccess && (
                        <motion.div 
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="text-center text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-100 py-2.5 rounded-full"
                        >
                          Thank you! Your testimonial is published below.
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </form>
                </div>
              </div>

              {/* Right Side: Feed of reviews */}
              <div className="lg:col-span-7">
                <div className="space-y-6">
                  {testimonials.map((test) => (
                    <div 
                      key={test.id}
                      className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex justify-between items-start gap-4 mb-3">
                          <div>
                            <span className="font-serif font-extrabold text-blue-950 block">{test.name}</span>
                            <span className="text-[9px] font-extrabold uppercase tracking-widest text-slate-400 block mt-0.5">{test.location}</span>
                          </div>
                          
                          <div className="flex gap-0.5 text-amber-400 shrink-0">
                            {Array.from({ length: test.rating }).map((_, i) => (
                              <Star key={i} className="w-3.5 h-3.5 fill-current" />
                            ))}
                          </div>
                        </div>

                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed italic">
                          &ldquo;{test.comment}&rdquo;
                        </p>
                      </div>

                      <div className="text-[9px] font-bold uppercase tracking-wider text-slate-400 text-right mt-4 pt-2 border-t border-slate-50">
                        {test.date}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* --- FAQ SECTION --- */}
        <section id="faq" className="py-16 md:py-20 lg:py-24 bg-white border-b border-slate-100/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              
              <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-blue-600 block mb-3">Frequently Asked Questions</span>
                <h2 className="font-serif text-3xl sm:text-4xl font-black text-blue-950 leading-tight mb-4">
                  Any Questions? We Have Answers
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 max-w-lg mx-auto leading-relaxed">
                Learn more about our customized lens fitting, home testing schedules, frame warranties, and fast delivery timelines.
              </p>
            </div>

            <div className="space-y-4">
              {FAQ_ITEMS.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div 
                    key={idx} 
                    className="border border-slate-100 rounded-2xl bg-slate-50/30 hover:bg-slate-50/60 transition-all duration-300 overflow-hidden"
                    id={`faq-item-${idx}`}
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full py-5 px-6 sm:px-8 text-left flex justify-between items-center gap-4 focus:outline-none focus:ring-4 focus:ring-blue-100 rounded-2xl cursor-pointer group"
                      id={`faq-btn-${idx}`}
                      aria-expanded={isOpen}
                    >
                      <span className="font-serif font-extrabold text-blue-950 text-sm sm:text-base leading-snug group-hover:text-blue-600 transition-colors">
                        {faq.question}
                      </span>
                      <span className={`w-8 h-8 rounded-full bg-white border border-slate-100 flex items-center justify-center shrink-0 shadow-sm text-slate-400 transition-all duration-300 ${isOpen ? "rotate-180 text-blue-600 border-blue-200 bg-blue-50/50 shadow-md" : "group-hover:text-slate-600 group-hover:border-slate-250"}`}>
                        <ChevronDown className="w-4.5 h-4.5" />
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                        >
                          <div className="px-6 sm:px-8 pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100/50 pt-4 bg-white/50">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

        {/* --- CONTACT & GOOGLE MAPS SECTION --- */}
        <section id="contact" className="py-16 md:py-20 lg:py-24 bg-slate-50/50 border-t border-slate-100/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Coordinates details */}
              <div className="lg:col-span-5 space-y-8">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-blue-600 block mb-3">Find Us In Lucknow</span>
                  <h2 className="font-serif text-3xl sm:text-4xl font-black text-blue-950 leading-tight mb-4">
                    Visit Our Showroom
                  </h2>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                    Conveniently located near Sector 8, Khurram Nagar, with easy parking. Stop by for immediate testing or to browse frame sizes.
                  </p>
                </div>

                <div className="space-y-5">
                  
                  {/* Address block */}
                  <div className="flex gap-3.5">
                    <div className="w-11 h-11 rounded-2xl bg-white border border-slate-100 text-blue-600 flex items-center justify-center shrink-0 shadow-sm">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-serif font-extrabold text-blue-950 block text-sm">Store Location</span>
                      <span className="text-xs text-slate-500 block mt-1 leading-relaxed">
                        Sector 8, Khurram Nagar, <br />
                        Lucknow, Uttar Pradesh - 226021
                      </span>
                    </div>
                  </div>

                  {/* Phone block */}
                  <div className="flex gap-3.5">
                    <div className="w-11 h-11 rounded-2xl bg-white border border-slate-100 text-blue-600 flex items-center justify-center shrink-0 shadow-sm">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-serif font-extrabold text-blue-950 block text-sm">Telephone Hotline</span>
                      <a href="tel:08299687381" className="text-xs text-blue-900 hover:underline block mt-1 font-bold">
                        082996 87381 (Click to Call)
                      </a>
                    </div>
                  </div>

                  {/* Open hours block */}
                  <div className="flex gap-3.5">
                    <div className="w-11 h-11 rounded-2xl bg-white border border-slate-100 text-blue-600 flex items-center justify-center shrink-0 shadow-sm">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-serif font-extrabold text-blue-950 block text-sm">Operational Hours</span>
                      <span className="text-xs text-slate-500 block mt-1 leading-relaxed">
                        Monday - Sunday: 10:00 AM - 09:00 PM <br />
                        <span className="text-[9px] text-emerald-700 font-extrabold uppercase tracking-widest bg-emerald-50/55 border border-emerald-100 px-2.5 py-0.5 rounded-full inline-block mt-1.5">Open All Week</span>
                      </span>
                    </div>
                  </div>

                </div>

                <div className="pt-4 flex gap-3 flex-wrap">
                  <a 
                    href="tel:08299687381"
                    className="px-6 py-3.5 rounded-full bg-blue-900 text-white hover:bg-blue-950 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 transition-all hover:scale-105 shadow-md shadow-blue-900/10"
                    id="contact-call-btn"
                  >
                    <Phone className="w-4 h-4" /> Call 082996 87381
                  </a>
                  <a 
                    href="https://maps.google.com/?q=Max+Optical+Khurram+Nagar+Lucknow" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-6 py-3.5 rounded-full bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 transition-all hover:scale-105"
                    id="contact-directions-btn"
                  >
                    <MapPin className="w-4 h-4 text-blue-600" /> Get Location Directions
                  </a>
                </div>
              </div>

              {/* Right Column: Google Maps embed frame */}
              <div className="lg:col-span-7">
                <div className="w-full aspect-16/10 sm:aspect-16/9 bg-white rounded-3xl overflow-hidden border border-slate-100 relative shadow-2xl shadow-blue-950/5 group/map">
                  
                  {/* Google maps iframe embed with high performance and accessibility settings */}
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.1123491414343!2d80.9634289!3d26.8999335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bf138612ca493%3A0xe54e58bca7d448!2sMax%20Optical!5e0!3m2!1sen!2sin!4v1717800000000!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Max Optical Location Map Lucknow"
                    id="gmaps-iframe"
                    className="absolute inset-0"
                  ></iframe>

                  {/* Visually Distinct Precise Location Pin Overlay */}
                  <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                    <div className="relative flex items-center justify-center">
                      {/* Precise Center Anchor Target Point */}
                      <span className="absolute inline-flex h-16 w-16 rounded-full bg-blue-500/20 animate-ping"></span>
                      <span className="absolute inline-flex h-8 w-8 rounded-full bg-blue-600/30 animate-pulse"></span>
                      <span className="absolute h-2.5 w-2.5 rounded-full bg-blue-600 ring-4 ring-white shadow-md"></span>
                      
                      {/* Bouncing Elegant Hoverable Pin Badge above the anchor */}
                      <a 
                        href="https://maps.google.com/?q=Max+Optical+Khurram+Nagar+Lucknow" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="absolute bottom-5 bg-white text-blue-950 px-3.5 py-2.5 rounded-2xl shadow-xl border border-blue-100/80 flex items-center gap-2.5 pointer-events-auto transform transition-all duration-300 hover:scale-105 hover:-translate-y-1.5 active:scale-95 cursor-pointer select-none group min-w-[140px] animate-bounce"
                        style={{ animationDuration: "2s" }}
                        title="Click to open Max Optical in Google Maps"
                        id="map-precise-marker"
                      >
                        <div className="w-7.5 h-7.5 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-600/20 group-hover:bg-blue-700 transition-colors">
                          <Glasses className="w-4 h-4" />
                        </div>
                        <div className="text-left pr-1">
                          <span className="text-[10px] font-black uppercase tracking-tight text-blue-950 block leading-none">Max Optical</span>
                          <span className="text-[8px] text-slate-500 block font-bold leading-none mt-1">Khurram Nagar</span>
                        </div>
                        
                        {/* Downward pointing tooltip arrow */}
                        <div className="absolute left-1/2 -translate-x-1/2 bottom-[-5px] w-2.5 h-2.5 bg-white border-r border-b border-blue-100/80 rotate-45"></div>
                      </a>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-950 text-slate-300 border-t-2 border-slate-900 pt-16 pb-12 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
            
            {/* Column 1: Brand details */}
            <div className="lg:col-span-4 space-y-4">
              <a href="#" className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white">
                  <Glasses className="w-5.5 h-5.5" />
                </div>
                <span className="font-serif font-black text-xl text-white tracking-tight uppercase">Max Optical</span>
              </a>
              <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
                 Lucknow&apos;s premier optical clinic, helping families see clearly and style confidently with computerized diagnostics and genuine lens coatings since over a decade.
              </p>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span className="text-xs text-slate-300 font-bold ml-1">4.9 Star Lucknow Business</span>
              </div>
            </div>

            {/* Column 2: Quick navigation */}
            <div className="lg:col-span-3 space-y-4">
              <span className="text-[10px] uppercase font-bold text-white tracking-widest block">Quick Navigation</span>
              <ul className="text-xs space-y-2.5">
                <li><a href="#about" className="hover:text-white transition-colors block">About Our Shop</a></li>
                <li><a href="#services" className="hover:text-white transition-colors block">Computerized Diagnostics</a></li>
                <li><a href="#tryon" className="hover:text-white transition-colors block">Virtual Frame Simulator</a></li>
                <li><a href="#products" className="hover:text-white transition-colors block">Curated Eyewear Catalog</a></li>
                <li><a href="#book" className="hover:text-white transition-colors block">Schedule Free Testing</a></li>
              </ul>
            </div>

            {/* Column 3: Contact quick coordinates */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-[10px] uppercase font-bold text-white tracking-widest block">Showroom Coordinates</span>
              <ul className="text-xs space-y-3">
                <li className="flex items-start gap-2">
                  <MapPin className="w-4.5 h-4.5 text-white shrink-0 mt-0.5" />
                  <span>Sector 8, Khurram Nagar, Lucknow, Uttar Pradesh - 226021</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4.5 h-4.5 text-white shrink-0" />
                  <a href="tel:08299687381" className="hover:text-white transition-colors">082996 87381</a>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-4.5 h-4.5 text-white shrink-0 mt-0.5" />
                  <span>Mon - Sun: 10:00 AM - 9:00 PM <br className="hidden sm:inline" /> (Open all days of the week)</span>
                </li>
              </ul>
            </div>

          </div>

          <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-slate-500 font-bold uppercase tracking-wider">
            <div>
              &copy; {new Date().getFullYear()} Max Optical Lucknow.
            </div>
            <div className="flex gap-4">
              <span>Sector 8, Khurram Nagar</span>
              <span>Computerized Eye Care</span>
            </div>
          </div>

        </div>
      </footer>

      {/* --- FLOATING WHATSAPP ENGAGEMENT WIDGET --- */}
      <div className="fixed bottom-6 right-6 z-50">
        <motion.a
          href="https://wa.me/918299687381?text=Hi%20Max%20Optical!%20I%27d%20like%20to%20inquire%20about%20your%20services%20and%20eyewear%20collection."
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex items-center justify-center w-14 h-14 bg-emerald-500 text-white rounded-full shadow-2xl hover:bg-emerald-600 transition-colors cursor-pointer group relative"
          title="Chat on WhatsApp"
        >
          <MessageSquare className="w-6 h-6" />
          <span className="absolute right-16 bg-blue-950 text-white text-[10px] font-bold uppercase tracking-wider px-3.5 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl shadow-blue-950/20 pointer-events-none">
            Chat With Us
          </span>
          <span className="absolute top-0 right-0 w-3 h-3 bg-rose-500 border-2 border-white rounded-full animate-ping"></span>
          <span className="absolute top-0 right-0 w-3 h-3 bg-rose-500 border-2 border-white rounded-full"></span>
        </motion.a>
      </div>

    </div>
  );
}
