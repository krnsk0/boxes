import { css } from '@emotion/react'
import type { BoxViewProps } from './Box'

const dragHandleBase = (handleSize: number) => css`
  position: absolute;
  width: ${handleSize}px;
  height: ${handleSize}px;
  border-radius: 50%;
  z-index: +2;
  background: #ff8282;
`

const offsetHandle = (handleSize: number, borderSize: number) =>
  `${-borderSize / 2 - handleSize / 2}px`

export const styles = {
  container: ({ top, left, width, height, angle }: BoxViewProps) => css`
    position: relative;
    top: ${top * 100}%;
    left: ${left * 100}%;
    width: ${width * 100}%;
    height: ${height * 100}%;
    transform: rotate(${angle}deg);
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

  northwest: (handleSize: number, borderSize: number) => css`
    ${dragHandleBase(handleSize)}
    top: ${offsetHandle(handleSize, borderSize)};
    left: ${offsetHandle(handleSize, borderSize)};
    cursor: nwse-resize;
  `,

  northeast: (handleSize: number, borderSize: number) => css`
    ${dragHandleBase(handleSize)}
    top: ${offsetHandle(handleSize, borderSize)};
    right: ${offsetHandle(handleSize, borderSize)};
    cursor: nesw-resize;
  `,

  southwest: (handleSize: number, borderSize: number) => css`
    ${dragHandleBase(handleSize)}
    bottom: ${offsetHandle(handleSize, borderSize)};
    left: ${offsetHandle(handleSize, borderSize)};
    cursor: nesw-resize;
  `,

  southeast: (handleSize: number, borderSize: number) => css`
    ${dragHandleBase(handleSize)}
    bottom: ${offsetHandle(handleSize, borderSize)};
    right: ${offsetHandle(handleSize, borderSize)};
    cursor: nwse-resize;
  `,

  rotateHandle: (handleSize: number) => css`
    ${dragHandleBase(handleSize)}
    top: -70px;
    left: calc(50% - ${handleSize / 2}px);
    cursor: grab;
  `,
}
