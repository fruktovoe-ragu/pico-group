import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import cnCreate from 'utils/cnCreate';
import AppContext from 'context/AppContext/AppContext';
import throttle from 'lodash.throttle';
import Main from 'pages/main/Main';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import People from 'pages/people/People';
import PeopleList from 'pages/people/PeopleList/PeopleList';
import Research from 'pages/research/Research';
import Collaboration from 'pages/collaboration/Collaboration';
import NewsPress from 'pages/news-press/NewsPress';
import Publications from 'pages/publications/Publications';
import PublicationsList from 'pages/publications/PublicationsList/PublicationsList';
import Article from 'pages/news-press/News/NewsArticle/NewsArticle';
import Press from 'pages/news-press//Press/Press';
import News from 'pages/news-press//News/News';
import { menu } from 'content/menu';
import { research } from 'content/research';
import { people } from 'content/people/people';
import { publications } from 'content/publications';
import './App.css';

const cn = cnCreate('layout-default');
const App: React.FC = () => {
  const [isScrollTopApear, setScrollTopApear] = useState(false);

  const handlePageScroll = useCallback((): void => {
    setScrollTopApear(window.scrollY >= 500);
  }, []);

  const handleSetThrottled = useMemo(() => throttle(handlePageScroll, 20), [handlePageScroll]);

  useEffect(() => {
    window.addEventListener('scroll', handleSetThrottled);
    window.addEventListener('resize', handleSetThrottled);

    return (): void => {
        window.removeEventListener('scroll', handleSetThrottled);
        window.removeEventListener('resize', handleSetThrottled);
    };
  }, [handleSetThrottled]);

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AppContext>
      <BrowserRouter>
        <div className={cn()}>
          <Header />
          <Routes>
            <Route path={`${menu[4].submenu[0].url}/:id`} element={<Article />} />
            <Route path={menu[4].url} element={<NewsPress />}>
              <Route path="" element={<Navigate to={menu[4].submenu[0].url} />} />
              <Route path={menu[4].submenu[0].url} element={<News />} />
              <Route path={menu[4].submenu[1].url} element={<Press />} />
              <Route path={`${menu[4].submenu[0].url}/:id`} element={<Article />} />
            </Route>
            <Route path={menu[3].url} element={<Publications />}>
                <Route path="" element={ <Navigate to={menu[3].submenu[0].url} />} />
                {publications.map((section, i) => (
                   <Route key={section.title + i} path={menu[3].submenu[i].url} element={<PublicationsList publications={section} />} />
                ))}
            </Route>
            <Route path={menu[2].url} element={<Collaboration />} />
            <Route path={menu[1].url} element={<People />}>
              <Route path="" element={<Navigate to={menu[1].submenu[0].url} replace />} />
              {people.map((peopleGroup, i) => (
                <Route key={peopleGroup.title + i} path={menu[1].submenu[i].url} element={<PeopleList peopleGroup={peopleGroup} />} />
              ))}
            </Route>
            <Route path={menu[0].url} element={<Research />}>
              <Route path="" element={<Navigate to={menu[0].submenu[0].url} replace />} />
              {research.map(({ title, article: Article }, i) => (
                <Route key={title + i} path={menu[0].submenu[i].url} element={<Article /> } />
              ))}
            </Route>
            <Route index element={<Main />} />
          </Routes>
          <Footer />
        </div>
        <div className={cn('scroll-top', { apear: isScrollTopApear })} onClick={handleScrollTop}>
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" className={cn('arrow-up')}>
            <path d="M26 20L15 9L4 20" stroke="#E7E7E7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </BrowserRouter>
    </AppContext>
  );
};

export default App;
