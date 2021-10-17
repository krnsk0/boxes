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
  const {
    width,
    height,
    top,
    left,
    center: { centerX, centerY },
    angleRadians,
  } = useMst()
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d')
      if (ctx) {
        ctx.fillStyle = '#AADD55'
        const scaledX = WIDTH * left
        const scaledY = HEIGHT * top
        const scaledW = WIDTH * width
        const scaledH = HEIGHT * height
        const scaledCenterX = WIDTH * centerX
        const scaledCenterY = HEIGHT * centerY

        // rotate around center
        ctx.translate(scaledCenterX, scaledCenterY)
        ctx.rotate(angleRadians)
        ctx.translate(-scaledCenterX, -scaledCenterY)

        ctx.fillRect(scaledX, scaledY, scaledW, scaledH)
      }
    }
  }, [top, left, width, height, centerX, centerY, angleRadians])

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
