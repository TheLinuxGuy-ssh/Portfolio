
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	type MatcherParam<M> = M extends (param : string) => param is (infer U extends string) ? U : string;

	export interface AppTypes {
		RouteId(): "/" | "/matrix" | "/matrix/post" | "/matrix/post/[page]";
		RouteParams(): {
			"/matrix/post/[page]": { page: string }
		};
		LayoutParams(): {
			"/": { page?: string | undefined };
			"/matrix": { page?: string | undefined };
			"/matrix/post": { page?: string | undefined };
			"/matrix/post/[page]": { page: string }
		};
		Pathname(): "/" | "/matrix" | `/matrix/post/${string}` & {};
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/.DS_Store" | "/Desktop.mp4" | "/audio/boot.mp3" | "/css/links.css" | "/css/locomotive.css" | "/css/normalize.css" | "/css/style.css" | "/fonts/Hermit/Hermit-Light.woff2" | "/fonts/Hermit/LICENSE" | "/fonts/ProFont/LICENSE" | "/fonts/ProFont/ProFont.woff2" | "/hyprfect.sh" | "/images/.DS_Store" | "/images/general/logo.webp" | "/images/projects/COSMA 2023.mp4" | "/images/projects/COSMA2k24.mp4" | "/images/projects/DarwinX.mp4" | "/images/projects/DigiPod.mp4" | "/images/projects/ESP32 Irrigation Automation.mp4" | "/images/projects/Global Insulation.mp4" | "/images/projects/Hyprfect.mp4" | "/images/projects/JP Academy.mp4" | "/images/projects/Mahaveer International School.mp4" | "/images/projects/Marine Consultancy Group.mp4" | "/images/projects/SkillHiive Waitlist.mp4" | "/images/projects/SkillHiive Web.mp4" | "/images/projects/Sosh Media.mp4" | "/images/projects/TLG Links.mp4" | "/images/projects/TLG Start Page.mp4" | "/images/projects/Tagged.mp4" | "/images/projects/The Spartan Rage.mp4" | "/images/projects/Unite.Do.mp4" | "/images/svg/mail.svg" | "/svelte.svg" | "/tlglink.mp4" | "/vite.svg" | string & {};
	}
}