import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type CarrinhoState = {
  itens: Produto[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<Produto>) {
      const produto = action.payload

      const produtoJaExiste = state.itens.find((p) => p.id === produto.id)

      if (!produtoJaExiste) {
        state.itens.push(produto)
      }
    },
    removeItem(state, action: PayloadAction<number>) {
      state.itens = state.itens.filter((p) => p.id !== action.payload)
    }
  }
})

export const { addItem, removeItem } = carrinhoSlice.actions

export default carrinhoSlice.reducer
