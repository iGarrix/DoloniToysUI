import { initReactI18next } from "react-i18next";
import i18n from "i18next";

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: 'en',
  debug: false,
  resources: {
    en: {
      translation: {
        // GLOBAL
        "400": "An error occurred, please try to again...",
        "401": "Your dont authorized",
        // Header
        "Home": "Home",
        "Catalog": "Catalog",
        "About us": "Abous us",
        "For partners": "For partners",
        "Contacts": "Contacts",
        "For admins": "For admins",
        // Footer
        "Who am me?": "Who am we?",
        "What's are we doing?": "What's are we doing?",
        "Childrens": "Childrens",
        "Boys": "Boys",
        "Girls": "Girls",
        "Email": "Email",
        "Contact number": "Contact number",
        "Banners": "Banners",
        "Why you should choose us?": "Why you should choose us?",
        "Sections": "Sections",
        "Carousel": "Carousel",
        // Simple Banner
        "Dive into the exciting world of toys": "Dive into the exciting world of toys",
        "Order toys from us and get a lot of exciting, incredible and educational products right now.": "Order toys from us and get a lot of exciting, incredible and educational products right now.",
        // Simple Banner 2
        "We create everything together for you": "We create everything together for you",
        "We make toys for you. Our craftsmen work day and night to make the best toys for your children.": "We make toys for you. Our craftsmen work day and night to make the best toys for your children.",
        // Recommend Block
        "Why should you choose us?": "Why should you choose us?",
        "A large selection of products": "A large selection of products",
        "Many positive reviews": "Many positive reviews",
        "Toys from all over the world": "Toys from all over the world",
        // Section
        "Section": "Section",
      }
    },
    ua: {
      translation: {
        // GLOBAL
        "400": "Виникла помилка, спробуйте пізніше...",
        "401": "Ви не авторизовані!",
        // Header
        "Home": "Головна",
        "Catalog": "Каталог",
        "About us": "Про нас",
        "For partners": "Для партнерів",
        "Contacts": "Контакти",
        "For admins": "Для адміністрації",
        // Footer
        "Who am me?": "Хто ми?",
        "What's are we doing?": "Що ми робимо?",
        "Childrens": "Дітям",
        "Boys": "Хлопчикам",
        "Girls": "Дівчаткам",
        "Email": "Пошта",
        "Contact number": "Контактний номер",
        "Banners": "Баннери",
        "Why you should choose us?": "Чому ви маєте обрати нас?",
        "Sections": "Секції",
        "Carousel": "Карусель",
        // Simple Banner
        "Dive into the exciting world of toys": "Нирніть в захоплевий світ іграшок",
        "Order toys from us and get a lot of exciting, incredible and educational products right now.": "Замовте іграшки в нас і отримайте безліч захоплюючих, неймовірних і розвиваючих товарів прямо зараз.",
        // Simple Banner 2
        "We create everything together for you": "Ми створюємо все разом для вас",
        "We make toys for you. Our craftsmen work day and night to make the best toys for your children.": "Ми робимо іграшки для вас. Наші майстри трудяться день і ніч щоб зробити вашим дітям найкращі іграшки.",
        // Recommend Block
        "Why should you choose us?": "Чому варто обрати нас?",
        "A large selection of products": "Великий вибір товарів",
        "Many positive reviews": "Багато позитивних відгуків",
        "Toys from all over the world": "Іграшки з всього світу",
        // Section
        "Section": "Розділи",
      }
    },
  },
  
  keySeparator: false,
  interpolation: { escapeValue: false },
});

export default i18n;