import { Instance, types } from 'mobx-state-tree'
import { st } from './semanticTypes'

export const Root = types
  .model({
    top: types.optional(types.number, 0.25),
    left: types.optional(types.number, 0.25),
    width: types.optional(types.number, 0.5),
    height: types.optional(types.number, 0.5),
    angle: types.optional(types.number, Math.PI / 8), // radians
  })
  .views((self) => {
    return {
      get center(): { x: st.unit; y: st.unit } {
        return {
          x: self.width / 2 + self.left,
          y: self.height / 2 + self.top,
        }
      },
    }
  })
  .actions((self) => {
    return {
      /**
       * Given x and y in percentages relative to box's container
       * (same units as the model), change box's angle so its vertical
       * axis passes through the point
       */
      rotateToPoint(x: st.unit, y: st.unit): void {
        const width = x - self.center.x
        const height = y - self.center.y
        const theta = Math.atan2(height, width) + Math.PI / 2
        self.angle = theta
      },
      /**
       * Holds southeast constant, moves northwest
       */
      moveNorthwest(x: st.unit, y: st.unit): void {
        console.log('NW', x, y)
      },
      /**
       * Holds southwest constant, moves northeast
       */
      moveNortheast(x: st.unit, y: st.unit): void {
        console.log('NE', x, y)
      },
      /**
       * Holds northwest constant, moves southeast
       */
      moveSoutheast(x: st.unit, y: st.unit): void {
        console.log('SE', x, y)
      },
      /**
       * Holds northeast constant, moves southwest
       */
      moveSouthwest(x: st.unit, y: st.unit): void {
        console.log('SW', x, y)
      },
    }
  })

export type IRoot = Instance<typeof Root>
