import kind from '@enact/core/kind';
import Spottable from '@enact/spotlight/Spottable';
import PropTypes from 'prop-types';
import css from './ShowCard.module.less';

const CardBase = kind({
	name: 'ShowCard',
  propTypes: {
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string,
    onSelect: PropTypes.func,
  },
  handlers: {
    onSelect: (ev, { index, id, title, url, description, onSelect }) => {
      onSelect({ index, id, title, description, url });
    }
  },
	render: ({ title, description, id, onSelect }) => (
		<div className={ css.card } id={ id } onClick={ onSelect }>
      <h1>{ title }</h1>
      <h3>{ description }</h3>
		</div>
	)
});

const Card = Spottable(CardBase);

export default Card;
export { CardBase, Card };