export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <main className=" container mx-auto px-4">{children}</main>
}
