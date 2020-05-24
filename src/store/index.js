import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

function defaultState() {
  return {
    content: {
      current: "en",
      de: {
        projects: "Einige meiner letzten Projekte",
        link:{
          click: "Klicke",
          here: "hier",
          more: "um mehr zu sehen"
        },
        gallery: "Fotogallerie",
        contactHead: "Sag Hallo!",
        contactSub: "Du hast eine Frage? Willst einfach mal Hi sagen? Egal was, schreib mir einfach!",
        name: "Name",
        email: "Email",
        message: "Nachricht",
        messagePlaceholder: "Deine Frage, Feedback oder Nachricht kommt hier her",
        reachOut: "Abschicken",
        orEmail: "Oder sende mit direkt eine Email an",
        errorMsg: 'Es ist ein Fehler aufgetreten, bitter versuche es erneut',
        loading: "Lädt...",
        loadingError: "Fehler: Der Inhalt konnte nicht geladen werden",
        messages: [
          "Hallo, mein Name ist Maximilian",
          "Ich bin 17 Jahre alt und komme vom wunderschönen Bodensee",
          "In meiner Freizeit mache ich viel mit Vue.js und Node.js",
          "Neben dem programmieren gehört auch fotografie zu meinen Hobbys",
          "Im Internet findet man mich unter dem handle @BetaHuhn"
        ],
        endText: "Oder schreib mir einfach eine Email an hello@mxis.ch",
      },
      en: {
        projects: "Some of my recent Projects",
        link:{
          click: "Click",
          here: "here",
          more: "to see more"
        },
        gallery: "Photo Gallery",
        contactHead: "Give me a shout!",
        contactSub: "Have a question? Just want to say Hi? Either way, reach out!",
        name: "Name",
        email: "Email",
        message: "Message",
        messagePlaceholder: "Your question, feedback or message goes here",
        reachOut: "Reach out!",
        orEmail: "or send an email directly to",
        errorMsg: 'An error ocurred, please try again.',
        loading: "Loading...",
        loadingError: "Error: Couldn't load content",
        messages: [
          "Hello, my Name is Maximilian",
          "I'm a 17 year old student from Germany",
          "I mostly do Web Desgin/Developement with Vue.js and Node.js",
          "I also have a passion for photograhpy",
          "You can find me around the Internet by the handle @BetaHuhn"
        ],
        endText: "Or directly send me an email to hello@mxis.ch",
      }
    },
    bashConsole: {
      hostname: "betahuhn@MaxServer",
      path: "/about",
      currentIndex: 0,
      currentText: "",
      isFinished: false,
    },
    projects: [{
        name: "qrgen.cc",
        demo: "https://qrgen.cc",
        github: "BetaHuhn/qrgen"
      },
      {
        name: "Aufgaben Manager",
        demo: "https://zgk.mxis.ch",
        github: "BetaHuhn/aufgabenManager"
      },
      {
        name: "Pixel Art Country selector",
        demo: "https://flags.mxis.ch",
        github: "BetaHuhn/countryPicker"
      },
      {
        name: "Portfolio Website",
        demo: "/",
        github: "BetaHuhn/portfolio"
      }
    ],
    photos: {
      firstLoad: 6,
      last: 0,
      total: 25,
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
    displayError(state, res) {
      if (res.status == 405) {
        state.inputInvalid = true;
      } else {
        state.error = true;
        state.errorMsg = (res.response != undefined) ? "Error: " + res.response : defaultState().errorMsg
      }
    },
    removeError() {
      state.error = false;
      state.inputInvalid = false;
      state.errorMsg = defaultState().errorMsg;
    },
    switchLangToEn(state) {
      state.content.current = "en";
    },
    switchLangToDe(state) {
      state.content.current = "de";
    },
  },
  actions: {
    switchLangToEn(context) {
      context.commit("switchLangToEn")
    },
    switchLangToDe(context) {
      context.commit("switchLangToDe")
    },
  }
})