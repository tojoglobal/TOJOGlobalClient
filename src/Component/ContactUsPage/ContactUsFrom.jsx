import { useContext, useState, useEffect } from "react";
import { useFormik } from "formik";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import { AppContext } from "../../AppContext";
import "react-phone-input-2/lib/style.css";
import "./ContactUsForm.css";
import { toast } from "react-hot-toast";

const countryToCurrency = {
  af: "AFN", // Afghanistan
  al: "ALL", // Albania
  dz: "DZD", // Algeria
  as: "USD", // American Samoa
  ad: "EUR", // Andorra
  ao: "AOA", // Angola
  ai: "XCD", // Anguilla
  aq: "AUD", // Antarctica
  ag: "XCD", // Antigua and Barbuda
  ar: "ARS", // Argentina
  am: "AMD", // Armenia
  aw: "AWG", // Aruba
  au: "AUD", // Australia
  at: "EUR", // Austria
  az: "AZN", // Azerbaijan
  bs: "BSD", // Bahamas
  bh: "BHD", // Bahrain
  bd: "BDT", // Bangladesh
  bb: "BBD", // Barbados
  by: "BYN", // Belarus
  be: "EUR", // Belgium
  bz: "BZD", // Belize
  bj: "XOF", // Benin
  bm: "BMD", // Bermuda
  bt: "BTN", // Bhutan
  bo: "BOB", // Bolivia
  ba: "BAM", // Bosnia and Herzegovina
  bw: "BWP", // Botswana
  bv: "NOK", // Bouvet Island
  br: "BRL", // Brazil
  io: "USD", // British Indian Ocean Territory
  bn: "BND", // Brunei
  bg: "BGN", // Bulgaria
  bf: "XOF", // Burkina Faso
  bi: "BIF", // Burundi
  kh: "KHR", // Cambodia
  cm: "XAF", // Cameroon
  ca: "CAD", // Canada
  cv: "CVE", // Cape Verde
  ky: "KYD", // Cayman Islands
  cf: "XAF", // Central African Republic
  td: "XAF", // Chad
  cl: "CLP", // Chile
  cn: "CNY", // China
  cx: "AUD", // Christmas Island
  cc: "AUD", // Cocos Islands
  co: "COP", // Colombia
  km: "KMF", // Comoros
  cg: "XAF", // Congo
  cd: "CDF", // Congo (Democratic Republic)
  ck: "NZD", // Cook Islands
  cr: "CRC", // Costa Rica
  ci: "XOF", // Cote d'Ivoire
  hr: "EUR", // Croatia
  cu: "CUP", // Cuba
  cw: "ANG", // Curacao
  cy: "EUR", // Cyprus
  cz: "CZK", // Czech Republic
  dk: "DKK", // Denmark
  dj: "DJF", // Djibouti
  dm: "XCD", // Dominica
  do: "DOP", // Dominican Republic
  ec: "USD", // Ecuador
  eg: "EGP", // Egypt
  sv: "USD", // El Salvador
  gq: "XAF", // Equatorial Guinea
  er: "ERN", // Eritrea
  ee: "EUR", // Estonia
  et: "ETB", // Ethiopia
  fk: "FKP", // Falkland Islands
  fo: "DKK", // Faroe Islands
  fj: "FJD", // Fiji
  fi: "EUR", // Finland
  fr: "EUR", // France
  gf: "EUR", // French Guiana
  pf: "XPF", // French Polynesia
  tf: "EUR", // French Southern Territories
  ga: "XAF", // Gabon
  gm: "GMD", // Gambia
  ge: "GEL", // Georgia
  de: "EUR", // Germany
  gh: "GHS", // Ghana
  gi: "GIP", // Gibraltar
  gr: "EUR", // Greece
  gl: "DKK", // Greenland
  gd: "XCD", // Grenada
  gp: "EUR", // Guadeloupe
  gu: "USD", // Guam
  gt: "GTQ", // Guatemala
  gg: "GBP", // Guernsey
  gn: "GNF", // Guinea
  gw: "XOF", // Guinea-Bissau
  gy: "GYD", // Guyana
  ht: "HTG", // Haiti
  hm: "AUD", // Heard Island and McDonald Islands
  va: "EUR", // Vatican City
  hn: "HNL", // Honduras
  hk: "HKD", // Hong Kong
  hu: "HUF", // Hungary
  is: "ISK", // Iceland
  in: "INR", // India
  id: "IDR", // Indonesia
  ir: "IRR", // Iran
  iq: "IQD", // Iraq
  ie: "EUR", // Ireland
  im: "GBP", // Isle of Man
  il: "ILS", // Israel
  it: "EUR", // Italy
  jm: "JMD", // Jamaica
  jp: "JPY", // Japan
  je: "GBP", // Jersey
  jo: "JOD", // Jordan
  kz: "KZT", // Kazakhstan
  ke: "KES", // Kenya
  ki: "AUD", // Kiribati
  kp: "KPW", // North Korea
  kr: "KRW", // South Korea
  kw: "KWD", // Kuwait
  kg: "KGS", // Kyrgyzstan
  la: "LAK", // Laos
  lv: "EUR", // Latvia
  lb: "LBP", // Lebanon
  ls: "LSL", // Lesotho
  lr: "LRD", // Liberia
  ly: "LYD", // Libya
  li: "CHF", // Liechtenstein
  lt: "EUR", // Lithuania
  lu: "EUR", // Luxembourg
  mo: "MOP", // Macau
  mk: "MKD", // North Macedonia
  mg: "MGA", // Madagascar
  mw: "MWK", // Malawi
  my: "MYR", // Malaysia
  mv: "MVR", // Maldives
  ml: "XOF", // Mali
  mt: "EUR", // Malta
  mh: "USD", // Marshall Islands
  mq: "EUR", // Martinique
  mr: "MRU", // Mauritania
  mu: "MUR", // Mauritius
  yt: "EUR", // Mayotte
  mx: "MXN", // Mexico
  fm: "USD", // Micronesia
  md: "MDL", // Moldova
  mc: "EUR", // Monaco
  mn: "MNT", // Mongolia
  me: "EUR", // Montenegro
  ms: "XCD", // Montserrat
  ma: "MAD", // Morocco
  mz: "MZN", // Mozambique
  mm: "MMK", // Myanmar
  na: "NAD", // Namibia
  nr: "AUD", // Nauru
  np: "NPR", // Nepal
  nl: "EUR", // Netherlands
  nc: "XPF", // New Caledonia
  nz: "NZD", // New Zealand
  ni: "NIO", // Nicaragua
  ne: "XOF", // Niger
  ng: "NGN", // Nigeria
  nu: "NZD", // Niue
  nf: "AUD", // Norfolk Island
  mp: "USD", // Northern Mariana Islands
  no: "NOK", // Norway
  om: "OMR", // Oman
  pk: "PKR", // Pakistan
  pw: "USD", // Palau
  ps: "ILS", // Palestine
  pa: "PAB", // Panama
  pg: "PGK", // Papua New Guinea
  py: "PYG", // Paraguay
  pe: "PEN", // Peru
  ph: "PHP", // Philippines
  pn: "NZD", // Pitcairn Islands
  pl: "PLN", // Poland
  pt: "EUR", // Portugal
  pr: "USD", // Puerto Rico
  qa: "QAR", // Qatar
  re: "EUR", // Reunion
  ro: "RON", // Romania
  ru: "RUB", // Russia
  rw: "RWF", // Rwanda
  bl: "EUR", // Saint Barthelemy
  sh: "SHP", // Saint Helena
  kn: "XCD", // Saint Kitts and Nevis
  lc: "XCD", // Saint Lucia
  mf: "EUR", // Saint Martin
  pm: "EUR", // Saint Pierre and Miquelon
  vc: "XCD", // Saint Vincent and the Grenadines
  ws: "WST", // Samoa
  sm: "EUR", // San Marino
  st: "STN", // Sao Tome and Principe
  sa: "SAR", // Saudi Arabia
  sn: "XOF", // Senegal
  rs: "RSD", // Serbia
  sc: "SCR", // Seychelles
  sl: "SLL", // Sierra Leone
  sg: "SGD", // Singapore
  sx: "ANG", // Sint Maarten
  sk: "EUR", // Slovakia
  si: "EUR", // Slovenia
  sb: "SBD", // Solomon Islands
  so: "SOS", // Somalia
  za: "ZAR", // South Africa
  gs: "GBP", // South Georgia and the South Sandwich Islands
  ss: "SSP", // South Sudan
  es: "EUR", // Spain
  lk: "LKR", // Sri Lanka
  sd: "SDG", // Sudan
  sr: "SRD", // Suriname
  sj: "NOK", // Svalbard and Jan Mayen
  sz: "SZL", // Swaziland
  se: "SEK", // Sweden
  ch: "CHF", // Switzerland
  sy: "SYP", // Syria
  tw: "TWD", // Taiwan
  tj: "TJS", // Tajikistan
  tz: "TZS", // Tanzania
  th: "THB", // Thailand
  tl: "USD", // Timor-Leste
  tg: "XOF", // Togo
  tk: "NZD", // Tokelau
  to: "TOP", // Tonga
  tt: "TTD", // Trinidad and Tobago
  tn: "TND", // Tunisia
  tr: "TRY", // Turkey
  tm: "TMT", // Turkmenistan
  tc: "USD", // Turks and Caicos Islands
  tv: "AUD", // Tuvalu
  ug: "UGX", // Uganda
  ua: "UAH", // Ukraine
  ae: "AED", // United Arab Emirates
  gb: "GBP", // United Kingdom
  um: "USD", // United States Minor Outlying Islands
  us: "USD", // United States
  uy: "UYU", // Uruguay
  uz: "UZS", // Uzbekistan
  vu: "VUV", // Vanuatu
  ve: "VES", // Venezuela
  vn: "VND", // Vietnam
  vg: "USD", // British Virgin Islands
  vi: "USD", // US Virgin Islands
  wf: "XPF", // Wallis and Futuna
  eh: "MAD", // Western Sahara
  ye: "YER", // Yemen
  zm: "ZMW", // Zambia
  zw: "ZWL", // Zimbabwe
};

const popularCurrencies = [
  { code: "USD", symbol: "$", name: "US Dollar" },
  { code: "EUR", symbol: "€", name: "Euro" },
  { code: "GBP", symbol: "£", name: "British Pound" },
  { code: "INR", symbol: "₹", name: "Indian Rupee" },
  { code: "BDT", symbol: "৳", name: "Bangladeshi Taka" },
  { code: "PKR", symbol: "₨", name: "Pakistani Rupee" },
  { code: "AED", symbol: "د.إ", name: "UAE Dirham" },
  { code: "SAR", symbol: "﷼", name: "Saudi Riyal" },
  { code: "AUD", symbol: "AU$", name: "Australian Dollar" },
  { code: "CAD", symbol: "CA$", name: "Canadian Dollar" },
  { code: "JPY", symbol: "¥", name: "Japanese Yen" },
  { code: "CNY", symbol: "¥", name: "Chinese Yuan" },
  { code: "SGD", symbol: "S$", name: "Singapore Dollar" },
];
const serviceOptions = [
  "I need a website",
  "I need a WordPress website",
  "I want to design & develop my website.",
  "I need Page moderation service",
  "I need social media marketing services.",
  "Other",
];

export const ContactUsForm = () => {
  const { apiUrl } = useContext(AppContext);
  const [phoneCountry, setPhoneCountry] = useState("bd");
  const [showAboutService, setShowAboutService] = useState(false);

  // Set BD defaults on mount
  useEffect(() => {
    formik.setFieldValue("currency", "BDT");
    setPhoneCountry("bd");
    // eslint-disable-next-line
  }, []);

  const formik = useFormik({
    initialValues: {
      fullName: "",
      phoneNumber: "",
      email: "",
      websiteLink: "",
      budget: "",
      currency: "BDT",
      service: "",
      aboutService: "",
      note: "",
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        const payload = {
          ...values,
          aboutService: values.service === "Other" ? values.aboutService : null,
          phoneCountry,
        };
        const response = await axios.post(
          `${apiUrl}/api/admin/message/submitted`,
          payload
        );
        if (response.data.Status) {
          toast.success("Your request has been submitted successfully.");
        }
      } catch (error) {
        toast.error(error?.response?.data?.Error || "Something went wrong.");
      }
      resetForm();
      setShowAboutService(false);
    },
  });

  const handlePhoneChange = (phone, countryData) => {
    formik.setFieldValue("phoneNumber", phone);
    const cc = countryData?.countryCode?.toLowerCase() || "bd";
    setPhoneCountry(cc);
    formik.setFieldValue("currency", countryToCurrency[cc] || "BDT");
  };

  const getCurrencySymbol = () => {
    const currency = popularCurrencies.find(
      (c) => c.code === formik.values.currency
    );
    return currency?.symbol || "৳";
  };

  const getCurrencyName = () => {
    const currency = popularCurrencies.find(
      (c) => c.code === formik.values.currency
    );
    return currency?.name || "Bangladeshi Taka";
  };

  const handleBudgetChange = (e) => {
    const val = e.target.value.replace(/[^\d.]/g, "");
    formik.setFieldValue("budget", val);
  };

  const handleServiceChange = (e) => {
    const val = e.target.value;
    formik.setFieldValue("service", val);
    setShowAboutService(val === "Other");
    if (val !== "Other") formik.setFieldValue("aboutService", "");
  };

  // PhoneInput style override: all backgrounds white, text black
  const phoneInputStyle = {
    background: "#fff",
    color: "#000",
    borderRadius: "5px",
    border: "1px solid #ddd",
    width: "100%",
  };

  return (
    <>
      <div className="contactUsCenterGradientRoundedPosition">
        <div className="gradientRoundedDiv"></div>
      </div>
      <div className="contactus_input_section">
        <h3 className="text-center">Book a Free Consultation</h3>
        <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
          <input
            type="text"
            id="fullName"
            name="fullName"
            onChange={formik.handleChange}
            value={formik.values.fullName}
            placeholder="Full Name *"
            className="contactus_input_fild"
            required
          />
          <PhoneInput
            country={"bd"}
            value={formik.values.phoneNumber}
            onChange={handlePhoneChange}
            enableSearch={true}
            inputProps={{
              name: "phoneNumber",
              required: true,
              autoFocus: false,
            }}
            className="contactus_input_fild"
          />

          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            placeholder="Work Email"
            className="contactus_input_fild"
          />
          <input
            type="text"
            id="websiteLink"
            name="websiteLink"
            onChange={formik.handleChange}
            value={formik.values.websiteLink}
            placeholder="Page/Website Link"
            className="contactus_input_fild"
          />

          <select
            name="service"
            value={formik.values.service}
            onChange={handleServiceChange}
            className="contactus_input_fild"
            required
          >
            <option value="">Select Service *</option>
            {serviceOptions.map((service, idx) => (
              <option value={service} key={idx}>
                {service}
              </option>
            ))}
          </select>
          {showAboutService && (
            <input
              type="text"
              name="aboutService"
              placeholder="About the service"
              className="contactus_input_fild"
              onChange={formik.handleChange}
              value={formik.values.aboutService}
              required
            />
          )}

          <div style={{ display: "flex", gap: "10px", marginBottom: "1.1rem" }}>
            <div style={{ position: "relative", flex: 1 }}>
              <input
                type="text"
                id="budget"
                name="budget"
                onChange={handleBudgetChange}
                value={formik.values.budget}
                placeholder={`Budget in ${getCurrencyName()}`}
                className="contactus_input_fild"
                style={{ paddingRight: "40px" }}
                autoComplete="off"
              />
              <span
                style={{
                  position: "absolute",
                  right: 14,
                  top: "50%",
                  transform: "translateY(-50%)",
                  fontWeight: 600,
                  color: "#00dbde",
                  fontSize: "1.07rem",
                  pointerEvents: "none",
                }}
              >
                {getCurrencySymbol()}
              </span>
            </div>

            <select
              name="currency"
              value={formik.values.currency}
              onChange={formik.handleChange}
              className="contactus_input_fild"
              style={{ width: "135px" }}
            >
              {popularCurrencies.map((currency) => (
                <option key={currency.code} value={currency.code}>
                  {currency.code}
                </option>
              ))}
            </select>
          </div>

          <textarea
            name="note"
            onChange={formik.handleChange}
            value={formik.values.note}
            placeholder="Note"
            className="contactus_input_fild"
            rows={3}
          />

          <button type="submit" className="meassageSentbtn">
            <span className="pt-1">Submit</span>
            <img
              src="/Images/ContactUsPage/meassageSent.svg"
              alt="Submit Icon"
            />
          </button>
        </form>
      </div>
    </>
  );
};
