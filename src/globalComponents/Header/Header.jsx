import { useNavigate } from 'react-router-dom';
import Button from 'components/Button/Button';

function Header() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };
  return (
    <div className="flex shadow-lg w-full bg-white fixed top-0 left-0 z-[10] bg-blue-400 px-64">
      <div className="flex w-full justify-between my-4">
        <div className="flex text-blue-100 text-3xl w-full items-center font-Courgette">
          PostUp
        </div>
        <div className="flex items-center justify-center">
          <Button buttonText="Home" onClick={handleGoHome} whiteButton />
        </div>
      </div>
    </div>
  );
}

export default Header;
