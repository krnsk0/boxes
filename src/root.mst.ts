import { Instance, types } from 'mobx-state-tree'
import { st } from './semanticTypes'

export const Root = types
  .model({
    top: types.optional(types.number, 0.25),
    left: types.optional(types.number, 0.25),
    width: types.optional(types.number, 0.5),
    height: types.optional(types.number, 0.5),
    angle: types.optional(types.number, 0), // radians
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
    }
  })

export type IRoot = Instance<typeof Root>
