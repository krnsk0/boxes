import { Instance, types } from 'mobx-state-tree'

export const Root = types
  .model({
    top: types.optional(types.number, 0.25),
    left: types.optional(types.number, 0.25),
    width: types.optional(types.number, 0.5),
    height: types.optional(types.number, 0.5),
    angle: types.optional(types.number, 5),
  })
  .views((self) => {
    return {
      get angleRadians(): number {
        return (self.angle * Math.PI) / 180
      },
      get center(): { centerX: number; centerY: number } {
        return {
          centerX: self.width / 2 + self.left,
          centerY: self.height / 2 + self.top,
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
      rotateToPoint(x: number, y: number): void {},
    }
  })

export type IRoot = Instance<typeof Root>
