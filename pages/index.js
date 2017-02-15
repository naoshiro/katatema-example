import Head from "katatema/head";
import React from "react";
import Style from "./main.scss";

class App extends React.Component {

  renderMenuLi() {
    const list = ['a', 'b', 'c'];
    return list.map( v => {
      return (
        <li>menu {v}</li>
      )
    })
  }

  render() {
    return (
      <div>
        <div>ホーム</div>
        <ul className="test">{this.renderMenuLi()}</ul>
      </div>
    );
  }
}

export default () => (
  <div>
    <Head>
      <title>タイトル</title>
    </Head>
    <Style />
    <App />
  </div>
)
