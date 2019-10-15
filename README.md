# boredapp

This is a vue js example using axis and connected with https://www.boredapi.com/ an exampled over heroku is https://boredapp-jacinto.herokuapp.com/

## Libraries

The libraries we used are:
 - **vue-cli**: For a fast develop with vue.js https://cli.vuejs.org/
 - **vuetify**: Is a requeriment from the test. 
 - **vuex**: Is a requeriment from the test and allow create an store for save states.
 - **vue router**: Is a requeriment from the test and used over any basic vue.js app for allow map routers.
 - **axios**: Used for connect to json endpoints
 - **vuex-persistedstate**: Allow save states store and use after refresh browser.

## App Structure

Inside the App folder we have:
- **src/components/Activity**: Component related with Activity page.
- **src/components/myList**: Component related with myList page.
- **src/plugins**: We have only vuetify configuration to allow use icons from Material Design and some config for axios
- **src/views**: We have three basic views used for homepage, book full page, and page not found.
  - **HomePage.vue**: Render a Homepage component.
- **store.js**: All logic for vuex integration.
- **router.js**: All logic related with router.


## Project setup

We are using heroku for deploy and for local using the server from vue cli with npm run dev.
