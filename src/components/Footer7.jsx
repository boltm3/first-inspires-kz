import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

const sections = [
  {
    title: "Жарыстар",
    links: [
      { name: "Тарих", href: "/about/history" },
      { name: "Миссия", href: "/about/mission" },
      { name: "FTC", href: "/about/competitions/ftc" },
      { name: "FLL", href: "/about/competitions/fll" },
      { name: "FRC", href: "/about/competitions/frc" },
    ],
  },
  {
    title: "Қоғамдастық",
    links: [
      { name: "Оқиғалар", href: "/community/events" },
      { name: "Форум", href: "/community/forum" },
      { name: "Командалар", href: "/community/teams" },
    ],
  },
  {
    title: "Ресурстар",
    links: [
      { name: "Көмек", href: "/help" },
      { name: "Байланыс", href: "/contact" },
      { name: "Үйрену", href: "/learn" },
    ],
  },
];


const Footer7 = () => {
  return (
    <section className="py-32 px-10">
      <div className="container">
        <footer>
          <div className="flex flex-col items-center justify-between gap-10 text-center lg:flex-row lg:text-left">
            <div className="flex w-full max-w-96 shrink flex-col items-center justify-between gap-6 lg:items-start">
              <div>
                <span className="flex items-center justify-center gap-4 lg:justify-start">
                  <img
                    src="https://ad2ab94.webp.ee/boltm3-dark-big-logo.png"
                    alt="logo"
                    className="h-20"
                  />
                </span>
              </div>
              <ul className="flex items-center space-x-6 text-muted-foreground">
                <li className="font-medium hover:text-primary">
                  <a href="https://www.instagram.com/bolt.m3/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="size-6" />
                  </a>
                </li>
                <li className="font-medium hover:text-primary">
                  <a href="https://www.tiktok.com/@bolt.m3_ftc" target="_blank" rel="noopener noreferrer">
                    <FaTiktok className="size-6" />
                  </a>
                </li>
                <li className="font-medium hover:text-primary">
                  <a href="https://www.youtube.com/channel/UCuSTuLznWnVQ2FV-f8L-xHA" target="_blank" rel="noopener noreferrer">
                    <FaYoutube className="size-6" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-3 gap-6 lg:gap-20">
              {sections.map((section, sectionIdx) => (
                <div key={sectionIdx}>
                  <h3 className="mb-6 font-bold">{section.title}</h3>
                  <ul className="space-y-4 text-sm text-muted-foreground">
                    {section.links.map((link, linkIdx) => (
                      <li
                        key={linkIdx}
                        className="font-medium hover:text-primary"
                      >
                        <a href={link.href}>{link.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-20 flex flex-col justify-between gap-4 border-t pt-8 text-center text-sm font-medium text-muted-foreground lg:flex-row lg:items-center lg:text-left">
            <p>© 2024 First Kazakhstan. Барлық құқықтар қорғалған.</p>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer7;
