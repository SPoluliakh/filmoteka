import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchTrailers } from '../../Utils/Fetch';
import { NoInfoText } from 'components/NoInfo/NoInfo.styled';
import Spiner from 'components/Spiner/Spiner';
import { VideoPlayer } from './VideoPlayer';

export const Trailers = () => {
  const [loader, setLoader] = useState(null);
  const [trailers, setTrailers] = useState(null);
  const { filmId } = useParams();

  useEffect(() => {
    setLoader('pending');
    fetchTrailers(filmId)
      .then(data => {
        setTrailers(data);
        setLoader('resolve');
      })
      .catch(err => {
        console.log(err);
        setLoader('rejected');
      });
  }, [filmId]);

  if (!trailers) return;

  const { results } = trailers.data;
  return (
    <>
      {loader === 'pending' && <Spiner />}
      {loader === 'resolve' && <VideoPlayer data={results} />}
      {loader === 'rejected' ||
        (results.length === 0 && (
          <NoInfoText>Sorry, there is no video.</NoInfoText>
        ))}
    </>
  );
};
