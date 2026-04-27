import { useInView, motion } from "framer-motion";
import { useRef } from "react";

const recommendations = [
  {
    type: "Черновая обработка",
    priority: "Приоритет — производительность",
    params: [
      { k: "V", v: "80–100 м/мин" },
      { k: "S", v: "0,4–0,6 мм/об" },
      { k: "t", v: "2–3 мм" },
    ],
  },
  {
    type: "Чистовая обработка",
    priority: "Приоритет — качество поверхности",
    params: [
      { k: "V", v: "150–200 м/мин" },
      { k: "S", v: "0,05–0,1 мм/об" },
      { k: "t", v: "0,2–0,5 мм" },
    ],
  },
];

const conclusions = [
  "Скорость резания наиболее сильно влияет на стойкость инструмента",
  "Подача определяет шероховатость поверхности Ra",
  "Глубина резания должна учитывать жёсткость системы",
];

const prospects = [
  "Расширение исследования на другие марки сталей",
  "Применение компьютерного моделирования",
  "Автоматизация выбора режимов",
];

const references = [
  "ГОСТ 18878-73. Резцы токарные проходные.",
  "Справочник технолога-машиностроителя / Под ред. А. М. Дальского. — М.: Машиностроение, 2003.",
  "Бобров В. Ф. Основы теории резания металлов. — М.: Машиностроение, 1975.",
  "Грановский Г. И., Грановский В. Г. Резание металлов. — М.: Высшая школа, 1985.",
];

export default function Conclusion() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-neutral-50 px-6 py-24" id="conclusion">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="uppercase text-xs tracking-widest text-neutral-400 mb-3">Раздел 5</p>
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-900">
            Рекомендации и заключение
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <h3 className="uppercase text-xs tracking-widest text-neutral-400 mb-6">
            5. Практические рекомендации
          </h3>
          <div className="grid sm:grid-cols-2 gap-6 mb-6">
            {recommendations.map((rec, i) => (
              <div key={i} className="bg-white border border-neutral-200 p-8">
                <h4 className="font-bold text-neutral-900 text-xl mb-1">{rec.type}</h4>
                <p className="text-xs text-neutral-400 uppercase tracking-wide mb-6">{rec.priority}</p>
                <div className="flex flex-col gap-3">
                  {rec.params.map((p) => (
                    <div key={p.k} className="flex justify-between border-b border-neutral-100 pb-3">
                      <span className="text-neutral-500 font-mono">{p.k}</span>
                      <span className="font-semibold text-neutral-900">{p.v}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="bg-neutral-900 text-white p-6">
            <p className="text-sm">
              Применение СОЖ снижает температуру и увеличивает стойкость инструмента на{" "}
              <span className="font-bold text-lg">20–30%</span>. Контроль износа: регулярная проверка задней поверхности (допуск 0,3 мм).
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="uppercase text-xs tracking-widest text-neutral-400 mb-6">Выводы</h3>
            <ul className="flex flex-col gap-4">
              {conclusions.map((c, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span className="flex items-center justify-center w-6 h-6 border-2 border-neutral-900 text-neutral-900 text-xs font-bold shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span className="text-neutral-700 leading-relaxed">{c}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="uppercase text-xs tracking-widest text-neutral-400 mb-6">Перспективы</h3>
            <ul className="flex flex-col gap-4">
              {prospects.map((p, i) => (
                <li key={i} className="flex items-center gap-3 text-neutral-700">
                  <span className="w-2 h-2 bg-neutral-400 rounded-full shrink-0"></span>
                  {p}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="uppercase text-xs tracking-widest text-neutral-400 mb-6">Список литературы</h3>
          <ol className="flex flex-col gap-3">
            {references.map((ref, i) => (
              <li key={i} className="flex gap-3 text-neutral-700 text-sm leading-relaxed">
                <span className="text-neutral-400 shrink-0">{i + 1}.</span>
                {ref}
              </li>
            ))}
          </ol>
        </motion.div>
      </div>
    </section>
  );
}
