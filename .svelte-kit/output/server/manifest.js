export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["Desktop.mp4","audio/boot.mp3","css/links.css","css/locomotive.css","css/normalize.css","css/style.css","fonts/Hermit/Hermit-Light.woff2","fonts/Hermit/LICENSE","fonts/ProFont/LICENSE","fonts/ProFont/ProFont.woff2","hyprfect.sh","images/general/logo.webp","images/orgs/7blocks.svg","images/orgs/digipod.jpg","images/orgs/digipod.svg","images/orgs/freelance.svg","images/orgs/insights.jpg","images/orgs/insights.svg","images/orgs/kepler.jpg","images/orgs/kigali.jpg","images/orgs/logo.webp","images/orgs/mahaveer.jpg","images/orgs/mahaveer.svg","images/orgs/msc-dit.svg","images/orgs/mxdit.jpg","images/orgs/open-source-kigali.svg","images/orgs/skillhiive.jpg","images/orgs/skillhiive.svg","images/orgs/st-marys.svg","images/orgs/starwalk.jpg","images/orgs/starwalk.svg","images/orgs/stmarys.jpg","images/projects/COSMA 2023.mp4","images/projects/COSMA2k24.mp4","images/projects/CV.mp4","images/projects/DarwinX.mp4","images/projects/DigiPod.mp4","images/projects/Duskmeter.mp4","images/projects/ESP32 Irrigation Automation.mp4","images/projects/Global Insulation.mp4","images/projects/HyperPhish.mp4","images/projects/HyprAesthetic.mp4","images/projects/Hyprfect.mp4","images/projects/JP Academy.mp4","images/projects/Kepler.mp4","images/projects/Mahaveer International School.mp4","images/projects/Marine Consultancy Group.mp4","images/projects/SkillHiive Stack.mp4","images/projects/Sosh Media.mp4","images/projects/StarWalk CA.mp4","images/projects/StarWalk Core.mp4","images/projects/TLG Links.mp4","images/projects/TLG Start Page.mp4","images/projects/Tagged.mp4","images/projects/The Spartan Rage.mp4","images/projects/Unite.Do.mp4","images/svg/mail.svg","svelte.svg","tlglink.mp4","vite.svg"]),
	mimeTypes: {".mp4":"video/mp4",".mp3":"audio/mpeg",".css":"text/css",".woff2":"font/woff2",".webp":"image/webp",".svg":"image/svg+xml",".jpg":"image/jpeg"},
	_: {
		client: {start:"_app/immutable/entry/start.qzzA3MWT.js",app:"_app/immutable/entry/app.Wu7w9rBT.js",imports:["_app/immutable/entry/start.qzzA3MWT.js","_app/immutable/chunks/BpesXWH1.js","_app/immutable/chunks/C5DfGS39.js","_app/immutable/chunks/BXdYB02j.js","_app/immutable/chunks/Ct4zheRb.js","_app/immutable/chunks/C6AAfyH1.js","_app/immutable/entry/app.Wu7w9rBT.js","_app/immutable/chunks/CuollCth.js","_app/immutable/chunks/C5DfGS39.js","_app/immutable/chunks/C3NBd8hJ.js","_app/immutable/chunks/BXdYB02j.js","_app/immutable/chunks/ENP0Opys.js","_app/immutable/chunks/BNZpLE_s.js","_app/immutable/chunks/C6AAfyH1.js","_app/immutable/chunks/suOikh3B.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/api/jelly",
				pattern: /^\/api\/jelly\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/jelly/_server.js'))
			},
			{
				id: "/api/wakatime",
				pattern: /^\/api\/wakatime\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/wakatime/_server.js'))
			},
			{
				id: "/duskmeter",
				pattern: /^\/duskmeter\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/hyprfect",
				pattern: /^\/hyprfect\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/matrix",
				pattern: /^\/matrix\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/matrix/post/[page]",
				pattern: /^\/matrix\/post\/([^/]+?)\/?$/,
				params: [{"name":"page","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
