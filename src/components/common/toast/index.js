import Toast from './Toast.vue'

const obj = {};

obj.install = function(Vue){

  // 1.创建组件构造器
  const toastConstructor = Vue.extend(Toast);

  // 2.创建一个组件实例对象
  const toast = new toastConstructor();

  // 3.将实例挂载到某一个元素上面
  toast.$mount(document.createElement('div'));

  // 4.添加元素
  document.body.appendChild(toast.$el);

  // 5.vue原型里面增加一个toast
  Vue.prototype.$toast = toast;
}

export default obj