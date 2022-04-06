import "font-awesome/css/font-awesome.min.css";
import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "fa4",
  },
  theme: {
    themes: {
      light: {
        primary: "#5c80bc",
        "primary-light": "#D2DFF6",
        secondary: "#212738",
        success: "#44af69",
        danger: "#e03616",
        warning: "#fcab10",
        forecolor: "#fff",
        dark: "#000",
        base: "#f1f1f1",
      },
    },
  },
});
