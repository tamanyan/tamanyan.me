import React, { Component } from 'react';
import Helmet from 'react-helmet'
import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
  LineShareButton,
  LineIcon
} from 'react-share';
import urljoin from 'url-join';
import styles from './Share.module.scss';
import config from '../../../../config';

class Share extends Component {
  render() {
    const { postNode, postPath, mobile } = this.props;
    const post = postNode.frontmatter;
    const url = urljoin(config.url, postPath);
    const twitterUsername = config.author.contacts.twitter || 'tamanyan55';
    const iconSize = mobile ? 32 : 36;

    return (
      <div className={styles['share']}>
        <Helmet>
          <script type="text/javascript" src="//b.st-hatena.com/js/bookmark_button.js" charset="utf-8" async="async" />
        </Helmet>
        <div className={styles['share__item']}>
          <TwitterShareButton url={url} title={`${post.title} @${twitterUsername}`}>
            <TwitterIcon round size={iconSize} />
          </TwitterShareButton>
        </div>
        <div className={styles['share__item']}>
          <FacebookShareButton url={url} quote={postNode.excerpt}>
            <FacebookIcon round size={iconSize} />
          </FacebookShareButton>
        </div>
        <div className={styles['share__item']}>
          <LineShareButton url={url} quote={postNode.excerpt}>
            <LineIcon round size={iconSize} />
          </LineShareButton>
        </div>
        <div className={styles['share__item']}>
          <a
            href="http://b.hatena.ne.jp/entry/"
            className="hatena-bookmark-button"
            data-hatena-bookmark-layout="vertical-normal"
            data-hatena-bookmark-lang="ja"
            title="このエントリーをはてなブックマークに追加"
            >
              <img
                src="//b.st-hatena.com/images/entry-button/button-only@2x.png"
                alt="このエントリーをはてなブックマークに追加"
                width="20"
                height="20"
                style={{border: 'none'}}
              />
          </a>
        </div>
      </div>
    );
  }
}

export default Share;