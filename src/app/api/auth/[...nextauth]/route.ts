import NextAuth from "next-auth"
import GitHubProvider from "next-auth/providers/github";

const allowedEmails = [
    'justusbraun03@gmail.com'
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