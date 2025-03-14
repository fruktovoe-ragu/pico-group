import React, { useState } from 'react';
import useAppContext from 'hooks/useAppContext';
import Collapse from 'components/Collapse/Collapse';
import Popup from 'components/Popup/Popup';
import cnCreate from 'utils/cnCreate';
import './ImageBox.css';

export interface IImageBoxProps {
    image: string;
    imgAlt?: string;
    footnoteText?: string;
    hasFullViewPopup?: boolean;
    hasFullWidth?: boolean;
    classes?: {
        root?: string;
        image?: string;
    };
}

const cn = cnCreate('image-box');
const ImageBox: React.FC<IImageBoxProps> = ({
    image,
    imgAlt,
    footnoteText,
    hasFullWidth = false,
    hasFullViewPopup = false,
    classes = {},
}) => {
    const { isMobile } = useAppContext();
    const [isNoteOpened, setNoteOpened] = useState(false);
    const [isPopupOpened, setIsPopupOpened] = useState(false);
    const alt = imgAlt ? imgAlt : footnoteText;
    const initialFootnoteHeight = isMobile ? 36 : 50;

    const handleTextClick = () => {
        setNoteOpened(!isNoteOpened);
    };

    const renderFootnote = () => (
        <div
            className={cn('footnote-collapsed', { unfolded: isNoteOpened })}
            onClick={handleTextClick}
        >
            <Collapse initialHeight={initialFootnoteHeight} isOpened={isNoteOpened}>
                <p className={cn('text')}>{footnoteText}</p>
            </Collapse>
        </div>
    );

    const renderImage = () => (
        <img className={cn('image', {}, [classes.image])} alt={alt} src={image} />
    );

    return (
        <>
            <div className={cn(
                '',
                { "full-width": hasFullWidth },
                [classes.root]
            )}>
                {hasFullViewPopup
                    ?  <div className={cn('container')} onClick={() => setIsPopupOpened(true)}>
                        {renderImage()}
                    </div>
                    : renderImage()
                }
                {footnoteText && renderFootnote()}
            </div>
            {isPopupOpened &&
                <Popup isOpened={isPopupOpened} onClose={() => setIsPopupOpened(false)}>
                    <div className={cn('popup-content')}>
                        <img className={cn('image', {}, [classes.image])} alt={alt} src={image} />
                        {footnoteText &&
                            <div className={cn('footnote')}>
                                <p className={cn('text')}>{footnoteText}</p>
                            </div>
                        }
                    </div>
                </Popup>
            }
        </>
    );
};

export default ImageBox;
