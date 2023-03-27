import './globals.css'

export const metadata = {
  title: 'Cristian Gomez - Recruitment Test for Full Stack Position',
  description: 'Recruitment Test for Full Stack Position',
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
