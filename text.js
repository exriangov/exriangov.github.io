let currentLang = 0;
let t = document.querySelectorAll(".t");

let textData = {
    beta: [
        "This website is in beta. Join https://discord.gg/YYwbMcHMKP and give us your feedback and suggestions.",
        "هذه الموقع في مرحلة Beta. انضم إلى https://discord.gg/YYwbMcHMKP وأعطنا آراءكم واقتراحاتكم.",
        "Este sitio web se encuentra en fase beta. Únete a https://discord.gg/YYwbMcHMKP y danos tus feedback y sugerencias."
    ],
    title: ["Sultanate of Exrio", "السلطنة الإكسروانية", "Sultanato de Exria"],
    about: ["About", "معلومات", "Información"],
    legal: ["Legal", "شؤون قانونية", "Legal"],
    community: ["Community", "مجتمع", "Comunidad"],
    education: ["Education", "تعليم", "Educación"],
    careers: ["Careers", "مهن", "Carreras"],
    diplomacy: ["Diplomacy", "دبلوماسية", "Diplomacía"],
    welcome: ["Welcome to Exrio", "مرحبا بكم في إكسريا", "Bienvenidos a Exria"],
    welcome_msg: [
        "Official information, news, updates and advice from the Exrian Government.",
        "معلومات, أخبار ,تحديثات ونصائح رسمية من الحكومة الإكسروانية",
        "Informacíon, noticias, novedades y consejos oficiales del Gobierno Exriano."
    ],
    quick_links: ["Quick links", "روابط سريعة", "Enlaces Rápidos"],
    covid_box_title: ["Info on Covid", "معلومات عن كوفيد", "Informacíon sobre el Covid"],
    covid_box_desc: [
        "Learn more about COVID-19 and how to keep you and those around you safe.",
        "تعلم أكثر عن كوفيد وكيفية إبقاء نفسك وإبقاء من حولك سالمين",
        "Aprende más información sobre COVID-19 y cómo mantener su seguridad y la de quienes lo rodean."
    ],
    citizenship_box_title: ["Citizenship", "الجنسية", "Ciudadanía"],
    citizenship_box_desc: [
        "Apply for a citizenship",
        "قدم لجنسية",
        "Solicitar una ciudadanía"
    ],
    covid_title: ["Coronavirus", "فيروس كورونا", "Coronavirús"],
    careers_title: ["Careers", "مهن", "Carreras"],
    careers_desc: ["Opportunities for you", "فرص لكم", "Oportunidades para tí"],
    guardian_box_title: ["Guardian"],
    guardian_box_desc: ["A guardian ensures that all civlians are safe in our online communities and is an enforcer of the law."],
    council_member_box_title: ["Council Member"],
    council_member_box_desc: ["A council member is involved in the decision making and discussion of affairs upon summoning of the Sultan."],
    translator_box_title: ["Translator"],
    translator_box_desc: ["A translator translates content into different languages or amends already exisiting translations"],
    ack: [
        "We acknowledge the Traditional Custodians of the land in which the Sultanate of Exrio stands. We pay our respect to their Elders past and present and extend that respect to all Aboriginal and Torres Strait Islander peoples.",
        "نحن نعترف بالأمناء التقليديين للأرض الذي تقوم عليها سلطنة إكسريا. نحن نقدم الاحترام للشيوخ من الماضي والحاضر ونقدم ذلك الاحترام لجميع الشعوب الأصلية وشعوب جزر مضيق توريس.",
        "Reconocemos a los Custodios Tradicionales de la tierra en la que se encuentra el Sultanato de Exrio. Presentamos nuestro respeto a sus Ancianos del pasado y del presente y extendemos ese respeto a todos los pueblos aborígenes e isleños del Estrecho de Torres."
    ]
}

function changeLanguage(value) {
    currentLang = value;
    updateText();
}

function updateText() {
    t.forEach(el => {
        for (let i = 0; i < Object.keys(textData).length; i++) {
            if (el.classList[0] == Object.keys(textData)[i]) {
                el.innerHTML = Object.values(textData)[i][currentLang];
                /*if (currentLang != 1) redirect.children[1].firstElementChild.style.direction = "ltr";
                else redirect.children[1].firstElementChild.style.direction = "rtl";*/
            }
        }
    });
}

updateText();