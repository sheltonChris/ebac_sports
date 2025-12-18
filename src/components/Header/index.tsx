import * as S from './styles'
import { Produto } from '../../App'
import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'
import { useAppSelector } from '../../store/hooks'

type Props = {
  favoritos: Produto[]
}

const Header = ({ favoritos }: Props) => {
  const itensNoCarrinho = useAppSelector((state) => state.carrinho.itens)

  const valorTotal = itensNoCarrinho.reduce(
    (total, item) => total + item.preco,
    0
  )

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{favoritos.length} favoritos</span>
        <img src={cesta} />
        <span>
          {itensNoCarrinho.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
