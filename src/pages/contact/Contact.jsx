import ContactForm from './ContactForm';
import ContactCards from './ContactCards';
const Contact = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-semibold mb-4">FIRST Қазақстанмен байланыс орнат</h1>
          <p className="text-lg text-gray-600">
          Сізден хабар күтеміз! Кез келген сұрақтар, қолдау немесе ынтымақтастық мүмкіндіктері үшін бізбен байланысыңыз.
          </p>
        </div>

        <ContactCards/>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
