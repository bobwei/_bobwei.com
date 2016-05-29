/* global ga */
import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';

import { nl2br } from '../utils';


export default class Pages extends React.Component {

  onDownloadClick(title, type) {
    ga('send', {
      hitType: 'event',
      eventCategory: 'Click',
      eventAction: `${title}, ${type}`
    });
  }

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
                    {
                      page.link.ios &&
                      <a
                        href={page.link.ios}
                        className="btn btn-transparent btn-lg download"
                        target="_blank"
                        onClick={this.onDownloadClick.bind(this, page.contentTitle, 'iOS')}
                      >
                        iOS 下載
                      </a>
                    }
                    {
                      page.link.android &&
                      <a
                        href={page.link.android}
                        className="btn btn-transparent btn-lg download"
                        target="_blank"
                        onClick={this.onDownloadClick.bind(this, page.contentTitle, 'Android')}
                      >
                        Android 下載
                      </a>
                    }
                    {
                      page.link.web &&
                      <a
                        href={page.link.web}
                        className="btn btn-transparent btn-lg download"
                        target="_blank"
                        onClick={this.onDownloadClick.bind(this, page.contentTitle, 'Web')}
                      >
                        Demo
                      </a>
                    }
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div className="banner-contact-me center">
          <h2>
            無論是合作開發，抑或點子諮詢，都歡迎您隨時與我聯絡。
          </h2>
          <Link
            to="/contact"
            className="btn btn-transparent btn-lg">
            聯絡我
          </Link>
        </div>
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
      優質服務從不間斷，美味幸福在眼前。`,
    link: {
      ios: 'https://itunes.apple.com/tw/app/mos-order/id509435066?mt=8',
      android: 'https://play.google.com/store/apps/details?id=com.yksix.mos.mosorder&hl=en'
    }
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
    不論您在哪裡，輕鬆訂購好 Fun 心！`,
    link: {
      ios: 'https://itunes.apple.com/tw/app/dong-nan-lu-you/id472918191',
      android: 'https://play.google.com/store/apps/details?id=tw.com.settour.android.mobilecalendar'
    }
  }, {
    order: 'ltr',
    coverImage: (() => {
      if (process.env.BROWSER) {
        return require('../images/taiwantaichi.png');
      }
    })(),
    subpage0Styles: {
      backgroundColor: 'white'
    },
    subpage1Styles: {
      backgroundColor: '#454545'
    },
    contentTitle: '台灣太極線上課程',
    description: `台灣太極是一套太極養生、
    健康促進的專業學程，
    行動化、社群化學習太極拳法，
    隨時隨地、一同切磋太極拳法 !`,
    link: {
      web: 'http://taiwantaichi.com/courses'
    }
  }, {
    order: 'rtl',
    coverImage: (() => {
      if (process.env.BROWSER) {
        return require('../images/viveport.png');
      }
    })(),
    subpage0Styles: {
      backgroundColor: 'white'
    },
    subpage1Styles: {
      backgroundColor: '#111820'
    },
    contentTitle: 'HTC Viveport',
    description: `HTC Viveport 是 Vive 專屬的應用商店，
    您可以在此購買應用與遊戲，
    並於 HTC Vive VR 裝置盡情體驗`,
    link: {
      web: 'https://contentstore.htcvive.com'
    }
  }, {
    order: 'ltr',
    coverImage: (() => {
      if (process.env.BROWSER) {
        return require('../images/developer_console.png');
      }
    })(),
    subpage0Styles: {
      backgroundColor: 'white'
    },
    subpage1Styles: {
      backgroundColor: '#2B323A'
    },
    contentTitle: 'HTC VR Developer Console',
    description: `HTC VR Developer Console 是一套內容發佈工具，
    開發者可在此於 Viveport 上發佈內容、賺取收益，
    並與 HTC 一同打造最棒的虛擬實境體驗`,
    link: {
      web: 'https://developer.htcvive.com/console'
    }
  }, {
    order: 'rtl',
    coverImage: (() => {
      if (process.env.BROWSER) {
        return require('../images/cms.png');
      }
    })(),
    subpage0Styles: {
      backgroundColor: 'white'
    },
    subpage1Styles: {
      backgroundColor: '#5E656D'
    },
    contentTitle: 'HTC VR CMS',
    description: `HTC VR CMS 是一套內容管理工具，
    幫助內容管理員審核、編輯發佈於 Viveport 的內容，
    並可透過此工具管理廣告、促銷計畫與拆潤`,
    link: {}
  }]
};
