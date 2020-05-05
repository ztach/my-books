import auth0 from "auth0-js";
import { navigate } from "gatsby";

const isBrowser = typeof window !== "undefined";

const getUser = () => (window.localStorage.gatsbyUser ? JSON.parse(window.localStorage.gatsbyUser) : {});

const setUser = user => (window.localStorage.gatsbyUser = JSON.stringify(user));

const auth = isBrowser
  ? new auth0.WebAuth({
      domain: process.env.GATSBY_AUTH0_DOMAIN,
      clientID: process.env.GATSBY_AUTH0_CLIENTID,
      redirectUri: process.env.GATSBY_AUTH0_CALLBACK,
      audience: process.env.GATSBY_AUTH0_AUDIENCE,
      responseType: "token id_token",
      scope: "openid profile email"
    })
  : {};

const tokens = {
  accessToken: false,
  idToken: false,
  expiresAt: false
};

let user = {};

export const isAuthenticated = () => {
  if (!isBrowser) {
    return;
  }

  return localStorage.getItem("isLoggedIn") === "true";
};

export const login = () => {
  if (!isBrowser) {
    return;
  }

  auth.authorize();
};

export const isLoggedIn = () => {
  if (!isBrowser) return false;

  const user = getUser();

  return !!user.email;
};

export const getCurrentUser = () => isBrowser && getUser();

const setSession = (cb = () => {}) => (err, authResult) => {
  if (err) {
    navigate("/contact");
    cb();
    return;
  }

  if (authResult && authResult.accessToken && authResult.idToken) {
    let expiresAt = authResult.expiresIn * 1000 + new Date().getTime();
    tokens.accessToken = authResult.accessToken;
    tokens.idToken = authResult.idToken;
    tokens.expiresAt = expiresAt;
    user = authResult.idTokenPayload;
    const { nickname, name, picture } = user;

    navigate("/contact");
    return setUser({
      isLoggedIn: true,
      nickname,
      name,
      logo: picture
    });
    //cb();
  }
};

export const handleAuthentication = () => {
  if (!isBrowser) {
    return;
  }

  auth.parseHash(setSession());
};

export const getProfile = () => {
  return user;
};

export const logout = () => {
  auth.logout();
  return setUser({
    isLoggedIn: false,
    nickname: "",
    name: "",
    logo: ""
  });
};

// export const silentAuth = callback => {
//   if (!isAuthenticated()) return callback();
//   auth.checkSession({}, setSession(callback));
// };
