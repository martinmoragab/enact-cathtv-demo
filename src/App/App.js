import kind from '@enact/core/kind';
import ThemeDecorator from '@enact/sandstone/ThemeDecorator';
import css from './App.module.less'
import Panels from '@enact/sandstone/Panels';
import './attachErrorHandler';
import PropTypes from 'prop-types';
import Changeable from '@enact/ui/Changeable';

import { Home } from '../views/Home';
import { VideoPlayer } from '../views/VideoPlayer'
import { Menu } from '../components/Menu/Menu';

const AppBase = kind({
	name: 'App',
	propTypes: {
		index: PropTypes.number,
		show: PropTypes.object,
		onNavigate: PropTypes.func,
		onBack: PropTypes.func,
		onSelectShow: PropTypes.func,
	},
	defaultProps: {
		index: 0,
		show: {
			title: 'First',
			description: 'First desc',
			url: '',
		},
	},
	handlers: {
		onSelectShow: (ev, { onNavigate, onSelectShow }) => {
			onSelectShow({
				show: {
					title: ev.title,
					description: ev.description,
					url: ev.url,
				},
			});
			// To navigate
			onNavigate({
				index: 1,
			});
		},
	},
	render: ({ index, show, onNavigate, onSelectShow }) => (
		<>
			<Menu />
			<Panels className={ css.app } onBack={ onNavigate } index={index}>
				<Home onSelectShow={onSelectShow} />
				<VideoPlayer title={`${show.title}: ${show.description}`} url={show.url} onNavigate={onNavigate} />
			</Panels>
		</>
	)
});

const App = Changeable({prop: 'index', change: 'onNavigate'},
Changeable({prop: 'show', change: 'onSelectShow'},
	ThemeDecorator(AppBase)
))

export default ThemeDecorator(App);
