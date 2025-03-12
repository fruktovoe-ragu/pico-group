import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import cnCreate from 'utils/cnCreate';
import Body from 'components/Body/Body';
import { menu } from 'content/menu';
import './NewsPress.css';

const cn = cnCreate('news-press');
const NewsPress: React.FC = () => {
  const { title, submenu } = menu[4];
  const { pathname } = useLocation();
  const subTitle = submenu.find((section) => section.url === pathname);

  return (
    <div className={cn()}>
      <Body title={title} submenu={submenu}>
        {!!subTitle && <h2 className={cn('subtitle')}>{subTitle.title}</h2>}
        <Outlet />
      </Body>
    </div>
  );
};

export default NewsPress;
