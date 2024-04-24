(function (global) {
  'use strict';

  const data = {
    name:"flare",
    children:[
      {
        name:"NSW",
        children: [
          {
            name: "Homicide",
            children: [
              {
                name: "males",
                value: 178,
              },
              {
                name: "females",
                value: 31,
              },
            ]
          },
          {
            name: "Acts intended to cause injury",
            children: [
              {
                name: "males",
                value: 28447,
              },
              {
                name: "females",
                value: 9997,
              },
            ]
          },
          {
            name: "Sexual assault",
            children: [
              {
                name: "males",
                value: 2683,
              },
              {
                name: "females",
                value: 173,
              },
            ]
          },
          {
            name: "Dangerous/negligent acts",
            children: [
              {
                name: "males",
                value: 46,
              },
              {
                name: "females",
                value: 31,
              },
            ]
          },
          {
            name: "Abduction/harassment",
            children: [
              {
                name: "males",
                value: 954,
              },
              {
                name: "females",
                value: 278,
              },
            ]
          },
          {
            name: "Robbert/extortion",
            children: [
              {
                name: "males",
                value: 578,
              },
              {
                name: "females",
                value: 116,
              },
            ]
          },
          {
            name: "Unlawful entry with intent",
            children: [
              {
                name: "males",
                value: 1788,
              },
              {
                name: "females",
                value: 337,
              },
            ]
          },
          {
            name: "Theft",
            children: [
              {
                name: "males",
                value: 5732,
              },
              {
                name: "females",
                value: 3867,
              },
            ]
          },
          {
            name: "Fraud deception",
            children: [
              {
                name: "males",
                value: 1962,
              },
              {
                name: "females",
                value: 984,
              },
            ]
          },
          {
            name: "Illicit drugs",
            children: [
              {
                name: "males",
                value: 10739,
              },
              {
                name: "females",
                value: 2518,
              },
            ]
          },
          {
            name: "Weapons/explosives",
            children: [
              {
                name: "males",
                value: 1904,
              },
              {
                name: "females",
                value: 255,
              },
            ]
          },
          {
            name: "Property damage/env pollution",
            children: [
              {
                name: "males",
                value: 3107,
              },
              {
                name: "females",
                value: 915,
              },
            ]
          },
          {
            name: "Public order",
            children: [
              {
                name: "males",
                value: 8839,
              },
              {
                name: "females",
                value: 2379,
              },
            ]
          },
          {
            name: "Offences against justice",
            children: [
              {
                name: "males",
                value: 4414,
              },
              {
                name: "females",
                value: 1326,
              },
            ]
          },
          {
            name: "Misc offences",
            children: [
              {
                name: "males",
                value: 4832,
              },
              {
                name: "females",
                value: 517,
              },
            ]
          }
        ]
      },
      {
        name:"vic",
        children: [
          {
            name: "Homicide",
            children: [
              {
                name: "males",
                value: 114,
              },
              {
                name: "females",
                value: 15,
              },
            ]
          },
          {
            name: "Acts intended to cause injury",
            children: [
              {
                name: "males",
                value: 13825,
              },
              {
                name: "females",
                value: 3780,
              },
            ]
          },
          {
            name: "Sexual assault",
            children: [
              {
                name: "males",
                value: 1572,
              },
              {
                name: "females",
                value: 111,
              },
            ]
          },
          {
            name: "Dangerous/negligent acts",
            children: [
              {
                name: "males",
                value: 721,
              },
              {
                name: "females",
                value: 129,
              },
            ]
          },
          {
            name: "Abduction/harassment",
            children: [
              {
                name: "males",
                value: 1527,
              },
              {
                name: "females",
                value: 381,
              },
            ]
          },
          {
            name: "Robbert/extortion",
            children: [
              {
                name: "males",
                value: 621,
              },
              {
                name: "females",
                value: 129,
              },
            ]
          },
          {
            name: "Unlawful entry with intent",
            children: [
              {
                name: "males",
                value: 1310,
              },
              {
                name: "females",
                value: 345,
              },
            ]
          },
          {
            name: "Theft",
            children: [
              {
                name: "males",
                value: 4206,
              },
              {
                name: "females",
                value: 2970,
              },
            ]
          },
          {
            name: "Fraud deception",
            children: [
              {
                name: "males",
                value: 1546,
              },
              {
                name: "females",
                value: 198,
              },
            ]
          },
          {
            name: "Illicit drugs",
            children: [
              {
                name: "males",
                value: 5821,
              },
              {
                name: "females",
                value: 1935,
              },
            ]
          },
          {
            name: "Weapons/explosives",
            children: [
              {
                name: "males",
                value: 4465,
              },
              {
                name: "females",
                value: 808,
              },
            ]
          },
          {
            name: "Property damage/env pollution",
            children: [
              {
                name: "males",
                value: 2487,
              },
              {
                name: "females",
                value: 681,
              },
            ]
          },
          {
            name: "Public order",
            children: [
              {
                name: "males",
                value: 3971,
              },
              {
                name: "females",
                value: 802,
              },
            ]
          },
          {
            name: "Offences against justice",
            children: [
              {
                name: "males",
                value: 4391,
              },
              {
                name: "females",
                value: 1104,
              },
            ]
          },
          {
            name: "Misc offences",
            children: [
              {
                name: "males",
                value: 3532,
              },
              {
                name: "females",
                value: 521,
              },
            ]
          }
        ]
      },
      {
        name:"QLD",
        children: [
          {
            name: "Homicide",
            children: [
              {
                name: "males",
                value: 116,
              },
              {
                name: "females",
                value: 27,
              },
            ]
          },
          {
            name: "Acts intended to cause injury",
            children: [
              {
                name: "males",
                value: 10219,
              },
              {
                name: "females",
                value: 4093,
              },
            ]
          },
          {
            name: "Sexual assault",
            children: [
              {
                name: "males",
                value: 2472,
              },
              {
                name: "females",
                value: 255,
              },
            ]
          },
          {
            name: "Dangerous/negligent acts",
            children: [
              {
                name: "males",
                value: 589,
              },
              {
                name: "females",
                value: 173,
              },
            ]
          },
          {
            name: "Abduction/harassment",
            children: [
              {
                name: "males",
                value: 55,
              },
              {
                name: "females",
                value: 16,
              },
            ]
          },
          {
            name: "Robbert/extortion",
            children: [
              {
                name: "males",
                value: 925,
              },
              {
                name: "females",
                value: 285,
              },
            ]
          },
          {
            name: "Unlawful entry with intent",
            children: [
              {
                name: "males",
                value: 2997,
              },
              {
                name: "females",
                value: 778,
              },
            ]
          },
          {
            name: "Theft",
            children: [
              {
                name: "males",
                value: 6262,
              },
              {
                name: "females",
                value: 4395,
              },
            ]
          },
          {
            name: "Fraud deception",
            children: [
              {
                name: "males",
                value: 1051,
              },
              {
                name: "females",
                value: 687,
              },
            ]
          },
          {
            name: "Illicit drugs",
            children: [
              {
                name: "males",
                value: 11119,
              },
              {
                name: "females",
                value: 4735,
              },
            ]
          },
          {
            name: "Weapons/explosives",
            children: [
              {
                name: "males",
                value: 1388,
              },
              {
                name: "females",
                value: 254,
              },
            ]
          },
          {
            name: "Property damage/env pollution",
            children: [
              {
                name: "males",
                value: 3088,
              },
              {
                name: "females",
                value: 788,
              },
            ]
          },
          {
            name: "Public order",
            children: [
              {
                name: "males",
                value: 8264,
              },
              {
                name: "females",
                value: 2420,
              },
            ]
          },
          {
            name: "Offences against justice",
            children: [
              {
                name: "males",
                value: 10086,
              },
              {
                name: "females",
                value: 2463,
              },
            ]
          },
          {
            name: "Misc offences",
            children: [
              {
                name: "males",
                value: 136,
              },
              {
                name: "females",
                value: 70,
              },
            ]
          }
        ]
      },
      {
        name:"SA",
        children: [
          {
            name: "Homicide",
            children: [
              {
                name: "males",
                value: 12,
              },
              {
                name: "females",
                value: 0,
              },
            ]
          },
          {
            name: "Acts intended to cause injury",
            children: [
              {
                name: "males",
                value: 4247,
              },
              {
                name: "females",
                value: 1323,
              },
            ]
          },
          {
            name: "Sexual assault",
            children: [
              {
                name: "males",
                value: 427,
              },
              {
                name: "females",
                value: 22,
              },
            ]
          },
          {
            name: "Dangerous/negligent acts",
            children: [
              {
                name: "males",
                value: 29,
              },
              {
                name: "females",
                value: 18,
              },
            ]
          },
          {
            name: "Abduction/harassment",
            children: [
              {
                name: "males",
                value: 107,
              },
              {
                name: "females",
                value: 18,
              },
            ]
          },
          {
            name: "Robbert/extortion",
            children: [
              {
                name: "males",
                value: 148,
              },
              {
                name: "females",
                value: 42,
              },
            ]
          },
          {
            name: "Unlawful entry with intent",
            children: [
              {
                name: "males",
                value: 701,
              },
              {
                name: "females",
                value: 166,
              },
            ]
          },
          {
            name: "Theft",
            children: [
              {
                name: "males",
                value: 1082,
              },
              {
                name: "females",
                value: 800,
              },
            ]
          },
          {
            name: "Fraud deception",
            children: [
              {
                name: "males",
                value: 133,
              },
              {
                name: "females",
                value: 72,
              },
            ]
          },
          {
            name: "Illicit drugs",
            children: [
              {
                name: "males",
                value: 5680,
              },
              {
                name: "females",
                value: 1944,
              },
            ]
          },
          {
            name: "Weapons/explosives",
            children: [
              {
                name: "males",
                value: 1032,
              },
              {
                name: "females",
                value: 182,
              },
            ]
          },
          {
            name: "Property damage/env pollution",
            children: [
              {
                name: "males",
                value: 646,
              },
              {
                name: "females",
                value: 184,
              },
            ]
          },
          {
            name: "Public order",
            children: [
              {
                name: "males",
                value: 3089,
              },
              {
                name: "females",
                value: 1219,
              },
            ]
          },
          {
            name: "Offences against justice",
            children: [
              {
                name: "males",
                value: 1061,
              },
              {
                name: "females",
                value: 276,
              },
            ]
          },
          {
            name: "Misc offences",
            children: [
              {
                name: "males",
                value: 550,
              },
              {
                name: "females",
                value: 130,
              },
            ]
          }
        ]
      },
      {
        name:"WA",
        children: [
          {
            name: "Homicide",
            children: [
              {
                name: "males",
                value: 66,
              },
              {
                name: "females",
                value: 19,
              },
            ]
          },
          {
            name: "Acts intended to cause injury",
            children: [
              {
                name: "males",
                value: 6034,
              },
              {
                name: "females",
                value: 2307,
              },
            ]
          },
          {
            name: "Sexual assault",
            children: [
              {
                name: "males",
                value: 1274,
              },
              {
                name: "females",
                value: 97,
              },
            ]
          },
          {
            name: "Dangerous/negligent acts",
            children: [
              {
                name: "males",
                value: 133,
              },
              {
                name: "females",
                value: 53,
              },
            ]
          },
          {
            name: "Abduction/harassment",
            children: [
              {
                name: "males",
                value: 859,
              },
              {
                name: "females",
                value: 179,
              },
            ]
          },
          {
            name: "Robbert/extortion",
            children: [
              {
                name: "males",
                value: 606,
              },
              {
                name: "females",
                value: 186,
              },
            ]
          },
          {
            name: "Unlawful entry with intent",
            children: [
              {
                name: "males",
                value: 1727,
              },
              {
                name: "females",
                value: 481,
              },
            ]
          },
          {
            name: "Theft",
            children: [
              {
                name: "males",
                value: 2421,
              },
              {
                name: "females",
                value: 2097,
              },
            ]
          },
          {
            name: "Fraud deception",
            children: [
              {
                name: "males",
                value: 860,
              },
              {
                name: "females",
                value: 569,
              },
            ]
          },
          {
            name: "Illicit drugs",
            children: [
              {
                name: "males",
                value: 4130,
              },
              {
                name: "females",
                value: 1640,
              },
            ]
          },
          {
            name: "Weapons/explosives",
            children: [
              {
                name: "males",
                value: 1274,
              },
              {
                name: "females",
                value: 274,
              },
            ]
          },
          {
            name: "Property damage/env pollution",
            children: [
              {
                name: "males",
                value: 1306,
              },
              {
                name: "females",
                value: 366,
              },
            ]
          },
          {
            name: "Public order",
            children: [
              {
                name: "males",
                value: 2083,
              },
              {
                name: "females",
                value: 828,
              },
            ]
          },
          {
            name: "Offences against justice",
            children: [
              {
                name: "males",
                value: 3194,
              },
              {
                name: "females",
                value: 1003,
              },
            ]
          },
          {
            name: "Misc offences",
            children: [
              {
                name: "males",
                value: 254,
              },
              {
                name: "females",
                value: 100,
              },
            ]
          }
        ]
      },
      {
        name:"TAS",
        children: [
          {
            name: "Homicide",
            children: [
              {
                name: "males",
                value: 19,
              },
              {
                name: "females",
                value: 517,
              },
            ]
          },
          {
            name: "Acts intended to cause injury",
            children: [
              {
                name: "males",
                value: 1515,
              },
              {
                name: "females",
                value: 614,
              },
            ]
          },
          {
            name: "Sexual assault",
            children: [
              {
                name: "males",
                value: 143,
              },
              {
                name: "females",
                value: 9,
              },
            ]
          },
          {
            name: "Dangerous/negligent acts",
            children: [
              {
                name: "males",
                value: 3,
              },
              {
                name: "females",
                value: 0,
              },
            ]
          },
          {
            name: "Abduction/harassment",
            children: [
              {
                name: "males",
                value: 7,
              },
              {
                name: "females",
                value: 3,
              },
            ]
          },
          {
            name: "Robbert/extortion",
            children: [
              {
                name: "males",
                value: 69,
              },
              {
                name: "females",
                value: 25,
              },
            ]
          },
          {
            name: "Unlawful entry with intent",
            children: [
              {
                name: "males",
                value: 130,
              },
              {
                name: "females",
                value: 29,
              },
            ]
          },
          {
            name: "Theft",
            children: [
              {
                name: "males",
                value: 510,
              },
              {
                name: "females",
                value: 374,
              },
            ]
          },
          {
            name: "Fraud deception",
            children: [
              {
                name: "males",
                value: 147,
              },
              {
                name: "females",
                value: 57,
              },
            ]
          },
          {
            name: "Illicit drugs",
            children: [
              {
                name: "males",
                value: 649,
              },
              {
                name: "females",
                value: 231,
              },
            ]
          },
          {
            name: "Weapons/explosives",
            children: [
              {
                name: "males",
                value: 364,
              },
              {
                name: "females",
                value: 68,
              },
            ]
          },
          {
            name: "Property damage/env pollution",
            children: [
              {
                name: "males",
                value: 333,
              },
              {
                name: "females",
                value: 91,
              },
            ]
          },
          {
            name: "Public order",
            children: [
              {
                name: "males",
                value: 606,
              },
              {
                name: "females",
                value: 200,
              },
            ]
          },
          {
            name: "Offences against justice",
            children: [
              {
                name: "males",
                value: 517,
              },
              {
                name: "females",
                value: 143,
              },
            ]
          },
          {
            name: "Misc offences",
            children: [
              {
                name: "males",
                value: 460,
              },
              {
                name: "females",
                value: 51,
              },
            ]
          }
        ]
      },
      {
        name:"NT",
        children: [
          {
            name: "Homicide",
            children: [
              {
                name: "males",
                value: 19,
              },
              {
                name: "females",
                value: 7,
              },
            ]
          },
          {
            name: "Acts intended to cause injury",
            children: [
              {
                name: "males",
                value: 2847,
              },
              {
                name: "females",
                value: 795,
              },
            ]
          },
          {
            name: "Sexual assault",
            children: [
              {
                name: "males",
                value: 154,
              },
              {
                name: "females",
                value: 0,
              },
            ]
          },
          {
            name: "Dangerous/negligent acts",
            children: [
              {
                name: "males",
                value: 30,
              },
              {
                name: "females",
                value: 8,
              },
            ]
          },
          {
            name: "Abduction/harassment",
            children: [
              {
                name: "males",
                value: 70,
              },
              {
                name: "females",
                value: 13,
              },
            ]
          },
          {
            name: "Robbert/extortion",
            children: [
              {
                name: "males",
                value: 186,
              },
              {
                name: "females",
                value: 43,
              },
            ]
          },
          {
            name: "Unlawful entry with intent",
            children: [
              {
                name: "males",
                value: 383,
              },
              {
                name: "females",
                value: 65,
              },
            ]
          },
          {
            name: "Theft",
            children: [
              {
                name: "males",
                value: 152,
              },
              {
                name: "females",
                value: 79,
              },
            ]
          },
          {
            name: "Fraud deception",
            children: [
              {
                name: "males",
                value: 27,
              },
              {
                name: "females",
                value: 30,
              },
            ]
          },
          {
            name: "Illicit drugs",
            children: [
              {
                name: "males",
                value: 549,
              },
              {
                name: "females",
                value: 265,
              },
            ]
          },
          {
            name: "Weapons/explosives",
            children: [
              {
                name: "males",
                value: 277,
              },
              {
                name: "females",
                value: 44,
              },
            ]
          },
          {
            name: "Property damage/env pollution",
            children: [
              {
                name: "males",
                value: 135,
              },
              {
                name: "females",
                value: 59,
              },
            ]
          },
          {
            name: "Public order",
            children: [
              {
                name: "males",
                value: 1090,
              },
              {
                name: "females",
                value: 716,
              },
            ]
          },
          {
            name: "Offences against justice",
            children: [
              {
                name: "males",
                value: 573,
              },
              {
                name: "females",
                value: 166,
              },
            ]
          },
          {
            name: "Misc offences",
            children: [
              {
                name: "males",
                value: 39,
              },
              {
                name: "females",
                value: 7,
              },
            ]
          }
        ]
      },
      {
        name:"ACT",
        children: [
          {
            name: "Homicide",
            children: [
              {
                name: "males",
                value: 3,
              },
              {
                name: "females",
                value: 0,
              },
            ]
          },
          {
            name: "Acts intended to cause injury",
            children: [
              {
                name: "males",
                value: 670,
              },
              {
                name: "females",
                value: 231,
              },
            ]
          },
          {
            name: "Sexual assault",
            children: [
              {
                name: "males",
                value: 113,
              },
              {
                name: "females",
                value: 12,
              },
            ]
          },
          {
            name: "Dangerous/negligent acts",
            children: [
              {
                name: "males",
                value: 7,
              },
              {
                name: "females",
                value: 0,
              },
            ]
          },
          {
            name: "Abduction/harassment",
            children: [
              {
                name: "males",
                value: 32,
              },
              {
                name: "females",
                value: 5,
              },
            ]
          },
          {
            name: "Robbert/extortion",
            children: [
              {
                name: "males",
                value: 38,
              },
              {
                name: "females",
                value: 13,
              },
            ]
          },
          {
            name: "Unlawful entry with intent",
            children: [
              {
                name: "males",
                value: 71,
              },
              {
                name: "females",
                value: 14,
              },
            ]
          },
          {
            name: "Theft",
            children: [
              {
                name: "males",
                value: 141,
              },
              {
                name: "females",
                value: 64,
              },
            ]
          },
          {
            name: "Fraud deception",
            children: [
              {
                name: "males",
                value: 44,
              },
              {
                name: "females",
                value: 15,
              },
            ]
          },
          {
            name: "Illicit drugs",
            children: [
              {
                name: "males",
                value: 188,
              },
              {
                name: "females",
                value: 36,
              },
            ]
          },
          {
            name: "Weapons/explosives",
            children: [
              {
                name: "males",
                value: 128,
              },
              {
                name: "females",
                value: 19,
              },
            ]
          },
          {
            name: "Property damage/env pollution",
            children: [
              {
                name: "males",
                value: 126,
              },
              {
                name: "females",
                value: 31,
              },
            ]
          },
          {
            name: "Public order",
            children: [
              {
                name: "males",
                value: 183,
              },
              {
                name: "females",
                value: 63,
              },
            ]
          },
          {
            name: "Offences against justice",
            children: [
              {
                name: "males",
                value: 242,
              },
              {
                name: "females",
                value: 52,
              },
            ]
          },
          {
            name: "Misc offences",
            children: [
              {
                name: "males",
                value: 16,
              },
              {
                name: "females",
                value: 4,
              },
            ]
          }
        ]
      }
    ]
  };
  
  // AMD support
  if (typeof define === 'function' && define.amd) {
      define(function () {
        return data; 
      });
  // CommonJS and Node.js module support.
  } else if (typeof exports !== 'undefined') {
      // Support Node.js specific `module.exports` (which can be a function)
      if (typeof module !== 'undefined' && module.exports) {
          exports = module.exports = data;
      }
      // But always support CommonJS module 1.1.1 spec (`exports` cannot be a function)
      exports.data = data;
  } else {
      global.data = data;
  }
})(this);
