import * as types from "../constants/ConfigConstants";

export const showMenu = () => ({
  type: types.CONFIG_SHOW_MENU,
})

export const hideMenu = () => ({
  type: types.CONFIG_HIDE_MENU,
})