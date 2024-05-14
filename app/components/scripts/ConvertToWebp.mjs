import fs from "fs";
import path from "path";
import sharp from "sharp";
import { fileURLToPath } from "url";

const convertToWebp = async () => {
  const __filename = fileURLToPath(import.meta.url);

  // ディレクトリ名を取得
  const __dirname = path.dirname(__filename);
  const inputDirectory = path.join(__dirname, "..", "..", "..", "public");
  const outputDirectory = path.join(
    __dirname,
    "..",
    "..",
    "..",
    "public",
    "image_webp"
  );

  const fileNames = fs.readdirSync(inputDirectory);

  const supportedFormats = [".jpg", ".jpeg", ".png"];
  const supportedFileNames = fileNames.filter((fileName) => {
    const ext = path.extname(fileName).toLowerCase();
    return supportedFormats.includes(ext);
  });

  // 変換済みのファイル名のリストを読み込み
  const convertedFilePath = path.join(
    __dirname,
    "ConvertedFileNameList.json"
  );

  let convertedFileNames = [];
  if (fs.existsSync(convertedFilePath)) {
    const data = fs.readFileSync(convertedFilePath, "utf8");
    convertedFileNames = JSON.parse(data);
  }

  // 変換済みのファイルは除外
  const uniqueFileNames = supportedFileNames.filter(
    (fileName) => !convertedFileNames.includes(fileName)
  );

  try {
    await Promise.all(
      uniqueFileNames.map(async (fileName) => {
        const inputPath = path.join(inputDirectory, fileName);
        const outputPath = path.join(
          outputDirectory,
          `${fileName.replace(/\.(jpe?g|png)$/, ".webp")}`
        );

        await sharp(inputPath).webp({ quality: 80 }).toFile(outputPath);

        convertedFileNames.push(fileName);
      })
    );
    console.log("画像の変換に成功しました");
  } catch (error) {
    console.log("画像の変換に失敗しました", error);
  }

  // 変換したファイル名を「ConvertedFileNameList.json」に書き込む
  fs.writeFileSync(
    convertedFilePath,
    JSON.stringify(convertedFileNames, null, 2)
  );
  console.log("webpに変換したファイル", uniqueFileNames);
};

convertToWebp();
