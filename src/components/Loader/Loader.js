import { RotatingSquare } from 'react-loader-spinner';
import { LoaderDiv } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderDiv>
      <RotatingSquare
        ariaLabel="rotating-square"
        visible={true}
        color="grey"
        strokeWidth="10"
      />
    </LoaderDiv>
  );
};

export default Loader;
