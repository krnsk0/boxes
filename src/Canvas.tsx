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
  const { width, height, top, left, center, angle } = useMst()
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d')
      if (ctx) {
        ctx.fillStyle = '#FFFFFF'
        ctx.fillRect(0, 0, WIDTH, HEIGHT)

        ctx.fillStyle = '#AADD55'
        const scaledX = WIDTH * left
        const scaledY = HEIGHT * top
        const scaledW = WIDTH * width
        const scaledH = HEIGHT * height
        const scaledCenterX = WIDTH * center.x
        const scaledCenterY = HEIGHT * center.y

        // rotate around center
        // ctx.translate(scaledCenterX, <scaled></scaled>CenterY)
        // ctx.rotate(angle)
        // ctx.translate(-scaledCenterX, -scaledCenterY)
        // ctx.fillRect(scaledX, scaledY, scaledW, scaledH)
      }
    }
  }, [top, left, width, height, center.x, center.y, angle])

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
