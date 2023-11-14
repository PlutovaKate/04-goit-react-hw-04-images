import { ButtonLoad } from './Button.styled';

const Button = ({ changePage }) => {
  return (
    <ButtonLoad type="button" onClick={changePage}>
      Load more
    </ButtonLoad>
  );
};

export default Button;
