import { motion } from 'framer-motion';

const ProductCategories = () => {
    const categories = [
        { name: "Cream", icon: "🧴" },
        { name: "Serum", icon: "💧" },
        { name: "Lotion", icon: "🥛" },
        { name: "Sunscreen", icon: "☀️" },
        { name: "Coconut Oil", icon: "🥥" }
    ];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-primary mb-4 tracking-tight uppercase">OUR PRODUCTS</h2>
                </div>

                <div className="flex flex-wrap justify-center gap-12 lg:gap-24">
                    {categories.map((cat, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ scale: 1.1 }}
                            className="flex flex-col items-center group cursor-pointer"
                        >
                            <div className="w-24 h-24 rounded-full bg-accent flex items-center justify-center text-3xl mb-4 group-hover:bg-primary/10 transition-colors shadow-sm border border-primary/5">
                                {cat.icon}
                            </div>
                            <span className="text-sm font-bold text-muted-foreground group-hover:text-primary transition-colors uppercase tracking-widest">{cat.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductCategories;
