import { css } from '@emotion/react'
import { observer } from 'mobx-react-lite'
import { useRef, useEffect } from 'react'
import { useMst } from './StateProvider'

const styles = {
  canvas: css`
    border: 1px solid black;
    position: absolute;
  `,
}

type Props = {
  WIDTH: number
  HEIGHT: number
}

function Canvas({ WIDTH, HEIGHT }: Props) {
  const { width, height, topLeft } = useMst()
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d')
      if (ctx) {
        ctx.fillStyle = '#AADD55'
        const scaledX = WIDTH * topLeft.x
        const scaledY = HEIGHT * topLeft.y
        const scaledW = WIDTH * width
        const scaledH = HEIGHT * height

        ctx.fillRect(scaledX, scaledY, scaledW, scaledH)
      }
    }
  }, [topLeft.x, topLeft.y, width, height])

  return (
    <canvas
      ref={canvasRef}
      width={WIDTH}
      height={HEIGHT}
      css={styles.canvas}
    ></canvas>
  )
}

export default observer(Canvas)
