import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import cnCreate from 'utils/cnCreate';
import Body from 'components/Body/Body';
import { menu } from 'content/menu';
import './People.css';

const cn = cnCreate('people');
const People: React.FC = () => {
  const { title, submenu } = menu[1];
  const { pathname } = useLocation();
  const subTitle = submenu.find((section) => section.url === pathname);

  return (
    <div className={cn()}>
      <Body title={title} submenu={submenu}>
        <h2 className={cn('subtitle')}>{subTitle?.title ?? ""}</h2>
        <Outlet />
      </Body>
    </div>
  );
};

export default People;
