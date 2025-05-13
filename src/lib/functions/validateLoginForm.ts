import accounts from "@/static/accounts.json";
// export interface validateResult {
//     success:boolean;
//     errors:Array<string>;
//     message?:string;
// }

export default function validateLoginForm(form: any, login: string, email: string, password: string) {
    form.preventDefault()
    function getAccount(login: string, email: string, password: string) {
        const filteredAccounts = accounts.accounts.filter((item) => item.login === login && item.password === password && item.eMail === email)[0];
        console.log(filteredAccounts);
        return filteredAccounts;
    }

    getAccount(login, email, password);
}