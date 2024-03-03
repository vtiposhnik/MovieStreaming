import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

const products = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className='px-5 py-1'>
      <nav className='flex justify-around items-center flex-col lg:flex-row'>
        <div>
          <a>
            <span className="sr-only">Your Company</span>
            <img src="/logo.png" alt="logo" className='size-[35px]' />
          </a>
        </div>

        <Popover.Group className="flex gap-2">
          <Popover className='relative'>
            <Popover.Button className="flex items-center">
              Genres
              <ChevronDownIcon className='size-[17px]' />
            </Popover.Button>
            <Popover.Panel className='absolute z-20'>
              <a>Features</a>
              <a>Marketplace</a>
              <a>Company</a>
            </Popover.Panel>
          </Popover>
            <a href=""> Trending </a>
            <a href=""> Discussions </a>
            <a href=""> Catalog </a>
        </Popover.Group>

        <div className='flex gap-2'>
          <a href=""> Sign Up</a>
          <a href="">Sign In</a>
        </div>
      </nav>

      <Dialog open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}>
        <div></div>
        <Dialog.Panel>
          <div>
            <a>
              <span className="sr-only">Your Company</span>
              <img src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
            </a>
            <button>
              <span className="sr-only">Close menu</span>
              {/* XMarkIcon component */}
            </button>
          </div>
          <div>
            <div>
              <Disclosure>
                <Disclosure.Button>
                  Product
                  {/* ChevronDownIcon component */}
                </Disclosure.Button>
                <Disclosure.Panel>
                  {/* Products */}
                  {products.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                  {/* Calls to action */}
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                    >
                      {item.name}
                    </a>
                  ))}
                </Disclosure.Panel>
              </Disclosure>
              <a>Features</a>
              <a>Marketplace</a>
              <a>Company</a>
            </div>
            <div>
              <a>Log in</a>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );


}
