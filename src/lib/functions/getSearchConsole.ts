import { google } from "googleapis";
import { authClient } from "../configs/googleapis";

const accessToken = process.env.GOOGLE_ACCESS_TOKEN as string;
const refreshToken = process.env.GOOGLE_REFRESH_TOKEN as string;

export default function getSearchConsole() {
    authClient.setCredentials({ access_token: accessToken, refresh_token: refreshToken });

    return google.searchconsole({
        version: 'v1',
        auth: authClient
    })
}