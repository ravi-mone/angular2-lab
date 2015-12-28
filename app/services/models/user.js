var User = (function () {
    function User() {
        this.SIGNED_IN_KEY = 'pp.signed-in';
        this.USER_KEY = 'pp.user';
        this._status = null;
        this._signed_in = localStorage.getItem(this.SIGNED_IN_KEY) === "true";
        this._login_error = false;
        this._user = localStorage.getItem(this.USER_KEY) ? JSON.parse(localStorage.getItem(this.USER_KEY)) : {};
    }
    User.prototype.setUser = function (user) {
        this._user = user;
        this._signed_in = !!user;
        localStorage.setItem(this.SIGNED_IN_KEY, this._signed_in);
        if (this._signed_in) {
            localStorage.setItem(this.USER_KEY, JSON.stringify(this._user));
        }
        else {
            localStorage.removeItem(this.USER_KEY);
        }
        this._status = null;
    };
    User.prototype.logout = function () {
        this._username = null;
        this._password = null;
        this.setUser(null);
    };
    return User;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = User;
//# sourceMappingURL=user.js.map