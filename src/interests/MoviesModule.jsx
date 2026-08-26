import { InterestModule } from './InterestModule.jsx';

export function MoviesModule({ item }) {
  return (
    <InterestModule item={item}>
      <p className="interest-detail interest-detail--movies">SCI-FI · ACTION · HEIST</p>
    </InterestModule>
  );
}
