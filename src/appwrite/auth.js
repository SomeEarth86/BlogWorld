import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteURL)
            .setProject(conf.appwriteProjectId);

        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);

            if (userAccount) {
                return this.login(email, password)
            }
            else
                return userAccount;

        } catch (error) {
            console.log("Error from createAccount:Auth.js", error);
        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(email, password);

        } catch (error) {
            console.log("Error from Login :Auth.js", error);

        }
    }

    async getCurrentUser() {
        // to check whether the user is logged in or not
        try {
            return this.account.get();
        } catch (error) {
            console.log("Error from getCurrentUser: auth.js", error);
        }

        return null; // incase Try catch won't work it will return null
    }

    async logout() {
        try {
            await this.account.deleteSessions();

        } catch (error) {
            console.log("Error from logout: auth.js", error);

        }
    }
}


const authService = new AuthService();

export default authService;