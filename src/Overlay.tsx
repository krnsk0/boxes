import { css } from '@emotion/react'
import { observer } from 'mobx-react-lite'

const styles = {
  overlay: (width: number, height: number) => css`
    position: absolute;
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
  return <div css={styles.overlay(WIDTH, HEIGHT)}></div>
}

export default observer(Overlay)
