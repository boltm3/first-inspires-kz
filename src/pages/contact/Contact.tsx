import { useState, ChangeEvent, FormEvent } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import insertContact from '@/api/addContact';

interface Contact {
  name: string;
  mail: string;
  message: string;
}

const Contact = () => {
  const [contactInfo, setContactInfo] = useState<Contact>({
    name: '',
    mail: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submissionStatus, setSubmissionStatus] = useState<string>('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactInfo(prev => ({ ...prev, [name]: value }));
  };

  const submitContact = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus('');

    try {
      const result = await insertContact(contactInfo);
      if (result.success) {
        setSubmissionStatus('Message sent! We’ll get back to you soon.');
        setContactInfo({ name: '', mail: '', message: '' });
      } else {
        setSubmissionStatus(`Error: ${result.error}`);
        console.error('Insert Contact Error:', result.error);
      }
    } catch (error) {
      console.error('Unexpected Error:', error);
      setSubmissionStatus('An unknown error occurred.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactCards = [
    {
      icon: <Mail className="h-8 w-auto text-blue-500" />,
      title: 'Email Us',
      description: 'Our team is ready to assist.',
      link: 'mailto:contact@firstkazakhstan.org',
      linkText: 'Bolt.m3@gmail.com',
    },
    {
      icon: <MapPin className="h-8 w-auto text-blue-500" />,
      title: 'Visit Us',
      description: 'Drop by our address for a chat.',
      link: '',
      linkText: 'Almaty, Kazakhstan, Bukhar Zhyrau Blvd 36, 050040.',
    },
    {
      icon: <Phone className="h-8 w-auto text-blue-500" />,
      title: 'Call Us',
      description: 'We’re available Mon-Fri, 9am-5pm (Almaty Time).',
      link: 'tel:+7XXX',
      linkText: '+7 (727) 395-01-83',
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-semibold mb-4">Get in Touch with FIRST Kazakhstan</h1>
          <p className="text-lg text-gray-600">
            We’d love to hear from you! Contact us for any inquiries, support, or collaboration opportunities.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-3 mb-12">
          {contactCards.map(({ icon, title, description, link, linkText }, index) => (
            <div key={index} className="text-center p-6 border rounded-lg shadow-md">
              <div className="mb-4 flex justify-center items-center w-16 h-16 bg-blue-100 rounded-full">{icon}</div>
              <h2 className="text-xl font-semibold mb-2">{title}</h2>
              <p className="text-gray-600 mb-4">{description}</p>
              {link ? (
                <a href={link} className="font-semibold text-blue-600 hover:underline">
                  {linkText}
                </a>
              ) : (
                <p className="font-semibold text-blue-600">{linkText}</p>
              )}
            </div>
          ))}
        </div>

        <div className="mb-12 p-6 border rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
          <form onSubmit={submitContact}>
            <div className="grid gap-6">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={contactInfo.name}
                onChange={handleInputChange}
                className="p-4 border border-gray-300 rounded-lg w-full"
                required
              />
              <input
                type="email"
                name="mail"
                placeholder="Email"
                value={contactInfo.mail}
                onChange={handleInputChange}
                className="p-4 border border-gray-300 rounded-lg w-full"
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                value={contactInfo.message}
                onChange={handleInputChange}
                className="p-4 border border-gray-300 rounded-lg w-full h-32"
                required
              />
              <button
                type="submit"
                className={`bg-blue-600 text-white p-4 rounded-lg w-full hover:bg-blue-700 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Message'}
              </button>
            </div>
          </form>

          {submissionStatus && (
            <div className="mt-4 text-center">
              <p className={`${submissionStatus.includes('Error') ? 'text-red-600' : 'text-green-600'}`}>
                {submissionStatus}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
