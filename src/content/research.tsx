import Article1 from 'pages/research/Articles/Article1/Article1';
import Article2 from 'pages/research/Articles/Article2/Article2';
import Article3 from 'pages/research/Articles/Article3/Article3';
import Article4 from 'pages/research/Articles/Article4/Article4';
import Article5 from 'pages/research/Articles/Article5/Article5';
import Article6 from 'pages/research/Articles/Article6/Article6';

export interface IResearch {
    title: string;
    article: React.ReactNode;
};

export const research = [
  {
    title: 'Maxwell’s demon and stochastic thermodynamics',
    article: Article1,
  },
  {
    title: 'Electronic cooling',
    article: Article2,
  },
  {
    title: 'Electronic refrigeration',
    article: Article3,
  },
  {
    title: 'Quantum heat engine',
    article: Article4,
  },
  {
    title: 'Single-electron turnstile',
    article: Article5,
  },
  {
    title: 'Temperature and thermometry',
    article: Article6,
  },
];
