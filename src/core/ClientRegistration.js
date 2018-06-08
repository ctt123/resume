export default class ClientRegistration {
  constructor (clientId, clientSecret, state, scope, allowSignUp) {
    this.clientId = clientId;
    this.clientSecret = clientSecret
    this.state = state
    this.scope = scope
    this.allowSignUp = allowSignUp
  }
}
