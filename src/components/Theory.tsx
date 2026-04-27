import { useInView, motion } from "framer-motion";
import { useRef } from "react";

const cuttingParams = [
  {
    param: "Скорость резания V",
    unit: "м/мин",
    effect: "Влияет на температуру в зоне резания и износ инструмента",
    range: "50–200",
  },
  {
    param: "Подача S",
    unit: "мм/об",
    effect: "Определяет шероховатость поверхности",
    range: "0.05–0.7",
  },
  {
    param: "Глубина резания t",
    unit: "мм",
    effect: "Влияет на силы резания и вибрации",
    range: "0.2–3.0",
  },
];

const feedRecs = [
  { type: "Черновая", s: "0,4–0,7 мм/об", t: "2–3 мм" },
  { type: "Получистовая", s: "0,1–0,4 мм/об", t: "0,5–2 мм" },
  { type: "Чистовая", s: "< 0,1 мм/об", t: "≤ 0,5 мм" },
];

export default function Theory() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-neutral-50 px-6 py-24" id="theory">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="uppercase text-xs tracking-widest text-neutral-400 mb-3">Раздел 1–2</p>
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-900">
            Теоретические основы
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="uppercase text-xs tracking-widest text-neutral-400 mb-4">
              1.1 Конструкционные стали
            </h3>
            <p className="text-neutral-700 leading-relaxed mb-6">
              Стали Ст3, 45, 40Х — основные материалы машиностроения с характеристиками:
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex justify-between border-b border-neutral-200 pb-3">
                <span className="text-neutral-500 text-sm">Предел прочности σ<sub>в</sub></span>
                <span className="font-semibold text-neutral-900">400–800 МПа</span>
              </div>
              <div className="flex justify-between border-b border-neutral-200 pb-3">
                <span className="text-neutral-500 text-sm">Предел текучести σ<sub>т</sub></span>
                <span className="font-semibold text-neutral-900">200–600 МПа</span>
              </div>
              <div className="flex justify-between border-b border-neutral-200 pb-3">
                <span className="text-neutral-500 text-sm">Твёрдость</span>
                <span className="font-semibold text-neutral-900">150–250 HB</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="uppercase text-xs tracking-widest text-neutral-400 mb-4">
              1.3–1.4 Стойкость и качество
            </h3>
            <p className="text-neutral-700 leading-relaxed mb-4">
              <span className="font-semibold">Стойкость T (мин)</span> — время работы до критического износа (0,3–0,5 мм по задней поверхности). Зависит от: материала инструмента, режимов резания, применения СОЖ.
            </p>
            <p className="text-neutral-700 leading-relaxed mb-4">
              <span className="font-semibold">Качество поверхности</span> оценивается по:
            </p>
            <ul className="flex flex-col gap-2">
              {["Шероховатость Ra (мкм)", "Остаточные напряжения", "Структура поверхностного слоя"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-neutral-700">
                  <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <h3 className="uppercase text-xs tracking-widest text-neutral-400 mb-6">
            2. Анализ влияния режимов резания
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-neutral-900">
                  <th className="pb-3 pr-6 text-sm font-semibold text-neutral-900">Параметр</th>
                  <th className="pb-3 pr-6 text-sm font-semibold text-neutral-900">Единица</th>
                  <th className="pb-3 pr-6 text-sm font-semibold text-neutral-900">Влияние</th>
                  <th className="pb-3 text-sm font-semibold text-neutral-900">Диапазон (тв. сплав)</th>
                </tr>
              </thead>
              <tbody>
                {cuttingParams.map((row, i) => (
                  <tr key={i} className="border-b border-neutral-100">
                    <td className="py-4 pr-6 font-medium text-neutral-900 whitespace-nowrap">{row.param}</td>
                    <td className="py-4 pr-6 text-neutral-500 whitespace-nowrap">{row.unit}</td>
                    <td className="py-4 pr-6 text-neutral-700">{row.effect}</td>
                    <td className="py-4 text-neutral-900 font-semibold whitespace-nowrap">{row.range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="uppercase text-xs tracking-widest text-neutral-400 mb-6">
            Рекомендуемые режимы по типу обработки
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {feedRecs.map((rec, i) => (
              <div key={i} className="bg-white border border-neutral-200 p-6">
                <h4 className="font-bold text-neutral-900 mb-4 text-lg">{rec.type}</h4>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-500">Подача S</span>
                    <span className="font-medium text-neutral-900">{rec.s}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-500">Глубина t</span>
                    <span className="font-medium text-neutral-900">{rec.t}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-neutral-500 text-sm">
            Формула стойкости: <span className="font-mono text-neutral-900">V · T<sup>m</sup> = C</span>, где m — показатель стойкости, C — константа материала.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
