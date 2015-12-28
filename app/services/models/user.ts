export default class User {

  SIGNED_IN_KEY = 'pp.signed-in';
  USER_KEY      = 'pp.user';

  /**
   * Private variables
   */

   _status = null;

  _username;
  _password;  // do not persist!
  _signed_in   = localStorage.getItem(this.SIGNED_IN_KEY) === "true";
  _login_error = false;
  _user        = localStorage.getItem(this.USER_KEY) ? JSON.parse(localStorage.getItem(this.USER_KEY)) : {};

  public setUser(user) {
    this._user      = user;
    this._signed_in = !!user;
    localStorage.setItem(this.SIGNED_IN_KEY, this._signed_in);
    if (this._signed_in) {
      localStorage.setItem(this.USER_KEY, JSON.stringify(this._user));
    } else {
      localStorage.removeItem(this.USER_KEY);
    }

    this._status = null;
  }

  public logout() {
    this._username = null;
    this._password = null;
    this.setUser(null);
  }
}
