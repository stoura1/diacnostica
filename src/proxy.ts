import { type NextRequest, NextResponse } from 'next/server'
import { updateSession } from './utils/supabase/middleware'

export async function proxy(request: NextRequest) {
  const { supabaseResponse, user, supabase } = await updateSession(request)

  const path = request.nextUrl.pathname

  // 1. PUBLIC ROUTES (Always accessible)
  const isPublicRoute = 
    path === '/' || 
    path === '/about' || 
    path === '/contact' || 
    path.startsWith('/login') || 
    path.startsWith('/auth') ||
    path.startsWith('/_next') ||
    path.startsWith('/api') ||
    path.includes('.') // for images, icons, etc.

  // 2. AUTHENTICATION REDIRECT
  if (!user && !isPublicRoute) {
    const url = request.nextUrl.clone()
    url.pathname = '/login'
    return NextResponse.redirect(url)
  }

  // 3. AUTHORIZATION CHECKS (If logged in)
  if (user) {
    // Fetch profile to check role and approval
    const { data: profile } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .single()


    // Protect Admin route
    if (path.startsWith('/admin') && profile?.role !== 'admin') {
      const url = request.nextUrl.clone()
      url.pathname = '/'
      return NextResponse.redirect(url)
    }
    
    // Redirect logged-in users away from login page
    if (path.startsWith('/login')) {
      const url = request.nextUrl.clone()
      url.pathname = '/'
      return NextResponse.redirect(url)
    }
  }

  return supabaseResponse
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
