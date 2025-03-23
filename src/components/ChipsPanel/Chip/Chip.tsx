import React, { useState, useRef, useEffect } from 'react';
import cnCreate from 'utils/cnCreate';
import { IContent } from '../ChipsPanel';
import './Chip.css';

export interface IChipProps {
    id: number;
    label: string;
    className?: string | string[];
    data?: IContent[];
    isChosen: boolean;
    hasSelect?: boolean;
    onClick: (i: number) => void;
}

const cn = cnCreate('chip');
const Chip: React.FC<IChipProps> = ({
    id,
    label,
    className = '',
    data,
    isChosen = false,
    hasSelect = false,
    onClick,
}) => {
    const [isSelectOpened, setIsSelectOpened] = useState(false);
    const showSelect = isSelectOpened && hasSelect && !!data;

    const selectRef = useRef<HTMLDivElement | null>(null);

    const handleClickOutside = (e: MouseEvent): void => {
        if (selectRef.current === null || !isSelectOpened) {
            return;
        }
        if (!selectRef.current.contains(e.target as Node)) {
            setIsSelectOpened(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    });

    const handleClick = () => {
        hasSelect && setIsSelectOpened((prevState => !prevState));

        onClick?.(id);
    };

    const handleSelectItemClick = (itemId: number) => {
        setIsSelectOpened(false);

        onClick?.(itemId);
    };

    return (
        <div className={cn('', { chosen: isChosen, 'select-opened': isSelectOpened }, className)}>
             <div
                className={cn('inner')}
                onClick={handleClick}
            >
                {label}
                {hasSelect &&
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" className={cn('icon')}>
                        <path d="M22.1464 12.8536C22.4614 12.5386 22.2383 12 21.7929 12H8.20711C7.76165 12 7.53857 12.5386 7.85355 12.8536L14.6464 19.6464C14.8417 19.8417 15.1583 19.8417 15.3536 19.6464L22.1464 12.8536Z" fill="#F0F0F0"/>
                    </svg>
                }
            </div>
            {showSelect &&
                <div className={cn('select')} ref={selectRef}>
                    {data.map(({ title, categoryId }) => (
                        <p
                            key={categoryId}
                            className={cn('select-item', { chosen: categoryId === id })}
                            onClick={() => handleSelectItemClick(categoryId)}
                        >
                            {title}
                        </p>
                    ))}
                </div>
            }
        </div>

    );
};

export default Chip;
