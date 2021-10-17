import { Instance, types } from "mobx-state-tree";


export const Root = types.model({
  centerX: types.optional(types.number, .5),
  centerY: types.optional(types.number, .5),
  width:  types.optional(types.number, .5),
  height: types.optional(types.number, .5),
}).views(self => {return {
  get topLeft() {
    return {x: self.centerX - self.width / 2, y: self.centerY - self.height / 2}
  }
}}).actions(self => {return {}})

export type IRoot = Instance<typeof Root>;
