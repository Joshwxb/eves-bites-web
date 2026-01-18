import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Phone, MapPin, X, Send, Instagram, Facebook, Utensils, Award, Clock, Menu } from 'lucide-react';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [formData, setFormData] = useState({ name: '', phone: '', location: '' });

  const menuItems = [
    {
      id: 1,
      name: "Chicken Shawarma (Double)",
      price: "2,500", 
      category: "Shawarma",
      image: "https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&q=80&w=800",
      desc: "Creamy garlic sauce, grilled chicken, and fresh veggies wrapped in toasted bread."
    },
    {
      id: 2,
      name: "Spicy Beef Shawarma",
      price: "2,500", 
      category: "Shawarma",
      image: "/1.jpg", 
      desc: "Suya-spiced beef strips, extra chili, onions, and cabbage for the ultimate kick."
    },
    {
      id: 3,
      name: "Deluxe Toast Bread",
      price: "3,000",
      category: "Toast",
      image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=800",
      desc: "Perfectly toasted with layers of cheese, eggs, and your choice of protein."
    },
    {
      id: 4,
      name: "Classic Club Toast",
      price: "3,500",
      category: "Toast",
      image: "/2.jpg", 
      desc: "Triple-decker toast with chicken slices, lettuce, tomatoes, and signature mayo."
    }
  ];

  const handleOrderClick = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const sendToWhatsApp = (e) => {
    e.preventDefault();
    const phoneNumber = "2348166629568";
    const message = `*NEW ORDER - EVE'S BITES*%0A%0A` + 
                    `*Item:* ${selectedItem.name}%0A` +
                    `*Price:* ₦${selectedItem.price}%0A%0A` +
                    `*Customer Details:*%0A` +
                    `- Name: ${formData.name}%0A` +
                    `- Phone: ${formData.phone}%0A` +
                    `- Location: ${formData.location}`;
    
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-brand-dark text-brand-cream font-sans selection:bg-brand-gold selection:text-brand-dark scroll-smooth">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-brand-dark/90 backdrop-blur-md border-b border-brand-gold/10 px-6 py-4 flex justify-between items-center">
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-2xl font-black tracking-tighter text-brand-gold cursor-pointer"
        >
          EVE'S BITES
        </motion.h1>
        
        <div className="flex gap-6 items-center">
          <div className="hidden md:flex gap-6 text-[10px] font-bold uppercase tracking-[0.2em]">
             <a href="#home" className="hover:text-brand-gold transition-colors">Home</a>
             <a href="#about" className="hover:text-brand-gold transition-colors">About</a>
             <a href="#menu" className="hover:text-brand-gold transition-colors">Menu</a>
          </div>
          
          <div className="hidden sm:flex gap-2 items-center bg-brand-gold/10 px-4 py-2 rounded-full border border-brand-gold/20">
            <Phone size={14} className="text-brand-gold" />
            <span className="text-xs font-bold">+234 816 662 9568</span>
          </div>

          <button 
            className="md:hidden text-brand-gold"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] md:hidden"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-[75%] bg-brand-dark border-l border-brand-gold/20 z-[70] p-10 md:hidden"
            >
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-6 right-6 text-brand-gold"
              >
                <X size={32} />
              </button>

              <div className="flex flex-col gap-8 mt-16">
                <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-black tracking-widest hover:text-brand-gold">HOME</a>
                <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-black tracking-widest hover:text-brand-gold">ABOUT</a>
                <a href="#menu" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-black tracking-widest hover:text-brand-gold">MENU</a>
                <div className="pt-8 border-t border-white/10">
                    <p className="text-brand-gold text-[10px] font-bold uppercase tracking-widest mb-4">Contact Us</p>
                    <div className="flex items-center gap-3 text-brand-cream/60">
                     <Phone size={18} />
                     <span className="text-sm">+234 816 662 9568</span>
                   </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&q=80&w=1920" 
            className="w-full h-full object-cover"
            alt="Delicious Food"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/90 via-brand-dark/70 to-brand-dark" />
        </div>
        
        <div className="relative z-10 max-w-4xl">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-brand-gold font-bold tracking-[0.4em] uppercase text-xs mb-4">
            Ogun's Finest Quick Bites
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-6xl md:text-8xl font-black mb-6 tracking-tighter leading-none">
            Satisfy Your <span className="text-brand-gold italic">Cravings.</span>
          </motion.h2>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <motion.a href="#menu" className="bg-brand-gold text-brand-dark px-10 py-4 rounded-full font-black uppercase tracking-widest text-sm shadow-xl">
              View Menu
            </motion.a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 max-w-6xl mx-auto border-b border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-brand-gold uppercase tracking-[0.3em] text-sm font-bold mb-4">Our Story</h3>
            <h4 className="text-5xl font-black mb-6 leading-tight">Handcrafted Bites Made With Love.</h4>
            <p className="text-brand-cream/60 leading-relaxed mb-8">
              Based in the heart of Ogun State, Eve's Bites was born from a passion for premium street food. We specialize in gourmet shawarmas and perfectly toasted bread, using only the freshest local ingredients and our signature spice blends.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-brand-gold/10 rounded-lg text-brand-gold"><Utensils size={20}/></div>
                <span className="text-xs font-bold uppercase tracking-widest">Fresh Prep</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-brand-gold/10 rounded-lg text-brand-gold"><Clock size={20}/></div>
                <span className="text-xs font-bold uppercase tracking-widest">Fast Delivery</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Adjusted decorative border to match new image height */}
            <div className="absolute -inset-4 border-2 border-brand-gold/20 rounded-[3rem] -z-10 h-[432px]" />
            <img 
              src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800" 
              className="w-full h-[400px] object-cover rounded-[2.5rem] shadow-2xl" 
              alt="About Eve's Bites" 
            />
          </motion.div>
        </div>
      </section>

      {/* Menu Grid */}
      <section id="menu" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-brand-gold uppercase tracking-[0.3em] text-sm font-bold mb-2">The Classics</h3>
          <h4 className="text-5xl font-black">Our Specialties</h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {menuItems.map((item) => (
            <motion.div 
              key={item.id} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden group hover:border-brand-gold/30 transition-all duration-500"
            >
              <div className="h-64 md:h-72 overflow-hidden relative">
                <img src={item.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={item.name} />
              </div>
              <div className="p-8 md:p-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-3">{item.name}</h3>
                <p className="text-brand-cream/50 mb-8 text-sm md:text-base leading-relaxed">{item.desc}</p>
                <div className="flex justify-between items-center border-t border-white/5 pt-8">
                  <span className="text-2xl md:text-3xl font-black text-brand-gold">₦{item.price}</span>
                  <button 
                    onClick={() => handleOrderClick(item)}
                    className="bg-white text-brand-dark px-6 md:px-8 py-3 md:py-4 rounded-2xl font-black hover:bg-brand-gold transition-all flex items-center gap-2"
                  >
                    <ShoppingCart size={18} />
                    ORDER
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-brand-dark border-t border-brand-gold/10 py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          <div>
            <h4 className="text-2xl font-black text-brand-gold mb-4">EVE'S BITES</h4>
            <p className="text-brand-cream/40 text-sm leading-relaxed max-w-xs">
              Quality you can taste. Premium delivery service for Shawarma and Toast enthusiasts.
            </p>
          </div>
          <div className="space-y-4">
            <h5 className="font-bold uppercase tracking-widest text-xs text-brand-gold">Contact Us</h5>
            <div className="flex items-center gap-3 text-brand-cream/60">
              <Phone size={18} />
              <span className="text-sm">+234 816 662 9568</span>
            </div>
            <div className="flex items-center gap-3 text-brand-cream/60">
              <MapPin size={18} />
              <span className="text-sm">Ogun State, Nigeria</span>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="p-3 bg-white/5 rounded-full hover:text-brand-gold transition-colors cursor-pointer"><Instagram size={20}/></div>
            <div className="p-3 bg-white/5 rounded-full hover:text-brand-gold transition-colors cursor-pointer"><Facebook size={20}/></div>
          </div>
        </div>
      </footer>

      {/* Order Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsModalOpen(false)} className="absolute inset-0 bg-brand-dark/95 backdrop-blur-md" />
            <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 50, opacity: 0 }} className="relative bg-neutral-900 border border-brand-gold/20 w-full max-w-md rounded-[2rem] p-8 md:p-10 shadow-2xl">
              <button onClick={() => setIsModalOpen(false)} className="absolute top-6 right-6 text-white/30 hover:text-white"><X size={24} /></button>
              <h3 className="text-2xl md:text-3xl font-black mb-2">Final Step</h3>
              <p className="text-brand-gold text-xs font-bold mb-8 uppercase tracking-widest">Ordering: {selectedItem?.name}</p>
              <form onSubmit={sendToWhatsApp} className="space-y-4 md:space-y-6">
                <input required className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-brand-gold outline-none text-white" placeholder="Your Name" onChange={(e) => setFormData({...formData, name: e.target.value})} />
                <input required type="tel" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-brand-gold outline-none text-white" placeholder="Phone Number" onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                <textarea required className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-brand-gold outline-none h-24 md:h-28 resize-none text-white" placeholder="Delivery Address" onChange={(e) => setFormData({...formData, location: e.target.value})} />
                <button type="submit" className="w-full bg-brand-gold text-brand-dark font-black py-4 md:py-5 rounded-2xl flex items-center justify-center gap-3">
                  <Send size={18} /> CONFIRM VIA WHATSAPP
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;