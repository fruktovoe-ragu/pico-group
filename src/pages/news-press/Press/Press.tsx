import React from 'react';
import cnCreate from 'utils/cnCreate';
import ChipsPanel from 'components/ChipsPanel/ChipsPanel';
import { press, IRelease } from 'content/news-press/press';
import './Press.css';

const cn = cnCreate('press');
const Press: React.FC = () => {
  const renderYear = (year: string, arr: IRelease[], categoryId: number) => (
    <div className={cn('year')} key={categoryId}>
      <h3 className={cn('title')}>{year}</h3>
      <div className={cn('releases')}>
        {arr.map(({ date, text }: IRelease, i: number) => (
          <div className={cn('item')} key={i + date}>
            <p className={cn('date')}>{date}</p>
            <div className={cn('text')}>{text()}</div>
          </div>
        ))}
      </div>
    </div>
  );

  const chipsData = press.map(({ year, id, releases }) => ({
    title: year,
    categoryId: id,
    content: renderYear(year, releases, id)
  }));

  const chipsDataWithAllYears = [{
    title: 'All years',
    categoryId: -1,
    content: press.map(({ year, id, releases }) => renderYear(year, releases, id))
  }, ...chipsData];

  return (
    <div className={cn()}>
      <ChipsPanel data={chipsDataWithAllYears} />
    </div>
  );
};

export default Press;
