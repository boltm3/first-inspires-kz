const History = () => {
  return (
    <div className="p-8">
      <h3 className="text-3xl font-semibold text-center mb-4">Біздің Тарихымыз</h3>
      <p className="text-lg text-center text-gray-600 mb-8">
        Бір идеядан жаһандық қозғалысқа дейінгі жолымыз.
      </p>

      <div className="mt-8">
        <h5 className="text-2xl font-semibold mb-4">FIRST Дамуының Белесcтері</h5>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>1989:</strong> Дин Кеймен FIRST ұйымын құрды.</li>
          <li><strong>1992:</strong> FIRST Robotics Competition (FRC) іске қосылды.</li>
          <li><strong>1998:</strong> K-8 оқушыларына арналған FIRST LEGO League (FLL) енгізілді.</li>
          <li><strong>2005:</strong> 7-12 сыныптарға арналған FIRST Tech Challenge (FTC) енгізілді.</li>
          <li><strong>2020:</strong> Жаһандық командалар саны 30,000-нан асты.</li>
        </ul>
      </div>

    </div>
  );
};

export default History;
