import Vue from "vue"
import Vuex from "vuex"
import BlogEntries from '../statics/blog.js';

Vue.use(Vuex)

function defaultState() {
  return {
    content: {
      current: "en",
      de: {
        skills: "Damit habe ich bereits gearbeitet...",
        projects: "Einige meiner letzten Projekte",
        projectsSubline: "From URL shortening and Open-Source libraries, to secure email forwarding, everything I built has the goal to help simplify tasks and protect users privacy. Here are some of the things I built in the last year:",
        projectsDev: 'Im Moment arbeite ich an einem open-source, self-hosted URL kürzer und an MailPal, einer Platform welche dabei hilft deine Inbox von Spam frei zuhalten und deine Privatsphäre zu schützen.',
        link:{
          click: "Klicke",
          here: "hier",
          more: "um mehr zu sehen"
        },
        gallery: "Fotogalerie",
        inprint: "Impressum",
        followInstagram: "Folg mir auf Instagram",
        contactHead: "Sag Hallo!",
        contactSub: "Du hast eine Frage? Willst einfach mal Hi sagen? Egal was, schreib mir einfach!",
        name: "Name",
        email: "Email",
        message: "Nachricht",
        messagePlaceholder: "Deine Frage, Feedback oder Nachricht kommt hier her",
        reachOut: "Abschicken",
        orEmail: "Oder sende mir direkt eine Email an",
        by: "von",
        errorUnknown: 'Es ist ein Fehler aufgetreten, bitter versuche es erneut',
        success: "Deine Nachricht wurde abgeschickt!",
        errorContact: "Deine Nachricht konnte leider nicht abgeschickt werden",
        error: "Fehler",
        notFound: "Diese Seite existiert nicht",
        backHome: "Zurück",
        reportProblem: "Ein Problem melden",
        loading: "Lädt...",
        loadingImage: "Lädt Vollbild...",
        loadingExperience: "Lädt Experience...",
        loadingError: "Fehler: Der Inhalt konnte nicht geladen werden",
        messages: [
          "Hallo, mein Name ist Maximilian",
          "Ich bin 17 Jahre alt und komme vom wunderschönen Bodensee",
          "In meiner Freizeit mache ich viel mit Vue.js und Node.js",
          "Neben dem programmieren gehört auch fotografie zu meinen Hobbys",
          "Im Internet findet man mich unter dem handle @BetaHuhn"
        ],
        endText: "Oder schreib mich direkt an: hello@mxis.ch",
      },
      en: {
        skills: "Some things I know...",
        projects: "Some of my recent Projects",
        projectsSubline: "From URL shortening and Open-Source libraries, to secure email forwarding, everything I built has the goal to help simplify tasks and protect users privacy. Here are some of the things I built in the last year:",
        projectsDev: 'Currently I am building a self-hosted, open-source URL shortener and extending my email forwarding service into MailPal, a fully featured platform which helps you keep your inbox free and stops companies from tracking you around the internet.',
        link:{
          click: "Click",
          here: "here",
          more: "to see more"
        },
        gallery: "Photo Gallery",
        inprint: "Inprint",
        followInstagram: "Follow me on Instagram",
        contactHead: "Lets talk!",
        contactSub: "Have a question? Just want to say Hi? Either way, reach out!",
        name: "Name",
        email: "Email",
        message: "Message",
        messagePlaceholder: "Your question, feedback or message goes here",
        reachOut: "Reach out!",
        orEmail: "or send an email directly to",
        by: "by",
        errorUnknown: 'An error ocurred, please try again.',
        success: "Your message was sent!",
        errorContact: "Your message couldn't be sent, sorry",
        error: "Error",
        notFound: "This page doesn't exist",
        backHome: "Go back home",
        reportProblem: "Report a problem",
        loading: "Loading...",
        loadingImage: "Loading Image...",
        loadingExperience: "Loading Experience...",
        loadingError: "Error: Couldn't load content",
        messages: [
          "Hello, my Name is Maximilian",
          "I'm a 17 year old student from Germany",
          "I mostly do Web Desgin/Developement with Vue.js and Node.js",
          "I also have a passion for photograhpy",
          "You can find me around the Internet by the handle @BetaHuhn"
        ],
        endText: "Or directly send me an email: hello@mxis.ch",
      }
    },
    bashConsole: {
      hostname: "betahuhn@MaxServer",
      path: "/about",
      currentIndex: 0,
      currentText: "",
      isFinished: false,
    },
    skills: [
      {
        name: "HTML5 • CSS • JavaScript",
        description: "Fundamental Web Development",
        icon: ['fab', "html5"],
        color: "#EC5F38"
      },
      {
        name: "Vue.js",
        description: "Frontend Web Development",
        icon: ['fab', "vuejs"],
        color: "#41B883"
      },
      {
        name: "NodeJS • MongoDB • ExpressJS",
        description: "Backend Web Development",
        icon: ['fab', "node-js"],
        color: "#659E5A"
      },
      {
        name: "TypeScript",
        description: "Software Development",
        icon: ['fas', "code"],
        color: "#007ACC"
      },
      {
        name: "Linux",
        description: "Cloud Computing/Server Administration",
        icon: ['fab', "linux"],
        color: "#fff"
      },
      {
        name: "Python",
        description: "Software Development",
        icon: ['fab', "python"],
        color: "#FFD949"
      },
      {
        name: "Git",
        description: "Version Control",
        icon: ['fab', "git-alt"],
        color: "#F75036"
      },
      {
        name: "Continous Integration",
        description: "Continous Integration with GitHub Actions and TravisCI",
        icon: ['fas', "code-branch"],
        color: "#3EB1CA"
      },
      {
        name: "Adobe Creative Cloud",
        description: "UI Design & Photo Manipulation",
        icon: ['fab', "adobe"],
        color: "#FA0F00"
      },
    ],
    projects: [{
        name: "qrgen.cc",
        demo: "https://qrgen.cc",
        github: "BetaHuhn/qrgen",
        description: {
          de: "QrGenc.cc ist ein service mit dem man einfach und schnell QR-Codes und kurz-URLs erstellen kann",
          en: "QrGen.cc is a free service that lets you create QR-Codes and shortened URLs from any link quickly and easily"
        },
        language: "Vue.js • Node.js"
      },
      {
        name: "drkmd.js",
        demo: "https://codepen.io/BetaHuhn/pen/oNxdBzK",
        github: "BetaHuhn/drkmd.js",
        description: {
          de: "Einfache Bibliothek zur Integration einer Dark-Mode- / Light-Mode-Logik in jede Website. Bei NPM verfügbar.",
          en: "Simple library to integrate a dark-mode/light-mode logic with any website. Available for via NPM."
        },
        language: "JavaScript • CSS • NPM"
      },
      {
        name: "Portfolio Website",
        demo: "/",
        github: "BetaHuhn/portfolio",
        description: {
          de: "Meine Portfolio website (die aktuelle Seite).",
          en: "My portfolio website (the site you are currently viewing)"
        },
        language: "Vue.js"
      },
      {
        name: "Email Verifier",
        demo: "https://verify.mxis.ch",
        github: "BetaHuhn/email-verify",
        description: {
          de: "Verifiziere, dass eine Email Addresse wirklich existiert.",
          en: "Verify if an email address actually exists."
        },
        language: "HTML5 • Node.js"
      },
      {
        name: "Speedtest",
        demo: "https://speedtest.mxis.ch",
        github: "BetaHuhn/speedtest",
        description: {
          de: "Internet Geschwindigkeits Test",
          en: "Simple Node.js based network speedtest."
        },
        language: "HTML5 • Node.js • WebSockets"
      },
      {
        name: "Aufgaben Manager",
        demo: "https://zgk.mxis.ch",
        github: "BetaHuhn/aufgabenManager",
        description: {
          de: "Eine einfach zu benutzende Plattform für Schüler und Lehrer für die Verwaltung von Hausaufgaben während der Corona-Home-Schooling Zeit.",
          en: "An easy to use homework manager for schools during the corona pandemic."
        },
        language: "HTML5 • Node.js"
      },
      {
        name: "MailPal",
        demo: "https://mailpal.cc",
        github: "",
        description: {
          de: "Du brauchst eine Wegwerf E-Mail-Adresse für eine Website? Du willst nicht der ganzen Welt deine persönliche E-Mail-Adresse mitteilen? Mit diesem Service kannst du schnell und einfach eine temporäre E-Mail-Adresse erstellen. Noch in der Entwicklung.",
          en: "Need a throw away email for a website? Don't want to share your personal email with the whole world? With this service you can create alias emails which temporarly redirects emails to your main email. Currenly in development."
        },
        language: "Vue.js • Node.js • Haraka"
      },
      {
        name: "Pixel Art Country selector",
        demo: "https://flags.mxis.ch",
        github: "BetaHuhn/countryPicker",
        description: {
          de: "Anstatt dein Land in einem Formular aus einer langen List auszuwählen, male einfach die Flagge.",
          en: "Instead of choosing your country using a dropdown, draw your flag."
        },
        language: "HTML5 • Node.js"
      },
    ],
    blog: {
      ...BlogEntries,
    },
    photos: {
      firstLoad: 6,
      total: 200,
      current: 0,
      modal: false
    },
    contact: {
      name: "",
      email: "",
      message: "",
      success: false,
      error: false
    },
    isScroll: false,
    inputInvalid: false,
    error: false
  }
}

const state = defaultState()

export default new Vuex.Store({
  state: state,
  modules: {},
  mutations: {
    displayError(state, error) {
        state.contact.error = true;
        state.contact.errorContact = (error != undefined) ? "Error: " + error : defaultState().content.errorUnknown
    },
    displaySuccess(state) {
      state.contact.error = false;
      state.contact.success = true;
    },
    switchLangToEn(state) {
      state.content.current = "en";
    },
    switchLangToDe(state) {
      state.content.current = "de";
    },
    changeContactName(state, name){
      state.contact.name = name;
    },
    changeContactEmail(state, email){
      state.contact.email = email;
    },
    changeContactMessage(state, message){
      state.contact.message = message;
    },
    changeIsScroll(state, newValue) {
      state.isScroll = newValue;
    },
    showImageModal(state, id){
      state.photos.current = id;
      state.photos.modal = true;
    },
    hideImageModal(state){
      state.photos.modal = false;
    }
  },
  actions: {
    switchLangToEn(context) {
      context.commit("switchLangToEn")
    },
    switchLangToDe(context) {
      context.commit("switchLangToDe")
    },
    async submitMessage (context) {
      const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: context.state.contact.name, email: context.state.contact.email, message: context.state.contact.message, website: window.location.href, lang: context.state.content.current })
      };
      fetch(`https://forward.betahuhn.de/api/contact/me`, options)
        .then(async response => {
            const data = await response.json();
            if (!response.ok) {
                const error = (data && data.message) || response.status;
                context.commit("displayError", error);
                return Promise.reject(error);
            }
            console.log(data)
            context.commit("displaySuccess")
        })
        .catch(error => {
            context.commit("displayError", error);
        });

    },
    changeContactName( context, name){
      context.commit("changeContactName", name)
    },
    changeContactEmail( context, email){
      context.commit("changeContactEmail", email)
    },
    changeContactMessage( context, message){
      context.commit("changeContactMessage", message)
    },
    showImageModal( context, id ){
      context.commit("showImageModal", id)
    },
    hideImageModal( context ){
      context.commit("hideImageModal")
    }
  }
})