import React from 'react';
import classnames from 'classnames';

import { nl2br } from '../utils';


export default class Pages extends React.Component {
  render() {
    return (
      <div>
        {this.props.pages.map((page, i) => {
          return (
            <div className="container-fluid" key={i}>
              <div className={classnames('row', { 'rtl': page.order === 'rtl' })}>
                <div className="col-md-5 page center" style={page.subpage0Styles}>
                  <img className="cover-image" src={page.coverImage} />
                </div>
                <div className="col-md-7 page center color-background" style={page.subpage1Styles}>
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
        return require('../images/mosorder.jpg');
      }
    })(),
    subpage0Styles: {
      backgroundColor: 'white'
    },
    subpage1Styles: {
      backgroundColor: '#CC3000'
    },
    contentTitle: 'MOS Order\n摩斯漢堡行動點餐 App',
    description: `累積突破 200 萬次下載數，
      每天超過 5000 筆行動訂單，
      使用者評價高於 4 顆星，
      優質服務從不間斷，美味幸福在眼前。
    `
  }, {
    order: 'rtl',
    coverImage: (() => {
      if (process.env.BROWSER) {
        return require('../images/settour.jpg');
      }
    })(),
    subpage0Styles: {
      backgroundColor: 'white'
    },
    subpage1Styles: {
      backgroundColor: '#30BCFC'
    },
    contentTitle: '旅遊+\n東南旅遊 App',
    description: `全方位旅遊服務整合，
    即時查詢、即時商品訂購，
    使用者評價高於 4 顆星，
    不論您在哪裡，輕鬆訂購好 Fun 心！
    `
  }]
};
