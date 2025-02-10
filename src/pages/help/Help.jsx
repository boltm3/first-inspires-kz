function Help() {
  return (
    <div className="p-8 bg-gray-50">
      {/* Тақырып бөлімі */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-extrabold text-gray-800">
          Біз қалай көмектесе аламыз?
        </h2>
      </div>

      {/* Кіріспе бөлімі */}
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <p className="text-gray-700 text-lg leading-relaxed">
          Платформаны пайдалану бойынша көмек қажет пе немесе кері байланыс 
          қалдырғыңыз келе ме? Біз сізге көмектесуге дайынбыз. Төмендегі 
          ресурстарды қарап шығыңыз немесе тікелей хабарласыңыз.
        </p>
      </div>

      {/* Негізгі бөлім */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Анықтама орталығы */}
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all">
          <h4 className="text-lg font-semibold text-gray-800 mb-2">
            Анықтама орталығы
          </h4>
          <p className="text-gray-700">
            Жиі қойылатын сұрақтар, ақауларды жою бойынша кеңестер мен 
            нұсқаулықтарды қараңыз.
          </p>
        </div>

        {/* Қолдау қызметіне хабарласу */}
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all">
          <h4 className="text-lg font-semibold text-gray-800 mb-2">
            Қолдау қызметіне хабарласу
          </h4>
          <p className="text-gray-700">
            Техникалық немесе аккаунтқа қатысты мәселелер бойынша тікелей 
            көмек алыңыз.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Help;
