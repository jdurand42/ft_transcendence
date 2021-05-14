/* eslint-disable eqeqeq */
import { GuildView } from './guildView.js'

export class GuildController {
  loadView (id, wrapper) {
    const view = new GuildView({ model: wrapper, id: id })
    return view
  };
}
