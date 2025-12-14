import { useState } from 'react';
import LandingPage from './LandingPage';
import DesktopLogin from './DesktopLogin';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'landing' | 'welcome' | 'loginForm' | 'signUpForm'>('landing');

  if (currentPage === 'welcome') {
    return <DesktopLogin 
      onNavigateToLoginForm={() => setCurrentPage('loginForm')} 
      onNavigateToSignUpForm={() => setCurrentPage('signUpForm')}
    />;
  }

  if (currentPage === 'loginForm') {
    return <LoginForm onLoginSuccess={() => setCurrentPage('landing')} />;
  }

  if (currentPage === 'signUpForm') {
    return <SignUpForm onSignUpSuccess={() => setCurrentPage('landing')} />;
  }

  return <LandingPage onNavigateToLogin={() => setCurrentPage('welcome')} />;
}