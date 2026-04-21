'use client'

import { useState } from 'react'
import { createClient } from '@/utils/supabase/client'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fullName, setFullName] = useState('')
  const [isSignUp, setIsSignUp] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  
  const router = useRouter()
  const supabase = createClient()

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setSuccess(null)

    if (isSignUp) {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { fullName },
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      })
      if (error) setError(error.message)
      else setSuccess('Check your email for the confirmation link!')
    } else {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })
      if (error) {
        setError(error.message)
      } else {
        // Force a hard redirect to ensure middleware logic and auth state refresh immediately
        window.location.href = '/'
      }
    }
    setLoading(false)
  }

  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    })
    if (error) setError(error.message)
  }

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      background: 'radial-gradient(circle at top right, #001f3f, #000000)',
    }}>
      <div style={{
        maxWidth: '450px',
        width: '100%',
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(16px)',
        borderRadius: '24px',
        padding: '40px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
        animation: 'fade-in-up 0.6s ease-out'
      }}>
        <h2 style={{ color: '#ffffff', textAlign: 'center', marginBottom: '10px', fontSize: '28px' }}>
          {isSignUp ? 'Create Account' : 'Welcome Back'}
        </h2>
        <p style={{ color: '#94a3b8', textAlign: 'center', marginBottom: '30px', fontSize: '15px' }}>
          {isSignUp ? 'Join Diagnostica today' : 'Sign in to access our catalog'}
        </p>

        {error && (
          <div style={{ 
            padding: '12px', 
            borderRadius: '12px', 
            backgroundColor: 'rgba(239, 68, 68, 0.1)', 
            color: '#f87171', 
            marginBottom: '20px',
            fontSize: '14px',
            border: '1px solid rgba(239, 68, 68, 0.2)'
          }}>
            {error}
          </div>
        )}

        {success && (
          <div style={{ 
            padding: '12px', 
            borderRadius: '12px', 
            backgroundColor: 'rgba(34, 197, 94, 0.1)', 
            color: '#4ade80', 
            marginBottom: '20px',
            fontSize: '14px',
            border: '1px solid rgba(34, 197, 94, 0.2)'
          }}>
            {success}
          </div>
        )}

        <form onSubmit={handleAuth} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {isSignUp && (
            <div>
              <label style={{ display: 'block', color: '#e2e8f0', marginBottom: '8px', fontSize: '14px' }}>Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                style={inputStyle}
              />
            </div>
          )}
          <div>
            <label style={{ display: 'block', color: '#e2e8f0', marginBottom: '8px', fontSize: '14px' }}>Email Address</label>
            <input
              type="email"
              placeholder="name@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={inputStyle}
            />
          </div>
          <div>
            <label style={{ display: 'block', color: '#e2e8f0', marginBottom: '8px', fontSize: '14px' }}>Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={inputStyle}
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            style={{
              padding: '14px',
              borderRadius: '12px',
              border: 'none',
              background: 'linear-gradient(135deg, #0a84ff 0%, #00d4ff 100%)',
              color: '#ffffff',
              fontWeight: '600',
              cursor: loading ? 'not-allowed' : 'pointer',
              marginTop: '10px',
              transition: 'transform 0.2s',
              boxShadow: '0 4px 15px rgba(10, 132, 255, 0.4)'
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
            onMouseOut={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
          >
            {loading ? 'Processing...' : (isSignUp ? 'Sign Up' : 'Sign In')}
          </button>
        </form>

        <div style={{ display: 'flex', alignItems: 'center', margin: '25px 0', gap: '15px' }}>
          <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.1)' }}></div>
          <span style={{ color: '#64748b', fontSize: '12px', textTransform: 'uppercase' }}>Or continue with</span>
          <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.1)' }}></div>
        </div>

        <button 
          onClick={handleGoogleLogin}
          style={{
            width: '100%',
            padding: '12px',
            borderRadius: '12px',
            border: '1px solid rgba(255,255,255,0.1)',
            background: 'rgba(255,255,255,0.02)',
            color: '#e2e8f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            cursor: 'pointer',
            transition: 'background 0.2s'
          }}
          onMouseOver={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.05)')}
          onMouseOut={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.02)')}
        >
          <img src="https://www.google.com/favicon.ico" width="20" height="20" alt="Google" />
          Log in with Google
        </button>

        <p style={{ color: '#94a3b8', textAlign: 'center', marginTop: '30px', fontSize: '14px' }}>
          {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
          <button 
            type="button"
            onClick={() => setIsSignUp(!isSignUp)}
            style={{ 
              background: 'none', 
              border: 'none', 
              color: '#0a84ff', 
              cursor: 'pointer', 
              fontWeight: '600',
              padding: 0
            }}
          >
            {isSignUp ? 'Sign In' : 'Sign Up'}
          </button>
        </p>
      </div>

      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}

const inputStyle = {
  width: '100%',
  padding: '12px 16px',
  borderRadius: '12px',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  background: 'rgba(255, 255, 255, 0.03)',
  color: '#ffffff',
  fontSize: '15px',
  outline: 'none',
  transition: 'border-color 0.2s',
  marginTop: '4px'
}
