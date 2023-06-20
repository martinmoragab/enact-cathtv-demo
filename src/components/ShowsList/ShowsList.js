import kind from '@enact/core/kind';
import Scroller from '@enact/sandstone/Scroller';
import Repeater from '@enact/ui/Repeater';
import PropTypes from 'prop-types';
import css from './ShowsList.module.less';

import ShowCard from '../ShowCard/ShowCard';


const shows = [
  {
    key: 1,
    title: 'Show 1',
    description: 'This is the description for show 1',
    url: 'https://player.vimeo.com/external/173395600.sd.mp4?s=63194e3affa139d67f337000c8c396f5b3a4db7e&profile_id=164&oauth2_token_id=57447761',
  },
  {
    key: 2,
    title: 'Show 2',
    description: 'This is the description for show 2',
    url: 'https://player.vimeo.com/external/205380512.sd.mp4?s=bc0384e65f75c9bd7e9dabff0315917173a41715&profile_id=164&oauth2_token_id=57447761',
  },
  {
    key: 3,
    title: 'Show 3',
    description: 'This is the description for show 3',
    url: 'https://player.vimeo.com/external/173395627.sd.mp4?s=dba4878cdc515853fa2489b9879838e7426c72da&profile_id=164&oauth2_token_id=57447761',
  },
]

const ListBase = kind({
	name: 'ShowsList',

	propTypes: {
		children: PropTypes.array,
    onSelectShow: PropTypes.func,
	},

	render: ({ onSelectShow }) => (
    <div className={ css.showsList }>
      <Scroller>
        <Repeater childComponent={ ShowCard } indexProp='index' itemProps={{ onSelect: onSelectShow }}>
          { shows }
        </Repeater>
      </Scroller>
    </div>
	)
});

export default ListBase;
export {
	ListBase as ShowsList,
	ListBase
};