import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReview } from '../../Utils/Fetch';
import * as SC from './Review.styled';
import { NoInfoText } from '../NoInfo/NoInfo';

export const Review = () => {
  const [reviewInfo, setReviewInfo] = useState(null);
  const { filmId } = useParams();

  useEffect(() => {
    fetchReview(Number(filmId)).then(setReviewInfo);
  }, [filmId]);

  if (!reviewInfo) return;

  const { results } = reviewInfo.data;
  console.log(reviewInfo);
  return (
    <>
      {results.length ? (
        results.map(({ author, content, id }) => (
          <SC.RevieWrap key={id}>
            <SC.ReviewTitle> {author} </SC.ReviewTitle>
            <SC.ReviewText> {content} </SC.ReviewText>
          </SC.RevieWrap>
        ))
      ) : (
        <NoInfoText>Sorry, there is no detail information yet.</NoInfoText>
      )}
    </>
  );
};
