import { Roboto, Inter_Tight } from 'next/font/google'

export const interTight = Inter_Tight({
    weight: ['400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    variable: "--bixola-font",
    display: 'swap',
})
export const roboto = Roboto({
    weight: ['400', '500', '700', '900'],
    subsets: ['latin'],
    variable: "--bixola-font-two",
    display: 'swap',
})
