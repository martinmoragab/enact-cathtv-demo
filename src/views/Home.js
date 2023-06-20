import kind from "@enact/core/kind";
import { Panel } from '@enact/sandstone/Panels';
import PropTypes from 'prop-types';

import { Menu } from '../components/Menu';
import { ShowsList } from "../components/ShowsList";

const HomeBase = kind({
  name: 'Home',
  propTypes: {
    onSelectShow: PropTypes.func,
  },
  render: ({ onSelectShow }) => (
    <Panel>
      <Menu />
      <ShowsList onSelectShow={onSelectShow}  />
    </Panel>
  )
});

export default HomeBase;
export { HomeBase as Home };