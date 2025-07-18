import {
  createDimensions,
  createSeriesData_default,
  getLabelLineStatesModels,
  init_createDimensions,
  init_createSeriesData,
  init_labelGuideHelper,
  setLabelLineStyle,
  updateLabelLinePoints
} from "./chunk-V4KPG2DC.js";
import {
  Arc_default,
  AxisModelCommonMixin,
  BezierCurve_default,
  Chart_default,
  Circle_default,
  Component_default,
  Component_default2,
  Ellipse_default,
  IncrementalDisplayable_default,
  Line_default,
  LinearGradient_default,
  MAX_SAFE_INTEGER,
  Model_default,
  Polygon_default,
  Polyline_default,
  RadialGradient_default,
  Ring_default,
  Sector_default,
  Series_default,
  addCommas,
  animateLabelValue,
  asc,
  capitalFirst,
  clipPointsByRect,
  clipRectByRect,
  createIcon,
  createScaleByModel,
  createSymbol,
  createTextStyle,
  enableDataStack,
  enableHoverEmphasis,
  extendPath,
  extendShape,
  format,
  formatTime,
  formatTpl,
  getECData,
  getLayoutRect,
  getPercentWithPrecision,
  getPixelPrecision,
  getPrecision,
  getPrecisionSafe,
  getShapeClass,
  getStackedDimension,
  getTextRect,
  getTooltipMarker,
  getTransform,
  hideOverlap,
  initProps,
  init_Axis,
  init_Chart,
  init_Component,
  init_Component2,
  init_Model,
  init_Series,
  init_SeriesData,
  init_axisHelper,
  init_axisModelCommonMixin,
  init_dataStackHelper,
  init_echarts,
  init_extension,
  init_format,
  init_graphic,
  init_innerStore,
  init_labelLayoutHelper,
  init_labelStyle,
  init_layout,
  init_model,
  init_number,
  init_parseGeoJson,
  init_states,
  init_symbol,
  init_throttle,
  init_time,
  isDimensionStacked,
  isElementRemoved,
  isNumeric,
  isRadianAroundZero,
  labelInner,
  linearMap,
  makeImage,
  makeInner,
  makePath,
  mergePath,
  nice,
  niceScaleExtent,
  normalizeCssArray,
  numericToNumber,
  parseDate,
  parsePercent,
  prepareLayoutList,
  quantile,
  quantity,
  quantityExponent,
  reformIntervals,
  registerShape,
  remRadian,
  resizePath,
  round,
  shiftLayoutOnX,
  shiftLayoutOnY,
  toCamelCase,
  updateProps,
  use
} from "./chunk-EXFL2HOC.js";
import {
  BoundingRect_default,
  CompoundPath_default,
  Group_default,
  Image_default,
  Rect_default,
  Text_default,
  Transformable_default,
  bind,
  clone,
  curry,
  defaults,
  each,
  encodeHTML,
  extend,
  filter,
  indexOf,
  inherits,
  init_Transformable,
  init_color,
  init_env,
  init_graphic as init_graphic2,
  init_matrix,
  init_platform,
  init_util,
  init_util2,
  init_vector,
  init_zrender,
  isArray,
  isFunction,
  isObject,
  isString,
  keys,
  map,
  merge,
  mixin,
  normalizeRadian,
  reduce,
  retrieve2,
  truncateText
} from "./chunk-JTAMZJCF.js";
import {
  __esm,
  __export
} from "./chunk-DZYXDVEG.js";

// node_modules/echarts/lib/export/api/helper.js
var helper_exports = {};
__export(helper_exports, {
  createDimensions: () => createDimensions,
  createList: () => createList,
  createScale: () => createScale,
  createSymbol: () => createSymbol,
  createTextStyle: () => createTextStyle2,
  dataStack: () => dataStack,
  enableHoverEmphasis: () => enableHoverEmphasis,
  getECData: () => getECData,
  getLayoutRect: () => getLayoutRect,
  mixinAxisModelCommonMethods: () => mixinAxisModelCommonMethods
});
function createList(seriesModel) {
  return createSeriesData_default(null, seriesModel);
}
function createScale(dataExtent, option) {
  var axisModel = option;
  if (!(option instanceof Model_default)) {
    axisModel = new Model_default(option);
  }
  var scale = createScaleByModel(axisModel);
  scale.setExtent(dataExtent[0], dataExtent[1]);
  niceScaleExtent(scale, axisModel);
  return scale;
}
function mixinAxisModelCommonMethods(Model) {
  mixin(Model, AxisModelCommonMixin);
}
function createTextStyle2(textStyleModel, opts) {
  opts = opts || {};
  return createTextStyle(textStyleModel, null, null, opts.state !== "normal");
}
var dataStack;
var init_helper = __esm({
  "node_modules/echarts/lib/export/api/helper.js"() {
    init_util();
    init_createSeriesData();
    init_axisHelper();
    init_axisModelCommonMixin();
    init_Model();
    init_layout();
    init_dataStackHelper();
    init_innerStore();
    init_labelStyle();
    init_createDimensions();
    init_symbol();
    init_states();
    dataStack = {
      isDimensionStacked,
      enableDataStack,
      getStackedDimension
    };
  }
});

// node_modules/echarts/lib/export/api/number.js
var number_exports = {};
__export(number_exports, {
  MAX_SAFE_INTEGER: () => MAX_SAFE_INTEGER,
  asc: () => asc,
  getPercentWithPrecision: () => getPercentWithPrecision,
  getPixelPrecision: () => getPixelPrecision,
  getPrecision: () => getPrecision,
  getPrecisionSafe: () => getPrecisionSafe,
  isNumeric: () => isNumeric,
  isRadianAroundZero: () => isRadianAroundZero,
  linearMap: () => linearMap,
  nice: () => nice,
  numericToNumber: () => numericToNumber,
  parseDate: () => parseDate,
  quantile: () => quantile,
  quantity: () => quantity,
  quantityExponent: () => quantityExponent,
  reformIntervals: () => reformIntervals,
  remRadian: () => remRadian,
  round: () => round
});
var init_number2 = __esm({
  "node_modules/echarts/lib/export/api/number.js"() {
    init_number();
  }
});

// node_modules/echarts/lib/export/api/time.js
var time_exports = {};
__export(time_exports, {
  format: () => format,
  parse: () => parseDate
});
var init_time2 = __esm({
  "node_modules/echarts/lib/export/api/time.js"() {
    init_number();
    init_time();
  }
});

// node_modules/echarts/lib/export/api/graphic.js
var graphic_exports = {};
__export(graphic_exports, {
  Arc: () => Arc_default,
  BezierCurve: () => BezierCurve_default,
  BoundingRect: () => BoundingRect_default,
  Circle: () => Circle_default,
  CompoundPath: () => CompoundPath_default,
  Ellipse: () => Ellipse_default,
  Group: () => Group_default,
  Image: () => Image_default,
  IncrementalDisplayable: () => IncrementalDisplayable_default,
  Line: () => Line_default,
  LinearGradient: () => LinearGradient_default,
  Polygon: () => Polygon_default,
  Polyline: () => Polyline_default,
  RadialGradient: () => RadialGradient_default,
  Rect: () => Rect_default,
  Ring: () => Ring_default,
  Sector: () => Sector_default,
  Text: () => Text_default,
  clipPointsByRect: () => clipPointsByRect,
  clipRectByRect: () => clipRectByRect,
  createIcon: () => createIcon,
  extendPath: () => extendPath,
  extendShape: () => extendShape,
  getShapeClass: () => getShapeClass,
  getTransform: () => getTransform,
  initProps: () => initProps,
  makeImage: () => makeImage,
  makePath: () => makePath,
  mergePath: () => mergePath,
  registerShape: () => registerShape,
  resizePath: () => resizePath,
  updateProps: () => updateProps
});
var init_graphic3 = __esm({
  "node_modules/echarts/lib/export/api/graphic.js"() {
    init_graphic();
  }
});

// node_modules/echarts/lib/export/api/format.js
var format_exports = {};
__export(format_exports, {
  addCommas: () => addCommas,
  capitalFirst: () => capitalFirst,
  encodeHTML: () => encodeHTML,
  formatTime: () => formatTime,
  formatTpl: () => formatTpl,
  getTextRect: () => getTextRect,
  getTooltipMarker: () => getTooltipMarker,
  normalizeCssArray: () => normalizeCssArray,
  toCamelCase: () => toCamelCase,
  truncateText: () => truncateText
});
var init_format2 = __esm({
  "node_modules/echarts/lib/export/api/format.js"() {
    init_format();
  }
});

// node_modules/echarts/lib/export/api/util.js
var util_exports2 = {};
__export(util_exports2, {
  bind: () => bind,
  clone: () => clone,
  curry: () => curry,
  defaults: () => defaults,
  each: () => each,
  extend: () => extend,
  filter: () => filter,
  indexOf: () => indexOf,
  inherits: () => inherits,
  isArray: () => isArray,
  isFunction: () => isFunction,
  isObject: () => isObject,
  isString: () => isString,
  map: () => map,
  merge: () => merge,
  reduce: () => reduce
});
var init_util3 = __esm({
  "node_modules/echarts/lib/export/api/util.js"() {
    init_util();
  }
});

// node_modules/echarts/lib/export/api.js
function extendComponentModel(proto) {
  var Model = Component_default.extend(proto);
  Component_default.registerClass(Model);
  return Model;
}
function extendComponentView(proto) {
  var View = Component_default2.extend(proto);
  Component_default2.registerClass(View);
  return View;
}
function extendSeriesModel(proto) {
  var Model = Series_default.extend(proto);
  Series_default.registerClass(Model);
  return Model;
}
function extendChartView(proto) {
  var View = Chart_default.extend(proto);
  Chart_default.registerClass(View);
  return View;
}
var init_api = __esm({
  "node_modules/echarts/lib/export/api.js"() {
    init_Component();
    init_Component2();
    init_Series();
    init_Chart();
    init_SeriesData();
    init_zrender();
    init_matrix();
    init_vector();
    init_util();
    init_color();
    init_throttle();
    init_helper();
    init_extension();
    init_platform();
    init_parseGeoJson();
    init_parseGeoJson();
    init_number2();
    init_time2();
    init_graphic3();
    init_format2();
    init_util3();
    init_env();
    init_Model();
    init_Axis();
    init_graphic2();
  }
});

// node_modules/echarts/lib/label/LabelManager.js
function cloneArr(points) {
  if (points) {
    var newPoints = [];
    for (var i = 0; i < points.length; i++) {
      newPoints.push(points[i].slice());
    }
    return newPoints;
  }
}
function prepareLayoutCallbackParams(labelItem, hostEl) {
  var label = labelItem.label;
  var labelLine = hostEl && hostEl.getTextGuideLine();
  return {
    dataIndex: labelItem.dataIndex,
    dataType: labelItem.dataType,
    seriesIndex: labelItem.seriesModel.seriesIndex,
    text: labelItem.label.style.text,
    rect: labelItem.hostRect,
    labelRect: labelItem.rect,
    // x: labelAttr.x,
    // y: labelAttr.y,
    align: label.style.align,
    verticalAlign: label.style.verticalAlign,
    labelLinePoints: cloneArr(labelLine && labelLine.shape.points)
  };
}
function extendWithKeys(target, source, keys2) {
  for (var i = 0; i < keys2.length; i++) {
    var key = keys2[i];
    if (source[key] != null) {
      target[key] = source[key];
    }
  }
}
var LABEL_OPTION_TO_STYLE_KEYS, dummyTransformable, labelLayoutInnerStore, labelLineAnimationStore, LABEL_LAYOUT_PROPS, LabelManager, LabelManager_default;
var init_LabelManager = __esm({
  "node_modules/echarts/lib/label/LabelManager.js"() {
    init_graphic();
    init_innerStore();
    init_number();
    init_Transformable();
    init_labelGuideHelper();
    init_model();
    init_util();
    init_labelLayoutHelper();
    init_labelStyle();
    init_util2();
    LABEL_OPTION_TO_STYLE_KEYS = ["align", "verticalAlign", "width", "height", "fontSize"];
    dummyTransformable = new Transformable_default();
    labelLayoutInnerStore = makeInner();
    labelLineAnimationStore = makeInner();
    LABEL_LAYOUT_PROPS = ["x", "y", "rotation"];
    LabelManager = /** @class */
    function() {
      function LabelManager2() {
        this._labelList = [];
        this._chartViewList = [];
      }
      LabelManager2.prototype.clearLabels = function() {
        this._labelList = [];
        this._chartViewList = [];
      };
      LabelManager2.prototype._addLabel = function(dataIndex, dataType, seriesModel, label, layoutOption) {
        var labelStyle = label.style;
        var hostEl = label.__hostTarget;
        var textConfig = hostEl.textConfig || {};
        var labelTransform = label.getComputedTransform();
        var labelRect = label.getBoundingRect().plain();
        BoundingRect_default.applyTransform(labelRect, labelRect, labelTransform);
        if (labelTransform) {
          dummyTransformable.setLocalTransform(labelTransform);
        } else {
          dummyTransformable.x = dummyTransformable.y = dummyTransformable.rotation = dummyTransformable.originX = dummyTransformable.originY = 0;
          dummyTransformable.scaleX = dummyTransformable.scaleY = 1;
        }
        dummyTransformable.rotation = normalizeRadian(dummyTransformable.rotation);
        var host = label.__hostTarget;
        var hostRect;
        if (host) {
          hostRect = host.getBoundingRect().plain();
          var transform = host.getComputedTransform();
          BoundingRect_default.applyTransform(hostRect, hostRect, transform);
        }
        var labelGuide = hostRect && host.getTextGuideLine();
        this._labelList.push({
          label,
          labelLine: labelGuide,
          seriesModel,
          dataIndex,
          dataType,
          layoutOption,
          computedLayoutOption: null,
          rect: labelRect,
          hostRect,
          // Label with lower priority will be hidden when overlapped
          // Use rect size as default priority
          priority: hostRect ? hostRect.width * hostRect.height : 0,
          // Save default label attributes.
          // For restore if developers want get back to default value in callback.
          defaultAttr: {
            ignore: label.ignore,
            labelGuideIgnore: labelGuide && labelGuide.ignore,
            x: dummyTransformable.x,
            y: dummyTransformable.y,
            scaleX: dummyTransformable.scaleX,
            scaleY: dummyTransformable.scaleY,
            rotation: dummyTransformable.rotation,
            style: {
              x: labelStyle.x,
              y: labelStyle.y,
              align: labelStyle.align,
              verticalAlign: labelStyle.verticalAlign,
              width: labelStyle.width,
              height: labelStyle.height,
              fontSize: labelStyle.fontSize
            },
            cursor: label.cursor,
            attachedPos: textConfig.position,
            attachedRot: textConfig.rotation
          }
        });
      };
      LabelManager2.prototype.addLabelsOfSeries = function(chartView) {
        var _this = this;
        this._chartViewList.push(chartView);
        var seriesModel = chartView.__model;
        var layoutOption = seriesModel.get("labelLayout");
        if (!(isFunction(layoutOption) || keys(layoutOption).length)) {
          return;
        }
        chartView.group.traverse(function(child) {
          if (child.ignore) {
            return true;
          }
          var textEl = child.getTextContent();
          var ecData = getECData(child);
          if (textEl && !textEl.disableLabelLayout) {
            _this._addLabel(ecData.dataIndex, ecData.dataType, seriesModel, textEl, layoutOption);
          }
        });
      };
      LabelManager2.prototype.updateLayoutConfig = function(api) {
        var width = api.getWidth();
        var height = api.getHeight();
        function createDragHandler(el, labelLineModel) {
          return function() {
            updateLabelLinePoints(el, labelLineModel);
          };
        }
        for (var i = 0; i < this._labelList.length; i++) {
          var labelItem = this._labelList[i];
          var label = labelItem.label;
          var hostEl = label.__hostTarget;
          var defaultLabelAttr = labelItem.defaultAttr;
          var layoutOption = void 0;
          if (isFunction(labelItem.layoutOption)) {
            layoutOption = labelItem.layoutOption(prepareLayoutCallbackParams(labelItem, hostEl));
          } else {
            layoutOption = labelItem.layoutOption;
          }
          layoutOption = layoutOption || {};
          labelItem.computedLayoutOption = layoutOption;
          var degreeToRadian = Math.PI / 180;
          if (hostEl) {
            hostEl.setTextConfig({
              // Force to set local false.
              local: false,
              // Ignore position and rotation config on the host el if x or y is changed.
              position: layoutOption.x != null || layoutOption.y != null ? null : defaultLabelAttr.attachedPos,
              // Ignore rotation config on the host el if rotation is changed.
              rotation: layoutOption.rotate != null ? layoutOption.rotate * degreeToRadian : defaultLabelAttr.attachedRot,
              offset: [layoutOption.dx || 0, layoutOption.dy || 0]
            });
          }
          var needsUpdateLabelLine = false;
          if (layoutOption.x != null) {
            label.x = parsePercent(layoutOption.x, width);
            label.setStyle("x", 0);
            needsUpdateLabelLine = true;
          } else {
            label.x = defaultLabelAttr.x;
            label.setStyle("x", defaultLabelAttr.style.x);
          }
          if (layoutOption.y != null) {
            label.y = parsePercent(layoutOption.y, height);
            label.setStyle("y", 0);
            needsUpdateLabelLine = true;
          } else {
            label.y = defaultLabelAttr.y;
            label.setStyle("y", defaultLabelAttr.style.y);
          }
          if (layoutOption.labelLinePoints) {
            var guideLine = hostEl.getTextGuideLine();
            if (guideLine) {
              guideLine.setShape({
                points: layoutOption.labelLinePoints
              });
              needsUpdateLabelLine = false;
            }
          }
          var labelLayoutStore = labelLayoutInnerStore(label);
          labelLayoutStore.needsUpdateLabelLine = needsUpdateLabelLine;
          label.rotation = layoutOption.rotate != null ? layoutOption.rotate * degreeToRadian : defaultLabelAttr.rotation;
          label.scaleX = defaultLabelAttr.scaleX;
          label.scaleY = defaultLabelAttr.scaleY;
          for (var k = 0; k < LABEL_OPTION_TO_STYLE_KEYS.length; k++) {
            var key = LABEL_OPTION_TO_STYLE_KEYS[k];
            label.setStyle(key, layoutOption[key] != null ? layoutOption[key] : defaultLabelAttr.style[key]);
          }
          if (layoutOption.draggable) {
            label.draggable = true;
            label.cursor = "move";
            if (hostEl) {
              var hostModel = labelItem.seriesModel;
              if (labelItem.dataIndex != null) {
                var data = labelItem.seriesModel.getData(labelItem.dataType);
                hostModel = data.getItemModel(labelItem.dataIndex);
              }
              label.on("drag", createDragHandler(hostEl, hostModel.getModel("labelLine")));
            }
          } else {
            label.off("drag");
            label.cursor = defaultLabelAttr.cursor;
          }
        }
      };
      LabelManager2.prototype.layout = function(api) {
        var width = api.getWidth();
        var height = api.getHeight();
        var labelList = prepareLayoutList(this._labelList);
        var labelsNeedsAdjustOnX = filter(labelList, function(item) {
          return item.layoutOption.moveOverlap === "shiftX";
        });
        var labelsNeedsAdjustOnY = filter(labelList, function(item) {
          return item.layoutOption.moveOverlap === "shiftY";
        });
        shiftLayoutOnX(labelsNeedsAdjustOnX, 0, width);
        shiftLayoutOnY(labelsNeedsAdjustOnY, 0, height);
        var labelsNeedsHideOverlap = filter(labelList, function(item) {
          return item.layoutOption.hideOverlap;
        });
        hideOverlap(labelsNeedsHideOverlap);
      };
      LabelManager2.prototype.processLabelsOverall = function() {
        var _this = this;
        each(this._chartViewList, function(chartView) {
          var seriesModel = chartView.__model;
          var ignoreLabelLineUpdate = chartView.ignoreLabelLineUpdate;
          var animationEnabled = seriesModel.isAnimationEnabled();
          chartView.group.traverse(function(child) {
            if (child.ignore && !child.forceLabelAnimation) {
              return true;
            }
            var needsUpdateLabelLine = !ignoreLabelLineUpdate;
            var label = child.getTextContent();
            if (!needsUpdateLabelLine && label) {
              needsUpdateLabelLine = labelLayoutInnerStore(label).needsUpdateLabelLine;
            }
            if (needsUpdateLabelLine) {
              _this._updateLabelLine(child, seriesModel);
            }
            if (animationEnabled) {
              _this._animateLabels(child, seriesModel);
            }
          });
        });
      };
      LabelManager2.prototype._updateLabelLine = function(el, seriesModel) {
        var textEl = el.getTextContent();
        var ecData = getECData(el);
        var dataIndex = ecData.dataIndex;
        if (textEl && dataIndex != null) {
          var data = seriesModel.getData(ecData.dataType);
          var itemModel = data.getItemModel(dataIndex);
          var defaultStyle = {};
          var visualStyle = data.getItemVisual(dataIndex, "style");
          if (visualStyle) {
            var visualType = data.getVisual("drawType");
            defaultStyle.stroke = visualStyle[visualType];
          }
          var labelLineModel = itemModel.getModel("labelLine");
          setLabelLineStyle(el, getLabelLineStatesModels(itemModel), defaultStyle);
          updateLabelLinePoints(el, labelLineModel);
        }
      };
      LabelManager2.prototype._animateLabels = function(el, seriesModel) {
        var textEl = el.getTextContent();
        var guideLine = el.getTextGuideLine();
        if (textEl && (el.forceLabelAnimation || !textEl.ignore && !textEl.invisible && !el.disableLabelAnimation && !isElementRemoved(el))) {
          var layoutStore = labelLayoutInnerStore(textEl);
          var oldLayout = layoutStore.oldLayout;
          var ecData = getECData(el);
          var dataIndex = ecData.dataIndex;
          var newProps = {
            x: textEl.x,
            y: textEl.y,
            rotation: textEl.rotation
          };
          var data = seriesModel.getData(ecData.dataType);
          if (!oldLayout) {
            textEl.attr(newProps);
            if (!labelInner(textEl).valueAnimation) {
              var oldOpacity = retrieve2(textEl.style.opacity, 1);
              textEl.style.opacity = 0;
              initProps(textEl, {
                style: {
                  opacity: oldOpacity
                }
              }, seriesModel, dataIndex);
            }
          } else {
            textEl.attr(oldLayout);
            var prevStates = el.prevStates;
            if (prevStates) {
              if (indexOf(prevStates, "select") >= 0) {
                textEl.attr(layoutStore.oldLayoutSelect);
              }
              if (indexOf(prevStates, "emphasis") >= 0) {
                textEl.attr(layoutStore.oldLayoutEmphasis);
              }
            }
            updateProps(textEl, newProps, seriesModel, dataIndex);
          }
          layoutStore.oldLayout = newProps;
          if (textEl.states.select) {
            var layoutSelect = layoutStore.oldLayoutSelect = {};
            extendWithKeys(layoutSelect, newProps, LABEL_LAYOUT_PROPS);
            extendWithKeys(layoutSelect, textEl.states.select, LABEL_LAYOUT_PROPS);
          }
          if (textEl.states.emphasis) {
            var layoutEmphasis = layoutStore.oldLayoutEmphasis = {};
            extendWithKeys(layoutEmphasis, newProps, LABEL_LAYOUT_PROPS);
            extendWithKeys(layoutEmphasis, textEl.states.emphasis, LABEL_LAYOUT_PROPS);
          }
          animateLabelValue(textEl, dataIndex, data, seriesModel, seriesModel);
        }
        if (guideLine && !guideLine.ignore && !guideLine.invisible) {
          var layoutStore = labelLineAnimationStore(guideLine);
          var oldLayout = layoutStore.oldLayout;
          var newLayout = {
            points: guideLine.shape.points
          };
          if (!oldLayout) {
            guideLine.setShape(newLayout);
            guideLine.style.strokePercent = 0;
            initProps(guideLine, {
              style: {
                strokePercent: 1
              }
            }, seriesModel);
          } else {
            guideLine.attr({
              shape: oldLayout
            });
            updateProps(guideLine, {
              shape: newLayout
            }, seriesModel);
          }
          layoutStore.oldLayout = newLayout;
        }
      };
      return LabelManager2;
    }();
    LabelManager_default = LabelManager;
  }
});

// node_modules/echarts/lib/label/installLabelLayout.js
function installLabelLayout(registers) {
  registers.registerUpdateLifecycle("series:beforeupdate", function(ecModel, api, params) {
    var labelManager = getLabelManager(api).labelManager;
    if (!labelManager) {
      labelManager = getLabelManager(api).labelManager = new LabelManager_default();
    }
    labelManager.clearLabels();
  });
  registers.registerUpdateLifecycle("series:layoutlabels", function(ecModel, api, params) {
    var labelManager = getLabelManager(api).labelManager;
    params.updatedSeries.forEach(function(series) {
      labelManager.addLabelsOfSeries(api.getViewOfSeriesModel(series));
    });
    labelManager.updateLayoutConfig(api);
    labelManager.layout(api);
    labelManager.processLabelsOverall();
  });
}
var getLabelManager;
var init_installLabelLayout = __esm({
  "node_modules/echarts/lib/label/installLabelLayout.js"() {
    init_model();
    init_LabelManager();
    getLabelManager = makeInner();
  }
});

// node_modules/echarts/lib/export/core.js
var init_core = __esm({
  "node_modules/echarts/lib/export/core.js"() {
    init_echarts();
    init_api();
    init_extension();
    init_installLabelLayout();
    use(installLabelLayout);
  }
});

export {
  helper_exports,
  number_exports,
  time_exports,
  graphic_exports,
  format_exports,
  util_exports2 as util_exports,
  extendComponentModel,
  extendComponentView,
  extendSeriesModel,
  extendChartView,
  installLabelLayout,
  init_installLabelLayout,
  init_core
};
//# sourceMappingURL=chunk-QLSRXA43.js.map
