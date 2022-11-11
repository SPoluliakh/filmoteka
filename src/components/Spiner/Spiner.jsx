import { CSSProperties } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

const override: CSSProperties = {
  display: 'block',
  margin: '150px auto 0 auto',
  borderColor: 'red',
};

function Spiner() {
  return (
    <>
      <ClipLoader
        color="red"
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
      />
    </>
  );
}

export default Spiner;
