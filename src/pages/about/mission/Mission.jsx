
function Mission() {
  return (
    <div className="p-8">
      {/* Тақырып бөлімі */}
      <h3 className="text-3xl text-center font-bold mb-6">
        Біздің Миссиямыз және Көзқарасымыз
      </h3>

      {/* Миссия мәлімдемесі */}
      <p className="text-xl mb-4">
        Баршаға жарқын болашақ құру үшін жастарды STEM арқылы қолдау.
      </p>

      <p className="text-lg mb-4">
        <strong>Біздің Миссиямыз</strong>: Жастарды STEM білімі арқылы дағдыларды дамытуға, сенімділік пен төзімділікке шабыттандыру. Біз робототехника жарыстары сияқты платформалар ұсынып, командалық жұмыс арқылы мәселелерді шешуді үйретеміз.
      </p>

      <p className="text-lg mb-4">
        <strong>Біздің Көзқарасымыз</strong>: Әр бала жаңашыл және көшбасшы болуға мүмкіндік алатын әлем құру.
      </p>

      {/* Негізгі құндылықтар бөлімі */}
      <h4 className="text-lg font-semibold mb-4">
        <strong>Негізгі Құндылықтар</strong>
      </h4>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {['Жаңалық ашу', 'Инновация', 'Әсер', 'Командалық жұмыс', 'Инклюзия', 'Қуаныш'].map((value) => (
          <div key={value} className="p-4 bg-gray-100 rounded-lg">
            <h5 className="text-xl font-semibold">{value}</h5>
            <p className="text-base">
              {value === 'Жаңалық ашу' && 'Жаңа дағдылар мен идеяларды зерттеу.'}
              {value === 'Инновация' && 'Шығармашылық пен жаңашылдықты қолдау.'}
              {value === 'Әсер' && 'STEM арқылы қоғамға оң әсер ету.'}
              {value === 'Командалық жұмыс' && 'Сәттіліктің кілті – ынтымақтастық.'}
              {value === 'Инклюзия' && 'Әртүрлі ортадан келген адамдарды қарсы алу.'}
              {value === 'Қуаныш' && 'Оқу мен даму процесінде көңілді болу.'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mission;
