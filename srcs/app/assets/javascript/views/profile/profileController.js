import { ProfileView } from './profileView.js'

export class ProfileController {
  loadView (id, wrapper) {
    const view = new ProfileView({ model: wrapper, id: id })
    return view
  }
};
