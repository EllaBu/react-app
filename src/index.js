import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

// scr目录下的index.js文件，他不是一个react组件，
// 他是链接react与html模板的桥梁，
// 所有的react组件最终都是由他进行渲染到html模板中。
// 然后整个文件中引入了一个系统默认生成的组件APP,有index.js进行渲染。
