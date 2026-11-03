export default function HomePage() {
  return (
    <>
      {/* Шапка */}
      <header className="bg-white py-3 ">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-4">
          <p className="text-2xl font-bold">BOXPACK</p>
          <div className="hidden gap-8 text-sm md:flex ">
          <a href="" className="">Услуги</a>
          <a href="" className="">Как это работает</a>
          <a href="" className="">Видеофиксация</a>
          <a href="" className="">Калькулятор</a>
          <a href="" className="">Кейсы</a>
          <a href="" className="">Контакты</a>
          </div>
        </div>
      </header>
  <section className="bg-[#1a2a52] py-16 text-white">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-4 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
              Автоматизированный фулфилмент
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
              Фулфилмент,<br />который держит<br />сроки и репутацию
            </h1>
            <p className="mt-6 max-w-md text-sm text-gray-300">
              Автоматизированная упаковка, видеоконтроль каждого заказа и отправка в день поступления. Мы берем на себя хранение, сборку, маркировку и логистику.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#" className="text-sm font-bold">
                Рассчитать стоимость →
              </a>
              <button className="rounded-[5px] border border-white px-5 py-2 text-sm font-bold hover:bg-white hover:text-[#1a2a52]">
                Получить консультацию
              </button>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[8px] bg-white/10 p-4">
                <img src="img/1.svg" alt="" />
                <p className="text-lg font-bold">5000+</p>
                <p className="text-xs text-gray-400">заказов в день</p>
              </div>
              <div className="rounded-[8px] bg-white/10 p-4">
                <p className="text-lg font-bold">99.8%</p>
                <p className="text-xs text-gray-400">точность сборки</p>
              </div>
              <div className="rounded-[8px] bg-white/10 p-4">
                <p className="text-lg font-bold">FBO/FBS</p>
                <p className="text-xs text-gray-400">все маркетплейсы</p>
              </div>
            </div>
          </div>

          <div className="flex aspect-video items-center justify-center rounded-[10px] bg-[#e5e7eb]">
            <p className="text-sm text-[#1a2a52]">Видео автоматической упаковочной линии</p>
          </div>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="mx-auto max-w-[1200px] px-4">
          <h2 className="text-center text-3xl font-bold">Как начать работать с нами</h2>
          <p className="mx-auto mt-3 max-w-lg text-center text-sm text-gray-500">
            Подключение занимает всего несколько дней. Все процессы максимально автоматизированы.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-[10px] bg-[#f0f0f0] p-6 ">
              <p className="text-xs font-bold">ШАГ 1</p>
              <h3 className="mt-2 text-sm font-bold">Оставляете заявку</h3>
              <p className="mt-1 text-xs text-gray-500">Через сайт или Telegram</p>
            </div>
            <div className="rounded-[10px] bg-[#f0f0f0] p-6">
              <p className="text-xs font-bold">ШАГ 2</p>
              <h3 className="mt-2 text-sm font-bold">Получаете расчет</h3>
              <p className="mt-1 text-xs text-gray-500">Подбор тарифа и формат работы</p>
            </div>
            <div className="rounded-[10px] bg-[#f0f0f0] p-6">
              <p className="text-xs font-bold">ШАГ 3</p>
              <h3 className="mt-2 text-sm font-bold">Подписываем договор</h3>
              <p className="mt-1 text-xs text-gray-500">Через ЭДО</p>
            </div>
            <div className="rounded-[10px] bg-[#f0f0f0] p-6">
              <p className="text-xs font-bold">ШАГ 4</p>
              <h3 className="mt-2 text-sm font-bold">Принимаем товар</h3>
              <p className="mt-1 text-xs text-gray-500">От поставщика или транспортной компании</p>
            </div>
            <div className="rounded-[10px] bg-[#f0f0f0] p-6">
              <p className="text-xs font-bold">ШАГ 5</p>
              <h3 className="mt-2 text-sm font-bold">Автоматизированная упаковка</h3>
              <p className="mt-1 text-xs text-gray-500">С видеоконтролем каждого этапа</p>
            </div>
            <div className="rounded-[10px] bg-[#f0f0f0] p-6">
              <p className="text-xs font-bold">ШАГ 6</p>
              <h3 className="mt-2 text-sm font-bold">Отправляем</h3>
              <p className="mt-1 text-xs text-gray-500">На маркетплейсы по всей России</p>
            </div>
            <div className="rounded-[10px] bg-[#f0f0f0] p-6">
              <p className="text-xs font-bold">ШАГ 7</p>
              <h3 className="mt-2 text-sm font-bold">Получаете результат</h3>
              <p className="mt-1 text-xs text-gray-500">Отчеты и подробную статистику</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#f8f8f8] py-16">
        <div className="mx-auto max-w-[1200px] px-4">
          <h2 className="text-center text-3xl font-bold">Услуги фулфилмента</h2>
          <p className="mx-auto mt-3 max-w-lg text-center text-sm text-gray-500">
            Полный цикл обработки товара от приемки до доставки.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-[10px] border-t-4 border-[#5bbde6] bg-white p-6 shadow-sm">
              <h3 className="text-sm font-bold">Приемка и сортировка</h3>
              <p className="mt-2 text-xs text-gray-500">
                Принимаем поставки любого объема и размещаем товар на адресное хранение.
              </p>
            </div>
            <div className="rounded-[10px] border-t-4 border-[#5bbde6] bg-white p-6 shadow-sm">
              <h3 className="text-sm font-bold">Проверка на брак</h3>
              <p className="mt-2 text-xs text-gray-500">
                Контроль качества перед отправкой покупателю.
              </p>
            </div>
            <div className="rounded-[10px] border-t-4 border-[#5bbde6] bg-white p-6 shadow-sm">
              <h3 className="text-sm font-bold">Автоматизированная упаковка</h3>
              <p className="mt-2 text-xs text-gray-500">
                Автоматические линии и видеоконтроль каждого заказа.
              </p>
            </div>
            <div className="rounded-[10px] border-t-4 border-[#5bbde6] bg-white p-6 shadow-sm">
              <h3 className="text-sm font-bold">Сборка заказов</h3>
              <p className="mt-2 text-xs text-gray-500">
                Быстрая комплектация заказов по данным маркетплейсов.
              </p>
            </div>
            <div className="rounded-[10px] border-t-4 border-[#5bbde6] bg-white p-6 shadow-sm">
              <h3 className="text-sm font-bold">Отправка на маркетплейсы</h3>
              <p className="mt-2 text-xs text-gray-500">
                FBO и FBS для всех крупных площадок.
              </p>
            </div>
            <div className="rounded-[10px] border-t-4 border-[#5bbde6] bg-white p-6 shadow-sm">
              <h3 className="text-sm font-bold">Хранение товаров</h3>
              <p className="mt-2 text-xs text-gray-500">
                Безопасное адресное хранение продукции.
              </p>
            </div>
            <div className="rounded-[10px] border-t-4 border-[#5bbde6] bg-white p-6 shadow-sm">
              <h3 className="text-sm font-bold">Интеграции</h3>
              <p className="mt-2 text-xs text-gray-500">
                Синхронизация с маркетплейсами и CRM.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="bg-[#1a2a52] py-16 text-white">
        <div className="mx-auto max-w-[1200px] px-4">
          <h2 className="text-center text-3xl font-bold">Почему выбирают BOXPACK</h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-[10px] bg-white/10 p-6">
              <h3 className="text-sm font-bold">Скорость</h3>
              <p className="mt-2 text-xs text-gray-400">
                До 20 000 товаров за смену и отправка день в день.
              </p>
            </div>
            <div className="rounded-[10px] bg-white/10 p-6">
              <h3 className="text-sm font-bold">Точность</h3>
              <p className="mt-2 text-xs text-gray-400">
                99.8% точность сборки благодаря автоматизации.
              </p>
            </div>
            <div className="rounded-[10px] bg-white/10 p-6">
              <h3 className="text-sm font-bold">Надежность</h3>
              <p className="mt-2 text-xs text-gray-400">
                Страхование товара и круглосуточный контроль.
              </p>
            </div>
            <div className="rounded-[10px] bg-white/10 p-6">
              <h3 className="text-sm font-bold">Поддержка</h3>
              <p className="mt-2 text-xs text-gray-400">
                Персональный менеджер и оперативная помощь.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
);
}