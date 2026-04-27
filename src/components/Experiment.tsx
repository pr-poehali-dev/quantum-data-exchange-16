import { useInView, motion } from "framer-motion";
import { useRef } from "react";

const experiments = [
  { n: 1, v: 80, s: 0.2, t: 1.5, T: 30, Ra: 3.2 },
  { n: 2, v: 120, s: 0.2, t: 1.5, T: 20, Ra: 2.5 },
  { n: 3, v: 160, s: 0.2, t: 1.5, T: 10, Ra: 1.6 },
  { n: 4, v: 120, s: 0.1, t: 1.5, T: 25, Ra: 1.2 },
  { n: 5, v: 120, s: 0.4, t: 1.5, T: 15, Ra: 4.0 },
];

const procedure = [
  "Установка заготовки и инструмента",
  "Задание режимов резания",
  "Обработка образца (длина прохода 200 мм)",
  "Измерение износа инструмента и шероховатости",
  "Повторение для разных режимов",
];

export default function Experiment() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const maxT = Math.max(...experiments.map((e) => e.T));

  return (
    <section className="bg-white px-6 py-24" id="experiment">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="uppercase text-xs tracking-widest text-neutral-400 mb-3">Раздел 3</p>
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-900">
            Экспериментальная часть
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="uppercase text-xs tracking-widest text-neutral-400 mb-6">
              3.1 Оборудование и материалы
            </h3>
            <div className="flex flex-col gap-4">
              {[
                { label: "Станок", value: "Токарно-винторезный 16К20" },
                { label: "Инструмент", value: "Твердосплавные пластины Т15К6, ВК8" },
                { label: "Заготовки", value: "Сталь 45 (σв = 600 МПа, HB = 180)" },
                { label: "Измерения", value: "Профилометр (Ra), микрометр, штангенциркуль" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-1 border-b border-neutral-100 pb-4">
                  <span className="text-xs uppercase tracking-wide text-neutral-400">{item.label}</span>
                  <span className="text-neutral-900 font-medium">{item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="uppercase text-xs tracking-widest text-neutral-400 mb-6">
              3.3 Методика проведения
            </h3>
            <ol className="flex flex-col gap-4">
              {procedure.map((step, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-neutral-900 text-white text-xs font-bold shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span className="text-neutral-700 leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <h3 className="uppercase text-xs tracking-widest text-neutral-400 mb-6">
            3.2 План экспериментов
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-neutral-900">
                  {["Опыт", "V, м/мин", "S, мм/об", "t, мм", "T, мин", "Ra, мкм"].map((h) => (
                    <th key={h} className="pb-3 pr-6 text-sm font-semibold text-neutral-900 whitespace-nowrap">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {experiments.map((row, i) => (
                  <motion.tr
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.07 }}
                    className="border-b border-neutral-100 hover:bg-neutral-50 transition-colors"
                  >
                    <td className="py-4 pr-6 font-bold text-neutral-900">{row.n}</td>
                    <td className="py-4 pr-6 text-neutral-700">{row.v}</td>
                    <td className="py-4 pr-6 text-neutral-700">{row.s}</td>
                    <td className="py-4 pr-6 text-neutral-700">{row.t}</td>
                    <td className="py-4 pr-6 font-semibold text-neutral-900">{row.T}</td>
                    <td className="py-4 text-neutral-700">{row.Ra}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="uppercase text-xs tracking-widest text-neutral-400 mb-6">
            4. Анализ результатов — стойкость T vs скорость V
          </h3>
          <div className="flex flex-col gap-3">
            {experiments.slice(0, 3).map((e, i) => (
              <div key={i} className="flex items-center gap-4">
                <span className="text-sm text-neutral-500 w-28 shrink-0">V = {e.v} м/мин</span>
                <div className="flex-1 bg-neutral-100 rounded-sm h-8 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${(e.T / maxT) * 100}%` } : {}}
                    transition={{ duration: 0.8, delay: 0.6 + i * 0.1 }}
                    className="h-full bg-neutral-900 flex items-center justify-end pr-3"
                  >
                    <span className="text-white text-xs font-bold">{e.T} мин</span>
                  </motion.div>
                </div>
              </div>
            ))}
            <p className="text-neutral-500 text-sm mt-2">
              Снижение V с 160 до 80 м/мин увеличивает стойкость в 3 раза: T=10 → T=30 мин.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
