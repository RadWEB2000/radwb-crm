import { google } from "googleapis";

const id: string = process.env.GOOGLE_OAUTH_ID as string;
const secretKey: string = process.env.GOOGLE_OAUTH_SECRETKEY as string;

export const authClient = new google.auth.OAuth2(
    id,
    secretKey
)