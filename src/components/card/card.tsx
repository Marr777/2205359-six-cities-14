import { OfferType } from '../../types/offer-type';
import {Link} from 'react-router-dom';
import { AppRoute } from '../../const';
import {useState} from 'react';

export default function Card ({...offer}: OfferType): JSX.Element {
  const [activeCard, setActiveCard] = useState({});
  function handleMouseOver () {
    setActiveCard(offer.id);
    // eslint-disable-next-line
    console.log(activeCard);
  }
  const isPremium = 'Premium';
  const ratingPrecentage = Math.round((offer.rating * 100) / 5);
  return (
    <article className="cities__card place-card" onMouseOver={handleMouseOver}>
      <div className={offer.isPremium ? 'place-card__mark' : ''}>
        <span>{offer.isPremium && isPremium}</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.Offer}/${offer.id}`}>
          <img
            className="place-card__image"
            src={offer.previewImage}
            width={260}
            height={200}
            alt="Place image"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">{`€${offer.price}`}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            className="place-card__bookmark-button button"
            type="button"
          >
            <svg
              className="place-card__bookmark-icon"
              width={18}
              height={19}
            >
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${ratingPrecentage}%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{`${offer.type[0].toUpperCase()}${offer.type.slice(1)}`}</p>
      </div>
    </article>
  );
}