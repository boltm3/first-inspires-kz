import { useState } from 'react';

const ContactForm = () => {
  const [contactInfo, setContactInfo] = useState({
    name: '',
    mail: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactInfo((prev) => ({ ...prev, [name]: value }));
  };

  const submitContact = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus('');

    try {
      const response = await fetch('https://resend.api.firstinspireskz.org', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: contactInfo.name,
          email: contactInfo.mail,
          message: contactInfo.message,
        }),
      });

      const result = await response.json();

      if (response.ok) {
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

  return (
    <div className="mb-12 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Бізге хабарлама жіберіңіз</h2>
      <form onSubmit={submitContact}>
        <div className="grid gap-6">
        <input
            type="text"
            name="name"
            placeholder="Аты"
            value={contactInfo.name}
            onChange={handleInputChange}
            className="p-4 rounded-lg w-full"
            required
          />
          <input
            type="email"
            name="mail"
            placeholder="Email"
            value={contactInfo.mail}
            onChange={handleInputChange}
            className="p-4 rounded-lg w-full"
            required
          />
          <textarea
            name="message"
            placeholder="Хабарлама"
            value={contactInfo.message}
            onChange={handleInputChange}
            className="p-4 rounded-lg w-full h-32"
            required
          />
          <button
            type="submit"
            className={`bg-blue-600 text-white p-4 rounded-lg w-full hover:bg-blue-700 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Жіберілуде...' : 'Хабарламаны жіберу'}
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
  );
};

export default ContactForm;
