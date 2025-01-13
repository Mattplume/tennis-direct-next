import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest", // Utilise ts-jest pour le support TypeScript.
  testEnvironment: "node", // Environnement d'exécution pour les tests.
  moduleFileExtensions: ["ts", "js"], // Extensions supportées.
  testMatch: ["**/__tests__/**/*.(ts|js)", "**/?(*.)+(spec|test).(ts|js)"], // Où se trouvent les tests.
  verbose: true, // Affiche des logs détaillés lors des tests.
};

export default config;