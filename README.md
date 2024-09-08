# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# ------------First, install command below---------------

command :
```
npm install --save-dev vite
```

# === the library to use ====
```
npm i ol@5.0.0
npm i ol-layerswitcher
npm install primereact
```

# === the example Shapefile to insert to your Database with they reference. ===

Link:

- https://github.com/kumA0taku/my_web_gis_shp.git

# === to Run project ====
```
npm run dev
```

# === For setup in AWS server ===
---Upgrade Node.js using a version manager like nvm---
```
nvm install 18
nvm use 18
```

---Upgrade npm to the latest version---
```
npm install -g npm@latest
```

--- to config CLI root ---
---for change permission of Folder(or directory)---
```
sudo chown -R ubuntu:ubuntu /YOUR/DIRECTORY
```

---  to config Your server in vite.config.js ---

```
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

//add this below "plugins"
  server:{
    host: true,
    port: 5173,
  }
});
```

# === to config Your Github ====
```
git config --global user.email "you@example.com"
git config --global user.name "Your Name"
```

# === warning!!!  ====
```
if data of Shapefile don't show on map, let check your Geoserver
```
