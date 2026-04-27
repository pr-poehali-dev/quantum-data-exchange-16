import { useScroll, useTransform, motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  {
    value: "×3",
    label: "рост стойкости инструмента при оптимальных режимах",
  },
  {
    value: "Ra 0.8",
    label: "мкм — минимальная шероховатость поверхности в эксперименте",
  },
  {
    value: "18",
    label: "комбинаций режимов резания исследовано в ходе работы",
  },
  {
    value: "3",
    label: "марки конструкционной стали: Ст3, Сталь 45, 40Х",
  },
];

function StatCard({ value, label, index }: { value: string; label: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="flex flex-col gap-3 border-t border-neutral-200 pt-6"
    >
      <span className="text-5xl md:text-6xl font-bold text-neutral-900 tracking-tight">
        {value}
      </span>
      <span className="text-sm md:text-base text-neutral-500 leading-snug">
        {label}
      </span>
    </motion.div>
  );
}

export default function Stats() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

  return (
    <section ref={container} className="bg-neutral-50 px-6 py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div style={{ x }} className="mb-16">
          <p className="uppercase text-xs tracking-widest text-neutral-400 mb-3">
            Цифры исследования
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 leading-tight max-w-2xl">
            Результаты в числах
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((s, i) => (
            <StatCard key={i} value={s.value} label={s.label} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
