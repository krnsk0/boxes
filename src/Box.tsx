import { css } from '@emotion/react'
import { PropsWithChildren } from 'react'

type BoxViewProps = {
  left: number // percent
  top: number // percent
  width: number // percent
  height: number // percent
  angle: number // degrees
}

type BoxComponentProps = PropsWithChildren<BoxViewProps>

const styles = {
  container: ({ top, left, width, height, angle }: BoxViewProps) => css`
    position: relative;
    top: ${top * 100}%;
    left: ${left * 100}%;
    width: ${width * 100}%;
    height: ${height * 100}%;
    transform: rotate(${angle}deg);
    transform-origin: center-center;
  `,

  dragBorder: css`
    top: -6px;
    left: -6px;
    border: 6px dashed #ff8282;
    height: 100%;
    width: 100%;
    position: absolute;
    cursor: move;
  `,

  childContainer: css`
    z-index: +1;
    cursor: auto;
    width: 100%;
    height: 100%;
  `,
}

function Box({ children, top, left, width, height, angle }: BoxComponentProps) {
  return (
    <div css={styles.container({ top, left, width, height, angle })}>
      <div css={styles.dragBorder}>
        <div css={styles.childContainer}>{children}</div>
      </div>
    </div>
  )
}

export default Box
