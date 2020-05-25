import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

function defaultState() {
  return {
    content: {
      current: "en",
      de: {
        skills: "Das kann ich bereits...",
        projects: "Einige meiner letzten Projekte",
        link:{
          click: "Klicke",
          here: "hier",
          more: "um mehr zu sehen"
        },
        gallery: "Fotogallerie",
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
        errorUnknown: 'Es ist ein Fehler aufgetreten, bitter versuche es erneut',
        success: "Deine Nachricht wurde abgeschickt!",
        errorContact: "Deine Nachricht konnte leider nicht abgeschickt werden",
        error: "Fehler",
        notFound: "Diese Seite existiert nicht",
        backHome: "Zurück",
        reportProblem: "Ein Problem melden",
        loading: "Lädt...",
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
        errorUnknown: 'An error ocurred, please try again.',
        success: "Your message was sent!",
        errorContact: "Your message couldn't be sent, sorry",
        error: "Error",
        notFound: "This page doesn't exist",
        backHome: "Go back home",
        reportProblem: "Report a problem",
        loading: "Loading...",
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
        name: "HTML • CSS • JavaScript",
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
        name: "NodeJS • Mongoose • ExpressJS",
        description: "Backend Web Development",
        icon: ['fab', "node-js"],
        color: "#659E5A"
      },
      {
        name: "Linux",
        description: "Cloud Computing",
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
        name: "MongoDB • MySQL",
        description: "Database Management System",
        icon: ['fa', "database"],
        color: "#3b86c6"
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
        name: "Aufgaben Manager",
        demo: "https://zgk.mxis.ch",
        github: "BetaHuhn/aufgabenManager",
        description: {
          de: "Aufgaben Manager für Schulen",
          en: "Task Manager for schools"
        },
        language: "Node.js"
      },
      {
        name: "Pixel Art Country selector",
        demo: "https://flags.mxis.ch",
        github: "BetaHuhn/countryPicker",
        description: {
          de: "Pixel Art Land picker",
          en: "Pixel art country selector"
        },
        language: "Node.js"
      },
      {
        name: "Portfolio Website",
        demo: "/",
        github: "BetaHuhn/portfolio",
        description: {
          de: "Die aktuelle Seite",
          en: "The site you are currently viewing"
        },
        language: "Vue.js"
      }
    ],
    photos: {
      firstLoad: 6,
      total: 126,
    },
    contact: {
      name: "",
      email: "",
      message: "",
      success: false,
      error: false
    },
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
  }
})