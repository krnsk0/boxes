import { PropsWithChildren } from 'react'
import { styles } from './Box.styles'

const HANDLE_SIZE = 18
const BORDER_SIZE = 6

export type BoxViewProps = {
  left: number // percent
  top: number // percent
  width: number // percent
  height: number // percent
  angle: number // degrees
}

type BoxComponentProps = PropsWithChildren<BoxViewProps>

function Box({ children, top, left, width, height, angle }: BoxComponentProps) {
  return (
    <div css={styles.container({ top, left, width, height, angle })}>
      <div css={styles.northeast(HANDLE_SIZE, BORDER_SIZE)}></div>
      <div css={styles.northwest(HANDLE_SIZE, BORDER_SIZE)}></div>
      <div css={styles.southwest(HANDLE_SIZE, BORDER_SIZE)}></div>
      <div css={styles.southeast(HANDLE_SIZE, BORDER_SIZE)}></div>
      <div css={styles.rotateHandle(HANDLE_SIZE)}></div>
      <div css={styles.dragBorder(BORDER_SIZE)}>
        <div css={styles.childContainer}>{children}</div>
      </div>
    </div>
  )
}

export default Box
