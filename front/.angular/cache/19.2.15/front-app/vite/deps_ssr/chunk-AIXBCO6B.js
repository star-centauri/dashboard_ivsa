import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  Component_default,
  Component_default2,
  SERIES_LAYOUT_BY_COLUMN,
  SourceManager,
  __extends,
  disableTransformOptionMerge,
  init_Component,
  init_Component2,
  init_sourceManager,
  init_tslib_es6,
  init_types
} from "./chunk-MWXWPE4L.js";
import {
  __esm
} from "./chunk-GBTWTWDP.js";

// node_modules/echarts/lib/component/dataset/install.js
function install(registers) {
  registers.registerComponentModel(DatasetModel);
  registers.registerComponentView(DatasetView);
}
var DatasetModel, DatasetView;
var init_install = __esm({
  "node_modules/echarts/lib/component/dataset/install.js"() {
    init_tslib_es6();
    init_Component();
    init_Component2();
    init_types();
    init_sourceManager();
    DatasetModel = /** @class */
    function(_super) {
      __extends(DatasetModel2, _super);
      function DatasetModel2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = "dataset";
        return _this;
      }
      DatasetModel2.prototype.init = function(option, parentModel, ecModel) {
        _super.prototype.init.call(this, option, parentModel, ecModel);
        this._sourceManager = new SourceManager(this);
        disableTransformOptionMerge(this);
      };
      DatasetModel2.prototype.mergeOption = function(newOption, ecModel) {
        _super.prototype.mergeOption.call(this, newOption, ecModel);
        disableTransformOptionMerge(this);
      };
      DatasetModel2.prototype.optionUpdated = function() {
        this._sourceManager.dirty();
      };
      DatasetModel2.prototype.getSourceManager = function() {
        return this._sourceManager;
      };
      DatasetModel2.type = "dataset";
      DatasetModel2.defaultOption = {
        seriesLayoutBy: SERIES_LAYOUT_BY_COLUMN
      };
      return DatasetModel2;
    }(Component_default);
    DatasetView = /** @class */
    function(_super) {
      __extends(DatasetView2, _super);
      function DatasetView2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = "dataset";
        return _this;
      }
      DatasetView2.type = "dataset";
      return DatasetView2;
    }(Component_default2);
  }
});

export {
  install,
  init_install
};
//# sourceMappingURL=chunk-AIXBCO6B.js.map
