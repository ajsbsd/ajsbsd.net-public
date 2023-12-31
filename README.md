## 11.01.2023 - ajsbsd.net website with Hugging Face Chat inference

<a href="https://ajsbsd.net">Live at ajsbsd.net</a>

## Tools

<a href="https://debian.org">Debian/bookworm</a>

<a href="https://httpd.apache.org">Apache</a>

<a href="https://nextjs.org">NextJS 14.0.1 now running in Docker</a>

<a href="https://tailwindcss.com/docs/customizing-colors">TailwindCSS</a>

## Goals

Interact with HF API similar to https://sdk.vercel.ai/docs/guides/providers/hugging-face

Learn how to make UI look tolerable without Radix-UI Theme

Experiment with HF Inference since my Server won't run OpenLLM/BentoML very well :)

## Docker

11.28.2023 - Dockerfile which is live at <a href="https://ajsbsd.net">ajsbsd.net</a>

```
$ docker build -t ajsbsd.net-nextjs-docker .
$ docker run -p 127.0.0.1:3000:3000 ajsbsd.net-nextjs-docker
```

## Zephyr

11.28.2023 - Switched inference to zephyr-7b-beta using this <a href="https://api-inference.huggingface.co/models/HuggingFaceH4/zephyr-7b-beta">Inference API</a>
