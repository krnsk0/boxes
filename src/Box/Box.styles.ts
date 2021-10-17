import { css } from '@emotion/react'
import type { BoxViewProps } from './Box'

export const styles = {
  container: ({ top, left, width, height, angle }: BoxViewProps) => css`
    position: relative;
    top: ${top * 100}%;
    left: ${left * 100}%;
    width: ${width * 100}%;
    height: ${height * 100}%;
    transform: rotate(${angle}rad);
    transform-origin: center-center;
  `,

  dragBorder: (borderSize: number) => css`
    top: -${borderSize}px;
    left: -${borderSize}px;
    border: ${borderSize}px dashed #ff8282;
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
