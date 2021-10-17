import { IRoot, Root } from './root.mst'
import { createContext, useContext, PropsWithChildren } from 'react'

const root = Root.create({})
const MstContext = createContext<IRoot>(root)

export const useMst = (): IRoot => {
  const mst = useContext(MstContext)
  if (!mst) throw new Error('no provider')
  return mst
}

export const MstProvider = ({
  children,
}: PropsWithChildren<Record<string, unknown>>) => {
  return <MstContext.Provider value={root}>{children}</MstContext.Provider>
}
