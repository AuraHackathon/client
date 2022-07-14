import dayjs from "dayjs";
import CryptoJS from "crypto-js";
import Big from "big.js";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

export const formatNumber = (number, digits) => {
  if (number !== null && number !== undefined && digits) {
    const value = Number(number).toFixed(digits);
    if (value.includes(".00")) return Number(number).toFixed(0);
    return value;
  }
  return "";
};

export const formatDate = (time) => {
  return dayjs(time).format("HH:mm");
};

export const formatMonth = (months) => {
  if (months === 1) {
    return "Jan";
  }
  if (months === 2) {
    return "Feb";
  }
  if (months === 3) {
    return "Mar";
  }
  if (months === 4) {
    return "Apr";
  }
  if (months === 5) {
    return "May";
  }
  if (months === 6) {
    return "Jun";
  }
  if (months === 7) {
    return "Jul";
  }
  if (months === 8) {
    return "Aug";
  }
  if (months === 9) {
    return "Sep";
  }
  if (months === 10) {
    return "Oct";
  }
  if (months === 11) {
    return "Nov";
  }
  if (months === 12) {
    return "Dec";
  }
  return ;
};

export const encrypt = (plainText, secret) => {
  var b64 = CryptoJS.AES.encrypt(plainText, secret).toString();
  var e64 = CryptoJS.enc.Base64.parse(b64);
  var eHex = e64.toString(CryptoJS.enc.Hex);
  return eHex;
};

export const decrypt = (cipherText, secret) => {
  var reb64 = CryptoJS.enc.Hex.parse(cipherText);
  var bytes = reb64.toString(CryptoJS.enc.Base64);
  var decrypt = CryptoJS.AES.decrypt(bytes, secret);
  var plain = decrypt.toString(CryptoJS.enc.Utf8);
  return plain;
};

export const formatCountDown = (time) => {
  return time >= 10 ? time : "0" + time;
};

export const formatCurrency = (input, precision) => {
  if (!input || input === 0) return "0";
  return new Big(input).toFixed(precision);
};
