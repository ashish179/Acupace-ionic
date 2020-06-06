(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-notifications-notifications-module"],{

/***/ "./node_modules/ngx-device-detector/fesm2015/ngx-device-detector.js":
/*!**************************************************************************!*\
  !*** ./node_modules/ngx-device-detector/fesm2015/ngx-device-detector.js ***!
  \**************************************************************************/
/*! exports provided: BROWSERS, BROWSERS_RE, BROWSER_VERSIONS_RE, BROWSER_VERSIONS_RE_MAP, DEVICES, DEVICES_RE, DeviceDetectorModule, DeviceDetectorService, MOBILES_RE, OS, OS_RE, OS_VERSIONS, OS_VERSIONS_RE, OS_VERSIONS_RE_MAP, ReTree, TABLETS_RE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BROWSERS", function() { return BROWSERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BROWSERS_RE", function() { return BROWSERS_RE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BROWSER_VERSIONS_RE", function() { return BROWSER_VERSIONS_RE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BROWSER_VERSIONS_RE_MAP", function() { return BROWSER_VERSIONS_RE_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEVICES", function() { return DEVICES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEVICES_RE", function() { return DEVICES_RE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceDetectorModule", function() { return DeviceDetectorModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceDetectorService", function() { return DeviceDetectorService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOBILES_RE", function() { return MOBILES_RE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OS", function() { return OS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OS_RE", function() { return OS_RE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OS_VERSIONS", function() { return OS_VERSIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OS_VERSIONS_RE", function() { return OS_VERSIONS_RE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OS_VERSIONS_RE_MAP", function() { return OS_VERSIONS_RE_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReTree", function() { return ReTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLETS_RE", function() { return TABLETS_RE; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");




/**
 * Created by ahsanayaz on 08/11/2016.
 */
const BROWSERS = {
    CHROME: 'Chrome',
    FIREFOX: 'Firefox',
    SAFARI: 'Safari',
    OPERA: 'Opera',
    IE: 'IE',
    MS_EDGE: 'MS-Edge',
    MS_EDGE_CHROMIUM: 'MS-Edge-Chromium',
    FB_MESSANGER: 'FB-Messanger',
    SAMSUNG: 'Samsung',
    UCBROWSER: 'UC-Browser',
    UNKNOWN: 'Unknown'
};
const MOBILES_RE = {
    // tslint:disable-next-line:max-line-length
    HTC: /HTC|HTC.*(Sensation|Evo|Vision|Explorer|6800|8100|8900|A7272|S510e|C110e|Legend|Desire|T8282)|APX515CKT|Qtek9090|APA9292KT|HD_mini|Sensation.*Z710e|PG86100|Z715e|Desire.*(A8181|HD)|ADR6200|ADR6400L|ADR6425|001HT|Inspire 4G|Android.*\bEVO\b|T-Mobile G1|Z520m|Android [0-9.]+; Pixel/,
    NEXUS_PHONE: /Nexus One|Nexus S|Galaxy.*Nexus|Android.*Nexus.*Mobile|Nexus 4|Nexus 5|Nexus 6/,
    DELL: /Dell[;]? (Streak|Aero|Venue|Venue Pro|Flash|Smoke|Mini 3iX)|XCD28|XCD35|\b001DL\b|\b101DL\b|\bGS01\b/,
    MOTOROLA: new RegExp(`Motorola|DROIDX|DROID BIONIC|\\bDroid\\b.*Build|Android.*Xoom|HRI39|MOT-|A1260|A1680|A555|A853|
      A855|A953|A955|A956|Motorola.*ELECTRIFY|Motorola.*i1|i867|i940|MB200|MB300|MB501|MB502|MB508|MB511|
      MB520|MB525|MB526|MB611|MB612|MB632|MB810|MB855|MB860|MB861|MB865|MB870|ME501|ME502|ME511|ME525|ME600|
      ME632|ME722|ME811|ME860|ME863|ME865|MT620|MT710|MT716|MT720|MT810|MT870|MT917|Motorola.*TITANIUM|WX435|
      WX445|XT300|XT301|XT311|XT316|XT317|XT319|XT320|XT390|XT502|XT530|XT531|XT532|XT535|XT603|XT610|XT611|
      XT615|XT681|XT701|XT702|XT711|XT720|XT800|XT806|XT860|XT862|XT875|XT882|XT883|XT894|XT901|XT907|XT909|
      XT910|XT912|XT928|XT926|XT915|XT919|XT925|XT1021|\\bMoto E\\b|XT1068|XT1092|XT1052`),
    SAMSUNG: new RegExp(`\\bSamsung\\b|SM-G950F|SM-G955F|SM-G9250|GT-19300|SGH-I337|BGT-S5230|GT-B2100|GT-B2700|GT-B2710|
      GT-B3210|GT-B3310|GT-B3410|GT-B3730|GT-B3740|GT-B5510|GT-B5512|GT-B5722|GT-B6520|GT-B7300|GT-B7320|
      GT-B7330|GT-B7350|GT-B7510|GT-B7722|GT-B7800|GT-C3010|GT-C3011|GT-C3060|GT-C3200|GT-C3212|GT-C3212I|
      GT-C3262|GT-C3222|GT-C3300|GT-C3300K|GT-C3303|GT-C3303K|GT-C3310|GT-C3322|GT-C3330|GT-C3350|GT-C3500|
      GT-C3510|GT-C3530|GT-C3630|GT-C3780|GT-C5010|GT-C5212|GT-C6620|GT-C6625|GT-C6712|GT-E1050|GT-E1070|
      GT-E1075|GT-E1080|GT-E1081|GT-E1085|GT-E1087|GT-E1100|GT-E1107|GT-E1110|GT-E1120|GT-E1125|GT-E1130|
      GT-E1160|GT-E1170|GT-E1175|GT-E1180|GT-E1182|GT-E1200|GT-E1210|GT-E1225|GT-E1230|GT-E1390|GT-E2100|
      GT-E2120|GT-E2121|GT-E2152|GT-E2220|GT-E2222|GT-E2230|GT-E2232|GT-E2250|GT-E2370|GT-E2550|GT-E2652|
      GT-E3210|GT-E3213|GT-I5500|GT-I5503|GT-I5700|GT-I5800|GT-I5801|GT-I6410|GT-I6420|GT-I7110|GT-I7410|
      GT-I7500|GT-I8000|GT-I8150|GT-I8160|GT-I8190|GT-I8320|GT-I8330|GT-I8350|GT-I8530|GT-I8700|GT-I8703|
      GT-I8910|GT-I9000|GT-I9001|GT-I9003|GT-I9010|GT-I9020|GT-I9023|GT-I9070|GT-I9082|GT-I9100|GT-I9103|
      GT-I9220|GT-I9250|GT-I9300|GT-I9305|GT-I9500|GT-I9505|GT-M3510|GT-M5650|GT-M7500|GT-M7600|GT-M7603|
      GT-M8800|GT-M8910|GT-N7000|GT-S3110|GT-S3310|GT-S3350|GT-S3353|GT-S3370|GT-S3650|GT-S3653|GT-S3770|
      GT-S3850|GT-S5210|GT-S5220|GT-S5229|GT-S5230|GT-S5233|GT-S5250|GT-S5253|GT-S5260|GT-S5263|GT-S5270|
      GT-S5300|GT-S5330|GT-S5350|GT-S5360|GT-S5363|GT-S5369|GT-S5380|GT-S5380D|GT-S5560|GT-S5570|GT-S5600|
      GT-S5603|GT-S5610|GT-S5620|GT-S5660|GT-S5670|GT-S5690|GT-S5750|GT-S5780|GT-S5830|GT-S5839|GT-S6102|
      GT-S6500|GT-S7070|GT-S7200|GT-S7220|GT-S7230|GT-S7233|GT-S7250|GT-S7500|GT-S7530|GT-S7550|GT-S7562|
      GT-S7710|GT-S8000|GT-S8003|GT-S8500|GT-S8530|GT-S8600|SCH-A310|SCH-A530|SCH-A570|SCH-A610|SCH-A630|
      SCH-A650|SCH-A790|SCH-A795|SCH-A850|SCH-A870|SCH-A890|SCH-A930|SCH-A950|SCH-A970|SCH-A990|SCH-I100|
      SCH-I110|SCH-I400|SCH-I405|SCH-I500|SCH-I510|SCH-I515|SCH-I600|SCH-I730|SCH-I760|SCH-I770|SCH-I830|
      SCH-I910|SCH-I920|SCH-I959|SCH-LC11|SCH-N150|SCH-N300|SCH-R100|SCH-R300|SCH-R351|SCH-R400|SCH-R410|
      SCH-T300|SCH-U310|SCH-U320|SCH-U350|SCH-U360|SCH-U365|SCH-U370|SCH-U380|SCH-U410|SCH-U430|SCH-U450|
      SCH-U460|SCH-U470|SCH-U490|SCH-U540|SCH-U550|SCH-U620|SCH-U640|SCH-U650|SCH-U660|SCH-U700|SCH-U740|
      SCH-U750|SCH-U810|SCH-U820|SCH-U900|SCH-U940|SCH-U960|SCS-26UC|SGH-A107|SGH-A117|SGH-A127|SGH-A137|
      SGH-A157|SGH-A167|SGH-A177|SGH-A187|SGH-A197|SGH-A227|SGH-A237|SGH-A257|SGH-A437|SGH-A517|SGH-A597|
      SGH-A637|SGH-A657|SGH-A667|SGH-A687|SGH-A697|SGH-A707|SGH-A717|SGH-A727|SGH-A737|SGH-A747|SGH-A767|
      SGH-A777|SGH-A797|SGH-A817|SGH-A827|SGH-A837|SGH-A847|SGH-A867|SGH-A877|SGH-A887|SGH-A897|SGH-A927|
      SGH-B100|SGH-B130|SGH-B200|SGH-B220|SGH-C100|SGH-C110|SGH-C120|SGH-C130|SGH-C140|SGH-C160|SGH-C170|
      SGH-C180|SGH-C200|SGH-C207|SGH-C210|SGH-C225|SGH-C230|SGH-C417|SGH-C450|SGH-D307|SGH-D347|SGH-D357|
      SGH-D407|SGH-D415|SGH-D780|SGH-D807|SGH-D980|SGH-E105|SGH-E200|SGH-E315|SGH-E316|SGH-E317|SGH-E335|
      SGH-E590|SGH-E635|SGH-E715|SGH-E890|SGH-F300|SGH-F480|SGH-I200|SGH-I300|SGH-I320|SGH-I550|SGH-I577|
      SGH-I600|SGH-I607|SGH-I617|SGH-I627|SGH-I637|SGH-I677|SGH-I700|SGH-I717|SGH-I727|SGH-i747M|SGH-I777|
      SGH-I780|SGH-I827|SGH-I847|SGH-I857|SGH-I896|SGH-I897|SGH-I900|SGH-I907|SGH-I917|SGH-I927|SGH-I937|
      SGH-I997|SGH-J150|SGH-J200|SGH-L170|SGH-L700|SGH-M110|SGH-M150|SGH-M200|SGH-N105|SGH-N500|SGH-N600|
      SGH-N620|SGH-N625|SGH-N700|SGH-N710|SGH-P107|SGH-P207|SGH-P300|SGH-P310|SGH-P520|SGH-P735|SGH-P777|
      SGH-Q105|SGH-R210|SGH-R220|SGH-R225|SGH-S105|SGH-S307|SGH-T109|SGH-T119|SGH-T139|SGH-T209|SGH-T219|
      SGH-T229|SGH-T239|SGH-T249|SGH-T259|SGH-T309|SGH-T319|SGH-T329|SGH-T339|SGH-T349|SGH-T359|SGH-T369|
      SGH-T379|SGH-T409|SGH-T429|SGH-T439|SGH-T459|SGH-T469|SGH-T479|SGH-T499|SGH-T509|SGH-T519|SGH-T539|
      SGH-T559|SGH-T589|SGH-T609|SGH-T619|SGH-T629|SGH-T639|SGH-T659|SGH-T669|SGH-T679|SGH-T709|SGH-T719|
      SGH-T729|SGH-T739|SGH-T746|SGH-T749|SGH-T759|SGH-T769|SGH-T809|SGH-T819|SGH-T839|SGH-T919|SGH-T929|
      SGH-T939|SGH-T959|SGH-T989|SGH-U100|SGH-U200|SGH-U800|SGH-V205|SGH-V206|SGH-X100|SGH-X105|SGH-X120|
      SGH-X140|SGH-X426|SGH-X427|SGH-X475|SGH-X495|SGH-X497|SGH-X507|SGH-X600|SGH-X610|SGH-X620|SGH-X630|
      SGH-X700|SGH-X820|SGH-X890|SGH-Z130|SGH-Z150|SGH-Z170|SGH-ZX10|SGH-ZX20|SHW-M110|SPH-A120|SPH-A400|
      SPH-A420|SPH-A460|SPH-A500|SPH-A560|SPH-A600|SPH-A620|SPH-A660|SPH-A700|SPH-A740|SPH-A760|SPH-A790|
      SPH-A800|SPH-A820|SPH-A840|SPH-A880|SPH-A900|SPH-A940|SPH-A960|SPH-D600|SPH-D700|SPH-D710|SPH-D720|
      SPH-I300|SPH-I325|SPH-I330|SPH-I350|SPH-I500|SPH-I600|SPH-I700|SPH-L700|SPH-M100|SPH-M220|SPH-M240|
      SPH-M300|SPH-M305|SPH-M320|SPH-M330|SPH-M350|SPH-M360|SPH-M370|SPH-M380|SPH-M510|SPH-M540|SPH-M550|
      SPH-M560|SPH-M570|SPH-M580|SPH-M610|SPH-M620|SPH-M630|SPH-M800|SPH-M810|SPH-M850|SPH-M900|SPH-M910|
      SPH-M920|SPH-M930|SPH-N100|SPH-N200|SPH-N240|SPH-N300|SPH-N400|SPH-Z400|SWC-E100|SCH-i909|GT-N7100|
      GT-N7105|SCH-I535|SM-N900A|SM-N900T|SGH-I317|SGH-T999L|GT-S5360B|GT-I8262|GT-S6802|GT-S6312|GT-S6310|GT-S5312|
      GT-S5310|GT-I9105|GT-I8510|GT-S6790N|SM-G7105|SM-N9005|GT-S5301|GT-I9295|GT-I9195|SM-C101|GT-S7392|GT-S7560|
      GT-B7610|GT-I5510|GT-S7582|GT-S7530E|GT-I8750|SM-G9006V|SM-G9008V|SM-G9009D|SM-G900A|SM-G900D|SM-G900F|
      SM-G900H|SM-G900I|SM-G900J|SM-G900K|SM-G900L|SM-G900M|SM-G900P|SM-G900R4|SM-G900S|SM-G900T|SM-G900V|
      SM-G900W8|SHV-E160K|SCH-P709|SCH-P729|SM-T2558|GT-I9205|SM-G9350|SM-J120F|SM-G920F|SM-G920V|SM-G930F|
      SM-N910C|SM-A310F|GT-I9190|SM-J500FN|SM-G903F|SM-J330F`),
    LG: new RegExp(`\\bLG\\b;|LG[- ]?(C800|C900|E400|E610|E900|E-900|F160|F180K|F180L|F180S|730|855|L160|LS740|LS840|LS970|
      LU6200|MS690|MS695|MS770|MS840|MS870|MS910|P500|P700|P705|VM696|AS680|AS695|AX840|C729|E970|GS505|272|
      C395|E739BK|E960|L55C|L75C|LS696|LS860|P769BK|P350|P500|P509|P870|UN272|US730|VS840|VS950|LN272|LN510|
      LS670|LS855|LW690|MN270|MN510|P509|P769|P930|UN200|UN270|UN510|UN610|US670|US740|US760|UX265|UX840|VN271|
      VN530|VS660|VS700|VS740|VS750|VS910|VS920|VS930|VX9200|VX11000|AX840A|LW770|P506|P925|P999|E612|D955|D802|
      MS323|M257)`),
    SONY: /SonyST|SonyLT|SonyEricsson|SonyEricssonLT15iv|LT18i|E10i|LT28h|LT26w|SonyEricssonMT27i|C5303|C6902|C6903|C6906|C6943|D2533/,
    ASUS: /Asus.*Galaxy|PadFone.*Mobile/,
    NOKIA_LUMIA: /Lumia [0-9]{3,4}/,
    MICROMAX: /Micromax.*\b(A210|A92|A88|A72|A111|A110Q|A115|A116|A110|A90S|A26|A51|A35|A54|A25|A27|A89|A68|A65|A57|A90)\b/,
    PALM: /PalmSource|Palm/,
    VERTU: /Vertu|Vertu.*Ltd|Vertu.*Ascent|Vertu.*Ayxta|Vertu.*Constellation(F|Quest)?|Vertu.*Monika|Vertu.*Signature/,
    PANTECH: new RegExp(`PANTECH|IM-A850S|IM-A840S|IM-A830L|IM-A830K|IM-A830S|IM-A820L|IM-A810K|IM-A810S|IM-A800S|IM-T100K|
        IM-A725L|IM-A780L|IM-A775C|IM-A770K|IM-A760S|IM-A750K|IM-A740S|IM-A730S|IM-A720L|IM-A710K|IM-A690L|
        IM-A690S|IM-A650S|IM-A630K|IM-A600S|VEGA PTL21|PT003|P8010|ADR910L|P6030|P6020|P9070|P4100|P9060|P5000|
        CDM8992|TXT8045|ADR8995|IS11PT|P2030|P6010|P8000|PT002|IS06|CDM8999|P9050|PT001|TXT8040|P2020|P9020|
        P2000|P7040|P7000|C790`),
    FLY: /IQ230|IQ444|IQ450|IQ440|IQ442|IQ441|IQ245|IQ256|IQ236|IQ255|IQ235|IQ245|IQ275|IQ240|IQ285|IQ280|IQ270|IQ260|IQ250/,
    WIKO: new RegExp(`KITE 4G|HIGHWAY|GETAWAY|STAIRWAY|DARKSIDE|DARKFULL|DARKNIGHT|DARKMOON|SLIDE|WAX 4G|RAINBOW|BLOOM|
        SUNSET|GOA(?!nna)|LENNY|BARRY|IGGY|OZZY|CINK FIVE|CINK PEAX|CINK PEAX 2|CINK SLIM|CINK SLIM 2|CINK +|
        CINK KING|CINK PEAX|CINK SLIM|SUBLIM`),
    I_MOBILE: /i-mobile (IQ|i-STYLE|idea|ZAA|Hitz)/,
    SIMVALLEY: /\b(SP-80|XT-930|SX-340|XT-930|SX-310|SP-360|SP60|SPT-800|SP-120|SPT-800|SP-140|SPX-5|SPX-8|SP-100|SPX-8|SPX-12)\b/,
    WOLFGANG: /AT-B24D|AT-AS50HD|AT-AS40W|AT-AS55HD|AT-AS45q2|AT-B26D|AT-AS50Q/,
    ALCATEL: /Alcatel/,
    NINTENDO: /Nintendo (3DS|Switch)/,
    AMOI: /Amoi/,
    INQ: /INQ/,
    VITA: /\bVita\b/,
    BLACKBERRY: /\bBlackBerry\b|\bBB10\b|rim[0-9]+/,
    FIREFOX_OS: /\bFirefox-OS\b/,
    IPHONE: /\biPhone\b/,
    iPod: /\biPod\b/,
    ANDROID: /\bAndroid\b/,
    WINDOWS_PHONE: /\bWindows-Phone\b/,
    GENERIC_PHONE: new RegExp(`Tapatalk|PDA;|SAGEM|\\bmmp\\b|pocket|\\bpsp\\b|symbian|Smartphone|smartfon|treo|up.browser|
        up.link|vodafone|\\bwap\\b|nokia|Nokia|Series40|Series60|S60|SonyEricsson|N900|MAUI.*WAP.*Browser`),
};
const TABLETS_RE = {
    iPad: /iPad|iPad.*Mobile/,
    NexusTablet: /Android.*Nexus[\s]+(7|9|10)/,
    GoogleTablet: /Android.*Pixel C/,
    SamsungTablet: new RegExp(`SAMSUNG.*Tablet|Galaxy.*Tab|SC-01C|GT-P1000|GT-P1003|GT-P1010|GT-P3105|GT-P6210|
        GT-P6800|GT-P6810|GT-P7100|GT-P7300|GT-P7310|GT-P7500|GT-P7510|SCH-I800|SCH-I815|SCH-I905|
        SGH-I957|SGH-I987|SGH-T849|SGH-T859|SGH-T869|SPH-P100|GT-P3100|GT-P3108|GT-P3110|GT-P5100|
        GT-P5110|GT-P6200|GT-P7320|GT-P7511|GT-N8000|GT-P8510|SGH-I497|SPH-P500|SGH-T779|SCH-I705|
        SCH-I915|GT-N8013|GT-P3113|GT-P5113|GT-P8110|GT-N8010|GT-N8005|GT-N8020|GT-P1013|GT-P6201|
        GT-P7501|GT-N5100|GT-N5105|GT-N5110|SHV-E140K|SHV-E140L|SHV-E140S|SHV-E150S|SHV-E230K|SHV-E230L|
        SHV-E230S|SHW-M180K|SHW-M180L|SM-T290|SHW-M180S|SHW-M180W|SHW-M300W|SHW-M305W|SHW-M380K|SHW-M380S|SHW-M380W|
        SHW-M430W|SHW-M480K|SHW-M480S|SHW-M480W|SHW-M485W|SHW-M486W|SHW-M500W|GT-I9228|SCH-P739|SCH-I925|
        GT-I9200|GT-P5200|GT-P5210|GT-P5210X|SM-T311|SM-T310|SM-T310X|SM-T210|SM-T210R|SM-T211|SM-P600|
        SM-P601|SM-P605|SM-P900|SM-P901|SM-T217|SM-T217A|SM-T217S|SM-P6000|SM-T3100|SGH-I467|XE500|SM-T110|
        GT-P5220|GT-I9200X|GT-N5110X|GT-N5120|SM-P905|SM-T111|SM-T2105|SM-T315|SM-T320|SM-T320X|SM-T321|
        SM-T520|SM-T525|SM-T530NU|SM-T230NU|SM-T330NU|SM-T900|XE500T1C|SM-P605V|SM-P905V|SM-T337V|SM-T537V|
        SM-T707V|SM-T807V|SM-P600X|SM-P900X|SM-T210X|SM-T230|SM-T230X|SM-T325|GT-P7503|SM-T531|SM-T330|
        SM-T530|SM-T705|SM-T705C|SM-T535|SM-T331|SM-T800|SM-T700|SM-T537|SM-T807|SM-P907A|SM-T337A|SM-T537A|
        SM-T707A|SM-T807A|SM-T237|SM-T807P|SM-P607T|SM-T217T|SM-T337T|SM-T807T|SM-T116NQ|SM-T116BU|SM-P550|
        SM-T350|SM-T550|SM-T9000|SM-P9000|SM-T705Y|SM-T805|GT-P3113|SM-T710|SM-T810|SM-T815|SM-T360|SM-T533|
        SM-T113|SM-T335|SM-T715|SM-T560|SM-T670|SM-T677|SM-T377|SM-T567|SM-T357T|SM-T555|SM-T561|SM-T713|
        SM-T719|SM-T813|SM-T819|SM-T580|SM-T590|SM-T355Y?|SM-T280|SM-T817A|SM-T820|SM-W700|SM-P580|SM-T587|SM-P350|
        SM-P555M|SM-P355M|SM-T113NU|SM-T815Y|SM-T585|SM-T285|SM-T825|SM-W708|SM-T835`),
    Kindle: new RegExp(`Kindle|Silk.*Accelerated|Android.*\\b(KFOT|KFTT|KFJWI|KFJWA|KFOTE|KFSOWI|KFTHWI|KFTHWA|KFAPWI|
        KFAPWA|WFJWAE|KFSAWA|KFSAWI|KFASWI|KFARWI|KFFOWI|KFGIWI|KFMEWI)\\b|Android.*Silk\/[0-9.]+ like Chrome\
        /[0-9.]+ (?!Mobile)`),
    SurfaceTablet: /Windows NT [0-9.]+; ARM;.*(Tablet|ARMBJS)/,
    HPTablet: /HP Slate (7|8|10)|HP ElitePad 900|hp-tablet|EliteBook.*Touch|HP 8|Slate 21|HP SlateBook 10/,
    AsusTablet: new RegExp(`^.*PadFone((?!Mobile).)*$|Transformer|TF101|TF101G|TF300T|TF300TG|TF300TL|TF700T|TF700KL|
        TF701T|TF810C|ME171|ME301T|ME302C|ME371MG|ME370T|ME372MG|ME172V|ME173X|ME400C|
        Slider SL101|\\bK00F\\b|\\bK00C\\b|\\bK00E\\b|\\bK00L\\b|TX201LA|ME176C|ME102A|\\bM80TA\\b|ME372CL|
        ME560CG|ME372CG|ME302KL| K010 | K011 | K017 | K01E |ME572C|ME103K|ME170C|ME171C|\\bME70C\\b|ME581C|
        ME581CL|ME8510C|ME181C|P01Y|PO1MA|P01Z|\\bP027\\b|\\bP024\\b|\\bP00C\\b`),
    BlackBerryTablet: /PlayBook|RIM Tablet/,
    HTCtablet: /HTC_Flyer_P512|HTC Flyer|HTC Jetstream|HTC-P715a|HTC EVO View 4G|PG41200|PG09410/,
    MotorolaTablet: /xoom|sholest|MZ615|MZ605|MZ505|MZ601|MZ602|MZ603|MZ604|MZ606|MZ607|MZ608|MZ609|MZ615|MZ616|MZ617/,
    NookTablet: /Android.*Nook|NookColor|nook browser|BNRV200|BNRV200A|BNTV250|BNTV250A|BNTV400|BNTV600|LogicPD Zoom2/,
    AcerTablet: new RegExp(`Android.*; \\b(A100|A101|A110|A200|A210|A211|A500|A501|A510|A511|A700|A701|W500|W500P|W501|
        W501P|W510|W511|W700|G100|G100W|B1-A71|B1-710|B1-711|A1-810|A1-811|A1-830)\\b|W3-810|\\bA3-A10\\b|\\bA3-A11\\b|
        \\bA3-A20\\b|\\bA3-A30`),
    ToshibaTablet: /Android.*(AT100|AT105|AT200|AT205|AT270|AT275|AT300|AT305|AT1S5|AT500|AT570|AT700|AT830)|TOSHIBA.*FOLIO/,
    LGTablet: /\bL-06C|LG-V909|LG-V900|LG-V700|LG-V510|LG-V500|LG-V410|LG-V400|LG-VK810\b/,
    FujitsuTablet: /Android.*\b(F-01D|F-02F|F-05E|F-10D|M532|Q572)\b/,
    PrestigioTablet: new RegExp(`PMP3170B|PMP3270B|PMP3470B|PMP7170B|PMP3370B|PMP3570C|PMP5870C|PMP3670B|PMP5570C|
        PMP5770D|PMP3970B|PMP3870C|PMP5580C|PMP5880D|PMP5780D|PMP5588C|PMP7280C|PMP7280C3G|PMP7280|PMP7880D|
        PMP5597D|PMP5597|PMP7100D|PER3464|PER3274|PER3574|PER3884|PER5274|PER5474|PMP5097CPRO|PMP5097|PMP7380D|
        PMP5297C|PMP5297C_QUAD|PMP812E|PMP812E3G|PMP812F|PMP810E|PMP880TD|PMT3017|PMT3037|PMT3047|PMT3057|PMT7008|
        PMT5887|PMT5001|PMT5002`),
    LenovoTablet: new RegExp(`Lenovo TAB|Idea(Tab|Pad)( A1|A10| K1|)|ThinkPad([ ]+)?Tablet|YT3-850M|YT3-X90L|YT3-X90F|
        YT3-X90X|Lenovo.*(S2109|S2110|S5000|S6000|K3011|A3000|A3500|A1000|A2107|A2109|A1107|A5500|A7600|B6000|
        B8000|B8080)(-|)(FL|F|HV|H|)|TB-X103F|TB-X304F|TB-X304L|TB-X704F|TB-8703F|Tab2A7-10F|TB2-X30L`),
    DellTablet: /Venue 11|Venue 8|Venue 7|Dell Streak 10|Dell Streak 7/,
    YarvikTablet: new RegExp(`Android.*\\b(TAB210|TAB211|TAB224|TAB250|TAB260|TAB264|TAB310|TAB360|TAB364|TAB410|TAB411|
        TAB420|TAB424|TAB450|TAB460|TAB461|TAB464|TAB465|TAB467|TAB468|TAB07-100|TAB07-101|TAB07-150|TAB07-151|
        TAB07-152|TAB07-200|TAB07-201-3G|TAB07-210|TAB07-211|TAB07-212|TAB07-214|TAB07-220|TAB07-400|TAB07-485|
        TAB08-150|TAB08-200|TAB08-201-3G|TAB08-201-30|TAB09-100|TAB09-211|TAB09-410|TAB10-150|TAB10-201|TAB10-211|
        TAB10-400|TAB10-410|TAB13-201|TAB274EUK|TAB275EUK|TAB374EUK|TAB462EUK|TAB474EUK|TAB9-200)\\b`),
    MedionTablet: /Android.*\bOYO\b|LIFE.*(P9212|P9514|P9516|S9512)|LIFETAB/,
    ArnovaTablet: /97G4|AN10G2|AN7bG3|AN7fG3|AN8G3|AN8cG3|AN7G3|AN9G3|AN7dG3|AN7dG3ST|AN7dG3ChildPad|AN10bG3|AN10bG3DT|AN9G2/,
    IntensoTablet: /INM8002KP|INM1010FP|INM805ND|Intenso Tab|TAB1004/,
    IRUTablet: /M702pro/,
    MegafonTablet: /MegaFon V9|\bZTE V9\b|Android.*\bMT7A\b/,
    EbodaTablet: /E-Boda (Supreme|Impresspeed|Izzycomm|Essential)/,
    AllViewTablet: /Allview.*(Viva|Alldro|City|Speed|All TV|Frenzy|Quasar|Shine|TX1|AX1|AX2)/,
    ArchosTablet: new RegExp(`\\b(101G9|80G9|A101IT)\\b|Qilive 97R|Archos5|\\bARCHOS (70|79|80|90|97|101|FAMILYPAD|)(b|c|)(G10|
         Cobalt| TITANIUM(HD|)| Xenon| Neon|XSK| 2| XS 2| PLATINUM| CARBON|GAMEPAD)\\b`),
    AinolTablet: /NOVO7|NOVO8|NOVO10|Novo7Aurora|Novo7Basic|NOVO7PALADIN|novo9-Spark/,
    NokiaLumiaTablet: /Lumia 2520/,
    SonyTablet: new RegExp(`Sony.*Tablet|Xperia Tablet|Sony Tablet S|SO-03E|SGPT12|SGPT13|SGPT114|SGPT121|SGPT122|SGPT123|
        SGPT111|SGPT112|SGPT113|SGPT131|SGPT132|SGPT133|SGPT211|SGPT212|SGPT213|SGP311|SGP312|SGP321|EBRD1101|
        EBRD1102|EBRD1201|SGP351|SGP341|SGP511|SGP512|SGP521|SGP541|SGP551|SGP621|SGP641|SGP612|SOT31|SGP771|SGP611|
        SGP612|SGP712`),
    PhilipsTablet: /\b(PI2010|PI3000|PI3100|PI3105|PI3110|PI3205|PI3210|PI3900|PI4010|PI7000|PI7100)\b/,
    CubeTablet: /Android.*(K8GT|U9GT|U10GT|U16GT|U17GT|U18GT|U19GT|U20GT|U23GT|U30GT)|CUBE U8GT/,
    CobyTablet: new RegExp(`MID1042|MID1045|MID1125|MID1126|MID7012|MID7014|MID7015|MID7034|MID7035|MID7036|MID7042|MID7048|
        MID7127|MID8042|MID8048|MID8127|MID9042|MID9740|MID9742|MID7022|MID7010`),
    MIDTablet: new RegExp(`M9701|M9000|M9100|M806|M1052|M806|T703|MID701|MID713|MID710|MID727|MID760|MID830|MID728|MID933|
        MID125|MID810|MID732|MID120|MID930|MID800|MID731|MID900|MID100|MID820|MID735|MID980|MID130|MID833|MID737|
        MID960|MID135|MID860|MID736|MID140|MID930|MID835|MID733|MID4X10`),
    MSITablet: new RegExp(`MSI \\b(Primo 73K|Primo 73L|Primo 81L|Primo 77|Primo 93|Primo 75|Primo 76|Primo 73|Primo 81|
        Primo 91|Primo 90|Enjoy 71|Enjoy 7|Enjoy 10)\\b`),
    SMiTTablet: /Android.*(\bMID\b|MID-560|MTV-T1200|MTV-PND531|MTV-P1101|MTV-PND530)/,
    RockChipTablet: /Android.*(RK2818|RK2808A|RK2918|RK3066)|RK2738|RK2808A/,
    FlyTablet: /IQ310|Fly Vision/,
    bqTablet: new RegExp(`Android.*(bq)?.*(Elcano|Curie|Edison|Maxwell|Kepler|Pascal|Tesla|Hypatia|Platon|Newton|
        Livingstone|Cervantes|Avant|Aquaris ([E|M]10|M8))|Maxwell.*Lite|Maxwell.*Plus`),
    HuaweiTablet: new RegExp(`MediaPad|MediaPad 7 Youth|MediaPad T3 10|IDEOS S7|S7-201c|S7-202u|S7-101|S7-103|S7-104|S7-105|S7-106|
        S7-201|S7-Slim|M2-A01L|BAH-L09|BAH-W09`),
    NecTablet: /\bN-06D|\bN-08D/,
    PantechTablet: /Pantech.*P4100/,
    BronchoTablet: /Broncho.*(N701|N708|N802|a710)/,
    VersusTablet: /TOUCHPAD.*[78910]|\bTOUCHTAB\b/,
    ZyncTablet: /z1000|Z99 2G|z99|z930|z999|z990|z909|Z919|z900/,
    PositivoTablet: /TB07STA|TB10STA|TB07FTA|TB10FTA/,
    NabiTablet: /Android.*\bNabi/,
    KoboTablet: /Kobo Touch|\bK080\b|\bVox\b Build|\bArc\b Build/,
    DanewTablet: /DSlide.*\b(700|701R|702|703R|704|802|970|971|972|973|974|1010|1012)\b/,
    TexetTablet: new RegExp(`NaviPad|TB-772A|TM-7045|TM-7055|TM-9750|TM-7016|TM-7024|TM-7026|TM-7041|TM-7043|TM-7047|
        TM-8041|TM-9741|TM-9747|TM-9748|TM-9751|TM-7022|TM-7021|TM-7020|TM-7011|TM-7010|TM-7023|TM-7025|
        TM-7037W|TM-7038W|TM-7027W|TM-9720|TM-9725|TM-9737W|TM-1020|TM-9738W|TM-9740|TM-9743W|TB-807A|TB-771A|
        TB-727A|TB-725A|TB-719A|TB-823A|TB-805A|TB-723A|TB-715A|TB-707A|TB-705A|TB-709A|TB-711A|TB-890HD|
        TB-880HD|TB-790HD|TB-780HD|TB-770HD|TB-721HD|TB-710HD|TB-434HD|TB-860HD|TB-840HD|TB-760HD|TB-750HD|
        TB-740HD|TB-730HD|TB-722HD|TB-720HD|TB-700HD|TB-500HD|TB-470HD|TB-431HD|TB-430HD|TB-506|TB-504|TB-446|
        TB-436|TB-416|TB-146SE|TB-126SE`),
    PlaystationTablet: /Playstation.*(Portable|Vita)/,
    TrekstorTablet: /ST10416-1|VT10416-1|ST70408-1|ST702xx-1|ST702xx-2|ST80208|ST97216|ST70104-2|VT10416-2|ST10216-2A|SurfTab/,
    PyleAudioTablet: /\b(PTBL10CEU|PTBL10C|PTBL72BC|PTBL72BCEU|PTBL7CEU|PTBL7C|PTBL92BC|PTBL92BCEU|PTBL9CEU|PTBL9CUK|PTBL9C)\b/,
    AdvanTablet: new RegExp(`Android.* \\b(E3A|T3X|T5C|T5B|T3E|T3C|T3B|T1J|T1F|T2A|T1H|T1i|E1C|T1-E|T5-A|T4|E1-B|T2Ci|
        T1-B|T1-D|O1-A|E1-A|T1-A|T3A|T4i)\\b`),
    DanyTechTablet: `Genius Tab G3|Genius Tab S2|Genius Tab Q3|Genius Tab G4|Genius Tab Q4|Genius Tab G-II|
        Genius TAB GII|Genius TAB GIII|Genius Tab S1`,
    GalapadTablet: /Android.*\bG1\b(?!\))/,
    MicromaxTablet: /Funbook|Micromax.*\b(P250|P560|P360|P362|P600|P300|P350|P500|P275)\b/,
    KarbonnTablet: /Android.*\b(A39|A37|A34|ST8|ST10|ST7|Smart Tab3|Smart Tab2)\b/,
    AllFineTablet: /Fine7 Genius|Fine7 Shine|Fine7 Air|Fine8 Style|Fine9 More|Fine10 Joy|Fine11 Wide/,
    PROSCANTablet: new RegExp(`\\b(PEM63|PLT1023G|PLT1041|PLT1044|PLT1044G|PLT1091|PLT4311|PLT4311PL|PLT4315|PLT7030|
        PLT7033|PLT7033D|PLT7035|PLT7035D|PLT7044K|PLT7045K|PLT7045KB|PLT7071KG|PLT7072|PLT7223G|PLT7225G|
        PLT7777G|PLT7810K|PLT7849G|PLT7851G|PLT7852G|PLT8015|PLT8031|PLT8034|PLT8036|PLT8080K|PLT8082|PLT8088|
        PLT8223G|PLT8234G|PLT8235G|PLT8816K|PLT9011|PLT9045K|PLT9233G|PLT9735|PLT9760G|PLT9770G)\\b`),
    YONESTablet: /BQ1078|BC1003|BC1077|RK9702|BC9730|BC9001|IT9001|BC7008|BC7010|BC708|BC728|BC7012|BC7030|BC7027|BC7026/,
    ChangJiaTablet: new RegExp(`TPC7102|TPC7103|TPC7105|TPC7106|TPC7107|TPC7201|TPC7203|TPC7205|TPC7210|TPC7708|TPC7709|
        TPC7712|TPC7110|TPC8101|TPC8103|TPC8105|TPC8106|TPC8203|TPC8205|TPC8503|TPC9106|TPC9701|TPC97101|TPC97103|
        TPC97105|TPC97106|TPC97111|TPC97113|TPC97203|TPC97603|TPC97809|TPC97205|TPC10101|TPC10103|TPC10106|
        TPC10111|TPC10203|TPC10205|TPC10503`),
    GUTablet: /TX-A1301|TX-M9002|Q702|kf026/,
    PointOfViewTablet: new RegExp(`TAB-P506|TAB-navi-7-3G-M|TAB-P517|TAB-P-527|TAB-P701|TAB-P703|TAB-P721|TAB-P731N|
        TAB-P741|TAB-P825|TAB-P905|TAB-P925|TAB-PR945|TAB-PL1015|TAB-P1025|TAB-PI1045|TAB-P1325|TAB-PROTAB[0-9]+|
        TAB-PROTAB25|TAB-PROTAB26|TAB-PROTAB27|TAB-PROTAB26XL|TAB-PROTAB2-IPS9|TAB-PROTAB30-IPS9|TAB-PROTAB25XXL|
        TAB-PROTAB26-IPS10|TAB-PROTAB30-IPS10`),
    OvermaxTablet: new RegExp(`OV-(SteelCore|NewBase|Basecore|Baseone|Exellen|Quattor|EduTab|Solution|ACTION|BasicTab|TeddyTab|
        MagicTab|Stream|TB-08|TB-09)|Qualcore 1027`),
    HCLTablet: /HCL.*Tablet|Connect-3G-2.0|Connect-2G-2.0|ME Tablet U1|ME Tablet U2|ME Tablet G1|ME Tablet X1|ME Tablet Y2|ME Tablet Sync/,
    DPSTablet: /DPS Dream 9|DPS Dual 7/,
    VistureTablet: /V97 HD|i75 3G|Visture V4( HD)?|Visture V5( HD)?|Visture V10/,
    CrestaTablet: /CTP(-)?810|CTP(-)?818|CTP(-)?828|CTP(-)?838|CTP(-)?888|CTP(-)?978|CTP(-)?980|CTP(-)?987|CTP(-)?988|CTP(-)?989/,
    MediatekTablet: /\bMT8125|MT8389|MT8135|MT8377\b/,
    ConcordeTablet: /Concorde([ ]+)?Tab|ConCorde ReadMan/,
    GoCleverTablet: new RegExp(`GOCLEVER TAB|A7GOCLEVER|M1042|M7841|M742|R1042BK|R1041|TAB A975|TAB A7842|TAB A741|TAB A741L|TAB M723G|
        TAB M721|TAB A1021|TAB I921|TAB R721|TAB I720|TAB T76|TAB R70|TAB R76.2|TAB R106|TAB R83.2|TAB M813G|TAB I721|
        GCTA722|TAB I70|TAB I71|TAB S73|TAB R73|TAB R74|TAB R93|TAB R75|TAB R76.1|TAB A73|TAB A93|TAB A93.2|TAB T72|
        TAB R83|TAB R974|TAB R973|TAB A101|TAB A103|TAB A104|TAB A104.2|R105BK|M713G|A972BK|TAB A971|TAB R974.2|
        TAB R104|TAB R83.3|TAB A1042`),
    ModecomTablet: new RegExp(`FreeTAB 9000|FreeTAB 7.4|FreeTAB 7004|FreeTAB 7800|FreeTAB 2096|FreeTAB 7.5|FreeTAB 1014|
        FreeTAB 1001 |FreeTAB 8001|FreeTAB 9706|FreeTAB 9702|FreeTAB 7003|FreeTAB 7002|FreeTAB 1002|FreeTAB 7801|
        FreeTAB 1331|FreeTAB 1004|FreeTAB 8002|FreeTAB 8014|FreeTAB 9704|FreeTAB 1003`),
    VoninoTablet: new RegExp(`\\b(Argus[ _]?S|Diamond[ _]?79HD|Emerald[ _]?78E|Luna[ _]?70C|Onyx[ _]?S|Onyx[ _]?Z|
        Orin[ _]?HD|Orin[ _]?S|Otis[ _]?S|SpeedStar[ _]?S|Magnet[ _]?M9|Primus[ _]?94[ _]?3G|Primus[ _]?94HD|
        Primus[ _]?QS|Android.*\\bQ8\\b|Sirius[ _]?EVO[ _]?QS|Sirius[ _]?QS|Spirit[ _]?S)\\b`),
    ECSTablet: /V07OT2|TM105A|S10OT1|TR10CS1/,
    StorexTablet: /eZee[_']?(Tab|Go)[0-9]+|TabLC7|Looney Tunes Tab/,
    VodafoneTablet: /SmartTab([ ]+)?[0-9]+|SmartTabII10|SmartTabII7|VF-1497/,
    EssentielBTablet: /Smart[ ']?TAB[ ]+?[0-9]+|Family[ ']?TAB2/,
    RossMoorTablet: /RM-790|RM-997|RMD-878G|RMD-974R|RMT-705A|RMT-701|RME-601|RMT-501|RMT-711/,
    iMobileTablet: /i-mobile i-note/,
    TolinoTablet: /tolino tab [0-9.]+|tolino shine/,
    AudioSonicTablet: /\bC-22Q|T7-QC|T-17B|T-17P\b/,
    AMPETablet: /Android.* A78 /,
    SkkTablet: /Android.* (SKYPAD|PHOENIX|CYCLOPS)/,
    TecnoTablet: /TECNO P9|TECNO DP8D/,
    JXDTablet: new RegExp(`Android.* \\b(F3000|A3300|JXD5000|JXD3000|JXD2000|JXD300B|JXD300|S5800|S7800|S602b|S5110b|S7300|
        S5300|S602|S603|S5100|S5110|S601|S7100a|P3000F|P3000s|P101|P200s|P1000m|P200m|P9100|P1000s|S6600b|S908|
        P1000|P300|S18|S6600|S9100)\\b`),
    iJoyTablet: new RegExp(`Tablet (Spirit 7|Essentia|Galatea|Fusion|Onix 7|Landa|Titan|Scooby|Deox|Stella|Themis|Argon|
        Unique 7|Sygnus|Hexen|Finity 7|Cream|Cream X2|Jade|Neon 7|Neron 7|Kandy|Scape|Saphyr 7|Rebel|Biox|Rebel|
        Rebel 8GB|Myst|Draco 7|Myst|Tab7-004|Myst|Tadeo Jones|Tablet Boing|Arrow|Draco Dual Cam|Aurix|Mint|Amity|
        Revolution|Finity 9|Neon 9|T9w|Amity 4GB Dual Cam|Stone 4GB|Stone 8GB|Andromeda|Silken|X2|Andromeda II|
        Halley|Flame|Saphyr 9,7|Touch 8|Planet|Triton|Unique 10|Hexen 10|Memphis 4GB|Memphis 8GB|Onix 10)`),
    FX2Tablet: /FX2 PAD7|FX2 PAD10/,
    XoroTablet: new RegExp(`KidsPAD 701|PAD[ ]?712|PAD[ ]?714|PAD[ ]?716|PAD[ ]?717|PAD[ ]?718|PAD[ ]?720|PAD[ ]?721|
        PAD[ ]?722|PAD[ ]?790|PAD[ ]?792|PAD[ ]?900|PAD[ ]?9715D|PAD[ ]?9716DR|PAD[ ]?9718DR|PAD[ ]?9719QR|
        PAD[ ]?9720QR|TelePAD1030|Telepad1032|TelePAD730|TelePAD731|TelePAD732|TelePAD735Q|TelePAD830|TelePAD9730|
        TelePAD795|MegaPAD 1331|MegaPAD 1851|MegaPAD 2151`),
    ViewsonicTablet: /ViewPad 10pi|ViewPad 10e|ViewPad 10s|ViewPad E72|ViewPad7|ViewPad E100|ViewPad 7e|ViewSonic VB733|VB100a/,
    VerizonTablet: /QTAQZ3|QTAIR7|QTAQTZ3|QTASUN1|QTASUN2|QTAXIA1/,
    OdysTablet: /LOOX|XENO10|ODYS[ -](Space|EVO|Xpress|NOON)|\bXELIO\b|Xelio10Pro|XELIO7PHONETAB|XELIO10EXTREME|XELIOPT2|NEO_QUAD10/,
    CaptivaTablet: /CAPTIVA PAD/,
    IconbitTablet: new RegExp(`NetTAB|NT-3702|NT-3702S|NT-3702S|NT-3603P|NT-3603P|NT-0704S|NT-0704S|NT-3805C|NT-3805C|
        NT-0806C|NT-0806C|NT-0909T|NT-0909T|NT-0907S|NT-0907S|NT-0902S|NT-0902S`),
    TeclastTablet: new RegExp(`T98 4G|\\bP80\\b|\\bX90HD\\b|X98 Air|X98 Air 3G|\\bX89\\b|P80 3G|\\bX80h\\b|P98 Air|
        \\bX89HD\\b|P98 3G|\\bP90HD\\b|P89 3G|X98 3G|\\bP70h\\b|P79HD 3G|G18d 3G|\\bP79HD\\b|\\bP89s\\b|\\bA88\\b|
        \\bP10HD\\b|\\bP19HD\\b|G18 3G|\\bP78HD\\b|\\bA78\\b|\\bP75\\b|G17s 3G|G17h 3G|\\bP85t\\b|\\bP90\\b|
        \\bP11\\b|\\bP98t\\b|\\bP98HD\\b|\\bG18d\\b|\\bP85s\\b|\\bP11HD\\b|\\bP88s\\b|\\bA80HD\\b|\\bA80se\\b|
        \\bA10h\\b|\\bP89\\b|\\bP78s\\b|\\bG18\\b|\\bP85\\b|\\bA70h\\b|\\bA70\\b|\\bG17\\b|\\bP18\\b|\\bA80s\\b|
        \\bA11s\\b|\\bP88HD\\b|\\bA80h\\b|\\bP76s\\b|\\bP76h\\b|\\bP98\\b|\\bA10HD\\b|\\bP78\\b|\\bP88\\b|\\bA11\\b|
        \\bA10t\\b|\\bP76a\\b|\\bP76t\\b|\\bP76e\\b|\\bP85HD\\b|\\bP85a\\b|\\bP86\\b|\\bP75HD\\b|\\bP76v\\b|\\bA12\\b|
        \\bP75a\\b|\\bA15\\b|\\bP76Ti\\b|\\bP81HD\\b|\\bA10\\b|\\bT760VE\\b|\\bT720HD\\b|\\bP76\\b|\\bP73\\b|\\bP71\\b|
        \\bP72\\b|\\bT720SE\\b|\\bC520Ti\\b|\\bT760\\b|\\bT720VE\\b|T720-3GE|T720-WiFi`),
    OndaTablet: new RegExp(`\\b(V975i|Vi30|VX530|V701|Vi60|V701s|Vi50|V801s|V719|Vx610w|VX610W|V819i|Vi10|VX580W|Vi10|
        V711s|V813|V811|V820w|V820|Vi20|V711|VI30W|V712|V891w|V972|V819w|V820w|Vi60|V820w|V711|V813s|V801|V819|
        V975s|V801|V819|V819|V818|V811|V712|V975m|V101w|V961w|V812|V818|V971|V971s|V919|V989|V116w|V102w|V973|
        Vi40)\\b[\s]+|V10 \\b4G\\b`),
    JaytechTablet: /TPC-PA762/,
    BlaupunktTablet: /Endeavour 800NG|Endeavour 1010/,
    DigmaTablet: /\b(iDx10|iDx9|iDx8|iDx7|iDxD7|iDxD8|iDsQ8|iDsQ7|iDsQ8|iDsD10|iDnD7|3TS804H|iDsQ11|iDj7|iDs10)\b/,
    EvolioTablet: /ARIA_Mini_wifi|Aria[ _]Mini|Evolio X10|Evolio X7|Evolio X8|\bEvotab\b|\bNeura\b/,
    LavaTablet: /QPAD E704|\bIvoryS\b|E-TAB IVORY|\bE-TAB\b/,
    AocTablet: /MW0811|MW0812|MW0922|MTK8382|MW1031|MW0831|MW0821|MW0931|MW0712/,
    MpmanTablet: new RegExp(`MP11 OCTA|MP10 OCTA|MPQC1114|MPQC1004|MPQC994|MPQC974|MPQC973|MPQC804|MPQC784|MPQC780|
        \\bMPG7\\b|MPDCG75|MPDCG71|MPDC1006|MP101DC|MPDC9000|MPDC905|MPDC706HD|MPDC706|MPDC705|MPDC110|
        MPDC100|MPDC99|MPDC97|MPDC88|MPDC8|MPDC77|MP709|MID701|MID711|MID170|MPDC703|MPQC1010`),
    CelkonTablet: /CT695|CT888|CT[\s]?910|CT7 Tab|CT9 Tab|CT3 Tab|CT2 Tab|CT1 Tab|C820|C720|\bCT-1\b/,
    WolderTablet: new RegExp(`miTab \\b(DIAMOND|SPACE|BROOKLYN|NEO|FLY|MANHATTAN|FUNK|EVOLUTION|SKY|GOCAR|IRON|GENIUS|
        POP|MINT|EPSILON|BROADWAY|JUMP|HOP|LEGEND|NEW AGE|LINE|ADVANCE|FEEL|FOLLOW|LIKE|LINK|LIVE|THINK|
        FREEDOM|CHICAGO|CLEVELAND|BALTIMORE-GH|IOWA|BOSTON|SEATTLE|PHOENIX|DALLAS|IN 101|MasterChef)\\b`),
    MediacomTablet: 'M-MPI10C3G|M-SP10EG|M-SP10EGP|M-SP10HXAH|M-SP7HXAH|M-SP10HXBH|M-SP8HXAH|M-SP8MXA',
    MiTablet: /\bMI PAD\b|\bHM NOTE 1W\b/,
    NibiruTablet: /Nibiru M1|Nibiru Jupiter One/,
    NexoTablet: /NEXO NOVA|NEXO 10|NEXO AVIO|NEXO FREE|NEXO GO|NEXO EVO|NEXO 3G|NEXO SMART|NEXO KIDDO|NEXO MOBI/,
    LeaderTablet: new RegExp(`TBLT10Q|TBLT10I|TBL-10WDKB|TBL-10WDKBO2013|TBL-W230V2|TBL-W450|TBL-W500|SV572|TBLT7I|
        TBA-AC7-8G|TBLT79|TBL-8W16|TBL-10W32|TBL-10WKB|TBL-W100`),
    UbislateTablet: /UbiSlate[\s]?7C/,
    PocketBookTablet: /Pocketbook/,
    KocasoTablet: /\b(TB-1207)\b/,
    HisenseTablet: /\b(F5281|E2371)\b/,
    Hudl: /Hudl HT7S3|Hudl 2/,
    TelstraTablet: /T-Hub2/,
    GenericTablet: new RegExp(`Android.*\\b97D\\b|Tablet(?!.*PC)|BNTV250A|MID-WCDMA|LogicPD Zoom2|\\bA7EB\\b|CatNova8|
        A1_07|CT704|CT1002|\\bM721\\b|rk30sdk|\\bEVOTAB\\b|M758A|ET904|ALUMIUM10|Smartfren Tab|Endeavour 1010|
        Tablet-PC-4|Tagi Tab|\\bM6pro\\b|CT1020W|arc 10HD|\\bTP750\\b|\\bQTAQZ3\\b|WVT101|TM1088|KT107`),
};
const DEVICES = {
    BLACKBERRY: 'Blackberry',
    FIREFOX_OS: 'Firefox-OS',
    CHROME_BOOK: 'Chrome-Book',
    WINDOWS_PHONE: 'Windows-Phone',
    VITA: 'Vita',
    PS4: 'PS4',
    CHROMECAST: 'Chromecast',
    APPLE_TV: 'Apple-TV',
    GOOGLE_TV: 'Google-TV',
    ANDROID: 'Android',
    Tesla: 'Tesla',
    iPad: 'iPad',
    IPHONE: 'iPhone',
    iPod: 'iPod',
    UNKNOWN: 'Unknown',
    HTC: 'HTC',
    NEXUS_PHONE: 'Nexus Phone',
    NexusTablet: 'Nexus Tablet',
    DELL: 'Dell',
    MOTOROLA: 'Motorola',
    SAMSUNG: 'Samsung',
    LG: 'LG',
    SONY: 'Sony',
    ASUS: 'Asus',
    NOKIA_LUMIA: 'Nokia Lumia',
    MICROMAX: 'Micromax',
    PALM: 'Palm',
    VERTU: 'Vertu',
    PANTECH: 'PANTECH',
    FLY: 'Fly',
    WIKO: `WIKO`,
    I_MOBILE: 'i-mobile',
    SIMVALLEY: 'Simvalley',
    WOLFGANG: 'Wolfgang',
    ALCATEL: 'Alcatel',
    NINTENDO: 'Nintendo',
    AMOI: 'Amoi',
    INQ: 'INQ',
    GENERIC_PHONE: 'Generic Phone',
};
const OS = {
    WINDOWS: 'Windows',
    MAC: 'Mac',
    IOS: 'iOS',
    ANDROID: 'Android',
    LINUX: 'Linux',
    UNIX: 'Unix',
    FIREFOX_OS: 'Firefox-OS',
    CHROME_OS: 'Chrome-OS',
    WINDOWS_PHONE: 'Windows-Phone',
    UNKNOWN: 'Unknown'
};
const OS_VERSIONS = {
    WINDOWS_3_11: 'windows-3-11',
    WINDOWS_95: 'windows-95',
    WINDOWS_ME: 'windows-me',
    WINDOWS_98: 'windows-98',
    WINDOWS_CE: 'windows-ce',
    WINDOWS_2000: 'windows-2000',
    WINDOWS_XP: 'windows-xp',
    WINDOWS_SERVER_2003: 'windows-server-2003',
    WINDOWS_VISTA: 'windows-vista',
    WINDOWS_7: 'windows-7',
    WINDOWS_8_1: 'windows-8-1',
    WINDOWS_8: 'windows-8',
    WINDOWS_10: 'windows-10',
    WINDOWS_PHONE_7_5: 'windows-phone-7-5',
    WINDOWS_PHONE_8_1: 'windows-phone-8-1',
    WINDOWS_PHONE_10: 'windows-phone-10',
    WINDOWS_NT_4_0: 'windows-nt-4-0',
    MACOSX_15: 'mac-os-x-15',
    MACOSX_14: 'mac-os-x-14',
    MACOSX_13: 'mac-os-x-13',
    MACOSX_12: 'mac-os-x-12',
    MACOSX_11: 'mac-os-x-11',
    MACOSX_10: 'mac-os-x-10',
    MACOSX_9: 'mac-os-x-9',
    MACOSX_8: 'mac-os-x-8',
    MACOSX_7: 'mac-os-x-7',
    MACOSX_6: 'mac-os-x-6',
    MACOSX_5: 'mac-os-x-5',
    MACOSX_4: 'mac-os-x-4',
    MACOSX_3: 'mac-os-x-3',
    MACOSX_2: 'mac-os-x-2',
    MACOSX: 'mac-os-x',
    iOS: 'iOS',
    UNKNOWN: 'unknown'
};
const OS_RE = {
    WINDOWS: { and: [{ or: [/\bWindows|(Win\d\d)\b/, /\bWin 9x\b/] }, { not: /\bWindows Phone\b/ }] },
    MAC: { and: [/\bMac OS\b/, { not: { or: [/\biPhone\b/, /\bWindows Phone\b/] } }] },
    IOS: { and: [{ or: [/\biPad\b/, /\biPhone\b/, /\biPod\b/] }, { not: /\bWindows Phone\b/ }] },
    ANDROID: { and: [/\bAndroid\b/, { not: /\bWindows Phone\b/ }] },
    LINUX: /\bLinux\b/,
    UNIX: /\bUNIX\b/,
    FIREFOX_OS: { and: [/\bFirefox\b/, /Mobile\b/] },
    CHROME_OS: /\bCrOS\b/,
    WINDOWS_PHONE: { or: [/\bIEMobile\b/, /\bWindows Phone\b/] },
    PS4: /\bMozilla\/5.0 \(PlayStation 4\b/,
    VITA: /\bMozilla\/5.0 \(Play(S|s)tation Vita\b/
};
const BROWSERS_RE = {
    CHROME: {
        and: [{ or: [/\bChrome\b/, /\bCriOS\b/, /\bHeadlessChrome\b/] }, {
                not: {
                    or: [/\bOPR\b/, /\bEdg(e|A|iOS)\b/, /\bEdg\/\b/, /\bSamsungBrowser\b/, /\bUCBrowser\b/]
                }
            }]
    },
    FIREFOX: { or: [/\bFirefox\b/, /\bFxiOS\b/] },
    SAFARI: {
        and: [/^((?!CriOS).)*\Safari\b.*$/, {
                not: {
                    or: [/\bOPR\b/, /\bEdg(e|A|iOS)\b/, /\bEdg\/\b/, /\bWindows Phone\b/, /\bSamsungBrowser\b/, /\bUCBrowser\b/]
                }
            }]
    },
    OPERA: { or: [/Opera\b/, /\bOPR\b/] },
    IE: { or: [/\bMSIE\b/, /\bTrident\b/, /^Mozilla\/5\.0 \(Windows NT 10\.0; Win64; x64\)$/] },
    MS_EDGE: { or: [/\bEdg(e|A|iOS)\b/] },
    MS_EDGE_CHROMIUM: /\bEdg\/\b/,
    PS4: /\bMozilla\/5.0 \(PlayStation 4\b/,
    VITA: /\bMozilla\/5.0 \(Play(S|s)tation Vita\b/,
    FB_MESSANGER: /\bFBAN\/MessengerForiOS\b/,
    SAMSUNG: /\bSamsungBrowser\b/,
    UCBROWSER: /\bUCBrowser\b/,
};
const DEVICES_RE = Object.assign({}, MOBILES_RE, TABLETS_RE, { FIREFOX_OS: { and: [/\bFirefox\b/, /\bMobile\b/] }, CHROME_BOOK: /\bCrOS\b/, PS4: /\bMozilla\/5.0 \(PlayStation 4\b/, CHROMECAST: /\bCrKey\b/, APPLE_TV: /^iTunes-AppleTV\/4.1$/, GOOGLE_TV: /\bGoogleTV\b/, Tesla: /Tesla\/([0-9]{4}.[0-9]{1,2}.?[0-9]{0,2}.?[0-9]{0,2})-(.{7})/ });
const OS_VERSIONS_RE_MAP = {
    WINDOWS_3_11: /Win16/,
    WINDOWS_95: /(Windows 95|Win95|Windows_95)/,
    WINDOWS_ME: /(Win 9x 4.90|Windows ME)/,
    WINDOWS_98: /(Windows 98|Win98)/,
    WINDOWS_CE: /Windows CE/,
    WINDOWS_2000: /(Windows NT 5.0|Windows 2000)/,
    WINDOWS_XP: /(Windows NT 5.1|Windows XP)/,
    WINDOWS_SERVER_2003: /Windows NT 5.2/,
    WINDOWS_VISTA: /Windows NT 6.0/,
    WINDOWS_7: /(Windows 7|Windows NT 6.1)/,
    WINDOWS_8_1: /(Windows 8.1|Windows NT 6.3)/,
    WINDOWS_8: /(Windows 8|Windows NT 6.2)/,
    WINDOWS_10: /(Windows NT 10.0)/,
    WINDOWS_PHONE_7_5: /(Windows Phone OS 7.5)/,
    WINDOWS_PHONE_8_1: /(Windows Phone 8.1)/,
    WINDOWS_PHONE_10: /(Windows Phone 10)/,
    WINDOWS_NT_4_0: { and: [/(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/, { not: /Windows NT 10.0/ }] },
    MACOSX: /(MAC OS X\s*[^ 0-9])/,
    MACOSX_3: /(Darwin 10.3|Mac OS X 10.3)/,
    MACOSX_4: /(Darwin 10.4|Mac OS X 10.4)/,
    MACOSX_5: /(Mac OS X 10.5)/,
    MACOSX_6: /(Mac OS X 10.6)/,
    MACOSX_7: /(Mac OS X 10.7)/,
    MACOSX_8: /(Mac OS X 10.8)/,
    MACOSX_9: /(Mac OS X 10.9)/,
    MACOSX_10: /(Mac OS X 10.10)/,
    MACOSX_11: /(Mac OS X 10.11)/,
    MACOSX_12: /(Mac OS X 10.12)/,
    MACOSX_13: /(Mac OS X 10.13)/,
    MACOSX_14: /(Mac OS X 10.14)/,
    MACOSX_15: /(Mac OS X 10.15)/,
    iOS: /(iPhone OS\s*[0-9_]+)/,
};
const BROWSER_VERSIONS_RE_MAP = {
    CHROME: [/\bChrome\/([\d\.]+)\b/, /\bCriOS\/([\d\.]+)\b/, /\bHeadlessChrome\/([\d\.]+)\b/],
    FIREFOX: [/\bFirefox\/([\d\.]+)\b/, /\bFxiOS\/([\d\.]+)\b/],
    SAFARI: [/\bVersion\/([\d\.]+)\b/, /\bSafari\/([\d\.]+)\b/],
    OPERA: [/\bVersion\/([\d\.]+)\b/, /\bOPR\/([\d\.]+)\b/],
    IE: [/\bMSIE ([\d\.]+\w?)\b/, /\brv:([\d\.]+\w?)\b/],
    MS_EDGE: /\bEdg(?:e|A|iOS)\/([\d\.]+)\b/,
    MS_EDGE_CHROMIUM: /\bEdg\/([\d\.]+)\b/,
    SAMSUNG: /\bSamsungBrowser\/([\d\.]+)\b/,
    UCBROWSER: /\bUCBrowser\/([\d\.]+)\b/,
};
const OS_VERSIONS_RE = Object.keys(OS_VERSIONS_RE_MAP).reduce(function (obj, key) {
    obj[key] = OS_VERSIONS_RE_MAP[key];
    return obj;
}, {});
const BROWSER_VERSIONS_RE = Object.keys(BROWSER_VERSIONS_RE_MAP).reduce(function (obj, key) {
    obj[BROWSERS[key]] = BROWSER_VERSIONS_RE_MAP[key];
    return obj;
}, {});

var Constants = /*#__PURE__*/Object.freeze({
    BROWSERS: BROWSERS,
    MOBILES_RE: MOBILES_RE,
    TABLETS_RE: TABLETS_RE,
    DEVICES: DEVICES,
    OS: OS,
    OS_VERSIONS: OS_VERSIONS,
    OS_RE: OS_RE,
    BROWSERS_RE: BROWSERS_RE,
    DEVICES_RE: DEVICES_RE,
    OS_VERSIONS_RE_MAP: OS_VERSIONS_RE_MAP,
    BROWSER_VERSIONS_RE_MAP: BROWSER_VERSIONS_RE_MAP,
    OS_VERSIONS_RE: OS_VERSIONS_RE,
    BROWSER_VERSIONS_RE: BROWSER_VERSIONS_RE
});

/**
 * Created by ahsanayaz on 08/11/2016.
 */
class ReTree {
    constructor() {
    }
    test(string, regex) {
        let self = this;
        if (typeof regex === 'string') {
            regex = new RegExp(regex);
        }
        if (regex instanceof RegExp) {
            return regex.test(string);
        }
        else if (regex && Array.isArray(regex.and)) {
            return regex.and.every(function (item) {
                return self.test(string, item);
            });
        }
        else if (regex && Array.isArray(regex.or)) {
            return regex.or.some(function (item) {
                return self.test(string, item);
            });
        }
        else if (regex && regex.not) {
            return !self.test(string, regex.not);
        }
        else {
            return false;
        }
    }
    exec(string, regex) {
        let self = this;
        if (typeof regex === 'string') {
            regex = new RegExp(regex);
        }
        if (regex instanceof RegExp) {
            return regex.exec(string);
        }
        else if (regex && Array.isArray(regex)) {
            return regex.reduce(function (res, item) {
                return (!!res) ? res : self.exec(string, item);
            }, null);
        }
        else {
            return null;
        }
    }
}

let DeviceDetectorService = class DeviceDetectorService {
    constructor(platformId) {
        this.platformId = platformId;
        this.ua = '';
        this.userAgent = '';
        this.os = '';
        this.browser = '';
        this.device = '';
        this.os_version = '';
        this.browser_version = '';
        this.reTree = new ReTree();
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId) && typeof window !== 'undefined') {
            this.userAgent = window.navigator.userAgent;
        }
        this.setDeviceInfo(this.userAgent);
    }
    /**
     * @author Ahsan Ayaz
     * @desc Sets the initial value of the device when the service is initiated.
     * This value is later accessible for usage
     */
    setDeviceInfo(ua = this.userAgent) {
        if (ua !== this.userAgent) {
            this.userAgent = ua;
        }
        let mappings = [
            { const: 'OS', prop: 'os' },
            { const: 'BROWSERS', prop: 'browser' },
            { const: 'DEVICES', prop: 'device' },
            { const: 'OS_VERSIONS', prop: 'os_version' },
        ];
        mappings.forEach((mapping) => {
            this[mapping.prop] = Object.keys(Constants[mapping.const]).reduce((obj, item) => {
                if (Constants[mapping.const][item] === 'device') { // hack for iOS 13 Tablet
                    if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId) &&
                        (!!this.reTree.test(this.userAgent, TABLETS_RE['iPad']) ||
                            (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1))) {
                        obj[Constants[mapping.const][item]] = 'iPad';
                        return Object;
                    }
                }
                obj[Constants[mapping.const][item]] = this.reTree.test(ua, Constants[`${mapping.const}_RE`][item]);
                return obj;
            }, {});
        });
        mappings.forEach((mapping) => {
            this[mapping.prop] = Object.keys(Constants[mapping.const])
                .map((key) => {
                return Constants[mapping.const][key];
            }).reduce((previousValue, currentValue) => {
                if (mapping.prop === 'device' && previousValue === Constants[mapping.const].ANDROID) {
                    // if we have the actual device found, instead of 'Android', return the actual device
                    return (this[mapping.prop][currentValue])
                        ? currentValue : previousValue;
                }
                else {
                    return (previousValue === Constants[mapping.const].UNKNOWN && this[mapping.prop][currentValue])
                        ? currentValue : previousValue;
                }
            }, Constants[mapping.const].UNKNOWN);
        });
        this.browser_version = '0';
        if (this.browser !== BROWSERS.UNKNOWN) {
            let re = BROWSER_VERSIONS_RE[this.browser];
            let res = this.reTree.exec(ua, re);
            if (!!res) {
                this.browser_version = res[1];
            }
        }
    }
    /**
     * @author Ahsan Ayaz
     * @desc Returns the device information
     * @returns the device information object.
     */
    getDeviceInfo() {
        const deviceInfo = {
            userAgent: this.userAgent,
            os: this.os,
            browser: this.browser,
            device: this.device,
            os_version: this.os_version,
            browser_version: this.browser_version
        };
        return deviceInfo;
    }
    /**
     * @author Ahsan Ayaz
     * @desc Compares the current device info with the mobile devices to check
     * if the current device is a mobile and also check current device is tablet so it will return false.
     * @returns whether the current device is a mobile
     */
    isMobile(userAgent = this.userAgent) {
        if (this.isTablet(userAgent)) {
            return false;
        }
        const match = Object.keys(MOBILES_RE).find((mobile) => {
            return this.reTree.test(userAgent, MOBILES_RE[mobile]);
        });
        return !!match;
    }
    ;
    /**
     * @author Ahsan Ayaz
     * @desc Compares the current device info with the tablet devices to check
     * if the current device is a tablet.
     * @returns whether the current device is a tablet
     */
    isTablet(userAgent = this.userAgent) {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId) &&
            (!!this.reTree.test(this.userAgent, TABLETS_RE['iPad']) ||
                (typeof navigator !== 'undefined' && navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1))) {
            return true;
        }
        const match = Object.keys(TABLETS_RE).find((mobile) => {
            return !!this.reTree.test(userAgent, TABLETS_RE[mobile]);
        });
        return !!match;
    }
    ;
    /**
     * @author Ahsan Ayaz
     * @desc Compares the current device info with the desktop devices to check
     * if the current device is a desktop device.
     * @returns whether the current device is a desktop device
     */
    isDesktop(userAgent = this.userAgent) {
        const desktopDevices = [
            DEVICES.PS4,
            DEVICES.CHROME_BOOK,
            DEVICES.UNKNOWN
        ];
        if (this.device === DEVICES.UNKNOWN) {
            if (this.isMobile(userAgent) || this.isTablet(userAgent)) {
                return false;
            }
        }
        return desktopDevices.indexOf(this.device) > -1;
    }
    ;
};
DeviceDetectorService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])
], DeviceDetectorService);

var DeviceDetectorModule_1;
let DeviceDetectorModule = DeviceDetectorModule_1 = class DeviceDetectorModule {
    static forRoot() {
        return {
            ngModule: DeviceDetectorModule_1,
            providers: [DeviceDetectorService]
        };
    }
};
DeviceDetectorModule = DeviceDetectorModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ]
    })
], DeviceDetectorModule);

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ngx-device-detector.js.map


/***/ }),

/***/ "./node_modules/ngx-moment/fesm2015/ngx-moment.js":
/*!********************************************************!*\
  !*** ./node_modules/ngx-moment/fesm2015/ngx-moment.js ***!
  \********************************************************/
/*! exports provided: AddPipe, CalendarPipe, DateFormatPipe, DifferencePipe, DurationPipe, FromUnixPipe, ParsePipe, MomentModule, SubtractPipe, TimeAgoPipe, UtcPipe, FromUtcPipe, LocalTimePipe, LocalePipe, ParseZonePipe, IsBeforePipe, IsAfterPipe, NGX_MOMENT_OPTIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPipe", function() { return AddPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarPipe", function() { return CalendarPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateFormatPipe", function() { return DateFormatPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DifferencePipe", function() { return DifferencePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DurationPipe", function() { return DurationPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FromUnixPipe", function() { return FromUnixPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParsePipe", function() { return ParsePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MomentModule", function() { return MomentModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubtractPipe", function() { return SubtractPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeAgoPipe", function() { return TimeAgoPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtcPipe", function() { return UtcPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FromUtcPipe", function() { return FromUtcPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalTimePipe", function() { return LocalTimePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalePipe", function() { return LocalePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParseZonePipe", function() { return ParseZonePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsBeforePipe", function() { return IsBeforePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsAfterPipe", function() { return IsAfterPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NGX_MOMENT_OPTIONS", function() { return NGX_MOMENT_OPTIONS; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const momentConstructor = moment__WEBPACK_IMPORTED_MODULE_1__;
class AddPipe {
    /**
     * @param {?} value
     * @param {?} amount
     * @param {?=} unit
     * @return {?}
     */
    transform(value, amount, unit) {
        if (typeof amount === 'undefined' || (typeof amount === 'number' && typeof unit === 'undefined')) {
            throw new Error('AddPipe: missing required arguments');
        }
        return momentConstructor(value).add(amount, unit);
    }
}
AddPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'amAdd' },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const momentConstructor$1 = moment__WEBPACK_IMPORTED_MODULE_1__;
class CalendarPipe {
    /**
     * @param {?} cdRef
     * @param {?} ngZone
     */
    constructor(cdRef, ngZone) {
        this.cdRef = cdRef;
        this.ngZone = ngZone;
        // using a single static timer for all instances of this pipe for performance reasons
        CalendarPipe.initTimer(ngZone);
        CalendarPipe.refs++;
        // values such as Today will need to be replaced with Yesterday after midnight,
        // so make sure we subscribe to an EventEmitter that we set up to emit at midnight
        this.midnightSub = CalendarPipe.midnight.subscribe(() => {
            this.ngZone.run(() => this.cdRef.markForCheck());
        });
    }
    /**
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    transform(value, ...args) {
        /** @type {?} */
        let formats = null;
        /** @type {?} */
        let referenceTime = null;
        for (let i = 0, len = args.length; i < len; i++) {
            if (args[i] !== null) {
                if (typeof args[i] === 'object' && !Object(moment__WEBPACK_IMPORTED_MODULE_1__["isMoment"])(args[i])) {
                    formats = args[i];
                }
                else {
                    referenceTime = momentConstructor$1(args[i]);
                }
            }
        }
        return momentConstructor$1(value).calendar(referenceTime, formats);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (CalendarPipe.refs > 0) {
            CalendarPipe.refs--;
        }
        if (CalendarPipe.refs === 0) {
            CalendarPipe.removeTimer();
        }
        this.midnightSub.unsubscribe();
    }
    /**
     * @param {?} ngZone
     * @return {?}
     */
    static initTimer(ngZone) {
        // initialize the timer
        if (!CalendarPipe.midnight) {
            CalendarPipe.midnight = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            if (typeof window !== 'undefined') {
                /** @type {?} */
                const timeToUpdate = CalendarPipe._getMillisecondsUntilUpdate();
                CalendarPipe.timer = ngZone.runOutsideAngular(() => {
                    return window.setTimeout(() => {
                        // emit the current date
                        CalendarPipe.midnight.emit(new Date());
                        // refresh the timer
                        CalendarPipe.removeTimer();
                        CalendarPipe.initTimer(ngZone);
                    }, timeToUpdate);
                });
            }
        }
    }
    /**
     * @return {?}
     */
    static removeTimer() {
        if (CalendarPipe.timer) {
            window.clearTimeout(CalendarPipe.timer);
            CalendarPipe.timer = null;
            CalendarPipe.midnight = null;
        }
    }
    /**
     * @return {?}
     */
    static _getMillisecondsUntilUpdate() {
        /** @type {?} */
        const now = momentConstructor$1();
        /** @type {?} */
        const tomorrow = momentConstructor$1().startOf('day').add(1, 'days');
        /** @type {?} */
        const timeToMidnight = tomorrow.valueOf() - now.valueOf();
        return timeToMidnight + 1000; // 1 second after midnight
    }
}
/**
 * Internal reference counter, so we can clean up when no instances are in use
 */
CalendarPipe.refs = 0;
CalendarPipe.timer = null;
CalendarPipe.midnight = null;
CalendarPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'amCalendar', pure: false },] }
];
/** @nocollapse */
CalendarPipe.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const momentConstructor$2 = moment__WEBPACK_IMPORTED_MODULE_1__;
class DateFormatPipe {
    /**
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    transform(value, ...args) {
        if (!value) {
            return '';
        }
        return momentConstructor$2(value).format(args[0]);
    }
}
DateFormatPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'amDateFormat' },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const momentConstructor$3 = moment__WEBPACK_IMPORTED_MODULE_1__;
class DifferencePipe {
    /**
     * @param {?} value
     * @param {?} otherValue
     * @param {?=} unit
     * @param {?=} precision
     * @return {?}
     */
    transform(value, otherValue, unit, precision) {
        /** @type {?} */
        const date = momentConstructor$3(value);
        /** @type {?} */
        const date2 = (otherValue !== null) ? momentConstructor$3(otherValue) : momentConstructor$3();
        return date.diff(date2, unit, precision);
    }
}
DifferencePipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'amDifference' },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const NGX_MOMENT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NGX_MOMENT_OPTIONS');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class DurationPipe {
    /**
     * @param {?=} momentOptions
     */
    constructor(momentOptions) {
        this.allowedUnits = ['ss', 's', 'm', 'h', 'd', 'M'];
        this._applyOptions(momentOptions);
    }
    /**
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    transform(value, ...args) {
        if (typeof args === 'undefined' || args.length !== 1) {
            throw new Error('DurationPipe: missing required time unit argument');
        }
        return Object(moment__WEBPACK_IMPORTED_MODULE_1__["duration"])(value, (/** @type {?} */ (args[0]))).humanize();
    }
    /**
     * @param {?} momentOptions
     * @return {?}
     */
    _applyOptions(momentOptions) {
        if (!momentOptions) {
            return;
        }
        if (!!momentOptions.relativeTimeThresholdOptions) {
            /** @type {?} */
            const units = Object.keys(momentOptions.relativeTimeThresholdOptions);
            /** @type {?} */
            const filteredUnits = units.filter(unit => this.allowedUnits.indexOf(unit) !== -1);
            filteredUnits.forEach(unit => {
                Object(moment__WEBPACK_IMPORTED_MODULE_1__["relativeTimeThreshold"])(unit, momentOptions.relativeTimeThresholdOptions[unit]);
            });
        }
    }
}
DurationPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'amDuration' },] }
];
/** @nocollapse */
DurationPipe.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NGX_MOMENT_OPTIONS,] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class FromUnixPipe {
    /**
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    transform(value, ...args) {
        if (typeof value === 'string') {
            value = +value;
        }
        return Object(moment__WEBPACK_IMPORTED_MODULE_1__["unix"])(value);
    }
}
FromUnixPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'amFromUnix' },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const momentConstructor$4 = moment__WEBPACK_IMPORTED_MODULE_1__;
class ParsePipe {
    /**
     * @param {?} value
     * @param {?} formats
     * @return {?}
     */
    transform(value, formats) {
        return momentConstructor$4(value, formats);
    }
}
ParsePipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'amParse' },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class FromUtcPipe {
    /**
     * @param {?} value
     * @param {?=} formats
     * @param {...?} args
     * @return {?}
     */
    transform(value, formats, ...args) {
        return formats ? Object(moment__WEBPACK_IMPORTED_MODULE_1__["utc"])(value, formats) : Object(moment__WEBPACK_IMPORTED_MODULE_1__["utc"])(value);
    }
}
FromUtcPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'amFromUtc' },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const momentConstructor$5 = moment__WEBPACK_IMPORTED_MODULE_1__;
class IsAfterPipe {
    /**
     * @param {?} value
     * @param {?} otherValue
     * @param {?=} unit
     * @return {?}
     */
    transform(value, otherValue, unit) {
        return momentConstructor$5(value).isAfter(momentConstructor$5(otherValue), unit);
    }
}
IsAfterPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{
                name: 'amIsAfter'
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const momentConstructor$6 = moment__WEBPACK_IMPORTED_MODULE_1__;
class IsBeforePipe {
    /**
     * @param {?} value
     * @param {?} otherValue
     * @param {?=} unit
     * @return {?}
     */
    transform(value, otherValue, unit) {
        return momentConstructor$6(value).isBefore(momentConstructor$6(otherValue), unit);
    }
}
IsBeforePipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{
                name: 'amIsBefore'
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const momentConstructor$7 = moment__WEBPACK_IMPORTED_MODULE_1__;
class LocalTimePipe {
    /**
     * @param {?} value
     * @return {?}
     */
    transform(value) {
        return momentConstructor$7(value).local();
    }
}
LocalTimePipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'amLocal' },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
// under systemjs, moment is actually exported as the default export, so we account for that
/** @type {?} */
const momentConstructor$8 = moment__WEBPACK_IMPORTED_MODULE_1__;
class LocalePipe {
    /**
     * @param {?} value
     * @param {?} locale
     * @return {?}
     */
    transform(value, locale$$1) {
        return momentConstructor$8(value).locale(locale$$1);
    }
}
LocalePipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'amLocale' },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class ParseZonePipe {
    /**
     * @param {?} value
     * @return {?}
     */
    transform(value) {
        return Object(moment__WEBPACK_IMPORTED_MODULE_1__["parseZone"])(value);
    }
}
ParseZonePipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'amParseZone' },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const momentConstructor$9 = moment__WEBPACK_IMPORTED_MODULE_1__;
class SubtractPipe {
    /**
     * @param {?} value
     * @param {?} amount
     * @param {?=} unit
     * @return {?}
     */
    transform(value, amount, unit) {
        if (typeof amount === 'undefined' || (typeof amount === 'number' && typeof unit === 'undefined')) {
            throw new Error('SubtractPipe: missing required arguments');
        }
        return momentConstructor$9(value).subtract(amount, unit);
    }
}
SubtractPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'amSubtract' },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const momentConstructor$a = moment__WEBPACK_IMPORTED_MODULE_1__;
class TimeAgoPipe {
    /**
     * @param {?} cdRef
     * @param {?} ngZone
     */
    constructor(cdRef, ngZone) {
        this.cdRef = cdRef;
        this.ngZone = ngZone;
    }
    /**
     * @param {?} m
     * @return {?}
     */
    format(m) {
        return m.from(momentConstructor$a(), this.lastOmitSuffix);
    }
    /**
     * @param {?} value
     * @param {?=} omitSuffix
     * @param {?=} formatFn
     * @return {?}
     */
    transform(value, omitSuffix, formatFn) {
        if (this.hasChanged(value, omitSuffix)) {
            this.lastTime = this.getTime(value);
            this.lastValue = value;
            this.lastOmitSuffix = omitSuffix;
            this.lastLocale = this.getLocale(value);
            this.formatFn = formatFn || this.format.bind(this);
            this.removeTimer();
            this.createTimer();
            this.lastText = this.formatFn(momentConstructor$a(value));
        }
        else {
            this.createTimer();
        }
        return this.lastText;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.removeTimer();
    }
    /**
     * @return {?}
     */
    createTimer() {
        if (this.currentTimer) {
            return;
        }
        /** @type {?} */
        const momentInstance = momentConstructor$a(this.lastValue);
        /** @type {?} */
        const timeToUpdate = this.getSecondsUntilUpdate(momentInstance) * 1000;
        this.currentTimer = this.ngZone.runOutsideAngular(() => {
            if (typeof window !== 'undefined') {
                return window.setTimeout(() => {
                    this.lastText = this.formatFn(momentConstructor$a(this.lastValue));
                    this.currentTimer = null;
                    this.ngZone.run(() => this.cdRef.markForCheck());
                }, timeToUpdate);
            }
            else {
                return null;
            }
        });
    }
    /**
     * @return {?}
     */
    removeTimer() {
        if (this.currentTimer) {
            window.clearTimeout(this.currentTimer);
            this.currentTimer = null;
        }
    }
    /**
     * @param {?} momentInstance
     * @return {?}
     */
    getSecondsUntilUpdate(momentInstance) {
        /** @type {?} */
        const howOld = Math.abs(momentConstructor$a().diff(momentInstance, 'minute'));
        if (howOld < 1) {
            return 1;
        }
        else if (howOld < 60) {
            return 30;
        }
        else if (howOld < 180) {
            return 300;
        }
        else {
            return 3600;
        }
    }
    /**
     * @param {?} value
     * @param {?=} omitSuffix
     * @return {?}
     */
    hasChanged(value, omitSuffix) {
        return this.getTime(value) !== this.lastTime
            || this.getLocale(value) !== this.lastLocale
            || omitSuffix !== this.lastOmitSuffix;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getTime(value) {
        if (Object(moment__WEBPACK_IMPORTED_MODULE_1__["isDate"])(value)) {
            return value.getTime();
        }
        else if (Object(moment__WEBPACK_IMPORTED_MODULE_1__["isMoment"])(value)) {
            return value.valueOf();
        }
        else {
            return momentConstructor$a(value).valueOf();
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getLocale(value) {
        return Object(moment__WEBPACK_IMPORTED_MODULE_1__["isMoment"])(value) ? value.locale() : Object(moment__WEBPACK_IMPORTED_MODULE_1__["locale"])();
    }
}
TimeAgoPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'amTimeAgo', pure: false },] }
];
/** @nocollapse */
TimeAgoPipe.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const momentConstructor$b = moment__WEBPACK_IMPORTED_MODULE_1__;
class UtcPipe {
    /**
     * @param {?} value
     * @return {?}
     */
    transform(value) {
        return momentConstructor$b(value).utc();
    }
}
UtcPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'amUtc' },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const ANGULAR_MOMENT_PIPES = [
    AddPipe,
    CalendarPipe,
    DateFormatPipe,
    DifferencePipe,
    DurationPipe,
    FromUnixPipe,
    ParsePipe,
    SubtractPipe,
    TimeAgoPipe,
    UtcPipe,
    FromUtcPipe,
    LocalTimePipe,
    LocalePipe,
    ParseZonePipe,
    IsBeforePipe,
    IsAfterPipe
];
class MomentModule {
    /**
     * @param {?=} options
     * @return {?}
     */
    static forRoot(options) {
        return {
            ngModule: MomentModule,
            providers: [
                {
                    provide: NGX_MOMENT_OPTIONS, useValue: Object.assign({}, options)
                }
            ]
        };
    }
}
MomentModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: ANGULAR_MOMENT_PIPES,
                exports: ANGULAR_MOMENT_PIPES
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1vbWVudC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LW1vbWVudC9hZGQucGlwZS50cyIsIm5nOi8vbmd4LW1vbWVudC9jYWxlbmRhci5waXBlLnRzIiwibmc6Ly9uZ3gtbW9tZW50L2RhdGUtZm9ybWF0LnBpcGUudHMiLCJuZzovL25neC1tb21lbnQvZGlmZmVyZW5jZS5waXBlLnRzIiwibmc6Ly9uZ3gtbW9tZW50L21vbWVudC1vcHRpb25zLnRzIiwibmc6Ly9uZ3gtbW9tZW50L2R1cmF0aW9uLnBpcGUudHMiLCJuZzovL25neC1tb21lbnQvZnJvbS11bml4LnBpcGUudHMiLCJuZzovL25neC1tb21lbnQvcGFyc2UucGlwZS50cyIsIm5nOi8vbmd4LW1vbWVudC9mcm9tLXV0Yy5waXBlLnRzIiwibmc6Ly9uZ3gtbW9tZW50L2lzLWFmdGVyLnBpcGUudHMiLCJuZzovL25neC1tb21lbnQvaXMtYmVmb3JlLnBpcGUudHMiLCJuZzovL25neC1tb21lbnQvbG9jYWwucGlwZS50cyIsIm5nOi8vbmd4LW1vbWVudC9sb2NhbGUucGlwZS50cyIsIm5nOi8vbmd4LW1vbWVudC9wYXJzZS16b25lLnBpcGUudHMiLCJuZzovL25neC1tb21lbnQvc3VidHJhY3QucGlwZS50cyIsIm5nOi8vbmd4LW1vbWVudC90aW1lLWFnby5waXBlLnRzIiwibmc6Ly9uZ3gtbW9tZW50L3V0Yy5waXBlLnRzIiwibmc6Ly9uZ3gtbW9tZW50L21vbWVudC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogbmd4LW1vbWVudCAoYykgMjAxNSwgMjAxNiBVcmkgU2hha2VkIC8gTUlUIExpY2VuY2UgKi9cclxuXHJcbmltcG9ydCB7UGlwZSwgUGlwZVRyYW5zZm9ybX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5cclxuY29uc3QgbW9tZW50Q29uc3RydWN0b3IgPSBtb21lbnQ7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdhbUFkZCcgfSlcclxuZXhwb3J0IGNsYXNzIEFkZFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgIHRyYW5zZm9ybSh2YWx1ZTogYW55LCBhbW91bnQ6IG1vbWVudC5EdXJhdGlvbklucHV0QXJnMSwgdW5pdD86IG1vbWVudC5EdXJhdGlvbklucHV0QXJnMik6IGFueSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBhbW91bnQgPT09ICd1bmRlZmluZWQnIHx8ICh0eXBlb2YgYW1vdW50ID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgdW5pdCA9PT0gJ3VuZGVmaW5lZCcpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQWRkUGlwZTogbWlzc2luZyByZXF1aXJlZCBhcmd1bWVudHMnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG1vbWVudENvbnN0cnVjdG9yKHZhbHVlKS5hZGQoYW1vdW50LCB1bml0KTtcclxuICAgIH1cclxufVxyXG4iLCIvKiBuZ3gtbW9tZW50IChjKSAyMDE1LCAyMDE2IFVyaSBTaGFrZWQgLyBNSVQgTGljZW5jZSAqL1xyXG5cclxuaW1wb3J0IHsgUGlwZSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIFBpcGVUcmFuc2Zvcm0sIEV2ZW50RW1pdHRlciwgT25EZXN0cm95LCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5cclxuY29uc3QgbW9tZW50Q29uc3RydWN0b3IgPSBtb21lbnQ7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdhbUNhbGVuZGFyJywgcHVyZTogZmFsc2UgfSlcclxuZXhwb3J0IGNsYXNzIENhbGVuZGFyUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0sIE9uRGVzdHJveSB7XHJcblxyXG4gIC8qKlxyXG4gICAqIEludGVybmFsIHJlZmVyZW5jZSBjb3VudGVyLCBzbyB3ZSBjYW4gY2xlYW4gdXAgd2hlbiBubyBpbnN0YW5jZXMgYXJlIGluIHVzZVxyXG4gICAqL1xyXG4gIHByaXZhdGUgc3RhdGljIHJlZnMgPSAwO1xyXG5cclxuICBwcml2YXRlIHN0YXRpYyB0aW1lcjogbnVtYmVyIHwgbnVsbCA9IG51bGw7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgbWlkbmlnaHQ6IEV2ZW50RW1pdHRlcjxEYXRlPiB8IG51bGwgPSBudWxsO1xyXG5cclxuICBwcml2YXRlIG1pZG5pZ2h0U3ViOiBTdWJzY3JpcHRpb247XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RSZWY6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIG5nWm9uZTogTmdab25lKSB7XHJcbiAgICAvLyB1c2luZyBhIHNpbmdsZSBzdGF0aWMgdGltZXIgZm9yIGFsbCBpbnN0YW5jZXMgb2YgdGhpcyBwaXBlIGZvciBwZXJmb3JtYW5jZSByZWFzb25zXHJcbiAgICBDYWxlbmRhclBpcGUuaW5pdFRpbWVyKG5nWm9uZSk7XHJcblxyXG4gICAgQ2FsZW5kYXJQaXBlLnJlZnMrKztcclxuXHJcbiAgICAvLyB2YWx1ZXMgc3VjaCBhcyBUb2RheSB3aWxsIG5lZWQgdG8gYmUgcmVwbGFjZWQgd2l0aCBZZXN0ZXJkYXkgYWZ0ZXIgbWlkbmlnaHQsXHJcbiAgICAvLyBzbyBtYWtlIHN1cmUgd2Ugc3Vic2NyaWJlIHRvIGFuIEV2ZW50RW1pdHRlciB0aGF0IHdlIHNldCB1cCB0byBlbWl0IGF0IG1pZG5pZ2h0XHJcbiAgICB0aGlzLm1pZG5pZ2h0U3ViID0gQ2FsZW5kYXJQaXBlLm1pZG5pZ2h0LnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB0aGlzLmNkUmVmLm1hcmtGb3JDaGVjaygpKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdHJhbnNmb3JtKHZhbHVlOiBEYXRlIHwgbW9tZW50Lk1vbWVudCwgLi4uYXJnczogYW55W10pOiBhbnkge1xyXG4gICAgbGV0IGZvcm1hdHM6IGFueSA9IG51bGw7XHJcbiAgICBsZXQgcmVmZXJlbmNlVGltZTogYW55ID0gbnVsbDtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gYXJncy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICBpZiAoYXJnc1tpXSAhPT0gbnVsbCkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYXJnc1tpXSA9PT0gJ29iamVjdCcgJiYgIW1vbWVudC5pc01vbWVudChhcmdzW2ldKSkge1xyXG4gICAgICAgICAgZm9ybWF0cyA9IGFyZ3NbaV07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJlZmVyZW5jZVRpbWUgPSBtb21lbnRDb25zdHJ1Y3RvcihhcmdzW2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbW9tZW50Q29uc3RydWN0b3IodmFsdWUpLmNhbGVuZGFyKHJlZmVyZW5jZVRpbWUsIGZvcm1hdHMpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBpZiAoQ2FsZW5kYXJQaXBlLnJlZnMgPiAwKSB7XHJcbiAgICAgIENhbGVuZGFyUGlwZS5yZWZzLS07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKENhbGVuZGFyUGlwZS5yZWZzID09PSAwKSB7XHJcbiAgICAgIENhbGVuZGFyUGlwZS5yZW1vdmVUaW1lcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubWlkbmlnaHRTdWIudW5zdWJzY3JpYmUoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIGluaXRUaW1lcihuZ1pvbmU6IE5nWm9uZSkge1xyXG4gICAgLy8gaW5pdGlhbGl6ZSB0aGUgdGltZXJcclxuICAgIGlmICghQ2FsZW5kYXJQaXBlLm1pZG5pZ2h0KSB7XHJcbiAgICAgIENhbGVuZGFyUGlwZS5taWRuaWdodCA9IG5ldyBFdmVudEVtaXR0ZXI8RGF0ZT4oKTtcclxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgY29uc3QgdGltZVRvVXBkYXRlID0gQ2FsZW5kYXJQaXBlLl9nZXRNaWxsaXNlY29uZHNVbnRpbFVwZGF0ZSgpO1xyXG4gICAgICAgIENhbGVuZGFyUGlwZS50aW1lciA9IG5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBlbWl0IHRoZSBjdXJyZW50IGRhdGVcclxuICAgICAgICAgICAgQ2FsZW5kYXJQaXBlLm1pZG5pZ2h0LmVtaXQobmV3IERhdGUoKSk7XHJcblxyXG4gICAgICAgICAgICAvLyByZWZyZXNoIHRoZSB0aW1lclxyXG4gICAgICAgICAgICBDYWxlbmRhclBpcGUucmVtb3ZlVGltZXIoKTtcclxuICAgICAgICAgICAgQ2FsZW5kYXJQaXBlLmluaXRUaW1lcihuZ1pvbmUpO1xyXG4gICAgICAgICAgfSwgdGltZVRvVXBkYXRlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgcmVtb3ZlVGltZXIoKSB7XHJcbiAgICBpZiAoQ2FsZW5kYXJQaXBlLnRpbWVyKSB7XHJcbiAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQoQ2FsZW5kYXJQaXBlLnRpbWVyKTtcclxuICAgICAgQ2FsZW5kYXJQaXBlLnRpbWVyID0gbnVsbDtcclxuICAgICAgQ2FsZW5kYXJQaXBlLm1pZG5pZ2h0ID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIF9nZXRNaWxsaXNlY29uZHNVbnRpbFVwZGF0ZSgpIHtcclxuICAgIGNvbnN0IG5vdyA9IG1vbWVudENvbnN0cnVjdG9yKCk7XHJcbiAgICBjb25zdCB0b21vcnJvdyA9IG1vbWVudENvbnN0cnVjdG9yKCkuc3RhcnRPZignZGF5JykuYWRkKDEsICdkYXlzJyk7XHJcbiAgICBjb25zdCB0aW1lVG9NaWRuaWdodCA9IHRvbW9ycm93LnZhbHVlT2YoKSAtIG5vdy52YWx1ZU9mKCk7XHJcbiAgICByZXR1cm4gdGltZVRvTWlkbmlnaHQgKyAxMDAwOyAvLyAxIHNlY29uZCBhZnRlciBtaWRuaWdodFxyXG4gIH1cclxufVxyXG4iLCIvKiBuZ3gtbW9tZW50IChjKSAyMDE1LCAyMDE2IFVyaSBTaGFrZWQgLyBNSVQgTGljZW5jZSAqL1xyXG5cclxuaW1wb3J0IHtQaXBlLCBQaXBlVHJhbnNmb3JtfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5jb25zdCBtb21lbnRDb25zdHJ1Y3RvciA9IG1vbWVudDtcclxuXHJcbkBQaXBlKHsgbmFtZTogJ2FtRGF0ZUZvcm1hdCcgfSlcclxuZXhwb3J0IGNsYXNzIERhdGVGb3JtYXRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgdHJhbnNmb3JtKHZhbHVlOiBEYXRlIHwgbW9tZW50Lk1vbWVudCB8IHN0cmluZyB8IG51bWJlciwgLi4uYXJnczogYW55W10pOiBzdHJpbmcge1xyXG4gICAgaWYgKCF2YWx1ZSkgeyByZXR1cm4gJyc7IH1cclxuICAgIHJldHVybiBtb21lbnRDb25zdHJ1Y3Rvcih2YWx1ZSkuZm9ybWF0KGFyZ3NbMF0pO1xyXG4gIH1cclxufVxyXG4iLCIvKiBuZ3gtbW9tZW50IChjKSAyMDE1LCAyMDE2IFVyaSBTaGFrZWQgLyBNSVQgTGljZW5jZSAqL1xyXG5cclxuaW1wb3J0IHtQaXBlLCBQaXBlVHJhbnNmb3JtfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5jb25zdCBtb21lbnRDb25zdHJ1Y3RvciA9IG1vbWVudDtcclxuXHJcbkBQaXBlKHsgbmFtZTogJ2FtRGlmZmVyZW5jZScgfSlcclxuZXhwb3J0IGNsYXNzIERpZmZlcmVuY2VQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgdHJhbnNmb3JtKHZhbHVlOiBEYXRlIHwgbW9tZW50Lk1vbWVudCxcclxuICAgICAgICAgICAgb3RoZXJWYWx1ZTogRGF0ZSB8IG1vbWVudC5Nb21lbnQsXHJcbiAgICAgICAgICAgIHVuaXQ/OiBtb21lbnQudW5pdE9mVGltZS5EaWZmLFxyXG4gICAgICAgICAgICBwcmVjaXNpb24/OiBib29sZWFuKTogbnVtYmVyIHtcclxuXHJcbiAgICBjb25zdCBkYXRlID0gbW9tZW50Q29uc3RydWN0b3IodmFsdWUpO1xyXG4gICAgY29uc3QgZGF0ZTIgPSAob3RoZXJWYWx1ZSAhPT0gbnVsbCkgPyBtb21lbnRDb25zdHJ1Y3RvcihvdGhlclZhbHVlKSA6IG1vbWVudENvbnN0cnVjdG9yKCk7XHJcblxyXG4gICAgcmV0dXJuIGRhdGUuZGlmZihkYXRlMiwgdW5pdCwgcHJlY2lzaW9uKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmV4cG9ydCBjb25zdCBOR1hfTU9NRU5UX09QVElPTlM6IEluamVjdGlvblRva2VuPE5neE1vbWVudE9wdGlvbnM+ID0gbmV3IEluamVjdGlvblRva2VuPE5neE1vbWVudE9wdGlvbnM+KCdOR1hfTU9NRU5UX09QVElPTlMnKTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTmd4TW9tZW50T3B0aW9ucyB7XHJcbiAgLyoqXHJcbiAgICogcmVsYXRpdmVUaW1lVGhyZXNob2xkT3B0aW9uc1xyXG4gICAqIEBkZXNjcmlwdGlvbiBQcm92aWRlcyB0aGUgYHJlbGF0aXZlVGltZVRocmVzaG9sZGAgdW5pdHMgYWxsb3dpbmcgYSBwaXBlIHRvIHNldCB0aGUgYG1vbWVudC5yZWxhdGl2ZVRpbWVUaHJlc2hvbGRgIHZhbHVlcy5cclxuICAgKiBUaGUgYGtleWAgaXMgYSB1bml0IGRlZmluZWQgYXMgb25lIG9mIGBzc2AsIGBzYCwgYG1gLCBgaGAsIGBkYCwgYE1gLlxyXG4gICAqIEBzZWUgaHR0cHM6Ly9tb21lbnRqcy5jb20vZG9jcy8jL2N1c3RvbWl6YXRpb24vcmVsYXRpdmUtdGltZS10aHJlc2hvbGQvXHJcbiAgICogQGV4YW1wbGUgYnkgZGVmYXVsdCBtb3JlIHRoYW4gNDUgc2Vjb25kcyBpcyBjb25zaWRlcmVkIGEgbWludXRlLCBtb3JlIHRoYW4gMjIgaG91cnMgaXMgY29uc2lkZXJlZCBhIGRheSBhbmQgc28gb24uXHJcbiAgICogU28gc2V0dGluZ3MgdGhlIHVuaXQgJ20nIHRvIGA1OWAgd2lsbCBhZGp1c3QgdGhlIGByZWxhdGl2ZVRpbWVUaHJlc2hvbGRgIGFuZCBjb25zaWRlciBtb3JlIHRoYW4gNTkgbWludXRlc1xyXG4gICAqIHRvIGJlIGFuIGhvdXIgKGRlZmF1bHQgaXMgYDQ1IG1pbnV0ZXNgKVxyXG4gICAqL1xyXG4gIHJlbGF0aXZlVGltZVRocmVzaG9sZE9wdGlvbnM6IHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH07XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5pbXBvcnQgeyBJbmplY3QsIE9wdGlvbmFsLCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5HWF9NT01FTlRfT1BUSU9OUywgTmd4TW9tZW50T3B0aW9ucyB9IGZyb20gJy4vbW9tZW50LW9wdGlvbnMnO1xyXG5cclxuQFBpcGUoeyBuYW1lOiAnYW1EdXJhdGlvbicgfSlcclxuZXhwb3J0IGNsYXNzIER1cmF0aW9uUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG5cclxuICBhbGxvd2VkVW5pdHM6IEFycmF5PHN0cmluZz4gPSBbJ3NzJywgJ3MnLCAnbScsICdoJywgJ2QnLCAnTSddO1xyXG5cclxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBASW5qZWN0KE5HWF9NT01FTlRfT1BUSU9OUykgbW9tZW50T3B0aW9ucz86IE5neE1vbWVudE9wdGlvbnMpIHtcclxuICAgIHRoaXMuX2FwcGx5T3B0aW9ucyhtb21lbnRPcHRpb25zKTtcclxuICB9XHJcblxyXG4gIHRyYW5zZm9ybSh2YWx1ZTogYW55LCAuLi5hcmdzOiBzdHJpbmdbXSk6IHN0cmluZyB7XHJcbiAgICBpZiAodHlwZW9mIGFyZ3MgPT09ICd1bmRlZmluZWQnIHx8IGFyZ3MubGVuZ3RoICE9PSAxKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignRHVyYXRpb25QaXBlOiBtaXNzaW5nIHJlcXVpcmVkIHRpbWUgdW5pdCBhcmd1bWVudCcpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG1vbWVudC5kdXJhdGlvbih2YWx1ZSwgYXJnc1swXSBhcyBtb21lbnQudW5pdE9mVGltZS5EdXJhdGlvbkNvbnN0cnVjdG9yKS5odW1hbml6ZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfYXBwbHlPcHRpb25zKG1vbWVudE9wdGlvbnM6IE5neE1vbWVudE9wdGlvbnMpOiB2b2lkIHtcclxuICAgIGlmICghbW9tZW50T3B0aW9ucykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCEhbW9tZW50T3B0aW9ucy5yZWxhdGl2ZVRpbWVUaHJlc2hvbGRPcHRpb25zKSB7XHJcbiAgICAgIGNvbnN0IHVuaXRzOiBBcnJheTxzdHJpbmc+ID0gT2JqZWN0LmtleXMobW9tZW50T3B0aW9ucy5yZWxhdGl2ZVRpbWVUaHJlc2hvbGRPcHRpb25zKTtcclxuICAgICAgY29uc3QgZmlsdGVyZWRVbml0czogQXJyYXk8c3RyaW5nPiA9IHVuaXRzLmZpbHRlcih1bml0ID0+IHRoaXMuYWxsb3dlZFVuaXRzLmluZGV4T2YodW5pdCkgIT09IC0xKTtcclxuICAgICAgZmlsdGVyZWRVbml0cy5mb3JFYWNoKHVuaXQgPT4ge1xyXG4gICAgICAgIG1vbWVudC5yZWxhdGl2ZVRpbWVUaHJlc2hvbGQodW5pdCwgbW9tZW50T3B0aW9ucy5yZWxhdGl2ZVRpbWVUaHJlc2hvbGRPcHRpb25zW3VuaXRdKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iLCIvKiBuZ3gtbW9tZW50IChjKSAyMDE1LCAyMDE2IFVyaSBTaGFrZWQgLyBNSVQgTGljZW5jZSAqL1xyXG5cclxuaW1wb3J0IHtQaXBlLCBQaXBlVHJhbnNmb3JtfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdhbUZyb21Vbml4JyB9KVxyXG5leHBvcnQgY2xhc3MgRnJvbVVuaXhQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgdHJhbnNmb3JtKHZhbHVlOiBhbnksIC4uLmFyZ3M6IHN0cmluZ1tdKTogYW55IHtcclxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIHZhbHVlID0gK3ZhbHVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG1vbWVudC51bml4KHZhbHVlKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuXHJcbmNvbnN0IG1vbWVudENvbnN0cnVjdG9yID0gbW9tZW50O1xyXG5cclxuQFBpcGUoeyBuYW1lOiAnYW1QYXJzZScgfSlcclxuZXhwb3J0IGNsYXNzIFBhcnNlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIHRyYW5zZm9ybSh2YWx1ZTogc3RyaW5nLCBmb3JtYXRzOiBzdHJpbmd8c3RyaW5nW10pOiBtb21lbnQuTW9tZW50IHtcclxuICAgIHJldHVybiBtb21lbnRDb25zdHJ1Y3Rvcih2YWx1ZSwgZm9ybWF0cyk7XHJcbiAgfVxyXG59XHJcbiIsIi8qIG5neC1tb21lbnQgKGMpIDIwMTUsIDIwMTYgVXJpIFNoYWtlZCAvIE1JVCBMaWNlbmNlICovXHJcblxyXG5pbXBvcnQge1BpcGUsIFBpcGVUcmFuc2Zvcm19IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuXHJcbkBQaXBlKHsgbmFtZTogJ2FtRnJvbVV0YycgfSlcclxuZXhwb3J0IGNsYXNzIEZyb21VdGNQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgdHJhbnNmb3JtKHZhbHVlOiBhbnksIGZvcm1hdHM/OiBzdHJpbmd8c3RyaW5nW10sIC4uLmFyZ3M6IHN0cmluZ1tdKTogYW55IHtcclxuICAgIHJldHVybiBmb3JtYXRzID8gbW9tZW50LnV0Yyh2YWx1ZSwgZm9ybWF0cykgOiBtb21lbnQudXRjKHZhbHVlKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5jb25zdCBtb21lbnRDb25zdHJ1Y3RvciA9IG1vbWVudDtcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAnYW1Jc0FmdGVyJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgSXNBZnRlclBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcbiAgdHJhbnNmb3JtKHZhbHVlOiBEYXRlIHwgbW9tZW50Lk1vbWVudCxcclxuICAgIG90aGVyVmFsdWU6IERhdGUgfCBtb21lbnQuTW9tZW50LFxyXG4gICAgdW5pdD86IG1vbWVudC51bml0T2ZUaW1lLlN0YXJ0T2YpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBtb21lbnRDb25zdHJ1Y3Rvcih2YWx1ZSkuaXNBZnRlcihtb21lbnRDb25zdHJ1Y3RvcihvdGhlclZhbHVlKSwgdW5pdCk7XHJcbiAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuXHJcbmltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmNvbnN0IG1vbWVudENvbnN0cnVjdG9yID0gbW9tZW50O1xyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICdhbUlzQmVmb3JlJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgSXNCZWZvcmVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblxyXG4gIHRyYW5zZm9ybSh2YWx1ZTogRGF0ZSB8IG1vbWVudC5Nb21lbnQsXHJcbiAgICBvdGhlclZhbHVlOiBEYXRlIHwgbW9tZW50Lk1vbWVudCxcclxuICAgIHVuaXQ/OiBtb21lbnQudW5pdE9mVGltZS5TdGFydE9mKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gbW9tZW50Q29uc3RydWN0b3IodmFsdWUpLmlzQmVmb3JlKG1vbWVudENvbnN0cnVjdG9yKG90aGVyVmFsdWUpLCB1bml0KTtcclxuICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5jb25zdCBtb21lbnRDb25zdHJ1Y3RvciA9IG1vbWVudDtcclxuXHJcbkBQaXBlKHsgbmFtZTogJ2FtTG9jYWwnIH0pXHJcbmV4cG9ydCBjbGFzcyBMb2NhbFRpbWVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICB0cmFuc2Zvcm0odmFsdWU6IERhdGUgfCBtb21lbnQuTW9tZW50IHwgc3RyaW5nIHwgbnVtYmVyKTogbW9tZW50Lk1vbWVudCB7XHJcbiAgICAgICAgcmV0dXJuIG1vbWVudENvbnN0cnVjdG9yKHZhbHVlKS5sb2NhbCgpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG4vLyB1bmRlciBzeXN0ZW1qcywgbW9tZW50IGlzIGFjdHVhbGx5IGV4cG9ydGVkIGFzIHRoZSBkZWZhdWx0IGV4cG9ydCwgc28gd2UgYWNjb3VudCBmb3IgdGhhdFxyXG5jb25zdCBtb21lbnRDb25zdHJ1Y3RvciA9IG1vbWVudDtcclxuXHJcbkBQaXBlKHsgbmFtZTogJ2FtTG9jYWxlJyB9KVxyXG5leHBvcnQgY2xhc3MgTG9jYWxlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIHRyYW5zZm9ybSh2YWx1ZTogc3RyaW5nIHwgRGF0ZSwgbG9jYWxlOiBzdHJpbmcpOiBtb21lbnQuTW9tZW50IHtcclxuICAgIHJldHVybiBtb21lbnRDb25zdHJ1Y3Rvcih2YWx1ZSkubG9jYWxlKGxvY2FsZSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdhbVBhcnNlWm9uZScgfSlcclxuZXhwb3J0IGNsYXNzIFBhcnNlWm9uZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICB0cmFuc2Zvcm0odmFsdWU6IHN0cmluZyk6IG1vbWVudC5Nb21lbnQge1xyXG4gICAgcmV0dXJuIG1vbWVudC5wYXJzZVpvbmUodmFsdWUpO1xyXG4gIH1cclxufVxyXG4iLCIvKiBuZ3gtbW9tZW50IChjKSAyMDE1LCAyMDE2IFVyaSBTaGFrZWQgLyBNSVQgTGljZW5jZSAqL1xyXG5cclxuaW1wb3J0IHtQaXBlLCBQaXBlVHJhbnNmb3JtfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5jb25zdCBtb21lbnRDb25zdHJ1Y3RvciA9IG1vbWVudDtcclxuXHJcbkBQaXBlKHsgbmFtZTogJ2FtU3VidHJhY3QnIH0pXHJcbmV4cG9ydCBjbGFzcyBTdWJ0cmFjdFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgIHRyYW5zZm9ybSh2YWx1ZTogYW55LCBhbW91bnQ6IG1vbWVudC5EdXJhdGlvbklucHV0QXJnMSwgdW5pdD86IG1vbWVudC5EdXJhdGlvbklucHV0QXJnMik6IGFueSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBhbW91bnQgPT09ICd1bmRlZmluZWQnIHx8ICh0eXBlb2YgYW1vdW50ID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgdW5pdCA9PT0gJ3VuZGVmaW5lZCcpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignU3VidHJhY3RQaXBlOiBtaXNzaW5nIHJlcXVpcmVkIGFyZ3VtZW50cycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbW9tZW50Q29uc3RydWN0b3IodmFsdWUpLnN1YnRyYWN0KGFtb3VudCwgdW5pdCk7XHJcbiAgICB9XHJcbn1cclxuIiwiLyogbmd4LW1vbWVudCAoYykgMjAxNSwgMjAxNiBVcmkgU2hha2VkIC8gTUlUIExpY2VuY2UgKi9cclxuXHJcbmltcG9ydCB7UGlwZSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIFBpcGVUcmFuc2Zvcm0sIE9uRGVzdHJveSwgTmdab25lfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5jb25zdCBtb21lbnRDb25zdHJ1Y3RvciA9IG1vbWVudDtcclxuXHJcbkBQaXBlKHtuYW1lOiAnYW1UaW1lQWdvJywgcHVyZTogZmFsc2V9KVxyXG5leHBvcnQgY2xhc3MgVGltZUFnb1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtLCBPbkRlc3Ryb3kge1xyXG4gIHByaXZhdGUgY3VycmVudFRpbWVyOiBudW1iZXIgfCBudWxsO1xyXG5cclxuICBwcml2YXRlIGxhc3RUaW1lOiBOdW1iZXI7XHJcbiAgcHJpdmF0ZSBsYXN0VmFsdWU6IG1vbWVudC5Nb21lbnRJbnB1dDtcclxuICBwcml2YXRlIGxhc3RPbWl0U3VmZml4OiBib29sZWFuO1xyXG4gIHByaXZhdGUgbGFzdExvY2FsZT86IHN0cmluZztcclxuICBwcml2YXRlIGxhc3RUZXh0OiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBmb3JtYXRGbjogKG06IG1vbWVudC5Nb21lbnQpID0+IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgbmdab25lOiBOZ1pvbmUpIHtcclxuICB9XHJcblxyXG4gIGZvcm1hdChtOiBtb21lbnQuTW9tZW50KSB7XHJcbiAgICByZXR1cm4gbS5mcm9tKG1vbWVudENvbnN0cnVjdG9yKCksIHRoaXMubGFzdE9taXRTdWZmaXgpO1xyXG4gIH1cclxuXHJcbiAgdHJhbnNmb3JtKHZhbHVlOiBtb21lbnQuTW9tZW50SW5wdXQsIG9taXRTdWZmaXg/OiBib29sZWFuLCBmb3JtYXRGbj86IChtOiBtb21lbnQuTW9tZW50KSA9PiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgaWYgKHRoaXMuaGFzQ2hhbmdlZCh2YWx1ZSwgb21pdFN1ZmZpeCkpIHtcclxuICAgICAgdGhpcy5sYXN0VGltZSA9IHRoaXMuZ2V0VGltZSh2YWx1ZSk7XHJcbiAgICAgIHRoaXMubGFzdFZhbHVlID0gdmFsdWU7XHJcbiAgICAgIHRoaXMubGFzdE9taXRTdWZmaXggPSBvbWl0U3VmZml4O1xyXG4gICAgICB0aGlzLmxhc3RMb2NhbGUgPSB0aGlzLmdldExvY2FsZSh2YWx1ZSk7XHJcbiAgICAgIHRoaXMuZm9ybWF0Rm4gPSBmb3JtYXRGbiB8fCB0aGlzLmZvcm1hdC5iaW5kKHRoaXMpO1xyXG4gICAgICB0aGlzLnJlbW92ZVRpbWVyKCk7XHJcbiAgICAgIHRoaXMuY3JlYXRlVGltZXIoKTtcclxuICAgICAgdGhpcy5sYXN0VGV4dCA9IHRoaXMuZm9ybWF0Rm4obW9tZW50Q29uc3RydWN0b3IodmFsdWUpKTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmNyZWF0ZVRpbWVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMubGFzdFRleHQ7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMucmVtb3ZlVGltZXIoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlVGltZXIoKSB7XHJcbiAgICBpZiAodGhpcy5jdXJyZW50VGltZXIpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG1vbWVudEluc3RhbmNlID0gbW9tZW50Q29uc3RydWN0b3IodGhpcy5sYXN0VmFsdWUpO1xyXG4gICAgY29uc3QgdGltZVRvVXBkYXRlID0gdGhpcy5nZXRTZWNvbmRzVW50aWxVcGRhdGUobW9tZW50SW5zdGFuY2UpICogMTAwMDtcclxuXHJcbiAgICB0aGlzLmN1cnJlbnRUaW1lciA9IHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcclxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIHRoaXMubGFzdFRleHQgPSB0aGlzLmZvcm1hdEZuKG1vbWVudENvbnN0cnVjdG9yKHRoaXMubGFzdFZhbHVlKSk7XHJcblxyXG4gICAgICAgICAgdGhpcy5jdXJyZW50VGltZXIgPSBudWxsO1xyXG4gICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHRoaXMuY2RSZWYubWFya0ZvckNoZWNrKCkpO1xyXG4gICAgICAgIH0sIHRpbWVUb1VwZGF0ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW1vdmVUaW1lcigpIHtcclxuICAgIGlmICh0aGlzLmN1cnJlbnRUaW1lcikge1xyXG4gICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMuY3VycmVudFRpbWVyKTtcclxuICAgICAgdGhpcy5jdXJyZW50VGltZXIgPSBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRTZWNvbmRzVW50aWxVcGRhdGUobW9tZW50SW5zdGFuY2U6IG1vbWVudC5Nb21lbnQpIHtcclxuICAgIGNvbnN0IGhvd09sZCA9IE1hdGguYWJzKG1vbWVudENvbnN0cnVjdG9yKCkuZGlmZihtb21lbnRJbnN0YW5jZSwgJ21pbnV0ZScpKTtcclxuICAgIGlmIChob3dPbGQgPCAxKSB7XHJcbiAgICAgIHJldHVybiAxO1xyXG4gICAgfSBlbHNlIGlmIChob3dPbGQgPCA2MCkge1xyXG4gICAgICByZXR1cm4gMzA7XHJcbiAgICB9IGVsc2UgaWYgKGhvd09sZCA8IDE4MCkge1xyXG4gICAgICByZXR1cm4gMzAwO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIDM2MDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGhhc0NoYW5nZWQodmFsdWU6IG1vbWVudC5Nb21lbnRJbnB1dCwgb21pdFN1ZmZpeD86IGJvb2xlYW4pOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmdldFRpbWUodmFsdWUpICE9PSB0aGlzLmxhc3RUaW1lXHJcbiAgICAgIHx8IHRoaXMuZ2V0TG9jYWxlKHZhbHVlKSAhPT0gdGhpcy5sYXN0TG9jYWxlXHJcbiAgICAgIHx8IG9taXRTdWZmaXggIT09IHRoaXMubGFzdE9taXRTdWZmaXg7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFRpbWUodmFsdWU6IG1vbWVudC5Nb21lbnRJbnB1dCk6IG51bWJlciB7XHJcbiAgICBpZiAobW9tZW50LmlzRGF0ZSh2YWx1ZSkpIHtcclxuICAgICAgcmV0dXJuIHZhbHVlLmdldFRpbWUoKTtcclxuICAgIH0gZWxzZSBpZiAobW9tZW50LmlzTW9tZW50KHZhbHVlKSkge1xyXG4gICAgICByZXR1cm4gdmFsdWUudmFsdWVPZigpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIG1vbWVudENvbnN0cnVjdG9yKHZhbHVlKS52YWx1ZU9mKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldExvY2FsZSh2YWx1ZTogbW9tZW50Lk1vbWVudElucHV0KTogc3RyaW5nIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gbW9tZW50LmlzTW9tZW50KHZhbHVlKSA/IHZhbHVlLmxvY2FsZSgpIDogbW9tZW50LmxvY2FsZSgpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5cclxuY29uc3QgbW9tZW50Q29uc3RydWN0b3IgPSBtb21lbnQ7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdhbVV0YycgfSlcclxuZXhwb3J0IGNsYXNzIFV0Y1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICB0cmFuc2Zvcm0odmFsdWU6IERhdGUgfCBtb21lbnQuTW9tZW50IHwgc3RyaW5nIHwgbnVtYmVyKTogbW9tZW50Lk1vbWVudCB7XHJcbiAgICByZXR1cm4gbW9tZW50Q29uc3RydWN0b3IodmFsdWUpLnV0YygpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOR1hfTU9NRU5UX09QVElPTlMsIE5neE1vbWVudE9wdGlvbnMgfSBmcm9tICcuL21vbWVudC1vcHRpb25zJztcclxuXHJcbmltcG9ydCB7IEFkZFBpcGUgfSBmcm9tICcuL2FkZC5waXBlJztcclxuaW1wb3J0IHsgQ2FsZW5kYXJQaXBlIH0gZnJvbSAnLi9jYWxlbmRhci5waXBlJztcclxuaW1wb3J0IHsgRGF0ZUZvcm1hdFBpcGUgfSBmcm9tICcuL2RhdGUtZm9ybWF0LnBpcGUnO1xyXG5pbXBvcnQgeyBEaWZmZXJlbmNlUGlwZSB9IGZyb20gJy4vZGlmZmVyZW5jZS5waXBlJztcclxuaW1wb3J0IHsgRHVyYXRpb25QaXBlIH0gZnJvbSAnLi9kdXJhdGlvbi5waXBlJztcclxuaW1wb3J0IHsgRnJvbVVuaXhQaXBlIH0gZnJvbSAnLi9mcm9tLXVuaXgucGlwZSc7XHJcbmltcG9ydCB7IEZyb21VdGNQaXBlIH0gZnJvbSAnLi9mcm9tLXV0Yy5waXBlJztcclxuaW1wb3J0IHsgSXNBZnRlclBpcGUgfSBmcm9tICcuL2lzLWFmdGVyLnBpcGUnO1xyXG5pbXBvcnQgeyBJc0JlZm9yZVBpcGUgfSBmcm9tICcuL2lzLWJlZm9yZS5waXBlJztcclxuaW1wb3J0IHsgTG9jYWxUaW1lUGlwZSB9IGZyb20gJy4vbG9jYWwucGlwZSc7XHJcbmltcG9ydCB7IExvY2FsZVBpcGUgfSBmcm9tICcuL2xvY2FsZS5waXBlJztcclxuaW1wb3J0IHsgUGFyc2VQaXBlIH0gZnJvbSAnLi9wYXJzZS5waXBlJztcclxuaW1wb3J0IHsgUGFyc2Vab25lUGlwZSB9IGZyb20gJy4vcGFyc2Utem9uZS5waXBlJztcclxuaW1wb3J0IHsgU3VidHJhY3RQaXBlIH0gZnJvbSAnLi9zdWJ0cmFjdC5waXBlJztcclxuaW1wb3J0IHsgVGltZUFnb1BpcGUgfSBmcm9tICcuL3RpbWUtYWdvLnBpcGUnO1xyXG5pbXBvcnQgeyBVdGNQaXBlIH0gZnJvbSAnLi91dGMucGlwZSc7XHJcblxyXG5jb25zdCBBTkdVTEFSX01PTUVOVF9QSVBFUyA9IFtcclxuICBBZGRQaXBlLFxyXG4gIENhbGVuZGFyUGlwZSxcclxuICBEYXRlRm9ybWF0UGlwZSxcclxuICBEaWZmZXJlbmNlUGlwZSxcclxuICBEdXJhdGlvblBpcGUsXHJcbiAgRnJvbVVuaXhQaXBlLFxyXG4gIFBhcnNlUGlwZSxcclxuICBTdWJ0cmFjdFBpcGUsXHJcbiAgVGltZUFnb1BpcGUsXHJcbiAgVXRjUGlwZSxcclxuICBGcm9tVXRjUGlwZSxcclxuICBMb2NhbFRpbWVQaXBlLFxyXG4gIExvY2FsZVBpcGUsXHJcbiAgUGFyc2Vab25lUGlwZSxcclxuICBJc0JlZm9yZVBpcGUsXHJcbiAgSXNBZnRlclBpcGVcclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBBTkdVTEFSX01PTUVOVF9QSVBFUyxcclxuICBleHBvcnRzOiBBTkdVTEFSX01PTUVOVF9QSVBFU1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTW9tZW50TW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdChvcHRpb25zPzogTmd4TW9tZW50T3B0aW9ucyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IE1vbWVudE1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcHJvdmlkZTogTkdYX01PTUVOVF9PUFRJT05TLCB1c2VWYWx1ZToge1xyXG4gICAgICAgICAgICAuLi5vcHRpb25zXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsibW9tZW50Q29uc3RydWN0b3IiLCJtb21lbnQuaXNNb21lbnQiLCJtb21lbnQuZHVyYXRpb24iLCJtb21lbnQucmVsYXRpdmVUaW1lVGhyZXNob2xkIiwibW9tZW50LnVuaXgiLCJtb21lbnQudXRjIiwibG9jYWxlIiwibW9tZW50LnBhcnNlWm9uZSIsIm1vbWVudC5pc0RhdGUiLCJtb21lbnQubG9jYWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7TUFLTSxpQkFBaUIsR0FBRyxNQUFNO0FBR2hDLE1BQWEsT0FBTzs7Ozs7OztJQUNoQixTQUFTLENBQUMsS0FBVSxFQUFFLE1BQWdDLEVBQUUsSUFBK0I7UUFDbkYsSUFBSSxPQUFPLE1BQU0sS0FBSyxXQUFXLEtBQUssT0FBTyxNQUFNLEtBQUssUUFBUSxJQUFJLE9BQU8sSUFBSSxLQUFLLFdBQVcsQ0FBQyxFQUFFO1lBQzlGLE1BQU0sSUFBSSxLQUFLLENBQUMscUNBQXFDLENB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

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/notifications/notifications.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/notifications/notifications.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"class1\">\r\n    <ion-menu-toggle class=\"class1\">\r\n      <ion-icon name=\"menu\" color=\"light\"></ion-icon>\r\n    </ion-menu-toggle>\r\n    <ion-title>Host Meeting</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content padding=\"true\">\r\n  <br />\r\n  <ion-card>\r\n    <ion-card-header color=\"secondary\" class=\"login-card-header\">\r\n      <ion-card-title>Start your first meeting</ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <form padding-right [formGroup]=\"inviteForm\">\r\n        <ion-item lines=\"inset\">\r\n          <ion-label position=\"floating\">Email</ion-label>\r\n          <ion-input\r\n            type=\"email\"\r\n            class=\"form-control\"\r\n            placeholder=\"Please Enter the attendee_email\"\r\n            formControlName=\"attendee_email\"\r\n          ></ion-input>\r\n        </ion-item>\r\n        <ion-item lines=\"inset\">\r\n          <ion-label position=\"floating\">channel name</ion-label>\r\n          <ion-input\r\n            class=\"form-control\"\r\n            placeholder=\"Please Enter the channel_name\"\r\n            formControlName=\"channel_name\"\r\n          ></ion-input>\r\n        </ion-item>\r\n        <ion-item lines=\"inset\">\r\n          <ion-datetime\r\n            type=\"datetime\"\r\n            class=\"form-control\"\r\n            formControlName=\"host_meeting_start_time\"\r\n            displayFormat=\"YYYY-MM-DDTHH:mm:00\"\r\n            placeholder=\"Enter start time\"\r\n          ></ion-datetime>\r\n        </ion-item>\r\n        <ion-item lines=\"inset\">\r\n          <ion-datetime\r\n            type=\"datetime\"\r\n            class=\"form-control\"\r\n            formControlName=\"host_meeting_end_time\"\r\n            displayFormat=\"YYYY-MM-DDTHH:mm:00\"\r\n            placeholder=\"Enter end time\"\r\n          ></ion-datetime>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"ion-item-right-margin\">\r\n          <ion-button size=\"default\" slot=\"end\" type=\"submit\" (click)=\"Invite()\"\r\n            >Invite</ion-button\r\n          >\r\n        </ion-item>\r\n      </form>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/notifications/notifications.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/notifications/notifications.module.ts ***!
  \*************************************************************/
/*! exports provided: NotificationsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsPageModule", function() { return NotificationsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-device-detector */ "./node_modules/ngx-device-detector/fesm2015/ngx-device-detector.js");
/* harmony import */ var ngx_moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-moment */ "./node_modules/ngx-moment/fesm2015/ngx-moment.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _notifications_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./notifications.page */ "./src/app/pages/notifications/notifications.page.ts");










const routes = [
    {
        path: '',
        component: _notifications_page__WEBPACK_IMPORTED_MODULE_8__["NotificationsPage"]
    }
];
let NotificationsPageModule = class NotificationsPageModule {
};
NotificationsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            ngx_moment__WEBPACK_IMPORTED_MODULE_6__["MomentModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            ngx_device_detector__WEBPACK_IMPORTED_MODULE_5__["DeviceDetectorModule"].forRoot()
        ],
        declarations: [_notifications_page__WEBPACK_IMPORTED_MODULE_8__["NotificationsPage"]]
    })
], NotificationsPageModule);



/***/ }),

/***/ "./src/app/pages/notifications/notifications.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/notifications/notifications.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".class1 {\n  float: left;\n}\n\nion-toolbar {\n  --ion-background-color: #0f4c81 !important;\n}\n\nion-title {\n  color: white;\n  text-align: center;\n}\n\nion-icon {\n  width: 30px;\n  height: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbm90aWZpY2F0aW9ucy9DOlxcVXNlcnNcXGxlbm92b1xcRGVza3RvcFxccHJvamVjdFxcYWN1TUVFVC9zcmNcXGFwcFxccGFnZXNcXG5vdGlmaWNhdGlvbnNcXG5vdGlmaWNhdGlvbnMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQ0NGOztBRENBO0VBQ0UsMENBQUE7QUNFRjs7QURBQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQ0dGOztBRERBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNJRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25vdGlmaWNhdGlvbnMvbm90aWZpY2F0aW9ucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2xhc3MxIHtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5pb24tdG9vbGJhciB7XHJcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzBmNGM4MSAhaW1wb3J0YW50O1xyXG59XHJcbmlvbi10aXRsZSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5pb24taWNvbiB7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG59XHJcbiIsIi5jbGFzczEge1xuICBmbG9hdDogbGVmdDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMGY0YzgxICFpbXBvcnRhbnQ7XG59XG5cbmlvbi10aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24taWNvbiB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/notifications/notifications.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/notifications/notifications.page.ts ***!
  \***********************************************************/
/*! exports provided: NotificationsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsPage", function() { return NotificationsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/notification.service */ "./src/app/services/notification.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../services/toast.service */ "./src/app/services/toast.service.ts");








let NotificationsPage = class NotificationsPage {
    constructor(renderer, formBuilder, webservice, auth, toastService, data) {
        this.renderer = renderer;
        this.formBuilder = formBuilder;
        this.webservice = webservice;
        this.auth = auth;
        this.toastService = toastService;
        this.data = data;
        this.submitAttempt = false;
        this.inviteForm = this.formBuilder.group({
            attendee_email: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('^[a-zA-Z0-9.]+[a-zA-Z0-9.%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                ]),
            ],
            host_meeting_start_time: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            host_meeting_end_time: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            channel_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
        });
    }
    ngOnInit() {
        this.auth.userData$.subscribe((res) => {
            this.authUser = res;
            console.log(typeof this.authUser);
        });
        let email = { attendee_email: this.authUser.user_email };
        this.subscription = this.webservice
            .notificationList(email)
            .subscribe((res) => {
            this.list = res.result;
            console.log(this.list);
        });
    }
    Invite() {
        this.submitAttempt = true;
        console.log(this.inviteForm);
        if (this.inviteForm.valid) {
            let bodystring = {
                host_id: this.authUser.ID,
                host_name: this.authUser.name,
                channel_name: this.inviteForm.get('channel_name').value,
                host_email: this.authUser.user_email,
                role: 'host',
                host_device_details: 'device_name',
                host_meeting_start_time: this.inviteForm.get('host_meeting_start_time')
                    .value,
                host_meeting_end_time: this.inviteForm.get('host_meeting_end_time')
                    .value,
                attendee_email: [this.inviteForm.get('attendee_email').value],
            };
            console.log(bodystring);
            this.webservice.AddInvitation(bodystring).subscribe();
        }
        else {
            console.log('error');
        }
    }
};
NotificationsPage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _services_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"] },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] }
];
NotificationsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notifications',
        template: __webpack_require__(/*! raw-loader!./notifications.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/notifications/notifications.page.html"),
        styles: [__webpack_require__(/*! ./notifications.page.scss */ "./src/app/pages/notifications/notifications.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        _services_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"],
        _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]])
], NotificationsPage);



/***/ })

}]);
//# sourceMappingURL=pages-notifications-notifications-module-es2015.js.map