export default function manifest() {
  return {
    name: "Japanese0toN1",
    short_name: "Japanese0toN1",
    description: "leran japanese grammar from 0 to N1",
    start_url: "/",
    display: "standalone",
    //   background_color: '#fff',
    //   theme_color: '#fff',
    icons: [
      {
        src: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
