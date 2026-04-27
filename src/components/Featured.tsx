export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="/images/woman-horse.jpg"
          alt="Woman on horse in countryside"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1" id="research">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Ключевые направления исследования</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Скорость резания, подача и глубина — три параметра, которые определяют стойкость инструмента и шероховатость поверхности. Исследование выявляет оптимальные сочетания режимов для сталей марок Ст3, 45 и 40Х.
        </p>
        <div className="flex flex-col gap-3 mb-8">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-neutral-900 rounded-full shrink-0"></span>
            <span className="text-neutral-700">Анализ износа режущего инструмента (твердосплав Т15К6)</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-neutral-900 rounded-full shrink-0"></span>
            <span className="text-neutral-700">Измерение шероховатости поверхности Ra по ГОСТ 2789</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-neutral-900 rounded-full shrink-0"></span>
            <span className="text-neutral-700">Построение зависимостей T=f(v,s,t) для каждой марки стали</span>
          </div>
        </div>
        <button className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Методология
        </button>
      </div>
    </div>
  );
}