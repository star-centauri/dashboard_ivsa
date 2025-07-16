import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  init_installCanvasRenderer,
  install
} from "./chunk-5652AD3F.js";
import {
  extendChartView,
  extendComponentModel,
  extendComponentView,
  extendSeriesModel,
  format_exports,
  graphic_exports,
  helper_exports,
  init_core,
  init_installLabelLayout,
  installLabelLayout,
  number_exports,
  time_exports,
  util_exports as util_exports2
} from "./chunk-LRL55VZO.js";
import "./chunk-FI7JO2QX.js";
import {
  init_install,
  install as install2
} from "./chunk-AIXBCO6B.js";
import {
  Axis_default,
  Chart_default,
  Component_default,
  Component_default2,
  Model_default,
  PRIORITY,
  SeriesData_default,
  Series_default,
  connect,
  dataTool,
  dependencies,
  disConnect,
  disconnect,
  dispose,
  getCoordinateSystemDimensions,
  getInstanceByDom,
  getInstanceById,
  getMap,
  init,
  init_echarts,
  init_extension,
  parseGeoJSON,
  registerAction,
  registerCoordinateSystem,
  registerLayout,
  registerLoading,
  registerLocale,
  registerMap,
  registerPostInit,
  registerPostUpdate,
  registerPreprocessor,
  registerProcessor,
  registerTheme,
  registerTransform,
  registerUpdateLifecycle,
  registerVisual,
  setCanvasCreator,
  throttle,
  use,
  version
} from "./chunk-MWXWPE4L.js";
import {
  brushSingle,
  color_exports,
  env_default,
  matrix_exports,
  setPlatformAPI,
  util_exports,
  vector_exports,
  zrender_exports
} from "./chunk-6UM7DVM4.js";
import {
  __commonJS,
  __esm,
  __export,
  __toCommonJS
} from "./chunk-GBTWTWDP.js";

// node_modules/echarts/lib/echarts.js
var echarts_exports = {};
__export(echarts_exports, {
  Axis: () => Axis_default,
  ChartView: () => Chart_default,
  ComponentModel: () => Component_default,
  ComponentView: () => Component_default2,
  List: () => SeriesData_default,
  Model: () => Model_default,
  PRIORITY: () => PRIORITY,
  SeriesModel: () => Series_default,
  color: () => color_exports,
  connect: () => connect,
  dataTool: () => dataTool,
  default: () => echarts_default,
  dependencies: () => dependencies,
  disConnect: () => disConnect,
  disconnect: () => disconnect,
  dispose: () => dispose,
  env: () => env_default,
  extendChartView: () => extendChartView,
  extendComponentModel: () => extendComponentModel,
  extendComponentView: () => extendComponentView,
  extendSeriesModel: () => extendSeriesModel,
  format: () => format_exports,
  getCoordinateSystemDimensions: () => getCoordinateSystemDimensions,
  getInstanceByDom: () => getInstanceByDom,
  getInstanceById: () => getInstanceById,
  getMap: () => getMap,
  graphic: () => graphic_exports,
  helper: () => helper_exports,
  init: () => init,
  innerDrawElementOnCanvas: () => brushSingle,
  matrix: () => matrix_exports,
  number: () => number_exports,
  parseGeoJSON: () => parseGeoJSON,
  parseGeoJson: () => parseGeoJSON,
  registerAction: () => registerAction,
  registerCoordinateSystem: () => registerCoordinateSystem,
  registerLayout: () => registerLayout,
  registerLoading: () => registerLoading,
  registerLocale: () => registerLocale,
  registerMap: () => registerMap,
  registerPostInit: () => registerPostInit,
  registerPostUpdate: () => registerPostUpdate,
  registerPreprocessor: () => registerPreprocessor,
  registerProcessor: () => registerProcessor,
  registerTheme: () => registerTheme,
  registerTransform: () => registerTransform,
  registerUpdateLifecycle: () => registerUpdateLifecycle,
  registerVisual: () => registerVisual,
  setCanvasCreator: () => setCanvasCreator,
  setPlatformAPI: () => setPlatformAPI,
  throttle: () => throttle,
  time: () => time_exports,
  use: () => use,
  util: () => util_exports2,
  vector: () => vector_exports,
  version: () => version,
  zrUtil: () => util_exports,
  zrender: () => zrender_exports
});
var echarts_default;
var init_echarts2 = __esm({
  "node_modules/echarts/lib/echarts.js"() {
    init_core();
    init_extension();
    init_echarts();
    init_installCanvasRenderer();
    init_install();
    init_installLabelLayout();
    use([install, install2]);
    echarts_default = {
      init: function() {
        if (process.env.NODE_ENV !== "production") {
          console.error(`"import echarts from 'echarts/lib/echarts.js'" is not supported anymore. Use "import * as echarts from 'echarts/lib/echarts.js'" instead;`);
        }
        return init.apply(null, arguments);
      }
    };
    use(installLabelLayout);
  }
});

// node_modules/echarts/theme/dark.js
var require_dark = __commonJS({
  "node_modules/echarts/theme/dark.js"(exports) {
    (function(root, factory) {
      if (typeof define === "function" && define.amd) {
        define(["exports", "echarts"], factory);
      } else if (typeof exports === "object" && typeof exports.nodeName !== "string") {
        factory(exports, (init_echarts2(), __toCommonJS(echarts_exports)));
      } else {
        factory({}, root.echarts);
      }
    })(exports, function(exports2, echarts) {
      var log = function(msg) {
        if (typeof console !== "undefined") {
          console && console.error && console.error(msg);
        }
      };
      if (!echarts) {
        log("ECharts is not Loaded");
        return;
      }
      var contrastColor = "#B9B8CE";
      var backgroundColor = "#100C2A";
      var axisCommon = function() {
        return {
          axisLine: {
            lineStyle: {
              color: contrastColor
            }
          },
          splitLine: {
            lineStyle: {
              color: "#484753"
            }
          },
          splitArea: {
            areaStyle: {
              color: ["rgba(255,255,255,0.02)", "rgba(255,255,255,0.05)"]
            }
          },
          minorSplitLine: {
            lineStyle: {
              color: "#20203B"
            }
          }
        };
      };
      var colorPalette = ["#4992ff", "#7cffb2", "#fddd60", "#ff6e76", "#58d9f9", "#05c091", "#ff8a45", "#8d48e3", "#dd79ff"];
      var theme = {
        darkMode: true,
        color: colorPalette,
        backgroundColor,
        axisPointer: {
          lineStyle: {
            color: "#817f91"
          },
          crossStyle: {
            color: "#817f91"
          },
          label: {
            // TODO Contrast of label backgorundColor
            color: "#fff"
          }
        },
        legend: {
          textStyle: {
            color: contrastColor
          }
        },
        textStyle: {
          color: contrastColor
        },
        title: {
          textStyle: {
            color: "#EEF1FA"
          },
          subtextStyle: {
            color: "#B9B8CE"
          }
        },
        toolbox: {
          iconStyle: {
            borderColor: contrastColor
          }
        },
        dataZoom: {
          borderColor: "#71708A",
          textStyle: {
            color: contrastColor
          },
          brushStyle: {
            color: "rgba(135,163,206,0.3)"
          },
          handleStyle: {
            color: "#353450",
            borderColor: "#C5CBE3"
          },
          moveHandleStyle: {
            color: "#B0B6C3",
            opacity: 0.3
          },
          fillerColor: "rgba(135,163,206,0.2)",
          emphasis: {
            handleStyle: {
              borderColor: "#91B7F2",
              color: "#4D587D"
            },
            moveHandleStyle: {
              color: "#636D9A",
              opacity: 0.7
            }
          },
          dataBackground: {
            lineStyle: {
              color: "#71708A",
              width: 1
            },
            areaStyle: {
              color: "#71708A"
            }
          },
          selectedDataBackground: {
            lineStyle: {
              color: "#87A3CE"
            },
            areaStyle: {
              color: "#87A3CE"
            }
          }
        },
        visualMap: {
          textStyle: {
            color: contrastColor
          }
        },
        timeline: {
          lineStyle: {
            color: contrastColor
          },
          label: {
            color: contrastColor
          },
          controlStyle: {
            color: contrastColor,
            borderColor: contrastColor
          }
        },
        calendar: {
          itemStyle: {
            color: backgroundColor
          },
          dayLabel: {
            color: contrastColor
          },
          monthLabel: {
            color: contrastColor
          },
          yearLabel: {
            color: contrastColor
          }
        },
        timeAxis: axisCommon(),
        logAxis: axisCommon(),
        valueAxis: axisCommon(),
        categoryAxis: axisCommon(),
        line: {
          symbol: "circle"
        },
        graph: {
          color: colorPalette
        },
        gauge: {
          title: {
            color: contrastColor
          }
        },
        candlestick: {
          itemStyle: {
            color: "#FD1050",
            color0: "#0CF49B",
            borderColor: "#FD1050",
            borderColor0: "#0CF49B"
          }
        }
      };
      theme.categoryAxis.splitLine.show = false;
      echarts.registerTheme("dark", theme);
    });
  }
});
export default require_dark();
//# sourceMappingURL=echarts_theme_dark.js.map
