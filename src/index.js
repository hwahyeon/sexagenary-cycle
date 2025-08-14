/** @typedef {'kr'|'cn'|'jp'|'vn'|'han'} Locale */

const STEMS = {
  kr: ['갑','을','병','정','무','기','경','신','임','계'],
  han: ['甲','乙','丙','丁','戊','己','庚','辛','壬','癸'],
  vn:  ['Giáp','Ất','Bính','Đinh','Mậu','Kỷ','Canh','Tân','Nhâm','Quý'],
};

const BRANCHES = {
  kr: ['자','축','인','묘','진','사','오','미','신','유','술','해'],
  han: ['子','丑','寅','卯','辰','巳','午','未','申','酉','戌','亥'],
  vn:  ['Tý','Sửu','Dần','Mão','Thìn','Tỵ','Ngọ','Mùi','Thân','Dậu','Tuất','Hợi'],
};

const VALID_LOCALES = ['kr', 'cn', 'jp', 'vn', 'han'];

/**
 * Convert a civil year to its corresponding sexagenary cycle notation.
 * @param {number} year - Civil year: ...,-2(BC2),-1(BC1),1(AD1),2...
 * @param {Locale} [locale='han'] - Output locale
 * @returns {string} Sexagenary cycle string
 */
function getSexagenaryYear(year, locale = "han") {
  if (!Number.isInteger(year) || year === 0) {
    throw new TypeError(
      "Year must be an integer and cannot be 0 (use -1 for 1 BC)."
    );
  }

  locale = String(locale).toLowerCase();
  if (!VALID_LOCALES.includes(locale)) {
    throw new RangeError(
      `Invalid locale: ${locale}. Must be one of ${VALID_LOCALES.join(", ")}`
    );
  }

  const y = year <= 0 ? year + 1 : year; // BC adjustment
  const d = y - 1984; // 1984 = 甲子

  const stemIdx = ((d % 10) + 10) % 10;
  const branchIdx = ((d % 12) + 12) % 12;

  const isHanLike = locale === "cn" || locale === "jp" || locale === "han";
  const stems = isHanLike ? STEMS.han : locale === "vn" ? STEMS.vn : STEMS.kr;
  const branches = isHanLike
    ? BRANCHES.han
    : locale === "vn"
    ? BRANCHES.vn
    : BRANCHES.kr;

  return locale === "vn"
    ? `${stems[stemIdx]} ${branches[branchIdx]}`
    : `${stems[stemIdx]}${branches[branchIdx]}`;
}
