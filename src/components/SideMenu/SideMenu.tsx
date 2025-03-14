import React from 'react';
import { NavLink } from 'react-router-dom';
import cnCreate from 'utils/cnCreate';
import useAppContext from 'hooks/useAppContext';
import { ICommonMenu } from 'content/menu';
import './SideMenu.css';

export interface ISideMenuProps {
  menu: ICommonMenu[];
  hasBackItems?: boolean;
  onClick?: () => void;
}

const cn = cnCreate('side-menu');
const SideMenu: React.FC<ISideMenuProps> = ({ menu, hasBackItems, onClick }) => {
  const { isMobileWide } = useAppContext();

  const handleNavClick = () => {
    window.scrollTo(0, 0);

    onClick && onClick();
  };

  return (
    <div className={cn()}>
      <div className={cn('list')}>
          {menu.map(({ title, url }, index) => (
            <NavLink
              className={({ isActive }) => cn('item', { active: isActive && !hasBackItems, back: hasBackItems })}
              key={title + index}
              to={url}
              onClick={handleNavClick}
            >
                <p className={cn('text')}>{title}</p>
                {!isMobileWide && (
                  <div className={cn('icon-box')}>
                    <svg width="30" height="30" viewBox="0 0 30 30" className={cn('arrow-icon')}>
                      <path d="M17.6895 5.27573C17.29 4.89523 16.6565 4.91023 16.276 5.31023C15.895 5.71023 15.911 6.34323 16.3105 6.72423L23.9815 13.9997L4 13.9997C3.448 13.9997 3 14.4477 3 14.9997C3 15.5517 3.448 15.9997 4 15.9997L23.9495 15.9997L16.3105 23.2757C15.9105 23.6567 15.895 24.2897 16.276 24.6897C16.4725 24.8957 16.736 24.9997 17 24.9997C17.248 24.9997 17.496 24.9082 17.6895 24.7237L26.414 16.4137C26.792 16.0362 27 15.5342 27 14.9997C27 14.4652 26.792 13.9632 26.3965 13.5687L17.6895 5.27573Z" fill="#E7E7E7"/>
                    </svg>
                  </div>
                )}
            </NavLink>
          ))}
      </div>
    </div>
  );
};

export default SideMenu;
