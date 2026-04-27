import { useInView, motion } from "framer-motion";
import { useRef } from "react";

const tasks = [
  "Проанализировать существующие методики выбора режимов резания",
  "Изучить влияние скорости резания, подачи и глубины на стойкость инструмента",
  "Исследовать связь режимов обработки с качеством поверхности (шероховатостью)",
  "Провести экспериментальные исследования",
  "Разработать практические рекомендации по оптимизации режимов",
];

const methods = [
  "Теоретический анализ литературы",
  "Экспериментальные исследования",
  "Статистическая обработка данных",
  "Сравнительный анализ результатов",
];

export default function Introduction() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-white px-6 py-24" id="introduction">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="uppercase text-xs tracking-widest text-neutral-400 mb-3">Раздел 0</p>
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-8">Введение</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="uppercase text-xs tracking-widest text-neutral-400 mb-4">Актуальность</h3>
            <p className="text-lg text-neutral-700 leading-relaxed mb-8">
              Токарная обработка конструкционных сталей — ключевой процесс в машиностроении. Оптимизация режимов резания позволяет повысить производительность, снизить себестоимость и улучшить качество продукции.
            </p>

            <h3 className="uppercase text-xs tracking-widest text-neutral-400 mb-4">Цель</h3>
            <p className="text-lg text-neutral-700 leading-relaxed mb-8">
              Разработать методику выбора оптимальных режимов токарной обработки конструкционных сталей, обеспечивающую максимальную стойкость инструмента и требуемое качество поверхности.
            </p>

            <h3 className="uppercase text-xs tracking-widest text-neutral-400 mb-4">Объект и предмет</h3>
            <p className="text-neutral-700 leading-relaxed mb-2">
              <span className="font-semibold">Объект:</span> процесс токарной обработки конструкционных сталей.
            </p>
            <p className="text-neutral-700 leading-relaxed">
              <span className="font-semibold">Предмет:</span> влияние режимов резания на стойкость инструмента и качество обработанной поверхности.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="uppercase text-xs tracking-widest text-neutral-400 mb-4">Задачи</h3>
            <ol className="flex flex-col gap-3 mb-10">
              {tasks.map((task, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="text-neutral-300 font-bold text-lg leading-tight shrink-0">{i + 1}.</span>
                  <span className="text-neutral-700 leading-relaxed">{task}</span>
                </li>
              ))}
            </ol>

            <h3 className="uppercase text-xs tracking-widest text-neutral-400 mb-4">Методы исследования</h3>
            <ul className="flex flex-col gap-3">
              {methods.map((m, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-neutral-900 rounded-full shrink-0"></span>
                  <span className="text-neutral-700">{m}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
