import { SuperHeaders } from './headers'

export class FetchAPI {
  constructor () {
    this.superHeaders = new SuperHeaders()
  }

  exit () {
    const headers = this.superHeaders.getHeaders()

    fetch('/auth/sign_out', {
      method: 'DELETE',
      headers: headers
    })
  }
}
