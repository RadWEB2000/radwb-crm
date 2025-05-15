import { google } from "googleapis";
import { authClient } from "../configs/googleapis";

export default function getSearchConsole(accesToken: string) {
    authClient.setCredentials({ access_token: accesToken });

    return google.searchconsole({
        version: 'v1',
        auth: authClient
    })
}