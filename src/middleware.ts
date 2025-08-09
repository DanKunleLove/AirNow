import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // The middleware is not strictly necessary with the new context-based routing,
  // but it can provide an extra layer of protection and faster redirects from the edge.
  // For now, we will keep it simple and let the client-side logic in AuthContext handle redirects.
  return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
