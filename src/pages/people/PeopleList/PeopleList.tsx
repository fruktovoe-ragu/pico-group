import React from 'react';
import cnCreate from 'utils/cnCreate';
import Person from 'pages/people/Person/Person';
import { IPeopleGroup } from 'content/people/people';
import './PeopleList.css';

interface IPeopleList {
  peopleGroup: IPeopleGroup;
};

const cn = cnCreate('people-list');
const PeopleList: React.FC<IPeopleList> = ({ peopleGroup }) => {
  const { address, list } = peopleGroup;

  return (
    <div  className={cn()}>
      {!!address && (
        <div className={cn('general-address')}>
          <div className={cn('container')}>
            <p className={cn('text')}>General address:</p>
            <p dangerouslySetInnerHTML={{__html: address}} />
          </div>
        </div>
      )}
      {list.map((person, i) => (
        <Person data={person} key={i + person.name} />
      ))}
    </div>
  );
};

export default PeopleList;
