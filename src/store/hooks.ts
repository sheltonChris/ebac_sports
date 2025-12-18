import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDIspatch } from '.'

export const useAppDispatch = () => useDispatch<AppDIspatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
