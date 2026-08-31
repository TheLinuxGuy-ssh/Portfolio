import adapterVercel from '@sveltejs/adapter-vercel';
import adapterNode from '@sveltejs/adapter-node';

const adapter = process.env.DOCKER_BUILD === 'true' ? adapterNode() : adapterVercel();

export default {
  kit: {
    adapter: adapter
  }
};