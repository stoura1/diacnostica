'use client';

export default function HeroTheme() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, overflow: 'hidden', zIndex: 0, backgroundColor: '#004aad' }}>
      
      {/* Dynamic Background Gradients */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        background: 'radial-gradient(circle at top right, #0a84ff 0%, #001f54 100%)',
        opacity: 0.95
      }} />

      {/* Floating Glass Bubble 1 */}
      <div style={{
        position: 'absolute',
        top: '10%', left: '60%',
        width: '350px', height: '350px',
        background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        border: '1px solid rgba(255,255,255,0.15)',
        borderRadius: '50%',
        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.1)',
        animation: 'floatUp 12s infinite alternate ease-in-out'
      }} />

      {/* Floating Glass Bubble 2 */}
      <div style={{
        position: 'absolute',
        bottom: '-10%', right: '10%',
        width: '450px', height: '450px',
        background: 'linear-gradient(135deg, rgba(0,212,255,0.15) 0%, rgba(0,212,255,0) 100%)',
        backdropFilter: 'blur(15px)',
        WebkitBackdropFilter: 'blur(15px)',
        border: '1px solid rgba(255,255,255,0.15)',
        borderRadius: '50%',
        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.1)',
        animation: 'floatDown 15s infinite alternate ease-in-out'
      }} />

      {/* Floating Glass Bubble 3 - Smaller */}
      <div style={{
        position: 'absolute',
        top: '40%', left: '15%',
        width: '180px', height: '180px',
        background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(0,102,255,0.05) 100%)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: '1px solid rgba(255,255,255,0.2)',
        borderRadius: '50%',
        animation: 'floatLeft 10s infinite alternate-reverse ease-in-out'
      }} />

      {/* Clean Modern Tech Grid Overlay */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        opacity: 0.6
      }} />
      
      <style>{`
        @keyframes floatUp {
          0% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          100% { transform: translateY(-50px) translateX(20px) rotate(15deg); }
        }
        @keyframes floatDown {
          0% { transform: translateY(0px) translateX(0px); }
          100% { transform: translateY(60px) translateX(-40px); }
        }
        @keyframes floatLeft {
          0% { transform: translateY(0px) translateX(0px); }
          100% { transform: translateY(-20px) translateX(-30px); }
        }
      `}</style>
    </div>
  );
}
