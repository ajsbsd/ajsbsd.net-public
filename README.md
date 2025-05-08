# 11.01.2023 - ajsbsd.net website with Hugging Face Chat inference

[Live at ajsbsd.net](https://ajsbsd.net)

## Tools

- [Debian/bookworm](https://debian.org)
- [Apache](https://httpd.apache.org)
- [NextJS 14.0.1 now running in Docker](https://nextjs.org)
- [TailwindCSS](https://tailwindcss.com/docs/customizing-colors)

## Goals

- Interact with HF API similar to [Vercel Hugging Face Guide](https://sdk.vercel.ai/docs/guides/providers/hugging-face)
- Learn how to make UI look tolerable without Radix-UI Theme
- Experiment with HF Inference since my server won't run OpenLLM/BentoML very well :)

## Docker

### 11.28.2023 - Dockerfile live at [ajsbsd.net](https://ajsbsd.net)

```bash
$ docker build -t ajsbsd.net-nextjs-docker .
$ docker run -p 127.0.0.1:3000:3000 ajsbsd.net-nextjs-docker
