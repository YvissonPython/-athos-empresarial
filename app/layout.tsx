import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Athos Empresarial | Inteligência para empresas que estão crescendo',
  description: 'Contabilidade estratégica, inteligência financeira, gestão fiscal e tributária, BPO financeiro e estrutura empresarial para decisões mais claras.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
