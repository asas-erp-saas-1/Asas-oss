export const metadata = {
  title: 'ASAS Real Estate OS',
  description: 'نظام إدارة العقارات',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar">
      <body>{children}</body>
    </html>
  );
}
