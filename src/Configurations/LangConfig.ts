import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

i18n.use(initReactI18next).init({
	lng: 'en',
	fallbackLng: 'en',
	debug: false,
	resources: {
		en: {
			translation: {
				// Positions Error
				'Positions not found': 'Positions not found',
				'Eco-Positions not found': 'Eco-Positions not found',
				// GLOBAL
				'400': 'An error occurred, please try to again...',
				'401': 'Your dont authorized',
				// Header
				Home: 'Home',
				Catalog: 'Catalog',
				'About us': 'Abous us',
				'For partners': 'For partners',
				Contacts: 'Contacts',
				'For admins': 'For admins',
				// Footer
				'Who am me?': 'Who am we?',
				"What's are we doing?": "What's are we doing?",
				Childrens: 'Childrens',
				Boys: 'Boys',
				Girls: 'Girls',
				Email: 'Email',
				'Contact number': 'Contact number',
				Banners: 'Banners',
				'Why you should choose us?': 'Why you should choose us?',
				Sections: 'Sections',
				Carousel: 'Carousel',
				// Simple Banner
				'Our small users participate in the development of new products':
					'Our small users participate in the development of new products',
				'Order products from us and get a lot of exciting, incredible and developing products right now.':
					'Order products from us and get a lot of exciting, incredible and developing products right now.',
				// Simple Banner 2
				'We create everything together for you':
					'We create everything together for you',
				'We make toys for you. Our craftsmen work day and night to make the best toys for your children.':
					'We make toys for you. Our craftsmen work day and night to make the best toys for your children.',
				// Recommend Block
				'Why should you choose us?': 'Why should you choose us?',
				'A large selection of products': 'A large selection of products',
				'Many positive reviews': 'Many positive reviews',
				"Toys from the manufacturer of children's happiness":
					"Toys from the manufacturer of children's happiness",
				// Section
				Section: 'Section',
				// Carousel Banner 1
				'We present': 'We present',
				'new world': 'new world',
				ideas: 'ideas',
				'Help your children': 'Help your children',
				'plunge into the dimension': 'plunge into the dimension',
				'ideas and': 'ideas and',
				fantasies: 'fantasies',
				//Contats
				Feedback: 'Feedback',
				'St. Mlynivska 18': 'St. Mlynivska 18',
				'33000 m. Rivne': '33000 m. Rivne',
				'Send form': 'Send form',
				Send2: 'Send',
				'Your message': 'Your message',
				//Forparthers
				"factory of children's happiness!": "factory of children's happiness!",
				"Our mission is to create safe, eco-friendly, and innovative children's products that promote sustainability and the health of our children. By choosing raw materials based on wheat straw, we not only utilize a more natural and renewable resource, but also reduce our carbon footprint, ensuring a greener future for the coming generations. All our products embody our commitment to safety, quality, and environmental awareness, thereby nurturing a conscious attitude towards the environment of children from their earliest years.":
					'Our mission is to create safe, eco-friendly, and innovative children`s products that promote sustainability and the health of our children. By choosing raw materials based on wheat straw, we not only utilize a more natural and renewable resource, but also reduce our carbon footprint, ensuring a greener future for the coming generations. All our products embody our commitment to safety, quality, and environmental awareness, thereby nurturing a conscious attitude towards the environment of children from their earliest years.',
				"The mission of TM Doloni is to give a happy childhood to all children. Therefore, our priority is to create affordable, and most importantly, quality products for children. What is important, the kids themselves participate in their creation. Our children's products contribute to the development of children, the manifestation of their imagination, ingenuity, intellectual, physical and creative abilities. They help in learning about the surrounding world and broadening one's horizons":
					"The mission of TM Doloni is to give a happy childhood to all children. Therefore, our priority is to create affordable, and most importantly, quality products for children. What is important, the kids themselves participate in their creation. Our children's products contribute to the development of children, the manifestation of their imagination, ingenuity, intellectual, physical and creative abilities. They help in learning about the surrounding world and broadening one's horizons",
				'TM Doloni offers a wide range of different products for children for every taste and preference. Exclusively safe raw materials that meet international standards are used for the production of toys.':
					'TM Doloni offers a wide range of different products for children for every taste and preference. Exclusively safe raw materials that meet international standards are used for the production of toys.',
				'A qualified team of developers, designers, designers and marketers works on the creation of products. All models of our products are unique, because they are approved by the most demanding experts - kids.':
					'A qualified team of developers, designers, designers and marketers works on the creation of products. All models of our products are unique, because they are approved by the most demanding experts - kids.',
				'Among our advantages': 'Among our advantages',
				'a wide range of products': 'a wide range of products',
				'production flexibility': 'production flexibility',
				'innovative approach': 'innovative approach',
				'high-quality safe raw materials': 'high-quality safe raw materials',
				'affordable price policy': 'affordable price policy',
				'certified products.': 'certified products.',
				"Our products are chosen by caring parents who want to be sure of their children's safety. Our own business ethics allow us to dynamically develop and achieve success on the market. It is she who forms the trust of our business partners, clients and employees. We are sure that thanks to these principles, we will be able to become better today than yesterday, and tomorrow - we will be better than today!":
					"Our products are chosen by caring parents who want to be sure of their children's safety. Our own business ethics allow us to dynamically develop and achieve success on the market. It is she who forms the trust of our business partners, clients and employees. We are sure that thanks to these principles, we will be able to become better today than yesterday, and tomorrow - we will be better than today!",
				"Our company is a permanent participant of international specialized exhibitions. TM Doloni doesn't just hold a hand on the pulse of innovation, but also shapes trends itself.We are constantly expanding our own capacities and introducing the latest technologies":
					"Our company is a permanent participant of international specialized exhibitions. TM Doloni doesn't just hold a hand on the pulse of innovation, but also shapes trends itself. We are constantly expanding our own capacities and introducing the latest technologies",
				'Doloni Innovations': 'Doloni Innovations',
				//About us
				"TM DOLONI - Factory of children's happiness!":
					"TM DOLONI - Factory of children's happiness!",
				"Joyful children's eyes, cheerful carefree laughter, fulfillment of cherished wishes, and in addition to all this, the development, interest, deepening of skills and abilities of children - this, without a doubt, is our goal!":
					"Joyful children's eyes, cheerful carefree laughter, fulfillment of cherished wishes, and in addition to all this, the development, interest, deepening of skills and abilities of children - this, without a doubt, is our goal!",
				"TM DOLONI - surprises its customers with high quality products, an incredible level of service, proving itself as a proven assistant in a difficult task - creating children's happiness":
					"TM DOLONI - surprises its customers with high quality products, an incredible level of service, proving itself as a proven assistant in a difficult task - creating children's happiness",
				'VIP-TOYS company Ukrainian manufacturer of toys under the trademark DOLONI-TOYS':
					'VIP-TOYS company Ukrainian manufacturer of toys under the trademark DOLONI-TOYS',
				"We offer a wide range of different types of safe and interesting toys and goods for children for every taste and preference. Our children's toys, roller coasters, colorful constructors, sand toys, cars, motorbikes and many other wonderful toys can be useful to your child today. They will occupy the first place on the shelf of your store, and will be a worthy competition to foreign analogues.":
					"We offer a wide range of different types of safe and interesting toys and goods for children for every taste and preference. Our children's toys, roller coasters, colorful constructors, sand toys, cars, motorbikes and many other wonderful toys can be useful to your child today. They will occupy the first place on the shelf of your store, and will be a worthy competition to foreign analogues.",
				//Not found
				'Something went wrong': 'Something went wrong',
				//Catalog
				'Standart Product Line': 'Standart Product Line',
				'Eco-Product Line': 'Eco-Product Line',
				Filters: 'Catalog',
				'Filter by name (ascending)': 'Filter by name (ascending)',
				'Filter by name (descending)': 'Filter by name (descending)',
				'Filter by rating (ascending)': 'Filter by rating (ascending)',
				'Filter by rating (descending)': 'Filter by rating (descending)',
				All: 'All',
				//Login
				'Log in': 'Log in',
				'Log in to the admin panel to manage products':
					'Log in to the admin panel to manage products',
				Password: 'Password',
				Back: 'Back',
				Login: 'Login',
				//Detail product
				'Article №:': 'Article №:',
				Size: 'Size',
				'Box Size': 'Box Size',
				//Admin manage
				'Edit Category': 'Edit Category',
				'Edit Product': 'Edit Product',
				'There are': 'There are',
				'pages and': 'pages and',
				'categories,': 'categories,',
				Create: 'Create',
				Title: 'Title',
				'Title in UA': 'Title in UA',
				'Description in UA': 'Description in UA',
				'Create time': 'Create time',
				Edit: 'Edit',
				Delete: 'Delete',
				Remove: 'Remove',
				'Create new category': 'Create new category',
				'You can create a new category': 'You can create a new category',
				'products,': 'products,',
				'Create new product': 'Create new product',
				Uploaded: 'Uploaded',
				images: 'images',
				Description: 'Description',
				Article: 'Article',
				Rating: 'Rating',
				Category: 'Category',
				messages: 'messages',
				Name: 'Name',
				'Email Address': 'Email Address',
				Message: 'Message',
				'Send time': 'Send time',
				Products: 'Products',
				Categories: 'Categories',
				Exit: 'Exit',
				Logout: 'Logout',
				// Banner 2
				'The new ones are interesting': 'The new ones are interesting',
				toys: 'toys',
				'children directly in': 'children directly in',
				'palms!': 'palms!',
				'A great variety of toys': 'A great variety of toys',
				'right here and': 'right here and',
				now: 'now',
			},
		},
		ua: {
			translation: {
				// Positions Error
				'Positions not found': 'Позицій не знайдено',
				'Eco-Positions not found': 'Еко позицій не знайдено',
				// GLOBAL
				'400': 'Виникла помилка, спробуйте пізніше...',
				'401': 'Ви не авторизовані!',
				// Header
				Home: 'Головна',
				Catalog: 'Каталог',
				'About us': 'Про нас',
				'For partners': 'Для партнерів',
				Contacts: 'Контакти',
				'For admins': 'Для адміністрації',
				// Footer
				'Who am me?': 'Хто ми?',
				"What's are we doing?": 'Що ми робимо?',
				Childrens: 'Дітям',
				Boys: 'Хлопчикам',
				Girls: 'Дівчаткам',
				Email: 'Пошта',
				'Contact number': 'Контактний номер',
				Banners: 'Баннери',
				'Why you should choose us?': 'Чому ви маєте обрати нас?',
				Sections: 'Секції',
				Carousel: 'Карусель',
				// Simple Banner
				'Our small users participate in the development of new products':
					'У розробці нових товарів приймають участь наші маленькі користувачі',
				'Order products from us and get a lot of exciting, incredible and developing products right now.':
					'Замовте продукцію в нас і отримайте безліч захоплюючих, неймовірних і розвиваючих товарів прямо зараз.',
				// Simple Banner 2
				'We create everything together for you':
					'Ми створюємо все разом для вас',
				'We make toys for you. Our craftsmen work day and night to make the best toys for your children.':
					'Ми робимо іграшки для вас. Наші майстри трудяться день і ніч щоб зробити вашим дітям найкращі іграшки.',
				// Recommend Block
				'Why should you choose us?': 'Чому варто обрати нас?',
				'A large selection of products': 'Великий вибір товарів',
				'Many positive reviews': 'Багато позитивних відгуків',
				"Toys from the manufacturer of children's happiness":
					'Іграшки від виробника дитячого щастя',
				// Section
				Section: 'Розділи',
				// Carousel Banner 1
				'We present': 'Представляємо',
				'new world': 'новий світ',
				ideas: 'ідей',
				'Help your children': 'Допоможіть своїм дітям',
				'plunge into the dimension': 'поринути у вимір',
				'ideas and': 'ідей і',
				fantasies: 'фантазій',
				//Contats
				Feedback: 'Зворотній зв’язок',
				'St. Mlynivska 18': 'Вул. Млинівська 18',
				'33000 m. Rivne': '33000 м. Рівне',
				'Send form': 'Надіслати форму',
				Send2: 'Відправити',
				'Your message': 'Ваше повідомлення',
				//Forparthers
				"factory of children's happiness!": 'фабрика дитячого щастя!',
				"Our mission is to create safe, eco-friendly, and innovative children's products that promote sustainability and the health of our children. By choosing raw materials based on wheat straw, we not only utilize a more natural and renewable resource, but also reduce our carbon footprint, ensuring a greener future for the coming generations. All our products embody our commitment to safety, quality, and environmental awareness, thereby nurturing a conscious attitude towards the environment of children from their earliest years.":
					'Наша місія полягає у створенні безпечних, екологічно чистих та інноваційних дитячих товарів, що сприяють сталому розвитку та здоров`ю наших дітей. Виготовляючи сировину на основі пшеничної соломи, ми не тільки використовуємо більш природній та відновлюваний ресурс, але й зменшуємо наш вуглецевий слід, забезпечуючи більш зелене майбутнє для наступних поколінь. Кожен наш продукт є втіленням нашої відданості безпеці, якості та екологічній обізнаності, виховуючи тим самим свідоме ставлення до навколишнього середовища у дітей з самого їхнього дитинства.',
				"The mission of TM Doloni is to give a happy childhood to all children. Therefore, our priority is to create affordable, and most importantly, quality products for children. What is important, the kids themselves participate in their creation. Our children's products contribute to the development of children, the manifestation of their imagination, ingenuity, intellectual, physical and creative abilities. They help in learning about the surrounding world and broadening one's horizons":
					'Місія ТМ Doloni – дарувати щасливе дитинство усім малюкам. Тому нашим пріоритетом є створення доступних, а головне якісних товарів для дітей. Що важливо, малюки й самі долучаються до їх створення. Наші дитячі товари сприяють розвитку малюків, прояву їхньої фантазії, винахідливості, інтелектуальних, фізичних та творчих здібностей. Вони допомагають у пізнанні навколишнього світу та розширенні кругозору',
				'TM Doloni offers a wide range of different products for children for every taste and preference. Exclusively safe raw materials that meet international standards are used for the production of toys.':
					'ТМ Doloni пропонує широкий асортимент різних товарів для дітей на буть-який смак та уподобання. Для виробництва іграшок використовується винятково безпечна сировина що відповідає міжнародними стандартами.',
				'A qualified team of developers, designers, designers and marketers works on the creation of products. All models of our products are unique, because they are approved by the most demanding experts - kids.':
					'Над створенням продукції працює команда кваліфікованих: розробників, конструкторів, дизайнерів і маркетологів. Усі моделі наших товарів – унікальні, адже схвалені найвибагливішими експертами – малюками.',
				'Among our advantages': 'Серед наших переваг',
				'a wide range of products': 'широкий асортимент товарів',
				'production flexibility': 'гнучкість виробництва',
				'innovative approach': 'інноваційний підхід',
				'high-quality safe raw materials': 'high-quality safe raw materials',
				'affordable price policy': 'доступна цінова політика',
				'certified products.': 'сертифікована продукція.',
				"Our products are chosen by caring parents who want to be sure of their children's safety. Our own business ethics allow us to dynamically develop and achieve success on the market. It is she who forms the trust of our business partners, clients and employees. We are sure that thanks to these principles, we will be able to become better today than yesterday, and tomorrow - we will be better than today!":
					'Наші товари обирають дбайливі батьки, які бажають бути впевнені в безпеці своїх дітей.Динамічно розвиватися і досягати успіху на ринку нам дозволяє власна етика бізнесу. Саме вона формує довіру до нас ділових партнерів, клієнтів та співробітників. Ми впевнені, що завдяки цим принципам ми разом зможемо сьогодні стати кращими, ніж учора, і завтра - будемо кращими, ніж сьогодні!',
				"Our company is a permanent participant of international specialized exhibitions. TM Doloni doesn't just hold a hand on the pulse of innovation, but also shapes trends itself.We are constantly expanding our own capacities and introducing the latest technologies":
					'Наша компанія – постійна учасниця міжнародних спеціалізованих виставок. TM Doloni не просто тримає руку на пульсі інновацій, а й сама формує тренди. Ми постійно розширюємо власні потужності й запроваджуємо новітні технології',
				'Doloni Innovations': 'Doloni Іновацій',
				//About us
				"TM DOLONI - Factory of children's happiness!":
					'TM DOLONI - Фабрика дитячого щастя!',
				"Joyful children's eyes, cheerful carefree laughter, fulfillment of cherished wishes, and in addition to all this, the development, interest, deepening of skills and abilities of children - this, without a doubt, is our goal!":
					'Радісні дитячі очі, веселий безтурботний сміх, здійснення заповітних бажань, а до всього цього розвиток, зацікавленість, поглиблення вмінь і навичок дітей - це, без сумніву, наша мета!',
				"TM DOLONI - surprises its customers with high quality products, an incredible level of service, proving itself as a proven assistant in a difficult task - creating children's happiness":
					'TM DOLONI - дивує своїх клієнтів високою якістю продукції, неймовірним рівнем сервісу, зарекомендувавши себе як перевірений помічник в непростій справі - створенні дитячого щастя',
				'VIP-TOYS company Ukrainian manufacturer of toys under the trademark DOLONI-TOYS':
					'Компанія ВІП-ТОЙС Український виробник іграшок під торговою маркою DOLONI-TOYS',
				"We offer a wide range of different types of safe and interesting toys and goods for children for every taste and preference. Our children's toys, roller coasters, colorful constructors, sand toys, cars, motorbikes and many other wonderful toys can be useful to your child today. They will occupy the first place on the shelf of your store, and will be a worthy competition to foreign analogues.":
					'Ми пропонуємо широкий асортимент різних видів безпечних і цікавих іграшок та товарів для дітей на будь-який смак та уподобання. Наші дитячі будтночки, гірки для катання, різнокольорові конструктори, іграшки для піску, машинки, мотобайки і багато інших чудових іграшок можуть вже сьогодні стати в нагоді Вашій дитині.Займуть перше місце на полиці Вашого магазину, складе гідну конкуренцію закордонним аналогам.',
				//Not found
				'Something went wrong': 'Щось пішло не так',
				//Catalog
				'Standart Product Line': 'Стандартна лінія',
				'Eco-Product Line': 'Еко лінія',
				Filters: 'Каталог',
				'Filter by name (ascending)': 'Фільтрувати по назві (по зростанню)',
				'Filter by name (descending)': ' Фільтрувати по назві (по спаданню)',
				'Filter by rating (ascending)':
					'Фільтрувати по рейтингу (по зростанню)',
				'Filter by rating (descending)':
					'Фільтрувати по рейтингу (по спаданню)',
				All: 'Всі',
				//Login
				'Log in': 'Вхід',
				'Log in to the admin panel to manage products':
					'Увійдіть в панель адміністратора, щоб керувати продуктами',
				Password: 'Пароль',
				Back: 'Назад',
				Login: 'Вхід',
				//Detail product
				'Article №:': 'Код №:',
				Size: 'Розмір',
				'Box Size': 'Розмір Коробки',
				//Admin manage
				'Edit Category': 'Зміна Категорії',
				'Edit Product': 'Зміна Продукта',
				'There are': 'Існує',
				'pages and': 'сторінок і',
				'categories,': 'категорії,',
				Create: 'Створити',
				Title: 'Назва',
				'Title in UA': 'Назва на українській',
				'Description in UA': 'Опис на українській',
				'Create time': 'Створений',
				Edit: 'Змінити',
				Delete: 'Видалити',
				Remove: 'Видалити',
				'Create new category': 'Створити нову категорію',
				'You can create a new category': 'Ви можете створити нову категорію',
				'products,': 'продукти,',
				'Create new product': 'Створіть новий продукт',
				Uploaded: 'Завантажено',
				images: 'зображеннь',
				Description: 'Oпис',
				Article: 'Код',
				Rating: 'Рейтинг',
				Category: 'Категорія',
				messages: 'повідомлення',
				Name: "Ім'я",
				'Email Address': 'Адреса електронної пошти',
				Message: 'Повідомлення',
				'Send time': 'Відправленно',
				Products: 'Продукти',
				Categories: 'Категорії',
				Exit: 'Вихід',
				Logout: 'Вийти',
				// Banner 2
				'The new ones are interesting': 'Нові цікаві',
				toys: 'іграшки',
				'children directly in': 'дітям прямо в',
				'palms!': 'долоньки!',
				'A great variety of toys': 'Велике різноманіття іграшок',
				'right here and': 'прямо тут і',
				now: 'зараз',
			},
		},
	},

	keySeparator: false,
	interpolation: { escapeValue: false },
});

export default i18n;
