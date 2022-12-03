import PropTypes from 'prop-types';
import Iframe from 'react-iframe';
import * as SC from './VideoPlayer.styled';

export const VideoPlayer = ({ data }) => {
  return (
    <SC.VideoList>
      {data.map(({ id, key, name }) => (
        <SC.VideoItems loading="lazy" key={id}>
          <Iframe
            title={name}
            url={`https://www.youtube.com/embed/${key}?rel=0&showinfo=0&autoplay=1`}
            width="640px"
            height="320px"
          />
        </SC.VideoItems>
      ))}
    </SC.VideoList>
  );
};

Iframe.prototype = {
  data: PropTypes.array,
};
