import React from 'react';
import cnCreate from 'utils/cnCreate';
import { useLocation } from 'react-router-dom';
import Tile from 'components/Tile/Tile';
import ChipsPanel from 'components/ChipsPanel/ChipsPanel';
import { newsData, INews } from 'content/news-press/news';
import './News.css';

const cn = cnCreate('news');
const News: React.FC = () => {
  const { pathname } = useLocation();

  const renderYear = (year: number, arr: INews[], i: number) => (
    <div className={cn('year')} key={i * year}>
      <h3 className={cn('title')}>{year}</h3>
      <div className={cn('releases')}>
        {arr.map(({ date, id, title }: INews, i: number) => (
          <Tile
            key={i + date}
            date={date}
            title={title}
            linkHref={`${pathname}/${id}`}
            isSecondary
          />
        ))}
      </div>
    </div>
  );

  const chipsData = newsData.map(({ year, news }, i) => ({
    title: year,
    content: renderYear(year, news, i)
  }));

  const chipsDataWithAllYears = [{
    title: 'All years',
    content: newsData.map(({ year, news }, i) => renderYear(year, news, i))
  }, ...chipsData];

  return (
    <div className={cn()}>
      <ChipsPanel data={chipsDataWithAllYears} />
    </div>
  );
};

export default News;
