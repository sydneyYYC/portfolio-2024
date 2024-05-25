import { writable } from 'svelte/store';

export const navItems = writable([
  { name: 'About', href: '/' },
  { name: 'Projects', href: '/' },
]);
  // export let navItems = [
  //   {name: "About", href:"#about"},
  //   {name: "Projects", href: "#projects"},
  // ];
export function updateNavItems(newItems) {
  navItems.set(newItems);
}