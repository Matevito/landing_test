import CryptoJS from "crypto-js";

const secretKey = CryptoJS.enc.Utf8.parse("fcfe67f81dj687182c86c1zzacd33a10");

export const iv = CryptoJS.lib.WordArray.random(16).toString();

console.log(iv);

export const enc = (password: string) => {
  return CryptoJS.AES.encrypt(password, secretKey, {
    iv: CryptoJS.enc.Hex.parse(iv),
  }).toString();
};
