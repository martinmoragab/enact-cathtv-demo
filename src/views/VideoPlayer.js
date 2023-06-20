import kind from "@enact/core/kind";
import { Panel } from '@enact/sandstone/Panels';
import VideoPlayer from '@enact/sandstone/VideoPlayer';
import PropTypes from 'prop-types';
import catholicTvLogo from '../assets/ctv-logo.png'

const VideoPlayerBase = kind({
  name: 'VideoPlayer',
  propTypes: {
    title: PropTypes.string,
    url: PropTypes.string, // url for video to play
    onNavigate: PropTypes.func
  },
  render: ({ title, url, onNavigate, ...rest }) => (
    <Panel { ...rest }>
      <h1>{ title }</h1>
      <VideoPlayer title={title} onBack={onNavigate} poster={catholicTvLogo}>
        <source src={url} type="video/mp4" />
      </VideoPlayer>
    </Panel>
  )
});

export default VideoPlayerBase;
export { VideoPlayerBase as VideoPlayer };