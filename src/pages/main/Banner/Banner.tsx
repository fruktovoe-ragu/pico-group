import React from 'react';
import cnCreate from 'utils/cnCreate';
import useAppContext from 'hooks/useAppContext';
import Animation from './i/banner.mp4';
import ContentArea from 'components/ContentArea/ContentArea';
import Button from 'components/Button/Button';
import './Banner.css';

const cn = cnCreate('banner');
const Banner: React.FC = () => {
  const { isMobileWide } = useAppContext();

  const headerHeight = isMobileWide ? 50 : 70;
  const pageHeight = window.innerHeight - headerHeight;

  const handleArrowClick = () => {
    window.scrollTo({
      top: window.innerHeight - headerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className={cn()} style={{ height: `${pageHeight}px` }}>
      <video className={cn('media')} autoPlay loop muted>
        <source src={Animation} type="video/mp4" />
      </video>
      {/* <div className={cn('image')} style={{ backgroundImage: `url('${Picture}')` }} /> */}
      <ContentArea className={cn('inner')}>
        <div className={cn('content')}>
          <h1 className={cn('title')}>Quantum phenomena and{'\u00A0'}devices</h1>
          <p className={cn('paragraph')}>We are one of the eleven strong research groups focusing on{'\u00A0'}experiments on single quanta in solid state and device physics, theory of open quantum systems, and engineering capability to{'\u00A0'}implement quantum technology.</p>
          <Button href="/research">Our research</Button>
        </div>
      </ContentArea>
      <div className={cn('arrow-down')} onClick={handleArrowClick}>
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" className={cn('icon')}>
          <path d="M4 11L15 22L26 11" stroke="#E7E7E7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
};

export default Banner;
