import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/header";
import CreateEventDrawer from "@/components/create-event";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Schedulrr",
  description: " ",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
      <head>
        {/* Add the favicon here */}
         <link rel="icon" type="image/svg+xml" href="/vercel.svg" />
      </head>
        <body className={inter.className}>
          <Header />
          <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            {children}
          </main>
          <footer className="bg-blue-100 py-7">
           <div className="container mx-auto px-4 text-center text-gray-600">
            <p>&copy; 2024 CallNow. All Rights Reserved.</p>
          <div className="mt-4">
            <a href="/policy" className="text-blue-600 hover:underline mx-2">Privacy Policy</a> | 
            <a href="/terms" className="text-blue-600 hover:underline mx-2">Terms of Service</a>
         </div>
        </div>
       </footer>
          <CreateEventDrawer />
        </body>
      </html>
    </ClerkProvider>
  );
}
