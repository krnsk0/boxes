import { PropsWithChildren } from 'react'
import { styles } from './Box.styles'
import Handle, { HandleNames } from './Handle'

export type BoxViewProps = {
  left: number // percent
  top: number // percent
  width: number // percent
  height: number // percent
  angle: number // degrees
}

export type BoxConfigProps = {
  parentRef: React.RefObject<HTMLDivElement>
  handleSize: number
  borderSize: number
  enableRotation: boolean
}

type BoxComponentProps = PropsWithChildren<BoxViewProps & BoxConfigProps>

function Box({
  children,
  top,
  left,
  width,
  height,
  angle,
  parentRef,
  handleSize,
  borderSize,
  enableRotation,
}: BoxComponentProps) {
  return (
    <div css={styles.container({ top, left, width, height, angle })}>
      {Object.values(HandleNames)
        .filter((handleName) => {
          if (enableRotation) return true
          else return handleName !== HandleNames.Rotate
        })
        .map((handleName) => {
          return (
            <Handle
              key={handleName}
              handleName={handleName}
              parentRef={parentRef}
              handleSize={handleSize}
              borderSize={borderSize}
            />
          )
        })}
      <div css={styles.dragBorder(borderSize)}>
        <div css={styles.childContainer}>{children}</div>
      </div>
    </div>
  )
}

export default Box
