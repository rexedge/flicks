import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';

interface NavLink {
	title: string;
	url: string;
}

interface CallToAction {
	title: string;
	url: string;
}

interface NavbarProps {
	title?: string;
	logo?: string;
	navLinks?: NavLink[];
	callToAction?: CallToAction[];
	fixed?: boolean;
}
export default function Navbar({
	title = 'Title',
	logo = '/logo.png',
	navLinks = [
		{ title: 'Home', url: '/' },
		{ title: 'About', url: '/about' },
		{ title: 'Products', url: '/products' },
	],
	callToAction = [{ title: 'Contact', url: '/contact' }],
	fixed = false,
}: NavbarProps): JSX.Element {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const isFixed = fixed ? 'fixed top-0 left-0 right-0' : '';

	return (
		<header className={`drop-shadow bg-primary-light ${isFixed}`}>
			<nav
				className='mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8'
				aria-label='Global'
			>
				{logo && (
					<div className='flex lg:flex-1'>
						<Link
							href='/'
							className='-m-1.5 p-1.5'
						>
							<span className='sr-only'>{title}</span>
							<Image
								className='h-10 w-auto'
								height={100}
								width={40}
								src={logo}
								alt=''
							/>
						</Link>
					</div>
				)}
				<div className='flex lg:hidden'>
					<button
						type='button'
						className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-primary-dark'
						onClick={() => setMobileMenuOpen(true)}
					>
						<span className='sr-only'>Open main menu</span>
						{mobileMenuOpen ? (
							<XMarkIcon
								className='h-6 w-6'
								aria-hidden='true'
							/>
						) : (
							<Bars3Icon
								className='h-6 w-6'
								aria-hidden='true'
							/>
						)}
					</button>
				</div>

				<div className='hidden lg:flex lg:gap-x-12'>
					{navLinks &&
						navLinks.map((link, index) => (
							<Link
								key={index}
								href={link.url}
								className='text-sm font-semibold leading-6 text-primary-dark hover:text-primary'
							>
								{link.title}
							</Link>
						))}
				</div>
				{callToAction && (
					<div className='hidden lg:flex lg:flex-1 lg:justify-end'>
						{callToAction.map((cta, index) => (
							<Link
								key={index}
								href={cta.url}
								className='ml-3 bg-primary-dark text-sm font-semibold leading-6 text-primary-light px-3 py-2 rounded-lg hover:opacity-75'
							>
								{cta.title}{' '}
								<span aria-hidden='true'>&rarr;</span>
							</Link>
						))}
					</div>
				)}
			</nav>
			<Dialog
				as='div'
				className='lg:hidden'
				open={mobileMenuOpen}
				onClose={setMobileMenuOpen}
			>
				<div className='fixed inset-0 z-30' />
				<Dialog.Panel className='fixed inset-y-0 right-0 z-30 w-full overflow-y-auto bg-primary-light px-6 py-6 sm:max-w-sm sm:ring-1'>
					<div className='flex items-center justify-between'>
						{logo && (
							<Link
								href='#'
								className='-m-1.5 p-1.5'
							>
								<span className='sr-only'>
									Your Company
								</span>
								<Image
									src={logo}
									alt=''
									height={50}
									width={50}
								/>
							</Link>
						)}
						<button
							type='button'
							className='-m-2.5 rounded-md p-2.5 text-primary-dark'
							onClick={() => setMobileMenuOpen(false)}
						>
							<span className='sr-only'>Close menu</span>
							<XMarkIcon
								className='h-6 w-6'
								aria-hidden='true'
							/>
						</button>
					</div>
					<div className='mt-6 flow-root'>
						<div className='-my-6 divide-y dark:divide-primary-light divide-primary-dark'>
							<div className='space-y-2 py-6'>
								{navLinks &&
									navLinks.map((link, index) => (
										<Link
											key={index}
											href={link.url}
											className='-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-primary-dark  hover:bg-gray-50'
										>
											{link.title}
										</Link>
									))}
							</div>
							{callToAction && (
								<div className='py-6'>
									{callToAction.map(
										(link, index) => (
											<Link
												key={index}
												href={link.url}
												className='-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-primary-dark hover:bg-gray-50'
											>
												{link.title}
											</Link>
										)
									)}
								</div>
							)}
						</div>
					</div>
				</Dialog.Panel>
			</Dialog>
		</header>
	);
}
