import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReview } from '../../Utils/Fetch';
import * as SC from './Review.styled';
import { NoInfoText } from '../NoInfo/NoInfo';
import Spiner from 'components/Spiner/Spiner';

export const Review = () => {
  const [loader, setLoader] = useState(null);
  const [reviewInfo, setReviewInfo] = useState(null);
  const { filmId } = useParams();

  useEffect(() => {
    setLoader('pending');
    fetchReview(filmId)
      .then(data => {
        setReviewInfo(data);
        setLoader('resolve');
      })
      .catch(err => {
        console.log(err);
        setLoader('rejected');
      });
  }, [filmId]);

  if (!reviewInfo) return;

  const { results } = reviewInfo.data;
  return (
    <>
      {loader === 'pending' && <Spiner />}
      {loader === 'resolve' &&
        results.map(({ author, content, id }) => (
          <SC.RevieWrap key={id}>
            <SC.ReviewTitle> {author} </SC.ReviewTitle>
            <SC.ReviewText> {content} </SC.ReviewText>
          </SC.RevieWrap>
        ))}
      {loader === 'rejected' ||
        (results.length === 0 && (
          <NoInfoText>Sorry, there is no detail information yet.</NoInfoText>
        ))}
    </>
  );
};
