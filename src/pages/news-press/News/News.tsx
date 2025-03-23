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

  const renderYear = (year: string, arr: INews[], categoryId: number) => (
    <div className={cn('year')} key={categoryId}>
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

  const chipsData = newsData.map(({ year, news, id }) => ({
    title: year,
    categoryId: id,
    content: renderYear(year, news, id),
  }));

  const chipsDataWithAllYears = [{
    title: 'All years',
    categoryId: -1,
    content: newsData.map(({ year, news, id }) => renderYear(year, news, id)),
  }, ...chipsData];

  return (
    <div className={cn()}>
      <ChipsPanel
        data={chipsDataWithAllYears}
        itemsMobileDisplayNumber={chipsDataWithAllYears.length + 1}
      />
    </div>
  );
};

export default News;
