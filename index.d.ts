declare class KeycloakService {
    constructor(config: {
        authServerUrl: string;
        realm: string;
        clientId: string;
    });
    init(options?: { onLoad?: string }): Promise<boolean>;
    login(): Promise<void>;
    logout(): Promise<void>;
    getToken(): Promise<string>;
    getUserInfo(): Promise<any>;
}

export default KeycloakService;
