import React from 'react';

import { nl2br } from '../utils';


export default class Pages extends React.Component {
  render() {
    return (
      <div>
        {this.props.pages.map((page, i) => {
          return (
            <div className="container-fluid" key={i}>
              <div className="row">
                <div className="col-md-5 page center" style={page.coverImageStyles}>
                  <img className="cover-image" src={page.coverImage} />
                </div>
                <div className="col-md-7 page center color-background" style={page.contentStyles}>
                  <div className="content">
                    <h1>
                      {nl2br(page.contentTitle)}
                    </h1>
                    <h3>
                      {nl2br(page.description)}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

Pages.defaultProps = {
  pages: [{
    coverImage: (() => {
      if (process.env.BROWSER) {
        return require('../images/mosorder.png');
      }
    })(),
    coverImageStyles: {
      backgroundColor: 'white'
    },
    contentStyles: {
      backgroundColor: '#CC3000'
    },
    contentTitle: 'MOS Order\n摩斯漢堡行動點餐 App',
    description: `累積突破 200 萬次下載數，
      每天超過 5000 筆行動訂單，
      使用者評價高於 4 顆星，
      優質服務從不間斷，美味幸福在眼前。
    `
  }]
};
