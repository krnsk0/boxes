import { css } from '@emotion/react'
import Canvas from './Canvas'
import Overlay from './Overlay'
import { MstProvider } from './StateProvider'
const WIDTH = 500
const HEIGHT = 500

export function App() {
  return (
    <MstProvider>
      <Canvas WIDTH={WIDTH} HEIGHT={HEIGHT} />
      <Overlay WIDTH={WIDTH} HEIGHT={HEIGHT} />
    </MstProvider>
  )
}
