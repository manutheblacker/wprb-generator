import Link from 'next/link'

import { ContainerInner, ContainerOuter } from '@/components/Container'

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="transition hover:text-blue-500 dark:hover:text-blue-400"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-32 flex-none">
      <ContainerOuter>
        <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
          <ContainerInner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <p className="text-sm text-zinc-400 dark:text-zinc-500">
                &copy; {new Date().getFullYear()} WPRB by <a className="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline" href='https://manutheblacker.medium.com'>Manu The Blacker</a>
              </p>
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  )
}
