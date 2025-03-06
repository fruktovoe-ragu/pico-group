import React, { useState } from 'react';
import { NavLink, matchPath, useLocation } from 'react-router-dom';
import cnCreate from 'utils/cnCreate';
import useAppContext from 'hooks/useAppContext';
import SideMenu from 'components/SideMenu/SideMenu';
import ContentArea from 'components/ContentArea/ContentArea';
import Collapse from 'components/Collapse/Collapse';
import { menu } from 'content/menu';
import './Header.css';

const cn = cnCreate('header');
const Header: React.FC = () => {
  const { isMobileWide } = useAppContext();
  const location = useLocation();

  const [isMenuOpened, setMenuOpened] = useState(false);
  const [submenuIndex, setSubmenuIndex] = useState<number>(-1);

  const handleLinkClick = (isSubLink: boolean) => () => {
    setMenuOpened(false);
    !isSubLink && setSubmenuIndex(-1);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleMobileMenuClick = () => {
    const newIsOpen = !isMenuOpened;

    if (!newIsOpen) {
      setSubmenuIndex(-1);
    }

    setMenuOpened(newIsOpen);
  };

  const handleLogoClick = () => {
    setMenuOpened(false);
  };

  const handleMobileItemClick = (index: number) => () => {
    submenuIndex === index ? setSubmenuIndex(-1) : setSubmenuIndex(index);
  };

  const renderMobileMenuIcon = () => (
    <div className={cn('menu-icon', { opened: isMenuOpened })} onClick={handleMobileMenuClick}>
      <div className={cn('line', { first: true })} />
      <div className={cn('line', { second: true })} />
      <div className={cn('line', { third: true })} />
    </div>
  );

  const renderMenuLink = (title: string, url: string) => (
    <NavLink
      className={cn('link')}
      activeClassName={cn('link', { active: true })}
      to={url}
    >
      <div className={cn('item')} onClick={handleLinkClick(false)}>
        {title}
      </div>
    </NavLink>
  );

  const renderItemsList = () => (
    <div className={cn('list')}>
      {menu.map(({ title, url }, index) => (
        <nav className={cn('wrap')} key={title + index}>
          {renderMenuLink(title, url)}
        </nav>
      ))}
    </div>
  );

  const renderSubItemsList = () => (
    <div className={cn('list')}>
      {menu.map(({ title, url, submenu }, index) => {
        const isArrayEmpty = !!submenu.length;
        const isSelected = submenuIndex === index;
        const submenuUrls = submenu.map(({ url: submenuPath }) => `${url}${submenuPath}`);
        const isSubmenuItemActive = Boolean(matchPath(location.pathname, submenuUrls));
        const shouldExpandActiveSubmenu = submenuIndex === -1;
        const isCollapseOpened = isSelected || (shouldExpandActiveSubmenu && isSubmenuItemActive);

        return (
          isArrayEmpty ? (
            <div className={cn('wrap')} key={title + index}>
              <div className={cn('item', { opened: isCollapseOpened})} onClick={handleMobileItemClick(index)}>
                {title}
                {isArrayEmpty && (
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" className={cn('arrow-icon')}>
                    <path d="M4 11L15 22L26 11" stroke="#E7E7E7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              {isMobileWide && submenu && (
                <Collapse isOpened={isCollapseOpened}>
                  <div className={cn('submenu')}>
                    <SideMenu menu={submenu} path={url} onClick={handleLinkClick(true)} />
                  </div>
                </Collapse>
              )}
            </div>
          ) : (
            <nav className={cn('wrap')} key={title + index}>
              {renderMenuLink(title, url)}
            </nav>
          )
        );
      })}
    </div>
  );

  return (
    <header className={cn()}>
      <ContentArea>
        <div className={cn('inner')}>
          <NavLink to="/" className={cn('logo')} onClick={handleLogoClick}>PICO</NavLink>
          {isMobileWide ? renderMobileMenuIcon() : renderItemsList()}
        </div>
      </ContentArea>
      {isMobileWide && (
        <Collapse isOpened={isMenuOpened}>
          <div className={cn('mobile-menu')}>
            <ContentArea>
              <div className={cn('mobile-menu-inner')}>
                {renderSubItemsList()}
              </div>
            </ContentArea>
          </div>
        </Collapse>
      )}
    </header>
  );
};

export default Header;
