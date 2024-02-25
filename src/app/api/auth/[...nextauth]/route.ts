import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import User from '@/models/User';
import bcrypt from 'bcryptjs';
import connect from '@/utils/db';
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';
import LinkedInProvider from 'next-auth/providers/linkedin';
import InstagramProvider from 'next-auth/providers/instagram';

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  await connect();

  return NextAuth(req, res, {
    providers: [
      CredentialsProvider({
        id: 'credentials',
        name: 'Credentials',
        credentials: {
          email: { label: 'Email', type: 'text' },
          password: { label: 'Password', type: 'password' }
        },
        async authorize(credentials: any) {
          try {
            const user = await User.findOne({ email: credentials.email });
            if (user) {
              const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);
              if (isPasswordCorrect) {
                return user;
              }
            }
          } catch (err:any) {
            throw new Error(err);
          }
          return null;
        }
      }),
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID ?? '',
        clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ''
      }),
      FacebookProvider({
        clientId: process.env.FACEBOOK_CLIENT_ID ?? '',
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET ?? ''
      }),
      LinkedInProvider({
        clientId: process.env.LINKEDIN_CLIENT_ID ?? '',
        clientSecret: process.env.LINKEDIN_CLIENT_SECRET ?? ''
      }),
      InstagramProvider({
        clientId: process.env.INSTAGRAM_CLIENT_ID ?? '',
        clientSecret: process.env.INSTAGRAM_CLIENT_SECRET ?? ''
      })
    ],
    // Optional configuration options
    // ...
  });
};
