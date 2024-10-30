import { createClient } from '@sanity/client'

import imageUrlBuilder from "@sanity/image-url"

export const client = createClient({
	projectId: "1y137ntn",
	dataset: 'production',
	apiVersion: '2022-03-07',
	userCdn: true,
	// ignoreBrowserTokenWarning: true,
	token: "skxR2RYSBNN49wLEfRIkv55kwtCkJ7xjxJkQkKH2yuijvAz9Dh7OVDT79O9OwbiNhJJRPfGMJGAnoR2pU69QAUrWqFK2QDpkDQ2FTFqSMfuYKDjR1jAv8co6K3XDnzZh00cYdmu8cY0xvi1KgiUiEvEkY08vIVo2T7Y9InGQAvuIG1cOQd22"

})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);