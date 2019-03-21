import Vue from 'vue';
import Breadcrumb from './components/Breadcrumb/index.vue';
import Dropzone from './components/Dropzone/index.vue';
import Hamburger from './components/Hamburger/index.vue';
import JsonEditor from './components/JsonEditor/index.vue';
import LangSelect from './components/LangSelect/index.vue';
import GithubCorner from './components/GithubCorner/index.vue';
import MarkdownEditor from "./components/MarkdownEditor/index.vue";
import MDinput from "./components/MDinput/index.vue";
import Pagination from "./components/Pagination/index.vue";
import PanThumb from "./components/PanThumb/index.vue";
import ScrollPane from "./components/ScrollPane/index.vue";
import Sticky from "./components/Sticky/index.vue";
import SvgIcon from "./components/SvgIcon/index.vue";
import Tinymce from "./components/Tinymce/index.vue";

const LaravueComponents = {
  Breadcrumb,
  Dropzone,
  GithubCorner,
  Hamburger,
  JsonEditor,
  LangSelect,
  MarkdownEditor,
  MDinput,
  Pagination,
  PanThumb,
  ScrollPane,
  Sticky,
  SvgIcon,
  Tinymce,
};

if (typeof window !== 'undefined' && window.Vue) {
  Object.keys(LaravueComponents).forEach(name => {
    Vue.component(name, LaravueComponents[name]);
  });
}

export {
  Breadcrumb,
  Dropzone,
  GithubCorner,
  Hamburger,
  JsonEditor,
  LangSelect,
  MarkdownEditor,
  MDinput,
  Pagination,
  PanThumb,
  ScrollPane,
  Sticky,
  SvgIcon,
  Tinymce,
};
