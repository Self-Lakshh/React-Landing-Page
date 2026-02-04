import { motion } from 'framer-motion';

const AboutUs = () => {
    return (
        <section className="py-24 bg-accent/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative lg:sticky lg:top-24">
                        <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-white border border-primary/10 shadow-xl relative z-10">
                            <img
                                src="/img/mockup2.png"
                                alt="Snaillia Natural Product"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl font-black text-primary mb-8 tracking-tighter uppercase">ABOUT US</h2>
                        <p className="text-muted-foreground text-lg mb-8 leading-relaxed italic">
                            And produce say the ten moments parties. Simple innate sunmer fat appear basket his doze joy. Ostward clothes promise of gravity no red toil. Sufficient purity pair impossible to reasonable expression is. Yet preference connection unpleasant yet melancholy but and appearance. And excellence particularly estimated terminated day everything.
                        </p>
                        <div className="flex gap-4">
                            <button className="px-8 py-3 bg-primary text-white rounded-lg font-bold text-sm hover:opacity-90 transition-opacity whitespace-nowrap">
                                Buy Now
                            </button>
                            <button className="px-8 py-3 bg-primary/10 text-primary border border-primary/10 rounded-lg font-bold text-sm hover:bg-primary/20 transition-all whitespace-nowrap">
                                View Details
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
