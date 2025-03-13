import React, { useState } from 'react';
import cnCreate from 'utils/cnCreate';
import useAppContext from 'hooks/useAppContext';
import SideMenu from 'components/SideMenu/SideMenu';
import Collapse from 'components/Collapse/Collapse';
import { ICommonMenu } from 'content/menu';
import './MainTitle.css';

export interface IMainTitleProps {
  menu: ICommonMenu[];
  title: string;
  onClick?: () => void;
}

const cn = cnCreate('main-title');
const MainTitle: React.FC<IMainTitleProps> = ({ menu, title }) => {
  const { isMobileWide } = useAppContext();
  const [isCollapseOpened, setCollapseOpened] = useState(false);

  const handleMobileMenuClick = () => {
    setCollapseOpened(!isCollapseOpened);
  };

  const handleMenuItemClick = () => () => {
    setCollapseOpened(false);
  };

  return (
    <div className={cn()}>
      <div className={cn('container')}>
        {isMobileWide && (
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" className={cn('icon', { rorated: isCollapseOpened })}>
              <path d="M4 11L15 22L26 11" stroke="#E7E7E7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
        <h1 className={cn('content')} onClick={handleMobileMenuClick}>{title}</h1>
      </div>
      {isMobileWide && (
        <Collapse isOpened={isCollapseOpened}>
          <div className={cn('menu-list')}>
            <SideMenu menu={menu}  onClick={handleMenuItemClick()}/>
          </div>
        </Collapse>
      )}
    </div>
  );
};

export default MainTitle;
