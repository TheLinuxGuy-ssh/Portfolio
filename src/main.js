import { mount } from 'svelte'
import App from './App.svelte'
import { injectSpeedInsights } from "@vercel/speed-insights/sveltekit";

injectSpeedInsights();

const app = mount(App, {
  target: document.getElementById('app'),
})

export default app
