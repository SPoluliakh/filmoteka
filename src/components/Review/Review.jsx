import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReview } from '../Fetch';
import NoImg from '../../components/NoImg/sad-cat-15.jpg';

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
          <div key={id}>
            <h3> {author} </h3>
            <p> {content} </p>
          </div>
        ))
      ) : (
        <div>
          <img src={NoImg} alt="sad cat" style={{ width: '300px' }} />
          <p>Sorry,there is no detail information yet.</p>
        </div>
      )}
    </>
  );
};
