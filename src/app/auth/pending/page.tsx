import Link from 'next/link'

export default function PendingApprovalPage() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      background: 'radial-gradient(circle at top right, #001f3f, #000000)',
      textAlign: 'center'
    }}>
      <div style={{
        maxWidth: '500px',
        width: '100%',
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(16px)',
        borderRadius: '24px',
        padding: '50px 40px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
      }}>
        <div style={{
          width: '80px',
          height: '80px',
          background: 'rgba(10, 132, 255, 0.1)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 30px',
          color: '#0a84ff',
          fontSize: '40px'
        }}>
          ⏳
        </div>
        
        <h2 style={{ color: '#ffffff', marginBottom: '15px', fontSize: '28px' }}>
          Account Pending Approval
        </h2>
        
        <p style={{ color: '#94a3b8', lineHeight: '1.6', marginBottom: '35px', fontSize: '16px' }}>
          Your account has been successfully created. However, to access our medical catalog, 
          an administrator needs to verify and approve your request.
        </p>

        <div style={{ 
          padding: '15px', 
          backgroundColor: 'rgba(10, 132, 255, 0.05)', 
          borderRadius: '12px',
          border: '1px solid rgba(10, 132, 255, 0.1)',
          marginBottom: '35px'
        }}>
          <p style={{ color: '#0a84ff', margin: 0, fontSize: '14px', fontWeight: '500' }}>
            We'll notify you as soon as your account is activated!
          </p>
        </div>

        <Link href="/" style={{
          display: 'inline-block',
          padding: '12px 30px',
          borderRadius: '12px',
          background: 'rgba(255,255,255,0.05)',
          color: '#ffffff',
          textDecoration: 'none',
          fontWeight: '600',
          transition: 'background 0.2s'
        }}>
          Back to Home
        </Link>
      </div>
    </div>
  )
}
