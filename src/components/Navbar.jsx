import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, User, Search, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Products', path: '/' },
        { name: 'Story', path: '/story' },
        { name: 'Manufacturing', path: '/manufacturing' },
        { name: 'Packaging', path: '/packaging' },
        { name: 'Team', path: '/team' },
    ];

    return (
        <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent">
            <div className="max-w-full px-5 mx-auto ">
                <div className="flex justify-between items-center h-24">
                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <span className="text-2xl font-bold tracking-tight text-primary">snaillia<span className="text-xs align-top ml-0.5">TM</span></span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-12">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={cn(
                                    "text-sm font-semibold transition-colors hover:text-black/70",
                                    location.pathname === link.path ? "text-black border-b-2 border-primary pb-1" : "text-black/80"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop Right Icons */}
                    <div className="hidden md:flex items-center space-x-6">
                        <button className="p-2 text-black hover:opacity-70 transition-opacity">
                            <Search size={22} />
                        </button>
                        <button className="p-2 text-black hover:opacity-70 transition-opacity">
                            <ShoppingBag size={22} />
                        </button>
                        <button className="p-2 text-black hover:opacity-70 transition-opacity">
                            <User size={22} />
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 text-black"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white/95 backdrop-blur-lg border-b border-gray-100 overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={cn(
                                        "block px-3 py-4 text-base font-medium transition-colors",
                                        location.pathname === link.path ? "text-primary bg-accent/50 rounded-lg" : "text-muted-foreground"
                                    )}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="flex items-center space-x-6 pt-4 px-3 border-t border-gray-100 mt-4">
                                <button className="text-muted-foreground"><Search size={20} /></button>
                                <button className="text-muted-foreground"><ShoppingBag size={20} /></button>
                                <button className="text-muted-foreground"><User size={20} /></button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
