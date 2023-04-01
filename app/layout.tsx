
import './globals.css';
export const metadata = {
  title: 'Kadak chai express',
  description: 'Best mini chai cafe',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
