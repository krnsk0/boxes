import { HandleNames } from './handleNames'
import { styles } from './Handle.styles'
import { ReactNode } from 'react'
import { IRoot } from '../../root.mst'

type HandleProps = {
  handleName: HandleNames
  parentRef: React.RefObject<HTMLDivElement | undefined>
  handleSize: number
  borderSize: number
  boxNode: IRoot
}

function Handle({
  parentRef,
  handleName,
  handleSize,
  borderSize,
  boxNode,
}: HandleProps) {
  const pointerMoveHandlerMap: {
    [key in HandleNames]: (x: number, y: number) => void
  } = {
    [HandleNames.NW]: (x, y) => console.log('NW drag', x, y),
    [HandleNames.NE]: (x, y) => console.log('NE drag', x, y),
    [HandleNames.SE]: (x, y) => console.log('SE drag', x, y),
    [HandleNames.SW]: (x, y) => console.log('SW drag', x, y),
    [HandleNames.Rotate]: (x, y) => boxNode.rotateToPoint(x, y),
  }

  const onPointerUp = () => {
    window.removeEventListener('pointermove', onPointerMove)
    window.removeEventListener('pointerup', onPointerUp)
  }

  const onPointerMove = (e: PointerEvent) => {
    if (parentRef.current) {
      const {
        width: parentWidth,
        height: parentHeight,
        top: parentTop,
        left: parentLeft,
      } = parentRef.current.getBoundingClientRect()

      const x = (e.clientX - parentLeft) / parentWidth
      const y = (e.clientY - parentTop) / parentHeight
      pointerMoveHandlerMap[handleName](x, y)
    }
  }

  const onPointerDown = () => {
    window.addEventListener('pointermove', onPointerMove)
    window.addEventListener('pointerup', onPointerUp)
  }

  /**
   * Mapping from handle enum types to JSX which is used in render
   * method
   */
  const handleRenderMap: { [key in HandleNames]: ReactNode } = {
    [HandleNames.NW]: (
      <div
        css={styles.northwest(handleSize, borderSize)}
        onPointerDown={onPointerDown}
      ></div>
    ),
    [HandleNames.NE]: (
      <div
        css={styles.northeast(handleSize, borderSize)}
        onPointerDown={onPointerDown}
      ></div>
    ),
    [HandleNames.SE]: (
      <div
        css={styles.southeast(handleSize, borderSize)}
        onPointerDown={onPointerDown}
      ></div>
    ),
    [HandleNames.SW]: (
      <div
        css={styles.southwest(handleSize, borderSize)}
        onPointerDown={onPointerDown}
      ></div>
    ),
    [HandleNames.Rotate]: (
      <div
        css={styles.rotateHandle(handleSize)}
        onPointerDown={onPointerDown}
      ></div>
    ),
  }
  return <>{handleRenderMap[handleName]}</>
}

export default Handle
