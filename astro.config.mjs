// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://Rusty-to-Wizard.github.io',
	base: '/HomelabDoc',
	integrations: [
		starlight({
			title: 'Homelab Documentation',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [ { label: 'Server Build', link: '/server-build/' }],
			}),
		],
	});
