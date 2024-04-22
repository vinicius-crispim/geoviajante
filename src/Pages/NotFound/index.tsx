import { useNavigate } from 'react-router-dom';
import { ReactComponent as NotFoundImage } from '../../images/notfound.svg';
import * as S from './NotFound'

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <S.NotFound>
      <div className='voltar'>
        <button onClick={() => {
          navigate(-1);
        }}>
          {'< Voltar'}
        </button>
      </div>
      <NotFoundImage className='img' />
    </S.NotFound>
  );
}