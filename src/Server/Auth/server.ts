import { api } from "@app/config";

export const Auth = () => {};

export interface UserProfileType {
  id?: string;
  username?: string;
  avatar?: string;
  discriminator?: string;
  public_flags?: string;
  flags?: number;
  banner?: string;
  accent_color?: number;
  global_name?: string;
  avatar_decoration_data?: string;
  banner_color?: string;
  clan?: string;
  mfa_enabled?: string;
  locale?: string;
  premium_type?: number;
  email?: string;
  verified?: boolean;
}

export interface AllAdminsType {
  _id?: string;
  id?: string;
  discordId?: string;
  roles?: {
    role?: string;
    id?: string;
    _id?: string;
  }[];
}

class Settings {
  private static _instance: Settings;
  private isLogued: boolean;
  private email: string;
  private password: string;
  public UserProfile: UserProfileType = {
    id: "",
    username: "",
    avatar: "",
    discriminator: "",
    public_flags: "",
    flags: 0,
    banner: "",
    accent_color: 0,
    global_name: "",
    avatar_decoration_data: "",
    banner_color: "",
    clan: "",
    mfa_enabled: "",
    locale: "",
    premium_type: 0,
    email: "",
    verified: false,
  };
  public AllAdmins: AllAdminsType[] | any = [];

  private constructor() {
    this.isLogued = false;
    this.email = "";
    this.password = "";
  }

  public static getInstance(): Settings {
    if (!Settings._instance) {
      Settings._instance = new Settings();
    }
    return Settings._instance;
  }

  public setAllAdmins(admins: AllAdminsType[]): void {
    if (!admins || !Array.isArray(admins)) {
      console.error("Invalid admin data:", admins);
      return;
    }
    if (this.AllAdmins && this.AllAdmins !== admins) {
      this.AllAdmins = admins;
    }
  }

  /////  SYSTEM LOGIN EMAIL AND PASSWORD  ////////

  /////  IS ACCOUNT LOGUED  ////////
  public Logued(): boolean {
    return this.isLogued;
  }

  /////  SET EMAIL AND PASSWORD  ////////
  public clearLogin(email: string): void {
    if (this.isLogued && this.email === email) {
      this.email = "";
      this.password = "";
      this.isLogued = false;
    }
  }
  /////  SET EMAIL AND PASSWORD  ////////
  public setLogin(email: string, password: string): boolean {
    if (!this.isLogued) {
      this.email = email;
      this.password = password;
      this.isLogued = true;
      return this.isLogued;
    }
    return true;
  }

  /////  GET EMAIL AND PASSWORD  ////////
  public getLogin(email: string, password: string): any[] {
    if (this.isLogued) {
      const table = [];
      table.push({
        email: email,
        password: password,
      });
      return table;
    }
    return [];
  }
  /////  /////////////////////////  ////////

  public getAllAdmins() {
    return this.AllAdmins;
  }

  public createNewAdmin(admin: any): void {
    api
      .post("newAdmin", admin)
      .then((response: any) => console.log("newAdmin", response.data))
      .catch((error) => console.log(error));
  }

  public saveUserProfile(profile: UserProfileType): void {
    this.UserProfile = profile;
  }

  public checkUserProfile(): void {
    console.log("Current UserProfile:", this.UserProfile);
  }

  public getUserProfile(): UserProfileType | null {
    const userString = localStorage.getItem("user");
    let dataid = userString ? JSON.parse(userString) : null;
    if (dataid && dataid.id) {
      (dataid.avatar = `https://cdn.discordapp.com/avatars/${
        dataid.id ? dataid.id : ""
      }/${dataid.avatar ? dataid.avatar : ""}`),
        (dataid.banner = `https://cdn.discordapp.com/banners/${
          dataid.id ? dataid.id : ""
        }/${dataid.banner ? dataid.banner : ""}`);
      return dataid;
    }
    return null;
  }
  public async getUserInfos(): Promise<any> {
    try {
      const response = await api.get("getAllUserInfos");
      return response.data;
    } catch (error) {
      console.error("Failed to load admin data", error);
      return null;
    }
  }
}

const InstanceSettings = Settings.getInstance();
export { InstanceSettings };
