// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://bonelab.sh',
	base: '/',
	integrations: [
		starlight({
			title: 'Homelab Docs',
			tableOfContents: false,
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [ 
					{ 
					label: 'Linux Commands',
					items: [
      						{ label: 'Navigation & File Operations Basics', link: '/linux/navfileopbasics/' },
      						{ label: 'Search, view, permissions & ownership', link: '/linux/search-view-permissions/' },
						{ label: 'System monitoring & management', link: '/linux/sysmonmanagement/' },
						{ label: 'Journalctl logs', link: '/linux/journalctllogs/' },
						{ label: 'Networking basics', link: '/linux/networkingbasics/' },
						{ label: 'Text manipulation & cool shortcuts', link: '/linux/textmanipandshortcuts/' }
					       ],
  					},
  				

					{ 
					label: 'Services',
					items: [ 
						{ label: 'To-Do list', link: '/serverservices/todolist/' },
						{ label: 'Samba', link: '/serverservices/samba/'},
						{ label: 'Smokeping', link: '/serverservices/smokeping/'}
					       ]
				  	}
				]

			  }),
		     ],
	});
