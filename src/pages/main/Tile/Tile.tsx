import React from 'react';
import { NavLink } from 'react-router-dom';
import cnCreate from 'utils/cnCreate';
import './Tile.css';

interface ITileProps {
  date: string,
  title: string,
  linkHref: string,
  isSecondary?: boolean,
  onLinkClick?: () => void;
};

const cn = cnCreate('tile');
const Tile: React.FC<ITileProps> = ({ date, title, linkHref, isSecondary, onLinkClick }) => {
  const handleNavClick = () => {
    window.scrollTo(0, 0);

    onLinkClick?.();
  };

  return (
    <div className={cn({ secondary: isSecondary })}>
      <NavLink to={linkHref} className={cn('link')} onClick={handleNavClick}>
        <p className={cn('date')}>{date}</p>
        <p className={cn('title')}>{title}</p>
      </NavLink>
    </div>
  );

};
export default Tile;
