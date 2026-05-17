// ========================================================
// IMPORTS
// ========================================================

import fs from "fs-extra"; // Para mexer com arquivos e pastas
import path from "path"; // Para lidar com caminhos de arquivos
import { fileURLToPath } from "url";

// ========================================================
// CONFIGURAÇÃO PARA ES MODULES
// ========================================================

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ========================================================
// CAMINHOS DO PROJETO
// ========================================================

const templatesPath = path.resolve(__dirname, "..", "src", "templates");
const assetsPath = path.resolve(__dirname, "..", "src", "assets");
const distJsPath = path.resolve(__dirname, "..", "src", "js");
const distCssPath = path.resolve(__dirname, "..", "dist", "css");
const sitePath = path.resolve(__dirname, "..", "site");