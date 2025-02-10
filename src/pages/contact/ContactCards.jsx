import { Mail, MapPin, Phone } from 'lucide-react';
import ContactCard from '../../components/costumUI/ContactCard';
const contactCards = [
  {
    icon: <Mail className="h-8 w-auto text-blue-500" />,
    title: 'Бізге Email жібер',
    description: 'Біздің команда көмектесуге дайын.',
    link: 'mailto:contact@firstkazakhstan.org',
    linkText: 'Bolt.m3kz@gmail.com',
  },
  {
    icon: <MapPin className="h-8 w-auto text-blue-500" />,
    title: 'Бізге кел',
    description: 'Әңгімелесу үшін мекенжайымызға кел.',
    link: '',
    linkText: 'Алматы, Қазақстан, Бұқар Жырау бульвары 36.',
  },
  {
    icon: <Phone className="h-8 w-auto text-blue-500" />,
    title: 'Бізге қоңырау шал',
    description: 'Біз дүйсенбі-жұма, 9:00-17:00 (Алматы уақыты) аралығында жұмыс істейміз.',
    link: 'tel:+7XXX',
    linkText: '+7 (727) 395-01-83',
  },
];

  
  const ContactCards = () => (
    <div className="grid gap-10 md:grid-cols-3 mb-12">
      {contactCards.map((card, index) => (
        <ContactCard key={index} {...card} />
      ))}
    </div>
  );

  export default ContactCards;