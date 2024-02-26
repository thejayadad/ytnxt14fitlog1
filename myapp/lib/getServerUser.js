'use server'
const {getServerSession} = require("next-auth")
import { authOptions } from "@/app/api/auth/[...nextauth]/route"

const getServerUser = async () => {
    const session = await getServerSession(authOptions)
    return session?.user;
}

export default getServerUser