import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// 最后还有个app.test.js文件，主要是用来组件测试的，有兴趣可以取好好了解下，这里就不多讲这个。
