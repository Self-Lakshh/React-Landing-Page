import { motion } from 'framer-motion';

const WhySnaillia = () => {
    const features = [
        { title: "Natural", desc: "Yourself required no thoughts deluxe natural line.", icon: "🍃" },
        { title: "No Side effect", desc: "Yourself required no thoughts deluxe natural line.", icon: "✨" },
        { title: "100% Organic", desc: "Yourself required no thoughts deluxe natural line.", icon: "🌿" }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-primary mb-4 tracking-tight uppercase">WHY SNAILLIA?</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto italic">
                        Your self required no at thoughts delicate radiant loss. Branched dashwood do is whatever it. Farther be chapter at shifted myriad in it praised.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -10 }}
                            className="text-center p-8 rounded-2xl bg-accent/30 border border-primary/5 transition-all"
                        >
                            <div className="text-4xl mb-6 flex justify-center">{feature.icon}</div>
                            <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhySnaillia;
