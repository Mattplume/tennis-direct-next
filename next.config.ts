import type { NextConfig } from "next";
import fs from "fs";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
};

// Test pour vérifier si le fichier .env.local est détecté
const envPath = path.resolve(process.cwd(), ".env.local");
const envExists = fs.existsSync(envPath);

console.log(`Fichier .env.local détecté : ${envExists}`);
if (envExists) {
  console.log("Contenu du fichier .env.local :");
  console.log(fs.readFileSync(envPath, "utf-8"));
}

console.log("SPORTRADAR_API_KEY:", process.env.SPORTRADAR_API_KEY);
console.log("SPORTRADAR_LANGUAGE_CODE:", process.env.SPORTRADAR_LANGUAGE_CODE);

export default nextConfig;

