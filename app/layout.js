import "@/node_modules/react-modal-video/css/modal-video.css"
import "public/assets/css/bixola.css"
import 'swiper/css'
import "swiper/css/navigation"
import "swiper/css/pagination"
import 'swiper/css/free-mode';
import { roboto, interTight } from '@/lib/font'
export const metadata = {
    title: 'Ashmit & Associates Chartered Accountants',
    description: 'Ashmit & Associates Chartered Accountants',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${interTight.variable} ${roboto.variable}`}>
            <body>{children}</body>
        </html>
    )
}
