import NextAuth from "next-auth"
import GitHubProvider from "next-auth/providers/github";

const allowedEmails = [
    'justusbraun03@gmail.com',
    'zoric.dominik0511@gmail.com',
    'leo.kolb03@gmail.com',
    'hansg9387@gmail.com',
    'jan.seidelx@gmail.com',
    'leon.schirra123@gmail.com',
    'julian.kepka@me.com',
    'shkarin.mark1@gmail.com',
    'henriktheisen2712@gmail.com',
    'christophppetters@gmail.com',
    'mkillerhut@gmail.com',
    'bernhardwinkelhake@gmail.com'
]

const handler = NextAuth({
    providers: [
        // https://github.com/settings/developers
        GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string
        })
    ],
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {            
            if (profile?.email && allowedEmails.includes(profile.email)) {
                return true
            }

            return false
        },
    }
})

export { handler as GET, handler as POST }
