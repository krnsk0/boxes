import { css } from '@emotion/react'
import { observer } from 'mobx-react-lite'
import Box from './Box'
import { useMst } from './StateProvider'

const styles = {
  overlay: (width: number, height: number) => css`
    position: relative;
    border: 1px solid red;
    width: ${width}px;
    height: ${height}px;
  `,
}

type Props = {
  WIDTH: number
  HEIGHT: number
}

function Overlay({ WIDTH, HEIGHT }: Props) {
  const { top, left, width, height, angle } = useMst()

  return (
    <div css={styles.overlay(WIDTH, HEIGHT)}>
      <Box top={top} left={left} width={width} height={height} angle={angle}>
        <div>inside</div>
      </Box>
    </div>
  )
}

export default observer(Overlay)
