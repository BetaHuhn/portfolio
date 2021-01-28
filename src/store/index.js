import Vue from "vue"
import Vuex from "vuex"
import projects from './projects'
import skills from './skills'

Vue.use(Vuex)

function defaultState() {
  return {
    bashConsole: {
      hostname: "betahuhn@MaxServer",
      path: "/about",
      currentIndex: 0,
      currentText: "",
      isFinished: false,
    },
    skills: skills,
    projects: projects,
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
    showImageModal(state, value){
      let src, dir;
      if(typeof value === 'string'){
        src = value
      }else{
        src = value.src;
        dir = value.dir
      }
      state.photos.src = src;
      state.photos.direction = dir;
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
        body: JSON.stringify({ id: 'portfolio', name: context.state.contact.name, email: context.state.contact.email, message: context.state.contact.message, website: window.location.href, lang: context.state.content.current })
      };
      fetch(`https://api.mxis.ch/api/form/contact`, options)
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
