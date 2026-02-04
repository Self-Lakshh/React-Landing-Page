import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="col-span-1">
                        <Link to="/" className="text-2xl font-bold tracking-tight text-primary mb-6 block">
                            snaillia<span className="text-xs align-top ml-0.5">TM</span>
                        </Link>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                            Experience the power of snail secretion filtrate. Natural inner beauty delivered through science and nature's finest ingredients.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="p-2 bg-accent rounded-full text-primary hover:bg-primary hover:text-accent transition-all">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="p-2 bg-accent rounded-full text-primary hover:bg-primary hover:text-accent transition-all">
                                <Twitter size={18} />
                            </a>
                            <a href="#" className="p-2 bg-accent rounded-full text-primary hover:bg-primary hover:text-accent transition-all">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="p-2 bg-accent rounded-full text-primary hover:bg-primary hover:text-accent transition-all">
                                <Linkedin size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            <li><Link to="/products" className="text-muted-foreground text-sm hover:text-primary transition-colors">Our Products</Link></li>
                            <li><Link to="/story" className="text-muted-foreground text-sm hover:text-primary transition-colors">Our Story</Link></li>
                            <li><Link to="/manufacturing" className="text-muted-foreground text-sm hover:text-primary transition-colors">Manufacturing</Link></li>
                            <li><Link to="/packaging" className="text-muted-foreground text-sm hover:text-primary transition-colors">Packaging</Link></li>
                            <li><Link to="/team" className="text-muted-foreground text-sm hover:text-primary transition-colors">Our Team</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider mb-6">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3 text-muted-foreground text-sm">
                                <MapPin size={18} className="mt-0.5 text-primary shrink-0" />
                                <span>1234 Snake Road, Suite 500, Santa Monica, CA, USA</span>
                            </li>
                            <li className="flex items-center space-x-3 text-muted-foreground text-sm">
                                <Phone size={18} className="text-primary shrink-0" />
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center space-x-3 text-muted-foreground text-sm">
                                <Mail size={18} className="text-primary shrink-0" />
                                <span>hello@snaillia.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider mb-6">Join Our Newsletter</h4>
                        <p className="text-muted-foreground text-sm mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Enter email"
                                className="bg-accent border-none rounded-lg px-4 py-2 text-sm w-full focus:ring-1 focus:ring-primary outline-none"
                            />
                            <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
                                Join
                            </button>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-muted-foreground">© 2024 Snaillia. All rights reserved.</p>
                    <div className="flex space-x-6">
                        <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
                        <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
                        <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
