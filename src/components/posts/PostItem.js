import React, { Children } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import classes from './post-item.module.css';
import styled from '@emotion/styled';
import { useSession } from 'next-auth/react';

const PostItem = ({
  post: { id, content, nickName, postLikeDislikes, images, createDate },
  onLike,
}) => {
  const { data: session, status } = useSession();

  // const { src } = images[0];

  return (
    <Wrapper>
      <li className={classes.post}>
        <div className={classes.image}>
          <Image
            layout={'responsive'}
            width={400}
            height={300}
            src={`/images/posts/getting-started-with-nextjs/getting-started-nextjs.png`}
            alt={content}
          />
        </div>
        <div className={classes.content}>
          <ContentWrapper>
            <div className="top">
              <h4>{nickName}</h4>
              <time>{createDate}</time>
            </div>
            <p className={'bottom'}>
              {Children.toArray(
                content.split(/(#[^\s#]+)/g).map((v, i) => {
                  if (v.match(/(#[^\s#]+)/g)) {
                    return (
                      // <Link href={`/hashtag/${v.slice(1)}`} prefetch={false} key={i}>
                      <Link href={`/`}>{v}</Link>
                    );
                  }
                  return v;
                }),
              )}
            </p>
            <div className="icon">
              <div className={'left'}>
                <span
                  onClick={() => onLike(id, session.user?.id)}
                  className="material-icons-with-text"
                >
                  <i className="material-icons">thumb_up_off_alt</i>
                  123
                </span>
                <span className="material-icons-with-text">
                  <i className="material-icons">thumb_down_off_alt</i>
                  12
                </span>
              </div>
              <span className="material-icons">delete</span>
            </div>
          </ContentWrapper>
        </div>
      </li>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .bottom {
    align-self: flex-start;
  }

  .icon {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .left {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      gap: 10px;
    }
  }

  .material-icons-with-text {
    display: inline-flex;
    align-items: center;
  }
`;

export default PostItem;
