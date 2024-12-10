import KeycloakService from 'keycloak-integration';

const config = {
    authServerUrl: 'http://localhost:8080/auth',
    realm: 'your-realm',
    clientId: 'your-client-id',
};

const keycloakService = new KeycloakService(config);

keycloakService.init().then(() => {
    if (keycloakService.isAuthenticated()) {
        console.log('Authenticated');
    } else {
        keycloakService.login();
    }
}).catch(err => console.error('Initialization failed:', err));
