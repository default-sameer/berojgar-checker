module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'background': '#232946',
      'head': '#fffffe',
      'paragraph': '#b8c1ec',
      'button': '#eebbc3',
      'button-text': '#232946',
      'primary': '#b8c1ec',
      'secondary': '#fffffe',
      'tertiary': '#eebbc3',
    },
    fontFamily:{
      pt:[
        'PT Sans', 'sans-serif'
      ],
      sc:[
        'Amatic SC', 'cursive'
      ]
    }
    },
  },
  plugins: [require("daisyui"), require('@tailwindcss/forms'),],
  daisyui: {
    themes: ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"],
  },
}
