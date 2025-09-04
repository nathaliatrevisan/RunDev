// src/app/components/AuthForm.tsx

'use client';

import React, { useState } from 'react';
// Importe os ícones de olho
import { FaGoogle, FaEye, FaEyeSlash } from 'react-icons/fa';
import { supabase } from '../../lib/supabaseClient';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false); // Estado para a visibilidade da senha

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const formTitle = isLogin ? 'Entrar na sua conta' : 'Criar sua conta';
  const buttonText = isLogin ? 'Entrar' : 'Criar Conta';
  const toggleText = isLogin ? 'Não tem uma conta? ' : 'Já tem uma conta? ';
  const toggleLinkText = isLogin ? 'Criar conta' : 'Entrar';

  // Lógica de autenticação com email e senha
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    try {
      if (isLogin) {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        // Futura lógica de redirecionamento
      } else {
        const { error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;
      }
    } catch (error: any) {
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Lógica de login social com Google
  const handleGoogleLogin = async () => {
    setLoading(true);
    setErrorMessage('');
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
      });
      if (error) throw error;
      // O Supabase lida com o redirecionamento automaticamente
    } catch (error: any) {
      setErrorMessage(`Erro no login com Google: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0A0A0A] text-white font-mono p-4">
      {/* Brilho Radial */}
      <div className="absolute inset-0 z-0 bg-repeat bg-[size:25px_25px] [mask-image:radial-gradient(transparent,black)]" 
           style={{ backgroundImage: 'linear-gradient(to right, #1a1a1a 1px, transparent 1px), linear-gradient(to bottom, #1a1a1a 1px, transparent 1px)' }}>
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#7534f3] opacity-5 rounded-full blur-[200px] z-10"></div>

      {/* Container principal com animação de fade-in */}
      <div className="relative z-20 w-full max-w-sm p-8 rounded-lg bg-[#1a1a1a] border border-[#2e2e2e] shadow-lg animate-fade-in transition-all duration-300">
        
        {/* Logo RunDev. como na Navbar da Landing Page */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#7534f3]">RunDev<span className="text-white">.</span></h1>
        </div>

        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#7534f3] to-[#A05CFF]">{formTitle}</h2>
        </div>

        {/* Formulário de Email e Senha com inputs interativos */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-2 text-[#b8b8b8]">Email</label>
            <input
              type="email"
              id="email"
              placeholder="seuemail@exemplo.com"
              className="w-full px-4 py-2 rounded-lg bg-[#252526] border border-transparent focus:border-[#7534f3] focus:outline-none focus:shadow-[0_0_0_1px_rgba(117,52,243,0.5),0_0_0_4px_rgba(117,52,243,0.2)] transition-all duration-200"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6 relative">
            <label htmlFor="password" className="block text-sm font-medium mb-2 text-[#b8b8b8]">Senha</label>
            <input
              // Alterna o tipo do input
              type={showPassword ? 'text' : 'password'}
              id="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 rounded-lg bg-[#252526] border border-transparent focus:border-[#7534f3] focus:outline-none focus:shadow-[0_0_0_1px_rgba(117,52,243,0.5),0_0_0_4px_rgba(117,52,243,0.2)] transition-all duration-200"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {/* Botão de alternância para ver a senha */}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 top-6 pr-3 flex items-center text-[#b8b8b8] hover:text-[#7534f3] transition-colors"
            >
              {/* Lógica invertida para correção */}
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>
          
          <button
            type="submit"
            className="w-full px-4 py-3 rounded-lg bg-gradient-to-r from-[#7534f3] to-[#A05CFF] text-white font-semibold transition-transform duration-300 hover:scale-[1.01] transform-gpu"
            disabled={loading}
          >
            {loading ? 'Carregando...' : buttonText}
          </button>
        </form>

        {/* Exibe a mensagem de erro */}
        {errorMessage && (
          <div className="mt-4 text-center text-sm text-red-500">
            {errorMessage}
          </div>
        )}

        {/* Linha separadora */}
        <div className="my-6 flex items-center">
          <div className="flex-grow border-t border-[#2e2e2e]"></div>
          <span className="mx-4 text-xs text-[#b8b8b8] uppercase">ou</span>
          <div className="flex-grow border-t border-[#2e2e2e]"></div>
        </div>

        {/* Botão de Login com Google */}
        <button 
          className="w-full flex items-center justify-center gap-2 px-4 py-3 border border-[#3a3a3a] rounded-lg text-sm bg-black hover:bg-[#111] transition-colors duration-300 hover:scale-[1.01] transform-gpu"
          onClick={handleGoogleLogin}
          disabled={loading}
        >
          <FaGoogle className="text-white" />
          {isLogin ? 'Continuar com Google' : 'Criar conta com Google'}
        </button>

        <p className="mt-6 text-center text-sm text-[#b8b8b8]">
          {toggleText}
          <button onClick={toggleForm} className="text-[#A05CFF] hover:underline" disabled={loading}>
            {toggleLinkText}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;