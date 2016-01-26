/* global FB */
import React from 'react';


export default class SocialButton extends React.Component {

  componentDidMount() {
    let delayDo = () => {
      if (!window.isFBInit) {
        setTimeout(delayDo, 200);
        return;
      }
      FB.XFBML.parse();
    };
    delayDo();
  }

  render() {
    return (
      <div
        className="social-button fb-like navbar-brand"
        data-href={this.props.likeUrl}
        data-width="140"
        data-layout="button_count"
        data-action="like"
        data-show-faces="true"
        data-share="true"
      />
    );
  }
}
