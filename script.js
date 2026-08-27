(function () {
  const root = document.documentElement;
  const body = document.body;
  const themeToggle = document.getElementById("themeToggle");
  const langToggle = document.getElementById("langToggle");
  const savedTheme = localStorage.getItem("mazen-theme");
  const savedLanguage = localStorage.getItem("mazen-language") || "en";

  const translations = {
    en: {
      "skip": "Skip to content",
      "brand.short": "Mazen",
      "nav.game": "Game",
      "nav.websites": "Websites",
      "nav.media": "Media Kit",
      "nav.insights": "Insights",
      "nav.work": "Work",
      "nav.contact": "Contact",
      "nav.email": "Email",
      "hero.availability": "Available for projects - Riyadh, Saudi Arabia",
      "hero.name": "Mazen Bassiso",
      "hero.lede": "Saudi technology creator and senior webmaster making phones, gadgets, apps, websites and digital tools easy to understand — then helping brands turn attention into measurable campaigns.",
      "hero.cta": "Start a project",
      "hero.resume": "Download resume",
      "game.kicker": "Interactive game",
      "game.title": "Stack Breaker",
      "game.budget": "Budget",
      "game.score": "Score",
      "game.reach": "Reach",
      "game.conversion": "Conversion",
      "game.trust": "Trust",
      "game.newBrief": "New brief",
      "game.clear": "Clear stack",
      "game.note": "Spend the build budget wisely. A balanced launch wins.",
      "game.planning": "Planning",
      "game.ready": "Launch ready",
      "game.improving": "Getting warmer",
      "game.credits": "credits",
      "game.selected": "selected",
      "mission.brand": "Brand launch",
      "mission.brand.copy": "A lifestyle brand needs attention, clicks, and a sharp landing experience.",
      "mission.store": "Store rescue",
      "mission.store.copy": "An ecommerce site needs faster pages, cleaner checkout, and trustworthy tracking.",
      "mission.event": "Event push",
      "mission.event.copy": "An event needs awareness, booking intent, and follow-up automation.",
      "tool.landing": "Landing",
      "tool.landing.desc": "Focused campaign page",
      "tool.content": "Content",
      "tool.content.desc": "Reels, stories, posts",
      "tool.seo": "SEO",
      "tool.seo.desc": "Search and structure",
      "tool.analytics": "Analytics",
      "tool.analytics.desc": "Track every click",
      "tool.payments": "Payments",
      "tool.payments.desc": "Checkout and gateways",
      "tool.speed": "Speed",
      "tool.speed.desc": "Caching and tuning",
      "tool.automation": "Automation",
      "tool.automation.desc": "Leads and handoffs",
      "tool.security": "Security",
      "tool.security.desc": "Trust and hardening",
      "signals.years": "Years building digital products",
      "signals.views": "Monthly technology-content views",
      "signals.speed": "Faster load-time wins",
      "signals.downtime": "Downtime reduction work",
      "ticker.wordpress": "WordPress operations",
      "ticker.code": "Custom PHP and JS",
      "ticker.payments": "Payments and APIs",
      "ticker.security": "Security hardening",
      "ticker.analytics": "SEO and analytics",
      "ticker.automation": "Automation flows",
      "websites.kicker": "Websites",
      "websites.title": "Selected platforms I have built, operated, or improved.",
      "websites.copy": "A mix of public sites, brand systems, ecommerce operations, private dashboards, and marketplace work across Saudi and regional companies.",
      "websites.diva.type": "Featured ecommerce platform",
      "websites.diva.copy": "Ecommerce website work focused on product presentation, shopping flow, performance, and brand experience.",
      "websites.naqi.type": "Highlighted brand platform",
      "websites.naqi.copy": "Website operations and improvements for a public-facing brand platform with clean structure and reliable browsing.",
      "websites.alkhayal.type": "Brand website",
      "websites.alkhayal.copy": "Website work across structure, content presentation, responsive browsing, and maintenance.",
      "websites.eqlaa.type": "Digital platform",
      "websites.eqlaa.copy": "Platform support and website improvements with attention to usability, speed, and clear navigation.",
      "websites.zawaya.type": "Hospitality / venue website",
      "websites.zawaya.copy": "Website work for a visual brand experience with responsive sections, inquiry paths, and campaign-ready pages.",
      "websites.miran.type": "Hospitality / brand website",
      "websites.miran.copy": "Website support for a premium brand presence with polished layout, contact paths, and operational upkeep.",
      "websites.rose.type": "Marketplace / Social platform",
      "websites.rose.copy": "Full-scale WordPress marketplace work with custom code, mobile integrations, payments, SEO, analytics, server operations, and performance improvements.",
      "websites.hamat.type": "Brand portfolio / ecommerce ops",
      "websites.hamat.copy": "Ecommerce operations across multiple brands, payment gateway integrations, CRM connections, campaign support, security hardening, and process automation.",
      "websites.ohjiya.type": "Consulting / digital systems",
      "websites.ohjiya.copy": "WordPress, SaaS, ecommerce, CRM, CMS, LMS, SEO, ERP alignment, UI/UX journeys, speed optimization, and team training.",
      "websites.bsaiso.type": "WordPress ecommerce",
      "websites.bsaiso.copy": "Launched a WordPress ecommerce platform and supported sales growth through digital marketing, content operations, and ecommerce setup.",
      "tag.payments": "Payments",
      "tag.scale": "Scale",
      "tag.ecommerce": "Ecommerce",
      "tag.automation": "Automation",
      "tag.launch": "Launch",
      "tag.storefront": "Storefront",
      "tag.marketing": "Marketing",
      "tag.performance": "Performance",
      "tag.operations": "Operations",
      "tag.website": "Website",
      "tag.content": "Content",
      "tag.mobile": "Mobile",
      "tag.platform": "Platform",
      "tag.speed": "Speed",
      "tag.brand": "Brand",
      "tag.responsive": "Responsive",
      "tag.campaigns": "Campaigns",
      "tag.premium": "Premium",
      "tag.contactPath": "Contact path",
      "tag.upkeep": "Upkeep",
      "work.kicker": "Proof",
      "work.title": "A resume that behaves like an operations dashboard.",
      "work.copy": "I work where content, code, traffic, revenue, and reliability meet. The goal is simple: keep launches calm, measurable, fast, and ready to scale.",
      "work.rose.time": "Jul 2024 - Present",
      "work.rose.title": "Rose Holding - Senior Webmaster",
      "work.rose.copy": "Own end-to-end digital platform operations across servers, APIs, payment gateways, mobile integrations, SEO, analytics, marketplace performance, and custom WordPress code.",
      "work.hamat.time": "Jun 2023 - Jul 2024",
      "work.hamat.title": "Hamat Al Sahab Holding - Webmaster",
      "work.hamat.copy": "Ran ecommerce operations across multiple brands, improved security and performance, integrated payment gateways, and automated lead flows with Zapier and Google tooling.",
      "work.ohjiya.time": "Mar 2019 - Aug 2023",
      "work.ohjiya.title": "Ohjiya Group - IT Consultant / Webmaster",
      "work.ohjiya.copy": "Delivered WordPress, SaaS, ecommerce, CRM, CMS, and LMS solutions with SEO, UX, ERP alignment, speed optimization, planning, and team training.",
      "projects.kicker": "Case files",
      "projects.title": "Three ways I usually create leverage.",
      "projects.market.title": "Marketplace WordPress",
      "projects.market.copy": "High-scale marketplace builds with custom features, performance budgets, caching, and maintainable admin flows.",
      "projects.auto.title": "Lead and Back-Office Automation",
      "projects.auto.copy": "Zapier, Google tooling, CRM integrations, dashboards, alerts, and cleaner handoffs between marketing, operations, and support.",
      "projects.speed.title": "Speed and Reliability Program",
      "projects.speed.copy": "Caching strategy, database tuning, monitoring, CDN setup, image plans, uptime habits, and practical security hardening.",
      "media.kicker": "Media kit",
      "media.title": "Collabs built like campaigns, not random posts.",
      "media.copy": "Clear deliverables, trackable links, useful reporting, and web support when the campaign needs more than content alone.",
      "media.creator.price": "From SAR 2,000",
      "media.creator.title": "Creator Feature",
      "media.creator.copy": "Short-form content, brand mention, story set, and campaign-ready CTA.",
      "media.creator.li1": "1 reel or short video",
      "media.creator.li2": "3 story frames",
      "media.creator.li3": "Performance notes",
      "media.review.price": "From SAR 3,500",
      "media.review.title": "Product Review",
      "media.review.copy": "A clear, honest product review focused on use cases, benefits, objections, and audience trust.",
      "media.review.li1": "Product testing and talking points",
      "media.review.li2": "1 review reel or video",
      "media.review.li3": "Story follow-up with CTA",
      "media.unbox.price": "From SAR 3,000",
      "media.unbox.title": "Unboxing Feature",
      "media.unbox.copy": "A first-look unboxing experience that makes the product feel tangible, visual, and easy to remember.",
      "media.unbox.li1": "Unboxing reel or short video",
      "media.unbox.li2": "Product detail shots",
      "media.unbox.li3": "Story set with link or mention",
      "media.launch.price": "From SAR 6,000",
      "media.launch.title": "Launch Partner",
      "media.launch.copy": "Content plus the lightweight web layer that makes the campaign easier to convert.",
      "media.launch.li1": "Landing page or tracking link",
      "media.launch.li2": "Analytics setup",
      "media.launch.li3": "Post-campaign report",
      "media.audit.price": "From SAR 3,500",
      "media.audit.title": "Website Audit",
      "media.audit.copy": "A practical review for speed, UX, SEO, analytics, and conversion bottlenecks.",
      "media.audit.li1": "Priority findings",
      "media.audit.li2": "Fix roadmap",
      "media.audit.li3": "Optional implementation",
      "media.addon.reel": "Extra reel",
      "media.addon.dashboard": "Analytics dashboard",
      "media.addon.landing": "Campaign landing page",
      "media.addon.event": "Half-day event coverage",
      "insights.kicker": "Demographics",
      "insights.title": "Audience and campaign insights for brands.",
      "insights.copy": "A clear snapshot for brand decisions: where the audience sits, what they care about, and what gets reported after a collaboration.",
      "insights.fit.title": "Audience Fit",
      "insights.fit.gcc": "Saudi Arabia + GCC",
      "insights.fit.languages": "Arabic + English",
      "insights.fit.age": "18-34 core reach",
      "insights.fit.mobile": "Mobile-first viewers",
      "insights.verticals.title": "Content Verticals",
      "insights.verticals.copy": "Technology, web tools, ecommerce, lifestyle, launches, hospitality, retail, events.",
      "insights.fitbrand.title": "Best Brand Fit",
      "insights.fitbrand.copy": "Founders, marketing teams, ecommerce brands, restaurants, venues, SaaS, and retail launches.",
      "insights.report.title": "Report Includes",
      "insights.report.copy": "Reach, views, watch time, saves, clicks, landing-page traffic, conversions, and next-step notes.",
      "brands.kicker": "Collaborations",
      "brands.title": "Brand work can live beside engineering proof.",
      "brands.productReviews": "Product Reviews",
      "brands.unboxing": "Unboxing",
      "brands.hospitality": "Hospitality",
      "brands.retail": "Retail",
      "brands.ecommerce": "Ecommerce",
      "brands.events": "Events",
      "brands.tech": "Tech",
      "brands.food": "Food",
      "stack.kicker": "Stack",
      "stack.title": "The tools are practical because the work is practical.",
      "stack.wordpress": "Custom themes, plugins, WooCommerce, admin workflows.",
      "stack.js": "Frontend behavior, tracking scripts, tooling, integrations.",
      "stack.php": "Plugins, APIs, templates, business logic, backend fixes.",
      "stack.cloud.title": "Cloud",
      "stack.cloud": "Linux, AWS, Azure, CDN, uptime, backups, monitoring.",
      "stack.security.title": "Security",
      "stack.security": "Hardening, scanning, access hygiene, incident prevention.",
      "stack.analytics.title": "Analytics",
      "stack.analytics": "GTM, GA, SEO reporting, funnels, dashboards.",
      "stack.payments.title": "Payments",
      "stack.payments": "Gateways, checkout flows, API troubleshooting.",
      "stack.automation.title": "Automation",
      "stack.automation": "Zapier, scripts, Google tooling, CRM handoffs.",
      "contact.kicker": "Contact",
      "contact.title": "Have a project, campaign, or messy web problem?",
      "contact.copy": "Send the shape of the thing. I will reply with next steps.",
      "contact.name": "Name",
      "contact.email": "Email",
      "contact.message": "Message",
      "contact.namePlaceholder": "Your name",
      "contact.emailPlaceholder": "you@example.com",
      "contact.messagePlaceholder": "Tell me about the project or campaign.",
      "contact.send": "Send message",
      "contact.whatsapp": "WhatsApp me",
      "footer.copy": "(c)",
      "footer.name": "Mazen Bassiso - Riyadh, Saudi Arabia",
      "footer.top": "Back to top"
    },
    ar: {
      "skip": "تجاوز إلى المحتوى",
      "brand.short": "مازن",
      "nav.game": "اللعبة",
      "nav.websites": "المواقع",
      "nav.media": "الميديا كت",
      "nav.insights": "الإحصاءات",
      "nav.work": "الخبرة",
      "nav.contact": "تواصل",
      "nav.email": "البريد",
      "hero.availability": "متاح للمشاريع - الرياض، السعودية",
      "hero.name": "مازن بسيسو",
      "hero.lede": "صانع محتوى تقني سعودي ومشرف مواقع أشرح الهواتف والأجهزة والتطبيقات والمواقع والأدوات الرقمية بطريقة سهلة، وأحوّل اهتمام الجمهور إلى حملات قابلة للقياس للعلامات التجارية.",
      "hero.cta": "ابدأ مشروعاً",
      "hero.resume": "تحميل السيرة",
      "game.kicker": "لعبة تفاعلية",
      "game.title": "مختبر الإطلاق",
      "game.budget": "الميزانية",
      "game.score": "النتيجة",
      "game.reach": "الوصول",
      "game.conversion": "التحويل",
      "game.trust": "الثقة",
      "game.newBrief": "تحدي جديد",
      "game.clear": "مسح الخطة",
      "game.note": "اصرف ميزانية البناء بذكاء. الإطلاق المتوازن يفوز.",
      "game.planning": "قيد التخطيط",
      "game.ready": "جاهز للإطلاق",
      "game.improving": "أقرب للنجاح",
      "game.credits": "نقطة",
      "game.selected": "مختار",
      "mission.brand": "إطلاق علامة",
      "mission.brand.copy": "علامة لايف ستايل تحتاج انتباهاً، نقرات، وتجربة صفحة هبوط واضحة.",
      "mission.store": "إنقاذ متجر",
      "mission.store.copy": "متجر إلكتروني يحتاج صفحات أسرع، دفع أسهل، وتتبع موثوق.",
      "mission.event": "دفع فعالية",
      "mission.event.copy": "فعالية تحتاج انتشاراً، نية حجز، وأتمتة للمتابعة.",
      "tool.landing": "صفحة هبوط",
      "tool.landing.desc": "صفحة مركزة للحملة",
      "tool.content": "محتوى",
      "tool.content.desc": "ريلز، ستوري، ومنشورات",
      "tool.seo": "SEO",
      "tool.seo.desc": "بحث وهيكلة",
      "tool.analytics": "تحليلات",
      "tool.analytics.desc": "تتبع كل نقرة",
      "tool.payments": "مدفوعات",
      "tool.payments.desc": "دفع وبوابات",
      "tool.speed": "سرعة",
      "tool.speed.desc": "كاش وتحسين أداء",
      "tool.automation": "أتمتة",
      "tool.automation.desc": "عملاء محتملون وتسليم",
      "tool.security": "أمان",
      "tool.security.desc": "ثقة وتحصين",
      "signals.years": "سنوات في بناء وتشغيل المواقع",
      "signals.views": "مشاهدات محتوى شهرية تمت إدارتها",
      "signals.speed": "تحسينات في سرعة التحميل",
      "signals.downtime": "خفض في التوقفات",
      "ticker.wordpress": "تشغيل ووردبريس",
      "ticker.code": "PHP و JavaScript مخصص",
      "ticker.payments": "مدفوعات وواجهات API",
      "ticker.security": "تحصين أمني",
      "ticker.analytics": "SEO وتحليلات",
      "ticker.automation": "تدفقات أتمتة",
      "websites.kicker": "المواقع",
      "websites.title": "منصات مختارة قمت ببنائها أو تشغيلها أو تحسينها.",
      "websites.copy": "مزيج من مواقع عامة، أنظمة علامات، تشغيل متاجر، لوحات خاصة، ومنصات سوقية لشركات سعودية وإقليمية.",
      "websites.diva.type": "منصة تجارة إلكترونية مميزة",
      "websites.diva.copy": "عمل على موقع تجارة إلكترونية يركز على عرض المنتجات، تجربة الشراء، الأداء، وحضور العلامة.",
      "websites.naqi.type": "منصة علامة بارزة",
      "websites.naqi.copy": "تشغيل وتحسينات لموقع علامة عام بهيكل واضح وتجربة تصفح موثوقة.",
      "websites.alkhayal.type": "موقع علامة تجارية",
      "websites.alkhayal.copy": "عمل على هيكلة الموقع، عرض المحتوى، التصفح المتجاوب، والصيانة.",
      "websites.eqlaa.type": "منصة رقمية",
      "websites.eqlaa.copy": "دعم منصة وتحسينات موقع مع اهتمام بالاستخدام، السرعة، ووضوح التنقل.",
      "websites.zawaya.type": "موقع ضيافة / وجهة",
      "websites.zawaya.copy": "عمل على تجربة علامة مرئية مع أقسام متجاوبة، مسارات تواصل، وصفحات جاهزة للحملات.",
      "websites.miran.type": "موقع ضيافة / علامة",
      "websites.miran.copy": "دعم موقع لحضور علامة راقٍ مع تصميم مصقول، مسارات تواصل، ومتابعة تشغيلية.",
      "websites.rose.type": "سوق / منصة اجتماعية",
      "websites.rose.copy": "عمل على سوق ووردبريس كامل مع كود مخصص، تكاملات جوال، مدفوعات، SEO، تحليلات، تشغيل خوادم، وتحسين أداء.",
      "websites.hamat.type": "محفظة علامات / تشغيل متاجر",
      "websites.hamat.copy": "تشغيل متاجر لعدة علامات، تكامل بوابات دفع، ربط CRM، دعم حملات، تحصين أمني، وأتمتة عمليات.",
      "websites.ohjiya.type": "استشارات / أنظمة رقمية",
      "websites.ohjiya.copy": "ووردبريس، SaaS، متاجر، CRM، CMS، LMS، SEO، مواءمة ERP، رحلات UI/UX، تحسين سرعة، وتدريب فرق.",
      "websites.bsaiso.type": "متجر ووردبريس",
      "websites.bsaiso.copy": "إطلاق متجر ووردبريس ودعم نمو المبيعات عبر التسويق الرقمي، تشغيل المحتوى، وتجهيز التجارة الإلكترونية.",
      "tag.payments": "مدفوعات",
      "tag.scale": "توسع",
      "tag.ecommerce": "متاجر",
      "tag.automation": "أتمتة",
      "tag.launch": "إطلاق",
      "tag.storefront": "واجهة متجر",
      "tag.marketing": "تسويق",
      "tag.performance": "أداء",
      "tag.operations": "تشغيل",
      "tag.website": "موقع",
      "tag.content": "محتوى",
      "tag.mobile": "جوال",
      "tag.platform": "منصة",
      "tag.speed": "سرعة",
      "tag.brand": "علامة",
      "tag.responsive": "متجاوب",
      "tag.campaigns": "حملات",
      "tag.premium": "فاخر",
      "tag.contactPath": "مسار تواصل",
      "tag.upkeep": "متابعة",
      "work.kicker": "الدليل",
      "work.title": "سيرة ذاتية تعمل كلوحة تشغيل.",
      "work.copy": "أعمل عند نقطة التقاء المحتوى، الكود، الزيارات، الإيرادات، والاعتمادية. الهدف بسيط: إطلاقات هادئة، قابلة للقياس، سريعة، وجاهزة للتوسع.",
      "work.rose.time": "يوليو 2024 - الآن",
      "work.rose.title": "Rose Holding - مشرف مواقع أول",
      "work.rose.copy": "إدارة تشغيل المنصات الرقمية من الخوادم وواجهات API وبوابات الدفع وتكاملات الجوال إلى SEO والتحليلات وأداء السوق وكود ووردبريس مخصص.",
      "work.hamat.time": "يونيو 2023 - يوليو 2024",
      "work.hamat.title": "Hamat Al Sahab Holding - مشرف مواقع",
      "work.hamat.copy": "تشغيل متاجر لعدة علامات، تحسين الأمان والأداء، تكامل بوابات الدفع، وأتمتة العملاء المحتملين باستخدام Zapier وأدوات Google.",
      "work.ohjiya.time": "مارس 2019 - أغسطس 2023",
      "work.ohjiya.title": "Ohjiya Group - مستشار تقنية / مشرف مواقع",
      "work.ohjiya.copy": "تنفيذ حلول WordPress وSaaS ومتاجر وCRM وCMS وLMS مع SEO وUX ومواءمة ERP وتحسين السرعة والتخطيط وتدريب الفرق.",
      "projects.kicker": "ملفات عمل",
      "projects.title": "ثلاث طرق أصنع بها قيمة عملية.",
      "projects.market.title": "أسواق ووردبريس",
      "projects.market.copy": "بناء أسواق قابلة للتوسع بميزات مخصصة، ميزانيات أداء، كاش، وتجارب إدارة قابلة للصيانة.",
      "projects.auto.title": "أتمتة العملاء المحتملين والعمليات",
      "projects.auto.copy": "Zapier وأدوات Google وتكاملات CRM ولوحات متابعة وتنبيهات وتسليمات أنظف بين التسويق والتشغيل والدعم.",
      "projects.speed.title": "برنامج السرعة والاعتمادية",
      "projects.speed.copy": "استراتيجية كاش، ضبط قاعدة البيانات، مراقبة، CDN، خطة صور، عادات uptime، وتحصين أمني عملي.",
      "media.kicker": "الميديا كت",
      "media.title": "تعاونات مبنية كحملات، وليس منشورات عشوائية.",
      "media.copy": "مخرجات واضحة، روابط قابلة للتتبع، تقارير مفيدة، ودعم ويب عندما تحتاج الحملة أكثر من محتوى فقط.",
      "media.creator.price": "ابتداءً من 2,000 ريال",
      "media.creator.title": "ظهور إعلاني",
      "media.creator.copy": "محتوى قصير، ذكر للعلامة، مجموعة ستوري، ودعوة إجراء واضحة للحملة.",
      "media.creator.li1": "ريل واحد أو فيديو قصير",
      "media.creator.li2": "3 إطارات ستوري",
      "media.creator.li3": "ملاحظات أداء",
      "media.review.price": "ابتداءً من 3,500 ريال",
      "media.review.title": "مراجعة منتج",
      "media.review.copy": "مراجعة واضحة وصادقة تركز على الاستخدامات، الفوائد، الاعتراضات المحتملة، وبناء ثقة الجمهور.",
      "media.review.li1": "تجربة المنتج وتحديد نقاط الحديث",
      "media.review.li2": "ريل أو فيديو مراجعة واحد",
      "media.review.li3": "متابعة ستوري مع دعوة إجراء",
      "media.unbox.price": "ابتداءً من 3,000 ريال",
      "media.unbox.title": "تجربة فتح الصندوق",
      "media.unbox.copy": "تجربة أولية تعرض المنتج بشكل بصري وملموس وسهل التذكر.",
      "media.unbox.li1": "ريل أو فيديو قصير لفتح الصندوق",
      "media.unbox.li2": "لقطات تفصيلية للمنتج",
      "media.unbox.li3": "مجموعة ستوري مع رابط أو منشن",
      "media.launch.price": "ابتداءً من 6,000 ريال",
      "media.launch.title": "شريك إطلاق",
      "media.launch.copy": "محتوى مع طبقة ويب خفيفة تجعل الحملة أسهل في التحويل.",
      "media.launch.li1": "صفحة هبوط أو رابط تتبع",
      "media.launch.li2": "إعداد التحليلات",
      "media.launch.li3": "تقرير ما بعد الحملة",
      "media.audit.price": "ابتداءً من 3,500 ريال",
      "media.audit.title": "تدقيق موقع",
      "media.audit.copy": "مراجعة عملية للسرعة وتجربة المستخدم وSEO والتحليلات ونقاط ضعف التحويل.",
      "media.audit.li1": "أولويات واضحة",
      "media.audit.li2": "خطة إصلاح",
      "media.audit.li3": "تنفيذ اختياري",
      "media.addon.reel": "ريل إضافي",
      "media.addon.dashboard": "لوحة تحليلات",
      "media.addon.landing": "صفحة هبوط للحملة",
      "media.addon.event": "تغطية فعالية نصف يوم",
      "insights.kicker": "الديموغرافيا",
      "insights.title": "رؤى الجمهور والحملات للعلامات التجارية.",
      "insights.copy": "لقطة واضحة لقرارات العلامات: أين يوجد الجمهور، ما الذي يهتم به، وما الذي يتم قياسه بعد التعاون.",
      "insights.fit.title": "ملاءمة الجمهور",
      "insights.fit.gcc": "السعودية + الخليج",
      "insights.fit.languages": "العربية + الإنجليزية",
      "insights.fit.age": "الوصول الأساسي 18-34",
      "insights.fit.mobile": "مشاهدون عبر الجوال أولاً",
      "insights.verticals.title": "مجالات المحتوى",
      "insights.verticals.copy": "التقنية، أدوات الويب، التجارة الإلكترونية، اللايف ستايل، الإطلاقات، الضيافة، التجزئة، الفعاليات.",
      "insights.fitbrand.title": "أفضل ملاءمة للعلامات",
      "insights.fitbrand.copy": "المؤسسون، فرق التسويق، المتاجر، المطاعم، الوجهات، SaaS، وإطلاقات التجزئة.",
      "insights.report.title": "يشمل التقرير",
      "insights.report.copy": "الوصول، المشاهدات، وقت المشاهدة، الحفظ، النقرات، زيارات صفحة الهبوط، التحويلات، وملاحظات الخطوة التالية.",
      "brands.kicker": "تعاونات",
      "brands.title": "تعاونات محتوى واضحة بجانب خبرة تقنية قابلة للقياس.",
      "brands.productReviews": "مراجعات المنتجات",
      "brands.unboxing": "فتح الصندوق",
      "brands.hospitality": "الضيافة",
      "brands.retail": "التجزئة",
      "brands.ecommerce": "المتاجر",
      "brands.events": "الفعاليات",
      "brands.tech": "التقنية",
      "brands.food": "المطاعم",
      "stack.kicker": "الأدوات",
      "stack.title": "الأدوات عملية لأن العمل نفسه عملي.",
      "stack.wordpress": "قوالب وإضافات مخصصة، WooCommerce، وتدفقات إدارة.",
      "stack.js": "سلوك الواجهة، سكربتات التتبع، أدوات، وتكاملات.",
      "stack.php": "إضافات، API، قوالب، منطق أعمال، وإصلاحات خلفية.",
      "stack.cloud.title": "السحابة",
      "stack.cloud": "Linux وAWS وAzure وCDN وuptime ونسخ احتياطي ومراقبة.",
      "stack.security.title": "الأمان",
      "stack.security": "تحصين، فحص، نظافة صلاحيات، ومنع حوادث.",
      "stack.analytics.title": "التحليلات",
      "stack.analytics": "GTM وGA وتقارير SEO ومسارات ولوحات.",
      "stack.payments.title": "المدفوعات",
      "stack.payments": "بوابات دفع، تدفقات checkout، وحل مشاكل API.",
      "stack.automation.title": "الأتمتة",
      "stack.automation": "Zapier وسكربتات وأدوات Google وتسليمات CRM.",
      "contact.kicker": "تواصل",
      "contact.title": "عندك مشروع أو حملة أو مشكلة ويب معقدة؟",
      "contact.copy": "ارسل شكل الفكرة. سأرد عليك بالخطوات التالية.",
      "contact.name": "الاسم",
      "contact.email": "البريد الإلكتروني",
      "contact.message": "الرسالة",
      "contact.namePlaceholder": "اسمك",
      "contact.emailPlaceholder": "you@example.com",
      "contact.messagePlaceholder": "اكتب فكرة المشروع أو الحملة.",
      "contact.send": "إرسال الرسالة",
      "contact.whatsapp": "راسلني على واتساب",
      "footer.copy": "(c)",
      "footer.name": "مازن بسيسو - الرياض، السعودية",
      "footer.top": "العودة للأعلى"
    }
  };

  Object.assign(translations.en, {
    "game.kicker": "Arcade game",
    "game.title": "Stack Breaker",
    "game.score": "Score",
    "game.lives": "Lives",
    "game.start": "Start",
    "game.pause": "Pause",
    "game.resume": "Resume",
    "game.reset": "Reset",
    "game.note": "Move the paddle. Break the stack. Catch powerups.",
    "game.ready": "Ready?",
    "game.over": "Game over",
    "game.clear": "Stack cleared",
    "game.level": "Level"
  });

  Object.assign(translations.ar, {
    "game.kicker": "لعبة أركيد",
    "game.title": "محطم الأخطاء",
    "game.score": "النقاط",
    "game.lives": "المحاولات",
    "game.start": "ابدأ",
    "game.pause": "إيقاف",
    "game.resume": "متابعة",
    "game.reset": "إعادة",
    "game.note": "حرّك المضرب. اكسر البلوكات. التقط الجوائز.",
    "game.ready": "جاهز؟",
    "game.over": "انتهت اللعبة",
    "game.clear": "تم تنظيف الستاك",
    "game.level": "المستوى"
  });


  Object.assign(translations.en, {
    "brand.short": "Mazen Bassiso",
    "nav.content": "Creator",
    "nav.expertise": "Expertise",
    "nav.media": "Packages",
    "nav.websites": "Platforms",
    "nav.work": "Experience",
    "hero.role": "Technology Creator • Cybersecurity Engineer",
    "hero.location": "Riyadh, Saudi Arabia",
    "hero.availability": "Open to brand collaborations and selected technical projects",
    "hero.lede": "I create Arabic technology content for audiences in Saudi Arabia and the GCC — covering phones, gadgets, apps, AI, websites and digital tools — while bringing real engineering experience behind the content.",
    "hero.techNote": "Beyond content, I work hands-on with AI agents, Cloudflare, AWS, Linux servers, application and API security, payments, ecommerce platforms and automation.",
    "hero.identity.nationality": "Palestinian nationality",
    "hero.identity.birth": "Born in Saudi Arabia",
    "hero.identity.education": "Educated in Malaysia",
    "hero.packages": "View collaboration packages",
    "hero.resume": "Download resume PDF",
    "hero.phoneLabel": "Phone / WhatsApp",
    "hero.emailLabel": "Email",
    "signals.views": "Monthly technology-content views",
    "signals.years": "Years across web, systems and infrastructure",
    "signals.degree": "Information Systems Security - APU, Malaysia",
    "signals.brands": "Selected global brands: Apple, Google, Amazon, Midea",
    "ticker.ai": "AI agents & automation",
    "ticker.cloudflare": "Cloudflare & edge security",
    "ticker.security": "Cybersecurity & API security",
    "ticker.aws": "AWS cloud infrastructure",
    "ticker.servers": "Linux servers & hosting",
    "ticker.payments": "Payments & integrations",
    "ticker.ecommerce": "Ecommerce & web platforms",
    "creator.kicker": "Creator work",
    "creator.title": "Tech people want to watch.",
    "creator.copy": "Arabic-first short-form tech content for Saudi and GCC audiences — phones, gadgets, AI, apps and useful digital tools, explained clearly and naturally.",
    "creator.proof.views": "monthly views across social platforms",
    "creator.proof.tiktok": "TikTok community",
    "creator.proof.brands": "selected brand collaborations",
    "creator.profile.title": "Tech, explained clearly.",
    "creator.profile.copy": "Product discovery, practical reviews and useful technology with a natural Arabic voice and Saudi/GCC market context.",
    "creator.profile.shorts": "Watch Shorts ↗",
    "creator.shorts.title": "Latest short-form videos",
    "creator.shorts.all": "View all Shorts ↗",
    "creator.feed.kicker": "Latest content",
    "creator.feed.title": "Latest tech videos.",
    "creator.feed.note": "Three platform snapshots",
    "creator.feed.followers": "followers",
    "creator.feed.posts": "posts",
    "creator.feed.likes": "likes",
    "creator.feed.subscribers": "subscribers",
    "creator.feed.videos": "videos",
    "creator.feed.instagramOpen": "Open Instagram Reels",
    "creator.feed.tiktokStat": "700K+ community",
    "creator.feed.tiktokCopy": "Fast tech explainers, product finds and practical tools for Arabic-speaking audiences.",
    "creator.feed.tiktokLoad": "Load live preview",
    "creator.feed.tiktokOpen": "Open TikTok ↗",
    "creator.feed.youtube": "Watch the Shorts library",
    "creator.feed.youtubeCopy": "Quick reviews, useful tools and short tech explainers.",
    "creator.feed.youtubeOpen": "Open YouTube Shorts",
    "creator.feed.tag1": "Phones",
    "creator.feed.tag2": "AI tools",
    "creator.feed.tag3": "Web tips",
    "packages.kicker": "Brand collaborations",
    "packages.title": "Campaigns made simple.",
    "packages.copy": "Starting scopes for common brand needs. Every package can be adapted across TikTok, Instagram and YouTube to match the brief, usage rights and campaign objectives.",
    "packages.feature.price": "From SAR 2,500",
    "packages.feature.title": "Tech Feature",
    "packages.feature.for": "For product awareness, new features, apps, gadgets and focused announcements.",
    "packages.feature.li1": "1 short-form technology video",
    "packages.feature.li2": "Published on one agreed primary platform",
    "packages.feature.li3": "Brand tag, product message and clear CTA",
    "packages.feature.li4": "Basic post-campaign performance snapshot",
    "packages.feature.cta": "Request a Tech Feature",
    "packages.review.price": "From SAR 4,500",
    "packages.review.title": "Hands-on Review",
    "packages.review.for": "For products and tools that benefit from demonstration, explanation and real use cases.",
    "packages.review.li1": "Product testing and a creator-led content angle",
    "packages.review.li2": "1 dedicated review / demonstration video",
    "packages.review.li3": "Cross-post or story support as agreed",
    "packages.review.li4": "Campaign performance summary",
    "packages.review.cta": "Request a Review",
    "packages.launch.price": "From SAR 7,500",
    "packages.launch.title": "Launch Campaign",
    "packages.launch.for": "For product launches, Saudi/GCC market entry and campaigns that need multiple touchpoints.",
    "packages.launch.li1": "Campaign concept and messaging angle",
    "packages.launch.li2": "Multi-touch short-form content plan",
    "packages.launch.li3": "Stories / supporting content and campaign CTA",
    "packages.launch.li4": "Post-campaign performance report",
    "packages.launch.cta": "Plan a Launch Campaign",
    "packages.recommended": "Most requested",
    "packages.tailored": "Can be tailored to your brief",
    "packages.custom.kicker": "Custom scope",
    "packages.custom.title": "Long-term partnerships, retainers and special projects",
    "packages.custom.copy": "Available for ambassador programs, multi-video campaigns, event coverage, app and SaaS launches, paid usage/licensing, technical brand content and regional campaigns.",
    "packages.custom.cta": "Build a tailored package",
    "packages.addon.label": "OPTIONAL",
    "packages.addon.video": "Additional short-form content",
    "packages.addon.usage": "Paid usage / licensing",
    "packages.addon.landing": "Campaign landing page / tracking",
    "packages.addon.event": "Event or launch coverage",
    "expertise.kicker": "Technical depth",
    "expertise.title": "I build the tech.",
    "expertise.copy": "My technical background spans cybersecurity, production infrastructure, ecommerce, APIs and automation. That helps me understand products beyond the marketing brief — and communicate them with more substance.",
    "expertise.ai.title": "AI Agents",
    "expertise.ai.copy": "AI-assisted workflows, agentic automations, n8n, Zapier, ChatGPT, Gemini and Claude.",
    "expertise.security.title": "Cybersecurity",
    "expertise.security.copy": "Application and API security, hardening, vulnerability-focused troubleshooting and secure operations.",
    "expertise.cloudflare.copy": "CDN, WAF and edge controls, bot mitigation, caching, DNS and performance/security tuning.",
    "expertise.aws.copy": "Cloud infrastructure, Lightsail/compute operations, reliability, backups and production troubleshooting.",
    "expertise.servers.title": "Servers & Hosting",
    "expertise.servers.copy": "Linux, Apache/PHP stacks, domains, SSL, uptime, monitoring, performance and server operations.",
    "expertise.api.title": "APIs & Payments",
    "expertise.api.copy": "API integrations, payment gateways, checkout flows, CRM connections and external services.",
    "expertise.web.title": "Web & Ecommerce",
    "expertise.web.copy": "WordPress, WooCommerce, marketplaces, custom PHP/JS, UX, performance and digital operations.",
    "expertise.automation.title": "Automation",
    "expertise.automation.copy": "Operational workflows, CRM handoffs, dashboards, notifications and cross-system automation.",
    "projects.kicker": "How I work",
    "projects.title": "Build. Secure. Automate.",
    "projects.build.title": "Build & Scale",
    "projects.build.copy": "Marketplaces, ecommerce platforms, custom WordPress systems, APIs and integrations designed for real business operations.",
    "projects.secure.title": "Secure & Stabilize",
    "projects.secure.copy": "Cloudflare, application security, server hardening, monitoring, performance tuning and reliability improvements.",
    "projects.automate.title": "Automate & Connect",
    "projects.automate.copy": "AI agents, n8n, Zapier, CRM integrations and workflows that connect marketing, operations and customer systems.",
    "work.kicker": "Professional experience",
    "work.title": "8+ years in tech.",
    "work.copy": "My work sits between application delivery and production operations: servers, APIs, ecommerce, payments, platform security, performance and automation.",
    "work.rose.copy": "Built and scaled a marketplace platform and manage production systems across servers, APIs, payment integrations, performance, security improvements and automation.",
    "work.hamat.copy": "Managed multiple ecommerce platforms with responsibility for technical health, security, performance, CRM integrations and operational workflows.",
    "work.ohjiya.title": "Ohjiya Group - IT Consultant",
    "work.ohjiya.copy": "Developed CRM, CMS and LMS systems, managed cloud infrastructure, led Agile technical delivery and trained departments on systems and workflows.",
    "education.kicker": "Education",
    "education.title": "BSc Information Systems Security - Asia Pacific University (APU), Malaysia",
    "education.copy": "GPA 3.27. A cybersecurity-focused degree that supports my work across application security, infrastructure and digital platforms.",
    "education.resume": "Download full resume PDF",
    "fit.kicker": "Why the fit works",
    "fit.title": "Local insight. Real depth.",
    "fit.copy": "For technology brands, the value is not only reach. It is the ability to explain a product clearly, understand how it works and present it in a way that feels natural to Arabic-speaking audiences in Saudi Arabia and the GCC.",
    "fit.local.title": "Saudi & GCC context",
    "fit.local.copy": "Content is shaped for local language, buying behavior, launch timing and the way technology is discussed in the region.",
    "fit.tech.title": "Technical credibility",
    "fit.tech.copy": "Cybersecurity, cloud, servers, APIs, ecommerce and automation experience gives product stories more depth than a standard placement.",
    "fit.categories.title": "Strong technology fit",
    "fit.categories.copy": "Phones, gadgets, AI products, apps, SaaS, websites, ecommerce tools, cybersecurity services and digital platforms.",
    "fit.reporting.title": "Professional delivery",
    "fit.reporting.copy": "Clear scope, agreed deliverables, campaign timing, calls-to-action and a performance summary after delivery.",
    "brands.kicker": "Selected collaborations",
    "brands.title": "Trusted by global brands.",
    "brands.copy": "Selected collaborations and representation include:",
    "contact.title": "Let\u2019s work together.",
    "contact.copy": "For brand collaborations, launches or technical projects, send the brief below. You can also reach me directly by email, phone or WhatsApp.",
    "contact.phone": "Phone / WhatsApp",
    "contact.phoneNote": "Saudi Arabia",
    "contact.emailDirect": "Email",
    "contact.emailNote": "Brand & technical enquiries",
    "contact.resume": "Resume",
    "contact.resumeTitle": "Mazen Bassiso - PDF",
    "contact.resumeNote": "Cybersecurity, web, infrastructure & creator profile",
    "contact.email": "Work email",
    "contact.message": "Brief",
    "contact.emailPlaceholder": "you@company.com",
    "contact.messagePlaceholder": "Brand / product, campaign objective, deliverables and timing.",
    "contact.send": "Send by email",
    "footer.name": "Mazen Bassiso - Technology Creator & Cybersecurity Engineer - Riyadh"
  });

  Object.assign(translations.ar, {
    "brand.short": "مازن بسيسو",
    "nav.content": "المحتوى",
    "nav.expertise": "الخبرات",
    "nav.media": "الباقات",
    "nav.websites": "المنصات",
    "nav.work": "الخبرة",
    "hero.role": "صانع محتوى تقني • مهندس أمن سيبراني",
    "hero.location": "الرياض، المملكة العربية السعودية",
    "hero.availability": "متاح للتعاون مع العلامات التجارية ولمشاريع تقنية مختارة",
    "hero.lede": "أقدّم محتوى تقنياً عربياً للجمهور في السعودية والخليج، يغطي الهواتف والأجهزة والتطبيقات والذكاء الاصطناعي والمواقع والأدوات الرقمية، مع خلفية هندسية عملية تدعم جودة المحتوى ومصداقيته.",
    "hero.techNote": "إلى جانب صناعة المحتوى، أعمل عملياً على وكلاء الذكاء الاصطناعي، Cloudflare، AWS، خوادم Linux، أمن التطبيقات وواجهات API، أنظمة الدفع، التجارة الإلكترونية والأتمتة.",
    "hero.identity.nationality": "فلسطيني الجنسية",
    "hero.identity.birth": "مواليد المملكة العربية السعودية",
    "hero.identity.education": "خريج ماليزيا",
    "hero.packages": "عرض باقات التعاون",
    "hero.resume": "تحميل السيرة الذاتية PDF",
    "hero.phoneLabel": "الهاتف / واتساب",
    "hero.emailLabel": "البريد الإلكتروني",
    "signals.views": "مشاهدة شهرية للمحتوى التقني",
    "signals.years": "سنوات في الويب والأنظمة والبنية التحتية",
    "signals.degree": "أمن نظم المعلومات - APU، ماليزيا",
    "signals.brands": "علامات عالمية مختارة: Apple وGoogle وAmazon وMidea",
    "ticker.ai": "وكلاء ذكاء اصطناعي وأتمتة",
    "ticker.cloudflare": "Cloudflare وأمن الحافة",
    "ticker.security": "الأمن السيبراني وأمن API",
    "ticker.aws": "البنية السحابية على AWS",
    "ticker.servers": "خوادم Linux والاستضافة",
    "ticker.payments": "المدفوعات والتكاملات",
    "ticker.ecommerce": "التجارة الإلكترونية ومنصات الويب",
    "creator.kicker": "صناعة المحتوى",
    "creator.title": "تقنية يحب الناس مشاهدتها.",
    "creator.copy": "محتوى تقني قصير ومباشر للجمهور في السعودية والخليج؛ هواتف، أجهزة، ذكاء اصطناعي، تطبيقات وأدوات رقمية، بأسلوب عربي واضح وطبيعي.",
    "creator.proof.views": "مشاهدة شهرية عبر المنصات الاجتماعية",
    "creator.proof.tiktok": "مجتمع على TikTok",
    "creator.proof.brands": "تعاونات مختارة مع علامات عالمية",
    "creator.profile.title": "تقنية واضحة ومباشرة.",
    "creator.profile.copy": "اكتشاف منتجات، مراجعات عملية وتقنية مفيدة بصوت عربي طبيعي وسياق يناسب السوق السعودي والخليجي.",
    "creator.profile.shorts": "مشاهدة Shorts ↗",
    "creator.shorts.title": "أحدث المقاطع القصيرة",
    "creator.shorts.all": "عرض جميع Shorts ↗",
    "creator.feed.kicker": "أحدث المحتوى",
    "creator.feed.title": "أحدث الفيديوهات التقنية.",
    "creator.feed.note": "ثلاث منصات في عرض واحد",
    "creator.feed.followers": "متابعين",
    "creator.feed.posts": "منشورات",
    "creator.feed.likes": "إعجابات",
    "creator.feed.subscribers": "مشتركين",
    "creator.feed.videos": "فيديو",
    "creator.feed.instagramOpen": "فتح Reels على Instagram",
    "creator.feed.tiktokStat": "مجتمع يتجاوز 700 ألف",
    "creator.feed.tiktokCopy": "شرح تقني سريع، اكتشاف منتجات وأدوات عملية لجمهور عربي في السعودية والخليج.",
    "creator.feed.tiktokLoad": "تحميل المعاينة المباشرة",
    "creator.feed.tiktokOpen": "فتح TikTok ↗",
    "creator.feed.youtube": "مشاهدة مكتبة Shorts",
    "creator.feed.youtubeCopy": "مراجعات سريعة، أدوات مفيدة وشرح تقني مختصر.",
    "creator.feed.youtubeOpen": "فتح YouTube Shorts",
    "creator.feed.tag1": "هواتف",
    "creator.feed.tag2": "أدوات AI",
    "creator.feed.tag3": "نصائح ويب",
    "packages.kicker": "تعاونات العلامات التجارية",
    "packages.title": "حملات واضحة. تنفيذ مرن.",
    "packages.copy": "نطاقات بداية لأكثر احتياجات العلامات شيوعاً، ويمكن تخصيص كل باقة على TikTok وInstagram وYouTube حسب البريف وحقوق الاستخدام وأهداف الحملة.",
    "packages.feature.price": "ابتداءً من 2,500 ريال سعودي",
    "packages.feature.title": "إبراز منتج تقني",
    "packages.feature.for": "مناسب لزيادة الوعي بمنتج أو ميزة جديدة أو تطبيق أو جهاز أو إعلان محدد.",
    "packages.feature.li1": "فيديو تقني قصير واحد",
    "packages.feature.li2": "النشر على منصة أساسية يتم الاتفاق عليها",
    "packages.feature.li3": "ذكر العلامة ورسالة المنتج ودعوة إجراء واضحة",
    "packages.feature.li4": "ملخص أساسي لأداء المحتوى بعد النشر",
    "packages.feature.cta": "طلب عرض لمنتج تقني",
    "packages.review.price": "ابتداءً من 4,500 ريال سعودي",
    "packages.review.title": "مراجعة وتجربة عملية",
    "packages.review.for": "مناسب للمنتجات والأدوات التي تحتاج شرحاً عملياً واستخداماً واضحاً أمام الجمهور.",
    "packages.review.li1": "تجربة المنتج وتحديد زاوية المحتوى",
    "packages.review.li2": "فيديو مراجعة أو استعراض مخصص واحد",
    "packages.review.li3": "دعم عبر إعادة النشر أو الستوري حسب الاتفاق",
    "packages.review.li4": "ملخص أداء الحملة",
    "packages.review.cta": "طلب مراجعة",
    "packages.launch.price": "ابتداءً من 7,500 ريال سعودي",
    "packages.launch.title": "حملة إطلاق",
    "packages.launch.for": "مناسب لإطلاق المنتجات والدخول إلى السوق السعودي أو الخليجي والحملات التي تحتاج أكثر من نقطة تواصل.",
    "packages.launch.li1": "فكرة الحملة وزاوية الرسالة",
    "packages.launch.li2": "خطة محتوى قصير متعددة نقاط التواصل",
    "packages.launch.li3": "ستوري أو محتوى داعم ودعوة إجراء للحملة",
    "packages.launch.li4": "تقرير أداء بعد الحملة",
    "packages.launch.cta": "تخطيط حملة إطلاق",
    "packages.recommended": "الأكثر طلباً",
    "packages.tailored": "قابلة للتخصيص حسب البريف",
    "packages.custom.kicker": "نطاق مخصص",
    "packages.custom.title": "شراكات طويلة الأجل، عقود شهرية ومشاريع خاصة",
    "packages.custom.copy": "متاح لبرامج السفراء، الحملات متعددة الفيديو، تغطية الفعاليات، إطلاق التطبيقات وSaaS، حقوق الاستخدام الإعلاني، المحتوى التقني للعلامات والحملات الإقليمية.",
    "packages.custom.cta": "بناء باقة مخصصة",
    "packages.addon.label": "اختياري",
    "packages.addon.video": "محتوى قصير إضافي",
    "packages.addon.usage": "حقوق استخدام / ترخيص إعلاني",
    "packages.addon.landing": "صفحة هبوط أو تتبع للحملة",
    "packages.addon.event": "تغطية فعالية أو إطلاق",
    "expertise.kicker": "الخبرة التقنية",
    "expertise.title": "أبني التقنية.",
    "expertise.copy": "خلفيتي العملية تشمل الأمن السيبراني، البنية التحتية الإنتاجية، التجارة الإلكترونية، واجهات API والأتمتة. هذا يساعدني على فهم المنتجات تقنياً وتقديمها بمحتوى أكثر عمقاً ومصداقية.",
    "expertise.ai.title": "وكلاء الذكاء الاصطناعي",
    "expertise.ai.copy": "تدفقات عمل مدعومة بالذكاء الاصطناعي وأتمتة Agentic باستخدام n8n وZapier وChatGPT وGemini وClaude.",
    "expertise.security.title": "الأمن السيبراني",
    "expertise.security.copy": "أمن التطبيقات وواجهات API، التحصين، معالجة الثغرات وممارسات التشغيل الآمن.",
    "expertise.cloudflare.copy": "CDN وWAF وضوابط الحافة، تخفيف البوتات، الكاش، DNS وضبط الأداء والأمان.",
    "expertise.aws.copy": "بنية سحابية وتشغيل خدمات AWS وLightsail، الاعتمادية، النسخ الاحتياطي ومعالجة مشاكل الإنتاج.",
    "expertise.servers.title": "الخوادم والاستضافة",
    "expertise.servers.copy": "Linux وApache/PHP والنطاقات وSSL ومراقبة الاستضافة والأداء وتشغيل الخوادم.",
    "expertise.api.title": "واجهات API والمدفوعات",
    "expertise.api.copy": "تكاملات API وبوابات الدفع ومسارات checkout وربط CRM والخدمات الخارجية.",
    "expertise.web.title": "الويب والتجارة الإلكترونية",
    "expertise.web.copy": "WordPress وWooCommerce والأسواق الرقمية وPHP/JS وتجربة المستخدم والأداء والتشغيل الرقمي.",
    "expertise.automation.title": "الأتمتة",
    "expertise.automation.copy": "تدفقات تشغيل، ربط CRM، لوحات متابعة، تنبيهات وأتمتة بين الأنظمة.",
    "projects.kicker": "أسلوب العمل",
    "projects.title": "ابنِ. أمّن. أتمت.",
    "projects.build.title": "بناء وتوسّع",
    "projects.build.copy": "أسواق ومتاجر إلكترونية وأنظمة WordPress مخصصة وواجهات API وتكاملات مصممة للاستخدام التشغيلي الحقيقي.",
    "projects.secure.title": "أمان واستقرار",
    "projects.secure.copy": "Cloudflare وأمن التطبيقات وتحسين الخوادم والمراقبة والأداء والاعتمادية.",
    "projects.automate.title": "أتمتة وربط",
    "projects.automate.copy": "وكلاء ذكاء اصطناعي وn8n وZapier وربط CRM وتدفقات تصل التسويق بالعمليات وخدمة العملاء.",
    "work.kicker": "الخبرة المهنية",
    "work.title": "8+ سنوات في التقنية.",
    "work.copy": "أعمل بين تطوير التطبيقات وتشغيل بيئات الإنتاج: الخوادم، API، التجارة الإلكترونية، المدفوعات، أمان المنصات، الأداء والأتمتة.",
    "work.rose.copy": "بناء وتوسعة منصة سوق وإدارة أنظمة الإنتاج عبر الخوادم وواجهات API وتكاملات الدفع وتحسين الأداء والأمان والأتمتة.",
    "work.hamat.copy": "إدارة عدة منصات تجارة إلكترونية مع مسؤولية الصحة التقنية والأمان والأداء وربط CRM وتدفقات التشغيل.",
    "work.ohjiya.title": "Ohjiya Group - مستشار تقنية معلومات",
    "work.ohjiya.copy": "تطوير أنظمة CRM وCMS وLMS وإدارة البنية السحابية وقيادة التسليم التقني بأسلوب Agile وتدريب الفرق على الأنظمة وتدفقات العمل.",
    "education.kicker": "التعليم",
    "education.title": "بكالوريوس أمن نظم المعلومات - Asia Pacific University (APU)، ماليزيا",
    "education.copy": "المعدل 3.27. دراسة متخصصة في الأمن السيبراني تدعم عملي في أمن التطبيقات والبنية التحتية والمنصات الرقمية.",
    "education.resume": "تحميل السيرة الذاتية كاملة PDF",
    "fit.kicker": "لماذا هذا التعاون مناسب",
    "fit.title": "فهم محلي. عمق تقني.",
    "fit.copy": "بالنسبة للعلامات التقنية، القيمة ليست في الوصول فقط؛ بل في القدرة على فهم المنتج وشرحه بوضوح وتقديمه بطريقة طبيعية للجمهور العربي في السعودية والخليج.",
    "fit.local.title": "سياق سعودي وخليجي",
    "fit.local.copy": "المحتوى يراعي اللغة المحلية وسلوك الشراء وتوقيت الإطلاق وطريقة الحديث عن التقنية في المنطقة.",
    "fit.tech.title": "مصداقية تقنية",
    "fit.tech.copy": "الخبرة في الأمن السيبراني والسحابة والخوادم وAPI والتجارة الإلكترونية والأتمتة تضيف عمقاً أكبر لقصة المنتج.",
    "fit.categories.title": "ملاءمة قوية للقطاع التقني",
    "fit.categories.copy": "هواتف وأجهزة وذكاء اصطناعي وتطبيقات وSaaS ومواقع وأدوات تجارة إلكترونية وخدمات أمن سيبراني ومنصات رقمية.",
    "fit.reporting.title": "تنفيذ مهني",
    "fit.reporting.copy": "نطاق واضح، مخرجات متفق عليها، توقيت للحملة، دعوات إجراء وملخص أداء بعد التنفيذ.",
    "brands.kicker": "تعاونات مختارة",
    "brands.title": "ثقة علامات عالمية.",
    "brands.copy": "من التعاونات والتمثيل المختار:",
    "contact.title": "لنبدأ تعاوناً.",
    "contact.copy": "للتعاونات وإطلاق المنتجات أو المشاريع التقنية، أرسل البريف أدناه أو تواصل مباشرة عبر البريد أو الهاتف أو واتساب.",
    "contact.phone": "الهاتف / واتساب",
    "contact.phoneNote": "المملكة العربية السعودية",
    "contact.emailDirect": "البريد الإلكتروني",
    "contact.emailNote": "للتعاونات والمشاريع التقنية",
    "contact.resume": "السيرة الذاتية",
    "contact.resumeTitle": "مازن بسيسو - PDF",
    "contact.resumeNote": "أمن سيبراني، ويب، بنية تحتية وصناعة محتوى",
    "contact.email": "البريد المهني",
    "contact.message": "تفاصيل الطلب",
    "contact.emailPlaceholder": "you@company.com",
    "contact.messagePlaceholder": "العلامة / المنتج، هدف الحملة، المخرجات المطلوبة والتوقيت.",
    "contact.send": "إرسال عبر البريد",
    "footer.name": "مازن بسيسو - صانع محتوى تقني ومهندس أمن سيبراني - الرياض"
  });

  const loadExternalScript = (src, id, onload) => {
    const existing = document.getElementById(id);
    if (existing) {
      if (onload) onload();
      return existing;
    }
    const script = document.createElement("script");
    script.id = id;
    script.src = src;
    script.async = true;
    if (onload) script.onload = onload;
    document.body.appendChild(script);
    return script;
  };

  function loadInstagramEmbed() {
    const host = document.querySelector("[data-social-embeds]");
    if (!host || host.dataset.instagramLoaded === "1") return;
    host.dataset.instagramLoaded = "1";
    loadExternalScript("https://www.instagram.com/embed.js", "instagram-embed-sdk", () => {
      if (window.instgrm && window.instgrm.Embeds) window.instgrm.Embeds.process();
    });
  }

  function loadTikTokPreview() {
    const preview = document.querySelector("[data-tiktok-preview]");
    const button = document.querySelector("[data-load-tiktok]");
    const placeholder = document.querySelector("[data-tiktok-placeholder]");
    if (!preview || !button || preview.dataset.loaded === "1") return;
    preview.hidden = false;
    preview.dataset.loaded = "1";
    if (placeholder) placeholder.hidden = true;
    button.disabled = true;
    button.textContent = document.documentElement.lang === "ar" ? "جارٍ تحميل TikTok..." : "Loading TikTok...";
    loadExternalScript("https://www.tiktok.com/embed.js", "tiktok-embed-sdk", () => {
      button.hidden = true;
    });
    setTimeout(() => {
      if (!button.hidden) {
        button.disabled = false;
        button.textContent = document.documentElement.lang === "ar" ? "إعادة تحميل المعاينة" : "Reload live preview";
      }
    }, 6500);
  }

  const tiktokLoadButton = document.querySelector("[data-load-tiktok]");
  if (tiktokLoadButton) tiktokLoadButton.addEventListener("click", loadTikTokPreview);

  const socialHost = document.querySelector("[data-social-embeds]");
  if (socialHost && "IntersectionObserver" in window) {
    const socialObserver = new IntersectionObserver((entries, observer) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        loadInstagramEmbed();
        observer.disconnect();
      }
    }, { rootMargin: "420px 0px" });
    socialObserver.observe(socialHost);
  } else {
    loadInstagramEmbed();
  }

  const state = {
    language: savedLanguage
  };

  const startButton = document.getElementById("startGame");
  const resetButton = document.getElementById("resetGame");
  const announcement = document.getElementById("gameAnnouncement");
  const arcadeCanvas = document.getElementById("arcadeGame");
  const arcadeContext = arcadeCanvas.getContext("2d");
  const gameScoreValue = document.getElementById("gameScoreValue");
  const gameLivesValue = document.getElementById("gameLivesValue");

  if (savedTheme === "dark") {
    body.dataset.theme = "dark";
    root.dataset.theme = "dark";
  }

  function t(key) {
    return translations[state.language][key] || translations.en[key] || key;
  }

  function applyLanguage(language) {
    state.language = language;
    root.lang = language;
    root.dir = language === "ar" ? "rtl" : "ltr";
    body.dataset.lang = language;
    localStorage.setItem("mazen-language", language);
    langToggle.textContent = language === "ar" ? "EN" : "عربي";
    langToggle.setAttribute("aria-label", language === "ar" ? "Switch to English" : "التبديل إلى العربية");

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      element.textContent = t(element.dataset.i18n);
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
      element.setAttribute("placeholder", t(element.dataset.i18nPlaceholder));
    });

    updateArcadeLabels();
    drawArcade();
  }

  const arcade = {
    width: 640,
    height: 460,
    running: false,
    started: false,
    score: 0,
    lives: 3,
    level: 1,
    lastTime: 0,
    keys: new Set(),
    paddle: { x: 260, y: 418, width: 118, height: 14, speed: 520 },
    ball: { x: 320, y: 320, radius: 8, vx: 210, vy: -255 },
    bricks: [],
    powerups: [],
    particles: []
  };

  const brickLabels = ["SEO", "API", "WP", "UX", "CDN", "PHP", "PAY", "GA4"];

  function updateArcadeLabels() {
    if (!startButton || !resetButton) return;
    startButton.textContent = arcade.running ? t("game.pause") : arcade.started ? t("game.resume") : t("game.start");
    resetButton.textContent = t("game.reset");
    updateArcadeHud();
  }

  function updateArcadeHud() {
    gameScoreValue.textContent = String(arcade.score);
    gameLivesValue.textContent = String(arcade.lives);
  }

  function resetBall() {
    arcade.ball.x = arcade.width / 2;
    arcade.ball.y = arcade.height - 118;
    const speed = 245 + arcade.level * 18;
    arcade.ball.vx = (Math.random() > 0.5 ? 1 : -1) * (speed * 0.72);
    arcade.ball.vy = -speed;
    arcade.paddle.x = arcade.width / 2 - arcade.paddle.width / 2;
  }

  function buildBricks() {
    arcade.bricks = [];
    const columns = 8;
    const rows = Math.min(5, 3 + arcade.level);
    const gap = 8;
    const top = 64;
    const brickWidth = (arcade.width - 44 - gap * (columns - 1)) / columns;
    const brickHeight = 28;

    for (let row = 0; row < rows; row += 1) {
      for (let column = 0; column < columns; column += 1) {
        arcade.bricks.push({
          x: 22 + column * (brickWidth + gap),
          y: top + row * (brickHeight + gap),
          width: brickWidth,
          height: brickHeight,
          label: brickLabels[(row + column) % brickLabels.length],
          color: [ "#ffca2f", "#00a7a5", "#ff5a3d", "#9ddd42" ][(row + column) % 4]
        });
      }
    }
  }

  function resetArcade() {
    arcade.running = false;
    arcade.started = false;
    arcade.score = 0;
    arcade.lives = 3;
    arcade.level = 1;
    arcade.powerups = [];
    arcade.particles = [];
    arcade.paddle.width = 118;
    buildBricks();
    resetBall();
    updateArcadeHud();
    updateArcadeLabels();
    drawArcade();
  }

  function spawnParticles(x, y, color, count) {
    for (let index = 0; index < count; index += 1) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 60 + Math.random() * 180;
      arcade.particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        age: 0,
        life: 0.35 + Math.random() * 0.35,
        color
      });
    }
  }

  function toggleArcade() {
    if (arcade.lives <= 0) resetArcade();
    arcade.started = true;
    arcade.running = !arcade.running;
    updateArcadeLabels();
    if (arcade.running) {
      arcade.lastTime = performance.now();
      requestAnimationFrame(arcadeLoop);
    } else {
      drawArcade();
    }
  }

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function updateArcade(delta) {
    if (arcade.keys.has("ArrowLeft") || arcade.keys.has("a")) {
      arcade.paddle.x -= arcade.paddle.speed * delta;
    }
    if (arcade.keys.has("ArrowRight") || arcade.keys.has("d")) {
      arcade.paddle.x += arcade.paddle.speed * delta;
    }
    arcade.paddle.x = clamp(arcade.paddle.x, 0, arcade.width - arcade.paddle.width);

    const ball = arcade.ball;
    ball.x += ball.vx * delta;
    ball.y += ball.vy * delta;

    if (ball.x < ball.radius || ball.x > arcade.width - ball.radius) {
      ball.vx *= -1;
      ball.x = clamp(ball.x, ball.radius, arcade.width - ball.radius);
    }
    if (ball.y < ball.radius) {
      ball.vy *= -1;
      ball.y = ball.radius;
    }

    const paddle = arcade.paddle;
    if (
      ball.y + ball.radius >= paddle.y &&
      ball.y - ball.radius <= paddle.y + paddle.height &&
      ball.x >= paddle.x &&
      ball.x <= paddle.x + paddle.width &&
      ball.vy > 0
    ) {
      const hit = (ball.x - (paddle.x + paddle.width / 2)) / (paddle.width / 2);
      ball.vx = hit * (265 + arcade.level * 24);
      ball.vy = -Math.abs(ball.vy) - 8;
      spawnParticles(ball.x, paddle.y, "#00a7a5", 8);
    }

    for (let index = arcade.bricks.length - 1; index >= 0; index -= 1) {
      const brick = arcade.bricks[index];
      if (
        ball.x + ball.radius > brick.x &&
        ball.x - ball.radius < brick.x + brick.width &&
        ball.y + ball.radius > brick.y &&
        ball.y - ball.radius < brick.y + brick.height
      ) {
        arcade.bricks.splice(index, 1);
        ball.vy *= -1;
        arcade.score += 10 * arcade.level;
        spawnParticles(brick.x + brick.width / 2, brick.y + brick.height / 2, brick.color, 14);
        if (Math.random() < 0.2) {
          arcade.powerups.push({ x: brick.x + brick.width / 2, y: brick.y, vy: 95, type: Math.random() > 0.5 ? "wide" : "life" });
        }
        break;
      }
    }

    for (let index = arcade.powerups.length - 1; index >= 0; index -= 1) {
      const powerup = arcade.powerups[index];
      powerup.y += powerup.vy * delta;
      if (
        powerup.y + 10 >= paddle.y &&
        powerup.x >= paddle.x &&
        powerup.x <= paddle.x + paddle.width
      ) {
        if (powerup.type === "wide") {
          paddle.width = Math.min(168, paddle.width + 22);
        } else {
          arcade.lives = Math.min(5, arcade.lives + 1);
        }
        arcade.score += 25;
        arcade.powerups.splice(index, 1);
        spawnParticles(powerup.x, powerup.y, "#9ddd42", 14);
      } else if (powerup.y > arcade.height + 20) {
        arcade.powerups.splice(index, 1);
      }
    }

    if (ball.y > arcade.height + 24) {
      arcade.lives -= 1;
      if (arcade.lives <= 0) {
        arcade.running = false;
        arcade.started = false;
        announcement.textContent = t("game.over");
      }
      resetBall();
    }

    if (arcade.bricks.length === 0) {
      arcade.level += 1;
      arcade.score += 100;
      arcade.paddle.width = 118;
      buildBricks();
      resetBall();
      announcement.textContent = `${t("game.level")} ${arcade.level}`;
    }

    for (let index = arcade.particles.length - 1; index >= 0; index -= 1) {
      const particle = arcade.particles[index];
      particle.age += delta;
      particle.x += particle.vx * delta;
      particle.y += particle.vy * delta;
      particle.vy += 280 * delta;
      if (particle.age >= particle.life) arcade.particles.splice(index, 1);
    }

    updateArcadeHud();
    updateArcadeLabels();
  }

  function drawRoundRect(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.arcTo(x + width, y, x + width, y + height, radius);
    ctx.arcTo(x + width, y + height, x, y + height, radius);
    ctx.arcTo(x, y + height, x, y, radius);
    ctx.arcTo(x, y, x + width, y, radius);
    ctx.closePath();
  }

  function drawArcade() {
    const ctx = arcadeContext;
    ctx.clearRect(0, 0, arcade.width, arcade.height);
    ctx.fillStyle = "#0b1014";
    ctx.fillRect(0, 0, arcade.width, arcade.height);

    ctx.strokeStyle = "rgba(247, 250, 252, 0.08)";
    ctx.lineWidth = 1;
    for (let x = 0; x < arcade.width; x += 32) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, arcade.height);
      ctx.stroke();
    }
    for (let y = 0; y < arcade.height; y += 32) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(arcade.width, y);
      ctx.stroke();
    }

    ctx.fillStyle = "#f7fafc";
    ctx.font = "900 14px system-ui, sans-serif";
    ctx.textAlign = "left";
    ctx.fillText(`${t("game.level")} ${arcade.level}`, 22, 34);

    arcade.bricks.forEach((brick) => {
      ctx.fillStyle = brick.color;
      drawRoundRect(ctx, brick.x, brick.y, brick.width, brick.height, 7);
      ctx.fill();
      ctx.strokeStyle = "#111315";
      ctx.lineWidth = 3;
      ctx.stroke();
      ctx.fillStyle = "#111315";
      ctx.font = "900 12px system-ui, sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(brick.label, brick.x + brick.width / 2, brick.y + brick.height / 2 + 1);
    });

    arcade.powerups.forEach((powerup) => {
      ctx.fillStyle = powerup.type === "wide" ? "#00a7a5" : "#9ddd42";
      ctx.beginPath();
      ctx.arc(powerup.x, powerup.y, 11, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#111315";
      ctx.font = "900 11px system-ui, sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(powerup.type === "wide" ? "W" : "+", powerup.x, powerup.y + 1);
    });

    arcade.particles.forEach((particle) => {
      ctx.globalAlpha = 1 - particle.age / particle.life;
      ctx.fillStyle = particle.color;
      ctx.fillRect(particle.x, particle.y, 4, 4);
    });
    ctx.globalAlpha = 1;

    const paddle = arcade.paddle;
    ctx.fillStyle = "#f7fafc";
    drawRoundRect(ctx, paddle.x, paddle.y, paddle.width, paddle.height, 8);
    ctx.fill();
    ctx.fillStyle = "#ff5a3d";
    ctx.fillRect(paddle.x + paddle.width * 0.38, paddle.y + 3, paddle.width * 0.24, paddle.height - 6);

    const ball = arcade.ball;
    ctx.fillStyle = "#ffca2f";
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fill();

    if (!arcade.running) {
      ctx.fillStyle = "rgba(11, 16, 20, 0.72)";
      ctx.fillRect(0, 0, arcade.width, arcade.height);
      ctx.fillStyle = "#f7fafc";
      ctx.font = "950 34px system-ui, sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(arcade.lives <= 0 ? t("game.over") : t("game.ready"), arcade.width / 2, arcade.height / 2 - 4);
    }
  }

  function arcadeLoop(now) {
    if (!arcade.running) {
      drawArcade();
      return;
    }
    const delta = Math.min(0.033, (now - arcade.lastTime) / 1000 || 0);
    arcade.lastTime = now;
    updateArcade(delta);
    drawArcade();
    requestAnimationFrame(arcadeLoop);
  }

  function setPaddleFromClientX(clientX) {
    const rect = arcadeCanvas.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * arcade.width;
    arcade.paddle.x = clamp(x - arcade.paddle.width / 2, 0, arcade.width - arcade.paddle.width);
    drawArcade();
  }

  function isTypingTarget(target) {
    return target instanceof Element && Boolean(target.closest("input, textarea, select, [contenteditable='true']"));
  }

  function isActionTarget(target) {
    return target instanceof Element && Boolean(target.closest("button, a, input, textarea, select, [contenteditable='true']"));
  }

  function isGameVisible() {
    const rect = document.getElementById("game").getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
  }

  themeToggle.addEventListener("click", () => {
    const nextTheme = body.dataset.theme === "dark" ? "light" : "dark";
    if (nextTheme === "dark") {
      body.dataset.theme = "dark";
      root.dataset.theme = "dark";
      localStorage.setItem("mazen-theme", "dark");
    } else {
      delete body.dataset.theme;
      delete root.dataset.theme;
      localStorage.setItem("mazen-theme", "light");
    }
  });

  langToggle.addEventListener("click", () => {
    applyLanguage(state.language === "ar" ? "en" : "ar");
  });

  startButton.addEventListener("click", () => {
    toggleArcade();
  });

  resetButton.addEventListener("click", () => {
    resetArcade();
  });

  window.addEventListener("keydown", (event) => {
    if (isTypingTarget(event.target) || !isGameVisible()) return;

    const key = event.key.length === 1 ? event.key.toLowerCase() : event.key;
    if (["ArrowLeft", "ArrowRight", "a", "d"].includes(key)) {
      arcade.keys.add(key);
      event.preventDefault();
    }
    if (event.key === " " && !isActionTarget(event.target)) {
      toggleArcade();
      event.preventDefault();
    }
  });

  window.addEventListener("keyup", (event) => {
    arcade.keys.delete(event.key.length === 1 ? event.key.toLowerCase() : event.key);
  });

  arcadeCanvas.addEventListener("pointermove", (event) => {
    setPaddleFromClientX(event.clientX);
  });

  arcadeCanvas.addEventListener("pointerdown", (event) => {
    setPaddleFromClientX(event.clientX);
    if (!arcade.running) toggleArcade();
  });

  const scrollToTop = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"
    });
    if (window.location.hash) {
      history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
    }
  };

  document.querySelectorAll('[data-scroll-top], a[href="#top"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      scrollToTop(event);
    });
  });

  document.getElementById("year").textContent = new Date().getFullYear();

  const contactForm = document.getElementById("contactForm");
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(contactForm);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    const subject = encodeURIComponent(`Project inquiry from ${name || "website visitor"}`);
    const bodyText = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`);
    window.location.href = `mailto:mazen.bassiso@gmail.com?subject=${subject}&body=${bodyText}`;
  });

  resetArcade();
  applyLanguage(state.language === "ar" ? "ar" : "en");
})();
