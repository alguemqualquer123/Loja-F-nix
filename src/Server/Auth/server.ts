import { api } from "@app/config";

export const Auth = () => {};

interface UserProfileType {
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

interface AllAdminsType {
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
  public AllAdmins: AllAdminsType[] = [];

  private constructor() {}

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

  public getAllAdmins(): AllAdminsType[] {
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
    const dataid = userString ? JSON.parse(userString) : null;
    if (dataid && dataid.id) {
      return dataid;
    }
    return null;
  }
}

const InstanceSettings = Settings.getInstance();
export { InstanceSettings };
