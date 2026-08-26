import { InterestModule } from './InterestModule.jsx';

export function SportsModule({ item }) {
  return (
    <InterestModule item={item}>
      <p className="interest-detail">校园跑团 · 每日 3 km<br />健身训练</p>
    </InterestModule>
  );
}
