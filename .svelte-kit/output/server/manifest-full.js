export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["Desktop.mp4","audio/boot.mp3","css/links.css","css/locomotive.css","css/normalize.css","css/style.css","fonts/Hermit/Hermit-Light.woff2","fonts/Hermit/LICENSE","fonts/ProFont/LICENSE","fonts/ProFont/ProFont.woff2","hyprfect.sh","images/general/logo.webp","images/projects/COSMA 2023.mp4","images/projects/COSMA2k24.mp4","images/projects/CV.mp4","images/projects/DarwinX.mp4","images/projects/DigiPod.mp4","images/projects/Duskmeter.mp4","images/projects/ESP32 Irrigation Automation.mp4","images/projects/Global Insulation.mp4","images/projects/Hyprfect.mp4","images/projects/JP Academy.mp4","images/projects/Kepler.mp4","images/projects/Mahaveer International School.mp4","images/projects/Marine Consultancy Group.mp4","images/projects/SkillHiive Stack.mp4","images/projects/Sosh Media.mp4","images/projects/StarWalk CA.mp4","images/projects/StarWalk Core.mp4","images/projects/TLG Links.mp4","images/projects/TLG Start Page.mp4","images/projects/Tagged.mp4","images/projects/The Spartan Rage.mp4","images/projects/Unite.Do.mp4","images/svg/mail.svg","svelte.svg","tlglink.mp4","vite.svg"]),
	mimeTypes: {".mp4":"video/mp4",".mp3":"audio/mpeg",".css":"text/css",".woff2":"font/woff2",".webp":"image/webp",".svg":"image/svg+xml"},
	_: {
		client: {start:"_app/immutable/entry/start.CB-UzQOu.js",app:"_app/immutable/entry/app.C4iJ8-5P.js",imports:["_app/immutable/entry/start.CB-UzQOu.js","_app/immutable/chunks/B_0zLyRu.js","_app/immutable/chunks/C5DfGS39.js","_app/immutable/chunks/BXdYB02j.js","_app/immutable/chunks/OyDLVYGy.js","_app/immutable/chunks/C6AAfyH1.js","_app/immutable/entry/app.C4iJ8-5P.js","_app/immutable/chunks/CuollCth.js","_app/immutable/chunks/C5DfGS39.js","_app/immutable/chunks/C3NBd8hJ.js","_app/immutable/chunks/BXdYB02j.js","_app/immutable/chunks/ENP0Opys.js","_app/immutable/chunks/BNZpLE_s.js","_app/immutable/chunks/C6AAfyH1.js","_app/immutable/chunks/suOikh3B.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
