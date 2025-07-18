import {
  init_install,
  install
} from "./chunk-GKQGY43M.js";
import {
  AxisBuilder_default,
  AxisView_default,
  BrushController_default,
  LineDraw_default,
  RoamController_default,
  SymbolDraw_default,
  VisualMapping_default,
  applyKeyframeAnimation,
  applyLeaveTransition,
  applyUpdateTransition,
  axisModelCreator,
  collect,
  convertFromEC4CompatibleStyle,
  getAxisInfo,
  install as install2,
  install2 as install3,
  install3 as install4,
  install4 as install5,
  isCoordinateSystemType,
  isEC4CompatibleStyle,
  isTransitionAll,
  layout,
  makeKey,
  makeLinearBrushOtherExtent,
  makeRectIsTargetByCursor,
  makeRectPanelClipPath,
  rectCoordAxisBuildSplitArea,
  rectCoordAxisHandleRemove,
  sliderMove,
  stopPreviousKeyframeAnimationAndRestore,
  updateLeaveTo
} from "./chunk-I4JZV4SQ.js";
import {
  AxisModelCommonMixin,
  Axis_default,
  Circle_default,
  Component_default,
  Component_default2,
  DataDiffer_default,
  DataFormatMixin,
  Interval_default,
  LOCATION_PARAMS,
  Line_default,
  LinearGradient_default,
  MULTIPLE_REFERRING,
  Model_default,
  Ordinal_default,
  Polygon_default,
  Polyline_default,
  Ring_default,
  SINGLE_REFERRING,
  SOURCE_FORMAT_ARRAY_ROWS,
  SOURCE_FORMAT_OBJECT_ROWS,
  Sector_default,
  SeriesData_default,
  SortOrderComparator,
  Time_default,
  TooltipMarkupStyleCreator,
  __extends,
  applyTransform,
  asc,
  box,
  buildTooltipMarkup,
  clear,
  compressBatches,
  contain,
  convertOptionIdName,
  convertToColorString,
  copyLayoutParams,
  createFilterComparator,
  createIcon,
  createOrUpdate,
  createOrUpdatePatternFromDecal,
  createScaleByModel,
  createSymbol,
  createTextStyle,
  createTooltipMarkup,
  defaultEmphasis,
  deprecateLog,
  enableHoverEmphasis,
  ensureScaleRawExtentInfo,
  enterBlur,
  enterEmphasis,
  findEventDispatcher,
  format,
  formatTpl,
  formatTplSimple,
  getAxisRawValue,
  getDataDimensionsOnAxis,
  getDataItemValue,
  getDecalFromPalette,
  getECData,
  getFont,
  getItemVisualFromData,
  getLabelStatesModels,
  getLayoutParams,
  getLayoutRect,
  getLocaleModel,
  getPaddingFromTooltipModel,
  getPixelPrecision,
  getPrecision,
  getRawValueParser,
  getShapeClass,
  getStackedDimension,
  getTooltipRenderMode,
  getTransform,
  getUID,
  getVisualFromData,
  graphic_exports,
  groupTransition,
  inheritDefaultOption,
  init_Axis,
  init_Component,
  init_Component2,
  init_DataDiffer,
  init_Interval,
  init_LinearGradient,
  init_Model,
  init_Ordinal,
  init_SeriesData,
  init_Time,
  init_axisHelper,
  init_axisModelCommonMixin,
  init_basicTransition,
  init_component,
  init_dataFormat,
  init_dataStackHelper,
  init_dataValueHelper,
  init_decal,
  init_echarts,
  init_event as init_event2,
  init_extension,
  init_format,
  init_graphic,
  init_helper,
  init_innerStore,
  init_internalComponentCreator,
  init_labelStyle,
  init_layout,
  init_locale,
  init_log,
  init_model,
  init_number,
  init_palette,
  init_polygon,
  init_scaleRawExtentInfo,
  init_states,
  init_symbol,
  init_throttle,
  init_time,
  init_tooltipMarkup,
  init_tslib_es6,
  init_types,
  isDimensionStacked,
  isNameSpecified,
  leaveBlur,
  leaveEmphasis,
  linePolygonIntersect,
  linearMap,
  makeInner,
  makeInternalComponentId,
  makePrintable,
  mappingToExists,
  mergeLayoutParam,
  mergePath,
  niceScaleExtent,
  normalizeCssArray,
  normalizeSymbolOffset,
  normalizeSymbolSize,
  normalizeToArray,
  normalizeTooltipFormatResult,
  parseDataValue,
  parseDate,
  parseFinder,
  parsePercent as parsePercent2,
  positionElement,
  preParseFinder,
  queryDataIndex,
  queryReferringComponents,
  reformIntervals,
  registerAction,
  registerInternalOptionCreator,
  setAsHighDownDispatcher,
  setItemVisualFromData,
  setLabelStyle,
  setStatesStylesFromModel,
  setTooltipConfig,
  sizeCalculable,
  subPixelOptimizeLine,
  symbolBuildProxies,
  throwError,
  toCamelCase,
  toggleHoverEmphasis,
  transformDirection,
  unionAxisExtentFromData,
  updateProps,
  use,
  warn,
  windowOpen
} from "./chunk-EXFL2HOC.js";
import {
  BoundingRect_default,
  Displayable_default,
  Group_default,
  Image_default,
  Point_default,
  Rect_default,
  Text_default,
  addEventListener,
  assert,
  bind,
  clone,
  create2 as create,
  createHashMap,
  curry,
  defaults,
  each,
  encodeHTML,
  env_default,
  extend,
  filter,
  getBoundingRect,
  hasOwn,
  indexOf,
  init_BoundingRect,
  init_Displayable,
  init_Image,
  init_Text,
  init_color,
  init_dom,
  init_env,
  init_event,
  init_matrix,
  init_text,
  init_util,
  isArray,
  isArrayLike,
  isDom,
  isFunction,
  isNumber,
  isObject,
  isRegExp,
  isString,
  keys,
  logError,
  map,
  merge,
  mergeAll,
  mixin,
  modifyAlpha,
  noop,
  normalizeEvent,
  parse,
  parsePercent,
  retrieve,
  retrieve2,
  rotate,
  stop,
  stringify,
  transformLocalCoord,
  translate,
  trim
} from "./chunk-JTAMZJCF.js";
import "./chunk-DZYXDVEG.js";

// node_modules/echarts/lib/component/axisPointer/CartesianAxisPointer.js
init_tslib_es6();

// node_modules/echarts/lib/component/axisPointer/BaseAxisPointer.js
init_util();
init_graphic();
init_event();
init_throttle();
init_model();
var inner = makeInner();
var clone2 = clone;
var bind2 = bind;
var BaseAxisPointer = (
  /** @class */
  function() {
    function BaseAxisPointer2() {
      this._dragging = false;
      this.animationThreshold = 15;
    }
    BaseAxisPointer2.prototype.render = function(axisModel, axisPointerModel, api, forceRender) {
      var value = axisPointerModel.get("value");
      var status = axisPointerModel.get("status");
      this._axisModel = axisModel;
      this._axisPointerModel = axisPointerModel;
      this._api = api;
      if (!forceRender && this._lastValue === value && this._lastStatus === status) {
        return;
      }
      this._lastValue = value;
      this._lastStatus = status;
      var group = this._group;
      var handle = this._handle;
      if (!status || status === "hide") {
        group && group.hide();
        handle && handle.hide();
        return;
      }
      group && group.show();
      handle && handle.show();
      var elOption = {};
      this.makeElOption(elOption, value, axisModel, axisPointerModel, api);
      var graphicKey = elOption.graphicKey;
      if (graphicKey !== this._lastGraphicKey) {
        this.clear(api);
      }
      this._lastGraphicKey = graphicKey;
      var moveAnimation = this._moveAnimation = this.determineAnimation(axisModel, axisPointerModel);
      if (!group) {
        group = this._group = new Group_default();
        this.createPointerEl(group, elOption, axisModel, axisPointerModel);
        this.createLabelEl(group, elOption, axisModel, axisPointerModel);
        api.getZr().add(group);
      } else {
        var doUpdateProps = curry(updateProps2, axisPointerModel, moveAnimation);
        this.updatePointerEl(group, elOption, doUpdateProps);
        this.updateLabelEl(group, elOption, doUpdateProps, axisPointerModel);
      }
      updateMandatoryProps(group, axisPointerModel, true);
      this._renderHandle(value);
    };
    BaseAxisPointer2.prototype.remove = function(api) {
      this.clear(api);
    };
    BaseAxisPointer2.prototype.dispose = function(api) {
      this.clear(api);
    };
    BaseAxisPointer2.prototype.determineAnimation = function(axisModel, axisPointerModel) {
      var animation = axisPointerModel.get("animation");
      var axis = axisModel.axis;
      var isCategoryAxis = axis.type === "category";
      var useSnap = axisPointerModel.get("snap");
      if (!useSnap && !isCategoryAxis) {
        return false;
      }
      if (animation === "auto" || animation == null) {
        var animationThreshold = this.animationThreshold;
        if (isCategoryAxis && axis.getBandWidth() > animationThreshold) {
          return true;
        }
        if (useSnap) {
          var seriesDataCount = getAxisInfo(axisModel).seriesDataCount;
          var axisExtent = axis.getExtent();
          return Math.abs(axisExtent[0] - axisExtent[1]) / seriesDataCount > animationThreshold;
        }
        return false;
      }
      return animation === true;
    };
    BaseAxisPointer2.prototype.makeElOption = function(elOption, value, axisModel, axisPointerModel, api) {
    };
    BaseAxisPointer2.prototype.createPointerEl = function(group, elOption, axisModel, axisPointerModel) {
      var pointerOption = elOption.pointer;
      if (pointerOption) {
        var pointerEl = inner(group).pointerEl = new graphic_exports[pointerOption.type](clone2(elOption.pointer));
        group.add(pointerEl);
      }
    };
    BaseAxisPointer2.prototype.createLabelEl = function(group, elOption, axisModel, axisPointerModel) {
      if (elOption.label) {
        var labelEl = inner(group).labelEl = new Text_default(clone2(elOption.label));
        group.add(labelEl);
        updateLabelShowHide(labelEl, axisPointerModel);
      }
    };
    BaseAxisPointer2.prototype.updatePointerEl = function(group, elOption, updateProps3) {
      var pointerEl = inner(group).pointerEl;
      if (pointerEl && elOption.pointer) {
        pointerEl.setStyle(elOption.pointer.style);
        updateProps3(pointerEl, {
          shape: elOption.pointer.shape
        });
      }
    };
    BaseAxisPointer2.prototype.updateLabelEl = function(group, elOption, updateProps3, axisPointerModel) {
      var labelEl = inner(group).labelEl;
      if (labelEl) {
        labelEl.setStyle(elOption.label.style);
        updateProps3(labelEl, {
          // Consider text length change in vertical axis, animation should
          // be used on shape, otherwise the effect will be weird.
          // TODOTODO
          // shape: elOption.label.shape,
          x: elOption.label.x,
          y: elOption.label.y
        });
        updateLabelShowHide(labelEl, axisPointerModel);
      }
    };
    BaseAxisPointer2.prototype._renderHandle = function(value) {
      if (this._dragging || !this.updateHandleTransform) {
        return;
      }
      var axisPointerModel = this._axisPointerModel;
      var zr = this._api.getZr();
      var handle = this._handle;
      var handleModel = axisPointerModel.getModel("handle");
      var status = axisPointerModel.get("status");
      if (!handleModel.get("show") || !status || status === "hide") {
        handle && zr.remove(handle);
        this._handle = null;
        return;
      }
      var isInit;
      if (!this._handle) {
        isInit = true;
        handle = this._handle = createIcon(handleModel.get("icon"), {
          cursor: "move",
          draggable: true,
          onmousemove: function(e) {
            stop(e.event);
          },
          onmousedown: bind2(this._onHandleDragMove, this, 0, 0),
          drift: bind2(this._onHandleDragMove, this),
          ondragend: bind2(this._onHandleDragEnd, this)
        });
        zr.add(handle);
      }
      updateMandatoryProps(handle, axisPointerModel, false);
      handle.setStyle(handleModel.getItemStyle(null, ["color", "borderColor", "borderWidth", "opacity", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY"]));
      var handleSize = handleModel.get("size");
      if (!isArray(handleSize)) {
        handleSize = [handleSize, handleSize];
      }
      handle.scaleX = handleSize[0] / 2;
      handle.scaleY = handleSize[1] / 2;
      createOrUpdate(this, "_doDispatchAxisPointer", handleModel.get("throttle") || 0, "fixRate");
      this._moveHandleToValue(value, isInit);
    };
    BaseAxisPointer2.prototype._moveHandleToValue = function(value, isInit) {
      updateProps2(this._axisPointerModel, !isInit && this._moveAnimation, this._handle, getHandleTransProps(this.getHandleTransform(value, this._axisModel, this._axisPointerModel)));
    };
    BaseAxisPointer2.prototype._onHandleDragMove = function(dx, dy) {
      var handle = this._handle;
      if (!handle) {
        return;
      }
      this._dragging = true;
      var trans = this.updateHandleTransform(getHandleTransProps(handle), [dx, dy], this._axisModel, this._axisPointerModel);
      this._payloadInfo = trans;
      handle.stopAnimation();
      handle.attr(getHandleTransProps(trans));
      inner(handle).lastProp = null;
      this._doDispatchAxisPointer();
    };
    BaseAxisPointer2.prototype._doDispatchAxisPointer = function() {
      var handle = this._handle;
      if (!handle) {
        return;
      }
      var payloadInfo = this._payloadInfo;
      var axisModel = this._axisModel;
      this._api.dispatchAction({
        type: "updateAxisPointer",
        x: payloadInfo.cursorPoint[0],
        y: payloadInfo.cursorPoint[1],
        tooltipOption: payloadInfo.tooltipOption,
        axesInfo: [{
          axisDim: axisModel.axis.dim,
          axisIndex: axisModel.componentIndex
        }]
      });
    };
    BaseAxisPointer2.prototype._onHandleDragEnd = function() {
      this._dragging = false;
      var handle = this._handle;
      if (!handle) {
        return;
      }
      var value = this._axisPointerModel.get("value");
      this._moveHandleToValue(value);
      this._api.dispatchAction({
        type: "hideTip"
      });
    };
    BaseAxisPointer2.prototype.clear = function(api) {
      this._lastValue = null;
      this._lastStatus = null;
      var zr = api.getZr();
      var group = this._group;
      var handle = this._handle;
      if (zr && group) {
        this._lastGraphicKey = null;
        group && zr.remove(group);
        handle && zr.remove(handle);
        this._group = null;
        this._handle = null;
        this._payloadInfo = null;
      }
      clear(this, "_doDispatchAxisPointer");
    };
    BaseAxisPointer2.prototype.doClear = function() {
    };
    BaseAxisPointer2.prototype.buildLabel = function(xy, wh, xDimIndex) {
      xDimIndex = xDimIndex || 0;
      return {
        x: xy[xDimIndex],
        y: xy[1 - xDimIndex],
        width: wh[xDimIndex],
        height: wh[1 - xDimIndex]
      };
    };
    return BaseAxisPointer2;
  }()
);
function updateProps2(animationModel, moveAnimation, el, props) {
  if (!propsEqual(inner(el).lastProp, props)) {
    inner(el).lastProp = props;
    moveAnimation ? updateProps(el, props, animationModel) : (el.stopAnimation(), el.attr(props));
  }
}
function propsEqual(lastProps, newProps) {
  if (isObject(lastProps) && isObject(newProps)) {
    var equals_1 = true;
    each(newProps, function(item, key) {
      equals_1 = equals_1 && propsEqual(lastProps[key], item);
    });
    return !!equals_1;
  } else {
    return lastProps === newProps;
  }
}
function updateLabelShowHide(labelEl, axisPointerModel) {
  labelEl[axisPointerModel.get(["label", "show"]) ? "show" : "hide"]();
}
function getHandleTransProps(trans) {
  return {
    x: trans.x || 0,
    y: trans.y || 0,
    rotation: trans.rotation || 0
  };
}
function updateMandatoryProps(group, axisPointerModel, silent) {
  var z = axisPointerModel.get("z");
  var zlevel = axisPointerModel.get("zlevel");
  group && group.traverse(function(el) {
    if (el.type !== "group") {
      z != null && (el.z = z);
      zlevel != null && (el.zlevel = zlevel);
      el.silent = silent;
    }
  });
}
var BaseAxisPointer_default = BaseAxisPointer;

// node_modules/echarts/lib/component/axisPointer/viewHelper.js
init_util();
init_graphic();
init_text();
init_format();
init_matrix();
init_axisHelper();
init_labelStyle();
function buildElStyle(axisPointerModel) {
  var axisPointerType = axisPointerModel.get("type");
  var styleModel = axisPointerModel.getModel(axisPointerType + "Style");
  var style;
  if (axisPointerType === "line") {
    style = styleModel.getLineStyle();
    style.fill = null;
  } else if (axisPointerType === "shadow") {
    style = styleModel.getAreaStyle();
    style.stroke = null;
  }
  return style;
}
function buildLabelElOption(elOption, axisModel, axisPointerModel, api, labelPos) {
  var value = axisPointerModel.get("value");
  var text = getValueLabel(value, axisModel.axis, axisModel.ecModel, axisPointerModel.get("seriesDataIndices"), {
    precision: axisPointerModel.get(["label", "precision"]),
    formatter: axisPointerModel.get(["label", "formatter"])
  });
  var labelModel = axisPointerModel.getModel("label");
  var paddings = normalizeCssArray(labelModel.get("padding") || 0);
  var font = labelModel.getFont();
  var textRect = getBoundingRect(text, font);
  var position = labelPos.position;
  var width = textRect.width + paddings[1] + paddings[3];
  var height = textRect.height + paddings[0] + paddings[2];
  var align = labelPos.align;
  align === "right" && (position[0] -= width);
  align === "center" && (position[0] -= width / 2);
  var verticalAlign = labelPos.verticalAlign;
  verticalAlign === "bottom" && (position[1] -= height);
  verticalAlign === "middle" && (position[1] -= height / 2);
  confineInContainer(position, width, height, api);
  var bgColor = labelModel.get("backgroundColor");
  if (!bgColor || bgColor === "auto") {
    bgColor = axisModel.get(["axisLine", "lineStyle", "color"]);
  }
  elOption.label = {
    // shape: {x: 0, y: 0, width: width, height: height, r: labelModel.get('borderRadius')},
    x: position[0],
    y: position[1],
    style: createTextStyle(labelModel, {
      text,
      font,
      fill: labelModel.getTextColor(),
      padding: paddings,
      backgroundColor: bgColor
    }),
    // Label should be over axisPointer.
    z2: 10
  };
}
function confineInContainer(position, width, height, api) {
  var viewWidth = api.getWidth();
  var viewHeight = api.getHeight();
  position[0] = Math.min(position[0] + width, viewWidth) - width;
  position[1] = Math.min(position[1] + height, viewHeight) - height;
  position[0] = Math.max(position[0], 0);
  position[1] = Math.max(position[1], 0);
}
function getValueLabel(value, axis, ecModel, seriesDataIndices, opt) {
  value = axis.scale.parse(value);
  var text = axis.scale.getLabel({
    value
  }, {
    // If `precision` is set, width can be fixed (like '12.00500'), which
    // helps to debounce when when moving label.
    precision: opt.precision
  });
  var formatter = opt.formatter;
  if (formatter) {
    var params_1 = {
      value: getAxisRawValue(axis, {
        value
      }),
      axisDimension: axis.dim,
      axisIndex: axis.index,
      seriesData: []
    };
    each(seriesDataIndices, function(idxItem) {
      var series = ecModel.getSeriesByIndex(idxItem.seriesIndex);
      var dataIndex = idxItem.dataIndexInside;
      var dataParams = series && series.getDataParams(dataIndex);
      dataParams && params_1.seriesData.push(dataParams);
    });
    if (isString(formatter)) {
      text = formatter.replace("{value}", text);
    } else if (isFunction(formatter)) {
      text = formatter(params_1);
    }
  }
  return text;
}
function getTransformedPosition(axis, value, layoutInfo) {
  var transform = create();
  rotate(transform, transform, layoutInfo.rotation);
  translate(transform, transform, layoutInfo.position);
  return applyTransform([axis.dataToCoord(value), (layoutInfo.labelOffset || 0) + (layoutInfo.labelDirection || 1) * (layoutInfo.labelMargin || 0)], transform);
}
function buildCartesianSingleLabelElOption(value, elOption, layoutInfo, axisModel, axisPointerModel, api) {
  var textLayout = AxisBuilder_default.innerTextLayout(layoutInfo.rotation, 0, layoutInfo.labelDirection);
  layoutInfo.labelMargin = axisPointerModel.get(["label", "margin"]);
  buildLabelElOption(elOption, axisModel, axisPointerModel, api, {
    position: getTransformedPosition(axisModel.axis, value, layoutInfo),
    align: textLayout.textAlign,
    verticalAlign: textLayout.textVerticalAlign
  });
}
function makeLineShape(p1, p2, xDimIndex) {
  xDimIndex = xDimIndex || 0;
  return {
    x1: p1[xDimIndex],
    y1: p1[1 - xDimIndex],
    x2: p2[xDimIndex],
    y2: p2[1 - xDimIndex]
  };
}
function makeRectShape(xy, wh, xDimIndex) {
  xDimIndex = xDimIndex || 0;
  return {
    x: xy[xDimIndex],
    y: xy[1 - xDimIndex],
    width: wh[xDimIndex],
    height: wh[1 - xDimIndex]
  };
}
function makeSectorShape(cx, cy, r0, r, startAngle, endAngle) {
  return {
    cx,
    cy,
    r0,
    r,
    startAngle,
    endAngle,
    clockwise: true
  };
}

// node_modules/echarts/lib/component/axisPointer/CartesianAxisPointer.js
var CartesianAxisPointer = (
  /** @class */
  function(_super) {
    __extends(CartesianAxisPointer2, _super);
    function CartesianAxisPointer2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    CartesianAxisPointer2.prototype.makeElOption = function(elOption, value, axisModel, axisPointerModel, api) {
      var axis = axisModel.axis;
      var grid = axis.grid;
      var axisPointerType = axisPointerModel.get("type");
      var otherExtent = getCartesian(grid, axis).getOtherAxis(axis).getGlobalExtent();
      var pixelValue = axis.toGlobalCoord(axis.dataToCoord(value, true));
      if (axisPointerType && axisPointerType !== "none") {
        var elStyle = buildElStyle(axisPointerModel);
        var pointerOption = pointerShapeBuilder[axisPointerType](axis, pixelValue, otherExtent);
        pointerOption.style = elStyle;
        elOption.graphicKey = pointerOption.type;
        elOption.pointer = pointerOption;
      }
      var layoutInfo = layout(grid.model, axisModel);
      buildCartesianSingleLabelElOption(
        // @ts-ignore
        value,
        elOption,
        layoutInfo,
        axisModel,
        axisPointerModel,
        api
      );
    };
    CartesianAxisPointer2.prototype.getHandleTransform = function(value, axisModel, axisPointerModel) {
      var layoutInfo = layout(axisModel.axis.grid.model, axisModel, {
        labelInside: false
      });
      layoutInfo.labelMargin = axisPointerModel.get(["handle", "margin"]);
      var pos = getTransformedPosition(axisModel.axis, value, layoutInfo);
      return {
        x: pos[0],
        y: pos[1],
        rotation: layoutInfo.rotation + (layoutInfo.labelDirection < 0 ? Math.PI : 0)
      };
    };
    CartesianAxisPointer2.prototype.updateHandleTransform = function(transform, delta, axisModel, axisPointerModel) {
      var axis = axisModel.axis;
      var grid = axis.grid;
      var axisExtent = axis.getGlobalExtent(true);
      var otherExtent = getCartesian(grid, axis).getOtherAxis(axis).getGlobalExtent();
      var dimIndex = axis.dim === "x" ? 0 : 1;
      var currPosition = [transform.x, transform.y];
      currPosition[dimIndex] += delta[dimIndex];
      currPosition[dimIndex] = Math.min(axisExtent[1], currPosition[dimIndex]);
      currPosition[dimIndex] = Math.max(axisExtent[0], currPosition[dimIndex]);
      var cursorOtherValue = (otherExtent[1] + otherExtent[0]) / 2;
      var cursorPoint = [cursorOtherValue, cursorOtherValue];
      cursorPoint[dimIndex] = currPosition[dimIndex];
      var tooltipOptions = [{
        verticalAlign: "middle"
      }, {
        align: "center"
      }];
      return {
        x: currPosition[0],
        y: currPosition[1],
        rotation: transform.rotation,
        cursorPoint,
        tooltipOption: tooltipOptions[dimIndex]
      };
    };
    return CartesianAxisPointer2;
  }(BaseAxisPointer_default)
);
function getCartesian(grid, axis) {
  var opt = {};
  opt[axis.dim + "AxisIndex"] = axis.index;
  return grid.getCartesian(opt);
}
var pointerShapeBuilder = {
  line: function(axis, pixelValue, otherExtent) {
    var targetShape = makeLineShape([pixelValue, otherExtent[0]], [pixelValue, otherExtent[1]], getAxisDimIndex(axis));
    return {
      type: "Line",
      subPixelOptimize: true,
      shape: targetShape
    };
  },
  shadow: function(axis, pixelValue, otherExtent) {
    var bandWidth = Math.max(1, axis.getBandWidth());
    var span = otherExtent[1] - otherExtent[0];
    return {
      type: "Rect",
      shape: makeRectShape([pixelValue - bandWidth / 2, otherExtent[0]], [bandWidth, span], getAxisDimIndex(axis))
    };
  }
};
function getAxisDimIndex(axis) {
  return axis.dim === "x" ? 0 : 1;
}
var CartesianAxisPointer_default = CartesianAxisPointer;

// node_modules/echarts/lib/component/axisPointer/AxisPointerModel.js
init_tslib_es6();
init_Component();
var AxisPointerModel = (
  /** @class */
  function(_super) {
    __extends(AxisPointerModel2, _super);
    function AxisPointerModel2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.type = AxisPointerModel2.type;
      return _this;
    }
    AxisPointerModel2.type = "axisPointer";
    AxisPointerModel2.defaultOption = {
      // 'auto' means that show when triggered by tooltip or handle.
      show: "auto",
      // zlevel: 0,
      z: 50,
      type: "line",
      // axispointer triggered by tootip determine snap automatically,
      // see `modelHelper`.
      snap: false,
      triggerTooltip: true,
      triggerEmphasis: true,
      value: null,
      status: null,
      link: [],
      // Do not set 'auto' here, otherwise global animation: false
      // will not effect at this axispointer.
      animation: null,
      animationDurationUpdate: 200,
      lineStyle: {
        color: "#B9BEC9",
        width: 1,
        type: "dashed"
      },
      shadowStyle: {
        color: "rgba(210,219,238,0.2)"
      },
      label: {
        show: true,
        formatter: null,
        precision: "auto",
        margin: 3,
        color: "#fff",
        padding: [5, 7, 5, 7],
        backgroundColor: "auto",
        borderColor: null,
        borderWidth: 0,
        borderRadius: 3
      },
      handle: {
        show: false,
        // eslint-disable-next-line
        icon: "M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z",
        size: 45,
        // handle margin is from symbol center to axis, which is stable when circular move.
        margin: 50,
        // color: '#1b8bbd'
        // color: '#2f4554'
        color: "#333",
        shadowBlur: 3,
        shadowColor: "#aaa",
        shadowOffsetX: 0,
        shadowOffsetY: 2,
        // For mobile performance
        throttle: 40
      }
    };
    return AxisPointerModel2;
  }(Component_default)
);
var AxisPointerModel_default = AxisPointerModel;

// node_modules/echarts/lib/component/axisPointer/AxisPointerView.js
init_tslib_es6();

// node_modules/echarts/lib/component/axisPointer/globalListener.js
init_util();
init_env();
init_model();
var inner2 = makeInner();
var each2 = each;
function register(key, api, handler) {
  if (env_default.node) {
    return;
  }
  var zr = api.getZr();
  inner2(zr).records || (inner2(zr).records = {});
  initGlobalListeners(zr, api);
  var record = inner2(zr).records[key] || (inner2(zr).records[key] = {});
  record.handler = handler;
}
function initGlobalListeners(zr, api) {
  if (inner2(zr).initialized) {
    return;
  }
  inner2(zr).initialized = true;
  useHandler("click", curry(doEnter, "click"));
  useHandler("mousemove", curry(doEnter, "mousemove"));
  useHandler("globalout", onLeave);
  function useHandler(eventType, cb) {
    zr.on(eventType, function(e) {
      var dis = makeDispatchAction(api);
      each2(inner2(zr).records, function(record) {
        record && cb(record, e, dis.dispatchAction);
      });
      dispatchTooltipFinally(dis.pendings, api);
    });
  }
}
function dispatchTooltipFinally(pendings, api) {
  var showLen = pendings.showTip.length;
  var hideLen = pendings.hideTip.length;
  var actuallyPayload;
  if (showLen) {
    actuallyPayload = pendings.showTip[showLen - 1];
  } else if (hideLen) {
    actuallyPayload = pendings.hideTip[hideLen - 1];
  }
  if (actuallyPayload) {
    actuallyPayload.dispatchAction = null;
    api.dispatchAction(actuallyPayload);
  }
}
function onLeave(record, e, dispatchAction3) {
  record.handler("leave", null, dispatchAction3);
}
function doEnter(currTrigger, record, e, dispatchAction3) {
  record.handler(currTrigger, e, dispatchAction3);
}
function makeDispatchAction(api) {
  var pendings = {
    showTip: [],
    hideTip: []
  };
  var dispatchAction3 = function(payload) {
    var pendingList = pendings[payload.type];
    if (pendingList) {
      pendingList.push(payload);
    } else {
      payload.dispatchAction = dispatchAction3;
      api.dispatchAction(payload);
    }
  };
  return {
    dispatchAction: dispatchAction3,
    pendings
  };
}
function unregister(key, api) {
  if (env_default.node) {
    return;
  }
  var zr = api.getZr();
  var record = (inner2(zr).records || {})[key];
  if (record) {
    inner2(zr).records[key] = null;
  }
}

// node_modules/echarts/lib/component/axisPointer/AxisPointerView.js
init_Component2();
var AxisPointerView = (
  /** @class */
  function(_super) {
    __extends(AxisPointerView2, _super);
    function AxisPointerView2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.type = AxisPointerView2.type;
      return _this;
    }
    AxisPointerView2.prototype.render = function(globalAxisPointerModel, ecModel, api) {
      var globalTooltipModel = ecModel.getComponent("tooltip");
      var triggerOn = globalAxisPointerModel.get("triggerOn") || globalTooltipModel && globalTooltipModel.get("triggerOn") || "mousemove|click";
      register("axisPointer", api, function(currTrigger, e, dispatchAction3) {
        if (triggerOn !== "none" && (currTrigger === "leave" || triggerOn.indexOf(currTrigger) >= 0)) {
          dispatchAction3({
            type: "updateAxisPointer",
            currTrigger,
            x: e && e.offsetX,
            y: e && e.offsetY
          });
        }
      });
    };
    AxisPointerView2.prototype.remove = function(ecModel, api) {
      unregister("axisPointer", api);
    };
    AxisPointerView2.prototype.dispose = function(ecModel, api) {
      unregister("axisPointer", api);
    };
    AxisPointerView2.type = "axisPointer";
    return AxisPointerView2;
  }(Component_default2)
);
var AxisPointerView_default = AxisPointerView;

// node_modules/echarts/lib/component/axisPointer/install.js
init_util();

// node_modules/echarts/lib/component/axisPointer/axisTrigger.js
init_model();

// node_modules/echarts/lib/component/axisPointer/findPointFromSeries.js
init_util();
init_model();
function findPointFromSeries(finder, ecModel) {
  var point = [];
  var seriesIndex = finder.seriesIndex;
  var seriesModel;
  if (seriesIndex == null || !(seriesModel = ecModel.getSeriesByIndex(seriesIndex))) {
    return {
      point: []
    };
  }
  var data = seriesModel.getData();
  var dataIndex = queryDataIndex(data, finder);
  if (dataIndex == null || dataIndex < 0 || isArray(dataIndex)) {
    return {
      point: []
    };
  }
  var el = data.getItemGraphicEl(dataIndex);
  var coordSys = seriesModel.coordinateSystem;
  if (seriesModel.getTooltipPosition) {
    point = seriesModel.getTooltipPosition(dataIndex) || [];
  } else if (coordSys && coordSys.dataToPoint) {
    if (finder.isStacked) {
      var baseAxis = coordSys.getBaseAxis();
      var valueAxis = coordSys.getOtherAxis(baseAxis);
      var valueAxisDim = valueAxis.dim;
      var baseAxisDim = baseAxis.dim;
      var baseDataOffset = valueAxisDim === "x" || valueAxisDim === "radius" ? 1 : 0;
      var baseDim = data.mapDimension(baseAxisDim);
      var stackedData = [];
      stackedData[baseDataOffset] = data.get(baseDim, dataIndex);
      stackedData[1 - baseDataOffset] = data.get(data.getCalculationInfo("stackResultDimension"), dataIndex);
      point = coordSys.dataToPoint(stackedData) || [];
    } else {
      point = coordSys.dataToPoint(data.getValues(map(coordSys.dimensions, function(dim) {
        return data.mapDimension(dim);
      }), dataIndex)) || [];
    }
  } else if (el) {
    var rect = el.getBoundingRect().clone();
    rect.applyTransform(el.transform);
    point = [rect.x + rect.width / 2, rect.y + rect.height / 2];
  }
  return {
    point,
    el
  };
}

// node_modules/echarts/lib/component/axisPointer/axisTrigger.js
init_util();
var inner3 = makeInner();
function axisTrigger(payload, ecModel, api) {
  var currTrigger = payload.currTrigger;
  var point = [payload.x, payload.y];
  var finder = payload;
  var dispatchAction3 = payload.dispatchAction || bind(api.dispatchAction, api);
  var coordSysAxesInfo = ecModel.getComponent("axisPointer").coordSysAxesInfo;
  if (!coordSysAxesInfo) {
    return;
  }
  if (illegalPoint(point)) {
    point = findPointFromSeries({
      seriesIndex: finder.seriesIndex,
      // Do not use dataIndexInside from other ec instance.
      // FIXME: auto detect it?
      dataIndex: finder.dataIndex
    }, ecModel).point;
  }
  var isIllegalPoint = illegalPoint(point);
  var inputAxesInfo = finder.axesInfo;
  var axesInfo = coordSysAxesInfo.axesInfo;
  var shouldHide = currTrigger === "leave" || illegalPoint(point);
  var outputPayload = {};
  var showValueMap = {};
  var dataByCoordSys = {
    list: [],
    map: {}
  };
  var updaters = {
    showPointer: curry(showPointer, showValueMap),
    showTooltip: curry(showTooltip, dataByCoordSys)
  };
  each(coordSysAxesInfo.coordSysMap, function(coordSys, coordSysKey) {
    var coordSysContainsPoint = isIllegalPoint || coordSys.containPoint(point);
    each(coordSysAxesInfo.coordSysAxesInfo[coordSysKey], function(axisInfo, key) {
      var axis = axisInfo.axis;
      var inputAxisInfo = findInputAxisInfo(inputAxesInfo, axisInfo);
      if (!shouldHide && coordSysContainsPoint && (!inputAxesInfo || inputAxisInfo)) {
        var val = inputAxisInfo && inputAxisInfo.value;
        if (val == null && !isIllegalPoint) {
          val = axis.pointToData(point);
        }
        val != null && processOnAxis(axisInfo, val, updaters, false, outputPayload);
      }
    });
  });
  var linkTriggers = {};
  each(axesInfo, function(tarAxisInfo, tarKey) {
    var linkGroup = tarAxisInfo.linkGroup;
    if (linkGroup && !showValueMap[tarKey]) {
      each(linkGroup.axesInfo, function(srcAxisInfo, srcKey) {
        var srcValItem = showValueMap[srcKey];
        if (srcAxisInfo !== tarAxisInfo && srcValItem) {
          var val = srcValItem.value;
          linkGroup.mapper && (val = tarAxisInfo.axis.scale.parse(linkGroup.mapper(val, makeMapperParam(srcAxisInfo), makeMapperParam(tarAxisInfo))));
          linkTriggers[tarAxisInfo.key] = val;
        }
      });
    }
  });
  each(linkTriggers, function(val, tarKey) {
    processOnAxis(axesInfo[tarKey], val, updaters, true, outputPayload);
  });
  updateModelActually(showValueMap, axesInfo, outputPayload);
  dispatchTooltipActually(dataByCoordSys, point, payload, dispatchAction3);
  dispatchHighDownActually(axesInfo, dispatchAction3, api);
  return outputPayload;
}
function processOnAxis(axisInfo, newValue, updaters, noSnap, outputFinder) {
  var axis = axisInfo.axis;
  if (axis.scale.isBlank() || !axis.containData(newValue)) {
    return;
  }
  if (!axisInfo.involveSeries) {
    updaters.showPointer(axisInfo, newValue);
    return;
  }
  var payloadInfo = buildPayloadsBySeries(newValue, axisInfo);
  var payloadBatch = payloadInfo.payloadBatch;
  var snapToValue = payloadInfo.snapToValue;
  if (payloadBatch[0] && outputFinder.seriesIndex == null) {
    extend(outputFinder, payloadBatch[0]);
  }
  if (!noSnap && axisInfo.snap) {
    if (axis.containData(snapToValue) && snapToValue != null) {
      newValue = snapToValue;
    }
  }
  updaters.showPointer(axisInfo, newValue, payloadBatch);
  updaters.showTooltip(axisInfo, payloadInfo, snapToValue);
}
function buildPayloadsBySeries(value, axisInfo) {
  var axis = axisInfo.axis;
  var dim = axis.dim;
  var snapToValue = value;
  var payloadBatch = [];
  var minDist = Number.MAX_VALUE;
  var minDiff = -1;
  each(axisInfo.seriesModels, function(series, idx) {
    var dataDim = series.getData().mapDimensionsAll(dim);
    var seriesNestestValue;
    var dataIndices;
    if (series.getAxisTooltipData) {
      var result = series.getAxisTooltipData(dataDim, value, axis);
      dataIndices = result.dataIndices;
      seriesNestestValue = result.nestestValue;
    } else {
      dataIndices = series.getData().indicesOfNearest(
        dataDim[0],
        value,
        // Add a threshold to avoid find the wrong dataIndex
        // when data length is not same.
        // false,
        axis.type === "category" ? 0.5 : null
      );
      if (!dataIndices.length) {
        return;
      }
      seriesNestestValue = series.getData().get(dataDim[0], dataIndices[0]);
    }
    if (seriesNestestValue == null || !isFinite(seriesNestestValue)) {
      return;
    }
    var diff = value - seriesNestestValue;
    var dist = Math.abs(diff);
    if (dist <= minDist) {
      if (dist < minDist || diff >= 0 && minDiff < 0) {
        minDist = dist;
        minDiff = diff;
        snapToValue = seriesNestestValue;
        payloadBatch.length = 0;
      }
      each(dataIndices, function(dataIndex) {
        payloadBatch.push({
          seriesIndex: series.seriesIndex,
          dataIndexInside: dataIndex,
          dataIndex: series.getData().getRawIndex(dataIndex)
        });
      });
    }
  });
  return {
    payloadBatch,
    snapToValue
  };
}
function showPointer(showValueMap, axisInfo, value, payloadBatch) {
  showValueMap[axisInfo.key] = {
    value,
    payloadBatch
  };
}
function showTooltip(dataByCoordSys, axisInfo, payloadInfo, value) {
  var payloadBatch = payloadInfo.payloadBatch;
  var axis = axisInfo.axis;
  var axisModel = axis.model;
  var axisPointerModel = axisInfo.axisPointerModel;
  if (!axisInfo.triggerTooltip || !payloadBatch.length) {
    return;
  }
  var coordSysModel = axisInfo.coordSys.model;
  var coordSysKey = makeKey(coordSysModel);
  var coordSysItem = dataByCoordSys.map[coordSysKey];
  if (!coordSysItem) {
    coordSysItem = dataByCoordSys.map[coordSysKey] = {
      coordSysId: coordSysModel.id,
      coordSysIndex: coordSysModel.componentIndex,
      coordSysType: coordSysModel.type,
      coordSysMainType: coordSysModel.mainType,
      dataByAxis: []
    };
    dataByCoordSys.list.push(coordSysItem);
  }
  coordSysItem.dataByAxis.push({
    axisDim: axis.dim,
    axisIndex: axisModel.componentIndex,
    axisType: axisModel.type,
    axisId: axisModel.id,
    value,
    // Caustion: viewHelper.getValueLabel is actually on "view stage", which
    // depends that all models have been updated. So it should not be performed
    // here. Considering axisPointerModel used here is volatile, which is hard
    // to be retrieve in TooltipView, we prepare parameters here.
    valueLabelOpt: {
      precision: axisPointerModel.get(["label", "precision"]),
      formatter: axisPointerModel.get(["label", "formatter"])
    },
    seriesDataIndices: payloadBatch.slice()
  });
}
function updateModelActually(showValueMap, axesInfo, outputPayload) {
  var outputAxesInfo = outputPayload.axesInfo = [];
  each(axesInfo, function(axisInfo, key) {
    var option = axisInfo.axisPointerModel.option;
    var valItem = showValueMap[key];
    if (valItem) {
      !axisInfo.useHandle && (option.status = "show");
      option.value = valItem.value;
      option.seriesDataIndices = (valItem.payloadBatch || []).slice();
    } else {
      !axisInfo.useHandle && (option.status = "hide");
    }
    option.status === "show" && outputAxesInfo.push({
      axisDim: axisInfo.axis.dim,
      axisIndex: axisInfo.axis.model.componentIndex,
      value: option.value
    });
  });
}
function dispatchTooltipActually(dataByCoordSys, point, payload, dispatchAction3) {
  if (illegalPoint(point) || !dataByCoordSys.list.length) {
    dispatchAction3({
      type: "hideTip"
    });
    return;
  }
  var sampleItem = ((dataByCoordSys.list[0].dataByAxis[0] || {}).seriesDataIndices || [])[0] || {};
  dispatchAction3({
    type: "showTip",
    escapeConnect: true,
    x: point[0],
    y: point[1],
    tooltipOption: payload.tooltipOption,
    position: payload.position,
    dataIndexInside: sampleItem.dataIndexInside,
    dataIndex: sampleItem.dataIndex,
    seriesIndex: sampleItem.seriesIndex,
    dataByCoordSys: dataByCoordSys.list
  });
}
function dispatchHighDownActually(axesInfo, dispatchAction3, api) {
  var zr = api.getZr();
  var highDownKey = "axisPointerLastHighlights";
  var lastHighlights = inner3(zr)[highDownKey] || {};
  var newHighlights = inner3(zr)[highDownKey] = {};
  each(axesInfo, function(axisInfo, key) {
    var option = axisInfo.axisPointerModel.option;
    option.status === "show" && axisInfo.triggerEmphasis && each(option.seriesDataIndices, function(batchItem) {
      var key2 = batchItem.seriesIndex + " | " + batchItem.dataIndex;
      newHighlights[key2] = batchItem;
    });
  });
  var toHighlight = [];
  var toDownplay = [];
  each(lastHighlights, function(batchItem, key) {
    !newHighlights[key] && toDownplay.push(batchItem);
  });
  each(newHighlights, function(batchItem, key) {
    !lastHighlights[key] && toHighlight.push(batchItem);
  });
  toDownplay.length && api.dispatchAction({
    type: "downplay",
    escapeConnect: true,
    // Not blur others when highlight in axisPointer.
    notBlur: true,
    batch: toDownplay
  });
  toHighlight.length && api.dispatchAction({
    type: "highlight",
    escapeConnect: true,
    // Not blur others when highlight in axisPointer.
    notBlur: true,
    batch: toHighlight
  });
}
function findInputAxisInfo(inputAxesInfo, axisInfo) {
  for (var i = 0; i < (inputAxesInfo || []).length; i++) {
    var inputAxisInfo = inputAxesInfo[i];
    if (axisInfo.axis.dim === inputAxisInfo.axisDim && axisInfo.axis.model.componentIndex === inputAxisInfo.axisIndex) {
      return inputAxisInfo;
    }
  }
}
function makeMapperParam(axisInfo) {
  var axisModel = axisInfo.axis.model;
  var item = {};
  var dim = item.axisDim = axisInfo.axis.dim;
  item.axisIndex = item[dim + "AxisIndex"] = axisModel.componentIndex;
  item.axisName = item[dim + "AxisName"] = axisModel.name;
  item.axisId = item[dim + "AxisId"] = axisModel.id;
  return item;
}
function illegalPoint(point) {
  return !point || point[0] == null || isNaN(point[0]) || point[1] == null || isNaN(point[1]);
}

// node_modules/echarts/lib/component/axisPointer/install.js
function install6(registers) {
  AxisView_default.registerAxisPointerClass("CartesianAxisPointer", CartesianAxisPointer_default);
  registers.registerComponentModel(AxisPointerModel_default);
  registers.registerComponentView(AxisPointerView_default);
  registers.registerPreprocessor(function(option) {
    if (option) {
      (!option.axisPointer || option.axisPointer.length === 0) && (option.axisPointer = {});
      var link = option.axisPointer.link;
      if (link && !isArray(link)) {
        option.axisPointer.link = [link];
      }
    }
  });
  registers.registerProcessor(registers.PRIORITY.PROCESSOR.STATISTIC, function(ecModel, api) {
    ecModel.getComponent("axisPointer").coordSysAxesInfo = collect(ecModel, api);
  });
  registers.registerAction({
    type: "updateAxisPointer",
    event: "updateAxisPointer",
    update: ":updateAxisPointer"
  }, axisTrigger);
}

// node_modules/echarts/lib/component/grid/install.js
init_extension();
function install7(registers) {
  use(install2);
  use(install6);
}

// node_modules/echarts/lib/component/polar/install.js
init_tslib_es6();
init_extension();

// node_modules/echarts/lib/component/axisPointer/PolarAxisPointer.js
init_tslib_es6();
init_graphic();
init_matrix();
var PolarAxisPointer = (
  /** @class */
  function(_super) {
    __extends(PolarAxisPointer2, _super);
    function PolarAxisPointer2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    PolarAxisPointer2.prototype.makeElOption = function(elOption, value, axisModel, axisPointerModel, api) {
      var axis = axisModel.axis;
      if (axis.dim === "angle") {
        this.animationThreshold = Math.PI / 18;
      }
      var polar = axis.polar;
      var otherAxis = polar.getOtherAxis(axis);
      var otherExtent = otherAxis.getExtent();
      var coordValue = axis.dataToCoord(value);
      var axisPointerType = axisPointerModel.get("type");
      if (axisPointerType && axisPointerType !== "none") {
        var elStyle = buildElStyle(axisPointerModel);
        var pointerOption = pointerShapeBuilder2[axisPointerType](axis, polar, coordValue, otherExtent);
        pointerOption.style = elStyle;
        elOption.graphicKey = pointerOption.type;
        elOption.pointer = pointerOption;
      }
      var labelMargin = axisPointerModel.get(["label", "margin"]);
      var labelPos = getLabelPosition(value, axisModel, axisPointerModel, polar, labelMargin);
      buildLabelElOption(elOption, axisModel, axisPointerModel, api, labelPos);
    };
    return PolarAxisPointer2;
  }(BaseAxisPointer_default)
);
function getLabelPosition(value, axisModel, axisPointerModel, polar, labelMargin) {
  var axis = axisModel.axis;
  var coord = axis.dataToCoord(value);
  var axisAngle = polar.getAngleAxis().getExtent()[0];
  axisAngle = axisAngle / 180 * Math.PI;
  var radiusExtent = polar.getRadiusAxis().getExtent();
  var position;
  var align;
  var verticalAlign;
  if (axis.dim === "radius") {
    var transform = create();
    rotate(transform, transform, axisAngle);
    translate(transform, transform, [polar.cx, polar.cy]);
    position = applyTransform([coord, -labelMargin], transform);
    var labelRotation = axisModel.getModel("axisLabel").get("rotate") || 0;
    var labelLayout = AxisBuilder_default.innerTextLayout(axisAngle, labelRotation * Math.PI / 180, -1);
    align = labelLayout.textAlign;
    verticalAlign = labelLayout.textVerticalAlign;
  } else {
    var r = radiusExtent[1];
    position = polar.coordToPoint([r + labelMargin, coord]);
    var cx = polar.cx;
    var cy = polar.cy;
    align = Math.abs(position[0] - cx) / r < 0.3 ? "center" : position[0] > cx ? "left" : "right";
    verticalAlign = Math.abs(position[1] - cy) / r < 0.3 ? "middle" : position[1] > cy ? "top" : "bottom";
  }
  return {
    position,
    align,
    verticalAlign
  };
}
var pointerShapeBuilder2 = {
  line: function(axis, polar, coordValue, otherExtent) {
    return axis.dim === "angle" ? {
      type: "Line",
      shape: makeLineShape(polar.coordToPoint([otherExtent[0], coordValue]), polar.coordToPoint([otherExtent[1], coordValue]))
    } : {
      type: "Circle",
      shape: {
        cx: polar.cx,
        cy: polar.cy,
        r: coordValue
      }
    };
  },
  shadow: function(axis, polar, coordValue, otherExtent) {
    var bandWidth = Math.max(1, axis.getBandWidth());
    var radian = Math.PI / 180;
    return axis.dim === "angle" ? {
      type: "Sector",
      shape: makeSectorShape(
        polar.cx,
        polar.cy,
        otherExtent[0],
        otherExtent[1],
        // In ECharts y is negative if angle is positive
        (-coordValue - bandWidth / 2) * radian,
        (-coordValue + bandWidth / 2) * radian
      )
    } : {
      type: "Sector",
      shape: makeSectorShape(polar.cx, polar.cy, coordValue - bandWidth / 2, coordValue + bandWidth / 2, 0, Math.PI * 2)
    };
  }
};
var PolarAxisPointer_default = PolarAxisPointer;

// node_modules/echarts/lib/coord/polar/PolarModel.js
init_tslib_es6();
init_Component();
var PolarModel = (
  /** @class */
  function(_super) {
    __extends(PolarModel2, _super);
    function PolarModel2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.type = PolarModel2.type;
      return _this;
    }
    PolarModel2.prototype.findAxisModel = function(axisType) {
      var foundAxisModel;
      var ecModel = this.ecModel;
      ecModel.eachComponent(axisType, function(axisModel) {
        if (axisModel.getCoordSysModel() === this) {
          foundAxisModel = axisModel;
        }
      }, this);
      return foundAxisModel;
    };
    PolarModel2.type = "polar";
    PolarModel2.dependencies = ["radiusAxis", "angleAxis"];
    PolarModel2.defaultOption = {
      // zlevel: 0,
      z: 0,
      center: ["50%", "50%"],
      radius: "80%"
    };
    return PolarModel2;
  }(Component_default)
);
var PolarModel_default = PolarModel;

// node_modules/echarts/lib/coord/polar/AxisModel.js
init_tslib_es6();
init_util();
init_Component();
init_axisModelCommonMixin();
init_model();
var PolarAxisModel = (
  /** @class */
  function(_super) {
    __extends(PolarAxisModel2, _super);
    function PolarAxisModel2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    PolarAxisModel2.prototype.getCoordSysModel = function() {
      return this.getReferringComponents("polar", SINGLE_REFERRING).models[0];
    };
    PolarAxisModel2.type = "polarAxis";
    return PolarAxisModel2;
  }(Component_default)
);
mixin(PolarAxisModel, AxisModelCommonMixin);
var AngleAxisModel = (
  /** @class */
  function(_super) {
    __extends(AngleAxisModel2, _super);
    function AngleAxisModel2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.type = AngleAxisModel2.type;
      return _this;
    }
    AngleAxisModel2.type = "angleAxis";
    return AngleAxisModel2;
  }(PolarAxisModel)
);
var RadiusAxisModel = (
  /** @class */
  function(_super) {
    __extends(RadiusAxisModel2, _super);
    function RadiusAxisModel2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.type = RadiusAxisModel2.type;
      return _this;
    }
    RadiusAxisModel2.type = "radiusAxis";
    return RadiusAxisModel2;
  }(PolarAxisModel)
);

// node_modules/echarts/lib/coord/polar/polarCreator.js
init_util();

// node_modules/echarts/lib/coord/polar/RadiusAxis.js
init_tslib_es6();
init_Axis();
var RadiusAxis = (
  /** @class */
  function(_super) {
    __extends(RadiusAxis2, _super);
    function RadiusAxis2(scale, radiusExtent) {
      return _super.call(this, "radius", scale, radiusExtent) || this;
    }
    RadiusAxis2.prototype.pointToData = function(point, clamp) {
      return this.polar.pointToData(point, clamp)[this.dim === "radius" ? 0 : 1];
    };
    return RadiusAxis2;
  }(Axis_default)
);
RadiusAxis.prototype.dataToRadius = Axis_default.prototype.dataToCoord;
RadiusAxis.prototype.radiusToData = Axis_default.prototype.coordToData;
var RadiusAxis_default = RadiusAxis;

// node_modules/echarts/lib/coord/polar/AngleAxis.js
init_tslib_es6();
init_text();
init_Axis();
init_model();
var inner4 = makeInner();
var AngleAxis = (
  /** @class */
  function(_super) {
    __extends(AngleAxis2, _super);
    function AngleAxis2(scale, angleExtent) {
      return _super.call(this, "angle", scale, angleExtent || [0, 360]) || this;
    }
    AngleAxis2.prototype.pointToData = function(point, clamp) {
      return this.polar.pointToData(point, clamp)[this.dim === "radius" ? 0 : 1];
    };
    AngleAxis2.prototype.calculateCategoryInterval = function() {
      var axis = this;
      var labelModel = axis.getLabelModel();
      var ordinalScale = axis.scale;
      var ordinalExtent = ordinalScale.getExtent();
      var tickCount = ordinalScale.count();
      if (ordinalExtent[1] - ordinalExtent[0] < 1) {
        return 0;
      }
      var tickValue = ordinalExtent[0];
      var unitSpan = axis.dataToCoord(tickValue + 1) - axis.dataToCoord(tickValue);
      var unitH = Math.abs(unitSpan);
      var rect = getBoundingRect(tickValue == null ? "" : tickValue + "", labelModel.getFont(), "center", "top");
      var maxH = Math.max(rect.height, 7);
      var dh = maxH / unitH;
      isNaN(dh) && (dh = Infinity);
      var interval = Math.max(0, Math.floor(dh));
      var cache = inner4(axis.model);
      var lastAutoInterval = cache.lastAutoInterval;
      var lastTickCount = cache.lastTickCount;
      if (lastAutoInterval != null && lastTickCount != null && Math.abs(lastAutoInterval - interval) <= 1 && Math.abs(lastTickCount - tickCount) <= 1 && lastAutoInterval > interval) {
        interval = lastAutoInterval;
      } else {
        cache.lastTickCount = tickCount;
        cache.lastAutoInterval = interval;
      }
      return interval;
    };
    return AngleAxis2;
  }(Axis_default)
);
AngleAxis.prototype.dataToAngle = Axis_default.prototype.dataToCoord;
AngleAxis.prototype.angleToData = Axis_default.prototype.coordToData;
var AngleAxis_default = AngleAxis;

// node_modules/echarts/lib/coord/polar/Polar.js
var polarDimensions = ["radius", "angle"];
var Polar = (
  /** @class */
  function() {
    function Polar2(name) {
      this.dimensions = polarDimensions;
      this.type = "polar";
      this.cx = 0;
      this.cy = 0;
      this._radiusAxis = new RadiusAxis_default();
      this._angleAxis = new AngleAxis_default();
      this.axisPointerEnabled = true;
      this.name = name || "";
      this._radiusAxis.polar = this._angleAxis.polar = this;
    }
    Polar2.prototype.containPoint = function(point) {
      var coord = this.pointToCoord(point);
      return this._radiusAxis.contain(coord[0]) && this._angleAxis.contain(coord[1]);
    };
    Polar2.prototype.containData = function(data) {
      return this._radiusAxis.containData(data[0]) && this._angleAxis.containData(data[1]);
    };
    Polar2.prototype.getAxis = function(dim) {
      var key = "_" + dim + "Axis";
      return this[key];
    };
    Polar2.prototype.getAxes = function() {
      return [this._radiusAxis, this._angleAxis];
    };
    Polar2.prototype.getAxesByScale = function(scaleType) {
      var axes = [];
      var angleAxis = this._angleAxis;
      var radiusAxis = this._radiusAxis;
      angleAxis.scale.type === scaleType && axes.push(angleAxis);
      radiusAxis.scale.type === scaleType && axes.push(radiusAxis);
      return axes;
    };
    Polar2.prototype.getAngleAxis = function() {
      return this._angleAxis;
    };
    Polar2.prototype.getRadiusAxis = function() {
      return this._radiusAxis;
    };
    Polar2.prototype.getOtherAxis = function(axis) {
      var angleAxis = this._angleAxis;
      return axis === angleAxis ? this._radiusAxis : angleAxis;
    };
    Polar2.prototype.getBaseAxis = function() {
      return this.getAxesByScale("ordinal")[0] || this.getAxesByScale("time")[0] || this.getAngleAxis();
    };
    Polar2.prototype.getTooltipAxes = function(dim) {
      var baseAxis = dim != null && dim !== "auto" ? this.getAxis(dim) : this.getBaseAxis();
      return {
        baseAxes: [baseAxis],
        otherAxes: [this.getOtherAxis(baseAxis)]
      };
    };
    Polar2.prototype.dataToPoint = function(data, clamp) {
      return this.coordToPoint([this._radiusAxis.dataToRadius(data[0], clamp), this._angleAxis.dataToAngle(data[1], clamp)]);
    };
    Polar2.prototype.pointToData = function(point, clamp) {
      var coord = this.pointToCoord(point);
      return [this._radiusAxis.radiusToData(coord[0], clamp), this._angleAxis.angleToData(coord[1], clamp)];
    };
    Polar2.prototype.pointToCoord = function(point) {
      var dx = point[0] - this.cx;
      var dy = point[1] - this.cy;
      var angleAxis = this.getAngleAxis();
      var extent = angleAxis.getExtent();
      var minAngle = Math.min(extent[0], extent[1]);
      var maxAngle = Math.max(extent[0], extent[1]);
      angleAxis.inverse ? minAngle = maxAngle - 360 : maxAngle = minAngle + 360;
      var radius = Math.sqrt(dx * dx + dy * dy);
      dx /= radius;
      dy /= radius;
      var radian = Math.atan2(-dy, dx) / Math.PI * 180;
      var dir = radian < minAngle ? 1 : -1;
      while (radian < minAngle || radian > maxAngle) {
        radian += dir * 360;
      }
      return [radius, radian];
    };
    Polar2.prototype.coordToPoint = function(coord) {
      var radius = coord[0];
      var radian = coord[1] / 180 * Math.PI;
      var x = Math.cos(radian) * radius + this.cx;
      var y = -Math.sin(radian) * radius + this.cy;
      return [x, y];
    };
    Polar2.prototype.getArea = function() {
      var angleAxis = this.getAngleAxis();
      var radiusAxis = this.getRadiusAxis();
      var radiusExtent = radiusAxis.getExtent().slice();
      radiusExtent[0] > radiusExtent[1] && radiusExtent.reverse();
      var angleExtent = angleAxis.getExtent();
      var RADIAN = Math.PI / 180;
      var EPSILON = 1e-4;
      return {
        cx: this.cx,
        cy: this.cy,
        r0: radiusExtent[0],
        r: radiusExtent[1],
        startAngle: -angleExtent[0] * RADIAN,
        endAngle: -angleExtent[1] * RADIAN,
        clockwise: angleAxis.inverse,
        contain: function(x, y) {
          var dx = x - this.cx;
          var dy = y - this.cy;
          var d2 = dx * dx + dy * dy;
          var r = this.r;
          var r0 = this.r0;
          return r !== r0 && d2 - EPSILON <= r * r && d2 + EPSILON >= r0 * r0;
        }
      };
    };
    Polar2.prototype.convertToPixel = function(ecModel, finder, value) {
      var coordSys = getCoordSys(finder);
      return coordSys === this ? this.dataToPoint(value) : null;
    };
    Polar2.prototype.convertFromPixel = function(ecModel, finder, pixel) {
      var coordSys = getCoordSys(finder);
      return coordSys === this ? this.pointToData(pixel) : null;
    };
    return Polar2;
  }()
);
function getCoordSys(finder) {
  var seriesModel = finder.seriesModel;
  var polarModel = finder.polarModel;
  return polarModel && polarModel.coordinateSystem || seriesModel && seriesModel.coordinateSystem;
}
var Polar_default = Polar;

// node_modules/echarts/lib/coord/polar/polarCreator.js
init_number();
init_axisHelper();
init_model();
function resizePolar(polar, polarModel, api) {
  var center = polarModel.get("center");
  var width = api.getWidth();
  var height = api.getHeight();
  polar.cx = parsePercent2(center[0], width);
  polar.cy = parsePercent2(center[1], height);
  var radiusAxis = polar.getRadiusAxis();
  var size = Math.min(width, height) / 2;
  var radius = polarModel.get("radius");
  if (radius == null) {
    radius = [0, "100%"];
  } else if (!isArray(radius)) {
    radius = [0, radius];
  }
  var parsedRadius = [parsePercent2(radius[0], size), parsePercent2(radius[1], size)];
  radiusAxis.inverse ? radiusAxis.setExtent(parsedRadius[1], parsedRadius[0]) : radiusAxis.setExtent(parsedRadius[0], parsedRadius[1]);
}
function updatePolarScale(ecModel, api) {
  var polar = this;
  var angleAxis = polar.getAngleAxis();
  var radiusAxis = polar.getRadiusAxis();
  angleAxis.scale.setExtent(Infinity, -Infinity);
  radiusAxis.scale.setExtent(Infinity, -Infinity);
  ecModel.eachSeries(function(seriesModel) {
    if (seriesModel.coordinateSystem === polar) {
      var data_1 = seriesModel.getData();
      each(getDataDimensionsOnAxis(data_1, "radius"), function(dim) {
        radiusAxis.scale.unionExtentFromData(data_1, dim);
      });
      each(getDataDimensionsOnAxis(data_1, "angle"), function(dim) {
        angleAxis.scale.unionExtentFromData(data_1, dim);
      });
    }
  });
  niceScaleExtent(angleAxis.scale, angleAxis.model);
  niceScaleExtent(radiusAxis.scale, radiusAxis.model);
  if (angleAxis.type === "category" && !angleAxis.onBand) {
    var extent = angleAxis.getExtent();
    var diff = 360 / angleAxis.scale.count();
    angleAxis.inverse ? extent[1] += diff : extent[1] -= diff;
    angleAxis.setExtent(extent[0], extent[1]);
  }
}
function isAngleAxisModel(axisModel) {
  return axisModel.mainType === "angleAxis";
}
function setAxis(axis, axisModel) {
  var _a;
  axis.type = axisModel.get("type");
  axis.scale = createScaleByModel(axisModel);
  axis.onBand = axisModel.get("boundaryGap") && axis.type === "category";
  axis.inverse = axisModel.get("inverse");
  if (isAngleAxisModel(axisModel)) {
    axis.inverse = axis.inverse !== axisModel.get("clockwise");
    var startAngle = axisModel.get("startAngle");
    var endAngle = (_a = axisModel.get("endAngle")) !== null && _a !== void 0 ? _a : startAngle + (axis.inverse ? -360 : 360);
    axis.setExtent(startAngle, endAngle);
  }
  axisModel.axis = axis;
  axis.model = axisModel;
}
var polarCreator = {
  dimensions: polarDimensions,
  create: function(ecModel, api) {
    var polarList = [];
    ecModel.eachComponent("polar", function(polarModel, idx) {
      var polar = new Polar_default(idx + "");
      polar.update = updatePolarScale;
      var radiusAxis = polar.getRadiusAxis();
      var angleAxis = polar.getAngleAxis();
      var radiusAxisModel = polarModel.findAxisModel("radiusAxis");
      var angleAxisModel = polarModel.findAxisModel("angleAxis");
      setAxis(radiusAxis, radiusAxisModel);
      setAxis(angleAxis, angleAxisModel);
      resizePolar(polar, polarModel, api);
      polarList.push(polar);
      polarModel.coordinateSystem = polar;
      polar.model = polarModel;
    });
    ecModel.eachSeries(function(seriesModel) {
      if (seriesModel.get("coordinateSystem") === "polar") {
        var polarModel = seriesModel.getReferringComponents("polar", SINGLE_REFERRING).models[0];
        if (true) {
          if (!polarModel) {
            throw new Error('Polar "' + retrieve(seriesModel.get("polarIndex"), seriesModel.get("polarId"), 0) + '" not found');
          }
        }
        seriesModel.coordinateSystem = polarModel.coordinateSystem;
      }
    });
    return polarList;
  }
};
var polarCreator_default = polarCreator;

// node_modules/echarts/lib/component/axis/AngleAxisView.js
init_tslib_es6();
init_util();
init_graphic();
init_labelStyle();
init_Model();
init_innerStore();
var elementList = ["axisLine", "axisLabel", "axisTick", "minorTick", "splitLine", "minorSplitLine", "splitArea"];
function getAxisLineShape(polar, rExtent, angle) {
  rExtent[1] > rExtent[0] && (rExtent = rExtent.slice().reverse());
  var start = polar.coordToPoint([rExtent[0], angle]);
  var end = polar.coordToPoint([rExtent[1], angle]);
  return {
    x1: start[0],
    y1: start[1],
    x2: end[0],
    y2: end[1]
  };
}
function getRadiusIdx(polar) {
  var radiusAxis = polar.getRadiusAxis();
  return radiusAxis.inverse ? 0 : 1;
}
function fixAngleOverlap(list) {
  var firstItem = list[0];
  var lastItem = list[list.length - 1];
  if (firstItem && lastItem && Math.abs(Math.abs(firstItem.coord - lastItem.coord) - 360) < 1e-4) {
    list.pop();
  }
}
var AngleAxisView = (
  /** @class */
  function(_super) {
    __extends(AngleAxisView2, _super);
    function AngleAxisView2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.type = AngleAxisView2.type;
      _this.axisPointerClass = "PolarAxisPointer";
      return _this;
    }
    AngleAxisView2.prototype.render = function(angleAxisModel, ecModel) {
      this.group.removeAll();
      if (!angleAxisModel.get("show")) {
        return;
      }
      var angleAxis = angleAxisModel.axis;
      var polar = angleAxis.polar;
      var radiusExtent = polar.getRadiusAxis().getExtent();
      var ticksAngles = angleAxis.getTicksCoords();
      var minorTickAngles = angleAxis.getMinorTicksCoords();
      var labels = map(angleAxis.getViewLabels(), function(labelItem) {
        labelItem = clone(labelItem);
        var scale = angleAxis.scale;
        var tickValue = scale.type === "ordinal" ? scale.getRawOrdinalNumber(labelItem.tickValue) : labelItem.tickValue;
        labelItem.coord = angleAxis.dataToCoord(tickValue);
        return labelItem;
      });
      fixAngleOverlap(labels);
      fixAngleOverlap(ticksAngles);
      each(elementList, function(name) {
        if (angleAxisModel.get([name, "show"]) && (!angleAxis.scale.isBlank() || name === "axisLine")) {
          angelAxisElementsBuilders[name](this.group, angleAxisModel, polar, ticksAngles, minorTickAngles, radiusExtent, labels);
        }
      }, this);
    };
    AngleAxisView2.type = "angleAxis";
    return AngleAxisView2;
  }(AxisView_default)
);
var angelAxisElementsBuilders = {
  axisLine: function(group, angleAxisModel, polar, ticksAngles, minorTickAngles, radiusExtent) {
    var lineStyleModel = angleAxisModel.getModel(["axisLine", "lineStyle"]);
    var angleAxis = polar.getAngleAxis();
    var RADIAN = Math.PI / 180;
    var angleExtent = angleAxis.getExtent();
    var rId = getRadiusIdx(polar);
    var r0Id = rId ? 0 : 1;
    var shape;
    var shapeType = Math.abs(angleExtent[1] - angleExtent[0]) === 360 ? "Circle" : "Arc";
    if (radiusExtent[r0Id] === 0) {
      shape = new graphic_exports[shapeType]({
        shape: {
          cx: polar.cx,
          cy: polar.cy,
          r: radiusExtent[rId],
          startAngle: -angleExtent[0] * RADIAN,
          endAngle: -angleExtent[1] * RADIAN,
          clockwise: angleAxis.inverse
        },
        style: lineStyleModel.getLineStyle(),
        z2: 1,
        silent: true
      });
    } else {
      shape = new Ring_default({
        shape: {
          cx: polar.cx,
          cy: polar.cy,
          r: radiusExtent[rId],
          r0: radiusExtent[r0Id]
        },
        style: lineStyleModel.getLineStyle(),
        z2: 1,
        silent: true
      });
    }
    shape.style.fill = null;
    group.add(shape);
  },
  axisTick: function(group, angleAxisModel, polar, ticksAngles, minorTickAngles, radiusExtent) {
    var tickModel = angleAxisModel.getModel("axisTick");
    var tickLen = (tickModel.get("inside") ? -1 : 1) * tickModel.get("length");
    var radius = radiusExtent[getRadiusIdx(polar)];
    var lines = map(ticksAngles, function(tickAngleItem) {
      return new Line_default({
        shape: getAxisLineShape(polar, [radius, radius + tickLen], tickAngleItem.coord)
      });
    });
    group.add(mergePath(lines, {
      style: defaults(tickModel.getModel("lineStyle").getLineStyle(), {
        stroke: angleAxisModel.get(["axisLine", "lineStyle", "color"])
      })
    }));
  },
  minorTick: function(group, angleAxisModel, polar, tickAngles, minorTickAngles, radiusExtent) {
    if (!minorTickAngles.length) {
      return;
    }
    var tickModel = angleAxisModel.getModel("axisTick");
    var minorTickModel = angleAxisModel.getModel("minorTick");
    var tickLen = (tickModel.get("inside") ? -1 : 1) * minorTickModel.get("length");
    var radius = radiusExtent[getRadiusIdx(polar)];
    var lines = [];
    for (var i = 0; i < minorTickAngles.length; i++) {
      for (var k = 0; k < minorTickAngles[i].length; k++) {
        lines.push(new Line_default({
          shape: getAxisLineShape(polar, [radius, radius + tickLen], minorTickAngles[i][k].coord)
        }));
      }
    }
    group.add(mergePath(lines, {
      style: defaults(minorTickModel.getModel("lineStyle").getLineStyle(), defaults(tickModel.getLineStyle(), {
        stroke: angleAxisModel.get(["axisLine", "lineStyle", "color"])
      }))
    }));
  },
  axisLabel: function(group, angleAxisModel, polar, ticksAngles, minorTickAngles, radiusExtent, labels) {
    var rawCategoryData = angleAxisModel.getCategories(true);
    var commonLabelModel = angleAxisModel.getModel("axisLabel");
    var labelMargin = commonLabelModel.get("margin");
    var triggerEvent = angleAxisModel.get("triggerEvent");
    each(labels, function(labelItem, idx) {
      var labelModel = commonLabelModel;
      var tickValue = labelItem.tickValue;
      var r = radiusExtent[getRadiusIdx(polar)];
      var p = polar.coordToPoint([r + labelMargin, labelItem.coord]);
      var cx = polar.cx;
      var cy = polar.cy;
      var labelTextAlign = Math.abs(p[0] - cx) / r < 0.3 ? "center" : p[0] > cx ? "left" : "right";
      var labelTextVerticalAlign = Math.abs(p[1] - cy) / r < 0.3 ? "middle" : p[1] > cy ? "top" : "bottom";
      if (rawCategoryData && rawCategoryData[tickValue]) {
        var rawCategoryItem = rawCategoryData[tickValue];
        if (isObject(rawCategoryItem) && rawCategoryItem.textStyle) {
          labelModel = new Model_default(rawCategoryItem.textStyle, commonLabelModel, commonLabelModel.ecModel);
        }
      }
      var textEl = new Text_default({
        silent: AxisBuilder_default.isLabelSilent(angleAxisModel),
        style: createTextStyle(labelModel, {
          x: p[0],
          y: p[1],
          fill: labelModel.getTextColor() || angleAxisModel.get(["axisLine", "lineStyle", "color"]),
          text: labelItem.formattedLabel,
          align: labelTextAlign,
          verticalAlign: labelTextVerticalAlign
        })
      });
      group.add(textEl);
      if (triggerEvent) {
        var eventData = AxisBuilder_default.makeAxisEventDataBase(angleAxisModel);
        eventData.targetType = "axisLabel";
        eventData.value = labelItem.rawLabel;
        getECData(textEl).eventData = eventData;
      }
    }, this);
  },
  splitLine: function(group, angleAxisModel, polar, ticksAngles, minorTickAngles, radiusExtent) {
    var splitLineModel = angleAxisModel.getModel("splitLine");
    var lineStyleModel = splitLineModel.getModel("lineStyle");
    var lineColors = lineStyleModel.get("color");
    var lineCount = 0;
    lineColors = lineColors instanceof Array ? lineColors : [lineColors];
    var splitLines = [];
    for (var i = 0; i < ticksAngles.length; i++) {
      var colorIndex = lineCount++ % lineColors.length;
      splitLines[colorIndex] = splitLines[colorIndex] || [];
      splitLines[colorIndex].push(new Line_default({
        shape: getAxisLineShape(polar, radiusExtent, ticksAngles[i].coord)
      }));
    }
    for (var i = 0; i < splitLines.length; i++) {
      group.add(mergePath(splitLines[i], {
        style: defaults({
          stroke: lineColors[i % lineColors.length]
        }, lineStyleModel.getLineStyle()),
        silent: true,
        z: angleAxisModel.get("z")
      }));
    }
  },
  minorSplitLine: function(group, angleAxisModel, polar, ticksAngles, minorTickAngles, radiusExtent) {
    if (!minorTickAngles.length) {
      return;
    }
    var minorSplitLineModel = angleAxisModel.getModel("minorSplitLine");
    var lineStyleModel = minorSplitLineModel.getModel("lineStyle");
    var lines = [];
    for (var i = 0; i < minorTickAngles.length; i++) {
      for (var k = 0; k < minorTickAngles[i].length; k++) {
        lines.push(new Line_default({
          shape: getAxisLineShape(polar, radiusExtent, minorTickAngles[i][k].coord)
        }));
      }
    }
    group.add(mergePath(lines, {
      style: lineStyleModel.getLineStyle(),
      silent: true,
      z: angleAxisModel.get("z")
    }));
  },
  splitArea: function(group, angleAxisModel, polar, ticksAngles, minorTickAngles, radiusExtent) {
    if (!ticksAngles.length) {
      return;
    }
    var splitAreaModel = angleAxisModel.getModel("splitArea");
    var areaStyleModel = splitAreaModel.getModel("areaStyle");
    var areaColors = areaStyleModel.get("color");
    var lineCount = 0;
    areaColors = areaColors instanceof Array ? areaColors : [areaColors];
    var splitAreas = [];
    var RADIAN = Math.PI / 180;
    var prevAngle = -ticksAngles[0].coord * RADIAN;
    var r0 = Math.min(radiusExtent[0], radiusExtent[1]);
    var r1 = Math.max(radiusExtent[0], radiusExtent[1]);
    var clockwise = angleAxisModel.get("clockwise");
    for (var i = 1, len = ticksAngles.length; i <= len; i++) {
      var coord = i === len ? ticksAngles[0].coord : ticksAngles[i].coord;
      var colorIndex = lineCount++ % areaColors.length;
      splitAreas[colorIndex] = splitAreas[colorIndex] || [];
      splitAreas[colorIndex].push(new Sector_default({
        shape: {
          cx: polar.cx,
          cy: polar.cy,
          r0,
          r: r1,
          startAngle: prevAngle,
          endAngle: -coord * RADIAN,
          clockwise
        },
        silent: true
      }));
      prevAngle = -coord * RADIAN;
    }
    for (var i = 0; i < splitAreas.length; i++) {
      group.add(mergePath(splitAreas[i], {
        style: defaults({
          fill: areaColors[i % areaColors.length]
        }, areaStyleModel.getAreaStyle()),
        silent: true
      }));
    }
  }
};
var AngleAxisView_default = AngleAxisView;

// node_modules/echarts/lib/component/axis/RadiusAxisView.js
init_tslib_es6();
init_util();
init_graphic();
var axisBuilderAttrs = ["axisLine", "axisTickLabel", "axisName"];
var selfBuilderAttrs = ["splitLine", "splitArea", "minorSplitLine"];
var RadiusAxisView = (
  /** @class */
  function(_super) {
    __extends(RadiusAxisView2, _super);
    function RadiusAxisView2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.type = RadiusAxisView2.type;
      _this.axisPointerClass = "PolarAxisPointer";
      return _this;
    }
    RadiusAxisView2.prototype.render = function(radiusAxisModel, ecModel) {
      this.group.removeAll();
      if (!radiusAxisModel.get("show")) {
        return;
      }
      var oldAxisGroup = this._axisGroup;
      var newAxisGroup = this._axisGroup = new Group_default();
      this.group.add(newAxisGroup);
      var radiusAxis = radiusAxisModel.axis;
      var polar = radiusAxis.polar;
      var angleAxis = polar.getAngleAxis();
      var ticksCoords = radiusAxis.getTicksCoords();
      var minorTicksCoords = radiusAxis.getMinorTicksCoords();
      var axisAngle = angleAxis.getExtent()[0];
      var radiusExtent = radiusAxis.getExtent();
      var layout4 = layoutAxis(polar, radiusAxisModel, axisAngle);
      var axisBuilder = new AxisBuilder_default(radiusAxisModel, layout4);
      each(axisBuilderAttrs, axisBuilder.add, axisBuilder);
      newAxisGroup.add(axisBuilder.getGroup());
      groupTransition(oldAxisGroup, newAxisGroup, radiusAxisModel);
      each(selfBuilderAttrs, function(name) {
        if (radiusAxisModel.get([name, "show"]) && !radiusAxis.scale.isBlank()) {
          axisElementBuilders[name](this.group, radiusAxisModel, polar, axisAngle, radiusExtent, ticksCoords, minorTicksCoords);
        }
      }, this);
    };
    RadiusAxisView2.type = "radiusAxis";
    return RadiusAxisView2;
  }(AxisView_default)
);
var axisElementBuilders = {
  splitLine: function(group, radiusAxisModel, polar, axisAngle, radiusExtent, ticksCoords) {
    var splitLineModel = radiusAxisModel.getModel("splitLine");
    var lineStyleModel = splitLineModel.getModel("lineStyle");
    var lineColors = lineStyleModel.get("color");
    var lineCount = 0;
    var angleAxis = polar.getAngleAxis();
    var RADIAN = Math.PI / 180;
    var angleExtent = angleAxis.getExtent();
    var shapeType = Math.abs(angleExtent[1] - angleExtent[0]) === 360 ? "Circle" : "Arc";
    lineColors = lineColors instanceof Array ? lineColors : [lineColors];
    var splitLines = [];
    for (var i = 0; i < ticksCoords.length; i++) {
      var colorIndex = lineCount++ % lineColors.length;
      splitLines[colorIndex] = splitLines[colorIndex] || [];
      splitLines[colorIndex].push(new graphic_exports[shapeType]({
        shape: {
          cx: polar.cx,
          cy: polar.cy,
          // ensure circle radius >= 0
          r: Math.max(ticksCoords[i].coord, 0),
          startAngle: -angleExtent[0] * RADIAN,
          endAngle: -angleExtent[1] * RADIAN,
          clockwise: angleAxis.inverse
        }
      }));
    }
    for (var i = 0; i < splitLines.length; i++) {
      group.add(mergePath(splitLines[i], {
        style: defaults({
          stroke: lineColors[i % lineColors.length],
          fill: null
        }, lineStyleModel.getLineStyle()),
        silent: true
      }));
    }
  },
  minorSplitLine: function(group, radiusAxisModel, polar, axisAngle, radiusExtent, ticksCoords, minorTicksCoords) {
    if (!minorTicksCoords.length) {
      return;
    }
    var minorSplitLineModel = radiusAxisModel.getModel("minorSplitLine");
    var lineStyleModel = minorSplitLineModel.getModel("lineStyle");
    var lines = [];
    for (var i = 0; i < minorTicksCoords.length; i++) {
      for (var k = 0; k < minorTicksCoords[i].length; k++) {
        lines.push(new Circle_default({
          shape: {
            cx: polar.cx,
            cy: polar.cy,
            r: minorTicksCoords[i][k].coord
          }
        }));
      }
    }
    group.add(mergePath(lines, {
      style: defaults({
        fill: null
      }, lineStyleModel.getLineStyle()),
      silent: true
    }));
  },
  splitArea: function(group, radiusAxisModel, polar, axisAngle, radiusExtent, ticksCoords) {
    if (!ticksCoords.length) {
      return;
    }
    var splitAreaModel = radiusAxisModel.getModel("splitArea");
    var areaStyleModel = splitAreaModel.getModel("areaStyle");
    var areaColors = areaStyleModel.get("color");
    var lineCount = 0;
    areaColors = areaColors instanceof Array ? areaColors : [areaColors];
    var splitAreas = [];
    var prevRadius = ticksCoords[0].coord;
    for (var i = 1; i < ticksCoords.length; i++) {
      var colorIndex = lineCount++ % areaColors.length;
      splitAreas[colorIndex] = splitAreas[colorIndex] || [];
      splitAreas[colorIndex].push(new Sector_default({
        shape: {
          cx: polar.cx,
          cy: polar.cy,
          r0: prevRadius,
          r: ticksCoords[i].coord,
          startAngle: 0,
          endAngle: Math.PI * 2
        },
        silent: true
      }));
      prevRadius = ticksCoords[i].coord;
    }
    for (var i = 0; i < splitAreas.length; i++) {
      group.add(mergePath(splitAreas[i], {
        style: defaults({
          fill: areaColors[i % areaColors.length]
        }, areaStyleModel.getAreaStyle()),
        silent: true
      }));
    }
  }
};
function layoutAxis(polar, radiusAxisModel, axisAngle) {
  return {
    position: [polar.cx, polar.cy],
    rotation: axisAngle / 180 * Math.PI,
    labelDirection: -1,
    tickDirection: -1,
    nameDirection: 1,
    labelRotate: radiusAxisModel.getModel("axisLabel").get("rotate"),
    // Over splitLine and splitArea
    z2: 1
  };
}
var RadiusAxisView_default = RadiusAxisView;

// node_modules/echarts/lib/component/polar/install.js
init_Component2();
init_util();

// node_modules/echarts/lib/layout/barPolar.js
init_util();
init_number();
init_dataStackHelper();
function getSeriesStackId(seriesModel) {
  return seriesModel.get("stack") || "__ec_stack_" + seriesModel.seriesIndex;
}
function getAxisKey(polar, axis) {
  return axis.dim + polar.model.componentIndex;
}
function barLayoutPolar(seriesType, ecModel, api) {
  var lastStackCoords = {};
  var barWidthAndOffset = calRadialBar(filter(ecModel.getSeriesByType(seriesType), function(seriesModel) {
    return !ecModel.isSeriesFiltered(seriesModel) && seriesModel.coordinateSystem && seriesModel.coordinateSystem.type === "polar";
  }));
  ecModel.eachSeriesByType(seriesType, function(seriesModel) {
    if (seriesModel.coordinateSystem.type !== "polar") {
      return;
    }
    var data = seriesModel.getData();
    var polar = seriesModel.coordinateSystem;
    var baseAxis = polar.getBaseAxis();
    var axisKey = getAxisKey(polar, baseAxis);
    var stackId = getSeriesStackId(seriesModel);
    var columnLayoutInfo = barWidthAndOffset[axisKey][stackId];
    var columnOffset = columnLayoutInfo.offset;
    var columnWidth = columnLayoutInfo.width;
    var valueAxis = polar.getOtherAxis(baseAxis);
    var cx = seriesModel.coordinateSystem.cx;
    var cy = seriesModel.coordinateSystem.cy;
    var barMinHeight = seriesModel.get("barMinHeight") || 0;
    var barMinAngle = seriesModel.get("barMinAngle") || 0;
    lastStackCoords[stackId] = lastStackCoords[stackId] || [];
    var valueDim = data.mapDimension(valueAxis.dim);
    var baseDim = data.mapDimension(baseAxis.dim);
    var stacked = isDimensionStacked(
      data,
      valueDim
      /* , baseDim */
    );
    var clampLayout = baseAxis.dim !== "radius" || !seriesModel.get("roundCap", true);
    var valueAxisModel = valueAxis.model;
    var startValue = valueAxisModel.get("startValue");
    var valueAxisStart = valueAxis.dataToCoord(startValue || 0);
    for (var idx = 0, len = data.count(); idx < len; idx++) {
      var value = data.get(valueDim, idx);
      var baseValue = data.get(baseDim, idx);
      var sign = value >= 0 ? "p" : "n";
      var baseCoord = valueAxisStart;
      if (stacked) {
        if (!lastStackCoords[stackId][baseValue]) {
          lastStackCoords[stackId][baseValue] = {
            p: valueAxisStart,
            n: valueAxisStart
            // Negative stack
          };
        }
        baseCoord = lastStackCoords[stackId][baseValue][sign];
      }
      var r0 = void 0;
      var r = void 0;
      var startAngle = void 0;
      var endAngle = void 0;
      if (valueAxis.dim === "radius") {
        var radiusSpan = valueAxis.dataToCoord(value) - valueAxisStart;
        var angle = baseAxis.dataToCoord(baseValue);
        if (Math.abs(radiusSpan) < barMinHeight) {
          radiusSpan = (radiusSpan < 0 ? -1 : 1) * barMinHeight;
        }
        r0 = baseCoord;
        r = baseCoord + radiusSpan;
        startAngle = angle - columnOffset;
        endAngle = startAngle - columnWidth;
        stacked && (lastStackCoords[stackId][baseValue][sign] = r);
      } else {
        var angleSpan = valueAxis.dataToCoord(value, clampLayout) - valueAxisStart;
        var radius = baseAxis.dataToCoord(baseValue);
        if (Math.abs(angleSpan) < barMinAngle) {
          angleSpan = (angleSpan < 0 ? -1 : 1) * barMinAngle;
        }
        r0 = radius + columnOffset;
        r = r0 + columnWidth;
        startAngle = baseCoord;
        endAngle = baseCoord + angleSpan;
        stacked && (lastStackCoords[stackId][baseValue][sign] = endAngle);
      }
      data.setItemLayout(idx, {
        cx,
        cy,
        r0,
        r,
        // Consider that positive angle is anti-clockwise,
        // while positive radian of sector is clockwise
        startAngle: -startAngle * Math.PI / 180,
        endAngle: -endAngle * Math.PI / 180,
        /**
         * Keep the same logic with bar in catesion: use end value to
         * control direction. Notice that if clockwise is true (by
         * default), the sector will always draw clockwisely, no matter
         * whether endAngle is greater or less than startAngle.
         */
        clockwise: startAngle >= endAngle
      });
    }
  });
}
function calRadialBar(barSeries) {
  var columnsMap = {};
  each(barSeries, function(seriesModel, idx) {
    var data = seriesModel.getData();
    var polar = seriesModel.coordinateSystem;
    var baseAxis = polar.getBaseAxis();
    var axisKey = getAxisKey(polar, baseAxis);
    var axisExtent = baseAxis.getExtent();
    var bandWidth = baseAxis.type === "category" ? baseAxis.getBandWidth() : Math.abs(axisExtent[1] - axisExtent[0]) / data.count();
    var columnsOnAxis = columnsMap[axisKey] || {
      bandWidth,
      remainedWidth: bandWidth,
      autoWidthCount: 0,
      categoryGap: "20%",
      gap: "30%",
      stacks: {}
    };
    var stacks = columnsOnAxis.stacks;
    columnsMap[axisKey] = columnsOnAxis;
    var stackId = getSeriesStackId(seriesModel);
    if (!stacks[stackId]) {
      columnsOnAxis.autoWidthCount++;
    }
    stacks[stackId] = stacks[stackId] || {
      width: 0,
      maxWidth: 0
    };
    var barWidth = parsePercent2(seriesModel.get("barWidth"), bandWidth);
    var barMaxWidth = parsePercent2(seriesModel.get("barMaxWidth"), bandWidth);
    var barGap = seriesModel.get("barGap");
    var barCategoryGap = seriesModel.get("barCategoryGap");
    if (barWidth && !stacks[stackId].width) {
      barWidth = Math.min(columnsOnAxis.remainedWidth, barWidth);
      stacks[stackId].width = barWidth;
      columnsOnAxis.remainedWidth -= barWidth;
    }
    barMaxWidth && (stacks[stackId].maxWidth = barMaxWidth);
    barGap != null && (columnsOnAxis.gap = barGap);
    barCategoryGap != null && (columnsOnAxis.categoryGap = barCategoryGap);
  });
  var result = {};
  each(columnsMap, function(columnsOnAxis, coordSysName) {
    result[coordSysName] = {};
    var stacks = columnsOnAxis.stacks;
    var bandWidth = columnsOnAxis.bandWidth;
    var categoryGap = parsePercent2(columnsOnAxis.categoryGap, bandWidth);
    var barGapPercent = parsePercent2(columnsOnAxis.gap, 1);
    var remainedWidth = columnsOnAxis.remainedWidth;
    var autoWidthCount = columnsOnAxis.autoWidthCount;
    var autoWidth = (remainedWidth - categoryGap) / (autoWidthCount + (autoWidthCount - 1) * barGapPercent);
    autoWidth = Math.max(autoWidth, 0);
    each(stacks, function(column, stack) {
      var maxWidth = column.maxWidth;
      if (maxWidth && maxWidth < autoWidth) {
        maxWidth = Math.min(maxWidth, remainedWidth);
        if (column.width) {
          maxWidth = Math.min(maxWidth, column.width);
        }
        remainedWidth -= maxWidth;
        column.width = maxWidth;
        autoWidthCount--;
      }
    });
    autoWidth = (remainedWidth - categoryGap) / (autoWidthCount + (autoWidthCount - 1) * barGapPercent);
    autoWidth = Math.max(autoWidth, 0);
    var widthSum = 0;
    var lastColumn;
    each(stacks, function(column, idx) {
      if (!column.width) {
        column.width = autoWidth;
      }
      lastColumn = column;
      widthSum += column.width * (1 + barGapPercent);
    });
    if (lastColumn) {
      widthSum -= lastColumn.width * barGapPercent;
    }
    var offset = -widthSum / 2;
    each(stacks, function(column, stackId) {
      result[coordSysName][stackId] = result[coordSysName][stackId] || {
        offset,
        width: column.width
      };
      offset += column.width * (1 + barGapPercent);
    });
  });
  return result;
}
var barPolar_default = barLayoutPolar;

// node_modules/echarts/lib/component/polar/install.js
var angleAxisExtraOption = {
  startAngle: 90,
  clockwise: true,
  splitNumber: 12,
  axisLabel: {
    rotate: 0
  }
};
var radiusAxisExtraOption = {
  splitNumber: 5
};
var PolarView = (
  /** @class */
  function(_super) {
    __extends(PolarView2, _super);
    function PolarView2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.type = PolarView2.type;
      return _this;
    }
    PolarView2.type = "polar";
    return PolarView2;
  }(Component_default2)
);
function install8(registers) {
  use(install6);
  AxisView_default.registerAxisPointerClass("PolarAxisPointer", PolarAxisPointer_default);
  registers.registerCoordinateSystem("polar", polarCreator_default);
  registers.registerComponentModel(PolarModel_default);
  registers.registerComponentView(PolarView);
  axisModelCreator(registers, "angle", AngleAxisModel, angleAxisExtraOption);
  axisModelCreator(registers, "radius", RadiusAxisModel, radiusAxisExtraOption);
  registers.registerComponentView(AngleAxisView_default);
  registers.registerComponentView(RadiusAxisView_default);
  registers.registerLayout(curry(barPolar_default, "bar"));
}

// node_modules/echarts/lib/component/singleAxis/install.js
init_tslib_es6();
init_extension();
init_Component2();

// node_modules/echarts/lib/component/axis/SingleAxisView.js
init_tslib_es6();
init_util();
init_graphic();

// node_modules/echarts/lib/coord/single/singleAxisHelper.js
init_util();
function layout2(axisModel, opt) {
  opt = opt || {};
  var single = axisModel.coordinateSystem;
  var axis = axisModel.axis;
  var layout4 = {};
  var axisPosition = axis.position;
  var orient = axis.orient;
  var rect = single.getRect();
  var rectBound = [rect.x, rect.x + rect.width, rect.y, rect.y + rect.height];
  var positionMap = {
    horizontal: {
      top: rectBound[2],
      bottom: rectBound[3]
    },
    vertical: {
      left: rectBound[0],
      right: rectBound[1]
    }
  };
  layout4.position = [orient === "vertical" ? positionMap.vertical[axisPosition] : rectBound[0], orient === "horizontal" ? positionMap.horizontal[axisPosition] : rectBound[3]];
  var r = {
    horizontal: 0,
    vertical: 1
  };
  layout4.rotation = Math.PI / 2 * r[orient];
  var directionMap = {
    top: -1,
    bottom: 1,
    right: 1,
    left: -1
  };
  layout4.labelDirection = layout4.tickDirection = layout4.nameDirection = directionMap[axisPosition];
  if (axisModel.get(["axisTick", "inside"])) {
    layout4.tickDirection = -layout4.tickDirection;
  }
  if (retrieve(opt.labelInside, axisModel.get(["axisLabel", "inside"]))) {
    layout4.labelDirection = -layout4.labelDirection;
  }
  var labelRotation = opt.rotate;
  labelRotation == null && (labelRotation = axisModel.get(["axisLabel", "rotate"]));
  layout4.labelRotation = axisPosition === "top" ? -labelRotation : labelRotation;
  layout4.z2 = 1;
  return layout4;
}

// node_modules/echarts/lib/component/axis/SingleAxisView.js
var axisBuilderAttrs2 = ["axisLine", "axisTickLabel", "axisName"];
var selfBuilderAttrs2 = ["splitArea", "splitLine"];
var SingleAxisView = (
  /** @class */
  function(_super) {
    __extends(SingleAxisView2, _super);
    function SingleAxisView2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.type = SingleAxisView2.type;
      _this.axisPointerClass = "SingleAxisPointer";
      return _this;
    }
    SingleAxisView2.prototype.render = function(axisModel, ecModel, api, payload) {
      var group = this.group;
      group.removeAll();
      var oldAxisGroup = this._axisGroup;
      this._axisGroup = new Group_default();
      var layout4 = layout2(axisModel);
      var axisBuilder = new AxisBuilder_default(axisModel, layout4);
      each(axisBuilderAttrs2, axisBuilder.add, axisBuilder);
      group.add(this._axisGroup);
      group.add(axisBuilder.getGroup());
      each(selfBuilderAttrs2, function(name) {
        if (axisModel.get([name, "show"])) {
          axisElementBuilders2[name](this, this.group, this._axisGroup, axisModel);
        }
      }, this);
      groupTransition(oldAxisGroup, this._axisGroup, axisModel);
      _super.prototype.render.call(this, axisModel, ecModel, api, payload);
    };
    SingleAxisView2.prototype.remove = function() {
      rectCoordAxisHandleRemove(this);
    };
    SingleAxisView2.type = "singleAxis";
    return SingleAxisView2;
  }(AxisView_default)
);
var axisElementBuilders2 = {
  splitLine: function(axisView, group, axisGroup, axisModel) {
    var axis = axisModel.axis;
    if (axis.scale.isBlank()) {
      return;
    }
    var splitLineModel = axisModel.getModel("splitLine");
    var lineStyleModel = splitLineModel.getModel("lineStyle");
    var lineColors = lineStyleModel.get("color");
    lineColors = lineColors instanceof Array ? lineColors : [lineColors];
    var lineWidth = lineStyleModel.get("width");
    var gridRect = axisModel.coordinateSystem.getRect();
    var isHorizontal = axis.isHorizontal();
    var splitLines = [];
    var lineCount = 0;
    var ticksCoords = axis.getTicksCoords({
      tickModel: splitLineModel
    });
    var p1 = [];
    var p2 = [];
    for (var i = 0; i < ticksCoords.length; ++i) {
      var tickCoord = axis.toGlobalCoord(ticksCoords[i].coord);
      if (isHorizontal) {
        p1[0] = tickCoord;
        p1[1] = gridRect.y;
        p2[0] = tickCoord;
        p2[1] = gridRect.y + gridRect.height;
      } else {
        p1[0] = gridRect.x;
        p1[1] = tickCoord;
        p2[0] = gridRect.x + gridRect.width;
        p2[1] = tickCoord;
      }
      var line = new Line_default({
        shape: {
          x1: p1[0],
          y1: p1[1],
          x2: p2[0],
          y2: p2[1]
        },
        silent: true
      });
      subPixelOptimizeLine(line.shape, lineWidth);
      var colorIndex = lineCount++ % lineColors.length;
      splitLines[colorIndex] = splitLines[colorIndex] || [];
      splitLines[colorIndex].push(line);
    }
    var lineStyle = lineStyleModel.getLineStyle(["color"]);
    for (var i = 0; i < splitLines.length; ++i) {
      group.add(mergePath(splitLines[i], {
        style: defaults({
          stroke: lineColors[i % lineColors.length]
        }, lineStyle),
        silent: true
      }));
    }
  },
  splitArea: function(axisView, group, axisGroup, axisModel) {
    rectCoordAxisBuildSplitArea(axisView, axisGroup, axisModel, axisModel);
  }
};
var SingleAxisView_default = SingleAxisView;

// node_modules/echarts/lib/coord/single/AxisModel.js
init_tslib_es6();
init_Component();
init_axisModelCommonMixin();
init_util();
var SingleAxisModel = (
  /** @class */
  function(_super) {
    __extends(SingleAxisModel2, _super);
    function SingleAxisModel2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.type = SingleAxisModel2.type;
      return _this;
    }
    SingleAxisModel2.prototype.getCoordSysModel = function() {
      return this;
    };
    SingleAxisModel2.type = "singleAxis";
    SingleAxisModel2.layoutMode = "box";
    SingleAxisModel2.defaultOption = {
      left: "5%",
      top: "5%",
      right: "5%",
      bottom: "5%",
      type: "value",
      position: "bottom",
      orient: "horizontal",
      axisLine: {
        show: true,
        lineStyle: {
          width: 1,
          type: "solid"
        }
      },
      // Single coordinate system and single axis is the,
      // which is used as the parent tooltip model.
      // same model, so we set default tooltip show as true.
      tooltip: {
        show: true
      },
      axisTick: {
        show: true,
        length: 6,
        lineStyle: {
          width: 1
        }
      },
      axisLabel: {
        show: true,
        interval: "auto"
      },
      splitLine: {
        show: true,
        lineStyle: {
          type: "dashed",
          opacity: 0.2
        }
      }
    };
    return SingleAxisModel2;
  }(Component_default)
);
mixin(SingleAxisModel, AxisModelCommonMixin.prototype);
var AxisModel_default = SingleAxisModel;

// node_modules/echarts/lib/coord/single/SingleAxis.js
init_tslib_es6();
init_Axis();
var SingleAxis = (
  /** @class */
  function(_super) {
    __extends(SingleAxis2, _super);
    function SingleAxis2(dim, scale, coordExtent, axisType, position) {
      var _this = _super.call(this, dim, scale, coordExtent) || this;
      _this.type = axisType || "value";
      _this.position = position || "bottom";
      return _this;
    }
    SingleAxis2.prototype.isHorizontal = function() {
      var position = this.position;
      return position === "top" || position === "bottom";
    };
    SingleAxis2.prototype.pointToData = function(point, clamp) {
      return this.coordinateSystem.pointToData(point)[0];
    };
    return SingleAxis2;
  }(Axis_default)
);
var SingleAxis_default = SingleAxis;

// node_modules/echarts/lib/coord/single/Single.js
init_axisHelper();
init_layout();
init_util();
var singleDimensions = ["single"];
var Single = (
  /** @class */
  function() {
    function Single2(axisModel, ecModel, api) {
      this.type = "single";
      this.dimension = "single";
      this.dimensions = singleDimensions;
      this.axisPointerEnabled = true;
      this.model = axisModel;
      this._init(axisModel, ecModel, api);
    }
    Single2.prototype._init = function(axisModel, ecModel, api) {
      var dim = this.dimension;
      var axis = new SingleAxis_default(dim, createScaleByModel(axisModel), [0, 0], axisModel.get("type"), axisModel.get("position"));
      var isCategory = axis.type === "category";
      axis.onBand = isCategory && axisModel.get("boundaryGap");
      axis.inverse = axisModel.get("inverse");
      axis.orient = axisModel.get("orient");
      axisModel.axis = axis;
      axis.model = axisModel;
      axis.coordinateSystem = this;
      this._axis = axis;
    };
    Single2.prototype.update = function(ecModel, api) {
      ecModel.eachSeries(function(seriesModel) {
        if (seriesModel.coordinateSystem === this) {
          var data_1 = seriesModel.getData();
          each(data_1.mapDimensionsAll(this.dimension), function(dim) {
            this._axis.scale.unionExtentFromData(data_1, dim);
          }, this);
          niceScaleExtent(this._axis.scale, this._axis.model);
        }
      }, this);
    };
    Single2.prototype.resize = function(axisModel, api) {
      this._rect = getLayoutRect({
        left: axisModel.get("left"),
        top: axisModel.get("top"),
        right: axisModel.get("right"),
        bottom: axisModel.get("bottom"),
        width: axisModel.get("width"),
        height: axisModel.get("height")
      }, {
        width: api.getWidth(),
        height: api.getHeight()
      });
      this._adjustAxis();
    };
    Single2.prototype.getRect = function() {
      return this._rect;
    };
    Single2.prototype._adjustAxis = function() {
      var rect = this._rect;
      var axis = this._axis;
      var isHorizontal = axis.isHorizontal();
      var extent = isHorizontal ? [0, rect.width] : [0, rect.height];
      var idx = axis.inverse ? 1 : 0;
      axis.setExtent(extent[idx], extent[1 - idx]);
      this._updateAxisTransform(axis, isHorizontal ? rect.x : rect.y);
    };
    Single2.prototype._updateAxisTransform = function(axis, coordBase) {
      var axisExtent = axis.getExtent();
      var extentSum = axisExtent[0] + axisExtent[1];
      var isHorizontal = axis.isHorizontal();
      axis.toGlobalCoord = isHorizontal ? function(coord) {
        return coord + coordBase;
      } : function(coord) {
        return extentSum - coord + coordBase;
      };
      axis.toLocalCoord = isHorizontal ? function(coord) {
        return coord - coordBase;
      } : function(coord) {
        return extentSum - coord + coordBase;
      };
    };
    Single2.prototype.getAxis = function() {
      return this._axis;
    };
    Single2.prototype.getBaseAxis = function() {
      return this._axis;
    };
    Single2.prototype.getAxes = function() {
      return [this._axis];
    };
    Single2.prototype.getTooltipAxes = function() {
      return {
        baseAxes: [this.getAxis()],
        // Empty otherAxes
        otherAxes: []
      };
    };
    Single2.prototype.containPoint = function(point) {
      var rect = this.getRect();
      var axis = this.getAxis();
      var orient = axis.orient;
      if (orient === "horizontal") {
        return axis.contain(axis.toLocalCoord(point[0])) && point[1] >= rect.y && point[1] <= rect.y + rect.height;
      } else {
        return axis.contain(axis.toLocalCoord(point[1])) && point[0] >= rect.y && point[0] <= rect.y + rect.height;
      }
    };
    Single2.prototype.pointToData = function(point) {
      var axis = this.getAxis();
      return [axis.coordToData(axis.toLocalCoord(point[axis.orient === "horizontal" ? 0 : 1]))];
    };
    Single2.prototype.dataToPoint = function(val) {
      var axis = this.getAxis();
      var rect = this.getRect();
      var pt = [];
      var idx = axis.orient === "horizontal" ? 0 : 1;
      if (val instanceof Array) {
        val = val[0];
      }
      pt[idx] = axis.toGlobalCoord(axis.dataToCoord(+val));
      pt[1 - idx] = idx === 0 ? rect.y + rect.height / 2 : rect.x + rect.width / 2;
      return pt;
    };
    Single2.prototype.convertToPixel = function(ecModel, finder, value) {
      var coordSys = getCoordSys2(finder);
      return coordSys === this ? this.dataToPoint(value) : null;
    };
    Single2.prototype.convertFromPixel = function(ecModel, finder, pixel) {
      var coordSys = getCoordSys2(finder);
      return coordSys === this ? this.pointToData(pixel) : null;
    };
    return Single2;
  }()
);
function getCoordSys2(finder) {
  var seriesModel = finder.seriesModel;
  var singleModel = finder.singleAxisModel;
  return singleModel && singleModel.coordinateSystem || seriesModel && seriesModel.coordinateSystem;
}
var Single_default = Single;

// node_modules/echarts/lib/coord/single/singleCreator.js
init_model();
function create2(ecModel, api) {
  var singles = [];
  ecModel.eachComponent("singleAxis", function(axisModel, idx) {
    var single = new Single_default(axisModel, ecModel, api);
    single.name = "single_" + idx;
    single.resize(axisModel, api);
    axisModel.coordinateSystem = single;
    singles.push(single);
  });
  ecModel.eachSeries(function(seriesModel) {
    if (seriesModel.get("coordinateSystem") === "singleAxis") {
      var singleAxisModel = seriesModel.getReferringComponents("singleAxis", SINGLE_REFERRING).models[0];
      seriesModel.coordinateSystem = singleAxisModel && singleAxisModel.coordinateSystem;
    }
  });
  return singles;
}
var singleCreator = {
  create: create2,
  dimensions: singleDimensions
};
var singleCreator_default = singleCreator;

// node_modules/echarts/lib/component/axisPointer/SingleAxisPointer.js
init_tslib_es6();
var XY = ["x", "y"];
var WH = ["width", "height"];
var SingleAxisPointer = (
  /** @class */
  function(_super) {
    __extends(SingleAxisPointer2, _super);
    function SingleAxisPointer2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    SingleAxisPointer2.prototype.makeElOption = function(elOption, value, axisModel, axisPointerModel, api) {
      var axis = axisModel.axis;
      var coordSys = axis.coordinateSystem;
      var otherExtent = getGlobalExtent(coordSys, 1 - getPointDimIndex(axis));
      var pixelValue = coordSys.dataToPoint(value)[0];
      var axisPointerType = axisPointerModel.get("type");
      if (axisPointerType && axisPointerType !== "none") {
        var elStyle = buildElStyle(axisPointerModel);
        var pointerOption = pointerShapeBuilder3[axisPointerType](axis, pixelValue, otherExtent);
        pointerOption.style = elStyle;
        elOption.graphicKey = pointerOption.type;
        elOption.pointer = pointerOption;
      }
      var layoutInfo = layout2(axisModel);
      buildCartesianSingleLabelElOption(
        // @ts-ignore
        value,
        elOption,
        layoutInfo,
        axisModel,
        axisPointerModel,
        api
      );
    };
    SingleAxisPointer2.prototype.getHandleTransform = function(value, axisModel, axisPointerModel) {
      var layoutInfo = layout2(axisModel, {
        labelInside: false
      });
      layoutInfo.labelMargin = axisPointerModel.get(["handle", "margin"]);
      var position = getTransformedPosition(axisModel.axis, value, layoutInfo);
      return {
        x: position[0],
        y: position[1],
        rotation: layoutInfo.rotation + (layoutInfo.labelDirection < 0 ? Math.PI : 0)
      };
    };
    SingleAxisPointer2.prototype.updateHandleTransform = function(transform, delta, axisModel, axisPointerModel) {
      var axis = axisModel.axis;
      var coordSys = axis.coordinateSystem;
      var dimIndex = getPointDimIndex(axis);
      var axisExtent = getGlobalExtent(coordSys, dimIndex);
      var currPosition = [transform.x, transform.y];
      currPosition[dimIndex] += delta[dimIndex];
      currPosition[dimIndex] = Math.min(axisExtent[1], currPosition[dimIndex]);
      currPosition[dimIndex] = Math.max(axisExtent[0], currPosition[dimIndex]);
      var otherExtent = getGlobalExtent(coordSys, 1 - dimIndex);
      var cursorOtherValue = (otherExtent[1] + otherExtent[0]) / 2;
      var cursorPoint = [cursorOtherValue, cursorOtherValue];
      cursorPoint[dimIndex] = currPosition[dimIndex];
      return {
        x: currPosition[0],
        y: currPosition[1],
        rotation: transform.rotation,
        cursorPoint,
        tooltipOption: {
          verticalAlign: "middle"
        }
      };
    };
    return SingleAxisPointer2;
  }(BaseAxisPointer_default)
);
var pointerShapeBuilder3 = {
  line: function(axis, pixelValue, otherExtent) {
    var targetShape = makeLineShape([pixelValue, otherExtent[0]], [pixelValue, otherExtent[1]], getPointDimIndex(axis));
    return {
      type: "Line",
      subPixelOptimize: true,
      shape: targetShape
    };
  },
  shadow: function(axis, pixelValue, otherExtent) {
    var bandWidth = axis.getBandWidth();
    var span = otherExtent[1] - otherExtent[0];
    return {
      type: "Rect",
      shape: makeRectShape([pixelValue - bandWidth / 2, otherExtent[0]], [bandWidth, span], getPointDimIndex(axis))
    };
  }
};
function getPointDimIndex(axis) {
  return axis.isHorizontal() ? 0 : 1;
}
function getGlobalExtent(coordSys, dimIndex) {
  var rect = coordSys.getRect();
  return [rect[XY[dimIndex]], rect[XY[dimIndex]] + rect[WH[dimIndex]]];
}
var SingleAxisPointer_default = SingleAxisPointer;

// node_modules/echarts/lib/component/singleAxis/install.js
var SingleView = (
  /** @class */
  function(_super) {
    __extends(SingleView2, _super);
    function SingleView2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.type = SingleView2.type;
      return _this;
    }
    SingleView2.type = "single";
    return SingleView2;
  }(Component_default2)
);
function install9(registers) {
  use(install6);
  AxisView_default.registerAxisPointerClass("SingleAxisPointer", SingleAxisPointer_default);
  registers.registerComponentView(SingleView);
  registers.registerComponentView(SingleAxisView_default);
  registers.registerComponentModel(AxisModel_default);
  axisModelCreator(registers, "single", AxisModel_default, AxisModel_default.defaultOption);
  registers.registerCoordinateSystem("single", singleCreator_default);
}

// node_modules/echarts/lib/coord/calendar/CalendarModel.js
init_tslib_es6();
init_util();
init_Component();
init_layout();
var CalendarModel = (
  /** @class */
  function(_super) {
    __extends(CalendarModel2, _super);
    function CalendarModel2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.type = CalendarModel2.type;
      return _this;
    }
    CalendarModel2.prototype.init = function(option, parentModel, ecModel) {
      var inputPositionParams = getLayoutParams(option);
      _super.prototype.init.apply(this, arguments);
      mergeAndNormalizeLayoutParams(option, inputPositionParams);
    };
    CalendarModel2.prototype.mergeOption = function(option) {
      _super.prototype.mergeOption.apply(this, arguments);
      mergeAndNormalizeLayoutParams(this.option, option);
    };
    CalendarModel2.prototype.getCellSize = function() {
      return this.option.cellSize;
    };
    CalendarModel2.type = "calendar";
    CalendarModel2.defaultOption = {
      // zlevel: 0,
      z: 2,
      left: 80,
      top: 60,
      cellSize: 20,
      // horizontal vertical
      orient: "horizontal",
      // month separate line style
      splitLine: {
        show: true,
        lineStyle: {
          color: "#000",
          width: 1,
          type: "solid"
        }
      },
      // rect style  temporarily unused emphasis
      itemStyle: {
        color: "#fff",
        borderWidth: 1,
        borderColor: "#ccc"
      },
      // week text style
      dayLabel: {
        show: true,
        firstDay: 0,
        // start end
        position: "start",
        margin: "50%",
        color: "#000"
      },
      // month text style
      monthLabel: {
        show: true,
        // start end
        position: "start",
        margin: 5,
        // center or left
        align: "center",
        formatter: null,
        color: "#000"
      },
      // year text style
      yearLabel: {
        show: true,
        // top bottom left right
        position: null,
        margin: 30,
        formatter: null,
        color: "#ccc",
        fontFamily: "sans-serif",
        fontWeight: "bolder",
        fontSize: 20
      }
    };
    return CalendarModel2;
  }(Component_default)
);
function mergeAndNormalizeLayoutParams(target, raw) {
  var cellSize = target.cellSize;
  var cellSizeArr;
  if (!isArray(cellSize)) {
    cellSizeArr = target.cellSize = [cellSize, cellSize];
  } else {
    cellSizeArr = cellSize;
  }
  if (cellSizeArr.length === 1) {
    cellSizeArr[1] = cellSizeArr[0];
  }
  var ignoreSize = map([0, 1], function(hvIdx) {
    if (sizeCalculable(raw, hvIdx)) {
      cellSizeArr[hvIdx] = "auto";
    }
    return cellSizeArr[hvIdx] != null && cellSizeArr[hvIdx] !== "auto";
  });
  mergeLayoutParam(target, raw, {
    type: "box",
    ignoreSize
  });
}
var CalendarModel_default = CalendarModel;

// node_modules/echarts/lib/component/calendar/CalendarView.js
init_tslib_es6();
init_util();
init_graphic();
init_labelStyle();
init_format();
init_number();
init_Component2();
init_locale();
var CalendarView = (
  /** @class */
  function(_super) {
    __extends(CalendarView2, _super);
    function CalendarView2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.type = CalendarView2.type;
      return _this;
    }
    CalendarView2.prototype.render = function(calendarModel, ecModel, api) {
      var group = this.group;
      group.removeAll();
      var coordSys = calendarModel.coordinateSystem;
      var rangeData = coordSys.getRangeInfo();
      var orient = coordSys.getOrient();
      var localeModel = ecModel.getLocaleModel();
      this._renderDayRect(calendarModel, rangeData, group);
      this._renderLines(calendarModel, rangeData, orient, group);
      this._renderYearText(calendarModel, rangeData, orient, group);
      this._renderMonthText(calendarModel, localeModel, orient, group);
      this._renderWeekText(calendarModel, localeModel, rangeData, orient, group);
    };
    CalendarView2.prototype._renderDayRect = function(calendarModel, rangeData, group) {
      var coordSys = calendarModel.coordinateSystem;
      var itemRectStyleModel = calendarModel.getModel("itemStyle").getItemStyle();
      var sw = coordSys.getCellWidth();
      var sh = coordSys.getCellHeight();
      for (var i = rangeData.start.time; i <= rangeData.end.time; i = coordSys.getNextNDay(i, 1).time) {
        var point = coordSys.dataToRect([i], false).tl;
        var rect = new Rect_default({
          shape: {
            x: point[0],
            y: point[1],
            width: sw,
            height: sh
          },
          cursor: "default",
          style: itemRectStyleModel
        });
        group.add(rect);
      }
    };
    CalendarView2.prototype._renderLines = function(calendarModel, rangeData, orient, group) {
      var self = this;
      var coordSys = calendarModel.coordinateSystem;
      var lineStyleModel = calendarModel.getModel(["splitLine", "lineStyle"]).getLineStyle();
      var show = calendarModel.get(["splitLine", "show"]);
      var lineWidth = lineStyleModel.lineWidth;
      this._tlpoints = [];
      this._blpoints = [];
      this._firstDayOfMonth = [];
      this._firstDayPoints = [];
      var firstDay = rangeData.start;
      for (var i = 0; firstDay.time <= rangeData.end.time; i++) {
        addPoints(firstDay.formatedDate);
        if (i === 0) {
          firstDay = coordSys.getDateInfo(rangeData.start.y + "-" + rangeData.start.m);
        }
        var date = firstDay.date;
        date.setMonth(date.getMonth() + 1);
        firstDay = coordSys.getDateInfo(date);
      }
      addPoints(coordSys.getNextNDay(rangeData.end.time, 1).formatedDate);
      function addPoints(date2) {
        self._firstDayOfMonth.push(coordSys.getDateInfo(date2));
        self._firstDayPoints.push(coordSys.dataToRect([date2], false).tl);
        var points = self._getLinePointsOfOneWeek(calendarModel, date2, orient);
        self._tlpoints.push(points[0]);
        self._blpoints.push(points[points.length - 1]);
        show && self._drawSplitline(points, lineStyleModel, group);
      }
      show && this._drawSplitline(self._getEdgesPoints(self._tlpoints, lineWidth, orient), lineStyleModel, group);
      show && this._drawSplitline(self._getEdgesPoints(self._blpoints, lineWidth, orient), lineStyleModel, group);
    };
    CalendarView2.prototype._getEdgesPoints = function(points, lineWidth, orient) {
      var rs = [points[0].slice(), points[points.length - 1].slice()];
      var idx = orient === "horizontal" ? 0 : 1;
      rs[0][idx] = rs[0][idx] - lineWidth / 2;
      rs[1][idx] = rs[1][idx] + lineWidth / 2;
      return rs;
    };
    CalendarView2.prototype._drawSplitline = function(points, lineStyle, group) {
      var poyline = new Polyline_default({
        z2: 20,
        shape: {
          points
        },
        style: lineStyle
      });
      group.add(poyline);
    };
    CalendarView2.prototype._getLinePointsOfOneWeek = function(calendarModel, date, orient) {
      var coordSys = calendarModel.coordinateSystem;
      var parsedDate = coordSys.getDateInfo(date);
      var points = [];
      for (var i = 0; i < 7; i++) {
        var tmpD = coordSys.getNextNDay(parsedDate.time, i);
        var point = coordSys.dataToRect([tmpD.time], false);
        points[2 * tmpD.day] = point.tl;
        points[2 * tmpD.day + 1] = point[orient === "horizontal" ? "bl" : "tr"];
      }
      return points;
    };
    CalendarView2.prototype._formatterLabel = function(formatter, params) {
      if (isString(formatter) && formatter) {
        return formatTplSimple(formatter, params);
      }
      if (isFunction(formatter)) {
        return formatter(params);
      }
      return params.nameMap;
    };
    CalendarView2.prototype._yearTextPositionControl = function(textEl, point, orient, position, margin) {
      var x = point[0];
      var y = point[1];
      var aligns = ["center", "bottom"];
      if (position === "bottom") {
        y += margin;
        aligns = ["center", "top"];
      } else if (position === "left") {
        x -= margin;
      } else if (position === "right") {
        x += margin;
        aligns = ["center", "top"];
      } else {
        y -= margin;
      }
      var rotate2 = 0;
      if (position === "left" || position === "right") {
        rotate2 = Math.PI / 2;
      }
      return {
        rotation: rotate2,
        x,
        y,
        style: {
          align: aligns[0],
          verticalAlign: aligns[1]
        }
      };
    };
    CalendarView2.prototype._renderYearText = function(calendarModel, rangeData, orient, group) {
      var yearLabel = calendarModel.getModel("yearLabel");
      if (!yearLabel.get("show")) {
        return;
      }
      var margin = yearLabel.get("margin");
      var pos = yearLabel.get("position");
      if (!pos) {
        pos = orient !== "horizontal" ? "top" : "left";
      }
      var points = [this._tlpoints[this._tlpoints.length - 1], this._blpoints[0]];
      var xc = (points[0][0] + points[1][0]) / 2;
      var yc = (points[0][1] + points[1][1]) / 2;
      var idx = orient === "horizontal" ? 0 : 1;
      var posPoints = {
        top: [xc, points[idx][1]],
        bottom: [xc, points[1 - idx][1]],
        left: [points[1 - idx][0], yc],
        right: [points[idx][0], yc]
      };
      var name = rangeData.start.y;
      if (+rangeData.end.y > +rangeData.start.y) {
        name = name + "-" + rangeData.end.y;
      }
      var formatter = yearLabel.get("formatter");
      var params = {
        start: rangeData.start.y,
        end: rangeData.end.y,
        nameMap: name
      };
      var content = this._formatterLabel(formatter, params);
      var yearText = new Text_default({
        z2: 30,
        style: createTextStyle(yearLabel, {
          text: content
        }),
        silent: yearLabel.get("silent")
      });
      yearText.attr(this._yearTextPositionControl(yearText, posPoints[pos], orient, pos, margin));
      group.add(yearText);
    };
    CalendarView2.prototype._monthTextPositionControl = function(point, isCenter, orient, position, margin) {
      var align = "left";
      var vAlign = "top";
      var x = point[0];
      var y = point[1];
      if (orient === "horizontal") {
        y = y + margin;
        if (isCenter) {
          align = "center";
        }
        if (position === "start") {
          vAlign = "bottom";
        }
      } else {
        x = x + margin;
        if (isCenter) {
          vAlign = "middle";
        }
        if (position === "start") {
          align = "right";
        }
      }
      return {
        x,
        y,
        align,
        verticalAlign: vAlign
      };
    };
    CalendarView2.prototype._renderMonthText = function(calendarModel, localeModel, orient, group) {
      var monthLabel = calendarModel.getModel("monthLabel");
      if (!monthLabel.get("show")) {
        return;
      }
      var nameMap = monthLabel.get("nameMap");
      var margin = monthLabel.get("margin");
      var pos = monthLabel.get("position");
      var align = monthLabel.get("align");
      var termPoints = [this._tlpoints, this._blpoints];
      if (!nameMap || isString(nameMap)) {
        if (nameMap) {
          localeModel = getLocaleModel(nameMap) || localeModel;
        }
        nameMap = localeModel.get(["time", "monthAbbr"]) || [];
      }
      var idx = pos === "start" ? 0 : 1;
      var axis = orient === "horizontal" ? 0 : 1;
      margin = pos === "start" ? -margin : margin;
      var isCenter = align === "center";
      var labelSilent = monthLabel.get("silent");
      for (var i = 0; i < termPoints[idx].length - 1; i++) {
        var tmp = termPoints[idx][i].slice();
        var firstDay = this._firstDayOfMonth[i];
        if (isCenter) {
          var firstDayPoints = this._firstDayPoints[i];
          tmp[axis] = (firstDayPoints[axis] + termPoints[0][i + 1][axis]) / 2;
        }
        var formatter = monthLabel.get("formatter");
        var name_1 = nameMap[+firstDay.m - 1];
        var params = {
          yyyy: firstDay.y,
          yy: (firstDay.y + "").slice(2),
          MM: firstDay.m,
          M: +firstDay.m,
          nameMap: name_1
        };
        var content = this._formatterLabel(formatter, params);
        var monthText = new Text_default({
          z2: 30,
          style: extend(createTextStyle(monthLabel, {
            text: content
          }), this._monthTextPositionControl(tmp, isCenter, orient, pos, margin)),
          silent: labelSilent
        });
        group.add(monthText);
      }
    };
    CalendarView2.prototype._weekTextPositionControl = function(point, orient, position, margin, cellSize) {
      var align = "center";
      var vAlign = "middle";
      var x = point[0];
      var y = point[1];
      var isStart = position === "start";
      if (orient === "horizontal") {
        x = x + margin + (isStart ? 1 : -1) * cellSize[0] / 2;
        align = isStart ? "right" : "left";
      } else {
        y = y + margin + (isStart ? 1 : -1) * cellSize[1] / 2;
        vAlign = isStart ? "bottom" : "top";
      }
      return {
        x,
        y,
        align,
        verticalAlign: vAlign
      };
    };
    CalendarView2.prototype._renderWeekText = function(calendarModel, localeModel, rangeData, orient, group) {
      var dayLabel = calendarModel.getModel("dayLabel");
      if (!dayLabel.get("show")) {
        return;
      }
      var coordSys = calendarModel.coordinateSystem;
      var pos = dayLabel.get("position");
      var nameMap = dayLabel.get("nameMap");
      var margin = dayLabel.get("margin");
      var firstDayOfWeek = coordSys.getFirstDayOfWeek();
      if (!nameMap || isString(nameMap)) {
        if (nameMap) {
          localeModel = getLocaleModel(nameMap) || localeModel;
        }
        var dayOfWeekShort = localeModel.get(["time", "dayOfWeekShort"]);
        nameMap = dayOfWeekShort || map(localeModel.get(["time", "dayOfWeekAbbr"]), function(val) {
          return val[0];
        });
      }
      var start = coordSys.getNextNDay(rangeData.end.time, 7 - rangeData.lweek).time;
      var cellSize = [coordSys.getCellWidth(), coordSys.getCellHeight()];
      margin = parsePercent2(margin, Math.min(cellSize[1], cellSize[0]));
      if (pos === "start") {
        start = coordSys.getNextNDay(rangeData.start.time, -(7 + rangeData.fweek)).time;
        margin = -margin;
      }
      var labelSilent = dayLabel.get("silent");
      for (var i = 0; i < 7; i++) {
        var tmpD = coordSys.getNextNDay(start, i);
        var point = coordSys.dataToRect([tmpD.time], false).center;
        var day = i;
        day = Math.abs((i + firstDayOfWeek) % 7);
        var weekText = new Text_default({
          z2: 30,
          style: extend(createTextStyle(dayLabel, {
            text: nameMap[day]
          }), this._weekTextPositionControl(point, orient, pos, margin, cellSize)),
          silent: labelSilent
        });
        group.add(weekText);
      }
    };
    CalendarView2.type = "calendar";
    return CalendarView2;
  }(Component_default2)
);
var CalendarView_default = CalendarView;

// node_modules/echarts/lib/coord/calendar/Calendar.js
init_util();
init_layout();
init_number();
var PROXIMATE_ONE_DAY = 864e5;
var Calendar = (
  /** @class */
  function() {
    function Calendar2(calendarModel, ecModel, api) {
      this.type = "calendar";
      this.dimensions = Calendar2.dimensions;
      this.getDimensionsInfo = Calendar2.getDimensionsInfo;
      this._model = calendarModel;
    }
    Calendar2.getDimensionsInfo = function() {
      return [{
        name: "time",
        type: "time"
      }, "value"];
    };
    Calendar2.prototype.getRangeInfo = function() {
      return this._rangeInfo;
    };
    Calendar2.prototype.getModel = function() {
      return this._model;
    };
    Calendar2.prototype.getRect = function() {
      return this._rect;
    };
    Calendar2.prototype.getCellWidth = function() {
      return this._sw;
    };
    Calendar2.prototype.getCellHeight = function() {
      return this._sh;
    };
    Calendar2.prototype.getOrient = function() {
      return this._orient;
    };
    Calendar2.prototype.getFirstDayOfWeek = function() {
      return this._firstDayOfWeek;
    };
    Calendar2.prototype.getDateInfo = function(date) {
      date = parseDate(date);
      var y = date.getFullYear();
      var m = date.getMonth() + 1;
      var mStr = m < 10 ? "0" + m : "" + m;
      var d = date.getDate();
      var dStr = d < 10 ? "0" + d : "" + d;
      var day = date.getDay();
      day = Math.abs((day + 7 - this.getFirstDayOfWeek()) % 7);
      return {
        y: y + "",
        m: mStr,
        d: dStr,
        day,
        time: date.getTime(),
        formatedDate: y + "-" + mStr + "-" + dStr,
        date
      };
    };
    Calendar2.prototype.getNextNDay = function(date, n) {
      n = n || 0;
      if (n === 0) {
        return this.getDateInfo(date);
      }
      date = new Date(this.getDateInfo(date).time);
      date.setDate(date.getDate() + n);
      return this.getDateInfo(date);
    };
    Calendar2.prototype.update = function(ecModel, api) {
      this._firstDayOfWeek = +this._model.getModel("dayLabel").get("firstDay");
      this._orient = this._model.get("orient");
      this._lineWidth = this._model.getModel("itemStyle").getItemStyle().lineWidth || 0;
      this._rangeInfo = this._getRangeInfo(this._initRangeOption());
      var weeks = this._rangeInfo.weeks || 1;
      var whNames = ["width", "height"];
      var cellSize = this._model.getCellSize().slice();
      var layoutParams = this._model.getBoxLayoutParams();
      var cellNumbers = this._orient === "horizontal" ? [weeks, 7] : [7, weeks];
      each([0, 1], function(idx) {
        if (cellSizeSpecified(cellSize, idx)) {
          layoutParams[whNames[idx]] = cellSize[idx] * cellNumbers[idx];
        }
      });
      var whGlobal = {
        width: api.getWidth(),
        height: api.getHeight()
      };
      var calendarRect = this._rect = getLayoutRect(layoutParams, whGlobal);
      each([0, 1], function(idx) {
        if (!cellSizeSpecified(cellSize, idx)) {
          cellSize[idx] = calendarRect[whNames[idx]] / cellNumbers[idx];
        }
      });
      function cellSizeSpecified(cellSize2, idx) {
        return cellSize2[idx] != null && cellSize2[idx] !== "auto";
      }
      this._sw = cellSize[0];
      this._sh = cellSize[1];
    };
    Calendar2.prototype.dataToPoint = function(data, clamp) {
      isArray(data) && (data = data[0]);
      clamp == null && (clamp = true);
      var dayInfo = this.getDateInfo(data);
      var range = this._rangeInfo;
      var date = dayInfo.formatedDate;
      if (clamp && !(dayInfo.time >= range.start.time && dayInfo.time < range.end.time + PROXIMATE_ONE_DAY)) {
        return [NaN, NaN];
      }
      var week = dayInfo.day;
      var nthWeek = this._getRangeInfo([range.start.time, date]).nthWeek;
      if (this._orient === "vertical") {
        return [this._rect.x + week * this._sw + this._sw / 2, this._rect.y + nthWeek * this._sh + this._sh / 2];
      }
      return [this._rect.x + nthWeek * this._sw + this._sw / 2, this._rect.y + week * this._sh + this._sh / 2];
    };
    Calendar2.prototype.pointToData = function(point) {
      var date = this.pointToDate(point);
      return date && date.time;
    };
    Calendar2.prototype.dataToRect = function(data, clamp) {
      var point = this.dataToPoint(data, clamp);
      return {
        contentShape: {
          x: point[0] - (this._sw - this._lineWidth) / 2,
          y: point[1] - (this._sh - this._lineWidth) / 2,
          width: this._sw - this._lineWidth,
          height: this._sh - this._lineWidth
        },
        center: point,
        tl: [point[0] - this._sw / 2, point[1] - this._sh / 2],
        tr: [point[0] + this._sw / 2, point[1] - this._sh / 2],
        br: [point[0] + this._sw / 2, point[1] + this._sh / 2],
        bl: [point[0] - this._sw / 2, point[1] + this._sh / 2]
      };
    };
    Calendar2.prototype.pointToDate = function(point) {
      var nthX = Math.floor((point[0] - this._rect.x) / this._sw) + 1;
      var nthY = Math.floor((point[1] - this._rect.y) / this._sh) + 1;
      var range = this._rangeInfo.range;
      if (this._orient === "vertical") {
        return this._getDateByWeeksAndDay(nthY, nthX - 1, range);
      }
      return this._getDateByWeeksAndDay(nthX, nthY - 1, range);
    };
    Calendar2.prototype.convertToPixel = function(ecModel, finder, value) {
      var coordSys = getCoordSys3(finder);
      return coordSys === this ? coordSys.dataToPoint(value) : null;
    };
    Calendar2.prototype.convertFromPixel = function(ecModel, finder, pixel) {
      var coordSys = getCoordSys3(finder);
      return coordSys === this ? coordSys.pointToData(pixel) : null;
    };
    Calendar2.prototype.containPoint = function(point) {
      console.warn("Not implemented.");
      return false;
    };
    Calendar2.prototype._initRangeOption = function() {
      var range = this._model.get("range");
      var normalizedRange;
      if (isArray(range) && range.length === 1) {
        range = range[0];
      }
      if (!isArray(range)) {
        var rangeStr = range.toString();
        if (/^\d{4}$/.test(rangeStr)) {
          normalizedRange = [rangeStr + "-01-01", rangeStr + "-12-31"];
        }
        if (/^\d{4}[\/|-]\d{1,2}$/.test(rangeStr)) {
          var start = this.getDateInfo(rangeStr);
          var firstDay = start.date;
          firstDay.setMonth(firstDay.getMonth() + 1);
          var end = this.getNextNDay(firstDay, -1);
          normalizedRange = [start.formatedDate, end.formatedDate];
        }
        if (/^\d{4}[\/|-]\d{1,2}[\/|-]\d{1,2}$/.test(rangeStr)) {
          normalizedRange = [rangeStr, rangeStr];
        }
      } else {
        normalizedRange = range;
      }
      if (!normalizedRange) {
        if (true) {
          logError("Invalid date range.");
        }
        return range;
      }
      var tmp = this._getRangeInfo(normalizedRange);
      if (tmp.start.time > tmp.end.time) {
        normalizedRange.reverse();
      }
      return normalizedRange;
    };
    Calendar2.prototype._getRangeInfo = function(range) {
      var parsedRange = [this.getDateInfo(range[0]), this.getDateInfo(range[1])];
      var reversed;
      if (parsedRange[0].time > parsedRange[1].time) {
        reversed = true;
        parsedRange.reverse();
      }
      var allDay = Math.floor(parsedRange[1].time / PROXIMATE_ONE_DAY) - Math.floor(parsedRange[0].time / PROXIMATE_ONE_DAY) + 1;
      var date = new Date(parsedRange[0].time);
      var startDateNum = date.getDate();
      var endDateNum = parsedRange[1].date.getDate();
      date.setDate(startDateNum + allDay - 1);
      var dateNum = date.getDate();
      if (dateNum !== endDateNum) {
        var sign = date.getTime() - parsedRange[1].time > 0 ? 1 : -1;
        while ((dateNum = date.getDate()) !== endDateNum && (date.getTime() - parsedRange[1].time) * sign > 0) {
          allDay -= sign;
          date.setDate(dateNum - sign);
        }
      }
      var weeks = Math.floor((allDay + parsedRange[0].day + 6) / 7);
      var nthWeek = reversed ? -weeks + 1 : weeks - 1;
      reversed && parsedRange.reverse();
      return {
        range: [parsedRange[0].formatedDate, parsedRange[1].formatedDate],
        start: parsedRange[0],
        end: parsedRange[1],
        allDay,
        weeks,
        // From 0.
        nthWeek,
        fweek: parsedRange[0].day,
        lweek: parsedRange[1].day
      };
    };
    Calendar2.prototype._getDateByWeeksAndDay = function(nthWeek, day, range) {
      var rangeInfo = this._getRangeInfo(range);
      if (nthWeek > rangeInfo.weeks || nthWeek === 0 && day < rangeInfo.fweek || nthWeek === rangeInfo.weeks && day > rangeInfo.lweek) {
        return null;
      }
      var nthDay = (nthWeek - 1) * 7 - rangeInfo.fweek + day;
      var date = new Date(rangeInfo.start.time);
      date.setDate(+rangeInfo.start.d + nthDay);
      return this.getDateInfo(date);
    };
    Calendar2.create = function(ecModel, api) {
      var calendarList = [];
      ecModel.eachComponent("calendar", function(calendarModel) {
        var calendar = new Calendar2(calendarModel, ecModel, api);
        calendarList.push(calendar);
        calendarModel.coordinateSystem = calendar;
      });
      ecModel.eachSeries(function(calendarSeries) {
        if (calendarSeries.get("coordinateSystem") === "calendar") {
          calendarSeries.coordinateSystem = calendarList[calendarSeries.get("calendarIndex") || 0];
        }
      });
      return calendarList;
    };
    Calendar2.dimensions = ["time", "value"];
    return Calendar2;
  }()
);
function getCoordSys3(finder) {
  var calendarModel = finder.calendarModel;
  var seriesModel = finder.seriesModel;
  var coordSys = calendarModel ? calendarModel.coordinateSystem : seriesModel ? seriesModel.coordinateSystem : null;
  return coordSys;
}
var Calendar_default = Calendar;

// node_modules/echarts/lib/component/calendar/install.js
function install10(registers) {
  registers.registerComponentModel(CalendarModel_default);
  registers.registerComponentView(CalendarView_default);
  registers.registerCoordinateSystem("calendar", Calendar_default);
}

// node_modules/echarts/lib/component/graphic/install.js
init_util();

// node_modules/echarts/lib/component/graphic/GraphicModel.js
init_tslib_es6();
init_util();
init_model();
init_Component();
init_layout();
function setKeyInfoToNewElOption(resultItem, newElOption) {
  var existElOption = resultItem.existing;
  newElOption.id = resultItem.keyInfo.id;
  !newElOption.type && existElOption && (newElOption.type = existElOption.type);
  if (newElOption.parentId == null) {
    var newElParentOption = newElOption.parentOption;
    if (newElParentOption) {
      newElOption.parentId = newElParentOption.id;
    } else if (existElOption) {
      newElOption.parentId = existElOption.parentId;
    }
  }
  newElOption.parentOption = null;
}
function isSetLoc(obj, props) {
  var isSet;
  each(props, function(prop) {
    obj[prop] != null && obj[prop] !== "auto" && (isSet = true);
  });
  return isSet;
}
function mergeNewElOptionToExist(existList, index, newElOption) {
  var newElOptCopy = extend({}, newElOption);
  var existElOption = existList[index];
  var $action = newElOption.$action || "merge";
  if ($action === "merge") {
    if (existElOption) {
      if (true) {
        var newType = newElOption.type;
        assert(!newType || existElOption.type === newType, 'Please set $action: "replace" to change `type`');
      }
      merge(existElOption, newElOptCopy, true);
      mergeLayoutParam(existElOption, newElOptCopy, {
        ignoreSize: true
      });
      copyLayoutParams(newElOption, existElOption);
      copyTransitionInfo(newElOption, existElOption);
      copyTransitionInfo(newElOption, existElOption, "shape");
      copyTransitionInfo(newElOption, existElOption, "style");
      copyTransitionInfo(newElOption, existElOption, "extra");
      newElOption.clipPath = existElOption.clipPath;
    } else {
      existList[index] = newElOptCopy;
    }
  } else if ($action === "replace") {
    existList[index] = newElOptCopy;
  } else if ($action === "remove") {
    existElOption && (existList[index] = null);
  }
}
var TRANSITION_PROPS_TO_COPY = ["transition", "enterFrom", "leaveTo"];
var ROOT_TRANSITION_PROPS_TO_COPY = TRANSITION_PROPS_TO_COPY.concat(["enterAnimation", "updateAnimation", "leaveAnimation"]);
function copyTransitionInfo(target, source, targetProp) {
  if (targetProp) {
    if (!target[targetProp] && source[targetProp]) {
      target[targetProp] = {};
    }
    target = target[targetProp];
    source = source[targetProp];
  }
  if (!target || !source) {
    return;
  }
  var props = targetProp ? TRANSITION_PROPS_TO_COPY : ROOT_TRANSITION_PROPS_TO_COPY;
  for (var i = 0; i < props.length; i++) {
    var prop = props[i];
    if (target[prop] == null && source[prop] != null) {
      target[prop] = source[prop];
    }
  }
}
function setLayoutInfoToExist(existItem, newElOption) {
  if (!existItem) {
    return;
  }
  existItem.hv = newElOption.hv = [
    // Rigid body, don't care about `width`.
    isSetLoc(newElOption, ["left", "right"]),
    // Rigid body, don't care about `height`.
    isSetLoc(newElOption, ["top", "bottom"])
  ];
  if (existItem.type === "group") {
    var existingGroupOpt = existItem;
    var newGroupOpt = newElOption;
    existingGroupOpt.width == null && (existingGroupOpt.width = newGroupOpt.width = 0);
    existingGroupOpt.height == null && (existingGroupOpt.height = newGroupOpt.height = 0);
  }
}
var GraphicComponentModel = (
  /** @class */
  function(_super) {
    __extends(GraphicComponentModel2, _super);
    function GraphicComponentModel2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.type = GraphicComponentModel2.type;
      _this.preventAutoZ = true;
      return _this;
    }
    GraphicComponentModel2.prototype.mergeOption = function(option, ecModel) {
      var elements = this.option.elements;
      this.option.elements = null;
      _super.prototype.mergeOption.call(this, option, ecModel);
      this.option.elements = elements;
    };
    GraphicComponentModel2.prototype.optionUpdated = function(newOption, isInit) {
      var thisOption = this.option;
      var newList = (isInit ? thisOption : newOption).elements;
      var existList = thisOption.elements = isInit ? [] : thisOption.elements;
      var flattenedList = [];
      this._flatten(newList, flattenedList, null);
      var mappingResult = mappingToExists(existList, flattenedList, "normalMerge");
      var elOptionsToUpdate = this._elOptionsToUpdate = [];
      each(mappingResult, function(resultItem, index) {
        var newElOption = resultItem.newOption;
        if (true) {
          assert(isObject(newElOption) || resultItem.existing, "Empty graphic option definition");
        }
        if (!newElOption) {
          return;
        }
        elOptionsToUpdate.push(newElOption);
        setKeyInfoToNewElOption(resultItem, newElOption);
        mergeNewElOptionToExist(existList, index, newElOption);
        setLayoutInfoToExist(existList[index], newElOption);
      }, this);
      thisOption.elements = filter(existList, function(item) {
        item && delete item.$action;
        return item != null;
      });
    };
    GraphicComponentModel2.prototype._flatten = function(optionList, result, parentOption) {
      each(optionList, function(option) {
        if (!option) {
          return;
        }
        if (parentOption) {
          option.parentOption = parentOption;
        }
        result.push(option);
        var children = option.children;
        if (children && children.length) {
          this._flatten(children, result, option);
        }
        delete option.children;
      }, this);
    };
    GraphicComponentModel2.prototype.useElOptionsToUpdate = function() {
      var els = this._elOptionsToUpdate;
      this._elOptionsToUpdate = null;
      return els;
    };
    GraphicComponentModel2.type = "graphic";
    GraphicComponentModel2.defaultOption = {
      elements: []
      // parentId: null
    };
    return GraphicComponentModel2;
  }(Component_default)
);

// node_modules/echarts/lib/component/graphic/GraphicView.js
init_tslib_es6();
init_util();
init_Displayable();
init_model();
init_graphic();
init_layout();
init_number();
init_Component2();
init_innerStore();
init_basicTransition();
var nonShapeGraphicElements = {
  // Reserved but not supported in graphic component.
  path: null,
  compoundPath: null,
  // Supported in graphic component.
  group: Group_default,
  image: Image_default,
  text: Text_default
};
var inner5 = makeInner();
var GraphicComponentView = (
  /** @class */
  function(_super) {
    __extends(GraphicComponentView2, _super);
    function GraphicComponentView2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.type = GraphicComponentView2.type;
      return _this;
    }
    GraphicComponentView2.prototype.init = function() {
      this._elMap = createHashMap();
    };
    GraphicComponentView2.prototype.render = function(graphicModel, ecModel, api) {
      if (graphicModel !== this._lastGraphicModel) {
        this._clear();
      }
      this._lastGraphicModel = graphicModel;
      this._updateElements(graphicModel);
      this._relocate(graphicModel, api);
    };
    GraphicComponentView2.prototype._updateElements = function(graphicModel) {
      var elOptionsToUpdate = graphicModel.useElOptionsToUpdate();
      if (!elOptionsToUpdate) {
        return;
      }
      var elMap = this._elMap;
      var rootGroup = this.group;
      var globalZ = graphicModel.get("z");
      var globalZLevel = graphicModel.get("zlevel");
      each(elOptionsToUpdate, function(elOption) {
        var id = convertOptionIdName(elOption.id, null);
        var elExisting = id != null ? elMap.get(id) : null;
        var parentId = convertOptionIdName(elOption.parentId, null);
        var targetElParent = parentId != null ? elMap.get(parentId) : rootGroup;
        var elType = elOption.type;
        var elOptionStyle = elOption.style;
        if (elType === "text" && elOptionStyle) {
          if (elOption.hv && elOption.hv[1]) {
            elOptionStyle.textVerticalAlign = elOptionStyle.textBaseline = elOptionStyle.verticalAlign = elOptionStyle.align = null;
          }
        }
        var textContentOption = elOption.textContent;
        var textConfig = elOption.textConfig;
        if (elOptionStyle && isEC4CompatibleStyle(elOptionStyle, elType, !!textConfig, !!textContentOption)) {
          var convertResult = convertFromEC4CompatibleStyle(elOptionStyle, elType, true);
          if (!textConfig && convertResult.textConfig) {
            textConfig = elOption.textConfig = convertResult.textConfig;
          }
          if (!textContentOption && convertResult.textContent) {
            textContentOption = convertResult.textContent;
          }
        }
        var elOptionCleaned = getCleanedElOption(elOption);
        if (true) {
          elExisting && assert(targetElParent === elExisting.parent, "Changing parent is not supported.");
        }
        var $action = elOption.$action || "merge";
        var isMerge = $action === "merge";
        var isReplace = $action === "replace";
        if (isMerge) {
          var isInit = !elExisting;
          var el_1 = elExisting;
          if (isInit) {
            el_1 = createEl(id, targetElParent, elOption.type, elMap);
          } else {
            el_1 && (inner5(el_1).isNew = false);
            stopPreviousKeyframeAnimationAndRestore(el_1);
          }
          if (el_1) {
            applyUpdateTransition(el_1, elOptionCleaned, graphicModel, {
              isInit
            });
            updateCommonAttrs(el_1, elOption, globalZ, globalZLevel);
          }
        } else if (isReplace) {
          removeEl(elExisting, elOption, elMap, graphicModel);
          var el_2 = createEl(id, targetElParent, elOption.type, elMap);
          if (el_2) {
            applyUpdateTransition(el_2, elOptionCleaned, graphicModel, {
              isInit: true
            });
            updateCommonAttrs(el_2, elOption, globalZ, globalZLevel);
          }
        } else if ($action === "remove") {
          updateLeaveTo(elExisting, elOption);
          removeEl(elExisting, elOption, elMap, graphicModel);
        }
        var el = elMap.get(id);
        if (el && textContentOption) {
          if (isMerge) {
            var textContentExisting = el.getTextContent();
            textContentExisting ? textContentExisting.attr(textContentOption) : el.setTextContent(new Text_default(textContentOption));
          } else if (isReplace) {
            el.setTextContent(new Text_default(textContentOption));
          }
        }
        if (el) {
          var clipPathOption = elOption.clipPath;
          if (clipPathOption) {
            var clipPathType = clipPathOption.type;
            var clipPath = void 0;
            var isInit = false;
            if (isMerge) {
              var oldClipPath = el.getClipPath();
              isInit = !oldClipPath || inner5(oldClipPath).type !== clipPathType;
              clipPath = isInit ? newEl(clipPathType) : oldClipPath;
            } else if (isReplace) {
              isInit = true;
              clipPath = newEl(clipPathType);
            }
            el.setClipPath(clipPath);
            applyUpdateTransition(clipPath, clipPathOption, graphicModel, {
              isInit
            });
            applyKeyframeAnimation(clipPath, clipPathOption.keyframeAnimation, graphicModel);
          }
          var elInner = inner5(el);
          el.setTextConfig(textConfig);
          elInner.option = elOption;
          setEventData(el, graphicModel, elOption);
          setTooltipConfig({
            el,
            componentModel: graphicModel,
            itemName: el.name,
            itemTooltipOption: elOption.tooltip
          });
          applyKeyframeAnimation(el, elOption.keyframeAnimation, graphicModel);
        }
      });
    };
    GraphicComponentView2.prototype._relocate = function(graphicModel, api) {
      var elOptions = graphicModel.option.elements;
      var rootGroup = this.group;
      var elMap = this._elMap;
      var apiWidth = api.getWidth();
      var apiHeight = api.getHeight();
      var xy = ["x", "y"];
      for (var i = 0; i < elOptions.length; i++) {
        var elOption = elOptions[i];
        var id = convertOptionIdName(elOption.id, null);
        var el = id != null ? elMap.get(id) : null;
        if (!el || !el.isGroup) {
          continue;
        }
        var parentEl = el.parent;
        var isParentRoot = parentEl === rootGroup;
        var elInner = inner5(el);
        var parentElInner = inner5(parentEl);
        elInner.width = parsePercent2(elInner.option.width, isParentRoot ? apiWidth : parentElInner.width) || 0;
        elInner.height = parsePercent2(elInner.option.height, isParentRoot ? apiHeight : parentElInner.height) || 0;
      }
      for (var i = elOptions.length - 1; i >= 0; i--) {
        var elOption = elOptions[i];
        var id = convertOptionIdName(elOption.id, null);
        var el = id != null ? elMap.get(id) : null;
        if (!el) {
          continue;
        }
        var parentEl = el.parent;
        var parentElInner = inner5(parentEl);
        var containerInfo = parentEl === rootGroup ? {
          width: apiWidth,
          height: apiHeight
        } : {
          width: parentElInner.width,
          height: parentElInner.height
        };
        var layoutPos = {};
        var layouted = positionElement(el, elOption, containerInfo, null, {
          hv: elOption.hv,
          boundingMode: elOption.bounding
        }, layoutPos);
        if (!inner5(el).isNew && layouted) {
          var transition = elOption.transition;
          var animatePos = {};
          for (var k = 0; k < xy.length; k++) {
            var key = xy[k];
            var val = layoutPos[key];
            if (transition && (isTransitionAll(transition) || indexOf(transition, key) >= 0)) {
              animatePos[key] = val;
            } else {
              el[key] = val;
            }
          }
          updateProps(el, animatePos, graphicModel, 0);
        } else {
          el.attr(layoutPos);
        }
      }
    };
    GraphicComponentView2.prototype._clear = function() {
      var _this = this;
      var elMap = this._elMap;
      elMap.each(function(el) {
        removeEl(el, inner5(el).option, elMap, _this._lastGraphicModel);
      });
      this._elMap = createHashMap();
    };
    GraphicComponentView2.prototype.dispose = function() {
      this._clear();
    };
    GraphicComponentView2.type = "graphic";
    return GraphicComponentView2;
  }(Component_default2)
);
function newEl(graphicType) {
  if (true) {
    assert(graphicType, "graphic type MUST be set");
  }
  var Clz = hasOwn(nonShapeGraphicElements, graphicType) ? nonShapeGraphicElements[graphicType] : getShapeClass(graphicType);
  if (true) {
    assert(Clz, "graphic type " + graphicType + " can not be found");
  }
  var el = new Clz({});
  inner5(el).type = graphicType;
  return el;
}
function createEl(id, targetElParent, graphicType, elMap) {
  var el = newEl(graphicType);
  targetElParent.add(el);
  elMap.set(id, el);
  inner5(el).id = id;
  inner5(el).isNew = true;
  return el;
}
function removeEl(elExisting, elOption, elMap, graphicModel) {
  var existElParent = elExisting && elExisting.parent;
  if (existElParent) {
    elExisting.type === "group" && elExisting.traverse(function(el) {
      removeEl(el, elOption, elMap, graphicModel);
    });
    applyLeaveTransition(elExisting, elOption, graphicModel);
    elMap.removeKey(inner5(elExisting).id);
  }
}
function updateCommonAttrs(el, elOption, defaultZ, defaultZlevel) {
  if (!el.isGroup) {
    each([
      ["cursor", Displayable_default.prototype.cursor],
      // We should not support configure z and zlevel in the element level.
      // But seems we didn't limit it previously. So here still use it to avoid breaking.
      ["zlevel", defaultZlevel || 0],
      ["z", defaultZ || 0],
      // z2 must not be null/undefined, otherwise sort error may occur.
      ["z2", 0]
    ], function(item) {
      var prop = item[0];
      if (hasOwn(elOption, prop)) {
        el[prop] = retrieve2(elOption[prop], item[1]);
      } else if (el[prop] == null) {
        el[prop] = item[1];
      }
    });
  }
  each(keys(elOption), function(key) {
    if (key.indexOf("on") === 0) {
      var val = elOption[key];
      el[key] = isFunction(val) ? val : null;
    }
  });
  if (hasOwn(elOption, "draggable")) {
    el.draggable = elOption.draggable;
  }
  elOption.name != null && (el.name = elOption.name);
  elOption.id != null && (el.id = elOption.id);
}
function getCleanedElOption(elOption) {
  elOption = extend({}, elOption);
  each(["id", "parentId", "$action", "hv", "bounding", "textContent", "clipPath"].concat(LOCATION_PARAMS), function(name) {
    delete elOption[name];
  });
  return elOption;
}
function setEventData(el, graphicModel, elOption) {
  var eventData = getECData(el).eventData;
  if (!el.silent && !el.ignore && !eventData) {
    eventData = getECData(el).eventData = {
      componentType: "graphic",
      componentIndex: graphicModel.componentIndex,
      name: el.name
    };
  }
  if (eventData) {
    eventData.info = elOption.info;
  }
}

// node_modules/echarts/lib/component/graphic/install.js
function install11(registers) {
  registers.registerComponentModel(GraphicComponentModel);
  registers.registerComponentView(GraphicComponentView);
  registers.registerPreprocessor(function(option) {
    var graphicOption = option.graphic;
    if (isArray(graphicOption)) {
      if (!graphicOption[0] || !graphicOption[0].elements) {
        option.graphic = [{
          elements: graphicOption
        }];
      } else {
        option.graphic = [option.graphic[0]];
      }
    } else if (graphicOption && !graphicOption.elements) {
      option.graphic = [{
        elements: [graphicOption]
      }];
    }
  });
}

// node_modules/echarts/lib/component/toolbox/install.js
init_extension();

// node_modules/echarts/lib/component/dataZoom/SelectZoomModel.js
init_tslib_es6();

// node_modules/echarts/lib/component/dataZoom/DataZoomModel.js
init_tslib_es6();
init_util();
init_Component();

// node_modules/echarts/lib/component/dataZoom/helper.js
init_util();
var DATA_ZOOM_AXIS_DIMENSIONS = ["x", "y", "radius", "angle", "single"];
var SERIES_COORDS = ["cartesian2d", "polar", "singleAxis"];
function isCoordSupported(seriesModel) {
  var coordType = seriesModel.get("coordinateSystem");
  return indexOf(SERIES_COORDS, coordType) >= 0;
}
function getAxisMainType(axisDim) {
  if (true) {
    assert(axisDim);
  }
  return axisDim + "Axis";
}
function findEffectedDataZooms(ecModel, payload) {
  var axisRecords = createHashMap();
  var effectedModels = [];
  var effectedModelMap = createHashMap();
  ecModel.eachComponent({
    mainType: "dataZoom",
    query: payload
  }, function(dataZoomModel) {
    if (!effectedModelMap.get(dataZoomModel.uid)) {
      addToEffected(dataZoomModel);
    }
  });
  var foundNewLink;
  do {
    foundNewLink = false;
    ecModel.eachComponent("dataZoom", processSingle);
  } while (foundNewLink);
  function processSingle(dataZoomModel) {
    if (!effectedModelMap.get(dataZoomModel.uid) && isLinked(dataZoomModel)) {
      addToEffected(dataZoomModel);
      foundNewLink = true;
    }
  }
  function addToEffected(dataZoom) {
    effectedModelMap.set(dataZoom.uid, true);
    effectedModels.push(dataZoom);
    markAxisControlled(dataZoom);
  }
  function isLinked(dataZoomModel) {
    var isLink = false;
    dataZoomModel.eachTargetAxis(function(axisDim, axisIndex) {
      var axisIdxArr = axisRecords.get(axisDim);
      if (axisIdxArr && axisIdxArr[axisIndex]) {
        isLink = true;
      }
    });
    return isLink;
  }
  function markAxisControlled(dataZoomModel) {
    dataZoomModel.eachTargetAxis(function(axisDim, axisIndex) {
      (axisRecords.get(axisDim) || axisRecords.set(axisDim, []))[axisIndex] = true;
    });
  }
  return effectedModels;
}
function collectReferCoordSysModelInfo(dataZoomModel) {
  var ecModel = dataZoomModel.ecModel;
  var coordSysInfoWrap = {
    infoList: [],
    infoMap: createHashMap()
  };
  dataZoomModel.eachTargetAxis(function(axisDim, axisIndex) {
    var axisModel = ecModel.getComponent(getAxisMainType(axisDim), axisIndex);
    if (!axisModel) {
      return;
    }
    var coordSysModel = axisModel.getCoordSysModel();
    if (!coordSysModel) {
      return;
    }
    var coordSysUid = coordSysModel.uid;
    var coordSysInfo = coordSysInfoWrap.infoMap.get(coordSysUid);
    if (!coordSysInfo) {
      coordSysInfo = {
        model: coordSysModel,
        axisModels: []
      };
      coordSysInfoWrap.infoList.push(coordSysInfo);
      coordSysInfoWrap.infoMap.set(coordSysUid, coordSysInfo);
    }
    coordSysInfo.axisModels.push(axisModel);
  });
  return coordSysInfoWrap;
}

// node_modules/echarts/lib/component/dataZoom/DataZoomModel.js
init_model();
var DataZoomAxisInfo = (
  /** @class */
  function() {
    function DataZoomAxisInfo2() {
      this.indexList = [];
      this.indexMap = [];
    }
    DataZoomAxisInfo2.prototype.add = function(axisCmptIdx) {
      if (!this.indexMap[axisCmptIdx]) {
        this.indexList.push(axisCmptIdx);
        this.indexMap[axisCmptIdx] = true;
      }
    };
    return DataZoomAxisInfo2;
  }()
);
var DataZoomModel = (
  /** @class */
  function(_super) {
    __extends(DataZoomModel2, _super);
    function DataZoomModel2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.type = DataZoomModel2.type;
      _this._autoThrottle = true;
      _this._noTarget = true;
      _this._rangePropMode = ["percent", "percent"];
      return _this;
    }
    DataZoomModel2.prototype.init = function(option, parentModel, ecModel) {
      var inputRawOption = retrieveRawOption(option);
      this.settledOption = inputRawOption;
      this.mergeDefaultAndTheme(option, ecModel);
      this._doInit(inputRawOption);
    };
    DataZoomModel2.prototype.mergeOption = function(newOption) {
      var inputRawOption = retrieveRawOption(newOption);
      merge(this.option, newOption, true);
      merge(this.settledOption, inputRawOption, true);
      this._doInit(inputRawOption);
    };
    DataZoomModel2.prototype._doInit = function(inputRawOption) {
      var thisOption = this.option;
      this._setDefaultThrottle(inputRawOption);
      this._updateRangeUse(inputRawOption);
      var settledOption = this.settledOption;
      each([["start", "startValue"], ["end", "endValue"]], function(names, index) {
        if (this._rangePropMode[index] === "value") {
          thisOption[names[0]] = settledOption[names[0]] = null;
        }
      }, this);
      this._resetTarget();
    };
    DataZoomModel2.prototype._resetTarget = function() {
      var optionOrient = this.get("orient", true);
      var targetAxisIndexMap = this._targetAxisInfoMap = createHashMap();
      var hasAxisSpecified = this._fillSpecifiedTargetAxis(targetAxisIndexMap);
      if (hasAxisSpecified) {
        this._orient = optionOrient || this._makeAutoOrientByTargetAxis();
      } else {
        this._orient = optionOrient || "horizontal";
        this._fillAutoTargetAxisByOrient(targetAxisIndexMap, this._orient);
      }
      this._noTarget = true;
      targetAxisIndexMap.each(function(axisInfo) {
        if (axisInfo.indexList.length) {
          this._noTarget = false;
        }
      }, this);
    };
    DataZoomModel2.prototype._fillSpecifiedTargetAxis = function(targetAxisIndexMap) {
      var hasAxisSpecified = false;
      each(DATA_ZOOM_AXIS_DIMENSIONS, function(axisDim) {
        var refering = this.getReferringComponents(getAxisMainType(axisDim), MULTIPLE_REFERRING);
        if (!refering.specified) {
          return;
        }
        hasAxisSpecified = true;
        var axisInfo = new DataZoomAxisInfo();
        each(refering.models, function(axisModel) {
          axisInfo.add(axisModel.componentIndex);
        });
        targetAxisIndexMap.set(axisDim, axisInfo);
      }, this);
      return hasAxisSpecified;
    };
    DataZoomModel2.prototype._fillAutoTargetAxisByOrient = function(targetAxisIndexMap, orient) {
      var ecModel = this.ecModel;
      var needAuto = true;
      if (needAuto) {
        var axisDim = orient === "vertical" ? "y" : "x";
        var axisModels = ecModel.findComponents({
          mainType: axisDim + "Axis"
        });
        setParallelAxis(axisModels, axisDim);
      }
      if (needAuto) {
        var axisModels = ecModel.findComponents({
          mainType: "singleAxis",
          filter: function(axisModel) {
            return axisModel.get("orient", true) === orient;
          }
        });
        setParallelAxis(axisModels, "single");
      }
      function setParallelAxis(axisModels2, axisDim2) {
        var axisModel = axisModels2[0];
        if (!axisModel) {
          return;
        }
        var axisInfo = new DataZoomAxisInfo();
        axisInfo.add(axisModel.componentIndex);
        targetAxisIndexMap.set(axisDim2, axisInfo);
        needAuto = false;
        if (axisDim2 === "x" || axisDim2 === "y") {
          var gridModel_1 = axisModel.getReferringComponents("grid", SINGLE_REFERRING).models[0];
          gridModel_1 && each(axisModels2, function(axModel) {
            if (axisModel.componentIndex !== axModel.componentIndex && gridModel_1 === axModel.getReferringComponents("grid", SINGLE_REFERRING).models[0]) {
              axisInfo.add(axModel.componentIndex);
            }
          });
        }
      }
      if (needAuto) {
        each(DATA_ZOOM_AXIS_DIMENSIONS, function(axisDim2) {
          if (!needAuto) {
            return;
          }
          var axisModels2 = ecModel.findComponents({
            mainType: getAxisMainType(axisDim2),
            filter: function(axisModel) {
              return axisModel.get("type", true) === "category";
            }
          });
          if (axisModels2[0]) {
            var axisInfo = new DataZoomAxisInfo();
            axisInfo.add(axisModels2[0].componentIndex);
            targetAxisIndexMap.set(axisDim2, axisInfo);
            needAuto = false;
          }
        }, this);
      }
    };
    DataZoomModel2.prototype._makeAutoOrientByTargetAxis = function() {
      var dim;
      this.eachTargetAxis(function(axisDim) {
        !dim && (dim = axisDim);
      }, this);
      return dim === "y" ? "vertical" : "horizontal";
    };
    DataZoomModel2.prototype._setDefaultThrottle = function(inputRawOption) {
      if (inputRawOption.hasOwnProperty("throttle")) {
        this._autoThrottle = false;
      }
      if (this._autoThrottle) {
        var globalOption = this.ecModel.option;
        this.option.throttle = globalOption.animation && globalOption.animationDurationUpdate > 0 ? 100 : 20;
      }
    };
    DataZoomModel2.prototype._updateRangeUse = function(inputRawOption) {
      var rangePropMode = this._rangePropMode;
      var rangeModeInOption = this.get("rangeMode");
      each([["start", "startValue"], ["end", "endValue"]], function(names, index) {
        var percentSpecified = inputRawOption[names[0]] != null;
        var valueSpecified = inputRawOption[names[1]] != null;
        if (percentSpecified && !valueSpecified) {
          rangePropMode[index] = "percent";
        } else if (!percentSpecified && valueSpecified) {
          rangePropMode[index] = "value";
        } else if (rangeModeInOption) {
          rangePropMode[index] = rangeModeInOption[index];
        } else if (percentSpecified) {
          rangePropMode[index] = "percent";
        }
      });
    };
    DataZoomModel2.prototype.noTarget = function() {
      return this._noTarget;
    };
    DataZoomModel2.prototype.getFirstTargetAxisModel = function() {
      var firstAxisModel;
      this.eachTargetAxis(function(axisDim, axisIndex) {
        if (firstAxisModel == null) {
          firstAxisModel = this.ecModel.getComponent(getAxisMainType(axisDim), axisIndex);
        }
      }, this);
      return firstAxisModel;
    };
    DataZoomModel2.prototype.eachTargetAxis = function(callback, context) {
      this._targetAxisInfoMap.each(function(axisInfo, axisDim) {
        each(axisInfo.indexList, function(axisIndex) {
          callback.call(context, axisDim, axisIndex);
        });
      });
    };
    DataZoomModel2.prototype.getAxisProxy = function(axisDim, axisIndex) {
      var axisModel = this.getAxisModel(axisDim, axisIndex);
      if (axisModel) {
        return axisModel.__dzAxisProxy;
      }
    };
    DataZoomModel2.prototype.getAxisModel = function(axisDim, axisIndex) {
      if (true) {
        assert(axisDim && axisIndex != null);
      }
      var axisInfo = this._targetAxisInfoMap.get(axisDim);
      if (axisInfo && axisInfo.indexMap[axisIndex]) {
        return this.ecModel.getComponent(getAxisMainType(axisDim), axisIndex);
      }
    };
    DataZoomModel2.prototype.setRawRange = function(opt) {
      var thisOption = this.option;
      var settledOption = this.settledOption;
      each([["start", "startValue"], ["end", "endValue"]], function(names) {
        if (opt[names[0]] != null || opt[names[1]] != null) {
          thisOption[names[0]] = settledOption[names[0]] = opt[names[0]];
          thisOption[names[1]] = settledOption[names[1]] = opt[names[1]];
        }
      }, this);
      this._updateRangeUse(opt);
    };
    DataZoomModel2.prototype.setCalculatedRange = function(opt) {
      var option = this.option;
      each(["start", "startValue", "end", "endValue"], function(name) {
        option[name] = opt[name];
      });
    };
    DataZoomModel2.prototype.getPercentRange = function() {
      var axisProxy = this.findRepresentativeAxisProxy();
      if (axisProxy) {
        return axisProxy.getDataPercentWindow();
      }
    };
    DataZoomModel2.prototype.getValueRange = function(axisDim, axisIndex) {
      if (axisDim == null && axisIndex == null) {
        var axisProxy = this.findRepresentativeAxisProxy();
        if (axisProxy) {
          return axisProxy.getDataValueWindow();
        }
      } else {
        return this.getAxisProxy(axisDim, axisIndex).getDataValueWindow();
      }
    };
    DataZoomModel2.prototype.findRepresentativeAxisProxy = function(axisModel) {
      if (axisModel) {
        return axisModel.__dzAxisProxy;
      }
      var firstProxy;
      var axisDimList = this._targetAxisInfoMap.keys();
      for (var i = 0; i < axisDimList.length; i++) {
        var axisDim = axisDimList[i];
        var axisInfo = this._targetAxisInfoMap.get(axisDim);
        for (var j = 0; j < axisInfo.indexList.length; j++) {
          var proxy = this.getAxisProxy(axisDim, axisInfo.indexList[j]);
          if (proxy.hostedBy(this)) {
            return proxy;
          }
          if (!firstProxy) {
            firstProxy = proxy;
          }
        }
      }
      return firstProxy;
    };
    DataZoomModel2.prototype.getRangePropMode = function() {
      return this._rangePropMode.slice();
    };
    DataZoomModel2.prototype.getOrient = function() {
      if (true) {
        assert(this._orient);
      }
      return this._orient;
    };
    DataZoomModel2.type = "dataZoom";
    DataZoomModel2.dependencies = ["xAxis", "yAxis", "radiusAxis", "angleAxis", "singleAxis", "series", "toolbox"];
    DataZoomModel2.defaultOption = {
      // zlevel: 0,
      z: 4,
      filterMode: "filter",
      start: 0,
      end: 100
    };
    return DataZoomModel2;
  }(Component_default)
);
function retrieveRawOption(option) {
  var ret = {};
  each(["start", "end", "startValue", "endValue", "throttle"], function(name) {
    option.hasOwnProperty(name) && (ret[name] = option[name]);
  });
  return ret;
}
var DataZoomModel_default = DataZoomModel;

// node_modules/echarts/lib/component/dataZoom/SelectZoomModel.js
var SelectDataZoomModel = (
  /** @class */
  function(_super) {
    __extends(SelectDataZoomModel2, _super);
    function SelectDataZoomModel2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.type = SelectDataZoomModel2.type;
      return _this;
    }
    SelectDataZoomModel2.type = "dataZoom.select";
    return SelectDataZoomModel2;
  }(DataZoomModel_default)
);
var SelectZoomModel_default = SelectDataZoomModel;

// node_modules/echarts/lib/component/dataZoom/SelectZoomView.js
init_tslib_es6();

// node_modules/echarts/lib/component/dataZoom/DataZoomView.js
init_tslib_es6();
init_Component2();
var DataZoomView = (
  /** @class */
  function(_super) {
    __extends(DataZoomView2, _super);
    function DataZoomView2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.type = DataZoomView2.type;
      return _this;
    }
    DataZoomView2.prototype.render = function(dataZoomModel, ecModel, api, payload) {
      this.dataZoomModel = dataZoomModel;
      this.ecModel = ecModel;
      this.api = api;
    };
    DataZoomView2.type = "dataZoom";
    return DataZoomView2;
  }(Component_default2)
);
var DataZoomView_default = DataZoomView;

// node_modules/echarts/lib/component/dataZoom/SelectZoomView.js
var SelectDataZoomView = (
  /** @class */
  function(_super) {
    __extends(SelectDataZoomView2, _super);
    function SelectDataZoomView2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.type = SelectDataZoomView2.type;
      return _this;
    }
    SelectDataZoomView2.type = "dataZoom.select";
    return SelectDataZoomView2;
  }(DataZoomView_default)
);
var SelectZoomView_default = SelectDataZoomView;

// node_modules/echarts/lib/component/dataZoom/dataZoomProcessor.js
init_util();

// node_modules/echarts/lib/component/dataZoom/AxisProxy.js
init_util();
init_number();
init_axisHelper();
init_scaleRawExtentInfo();
init_model();
var each3 = each;
var asc2 = asc;
var AxisProxy = (
  /** @class */
  function() {
    function AxisProxy2(dimName, axisIndex, dataZoomModel, ecModel) {
      this._dimName = dimName;
      this._axisIndex = axisIndex;
      this.ecModel = ecModel;
      this._dataZoomModel = dataZoomModel;
    }
    AxisProxy2.prototype.hostedBy = function(dataZoomModel) {
      return this._dataZoomModel === dataZoomModel;
    };
    AxisProxy2.prototype.getDataValueWindow = function() {
      return this._valueWindow.slice();
    };
    AxisProxy2.prototype.getDataPercentWindow = function() {
      return this._percentWindow.slice();
    };
    AxisProxy2.prototype.getTargetSeriesModels = function() {
      var seriesModels = [];
      this.ecModel.eachSeries(function(seriesModel) {
        if (isCoordSupported(seriesModel)) {
          var axisMainType = getAxisMainType(this._dimName);
          var axisModel = seriesModel.getReferringComponents(axisMainType, SINGLE_REFERRING).models[0];
          if (axisModel && this._axisIndex === axisModel.componentIndex) {
            seriesModels.push(seriesModel);
          }
        }
      }, this);
      return seriesModels;
    };
    AxisProxy2.prototype.getAxisModel = function() {
      return this.ecModel.getComponent(this._dimName + "Axis", this._axisIndex);
    };
    AxisProxy2.prototype.getMinMaxSpan = function() {
      return clone(this._minMaxSpan);
    };
    AxisProxy2.prototype.calculateDataWindow = function(opt) {
      var dataExtent = this._dataExtent;
      var axisModel = this.getAxisModel();
      var scale = axisModel.axis.scale;
      var rangePropMode = this._dataZoomModel.getRangePropMode();
      var percentExtent = [0, 100];
      var percentWindow = [];
      var valueWindow = [];
      var hasPropModeValue;
      each3(["start", "end"], function(prop, idx) {
        var boundPercent = opt[prop];
        var boundValue = opt[prop + "Value"];
        if (rangePropMode[idx] === "percent") {
          boundPercent == null && (boundPercent = percentExtent[idx]);
          boundValue = scale.parse(linearMap(boundPercent, percentExtent, dataExtent));
        } else {
          hasPropModeValue = true;
          boundValue = boundValue == null ? dataExtent[idx] : scale.parse(boundValue);
          boundPercent = linearMap(boundValue, dataExtent, percentExtent);
        }
        valueWindow[idx] = boundValue == null || isNaN(boundValue) ? dataExtent[idx] : boundValue;
        percentWindow[idx] = boundPercent == null || isNaN(boundPercent) ? percentExtent[idx] : boundPercent;
      });
      asc2(valueWindow);
      asc2(percentWindow);
      var spans = this._minMaxSpan;
      hasPropModeValue ? restrictSet(valueWindow, percentWindow, dataExtent, percentExtent, false) : restrictSet(percentWindow, valueWindow, percentExtent, dataExtent, true);
      function restrictSet(fromWindow, toWindow, fromExtent, toExtent, toValue) {
        var suffix = toValue ? "Span" : "ValueSpan";
        sliderMove(0, fromWindow, fromExtent, "all", spans["min" + suffix], spans["max" + suffix]);
        for (var i = 0; i < 2; i++) {
          toWindow[i] = linearMap(fromWindow[i], fromExtent, toExtent, true);
          toValue && (toWindow[i] = scale.parse(toWindow[i]));
        }
      }
      return {
        valueWindow,
        percentWindow
      };
    };
    AxisProxy2.prototype.reset = function(dataZoomModel) {
      if (dataZoomModel !== this._dataZoomModel) {
        return;
      }
      var targetSeries = this.getTargetSeriesModels();
      this._dataExtent = calculateDataExtent(this, this._dimName, targetSeries);
      this._updateMinMaxSpan();
      var dataWindow = this.calculateDataWindow(dataZoomModel.settledOption);
      this._valueWindow = dataWindow.valueWindow;
      this._percentWindow = dataWindow.percentWindow;
      this._setAxisModel();
    };
    AxisProxy2.prototype.filterData = function(dataZoomModel, api) {
      if (dataZoomModel !== this._dataZoomModel) {
        return;
      }
      var axisDim = this._dimName;
      var seriesModels = this.getTargetSeriesModels();
      var filterMode = dataZoomModel.get("filterMode");
      var valueWindow = this._valueWindow;
      if (filterMode === "none") {
        return;
      }
      each3(seriesModels, function(seriesModel) {
        var seriesData = seriesModel.getData();
        var dataDims = seriesData.mapDimensionsAll(axisDim);
        if (!dataDims.length) {
          return;
        }
        if (filterMode === "weakFilter") {
          var store_1 = seriesData.getStore();
          var dataDimIndices_1 = map(dataDims, function(dim) {
            return seriesData.getDimensionIndex(dim);
          }, seriesData);
          seriesData.filterSelf(function(dataIndex) {
            var leftOut;
            var rightOut;
            var hasValue;
            for (var i = 0; i < dataDims.length; i++) {
              var value = store_1.get(dataDimIndices_1[i], dataIndex);
              var thisHasValue = !isNaN(value);
              var thisLeftOut = value < valueWindow[0];
              var thisRightOut = value > valueWindow[1];
              if (thisHasValue && !thisLeftOut && !thisRightOut) {
                return true;
              }
              thisHasValue && (hasValue = true);
              thisLeftOut && (leftOut = true);
              thisRightOut && (rightOut = true);
            }
            return hasValue && leftOut && rightOut;
          });
        } else {
          each3(dataDims, function(dim) {
            if (filterMode === "empty") {
              seriesModel.setData(seriesData = seriesData.map(dim, function(value) {
                return !isInWindow(value) ? NaN : value;
              }));
            } else {
              var range = {};
              range[dim] = valueWindow;
              seriesData.selectRange(range);
            }
          });
        }
        each3(dataDims, function(dim) {
          seriesData.setApproximateExtent(valueWindow, dim);
        });
      });
      function isInWindow(value) {
        return value >= valueWindow[0] && value <= valueWindow[1];
      }
    };
    AxisProxy2.prototype._updateMinMaxSpan = function() {
      var minMaxSpan = this._minMaxSpan = {};
      var dataZoomModel = this._dataZoomModel;
      var dataExtent = this._dataExtent;
      each3(["min", "max"], function(minMax) {
        var percentSpan = dataZoomModel.get(minMax + "Span");
        var valueSpan = dataZoomModel.get(minMax + "ValueSpan");
        valueSpan != null && (valueSpan = this.getAxisModel().axis.scale.parse(valueSpan));
        if (valueSpan != null) {
          percentSpan = linearMap(dataExtent[0] + valueSpan, dataExtent, [0, 100], true);
        } else if (percentSpan != null) {
          valueSpan = linearMap(percentSpan, [0, 100], dataExtent, true) - dataExtent[0];
        }
        minMaxSpan[minMax + "Span"] = percentSpan;
        minMaxSpan[minMax + "ValueSpan"] = valueSpan;
      }, this);
    };
    AxisProxy2.prototype._setAxisModel = function() {
      var axisModel = this.getAxisModel();
      var percentWindow = this._percentWindow;
      var valueWindow = this._valueWindow;
      if (!percentWindow) {
        return;
      }
      var precision = getPixelPrecision(valueWindow, [0, 500]);
      precision = Math.min(precision, 20);
      var rawExtentInfo = axisModel.axis.scale.rawExtentInfo;
      if (percentWindow[0] !== 0) {
        rawExtentInfo.setDeterminedMinMax("min", +valueWindow[0].toFixed(precision));
      }
      if (percentWindow[1] !== 100) {
        rawExtentInfo.setDeterminedMinMax("max", +valueWindow[1].toFixed(precision));
      }
      rawExtentInfo.freeze();
    };
    return AxisProxy2;
  }()
);
function calculateDataExtent(axisProxy, axisDim, seriesModels) {
  var dataExtent = [Infinity, -Infinity];
  each3(seriesModels, function(seriesModel) {
    unionAxisExtentFromData(dataExtent, seriesModel.getData(), axisDim);
  });
  var axisModel = axisProxy.getAxisModel();
  var rawExtentResult = ensureScaleRawExtentInfo(axisModel.axis.scale, axisModel, dataExtent).calculate();
  return [rawExtentResult.min, rawExtentResult.max];
}
var AxisProxy_default = AxisProxy;

// node_modules/echarts/lib/component/dataZoom/dataZoomProcessor.js
var dataZoomProcessor = {
  // `dataZoomProcessor` will only be performed in needed series. Consider if
  // there is a line series and a pie series, it is better not to update the
  // line series if only pie series is needed to be updated.
  getTargetSeries: function(ecModel) {
    function eachAxisModel(cb) {
      ecModel.eachComponent("dataZoom", function(dataZoomModel) {
        dataZoomModel.eachTargetAxis(function(axisDim, axisIndex) {
          var axisModel = ecModel.getComponent(getAxisMainType(axisDim), axisIndex);
          cb(axisDim, axisIndex, axisModel, dataZoomModel);
        });
      });
    }
    eachAxisModel(function(axisDim, axisIndex, axisModel, dataZoomModel) {
      axisModel.__dzAxisProxy = null;
    });
    var proxyList = [];
    eachAxisModel(function(axisDim, axisIndex, axisModel, dataZoomModel) {
      if (!axisModel.__dzAxisProxy) {
        axisModel.__dzAxisProxy = new AxisProxy_default(axisDim, axisIndex, dataZoomModel, ecModel);
        proxyList.push(axisModel.__dzAxisProxy);
      }
    });
    var seriesModelMap = createHashMap();
    each(proxyList, function(axisProxy) {
      each(axisProxy.getTargetSeriesModels(), function(seriesModel) {
        seriesModelMap.set(seriesModel.uid, seriesModel);
      });
    });
    return seriesModelMap;
  },
  // Consider appendData, where filter should be performed. Because data process is
  // in block mode currently, it is not need to worry about that the overallProgress
  // execute every frame.
  overallReset: function(ecModel, api) {
    ecModel.eachComponent("dataZoom", function(dataZoomModel) {
      dataZoomModel.eachTargetAxis(function(axisDim, axisIndex) {
        dataZoomModel.getAxisProxy(axisDim, axisIndex).reset(dataZoomModel);
      });
      dataZoomModel.eachTargetAxis(function(axisDim, axisIndex) {
        dataZoomModel.getAxisProxy(axisDim, axisIndex).filterData(dataZoomModel, api);
      });
    });
    ecModel.eachComponent("dataZoom", function(dataZoomModel) {
      var axisProxy = dataZoomModel.findRepresentativeAxisProxy();
      if (axisProxy) {
        var percentRange = axisProxy.getDataPercentWindow();
        var valueRange = axisProxy.getDataValueWindow();
        dataZoomModel.setCalculatedRange({
          start: percentRange[0],
          end: percentRange[1],
          startValue: valueRange[0],
          endValue: valueRange[1]
        });
      }
    });
  }
};
var dataZoomProcessor_default = dataZoomProcessor;

// node_modules/echarts/lib/component/dataZoom/dataZoomAction.js
init_util();
function installDataZoomAction(registers) {
  registers.registerAction("dataZoom", function(payload, ecModel) {
    var effectedModels = findEffectedDataZooms(ecModel, payload);
    each(effectedModels, function(dataZoomModel) {
      dataZoomModel.setRawRange({
        start: payload.start,
        end: payload.end,
        startValue: payload.startValue,
        endValue: payload.endValue
      });
    });
  });
}

// node_modules/echarts/lib/component/dataZoom/installCommon.js
var installed = false;
function installCommon(registers) {
  if (installed) {
    return;
  }
  installed = true;
  registers.registerProcessor(registers.PRIORITY.PROCESSOR.FILTER, dataZoomProcessor_default);
  installDataZoomAction(registers);
  registers.registerSubTypeDefaulter("dataZoom", function() {
    return "slider";
  });
}

// node_modules/echarts/lib/component/dataZoom/installDataZoomSelect.js
function install12(registers) {
  registers.registerComponentModel(SelectZoomModel_default);
  registers.registerComponentView(SelectZoomView_default);
  installCommon(registers);
}

// node_modules/echarts/lib/component/toolbox/ToolboxModel.js
init_tslib_es6();
init_util();

// node_modules/echarts/lib/component/toolbox/featureManager.js
var ToolboxFeature = (
  /** @class */
  /* @__PURE__ */ function() {
    function ToolboxFeature2() {
    }
    return ToolboxFeature2;
  }()
);
var features = {};
function registerFeature(name, ctor) {
  features[name] = ctor;
}
function getFeature(name) {
  return features[name];
}

// node_modules/echarts/lib/component/toolbox/ToolboxModel.js
init_Component();
var ToolboxModel = (
  /** @class */
  function(_super) {
    __extends(ToolboxModel2, _super);
    function ToolboxModel2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.type = ToolboxModel2.type;
      return _this;
    }
    ToolboxModel2.prototype.optionUpdated = function() {
      _super.prototype.optionUpdated.apply(this, arguments);
      var ecModel = this.ecModel;
      each(this.option.feature, function(featureOpt, featureName) {
        var Feature = getFeature(featureName);
        if (Feature) {
          if (Feature.getDefaultOption) {
            Feature.defaultOption = Feature.getDefaultOption(ecModel);
          }
          merge(featureOpt, Feature.defaultOption);
        }
      });
    };
    ToolboxModel2.type = "toolbox";
    ToolboxModel2.layoutMode = {
      type: "box",
      ignoreSize: true
    };
    ToolboxModel2.defaultOption = {
      show: true,
      z: 6,
      // zlevel: 0,
      orient: "horizontal",
      left: "right",
      top: "top",
      // right
      // bottom
      backgroundColor: "transparent",
      borderColor: "#ccc",
      borderRadius: 0,
      borderWidth: 0,
      padding: 5,
      itemSize: 15,
      itemGap: 8,
      showTitle: true,
      iconStyle: {
        borderColor: "#666",
        color: "none"
      },
      emphasis: {
        iconStyle: {
          borderColor: "#3E98C5"
        }
      },
      // textStyle: {},
      // feature
      tooltip: {
        show: false,
        position: "bottom"
      }
    };
    return ToolboxModel2;
  }(Component_default)
);
var ToolboxModel_default = ToolboxModel;

// node_modules/echarts/lib/component/toolbox/ToolboxView.js
init_tslib_es6();
init_util();
init_text();
init_graphic();
init_states();
init_Model();
init_DataDiffer();

// node_modules/echarts/lib/component/helper/listComponent.js
init_layout();
init_format();
init_graphic();
function layout3(group, componentModel, api) {
  var boxLayoutParams = componentModel.getBoxLayoutParams();
  var padding = componentModel.get("padding");
  var viewportSize = {
    width: api.getWidth(),
    height: api.getHeight()
  };
  var rect = getLayoutRect(boxLayoutParams, viewportSize, padding);
  box(componentModel.get("orient"), group, componentModel.get("itemGap"), rect.width, rect.height);
  positionElement(group, boxLayoutParams, viewportSize, padding);
}
function makeBackground(rect, componentModel) {
  var padding = normalizeCssArray(componentModel.get("padding"));
  var style = componentModel.getItemStyle(["color", "opacity"]);
  style.fill = componentModel.get("backgroundColor");
  rect = new Rect_default({
    shape: {
      x: rect.x - padding[3],
      y: rect.y - padding[0],
      width: rect.width + padding[1] + padding[3],
      height: rect.height + padding[0] + padding[2],
      r: componentModel.get("borderRadius")
    },
    style,
    silent: true,
    z2: -1
  });
  return rect;
}

// node_modules/echarts/lib/component/toolbox/ToolboxView.js
init_Component2();
init_component();
init_Text();
init_labelStyle();
var ToolboxView = (
  /** @class */
  function(_super) {
    __extends(ToolboxView2, _super);
    function ToolboxView2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    ToolboxView2.prototype.render = function(toolboxModel, ecModel, api, payload) {
      var group = this.group;
      group.removeAll();
      if (!toolboxModel.get("show")) {
        return;
      }
      var itemSize = +toolboxModel.get("itemSize");
      var isVertical = toolboxModel.get("orient") === "vertical";
      var featureOpts = toolboxModel.get("feature") || {};
      var features2 = this._features || (this._features = {});
      var featureNames = [];
      each(featureOpts, function(opt, name) {
        featureNames.push(name);
      });
      new DataDiffer_default(this._featureNames || [], featureNames).add(processFeature).update(processFeature).remove(curry(processFeature, null)).execute();
      this._featureNames = featureNames;
      function processFeature(newIndex, oldIndex) {
        var featureName = featureNames[newIndex];
        var oldName = featureNames[oldIndex];
        var featureOpt = featureOpts[featureName];
        var featureModel = new Model_default(featureOpt, toolboxModel, toolboxModel.ecModel);
        var feature;
        if (payload && payload.newTitle != null && payload.featureName === featureName) {
          featureOpt.title = payload.newTitle;
        }
        if (featureName && !oldName) {
          if (isUserFeatureName(featureName)) {
            feature = {
              onclick: featureModel.option.onclick,
              featureName
            };
          } else {
            var Feature = getFeature(featureName);
            if (!Feature) {
              return;
            }
            feature = new Feature();
          }
          features2[featureName] = feature;
        } else {
          feature = features2[oldName];
          if (!feature) {
            return;
          }
        }
        feature.uid = getUID("toolbox-feature");
        feature.model = featureModel;
        feature.ecModel = ecModel;
        feature.api = api;
        var isToolboxFeature = feature instanceof ToolboxFeature;
        if (!featureName && oldName) {
          isToolboxFeature && feature.dispose && feature.dispose(ecModel, api);
          return;
        }
        if (!featureModel.get("show") || isToolboxFeature && feature.unusable) {
          isToolboxFeature && feature.remove && feature.remove(ecModel, api);
          return;
        }
        createIconPaths(featureModel, feature, featureName);
        featureModel.setIconStatus = function(iconName, status) {
          var option = this.option;
          var iconPaths = this.iconPaths;
          option.iconStatus = option.iconStatus || {};
          option.iconStatus[iconName] = status;
          if (iconPaths[iconName]) {
            (status === "emphasis" ? enterEmphasis : leaveEmphasis)(iconPaths[iconName]);
          }
        };
        if (feature instanceof ToolboxFeature) {
          if (feature.render) {
            feature.render(featureModel, ecModel, api, payload);
          }
        }
      }
      function createIconPaths(featureModel, feature, featureName) {
        var iconStyleModel = featureModel.getModel("iconStyle");
        var iconStyleEmphasisModel = featureModel.getModel(["emphasis", "iconStyle"]);
        var icons = feature instanceof ToolboxFeature && feature.getIcons ? feature.getIcons() : featureModel.get("icon");
        var titles = featureModel.get("title") || {};
        var iconsMap;
        var titlesMap;
        if (isString(icons)) {
          iconsMap = {};
          iconsMap[featureName] = icons;
        } else {
          iconsMap = icons;
        }
        if (isString(titles)) {
          titlesMap = {};
          titlesMap[featureName] = titles;
        } else {
          titlesMap = titles;
        }
        var iconPaths = featureModel.iconPaths = {};
        each(iconsMap, function(iconStr, iconName) {
          var path = createIcon(iconStr, {}, {
            x: -itemSize / 2,
            y: -itemSize / 2,
            width: itemSize,
            height: itemSize
          });
          path.setStyle(iconStyleModel.getItemStyle());
          var pathEmphasisState = path.ensureState("emphasis");
          pathEmphasisState.style = iconStyleEmphasisModel.getItemStyle();
          var textContent = new Text_default({
            style: {
              text: titlesMap[iconName],
              align: iconStyleEmphasisModel.get("textAlign"),
              borderRadius: iconStyleEmphasisModel.get("textBorderRadius"),
              padding: iconStyleEmphasisModel.get("textPadding"),
              fill: null,
              font: getFont({
                fontStyle: iconStyleEmphasisModel.get("textFontStyle"),
                fontFamily: iconStyleEmphasisModel.get("textFontFamily"),
                fontSize: iconStyleEmphasisModel.get("textFontSize"),
                fontWeight: iconStyleEmphasisModel.get("textFontWeight")
              }, ecModel)
            },
            ignore: true
          });
          path.setTextContent(textContent);
          setTooltipConfig({
            el: path,
            componentModel: toolboxModel,
            itemName: iconName,
            formatterParamsExtra: {
              title: titlesMap[iconName]
            }
          });
          path.__title = titlesMap[iconName];
          path.on("mouseover", function() {
            var hoverStyle = iconStyleEmphasisModel.getItemStyle();
            var defaultTextPosition = isVertical ? toolboxModel.get("right") == null && toolboxModel.get("left") !== "right" ? "right" : "left" : toolboxModel.get("bottom") == null && toolboxModel.get("top") !== "bottom" ? "bottom" : "top";
            textContent.setStyle({
              fill: iconStyleEmphasisModel.get("textFill") || hoverStyle.fill || hoverStyle.stroke || "#000",
              backgroundColor: iconStyleEmphasisModel.get("textBackgroundColor")
            });
            path.setTextConfig({
              position: iconStyleEmphasisModel.get("textPosition") || defaultTextPosition
            });
            textContent.ignore = !toolboxModel.get("showTitle");
            api.enterEmphasis(this);
          }).on("mouseout", function() {
            if (featureModel.get(["iconStatus", iconName]) !== "emphasis") {
              api.leaveEmphasis(this);
            }
            textContent.hide();
          });
          (featureModel.get(["iconStatus", iconName]) === "emphasis" ? enterEmphasis : leaveEmphasis)(path);
          group.add(path);
          path.on("click", bind(feature.onclick, feature, ecModel, api, iconName));
          iconPaths[iconName] = path;
        });
      }
      layout3(group, toolboxModel, api);
      group.add(makeBackground(group.getBoundingRect(), toolboxModel));
      isVertical || group.eachChild(function(icon) {
        var titleText = icon.__title;
        var emphasisState = icon.ensureState("emphasis");
        var emphasisTextConfig = emphasisState.textConfig || (emphasisState.textConfig = {});
        var textContent = icon.getTextContent();
        var emphasisTextState = textContent && textContent.ensureState("emphasis");
        if (emphasisTextState && !isFunction(emphasisTextState) && titleText) {
          var emphasisTextStyle = emphasisTextState.style || (emphasisTextState.style = {});
          var rect = getBoundingRect(titleText, Text_default.makeFont(emphasisTextStyle));
          var offsetX = icon.x + group.x;
          var offsetY = icon.y + group.y + itemSize;
          var needPutOnTop = false;
          if (offsetY + rect.height > api.getHeight()) {
            emphasisTextConfig.position = "top";
            needPutOnTop = true;
          }
          var topOffset = needPutOnTop ? -5 - rect.height : itemSize + 10;
          if (offsetX + rect.width / 2 > api.getWidth()) {
            emphasisTextConfig.position = ["100%", topOffset];
            emphasisTextStyle.align = "right";
          } else if (offsetX - rect.width / 2 < 0) {
            emphasisTextConfig.position = [0, topOffset];
            emphasisTextStyle.align = "left";
          }
        }
      });
    };
    ToolboxView2.prototype.updateView = function(toolboxModel, ecModel, api, payload) {
      each(this._features, function(feature) {
        feature instanceof ToolboxFeature && feature.updateView && feature.updateView(feature.model, ecModel, api, payload);
      });
    };
    ToolboxView2.prototype.remove = function(ecModel, api) {
      each(this._features, function(feature) {
        feature instanceof ToolboxFeature && feature.remove && feature.remove(ecModel, api);
      });
      this.group.removeAll();
    };
    ToolboxView2.prototype.dispose = function(ecModel, api) {
      each(this._features, function(feature) {
        feature instanceof ToolboxFeature && feature.dispose && feature.dispose(ecModel, api);
      });
    };
    ToolboxView2.type = "toolbox";
    return ToolboxView2;
  }(Component_default2)
);
function isUserFeatureName(featureName) {
  return featureName.indexOf("my") === 0;
}
var ToolboxView_default = ToolboxView;

// node_modules/echarts/lib/component/toolbox/feature/SaveAsImage.js
init_tslib_es6();
init_env();
var SaveAsImage = (
  /** @class */
  function(_super) {
    __extends(SaveAsImage2, _super);
    function SaveAsImage2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    SaveAsImage2.prototype.onclick = function(ecModel, api) {
      var model = this.model;
      var title = model.get("name") || ecModel.get("title.0.text") || "echarts";
      var isSvg = api.getZr().painter.getType() === "svg";
      var type = isSvg ? "svg" : model.get("type", true) || "png";
      var url = api.getConnectedDataURL({
        type,
        backgroundColor: model.get("backgroundColor", true) || ecModel.get("backgroundColor") || "#fff",
        connectedBackgroundColor: model.get("connectedBackgroundColor"),
        excludeComponents: model.get("excludeComponents"),
        pixelRatio: model.get("pixelRatio")
      });
      var browser = env_default.browser;
      if (typeof MouseEvent === "function" && (browser.newEdge || !browser.ie && !browser.edge)) {
        var $a = document.createElement("a");
        $a.download = title + "." + type;
        $a.target = "_blank";
        $a.href = url;
        var evt = new MouseEvent("click", {
          // some micro front-end framework， window maybe is a Proxy
          view: document.defaultView,
          bubbles: true,
          cancelable: false
        });
        $a.dispatchEvent(evt);
      } else {
        if (window.navigator.msSaveOrOpenBlob || isSvg) {
          var parts = url.split(",");
          var base64Encoded = parts[0].indexOf("base64") > -1;
          var bstr = isSvg ? decodeURIComponent(parts[1]) : parts[1];
          base64Encoded && (bstr = window.atob(bstr));
          var filename = title + "." + type;
          if (window.navigator.msSaveOrOpenBlob) {
            var n = bstr.length;
            var u8arr = new Uint8Array(n);
            while (n--) {
              u8arr[n] = bstr.charCodeAt(n);
            }
            var blob = new Blob([u8arr]);
            window.navigator.msSaveOrOpenBlob(blob, filename);
          } else {
            var frame = document.createElement("iframe");
            document.body.appendChild(frame);
            var cw = frame.contentWindow;
            var doc = cw.document;
            doc.open("image/svg+xml", "replace");
            doc.write(bstr);
            doc.close();
            cw.focus();
            doc.execCommand("SaveAs", true, filename);
            document.body.removeChild(frame);
          }
        } else {
          var lang = model.get("lang");
          var html = '<body style="margin:0;"><img src="' + url + '" style="max-width:100%;" title="' + (lang && lang[0] || "") + '" /></body>';
          var tab = window.open();
          tab.document.write(html);
          tab.document.title = title;
        }
      }
    };
    SaveAsImage2.getDefaultOption = function(ecModel) {
      var defaultOption2 = {
        show: true,
        icon: "M4.7,22.9L29.3,45.5L54.7,23.4M4.6,43.6L4.6,58L53.8,58L53.8,43.6M29.2,45.1L29.2,0",
        title: ecModel.getLocaleModel().get(["toolbox", "saveAsImage", "title"]),
        type: "png",
        // Default use option.backgroundColor
        // backgroundColor: '#fff',
        connectedBackgroundColor: "#fff",
        name: "",
        excludeComponents: ["toolbox"],
        // use current pixel ratio of device by default
        // pixelRatio: 1,
        lang: ecModel.getLocaleModel().get(["toolbox", "saveAsImage", "lang"])
      };
      return defaultOption2;
    };
    return SaveAsImage2;
  }(ToolboxFeature)
);
var SaveAsImage_default = SaveAsImage;

// node_modules/echarts/lib/component/toolbox/feature/MagicType.js
init_tslib_es6();
init_echarts();
init_util();
init_model();
var INNER_STACK_KEYWORD = "__ec_magicType_stack__";
var radioTypes = [["line", "bar"], ["stack"]];
var MagicType = (
  /** @class */
  function(_super) {
    __extends(MagicType2, _super);
    function MagicType2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    MagicType2.prototype.getIcons = function() {
      var model = this.model;
      var availableIcons = model.get("icon");
      var icons = {};
      each(model.get("type"), function(type) {
        if (availableIcons[type]) {
          icons[type] = availableIcons[type];
        }
      });
      return icons;
    };
    MagicType2.getDefaultOption = function(ecModel) {
      var defaultOption2 = {
        show: true,
        type: [],
        // Icon group
        icon: {
          line: "M4.1,28.9h7.1l9.3-22l7.4,38l9.7-19.7l3,12.8h14.9M4.1,58h51.4",
          bar: "M6.7,22.9h10V48h-10V22.9zM24.9,13h10v35h-10V13zM43.2,2h10v46h-10V2zM3.1,58h53.7",
          // eslint-disable-next-line
          stack: "M8.2,38.4l-8.4,4.1l30.6,15.3L60,42.5l-8.1-4.1l-21.5,11L8.2,38.4z M51.9,30l-8.1,4.2l-13.4,6.9l-13.9-6.9L8.2,30l-8.4,4.2l8.4,4.2l22.2,11l21.5-11l8.1-4.2L51.9,30z M51.9,21.7l-8.1,4.2L35.7,30l-5.3,2.8L24.9,30l-8.4-4.1l-8.3-4.2l-8.4,4.2L8.2,30l8.3,4.2l13.9,6.9l13.4-6.9l8.1-4.2l8.1-4.1L51.9,21.7zM30.4,2.2L-0.2,17.5l8.4,4.1l8.3,4.2l8.4,4.2l5.5,2.7l5.3-2.7l8.1-4.2l8.1-4.2l8.1-4.1L30.4,2.2z"
          // jshint ignore:line
        },
        // `line`, `bar`, `stack`, `tiled`
        title: ecModel.getLocaleModel().get(["toolbox", "magicType", "title"]),
        option: {},
        seriesIndex: {}
      };
      return defaultOption2;
    };
    MagicType2.prototype.onclick = function(ecModel, api, type) {
      var model = this.model;
      var seriesIndex = model.get(["seriesIndex", type]);
      if (!seriesOptGenreator[type]) {
        return;
      }
      var newOption = {
        series: []
      };
      var generateNewSeriesTypes = function(seriesModel) {
        var seriesType = seriesModel.subType;
        var seriesId = seriesModel.id;
        var newSeriesOpt = seriesOptGenreator[type](seriesType, seriesId, seriesModel, model);
        if (newSeriesOpt) {
          defaults(newSeriesOpt, seriesModel.option);
          newOption.series.push(newSeriesOpt);
        }
        var coordSys = seriesModel.coordinateSystem;
        if (coordSys && coordSys.type === "cartesian2d" && (type === "line" || type === "bar")) {
          var categoryAxis = coordSys.getAxesByScale("ordinal")[0];
          if (categoryAxis) {
            var axisDim = categoryAxis.dim;
            var axisType = axisDim + "Axis";
            var axisModel = seriesModel.getReferringComponents(axisType, SINGLE_REFERRING).models[0];
            var axisIndex = axisModel.componentIndex;
            newOption[axisType] = newOption[axisType] || [];
            for (var i = 0; i <= axisIndex; i++) {
              newOption[axisType][axisIndex] = newOption[axisType][axisIndex] || {};
            }
            newOption[axisType][axisIndex].boundaryGap = type === "bar";
          }
        }
      };
      each(radioTypes, function(radio) {
        if (indexOf(radio, type) >= 0) {
          each(radio, function(item) {
            model.setIconStatus(item, "normal");
          });
        }
      });
      model.setIconStatus(type, "emphasis");
      ecModel.eachComponent({
        mainType: "series",
        query: seriesIndex == null ? null : {
          seriesIndex
        }
      }, generateNewSeriesTypes);
      var newTitle;
      var currentType = type;
      if (type === "stack") {
        newTitle = merge({
          stack: model.option.title.tiled,
          tiled: model.option.title.stack
        }, model.option.title);
        if (model.get(["iconStatus", type]) !== "emphasis") {
          currentType = "tiled";
        }
      }
      api.dispatchAction({
        type: "changeMagicType",
        currentType,
        newOption,
        newTitle,
        featureName: "magicType"
      });
    };
    return MagicType2;
  }(ToolboxFeature)
);
var seriesOptGenreator = {
  "line": function(seriesType, seriesId, seriesModel, model) {
    if (seriesType === "bar") {
      return merge({
        id: seriesId,
        type: "line",
        // Preserve data related option
        data: seriesModel.get("data"),
        stack: seriesModel.get("stack"),
        markPoint: seriesModel.get("markPoint"),
        markLine: seriesModel.get("markLine")
      }, model.get(["option", "line"]) || {}, true);
    }
  },
  "bar": function(seriesType, seriesId, seriesModel, model) {
    if (seriesType === "line") {
      return merge({
        id: seriesId,
        type: "bar",
        // Preserve data related option
        data: seriesModel.get("data"),
        stack: seriesModel.get("stack"),
        markPoint: seriesModel.get("markPoint"),
        markLine: seriesModel.get("markLine")
      }, model.get(["option", "bar"]) || {}, true);
    }
  },
  "stack": function(seriesType, seriesId, seriesModel, model) {
    var isStack = seriesModel.get("stack") === INNER_STACK_KEYWORD;
    if (seriesType === "line" || seriesType === "bar") {
      model.setIconStatus("stack", isStack ? "normal" : "emphasis");
      return merge({
        id: seriesId,
        stack: isStack ? "" : INNER_STACK_KEYWORD
      }, model.get(["option", "stack"]) || {}, true);
    }
  }
};
registerAction({
  type: "changeMagicType",
  event: "magicTypeChanged",
  update: "prepareAndUpdate"
}, function(payload, ecModel) {
  ecModel.mergeOption(payload.newOption);
});
var MagicType_default = MagicType;

// node_modules/echarts/lib/component/toolbox/feature/DataView.js
init_tslib_es6();
init_echarts();
init_util();
init_event();
init_log();
var BLOCK_SPLITER = new Array(60).join("-");
var ITEM_SPLITER = "	";
function groupSeries(ecModel) {
  var seriesGroupByCategoryAxis = {};
  var otherSeries = [];
  var meta = [];
  ecModel.eachRawSeries(function(seriesModel) {
    var coordSys = seriesModel.coordinateSystem;
    if (coordSys && (coordSys.type === "cartesian2d" || coordSys.type === "polar")) {
      var baseAxis = coordSys.getBaseAxis();
      if (baseAxis.type === "category") {
        var key = baseAxis.dim + "_" + baseAxis.index;
        if (!seriesGroupByCategoryAxis[key]) {
          seriesGroupByCategoryAxis[key] = {
            categoryAxis: baseAxis,
            valueAxis: coordSys.getOtherAxis(baseAxis),
            series: []
          };
          meta.push({
            axisDim: baseAxis.dim,
            axisIndex: baseAxis.index
          });
        }
        seriesGroupByCategoryAxis[key].series.push(seriesModel);
      } else {
        otherSeries.push(seriesModel);
      }
    } else {
      otherSeries.push(seriesModel);
    }
  });
  return {
    seriesGroupByCategoryAxis,
    other: otherSeries,
    meta
  };
}
function assembleSeriesWithCategoryAxis(groups) {
  var tables = [];
  each(groups, function(group, key) {
    var categoryAxis = group.categoryAxis;
    var valueAxis = group.valueAxis;
    var valueAxisDim = valueAxis.dim;
    var headers = [" "].concat(map(group.series, function(series) {
      return series.name;
    }));
    var columns = [categoryAxis.model.getCategories()];
    each(group.series, function(series) {
      var rawData = series.getRawData();
      columns.push(series.getRawData().mapArray(rawData.mapDimension(valueAxisDim), function(val) {
        return val;
      }));
    });
    var lines = [headers.join(ITEM_SPLITER)];
    for (var i = 0; i < columns[0].length; i++) {
      var items = [];
      for (var j = 0; j < columns.length; j++) {
        items.push(columns[j][i]);
      }
      lines.push(items.join(ITEM_SPLITER));
    }
    tables.push(lines.join("\n"));
  });
  return tables.join("\n\n" + BLOCK_SPLITER + "\n\n");
}
function assembleOtherSeries(series) {
  return map(series, function(series2) {
    var data = series2.getRawData();
    var lines = [series2.name];
    var vals = [];
    data.each(data.dimensions, function() {
      var argLen = arguments.length;
      var dataIndex = arguments[argLen - 1];
      var name = data.getName(dataIndex);
      for (var i = 0; i < argLen - 1; i++) {
        vals[i] = arguments[i];
      }
      lines.push((name ? name + ITEM_SPLITER : "") + vals.join(ITEM_SPLITER));
    });
    return lines.join("\n");
  }).join("\n\n" + BLOCK_SPLITER + "\n\n");
}
function getContentFromModel(ecModel) {
  var result = groupSeries(ecModel);
  return {
    value: filter([assembleSeriesWithCategoryAxis(result.seriesGroupByCategoryAxis), assembleOtherSeries(result.other)], function(str) {
      return !!str.replace(/[\n\t\s]/g, "");
    }).join("\n\n" + BLOCK_SPLITER + "\n\n"),
    meta: result.meta
  };
}
function trim2(str) {
  return str.replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function isTSVFormat(block) {
  var firstLine = block.slice(0, block.indexOf("\n"));
  if (firstLine.indexOf(ITEM_SPLITER) >= 0) {
    return true;
  }
}
var itemSplitRegex = new RegExp("[" + ITEM_SPLITER + "]+", "g");
function parseTSVContents(tsv) {
  var tsvLines = tsv.split(/\n+/g);
  var headers = trim2(tsvLines.shift()).split(itemSplitRegex);
  var categories = [];
  var series = map(headers, function(header) {
    return {
      name: header,
      data: []
    };
  });
  for (var i = 0; i < tsvLines.length; i++) {
    var items = trim2(tsvLines[i]).split(itemSplitRegex);
    categories.push(items.shift());
    for (var j = 0; j < items.length; j++) {
      series[j] && (series[j].data[i] = items[j]);
    }
  }
  return {
    series,
    categories
  };
}
function parseListContents(str) {
  var lines = str.split(/\n+/g);
  var seriesName = trim2(lines.shift());
  var data = [];
  for (var i = 0; i < lines.length; i++) {
    var line = trim2(lines[i]);
    if (!line) {
      continue;
    }
    var items = line.split(itemSplitRegex);
    var name_1 = "";
    var value = void 0;
    var hasName = false;
    if (isNaN(items[0])) {
      hasName = true;
      name_1 = items[0];
      items = items.slice(1);
      data[i] = {
        name: name_1,
        value: []
      };
      value = data[i].value;
    } else {
      value = data[i] = [];
    }
    for (var j = 0; j < items.length; j++) {
      value.push(+items[j]);
    }
    if (value.length === 1) {
      hasName ? data[i].value = value[0] : data[i] = value[0];
    }
  }
  return {
    name: seriesName,
    data
  };
}
function parseContents(str, blockMetaList) {
  var blocks = str.split(new RegExp("\n*" + BLOCK_SPLITER + "\n*", "g"));
  var newOption = {
    series: []
  };
  each(blocks, function(block, idx) {
    if (isTSVFormat(block)) {
      var result = parseTSVContents(block);
      var blockMeta = blockMetaList[idx];
      var axisKey = blockMeta.axisDim + "Axis";
      if (blockMeta) {
        newOption[axisKey] = newOption[axisKey] || [];
        newOption[axisKey][blockMeta.axisIndex] = {
          data: result.categories
        };
        newOption.series = newOption.series.concat(result.series);
      }
    } else {
      var result = parseListContents(block);
      newOption.series.push(result);
    }
  });
  return newOption;
}
var DataView = (
  /** @class */
  function(_super) {
    __extends(DataView2, _super);
    function DataView2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    DataView2.prototype.onclick = function(ecModel, api) {
      setTimeout(function() {
        api.dispatchAction({
          type: "hideTip"
        });
      });
      var container = api.getDom();
      var model = this.model;
      if (this._dom) {
        container.removeChild(this._dom);
      }
      var root = document.createElement("div");
      root.style.cssText = "position:absolute;top:0;bottom:0;left:0;right:0;padding:5px";
      root.style.backgroundColor = model.get("backgroundColor") || "#fff";
      var header = document.createElement("h4");
      var lang = model.get("lang") || [];
      header.innerHTML = lang[0] || model.get("title");
      header.style.cssText = "margin:10px 20px";
      header.style.color = model.get("textColor");
      var viewMain = document.createElement("div");
      var textarea = document.createElement("textarea");
      viewMain.style.cssText = "overflow:auto";
      var optionToContent = model.get("optionToContent");
      var contentToOption = model.get("contentToOption");
      var result = getContentFromModel(ecModel);
      if (isFunction(optionToContent)) {
        var htmlOrDom = optionToContent(api.getOption());
        if (isString(htmlOrDom)) {
          viewMain.innerHTML = htmlOrDom;
        } else if (isDom(htmlOrDom)) {
          viewMain.appendChild(htmlOrDom);
        }
      } else {
        textarea.readOnly = model.get("readOnly");
        var style = textarea.style;
        style.cssText = "display:block;width:100%;height:100%;font-family:monospace;font-size:14px;line-height:1.6rem;resize:none;box-sizing:border-box;outline:none";
        style.color = model.get("textColor");
        style.borderColor = model.get("textareaBorderColor");
        style.backgroundColor = model.get("textareaColor");
        textarea.value = result.value;
        viewMain.appendChild(textarea);
      }
      var blockMetaList = result.meta;
      var buttonContainer = document.createElement("div");
      buttonContainer.style.cssText = "position:absolute;bottom:5px;left:0;right:0";
      var buttonStyle = "float:right;margin-right:20px;border:none;cursor:pointer;padding:2px 5px;font-size:12px;border-radius:3px";
      var closeButton = document.createElement("div");
      var refreshButton = document.createElement("div");
      buttonStyle += ";background-color:" + model.get("buttonColor");
      buttonStyle += ";color:" + model.get("buttonTextColor");
      var self = this;
      function close() {
        container.removeChild(root);
        self._dom = null;
      }
      addEventListener(closeButton, "click", close);
      addEventListener(refreshButton, "click", function() {
        if (contentToOption == null && optionToContent != null || contentToOption != null && optionToContent == null) {
          if (true) {
            warn("It seems you have just provided one of `contentToOption` and `optionToContent` functions but missed the other one. Data change is ignored.");
          }
          close();
          return;
        }
        var newOption;
        try {
          if (isFunction(contentToOption)) {
            newOption = contentToOption(viewMain, api.getOption());
          } else {
            newOption = parseContents(textarea.value, blockMetaList);
          }
        } catch (e) {
          close();
          throw new Error("Data view format error " + e);
        }
        if (newOption) {
          api.dispatchAction({
            type: "changeDataView",
            newOption
          });
        }
        close();
      });
      closeButton.innerHTML = lang[1];
      refreshButton.innerHTML = lang[2];
      refreshButton.style.cssText = closeButton.style.cssText = buttonStyle;
      !model.get("readOnly") && buttonContainer.appendChild(refreshButton);
      buttonContainer.appendChild(closeButton);
      root.appendChild(header);
      root.appendChild(viewMain);
      root.appendChild(buttonContainer);
      viewMain.style.height = container.clientHeight - 80 + "px";
      container.appendChild(root);
      this._dom = root;
    };
    DataView2.prototype.remove = function(ecModel, api) {
      this._dom && api.getDom().removeChild(this._dom);
    };
    DataView2.prototype.dispose = function(ecModel, api) {
      this.remove(ecModel, api);
    };
    DataView2.getDefaultOption = function(ecModel) {
      var defaultOption2 = {
        show: true,
        readOnly: false,
        optionToContent: null,
        contentToOption: null,
        // eslint-disable-next-line
        icon: "M17.5,17.3H33 M17.5,17.3H33 M45.4,29.5h-28 M11.5,2v56H51V14.8L38.4,2H11.5z M38.4,2.2v12.7H51 M45.4,41.7h-28",
        title: ecModel.getLocaleModel().get(["toolbox", "dataView", "title"]),
        lang: ecModel.getLocaleModel().get(["toolbox", "dataView", "lang"]),
        backgroundColor: "#fff",
        textColor: "#000",
        textareaColor: "#fff",
        textareaBorderColor: "#333",
        buttonColor: "#c23531",
        buttonTextColor: "#fff"
      };
      return defaultOption2;
    };
    return DataView2;
  }(ToolboxFeature)
);
function tryMergeDataOption(newData, originalData) {
  return map(newData, function(newVal, idx) {
    var original = originalData && originalData[idx];
    if (isObject(original) && !isArray(original)) {
      var newValIsObject = isObject(newVal) && !isArray(newVal);
      if (!newValIsObject) {
        newVal = {
          value: newVal
        };
      }
      var shouldDeleteName = original.name != null && newVal.name == null;
      newVal = defaults(newVal, original);
      shouldDeleteName && delete newVal.name;
      return newVal;
    } else {
      return newVal;
    }
  });
}
registerAction({
  type: "changeDataView",
  event: "dataViewChanged",
  update: "prepareAndUpdate"
}, function(payload, ecModel) {
  var newSeriesOptList = [];
  each(payload.newOption.series, function(seriesOpt) {
    var seriesModel = ecModel.getSeriesByName(seriesOpt.name)[0];
    if (!seriesModel) {
      newSeriesOptList.push(extend({
        // Default is scatter
        type: "scatter"
      }, seriesOpt));
    } else {
      var originalData = seriesModel.get("data");
      newSeriesOptList.push({
        name: seriesOpt.name,
        data: tryMergeDataOption(seriesOpt.data, originalData)
      });
    }
  });
  ecModel.mergeOption(defaults({
    series: newSeriesOptList
  }, payload.newOption));
});
var DataView_default = DataView;

// node_modules/echarts/lib/component/toolbox/feature/Restore.js
init_tslib_es6();
init_echarts();

// node_modules/echarts/lib/component/dataZoom/history.js
init_util();
init_model();
var each4 = each;
var inner6 = makeInner();
function push(ecModel, newSnapshot) {
  var storedSnapshots = getStoreSnapshots(ecModel);
  each4(newSnapshot, function(batchItem, dataZoomId) {
    var i = storedSnapshots.length - 1;
    for (; i >= 0; i--) {
      var snapshot = storedSnapshots[i];
      if (snapshot[dataZoomId]) {
        break;
      }
    }
    if (i < 0) {
      var dataZoomModel = ecModel.queryComponents({
        mainType: "dataZoom",
        subType: "select",
        id: dataZoomId
      })[0];
      if (dataZoomModel) {
        var percentRange = dataZoomModel.getPercentRange();
        storedSnapshots[0][dataZoomId] = {
          dataZoomId,
          start: percentRange[0],
          end: percentRange[1]
        };
      }
    }
  });
  storedSnapshots.push(newSnapshot);
}
function pop(ecModel) {
  var storedSnapshots = getStoreSnapshots(ecModel);
  var head = storedSnapshots[storedSnapshots.length - 1];
  storedSnapshots.length > 1 && storedSnapshots.pop();
  var snapshot = {};
  each4(head, function(batchItem, dataZoomId) {
    for (var i = storedSnapshots.length - 1; i >= 0; i--) {
      batchItem = storedSnapshots[i][dataZoomId];
      if (batchItem) {
        snapshot[dataZoomId] = batchItem;
        break;
      }
    }
  });
  return snapshot;
}
function clear2(ecModel) {
  inner6(ecModel).snapshots = null;
}
function count(ecModel) {
  return getStoreSnapshots(ecModel).length;
}
function getStoreSnapshots(ecModel) {
  var store = inner6(ecModel);
  if (!store.snapshots) {
    store.snapshots = [{}];
  }
  return store.snapshots;
}

// node_modules/echarts/lib/component/toolbox/feature/Restore.js
var RestoreOption = (
  /** @class */
  function(_super) {
    __extends(RestoreOption2, _super);
    function RestoreOption2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    RestoreOption2.prototype.onclick = function(ecModel, api) {
      clear2(ecModel);
      api.dispatchAction({
        type: "restore",
        from: this.uid
      });
    };
    RestoreOption2.getDefaultOption = function(ecModel) {
      var defaultOption2 = {
        show: true,
        // eslint-disable-next-line
        icon: "M3.8,33.4 M47,18.9h9.8V8.7 M56.3,20.1 C52.1,9,40.5,0.6,26.8,2.1C12.6,3.7,1.6,16.2,2.1,30.6 M13,41.1H3.1v10.2 M3.7,39.9c4.2,11.1,15.8,19.5,29.5,18 c14.2-1.6,25.2-14.1,24.7-28.5",
        title: ecModel.getLocaleModel().get(["toolbox", "restore", "title"])
      };
      return defaultOption2;
    };
    return RestoreOption2;
  }(ToolboxFeature)
);
registerAction({
  type: "restore",
  event: "restore",
  update: "prepareAndUpdate"
}, function(payload, ecModel) {
  ecModel.resetOption("recreate");
});
var Restore_default = RestoreOption;

// node_modules/echarts/lib/component/toolbox/feature/DataZoom.js
init_tslib_es6();
init_util();

// node_modules/echarts/lib/component/helper/BrushTargetManager.js
init_util();
init_graphic();
init_model();
var INCLUDE_FINDER_MAIN_TYPES = ["grid", "xAxis", "yAxis", "geo", "graph", "polar", "radiusAxis", "angleAxis", "bmap"];
var BrushTargetManager = (
  /** @class */
  function() {
    function BrushTargetManager2(finder, ecModel, opt) {
      var _this = this;
      this._targetInfoList = [];
      var foundCpts = parseFinder2(ecModel, finder);
      each(targetInfoBuilders, function(builder, type) {
        if (!opt || !opt.include || indexOf(opt.include, type) >= 0) {
          builder(foundCpts, _this._targetInfoList);
        }
      });
    }
    BrushTargetManager2.prototype.setOutputRanges = function(areas, ecModel) {
      this.matchOutputRanges(areas, ecModel, function(area, coordRange, coordSys) {
        (area.coordRanges || (area.coordRanges = [])).push(coordRange);
        if (!area.coordRange) {
          area.coordRange = coordRange;
          var result = coordConvert[area.brushType](0, coordSys, coordRange);
          area.__rangeOffset = {
            offset: diffProcessor[area.brushType](result.values, area.range, [1, 1]),
            xyMinMax: result.xyMinMax
          };
        }
      });
      return areas;
    };
    BrushTargetManager2.prototype.matchOutputRanges = function(areas, ecModel, cb) {
      each(areas, function(area) {
        var targetInfo = this.findTargetInfo(area, ecModel);
        if (targetInfo && targetInfo !== true) {
          each(targetInfo.coordSyses, function(coordSys) {
            var result = coordConvert[area.brushType](1, coordSys, area.range, true);
            cb(area, result.values, coordSys, ecModel);
          });
        }
      }, this);
    };
    BrushTargetManager2.prototype.setInputRanges = function(areas, ecModel) {
      each(areas, function(area) {
        var targetInfo = this.findTargetInfo(area, ecModel);
        if (true) {
          assert(!targetInfo || targetInfo === true || area.coordRange, "coordRange must be specified when coord index specified.");
          assert(!targetInfo || targetInfo !== true || area.range, "range must be specified in global brush.");
        }
        area.range = area.range || [];
        if (targetInfo && targetInfo !== true) {
          area.panelId = targetInfo.panelId;
          var result = coordConvert[area.brushType](0, targetInfo.coordSys, area.coordRange);
          var rangeOffset = area.__rangeOffset;
          area.range = rangeOffset ? diffProcessor[area.brushType](result.values, rangeOffset.offset, getScales(result.xyMinMax, rangeOffset.xyMinMax)) : result.values;
        }
      }, this);
    };
    BrushTargetManager2.prototype.makePanelOpts = function(api, getDefaultBrushType) {
      return map(this._targetInfoList, function(targetInfo) {
        var rect = targetInfo.getPanelRect();
        return {
          panelId: targetInfo.panelId,
          defaultBrushType: getDefaultBrushType ? getDefaultBrushType(targetInfo) : null,
          clipPath: makeRectPanelClipPath(rect),
          isTargetByCursor: makeRectIsTargetByCursor(rect, api, targetInfo.coordSysModel),
          getLinearBrushOtherExtent: makeLinearBrushOtherExtent(rect)
        };
      });
    };
    BrushTargetManager2.prototype.controlSeries = function(area, seriesModel, ecModel) {
      var targetInfo = this.findTargetInfo(area, ecModel);
      return targetInfo === true || targetInfo && indexOf(targetInfo.coordSyses, seriesModel.coordinateSystem) >= 0;
    };
    BrushTargetManager2.prototype.findTargetInfo = function(area, ecModel) {
      var targetInfoList = this._targetInfoList;
      var foundCpts = parseFinder2(ecModel, area);
      for (var i = 0; i < targetInfoList.length; i++) {
        var targetInfo = targetInfoList[i];
        var areaPanelId = area.panelId;
        if (areaPanelId) {
          if (targetInfo.panelId === areaPanelId) {
            return targetInfo;
          }
        } else {
          for (var j = 0; j < targetInfoMatchers.length; j++) {
            if (targetInfoMatchers[j](foundCpts, targetInfo)) {
              return targetInfo;
            }
          }
        }
      }
      return true;
    };
    return BrushTargetManager2;
  }()
);
function formatMinMax(minMax) {
  minMax[0] > minMax[1] && minMax.reverse();
  return minMax;
}
function parseFinder2(ecModel, finder) {
  return parseFinder(ecModel, finder, {
    includeMainTypes: INCLUDE_FINDER_MAIN_TYPES
  });
}
var targetInfoBuilders = {
  grid: function(foundCpts, targetInfoList) {
    var xAxisModels = foundCpts.xAxisModels;
    var yAxisModels = foundCpts.yAxisModels;
    var gridModels = foundCpts.gridModels;
    var gridModelMap = createHashMap();
    var xAxesHas = {};
    var yAxesHas = {};
    if (!xAxisModels && !yAxisModels && !gridModels) {
      return;
    }
    each(xAxisModels, function(axisModel) {
      var gridModel = axisModel.axis.grid.model;
      gridModelMap.set(gridModel.id, gridModel);
      xAxesHas[gridModel.id] = true;
    });
    each(yAxisModels, function(axisModel) {
      var gridModel = axisModel.axis.grid.model;
      gridModelMap.set(gridModel.id, gridModel);
      yAxesHas[gridModel.id] = true;
    });
    each(gridModels, function(gridModel) {
      gridModelMap.set(gridModel.id, gridModel);
      xAxesHas[gridModel.id] = true;
      yAxesHas[gridModel.id] = true;
    });
    gridModelMap.each(function(gridModel) {
      var grid = gridModel.coordinateSystem;
      var cartesians = [];
      each(grid.getCartesians(), function(cartesian, index) {
        if (indexOf(xAxisModels, cartesian.getAxis("x").model) >= 0 || indexOf(yAxisModels, cartesian.getAxis("y").model) >= 0) {
          cartesians.push(cartesian);
        }
      });
      targetInfoList.push({
        panelId: "grid--" + gridModel.id,
        gridModel,
        coordSysModel: gridModel,
        // Use the first one as the representitive coordSys.
        coordSys: cartesians[0],
        coordSyses: cartesians,
        getPanelRect: panelRectBuilders.grid,
        xAxisDeclared: xAxesHas[gridModel.id],
        yAxisDeclared: yAxesHas[gridModel.id]
      });
    });
  },
  geo: function(foundCpts, targetInfoList) {
    each(foundCpts.geoModels, function(geoModel) {
      var coordSys = geoModel.coordinateSystem;
      targetInfoList.push({
        panelId: "geo--" + geoModel.id,
        geoModel,
        coordSysModel: geoModel,
        coordSys,
        coordSyses: [coordSys],
        getPanelRect: panelRectBuilders.geo
      });
    });
  }
};
var targetInfoMatchers = [
  // grid
  function(foundCpts, targetInfo) {
    var xAxisModel = foundCpts.xAxisModel;
    var yAxisModel = foundCpts.yAxisModel;
    var gridModel = foundCpts.gridModel;
    !gridModel && xAxisModel && (gridModel = xAxisModel.axis.grid.model);
    !gridModel && yAxisModel && (gridModel = yAxisModel.axis.grid.model);
    return gridModel && gridModel === targetInfo.gridModel;
  },
  // geo
  function(foundCpts, targetInfo) {
    var geoModel = foundCpts.geoModel;
    return geoModel && geoModel === targetInfo.geoModel;
  }
];
var panelRectBuilders = {
  grid: function() {
    return this.coordSys.master.getRect().clone();
  },
  geo: function() {
    var coordSys = this.coordSys;
    var rect = coordSys.getBoundingRect().clone();
    rect.applyTransform(getTransform(coordSys));
    return rect;
  }
};
var coordConvert = {
  lineX: curry(axisConvert, 0),
  lineY: curry(axisConvert, 1),
  rect: function(to, coordSys, rangeOrCoordRange, clamp) {
    var xminymin = to ? coordSys.pointToData([rangeOrCoordRange[0][0], rangeOrCoordRange[1][0]], clamp) : coordSys.dataToPoint([rangeOrCoordRange[0][0], rangeOrCoordRange[1][0]], clamp);
    var xmaxymax = to ? coordSys.pointToData([rangeOrCoordRange[0][1], rangeOrCoordRange[1][1]], clamp) : coordSys.dataToPoint([rangeOrCoordRange[0][1], rangeOrCoordRange[1][1]], clamp);
    var values = [formatMinMax([xminymin[0], xmaxymax[0]]), formatMinMax([xminymin[1], xmaxymax[1]])];
    return {
      values,
      xyMinMax: values
    };
  },
  polygon: function(to, coordSys, rangeOrCoordRange, clamp) {
    var xyMinMax = [[Infinity, -Infinity], [Infinity, -Infinity]];
    var values = map(rangeOrCoordRange, function(item) {
      var p = to ? coordSys.pointToData(item, clamp) : coordSys.dataToPoint(item, clamp);
      xyMinMax[0][0] = Math.min(xyMinMax[0][0], p[0]);
      xyMinMax[1][0] = Math.min(xyMinMax[1][0], p[1]);
      xyMinMax[0][1] = Math.max(xyMinMax[0][1], p[0]);
      xyMinMax[1][1] = Math.max(xyMinMax[1][1], p[1]);
      return p;
    });
    return {
      values,
      xyMinMax
    };
  }
};
function axisConvert(axisNameIndex, to, coordSys, rangeOrCoordRange) {
  if (true) {
    assert(coordSys.type === "cartesian2d", "lineX/lineY brush is available only in cartesian2d.");
  }
  var axis = coordSys.getAxis(["x", "y"][axisNameIndex]);
  var values = formatMinMax(map([0, 1], function(i) {
    return to ? axis.coordToData(axis.toLocalCoord(rangeOrCoordRange[i]), true) : axis.toGlobalCoord(axis.dataToCoord(rangeOrCoordRange[i]));
  }));
  var xyMinMax = [];
  xyMinMax[axisNameIndex] = values;
  xyMinMax[1 - axisNameIndex] = [NaN, NaN];
  return {
    values,
    xyMinMax
  };
}
var diffProcessor = {
  lineX: curry(axisDiffProcessor, 0),
  lineY: curry(axisDiffProcessor, 1),
  rect: function(values, refer, scales) {
    return [[values[0][0] - scales[0] * refer[0][0], values[0][1] - scales[0] * refer[0][1]], [values[1][0] - scales[1] * refer[1][0], values[1][1] - scales[1] * refer[1][1]]];
  },
  polygon: function(values, refer, scales) {
    return map(values, function(item, idx) {
      return [item[0] - scales[0] * refer[idx][0], item[1] - scales[1] * refer[idx][1]];
    });
  }
};
function axisDiffProcessor(axisNameIndex, values, refer, scales) {
  return [values[0] - scales[axisNameIndex] * refer[0], values[1] - scales[axisNameIndex] * refer[1]];
}
function getScales(xyMinMaxCurr, xyMinMaxOrigin) {
  var sizeCurr = getSize(xyMinMaxCurr);
  var sizeOrigin = getSize(xyMinMaxOrigin);
  var scales = [sizeCurr[0] / sizeOrigin[0], sizeCurr[1] / sizeOrigin[1]];
  isNaN(scales[0]) && (scales[0] = 1);
  isNaN(scales[1]) && (scales[1] = 1);
  return scales;
}
function getSize(xyMinMax) {
  return xyMinMax ? [xyMinMax[0][1] - xyMinMax[0][0], xyMinMax[1][1] - xyMinMax[1][0]] : [NaN, NaN];
}
var BrushTargetManager_default = BrushTargetManager;

// node_modules/echarts/lib/component/toolbox/feature/DataZoom.js
init_model();
init_internalComponentCreator();
var each5 = each;
var DATA_ZOOM_ID_BASE = makeInternalComponentId("toolbox-dataZoom_");
var DataZoomFeature = (
  /** @class */
  function(_super) {
    __extends(DataZoomFeature2, _super);
    function DataZoomFeature2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    DataZoomFeature2.prototype.render = function(featureModel, ecModel, api, payload) {
      if (!this._brushController) {
        this._brushController = new BrushController_default(api.getZr());
        this._brushController.on("brush", bind(this._onBrush, this)).mount();
      }
      updateZoomBtnStatus(featureModel, ecModel, this, payload, api);
      updateBackBtnStatus(featureModel, ecModel);
    };
    DataZoomFeature2.prototype.onclick = function(ecModel, api, type) {
      handlers[type].call(this);
    };
    DataZoomFeature2.prototype.remove = function(ecModel, api) {
      this._brushController && this._brushController.unmount();
    };
    DataZoomFeature2.prototype.dispose = function(ecModel, api) {
      this._brushController && this._brushController.dispose();
    };
    DataZoomFeature2.prototype._onBrush = function(eventParam) {
      var areas = eventParam.areas;
      if (!eventParam.isEnd || !areas.length) {
        return;
      }
      var snapshot = {};
      var ecModel = this.ecModel;
      this._brushController.updateCovers([]);
      var brushTargetManager = new BrushTargetManager_default(makeAxisFinder(this.model), ecModel, {
        include: ["grid"]
      });
      brushTargetManager.matchOutputRanges(areas, ecModel, function(area, coordRange, coordSys) {
        if (coordSys.type !== "cartesian2d") {
          return;
        }
        var brushType = area.brushType;
        if (brushType === "rect") {
          setBatch("x", coordSys, coordRange[0]);
          setBatch("y", coordSys, coordRange[1]);
        } else {
          setBatch({
            lineX: "x",
            lineY: "y"
          }[brushType], coordSys, coordRange);
        }
      });
      push(ecModel, snapshot);
      this._dispatchZoomAction(snapshot);
      function setBatch(dimName, coordSys, minMax) {
        var axis = coordSys.getAxis(dimName);
        var axisModel = axis.model;
        var dataZoomModel = findDataZoom(dimName, axisModel, ecModel);
        var minMaxSpan = dataZoomModel.findRepresentativeAxisProxy(axisModel).getMinMaxSpan();
        if (minMaxSpan.minValueSpan != null || minMaxSpan.maxValueSpan != null) {
          minMax = sliderMove(0, minMax.slice(), axis.scale.getExtent(), 0, minMaxSpan.minValueSpan, minMaxSpan.maxValueSpan);
        }
        dataZoomModel && (snapshot[dataZoomModel.id] = {
          dataZoomId: dataZoomModel.id,
          startValue: minMax[0],
          endValue: minMax[1]
        });
      }
      function findDataZoom(dimName, axisModel, ecModel2) {
        var found;
        ecModel2.eachComponent({
          mainType: "dataZoom",
          subType: "select"
        }, function(dzModel) {
          var has3 = dzModel.getAxisModel(dimName, axisModel.componentIndex);
          has3 && (found = dzModel);
        });
        return found;
      }
    };
    ;
    DataZoomFeature2.prototype._dispatchZoomAction = function(snapshot) {
      var batch = [];
      each5(snapshot, function(batchItem, dataZoomId) {
        batch.push(clone(batchItem));
      });
      batch.length && this.api.dispatchAction({
        type: "dataZoom",
        from: this.uid,
        batch
      });
    };
    DataZoomFeature2.getDefaultOption = function(ecModel) {
      var defaultOption2 = {
        show: true,
        filterMode: "filter",
        // Icon group
        icon: {
          zoom: "M0,13.5h26.9 M13.5,26.9V0 M32.1,13.5H58V58H13.5 V32.1",
          back: "M22,1.4L9.9,13.5l12.3,12.3 M10.3,13.5H54.9v44.6 H10.3v-26"
        },
        // `zoom`, `back`
        title: ecModel.getLocaleModel().get(["toolbox", "dataZoom", "title"]),
        brushStyle: {
          borderWidth: 0,
          color: "rgba(210,219,238,0.2)"
        }
      };
      return defaultOption2;
    };
    return DataZoomFeature2;
  }(ToolboxFeature)
);
var handlers = {
  zoom: function() {
    var nextActive = !this._isZoomActive;
    this.api.dispatchAction({
      type: "takeGlobalCursor",
      key: "dataZoomSelect",
      dataZoomSelectActive: nextActive
    });
  },
  back: function() {
    this._dispatchZoomAction(pop(this.ecModel));
  }
};
function makeAxisFinder(dzFeatureModel) {
  var setting = {
    xAxisIndex: dzFeatureModel.get("xAxisIndex", true),
    yAxisIndex: dzFeatureModel.get("yAxisIndex", true),
    xAxisId: dzFeatureModel.get("xAxisId", true),
    yAxisId: dzFeatureModel.get("yAxisId", true)
  };
  if (setting.xAxisIndex == null && setting.xAxisId == null) {
    setting.xAxisIndex = "all";
  }
  if (setting.yAxisIndex == null && setting.yAxisId == null) {
    setting.yAxisIndex = "all";
  }
  return setting;
}
function updateBackBtnStatus(featureModel, ecModel) {
  featureModel.setIconStatus("back", count(ecModel) > 1 ? "emphasis" : "normal");
}
function updateZoomBtnStatus(featureModel, ecModel, view, payload, api) {
  var zoomActive = view._isZoomActive;
  if (payload && payload.type === "takeGlobalCursor") {
    zoomActive = payload.key === "dataZoomSelect" ? payload.dataZoomSelectActive : false;
  }
  view._isZoomActive = zoomActive;
  featureModel.setIconStatus("zoom", zoomActive ? "emphasis" : "normal");
  var brushTargetManager = new BrushTargetManager_default(makeAxisFinder(featureModel), ecModel, {
    include: ["grid"]
  });
  var panels = brushTargetManager.makePanelOpts(api, function(targetInfo) {
    return targetInfo.xAxisDeclared && !targetInfo.yAxisDeclared ? "lineX" : !targetInfo.xAxisDeclared && targetInfo.yAxisDeclared ? "lineY" : "rect";
  });
  view._brushController.setPanels(panels).enableBrush(zoomActive && panels.length ? {
    brushType: "auto",
    brushStyle: featureModel.getModel("brushStyle").getItemStyle()
  } : false);
}
registerInternalOptionCreator("dataZoom", function(ecModel) {
  var toolboxModel = ecModel.getComponent("toolbox", 0);
  var featureDataZoomPath = ["feature", "dataZoom"];
  if (!toolboxModel || toolboxModel.get(featureDataZoomPath) == null) {
    return;
  }
  var dzFeatureModel = toolboxModel.getModel(featureDataZoomPath);
  var dzOptions = [];
  var finder = makeAxisFinder(dzFeatureModel);
  var finderResult = parseFinder(ecModel, finder);
  each5(finderResult.xAxisModels, function(axisModel) {
    return buildInternalOptions(axisModel, "xAxis", "xAxisIndex");
  });
  each5(finderResult.yAxisModels, function(axisModel) {
    return buildInternalOptions(axisModel, "yAxis", "yAxisIndex");
  });
  function buildInternalOptions(axisModel, axisMainType, axisIndexPropName) {
    var axisIndex = axisModel.componentIndex;
    var newOpt = {
      type: "select",
      $fromToolbox: true,
      // Default to be filter
      filterMode: dzFeatureModel.get("filterMode", true) || "filter",
      // Id for merge mapping.
      id: DATA_ZOOM_ID_BASE + axisMainType + axisIndex
    };
    newOpt[axisIndexPropName] = axisIndex;
    dzOptions.push(newOpt);
  }
  return dzOptions;
});
var DataZoom_default = DataZoomFeature;

// node_modules/echarts/lib/component/toolbox/install.js
function install13(registers) {
  registers.registerComponentModel(ToolboxModel_default);
  registers.registerComponentView(ToolboxView_default);
  registerFeature("saveAsImage", SaveAsImage_default);
  registerFeature("magicType", MagicType_default);
  registerFeature("dataView", DataView_default);
  registerFeature("dataZoom", DataZoom_default);
  registerFeature("restore", Restore_default);
  use(install12);
}

// node_modules/echarts/lib/component/tooltip/install.js
init_extension();

// node_modules/echarts/lib/component/tooltip/TooltipModel.js
init_tslib_es6();
init_Component();
var TooltipModel = (
  /** @class */
  function(_super) {
    __extends(TooltipModel2, _super);
    function TooltipModel2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.type = TooltipModel2.type;
      return _this;
    }
    TooltipModel2.type = "tooltip";
    TooltipModel2.dependencies = ["axisPointer"];
    TooltipModel2.defaultOption = {
      // zlevel: 0,
      z: 60,
      show: true,
      // tooltip main content
      showContent: true,
      // 'trigger' only works on coordinate system.
      // 'item' | 'axis' | 'none'
      trigger: "item",
      // 'click' | 'mousemove' | 'none'
      triggerOn: "mousemove|click",
      alwaysShowContent: false,
      displayMode: "single",
      renderMode: "auto",
      // whether restraint content inside viewRect.
      // If renderMode: 'richText', default true.
      // If renderMode: 'html', defaut false (for backward compat).
      confine: null,
      showDelay: 0,
      hideDelay: 100,
      // Animation transition time, unit is second
      transitionDuration: 0.4,
      enterable: false,
      backgroundColor: "#fff",
      // box shadow
      shadowBlur: 10,
      shadowColor: "rgba(0, 0, 0, .2)",
      shadowOffsetX: 1,
      shadowOffsetY: 2,
      // tooltip border radius, unit is px, default is 4
      borderRadius: 4,
      // tooltip border width, unit is px, default is 0 (no border)
      borderWidth: 1,
      // Tooltip inside padding, default is 5 for all direction
      // Array is allowed to set up, right, bottom, left, same with css
      // The default value: See `tooltip/tooltipMarkup.ts#getPaddingFromTooltipModel`.
      padding: null,
      // Extra css text
      extraCssText: "",
      // axis indicator, trigger by axis
      axisPointer: {
        // default is line
        // legal values: 'line' | 'shadow' | 'cross'
        type: "line",
        // Valid when type is line, appoint tooltip line locate on which line. Optional
        // legal values: 'x' | 'y' | 'angle' | 'radius' | 'auto'
        // default is 'auto', chose the axis which type is category.
        // for multiply y axis, cartesian coord chose x axis, polar chose angle axis
        axis: "auto",
        animation: "auto",
        animationDurationUpdate: 200,
        animationEasingUpdate: "exponentialOut",
        crossStyle: {
          color: "#999",
          width: 1,
          type: "dashed",
          // TODO formatter
          textStyle: {}
        }
        // lineStyle and shadowStyle should not be specified here,
        // otherwise it will always override those styles on option.axisPointer.
      },
      textStyle: {
        color: "#666",
        fontSize: 14
      }
    };
    return TooltipModel2;
  }(Component_default)
);
var TooltipModel_default = TooltipModel;

// node_modules/echarts/lib/component/tooltip/TooltipView.js
init_tslib_es6();
init_util();
init_env();

// node_modules/echarts/lib/component/tooltip/TooltipHTMLContent.js
init_util();
init_event();
init_dom();
init_env();
init_format();

// node_modules/echarts/lib/component/tooltip/helper.js
init_format();
init_env();
function shouldTooltipConfine(tooltipModel) {
  var confineOption = tooltipModel.get("confine");
  return confineOption != null ? !!confineOption : tooltipModel.get("renderMode") === "richText";
}
function testStyle(styleProps) {
  if (!env_default.domSupported) {
    return;
  }
  var style = document.documentElement.style;
  for (var i = 0, len = styleProps.length; i < len; i++) {
    if (styleProps[i] in style) {
      return styleProps[i];
    }
  }
}
var TRANSFORM_VENDOR = testStyle(["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]);
var TRANSITION_VENDOR = testStyle(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]);
function toCSSVendorPrefix(styleVendor, styleProp) {
  if (!styleVendor) {
    return styleProp;
  }
  styleProp = toCamelCase(styleProp, true);
  var idx = styleVendor.indexOf(styleProp);
  styleVendor = idx === -1 ? styleProp : "-" + styleVendor.slice(0, idx) + "-" + styleProp;
  return styleVendor.toLowerCase();
}
function getComputedStyle(el, style) {
  var stl = el.currentStyle || document.defaultView && document.defaultView.getComputedStyle(el);
  return stl ? style ? stl[style] : stl : null;
}

// node_modules/echarts/lib/component/tooltip/TooltipHTMLContent.js
init_tooltipMarkup();
var CSS_TRANSITION_VENDOR = toCSSVendorPrefix(TRANSITION_VENDOR, "transition");
var CSS_TRANSFORM_VENDOR = toCSSVendorPrefix(TRANSFORM_VENDOR, "transform");
var gCssText = "position:absolute;display:block;border-style:solid;white-space:nowrap;z-index:9999999;" + (env_default.transform3dSupported ? "will-change:transform;" : "");
function mirrorPos(pos) {
  pos = pos === "left" ? "right" : pos === "right" ? "left" : pos === "top" ? "bottom" : "top";
  return pos;
}
function assembleArrow(tooltipModel, borderColor, arrowPosition) {
  if (!isString(arrowPosition) || arrowPosition === "inside") {
    return "";
  }
  var backgroundColor = tooltipModel.get("backgroundColor");
  var borderWidth = tooltipModel.get("borderWidth");
  borderColor = convertToColorString(borderColor);
  var arrowPos = mirrorPos(arrowPosition);
  var arrowSize = Math.max(Math.round(borderWidth) * 1.5, 6);
  var positionStyle = "";
  var transformStyle = CSS_TRANSFORM_VENDOR + ":";
  var rotateDeg;
  if (indexOf(["left", "right"], arrowPos) > -1) {
    positionStyle += "top:50%";
    transformStyle += "translateY(-50%) rotate(" + (rotateDeg = arrowPos === "left" ? -225 : -45) + "deg)";
  } else {
    positionStyle += "left:50%";
    transformStyle += "translateX(-50%) rotate(" + (rotateDeg = arrowPos === "top" ? 225 : 45) + "deg)";
  }
  var rotateRadian = rotateDeg * Math.PI / 180;
  var arrowWH = arrowSize + borderWidth;
  var rotatedWH = arrowWH * Math.abs(Math.cos(rotateRadian)) + arrowWH * Math.abs(Math.sin(rotateRadian));
  var arrowOffset = Math.round(((rotatedWH - Math.SQRT2 * borderWidth) / 2 + Math.SQRT2 * borderWidth - (rotatedWH - arrowWH) / 2) * 100) / 100;
  positionStyle += ";" + arrowPos + ":-" + arrowOffset + "px";
  var borderStyle = borderColor + " solid " + borderWidth + "px;";
  var styleCss = ["position:absolute;width:" + arrowSize + "px;height:" + arrowSize + "px;z-index:-1;", positionStyle + ";" + transformStyle + ";", "border-bottom:" + borderStyle, "border-right:" + borderStyle, "background-color:" + backgroundColor + ";"];
  return '<div style="' + styleCss.join("") + '"></div>';
}
function assembleTransition(duration, onlyFade) {
  var transitionCurve = "cubic-bezier(0.23,1,0.32,1)";
  var transitionOption = " " + duration / 2 + "s " + transitionCurve;
  var transitionText = "opacity" + transitionOption + ",visibility" + transitionOption;
  if (!onlyFade) {
    transitionOption = " " + duration + "s " + transitionCurve;
    transitionText += env_default.transformSupported ? "," + CSS_TRANSFORM_VENDOR + transitionOption : ",left" + transitionOption + ",top" + transitionOption;
  }
  return CSS_TRANSITION_VENDOR + ":" + transitionText;
}
function assembleTransform(x, y, toString) {
  var x0 = x.toFixed(0) + "px";
  var y0 = y.toFixed(0) + "px";
  if (!env_default.transformSupported) {
    return toString ? "top:" + y0 + ";left:" + x0 + ";" : [["top", y0], ["left", x0]];
  }
  var is3d = env_default.transform3dSupported;
  var translate2 = "translate" + (is3d ? "3d" : "") + "(" + x0 + "," + y0 + (is3d ? ",0" : "") + ")";
  return toString ? "top:0;left:0;" + CSS_TRANSFORM_VENDOR + ":" + translate2 + ";" : [["top", 0], ["left", 0], [TRANSFORM_VENDOR, translate2]];
}
function assembleFont(textStyleModel) {
  var cssText = [];
  var fontSize = textStyleModel.get("fontSize");
  var color = textStyleModel.getTextColor();
  color && cssText.push("color:" + color);
  cssText.push("font:" + textStyleModel.getFont());
  var lineHeight = retrieve2(textStyleModel.get("lineHeight"), Math.round(fontSize * 3 / 2));
  fontSize && cssText.push("line-height:" + lineHeight + "px");
  var shadowColor = textStyleModel.get("textShadowColor");
  var shadowBlur = textStyleModel.get("textShadowBlur") || 0;
  var shadowOffsetX = textStyleModel.get("textShadowOffsetX") || 0;
  var shadowOffsetY = textStyleModel.get("textShadowOffsetY") || 0;
  shadowColor && shadowBlur && cssText.push("text-shadow:" + shadowOffsetX + "px " + shadowOffsetY + "px " + shadowBlur + "px " + shadowColor);
  each(["decoration", "align"], function(name) {
    var val = textStyleModel.get(name);
    val && cssText.push("text-" + name + ":" + val);
  });
  return cssText.join(";");
}
function assembleCssText(tooltipModel, enableTransition, onlyFade) {
  var cssText = [];
  var transitionDuration = tooltipModel.get("transitionDuration");
  var backgroundColor = tooltipModel.get("backgroundColor");
  var shadowBlur = tooltipModel.get("shadowBlur");
  var shadowColor = tooltipModel.get("shadowColor");
  var shadowOffsetX = tooltipModel.get("shadowOffsetX");
  var shadowOffsetY = tooltipModel.get("shadowOffsetY");
  var textStyleModel = tooltipModel.getModel("textStyle");
  var padding = getPaddingFromTooltipModel(tooltipModel, "html");
  var boxShadow = shadowOffsetX + "px " + shadowOffsetY + "px " + shadowBlur + "px " + shadowColor;
  cssText.push("box-shadow:" + boxShadow);
  enableTransition && transitionDuration && cssText.push(assembleTransition(transitionDuration, onlyFade));
  if (backgroundColor) {
    cssText.push("background-color:" + backgroundColor);
  }
  each(["width", "color", "radius"], function(name) {
    var borderName = "border-" + name;
    var camelCase = toCamelCase(borderName);
    var val = tooltipModel.get(camelCase);
    val != null && cssText.push(borderName + ":" + val + (name === "color" ? "" : "px"));
  });
  cssText.push(assembleFont(textStyleModel));
  if (padding != null) {
    cssText.push("padding:" + normalizeCssArray(padding).join("px ") + "px");
  }
  return cssText.join(";") + ";";
}
function makeStyleCoord(out, zr, container, zrX, zrY) {
  var zrPainter = zr && zr.painter;
  if (container) {
    var zrViewportRoot = zrPainter && zrPainter.getViewportRoot();
    if (zrViewportRoot) {
      transformLocalCoord(out, zrViewportRoot, container, zrX, zrY);
    }
  } else {
    out[0] = zrX;
    out[1] = zrY;
    var viewportRootOffset = zrPainter && zrPainter.getViewportRootOffset();
    if (viewportRootOffset) {
      out[0] += viewportRootOffset.offsetLeft;
      out[1] += viewportRootOffset.offsetTop;
    }
  }
  out[2] = out[0] / zr.getWidth();
  out[3] = out[1] / zr.getHeight();
}
var TooltipHTMLContent = (
  /** @class */
  function() {
    function TooltipHTMLContent2(api, opt) {
      this._show = false;
      this._styleCoord = [0, 0, 0, 0];
      this._enterable = true;
      this._alwaysShowContent = false;
      this._firstShow = true;
      this._longHide = true;
      if (env_default.wxa) {
        return null;
      }
      var el = document.createElement("div");
      el.domBelongToZr = true;
      this.el = el;
      var zr = this._zr = api.getZr();
      var appendTo = opt.appendTo;
      var container = appendTo && (isString(appendTo) ? document.querySelector(appendTo) : isDom(appendTo) ? appendTo : isFunction(appendTo) && appendTo(api.getDom()));
      makeStyleCoord(this._styleCoord, zr, container, api.getWidth() / 2, api.getHeight() / 2);
      (container || api.getDom()).appendChild(el);
      this._api = api;
      this._container = container;
      var self = this;
      el.onmouseenter = function() {
        if (self._enterable) {
          clearTimeout(self._hideTimeout);
          self._show = true;
        }
        self._inContent = true;
      };
      el.onmousemove = function(e) {
        e = e || window.event;
        if (!self._enterable) {
          var handler = zr.handler;
          var zrViewportRoot = zr.painter.getViewportRoot();
          normalizeEvent(zrViewportRoot, e, true);
          handler.dispatch("mousemove", e);
        }
      };
      el.onmouseleave = function() {
        self._inContent = false;
        if (self._enterable) {
          if (self._show) {
            self.hideLater(self._hideDelay);
          }
        }
      };
    }
    TooltipHTMLContent2.prototype.update = function(tooltipModel) {
      if (!this._container) {
        var container = this._api.getDom();
        var position = getComputedStyle(container, "position");
        var domStyle = container.style;
        if (domStyle.position !== "absolute" && position !== "absolute") {
          domStyle.position = "relative";
        }
      }
      var alwaysShowContent = tooltipModel.get("alwaysShowContent");
      alwaysShowContent && this._moveIfResized();
      this._alwaysShowContent = alwaysShowContent;
      this.el.className = tooltipModel.get("className") || "";
    };
    TooltipHTMLContent2.prototype.show = function(tooltipModel, nearPointColor) {
      clearTimeout(this._hideTimeout);
      clearTimeout(this._longHideTimeout);
      var el = this.el;
      var style = el.style;
      var styleCoord = this._styleCoord;
      if (!el.innerHTML) {
        style.display = "none";
      } else {
        style.cssText = gCssText + assembleCssText(tooltipModel, !this._firstShow, this._longHide) + assembleTransform(styleCoord[0], styleCoord[1], true) + ("border-color:" + convertToColorString(nearPointColor) + ";") + (tooltipModel.get("extraCssText") || "") + (";pointer-events:" + (this._enterable ? "auto" : "none"));
      }
      this._show = true;
      this._firstShow = false;
      this._longHide = false;
    };
    TooltipHTMLContent2.prototype.setContent = function(content, markers, tooltipModel, borderColor, arrowPosition) {
      var el = this.el;
      if (content == null) {
        el.innerHTML = "";
        return;
      }
      var arrow = "";
      if (isString(arrowPosition) && tooltipModel.get("trigger") === "item" && !shouldTooltipConfine(tooltipModel)) {
        arrow = assembleArrow(tooltipModel, borderColor, arrowPosition);
      }
      if (isString(content)) {
        el.innerHTML = content + arrow;
      } else if (content) {
        el.innerHTML = "";
        if (!isArray(content)) {
          content = [content];
        }
        for (var i = 0; i < content.length; i++) {
          if (isDom(content[i]) && content[i].parentNode !== el) {
            el.appendChild(content[i]);
          }
        }
        if (arrow && el.childNodes.length) {
          var arrowEl = document.createElement("div");
          arrowEl.innerHTML = arrow;
          el.appendChild(arrowEl);
        }
      }
    };
    TooltipHTMLContent2.prototype.setEnterable = function(enterable) {
      this._enterable = enterable;
    };
    TooltipHTMLContent2.prototype.getSize = function() {
      var el = this.el;
      return el ? [el.offsetWidth, el.offsetHeight] : [0, 0];
    };
    TooltipHTMLContent2.prototype.moveTo = function(zrX, zrY) {
      if (!this.el) {
        return;
      }
      var styleCoord = this._styleCoord;
      makeStyleCoord(styleCoord, this._zr, this._container, zrX, zrY);
      if (styleCoord[0] != null && styleCoord[1] != null) {
        var style_1 = this.el.style;
        var transforms = assembleTransform(styleCoord[0], styleCoord[1]);
        each(transforms, function(transform) {
          style_1[transform[0]] = transform[1];
        });
      }
    };
    TooltipHTMLContent2.prototype._moveIfResized = function() {
      var ratioX = this._styleCoord[2];
      var ratioY = this._styleCoord[3];
      this.moveTo(ratioX * this._zr.getWidth(), ratioY * this._zr.getHeight());
    };
    TooltipHTMLContent2.prototype.hide = function() {
      var _this = this;
      var style = this.el.style;
      style.visibility = "hidden";
      style.opacity = "0";
      env_default.transform3dSupported && (style.willChange = "");
      this._show = false;
      this._longHideTimeout = setTimeout(function() {
        return _this._longHide = true;
      }, 500);
    };
    TooltipHTMLContent2.prototype.hideLater = function(time) {
      if (this._show && !(this._inContent && this._enterable) && !this._alwaysShowContent) {
        if (time) {
          this._hideDelay = time;
          this._show = false;
          this._hideTimeout = setTimeout(bind(this.hide, this), time);
        } else {
          this.hide();
        }
      }
    };
    TooltipHTMLContent2.prototype.isShow = function() {
      return this._show;
    };
    TooltipHTMLContent2.prototype.dispose = function() {
      clearTimeout(this._hideTimeout);
      clearTimeout(this._longHideTimeout);
      var parentNode = this.el.parentNode;
      parentNode && parentNode.removeChild(this.el);
      this.el = this._container = null;
    };
    return TooltipHTMLContent2;
  }()
);
var TooltipHTMLContent_default = TooltipHTMLContent;

// node_modules/echarts/lib/component/tooltip/TooltipRichContent.js
init_util();
init_Text();
init_tooltipMarkup();
init_log();
var TooltipRichContent = (
  /** @class */
  function() {
    function TooltipRichContent2(api) {
      this._show = false;
      this._styleCoord = [0, 0, 0, 0];
      this._alwaysShowContent = false;
      this._enterable = true;
      this._zr = api.getZr();
      makeStyleCoord2(this._styleCoord, this._zr, api.getWidth() / 2, api.getHeight() / 2);
    }
    TooltipRichContent2.prototype.update = function(tooltipModel) {
      var alwaysShowContent = tooltipModel.get("alwaysShowContent");
      alwaysShowContent && this._moveIfResized();
      this._alwaysShowContent = alwaysShowContent;
    };
    TooltipRichContent2.prototype.show = function() {
      if (this._hideTimeout) {
        clearTimeout(this._hideTimeout);
      }
      this.el.show();
      this._show = true;
    };
    TooltipRichContent2.prototype.setContent = function(content, markupStyleCreator, tooltipModel, borderColor, arrowPosition) {
      var _this = this;
      if (isObject(content)) {
        throwError(true ? "Passing DOM nodes as content is not supported in richText tooltip!" : "");
      }
      if (this.el) {
        this._zr.remove(this.el);
      }
      var textStyleModel = tooltipModel.getModel("textStyle");
      this.el = new Text_default({
        style: {
          rich: markupStyleCreator.richTextStyles,
          text: content,
          lineHeight: 22,
          borderWidth: 1,
          borderColor,
          textShadowColor: textStyleModel.get("textShadowColor"),
          fill: tooltipModel.get(["textStyle", "color"]),
          padding: getPaddingFromTooltipModel(tooltipModel, "richText"),
          verticalAlign: "top",
          align: "left"
        },
        z: tooltipModel.get("z")
      });
      each(["backgroundColor", "borderRadius", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY"], function(propName) {
        _this.el.style[propName] = tooltipModel.get(propName);
      });
      each(["textShadowBlur", "textShadowOffsetX", "textShadowOffsetY"], function(propName) {
        _this.el.style[propName] = textStyleModel.get(propName) || 0;
      });
      this._zr.add(this.el);
      var self = this;
      this.el.on("mouseover", function() {
        if (self._enterable) {
          clearTimeout(self._hideTimeout);
          self._show = true;
        }
        self._inContent = true;
      });
      this.el.on("mouseout", function() {
        if (self._enterable) {
          if (self._show) {
            self.hideLater(self._hideDelay);
          }
        }
        self._inContent = false;
      });
    };
    TooltipRichContent2.prototype.setEnterable = function(enterable) {
      this._enterable = enterable;
    };
    TooltipRichContent2.prototype.getSize = function() {
      var el = this.el;
      var bounding = this.el.getBoundingRect();
      var shadowOuterSize = calcShadowOuterSize(el.style);
      return [bounding.width + shadowOuterSize.left + shadowOuterSize.right, bounding.height + shadowOuterSize.top + shadowOuterSize.bottom];
    };
    TooltipRichContent2.prototype.moveTo = function(x, y) {
      var el = this.el;
      if (el) {
        var styleCoord = this._styleCoord;
        makeStyleCoord2(styleCoord, this._zr, x, y);
        x = styleCoord[0];
        y = styleCoord[1];
        var style = el.style;
        var borderWidth = mathMaxWith0(style.borderWidth || 0);
        var shadowOuterSize = calcShadowOuterSize(style);
        el.x = x + borderWidth + shadowOuterSize.left;
        el.y = y + borderWidth + shadowOuterSize.top;
        el.markRedraw();
      }
    };
    TooltipRichContent2.prototype._moveIfResized = function() {
      var ratioX = this._styleCoord[2];
      var ratioY = this._styleCoord[3];
      this.moveTo(ratioX * this._zr.getWidth(), ratioY * this._zr.getHeight());
    };
    TooltipRichContent2.prototype.hide = function() {
      if (this.el) {
        this.el.hide();
      }
      this._show = false;
    };
    TooltipRichContent2.prototype.hideLater = function(time) {
      if (this._show && !(this._inContent && this._enterable) && !this._alwaysShowContent) {
        if (time) {
          this._hideDelay = time;
          this._show = false;
          this._hideTimeout = setTimeout(bind(this.hide, this), time);
        } else {
          this.hide();
        }
      }
    };
    TooltipRichContent2.prototype.isShow = function() {
      return this._show;
    };
    TooltipRichContent2.prototype.dispose = function() {
      this._zr.remove(this.el);
    };
    return TooltipRichContent2;
  }()
);
function mathMaxWith0(val) {
  return Math.max(0, val);
}
function calcShadowOuterSize(style) {
  var shadowBlur = mathMaxWith0(style.shadowBlur || 0);
  var shadowOffsetX = mathMaxWith0(style.shadowOffsetX || 0);
  var shadowOffsetY = mathMaxWith0(style.shadowOffsetY || 0);
  return {
    left: mathMaxWith0(shadowBlur - shadowOffsetX),
    right: mathMaxWith0(shadowBlur + shadowOffsetX),
    top: mathMaxWith0(shadowBlur - shadowOffsetY),
    bottom: mathMaxWith0(shadowBlur + shadowOffsetY)
  };
}
function makeStyleCoord2(out, zr, zrX, zrY) {
  out[0] = zrX;
  out[1] = zrY;
  out[2] = out[0] / zr.getWidth();
  out[3] = out[1] / zr.getHeight();
}
var TooltipRichContent_default = TooltipRichContent;

// node_modules/echarts/lib/component/tooltip/TooltipView.js
init_format();
init_number();
init_graphic();
init_layout();
init_Model();
init_axisHelper();
init_model();
init_Component2();
init_time();
init_innerStore();
init_dataFormat();
init_tooltipMarkup();
init_event2();
init_throttle();
var proxyRect = new Rect_default({
  shape: {
    x: -1,
    y: -1,
    width: 2,
    height: 2
  }
});
var TooltipView = (
  /** @class */
  function(_super) {
    __extends(TooltipView2, _super);
    function TooltipView2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.type = TooltipView2.type;
      return _this;
    }
    TooltipView2.prototype.init = function(ecModel, api) {
      if (env_default.node || !api.getDom()) {
        return;
      }
      var tooltipModel = ecModel.getComponent("tooltip");
      var renderMode = this._renderMode = getTooltipRenderMode(tooltipModel.get("renderMode"));
      this._tooltipContent = renderMode === "richText" ? new TooltipRichContent_default(api) : new TooltipHTMLContent_default(api, {
        appendTo: tooltipModel.get("appendToBody", true) ? "body" : tooltipModel.get("appendTo", true)
      });
    };
    TooltipView2.prototype.render = function(tooltipModel, ecModel, api) {
      if (env_default.node || !api.getDom()) {
        return;
      }
      this.group.removeAll();
      this._tooltipModel = tooltipModel;
      this._ecModel = ecModel;
      this._api = api;
      var tooltipContent = this._tooltipContent;
      tooltipContent.update(tooltipModel);
      tooltipContent.setEnterable(tooltipModel.get("enterable"));
      this._initGlobalListener();
      this._keepShow();
      if (this._renderMode !== "richText" && tooltipModel.get("transitionDuration")) {
        createOrUpdate(this, "_updatePosition", 50, "fixRate");
      } else {
        clear(this, "_updatePosition");
      }
    };
    TooltipView2.prototype._initGlobalListener = function() {
      var tooltipModel = this._tooltipModel;
      var triggerOn = tooltipModel.get("triggerOn");
      register("itemTooltip", this._api, bind(function(currTrigger, e, dispatchAction3) {
        if (triggerOn !== "none") {
          if (triggerOn.indexOf(currTrigger) >= 0) {
            this._tryShow(e, dispatchAction3);
          } else if (currTrigger === "leave") {
            this._hide(dispatchAction3);
          }
        }
      }, this));
    };
    TooltipView2.prototype._keepShow = function() {
      var tooltipModel = this._tooltipModel;
      var ecModel = this._ecModel;
      var api = this._api;
      var triggerOn = tooltipModel.get("triggerOn");
      if (this._lastX != null && this._lastY != null && triggerOn !== "none" && triggerOn !== "click") {
        var self_1 = this;
        clearTimeout(this._refreshUpdateTimeout);
        this._refreshUpdateTimeout = setTimeout(function() {
          !api.isDisposed() && self_1.manuallyShowTip(tooltipModel, ecModel, api, {
            x: self_1._lastX,
            y: self_1._lastY,
            dataByCoordSys: self_1._lastDataByCoordSys
          });
        });
      }
    };
    TooltipView2.prototype.manuallyShowTip = function(tooltipModel, ecModel, api, payload) {
      if (payload.from === this.uid || env_default.node || !api.getDom()) {
        return;
      }
      var dispatchAction3 = makeDispatchAction2(payload, api);
      this._ticket = "";
      var dataByCoordSys = payload.dataByCoordSys;
      var cmptRef = findComponentReference(payload, ecModel, api);
      if (cmptRef) {
        var rect = cmptRef.el.getBoundingRect().clone();
        rect.applyTransform(cmptRef.el.transform);
        this._tryShow({
          offsetX: rect.x + rect.width / 2,
          offsetY: rect.y + rect.height / 2,
          target: cmptRef.el,
          position: payload.position,
          // When manully trigger, the mouse is not on the el, so we'd better to
          // position tooltip on the bottom of the el and display arrow is possible.
          positionDefault: "bottom"
        }, dispatchAction3);
      } else if (payload.tooltip && payload.x != null && payload.y != null) {
        var el = proxyRect;
        el.x = payload.x;
        el.y = payload.y;
        el.update();
        getECData(el).tooltipConfig = {
          name: null,
          option: payload.tooltip
        };
        this._tryShow({
          offsetX: payload.x,
          offsetY: payload.y,
          target: el
        }, dispatchAction3);
      } else if (dataByCoordSys) {
        this._tryShow({
          offsetX: payload.x,
          offsetY: payload.y,
          position: payload.position,
          dataByCoordSys,
          tooltipOption: payload.tooltipOption
        }, dispatchAction3);
      } else if (payload.seriesIndex != null) {
        if (this._manuallyAxisShowTip(tooltipModel, ecModel, api, payload)) {
          return;
        }
        var pointInfo = findPointFromSeries(payload, ecModel);
        var cx = pointInfo.point[0];
        var cy = pointInfo.point[1];
        if (cx != null && cy != null) {
          this._tryShow({
            offsetX: cx,
            offsetY: cy,
            target: pointInfo.el,
            position: payload.position,
            // When manully trigger, the mouse is not on the el, so we'd better to
            // position tooltip on the bottom of the el and display arrow is possible.
            positionDefault: "bottom"
          }, dispatchAction3);
        }
      } else if (payload.x != null && payload.y != null) {
        api.dispatchAction({
          type: "updateAxisPointer",
          x: payload.x,
          y: payload.y
        });
        this._tryShow({
          offsetX: payload.x,
          offsetY: payload.y,
          position: payload.position,
          target: api.getZr().findHover(payload.x, payload.y).target
        }, dispatchAction3);
      }
    };
    TooltipView2.prototype.manuallyHideTip = function(tooltipModel, ecModel, api, payload) {
      var tooltipContent = this._tooltipContent;
      if (this._tooltipModel) {
        tooltipContent.hideLater(this._tooltipModel.get("hideDelay"));
      }
      this._lastX = this._lastY = this._lastDataByCoordSys = null;
      if (payload.from !== this.uid) {
        this._hide(makeDispatchAction2(payload, api));
      }
    };
    TooltipView2.prototype._manuallyAxisShowTip = function(tooltipModel, ecModel, api, payload) {
      var seriesIndex = payload.seriesIndex;
      var dataIndex = payload.dataIndex;
      var coordSysAxesInfo = ecModel.getComponent("axisPointer").coordSysAxesInfo;
      if (seriesIndex == null || dataIndex == null || coordSysAxesInfo == null) {
        return;
      }
      var seriesModel = ecModel.getSeriesByIndex(seriesIndex);
      if (!seriesModel) {
        return;
      }
      var data = seriesModel.getData();
      var tooltipCascadedModel = buildTooltipModel([data.getItemModel(dataIndex), seriesModel, (seriesModel.coordinateSystem || {}).model], this._tooltipModel);
      if (tooltipCascadedModel.get("trigger") !== "axis") {
        return;
      }
      api.dispatchAction({
        type: "updateAxisPointer",
        seriesIndex,
        dataIndex,
        position: payload.position
      });
      return true;
    };
    TooltipView2.prototype._tryShow = function(e, dispatchAction3) {
      var el = e.target;
      var tooltipModel = this._tooltipModel;
      if (!tooltipModel) {
        return;
      }
      this._lastX = e.offsetX;
      this._lastY = e.offsetY;
      var dataByCoordSys = e.dataByCoordSys;
      if (dataByCoordSys && dataByCoordSys.length) {
        this._showAxisTooltip(dataByCoordSys, e);
      } else if (el) {
        var ecData = getECData(el);
        if (ecData.ssrType === "legend") {
          return;
        }
        this._lastDataByCoordSys = null;
        var seriesDispatcher_1;
        var cmptDispatcher_1;
        findEventDispatcher(el, function(target) {
          if (getECData(target).dataIndex != null) {
            seriesDispatcher_1 = target;
            return true;
          }
          if (getECData(target).tooltipConfig != null) {
            cmptDispatcher_1 = target;
            return true;
          }
        }, true);
        if (seriesDispatcher_1) {
          this._showSeriesItemTooltip(e, seriesDispatcher_1, dispatchAction3);
        } else if (cmptDispatcher_1) {
          this._showComponentItemTooltip(e, cmptDispatcher_1, dispatchAction3);
        } else {
          this._hide(dispatchAction3);
        }
      } else {
        this._lastDataByCoordSys = null;
        this._hide(dispatchAction3);
      }
    };
    TooltipView2.prototype._showOrMove = function(tooltipModel, cb) {
      var delay = tooltipModel.get("showDelay");
      cb = bind(cb, this);
      clearTimeout(this._showTimout);
      delay > 0 ? this._showTimout = setTimeout(cb, delay) : cb();
    };
    TooltipView2.prototype._showAxisTooltip = function(dataByCoordSys, e) {
      var ecModel = this._ecModel;
      var globalTooltipModel = this._tooltipModel;
      var point = [e.offsetX, e.offsetY];
      var singleTooltipModel = buildTooltipModel([e.tooltipOption], globalTooltipModel);
      var renderMode = this._renderMode;
      var cbParamsList = [];
      var articleMarkup = createTooltipMarkup("section", {
        blocks: [],
        noHeader: true
      });
      var markupTextArrLegacy = [];
      var markupStyleCreator = new TooltipMarkupStyleCreator();
      each(dataByCoordSys, function(itemCoordSys) {
        each(itemCoordSys.dataByAxis, function(axisItem) {
          var axisModel = ecModel.getComponent(axisItem.axisDim + "Axis", axisItem.axisIndex);
          var axisValue = axisItem.value;
          if (!axisModel || axisValue == null) {
            return;
          }
          var axisValueLabel = getValueLabel(axisValue, axisModel.axis, ecModel, axisItem.seriesDataIndices, axisItem.valueLabelOpt);
          var axisSectionMarkup = createTooltipMarkup("section", {
            header: axisValueLabel,
            noHeader: !trim(axisValueLabel),
            sortBlocks: true,
            blocks: []
          });
          articleMarkup.blocks.push(axisSectionMarkup);
          each(axisItem.seriesDataIndices, function(idxItem) {
            var series = ecModel.getSeriesByIndex(idxItem.seriesIndex);
            var dataIndex = idxItem.dataIndexInside;
            var cbParams = series.getDataParams(dataIndex);
            if (cbParams.dataIndex < 0) {
              return;
            }
            cbParams.axisDim = axisItem.axisDim;
            cbParams.axisIndex = axisItem.axisIndex;
            cbParams.axisType = axisItem.axisType;
            cbParams.axisId = axisItem.axisId;
            cbParams.axisValue = getAxisRawValue(axisModel.axis, {
              value: axisValue
            });
            cbParams.axisValueLabel = axisValueLabel;
            cbParams.marker = markupStyleCreator.makeTooltipMarker("item", convertToColorString(cbParams.color), renderMode);
            var seriesTooltipResult = normalizeTooltipFormatResult(series.formatTooltip(dataIndex, true, null));
            var frag = seriesTooltipResult.frag;
            if (frag) {
              var valueFormatter = buildTooltipModel([series], globalTooltipModel).get("valueFormatter");
              axisSectionMarkup.blocks.push(valueFormatter ? extend({
                valueFormatter
              }, frag) : frag);
            }
            if (seriesTooltipResult.text) {
              markupTextArrLegacy.push(seriesTooltipResult.text);
            }
            cbParamsList.push(cbParams);
          });
        });
      });
      articleMarkup.blocks.reverse();
      markupTextArrLegacy.reverse();
      var positionExpr = e.position;
      var orderMode = singleTooltipModel.get("order");
      var builtMarkupText = buildTooltipMarkup(articleMarkup, markupStyleCreator, renderMode, orderMode, ecModel.get("useUTC"), singleTooltipModel.get("textStyle"));
      builtMarkupText && markupTextArrLegacy.unshift(builtMarkupText);
      var blockBreak = renderMode === "richText" ? "\n\n" : "<br/>";
      var allMarkupText = markupTextArrLegacy.join(blockBreak);
      this._showOrMove(singleTooltipModel, function() {
        if (this._updateContentNotChangedOnAxis(dataByCoordSys, cbParamsList)) {
          this._updatePosition(singleTooltipModel, positionExpr, point[0], point[1], this._tooltipContent, cbParamsList);
        } else {
          this._showTooltipContent(singleTooltipModel, allMarkupText, cbParamsList, Math.random() + "", point[0], point[1], positionExpr, null, markupStyleCreator);
        }
      });
    };
    TooltipView2.prototype._showSeriesItemTooltip = function(e, dispatcher, dispatchAction3) {
      var ecModel = this._ecModel;
      var ecData = getECData(dispatcher);
      var seriesIndex = ecData.seriesIndex;
      var seriesModel = ecModel.getSeriesByIndex(seriesIndex);
      var dataModel = ecData.dataModel || seriesModel;
      var dataIndex = ecData.dataIndex;
      var dataType = ecData.dataType;
      var data = dataModel.getData(dataType);
      var renderMode = this._renderMode;
      var positionDefault = e.positionDefault;
      var tooltipModel = buildTooltipModel([data.getItemModel(dataIndex), dataModel, seriesModel && (seriesModel.coordinateSystem || {}).model], this._tooltipModel, positionDefault ? {
        position: positionDefault
      } : null);
      var tooltipTrigger = tooltipModel.get("trigger");
      if (tooltipTrigger != null && tooltipTrigger !== "item") {
        return;
      }
      var params = dataModel.getDataParams(dataIndex, dataType);
      var markupStyleCreator = new TooltipMarkupStyleCreator();
      params.marker = markupStyleCreator.makeTooltipMarker("item", convertToColorString(params.color), renderMode);
      var seriesTooltipResult = normalizeTooltipFormatResult(dataModel.formatTooltip(dataIndex, false, dataType));
      var orderMode = tooltipModel.get("order");
      var valueFormatter = tooltipModel.get("valueFormatter");
      var frag = seriesTooltipResult.frag;
      var markupText = frag ? buildTooltipMarkup(valueFormatter ? extend({
        valueFormatter
      }, frag) : frag, markupStyleCreator, renderMode, orderMode, ecModel.get("useUTC"), tooltipModel.get("textStyle")) : seriesTooltipResult.text;
      var asyncTicket = "item_" + dataModel.name + "_" + dataIndex;
      this._showOrMove(tooltipModel, function() {
        this._showTooltipContent(tooltipModel, markupText, params, asyncTicket, e.offsetX, e.offsetY, e.position, e.target, markupStyleCreator);
      });
      dispatchAction3({
        type: "showTip",
        dataIndexInside: dataIndex,
        dataIndex: data.getRawIndex(dataIndex),
        seriesIndex,
        from: this.uid
      });
    };
    TooltipView2.prototype._showComponentItemTooltip = function(e, el, dispatchAction3) {
      var isHTMLRenderMode = this._renderMode === "html";
      var ecData = getECData(el);
      var tooltipConfig = ecData.tooltipConfig;
      var tooltipOpt = tooltipConfig.option || {};
      var encodeHTMLContent = tooltipOpt.encodeHTMLContent;
      if (isString(tooltipOpt)) {
        var content = tooltipOpt;
        tooltipOpt = {
          content,
          // Fixed formatter
          formatter: content
        };
        encodeHTMLContent = true;
      }
      if (encodeHTMLContent && isHTMLRenderMode && tooltipOpt.content) {
        tooltipOpt = clone(tooltipOpt);
        tooltipOpt.content = encodeHTML(tooltipOpt.content);
      }
      var tooltipModelCascade = [tooltipOpt];
      var cmpt = this._ecModel.getComponent(ecData.componentMainType, ecData.componentIndex);
      if (cmpt) {
        tooltipModelCascade.push(cmpt);
      }
      tooltipModelCascade.push({
        formatter: tooltipOpt.content
      });
      var positionDefault = e.positionDefault;
      var subTooltipModel = buildTooltipModel(tooltipModelCascade, this._tooltipModel, positionDefault ? {
        position: positionDefault
      } : null);
      var defaultHtml = subTooltipModel.get("content");
      var asyncTicket = Math.random() + "";
      var markupStyleCreator = new TooltipMarkupStyleCreator();
      this._showOrMove(subTooltipModel, function() {
        var formatterParams = clone(subTooltipModel.get("formatterParams") || {});
        this._showTooltipContent(subTooltipModel, defaultHtml, formatterParams, asyncTicket, e.offsetX, e.offsetY, e.position, el, markupStyleCreator);
      });
      dispatchAction3({
        type: "showTip",
        from: this.uid
      });
    };
    TooltipView2.prototype._showTooltipContent = function(tooltipModel, defaultHtml, params, asyncTicket, x, y, positionExpr, el, markupStyleCreator) {
      this._ticket = "";
      if (!tooltipModel.get("showContent") || !tooltipModel.get("show")) {
        return;
      }
      var tooltipContent = this._tooltipContent;
      tooltipContent.setEnterable(tooltipModel.get("enterable"));
      var formatter = tooltipModel.get("formatter");
      positionExpr = positionExpr || tooltipModel.get("position");
      var html = defaultHtml;
      var nearPoint = this._getNearestPoint([x, y], params, tooltipModel.get("trigger"), tooltipModel.get("borderColor"));
      var nearPointColor = nearPoint.color;
      if (formatter) {
        if (isString(formatter)) {
          var useUTC = tooltipModel.ecModel.get("useUTC");
          var params0 = isArray(params) ? params[0] : params;
          var isTimeAxis = params0 && params0.axisType && params0.axisType.indexOf("time") >= 0;
          html = formatter;
          if (isTimeAxis) {
            html = format(params0.axisValue, html, useUTC);
          }
          html = formatTpl(html, params, true);
        } else if (isFunction(formatter)) {
          var callback = bind(function(cbTicket, html2) {
            if (cbTicket === this._ticket) {
              tooltipContent.setContent(html2, markupStyleCreator, tooltipModel, nearPointColor, positionExpr);
              this._updatePosition(tooltipModel, positionExpr, x, y, tooltipContent, params, el);
            }
          }, this);
          this._ticket = asyncTicket;
          html = formatter(params, asyncTicket, callback);
        } else {
          html = formatter;
        }
      }
      tooltipContent.setContent(html, markupStyleCreator, tooltipModel, nearPointColor, positionExpr);
      tooltipContent.show(tooltipModel, nearPointColor);
      this._updatePosition(tooltipModel, positionExpr, x, y, tooltipContent, params, el);
    };
    TooltipView2.prototype._getNearestPoint = function(point, tooltipDataParams, trigger, borderColor) {
      if (trigger === "axis" || isArray(tooltipDataParams)) {
        return {
          color: borderColor || (this._renderMode === "html" ? "#fff" : "none")
        };
      }
      if (!isArray(tooltipDataParams)) {
        return {
          color: borderColor || tooltipDataParams.color || tooltipDataParams.borderColor
        };
      }
    };
    TooltipView2.prototype._updatePosition = function(tooltipModel, positionExpr, x, y, content, params, el) {
      var viewWidth = this._api.getWidth();
      var viewHeight = this._api.getHeight();
      positionExpr = positionExpr || tooltipModel.get("position");
      var contentSize = content.getSize();
      var align = tooltipModel.get("align");
      var vAlign = tooltipModel.get("verticalAlign");
      var rect = el && el.getBoundingRect().clone();
      el && rect.applyTransform(el.transform);
      if (isFunction(positionExpr)) {
        positionExpr = positionExpr([x, y], params, content.el, rect, {
          viewSize: [viewWidth, viewHeight],
          contentSize: contentSize.slice()
        });
      }
      if (isArray(positionExpr)) {
        x = parsePercent2(positionExpr[0], viewWidth);
        y = parsePercent2(positionExpr[1], viewHeight);
      } else if (isObject(positionExpr)) {
        var boxLayoutPosition = positionExpr;
        boxLayoutPosition.width = contentSize[0];
        boxLayoutPosition.height = contentSize[1];
        var layoutRect = getLayoutRect(boxLayoutPosition, {
          width: viewWidth,
          height: viewHeight
        });
        x = layoutRect.x;
        y = layoutRect.y;
        align = null;
        vAlign = null;
      } else if (isString(positionExpr) && el) {
        var pos = calcTooltipPosition(positionExpr, rect, contentSize, tooltipModel.get("borderWidth"));
        x = pos[0];
        y = pos[1];
      } else {
        var pos = refixTooltipPosition(x, y, content, viewWidth, viewHeight, align ? null : 20, vAlign ? null : 20);
        x = pos[0];
        y = pos[1];
      }
      align && (x -= isCenterAlign(align) ? contentSize[0] / 2 : align === "right" ? contentSize[0] : 0);
      vAlign && (y -= isCenterAlign(vAlign) ? contentSize[1] / 2 : vAlign === "bottom" ? contentSize[1] : 0);
      if (shouldTooltipConfine(tooltipModel)) {
        var pos = confineTooltipPosition(x, y, content, viewWidth, viewHeight);
        x = pos[0];
        y = pos[1];
      }
      content.moveTo(x, y);
    };
    TooltipView2.prototype._updateContentNotChangedOnAxis = function(dataByCoordSys, cbParamsList) {
      var lastCoordSys = this._lastDataByCoordSys;
      var lastCbParamsList = this._cbParamsList;
      var contentNotChanged = !!lastCoordSys && lastCoordSys.length === dataByCoordSys.length;
      contentNotChanged && each(lastCoordSys, function(lastItemCoordSys, indexCoordSys) {
        var lastDataByAxis = lastItemCoordSys.dataByAxis || [];
        var thisItemCoordSys = dataByCoordSys[indexCoordSys] || {};
        var thisDataByAxis = thisItemCoordSys.dataByAxis || [];
        contentNotChanged = contentNotChanged && lastDataByAxis.length === thisDataByAxis.length;
        contentNotChanged && each(lastDataByAxis, function(lastItem, indexAxis) {
          var thisItem = thisDataByAxis[indexAxis] || {};
          var lastIndices = lastItem.seriesDataIndices || [];
          var newIndices = thisItem.seriesDataIndices || [];
          contentNotChanged = contentNotChanged && lastItem.value === thisItem.value && lastItem.axisType === thisItem.axisType && lastItem.axisId === thisItem.axisId && lastIndices.length === newIndices.length;
          contentNotChanged && each(lastIndices, function(lastIdxItem, j) {
            var newIdxItem = newIndices[j];
            contentNotChanged = contentNotChanged && lastIdxItem.seriesIndex === newIdxItem.seriesIndex && lastIdxItem.dataIndex === newIdxItem.dataIndex;
          });
          lastCbParamsList && each(lastItem.seriesDataIndices, function(idxItem) {
            var seriesIdx = idxItem.seriesIndex;
            var cbParams = cbParamsList[seriesIdx];
            var lastCbParams = lastCbParamsList[seriesIdx];
            if (cbParams && lastCbParams && lastCbParams.data !== cbParams.data) {
              contentNotChanged = false;
            }
          });
        });
      });
      this._lastDataByCoordSys = dataByCoordSys;
      this._cbParamsList = cbParamsList;
      return !!contentNotChanged;
    };
    TooltipView2.prototype._hide = function(dispatchAction3) {
      this._lastDataByCoordSys = null;
      dispatchAction3({
        type: "hideTip",
        from: this.uid
      });
    };
    TooltipView2.prototype.dispose = function(ecModel, api) {
      if (env_default.node || !api.getDom()) {
        return;
      }
      clear(this, "_updatePosition");
      this._tooltipContent.dispose();
      unregister("itemTooltip", api);
    };
    TooltipView2.type = "tooltip";
    return TooltipView2;
  }(Component_default2)
);
function buildTooltipModel(modelCascade, globalTooltipModel, defaultTooltipOption) {
  var ecModel = globalTooltipModel.ecModel;
  var resultModel;
  if (defaultTooltipOption) {
    resultModel = new Model_default(defaultTooltipOption, ecModel, ecModel);
    resultModel = new Model_default(globalTooltipModel.option, resultModel, ecModel);
  } else {
    resultModel = globalTooltipModel;
  }
  for (var i = modelCascade.length - 1; i >= 0; i--) {
    var tooltipOpt = modelCascade[i];
    if (tooltipOpt) {
      if (tooltipOpt instanceof Model_default) {
        tooltipOpt = tooltipOpt.get("tooltip", true);
      }
      if (isString(tooltipOpt)) {
        tooltipOpt = {
          formatter: tooltipOpt
        };
      }
      if (tooltipOpt) {
        resultModel = new Model_default(tooltipOpt, resultModel, ecModel);
      }
    }
  }
  return resultModel;
}
function makeDispatchAction2(payload, api) {
  return payload.dispatchAction || bind(api.dispatchAction, api);
}
function refixTooltipPosition(x, y, content, viewWidth, viewHeight, gapH, gapV) {
  var size = content.getSize();
  var width = size[0];
  var height = size[1];
  if (gapH != null) {
    if (x + width + gapH + 2 > viewWidth) {
      x -= width + gapH;
    } else {
      x += gapH;
    }
  }
  if (gapV != null) {
    if (y + height + gapV > viewHeight) {
      y -= height + gapV;
    } else {
      y += gapV;
    }
  }
  return [x, y];
}
function confineTooltipPosition(x, y, content, viewWidth, viewHeight) {
  var size = content.getSize();
  var width = size[0];
  var height = size[1];
  x = Math.min(x + width, viewWidth) - width;
  y = Math.min(y + height, viewHeight) - height;
  x = Math.max(x, 0);
  y = Math.max(y, 0);
  return [x, y];
}
function calcTooltipPosition(position, rect, contentSize, borderWidth) {
  var domWidth = contentSize[0];
  var domHeight = contentSize[1];
  var offset = Math.ceil(Math.SQRT2 * borderWidth) + 8;
  var x = 0;
  var y = 0;
  var rectWidth = rect.width;
  var rectHeight = rect.height;
  switch (position) {
    case "inside":
      x = rect.x + rectWidth / 2 - domWidth / 2;
      y = rect.y + rectHeight / 2 - domHeight / 2;
      break;
    case "top":
      x = rect.x + rectWidth / 2 - domWidth / 2;
      y = rect.y - domHeight - offset;
      break;
    case "bottom":
      x = rect.x + rectWidth / 2 - domWidth / 2;
      y = rect.y + rectHeight + offset;
      break;
    case "left":
      x = rect.x - domWidth - offset;
      y = rect.y + rectHeight / 2 - domHeight / 2;
      break;
    case "right":
      x = rect.x + rectWidth + offset;
      y = rect.y + rectHeight / 2 - domHeight / 2;
  }
  return [x, y];
}
function isCenterAlign(align) {
  return align === "center" || align === "middle";
}
function findComponentReference(payload, ecModel, api) {
  var queryOptionMap = preParseFinder(payload).queryOptionMap;
  var componentMainType = queryOptionMap.keys()[0];
  if (!componentMainType || componentMainType === "series") {
    return;
  }
  var queryResult = queryReferringComponents(ecModel, componentMainType, queryOptionMap.get(componentMainType), {
    useDefault: false,
    enableAll: false,
    enableNone: false
  });
  var model = queryResult.models[0];
  if (!model) {
    return;
  }
  var view = api.getViewOfComponentModel(model);
  var el;
  view.group.traverse(function(subEl) {
    var tooltipConfig = getECData(subEl).tooltipConfig;
    if (tooltipConfig && tooltipConfig.name === payload.name) {
      el = subEl;
      return true;
    }
  });
  if (el) {
    return {
      componentMainType,
      componentIndex: model.componentIndex,
      el
    };
  }
}
var TooltipView_default = TooltipView;

// node_modules/echarts/lib/component/tooltip/install.js
init_util();
function install14(registers) {
  use(install6);
  registers.registerComponentModel(TooltipModel_default);
  registers.registerComponentView(TooltipView_default);
  registers.registerAction({
    type: "showTip",
    event: "showTip",
    update: "tooltip:manuallyShowTip"
  }, noop);
  registers.registerAction({
    type: "hideTip",
    event: "hideTip",
    update: "tooltip:manuallyHideTip"
  }, noop);
}

// node_modules/echarts/lib/component/brush/preprocessor.js
init_util();
init_model();
var DEFAULT_TOOLBOX_BTNS = ["rect", "polygon", "keep", "clear"];
function brushPreprocessor(option, isNew) {
  var brushComponents = normalizeToArray(option ? option.brush : []);
  if (!brushComponents.length) {
    return;
  }
  var brushComponentSpecifiedBtns = [];
  each(brushComponents, function(brushOpt) {
    var tbs = brushOpt.hasOwnProperty("toolbox") ? brushOpt.toolbox : [];
    if (tbs instanceof Array) {
      brushComponentSpecifiedBtns = brushComponentSpecifiedBtns.concat(tbs);
    }
  });
  var toolbox = option && option.toolbox;
  if (isArray(toolbox)) {
    toolbox = toolbox[0];
  }
  if (!toolbox) {
    toolbox = {
      feature: {}
    };
    option.toolbox = [toolbox];
  }
  var toolboxFeature = toolbox.feature || (toolbox.feature = {});
  var toolboxBrush = toolboxFeature.brush || (toolboxFeature.brush = {});
  var brushTypes = toolboxBrush.type || (toolboxBrush.type = []);
  brushTypes.push.apply(brushTypes, brushComponentSpecifiedBtns);
  removeDuplicate(brushTypes);
  if (isNew && !brushTypes.length) {
    brushTypes.push.apply(brushTypes, DEFAULT_TOOLBOX_BTNS);
  }
}
function removeDuplicate(arr) {
  var map2 = {};
  each(arr, function(val) {
    map2[val] = 1;
  });
  arr.length = 0;
  each(map2, function(flag, val) {
    arr.push(val);
  });
}

// node_modules/echarts/lib/component/brush/BrushView.js
init_tslib_es6();
init_util();

// node_modules/echarts/lib/component/brush/visualEncoding.js
init_util();
init_BoundingRect();

// node_modules/echarts/lib/visual/visualSolution.js
init_util();
init_helper();
var each6 = each;
function hasKeys(obj) {
  if (obj) {
    for (var name_1 in obj) {
      if (obj.hasOwnProperty(name_1)) {
        return true;
      }
    }
  }
}
function createVisualMappings(option, stateList, supplementVisualOption) {
  var visualMappings = {};
  each6(stateList, function(state) {
    var mappings = visualMappings[state] = createMappings();
    each6(option[state], function(visualData, visualType) {
      if (!VisualMapping_default.isValidType(visualType)) {
        return;
      }
      var mappingOption = {
        type: visualType,
        visual: visualData
      };
      supplementVisualOption && supplementVisualOption(mappingOption, state);
      mappings[visualType] = new VisualMapping_default(mappingOption);
      if (visualType === "opacity") {
        mappingOption = clone(mappingOption);
        mappingOption.type = "colorAlpha";
        mappings.__hidden.__alphaForOpacity = new VisualMapping_default(mappingOption);
      }
    });
  });
  return visualMappings;
  function createMappings() {
    var Creater = function() {
    };
    Creater.prototype.__hidden = Creater.prototype;
    var obj = new Creater();
    return obj;
  }
}
function replaceVisualOption(thisOption, newOption, keys2) {
  var has3;
  each(keys2, function(key) {
    if (newOption.hasOwnProperty(key) && hasKeys(newOption[key])) {
      has3 = true;
    }
  });
  has3 && each(keys2, function(key) {
    if (newOption.hasOwnProperty(key) && hasKeys(newOption[key])) {
      thisOption[key] = clone(newOption[key]);
    } else {
      delete thisOption[key];
    }
  });
}
function applyVisual(stateList, visualMappings, data, getValueState, scope, dimension) {
  var visualTypesMap = {};
  each(stateList, function(state) {
    var visualTypes = VisualMapping_default.prepareVisualTypes(visualMappings[state]);
    visualTypesMap[state] = visualTypes;
  });
  var dataIndex;
  function getVisual(key) {
    return getItemVisualFromData(data, dataIndex, key);
  }
  function setVisual(key, value) {
    setItemVisualFromData(data, dataIndex, key, value);
  }
  if (dimension == null) {
    data.each(eachItem);
  } else {
    data.each([dimension], eachItem);
  }
  function eachItem(valueOrIndex, index) {
    dataIndex = dimension == null ? valueOrIndex : index;
    var rawDataItem = data.getRawDataItem(dataIndex);
    if (rawDataItem && rawDataItem.visualMap === false) {
      return;
    }
    var valueState = getValueState.call(scope, valueOrIndex);
    var mappings = visualMappings[valueState];
    var visualTypes = visualTypesMap[valueState];
    for (var i = 0, len = visualTypes.length; i < len; i++) {
      var type = visualTypes[i];
      mappings[type] && mappings[type].applyVisual(valueOrIndex, getVisual, setVisual);
    }
  }
}
function incrementalApplyVisual(stateList, visualMappings, getValueState, dim) {
  var visualTypesMap = {};
  each(stateList, function(state) {
    var visualTypes = VisualMapping_default.prepareVisualTypes(visualMappings[state]);
    visualTypesMap[state] = visualTypes;
  });
  return {
    progress: function progress(params, data) {
      var dimIndex;
      if (dim != null) {
        dimIndex = data.getDimensionIndex(dim);
      }
      function getVisual(key) {
        return getItemVisualFromData(data, dataIndex, key);
      }
      function setVisual(key, value2) {
        setItemVisualFromData(data, dataIndex, key, value2);
      }
      var dataIndex;
      var store = data.getStore();
      while ((dataIndex = params.next()) != null) {
        var rawDataItem = data.getRawDataItem(dataIndex);
        if (rawDataItem && rawDataItem.visualMap === false) {
          continue;
        }
        var value = dim != null ? store.get(dimIndex, dataIndex) : dataIndex;
        var valueState = getValueState(value);
        var mappings = visualMappings[valueState];
        var visualTypes = visualTypesMap[valueState];
        for (var i = 0, len = visualTypes.length; i < len; i++) {
          var type = visualTypes[i];
          mappings[type] && mappings[type].applyVisual(value, getVisual, setVisual);
        }
      }
    }
  };
}

// node_modules/echarts/lib/component/brush/selector.js
init_polygon();
init_BoundingRect();
init_graphic();
function makeBrushCommonSelectorForSeries(area) {
  var brushType = area.brushType;
  var selectors = {
    point: function(itemLayout) {
      return selector[brushType].point(itemLayout, selectors, area);
    },
    rect: function(itemLayout) {
      return selector[brushType].rect(itemLayout, selectors, area);
    }
  };
  return selectors;
}
var selector = {
  lineX: getLineSelectors(0),
  lineY: getLineSelectors(1),
  rect: {
    point: function(itemLayout, selectors, area) {
      return itemLayout && area.boundingRect.contain(itemLayout[0], itemLayout[1]);
    },
    rect: function(itemLayout, selectors, area) {
      return itemLayout && area.boundingRect.intersect(itemLayout);
    }
  },
  polygon: {
    point: function(itemLayout, selectors, area) {
      return itemLayout && area.boundingRect.contain(itemLayout[0], itemLayout[1]) && contain(area.range, itemLayout[0], itemLayout[1]);
    },
    rect: function(itemLayout, selectors, area) {
      var points = area.range;
      if (!itemLayout || points.length <= 1) {
        return false;
      }
      var x = itemLayout.x;
      var y = itemLayout.y;
      var width = itemLayout.width;
      var height = itemLayout.height;
      var p = points[0];
      if (contain(points, x, y) || contain(points, x + width, y) || contain(points, x, y + height) || contain(points, x + width, y + height) || BoundingRect_default.create(itemLayout).contain(p[0], p[1]) || linePolygonIntersect(x, y, x + width, y, points) || linePolygonIntersect(x, y, x, y + height, points) || linePolygonIntersect(x + width, y, x + width, y + height, points) || linePolygonIntersect(x, y + height, x + width, y + height, points)) {
        return true;
      }
    }
  }
};
function getLineSelectors(xyIndex) {
  var xy = ["x", "y"];
  var wh = ["width", "height"];
  return {
    point: function(itemLayout, selectors, area) {
      if (itemLayout) {
        var range = area.range;
        var p = itemLayout[xyIndex];
        return inLineRange(p, range);
      }
    },
    rect: function(itemLayout, selectors, area) {
      if (itemLayout) {
        var range = area.range;
        var layoutRange = [itemLayout[xy[xyIndex]], itemLayout[xy[xyIndex]] + itemLayout[wh[xyIndex]]];
        layoutRange[1] < layoutRange[0] && layoutRange.reverse();
        return inLineRange(layoutRange[0], range) || inLineRange(layoutRange[1], range) || inLineRange(range[0], layoutRange) || inLineRange(range[1], layoutRange);
      }
    }
  };
}
function inLineRange(p, range) {
  return range[0] <= p && p <= range[1];
}

// node_modules/echarts/lib/component/brush/visualEncoding.js
init_throttle();
var STATE_LIST = ["inBrush", "outOfBrush"];
var DISPATCH_METHOD = "__ecBrushSelect";
var DISPATCH_FLAG = "__ecInBrushSelectEvent";
function layoutCovers(ecModel) {
  ecModel.eachComponent({
    mainType: "brush"
  }, function(brushModel) {
    var brushTargetManager = brushModel.brushTargetManager = new BrushTargetManager_default(brushModel.option, ecModel);
    brushTargetManager.setInputRanges(brushModel.areas, ecModel);
  });
}
function brushVisual(ecModel, api, payload) {
  var brushSelected = [];
  var throttleType;
  var throttleDelay;
  ecModel.eachComponent({
    mainType: "brush"
  }, function(brushModel) {
    payload && payload.type === "takeGlobalCursor" && brushModel.setBrushOption(payload.key === "brush" ? payload.brushOption : {
      brushType: false
    });
  });
  layoutCovers(ecModel);
  ecModel.eachComponent({
    mainType: "brush"
  }, function(brushModel, brushIndex) {
    var thisBrushSelected = {
      brushId: brushModel.id,
      brushIndex,
      brushName: brushModel.name,
      areas: clone(brushModel.areas),
      selected: []
    };
    brushSelected.push(thisBrushSelected);
    var brushOption = brushModel.option;
    var brushLink = brushOption.brushLink;
    var linkedSeriesMap = [];
    var selectedDataIndexForLink = [];
    var rangeInfoBySeries = [];
    var hasBrushExists = false;
    if (!brushIndex) {
      throttleType = brushOption.throttleType;
      throttleDelay = brushOption.throttleDelay;
    }
    var areas = map(brushModel.areas, function(area) {
      var builder = boundingRectBuilders[area.brushType];
      var selectableArea = defaults({
        boundingRect: builder ? builder(area) : void 0
      }, area);
      selectableArea.selectors = makeBrushCommonSelectorForSeries(selectableArea);
      return selectableArea;
    });
    var visualMappings = createVisualMappings(brushModel.option, STATE_LIST, function(mappingOption) {
      mappingOption.mappingMethod = "fixed";
    });
    isArray(brushLink) && each(brushLink, function(seriesIndex) {
      linkedSeriesMap[seriesIndex] = 1;
    });
    function linkOthers(seriesIndex) {
      return brushLink === "all" || !!linkedSeriesMap[seriesIndex];
    }
    function brushed(rangeInfoList) {
      return !!rangeInfoList.length;
    }
    ecModel.eachSeries(function(seriesModel, seriesIndex) {
      var rangeInfoList = rangeInfoBySeries[seriesIndex] = [];
      seriesModel.subType === "parallel" ? stepAParallel(seriesModel, seriesIndex) : stepAOthers(seriesModel, seriesIndex, rangeInfoList);
    });
    function stepAParallel(seriesModel, seriesIndex) {
      var coordSys = seriesModel.coordinateSystem;
      hasBrushExists = hasBrushExists || coordSys.hasAxisBrushed();
      linkOthers(seriesIndex) && coordSys.eachActiveState(seriesModel.getData(), function(activeState, dataIndex) {
        activeState === "active" && (selectedDataIndexForLink[dataIndex] = 1);
      });
    }
    function stepAOthers(seriesModel, seriesIndex, rangeInfoList) {
      if (!seriesModel.brushSelector || brushModelNotControll(brushModel, seriesIndex)) {
        return;
      }
      each(areas, function(area) {
        if (brushModel.brushTargetManager.controlSeries(area, seriesModel, ecModel)) {
          rangeInfoList.push(area);
        }
        hasBrushExists = hasBrushExists || brushed(rangeInfoList);
      });
      if (linkOthers(seriesIndex) && brushed(rangeInfoList)) {
        var data_1 = seriesModel.getData();
        data_1.each(function(dataIndex) {
          if (checkInRange(seriesModel, rangeInfoList, data_1, dataIndex)) {
            selectedDataIndexForLink[dataIndex] = 1;
          }
        });
      }
    }
    ecModel.eachSeries(function(seriesModel, seriesIndex) {
      var seriesBrushSelected = {
        seriesId: seriesModel.id,
        seriesIndex,
        seriesName: seriesModel.name,
        dataIndex: []
      };
      thisBrushSelected.selected.push(seriesBrushSelected);
      var rangeInfoList = rangeInfoBySeries[seriesIndex];
      var data = seriesModel.getData();
      var getValueState = linkOthers(seriesIndex) ? function(dataIndex) {
        return selectedDataIndexForLink[dataIndex] ? (seriesBrushSelected.dataIndex.push(data.getRawIndex(dataIndex)), "inBrush") : "outOfBrush";
      } : function(dataIndex) {
        return checkInRange(seriesModel, rangeInfoList, data, dataIndex) ? (seriesBrushSelected.dataIndex.push(data.getRawIndex(dataIndex)), "inBrush") : "outOfBrush";
      };
      (linkOthers(seriesIndex) ? hasBrushExists : brushed(rangeInfoList)) && applyVisual(STATE_LIST, visualMappings, data, getValueState);
    });
  });
  dispatchAction(api, throttleType, throttleDelay, brushSelected, payload);
}
function dispatchAction(api, throttleType, throttleDelay, brushSelected, payload) {
  if (!payload) {
    return;
  }
  var zr = api.getZr();
  if (zr[DISPATCH_FLAG]) {
    return;
  }
  if (!zr[DISPATCH_METHOD]) {
    zr[DISPATCH_METHOD] = doDispatch;
  }
  var fn = createOrUpdate(zr, DISPATCH_METHOD, throttleDelay, throttleType);
  fn(api, brushSelected);
}
function doDispatch(api, brushSelected) {
  if (!api.isDisposed()) {
    var zr = api.getZr();
    zr[DISPATCH_FLAG] = true;
    api.dispatchAction({
      type: "brushSelect",
      batch: brushSelected
    });
    zr[DISPATCH_FLAG] = false;
  }
}
function checkInRange(seriesModel, rangeInfoList, data, dataIndex) {
  for (var i = 0, len = rangeInfoList.length; i < len; i++) {
    var area = rangeInfoList[i];
    if (seriesModel.brushSelector(dataIndex, data, area.selectors, area)) {
      return true;
    }
  }
}
function brushModelNotControll(brushModel, seriesIndex) {
  var seriesIndices = brushModel.option.seriesIndex;
  return seriesIndices != null && seriesIndices !== "all" && (isArray(seriesIndices) ? indexOf(seriesIndices, seriesIndex) < 0 : seriesIndex !== seriesIndices);
}
var boundingRectBuilders = {
  rect: function(area) {
    return getBoundingRectFromMinMax(area.range);
  },
  polygon: function(area) {
    var minMax;
    var range = area.range;
    for (var i = 0, len = range.length; i < len; i++) {
      minMax = minMax || [[Infinity, -Infinity], [Infinity, -Infinity]];
      var rg = range[i];
      rg[0] < minMax[0][0] && (minMax[0][0] = rg[0]);
      rg[0] > minMax[0][1] && (minMax[0][1] = rg[0]);
      rg[1] < minMax[1][0] && (minMax[1][0] = rg[1]);
      rg[1] > minMax[1][1] && (minMax[1][1] = rg[1]);
    }
    return minMax && getBoundingRectFromMinMax(minMax);
  }
};
function getBoundingRectFromMinMax(minMax) {
  return new BoundingRect_default(minMax[0][0], minMax[1][0], minMax[0][1] - minMax[0][0], minMax[1][1] - minMax[1][0]);
}

// node_modules/echarts/lib/component/brush/BrushView.js
init_Component2();
var BrushView = (
  /** @class */
  function(_super) {
    __extends(BrushView2, _super);
    function BrushView2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.type = BrushView2.type;
      return _this;
    }
    BrushView2.prototype.init = function(ecModel, api) {
      this.ecModel = ecModel;
      this.api = api;
      this.model;
      (this._brushController = new BrushController_default(api.getZr())).on("brush", bind(this._onBrush, this)).mount();
    };
    BrushView2.prototype.render = function(brushModel, ecModel, api, payload) {
      this.model = brushModel;
      this._updateController(brushModel, ecModel, api, payload);
    };
    BrushView2.prototype.updateTransform = function(brushModel, ecModel, api, payload) {
      layoutCovers(ecModel);
      this._updateController(brushModel, ecModel, api, payload);
    };
    BrushView2.prototype.updateVisual = function(brushModel, ecModel, api, payload) {
      this.updateTransform(brushModel, ecModel, api, payload);
    };
    BrushView2.prototype.updateView = function(brushModel, ecModel, api, payload) {
      this._updateController(brushModel, ecModel, api, payload);
    };
    BrushView2.prototype._updateController = function(brushModel, ecModel, api, payload) {
      (!payload || payload.$from !== brushModel.id) && this._brushController.setPanels(brushModel.brushTargetManager.makePanelOpts(api)).enableBrush(brushModel.brushOption).updateCovers(brushModel.areas.slice());
    };
    BrushView2.prototype.dispose = function() {
      this._brushController.dispose();
    };
    BrushView2.prototype._onBrush = function(eventParam) {
      var modelId = this.model.id;
      var areas = this.model.brushTargetManager.setOutputRanges(eventParam.areas, this.ecModel);
      (!eventParam.isEnd || eventParam.removeOnClick) && this.api.dispatchAction({
        type: "brush",
        brushId: modelId,
        areas: clone(areas),
        $from: modelId
      });
      eventParam.isEnd && this.api.dispatchAction({
        type: "brushEnd",
        brushId: modelId,
        areas: clone(areas),
        $from: modelId
      });
    };
    BrushView2.type = "brush";
    return BrushView2;
  }(Component_default2)
);
var BrushView_default = BrushView;

// node_modules/echarts/lib/component/brush/BrushModel.js
init_tslib_es6();
init_util();
init_Model();
init_Component();
var DEFAULT_OUT_OF_BRUSH_COLOR = "#ddd";
var BrushModel = (
  /** @class */
  function(_super) {
    __extends(BrushModel2, _super);
    function BrushModel2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.type = BrushModel2.type;
      _this.areas = [];
      _this.brushOption = {};
      return _this;
    }
    BrushModel2.prototype.optionUpdated = function(newOption, isInit) {
      var thisOption = this.option;
      !isInit && replaceVisualOption(thisOption, newOption, ["inBrush", "outOfBrush"]);
      var inBrush = thisOption.inBrush = thisOption.inBrush || {};
      thisOption.outOfBrush = thisOption.outOfBrush || {
        color: DEFAULT_OUT_OF_BRUSH_COLOR
      };
      if (!inBrush.hasOwnProperty("liftZ")) {
        inBrush.liftZ = 5;
      }
    };
    BrushModel2.prototype.setAreas = function(areas) {
      if (true) {
        assert(isArray(areas));
        each(areas, function(area) {
          assert(area.brushType, "Illegal areas");
        });
      }
      if (!areas) {
        return;
      }
      this.areas = map(areas, function(area) {
        return generateBrushOption(this.option, area);
      }, this);
    };
    BrushModel2.prototype.setBrushOption = function(brushOption) {
      this.brushOption = generateBrushOption(this.option, brushOption);
      this.brushType = this.brushOption.brushType;
    };
    BrushModel2.type = "brush";
    BrushModel2.dependencies = ["geo", "grid", "xAxis", "yAxis", "parallel", "series"];
    BrushModel2.defaultOption = {
      seriesIndex: "all",
      brushType: "rect",
      brushMode: "single",
      transformable: true,
      brushStyle: {
        borderWidth: 1,
        color: "rgba(210,219,238,0.3)",
        borderColor: "#D2DBEE"
      },
      throttleType: "fixRate",
      throttleDelay: 0,
      removeOnClick: true,
      z: 1e4
    };
    return BrushModel2;
  }(Component_default)
);
function generateBrushOption(option, brushOption) {
  return merge({
    brushType: option.brushType,
    brushMode: option.brushMode,
    transformable: option.transformable,
    brushStyle: new Model_default(option.brushStyle).getItemStyle(),
    removeOnClick: option.removeOnClick,
    z: option.z
  }, brushOption, true);
}
var BrushModel_default = BrushModel;

// node_modules/echarts/lib/component/toolbox/feature/Brush.js
init_tslib_es6();
init_util();
var ICON_TYPES = ["rect", "polygon", "lineX", "lineY", "keep", "clear"];
var BrushFeature = (
  /** @class */
  function(_super) {
    __extends(BrushFeature2, _super);
    function BrushFeature2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    BrushFeature2.prototype.render = function(featureModel, ecModel, api) {
      var brushType;
      var brushMode;
      var isBrushed;
      ecModel.eachComponent({
        mainType: "brush"
      }, function(brushModel) {
        brushType = brushModel.brushType;
        brushMode = brushModel.brushOption.brushMode || "single";
        isBrushed = isBrushed || !!brushModel.areas.length;
      });
      this._brushType = brushType;
      this._brushMode = brushMode;
      each(featureModel.get("type", true), function(type) {
        featureModel.setIconStatus(type, (type === "keep" ? brushMode === "multiple" : type === "clear" ? isBrushed : type === brushType) ? "emphasis" : "normal");
      });
    };
    BrushFeature2.prototype.updateView = function(featureModel, ecModel, api) {
      this.render(featureModel, ecModel, api);
    };
    BrushFeature2.prototype.getIcons = function() {
      var model = this.model;
      var availableIcons = model.get("icon", true);
      var icons = {};
      each(model.get("type", true), function(type) {
        if (availableIcons[type]) {
          icons[type] = availableIcons[type];
        }
      });
      return icons;
    };
    ;
    BrushFeature2.prototype.onclick = function(ecModel, api, type) {
      var brushType = this._brushType;
      var brushMode = this._brushMode;
      if (type === "clear") {
        api.dispatchAction({
          type: "axisAreaSelect",
          intervals: []
        });
        api.dispatchAction({
          type: "brush",
          command: "clear",
          // Clear all areas of all brush components.
          areas: []
        });
      } else {
        api.dispatchAction({
          type: "takeGlobalCursor",
          key: "brush",
          brushOption: {
            brushType: type === "keep" ? brushType : brushType === type ? false : type,
            brushMode: type === "keep" ? brushMode === "multiple" ? "single" : "multiple" : brushMode
          }
        });
      }
    };
    ;
    BrushFeature2.getDefaultOption = function(ecModel) {
      var defaultOption2 = {
        show: true,
        type: ICON_TYPES.slice(),
        icon: {
          /* eslint-disable */
          rect: "M7.3,34.7 M0.4,10V-0.2h9.8 M89.6,10V-0.2h-9.8 M0.4,60v10.2h9.8 M89.6,60v10.2h-9.8 M12.3,22.4V10.5h13.1 M33.6,10.5h7.8 M49.1,10.5h7.8 M77.5,22.4V10.5h-13 M12.3,31.1v8.2 M77.7,31.1v8.2 M12.3,47.6v11.9h13.1 M33.6,59.5h7.6 M49.1,59.5 h7.7 M77.5,47.6v11.9h-13",
          polygon: "M55.2,34.9c1.7,0,3.1,1.4,3.1,3.1s-1.4,3.1-3.1,3.1 s-3.1-1.4-3.1-3.1S53.5,34.9,55.2,34.9z M50.4,51c1.7,0,3.1,1.4,3.1,3.1c0,1.7-1.4,3.1-3.1,3.1c-1.7,0-3.1-1.4-3.1-3.1 C47.3,52.4,48.7,51,50.4,51z M55.6,37.1l1.5-7.8 M60.1,13.5l1.6-8.7l-7.8,4 M59,19l-1,5.3 M24,16.1l6.4,4.9l6.4-3.3 M48.5,11.6 l-5.9,3.1 M19.1,12.8L9.7,5.1l1.1,7.7 M13.4,29.8l1,7.3l6.6,1.6 M11.6,18.4l1,6.1 M32.8,41.9 M26.6,40.4 M27.3,40.2l6.1,1.6 M49.9,52.1l-5.6-7.6l-4.9-1.2",
          lineX: "M15.2,30 M19.7,15.6V1.9H29 M34.8,1.9H40.4 M55.3,15.6V1.9H45.9 M19.7,44.4V58.1H29 M34.8,58.1H40.4 M55.3,44.4 V58.1H45.9 M12.5,20.3l-9.4,9.6l9.6,9.8 M3.1,29.9h16.5 M62.5,20.3l9.4,9.6L62.3,39.7 M71.9,29.9H55.4",
          lineY: "M38.8,7.7 M52.7,12h13.2v9 M65.9,26.6V32 M52.7,46.3h13.2v-9 M24.9,12H11.8v9 M11.8,26.6V32 M24.9,46.3H11.8v-9 M48.2,5.1l-9.3-9l-9.4,9.2 M38.9-3.9V12 M48.2,53.3l-9.3,9l-9.4-9.2 M38.9,62.3V46.4",
          keep: "M4,10.5V1h10.3 M20.7,1h6.1 M33,1h6.1 M55.4,10.5V1H45.2 M4,17.3v6.6 M55.6,17.3v6.6 M4,30.5V40h10.3 M20.7,40 h6.1 M33,40h6.1 M55.4,30.5V40H45.2 M21,18.9h62.9v48.6H21V18.9z",
          clear: "M22,14.7l30.9,31 M52.9,14.7L22,45.7 M4.7,16.8V4.2h13.1 M26,4.2h7.8 M41.6,4.2h7.8 M70.3,16.8V4.2H57.2 M4.7,25.9v8.6 M70.3,25.9v8.6 M4.7,43.2v12.6h13.1 M26,55.8h7.8 M41.6,55.8h7.8 M70.3,43.2v12.6H57.2"
          // jshint ignore:line
          /* eslint-enable */
        },
        // `rect`, `polygon`, `lineX`, `lineY`, `keep`, `clear`
        title: ecModel.getLocaleModel().get(["toolbox", "brush", "title"])
      };
      return defaultOption2;
    };
    return BrushFeature2;
  }(ToolboxFeature)
);
var Brush_default = BrushFeature;

// node_modules/echarts/lib/component/brush/install.js
init_util();
function install15(registers) {
  registers.registerComponentView(BrushView_default);
  registers.registerComponentModel(BrushModel_default);
  registers.registerPreprocessor(brushPreprocessor);
  registers.registerVisual(registers.PRIORITY.VISUAL.BRUSH, brushVisual);
  registers.registerAction({
    type: "brush",
    event: "brush",
    update: "updateVisual"
  }, function(payload, ecModel) {
    ecModel.eachComponent({
      mainType: "brush",
      query: payload
    }, function(brushModel) {
      brushModel.setAreas(payload.areas);
    });
  });
  registers.registerAction({
    type: "brushSelect",
    event: "brushSelected",
    update: "none"
  }, noop);
  registers.registerAction({
    type: "brushEnd",
    event: "brushEnd",
    update: "none"
  }, noop);
  registerFeature("brush", Brush_default);
}

// node_modules/echarts/lib/component/title/install.js
init_tslib_es6();
init_util();
init_graphic();
init_innerStore();
init_labelStyle();
init_layout();
init_Component();
init_Component2();
init_format();
var TitleModel = (
  /** @class */
  function(_super) {
    __extends(TitleModel2, _super);
    function TitleModel2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.type = TitleModel2.type;
      _this.layoutMode = {
        type: "box",
        ignoreSize: true
      };
      return _this;
    }
    TitleModel2.type = "title";
    TitleModel2.defaultOption = {
      // zlevel: 0,
      z: 6,
      show: true,
      text: "",
      target: "blank",
      subtext: "",
      subtarget: "blank",
      left: 0,
      top: 0,
      backgroundColor: "rgba(0,0,0,0)",
      borderColor: "#ccc",
      borderWidth: 0,
      padding: 5,
      itemGap: 10,
      textStyle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#464646"
      },
      subtextStyle: {
        fontSize: 12,
        color: "#6E7079"
      }
    };
    return TitleModel2;
  }(Component_default)
);
var TitleView = (
  /** @class */
  function(_super) {
    __extends(TitleView2, _super);
    function TitleView2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.type = TitleView2.type;
      return _this;
    }
    TitleView2.prototype.render = function(titleModel, ecModel, api) {
      this.group.removeAll();
      if (!titleModel.get("show")) {
        return;
      }
      var group = this.group;
      var textStyleModel = titleModel.getModel("textStyle");
      var subtextStyleModel = titleModel.getModel("subtextStyle");
      var textAlign = titleModel.get("textAlign");
      var textVerticalAlign = retrieve2(titleModel.get("textBaseline"), titleModel.get("textVerticalAlign"));
      var textEl = new Text_default({
        style: createTextStyle(textStyleModel, {
          text: titleModel.get("text"),
          fill: textStyleModel.getTextColor()
        }, {
          disableBox: true
        }),
        z2: 10
      });
      var textRect = textEl.getBoundingRect();
      var subText = titleModel.get("subtext");
      var subTextEl = new Text_default({
        style: createTextStyle(subtextStyleModel, {
          text: subText,
          fill: subtextStyleModel.getTextColor(),
          y: textRect.height + titleModel.get("itemGap"),
          verticalAlign: "top"
        }, {
          disableBox: true
        }),
        z2: 10
      });
      var link = titleModel.get("link");
      var sublink = titleModel.get("sublink");
      var triggerEvent = titleModel.get("triggerEvent", true);
      textEl.silent = !link && !triggerEvent;
      subTextEl.silent = !sublink && !triggerEvent;
      if (link) {
        textEl.on("click", function() {
          windowOpen(link, "_" + titleModel.get("target"));
        });
      }
      if (sublink) {
        subTextEl.on("click", function() {
          windowOpen(sublink, "_" + titleModel.get("subtarget"));
        });
      }
      getECData(textEl).eventData = getECData(subTextEl).eventData = triggerEvent ? {
        componentType: "title",
        componentIndex: titleModel.componentIndex
      } : null;
      group.add(textEl);
      subText && group.add(subTextEl);
      var groupRect = group.getBoundingRect();
      var layoutOption = titleModel.getBoxLayoutParams();
      layoutOption.width = groupRect.width;
      layoutOption.height = groupRect.height;
      var layoutRect = getLayoutRect(layoutOption, {
        width: api.getWidth(),
        height: api.getHeight()
      }, titleModel.get("padding"));
      if (!textAlign) {
        textAlign = titleModel.get("left") || titleModel.get("right");
        if (textAlign === "middle") {
          textAlign = "center";
        }
        if (textAlign === "right") {
          layoutRect.x += layoutRect.width;
        } else if (textAlign === "center") {
          layoutRect.x += layoutRect.width / 2;
        }
      }
      if (!textVerticalAlign) {
        textVerticalAlign = titleModel.get("top") || titleModel.get("bottom");
        if (textVerticalAlign === "center") {
          textVerticalAlign = "middle";
        }
        if (textVerticalAlign === "bottom") {
          layoutRect.y += layoutRect.height;
        } else if (textVerticalAlign === "middle") {
          layoutRect.y += layoutRect.height / 2;
        }
        textVerticalAlign = textVerticalAlign || "top";
      }
      group.x = layoutRect.x;
      group.y = layoutRect.y;
      group.markRedraw();
      var alignStyle = {
        align: textAlign,
        verticalAlign: textVerticalAlign
      };
      textEl.setStyle(alignStyle);
      subTextEl.setStyle(alignStyle);
      groupRect = group.getBoundingRect();
      var padding = layoutRect.margin;
      var style = titleModel.getItemStyle(["color", "opacity"]);
      style.fill = titleModel.get("backgroundColor");
      var rect = new Rect_default({
        shape: {
          x: groupRect.x - padding[3],
          y: groupRect.y - padding[0],
          width: groupRect.width + padding[1] + padding[3],
          height: groupRect.height + padding[0] + padding[2],
          r: titleModel.get("borderRadius")
        },
        style,
        subPixelOptimize: true,
        silent: true
      });
      group.add(rect);
    };
    TitleView2.type = "title";
    return TitleView2;
  }(Component_default2)
);
function install16(registers) {
  registers.registerComponentModel(TitleModel);
  registers.registerComponentView(TitleView);
}

// node_modules/echarts/lib/component/timeline/SliderTimelineModel.js
init_tslib_es6();

// node_modules/echarts/lib/component/timeline/TimelineModel.js
init_tslib_es6();
init_Component();
init_SeriesData();
init_util();
init_model();
var TimelineModel = (
  /** @class */
  function(_super) {
    __extends(TimelineModel2, _super);
    function TimelineModel2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.type = TimelineModel2.type;
      _this.layoutMode = "box";
      return _this;
    }
    TimelineModel2.prototype.init = function(option, parentModel, ecModel) {
      this.mergeDefaultAndTheme(option, ecModel);
      this._initData();
    };
    TimelineModel2.prototype.mergeOption = function(option) {
      _super.prototype.mergeOption.apply(this, arguments);
      this._initData();
    };
    TimelineModel2.prototype.setCurrentIndex = function(currentIndex) {
      if (currentIndex == null) {
        currentIndex = this.option.currentIndex;
      }
      var count2 = this._data.count();
      if (this.option.loop) {
        currentIndex = (currentIndex % count2 + count2) % count2;
      } else {
        currentIndex >= count2 && (currentIndex = count2 - 1);
        currentIndex < 0 && (currentIndex = 0);
      }
      this.option.currentIndex = currentIndex;
    };
    TimelineModel2.prototype.getCurrentIndex = function() {
      return this.option.currentIndex;
    };
    TimelineModel2.prototype.isIndexMax = function() {
      return this.getCurrentIndex() >= this._data.count() - 1;
    };
    TimelineModel2.prototype.setPlayState = function(state) {
      this.option.autoPlay = !!state;
    };
    TimelineModel2.prototype.getPlayState = function() {
      return !!this.option.autoPlay;
    };
    TimelineModel2.prototype._initData = function() {
      var thisOption = this.option;
      var dataArr = thisOption.data || [];
      var axisType = thisOption.axisType;
      var names = this._names = [];
      var processedDataArr;
      if (axisType === "category") {
        processedDataArr = [];
        each(dataArr, function(item, index) {
          var value = convertOptionIdName(getDataItemValue(item), "");
          var newItem;
          if (isObject(item)) {
            newItem = clone(item);
            newItem.value = index;
          } else {
            newItem = index;
          }
          processedDataArr.push(newItem);
          names.push(value);
        });
      } else {
        processedDataArr = dataArr;
      }
      var dimType = {
        category: "ordinal",
        time: "time",
        value: "number"
      }[axisType] || "number";
      var data = this._data = new SeriesData_default([{
        name: "value",
        type: dimType
      }], this);
      data.initData(processedDataArr, names);
    };
    TimelineModel2.prototype.getData = function() {
      return this._data;
    };
    TimelineModel2.prototype.getCategories = function() {
      if (this.get("axisType") === "category") {
        return this._names.slice();
      }
    };
    TimelineModel2.type = "timeline";
    TimelineModel2.defaultOption = {
      // zlevel: 0,                  // 一级层叠
      z: 4,
      show: true,
      axisType: "time",
      realtime: true,
      left: "20%",
      top: null,
      right: "20%",
      bottom: 0,
      width: null,
      height: 40,
      padding: 5,
      controlPosition: "left",
      autoPlay: false,
      rewind: false,
      loop: true,
      playInterval: 2e3,
      currentIndex: 0,
      itemStyle: {},
      label: {
        color: "#000"
      },
      data: []
    };
    return TimelineModel2;
  }(Component_default)
);
var TimelineModel_default = TimelineModel;

// node_modules/echarts/lib/component/timeline/SliderTimelineModel.js
init_dataFormat();
init_util();
init_component();
var SliderTimelineModel = (
  /** @class */
  function(_super) {
    __extends(SliderTimelineModel2, _super);
    function SliderTimelineModel2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.type = SliderTimelineModel2.type;
      return _this;
    }
    SliderTimelineModel2.type = "timeline.slider";
    SliderTimelineModel2.defaultOption = inheritDefaultOption(TimelineModel_default.defaultOption, {
      backgroundColor: "rgba(0,0,0,0)",
      borderColor: "#ccc",
      borderWidth: 0,
      orient: "horizontal",
      inverse: false,
      tooltip: {
        trigger: "item"
        // data item may also have tootip attr.
      },
      symbol: "circle",
      symbolSize: 12,
      lineStyle: {
        show: true,
        width: 2,
        color: "#DAE1F5"
      },
      label: {
        position: "auto",
        // When using number, label position is not
        // restricted by viewRect.
        // positive: right/bottom, negative: left/top
        show: true,
        interval: "auto",
        rotate: 0,
        // formatter: null,
        // 其余属性默认使用全局文本样式，详见TEXTSTYLE
        color: "#A4B1D7"
      },
      itemStyle: {
        color: "#A4B1D7",
        borderWidth: 1
      },
      checkpointStyle: {
        symbol: "circle",
        symbolSize: 15,
        color: "#316bf3",
        borderColor: "#fff",
        borderWidth: 2,
        shadowBlur: 2,
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        shadowColor: "rgba(0, 0, 0, 0.3)",
        // borderColor: 'rgba(194,53,49, 0.5)',
        animation: true,
        animationDuration: 300,
        animationEasing: "quinticInOut"
      },
      controlStyle: {
        show: true,
        showPlayBtn: true,
        showPrevBtn: true,
        showNextBtn: true,
        itemSize: 24,
        itemGap: 12,
        position: "left",
        playIcon: "path://M31.6,53C17.5,53,6,41.5,6,27.4S17.5,1.8,31.6,1.8C45.7,1.8,57.2,13.3,57.2,27.4S45.7,53,31.6,53z M31.6,3.3 C18.4,3.3,7.5,14.1,7.5,27.4c0,13.3,10.8,24.1,24.1,24.1C44.9,51.5,55.7,40.7,55.7,27.4C55.7,14.1,44.9,3.3,31.6,3.3z M24.9,21.3 c0-2.2,1.6-3.1,3.5-2l10.5,6.1c1.899,1.1,1.899,2.9,0,4l-10.5,6.1c-1.9,1.1-3.5,0.2-3.5-2V21.3z",
        stopIcon: "path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z",
        // eslint-disable-next-line max-len
        nextIcon: "M2,18.5A1.52,1.52,0,0,1,.92,18a1.49,1.49,0,0,1,0-2.12L7.81,9.36,1,3.11A1.5,1.5,0,1,1,3,.89l8,7.34a1.48,1.48,0,0,1,.49,1.09,1.51,1.51,0,0,1-.46,1.1L3,18.08A1.5,1.5,0,0,1,2,18.5Z",
        // eslint-disable-next-line max-len
        prevIcon: "M10,.5A1.52,1.52,0,0,1,11.08,1a1.49,1.49,0,0,1,0,2.12L4.19,9.64,11,15.89a1.5,1.5,0,1,1-2,2.22L1,10.77A1.48,1.48,0,0,1,.5,9.68,1.51,1.51,0,0,1,1,8.58L9,.92A1.5,1.5,0,0,1,10,.5Z",
        prevBtnSize: 18,
        nextBtnSize: 18,
        color: "#A4B1D7",
        borderColor: "#A4B1D7",
        borderWidth: 1
      },
      emphasis: {
        label: {
          show: true,
          // 其余属性默认使用全局文本样式，详见TEXTSTYLE
          color: "#6f778d"
        },
        itemStyle: {
          color: "#316BF3"
        },
        controlStyle: {
          color: "#316BF3",
          borderColor: "#316BF3",
          borderWidth: 2
        }
      },
      progress: {
        lineStyle: {
          color: "#316BF3"
        },
        itemStyle: {
          color: "#316BF3"
        },
        label: {
          color: "#6f778d"
        }
      },
      data: []
    });
    return SliderTimelineModel2;
  }(TimelineModel_default)
);
mixin(SliderTimelineModel, DataFormatMixin.prototype);
var SliderTimelineModel_default = SliderTimelineModel;

// node_modules/echarts/lib/component/timeline/SliderTimelineView.js
init_tslib_es6();
init_BoundingRect();
init_matrix();
init_graphic();
init_labelStyle();
init_layout();

// node_modules/echarts/lib/component/timeline/TimelineView.js
init_tslib_es6();
init_Component2();
var TimelineView = (
  /** @class */
  function(_super) {
    __extends(TimelineView2, _super);
    function TimelineView2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.type = TimelineView2.type;
      return _this;
    }
    TimelineView2.type = "timeline";
    return TimelineView2;
  }(Component_default2)
);
var TimelineView_default = TimelineView;

// node_modules/echarts/lib/component/timeline/TimelineAxis.js
init_tslib_es6();
init_Axis();
var TimelineAxis = (
  /** @class */
  function(_super) {
    __extends(TimelineAxis2, _super);
    function TimelineAxis2(dim, scale, coordExtent, axisType) {
      var _this = _super.call(this, dim, scale, coordExtent) || this;
      _this.type = axisType || "value";
      return _this;
    }
    TimelineAxis2.prototype.getLabelModel = function() {
      return this.model.getModel("label");
    };
    TimelineAxis2.prototype.isHorizontal = function() {
      return this.model.get("orient") === "horizontal";
    };
    return TimelineAxis2;
  }(Axis_default)
);
var TimelineAxis_default = TimelineAxis;

// node_modules/echarts/lib/component/timeline/SliderTimelineView.js
init_symbol();
init_number();
init_util();
init_Ordinal();
init_Time();
init_Interval();
init_text();
init_model();
init_innerStore();
init_states();
init_tooltipMarkup();
var PI = Math.PI;
var labelDataIndexStore = makeInner();
var SliderTimelineView = (
  /** @class */
  function(_super) {
    __extends(SliderTimelineView2, _super);
    function SliderTimelineView2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.type = SliderTimelineView2.type;
      return _this;
    }
    SliderTimelineView2.prototype.init = function(ecModel, api) {
      this.api = api;
    };
    SliderTimelineView2.prototype.render = function(timelineModel, ecModel, api) {
      this.model = timelineModel;
      this.api = api;
      this.ecModel = ecModel;
      this.group.removeAll();
      if (timelineModel.get("show", true)) {
        var layoutInfo_1 = this._layout(timelineModel, api);
        var mainGroup_1 = this._createGroup("_mainGroup");
        var labelGroup = this._createGroup("_labelGroup");
        var axis_1 = this._axis = this._createAxis(layoutInfo_1, timelineModel);
        timelineModel.formatTooltip = function(dataIndex) {
          var name = axis_1.scale.getLabel({
            value: dataIndex
          });
          return createTooltipMarkup("nameValue", {
            noName: true,
            value: name
          });
        };
        each(["AxisLine", "AxisTick", "Control", "CurrentPointer"], function(name) {
          this["_render" + name](layoutInfo_1, mainGroup_1, axis_1, timelineModel);
        }, this);
        this._renderAxisLabel(layoutInfo_1, labelGroup, axis_1, timelineModel);
        this._position(layoutInfo_1, timelineModel);
      }
      this._doPlayStop();
      this._updateTicksStatus();
    };
    SliderTimelineView2.prototype.remove = function() {
      this._clearTimer();
      this.group.removeAll();
    };
    SliderTimelineView2.prototype.dispose = function() {
      this._clearTimer();
    };
    SliderTimelineView2.prototype._layout = function(timelineModel, api) {
      var labelPosOpt = timelineModel.get(["label", "position"]);
      var orient = timelineModel.get("orient");
      var viewRect = getViewRect(timelineModel, api);
      var parsedLabelPos;
      if (labelPosOpt == null || labelPosOpt === "auto") {
        parsedLabelPos = orient === "horizontal" ? viewRect.y + viewRect.height / 2 < api.getHeight() / 2 ? "-" : "+" : viewRect.x + viewRect.width / 2 < api.getWidth() / 2 ? "+" : "-";
      } else if (isString(labelPosOpt)) {
        parsedLabelPos = {
          horizontal: {
            top: "-",
            bottom: "+"
          },
          vertical: {
            left: "-",
            right: "+"
          }
        }[orient][labelPosOpt];
      } else {
        parsedLabelPos = labelPosOpt;
      }
      var labelAlignMap = {
        horizontal: "center",
        vertical: parsedLabelPos >= 0 || parsedLabelPos === "+" ? "left" : "right"
      };
      var labelBaselineMap = {
        horizontal: parsedLabelPos >= 0 || parsedLabelPos === "+" ? "top" : "bottom",
        vertical: "middle"
      };
      var rotationMap = {
        horizontal: 0,
        vertical: PI / 2
      };
      var mainLength = orient === "vertical" ? viewRect.height : viewRect.width;
      var controlModel = timelineModel.getModel("controlStyle");
      var showControl = controlModel.get("show", true);
      var controlSize = showControl ? controlModel.get("itemSize") : 0;
      var controlGap = showControl ? controlModel.get("itemGap") : 0;
      var sizePlusGap = controlSize + controlGap;
      var labelRotation = timelineModel.get(["label", "rotate"]) || 0;
      labelRotation = labelRotation * PI / 180;
      var playPosition;
      var prevBtnPosition;
      var nextBtnPosition;
      var controlPosition = controlModel.get("position", true);
      var showPlayBtn = showControl && controlModel.get("showPlayBtn", true);
      var showPrevBtn = showControl && controlModel.get("showPrevBtn", true);
      var showNextBtn = showControl && controlModel.get("showNextBtn", true);
      var xLeft = 0;
      var xRight = mainLength;
      if (controlPosition === "left" || controlPosition === "bottom") {
        showPlayBtn && (playPosition = [0, 0], xLeft += sizePlusGap);
        showPrevBtn && (prevBtnPosition = [xLeft, 0], xLeft += sizePlusGap);
        showNextBtn && (nextBtnPosition = [xRight - controlSize, 0], xRight -= sizePlusGap);
      } else {
        showPlayBtn && (playPosition = [xRight - controlSize, 0], xRight -= sizePlusGap);
        showPrevBtn && (prevBtnPosition = [0, 0], xLeft += sizePlusGap);
        showNextBtn && (nextBtnPosition = [xRight - controlSize, 0], xRight -= sizePlusGap);
      }
      var axisExtent = [xLeft, xRight];
      if (timelineModel.get("inverse")) {
        axisExtent.reverse();
      }
      return {
        viewRect,
        mainLength,
        orient,
        rotation: rotationMap[orient],
        labelRotation,
        labelPosOpt: parsedLabelPos,
        labelAlign: timelineModel.get(["label", "align"]) || labelAlignMap[orient],
        labelBaseline: timelineModel.get(["label", "verticalAlign"]) || timelineModel.get(["label", "baseline"]) || labelBaselineMap[orient],
        // Based on mainGroup.
        playPosition,
        prevBtnPosition,
        nextBtnPosition,
        axisExtent,
        controlSize,
        controlGap
      };
    };
    SliderTimelineView2.prototype._position = function(layoutInfo, timelineModel) {
      var mainGroup = this._mainGroup;
      var labelGroup = this._labelGroup;
      var viewRect = layoutInfo.viewRect;
      if (layoutInfo.orient === "vertical") {
        var m = create();
        var rotateOriginX = viewRect.x;
        var rotateOriginY = viewRect.y + viewRect.height;
        translate(m, m, [-rotateOriginX, -rotateOriginY]);
        rotate(m, m, -PI / 2);
        translate(m, m, [rotateOriginX, rotateOriginY]);
        viewRect = viewRect.clone();
        viewRect.applyTransform(m);
      }
      var viewBound = getBound(viewRect);
      var mainBound = getBound(mainGroup.getBoundingRect());
      var labelBound = getBound(labelGroup.getBoundingRect());
      var mainPosition = [mainGroup.x, mainGroup.y];
      var labelsPosition = [labelGroup.x, labelGroup.y];
      labelsPosition[0] = mainPosition[0] = viewBound[0][0];
      var labelPosOpt = layoutInfo.labelPosOpt;
      if (labelPosOpt == null || isString(labelPosOpt)) {
        var mainBoundIdx = labelPosOpt === "+" ? 0 : 1;
        toBound(mainPosition, mainBound, viewBound, 1, mainBoundIdx);
        toBound(labelsPosition, labelBound, viewBound, 1, 1 - mainBoundIdx);
      } else {
        var mainBoundIdx = labelPosOpt >= 0 ? 0 : 1;
        toBound(mainPosition, mainBound, viewBound, 1, mainBoundIdx);
        labelsPosition[1] = mainPosition[1] + labelPosOpt;
      }
      mainGroup.setPosition(mainPosition);
      labelGroup.setPosition(labelsPosition);
      mainGroup.rotation = labelGroup.rotation = layoutInfo.rotation;
      setOrigin(mainGroup);
      setOrigin(labelGroup);
      function setOrigin(targetGroup) {
        targetGroup.originX = viewBound[0][0] - targetGroup.x;
        targetGroup.originY = viewBound[1][0] - targetGroup.y;
      }
      function getBound(rect) {
        return [[rect.x, rect.x + rect.width], [rect.y, rect.y + rect.height]];
      }
      function toBound(fromPos, from, to, dimIdx, boundIdx) {
        fromPos[dimIdx] += to[dimIdx][boundIdx] - from[dimIdx][boundIdx];
      }
    };
    SliderTimelineView2.prototype._createAxis = function(layoutInfo, timelineModel) {
      var data = timelineModel.getData();
      var axisType = timelineModel.get("axisType");
      var scale = createScaleByModel2(timelineModel, axisType);
      scale.getTicks = function() {
        return data.mapArray(["value"], function(value) {
          return {
            value
          };
        });
      };
      var dataExtent = data.getDataExtent("value");
      scale.setExtent(dataExtent[0], dataExtent[1]);
      scale.calcNiceTicks();
      var axis = new TimelineAxis_default("value", scale, layoutInfo.axisExtent, axisType);
      axis.model = timelineModel;
      return axis;
    };
    SliderTimelineView2.prototype._createGroup = function(key) {
      var newGroup = this[key] = new Group_default();
      this.group.add(newGroup);
      return newGroup;
    };
    SliderTimelineView2.prototype._renderAxisLine = function(layoutInfo, group, axis, timelineModel) {
      var axisExtent = axis.getExtent();
      if (!timelineModel.get(["lineStyle", "show"])) {
        return;
      }
      var line = new Line_default({
        shape: {
          x1: axisExtent[0],
          y1: 0,
          x2: axisExtent[1],
          y2: 0
        },
        style: extend({
          lineCap: "round"
        }, timelineModel.getModel("lineStyle").getLineStyle()),
        silent: true,
        z2: 1
      });
      group.add(line);
      var progressLine = this._progressLine = new Line_default({
        shape: {
          x1: axisExtent[0],
          x2: this._currentPointer ? this._currentPointer.x : axisExtent[0],
          y1: 0,
          y2: 0
        },
        style: defaults({
          lineCap: "round",
          lineWidth: line.style.lineWidth
        }, timelineModel.getModel(["progress", "lineStyle"]).getLineStyle()),
        silent: true,
        z2: 1
      });
      group.add(progressLine);
    };
    SliderTimelineView2.prototype._renderAxisTick = function(layoutInfo, group, axis, timelineModel) {
      var _this = this;
      var data = timelineModel.getData();
      var ticks = axis.scale.getTicks();
      this._tickSymbols = [];
      each(ticks, function(tick) {
        var tickCoord = axis.dataToCoord(tick.value);
        var itemModel = data.getItemModel(tick.value);
        var itemStyleModel = itemModel.getModel("itemStyle");
        var hoverStyleModel = itemModel.getModel(["emphasis", "itemStyle"]);
        var progressStyleModel = itemModel.getModel(["progress", "itemStyle"]);
        var symbolOpt = {
          x: tickCoord,
          y: 0,
          onclick: bind(_this._changeTimeline, _this, tick.value)
        };
        var el = giveSymbol(itemModel, itemStyleModel, group, symbolOpt);
        el.ensureState("emphasis").style = hoverStyleModel.getItemStyle();
        el.ensureState("progress").style = progressStyleModel.getItemStyle();
        enableHoverEmphasis(el);
        var ecData = getECData(el);
        if (itemModel.get("tooltip")) {
          ecData.dataIndex = tick.value;
          ecData.dataModel = timelineModel;
        } else {
          ecData.dataIndex = ecData.dataModel = null;
        }
        _this._tickSymbols.push(el);
      });
    };
    SliderTimelineView2.prototype._renderAxisLabel = function(layoutInfo, group, axis, timelineModel) {
      var _this = this;
      var labelModel = axis.getLabelModel();
      if (!labelModel.get("show")) {
        return;
      }
      var data = timelineModel.getData();
      var labels = axis.getViewLabels();
      this._tickLabels = [];
      each(labels, function(labelItem) {
        var dataIndex = labelItem.tickValue;
        var itemModel = data.getItemModel(dataIndex);
        var normalLabelModel = itemModel.getModel("label");
        var hoverLabelModel = itemModel.getModel(["emphasis", "label"]);
        var progressLabelModel = itemModel.getModel(["progress", "label"]);
        var tickCoord = axis.dataToCoord(labelItem.tickValue);
        var textEl = new Text_default({
          x: tickCoord,
          y: 0,
          rotation: layoutInfo.labelRotation - layoutInfo.rotation,
          onclick: bind(_this._changeTimeline, _this, dataIndex),
          silent: false,
          style: createTextStyle(normalLabelModel, {
            text: labelItem.formattedLabel,
            align: layoutInfo.labelAlign,
            verticalAlign: layoutInfo.labelBaseline
          })
        });
        textEl.ensureState("emphasis").style = createTextStyle(hoverLabelModel);
        textEl.ensureState("progress").style = createTextStyle(progressLabelModel);
        group.add(textEl);
        enableHoverEmphasis(textEl);
        labelDataIndexStore(textEl).dataIndex = dataIndex;
        _this._tickLabels.push(textEl);
      });
    };
    SliderTimelineView2.prototype._renderControl = function(layoutInfo, group, axis, timelineModel) {
      var controlSize = layoutInfo.controlSize;
      var rotation = layoutInfo.rotation;
      var itemStyle = timelineModel.getModel("controlStyle").getItemStyle();
      var hoverStyle = timelineModel.getModel(["emphasis", "controlStyle"]).getItemStyle();
      var playState = timelineModel.getPlayState();
      var inverse = timelineModel.get("inverse", true);
      makeBtn(layoutInfo.nextBtnPosition, "next", bind(this._changeTimeline, this, inverse ? "-" : "+"));
      makeBtn(layoutInfo.prevBtnPosition, "prev", bind(this._changeTimeline, this, inverse ? "+" : "-"));
      makeBtn(layoutInfo.playPosition, playState ? "stop" : "play", bind(this._handlePlayClick, this, !playState), true);
      function makeBtn(position, iconName, onclick, willRotate) {
        if (!position) {
          return;
        }
        var iconSize = parsePercent(retrieve2(timelineModel.get(["controlStyle", iconName + "BtnSize"]), controlSize), controlSize);
        var rect = [0, -iconSize / 2, iconSize, iconSize];
        var btn = makeControlIcon(timelineModel, iconName + "Icon", rect, {
          x: position[0],
          y: position[1],
          originX: controlSize / 2,
          originY: 0,
          rotation: willRotate ? -rotation : 0,
          rectHover: true,
          style: itemStyle,
          onclick
        });
        btn.ensureState("emphasis").style = hoverStyle;
        group.add(btn);
        enableHoverEmphasis(btn);
      }
    };
    SliderTimelineView2.prototype._renderCurrentPointer = function(layoutInfo, group, axis, timelineModel) {
      var data = timelineModel.getData();
      var currentIndex = timelineModel.getCurrentIndex();
      var pointerModel = data.getItemModel(currentIndex).getModel("checkpointStyle");
      var me = this;
      var callback = {
        onCreate: function(pointer) {
          pointer.draggable = true;
          pointer.drift = bind(me._handlePointerDrag, me);
          pointer.ondragend = bind(me._handlePointerDragend, me);
          pointerMoveTo(pointer, me._progressLine, currentIndex, axis, timelineModel, true);
        },
        onUpdate: function(pointer) {
          pointerMoveTo(pointer, me._progressLine, currentIndex, axis, timelineModel);
        }
      };
      this._currentPointer = giveSymbol(pointerModel, pointerModel, this._mainGroup, {}, this._currentPointer, callback);
    };
    SliderTimelineView2.prototype._handlePlayClick = function(nextState) {
      this._clearTimer();
      this.api.dispatchAction({
        type: "timelinePlayChange",
        playState: nextState,
        from: this.uid
      });
    };
    SliderTimelineView2.prototype._handlePointerDrag = function(dx, dy, e) {
      this._clearTimer();
      this._pointerChangeTimeline([e.offsetX, e.offsetY]);
    };
    SliderTimelineView2.prototype._handlePointerDragend = function(e) {
      this._pointerChangeTimeline([e.offsetX, e.offsetY], true);
    };
    SliderTimelineView2.prototype._pointerChangeTimeline = function(mousePos, trigger) {
      var toCoord = this._toAxisCoord(mousePos)[0];
      var axis = this._axis;
      var axisExtent = asc(axis.getExtent().slice());
      toCoord > axisExtent[1] && (toCoord = axisExtent[1]);
      toCoord < axisExtent[0] && (toCoord = axisExtent[0]);
      this._currentPointer.x = toCoord;
      this._currentPointer.markRedraw();
      var progressLine = this._progressLine;
      if (progressLine) {
        progressLine.shape.x2 = toCoord;
        progressLine.dirty();
      }
      var targetDataIndex = this._findNearestTick(toCoord);
      var timelineModel = this.model;
      if (trigger || targetDataIndex !== timelineModel.getCurrentIndex() && timelineModel.get("realtime")) {
        this._changeTimeline(targetDataIndex);
      }
    };
    SliderTimelineView2.prototype._doPlayStop = function() {
      var _this = this;
      this._clearTimer();
      if (this.model.getPlayState()) {
        this._timer = setTimeout(function() {
          var timelineModel = _this.model;
          _this._changeTimeline(timelineModel.getCurrentIndex() + (timelineModel.get("rewind", true) ? -1 : 1));
        }, this.model.get("playInterval"));
      }
    };
    SliderTimelineView2.prototype._toAxisCoord = function(vertex) {
      var trans = this._mainGroup.getLocalTransform();
      return applyTransform(vertex, trans, true);
    };
    SliderTimelineView2.prototype._findNearestTick = function(axisCoord) {
      var data = this.model.getData();
      var dist = Infinity;
      var targetDataIndex;
      var axis = this._axis;
      data.each(["value"], function(value, dataIndex) {
        var coord = axis.dataToCoord(value);
        var d = Math.abs(coord - axisCoord);
        if (d < dist) {
          dist = d;
          targetDataIndex = dataIndex;
        }
      });
      return targetDataIndex;
    };
    SliderTimelineView2.prototype._clearTimer = function() {
      if (this._timer) {
        clearTimeout(this._timer);
        this._timer = null;
      }
    };
    SliderTimelineView2.prototype._changeTimeline = function(nextIndex) {
      var currentIndex = this.model.getCurrentIndex();
      if (nextIndex === "+") {
        nextIndex = currentIndex + 1;
      } else if (nextIndex === "-") {
        nextIndex = currentIndex - 1;
      }
      this.api.dispatchAction({
        type: "timelineChange",
        currentIndex: nextIndex,
        from: this.uid
      });
    };
    SliderTimelineView2.prototype._updateTicksStatus = function() {
      var currentIndex = this.model.getCurrentIndex();
      var tickSymbols = this._tickSymbols;
      var tickLabels = this._tickLabels;
      if (tickSymbols) {
        for (var i = 0; i < tickSymbols.length; i++) {
          tickSymbols && tickSymbols[i] && tickSymbols[i].toggleState("progress", i < currentIndex);
        }
      }
      if (tickLabels) {
        for (var i = 0; i < tickLabels.length; i++) {
          tickLabels && tickLabels[i] && tickLabels[i].toggleState("progress", labelDataIndexStore(tickLabels[i]).dataIndex <= currentIndex);
        }
      }
    };
    SliderTimelineView2.type = "timeline.slider";
    return SliderTimelineView2;
  }(TimelineView_default)
);
function createScaleByModel2(model, axisType) {
  axisType = axisType || model.get("type");
  if (axisType) {
    switch (axisType) {
      // Buildin scale
      case "category":
        return new Ordinal_default({
          ordinalMeta: model.getCategories(),
          extent: [Infinity, -Infinity]
        });
      case "time":
        return new Time_default({
          locale: model.ecModel.getLocaleModel(),
          useUTC: model.ecModel.get("useUTC")
        });
      default:
        return new Interval_default();
    }
  }
}
function getViewRect(model, api) {
  return getLayoutRect(model.getBoxLayoutParams(), {
    width: api.getWidth(),
    height: api.getHeight()
  }, model.get("padding"));
}
function makeControlIcon(timelineModel, objPath, rect, opts) {
  var style = opts.style;
  var icon = createIcon(timelineModel.get(["controlStyle", objPath]), opts || {}, new BoundingRect_default(rect[0], rect[1], rect[2], rect[3]));
  if (style) {
    icon.setStyle(style);
  }
  return icon;
}
function giveSymbol(hostModel, itemStyleModel, group, opt, symbol, callback) {
  var color = itemStyleModel.get("color");
  if (!symbol) {
    var symbolType = hostModel.get("symbol");
    symbol = createSymbol(symbolType, -1, -1, 2, 2, color);
    symbol.setStyle("strokeNoScale", true);
    group.add(symbol);
    callback && callback.onCreate(symbol);
  } else {
    symbol.setColor(color);
    group.add(symbol);
    callback && callback.onUpdate(symbol);
  }
  var itemStyle = itemStyleModel.getItemStyle(["color"]);
  symbol.setStyle(itemStyle);
  opt = merge({
    rectHover: true,
    z2: 100
  }, opt, true);
  var symbolSize = normalizeSymbolSize(hostModel.get("symbolSize"));
  opt.scaleX = symbolSize[0] / 2;
  opt.scaleY = symbolSize[1] / 2;
  var symbolOffset = normalizeSymbolOffset(hostModel.get("symbolOffset"), symbolSize);
  if (symbolOffset) {
    opt.x = (opt.x || 0) + symbolOffset[0];
    opt.y = (opt.y || 0) + symbolOffset[1];
  }
  var symbolRotate = hostModel.get("symbolRotate");
  opt.rotation = (symbolRotate || 0) * Math.PI / 180 || 0;
  symbol.attr(opt);
  symbol.updateTransform();
  return symbol;
}
function pointerMoveTo(pointer, progressLine, dataIndex, axis, timelineModel, noAnimation) {
  if (pointer.dragging) {
    return;
  }
  var pointerModel = timelineModel.getModel("checkpointStyle");
  var toCoord = axis.dataToCoord(timelineModel.getData().get("value", dataIndex));
  if (noAnimation || !pointerModel.get("animation", true)) {
    pointer.attr({
      x: toCoord,
      y: 0
    });
    progressLine && progressLine.attr({
      shape: {
        x2: toCoord
      }
    });
  } else {
    var animationCfg = {
      duration: pointerModel.get("animationDuration", true),
      easing: pointerModel.get("animationEasing", true)
    };
    pointer.stopAnimation(null, true);
    pointer.animateTo({
      x: toCoord,
      y: 0
    }, animationCfg);
    progressLine && progressLine.animateTo({
      shape: {
        x2: toCoord
      }
    }, animationCfg);
  }
}
var SliderTimelineView_default = SliderTimelineView;

// node_modules/echarts/lib/component/timeline/timelineAction.js
init_util();
function installTimelineAction(registers) {
  registers.registerAction({
    type: "timelineChange",
    event: "timelineChanged",
    update: "prepareAndUpdate"
  }, function(payload, ecModel, api) {
    var timelineModel = ecModel.getComponent("timeline");
    if (timelineModel && payload.currentIndex != null) {
      timelineModel.setCurrentIndex(payload.currentIndex);
      if (!timelineModel.get("loop", true) && timelineModel.isIndexMax() && timelineModel.getPlayState()) {
        timelineModel.setPlayState(false);
        api.dispatchAction({
          type: "timelinePlayChange",
          playState: false,
          from: payload.from
        });
      }
    }
    ecModel.resetOption("timeline", {
      replaceMerge: timelineModel.get("replaceMerge", true)
    });
    return defaults({
      currentIndex: timelineModel.option.currentIndex
    }, payload);
  });
  registers.registerAction({
    type: "timelinePlayChange",
    event: "timelinePlayChanged",
    update: "update"
  }, function(payload, ecModel) {
    var timelineModel = ecModel.getComponent("timeline");
    if (timelineModel && payload.playState != null) {
      timelineModel.setPlayState(payload.playState);
    }
  });
}

// node_modules/echarts/lib/component/timeline/preprocessor.js
init_util();
function timelinePreprocessor(option) {
  var timelineOpt = option && option.timeline;
  if (!isArray(timelineOpt)) {
    timelineOpt = timelineOpt ? [timelineOpt] : [];
  }
  each(timelineOpt, function(opt) {
    if (!opt) {
      return;
    }
    compatibleEC2(opt);
  });
}
function compatibleEC2(opt) {
  var type = opt.type;
  var ec2Types = {
    "number": "value",
    "time": "time"
  };
  if (ec2Types[type]) {
    opt.axisType = ec2Types[type];
    delete opt.type;
  }
  transferItem(opt);
  if (has(opt, "controlPosition")) {
    var controlStyle = opt.controlStyle || (opt.controlStyle = {});
    if (!has(controlStyle, "position")) {
      controlStyle.position = opt.controlPosition;
    }
    if (controlStyle.position === "none" && !has(controlStyle, "show")) {
      controlStyle.show = false;
      delete controlStyle.position;
    }
    delete opt.controlPosition;
  }
  each(opt.data || [], function(dataItem) {
    if (isObject(dataItem) && !isArray(dataItem)) {
      if (!has(dataItem, "value") && has(dataItem, "name")) {
        dataItem.value = dataItem.name;
      }
      transferItem(dataItem);
    }
  });
}
function transferItem(opt) {
  var itemStyle = opt.itemStyle || (opt.itemStyle = {});
  var itemStyleEmphasis = itemStyle.emphasis || (itemStyle.emphasis = {});
  var label = opt.label || opt.label || {};
  var labelNormal = label.normal || (label.normal = {});
  var excludeLabelAttr = {
    normal: 1,
    emphasis: 1
  };
  each(label, function(value, name) {
    if (!excludeLabelAttr[name] && !has(labelNormal, name)) {
      labelNormal[name] = value;
    }
  });
  if (itemStyleEmphasis.label && !has(label, "emphasis")) {
    label.emphasis = itemStyleEmphasis.label;
    delete itemStyleEmphasis.label;
  }
}
function has(obj, attr) {
  return obj.hasOwnProperty(attr);
}

// node_modules/echarts/lib/component/timeline/install.js
function install17(registers) {
  registers.registerComponentModel(SliderTimelineModel_default);
  registers.registerComponentView(SliderTimelineView_default);
  registers.registerSubTypeDefaulter("timeline", function() {
    return "slider";
  });
  installTimelineAction(registers);
  registers.registerPreprocessor(timelinePreprocessor);
}

// node_modules/echarts/lib/component/marker/checkMarkerInSeries.js
init_util();
function checkMarkerInSeries(seriesOpts, markerType) {
  if (!seriesOpts) {
    return false;
  }
  var seriesOptArr = isArray(seriesOpts) ? seriesOpts : [seriesOpts];
  for (var idx = 0; idx < seriesOptArr.length; idx++) {
    if (seriesOptArr[idx] && seriesOptArr[idx][markerType]) {
      return true;
    }
  }
  return false;
}

// node_modules/echarts/lib/component/marker/MarkPointModel.js
init_tslib_es6();

// node_modules/echarts/lib/component/marker/MarkerModel.js
init_tslib_es6();
init_util();
init_env();
init_dataFormat();
init_Component();
init_model();
init_tooltipMarkup();
function fillLabel(opt) {
  defaultEmphasis(opt, "label", ["show"]);
}
var inner7 = makeInner();
var MarkerModel = (
  /** @class */
  function(_super) {
    __extends(MarkerModel2, _super);
    function MarkerModel2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.type = MarkerModel2.type;
      _this.createdBySelf = false;
      return _this;
    }
    MarkerModel2.prototype.init = function(option, parentModel, ecModel) {
      if (true) {
        if (this.type === "marker") {
          throw new Error("Marker component is abstract component. Use markLine, markPoint, markArea instead.");
        }
      }
      this.mergeDefaultAndTheme(option, ecModel);
      this._mergeOption(option, ecModel, false, true);
    };
    MarkerModel2.prototype.isAnimationEnabled = function() {
      if (env_default.node) {
        return false;
      }
      var hostSeries = this.__hostSeries;
      return this.getShallow("animation") && hostSeries && hostSeries.isAnimationEnabled();
    };
    MarkerModel2.prototype.mergeOption = function(newOpt, ecModel) {
      this._mergeOption(newOpt, ecModel, false, false);
    };
    MarkerModel2.prototype._mergeOption = function(newOpt, ecModel, createdBySelf, isInit) {
      var componentType = this.mainType;
      if (!createdBySelf) {
        ecModel.eachSeries(function(seriesModel) {
          var markerOpt = seriesModel.get(this.mainType, true);
          var markerModel = inner7(seriesModel)[componentType];
          if (!markerOpt || !markerOpt.data) {
            inner7(seriesModel)[componentType] = null;
            return;
          }
          if (!markerModel) {
            if (isInit) {
              fillLabel(markerOpt);
            }
            each(markerOpt.data, function(item) {
              if (item instanceof Array) {
                fillLabel(item[0]);
                fillLabel(item[1]);
              } else {
                fillLabel(item);
              }
            });
            markerModel = this.createMarkerModelFromSeries(markerOpt, this, ecModel);
            extend(markerModel, {
              mainType: this.mainType,
              // Use the same series index and name
              seriesIndex: seriesModel.seriesIndex,
              name: seriesModel.name,
              createdBySelf: true
            });
            markerModel.__hostSeries = seriesModel;
          } else {
            markerModel._mergeOption(markerOpt, ecModel, true);
          }
          inner7(seriesModel)[componentType] = markerModel;
        }, this);
      }
    };
    MarkerModel2.prototype.formatTooltip = function(dataIndex, multipleSeries, dataType) {
      var data = this.getData();
      var value = this.getRawValue(dataIndex);
      var itemName = data.getName(dataIndex);
      return createTooltipMarkup("section", {
        header: this.name,
        blocks: [createTooltipMarkup("nameValue", {
          name: itemName,
          value,
          noName: !itemName,
          noValue: value == null
        })]
      });
    };
    MarkerModel2.prototype.getData = function() {
      return this._data;
    };
    MarkerModel2.prototype.setData = function(data) {
      this._data = data;
    };
    MarkerModel2.prototype.getDataParams = function(dataIndex, dataType) {
      var params = DataFormatMixin.prototype.getDataParams.call(this, dataIndex, dataType);
      var hostSeries = this.__hostSeries;
      if (hostSeries) {
        params.seriesId = hostSeries.id;
        params.seriesName = hostSeries.name;
        params.seriesType = hostSeries.subType;
      }
      return params;
    };
    MarkerModel2.getMarkerModelFromSeries = function(seriesModel, componentType) {
      return inner7(seriesModel)[componentType];
    };
    MarkerModel2.type = "marker";
    MarkerModel2.dependencies = ["series", "grid", "polar", "geo"];
    return MarkerModel2;
  }(Component_default)
);
mixin(MarkerModel, DataFormatMixin.prototype);
var MarkerModel_default = MarkerModel;

// node_modules/echarts/lib/component/marker/MarkPointModel.js
var MarkPointModel = (
  /** @class */
  function(_super) {
    __extends(MarkPointModel2, _super);
    function MarkPointModel2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.type = MarkPointModel2.type;
      return _this;
    }
    MarkPointModel2.prototype.createMarkerModelFromSeries = function(markerOpt, masterMarkerModel, ecModel) {
      return new MarkPointModel2(markerOpt, masterMarkerModel, ecModel);
    };
    MarkPointModel2.type = "markPoint";
    MarkPointModel2.defaultOption = {
      // zlevel: 0,
      z: 5,
      symbol: "pin",
      symbolSize: 50,
      // symbolRotate: 0,
      // symbolOffset: [0, 0]
      tooltip: {
        trigger: "item"
      },
      label: {
        show: true,
        position: "inside"
      },
      itemStyle: {
        borderWidth: 2
      },
      emphasis: {
        label: {
          show: true
        }
      }
    };
    return MarkPointModel2;
  }(MarkerModel_default)
);
var MarkPointModel_default = MarkPointModel;

// node_modules/echarts/lib/component/marker/MarkPointView.js
init_tslib_es6();
init_number();
init_SeriesData();

// node_modules/echarts/lib/component/marker/markerHelper.js
init_number();
init_dataStackHelper();
init_util();
init_dataValueHelper();
function hasXOrY(item) {
  return !(isNaN(parseFloat(item.x)) && isNaN(parseFloat(item.y)));
}
function hasXAndY(item) {
  return !isNaN(parseFloat(item.x)) && !isNaN(parseFloat(item.y));
}
function markerTypeCalculatorWithExtent(markerType, data, otherDataDim, targetDataDim, otherCoordIndex, targetCoordIndex) {
  var coordArr = [];
  var stacked = isDimensionStacked(
    data,
    targetDataDim
    /* , otherDataDim */
  );
  var calcDataDim = stacked ? data.getCalculationInfo("stackResultDimension") : targetDataDim;
  var value = numCalculate(data, calcDataDim, markerType);
  var dataIndex = data.indicesOfNearest(calcDataDim, value)[0];
  coordArr[otherCoordIndex] = data.get(otherDataDim, dataIndex);
  coordArr[targetCoordIndex] = data.get(calcDataDim, dataIndex);
  var coordArrValue = data.get(targetDataDim, dataIndex);
  var precision = getPrecision(data.get(targetDataDim, dataIndex));
  precision = Math.min(precision, 20);
  if (precision >= 0) {
    coordArr[targetCoordIndex] = +coordArr[targetCoordIndex].toFixed(precision);
  }
  return [coordArr, coordArrValue];
}
var markerTypeCalculator = {
  min: curry(markerTypeCalculatorWithExtent, "min"),
  max: curry(markerTypeCalculatorWithExtent, "max"),
  average: curry(markerTypeCalculatorWithExtent, "average"),
  median: curry(markerTypeCalculatorWithExtent, "median")
};
function dataTransform(seriesModel, item) {
  if (!item) {
    return;
  }
  var data = seriesModel.getData();
  var coordSys = seriesModel.coordinateSystem;
  var dims = coordSys && coordSys.dimensions;
  if (!hasXAndY(item) && !isArray(item.coord) && isArray(dims)) {
    var axisInfo = getAxisInfo2(item, data, coordSys, seriesModel);
    item = clone(item);
    if (item.type && markerTypeCalculator[item.type] && axisInfo.baseAxis && axisInfo.valueAxis) {
      var otherCoordIndex = indexOf(dims, axisInfo.baseAxis.dim);
      var targetCoordIndex = indexOf(dims, axisInfo.valueAxis.dim);
      var coordInfo = markerTypeCalculator[item.type](data, axisInfo.baseDataDim, axisInfo.valueDataDim, otherCoordIndex, targetCoordIndex);
      item.coord = coordInfo[0];
      item.value = coordInfo[1];
    } else {
      item.coord = [item.xAxis != null ? item.xAxis : item.radiusAxis, item.yAxis != null ? item.yAxis : item.angleAxis];
    }
  }
  if (item.coord == null || !isArray(dims)) {
    item.coord = [];
  } else {
    var coord = item.coord;
    for (var i = 0; i < 2; i++) {
      if (markerTypeCalculator[coord[i]]) {
        coord[i] = numCalculate(data, data.mapDimension(dims[i]), coord[i]);
      }
    }
  }
  return item;
}
function getAxisInfo2(item, data, coordSys, seriesModel) {
  var ret = {};
  if (item.valueIndex != null || item.valueDim != null) {
    ret.valueDataDim = item.valueIndex != null ? data.getDimension(item.valueIndex) : item.valueDim;
    ret.valueAxis = coordSys.getAxis(dataDimToCoordDim(seriesModel, ret.valueDataDim));
    ret.baseAxis = coordSys.getOtherAxis(ret.valueAxis);
    ret.baseDataDim = data.mapDimension(ret.baseAxis.dim);
  } else {
    ret.baseAxis = seriesModel.getBaseAxis();
    ret.valueAxis = coordSys.getOtherAxis(ret.baseAxis);
    ret.baseDataDim = data.mapDimension(ret.baseAxis.dim);
    ret.valueDataDim = data.mapDimension(ret.valueAxis.dim);
  }
  return ret;
}
function dataDimToCoordDim(seriesModel, dataDim) {
  var dimItem = seriesModel.getData().getDimensionInfo(dataDim);
  return dimItem && dimItem.coordDim;
}
function dataFilter(coordSys, item) {
  return coordSys && coordSys.containData && item.coord && !hasXOrY(item) ? coordSys.containData(item.coord) : true;
}
function zoneFilter(coordSys, item1, item2) {
  return coordSys && coordSys.containZone && item1.coord && item2.coord && !hasXOrY(item1) && !hasXOrY(item2) ? coordSys.containZone(item1.coord, item2.coord) : true;
}
function createMarkerDimValueGetter(inCoordSys, dims) {
  return inCoordSys ? function(item, dimName, dataIndex, dimIndex) {
    var rawVal = dimIndex < 2 ? item.coord && item.coord[dimIndex] : item.value;
    return parseDataValue(rawVal, dims[dimIndex]);
  } : function(item, dimName, dataIndex, dimIndex) {
    return parseDataValue(item.value, dims[dimIndex]);
  };
}
function numCalculate(data, valueDataDim, type) {
  if (type === "average") {
    var sum_1 = 0;
    var count_1 = 0;
    data.each(valueDataDim, function(val, idx) {
      if (!isNaN(val)) {
        sum_1 += val;
        count_1++;
      }
    });
    return sum_1 / count_1;
  } else if (type === "median") {
    return data.getMedian(valueDataDim);
  } else {
    return data.getDataExtent(valueDataDim)[type === "max" ? 1 : 0];
  }
}

// node_modules/echarts/lib/component/marker/MarkerView.js
init_tslib_es6();
init_Component2();
init_util();
init_model();
init_states();
var inner8 = makeInner();
var MarkerView = (
  /** @class */
  function(_super) {
    __extends(MarkerView2, _super);
    function MarkerView2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.type = MarkerView2.type;
      return _this;
    }
    MarkerView2.prototype.init = function() {
      this.markerGroupMap = createHashMap();
    };
    MarkerView2.prototype.render = function(markerModel, ecModel, api) {
      var _this = this;
      var markerGroupMap = this.markerGroupMap;
      markerGroupMap.each(function(item) {
        inner8(item).keep = false;
      });
      ecModel.eachSeries(function(seriesModel) {
        var markerModel2 = MarkerModel_default.getMarkerModelFromSeries(seriesModel, _this.type);
        markerModel2 && _this.renderSeries(seriesModel, markerModel2, ecModel, api);
      });
      markerGroupMap.each(function(item) {
        !inner8(item).keep && _this.group.remove(item.group);
      });
    };
    MarkerView2.prototype.markKeep = function(drawGroup) {
      inner8(drawGroup).keep = true;
    };
    MarkerView2.prototype.toggleBlurSeries = function(seriesModelList, isBlur) {
      var _this = this;
      each(seriesModelList, function(seriesModel) {
        var markerModel = MarkerModel_default.getMarkerModelFromSeries(seriesModel, _this.type);
        if (markerModel) {
          var data = markerModel.getData();
          data.eachItemGraphicEl(function(el) {
            if (el) {
              isBlur ? enterBlur(el) : leaveBlur(el);
            }
          });
        }
      });
    };
    MarkerView2.type = "marker";
    return MarkerView2;
  }(Component_default2)
);
var MarkerView_default = MarkerView;

// node_modules/echarts/lib/component/marker/MarkPointView.js
init_util();
init_innerStore();
init_helper();
function updateMarkerLayout(mpData, seriesModel, api) {
  var coordSys = seriesModel.coordinateSystem;
  mpData.each(function(idx) {
    var itemModel = mpData.getItemModel(idx);
    var point;
    var xPx = parsePercent2(itemModel.get("x"), api.getWidth());
    var yPx = parsePercent2(itemModel.get("y"), api.getHeight());
    if (!isNaN(xPx) && !isNaN(yPx)) {
      point = [xPx, yPx];
    } else if (seriesModel.getMarkerPosition) {
      point = seriesModel.getMarkerPosition(mpData.getValues(mpData.dimensions, idx));
    } else if (coordSys) {
      var x = mpData.get(coordSys.dimensions[0], idx);
      var y = mpData.get(coordSys.dimensions[1], idx);
      point = coordSys.dataToPoint([x, y]);
    }
    if (!isNaN(xPx)) {
      point[0] = xPx;
    }
    if (!isNaN(yPx)) {
      point[1] = yPx;
    }
    mpData.setItemLayout(idx, point);
  });
}
var MarkPointView = (
  /** @class */
  function(_super) {
    __extends(MarkPointView2, _super);
    function MarkPointView2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.type = MarkPointView2.type;
      return _this;
    }
    MarkPointView2.prototype.updateTransform = function(markPointModel, ecModel, api) {
      ecModel.eachSeries(function(seriesModel) {
        var mpModel = MarkerModel_default.getMarkerModelFromSeries(seriesModel, "markPoint");
        if (mpModel) {
          updateMarkerLayout(mpModel.getData(), seriesModel, api);
          this.markerGroupMap.get(seriesModel.id).updateLayout();
        }
      }, this);
    };
    MarkPointView2.prototype.renderSeries = function(seriesModel, mpModel, ecModel, api) {
      var coordSys = seriesModel.coordinateSystem;
      var seriesId = seriesModel.id;
      var seriesData = seriesModel.getData();
      var symbolDrawMap = this.markerGroupMap;
      var symbolDraw = symbolDrawMap.get(seriesId) || symbolDrawMap.set(seriesId, new SymbolDraw_default());
      var mpData = createData(coordSys, seriesModel, mpModel);
      mpModel.setData(mpData);
      updateMarkerLayout(mpModel.getData(), seriesModel, api);
      mpData.each(function(idx) {
        var itemModel = mpData.getItemModel(idx);
        var symbol = itemModel.getShallow("symbol");
        var symbolSize = itemModel.getShallow("symbolSize");
        var symbolRotate = itemModel.getShallow("symbolRotate");
        var symbolOffset = itemModel.getShallow("symbolOffset");
        var symbolKeepAspect = itemModel.getShallow("symbolKeepAspect");
        if (isFunction(symbol) || isFunction(symbolSize) || isFunction(symbolRotate) || isFunction(symbolOffset)) {
          var rawIdx = mpModel.getRawValue(idx);
          var dataParams = mpModel.getDataParams(idx);
          if (isFunction(symbol)) {
            symbol = symbol(rawIdx, dataParams);
          }
          if (isFunction(symbolSize)) {
            symbolSize = symbolSize(rawIdx, dataParams);
          }
          if (isFunction(symbolRotate)) {
            symbolRotate = symbolRotate(rawIdx, dataParams);
          }
          if (isFunction(symbolOffset)) {
            symbolOffset = symbolOffset(rawIdx, dataParams);
          }
        }
        var style = itemModel.getModel("itemStyle").getItemStyle();
        var color = getVisualFromData(seriesData, "color");
        if (!style.fill) {
          style.fill = color;
        }
        mpData.setItemVisual(idx, {
          symbol,
          symbolSize,
          symbolRotate,
          symbolOffset,
          symbolKeepAspect,
          style
        });
      });
      symbolDraw.updateData(mpData);
      this.group.add(symbolDraw.group);
      mpData.eachItemGraphicEl(function(el) {
        el.traverse(function(child) {
          getECData(child).dataModel = mpModel;
        });
      });
      this.markKeep(symbolDraw);
      symbolDraw.group.silent = mpModel.get("silent") || seriesModel.get("silent");
    };
    MarkPointView2.type = "markPoint";
    return MarkPointView2;
  }(MarkerView_default)
);
function createData(coordSys, seriesModel, mpModel) {
  var coordDimsInfos;
  if (coordSys) {
    coordDimsInfos = map(coordSys && coordSys.dimensions, function(coordDim) {
      var info = seriesModel.getData().getDimensionInfo(seriesModel.getData().mapDimension(coordDim)) || {};
      return extend(extend({}, info), {
        name: coordDim,
        // DON'T use ordinalMeta to parse and collect ordinal.
        ordinalMeta: null
      });
    });
  } else {
    coordDimsInfos = [{
      name: "value",
      type: "float"
    }];
  }
  var mpData = new SeriesData_default(coordDimsInfos, mpModel);
  var dataOpt = map(mpModel.get("data"), curry(dataTransform, seriesModel));
  if (coordSys) {
    dataOpt = filter(dataOpt, curry(dataFilter, coordSys));
  }
  var dimValueGetter = createMarkerDimValueGetter(!!coordSys, coordDimsInfos);
  mpData.initData(dataOpt, null, dimValueGetter);
  return mpData;
}
var MarkPointView_default = MarkPointView;

// node_modules/echarts/lib/component/marker/installMarkPoint.js
function install18(registers) {
  registers.registerComponentModel(MarkPointModel_default);
  registers.registerComponentView(MarkPointView_default);
  registers.registerPreprocessor(function(opt) {
    if (checkMarkerInSeries(opt.series, "markPoint")) {
      opt.markPoint = opt.markPoint || {};
    }
  });
}

// node_modules/echarts/lib/component/marker/MarkLineModel.js
init_tslib_es6();
var MarkLineModel = (
  /** @class */
  function(_super) {
    __extends(MarkLineModel2, _super);
    function MarkLineModel2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.type = MarkLineModel2.type;
      return _this;
    }
    MarkLineModel2.prototype.createMarkerModelFromSeries = function(markerOpt, masterMarkerModel, ecModel) {
      return new MarkLineModel2(markerOpt, masterMarkerModel, ecModel);
    };
    MarkLineModel2.type = "markLine";
    MarkLineModel2.defaultOption = {
      // zlevel: 0,
      z: 5,
      symbol: ["circle", "arrow"],
      symbolSize: [8, 16],
      // symbolRotate: 0,
      symbolOffset: 0,
      precision: 2,
      tooltip: {
        trigger: "item"
      },
      label: {
        show: true,
        position: "end",
        distance: 5
      },
      lineStyle: {
        type: "dashed"
      },
      emphasis: {
        label: {
          show: true
        },
        lineStyle: {
          width: 3
        }
      },
      animationEasing: "linear"
    };
    return MarkLineModel2;
  }(MarkerModel_default)
);
var MarkLineModel_default = MarkLineModel;

// node_modules/echarts/lib/component/marker/MarkLineView.js
init_tslib_es6();
init_SeriesData();
init_number();
init_dataStackHelper();
init_innerStore();
init_util();
init_model();
init_helper();
var inner9 = makeInner();
var markLineTransform = function(seriesModel, coordSys, mlModel, item) {
  var data = seriesModel.getData();
  var itemArray;
  if (!isArray(item)) {
    var mlType = item.type;
    if (mlType === "min" || mlType === "max" || mlType === "average" || mlType === "median" || item.xAxis != null || item.yAxis != null) {
      var valueAxis = void 0;
      var value = void 0;
      if (item.yAxis != null || item.xAxis != null) {
        valueAxis = coordSys.getAxis(item.yAxis != null ? "y" : "x");
        value = retrieve(item.yAxis, item.xAxis);
      } else {
        var axisInfo = getAxisInfo2(item, data, coordSys, seriesModel);
        valueAxis = axisInfo.valueAxis;
        var valueDataDim = getStackedDimension(data, axisInfo.valueDataDim);
        value = numCalculate(data, valueDataDim, mlType);
      }
      var valueIndex = valueAxis.dim === "x" ? 0 : 1;
      var baseIndex = 1 - valueIndex;
      var mlFrom = clone(item);
      var mlTo = {
        coord: []
      };
      mlFrom.type = null;
      mlFrom.coord = [];
      mlFrom.coord[baseIndex] = -Infinity;
      mlTo.coord[baseIndex] = Infinity;
      var precision = mlModel.get("precision");
      if (precision >= 0 && isNumber(value)) {
        value = +value.toFixed(Math.min(precision, 20));
      }
      mlFrom.coord[valueIndex] = mlTo.coord[valueIndex] = value;
      itemArray = [mlFrom, mlTo, {
        type: mlType,
        valueIndex: item.valueIndex,
        // Force to use the value of calculated value.
        value
      }];
    } else {
      if (true) {
        logError("Invalid markLine data.");
      }
      itemArray = [];
    }
  } else {
    itemArray = item;
  }
  var normalizedItem = [dataTransform(seriesModel, itemArray[0]), dataTransform(seriesModel, itemArray[1]), extend({}, itemArray[2])];
  normalizedItem[2].type = normalizedItem[2].type || null;
  merge(normalizedItem[2], normalizedItem[0]);
  merge(normalizedItem[2], normalizedItem[1]);
  return normalizedItem;
};
function isInfinity(val) {
  return !isNaN(val) && !isFinite(val);
}
function ifMarkLineHasOnlyDim(dimIndex, fromCoord, toCoord, coordSys) {
  var otherDimIndex = 1 - dimIndex;
  var dimName = coordSys.dimensions[dimIndex];
  return isInfinity(fromCoord[otherDimIndex]) && isInfinity(toCoord[otherDimIndex]) && fromCoord[dimIndex] === toCoord[dimIndex] && coordSys.getAxis(dimName).containData(fromCoord[dimIndex]);
}
function markLineFilter(coordSys, item) {
  if (coordSys.type === "cartesian2d") {
    var fromCoord = item[0].coord;
    var toCoord = item[1].coord;
    if (fromCoord && toCoord && (ifMarkLineHasOnlyDim(1, fromCoord, toCoord, coordSys) || ifMarkLineHasOnlyDim(0, fromCoord, toCoord, coordSys))) {
      return true;
    }
  }
  return dataFilter(coordSys, item[0]) && dataFilter(coordSys, item[1]);
}
function updateSingleMarkerEndLayout(data, idx, isFrom, seriesModel, api) {
  var coordSys = seriesModel.coordinateSystem;
  var itemModel = data.getItemModel(idx);
  var point;
  var xPx = parsePercent2(itemModel.get("x"), api.getWidth());
  var yPx = parsePercent2(itemModel.get("y"), api.getHeight());
  if (!isNaN(xPx) && !isNaN(yPx)) {
    point = [xPx, yPx];
  } else {
    if (seriesModel.getMarkerPosition) {
      point = seriesModel.getMarkerPosition(data.getValues(data.dimensions, idx));
    } else {
      var dims = coordSys.dimensions;
      var x = data.get(dims[0], idx);
      var y = data.get(dims[1], idx);
      point = coordSys.dataToPoint([x, y]);
    }
    if (isCoordinateSystemType(coordSys, "cartesian2d")) {
      var xAxis = coordSys.getAxis("x");
      var yAxis = coordSys.getAxis("y");
      var dims = coordSys.dimensions;
      if (isInfinity(data.get(dims[0], idx))) {
        point[0] = xAxis.toGlobalCoord(xAxis.getExtent()[isFrom ? 0 : 1]);
      } else if (isInfinity(data.get(dims[1], idx))) {
        point[1] = yAxis.toGlobalCoord(yAxis.getExtent()[isFrom ? 0 : 1]);
      }
    }
    if (!isNaN(xPx)) {
      point[0] = xPx;
    }
    if (!isNaN(yPx)) {
      point[1] = yPx;
    }
  }
  data.setItemLayout(idx, point);
}
var MarkLineView = (
  /** @class */
  function(_super) {
    __extends(MarkLineView2, _super);
    function MarkLineView2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.type = MarkLineView2.type;
      return _this;
    }
    MarkLineView2.prototype.updateTransform = function(markLineModel, ecModel, api) {
      ecModel.eachSeries(function(seriesModel) {
        var mlModel = MarkerModel_default.getMarkerModelFromSeries(seriesModel, "markLine");
        if (mlModel) {
          var mlData_1 = mlModel.getData();
          var fromData_1 = inner9(mlModel).from;
          var toData_1 = inner9(mlModel).to;
          fromData_1.each(function(idx) {
            updateSingleMarkerEndLayout(fromData_1, idx, true, seriesModel, api);
            updateSingleMarkerEndLayout(toData_1, idx, false, seriesModel, api);
          });
          mlData_1.each(function(idx) {
            mlData_1.setItemLayout(idx, [fromData_1.getItemLayout(idx), toData_1.getItemLayout(idx)]);
          });
          this.markerGroupMap.get(seriesModel.id).updateLayout();
        }
      }, this);
    };
    MarkLineView2.prototype.renderSeries = function(seriesModel, mlModel, ecModel, api) {
      var coordSys = seriesModel.coordinateSystem;
      var seriesId = seriesModel.id;
      var seriesData = seriesModel.getData();
      var lineDrawMap = this.markerGroupMap;
      var lineDraw = lineDrawMap.get(seriesId) || lineDrawMap.set(seriesId, new LineDraw_default());
      this.group.add(lineDraw.group);
      var mlData = createList(coordSys, seriesModel, mlModel);
      var fromData = mlData.from;
      var toData = mlData.to;
      var lineData = mlData.line;
      inner9(mlModel).from = fromData;
      inner9(mlModel).to = toData;
      mlModel.setData(lineData);
      var symbolType = mlModel.get("symbol");
      var symbolSize = mlModel.get("symbolSize");
      var symbolRotate = mlModel.get("symbolRotate");
      var symbolOffset = mlModel.get("symbolOffset");
      if (!isArray(symbolType)) {
        symbolType = [symbolType, symbolType];
      }
      if (!isArray(symbolSize)) {
        symbolSize = [symbolSize, symbolSize];
      }
      if (!isArray(symbolRotate)) {
        symbolRotate = [symbolRotate, symbolRotate];
      }
      if (!isArray(symbolOffset)) {
        symbolOffset = [symbolOffset, symbolOffset];
      }
      mlData.from.each(function(idx) {
        updateDataVisualAndLayout(fromData, idx, true);
        updateDataVisualAndLayout(toData, idx, false);
      });
      lineData.each(function(idx) {
        var lineStyle = lineData.getItemModel(idx).getModel("lineStyle").getLineStyle();
        lineData.setItemLayout(idx, [fromData.getItemLayout(idx), toData.getItemLayout(idx)]);
        if (lineStyle.stroke == null) {
          lineStyle.stroke = fromData.getItemVisual(idx, "style").fill;
        }
        lineData.setItemVisual(idx, {
          fromSymbolKeepAspect: fromData.getItemVisual(idx, "symbolKeepAspect"),
          fromSymbolOffset: fromData.getItemVisual(idx, "symbolOffset"),
          fromSymbolRotate: fromData.getItemVisual(idx, "symbolRotate"),
          fromSymbolSize: fromData.getItemVisual(idx, "symbolSize"),
          fromSymbol: fromData.getItemVisual(idx, "symbol"),
          toSymbolKeepAspect: toData.getItemVisual(idx, "symbolKeepAspect"),
          toSymbolOffset: toData.getItemVisual(idx, "symbolOffset"),
          toSymbolRotate: toData.getItemVisual(idx, "symbolRotate"),
          toSymbolSize: toData.getItemVisual(idx, "symbolSize"),
          toSymbol: toData.getItemVisual(idx, "symbol"),
          style: lineStyle
        });
      });
      lineDraw.updateData(lineData);
      mlData.line.eachItemGraphicEl(function(el) {
        getECData(el).dataModel = mlModel;
        el.traverse(function(child) {
          getECData(child).dataModel = mlModel;
        });
      });
      function updateDataVisualAndLayout(data, idx, isFrom) {
        var itemModel = data.getItemModel(idx);
        updateSingleMarkerEndLayout(data, idx, isFrom, seriesModel, api);
        var style = itemModel.getModel("itemStyle").getItemStyle();
        if (style.fill == null) {
          style.fill = getVisualFromData(seriesData, "color");
        }
        data.setItemVisual(idx, {
          symbolKeepAspect: itemModel.get("symbolKeepAspect"),
          // `0` should be considered as a valid value, so use `retrieve2` instead of `||`
          symbolOffset: retrieve2(itemModel.get("symbolOffset", true), symbolOffset[isFrom ? 0 : 1]),
          symbolRotate: retrieve2(itemModel.get("symbolRotate", true), symbolRotate[isFrom ? 0 : 1]),
          // TODO: when 2d array is supported, it should ignore parent
          symbolSize: retrieve2(itemModel.get("symbolSize"), symbolSize[isFrom ? 0 : 1]),
          symbol: retrieve2(itemModel.get("symbol", true), symbolType[isFrom ? 0 : 1]),
          style
        });
      }
      this.markKeep(lineDraw);
      lineDraw.group.silent = mlModel.get("silent") || seriesModel.get("silent");
    };
    MarkLineView2.type = "markLine";
    return MarkLineView2;
  }(MarkerView_default)
);
function createList(coordSys, seriesModel, mlModel) {
  var coordDimsInfos;
  if (coordSys) {
    coordDimsInfos = map(coordSys && coordSys.dimensions, function(coordDim) {
      var info = seriesModel.getData().getDimensionInfo(seriesModel.getData().mapDimension(coordDim)) || {};
      return extend(extend({}, info), {
        name: coordDim,
        // DON'T use ordinalMeta to parse and collect ordinal.
        ordinalMeta: null
      });
    });
  } else {
    coordDimsInfos = [{
      name: "value",
      type: "float"
    }];
  }
  var fromData = new SeriesData_default(coordDimsInfos, mlModel);
  var toData = new SeriesData_default(coordDimsInfos, mlModel);
  var lineData = new SeriesData_default([], mlModel);
  var optData = map(mlModel.get("data"), curry(markLineTransform, seriesModel, coordSys, mlModel));
  if (coordSys) {
    optData = filter(optData, curry(markLineFilter, coordSys));
  }
  var dimValueGetter = createMarkerDimValueGetter(!!coordSys, coordDimsInfos);
  fromData.initData(map(optData, function(item) {
    return item[0];
  }), null, dimValueGetter);
  toData.initData(map(optData, function(item) {
    return item[1];
  }), null, dimValueGetter);
  lineData.initData(map(optData, function(item) {
    return item[2];
  }));
  lineData.hasItemOption = true;
  return {
    from: fromData,
    to: toData,
    line: lineData
  };
}
var MarkLineView_default = MarkLineView;

// node_modules/echarts/lib/component/marker/installMarkLine.js
function install19(registers) {
  registers.registerComponentModel(MarkLineModel_default);
  registers.registerComponentView(MarkLineView_default);
  registers.registerPreprocessor(function(opt) {
    if (checkMarkerInSeries(opt.series, "markLine")) {
      opt.markLine = opt.markLine || {};
    }
  });
}

// node_modules/echarts/lib/component/marker/MarkAreaModel.js
init_tslib_es6();
var MarkAreaModel = (
  /** @class */
  function(_super) {
    __extends(MarkAreaModel2, _super);
    function MarkAreaModel2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.type = MarkAreaModel2.type;
      return _this;
    }
    MarkAreaModel2.prototype.createMarkerModelFromSeries = function(markerOpt, masterMarkerModel, ecModel) {
      return new MarkAreaModel2(markerOpt, masterMarkerModel, ecModel);
    };
    MarkAreaModel2.type = "markArea";
    MarkAreaModel2.defaultOption = {
      // zlevel: 0,
      // PENDING
      z: 1,
      tooltip: {
        trigger: "item"
      },
      // markArea should fixed on the coordinate system
      animation: false,
      label: {
        show: true,
        position: "top"
      },
      itemStyle: {
        // color and borderColor default to use color from series
        // color: 'auto'
        // borderColor: 'auto'
        borderWidth: 0
      },
      emphasis: {
        label: {
          show: true,
          position: "top"
        }
      }
    };
    return MarkAreaModel2;
  }(MarkerModel_default)
);
var MarkAreaModel_default = MarkAreaModel;

// node_modules/echarts/lib/component/marker/MarkAreaView.js
init_tslib_es6();
init_color();
init_SeriesData();
init_number();
init_graphic();
init_states();
init_util();
init_model();
init_helper();
init_labelStyle();
init_innerStore();
init_dataValueHelper();
var inner10 = makeInner();
var markAreaTransform = function(seriesModel, coordSys, maModel, item) {
  var item0 = item[0];
  var item1 = item[1];
  if (!item0 || !item1) {
    return;
  }
  var lt = dataTransform(seriesModel, item0);
  var rb = dataTransform(seriesModel, item1);
  var ltCoord = lt.coord;
  var rbCoord = rb.coord;
  ltCoord[0] = retrieve(ltCoord[0], -Infinity);
  ltCoord[1] = retrieve(ltCoord[1], -Infinity);
  rbCoord[0] = retrieve(rbCoord[0], Infinity);
  rbCoord[1] = retrieve(rbCoord[1], Infinity);
  var result = mergeAll([{}, lt, rb]);
  result.coord = [lt.coord, rb.coord];
  result.x0 = lt.x;
  result.y0 = lt.y;
  result.x1 = rb.x;
  result.y1 = rb.y;
  return result;
};
function isInfinity2(val) {
  return !isNaN(val) && !isFinite(val);
}
function ifMarkAreaHasOnlyDim(dimIndex, fromCoord, toCoord, coordSys) {
  var otherDimIndex = 1 - dimIndex;
  return isInfinity2(fromCoord[otherDimIndex]) && isInfinity2(toCoord[otherDimIndex]);
}
function markAreaFilter(coordSys, item) {
  var fromCoord = item.coord[0];
  var toCoord = item.coord[1];
  var item0 = {
    coord: fromCoord,
    x: item.x0,
    y: item.y0
  };
  var item1 = {
    coord: toCoord,
    x: item.x1,
    y: item.y1
  };
  if (isCoordinateSystemType(coordSys, "cartesian2d")) {
    if (fromCoord && toCoord && (ifMarkAreaHasOnlyDim(1, fromCoord, toCoord, coordSys) || ifMarkAreaHasOnlyDim(0, fromCoord, toCoord, coordSys))) {
      return true;
    }
    return zoneFilter(coordSys, item0, item1);
  }
  return dataFilter(coordSys, item0) || dataFilter(coordSys, item1);
}
function getSingleMarkerEndPoint(data, idx, dims, seriesModel, api) {
  var coordSys = seriesModel.coordinateSystem;
  var itemModel = data.getItemModel(idx);
  var point;
  var xPx = parsePercent2(itemModel.get(dims[0]), api.getWidth());
  var yPx = parsePercent2(itemModel.get(dims[1]), api.getHeight());
  if (!isNaN(xPx) && !isNaN(yPx)) {
    point = [xPx, yPx];
  } else {
    if (seriesModel.getMarkerPosition) {
      var pointValue0 = data.getValues(["x0", "y0"], idx);
      var pointValue1 = data.getValues(["x1", "y1"], idx);
      var clampPointValue0 = coordSys.clampData(pointValue0);
      var clampPointValue1 = coordSys.clampData(pointValue1);
      var pointValue = [];
      if (dims[0] === "x0") {
        pointValue[0] = clampPointValue0[0] > clampPointValue1[0] ? pointValue1[0] : pointValue0[0];
      } else {
        pointValue[0] = clampPointValue0[0] > clampPointValue1[0] ? pointValue0[0] : pointValue1[0];
      }
      if (dims[1] === "y0") {
        pointValue[1] = clampPointValue0[1] > clampPointValue1[1] ? pointValue1[1] : pointValue0[1];
      } else {
        pointValue[1] = clampPointValue0[1] > clampPointValue1[1] ? pointValue0[1] : pointValue1[1];
      }
      point = seriesModel.getMarkerPosition(pointValue, dims, true);
    } else {
      var x = data.get(dims[0], idx);
      var y = data.get(dims[1], idx);
      var pt = [x, y];
      coordSys.clampData && coordSys.clampData(pt, pt);
      point = coordSys.dataToPoint(pt, true);
    }
    if (isCoordinateSystemType(coordSys, "cartesian2d")) {
      var xAxis = coordSys.getAxis("x");
      var yAxis = coordSys.getAxis("y");
      var x = data.get(dims[0], idx);
      var y = data.get(dims[1], idx);
      if (isInfinity2(x)) {
        point[0] = xAxis.toGlobalCoord(xAxis.getExtent()[dims[0] === "x0" ? 0 : 1]);
      } else if (isInfinity2(y)) {
        point[1] = yAxis.toGlobalCoord(yAxis.getExtent()[dims[1] === "y0" ? 0 : 1]);
      }
    }
    if (!isNaN(xPx)) {
      point[0] = xPx;
    }
    if (!isNaN(yPx)) {
      point[1] = yPx;
    }
  }
  return point;
}
var dimPermutations = [["x0", "y0"], ["x1", "y0"], ["x1", "y1"], ["x0", "y1"]];
var MarkAreaView = (
  /** @class */
  function(_super) {
    __extends(MarkAreaView2, _super);
    function MarkAreaView2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.type = MarkAreaView2.type;
      return _this;
    }
    MarkAreaView2.prototype.updateTransform = function(markAreaModel, ecModel, api) {
      ecModel.eachSeries(function(seriesModel) {
        var maModel = MarkerModel_default.getMarkerModelFromSeries(seriesModel, "markArea");
        if (maModel) {
          var areaData_1 = maModel.getData();
          areaData_1.each(function(idx) {
            var points = map(dimPermutations, function(dim) {
              return getSingleMarkerEndPoint(areaData_1, idx, dim, seriesModel, api);
            });
            areaData_1.setItemLayout(idx, points);
            var el = areaData_1.getItemGraphicEl(idx);
            el.setShape("points", points);
          });
        }
      }, this);
    };
    MarkAreaView2.prototype.renderSeries = function(seriesModel, maModel, ecModel, api) {
      var coordSys = seriesModel.coordinateSystem;
      var seriesId = seriesModel.id;
      var seriesData = seriesModel.getData();
      var areaGroupMap = this.markerGroupMap;
      var polygonGroup = areaGroupMap.get(seriesId) || areaGroupMap.set(seriesId, {
        group: new Group_default()
      });
      this.group.add(polygonGroup.group);
      this.markKeep(polygonGroup);
      var areaData = createList2(coordSys, seriesModel, maModel);
      maModel.setData(areaData);
      areaData.each(function(idx) {
        var points = map(dimPermutations, function(dim) {
          return getSingleMarkerEndPoint(areaData, idx, dim, seriesModel, api);
        });
        var xAxisScale = coordSys.getAxis("x").scale;
        var yAxisScale = coordSys.getAxis("y").scale;
        var xAxisExtent = xAxisScale.getExtent();
        var yAxisExtent = yAxisScale.getExtent();
        var xPointExtent = [xAxisScale.parse(areaData.get("x0", idx)), xAxisScale.parse(areaData.get("x1", idx))];
        var yPointExtent = [yAxisScale.parse(areaData.get("y0", idx)), yAxisScale.parse(areaData.get("y1", idx))];
        asc(xPointExtent);
        asc(yPointExtent);
        var overlapped = !(xAxisExtent[0] > xPointExtent[1] || xAxisExtent[1] < xPointExtent[0] || yAxisExtent[0] > yPointExtent[1] || yAxisExtent[1] < yPointExtent[0]);
        var allClipped = !overlapped;
        areaData.setItemLayout(idx, {
          points,
          allClipped
        });
        var style = areaData.getItemModel(idx).getModel("itemStyle").getItemStyle();
        var color = getVisualFromData(seriesData, "color");
        if (!style.fill) {
          style.fill = color;
          if (isString(style.fill)) {
            style.fill = modifyAlpha(style.fill, 0.4);
          }
        }
        if (!style.stroke) {
          style.stroke = color;
        }
        areaData.setItemVisual(idx, "style", style);
      });
      areaData.diff(inner10(polygonGroup).data).add(function(idx) {
        var layout4 = areaData.getItemLayout(idx);
        if (!layout4.allClipped) {
          var polygon = new Polygon_default({
            shape: {
              points: layout4.points
            }
          });
          areaData.setItemGraphicEl(idx, polygon);
          polygonGroup.group.add(polygon);
        }
      }).update(function(newIdx, oldIdx) {
        var polygon = inner10(polygonGroup).data.getItemGraphicEl(oldIdx);
        var layout4 = areaData.getItemLayout(newIdx);
        if (!layout4.allClipped) {
          if (polygon) {
            updateProps(polygon, {
              shape: {
                points: layout4.points
              }
            }, maModel, newIdx);
          } else {
            polygon = new Polygon_default({
              shape: {
                points: layout4.points
              }
            });
          }
          areaData.setItemGraphicEl(newIdx, polygon);
          polygonGroup.group.add(polygon);
        } else if (polygon) {
          polygonGroup.group.remove(polygon);
        }
      }).remove(function(idx) {
        var polygon = inner10(polygonGroup).data.getItemGraphicEl(idx);
        polygonGroup.group.remove(polygon);
      }).execute();
      areaData.eachItemGraphicEl(function(polygon, idx) {
        var itemModel = areaData.getItemModel(idx);
        var style = areaData.getItemVisual(idx, "style");
        polygon.useStyle(areaData.getItemVisual(idx, "style"));
        setLabelStyle(polygon, getLabelStatesModels(itemModel), {
          labelFetcher: maModel,
          labelDataIndex: idx,
          defaultText: areaData.getName(idx) || "",
          inheritColor: isString(style.fill) ? modifyAlpha(style.fill, 1) : "#000"
        });
        setStatesStylesFromModel(polygon, itemModel);
        toggleHoverEmphasis(polygon, null, null, itemModel.get(["emphasis", "disabled"]));
        getECData(polygon).dataModel = maModel;
      });
      inner10(polygonGroup).data = areaData;
      polygonGroup.group.silent = maModel.get("silent") || seriesModel.get("silent");
    };
    MarkAreaView2.type = "markArea";
    return MarkAreaView2;
  }(MarkerView_default)
);
function createList2(coordSys, seriesModel, maModel) {
  var areaData;
  var dataDims;
  var dims = ["x0", "y0", "x1", "y1"];
  if (coordSys) {
    var coordDimsInfos_1 = map(coordSys && coordSys.dimensions, function(coordDim) {
      var data = seriesModel.getData();
      var info = data.getDimensionInfo(data.mapDimension(coordDim)) || {};
      return extend(extend({}, info), {
        name: coordDim,
        // DON'T use ordinalMeta to parse and collect ordinal.
        ordinalMeta: null
      });
    });
    dataDims = map(dims, function(dim, idx) {
      return {
        name: dim,
        type: coordDimsInfos_1[idx % 2].type
      };
    });
    areaData = new SeriesData_default(dataDims, maModel);
  } else {
    dataDims = [{
      name: "value",
      type: "float"
    }];
    areaData = new SeriesData_default(dataDims, maModel);
  }
  var optData = map(maModel.get("data"), curry(markAreaTransform, seriesModel, coordSys, maModel));
  if (coordSys) {
    optData = filter(optData, curry(markAreaFilter, coordSys));
  }
  var dimValueGetter = coordSys ? function(item, dimName, dataIndex, dimIndex) {
    var rawVal = item.coord[Math.floor(dimIndex / 2)][dimIndex % 2];
    return parseDataValue(rawVal, dataDims[dimIndex]);
  } : function(item, dimName, dataIndex, dimIndex) {
    return parseDataValue(item.value, dataDims[dimIndex]);
  };
  areaData.initData(optData, null, dimValueGetter);
  areaData.hasItemOption = true;
  return areaData;
}
var MarkAreaView_default = MarkAreaView;

// node_modules/echarts/lib/component/marker/installMarkArea.js
function install20(registers) {
  registers.registerComponentModel(MarkAreaModel_default);
  registers.registerComponentView(MarkAreaView_default);
  registers.registerPreprocessor(function(opt) {
    if (checkMarkerInSeries(opt.series, "markArea")) {
      opt.markArea = opt.markArea || {};
    }
  });
}

// node_modules/echarts/lib/component/legend/install.js
init_extension();

// node_modules/echarts/lib/component/legend/LegendModel.js
init_tslib_es6();
init_util();
init_Model();
init_model();
init_Component();
var getDefaultSelectorOptions = function(ecModel, type) {
  if (type === "all") {
    return {
      type: "all",
      title: ecModel.getLocaleModel().get(["legend", "selector", "all"])
    };
  } else if (type === "inverse") {
    return {
      type: "inverse",
      title: ecModel.getLocaleModel().get(["legend", "selector", "inverse"])
    };
  }
};
var LegendModel = (
  /** @class */
  function(_super) {
    __extends(LegendModel2, _super);
    function LegendModel2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.type = LegendModel2.type;
      _this.layoutMode = {
        type: "box",
        // legend.width/height are maxWidth/maxHeight actually,
        // whereas real width/height is calculated by its content.
        // (Setting {left: 10, right: 10} does not make sense).
        // So consider the case:
        // `setOption({legend: {left: 10});`
        // then `setOption({legend: {right: 10});`
        // The previous `left` should be cleared by setting `ignoreSize`.
        ignoreSize: true
      };
      return _this;
    }
    LegendModel2.prototype.init = function(option, parentModel, ecModel) {
      this.mergeDefaultAndTheme(option, ecModel);
      option.selected = option.selected || {};
      this._updateSelector(option);
    };
    LegendModel2.prototype.mergeOption = function(option, ecModel) {
      _super.prototype.mergeOption.call(this, option, ecModel);
      this._updateSelector(option);
    };
    LegendModel2.prototype._updateSelector = function(option) {
      var selector2 = option.selector;
      var ecModel = this.ecModel;
      if (selector2 === true) {
        selector2 = option.selector = ["all", "inverse"];
      }
      if (isArray(selector2)) {
        each(selector2, function(item, index) {
          isString(item) && (item = {
            type: item
          });
          selector2[index] = merge(item, getDefaultSelectorOptions(ecModel, item.type));
        });
      }
    };
    LegendModel2.prototype.optionUpdated = function() {
      this._updateData(this.ecModel);
      var legendData = this._data;
      if (legendData[0] && this.get("selectedMode") === "single") {
        var hasSelected = false;
        for (var i = 0; i < legendData.length; i++) {
          var name_1 = legendData[i].get("name");
          if (this.isSelected(name_1)) {
            this.select(name_1);
            hasSelected = true;
            break;
          }
        }
        !hasSelected && this.select(legendData[0].get("name"));
      }
    };
    LegendModel2.prototype._updateData = function(ecModel) {
      var potentialData = [];
      var availableNames = [];
      ecModel.eachRawSeries(function(seriesModel) {
        var seriesName = seriesModel.name;
        availableNames.push(seriesName);
        var isPotential;
        if (seriesModel.legendVisualProvider) {
          var provider = seriesModel.legendVisualProvider;
          var names = provider.getAllNames();
          if (!ecModel.isSeriesFiltered(seriesModel)) {
            availableNames = availableNames.concat(names);
          }
          if (names.length) {
            potentialData = potentialData.concat(names);
          } else {
            isPotential = true;
          }
        } else {
          isPotential = true;
        }
        if (isPotential && isNameSpecified(seriesModel)) {
          potentialData.push(seriesModel.name);
        }
      });
      this._availableNames = availableNames;
      var rawData = this.get("data") || potentialData;
      var legendNameMap = createHashMap();
      var legendData = map(rawData, function(dataItem) {
        if (isString(dataItem) || isNumber(dataItem)) {
          dataItem = {
            name: dataItem
          };
        }
        if (legendNameMap.get(dataItem.name)) {
          return null;
        }
        legendNameMap.set(dataItem.name, true);
        return new Model_default(dataItem, this, this.ecModel);
      }, this);
      this._data = filter(legendData, function(item) {
        return !!item;
      });
    };
    LegendModel2.prototype.getData = function() {
      return this._data;
    };
    LegendModel2.prototype.select = function(name) {
      var selected = this.option.selected;
      var selectedMode = this.get("selectedMode");
      if (selectedMode === "single") {
        var data = this._data;
        each(data, function(dataItem) {
          selected[dataItem.get("name")] = false;
        });
      }
      selected[name] = true;
    };
    LegendModel2.prototype.unSelect = function(name) {
      if (this.get("selectedMode") !== "single") {
        this.option.selected[name] = false;
      }
    };
    LegendModel2.prototype.toggleSelected = function(name) {
      var selected = this.option.selected;
      if (!selected.hasOwnProperty(name)) {
        selected[name] = true;
      }
      this[selected[name] ? "unSelect" : "select"](name);
    };
    LegendModel2.prototype.allSelect = function() {
      var data = this._data;
      var selected = this.option.selected;
      each(data, function(dataItem) {
        selected[dataItem.get("name", true)] = true;
      });
    };
    LegendModel2.prototype.inverseSelect = function() {
      var data = this._data;
      var selected = this.option.selected;
      each(data, function(dataItem) {
        var name = dataItem.get("name", true);
        if (!selected.hasOwnProperty(name)) {
          selected[name] = true;
        }
        selected[name] = !selected[name];
      });
    };
    LegendModel2.prototype.isSelected = function(name) {
      var selected = this.option.selected;
      return !(selected.hasOwnProperty(name) && !selected[name]) && indexOf(this._availableNames, name) >= 0;
    };
    LegendModel2.prototype.getOrient = function() {
      return this.get("orient") === "vertical" ? {
        index: 1,
        name: "vertical"
      } : {
        index: 0,
        name: "horizontal"
      };
    };
    LegendModel2.type = "legend.plain";
    LegendModel2.dependencies = ["series"];
    LegendModel2.defaultOption = {
      // zlevel: 0,
      z: 4,
      show: true,
      orient: "horizontal",
      left: "center",
      // right: 'center',
      top: 0,
      // bottom: null,
      align: "auto",
      backgroundColor: "rgba(0,0,0,0)",
      borderColor: "#ccc",
      borderRadius: 0,
      borderWidth: 0,
      padding: 5,
      itemGap: 10,
      itemWidth: 25,
      itemHeight: 14,
      symbolRotate: "inherit",
      symbolKeepAspect: true,
      inactiveColor: "#ccc",
      inactiveBorderColor: "#ccc",
      inactiveBorderWidth: "auto",
      itemStyle: {
        color: "inherit",
        opacity: "inherit",
        borderColor: "inherit",
        borderWidth: "auto",
        borderCap: "inherit",
        borderJoin: "inherit",
        borderDashOffset: "inherit",
        borderMiterLimit: "inherit"
      },
      lineStyle: {
        width: "auto",
        color: "inherit",
        inactiveColor: "#ccc",
        inactiveWidth: 2,
        opacity: "inherit",
        type: "inherit",
        cap: "inherit",
        join: "inherit",
        dashOffset: "inherit",
        miterLimit: "inherit"
      },
      textStyle: {
        color: "#333"
      },
      selectedMode: true,
      selector: false,
      selectorLabel: {
        show: true,
        borderRadius: 10,
        padding: [3, 5, 3, 5],
        fontSize: 12,
        fontFamily: "sans-serif",
        color: "#666",
        borderWidth: 1,
        borderColor: "#666"
      },
      emphasis: {
        selectorLabel: {
          show: true,
          color: "#eee",
          backgroundColor: "#666"
        }
      },
      selectorPosition: "auto",
      selectorItemGap: 7,
      selectorButtonGap: 10,
      tooltip: {
        show: false
      }
    };
    return LegendModel2;
  }(Component_default)
);
var LegendModel_default = LegendModel;

// node_modules/echarts/lib/component/legend/LegendView.js
init_tslib_es6();
init_util();
init_color();
init_graphic();
init_states();
init_labelStyle();
init_layout();
init_Component2();
init_symbol();
init_decal();
init_innerStore();
var curry2 = curry;
var each7 = each;
var Group = Group_default;
var LegendView = (
  /** @class */
  function(_super) {
    __extends(LegendView2, _super);
    function LegendView2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.type = LegendView2.type;
      _this.newlineDisabled = false;
      return _this;
    }
    LegendView2.prototype.init = function() {
      this.group.add(this._contentGroup = new Group());
      this.group.add(this._selectorGroup = new Group());
      this._isFirstRender = true;
    };
    LegendView2.prototype.getContentGroup = function() {
      return this._contentGroup;
    };
    LegendView2.prototype.getSelectorGroup = function() {
      return this._selectorGroup;
    };
    LegendView2.prototype.render = function(legendModel, ecModel, api) {
      var isFirstRender = this._isFirstRender;
      this._isFirstRender = false;
      this.resetInner();
      if (!legendModel.get("show", true)) {
        return;
      }
      var itemAlign = legendModel.get("align");
      var orient = legendModel.get("orient");
      if (!itemAlign || itemAlign === "auto") {
        itemAlign = legendModel.get("left") === "right" && orient === "vertical" ? "right" : "left";
      }
      var selector2 = legendModel.get("selector", true);
      var selectorPosition = legendModel.get("selectorPosition", true);
      if (selector2 && (!selectorPosition || selectorPosition === "auto")) {
        selectorPosition = orient === "horizontal" ? "end" : "start";
      }
      this.renderInner(itemAlign, legendModel, ecModel, api, selector2, orient, selectorPosition);
      var positionInfo = legendModel.getBoxLayoutParams();
      var viewportSize = {
        width: api.getWidth(),
        height: api.getHeight()
      };
      var padding = legendModel.get("padding");
      var maxSize = getLayoutRect(positionInfo, viewportSize, padding);
      var mainRect = this.layoutInner(legendModel, itemAlign, maxSize, isFirstRender, selector2, selectorPosition);
      var layoutRect = getLayoutRect(defaults({
        width: mainRect.width,
        height: mainRect.height
      }, positionInfo), viewportSize, padding);
      this.group.x = layoutRect.x - mainRect.x;
      this.group.y = layoutRect.y - mainRect.y;
      this.group.markRedraw();
      this.group.add(this._backgroundEl = makeBackground(mainRect, legendModel));
    };
    LegendView2.prototype.resetInner = function() {
      this.getContentGroup().removeAll();
      this._backgroundEl && this.group.remove(this._backgroundEl);
      this.getSelectorGroup().removeAll();
    };
    LegendView2.prototype.renderInner = function(itemAlign, legendModel, ecModel, api, selector2, orient, selectorPosition) {
      var contentGroup = this.getContentGroup();
      var legendDrawnMap = createHashMap();
      var selectMode = legendModel.get("selectedMode");
      var excludeSeriesId = [];
      ecModel.eachRawSeries(function(seriesModel) {
        !seriesModel.get("legendHoverLink") && excludeSeriesId.push(seriesModel.id);
      });
      each7(legendModel.getData(), function(legendItemModel, dataIndex) {
        var name = legendItemModel.get("name");
        if (!this.newlineDisabled && (name === "" || name === "\n")) {
          var g = new Group();
          g.newline = true;
          contentGroup.add(g);
          return;
        }
        var seriesModel = ecModel.getSeriesByName(name)[0];
        if (legendDrawnMap.get(name)) {
          return;
        }
        if (seriesModel) {
          var data = seriesModel.getData();
          var lineVisualStyle = data.getVisual("legendLineStyle") || {};
          var legendIcon = data.getVisual("legendIcon");
          var style = data.getVisual("style");
          var itemGroup = this._createItem(seriesModel, name, dataIndex, legendItemModel, legendModel, itemAlign, lineVisualStyle, style, legendIcon, selectMode, api);
          itemGroup.on("click", curry2(dispatchSelectAction, name, null, api, excludeSeriesId)).on("mouseover", curry2(dispatchHighlightAction, seriesModel.name, null, api, excludeSeriesId)).on("mouseout", curry2(dispatchDownplayAction, seriesModel.name, null, api, excludeSeriesId));
          if (ecModel.ssr) {
            itemGroup.eachChild(function(child) {
              var ecData = getECData(child);
              ecData.seriesIndex = seriesModel.seriesIndex;
              ecData.dataIndex = dataIndex;
              ecData.ssrType = "legend";
            });
          }
          legendDrawnMap.set(name, true);
        } else {
          ecModel.eachRawSeries(function(seriesModel2) {
            if (legendDrawnMap.get(name)) {
              return;
            }
            if (seriesModel2.legendVisualProvider) {
              var provider = seriesModel2.legendVisualProvider;
              if (!provider.containName(name)) {
                return;
              }
              var idx = provider.indexOfName(name);
              var style2 = provider.getItemVisual(idx, "style");
              var legendIcon2 = provider.getItemVisual(idx, "legendIcon");
              var colorArr = parse(style2.fill);
              if (colorArr && colorArr[3] === 0) {
                colorArr[3] = 0.2;
                style2 = extend(extend({}, style2), {
                  fill: stringify(colorArr, "rgba")
                });
              }
              var itemGroup2 = this._createItem(seriesModel2, name, dataIndex, legendItemModel, legendModel, itemAlign, {}, style2, legendIcon2, selectMode, api);
              itemGroup2.on("click", curry2(dispatchSelectAction, null, name, api, excludeSeriesId)).on("mouseover", curry2(dispatchHighlightAction, null, name, api, excludeSeriesId)).on("mouseout", curry2(dispatchDownplayAction, null, name, api, excludeSeriesId));
              if (ecModel.ssr) {
                itemGroup2.eachChild(function(child) {
                  var ecData = getECData(child);
                  ecData.seriesIndex = seriesModel2.seriesIndex;
                  ecData.dataIndex = dataIndex;
                  ecData.ssrType = "legend";
                });
              }
              legendDrawnMap.set(name, true);
            }
          }, this);
        }
        if (true) {
          if (!legendDrawnMap.get(name)) {
            console.warn(name + " series not exists. Legend data should be same with series name or data name.");
          }
        }
      }, this);
      if (selector2) {
        this._createSelector(selector2, legendModel, api, orient, selectorPosition);
      }
    };
    LegendView2.prototype._createSelector = function(selector2, legendModel, api, orient, selectorPosition) {
      var selectorGroup = this.getSelectorGroup();
      each7(selector2, function createSelectorButton(selectorItem) {
        var type = selectorItem.type;
        var labelText = new Text_default({
          style: {
            x: 0,
            y: 0,
            align: "center",
            verticalAlign: "middle"
          },
          onclick: function() {
            api.dispatchAction({
              type: type === "all" ? "legendAllSelect" : "legendInverseSelect",
              legendId: legendModel.id
            });
          }
        });
        selectorGroup.add(labelText);
        var labelModel = legendModel.getModel("selectorLabel");
        var emphasisLabelModel = legendModel.getModel(["emphasis", "selectorLabel"]);
        setLabelStyle(labelText, {
          normal: labelModel,
          emphasis: emphasisLabelModel
        }, {
          defaultText: selectorItem.title
        });
        enableHoverEmphasis(labelText);
      });
    };
    LegendView2.prototype._createItem = function(seriesModel, name, dataIndex, legendItemModel, legendModel, itemAlign, lineVisualStyle, itemVisualStyle, legendIcon, selectMode, api) {
      var drawType = seriesModel.visualDrawType;
      var itemWidth = legendModel.get("itemWidth");
      var itemHeight = legendModel.get("itemHeight");
      var isSelected = legendModel.isSelected(name);
      var iconRotate = legendItemModel.get("symbolRotate");
      var symbolKeepAspect = legendItemModel.get("symbolKeepAspect");
      var legendIconType = legendItemModel.get("icon");
      legendIcon = legendIconType || legendIcon || "roundRect";
      var style = getLegendStyle(legendIcon, legendItemModel, lineVisualStyle, itemVisualStyle, drawType, isSelected, api);
      var itemGroup = new Group();
      var textStyleModel = legendItemModel.getModel("textStyle");
      if (isFunction(seriesModel.getLegendIcon) && (!legendIconType || legendIconType === "inherit")) {
        itemGroup.add(seriesModel.getLegendIcon({
          itemWidth,
          itemHeight,
          icon: legendIcon,
          iconRotate,
          itemStyle: style.itemStyle,
          lineStyle: style.lineStyle,
          symbolKeepAspect
        }));
      } else {
        var rotate2 = legendIconType === "inherit" && seriesModel.getData().getVisual("symbol") ? iconRotate === "inherit" ? seriesModel.getData().getVisual("symbolRotate") : iconRotate : 0;
        itemGroup.add(getDefaultLegendIcon({
          itemWidth,
          itemHeight,
          icon: legendIcon,
          iconRotate: rotate2,
          itemStyle: style.itemStyle,
          lineStyle: style.lineStyle,
          symbolKeepAspect
        }));
      }
      var textX = itemAlign === "left" ? itemWidth + 5 : -5;
      var textAlign = itemAlign;
      var formatter = legendModel.get("formatter");
      var content = name;
      if (isString(formatter) && formatter) {
        content = formatter.replace("{name}", name != null ? name : "");
      } else if (isFunction(formatter)) {
        content = formatter(name);
      }
      var textColor = isSelected ? textStyleModel.getTextColor() : legendItemModel.get("inactiveColor");
      itemGroup.add(new Text_default({
        style: createTextStyle(textStyleModel, {
          text: content,
          x: textX,
          y: itemHeight / 2,
          fill: textColor,
          align: textAlign,
          verticalAlign: "middle"
        }, {
          inheritColor: textColor
        })
      }));
      var hitRect = new Rect_default({
        shape: itemGroup.getBoundingRect(),
        style: {
          // Cannot use 'invisible' because SVG SSR will miss the node
          fill: "transparent"
        }
      });
      var tooltipModel = legendItemModel.getModel("tooltip");
      if (tooltipModel.get("show")) {
        setTooltipConfig({
          el: hitRect,
          componentModel: legendModel,
          itemName: name,
          itemTooltipOption: tooltipModel.option
        });
      }
      itemGroup.add(hitRect);
      itemGroup.eachChild(function(child) {
        child.silent = true;
      });
      hitRect.silent = !selectMode;
      this.getContentGroup().add(itemGroup);
      enableHoverEmphasis(itemGroup);
      itemGroup.__legendDataIndex = dataIndex;
      return itemGroup;
    };
    LegendView2.prototype.layoutInner = function(legendModel, itemAlign, maxSize, isFirstRender, selector2, selectorPosition) {
      var contentGroup = this.getContentGroup();
      var selectorGroup = this.getSelectorGroup();
      box(legendModel.get("orient"), contentGroup, legendModel.get("itemGap"), maxSize.width, maxSize.height);
      var contentRect = contentGroup.getBoundingRect();
      var contentPos = [-contentRect.x, -contentRect.y];
      selectorGroup.markRedraw();
      contentGroup.markRedraw();
      if (selector2) {
        box(
          // Buttons in selectorGroup always layout horizontally
          "horizontal",
          selectorGroup,
          legendModel.get("selectorItemGap", true)
        );
        var selectorRect = selectorGroup.getBoundingRect();
        var selectorPos = [-selectorRect.x, -selectorRect.y];
        var selectorButtonGap = legendModel.get("selectorButtonGap", true);
        var orientIdx = legendModel.getOrient().index;
        var wh = orientIdx === 0 ? "width" : "height";
        var hw = orientIdx === 0 ? "height" : "width";
        var yx = orientIdx === 0 ? "y" : "x";
        if (selectorPosition === "end") {
          selectorPos[orientIdx] += contentRect[wh] + selectorButtonGap;
        } else {
          contentPos[orientIdx] += selectorRect[wh] + selectorButtonGap;
        }
        selectorPos[1 - orientIdx] += contentRect[hw] / 2 - selectorRect[hw] / 2;
        selectorGroup.x = selectorPos[0];
        selectorGroup.y = selectorPos[1];
        contentGroup.x = contentPos[0];
        contentGroup.y = contentPos[1];
        var mainRect = {
          x: 0,
          y: 0
        };
        mainRect[wh] = contentRect[wh] + selectorButtonGap + selectorRect[wh];
        mainRect[hw] = Math.max(contentRect[hw], selectorRect[hw]);
        mainRect[yx] = Math.min(0, selectorRect[yx] + selectorPos[1 - orientIdx]);
        return mainRect;
      } else {
        contentGroup.x = contentPos[0];
        contentGroup.y = contentPos[1];
        return this.group.getBoundingRect();
      }
    };
    LegendView2.prototype.remove = function() {
      this.getContentGroup().removeAll();
      this._isFirstRender = true;
    };
    LegendView2.type = "legend.plain";
    return LegendView2;
  }(Component_default2)
);
function getLegendStyle(iconType, legendItemModel, lineVisualStyle, itemVisualStyle, drawType, isSelected, api) {
  function handleCommonProps(style, visualStyle) {
    if (style.lineWidth === "auto") {
      style.lineWidth = visualStyle.lineWidth > 0 ? 2 : 0;
    }
    each7(style, function(propVal, propName) {
      style[propName] === "inherit" && (style[propName] = visualStyle[propName]);
    });
  }
  var itemStyleModel = legendItemModel.getModel("itemStyle");
  var itemStyle = itemStyleModel.getItemStyle();
  var iconBrushType = iconType.lastIndexOf("empty", 0) === 0 ? "fill" : "stroke";
  var decalStyle = itemStyleModel.getShallow("decal");
  itemStyle.decal = !decalStyle || decalStyle === "inherit" ? itemVisualStyle.decal : createOrUpdatePatternFromDecal(decalStyle, api);
  if (itemStyle.fill === "inherit") {
    itemStyle.fill = itemVisualStyle[drawType];
  }
  if (itemStyle.stroke === "inherit") {
    itemStyle.stroke = itemVisualStyle[iconBrushType];
  }
  if (itemStyle.opacity === "inherit") {
    itemStyle.opacity = (drawType === "fill" ? itemVisualStyle : lineVisualStyle).opacity;
  }
  handleCommonProps(itemStyle, itemVisualStyle);
  var legendLineModel = legendItemModel.getModel("lineStyle");
  var lineStyle = legendLineModel.getLineStyle();
  handleCommonProps(lineStyle, lineVisualStyle);
  itemStyle.fill === "auto" && (itemStyle.fill = itemVisualStyle.fill);
  itemStyle.stroke === "auto" && (itemStyle.stroke = itemVisualStyle.fill);
  lineStyle.stroke === "auto" && (lineStyle.stroke = itemVisualStyle.fill);
  if (!isSelected) {
    var borderWidth = legendItemModel.get("inactiveBorderWidth");
    var visualHasBorder = itemStyle[iconBrushType];
    itemStyle.lineWidth = borderWidth === "auto" ? itemVisualStyle.lineWidth > 0 && visualHasBorder ? 2 : 0 : itemStyle.lineWidth;
    itemStyle.fill = legendItemModel.get("inactiveColor");
    itemStyle.stroke = legendItemModel.get("inactiveBorderColor");
    lineStyle.stroke = legendLineModel.get("inactiveColor");
    lineStyle.lineWidth = legendLineModel.get("inactiveWidth");
  }
  return {
    itemStyle,
    lineStyle
  };
}
function getDefaultLegendIcon(opt) {
  var symboType = opt.icon || "roundRect";
  var icon = createSymbol(symboType, 0, 0, opt.itemWidth, opt.itemHeight, opt.itemStyle.fill, opt.symbolKeepAspect);
  icon.setStyle(opt.itemStyle);
  icon.rotation = (opt.iconRotate || 0) * Math.PI / 180;
  icon.setOrigin([opt.itemWidth / 2, opt.itemHeight / 2]);
  if (symboType.indexOf("empty") > -1) {
    icon.style.stroke = icon.style.fill;
    icon.style.fill = "#fff";
    icon.style.lineWidth = 2;
  }
  return icon;
}
function dispatchSelectAction(seriesName, dataName, api, excludeSeriesId) {
  dispatchDownplayAction(seriesName, dataName, api, excludeSeriesId);
  api.dispatchAction({
    type: "legendToggleSelect",
    name: seriesName != null ? seriesName : dataName
  });
  dispatchHighlightAction(seriesName, dataName, api, excludeSeriesId);
}
function isUseHoverLayer(api) {
  var list = api.getZr().storage.getDisplayList();
  var emphasisState;
  var i = 0;
  var len = list.length;
  while (i < len && !(emphasisState = list[i].states.emphasis)) {
    i++;
  }
  return emphasisState && emphasisState.hoverLayer;
}
function dispatchHighlightAction(seriesName, dataName, api, excludeSeriesId) {
  if (!isUseHoverLayer(api)) {
    api.dispatchAction({
      type: "highlight",
      seriesName,
      name: dataName,
      excludeSeriesId
    });
  }
}
function dispatchDownplayAction(seriesName, dataName, api, excludeSeriesId) {
  if (!isUseHoverLayer(api)) {
    api.dispatchAction({
      type: "downplay",
      seriesName,
      name: dataName,
      excludeSeriesId
    });
  }
}
var LegendView_default = LegendView;

// node_modules/echarts/lib/component/legend/legendFilter.js
function legendFilter(ecModel) {
  var legendModels = ecModel.findComponents({
    mainType: "legend"
  });
  if (legendModels && legendModels.length) {
    ecModel.filterSeries(function(series) {
      for (var i = 0; i < legendModels.length; i++) {
        if (!legendModels[i].isSelected(series.name)) {
          return false;
        }
      }
      return true;
    });
  }
}

// node_modules/echarts/lib/component/legend/legendAction.js
init_util();
function legendSelectActionHandler(methodName, payload, ecModel) {
  var isAllSelect = methodName === "allSelect" || methodName === "inverseSelect";
  var selectedMap = {};
  var actionLegendIndices = [];
  ecModel.eachComponent({
    mainType: "legend",
    query: payload
  }, function(legendModel) {
    if (isAllSelect) {
      legendModel[methodName]();
    } else {
      legendModel[methodName](payload.name);
    }
    makeSelectedMap(legendModel, selectedMap);
    actionLegendIndices.push(legendModel.componentIndex);
  });
  var allSelectedMap = {};
  ecModel.eachComponent("legend", function(legendModel) {
    each(selectedMap, function(isSelected, name) {
      legendModel[isSelected ? "select" : "unSelect"](name);
    });
    makeSelectedMap(legendModel, allSelectedMap);
  });
  return isAllSelect ? {
    selected: allSelectedMap,
    // return legendIndex array to tell the developers which legends are allSelect / inverseSelect
    legendIndex: actionLegendIndices
  } : {
    name: payload.name,
    selected: allSelectedMap
  };
}
function makeSelectedMap(legendModel, out) {
  var selectedMap = out || {};
  each(legendModel.getData(), function(model) {
    var name = model.get("name");
    if (name === "\n" || name === "") {
      return;
    }
    var isItemSelected = legendModel.isSelected(name);
    if (hasOwn(selectedMap, name)) {
      selectedMap[name] = selectedMap[name] && isItemSelected;
    } else {
      selectedMap[name] = isItemSelected;
    }
  });
  return selectedMap;
}
function installLegendAction(registers) {
  registers.registerAction("legendToggleSelect", "legendselectchanged", curry(legendSelectActionHandler, "toggleSelected"));
  registers.registerAction("legendAllSelect", "legendselectall", curry(legendSelectActionHandler, "allSelect"));
  registers.registerAction("legendInverseSelect", "legendinverseselect", curry(legendSelectActionHandler, "inverseSelect"));
  registers.registerAction("legendSelect", "legendselected", curry(legendSelectActionHandler, "select"));
  registers.registerAction("legendUnSelect", "legendunselected", curry(legendSelectActionHandler, "unSelect"));
}

// node_modules/echarts/lib/component/legend/installLegendPlain.js
function install21(registers) {
  registers.registerComponentModel(LegendModel_default);
  registers.registerComponentView(LegendView_default);
  registers.registerProcessor(registers.PRIORITY.PROCESSOR.SERIES_FILTER, legendFilter);
  registers.registerSubTypeDefaulter("legend", function() {
    return "plain";
  });
  installLegendAction(registers);
}

// node_modules/echarts/lib/component/legend/installLegendScroll.js
init_extension();

// node_modules/echarts/lib/component/legend/ScrollableLegendModel.js
init_tslib_es6();
init_layout();
init_component();
var ScrollableLegendModel = (
  /** @class */
  function(_super) {
    __extends(ScrollableLegendModel2, _super);
    function ScrollableLegendModel2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.type = ScrollableLegendModel2.type;
      return _this;
    }
    ScrollableLegendModel2.prototype.setScrollDataIndex = function(scrollDataIndex) {
      this.option.scrollDataIndex = scrollDataIndex;
    };
    ScrollableLegendModel2.prototype.init = function(option, parentModel, ecModel) {
      var inputPositionParams = getLayoutParams(option);
      _super.prototype.init.call(this, option, parentModel, ecModel);
      mergeAndNormalizeLayoutParams2(this, option, inputPositionParams);
    };
    ScrollableLegendModel2.prototype.mergeOption = function(option, ecModel) {
      _super.prototype.mergeOption.call(this, option, ecModel);
      mergeAndNormalizeLayoutParams2(this, this.option, option);
    };
    ScrollableLegendModel2.type = "legend.scroll";
    ScrollableLegendModel2.defaultOption = inheritDefaultOption(LegendModel_default.defaultOption, {
      scrollDataIndex: 0,
      pageButtonItemGap: 5,
      pageButtonGap: null,
      pageButtonPosition: "end",
      pageFormatter: "{current}/{total}",
      pageIcons: {
        horizontal: ["M0,0L12,-10L12,10z", "M0,0L-12,-10L-12,10z"],
        vertical: ["M0,0L20,0L10,-20z", "M0,0L20,0L10,20z"]
      },
      pageIconColor: "#2f4554",
      pageIconInactiveColor: "#aaa",
      pageIconSize: 15,
      pageTextStyle: {
        color: "#333"
      },
      animationDurationUpdate: 800
    });
    return ScrollableLegendModel2;
  }(LegendModel_default)
);
function mergeAndNormalizeLayoutParams2(legendModel, target, raw) {
  var orient = legendModel.getOrient();
  var ignoreSize = [1, 1];
  ignoreSize[orient.index] = 0;
  mergeLayoutParam(target, raw, {
    type: "box",
    ignoreSize: !!ignoreSize
  });
}
var ScrollableLegendModel_default = ScrollableLegendModel;

// node_modules/echarts/lib/component/legend/ScrollableLegendView.js
init_tslib_es6();
init_util();
init_graphic();
init_layout();
var Group2 = Group_default;
var WH2 = ["width", "height"];
var XY2 = ["x", "y"];
var ScrollableLegendView = (
  /** @class */
  function(_super) {
    __extends(ScrollableLegendView2, _super);
    function ScrollableLegendView2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.type = ScrollableLegendView2.type;
      _this.newlineDisabled = true;
      _this._currentIndex = 0;
      return _this;
    }
    ScrollableLegendView2.prototype.init = function() {
      _super.prototype.init.call(this);
      this.group.add(this._containerGroup = new Group2());
      this._containerGroup.add(this.getContentGroup());
      this.group.add(this._controllerGroup = new Group2());
    };
    ScrollableLegendView2.prototype.resetInner = function() {
      _super.prototype.resetInner.call(this);
      this._controllerGroup.removeAll();
      this._containerGroup.removeClipPath();
      this._containerGroup.__rectSize = null;
    };
    ScrollableLegendView2.prototype.renderInner = function(itemAlign, legendModel, ecModel, api, selector2, orient, selectorPosition) {
      var self = this;
      _super.prototype.renderInner.call(this, itemAlign, legendModel, ecModel, api, selector2, orient, selectorPosition);
      var controllerGroup = this._controllerGroup;
      var pageIconSize = legendModel.get("pageIconSize", true);
      var pageIconSizeArr = isArray(pageIconSize) ? pageIconSize : [pageIconSize, pageIconSize];
      createPageButton("pagePrev", 0);
      var pageTextStyleModel = legendModel.getModel("pageTextStyle");
      controllerGroup.add(new Text_default({
        name: "pageText",
        style: {
          // Placeholder to calculate a proper layout.
          text: "xx/xx",
          fill: pageTextStyleModel.getTextColor(),
          font: pageTextStyleModel.getFont(),
          verticalAlign: "middle",
          align: "center"
        },
        silent: true
      }));
      createPageButton("pageNext", 1);
      function createPageButton(name, iconIdx) {
        var pageDataIndexName = name + "DataIndex";
        var icon = createIcon(legendModel.get("pageIcons", true)[legendModel.getOrient().name][iconIdx], {
          // Buttons will be created in each render, so we do not need
          // to worry about avoiding using legendModel kept in scope.
          onclick: bind(self._pageGo, self, pageDataIndexName, legendModel, api)
        }, {
          x: -pageIconSizeArr[0] / 2,
          y: -pageIconSizeArr[1] / 2,
          width: pageIconSizeArr[0],
          height: pageIconSizeArr[1]
        });
        icon.name = name;
        controllerGroup.add(icon);
      }
    };
    ScrollableLegendView2.prototype.layoutInner = function(legendModel, itemAlign, maxSize, isFirstRender, selector2, selectorPosition) {
      var selectorGroup = this.getSelectorGroup();
      var orientIdx = legendModel.getOrient().index;
      var wh = WH2[orientIdx];
      var xy = XY2[orientIdx];
      var hw = WH2[1 - orientIdx];
      var yx = XY2[1 - orientIdx];
      selector2 && box(
        // Buttons in selectorGroup always layout horizontally
        "horizontal",
        selectorGroup,
        legendModel.get("selectorItemGap", true)
      );
      var selectorButtonGap = legendModel.get("selectorButtonGap", true);
      var selectorRect = selectorGroup.getBoundingRect();
      var selectorPos = [-selectorRect.x, -selectorRect.y];
      var processMaxSize = clone(maxSize);
      selector2 && (processMaxSize[wh] = maxSize[wh] - selectorRect[wh] - selectorButtonGap);
      var mainRect = this._layoutContentAndController(legendModel, isFirstRender, processMaxSize, orientIdx, wh, hw, yx, xy);
      if (selector2) {
        if (selectorPosition === "end") {
          selectorPos[orientIdx] += mainRect[wh] + selectorButtonGap;
        } else {
          var offset = selectorRect[wh] + selectorButtonGap;
          selectorPos[orientIdx] -= offset;
          mainRect[xy] -= offset;
        }
        mainRect[wh] += selectorRect[wh] + selectorButtonGap;
        selectorPos[1 - orientIdx] += mainRect[yx] + mainRect[hw] / 2 - selectorRect[hw] / 2;
        mainRect[hw] = Math.max(mainRect[hw], selectorRect[hw]);
        mainRect[yx] = Math.min(mainRect[yx], selectorRect[yx] + selectorPos[1 - orientIdx]);
        selectorGroup.x = selectorPos[0];
        selectorGroup.y = selectorPos[1];
        selectorGroup.markRedraw();
      }
      return mainRect;
    };
    ScrollableLegendView2.prototype._layoutContentAndController = function(legendModel, isFirstRender, maxSize, orientIdx, wh, hw, yx, xy) {
      var contentGroup = this.getContentGroup();
      var containerGroup = this._containerGroup;
      var controllerGroup = this._controllerGroup;
      box(legendModel.get("orient"), contentGroup, legendModel.get("itemGap"), !orientIdx ? null : maxSize.width, orientIdx ? null : maxSize.height);
      box(
        // Buttons in controller are layout always horizontally.
        "horizontal",
        controllerGroup,
        legendModel.get("pageButtonItemGap", true)
      );
      var contentRect = contentGroup.getBoundingRect();
      var controllerRect = controllerGroup.getBoundingRect();
      var showController = this._showController = contentRect[wh] > maxSize[wh];
      var contentPos = [-contentRect.x, -contentRect.y];
      if (!isFirstRender) {
        contentPos[orientIdx] = contentGroup[xy];
      }
      var containerPos = [0, 0];
      var controllerPos = [-controllerRect.x, -controllerRect.y];
      var pageButtonGap = retrieve2(legendModel.get("pageButtonGap", true), legendModel.get("itemGap", true));
      if (showController) {
        var pageButtonPosition = legendModel.get("pageButtonPosition", true);
        if (pageButtonPosition === "end") {
          controllerPos[orientIdx] += maxSize[wh] - controllerRect[wh];
        } else {
          containerPos[orientIdx] += controllerRect[wh] + pageButtonGap;
        }
      }
      controllerPos[1 - orientIdx] += contentRect[hw] / 2 - controllerRect[hw] / 2;
      contentGroup.setPosition(contentPos);
      containerGroup.setPosition(containerPos);
      controllerGroup.setPosition(controllerPos);
      var mainRect = {
        x: 0,
        y: 0
      };
      mainRect[wh] = showController ? maxSize[wh] : contentRect[wh];
      mainRect[hw] = Math.max(contentRect[hw], controllerRect[hw]);
      mainRect[yx] = Math.min(0, controllerRect[yx] + controllerPos[1 - orientIdx]);
      containerGroup.__rectSize = maxSize[wh];
      if (showController) {
        var clipShape = {
          x: 0,
          y: 0
        };
        clipShape[wh] = Math.max(maxSize[wh] - controllerRect[wh] - pageButtonGap, 0);
        clipShape[hw] = mainRect[hw];
        containerGroup.setClipPath(new Rect_default({
          shape: clipShape
        }));
        containerGroup.__rectSize = clipShape[wh];
      } else {
        controllerGroup.eachChild(function(child) {
          child.attr({
            invisible: true,
            silent: true
          });
        });
      }
      var pageInfo = this._getPageInfo(legendModel);
      pageInfo.pageIndex != null && updateProps(
        contentGroup,
        {
          x: pageInfo.contentPosition[0],
          y: pageInfo.contentPosition[1]
        },
        // When switch from "show controller" to "not show controller", view should be
        // updated immediately without animation, otherwise causes weird effect.
        showController ? legendModel : null
      );
      this._updatePageInfoView(legendModel, pageInfo);
      return mainRect;
    };
    ScrollableLegendView2.prototype._pageGo = function(to, legendModel, api) {
      var scrollDataIndex = this._getPageInfo(legendModel)[to];
      scrollDataIndex != null && api.dispatchAction({
        type: "legendScroll",
        scrollDataIndex,
        legendId: legendModel.id
      });
    };
    ScrollableLegendView2.prototype._updatePageInfoView = function(legendModel, pageInfo) {
      var controllerGroup = this._controllerGroup;
      each(["pagePrev", "pageNext"], function(name) {
        var key = name + "DataIndex";
        var canJump = pageInfo[key] != null;
        var icon = controllerGroup.childOfName(name);
        if (icon) {
          icon.setStyle("fill", canJump ? legendModel.get("pageIconColor", true) : legendModel.get("pageIconInactiveColor", true));
          icon.cursor = canJump ? "pointer" : "default";
        }
      });
      var pageText = controllerGroup.childOfName("pageText");
      var pageFormatter = legendModel.get("pageFormatter");
      var pageIndex = pageInfo.pageIndex;
      var current = pageIndex != null ? pageIndex + 1 : 0;
      var total = pageInfo.pageCount;
      pageText && pageFormatter && pageText.setStyle("text", isString(pageFormatter) ? pageFormatter.replace("{current}", current == null ? "" : current + "").replace("{total}", total == null ? "" : total + "") : pageFormatter({
        current,
        total
      }));
    };
    ScrollableLegendView2.prototype._getPageInfo = function(legendModel) {
      var scrollDataIndex = legendModel.get("scrollDataIndex", true);
      var contentGroup = this.getContentGroup();
      var containerRectSize = this._containerGroup.__rectSize;
      var orientIdx = legendModel.getOrient().index;
      var wh = WH2[orientIdx];
      var xy = XY2[orientIdx];
      var targetItemIndex = this._findTargetItemIndex(scrollDataIndex);
      var children = contentGroup.children();
      var targetItem = children[targetItemIndex];
      var itemCount = children.length;
      var pCount = !itemCount ? 0 : 1;
      var result = {
        contentPosition: [contentGroup.x, contentGroup.y],
        pageCount: pCount,
        pageIndex: pCount - 1,
        pagePrevDataIndex: null,
        pageNextDataIndex: null
      };
      if (!targetItem) {
        return result;
      }
      var targetItemInfo = getItemInfo(targetItem);
      result.contentPosition[orientIdx] = -targetItemInfo.s;
      for (var i = targetItemIndex + 1, winStartItemInfo = targetItemInfo, winEndItemInfo = targetItemInfo, currItemInfo = null; i <= itemCount; ++i) {
        currItemInfo = getItemInfo(children[i]);
        if (
          // Half of the last item is out of the window.
          !currItemInfo && winEndItemInfo.e > winStartItemInfo.s + containerRectSize || currItemInfo && !intersect(currItemInfo, winStartItemInfo.s)
        ) {
          if (winEndItemInfo.i > winStartItemInfo.i) {
            winStartItemInfo = winEndItemInfo;
          } else {
            winStartItemInfo = currItemInfo;
          }
          if (winStartItemInfo) {
            if (result.pageNextDataIndex == null) {
              result.pageNextDataIndex = winStartItemInfo.i;
            }
            ++result.pageCount;
          }
        }
        winEndItemInfo = currItemInfo;
      }
      for (var i = targetItemIndex - 1, winStartItemInfo = targetItemInfo, winEndItemInfo = targetItemInfo, currItemInfo = null; i >= -1; --i) {
        currItemInfo = getItemInfo(children[i]);
        if (
          // If the the end item does not intersect with the window started
          // from the current item, a page can be settled.
          (!currItemInfo || !intersect(winEndItemInfo, currItemInfo.s)) && winStartItemInfo.i < winEndItemInfo.i
        ) {
          winEndItemInfo = winStartItemInfo;
          if (result.pagePrevDataIndex == null) {
            result.pagePrevDataIndex = winStartItemInfo.i;
          }
          ++result.pageCount;
          ++result.pageIndex;
        }
        winStartItemInfo = currItemInfo;
      }
      return result;
      function getItemInfo(el) {
        if (el) {
          var itemRect = el.getBoundingRect();
          var start = itemRect[xy] + el[xy];
          return {
            s: start,
            e: start + itemRect[wh],
            i: el.__legendDataIndex
          };
        }
      }
      function intersect(itemInfo, winStart) {
        return itemInfo.e >= winStart && itemInfo.s <= winStart + containerRectSize;
      }
    };
    ScrollableLegendView2.prototype._findTargetItemIndex = function(targetDataIndex) {
      if (!this._showController) {
        return 0;
      }
      var index;
      var contentGroup = this.getContentGroup();
      var defaultIndex;
      contentGroup.eachChild(function(child, idx) {
        var legendDataIdx = child.__legendDataIndex;
        if (defaultIndex == null && legendDataIdx != null) {
          defaultIndex = idx;
        }
        if (legendDataIdx === targetDataIndex) {
          index = idx;
        }
      });
      return index != null ? index : defaultIndex;
    };
    ScrollableLegendView2.type = "legend.scroll";
    return ScrollableLegendView2;
  }(LegendView_default)
);
var ScrollableLegendView_default = ScrollableLegendView;

// node_modules/echarts/lib/component/legend/scrollableLegendAction.js
function installScrollableLegendAction(registers) {
  registers.registerAction("legendScroll", "legendscroll", function(payload, ecModel) {
    var scrollDataIndex = payload.scrollDataIndex;
    scrollDataIndex != null && ecModel.eachComponent({
      mainType: "legend",
      subType: "scroll",
      query: payload
    }, function(legendModel) {
      legendModel.setScrollDataIndex(scrollDataIndex);
    });
  });
}

// node_modules/echarts/lib/component/legend/installLegendScroll.js
function install22(registers) {
  use(install21);
  registers.registerComponentModel(ScrollableLegendModel_default);
  registers.registerComponentView(ScrollableLegendView_default);
  installScrollableLegendAction(registers);
}

// node_modules/echarts/lib/component/legend/install.js
function install23(registers) {
  use(install21);
  use(install22);
}

// node_modules/echarts/lib/component/dataZoom/install.js
init_extension();

// node_modules/echarts/lib/component/dataZoom/InsideZoomModel.js
init_tslib_es6();
init_component();
var InsideZoomModel = (
  /** @class */
  function(_super) {
    __extends(InsideZoomModel2, _super);
    function InsideZoomModel2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.type = InsideZoomModel2.type;
      return _this;
    }
    InsideZoomModel2.type = "dataZoom.inside";
    InsideZoomModel2.defaultOption = inheritDefaultOption(DataZoomModel_default.defaultOption, {
      disabled: false,
      zoomLock: false,
      zoomOnMouseWheel: true,
      moveOnMouseMove: true,
      moveOnMouseWheel: false,
      preventDefaultMouseMove: true
    });
    return InsideZoomModel2;
  }(DataZoomModel_default)
);
var InsideZoomModel_default = InsideZoomModel;

// node_modules/echarts/lib/component/dataZoom/InsideZoomView.js
init_tslib_es6();

// node_modules/echarts/lib/component/dataZoom/roams.js
init_throttle();
init_model();
init_util();
var inner11 = makeInner();
function setViewInfoToCoordSysRecord(api, dataZoomModel, getRange) {
  inner11(api).coordSysRecordMap.each(function(coordSysRecord) {
    var dzInfo = coordSysRecord.dataZoomInfoMap.get(dataZoomModel.uid);
    if (dzInfo) {
      dzInfo.getRange = getRange;
    }
  });
}
function disposeCoordSysRecordIfNeeded(api, dataZoomModel) {
  var coordSysRecordMap = inner11(api).coordSysRecordMap;
  var coordSysKeyArr = coordSysRecordMap.keys();
  for (var i = 0; i < coordSysKeyArr.length; i++) {
    var coordSysKey = coordSysKeyArr[i];
    var coordSysRecord = coordSysRecordMap.get(coordSysKey);
    var dataZoomInfoMap = coordSysRecord.dataZoomInfoMap;
    if (dataZoomInfoMap) {
      var dzUid = dataZoomModel.uid;
      var dzInfo = dataZoomInfoMap.get(dzUid);
      if (dzInfo) {
        dataZoomInfoMap.removeKey(dzUid);
        if (!dataZoomInfoMap.keys().length) {
          disposeCoordSysRecord(coordSysRecordMap, coordSysRecord);
        }
      }
    }
  }
}
function disposeCoordSysRecord(coordSysRecordMap, coordSysRecord) {
  if (coordSysRecord) {
    coordSysRecordMap.removeKey(coordSysRecord.model.uid);
    var controller = coordSysRecord.controller;
    controller && controller.dispose();
  }
}
function createCoordSysRecord(api, coordSysModel) {
  var coordSysRecord = {
    model: coordSysModel,
    containsPoint: curry(containsPoint, coordSysModel),
    dispatchAction: curry(dispatchAction2, api),
    dataZoomInfoMap: null,
    controller: null
  };
  var controller = coordSysRecord.controller = new RoamController_default(api.getZr());
  each(["pan", "zoom", "scrollMove"], function(eventName) {
    controller.on(eventName, function(event) {
      var batch = [];
      coordSysRecord.dataZoomInfoMap.each(function(dzInfo) {
        if (!event.isAvailableBehavior(dzInfo.model.option)) {
          return;
        }
        var method = (dzInfo.getRange || {})[eventName];
        var range = method && method(dzInfo.dzReferCoordSysInfo, coordSysRecord.model.mainType, coordSysRecord.controller, event);
        !dzInfo.model.get("disabled", true) && range && batch.push({
          dataZoomId: dzInfo.model.id,
          start: range[0],
          end: range[1]
        });
      });
      batch.length && coordSysRecord.dispatchAction(batch);
    });
  });
  return coordSysRecord;
}
function dispatchAction2(api, batch) {
  if (!api.isDisposed()) {
    api.dispatchAction({
      type: "dataZoom",
      animation: {
        easing: "cubicOut",
        duration: 100
      },
      batch
    });
  }
}
function containsPoint(coordSysModel, e, x, y) {
  return coordSysModel.coordinateSystem.containPoint([x, y]);
}
function mergeControllerParams(dataZoomInfoMap) {
  var controlType;
  var prefix = "type_";
  var typePriority = {
    "type_true": 2,
    "type_move": 1,
    "type_false": 0,
    "type_undefined": -1
  };
  var preventDefaultMouseMove = true;
  dataZoomInfoMap.each(function(dataZoomInfo) {
    var dataZoomModel = dataZoomInfo.model;
    var oneType = dataZoomModel.get("disabled", true) ? false : dataZoomModel.get("zoomLock", true) ? "move" : true;
    if (typePriority[prefix + oneType] > typePriority[prefix + controlType]) {
      controlType = oneType;
    }
    preventDefaultMouseMove = preventDefaultMouseMove && dataZoomModel.get("preventDefaultMouseMove", true);
  });
  return {
    controlType,
    opt: {
      // RoamController will enable all of these functionalities,
      // and the final behavior is determined by its event listener
      // provided by each inside zoom.
      zoomOnMouseWheel: true,
      moveOnMouseMove: true,
      moveOnMouseWheel: true,
      preventDefaultMouseMove: !!preventDefaultMouseMove
    }
  };
}
function installDataZoomRoamProcessor(registers) {
  registers.registerProcessor(registers.PRIORITY.PROCESSOR.FILTER, function(ecModel, api) {
    var apiInner = inner11(api);
    var coordSysRecordMap = apiInner.coordSysRecordMap || (apiInner.coordSysRecordMap = createHashMap());
    coordSysRecordMap.each(function(coordSysRecord) {
      coordSysRecord.dataZoomInfoMap = null;
    });
    ecModel.eachComponent({
      mainType: "dataZoom",
      subType: "inside"
    }, function(dataZoomModel) {
      var dzReferCoordSysWrap = collectReferCoordSysModelInfo(dataZoomModel);
      each(dzReferCoordSysWrap.infoList, function(dzCoordSysInfo) {
        var coordSysUid = dzCoordSysInfo.model.uid;
        var coordSysRecord = coordSysRecordMap.get(coordSysUid) || coordSysRecordMap.set(coordSysUid, createCoordSysRecord(api, dzCoordSysInfo.model));
        var dataZoomInfoMap = coordSysRecord.dataZoomInfoMap || (coordSysRecord.dataZoomInfoMap = createHashMap());
        dataZoomInfoMap.set(dataZoomModel.uid, {
          dzReferCoordSysInfo: dzCoordSysInfo,
          model: dataZoomModel,
          getRange: null
        });
      });
    });
    coordSysRecordMap.each(function(coordSysRecord) {
      var controller = coordSysRecord.controller;
      var firstDzInfo;
      var dataZoomInfoMap = coordSysRecord.dataZoomInfoMap;
      if (dataZoomInfoMap) {
        var firstDzKey = dataZoomInfoMap.keys()[0];
        if (firstDzKey != null) {
          firstDzInfo = dataZoomInfoMap.get(firstDzKey);
        }
      }
      if (!firstDzInfo) {
        disposeCoordSysRecord(coordSysRecordMap, coordSysRecord);
        return;
      }
      var controllerParams = mergeControllerParams(dataZoomInfoMap);
      controller.enable(controllerParams.controlType, controllerParams.opt);
      controller.setPointerChecker(coordSysRecord.containsPoint);
      createOrUpdate(coordSysRecord, "dispatchAction", firstDzInfo.model.get("throttle", true), "fixRate");
    });
  });
}

// node_modules/echarts/lib/component/dataZoom/InsideZoomView.js
init_util();
var InsideZoomView = (
  /** @class */
  function(_super) {
    __extends(InsideZoomView2, _super);
    function InsideZoomView2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.type = "dataZoom.inside";
      return _this;
    }
    InsideZoomView2.prototype.render = function(dataZoomModel, ecModel, api) {
      _super.prototype.render.apply(this, arguments);
      if (dataZoomModel.noTarget()) {
        this._clear();
        return;
      }
      this.range = dataZoomModel.getPercentRange();
      setViewInfoToCoordSysRecord(api, dataZoomModel, {
        pan: bind(getRangeHandlers.pan, this),
        zoom: bind(getRangeHandlers.zoom, this),
        scrollMove: bind(getRangeHandlers.scrollMove, this)
      });
    };
    InsideZoomView2.prototype.dispose = function() {
      this._clear();
      _super.prototype.dispose.apply(this, arguments);
    };
    InsideZoomView2.prototype._clear = function() {
      disposeCoordSysRecordIfNeeded(this.api, this.dataZoomModel);
      this.range = null;
    };
    InsideZoomView2.type = "dataZoom.inside";
    return InsideZoomView2;
  }(DataZoomView_default)
);
var getRangeHandlers = {
  zoom: function(coordSysInfo, coordSysMainType, controller, e) {
    var lastRange = this.range;
    var range = lastRange.slice();
    var axisModel = coordSysInfo.axisModels[0];
    if (!axisModel) {
      return;
    }
    var directionInfo = getDirectionInfo[coordSysMainType](null, [e.originX, e.originY], axisModel, controller, coordSysInfo);
    var percentPoint = (directionInfo.signal > 0 ? directionInfo.pixelStart + directionInfo.pixelLength - directionInfo.pixel : directionInfo.pixel - directionInfo.pixelStart) / directionInfo.pixelLength * (range[1] - range[0]) + range[0];
    var scale = Math.max(1 / e.scale, 0);
    range[0] = (range[0] - percentPoint) * scale + percentPoint;
    range[1] = (range[1] - percentPoint) * scale + percentPoint;
    var minMaxSpan = this.dataZoomModel.findRepresentativeAxisProxy().getMinMaxSpan();
    sliderMove(0, range, [0, 100], 0, minMaxSpan.minSpan, minMaxSpan.maxSpan);
    this.range = range;
    if (lastRange[0] !== range[0] || lastRange[1] !== range[1]) {
      return range;
    }
  },
  pan: makeMover(function(range, axisModel, coordSysInfo, coordSysMainType, controller, e) {
    var directionInfo = getDirectionInfo[coordSysMainType]([e.oldX, e.oldY], [e.newX, e.newY], axisModel, controller, coordSysInfo);
    return directionInfo.signal * (range[1] - range[0]) * directionInfo.pixel / directionInfo.pixelLength;
  }),
  scrollMove: makeMover(function(range, axisModel, coordSysInfo, coordSysMainType, controller, e) {
    var directionInfo = getDirectionInfo[coordSysMainType]([0, 0], [e.scrollDelta, e.scrollDelta], axisModel, controller, coordSysInfo);
    return directionInfo.signal * (range[1] - range[0]) * e.scrollDelta;
  })
};
function makeMover(getPercentDelta) {
  return function(coordSysInfo, coordSysMainType, controller, e) {
    var lastRange = this.range;
    var range = lastRange.slice();
    var axisModel = coordSysInfo.axisModels[0];
    if (!axisModel) {
      return;
    }
    var percentDelta = getPercentDelta(range, axisModel, coordSysInfo, coordSysMainType, controller, e);
    sliderMove(percentDelta, range, [0, 100], "all");
    this.range = range;
    if (lastRange[0] !== range[0] || lastRange[1] !== range[1]) {
      return range;
    }
  };
}
var getDirectionInfo = {
  grid: function(oldPoint, newPoint, axisModel, controller, coordSysInfo) {
    var axis = axisModel.axis;
    var ret = {};
    var rect = coordSysInfo.model.coordinateSystem.getRect();
    oldPoint = oldPoint || [0, 0];
    if (axis.dim === "x") {
      ret.pixel = newPoint[0] - oldPoint[0];
      ret.pixelLength = rect.width;
      ret.pixelStart = rect.x;
      ret.signal = axis.inverse ? 1 : -1;
    } else {
      ret.pixel = newPoint[1] - oldPoint[1];
      ret.pixelLength = rect.height;
      ret.pixelStart = rect.y;
      ret.signal = axis.inverse ? -1 : 1;
    }
    return ret;
  },
  polar: function(oldPoint, newPoint, axisModel, controller, coordSysInfo) {
    var axis = axisModel.axis;
    var ret = {};
    var polar = coordSysInfo.model.coordinateSystem;
    var radiusExtent = polar.getRadiusAxis().getExtent();
    var angleExtent = polar.getAngleAxis().getExtent();
    oldPoint = oldPoint ? polar.pointToCoord(oldPoint) : [0, 0];
    newPoint = polar.pointToCoord(newPoint);
    if (axisModel.mainType === "radiusAxis") {
      ret.pixel = newPoint[0] - oldPoint[0];
      ret.pixelLength = radiusExtent[1] - radiusExtent[0];
      ret.pixelStart = radiusExtent[0];
      ret.signal = axis.inverse ? 1 : -1;
    } else {
      ret.pixel = newPoint[1] - oldPoint[1];
      ret.pixelLength = angleExtent[1] - angleExtent[0];
      ret.pixelStart = angleExtent[0];
      ret.signal = axis.inverse ? -1 : 1;
    }
    return ret;
  },
  singleAxis: function(oldPoint, newPoint, axisModel, controller, coordSysInfo) {
    var axis = axisModel.axis;
    var rect = coordSysInfo.model.coordinateSystem.getRect();
    var ret = {};
    oldPoint = oldPoint || [0, 0];
    if (axis.orient === "horizontal") {
      ret.pixel = newPoint[0] - oldPoint[0];
      ret.pixelLength = rect.width;
      ret.pixelStart = rect.x;
      ret.signal = axis.inverse ? 1 : -1;
    } else {
      ret.pixel = newPoint[1] - oldPoint[1];
      ret.pixelLength = rect.height;
      ret.pixelStart = rect.y;
      ret.signal = axis.inverse ? -1 : 1;
    }
    return ret;
  }
};
var InsideZoomView_default = InsideZoomView;

// node_modules/echarts/lib/component/dataZoom/installDataZoomInside.js
function install24(registers) {
  installCommon(registers);
  registers.registerComponentModel(InsideZoomModel_default);
  registers.registerComponentView(InsideZoomView_default);
  installDataZoomRoamProcessor(registers);
}

// node_modules/echarts/lib/component/dataZoom/SliderZoomModel.js
init_tslib_es6();
init_component();
var SliderZoomModel = (
  /** @class */
  function(_super) {
    __extends(SliderZoomModel2, _super);
    function SliderZoomModel2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.type = SliderZoomModel2.type;
      return _this;
    }
    SliderZoomModel2.type = "dataZoom.slider";
    SliderZoomModel2.layoutMode = "box";
    SliderZoomModel2.defaultOption = inheritDefaultOption(DataZoomModel_default.defaultOption, {
      show: true,
      // deault value can only be drived in view stage.
      right: "ph",
      top: "ph",
      width: "ph",
      height: "ph",
      left: null,
      bottom: null,
      borderColor: "#d2dbee",
      borderRadius: 3,
      backgroundColor: "rgba(47,69,84,0)",
      // dataBackgroundColor: '#ddd',
      dataBackground: {
        lineStyle: {
          color: "#d2dbee",
          width: 0.5
        },
        areaStyle: {
          color: "#d2dbee",
          opacity: 0.2
        }
      },
      selectedDataBackground: {
        lineStyle: {
          color: "#8fb0f7",
          width: 0.5
        },
        areaStyle: {
          color: "#8fb0f7",
          opacity: 0.2
        }
      },
      // Color of selected window.
      fillerColor: "rgba(135,175,274,0.2)",
      handleIcon: "path://M-9.35,34.56V42m0-40V9.5m-2,0h4a2,2,0,0,1,2,2v21a2,2,0,0,1-2,2h-4a2,2,0,0,1-2-2v-21A2,2,0,0,1-11.35,9.5Z",
      // Percent of the slider height
      handleSize: "100%",
      handleStyle: {
        color: "#fff",
        borderColor: "#ACB8D1"
      },
      moveHandleSize: 7,
      moveHandleIcon: "path://M-320.9-50L-320.9-50c18.1,0,27.1,9,27.1,27.1V85.7c0,18.1-9,27.1-27.1,27.1l0,0c-18.1,0-27.1-9-27.1-27.1V-22.9C-348-41-339-50-320.9-50z M-212.3-50L-212.3-50c18.1,0,27.1,9,27.1,27.1V85.7c0,18.1-9,27.1-27.1,27.1l0,0c-18.1,0-27.1-9-27.1-27.1V-22.9C-239.4-41-230.4-50-212.3-50z M-103.7-50L-103.7-50c18.1,0,27.1,9,27.1,27.1V85.7c0,18.1-9,27.1-27.1,27.1l0,0c-18.1,0-27.1-9-27.1-27.1V-22.9C-130.9-41-121.8-50-103.7-50z",
      moveHandleStyle: {
        color: "#D2DBEE",
        opacity: 0.7
      },
      showDetail: true,
      showDataShadow: "auto",
      realtime: true,
      zoomLock: false,
      textStyle: {
        color: "#6E7079"
      },
      brushSelect: true,
      brushStyle: {
        color: "rgba(135,175,274,0.15)"
      },
      emphasis: {
        handleLabel: {
          show: true
        },
        handleStyle: {
          borderColor: "#8FB0F7"
        },
        moveHandleStyle: {
          color: "#8FB0F7"
        }
      }
    });
    return SliderZoomModel2;
  }(DataZoomModel_default)
);
var SliderZoomModel_default = SliderZoomModel;

// node_modules/echarts/lib/component/dataZoom/SliderZoomView.js
init_tslib_es6();
init_util();
init_event();
init_graphic();
init_throttle();
init_number();
init_layout();
init_states();
init_symbol();
init_log();
init_labelStyle();
var Rect = Rect_default;
var DEFAULT_LOCATION_EDGE_GAP = 7;
var DEFAULT_FRAME_BORDER_WIDTH = 1;
var DEFAULT_FILLER_SIZE = 30;
var DEFAULT_MOVE_HANDLE_SIZE = 7;
var HORIZONTAL = "horizontal";
var VERTICAL = "vertical";
var LABEL_GAP = 5;
var SHOW_DATA_SHADOW_SERIES_TYPE = ["line", "bar", "candlestick", "scatter"];
var REALTIME_ANIMATION_CONFIG = {
  easing: "cubicOut",
  duration: 100,
  delay: 0
};
var SliderZoomView = (
  /** @class */
  function(_super) {
    __extends(SliderZoomView2, _super);
    function SliderZoomView2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.type = SliderZoomView2.type;
      _this._displayables = {};
      return _this;
    }
    SliderZoomView2.prototype.init = function(ecModel, api) {
      this.api = api;
      this._onBrush = bind(this._onBrush, this);
      this._onBrushEnd = bind(this._onBrushEnd, this);
    };
    SliderZoomView2.prototype.render = function(dataZoomModel, ecModel, api, payload) {
      _super.prototype.render.apply(this, arguments);
      createOrUpdate(this, "_dispatchZoomAction", dataZoomModel.get("throttle"), "fixRate");
      this._orient = dataZoomModel.getOrient();
      if (dataZoomModel.get("show") === false) {
        this.group.removeAll();
        return;
      }
      if (dataZoomModel.noTarget()) {
        this._clear();
        this.group.removeAll();
        return;
      }
      if (!payload || payload.type !== "dataZoom" || payload.from !== this.uid) {
        this._buildView();
      }
      this._updateView();
    };
    SliderZoomView2.prototype.dispose = function() {
      this._clear();
      _super.prototype.dispose.apply(this, arguments);
    };
    SliderZoomView2.prototype._clear = function() {
      clear(this, "_dispatchZoomAction");
      var zr = this.api.getZr();
      zr.off("mousemove", this._onBrush);
      zr.off("mouseup", this._onBrushEnd);
    };
    SliderZoomView2.prototype._buildView = function() {
      var thisGroup = this.group;
      thisGroup.removeAll();
      this._brushing = false;
      this._displayables.brushRect = null;
      this._resetLocation();
      this._resetInterval();
      var barGroup = this._displayables.sliderGroup = new Group_default();
      this._renderBackground();
      this._renderHandle();
      this._renderDataShadow();
      thisGroup.add(barGroup);
      this._positionGroup();
    };
    SliderZoomView2.prototype._resetLocation = function() {
      var dataZoomModel = this.dataZoomModel;
      var api = this.api;
      var showMoveHandle = dataZoomModel.get("brushSelect");
      var moveHandleSize = showMoveHandle ? DEFAULT_MOVE_HANDLE_SIZE : 0;
      var coordRect = this._findCoordRect();
      var ecSize = {
        width: api.getWidth(),
        height: api.getHeight()
      };
      var positionInfo = this._orient === HORIZONTAL ? {
        // Why using 'right', because right should be used in vertical,
        // and it is better to be consistent for dealing with position param merge.
        right: ecSize.width - coordRect.x - coordRect.width,
        top: ecSize.height - DEFAULT_FILLER_SIZE - DEFAULT_LOCATION_EDGE_GAP - moveHandleSize,
        width: coordRect.width,
        height: DEFAULT_FILLER_SIZE
      } : {
        right: DEFAULT_LOCATION_EDGE_GAP,
        top: coordRect.y,
        width: DEFAULT_FILLER_SIZE,
        height: coordRect.height
      };
      var layoutParams = getLayoutParams(dataZoomModel.option);
      each(["right", "top", "width", "height"], function(name) {
        if (layoutParams[name] === "ph") {
          layoutParams[name] = positionInfo[name];
        }
      });
      var layoutRect = getLayoutRect(layoutParams, ecSize);
      this._location = {
        x: layoutRect.x,
        y: layoutRect.y
      };
      this._size = [layoutRect.width, layoutRect.height];
      this._orient === VERTICAL && this._size.reverse();
    };
    SliderZoomView2.prototype._positionGroup = function() {
      var thisGroup = this.group;
      var location = this._location;
      var orient = this._orient;
      var targetAxisModel = this.dataZoomModel.getFirstTargetAxisModel();
      var inverse = targetAxisModel && targetAxisModel.get("inverse");
      var sliderGroup = this._displayables.sliderGroup;
      var otherAxisInverse = (this._dataShadowInfo || {}).otherAxisInverse;
      sliderGroup.attr(orient === HORIZONTAL && !inverse ? {
        scaleY: otherAxisInverse ? 1 : -1,
        scaleX: 1
      } : orient === HORIZONTAL && inverse ? {
        scaleY: otherAxisInverse ? 1 : -1,
        scaleX: -1
      } : orient === VERTICAL && !inverse ? {
        scaleY: otherAxisInverse ? -1 : 1,
        scaleX: 1,
        rotation: Math.PI / 2
      } : {
        scaleY: otherAxisInverse ? -1 : 1,
        scaleX: -1,
        rotation: Math.PI / 2
      });
      var rect = thisGroup.getBoundingRect([sliderGroup]);
      thisGroup.x = location.x - rect.x;
      thisGroup.y = location.y - rect.y;
      thisGroup.markRedraw();
    };
    SliderZoomView2.prototype._getViewExtent = function() {
      return [0, this._size[0]];
    };
    SliderZoomView2.prototype._renderBackground = function() {
      var dataZoomModel = this.dataZoomModel;
      var size = this._size;
      var barGroup = this._displayables.sliderGroup;
      var brushSelect = dataZoomModel.get("brushSelect");
      barGroup.add(new Rect({
        silent: true,
        shape: {
          x: 0,
          y: 0,
          width: size[0],
          height: size[1]
        },
        style: {
          fill: dataZoomModel.get("backgroundColor")
        },
        z2: -40
      }));
      var clickPanel = new Rect({
        shape: {
          x: 0,
          y: 0,
          width: size[0],
          height: size[1]
        },
        style: {
          fill: "transparent"
        },
        z2: 0,
        onclick: bind(this._onClickPanel, this)
      });
      var zr = this.api.getZr();
      if (brushSelect) {
        clickPanel.on("mousedown", this._onBrushStart, this);
        clickPanel.cursor = "crosshair";
        zr.on("mousemove", this._onBrush);
        zr.on("mouseup", this._onBrushEnd);
      } else {
        zr.off("mousemove", this._onBrush);
        zr.off("mouseup", this._onBrushEnd);
      }
      barGroup.add(clickPanel);
    };
    SliderZoomView2.prototype._renderDataShadow = function() {
      var info = this._dataShadowInfo = this._prepareDataShadowInfo();
      this._displayables.dataShadowSegs = [];
      if (!info) {
        return;
      }
      var size = this._size;
      var oldSize = this._shadowSize || [];
      var seriesModel = info.series;
      var data = seriesModel.getRawData();
      var candlestickDim = seriesModel.getShadowDim && seriesModel.getShadowDim();
      var otherDim = candlestickDim && data.getDimensionInfo(candlestickDim) ? seriesModel.getShadowDim() : info.otherDim;
      if (otherDim == null) {
        return;
      }
      var polygonPts = this._shadowPolygonPts;
      var polylinePts = this._shadowPolylinePts;
      if (data !== this._shadowData || otherDim !== this._shadowDim || size[0] !== oldSize[0] || size[1] !== oldSize[1]) {
        var otherDataExtent_1 = data.getDataExtent(otherDim);
        var otherOffset = (otherDataExtent_1[1] - otherDataExtent_1[0]) * 0.3;
        otherDataExtent_1 = [otherDataExtent_1[0] - otherOffset, otherDataExtent_1[1] + otherOffset];
        var otherShadowExtent_1 = [0, size[1]];
        var thisShadowExtent = [0, size[0]];
        var areaPoints_1 = [[size[0], 0], [0, 0]];
        var linePoints_1 = [];
        var step_1 = thisShadowExtent[1] / (data.count() - 1);
        var thisCoord_1 = 0;
        var stride_1 = Math.round(data.count() / size[0]);
        var lastIsEmpty_1;
        data.each([otherDim], function(value, index) {
          if (stride_1 > 0 && index % stride_1) {
            thisCoord_1 += step_1;
            return;
          }
          var isEmpty = value == null || isNaN(value) || value === "";
          var otherCoord = isEmpty ? 0 : linearMap(value, otherDataExtent_1, otherShadowExtent_1, true);
          if (isEmpty && !lastIsEmpty_1 && index) {
            areaPoints_1.push([areaPoints_1[areaPoints_1.length - 1][0], 0]);
            linePoints_1.push([linePoints_1[linePoints_1.length - 1][0], 0]);
          } else if (!isEmpty && lastIsEmpty_1) {
            areaPoints_1.push([thisCoord_1, 0]);
            linePoints_1.push([thisCoord_1, 0]);
          }
          areaPoints_1.push([thisCoord_1, otherCoord]);
          linePoints_1.push([thisCoord_1, otherCoord]);
          thisCoord_1 += step_1;
          lastIsEmpty_1 = isEmpty;
        });
        polygonPts = this._shadowPolygonPts = areaPoints_1;
        polylinePts = this._shadowPolylinePts = linePoints_1;
      }
      this._shadowData = data;
      this._shadowDim = otherDim;
      this._shadowSize = [size[0], size[1]];
      var dataZoomModel = this.dataZoomModel;
      function createDataShadowGroup(isSelectedArea) {
        var model = dataZoomModel.getModel(isSelectedArea ? "selectedDataBackground" : "dataBackground");
        var group2 = new Group_default();
        var polygon = new Polygon_default({
          shape: {
            points: polygonPts
          },
          segmentIgnoreThreshold: 1,
          style: model.getModel("areaStyle").getAreaStyle(),
          silent: true,
          z2: -20
        });
        var polyline = new Polyline_default({
          shape: {
            points: polylinePts
          },
          segmentIgnoreThreshold: 1,
          style: model.getModel("lineStyle").getLineStyle(),
          silent: true,
          z2: -19
        });
        group2.add(polygon);
        group2.add(polyline);
        return group2;
      }
      for (var i = 0; i < 3; i++) {
        var group = createDataShadowGroup(i === 1);
        this._displayables.sliderGroup.add(group);
        this._displayables.dataShadowSegs.push(group);
      }
    };
    SliderZoomView2.prototype._prepareDataShadowInfo = function() {
      var dataZoomModel = this.dataZoomModel;
      var showDataShadow = dataZoomModel.get("showDataShadow");
      if (showDataShadow === false) {
        return;
      }
      var result;
      var ecModel = this.ecModel;
      dataZoomModel.eachTargetAxis(function(axisDim, axisIndex) {
        var seriesModels = dataZoomModel.getAxisProxy(axisDim, axisIndex).getTargetSeriesModels();
        each(seriesModels, function(seriesModel) {
          if (result) {
            return;
          }
          if (showDataShadow !== true && indexOf(SHOW_DATA_SHADOW_SERIES_TYPE, seriesModel.get("type")) < 0) {
            return;
          }
          var thisAxis = ecModel.getComponent(getAxisMainType(axisDim), axisIndex).axis;
          var otherDim = getOtherDim(axisDim);
          var otherAxisInverse;
          var coordSys = seriesModel.coordinateSystem;
          if (otherDim != null && coordSys.getOtherAxis) {
            otherAxisInverse = coordSys.getOtherAxis(thisAxis).inverse;
          }
          otherDim = seriesModel.getData().mapDimension(otherDim);
          result = {
            thisAxis,
            series: seriesModel,
            thisDim: axisDim,
            otherDim,
            otherAxisInverse
          };
        }, this);
      }, this);
      return result;
    };
    SliderZoomView2.prototype._renderHandle = function() {
      var thisGroup = this.group;
      var displayables = this._displayables;
      var handles = displayables.handles = [null, null];
      var handleLabels = displayables.handleLabels = [null, null];
      var sliderGroup = this._displayables.sliderGroup;
      var size = this._size;
      var dataZoomModel = this.dataZoomModel;
      var api = this.api;
      var borderRadius = dataZoomModel.get("borderRadius") || 0;
      var brushSelect = dataZoomModel.get("brushSelect");
      var filler = displayables.filler = new Rect({
        silent: brushSelect,
        style: {
          fill: dataZoomModel.get("fillerColor")
        },
        textConfig: {
          position: "inside"
        }
      });
      sliderGroup.add(filler);
      sliderGroup.add(new Rect({
        silent: true,
        subPixelOptimize: true,
        shape: {
          x: 0,
          y: 0,
          width: size[0],
          height: size[1],
          r: borderRadius
        },
        style: {
          // deprecated option
          stroke: dataZoomModel.get("dataBackgroundColor") || dataZoomModel.get("borderColor"),
          lineWidth: DEFAULT_FRAME_BORDER_WIDTH,
          fill: "rgba(0,0,0,0)"
        }
      }));
      each([0, 1], function(handleIndex) {
        var iconStr = dataZoomModel.get("handleIcon");
        if (!symbolBuildProxies[iconStr] && iconStr.indexOf("path://") < 0 && iconStr.indexOf("image://") < 0) {
          iconStr = "path://" + iconStr;
          if (true) {
            deprecateLog("handleIcon now needs 'path://' prefix when using a path string");
          }
        }
        var path = createSymbol(iconStr, -1, 0, 2, 2, null, true);
        path.attr({
          cursor: getCursor(this._orient),
          draggable: true,
          drift: bind(this._onDragMove, this, handleIndex),
          ondragend: bind(this._onDragEnd, this),
          onmouseover: bind(this._showDataInfo, this, true),
          onmouseout: bind(this._showDataInfo, this, false),
          z2: 5
        });
        var bRect = path.getBoundingRect();
        var handleSize = dataZoomModel.get("handleSize");
        this._handleHeight = parsePercent2(handleSize, this._size[1]);
        this._handleWidth = bRect.width / bRect.height * this._handleHeight;
        path.setStyle(dataZoomModel.getModel("handleStyle").getItemStyle());
        path.style.strokeNoScale = true;
        path.rectHover = true;
        path.ensureState("emphasis").style = dataZoomModel.getModel(["emphasis", "handleStyle"]).getItemStyle();
        enableHoverEmphasis(path);
        var handleColor = dataZoomModel.get("handleColor");
        if (handleColor != null) {
          path.style.fill = handleColor;
        }
        sliderGroup.add(handles[handleIndex] = path);
        var textStyleModel = dataZoomModel.getModel("textStyle");
        var handleLabel = dataZoomModel.get("handleLabel") || {};
        var handleLabelShow = handleLabel.show || false;
        thisGroup.add(handleLabels[handleIndex] = new Text_default({
          silent: true,
          invisible: !handleLabelShow,
          style: createTextStyle(textStyleModel, {
            x: 0,
            y: 0,
            text: "",
            verticalAlign: "middle",
            align: "center",
            fill: textStyleModel.getTextColor(),
            font: textStyleModel.getFont()
          }),
          z2: 10
        }));
      }, this);
      var actualMoveZone = filler;
      if (brushSelect) {
        var moveHandleHeight = parsePercent2(dataZoomModel.get("moveHandleSize"), size[1]);
        var moveHandle_1 = displayables.moveHandle = new Rect_default({
          style: dataZoomModel.getModel("moveHandleStyle").getItemStyle(),
          silent: true,
          shape: {
            r: [0, 0, 2, 2],
            y: size[1] - 0.5,
            height: moveHandleHeight
          }
        });
        var iconSize = moveHandleHeight * 0.8;
        var moveHandleIcon = displayables.moveHandleIcon = createSymbol(dataZoomModel.get("moveHandleIcon"), -iconSize / 2, -iconSize / 2, iconSize, iconSize, "#fff", true);
        moveHandleIcon.silent = true;
        moveHandleIcon.y = size[1] + moveHandleHeight / 2 - 0.5;
        moveHandle_1.ensureState("emphasis").style = dataZoomModel.getModel(["emphasis", "moveHandleStyle"]).getItemStyle();
        var moveZoneExpandSize = Math.min(size[1] / 2, Math.max(moveHandleHeight, 10));
        actualMoveZone = displayables.moveZone = new Rect_default({
          invisible: true,
          shape: {
            y: size[1] - moveZoneExpandSize,
            height: moveHandleHeight + moveZoneExpandSize
          }
        });
        actualMoveZone.on("mouseover", function() {
          api.enterEmphasis(moveHandle_1);
        }).on("mouseout", function() {
          api.leaveEmphasis(moveHandle_1);
        });
        sliderGroup.add(moveHandle_1);
        sliderGroup.add(moveHandleIcon);
        sliderGroup.add(actualMoveZone);
      }
      actualMoveZone.attr({
        draggable: true,
        cursor: getCursor(this._orient),
        drift: bind(this._onDragMove, this, "all"),
        ondragstart: bind(this._showDataInfo, this, true),
        ondragend: bind(this._onDragEnd, this),
        onmouseover: bind(this._showDataInfo, this, true),
        onmouseout: bind(this._showDataInfo, this, false)
      });
    };
    SliderZoomView2.prototype._resetInterval = function() {
      var range = this._range = this.dataZoomModel.getPercentRange();
      var viewExtent = this._getViewExtent();
      this._handleEnds = [linearMap(range[0], [0, 100], viewExtent, true), linearMap(range[1], [0, 100], viewExtent, true)];
    };
    SliderZoomView2.prototype._updateInterval = function(handleIndex, delta) {
      var dataZoomModel = this.dataZoomModel;
      var handleEnds = this._handleEnds;
      var viewExtend = this._getViewExtent();
      var minMaxSpan = dataZoomModel.findRepresentativeAxisProxy().getMinMaxSpan();
      var percentExtent = [0, 100];
      sliderMove(delta, handleEnds, viewExtend, dataZoomModel.get("zoomLock") ? "all" : handleIndex, minMaxSpan.minSpan != null ? linearMap(minMaxSpan.minSpan, percentExtent, viewExtend, true) : null, minMaxSpan.maxSpan != null ? linearMap(minMaxSpan.maxSpan, percentExtent, viewExtend, true) : null);
      var lastRange = this._range;
      var range = this._range = asc([linearMap(handleEnds[0], viewExtend, percentExtent, true), linearMap(handleEnds[1], viewExtend, percentExtent, true)]);
      return !lastRange || lastRange[0] !== range[0] || lastRange[1] !== range[1];
    };
    SliderZoomView2.prototype._updateView = function(nonRealtime) {
      var displaybles = this._displayables;
      var handleEnds = this._handleEnds;
      var handleInterval = asc(handleEnds.slice());
      var size = this._size;
      each([0, 1], function(handleIndex) {
        var handle = displaybles.handles[handleIndex];
        var handleHeight = this._handleHeight;
        handle.attr({
          scaleX: handleHeight / 2,
          scaleY: handleHeight / 2,
          // This is a trick, by adding an extra tiny offset to let the default handle's end point align to the drag window.
          // NOTE: It may affect some custom shapes a bit. But we prefer to have better result by default.
          x: handleEnds[handleIndex] + (handleIndex ? -1 : 1),
          y: size[1] / 2 - handleHeight / 2
        });
      }, this);
      displaybles.filler.setShape({
        x: handleInterval[0],
        y: 0,
        width: handleInterval[1] - handleInterval[0],
        height: size[1]
      });
      var viewExtent = {
        x: handleInterval[0],
        width: handleInterval[1] - handleInterval[0]
      };
      if (displaybles.moveHandle) {
        displaybles.moveHandle.setShape(viewExtent);
        displaybles.moveZone.setShape(viewExtent);
        displaybles.moveZone.getBoundingRect();
        displaybles.moveHandleIcon && displaybles.moveHandleIcon.attr("x", viewExtent.x + viewExtent.width / 2);
      }
      var dataShadowSegs = displaybles.dataShadowSegs;
      var segIntervals = [0, handleInterval[0], handleInterval[1], size[0]];
      for (var i = 0; i < dataShadowSegs.length; i++) {
        var segGroup = dataShadowSegs[i];
        var clipPath = segGroup.getClipPath();
        if (!clipPath) {
          clipPath = new Rect_default();
          segGroup.setClipPath(clipPath);
        }
        clipPath.setShape({
          x: segIntervals[i],
          y: 0,
          width: segIntervals[i + 1] - segIntervals[i],
          height: size[1]
        });
      }
      this._updateDataInfo(nonRealtime);
    };
    SliderZoomView2.prototype._updateDataInfo = function(nonRealtime) {
      var dataZoomModel = this.dataZoomModel;
      var displaybles = this._displayables;
      var handleLabels = displaybles.handleLabels;
      var orient = this._orient;
      var labelTexts = ["", ""];
      if (dataZoomModel.get("showDetail")) {
        var axisProxy = dataZoomModel.findRepresentativeAxisProxy();
        if (axisProxy) {
          var axis = axisProxy.getAxisModel().axis;
          var range = this._range;
          var dataInterval = nonRealtime ? axisProxy.calculateDataWindow({
            start: range[0],
            end: range[1]
          }).valueWindow : axisProxy.getDataValueWindow();
          labelTexts = [this._formatLabel(dataInterval[0], axis), this._formatLabel(dataInterval[1], axis)];
        }
      }
      var orderedHandleEnds = asc(this._handleEnds.slice());
      setLabel.call(this, 0);
      setLabel.call(this, 1);
      function setLabel(handleIndex) {
        var barTransform = getTransform(displaybles.handles[handleIndex].parent, this.group);
        var direction = transformDirection(handleIndex === 0 ? "right" : "left", barTransform);
        var offset = this._handleWidth / 2 + LABEL_GAP;
        var textPoint = applyTransform([orderedHandleEnds[handleIndex] + (handleIndex === 0 ? -offset : offset), this._size[1] / 2], barTransform);
        handleLabels[handleIndex].setStyle({
          x: textPoint[0],
          y: textPoint[1],
          verticalAlign: orient === HORIZONTAL ? "middle" : direction,
          align: orient === HORIZONTAL ? direction : "center",
          text: labelTexts[handleIndex]
        });
      }
    };
    SliderZoomView2.prototype._formatLabel = function(value, axis) {
      var dataZoomModel = this.dataZoomModel;
      var labelFormatter = dataZoomModel.get("labelFormatter");
      var labelPrecision = dataZoomModel.get("labelPrecision");
      if (labelPrecision == null || labelPrecision === "auto") {
        labelPrecision = axis.getPixelPrecision();
      }
      var valueStr = value == null || isNaN(value) ? "" : axis.type === "category" || axis.type === "time" ? axis.scale.getLabel({
        value: Math.round(value)
      }) : value.toFixed(Math.min(labelPrecision, 20));
      return isFunction(labelFormatter) ? labelFormatter(value, valueStr) : isString(labelFormatter) ? labelFormatter.replace("{value}", valueStr) : valueStr;
    };
    SliderZoomView2.prototype._showDataInfo = function(isEmphasis) {
      var handleLabel = this.dataZoomModel.get("handleLabel") || {};
      var normalShow = handleLabel.show || false;
      var emphasisHandleLabel = this.dataZoomModel.getModel(["emphasis", "handleLabel"]);
      var emphasisShow = emphasisHandleLabel.get("show") || false;
      var toShow = isEmphasis || this._dragging ? emphasisShow : normalShow;
      var displayables = this._displayables;
      var handleLabels = displayables.handleLabels;
      handleLabels[0].attr("invisible", !toShow);
      handleLabels[1].attr("invisible", !toShow);
      displayables.moveHandle && this.api[toShow ? "enterEmphasis" : "leaveEmphasis"](displayables.moveHandle, 1);
    };
    SliderZoomView2.prototype._onDragMove = function(handleIndex, dx, dy, event) {
      this._dragging = true;
      stop(event.event);
      var barTransform = this._displayables.sliderGroup.getLocalTransform();
      var vertex = applyTransform([dx, dy], barTransform, true);
      var changed = this._updateInterval(handleIndex, vertex[0]);
      var realtime = this.dataZoomModel.get("realtime");
      this._updateView(!realtime);
      changed && realtime && this._dispatchZoomAction(true);
    };
    SliderZoomView2.prototype._onDragEnd = function() {
      this._dragging = false;
      this._showDataInfo(false);
      var realtime = this.dataZoomModel.get("realtime");
      !realtime && this._dispatchZoomAction(false);
    };
    SliderZoomView2.prototype._onClickPanel = function(e) {
      var size = this._size;
      var localPoint = this._displayables.sliderGroup.transformCoordToLocal(e.offsetX, e.offsetY);
      if (localPoint[0] < 0 || localPoint[0] > size[0] || localPoint[1] < 0 || localPoint[1] > size[1]) {
        return;
      }
      var handleEnds = this._handleEnds;
      var center = (handleEnds[0] + handleEnds[1]) / 2;
      var changed = this._updateInterval("all", localPoint[0] - center);
      this._updateView();
      changed && this._dispatchZoomAction(false);
    };
    SliderZoomView2.prototype._onBrushStart = function(e) {
      var x = e.offsetX;
      var y = e.offsetY;
      this._brushStart = new Point_default(x, y);
      this._brushing = true;
      this._brushStartTime = +/* @__PURE__ */ new Date();
    };
    SliderZoomView2.prototype._onBrushEnd = function(e) {
      if (!this._brushing) {
        return;
      }
      var brushRect = this._displayables.brushRect;
      this._brushing = false;
      if (!brushRect) {
        return;
      }
      brushRect.attr("ignore", true);
      var brushShape = brushRect.shape;
      var brushEndTime = +/* @__PURE__ */ new Date();
      if (brushEndTime - this._brushStartTime < 200 && Math.abs(brushShape.width) < 5) {
        return;
      }
      var viewExtend = this._getViewExtent();
      var percentExtent = [0, 100];
      this._range = asc([linearMap(brushShape.x, viewExtend, percentExtent, true), linearMap(brushShape.x + brushShape.width, viewExtend, percentExtent, true)]);
      this._handleEnds = [brushShape.x, brushShape.x + brushShape.width];
      this._updateView();
      this._dispatchZoomAction(false);
    };
    SliderZoomView2.prototype._onBrush = function(e) {
      if (this._brushing) {
        stop(e.event);
        this._updateBrushRect(e.offsetX, e.offsetY);
      }
    };
    SliderZoomView2.prototype._updateBrushRect = function(mouseX, mouseY) {
      var displayables = this._displayables;
      var dataZoomModel = this.dataZoomModel;
      var brushRect = displayables.brushRect;
      if (!brushRect) {
        brushRect = displayables.brushRect = new Rect({
          silent: true,
          style: dataZoomModel.getModel("brushStyle").getItemStyle()
        });
        displayables.sliderGroup.add(brushRect);
      }
      brushRect.attr("ignore", false);
      var brushStart = this._brushStart;
      var sliderGroup = this._displayables.sliderGroup;
      var endPoint = sliderGroup.transformCoordToLocal(mouseX, mouseY);
      var startPoint = sliderGroup.transformCoordToLocal(brushStart.x, brushStart.y);
      var size = this._size;
      endPoint[0] = Math.max(Math.min(size[0], endPoint[0]), 0);
      brushRect.setShape({
        x: startPoint[0],
        y: 0,
        width: endPoint[0] - startPoint[0],
        height: size[1]
      });
    };
    SliderZoomView2.prototype._dispatchZoomAction = function(realtime) {
      var range = this._range;
      this.api.dispatchAction({
        type: "dataZoom",
        from: this.uid,
        dataZoomId: this.dataZoomModel.id,
        animation: realtime ? REALTIME_ANIMATION_CONFIG : null,
        start: range[0],
        end: range[1]
      });
    };
    SliderZoomView2.prototype._findCoordRect = function() {
      var rect;
      var coordSysInfoList = collectReferCoordSysModelInfo(this.dataZoomModel).infoList;
      if (!rect && coordSysInfoList.length) {
        var coordSys = coordSysInfoList[0].model.coordinateSystem;
        rect = coordSys.getRect && coordSys.getRect();
      }
      if (!rect) {
        var width = this.api.getWidth();
        var height = this.api.getHeight();
        rect = {
          x: width * 0.2,
          y: height * 0.2,
          width: width * 0.6,
          height: height * 0.6
        };
      }
      return rect;
    };
    SliderZoomView2.type = "dataZoom.slider";
    return SliderZoomView2;
  }(DataZoomView_default)
);
function getOtherDim(thisDim) {
  var map2 = {
    x: "y",
    y: "x",
    radius: "angle",
    angle: "radius"
  };
  return map2[thisDim];
}
function getCursor(orient) {
  return orient === "vertical" ? "ns-resize" : "ew-resize";
}
var SliderZoomView_default = SliderZoomView;

// node_modules/echarts/lib/component/dataZoom/installDataZoomSlider.js
function install25(registers) {
  registers.registerComponentModel(SliderZoomModel_default);
  registers.registerComponentView(SliderZoomView_default);
  installCommon(registers);
}

// node_modules/echarts/lib/component/dataZoom/install.js
function install26(registers) {
  use(install24);
  use(install25);
}

// node_modules/echarts/lib/component/visualMap/install.js
init_extension();

// node_modules/echarts/lib/component/visualMap/ContinuousModel.js
init_tslib_es6();
init_util();

// node_modules/echarts/lib/component/visualMap/VisualMapModel.js
init_tslib_es6();
init_util();

// node_modules/echarts/lib/visual/visualDefault.js
init_util();
var visualDefault = {
  /**
   * @public
   */
  get: function(visualType, key, isCategory) {
    var value = clone((defaultOption[visualType] || {})[key]);
    return isCategory ? isArray(value) ? value[value.length - 1] : value : value;
  }
};
var defaultOption = {
  color: {
    active: ["#006edd", "#e0ffff"],
    inactive: ["rgba(0,0,0,0)"]
  },
  colorHue: {
    active: [0, 360],
    inactive: [0, 0]
  },
  colorSaturation: {
    active: [0.3, 1],
    inactive: [0, 0]
  },
  colorLightness: {
    active: [0.9, 0.5],
    inactive: [0, 0]
  },
  colorAlpha: {
    active: [0.3, 1],
    inactive: [0, 0]
  },
  opacity: {
    active: [0.3, 1],
    inactive: [0, 0]
  },
  symbol: {
    active: ["circle", "roundRect", "diamond"],
    inactive: ["none"]
  },
  symbolSize: {
    active: [10, 50],
    inactive: [0, 0]
  }
};
var visualDefault_default = visualDefault;

// node_modules/echarts/lib/component/visualMap/VisualMapModel.js
init_model();
init_number();
init_Component();
var mapVisual = VisualMapping_default.mapVisual;
var eachVisual = VisualMapping_default.eachVisual;
var isArray2 = isArray;
var each8 = each;
var asc3 = asc;
var linearMap2 = linearMap;
var VisualMapModel = (
  /** @class */
  function(_super) {
    __extends(VisualMapModel2, _super);
    function VisualMapModel2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.type = VisualMapModel2.type;
      _this.stateList = ["inRange", "outOfRange"];
      _this.replacableOptionKeys = ["inRange", "outOfRange", "target", "controller", "color"];
      _this.layoutMode = {
        type: "box",
        ignoreSize: true
      };
      _this.dataBound = [-Infinity, Infinity];
      _this.targetVisuals = {};
      _this.controllerVisuals = {};
      return _this;
    }
    VisualMapModel2.prototype.init = function(option, parentModel, ecModel) {
      this.mergeDefaultAndTheme(option, ecModel);
    };
    VisualMapModel2.prototype.optionUpdated = function(newOption, isInit) {
      var thisOption = this.option;
      !isInit && replaceVisualOption(thisOption, newOption, this.replacableOptionKeys);
      this.textStyleModel = this.getModel("textStyle");
      this.resetItemSize();
      this.completeVisualOption();
    };
    VisualMapModel2.prototype.resetVisual = function(supplementVisualOption) {
      var stateList = this.stateList;
      supplementVisualOption = bind(supplementVisualOption, this);
      this.controllerVisuals = createVisualMappings(this.option.controller, stateList, supplementVisualOption);
      this.targetVisuals = createVisualMappings(this.option.target, stateList, supplementVisualOption);
    };
    VisualMapModel2.prototype.getItemSymbol = function() {
      return null;
    };
    VisualMapModel2.prototype.getTargetSeriesIndices = function() {
      var optionSeriesIndex = this.option.seriesIndex;
      var seriesIndices = [];
      if (optionSeriesIndex == null || optionSeriesIndex === "all") {
        this.ecModel.eachSeries(function(seriesModel, index) {
          seriesIndices.push(index);
        });
      } else {
        seriesIndices = normalizeToArray(optionSeriesIndex);
      }
      return seriesIndices;
    };
    VisualMapModel2.prototype.eachTargetSeries = function(callback, context) {
      each(this.getTargetSeriesIndices(), function(seriesIndex) {
        var seriesModel = this.ecModel.getSeriesByIndex(seriesIndex);
        if (seriesModel) {
          callback.call(context, seriesModel);
        }
      }, this);
    };
    VisualMapModel2.prototype.isTargetSeries = function(seriesModel) {
      var is = false;
      this.eachTargetSeries(function(model) {
        model === seriesModel && (is = true);
      });
      return is;
    };
    VisualMapModel2.prototype.formatValueText = function(value, isCategory, edgeSymbols) {
      var option = this.option;
      var precision = option.precision;
      var dataBound = this.dataBound;
      var formatter = option.formatter;
      var isMinMax;
      edgeSymbols = edgeSymbols || ["<", ">"];
      if (isArray(value)) {
        value = value.slice();
        isMinMax = true;
      }
      var textValue = isCategory ? value : isMinMax ? [toFixed(value[0]), toFixed(value[1])] : toFixed(value);
      if (isString(formatter)) {
        return formatter.replace("{value}", isMinMax ? textValue[0] : textValue).replace("{value2}", isMinMax ? textValue[1] : textValue);
      } else if (isFunction(formatter)) {
        return isMinMax ? formatter(value[0], value[1]) : formatter(value);
      }
      if (isMinMax) {
        if (value[0] === dataBound[0]) {
          return edgeSymbols[0] + " " + textValue[1];
        } else if (value[1] === dataBound[1]) {
          return edgeSymbols[1] + " " + textValue[0];
        } else {
          return textValue[0] + " - " + textValue[1];
        }
      } else {
        return textValue;
      }
      function toFixed(val) {
        return val === dataBound[0] ? "min" : val === dataBound[1] ? "max" : (+val).toFixed(Math.min(precision, 20));
      }
    };
    VisualMapModel2.prototype.resetExtent = function() {
      var thisOption = this.option;
      var extent = asc3([thisOption.min, thisOption.max]);
      this._dataExtent = extent;
    };
    VisualMapModel2.prototype.getDataDimensionIndex = function(data) {
      var optDim = this.option.dimension;
      if (optDim != null) {
        return data.getDimensionIndex(optDim);
      }
      var dimNames = data.dimensions;
      for (var i = dimNames.length - 1; i >= 0; i--) {
        var dimName = dimNames[i];
        var dimInfo = data.getDimensionInfo(dimName);
        if (!dimInfo.isCalculationCoord) {
          return dimInfo.storeDimIndex;
        }
      }
    };
    VisualMapModel2.prototype.getExtent = function() {
      return this._dataExtent.slice();
    };
    VisualMapModel2.prototype.completeVisualOption = function() {
      var ecModel = this.ecModel;
      var thisOption = this.option;
      var base = {
        inRange: thisOption.inRange,
        outOfRange: thisOption.outOfRange
      };
      var target = thisOption.target || (thisOption.target = {});
      var controller = thisOption.controller || (thisOption.controller = {});
      merge(target, base);
      merge(controller, base);
      var isCategory = this.isCategory();
      completeSingle.call(this, target);
      completeSingle.call(this, controller);
      completeInactive.call(this, target, "inRange", "outOfRange");
      completeController.call(this, controller);
      function completeSingle(base2) {
        if (isArray2(thisOption.color) && !base2.inRange) {
          base2.inRange = {
            color: thisOption.color.slice().reverse()
          };
        }
        base2.inRange = base2.inRange || {
          color: ecModel.get("gradientColor")
        };
      }
      function completeInactive(base2, stateExist, stateAbsent) {
        var optExist = base2[stateExist];
        var optAbsent = base2[stateAbsent];
        if (optExist && !optAbsent) {
          optAbsent = base2[stateAbsent] = {};
          each8(optExist, function(visualData, visualType) {
            if (!VisualMapping_default.isValidType(visualType)) {
              return;
            }
            var defa = visualDefault_default.get(visualType, "inactive", isCategory);
            if (defa != null) {
              optAbsent[visualType] = defa;
              if (visualType === "color" && !optAbsent.hasOwnProperty("opacity") && !optAbsent.hasOwnProperty("colorAlpha")) {
                optAbsent.opacity = [0, 0];
              }
            }
          });
        }
      }
      function completeController(controller2) {
        var symbolExists = (controller2.inRange || {}).symbol || (controller2.outOfRange || {}).symbol;
        var symbolSizeExists = (controller2.inRange || {}).symbolSize || (controller2.outOfRange || {}).symbolSize;
        var inactiveColor = this.get("inactiveColor");
        var itemSymbol = this.getItemSymbol();
        var defaultSymbol = itemSymbol || "roundRect";
        each8(this.stateList, function(state) {
          var itemSize = this.itemSize;
          var visuals = controller2[state];
          if (!visuals) {
            visuals = controller2[state] = {
              color: isCategory ? inactiveColor : [inactiveColor]
            };
          }
          if (visuals.symbol == null) {
            visuals.symbol = symbolExists && clone(symbolExists) || (isCategory ? defaultSymbol : [defaultSymbol]);
          }
          if (visuals.symbolSize == null) {
            visuals.symbolSize = symbolSizeExists && clone(symbolSizeExists) || (isCategory ? itemSize[0] : [itemSize[0], itemSize[0]]);
          }
          visuals.symbol = mapVisual(visuals.symbol, function(symbol) {
            return symbol === "none" ? defaultSymbol : symbol;
          });
          var symbolSize = visuals.symbolSize;
          if (symbolSize != null) {
            var max_1 = -Infinity;
            eachVisual(symbolSize, function(value) {
              value > max_1 && (max_1 = value);
            });
            visuals.symbolSize = mapVisual(symbolSize, function(value) {
              return linearMap2(value, [0, max_1], [0, itemSize[0]], true);
            });
          }
        }, this);
      }
    };
    VisualMapModel2.prototype.resetItemSize = function() {
      this.itemSize = [parseFloat(this.get("itemWidth")), parseFloat(this.get("itemHeight"))];
    };
    VisualMapModel2.prototype.isCategory = function() {
      return !!this.option.categories;
    };
    VisualMapModel2.prototype.setSelected = function(selected) {
    };
    VisualMapModel2.prototype.getSelected = function() {
      return null;
    };
    VisualMapModel2.prototype.getValueState = function(value) {
      return null;
    };
    VisualMapModel2.prototype.getVisualMeta = function(getColorVisual2) {
      return null;
    };
    VisualMapModel2.type = "visualMap";
    VisualMapModel2.dependencies = ["series"];
    VisualMapModel2.defaultOption = {
      show: true,
      // zlevel: 0,
      z: 4,
      seriesIndex: "all",
      min: 0,
      max: 200,
      left: 0,
      right: null,
      top: null,
      bottom: 0,
      itemWidth: null,
      itemHeight: null,
      inverse: false,
      orient: "vertical",
      backgroundColor: "rgba(0,0,0,0)",
      borderColor: "#ccc",
      contentColor: "#5793f3",
      inactiveColor: "#aaa",
      borderWidth: 0,
      padding: 5,
      // 接受数组分别设定上右下左边距，同css
      textGap: 10,
      precision: 0,
      textStyle: {
        color: "#333"
        // 值域文字颜色
      }
    };
    return VisualMapModel2;
  }(Component_default)
);
var VisualMapModel_default = VisualMapModel;

// node_modules/echarts/lib/component/visualMap/ContinuousModel.js
init_number();
init_component();
var DEFAULT_BAR_BOUND = [20, 140];
var ContinuousModel = (
  /** @class */
  function(_super) {
    __extends(ContinuousModel2, _super);
    function ContinuousModel2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.type = ContinuousModel2.type;
      return _this;
    }
    ContinuousModel2.prototype.optionUpdated = function(newOption, isInit) {
      _super.prototype.optionUpdated.apply(this, arguments);
      this.resetExtent();
      this.resetVisual(function(mappingOption) {
        mappingOption.mappingMethod = "linear";
        mappingOption.dataExtent = this.getExtent();
      });
      this._resetRange();
    };
    ContinuousModel2.prototype.resetItemSize = function() {
      _super.prototype.resetItemSize.apply(this, arguments);
      var itemSize = this.itemSize;
      (itemSize[0] == null || isNaN(itemSize[0])) && (itemSize[0] = DEFAULT_BAR_BOUND[0]);
      (itemSize[1] == null || isNaN(itemSize[1])) && (itemSize[1] = DEFAULT_BAR_BOUND[1]);
    };
    ContinuousModel2.prototype._resetRange = function() {
      var dataExtent = this.getExtent();
      var range = this.option.range;
      if (!range || range.auto) {
        dataExtent.auto = 1;
        this.option.range = dataExtent;
      } else if (isArray(range)) {
        if (range[0] > range[1]) {
          range.reverse();
        }
        range[0] = Math.max(range[0], dataExtent[0]);
        range[1] = Math.min(range[1], dataExtent[1]);
      }
    };
    ContinuousModel2.prototype.completeVisualOption = function() {
      _super.prototype.completeVisualOption.apply(this, arguments);
      each(this.stateList, function(state) {
        var symbolSize = this.option.controller[state].symbolSize;
        if (symbolSize && symbolSize[0] !== symbolSize[1]) {
          symbolSize[0] = symbolSize[1] / 3;
        }
      }, this);
    };
    ContinuousModel2.prototype.setSelected = function(selected) {
      this.option.range = selected.slice();
      this._resetRange();
    };
    ContinuousModel2.prototype.getSelected = function() {
      var dataExtent = this.getExtent();
      var dataInterval = asc((this.get("range") || []).slice());
      dataInterval[0] > dataExtent[1] && (dataInterval[0] = dataExtent[1]);
      dataInterval[1] > dataExtent[1] && (dataInterval[1] = dataExtent[1]);
      dataInterval[0] < dataExtent[0] && (dataInterval[0] = dataExtent[0]);
      dataInterval[1] < dataExtent[0] && (dataInterval[1] = dataExtent[0]);
      return dataInterval;
    };
    ContinuousModel2.prototype.getValueState = function(value) {
      var range = this.option.range;
      var dataExtent = this.getExtent();
      return (range[0] <= dataExtent[0] || range[0] <= value) && (range[1] >= dataExtent[1] || value <= range[1]) ? "inRange" : "outOfRange";
    };
    ContinuousModel2.prototype.findTargetDataIndices = function(range) {
      var result = [];
      this.eachTargetSeries(function(seriesModel) {
        var dataIndices = [];
        var data = seriesModel.getData();
        data.each(this.getDataDimensionIndex(data), function(value, dataIndex) {
          range[0] <= value && value <= range[1] && dataIndices.push(dataIndex);
        }, this);
        result.push({
          seriesId: seriesModel.id,
          dataIndex: dataIndices
        });
      }, this);
      return result;
    };
    ContinuousModel2.prototype.getVisualMeta = function(getColorVisual2) {
      var oVals = getColorStopValues(this, "outOfRange", this.getExtent());
      var iVals = getColorStopValues(this, "inRange", this.option.range.slice());
      var stops = [];
      function setStop(value, valueState) {
        stops.push({
          value,
          color: getColorVisual2(value, valueState)
        });
      }
      var iIdx = 0;
      var oIdx = 0;
      var iLen = iVals.length;
      var oLen = oVals.length;
      for (; oIdx < oLen && (!iVals.length || oVals[oIdx] <= iVals[0]); oIdx++) {
        if (oVals[oIdx] < iVals[iIdx]) {
          setStop(oVals[oIdx], "outOfRange");
        }
      }
      for (var first = 1; iIdx < iLen; iIdx++, first = 0) {
        first && stops.length && setStop(iVals[iIdx], "outOfRange");
        setStop(iVals[iIdx], "inRange");
      }
      for (var first = 1; oIdx < oLen; oIdx++) {
        if (!iVals.length || iVals[iVals.length - 1] < oVals[oIdx]) {
          if (first) {
            stops.length && setStop(stops[stops.length - 1].value, "outOfRange");
            first = 0;
          }
          setStop(oVals[oIdx], "outOfRange");
        }
      }
      var stopsLen = stops.length;
      return {
        stops,
        outerColors: [stopsLen ? stops[0].color : "transparent", stopsLen ? stops[stopsLen - 1].color : "transparent"]
      };
    };
    ContinuousModel2.type = "visualMap.continuous";
    ContinuousModel2.defaultOption = inheritDefaultOption(VisualMapModel_default.defaultOption, {
      align: "auto",
      calculable: false,
      hoverLink: true,
      realtime: true,
      handleIcon: "path://M-11.39,9.77h0a3.5,3.5,0,0,1-3.5,3.5h-22a3.5,3.5,0,0,1-3.5-3.5h0a3.5,3.5,0,0,1,3.5-3.5h22A3.5,3.5,0,0,1-11.39,9.77Z",
      handleSize: "120%",
      handleStyle: {
        borderColor: "#fff",
        borderWidth: 1
      },
      indicatorIcon: "circle",
      indicatorSize: "50%",
      indicatorStyle: {
        borderColor: "#fff",
        borderWidth: 2,
        shadowBlur: 2,
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        shadowColor: "rgba(0,0,0,0.2)"
      }
      // emphasis: {
      //     handleStyle: {
      //         shadowBlur: 3,
      //         shadowOffsetX: 1,
      //         shadowOffsetY: 1,
      //         shadowColor: 'rgba(0,0,0,0.2)'
      //     }
      // }
    });
    return ContinuousModel2;
  }(VisualMapModel_default)
);
function getColorStopValues(visualMapModel, valueState, dataExtent) {
  if (dataExtent[0] === dataExtent[1]) {
    return dataExtent.slice();
  }
  var count2 = 200;
  var step = (dataExtent[1] - dataExtent[0]) / count2;
  var value = dataExtent[0];
  var stopValues = [];
  for (var i = 0; i <= count2 && value < dataExtent[1]; i++) {
    stopValues.push(value);
    value += step;
  }
  stopValues.push(dataExtent[1]);
  return stopValues;
}
var ContinuousModel_default = ContinuousModel;

// node_modules/echarts/lib/component/visualMap/ContinuousView.js
init_tslib_es6();
init_util();
init_LinearGradient();
init_event();

// node_modules/echarts/lib/component/visualMap/VisualMapView.js
init_tslib_es6();
init_util();
init_graphic();
init_format();
init_layout();
init_Component2();
var VisualMapView = (
  /** @class */
  function(_super) {
    __extends(VisualMapView2, _super);
    function VisualMapView2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.type = VisualMapView2.type;
      _this.autoPositionValues = {
        left: 1,
        right: 1,
        top: 1,
        bottom: 1
      };
      return _this;
    }
    VisualMapView2.prototype.init = function(ecModel, api) {
      this.ecModel = ecModel;
      this.api = api;
    };
    VisualMapView2.prototype.render = function(visualMapModel, ecModel, api, payload) {
      this.visualMapModel = visualMapModel;
      if (visualMapModel.get("show") === false) {
        this.group.removeAll();
        return;
      }
      this.doRender(visualMapModel, ecModel, api, payload);
    };
    VisualMapView2.prototype.renderBackground = function(group) {
      var visualMapModel = this.visualMapModel;
      var padding = normalizeCssArray(visualMapModel.get("padding") || 0);
      var rect = group.getBoundingRect();
      group.add(new Rect_default({
        z2: -1,
        silent: true,
        shape: {
          x: rect.x - padding[3],
          y: rect.y - padding[0],
          width: rect.width + padding[3] + padding[1],
          height: rect.height + padding[0] + padding[2]
        },
        style: {
          fill: visualMapModel.get("backgroundColor"),
          stroke: visualMapModel.get("borderColor"),
          lineWidth: visualMapModel.get("borderWidth")
        }
      }));
    };
    VisualMapView2.prototype.getControllerVisual = function(targetValue, visualCluster, opts) {
      opts = opts || {};
      var forceState = opts.forceState;
      var visualMapModel = this.visualMapModel;
      var visualObj = {};
      if (visualCluster === "color") {
        var defaultColor = visualMapModel.get("contentColor");
        visualObj.color = defaultColor;
      }
      function getter(key) {
        return visualObj[key];
      }
      function setter(key, value) {
        visualObj[key] = value;
      }
      var mappings = visualMapModel.controllerVisuals[forceState || visualMapModel.getValueState(targetValue)];
      var visualTypes = VisualMapping_default.prepareVisualTypes(mappings);
      each(visualTypes, function(type) {
        var visualMapping = mappings[type];
        if (opts.convertOpacityToAlpha && type === "opacity") {
          type = "colorAlpha";
          visualMapping = mappings.__alphaForOpacity;
        }
        if (VisualMapping_default.dependsOn(type, visualCluster)) {
          visualMapping && visualMapping.applyVisual(targetValue, getter, setter);
        }
      });
      return visualObj[visualCluster];
    };
    VisualMapView2.prototype.positionGroup = function(group) {
      var model = this.visualMapModel;
      var api = this.api;
      positionElement(group, model.getBoxLayoutParams(), {
        width: api.getWidth(),
        height: api.getHeight()
      });
    };
    VisualMapView2.prototype.doRender = function(visualMapModel, ecModel, api, payload) {
    };
    VisualMapView2.type = "visualMap";
    return VisualMapView2;
  }(Component_default2)
);
var VisualMapView_default = VisualMapView;

// node_modules/echarts/lib/component/visualMap/ContinuousView.js
init_graphic();
init_number();

// node_modules/echarts/lib/component/visualMap/helper.js
init_util();
init_layout();
var paramsSet = [["left", "right", "width"], ["top", "bottom", "height"]];
function getItemAlign(visualMapModel, api, itemSize) {
  var modelOption = visualMapModel.option;
  var itemAlign = modelOption.align;
  if (itemAlign != null && itemAlign !== "auto") {
    return itemAlign;
  }
  var ecSize = {
    width: api.getWidth(),
    height: api.getHeight()
  };
  var realIndex = modelOption.orient === "horizontal" ? 1 : 0;
  var reals = paramsSet[realIndex];
  var fakeValue = [0, null, 10];
  var layoutInput = {};
  for (var i = 0; i < 3; i++) {
    layoutInput[paramsSet[1 - realIndex][i]] = fakeValue[i];
    layoutInput[reals[i]] = i === 2 ? itemSize[0] : modelOption[reals[i]];
  }
  var rParam = [["x", "width", 3], ["y", "height", 0]][realIndex];
  var rect = getLayoutRect(layoutInput, ecSize, modelOption.padding);
  return reals[(rect.margin[rParam[2]] || 0) + rect[rParam[0]] + rect[rParam[1]] * 0.5 < ecSize[rParam[1]] * 0.5 ? 0 : 1];
}
function makeHighDownBatch(batch, visualMapModel) {
  each(batch || [], function(batchItem) {
    if (batchItem.dataIndex != null) {
      batchItem.dataIndexInside = batchItem.dataIndex;
      batchItem.dataIndex = null;
    }
    batchItem.highlightKey = "visualMap" + (visualMapModel ? visualMapModel.componentIndex : "");
  });
  return batch;
}

// node_modules/echarts/lib/component/visualMap/ContinuousView.js
init_model();
init_text();
init_states();
init_symbol();
init_Image();
init_innerStore();
init_labelStyle();
init_event2();
var linearMap3 = linearMap;
var each9 = each;
var mathMin = Math.min;
var mathMax = Math.max;
var HOVER_LINK_SIZE = 12;
var HOVER_LINK_OUT = 6;
var ContinuousView = (
  /** @class */
  function(_super) {
    __extends(ContinuousView2, _super);
    function ContinuousView2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.type = ContinuousView2.type;
      _this._shapes = {};
      _this._dataInterval = [];
      _this._handleEnds = [];
      _this._hoverLinkDataIndices = [];
      return _this;
    }
    ContinuousView2.prototype.init = function(ecModel, api) {
      _super.prototype.init.call(this, ecModel, api);
      this._hoverLinkFromSeriesMouseOver = bind(this._hoverLinkFromSeriesMouseOver, this);
      this._hideIndicator = bind(this._hideIndicator, this);
    };
    ContinuousView2.prototype.doRender = function(visualMapModel, ecModel, api, payload) {
      if (!payload || payload.type !== "selectDataRange" || payload.from !== this.uid) {
        this._buildView();
      }
    };
    ContinuousView2.prototype._buildView = function() {
      this.group.removeAll();
      var visualMapModel = this.visualMapModel;
      var thisGroup = this.group;
      this._orient = visualMapModel.get("orient");
      this._useHandle = visualMapModel.get("calculable");
      this._resetInterval();
      this._renderBar(thisGroup);
      var dataRangeText = visualMapModel.get("text");
      this._renderEndsText(thisGroup, dataRangeText, 0);
      this._renderEndsText(thisGroup, dataRangeText, 1);
      this._updateView(true);
      this.renderBackground(thisGroup);
      this._updateView();
      this._enableHoverLinkToSeries();
      this._enableHoverLinkFromSeries();
      this.positionGroup(thisGroup);
    };
    ContinuousView2.prototype._renderEndsText = function(group, dataRangeText, endsIndex) {
      if (!dataRangeText) {
        return;
      }
      var text = dataRangeText[1 - endsIndex];
      text = text != null ? text + "" : "";
      var visualMapModel = this.visualMapModel;
      var textGap = visualMapModel.get("textGap");
      var itemSize = visualMapModel.itemSize;
      var barGroup = this._shapes.mainGroup;
      var position = this._applyTransform([itemSize[0] / 2, endsIndex === 0 ? -textGap : itemSize[1] + textGap], barGroup);
      var align = this._applyTransform(endsIndex === 0 ? "bottom" : "top", barGroup);
      var orient = this._orient;
      var textStyleModel = this.visualMapModel.textStyleModel;
      this.group.add(new Text_default({
        style: createTextStyle(textStyleModel, {
          x: position[0],
          y: position[1],
          verticalAlign: orient === "horizontal" ? "middle" : align,
          align: orient === "horizontal" ? align : "center",
          text
        })
      }));
    };
    ContinuousView2.prototype._renderBar = function(targetGroup) {
      var visualMapModel = this.visualMapModel;
      var shapes = this._shapes;
      var itemSize = visualMapModel.itemSize;
      var orient = this._orient;
      var useHandle = this._useHandle;
      var itemAlign = getItemAlign(visualMapModel, this.api, itemSize);
      var mainGroup = shapes.mainGroup = this._createBarGroup(itemAlign);
      var gradientBarGroup = new Group_default();
      mainGroup.add(gradientBarGroup);
      gradientBarGroup.add(shapes.outOfRange = createPolygon());
      gradientBarGroup.add(shapes.inRange = createPolygon(null, useHandle ? getCursor2(this._orient) : null, bind(this._dragHandle, this, "all", false), bind(this._dragHandle, this, "all", true)));
      gradientBarGroup.setClipPath(new Rect_default({
        shape: {
          x: 0,
          y: 0,
          width: itemSize[0],
          height: itemSize[1],
          r: 3
        }
      }));
      var textRect = visualMapModel.textStyleModel.getTextRect("国");
      var textSize = mathMax(textRect.width, textRect.height);
      if (useHandle) {
        shapes.handleThumbs = [];
        shapes.handleLabels = [];
        shapes.handleLabelPoints = [];
        this._createHandle(visualMapModel, mainGroup, 0, itemSize, textSize, orient);
        this._createHandle(visualMapModel, mainGroup, 1, itemSize, textSize, orient);
      }
      this._createIndicator(visualMapModel, mainGroup, itemSize, textSize, orient);
      targetGroup.add(mainGroup);
    };
    ContinuousView2.prototype._createHandle = function(visualMapModel, mainGroup, handleIndex, itemSize, textSize, orient) {
      var onDrift = bind(this._dragHandle, this, handleIndex, false);
      var onDragEnd = bind(this._dragHandle, this, handleIndex, true);
      var handleSize = parsePercent(visualMapModel.get("handleSize"), itemSize[0]);
      var handleThumb = createSymbol(visualMapModel.get("handleIcon"), -handleSize / 2, -handleSize / 2, handleSize, handleSize, null, true);
      var cursor = getCursor2(this._orient);
      handleThumb.attr({
        cursor,
        draggable: true,
        drift: onDrift,
        ondragend: onDragEnd,
        onmousemove: function(e) {
          stop(e.event);
        }
      });
      handleThumb.x = itemSize[0] / 2;
      handleThumb.useStyle(visualMapModel.getModel("handleStyle").getItemStyle());
      handleThumb.setStyle({
        strokeNoScale: true,
        strokeFirst: true
      });
      handleThumb.style.lineWidth *= 2;
      handleThumb.ensureState("emphasis").style = visualMapModel.getModel(["emphasis", "handleStyle"]).getItemStyle();
      setAsHighDownDispatcher(handleThumb, true);
      mainGroup.add(handleThumb);
      var textStyleModel = this.visualMapModel.textStyleModel;
      var handleLabel = new Text_default({
        cursor,
        draggable: true,
        drift: onDrift,
        onmousemove: function(e) {
          stop(e.event);
        },
        ondragend: onDragEnd,
        style: createTextStyle(textStyleModel, {
          x: 0,
          y: 0,
          text: ""
        })
      });
      handleLabel.ensureState("blur").style = {
        opacity: 0.1
      };
      handleLabel.stateTransition = {
        duration: 200
      };
      this.group.add(handleLabel);
      var handleLabelPoint = [handleSize, 0];
      var shapes = this._shapes;
      shapes.handleThumbs[handleIndex] = handleThumb;
      shapes.handleLabelPoints[handleIndex] = handleLabelPoint;
      shapes.handleLabels[handleIndex] = handleLabel;
    };
    ContinuousView2.prototype._createIndicator = function(visualMapModel, mainGroup, itemSize, textSize, orient) {
      var scale = parsePercent(visualMapModel.get("indicatorSize"), itemSize[0]);
      var indicator = createSymbol(visualMapModel.get("indicatorIcon"), -scale / 2, -scale / 2, scale, scale, null, true);
      indicator.attr({
        cursor: "move",
        invisible: true,
        silent: true,
        x: itemSize[0] / 2
      });
      var indicatorStyle = visualMapModel.getModel("indicatorStyle").getItemStyle();
      if (indicator instanceof Image_default) {
        var pathStyle = indicator.style;
        indicator.useStyle(extend({
          // TODO other properties like x, y ?
          image: pathStyle.image,
          x: pathStyle.x,
          y: pathStyle.y,
          width: pathStyle.width,
          height: pathStyle.height
        }, indicatorStyle));
      } else {
        indicator.useStyle(indicatorStyle);
      }
      mainGroup.add(indicator);
      var textStyleModel = this.visualMapModel.textStyleModel;
      var indicatorLabel = new Text_default({
        silent: true,
        invisible: true,
        style: createTextStyle(textStyleModel, {
          x: 0,
          y: 0,
          text: ""
        })
      });
      this.group.add(indicatorLabel);
      var indicatorLabelPoint = [(orient === "horizontal" ? textSize / 2 : HOVER_LINK_OUT) + itemSize[0] / 2, 0];
      var shapes = this._shapes;
      shapes.indicator = indicator;
      shapes.indicatorLabel = indicatorLabel;
      shapes.indicatorLabelPoint = indicatorLabelPoint;
      this._firstShowIndicator = true;
    };
    ContinuousView2.prototype._dragHandle = function(handleIndex, isEnd, dx, dy) {
      if (!this._useHandle) {
        return;
      }
      this._dragging = !isEnd;
      if (!isEnd) {
        var vertex = this._applyTransform([dx, dy], this._shapes.mainGroup, true);
        this._updateInterval(handleIndex, vertex[1]);
        this._hideIndicator();
        this._updateView();
      }
      if (isEnd === !this.visualMapModel.get("realtime")) {
        this.api.dispatchAction({
          type: "selectDataRange",
          from: this.uid,
          visualMapId: this.visualMapModel.id,
          selected: this._dataInterval.slice()
        });
      }
      if (isEnd) {
        !this._hovering && this._clearHoverLinkToSeries();
      } else if (useHoverLinkOnHandle(this.visualMapModel)) {
        this._doHoverLinkToSeries(this._handleEnds[handleIndex], false);
      }
    };
    ContinuousView2.prototype._resetInterval = function() {
      var visualMapModel = this.visualMapModel;
      var dataInterval = this._dataInterval = visualMapModel.getSelected();
      var dataExtent = visualMapModel.getExtent();
      var sizeExtent = [0, visualMapModel.itemSize[1]];
      this._handleEnds = [linearMap3(dataInterval[0], dataExtent, sizeExtent, true), linearMap3(dataInterval[1], dataExtent, sizeExtent, true)];
    };
    ContinuousView2.prototype._updateInterval = function(handleIndex, delta) {
      delta = delta || 0;
      var visualMapModel = this.visualMapModel;
      var handleEnds = this._handleEnds;
      var sizeExtent = [0, visualMapModel.itemSize[1]];
      sliderMove(
        delta,
        handleEnds,
        sizeExtent,
        handleIndex,
        // cross is forbidden
        0
      );
      var dataExtent = visualMapModel.getExtent();
      this._dataInterval = [linearMap3(handleEnds[0], sizeExtent, dataExtent, true), linearMap3(handleEnds[1], sizeExtent, dataExtent, true)];
    };
    ContinuousView2.prototype._updateView = function(forSketch) {
      var visualMapModel = this.visualMapModel;
      var dataExtent = visualMapModel.getExtent();
      var shapes = this._shapes;
      var outOfRangeHandleEnds = [0, visualMapModel.itemSize[1]];
      var inRangeHandleEnds = forSketch ? outOfRangeHandleEnds : this._handleEnds;
      var visualInRange = this._createBarVisual(this._dataInterval, dataExtent, inRangeHandleEnds, "inRange");
      var visualOutOfRange = this._createBarVisual(dataExtent, dataExtent, outOfRangeHandleEnds, "outOfRange");
      shapes.inRange.setStyle({
        fill: visualInRange.barColor
        // opacity: visualInRange.opacity
      }).setShape("points", visualInRange.barPoints);
      shapes.outOfRange.setStyle({
        fill: visualOutOfRange.barColor
        // opacity: visualOutOfRange.opacity
      }).setShape("points", visualOutOfRange.barPoints);
      this._updateHandle(inRangeHandleEnds, visualInRange);
    };
    ContinuousView2.prototype._createBarVisual = function(dataInterval, dataExtent, handleEnds, forceState) {
      var opts = {
        forceState,
        convertOpacityToAlpha: true
      };
      var colorStops = this._makeColorGradient(dataInterval, opts);
      var symbolSizes = [this.getControllerVisual(dataInterval[0], "symbolSize", opts), this.getControllerVisual(dataInterval[1], "symbolSize", opts)];
      var barPoints = this._createBarPoints(handleEnds, symbolSizes);
      return {
        barColor: new LinearGradient_default(0, 0, 0, 1, colorStops),
        barPoints,
        handlesColor: [colorStops[0].color, colorStops[colorStops.length - 1].color]
      };
    };
    ContinuousView2.prototype._makeColorGradient = function(dataInterval, opts) {
      var sampleNumber = 100;
      var colorStops = [];
      var step = (dataInterval[1] - dataInterval[0]) / sampleNumber;
      colorStops.push({
        color: this.getControllerVisual(dataInterval[0], "color", opts),
        offset: 0
      });
      for (var i = 1; i < sampleNumber; i++) {
        var currValue = dataInterval[0] + step * i;
        if (currValue > dataInterval[1]) {
          break;
        }
        colorStops.push({
          color: this.getControllerVisual(currValue, "color", opts),
          offset: i / sampleNumber
        });
      }
      colorStops.push({
        color: this.getControllerVisual(dataInterval[1], "color", opts),
        offset: 1
      });
      return colorStops;
    };
    ContinuousView2.prototype._createBarPoints = function(handleEnds, symbolSizes) {
      var itemSize = this.visualMapModel.itemSize;
      return [[itemSize[0] - symbolSizes[0], handleEnds[0]], [itemSize[0], handleEnds[0]], [itemSize[0], handleEnds[1]], [itemSize[0] - symbolSizes[1], handleEnds[1]]];
    };
    ContinuousView2.prototype._createBarGroup = function(itemAlign) {
      var orient = this._orient;
      var inverse = this.visualMapModel.get("inverse");
      return new Group_default(orient === "horizontal" && !inverse ? {
        scaleX: itemAlign === "bottom" ? 1 : -1,
        rotation: Math.PI / 2
      } : orient === "horizontal" && inverse ? {
        scaleX: itemAlign === "bottom" ? -1 : 1,
        rotation: -Math.PI / 2
      } : orient === "vertical" && !inverse ? {
        scaleX: itemAlign === "left" ? 1 : -1,
        scaleY: -1
      } : {
        scaleX: itemAlign === "left" ? 1 : -1
      });
    };
    ContinuousView2.prototype._updateHandle = function(handleEnds, visualInRange) {
      if (!this._useHandle) {
        return;
      }
      var shapes = this._shapes;
      var visualMapModel = this.visualMapModel;
      var handleThumbs = shapes.handleThumbs;
      var handleLabels = shapes.handleLabels;
      var itemSize = visualMapModel.itemSize;
      var dataExtent = visualMapModel.getExtent();
      var align = this._applyTransform("left", shapes.mainGroup);
      each9([0, 1], function(handleIndex) {
        var handleThumb = handleThumbs[handleIndex];
        handleThumb.setStyle("fill", visualInRange.handlesColor[handleIndex]);
        handleThumb.y = handleEnds[handleIndex];
        var val = linearMap3(handleEnds[handleIndex], [0, itemSize[1]], dataExtent, true);
        var symbolSize = this.getControllerVisual(val, "symbolSize");
        handleThumb.scaleX = handleThumb.scaleY = symbolSize / itemSize[0];
        handleThumb.x = itemSize[0] - symbolSize / 2;
        var textPoint = applyTransform(shapes.handleLabelPoints[handleIndex], getTransform(handleThumb, this.group));
        if (this._orient === "horizontal") {
          var minimumOffset = align === "left" || align === "top" ? (itemSize[0] - symbolSize) / 2 : (itemSize[0] - symbolSize) / -2;
          textPoint[1] += minimumOffset;
        }
        handleLabels[handleIndex].setStyle({
          x: textPoint[0],
          y: textPoint[1],
          text: visualMapModel.formatValueText(this._dataInterval[handleIndex]),
          verticalAlign: "middle",
          align: this._orient === "vertical" ? this._applyTransform("left", shapes.mainGroup) : "center"
        });
      }, this);
    };
    ContinuousView2.prototype._showIndicator = function(cursorValue, textValue, rangeSymbol, halfHoverLinkSize) {
      var visualMapModel = this.visualMapModel;
      var dataExtent = visualMapModel.getExtent();
      var itemSize = visualMapModel.itemSize;
      var sizeExtent = [0, itemSize[1]];
      var shapes = this._shapes;
      var indicator = shapes.indicator;
      if (!indicator) {
        return;
      }
      indicator.attr("invisible", false);
      var opts = {
        convertOpacityToAlpha: true
      };
      var color = this.getControllerVisual(cursorValue, "color", opts);
      var symbolSize = this.getControllerVisual(cursorValue, "symbolSize");
      var y = linearMap3(cursorValue, dataExtent, sizeExtent, true);
      var x = itemSize[0] - symbolSize / 2;
      var oldIndicatorPos = {
        x: indicator.x,
        y: indicator.y
      };
      indicator.y = y;
      indicator.x = x;
      var textPoint = applyTransform(shapes.indicatorLabelPoint, getTransform(indicator, this.group));
      var indicatorLabel = shapes.indicatorLabel;
      indicatorLabel.attr("invisible", false);
      var align = this._applyTransform("left", shapes.mainGroup);
      var orient = this._orient;
      var isHorizontal = orient === "horizontal";
      indicatorLabel.setStyle({
        text: (rangeSymbol ? rangeSymbol : "") + visualMapModel.formatValueText(textValue),
        verticalAlign: isHorizontal ? align : "middle",
        align: isHorizontal ? "center" : align
      });
      var indicatorNewProps = {
        x,
        y,
        style: {
          fill: color
        }
      };
      var labelNewProps = {
        style: {
          x: textPoint[0],
          y: textPoint[1]
        }
      };
      if (visualMapModel.ecModel.isAnimationEnabled() && !this._firstShowIndicator) {
        var animationCfg = {
          duration: 100,
          easing: "cubicInOut",
          additive: true
        };
        indicator.x = oldIndicatorPos.x;
        indicator.y = oldIndicatorPos.y;
        indicator.animateTo(indicatorNewProps, animationCfg);
        indicatorLabel.animateTo(labelNewProps, animationCfg);
      } else {
        indicator.attr(indicatorNewProps);
        indicatorLabel.attr(labelNewProps);
      }
      this._firstShowIndicator = false;
      var handleLabels = this._shapes.handleLabels;
      if (handleLabels) {
        for (var i = 0; i < handleLabels.length; i++) {
          this.api.enterBlur(handleLabels[i]);
        }
      }
    };
    ContinuousView2.prototype._enableHoverLinkToSeries = function() {
      var self = this;
      this._shapes.mainGroup.on("mousemove", function(e) {
        self._hovering = true;
        if (!self._dragging) {
          var itemSize = self.visualMapModel.itemSize;
          var pos = self._applyTransform([e.offsetX, e.offsetY], self._shapes.mainGroup, true, true);
          pos[1] = mathMin(mathMax(0, pos[1]), itemSize[1]);
          self._doHoverLinkToSeries(pos[1], 0 <= pos[0] && pos[0] <= itemSize[0]);
        }
      }).on("mouseout", function() {
        self._hovering = false;
        !self._dragging && self._clearHoverLinkToSeries();
      });
    };
    ContinuousView2.prototype._enableHoverLinkFromSeries = function() {
      var zr = this.api.getZr();
      if (this.visualMapModel.option.hoverLink) {
        zr.on("mouseover", this._hoverLinkFromSeriesMouseOver, this);
        zr.on("mouseout", this._hideIndicator, this);
      } else {
        this._clearHoverLinkFromSeries();
      }
    };
    ContinuousView2.prototype._doHoverLinkToSeries = function(cursorPos, hoverOnBar) {
      var visualMapModel = this.visualMapModel;
      var itemSize = visualMapModel.itemSize;
      if (!visualMapModel.option.hoverLink) {
        return;
      }
      var sizeExtent = [0, itemSize[1]];
      var dataExtent = visualMapModel.getExtent();
      cursorPos = mathMin(mathMax(sizeExtent[0], cursorPos), sizeExtent[1]);
      var halfHoverLinkSize = getHalfHoverLinkSize(visualMapModel, dataExtent, sizeExtent);
      var hoverRange = [cursorPos - halfHoverLinkSize, cursorPos + halfHoverLinkSize];
      var cursorValue = linearMap3(cursorPos, sizeExtent, dataExtent, true);
      var valueRange = [linearMap3(hoverRange[0], sizeExtent, dataExtent, true), linearMap3(hoverRange[1], sizeExtent, dataExtent, true)];
      hoverRange[0] < sizeExtent[0] && (valueRange[0] = -Infinity);
      hoverRange[1] > sizeExtent[1] && (valueRange[1] = Infinity);
      if (hoverOnBar) {
        if (valueRange[0] === -Infinity) {
          this._showIndicator(cursorValue, valueRange[1], "< ", halfHoverLinkSize);
        } else if (valueRange[1] === Infinity) {
          this._showIndicator(cursorValue, valueRange[0], "> ", halfHoverLinkSize);
        } else {
          this._showIndicator(cursorValue, cursorValue, "≈ ", halfHoverLinkSize);
        }
      }
      var oldBatch = this._hoverLinkDataIndices;
      var newBatch = [];
      if (hoverOnBar || useHoverLinkOnHandle(visualMapModel)) {
        newBatch = this._hoverLinkDataIndices = visualMapModel.findTargetDataIndices(valueRange);
      }
      var resultBatches = compressBatches(oldBatch, newBatch);
      this._dispatchHighDown("downplay", makeHighDownBatch(resultBatches[0], visualMapModel));
      this._dispatchHighDown("highlight", makeHighDownBatch(resultBatches[1], visualMapModel));
    };
    ContinuousView2.prototype._hoverLinkFromSeriesMouseOver = function(e) {
      var ecData;
      findEventDispatcher(e.target, function(target) {
        var currECData = getECData(target);
        if (currECData.dataIndex != null) {
          ecData = currECData;
          return true;
        }
      }, true);
      if (!ecData) {
        return;
      }
      var dataModel = this.ecModel.getSeriesByIndex(ecData.seriesIndex);
      var visualMapModel = this.visualMapModel;
      if (!visualMapModel.isTargetSeries(dataModel)) {
        return;
      }
      var data = dataModel.getData(ecData.dataType);
      var value = data.getStore().get(visualMapModel.getDataDimensionIndex(data), ecData.dataIndex);
      if (!isNaN(value)) {
        this._showIndicator(value, value);
      }
    };
    ContinuousView2.prototype._hideIndicator = function() {
      var shapes = this._shapes;
      shapes.indicator && shapes.indicator.attr("invisible", true);
      shapes.indicatorLabel && shapes.indicatorLabel.attr("invisible", true);
      var handleLabels = this._shapes.handleLabels;
      if (handleLabels) {
        for (var i = 0; i < handleLabels.length; i++) {
          this.api.leaveBlur(handleLabels[i]);
        }
      }
    };
    ContinuousView2.prototype._clearHoverLinkToSeries = function() {
      this._hideIndicator();
      var indices = this._hoverLinkDataIndices;
      this._dispatchHighDown("downplay", makeHighDownBatch(indices, this.visualMapModel));
      indices.length = 0;
    };
    ContinuousView2.prototype._clearHoverLinkFromSeries = function() {
      this._hideIndicator();
      var zr = this.api.getZr();
      zr.off("mouseover", this._hoverLinkFromSeriesMouseOver);
      zr.off("mouseout", this._hideIndicator);
    };
    ContinuousView2.prototype._applyTransform = function(vertex, element, inverse, global) {
      var transform = getTransform(element, global ? null : this.group);
      return isArray(vertex) ? applyTransform(vertex, transform, inverse) : transformDirection(vertex, transform, inverse);
    };
    ContinuousView2.prototype._dispatchHighDown = function(type, batch) {
      batch && batch.length && this.api.dispatchAction({
        type,
        batch
      });
    };
    ContinuousView2.prototype.dispose = function() {
      this._clearHoverLinkFromSeries();
      this._clearHoverLinkToSeries();
    };
    ContinuousView2.type = "visualMap.continuous";
    return ContinuousView2;
  }(VisualMapView_default)
);
function createPolygon(points, cursor, onDrift, onDragEnd) {
  return new Polygon_default({
    shape: {
      points
    },
    draggable: !!onDrift,
    cursor,
    drift: onDrift,
    onmousemove: function(e) {
      stop(e.event);
    },
    ondragend: onDragEnd
  });
}
function getHalfHoverLinkSize(visualMapModel, dataExtent, sizeExtent) {
  var halfHoverLinkSize = HOVER_LINK_SIZE / 2;
  var hoverLinkDataSize = visualMapModel.get("hoverLinkDataSize");
  if (hoverLinkDataSize) {
    halfHoverLinkSize = linearMap3(hoverLinkDataSize, dataExtent, sizeExtent, true) / 2;
  }
  return halfHoverLinkSize;
}
function useHoverLinkOnHandle(visualMapModel) {
  var hoverLinkOnHandle = visualMapModel.get("hoverLinkOnHandle");
  return !!(hoverLinkOnHandle == null ? visualMapModel.get("realtime") : hoverLinkOnHandle);
}
function getCursor2(orient) {
  return orient === "vertical" ? "ns-resize" : "ew-resize";
}
var ContinuousView_default = ContinuousView;

// node_modules/echarts/lib/component/visualMap/visualMapAction.js
var visualMapActionInfo = {
  type: "selectDataRange",
  event: "dataRangeSelected",
  // FIXME use updateView appears wrong
  update: "update"
};
var visualMapActionHander = function(payload, ecModel) {
  ecModel.eachComponent({
    mainType: "visualMap",
    query: payload
  }, function(model) {
    model.setSelected(payload.selected);
  });
};

// node_modules/echarts/lib/component/visualMap/visualEncoding.js
init_util();
init_helper();
var visualMapEncodingHandlers = [
  {
    createOnAllSeries: true,
    reset: function(seriesModel, ecModel) {
      var resetDefines = [];
      ecModel.eachComponent("visualMap", function(visualMapModel) {
        var pipelineContext = seriesModel.pipelineContext;
        if (!visualMapModel.isTargetSeries(seriesModel) || pipelineContext && pipelineContext.large) {
          return;
        }
        resetDefines.push(incrementalApplyVisual(visualMapModel.stateList, visualMapModel.targetVisuals, bind(visualMapModel.getValueState, visualMapModel), visualMapModel.getDataDimensionIndex(seriesModel.getData())));
      });
      return resetDefines;
    }
  },
  // Only support color.
  {
    createOnAllSeries: true,
    reset: function(seriesModel, ecModel) {
      var data = seriesModel.getData();
      var visualMetaList = [];
      ecModel.eachComponent("visualMap", function(visualMapModel) {
        if (visualMapModel.isTargetSeries(seriesModel)) {
          var visualMeta = visualMapModel.getVisualMeta(bind(getColorVisual, null, seriesModel, visualMapModel)) || {
            stops: [],
            outerColors: []
          };
          var dimIdx = visualMapModel.getDataDimensionIndex(data);
          if (dimIdx >= 0) {
            visualMeta.dimension = dimIdx;
            visualMetaList.push(visualMeta);
          }
        }
      });
      seriesModel.getData().setVisual("visualMeta", visualMetaList);
    }
  }
];
function getColorVisual(seriesModel, visualMapModel, value, valueState) {
  var mappings = visualMapModel.targetVisuals[valueState];
  var visualTypes = VisualMapping_default.prepareVisualTypes(mappings);
  var resultVisual = {
    color: getVisualFromData(seriesModel.getData(), "color")
    // default color.
  };
  for (var i = 0, len = visualTypes.length; i < len; i++) {
    var type = visualTypes[i];
    var mapping = mappings[type === "opacity" ? "__alphaForOpacity" : type];
    mapping && mapping.applyVisual(value, getVisual, setVisual);
  }
  return resultVisual.color;
  function getVisual(key) {
    return resultVisual[key];
  }
  function setVisual(key, value2) {
    resultVisual[key] = value2;
  }
}

// node_modules/echarts/lib/component/visualMap/installCommon.js
init_util();

// node_modules/echarts/lib/component/visualMap/preprocessor.js
init_util();
var each10 = each;
function visualMapPreprocessor(option) {
  var visualMap = option && option.visualMap;
  if (!isArray(visualMap)) {
    visualMap = visualMap ? [visualMap] : [];
  }
  each10(visualMap, function(opt) {
    if (!opt) {
      return;
    }
    if (has2(opt, "splitList") && !has2(opt, "pieces")) {
      opt.pieces = opt.splitList;
      delete opt.splitList;
    }
    var pieces = opt.pieces;
    if (pieces && isArray(pieces)) {
      each10(pieces, function(piece) {
        if (isObject(piece)) {
          if (has2(piece, "start") && !has2(piece, "min")) {
            piece.min = piece.start;
          }
          if (has2(piece, "end") && !has2(piece, "max")) {
            piece.max = piece.end;
          }
        }
      });
    }
  });
}
function has2(obj, name) {
  return obj && obj.hasOwnProperty && obj.hasOwnProperty(name);
}

// node_modules/echarts/lib/component/visualMap/installCommon.js
var installed2 = false;
function installCommon2(registers) {
  if (installed2) {
    return;
  }
  installed2 = true;
  registers.registerSubTypeDefaulter("visualMap", function(option) {
    return !option.categories && (!(option.pieces ? option.pieces.length > 0 : option.splitNumber > 0) || option.calculable) ? "continuous" : "piecewise";
  });
  registers.registerAction(visualMapActionInfo, visualMapActionHander);
  each(visualMapEncodingHandlers, function(handler) {
    registers.registerVisual(registers.PRIORITY.VISUAL.COMPONENT, handler);
  });
  registers.registerPreprocessor(visualMapPreprocessor);
}

// node_modules/echarts/lib/component/visualMap/installVisualMapContinuous.js
function install27(registers) {
  registers.registerComponentModel(ContinuousModel_default);
  registers.registerComponentView(ContinuousView_default);
  installCommon2(registers);
}

// node_modules/echarts/lib/component/visualMap/PiecewiseModel.js
init_tslib_es6();
init_util();
init_number();
init_component();
var PiecewiseModel = (
  /** @class */
  function(_super) {
    __extends(PiecewiseModel2, _super);
    function PiecewiseModel2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.type = PiecewiseModel2.type;
      _this._pieceList = [];
      return _this;
    }
    PiecewiseModel2.prototype.optionUpdated = function(newOption, isInit) {
      _super.prototype.optionUpdated.apply(this, arguments);
      this.resetExtent();
      var mode = this._mode = this._determineMode();
      this._pieceList = [];
      resetMethods[this._mode].call(this, this._pieceList);
      this._resetSelected(newOption, isInit);
      var categories = this.option.categories;
      this.resetVisual(function(mappingOption, state) {
        if (mode === "categories") {
          mappingOption.mappingMethod = "category";
          mappingOption.categories = clone(categories);
        } else {
          mappingOption.dataExtent = this.getExtent();
          mappingOption.mappingMethod = "piecewise";
          mappingOption.pieceList = map(this._pieceList, function(piece) {
            piece = clone(piece);
            if (state !== "inRange") {
              piece.visual = null;
            }
            return piece;
          });
        }
      });
    };
    PiecewiseModel2.prototype.completeVisualOption = function() {
      var option = this.option;
      var visualTypesInPieces = {};
      var visualTypes = VisualMapping_default.listVisualTypes();
      var isCategory = this.isCategory();
      each(option.pieces, function(piece) {
        each(visualTypes, function(visualType) {
          if (piece.hasOwnProperty(visualType)) {
            visualTypesInPieces[visualType] = 1;
          }
        });
      });
      each(visualTypesInPieces, function(v, visualType) {
        var exists = false;
        each(this.stateList, function(state) {
          exists = exists || has3(option, state, visualType) || has3(option.target, state, visualType);
        }, this);
        !exists && each(this.stateList, function(state) {
          (option[state] || (option[state] = {}))[visualType] = visualDefault_default.get(visualType, state === "inRange" ? "active" : "inactive", isCategory);
        });
      }, this);
      function has3(obj, state, visualType) {
        return obj && obj[state] && obj[state].hasOwnProperty(visualType);
      }
      _super.prototype.completeVisualOption.apply(this, arguments);
    };
    PiecewiseModel2.prototype._resetSelected = function(newOption, isInit) {
      var thisOption = this.option;
      var pieceList = this._pieceList;
      var selected = (isInit ? thisOption : newOption).selected || {};
      thisOption.selected = selected;
      each(pieceList, function(piece, index) {
        var key = this.getSelectedMapKey(piece);
        if (!selected.hasOwnProperty(key)) {
          selected[key] = true;
        }
      }, this);
      if (thisOption.selectedMode === "single") {
        var hasSel_1 = false;
        each(pieceList, function(piece, index) {
          var key = this.getSelectedMapKey(piece);
          if (selected[key]) {
            hasSel_1 ? selected[key] = false : hasSel_1 = true;
          }
        }, this);
      }
    };
    PiecewiseModel2.prototype.getItemSymbol = function() {
      return this.get("itemSymbol");
    };
    PiecewiseModel2.prototype.getSelectedMapKey = function(piece) {
      return this._mode === "categories" ? piece.value + "" : piece.index + "";
    };
    PiecewiseModel2.prototype.getPieceList = function() {
      return this._pieceList;
    };
    PiecewiseModel2.prototype._determineMode = function() {
      var option = this.option;
      return option.pieces && option.pieces.length > 0 ? "pieces" : this.option.categories ? "categories" : "splitNumber";
    };
    PiecewiseModel2.prototype.setSelected = function(selected) {
      this.option.selected = clone(selected);
    };
    PiecewiseModel2.prototype.getValueState = function(value) {
      var index = VisualMapping_default.findPieceIndex(value, this._pieceList);
      return index != null ? this.option.selected[this.getSelectedMapKey(this._pieceList[index])] ? "inRange" : "outOfRange" : "outOfRange";
    };
    PiecewiseModel2.prototype.findTargetDataIndices = function(pieceIndex) {
      var result = [];
      var pieceList = this._pieceList;
      this.eachTargetSeries(function(seriesModel) {
        var dataIndices = [];
        var data = seriesModel.getData();
        data.each(this.getDataDimensionIndex(data), function(value, dataIndex) {
          var pIdx = VisualMapping_default.findPieceIndex(value, pieceList);
          pIdx === pieceIndex && dataIndices.push(dataIndex);
        }, this);
        result.push({
          seriesId: seriesModel.id,
          dataIndex: dataIndices
        });
      }, this);
      return result;
    };
    PiecewiseModel2.prototype.getRepresentValue = function(piece) {
      var representValue;
      if (this.isCategory()) {
        representValue = piece.value;
      } else {
        if (piece.value != null) {
          representValue = piece.value;
        } else {
          var pieceInterval = piece.interval || [];
          representValue = pieceInterval[0] === -Infinity && pieceInterval[1] === Infinity ? 0 : (pieceInterval[0] + pieceInterval[1]) / 2;
        }
      }
      return representValue;
    };
    PiecewiseModel2.prototype.getVisualMeta = function(getColorVisual2) {
      if (this.isCategory()) {
        return;
      }
      var stops = [];
      var outerColors = ["", ""];
      var visualMapModel = this;
      function setStop(interval, valueState) {
        var representValue = visualMapModel.getRepresentValue({
          interval
        });
        if (!valueState) {
          valueState = visualMapModel.getValueState(representValue);
        }
        var color = getColorVisual2(representValue, valueState);
        if (interval[0] === -Infinity) {
          outerColors[0] = color;
        } else if (interval[1] === Infinity) {
          outerColors[1] = color;
        } else {
          stops.push({
            value: interval[0],
            color
          }, {
            value: interval[1],
            color
          });
        }
      }
      var pieceList = this._pieceList.slice();
      if (!pieceList.length) {
        pieceList.push({
          interval: [-Infinity, Infinity]
        });
      } else {
        var edge = pieceList[0].interval[0];
        edge !== -Infinity && pieceList.unshift({
          interval: [-Infinity, edge]
        });
        edge = pieceList[pieceList.length - 1].interval[1];
        edge !== Infinity && pieceList.push({
          interval: [edge, Infinity]
        });
      }
      var curr = -Infinity;
      each(pieceList, function(piece) {
        var interval = piece.interval;
        if (interval) {
          interval[0] > curr && setStop([curr, interval[0]], "outOfRange");
          setStop(interval.slice());
          curr = interval[1];
        }
      }, this);
      return {
        stops,
        outerColors
      };
    };
    PiecewiseModel2.type = "visualMap.piecewise";
    PiecewiseModel2.defaultOption = inheritDefaultOption(VisualMapModel_default.defaultOption, {
      selected: null,
      minOpen: false,
      maxOpen: false,
      align: "auto",
      itemWidth: 20,
      itemHeight: 14,
      itemSymbol: "roundRect",
      pieces: null,
      categories: null,
      splitNumber: 5,
      selectedMode: "multiple",
      itemGap: 10,
      hoverLink: true
      // Enable hover highlight.
    });
    return PiecewiseModel2;
  }(VisualMapModel_default)
);
var resetMethods = {
  splitNumber: function(outPieceList) {
    var thisOption = this.option;
    var precision = Math.min(thisOption.precision, 20);
    var dataExtent = this.getExtent();
    var splitNumber = thisOption.splitNumber;
    splitNumber = Math.max(parseInt(splitNumber, 10), 1);
    thisOption.splitNumber = splitNumber;
    var splitStep = (dataExtent[1] - dataExtent[0]) / splitNumber;
    while (+splitStep.toFixed(precision) !== splitStep && precision < 5) {
      precision++;
    }
    thisOption.precision = precision;
    splitStep = +splitStep.toFixed(precision);
    if (thisOption.minOpen) {
      outPieceList.push({
        interval: [-Infinity, dataExtent[0]],
        close: [0, 0]
      });
    }
    for (var index = 0, curr = dataExtent[0]; index < splitNumber; curr += splitStep, index++) {
      var max = index === splitNumber - 1 ? dataExtent[1] : curr + splitStep;
      outPieceList.push({
        interval: [curr, max],
        close: [1, 1]
      });
    }
    if (thisOption.maxOpen) {
      outPieceList.push({
        interval: [dataExtent[1], Infinity],
        close: [0, 0]
      });
    }
    reformIntervals(outPieceList);
    each(outPieceList, function(piece, index2) {
      piece.index = index2;
      piece.text = this.formatValueText(piece.interval);
    }, this);
  },
  categories: function(outPieceList) {
    var thisOption = this.option;
    each(thisOption.categories, function(cate) {
      outPieceList.push({
        text: this.formatValueText(cate, true),
        value: cate
      });
    }, this);
    normalizeReverse(thisOption, outPieceList);
  },
  pieces: function(outPieceList) {
    var thisOption = this.option;
    each(thisOption.pieces, function(pieceListItem, index) {
      if (!isObject(pieceListItem)) {
        pieceListItem = {
          value: pieceListItem
        };
      }
      var item = {
        text: "",
        index
      };
      if (pieceListItem.label != null) {
        item.text = pieceListItem.label;
      }
      if (pieceListItem.hasOwnProperty("value")) {
        var value = item.value = pieceListItem.value;
        item.interval = [value, value];
        item.close = [1, 1];
      } else {
        var interval = item.interval = [];
        var close_1 = item.close = [0, 0];
        var closeList = [1, 0, 1];
        var infinityList = [-Infinity, Infinity];
        var useMinMax = [];
        for (var lg = 0; lg < 2; lg++) {
          var names = [["gte", "gt", "min"], ["lte", "lt", "max"]][lg];
          for (var i = 0; i < 3 && interval[lg] == null; i++) {
            interval[lg] = pieceListItem[names[i]];
            close_1[lg] = closeList[i];
            useMinMax[lg] = i === 2;
          }
          interval[lg] == null && (interval[lg] = infinityList[lg]);
        }
        useMinMax[0] && interval[1] === Infinity && (close_1[0] = 0);
        useMinMax[1] && interval[0] === -Infinity && (close_1[1] = 0);
        if (true) {
          if (interval[0] > interval[1]) {
            console.warn("Piece " + index + "is illegal: " + interval + " lower bound should not greater then uppper bound.");
          }
        }
        if (interval[0] === interval[1] && close_1[0] && close_1[1]) {
          item.value = interval[0];
        }
      }
      item.visual = VisualMapping_default.retrieveVisuals(pieceListItem);
      outPieceList.push(item);
    }, this);
    normalizeReverse(thisOption, outPieceList);
    reformIntervals(outPieceList);
    each(outPieceList, function(piece) {
      var close = piece.close;
      var edgeSymbols = [["<", "≤"][close[1]], [">", "≥"][close[0]]];
      piece.text = piece.text || this.formatValueText(piece.value != null ? piece.value : piece.interval, false, edgeSymbols);
    }, this);
  }
};
function normalizeReverse(thisOption, pieceList) {
  var inverse = thisOption.inverse;
  if (thisOption.orient === "vertical" ? !inverse : inverse) {
    pieceList.reverse();
  }
}
var PiecewiseModel_default = PiecewiseModel;

// node_modules/echarts/lib/component/visualMap/PiecewiseView.js
init_tslib_es6();
init_util();
init_graphic();
init_symbol();
init_layout();
init_labelStyle();
var PiecewiseVisualMapView = (
  /** @class */
  function(_super) {
    __extends(PiecewiseVisualMapView2, _super);
    function PiecewiseVisualMapView2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.type = PiecewiseVisualMapView2.type;
      return _this;
    }
    PiecewiseVisualMapView2.prototype.doRender = function() {
      var thisGroup = this.group;
      thisGroup.removeAll();
      var visualMapModel = this.visualMapModel;
      var textGap = visualMapModel.get("textGap");
      var textStyleModel = visualMapModel.textStyleModel;
      var textFont = textStyleModel.getFont();
      var textFill = textStyleModel.getTextColor();
      var itemAlign = this._getItemAlign();
      var itemSize = visualMapModel.itemSize;
      var viewData = this._getViewData();
      var endsText = viewData.endsText;
      var showLabel = retrieve(visualMapModel.get("showLabel", true), !endsText);
      var silent = !visualMapModel.get("selectedMode");
      endsText && this._renderEndsText(thisGroup, endsText[0], itemSize, showLabel, itemAlign);
      each(viewData.viewPieceList, function(item) {
        var piece = item.piece;
        var itemGroup = new Group_default();
        itemGroup.onclick = bind(this._onItemClick, this, piece);
        this._enableHoverLink(itemGroup, item.indexInModelPieceList);
        var representValue = visualMapModel.getRepresentValue(piece);
        this._createItemSymbol(itemGroup, representValue, [0, 0, itemSize[0], itemSize[1]], silent);
        if (showLabel) {
          var visualState = this.visualMapModel.getValueState(representValue);
          itemGroup.add(new Text_default({
            style: {
              x: itemAlign === "right" ? -textGap : itemSize[0] + textGap,
              y: itemSize[1] / 2,
              text: piece.text,
              verticalAlign: "middle",
              align: itemAlign,
              font: textFont,
              fill: textFill,
              opacity: visualState === "outOfRange" ? 0.5 : 1
            },
            silent
          }));
        }
        thisGroup.add(itemGroup);
      }, this);
      endsText && this._renderEndsText(thisGroup, endsText[1], itemSize, showLabel, itemAlign);
      box(visualMapModel.get("orient"), thisGroup, visualMapModel.get("itemGap"));
      this.renderBackground(thisGroup);
      this.positionGroup(thisGroup);
    };
    PiecewiseVisualMapView2.prototype._enableHoverLink = function(itemGroup, pieceIndex) {
      var _this = this;
      itemGroup.on("mouseover", function() {
        return onHoverLink("highlight");
      }).on("mouseout", function() {
        return onHoverLink("downplay");
      });
      var onHoverLink = function(method) {
        var visualMapModel = _this.visualMapModel;
        visualMapModel.option.hoverLink && _this.api.dispatchAction({
          type: method,
          batch: makeHighDownBatch(visualMapModel.findTargetDataIndices(pieceIndex), visualMapModel)
        });
      };
    };
    PiecewiseVisualMapView2.prototype._getItemAlign = function() {
      var visualMapModel = this.visualMapModel;
      var modelOption = visualMapModel.option;
      if (modelOption.orient === "vertical") {
        return getItemAlign(visualMapModel, this.api, visualMapModel.itemSize);
      } else {
        var align = modelOption.align;
        if (!align || align === "auto") {
          align = "left";
        }
        return align;
      }
    };
    PiecewiseVisualMapView2.prototype._renderEndsText = function(group, text, itemSize, showLabel, itemAlign) {
      if (!text) {
        return;
      }
      var itemGroup = new Group_default();
      var textStyleModel = this.visualMapModel.textStyleModel;
      itemGroup.add(new Text_default({
        style: createTextStyle(textStyleModel, {
          x: showLabel ? itemAlign === "right" ? itemSize[0] : 0 : itemSize[0] / 2,
          y: itemSize[1] / 2,
          verticalAlign: "middle",
          align: showLabel ? itemAlign : "center",
          text
        })
      }));
      group.add(itemGroup);
    };
    PiecewiseVisualMapView2.prototype._getViewData = function() {
      var visualMapModel = this.visualMapModel;
      var viewPieceList = map(visualMapModel.getPieceList(), function(piece, index) {
        return {
          piece,
          indexInModelPieceList: index
        };
      });
      var endsText = visualMapModel.get("text");
      var orient = visualMapModel.get("orient");
      var inverse = visualMapModel.get("inverse");
      if (orient === "horizontal" ? inverse : !inverse) {
        viewPieceList.reverse();
      } else if (endsText) {
        endsText = endsText.slice().reverse();
      }
      return {
        viewPieceList,
        endsText
      };
    };
    PiecewiseVisualMapView2.prototype._createItemSymbol = function(group, representValue, shapeParam, silent) {
      var itemSymbol = createSymbol(
        // symbol will be string
        this.getControllerVisual(representValue, "symbol"),
        shapeParam[0],
        shapeParam[1],
        shapeParam[2],
        shapeParam[3],
        // color will be string
        this.getControllerVisual(representValue, "color")
      );
      itemSymbol.silent = silent;
      group.add(itemSymbol);
    };
    PiecewiseVisualMapView2.prototype._onItemClick = function(piece) {
      var visualMapModel = this.visualMapModel;
      var option = visualMapModel.option;
      var selectedMode = option.selectedMode;
      if (!selectedMode) {
        return;
      }
      var selected = clone(option.selected);
      var newKey = visualMapModel.getSelectedMapKey(piece);
      if (selectedMode === "single" || selectedMode === true) {
        selected[newKey] = true;
        each(selected, function(o, key) {
          selected[key] = key === newKey;
        });
      } else {
        selected[newKey] = !selected[newKey];
      }
      this.api.dispatchAction({
        type: "selectDataRange",
        from: this.uid,
        visualMapId: this.visualMapModel.id,
        selected
      });
    };
    PiecewiseVisualMapView2.type = "visualMap.piecewise";
    return PiecewiseVisualMapView2;
  }(VisualMapView_default)
);
var PiecewiseView_default = PiecewiseVisualMapView;

// node_modules/echarts/lib/component/visualMap/installVisualMapPiecewise.js
function install28(registers) {
  registers.registerComponentModel(PiecewiseModel_default);
  registers.registerComponentView(PiecewiseView_default);
  installCommon2(registers);
}

// node_modules/echarts/lib/component/visualMap/install.js
function install29(registers) {
  use(install27);
  use(install28);
}

// node_modules/echarts/lib/visual/aria.js
init_util();
init_model();
init_palette();
var DEFAULT_OPTION = {
  label: {
    enabled: true
  },
  decal: {
    show: false
  }
};
var inner12 = makeInner();
var decalPaletteScope = {};
function ariaVisual(ecModel, api) {
  var ariaModel = ecModel.getModel("aria");
  if (!ariaModel.get("enabled")) {
    return;
  }
  var defaultOption2 = clone(DEFAULT_OPTION);
  merge(defaultOption2.label, ecModel.getLocaleModel().get("aria"), false);
  merge(ariaModel.option, defaultOption2, false);
  setDecal();
  setLabel();
  function setDecal() {
    var decalModel = ariaModel.getModel("decal");
    var useDecal = decalModel.get("show");
    if (useDecal) {
      var paletteScopeGroupByType_1 = createHashMap();
      ecModel.eachSeries(function(seriesModel) {
        if (seriesModel.isColorBySeries()) {
          return;
        }
        var decalScope = paletteScopeGroupByType_1.get(seriesModel.type);
        if (!decalScope) {
          decalScope = {};
          paletteScopeGroupByType_1.set(seriesModel.type, decalScope);
        }
        inner12(seriesModel).scope = decalScope;
      });
      ecModel.eachRawSeries(function(seriesModel) {
        if (ecModel.isSeriesFiltered(seriesModel)) {
          return;
        }
        if (isFunction(seriesModel.enableAriaDecal)) {
          seriesModel.enableAriaDecal();
          return;
        }
        var data = seriesModel.getData();
        if (!seriesModel.isColorBySeries()) {
          var dataAll_1 = seriesModel.getRawData();
          var idxMap_1 = {};
          var decalScope_1 = inner12(seriesModel).scope;
          data.each(function(idx) {
            var rawIdx = data.getRawIndex(idx);
            idxMap_1[rawIdx] = idx;
          });
          var dataCount_1 = dataAll_1.count();
          dataAll_1.each(function(rawIdx) {
            var idx = idxMap_1[rawIdx];
            var name = dataAll_1.getName(rawIdx) || rawIdx + "";
            var paletteDecal2 = getDecalFromPalette(seriesModel.ecModel, name, decalScope_1, dataCount_1);
            var specifiedDecal2 = data.getItemVisual(idx, "decal");
            data.setItemVisual(idx, "decal", mergeDecal(specifiedDecal2, paletteDecal2));
          });
        } else {
          var paletteDecal = getDecalFromPalette(seriesModel.ecModel, seriesModel.name, decalPaletteScope, ecModel.getSeriesCount());
          var specifiedDecal = data.getVisual("decal");
          data.setVisual("decal", mergeDecal(specifiedDecal, paletteDecal));
        }
        function mergeDecal(specifiedDecal2, paletteDecal2) {
          var resultDecal = specifiedDecal2 ? extend(extend({}, paletteDecal2), specifiedDecal2) : paletteDecal2;
          resultDecal.dirty = true;
          return resultDecal;
        }
      });
    }
  }
  function setLabel() {
    var dom = api.getZr().dom;
    if (!dom) {
      return;
    }
    var labelLocale = ecModel.getLocaleModel().get("aria");
    var labelModel = ariaModel.getModel("label");
    labelModel.option = defaults(labelModel.option, labelLocale);
    if (!labelModel.get("enabled")) {
      return;
    }
    dom.setAttribute("role", "img");
    if (labelModel.get("description")) {
      dom.setAttribute("aria-label", labelModel.get("description"));
      return;
    }
    var seriesCnt = ecModel.getSeriesCount();
    var maxDataCnt = labelModel.get(["data", "maxCount"]) || 10;
    var maxSeriesCnt = labelModel.get(["series", "maxCount"]) || 10;
    var displaySeriesCnt = Math.min(seriesCnt, maxSeriesCnt);
    var ariaLabel;
    if (seriesCnt < 1) {
      return;
    } else {
      var title = getTitle();
      if (title) {
        var withTitle = labelModel.get(["general", "withTitle"]);
        ariaLabel = replace(withTitle, {
          title
        });
      } else {
        ariaLabel = labelModel.get(["general", "withoutTitle"]);
      }
      var seriesLabels_1 = [];
      var prefix = seriesCnt > 1 ? labelModel.get(["series", "multiple", "prefix"]) : labelModel.get(["series", "single", "prefix"]);
      ariaLabel += replace(prefix, {
        seriesCount: seriesCnt
      });
      ecModel.eachSeries(function(seriesModel, idx) {
        if (idx < displaySeriesCnt) {
          var seriesLabel = void 0;
          var seriesName = seriesModel.get("name");
          var withName = seriesName ? "withName" : "withoutName";
          seriesLabel = seriesCnt > 1 ? labelModel.get(["series", "multiple", withName]) : labelModel.get(["series", "single", withName]);
          seriesLabel = replace(seriesLabel, {
            seriesId: seriesModel.seriesIndex,
            seriesName: seriesModel.get("name"),
            seriesType: getSeriesTypeName(seriesModel.subType)
          });
          var data = seriesModel.getData();
          if (data.count() > maxDataCnt) {
            var partialLabel = labelModel.get(["data", "partialData"]);
            seriesLabel += replace(partialLabel, {
              displayCnt: maxDataCnt
            });
          } else {
            seriesLabel += labelModel.get(["data", "allData"]);
          }
          var middleSeparator_1 = labelModel.get(["data", "separator", "middle"]);
          var endSeparator_1 = labelModel.get(["data", "separator", "end"]);
          var excludeDimensionId_1 = labelModel.get(["data", "excludeDimensionId"]);
          var dataLabels = [];
          for (var i = 0; i < data.count(); i++) {
            if (i < maxDataCnt) {
              var name_1 = data.getName(i);
              var value = !excludeDimensionId_1 ? data.getValues(i) : filter(data.getValues(i), function(v, j) {
                return indexOf(excludeDimensionId_1, j) === -1;
              });
              var dataLabel = labelModel.get(["data", name_1 ? "withName" : "withoutName"]);
              dataLabels.push(replace(dataLabel, {
                name: name_1,
                value: value.join(middleSeparator_1)
              }));
            }
          }
          seriesLabel += dataLabels.join(middleSeparator_1) + endSeparator_1;
          seriesLabels_1.push(seriesLabel);
        }
      });
      var separatorModel = labelModel.getModel(["series", "multiple", "separator"]);
      var middleSeparator = separatorModel.get("middle");
      var endSeparator = separatorModel.get("end");
      ariaLabel += seriesLabels_1.join(middleSeparator) + endSeparator;
      dom.setAttribute("aria-label", ariaLabel);
    }
  }
  function replace(str, keyValues) {
    if (!isString(str)) {
      return str;
    }
    var result = str;
    each(keyValues, function(value, key) {
      result = result.replace(new RegExp("\\{\\s*" + key + "\\s*\\}", "g"), value);
    });
    return result;
  }
  function getTitle() {
    var title = ecModel.get("title");
    if (title && title.length) {
      title = title[0];
    }
    return title && title.text;
  }
  function getSeriesTypeName(type) {
    var typeNames = ecModel.getLocaleModel().get(["series", "typeNames"]);
    return typeNames[type] || typeNames.chart;
  }
}

// node_modules/echarts/lib/component/aria/preprocessor.js
init_util();
function ariaPreprocessor(option) {
  if (!option || !option.aria) {
    return;
  }
  var aria = option.aria;
  if (aria.show != null) {
    aria.enabled = aria.show;
  }
  aria.label = aria.label || {};
  each(["description", "general", "series", "data"], function(name) {
    if (aria[name] != null) {
      aria.label[name] = aria[name];
    }
  });
}

// node_modules/echarts/lib/component/aria/install.js
function install30(registers) {
  registers.registerPreprocessor(ariaPreprocessor);
  registers.registerVisual(registers.PRIORITY.VISUAL.ARIA, ariaVisual);
}

// node_modules/echarts/lib/util/conditionalExpression.js
init_util();
init_log();
init_dataValueHelper();
var RELATIONAL_EXPRESSION_OP_ALIAS_MAP = {
  value: "eq",
  // PENDING: not good for literal semantic?
  "<": "lt",
  "<=": "lte",
  ">": "gt",
  ">=": "gte",
  "=": "eq",
  "!=": "ne",
  "<>": "ne"
  // Might be misleading for sake of the difference between '==' and '===',
  // so don't support them.
  // '==': 'eq',
  // '===': 'seq',
  // '!==': 'sne'
  // PENDING: Whether support some common alias "ge", "le", "neq"?
  // ge: 'gte',
  // le: 'lte',
  // neq: 'ne',
};
var RegExpEvaluator = (
  /** @class */
  function() {
    function RegExpEvaluator2(rVal) {
      var condValue = this._condVal = isString(rVal) ? new RegExp(rVal) : isRegExp(rVal) ? rVal : null;
      if (condValue == null) {
        var errMsg = "";
        if (true) {
          errMsg = makePrintable("Illegal regexp", rVal, "in");
        }
        throwError(errMsg);
      }
    }
    RegExpEvaluator2.prototype.evaluate = function(lVal) {
      var type = typeof lVal;
      return isString(type) ? this._condVal.test(lVal) : isNumber(type) ? this._condVal.test(lVal + "") : false;
    };
    return RegExpEvaluator2;
  }()
);
var ConstConditionInternal = (
  /** @class */
  function() {
    function ConstConditionInternal2() {
    }
    ConstConditionInternal2.prototype.evaluate = function() {
      return this.value;
    };
    return ConstConditionInternal2;
  }()
);
var AndConditionInternal = (
  /** @class */
  function() {
    function AndConditionInternal2() {
    }
    AndConditionInternal2.prototype.evaluate = function() {
      var children = this.children;
      for (var i = 0; i < children.length; i++) {
        if (!children[i].evaluate()) {
          return false;
        }
      }
      return true;
    };
    return AndConditionInternal2;
  }()
);
var OrConditionInternal = (
  /** @class */
  function() {
    function OrConditionInternal2() {
    }
    OrConditionInternal2.prototype.evaluate = function() {
      var children = this.children;
      for (var i = 0; i < children.length; i++) {
        if (children[i].evaluate()) {
          return true;
        }
      }
      return false;
    };
    return OrConditionInternal2;
  }()
);
var NotConditionInternal = (
  /** @class */
  function() {
    function NotConditionInternal2() {
    }
    NotConditionInternal2.prototype.evaluate = function() {
      return !this.child.evaluate();
    };
    return NotConditionInternal2;
  }()
);
var RelationalConditionInternal = (
  /** @class */
  function() {
    function RelationalConditionInternal2() {
    }
    RelationalConditionInternal2.prototype.evaluate = function() {
      var needParse = !!this.valueParser;
      var getValue = this.getValue;
      var tarValRaw = getValue(this.valueGetterParam);
      var tarValParsed = needParse ? this.valueParser(tarValRaw) : null;
      for (var i = 0; i < this.subCondList.length; i++) {
        if (!this.subCondList[i].evaluate(needParse ? tarValParsed : tarValRaw)) {
          return false;
        }
      }
      return true;
    };
    return RelationalConditionInternal2;
  }()
);
function parseOption(exprOption, getters) {
  if (exprOption === true || exprOption === false) {
    var cond = new ConstConditionInternal();
    cond.value = exprOption;
    return cond;
  }
  var errMsg = "";
  if (!isObjectNotArray(exprOption)) {
    if (true) {
      errMsg = makePrintable("Illegal config. Expect a plain object but actually", exprOption);
    }
    throwError(errMsg);
  }
  if (exprOption.and) {
    return parseAndOrOption("and", exprOption, getters);
  } else if (exprOption.or) {
    return parseAndOrOption("or", exprOption, getters);
  } else if (exprOption.not) {
    return parseNotOption(exprOption, getters);
  }
  return parseRelationalOption(exprOption, getters);
}
function parseAndOrOption(op, exprOption, getters) {
  var subOptionArr = exprOption[op];
  var errMsg = "";
  if (true) {
    errMsg = makePrintable('"and"/"or" condition should only be `' + op + ": [...]` and must not be empty array.", "Illegal condition:", exprOption);
  }
  if (!isArray(subOptionArr)) {
    throwError(errMsg);
  }
  if (!subOptionArr.length) {
    throwError(errMsg);
  }
  var cond = op === "and" ? new AndConditionInternal() : new OrConditionInternal();
  cond.children = map(subOptionArr, function(subOption) {
    return parseOption(subOption, getters);
  });
  if (!cond.children.length) {
    throwError(errMsg);
  }
  return cond;
}
function parseNotOption(exprOption, getters) {
  var subOption = exprOption.not;
  var errMsg = "";
  if (true) {
    errMsg = makePrintable('"not" condition should only be `not: {}`.', "Illegal condition:", exprOption);
  }
  if (!isObjectNotArray(subOption)) {
    throwError(errMsg);
  }
  var cond = new NotConditionInternal();
  cond.child = parseOption(subOption, getters);
  if (!cond.child) {
    throwError(errMsg);
  }
  return cond;
}
function parseRelationalOption(exprOption, getters) {
  var errMsg = "";
  var valueGetterParam = getters.prepareGetValue(exprOption);
  var subCondList = [];
  var exprKeys = keys(exprOption);
  var parserName = exprOption.parser;
  var valueParser = parserName ? getRawValueParser(parserName) : null;
  for (var i = 0; i < exprKeys.length; i++) {
    var keyRaw = exprKeys[i];
    if (keyRaw === "parser" || getters.valueGetterAttrMap.get(keyRaw)) {
      continue;
    }
    var op = hasOwn(RELATIONAL_EXPRESSION_OP_ALIAS_MAP, keyRaw) ? RELATIONAL_EXPRESSION_OP_ALIAS_MAP[keyRaw] : keyRaw;
    var condValueRaw = exprOption[keyRaw];
    var condValueParsed = valueParser ? valueParser(condValueRaw) : condValueRaw;
    var evaluator = createFilterComparator(op, condValueParsed) || op === "reg" && new RegExpEvaluator(condValueParsed);
    if (!evaluator) {
      if (true) {
        errMsg = makePrintable('Illegal relational operation: "' + keyRaw + '" in condition:', exprOption);
      }
      throwError(errMsg);
    }
    subCondList.push(evaluator);
  }
  if (!subCondList.length) {
    if (true) {
      errMsg = makePrintable("Relational condition must have at least one operator.", "Illegal condition:", exprOption);
    }
    throwError(errMsg);
  }
  var cond = new RelationalConditionInternal();
  cond.valueGetterParam = valueGetterParam;
  cond.valueParser = valueParser;
  cond.getValue = getters.getValue;
  cond.subCondList = subCondList;
  return cond;
}
function isObjectNotArray(val) {
  return isObject(val) && !isArrayLike(val);
}
var ConditionalExpressionParsed = (
  /** @class */
  function() {
    function ConditionalExpressionParsed2(exprOption, getters) {
      this._cond = parseOption(exprOption, getters);
    }
    ConditionalExpressionParsed2.prototype.evaluate = function() {
      return this._cond.evaluate();
    };
    return ConditionalExpressionParsed2;
  }()
);
function parseConditionalExpression(exprOption, getters) {
  return new ConditionalExpressionParsed(exprOption, getters);
}

// node_modules/echarts/lib/component/transform/filterTransform.js
init_util();
init_log();
var filterTransform = {
  type: "echarts:filter",
  // PENDING: enhance to filter by index rather than create new data
  transform: function(params) {
    var upstream = params.upstream;
    var rawItem;
    var condition = parseConditionalExpression(params.config, {
      valueGetterAttrMap: createHashMap({
        dimension: true
      }),
      prepareGetValue: function(exprOption) {
        var errMsg = "";
        var dimLoose = exprOption.dimension;
        if (!hasOwn(exprOption, "dimension")) {
          if (true) {
            errMsg = makePrintable('Relation condition must has prop "dimension" specified.', "Illegal condition:", exprOption);
          }
          throwError(errMsg);
        }
        var dimInfo = upstream.getDimensionInfo(dimLoose);
        if (!dimInfo) {
          if (true) {
            errMsg = makePrintable("Can not find dimension info via: " + dimLoose + ".\n", "Existing dimensions: ", upstream.cloneAllDimensionInfo(), ".\n", "Illegal condition:", exprOption, ".\n");
          }
          throwError(errMsg);
        }
        return {
          dimIdx: dimInfo.index
        };
      },
      getValue: function(param) {
        return upstream.retrieveValueFromItem(rawItem, param.dimIdx);
      }
    });
    var resultData = [];
    for (var i = 0, len = upstream.count(); i < len; i++) {
      rawItem = upstream.getRawDataItem(i);
      if (condition.evaluate()) {
        resultData.push(rawItem);
      }
    }
    return {
      data: resultData
    };
  }
};

// node_modules/echarts/lib/component/transform/sortTransform.js
init_types();
init_log();
init_util();
init_model();
init_dataValueHelper();
var sampleLog = "";
if (true) {
  sampleLog = ["Valid config is like:", '{ dimension: "age", order: "asc" }', 'or [{ dimension: "age", order: "asc"], { dimension: "date", order: "desc" }]'].join(" ");
}
var sortTransform = {
  type: "echarts:sort",
  transform: function(params) {
    var upstream = params.upstream;
    var config = params.config;
    var errMsg = "";
    var orderExprList = normalizeToArray(config);
    if (!orderExprList.length) {
      if (true) {
        errMsg = "Empty `config` in sort transform.";
      }
      throwError(errMsg);
    }
    var orderDefList = [];
    each(orderExprList, function(orderExpr) {
      var dimLoose = orderExpr.dimension;
      var order = orderExpr.order;
      var parserName = orderExpr.parser;
      var incomparable = orderExpr.incomparable;
      if (dimLoose == null) {
        if (true) {
          errMsg = 'Sort transform config must has "dimension" specified.' + sampleLog;
        }
        throwError(errMsg);
      }
      if (order !== "asc" && order !== "desc") {
        if (true) {
          errMsg = 'Sort transform config must has "order" specified.' + sampleLog;
        }
        throwError(errMsg);
      }
      if (incomparable && incomparable !== "min" && incomparable !== "max") {
        var errMsg_1 = "";
        if (true) {
          errMsg_1 = 'incomparable must be "min" or "max" rather than "' + incomparable + '".';
        }
        throwError(errMsg_1);
      }
      if (order !== "asc" && order !== "desc") {
        var errMsg_2 = "";
        if (true) {
          errMsg_2 = 'order must be "asc" or "desc" rather than "' + order + '".';
        }
        throwError(errMsg_2);
      }
      var dimInfo = upstream.getDimensionInfo(dimLoose);
      if (!dimInfo) {
        if (true) {
          errMsg = makePrintable("Can not find dimension info via: " + dimLoose + ".\n", "Existing dimensions: ", upstream.cloneAllDimensionInfo(), ".\n", "Illegal config:", orderExpr, ".\n");
        }
        throwError(errMsg);
      }
      var parser = parserName ? getRawValueParser(parserName) : null;
      if (parserName && !parser) {
        if (true) {
          errMsg = makePrintable("Invalid parser name " + parserName + ".\n", "Illegal config:", orderExpr, ".\n");
        }
        throwError(errMsg);
      }
      orderDefList.push({
        dimIdx: dimInfo.index,
        parser,
        comparator: new SortOrderComparator(order, incomparable)
      });
    });
    var sourceFormat = upstream.sourceFormat;
    if (sourceFormat !== SOURCE_FORMAT_ARRAY_ROWS && sourceFormat !== SOURCE_FORMAT_OBJECT_ROWS) {
      if (true) {
        errMsg = 'sourceFormat "' + sourceFormat + '" is not supported yet';
      }
      throwError(errMsg);
    }
    var resultData = [];
    for (var i = 0, len = upstream.count(); i < len; i++) {
      resultData.push(upstream.getRawDataItem(i));
    }
    resultData.sort(function(item0, item1) {
      for (var i2 = 0; i2 < orderDefList.length; i2++) {
        var orderDef = orderDefList[i2];
        var val0 = upstream.retrieveValueFromItem(item0, orderDef.dimIdx);
        var val1 = upstream.retrieveValueFromItem(item1, orderDef.dimIdx);
        if (orderDef.parser) {
          val0 = orderDef.parser(val0);
          val1 = orderDef.parser(val1);
        }
        var result = orderDef.comparator.evaluate(val0, val1);
        if (result !== 0) {
          return result;
        }
      }
      return 0;
    });
    return {
      data: resultData
    };
  }
};

// node_modules/echarts/lib/component/transform/install.js
function install31(registers) {
  registers.registerTransform(filterTransform);
  registers.registerTransform(sortTransform);
}

// node_modules/echarts/lib/export/components.js
init_install();
export {
  install30 as AriaComponent,
  install6 as AxisPointerComponent,
  install15 as BrushComponent,
  install10 as CalendarComponent,
  install26 as DataZoomComponent,
  install24 as DataZoomInsideComponent,
  install25 as DataZoomSliderComponent,
  install as DatasetComponent,
  install4 as GeoComponent,
  install11 as GraphicComponent,
  install7 as GridComponent,
  install2 as GridSimpleComponent,
  install23 as LegendComponent,
  install21 as LegendPlainComponent,
  install22 as LegendScrollComponent,
  install20 as MarkAreaComponent,
  install19 as MarkLineComponent,
  install18 as MarkPointComponent,
  install5 as ParallelComponent,
  install8 as PolarComponent,
  install3 as RadarComponent,
  install9 as SingleAxisComponent,
  install17 as TimelineComponent,
  install16 as TitleComponent,
  install13 as ToolboxComponent,
  install14 as TooltipComponent,
  install31 as TransformComponent,
  install29 as VisualMapComponent,
  install27 as VisualMapContinuousComponent,
  install28 as VisualMapPiecewiseComponent
};
//# sourceMappingURL=echarts_components.js.map
