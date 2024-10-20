import {auth} from "@/app/server/auth"
import { headers } from "next/headers";

export default async function Nav(){
    const user = await auth();
    console.log(user)

    return(
        <header>
            <nav>
                <ul>
                    <li>Logo</li>
                    <li>User Icon</li>
                </ul>
            </nav>
        </header>
    )
}