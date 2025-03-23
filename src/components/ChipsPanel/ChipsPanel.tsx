import React, { useState } from 'react';
import cnCreate from 'utils/cnCreate';
import useAppContext from 'hooks/useAppContext';
import Chip from './Chip/Chip';
import './ChipsPanel.css';

const MOBILE_DISPLAYED_CHIP_NUMBER = 7;

export interface IContent {
    title: string;
    categoryId: number;
    content: JSX.Element | JSX.Element[];
};

export interface IChipsPanelProps {
    className?: string | string[];
    data: IContent[];
    itemsMobileDisplayNumber?: number;
};

const cn = cnCreate('chips-panel');
const ChipsPanel: React.FC<IChipsPanelProps> = ({
    className = '',
    data,
    itemsMobileDisplayNumber = MOBILE_DISPLAYED_CHIP_NUMBER,
}) => {
    const { isMobile } = useAppContext();

    const [chosenChip, setChosenChip] = useState(data[0].categoryId);

    const mobileDisplayedChipData = data.slice(0, itemsMobileDisplayNumber - 1);
    const mobileWrappedChipData = data.slice(itemsMobileDisplayNumber - 1);
    const currentDataDisplayed = data.find(({ categoryId }) => chosenChip === categoryId);
    const isOneOfMobileWrapped = mobileWrappedChipData.find(({ categoryId }) => categoryId === chosenChip);
    const mobileLastItemLabel =
        !!isOneOfMobileWrapped && !!currentDataDisplayed ? currentDataDisplayed.title : 'Earlier';

    const handleChipClick = (i: number) => {
        setChosenChip(i);
    };

    const renderDesktopRow = () => (
        data.map(({ title, categoryId }) => (
            <Chip
                key={categoryId}
                id={categoryId}
                label={title}
                className={cn('chip')}
                onClick={handleChipClick}
                isChosen={chosenChip === categoryId}
            />
        ))
    );

    const renderMobileRow = () => (
        <>
            {mobileDisplayedChipData.map(({ title, categoryId }) => (
                <Chip
                    key={categoryId}
                    id={categoryId}
                    label={title}
                    className={cn('chip')}
                    onClick={handleChipClick}
                    isChosen={chosenChip === categoryId}
                />
            ))}
            {!!mobileWrappedChipData.length &&
                <Chip
                    label={mobileLastItemLabel}
                    id={chosenChip}
                    className={cn('chip')}
                    data={mobileWrappedChipData}
                    hasSelect={!!mobileWrappedChipData.length}
                    isChosen={!!isOneOfMobileWrapped}
                    onClick={handleChipClick}
                />
            }
        </>
    );

    return (
        <div className={cn('', className)}>
            <div className={cn('panel')}>
                <div className={cn('wrap')}>
                    {isMobile ? renderMobileRow() : renderDesktopRow()}
                </div>
            </div>
            <div className={cn('content')}>
                {currentDataDisplayed?.content}
            </div>
        </div>
    );
};

export default ChipsPanel;
