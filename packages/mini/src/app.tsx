import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './app.less';
import 'taro-ui/dist/style/index.scss' // 全局引入一次即可
import { store } from './store';

class App extends Component {

  componentDidMount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  componentDidCatchError() {
  }

  // this.props.children 是将要会渲染的页面
  render() {
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    );
  }
}

export default App;
