import React from 'react';
import Modal from 'react-modal';
import cnCreate from 'utils/cnCreate';
import ContentArea from 'components/ContentArea/ContentArea';
import './Popup.css';

interface IPopupProps {
    isOpened: boolean;
    hasCloseButton?: boolean;
    isFullScreenMode?: boolean;
    onClose: () => void;
};

Modal.setAppElement('#root');

const cn = cnCreate('popup');
const Popup: React.FC<IPopupProps> = ({
    isOpened = false,
    hasCloseButton = true,
    onClose,
    children,
}) => {
    const renderCloseButton = (): JSX.Element => (
        <div className={cn('close')} onClick={onClose}>
            <svg width="20" height="20" viewBox="0 0 30 30" className={cn('close-icon')}>
                <path d="M26 4L4 26" stroke="#E7E7E7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 4L26 26" stroke="#E7E7E7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
    );

    return (
        <Modal
            className={cn('inner')}
            portalClassName={cn({
                opened: isOpened,
                full: true,
            })}
            overlayClassName={cn('overlay')}
            bodyOpenClassName="popup-open"
            isOpen={isOpened}
            onRequestClose={onClose}
            ariaHideApp={false}
            contentLabel="screen"
        >
            <ContentArea>
                <div className={cn('container')}>
                    {hasCloseButton && renderCloseButton()}
                    <div className={cn('wrap')}>
                        {children}
                    </div>
                </div>
            </ContentArea>
            <div className={cn('background')} onClick={onClose} />
        </Modal>
    );
};

export default Popup;
