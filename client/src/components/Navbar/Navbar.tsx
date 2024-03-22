import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon, XMarkIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'
import DynamicSearchBar from './DynamicSearchBar'

const catalog = [
  { name: 'Trending', Link: '/all' },
  { name: 'Recent Updates', Link: '/all' },
  { name: 'Top 100', Link: '/all' },
  { name: 'Integrations', Link: '/all' },
  { name: 'All', Link: '/all' },
]
const callsToAction = [
  { name: 'Watch demo', Link: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', Link: '#', icon: PhoneIcon },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className='px-5 py-3'>
      <nav className='flex justify-around items-center lg:flex-row'>
        <div>
          <Link to='/'>
            <span className="sr-only">Your Company</span>
            <img src="/logo.png" alt="logo" className='size-[35px]' />
          </Link>
        </div>

        <Popover.Group className="lg:flex gap-2 hidden">
          <Popover className='relative'>
            <Popover.Button className="flex items-center">
              Catalog
              <ChevronDownIcon className='size-[17px]' />
            </Popover.Button>
            <Popover.Panel className='absolute z-20 bg-white border rounded-lg'>
              <div className="p-4">
                {catalog.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg"
                  >
                    <div className="flex-auto border">
                      <Link to={item.Link} className="block ">
                        {item.name}
                        <span className="absolute inset-0" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </Popover.Panel>
          </Popover>
          <Link to=""> Trending </Link>
          <Link to=""> Discussions </Link>
          <Link to=""> Contact </Link>
        </Popover.Group>

        <DynamicSearchBar />

        <div className='hidden lg:flex gap-2'>
          <Link to=""> Sign Up</Link>
          <Link to="">Sign In</Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="size-[30px]" aria-hidden="true" />
          </button>
        </div>
      </nav>

      <Dialog open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} className="lg:hidden">
        <Dialog.Panel className="fixed right-0 inset-y-0 z-10 p-3 bg-blue w-[50%]">
          <Dialog.Title as='div' className="flex justify-between items-center">
            <strong> Menu </strong>
            <button onClick={() => { setMobileMenuOpen(false) }}> Close </button>
          </Dialog.Title>
          <Disclosure>
            {({ open }) => (<>
              <Disclosure.Button className="flex mt-4">
                <span>Catalog</span>
                <ChevronDownIcon aria-hidden="true" className={classNames(open ? `rotate-180 transform` : '', 'transition-transform size-[23px]')} />
              </Disclosure.Button> 
              <Disclosure.Panel className="inline-block">
                {
                  catalog.map((item) => {
                    return (
                      <Disclosure.Button as='a' href={item.Link} key={item.name} className="block" >
                        {item.name}
                      </Disclosure.Button>
                    )
                  })
                }
              </Disclosure.Panel>
            </>)}
          </Disclosure>
        </Dialog.Panel>
      </Dialog>

      {/* <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[black] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-white hover:bg-gray-50">
                        Product
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...catalog, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.Link}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                >
                  Marketplace
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                >
                  Company
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog> */}
    </header>
  );


}
