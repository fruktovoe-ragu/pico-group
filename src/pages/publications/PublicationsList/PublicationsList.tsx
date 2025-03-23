import React from 'react';
import cnCreate from 'utils/cnCreate';
import { IPublicationYears, IPublicationsList } from 'content/publications';
import Publication from 'pages/publications/Publication/Publication';
import ChipsPanel from 'components/ChipsPanel/ChipsPanel';
import './PublicationsList.css';

interface IPublicationsListProps {
  publications: IPublicationYears,
};

const cn = cnCreate('publications-list');
const PublicationsList: React.FC<IPublicationsListProps> = ({ publications }) => {
  const { years } = publications;

  const renderPublications = (year: string, publications: IPublicationsList[], i: number) => (
    <div key={i + year} className={cn('year')}>
      <h3 className={cn('content-title')}>{year}</h3>
      {publications.map(({ title, ...rest }, i) => (
        <Publication data={{ title, ...rest }} key={title + i} />
      ))}
    </div>
  );

  const peerReviewedWorkChipsData = years.map(({ year, list, id }) => ({
    title: year,
    categoryId: id,
    content: renderPublications(year, list, id),
  }));

  const peerReviewedWorkChipsDataWithAllYears = [{
    title: 'All years',
    categoryId: -1,
    content: years.map(({ year, list, id }) => renderPublications(year, list, id)),
  }, ...peerReviewedWorkChipsData];

  return (
    <ChipsPanel data={peerReviewedWorkChipsDataWithAllYears} />
  );
};

export default PublicationsList;
