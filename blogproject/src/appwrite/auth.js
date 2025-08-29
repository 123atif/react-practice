import { config } from "../config/config";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;
  constructor() {
    this.client
      .setEndpoint(config.appWriteURL)
      .setProject(config.appWriteProjectId);
    this.account = new Account(this.client);
  }
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      console.log(error);
    }
  }
  async login({ email, password }) {
    try {
      const loginAccount = await this.account.createEmailPasswordSession(
        email,
        password
      );
      if (loginAccount) {
        console.log(loginAccount);
      } else {
        return loginAccount;
      }
    } catch (error) {
      console.log(error);
    }
  }
  async getCurrentUser() {
    try {
      const user = await this.account.get();
      return user;
    } catch (error) {
      console.log(error);
    }
  }
  async logout() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      console.log(error);
    }
  }
}

const authService = new AuthService();

export default authService;
