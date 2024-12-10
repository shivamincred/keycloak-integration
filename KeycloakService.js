import Keycloak from 'keycloak-js';

class KeycloakService {
    constructor(config) {
        this.keycloak = Keycloak({
            url: config.authServerUrl,
            realm: config.realm,
            clientId: config.clientId,
        });
    }

    init(options = {}) {
        return this.keycloak.init({
            onLoad: options.onLoad || 'login-required',
            checkLoginIframe: options.checkLoginIframe || false,
            ...options,
        });
    }

    login() {
        return this.keycloak.login();
    }

    logout() {
        return this.keycloak.logout();
    }

    getToken() {
        return this.keycloak.token;
    }

    isAuthenticated() {
        return this.keycloak.authenticated;
    }

    getUserInfo() {
        return this.keycloak.loadUserInfo();
    }
}

export default KeycloakService;
