import Vue from 'vue';
import Breadcrumb from './components/Breadcrumb/index.vue';
import Dropzone from './components/Dropzone/index.vue';
import Hamburger from './components/Hamburger/index.vue';
import JsonEditor from './components/JsonEditor/index.vue';
import LangSelect from './components/LangSelect/index.vue';

const LaravueComponents = {
	Breadcrumb,
	Dropzone,
	Hamburger,
	JsonEditor,
	LangSelect
};

if (typeof window !== 'undefined' && window.Vue) {
  Object.keys(LaravueComponents).forEach(name => {
    Vue.component(name, LaravueComponents[name]);
  });
}

export LaravueComponents;
