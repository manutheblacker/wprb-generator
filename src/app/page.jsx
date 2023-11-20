import Image from 'next/image'

import logoX from '@/images/logos/x.svg'
import logoGithub from '@/images/logos/github.svg'
import logoLinkedin from '@/images/logos/linkedin.svg'
import logoWordPress from '@/images/logos/wordpress.svg'
import homescriptone from '@/images/logos/homescriptone.png'
import medium_logo from '@/images/logos/medium.png'

import { Container } from '@/components/Container'
import { Hero } from '@/components/Hero'
import { GlobeAltIcon, EnvelopeIcon } from '@heroicons/react/24/outline'


function Role({ role }) {
  return (
    <li className="">
      <a
        href={role.title}
        target="_blank"
        className="hover:bg-slate-50 w-full flex gap-4"
      >
        <div
          className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 
        dark:bg-zinc-800 dark:ring-0"
        >
          <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
        </div>
        <dl className="flex flex-auto flex-wrap gap-x-2">
          <dt className="sr-only">name</dt>
          <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
            {role.name}
          </dd>
          <dt className="sr-only">url</dt>
          <dd className="text-xs text-zinc-500 dark:text-zinc-400">
            {role.title}
          </dd>
        </dl>
      </a>
    </li>
  )
}

function Social() {
  let networks = [
    {
      name: 'Github',
      title: 'https://github.com/manutheblacker',
      logo: logoGithub,
    },
    {
      name: 'X (Twitter)',
      title: 'https://x.com/manutheblacker',
      logo: logoX,
    },
    {
      name: 'WordPress',
      title: 'https://profiles.wordpress.org/manucastle78/',
      logo: logoWordPress,
    },
    {
      name: 'LinkedIn',
      title: 'https://www.linkedin.com/in/emmanuel-adekplovi',
      logo: logoLinkedin,
    },
    {
      name: 'Medium',
      title: 'https://manutheblacker.medium.com',
      logo: medium_logo,
    },
    {
      name: 'Homescriptone Solutions',
      title: 'https://homescriptone.com',
      logo: homescriptone,
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <GlobeAltIcon className="h-6 w-6 flex-none text-gray-400" />
        <span className="ml-3">My Links</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {networks.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
    </div>
  )
}

export default async function Home() {

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-7xl mt-20">
          <Hero />
        </div>

        <div className="max-w-7xl mt-20">
          <Social />
        </div>
      </Container>
    </>
  )
}
