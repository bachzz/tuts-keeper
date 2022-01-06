import Vue from "vue";
import Router from "vue-router";
import { publicPath } from '../vue.config'

Vue.use(Router);

export default new Router({
	mode: "history",
	base: publicPath,
	routes: [
		{
			path: "/",
			alias: "/tutorials",
			name: "tutorials",
			component: () => import("./components/TutorialsList")
		},
		{
			path: "/tutorials/:id",
			name: "tutorial-details",
			component: () => import("./components/Tutorial")
		},
		{
			path: "/add",
			name: "add",
			component: () => import("./components/AddTutorial")
		}
	]
});