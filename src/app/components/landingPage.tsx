// src/app/components/landingPage.tsx

import React from 'react';
import Link from 'next/link'; // Importe o componente Link

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-mono overflow-hidden relative">
      {/* Background Grid - Efeito de grade sutil */}
      <div className="absolute inset-0 z-0 bg-repeat bg-[size:25px_25px] [mask-image:radial-gradient(transparent,black)]" 
           style={{ backgroundImage: 'linear-gradient(to right, #1a1a1a 1px, transparent 1px), linear-gradient(to bottom, #1a1a1a 1px, transparent 1px)' }}>
      </div>

      {/* Brilho Radial */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#7534f3] opacity-5 rounded-full blur-[200px] z-10"></div>
      
      <div className="relative z-20">
        {/* Navbar */}
        <header className="fixed top-0 left-0 w-full bg-[#0a0a0a] bg-opacity-80 backdrop-filter backdrop-blur-lg border-b border-[#222] z-50">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold text-[#7534f3]">RunDev<span className="text-white">.</span></h1>
            <nav className="flex items-center gap-4">
              {/* Botão "Entrar" */}
              <Link href="/auth" passHref className="px-4 py-2 text-sm rounded-lg border border-[#7534f3] text-[#7534f3] hover:bg-[#7534f3] hover:text-white transition-colors duration-300">
                Entrar
              </Link>
              {/* Botão "Criar Conta" */}
              <Link href="/auth" passHref className="px-4 py-2 text-sm rounded-lg bg-gradient-to-r from-[#7534f3] to-[#A05CFF] text-white font-semibold hover:from-[#622bc4] hover:to-[#8b49db] transition-colors duration-300">
                Criar Conta
              </Link>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 pt-24 pb-24 gap-16">
          {/* Texto e Call-to-action */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              O ERP que você precisa,<br className="hidden md:inline-block" />
              criado para<br className="hidden md:inline-block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7534f3] to-[#A05CFF]">
                desenvolvedores
              </span>
              .
            </h2>
            <p className="text-lg text-[#b8b8b8] mb-8 max-w-lg">
              Gerencie seus projetos, finanças e clientes de forma simples e eficiente,
              direto do seu terminal.
            </p>
            {/* Botão "Começar Agora" */}
            <Link href="/auth" passHref className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-[#7534f3] to-[#A05CFF] text-white font-semibold transition-transform duration-300 hover:scale-105 shadow-lg">
              Começar Agora
            </Link>
          </div>

          {/* Mockup do Dashboard */}
          <div className="flex-1 w-full flex justify-center">
            <div className="relative w-full max-w-lg">
              {/* Brilho de fundo do card */}
              <div className="absolute -inset-1 bg-gradient-to-br from-[#7534f3] via-[#a05cff] to-transparent rounded-2xl blur-2xl opacity-30 animate-pulse"></div>

              <div className="relative bg-[#1a1a1a] rounded-2xl border border-[#2e2e2e] shadow-lg p-6 w-full transform transition-all duration-500 hover:scale-[1.01] hover:border-[#7534f3]">
                {/* Janela de Terminal */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-3 h-3 rounded-full bg-red-500"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500"></span>
                  <span className="ml-2 text-xs text-[#b8b8b8]">
                    Terminal: dashboard
                  </span>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-[#b8b8b8]">&gt; status.run_dev</p>
                    <div className="mt-2 grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-6 text-center">
                      <div>
                        <p className="text-3xl font-bold text-[#7534f3]">12</p>
                        <p className="text-sm text-[#b8b8b8] mt-1">projetos ativos</p>
                      </div>
                      <div>
                        <p className="text-3xl font-bold text-[#7534f3] whitespace-nowrap">R$ 25k</p>
                        <p className="text-sm text-[#b8b8b8] mt-1">faturamento</p>
                      </div>
                      <div>
                        <p className="text-3xl font-bold text-[#7534f3]">8</p>
                        <p className="text-sm text-[#b8b8b8] mt-1">clientes</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-xs text-[#b8b8b8]">&gt; projects.latest_update</p>
                    <ul className="text-sm text-[#d4d4d4] mt-2 space-y-1">
                      <li className="flex items-center gap-2">
                        <span className="text-[#a05cff]">&gt;</span>
                        <span>Frontend MVP - <span className="text-xs text-[#7534f3]">45%</span></span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-[#a05cff]">&gt;</span>
                        <span>API Backend - <span className="text-xs text-[#7534f3]">60%</span></span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-[#a05cff]">&gt;</span>
                        <span>Landing Page - <span className="text-xs text-[#7534f3]">100%</span></span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}