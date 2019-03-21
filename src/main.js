import Vue from 'vue';
import JsonEditor from './components/JsonEditor';

const Components = {
  JsonEditor,
};
Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;
