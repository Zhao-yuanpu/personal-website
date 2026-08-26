import { InterestModule } from './InterestModule.jsx';

export function MusicModule({ item }) {
  return (
    <InterestModule item={item}>
      <p className="interest-detail interest-detail--music">Liszt · Chopin · Rachmaninoff<br />Heifetz · Richter · Cziffra</p>
    </InterestModule>
  );
}
