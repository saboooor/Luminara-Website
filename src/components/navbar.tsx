import { component$, Slot } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

import iconAVIF from "~/images/icon.png?height=96&avif";
import iconWEBP from "~/images/icon.png?height=96&webp";
import { src as iconPlaceholder } from "~/images/icon.png?height=96&metadata";

import logoAVIF from "~/images/logo.png?height=96&avif";
import logoWEBP from "~/images/logo.png?height=96&webp";
import { src as logoPlaceholder } from "~/images/logo.png?height=96&metadata";

export default component$(() => {
  return (
    <nav class="z-20 fixed top-1 sm:top-4 w-screen">
      <div class="mx-4 2xl:mx-auto max-w-6xl 2xl:max-w-7xl px-3 backdrop-blur-lg bg-black/50 rounded-2xl">
        <div class="relative flex h-20 items-center justify-between">
          <Nav.Brand />
          <div class="hidden md:flex flex-1 space-x-2 items-center justify-end md:items-stretch">
            <Nav.Item href="/announcements">
              Announcements
            </Nav.Item>
            <Nav.Item spa href="/rules">
              Rules
            </Nav.Item>
            <Nav.Item spa href="/vote">
              Vote
            </Nav.Item>
            <Nav.Item spa href="/ranks">
              Ranks
            </Nav.Item>
            <Nav.Item href="https://netherdepths.tebex.io">
              Store
            </Nav.Item>
            <Nav.Dropdown.Menu name="Other">
              <Nav.Dropdown.Item href="/plan">
                Analytics
              </Nav.Dropdown.Item>
              <Nav.Dropdown.Item href="/map">
                Map
              </Nav.Dropdown.Item>
              <Nav.Dropdown.Item href="/rgb">
                Gradients
              </Nav.Dropdown.Item>
              <Nav.Dropdown.Item href="/appeal">
                Appeal a Ban
              </Nav.Dropdown.Item>
              <Nav.Dropdown.Item href="/downloads">
                Downloads
              </Nav.Dropdown.Item>
              <Nav.Dropdown.Item href="https://cactie.smhsmh.club/">
                Cactie Bot
              </Nav.Dropdown.Item>
            </Nav.Dropdown.Menu>
          </div>
          <Mobile.Button />
        </div>
        <Mobile.Menu>
          <Mobile.Item href="/announcements">
            Announcements
          </Mobile.Item>
          <Mobile.Item spa href="/rules">
            Rules
          </Mobile.Item>
          <Mobile.Item spa href="/vote">
            Vote
          </Mobile.Item>
          <Mobile.Item spa href="/ranks">
            Ranks
          </Mobile.Item>
          <Mobile.Item href="https://netherdepths.tebex.io">
            Store
          </Mobile.Item>
          <Mobile.Item href="/plan">
            Analytics
          </Mobile.Item>
          <Mobile.Item href="/map">
            Map
          </Mobile.Item>
          <Mobile.Item href="/rgb">
            Gradients
          </Mobile.Item>
          <Mobile.Item href="/appeal">
            Appeal a Ban
          </Mobile.Item>
          <Mobile.Item href="/downloads">
            Downloads
          </Mobile.Item>
          <Mobile.Item href="https://cactie.smhsmh.club/">
            Cactie Bot
          </Mobile.Item>
        </Mobile.Menu>
      </div>
    </nav>
  );
});

export const Nav = {
  Item: component$(({ href, spa }: any) => {
    return (
      <>
        {spa ?
          <Link href={href} class="transition duration-200 text-gray-300 hover:text-white hover:bg-red-600/20 hover:drop-shadow-2xl rounded-xl px-4 py-3 text-lg font-medium">
            <Slot />
          </Link>
          :
          <a href={href} class="transition duration-200 text-gray-300 hover:text-white hover:bg-red-600/20 hover:drop-shadow-2xl rounded-xl px-4 py-3 text-lg font-medium">
            <Slot />
          </a>
        }
      </>
    );
  }),
  Dropdown: {
    Menu: component$(({ name }: any) => {
      return (
        <div class="transition duration-200 text-gray-300 hover:text-white group rounded-xl text-lg font-medium">
          <div class="px-4 py-3 flex items-center">
            {name}
            <svg class="ml-2 h-5 w-5 transform group-hover:-rotate-180 transition duration-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </div>
          <div class="absolute z-10 hidden group-hover:block pt-5">
            <div class="bg-black/50 backdrop-blur-lg rounded-xl flex flex-col p-3 text-sm font-medium whitespace-nowrap overflow-y-scroll" style={{ maxHeight: 'calc(100svh - 128px)' }}>
              <Slot />
            </div>
          </div>
        </div>
      );
    }),
    Item: component$(({ href, spa }: any) => {
      return (
        <>
          {spa ?
            <Link href={href} class="transition duration-200 text-gray-300 hover:text-white hover:bg-red-600/20 hover:drop-shadow-2xl rounded-xl px-4 py-3">
              <Slot />
            </Link>
            :
            <a href={href} class="transition duration-200 text-gray-300 hover:text-white hover:bg-red-600/20 hover:drop-shadow-2xl rounded-xl px-4 py-3">
              <Slot />
            </a>
          }
        </>
      );
    })
  },
  Brand: component$(() => {
    return (
      <div class="flex flex-1 items-center sm:items-stretch justify-start">
        <Link href="/" class="transition duration-200 hover:bg-red-600/20 hover:drop-shadow-2xl rounded-xl p-2 flex items-center">
          <picture>
            <source srcSet={logoAVIF} type="image/avif" />
            <source srcSet={logoWEBP} type="image/webp" />
            <img
              src={logoPlaceholder}
              class="h-12 hidden sm:flex md:hidden lg:flex"
              width={225} height={48}
              alt="Nether Depths Logo"
              loading="eager"
              decoding="async"
            />
          </picture>
          <picture>
            <source srcSet={iconAVIF} type="image/avif" />
            <source srcSet={iconWEBP} type="image/webp" />
            <img
              src={iconPlaceholder}
              class="h-12 flex sm:hidden md:flex lg:hidden"
              width={48} height={48}
              alt="Nether Depths Icon"
              loading="eager"
              decoding="async"
            />
          </picture>
        </Link>
      </div>
    )
  })
}

export const Mobile = {
  Item: component$(({ href, spa }: any) => {
    return (
      <>
        {spa ?
          <Link href={href} class="hover:bg-red-600/20 hover:text-white hover:drop-shadow-2xl px-4 py-3 rounded-xl text-md font-medium flex items-center whitespace-nowrap">
            <Slot />
          </Link>
          :
          <a href={href} class="hover:bg-red-600/20 hover:text-white hover:drop-shadow-2xl px-4 py-3 rounded-xl text-md font-medium flex items-center whitespace-nowrap">
            <Slot />
          </a>
        }
      </>
    );
  }),
  Menu: component$(() => {
    return (
      <div class="text-gray-300 hidden pb-6" id="mobile-menu">
        <div class="space-y-1 overflow-y-scroll" style={{ maxHeight: 'calc(100svh - 128px)' }}>
          <Slot />
        </div>
      </div>
    );
  }),
  Button: component$(() => {
    return (
      <div class="flex md:hidden flex-1 items-center justify-end md:items-stretch">
        <button type="button" id="mobile-menu-button" onClick$={() => document.getElementById('mobile-menu')?.classList.toggle("hidden")} class="pointer-events-auto inline-flex items-center justify-center rounded-xl p-2 text-gray-400 hover:text-white focus:outline-none focus:bg-red-600/20" aria-controls="mobile-menu" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    );
  })
} 