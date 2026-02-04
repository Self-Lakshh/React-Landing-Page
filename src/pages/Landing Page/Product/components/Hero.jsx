import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-[100vh] pt-24 flex items-center overflow-hidden snaillia-bg">
            {/* Background Decorative Text */}
            <div className="absolute lg:right-[-14%] top-1/2 -translate-y-1/2 -rotate-90 select-none pointer-events-none">
                <span className="text-[100px] lg:text-[150px] font-black text-primary/5 tracking-tighter leading-none">
                    faceoil
                </span>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
                    {/* Hero Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="lg:col-span-2"
                    >
                        <h1 className="text-7xl lg:text-8xl font-black text-primary tracking-tight mb-6 leading-none">
                            snaillia
                        </h1>
                        <h2 className="text-xl font-semibold text-primary/80 mb-6 italic">Natural Inner Beauty</h2>
                        <p className="text-muted-foreground text-sm max-w-lg mb-10 leading-relaxed">
                            Provide deluxe hydration for these with dry or age related skin concerns. This add intensive moisture to be hydrated on their person, providing smooth skin collagen for beauty inspiration natural radiance.
                        </p>

                        <div className="flex flex-col sm:row gap-4 mb-10">
                            <div className="text-sm font-semibold text-primary mb-2">Size:</div>
                            <div className="flex gap-4">
                                <label className="flex items-center space-x-2 cursor-pointer group">
                                    <input type="radio" name="size" className="hidden" defaultChecked />
                                    <div className="w-5 h-5 rounded-full border-2 border-primary/20 flex items-center justify-center group-hover:border-primary transition-colors">
                                        <div className="w-2.5 h-2.5 rounded-full bg-primary opacity-0 radio-checked:opacity-100 transition-opacity"></div>
                                    </div>
                                    <span className="text-sm text-muted-foreground">Small</span>
                                </label>
                                <label className="flex items-center space-x-2 cursor-pointer group">
                                    <input type="radio" name="size" className="hidden" />
                                    <div className="w-5 h-5 rounded-full border-2 border-primary/20 flex items-center justify-center group-hover:border-primary transition-colors">
                                        <div className="w-2.5 h-2.5 rounded-full bg-primary opacity-0 radio-checked:opacity-100 transition-opacity"></div>
                                    </div>
                                    <span className="text-sm text-muted-foreground">Large</span>
                                </label>
                            </div>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-lg font-bold text-sm hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
                        >
                            Add to your cart
                            <ShoppingCart size={18} className="ml-2" />
                        </motion.button>

                    </motion.div>

                    {/* Hero Image / Product Visualization */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: 50 }}
                        animate={{ opacity: 1, scale: 1.15, x: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="relative flex items-center justify-center lg:col-span-3 lg:translate-x-8 mt-12 lg:mt-0 w-[55%] sm:w-[65%] md:w-[90%] lg:w-[100%]  mx-auto"
                    >
                        <img
                            src="/img/mockup1.png"
                            alt="Snaillia Product Mockup"
                            className="w-full h-auto object-contain relative drop-shadow-[0_30px_60px_rgba(0,0,0,0.25)]"
                        />
                    </motion.div>
                </div>
            </div>
            {/* Custom radio style inline to avoid external file for now */}
            <style dangerouslySetInnerHTML={{
                __html: `
                input[type="radio"]:checked + div > div {
                    opacity: 1;
                }
            `}} />
        </section>
    );
};

export default Hero;
