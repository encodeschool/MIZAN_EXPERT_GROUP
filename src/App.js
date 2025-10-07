import { Menu, X, Phone, Mail, MapPin, ChevronDown, Scale, Calculator, FileText, Users, TrendingUp, Award, Shield, Clock, Briefcase, ShieldCheck } from 'lucide-react';
import { useState } from 'react';
import Logo from './static/img/logo.png';
import HeroBg from './static/img/hero.jpg';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import { FaInstagram, FaTiktok, FaFacebook, FaWhatsapp, FaLinkedin, FaYoutube, FaTelegramPlane } from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const { t, i18n } = useTranslation();
  const changeLanguage = (lang) => i18n.changeLanguage(lang);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 primary-color shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <img src={Logo} alt="Logo" className="w-[150px]" />
            </div>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-white hover:secondary-color-text transition">{t('home')}</a>

              <div className="relative">
                <button
                  className="flex items-center text-white hover:secondary-color-text transition"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  {t('services.title')} <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {servicesOpen && (
                  <div
                    className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <a href="#legal" className="block px-4 py-2 text-dark hover:secondary-color-text">{t('services.legal')}</a>
                    <a href="#accounting" className="block px-4 py-2 text-dark hover:secondary-color-text">{t('services.accounting')}</a>
                  </div>
                )}
              </div>

              <a href="#about" className="text-white hover:secondary-color-text transition">{t('about')}</a>
              <a href="#contact" className="text-white hover:secondary-color-text transition">{t('contact')}</a>

              <div className="relative">
                <button
                  className="flex items-center text-white hover:secondary-color-text transition"
                  onMouseEnter={() => setLangOpen(true)}
                  onMouseLeave={() => setLangOpen(false)}
                >
                  {t('language')} <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {langOpen && (
                  <div
                    className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md py-2"
                    onMouseEnter={() => setLangOpen(true)}
                    onMouseLeave={() => setLangOpen(false)}
                  >
                    <button onClick={() => changeLanguage('ru')} className="block px-4 py-2 text-dark hover:secondary-color-text">RU</button>
                    <button onClick={() => changeLanguage('en')} className="block px-4 py-2 text-dark hover:secondary-color-text">EN</button>
                    <button onClick={() => changeLanguage('uz')} className="block px-4 py-2 text-dark hover:secondary-color-text">UZ</button>
                  </div>
                )}
              </div>
            </nav>

            <a href="tel:+998947020701" className="hidden md:flex items-center text-white hover:secondary-color-text font-semibold">
              <Phone className="h-5 w-5 mr-2" />
              +998 94 702 07 01
            </a>

            {/* Mobile menu button */}
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-secondary" />
              ) : (
                <Menu className="h-6 w-6 text-secondary" />
              )}
            </button>
          </div>

          {/* Mobile nav */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4">
              <nav className="flex flex-col space-y-4">
                <a href="#home" className="text-white hover:secondary-color-text">{t('home')}</a>
                <a href="#legal" className="text-white hover:secondary-color-text">{t('services.legal')}</a>
                <a href="#accounting" className="text-white hover:secondary-color-text">{t('services.accounting')}</a>
                <a href="#about" className="text-white hover:secondary-color-text">{t('about')}</a>
                <a href="#contact" className="text-white hover:secondary-color-text">{t('contact')}</a>
                <div className="flex space-x-4">
                  <button onClick={() => changeLanguage('ru')} className="text-sm text-white">RU</button>
                  <button onClick={() => changeLanguage('en')} className="text-sm text-white">EN</button>
                  <button onClick={() => changeLanguage('uz')} className="text-sm text-white">UZ</button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="primary-color herobg py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">{t('hero.title')}</h1>
          <p className="text-xl secondary-color-text mb-8 max-w-3xl mx-auto">{t('hero.subtitle')}</p>
          <a href="#contact" className="secondary-color text-white px-8 py-3 rounded-lg font-semibold hover:secondary-color transition shadow-lg">
            {t('hero.button')}
          </a>
        </div>
      </section>

      {/* Legal Services */}
      <section id="legal" className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">{t('services.legal')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard icon={<Scale className="h-12 w-12 secondary-color-text" />} title={t('legal.consulting')} description={t('legal.consultingDesc')} />
            <ServiceCard icon={<FileText className="h-12 w-12 secondary-color-text" />} title={t('legal.documents')} description={t('legal.documentsDesc')} />
            <ServiceCard icon={<Shield className="h-12 w-12 secondary-color-text" />} title={t('legal.corporate')} description={t('legal.corporateDesc')} />
            <ServiceCard icon={<Users className="h-12 w-12 secondary-color-text" />} title={t('legal.labor')} description={t('legal.laborDesc')} />
            <ServiceCard icon={<Award className="h-12 w-12 secondary-color-text" />} title={t('legal.ip')} description={t('legal.ipDesc')} />
            <ServiceCard icon={<FileText className="h-12 w-12 secondary-color-text" />} title={t('legal.contracts')} description={t('legal.contractsDesc')} />
          </div>
        </div>
      </section>

      {/* Accounting Services */}
      <section id="accounting" className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">{t('services.accounting')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard icon={<Calculator className="h-12 w-12 secondary-color-text" />} title={t('accounting.bookkeeping')} description={t('accounting.bookkeepingDesc')} />
            <ServiceCard icon={<TrendingUp className="h-12 w-12 secondary-color-text" />} title={t('accounting.analysis')} description={t('accounting.analysisDesc')} />
            <ServiceCard icon={<FileText className="h-12 w-12 secondary-color-text" />} title={t('accounting.tax')} description={t('accounting.taxDesc')} />
            <ServiceCard icon={<Calculator className="h-12 w-12 secondary-color-text" />} title={t('accounting.salary')} description={t('accounting.salaryDesc')} />
            <ServiceCard icon={<TrendingUp className="h-12 w-12 secondary-color-text" />} title={t('accounting.planning')} description={t('accounting.planningDesc')} />
            <ServiceCard icon={<FileText className="h-12 w-12 secondary-color-text" />} title={t('accounting.audit')} description={t('accounting.auditDesc')} />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">{t('why.title')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard icon={<Award className="h-16 w-16 secondary-color-text" />} title={t('why.team')} description={t('why.teamDesc')} />
            <FeatureCard icon={<Clock className="h-16 w-16 secondary-color-text" />} title={t('why.speed')} description={t('why.speedDesc')} />
            <FeatureCard icon={<Shield className="h-16 w-16 secondary-color-text" />} title={t('why.confidentiality')} description={t('why.confidentialityDesc')} />
            <FeatureCard icon={<TrendingUp className="h-16 w-16 secondary-color-text" />} title={t('why.prices')} description={t('why.pricesDesc')} />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 lg:py-14 secondary-color text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <StatCard icon={Users} number="500+" label={t("stats.clients")} />
          <StatCard icon={Award} number="15+" label={t("stats.experience")} />
          <StatCard icon={Briefcase} number="1000+" label={t("stats.cases")} />
          <StatCard icon={ShieldCheck} number="50+" label={t("stats.experts")} />
        </div>
      </section>

      {/* Contact section goes here */}
      <section id="contact" className="py-16 lg:py-24 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className='grid md:grid-cols-2 gap-10'>
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12">{t('contactUs')}</h2>
            <p className="text-gray-600">
              {t("Have questions or need assistance? Fill out the form or reach us using the details below.")}
            </p>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="secondary-color-text text-xl" />
              <span>{t('footer.address')}</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="secondary-color-text text-xl" />
              <span>+998 94 702 07 01</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="secondary-color-text text-xl" />
              <span>mizangroup.uz@gmail.com</span>
            </div>
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d749.0872945835085!2d69.22961952350185!3d41.32301988688073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2slv!4v1759847414223!5m2!1sen!2slv" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
          </div>
          <div className="">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input type="text" placeholder={t('form.name')} className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
                <input type="email" placeholder={t('form.email')} className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
              </div>
              <input type="tel" placeholder={t('form.phone')} className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
              <textarea placeholder={t('form.message')} rows={6} className="w-full px-4 py-3 border border-gray-300 rounded-lg"></textarea>
              <button type="submit" className="w-full secondary-color text-white px-8 py-3 rounded-lg font-semibold">
                {t('form.send')}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="primary-color text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <img src={Logo} alt="Logo" className="w-[150px] mb-4" />
              <p className="text-gray-400">{t('footer.description')}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">{t('footer.contacts')}</h3>
              <div className="space-y-3">
                <a href="tel:+998947020701" className="flex items-center text-gray-400 hover:text-white transition">
                  <Phone className="h-5 w-5 mr-2" /> +998 94 702 07 01
                </a>
                <a href="mailto:mizangroup.uz@gmail.com" className="flex items-center text-gray-400 hover:text-white transition">
                  <Mail className="h-5 w-5 mr-2" /> mizangroup.uz@gmail.com
                </a>
                <div className="flex items-start text-gray-400">
                  <MapPin className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                  <span>{t('footer.address')}</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h3>
              <div className="space-y-2">
                <a href="#home" className="block text-gray-400 hover:text-white transition">{t('home')}</a>
                <a href="#legal" className="block text-gray-400 hover:text-white transition">{t('services.legal')}</a>
                <a href="#accounting" className="block text-gray-400 hover:text-white transition">{t('services.accounting')}</a>
                <a href="#about" className="block text-gray-400 hover:text-white transition">{t('about')}</a>
                <a href="#contact" className="block text-gray-400 hover:text-white transition">{t('contact')}</a>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="mt-8 flex justify-center space-x-6">
            <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
              <FaTelegramPlane className="w-6 h-6" />
            </a>
            <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
              <FaInstagram className="w-6 h-6" />
            </a>
            <a href="https://www.tiktok.com/@yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
              <FaTiktok className="w-6 h-6" />
            </a>
            <a href="https://www.facebook.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
              <FaFacebook className="w-6 h-6" />
            </a>
            <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
              <FaWhatsapp className="w-6 h-6" />
            </a>
            <a href="https://x.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
              <FaXTwitter className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a href="https://www.youtube.com/@yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
              <FaYoutube className="w-6 h-6" />
            </a>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 MIZAN EXPERT GROUP. {t('footer.rights')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition border border-gray-100">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="text-center">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

const StatCard = ({ icon: Icon, number, label }) => (
  <div className="flex flex-col items-center space-y-3 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/20 transition">
    <Icon className="w-10 h-10 text-white" />
    <h3 className="text-3xl font-bold">{number}</h3>
    <p className="text-sm uppercase tracking-wide opacity-90">{label}</p>
  </div>
);

export default App;
