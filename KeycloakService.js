import Keycloak from 'keycloak-js';

class KeycloakService {
    constructor(config) {
        if (!config || !config.url || !config.realm || !config.clientId) {
            throw new Error("The configuration object must include 'url', 'realm', and 'clientId' properties.");
        }
        this.keycloakInstance = new Keycloak(config); // Keycloak instance creation
        console.log('Keycloak Instance:', this.keycloakInstance); // Debug log
    }

    init(options) {
        if (!this.keycloakInstance) {
            throw new Error('Keycloak instance is not initialized.');
        }
        return this.keycloakInstance.init(options);
    }

    login() {
        if (!this.keycloakInstance) {
            throw new Error('Keycloak instance is not initialized.');
        }
        return this.keycloakInstance.login();
    }

    logout() {
        if (!this.keycloakInstance) {
            throw new Error('Keycloak instance is not initialized.');
        }
        return this.keycloakInstance.logout();
    }

    getToken() {
        if (!this.keycloakInstance) {
            throw new Error('Keycloak instance is not initialized.');
        }
        return this.keycloakInstance.token;
    }

    getUserInfo() {
        if (!this.keycloakInstance) {
            throw new Error('Keycloak instance is not initialized.');
        }
        return this.keycloakInstance.loadUserInfo();
    }
}

export default KeycloakService;
