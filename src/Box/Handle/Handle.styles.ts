import { css } from '@emotion/react'

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
