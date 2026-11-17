import { exposeLib } from 'hel-lib-proxy';

/*
|--------------------------------------------------------------------------
|
| 对应 package.json/appGroupName
|
|--------------------------------------------------------------------------
*/

const LIB_NAME = 'comps-vue2-ele';

/*
|--------------------------------------------------------------------------
|
| 组件类型导出文件，同时也作为 rollup 的打包入口文件，rollup 打包后是一个
| 仅包含 hel-lib-proxy 的轻量代理文件，不包含组件实现
| 模块使用方 通过 npm i xxx-lib 后，只要在头文件处执行过 preFetchLib
| 则整个项目项使用本地模块一样载入提供方的组件，并可以点击到 node_modules 查看源码
|
|--------------------------------------------------------------------------
*/
/**
 * 将提供给用户的lib暴露出去（同时也暴露了类型）
 */
var dtlib = exposeLib(LIB_NAME);
var version = dtlib.version;
var install = dtlib.install;
var App = dtlib.App;
var HelloWorld = dtlib.HelloWorld;
var TierRanking = dtlib.TierRanking;
var TcClamp = dtlib.TcClamp;
var TcBlock = dtlib.TcBlock;
var TcMore = dtlib.TcMore;
var TcIcon = dtlib.TcIcon;
var TcButton = dtlib.TcButton;
var TcButtonGroup = dtlib.TcButtonGroup;
var TcSelect = dtlib.TcSelect;
var TcRadio = dtlib.TcRadio;
var TcRadioButton = dtlib.TcRadioButton;
var TcRadioGroup = dtlib.TcRadioGroup;
var TcDialog = dtlib.TcDialog;
var TcLoading = dtlib.TcLoading;
var TcLetterAvatar = dtlib.TcLetterAvatar;
var TcBadge = dtlib.TcBadge;
var TcCheckbox = dtlib.TcCheckbox;
var TcCheckboxButton = dtlib.TcCheckboxButton;
var TcCheckboxGroup = dtlib.TcCheckboxGroup;
var TcDatePicker = dtlib.TcDatePicker;
var TcDateTimePicker = dtlib.TcDateTimePicker;
var TcFieldset = dtlib.TcFieldset;
var TcFixedBottom = dtlib.TcFixedBottom;
var TcForm = dtlib.TcForm;
var TcFormItem = dtlib.TcFormItem;
var TcInput = dtlib.TcInput;
var TcInputMoney = dtlib.TcInputMoney;
var TcInputNumber = dtlib.TcInputNumber;
var TcInputPhone = dtlib.TcInputPhone;
var TcInputTag = dtlib.TcInputTag;
var TcPager = dtlib.TcPager;
var TcSkeleton = dtlib.TcSkeleton;
var TcSwitch = dtlib.TcSwitch;
var TcTabs = dtlib.TcTabs;
var TcTag = dtlib.TcTag;
var TcTimePicker = dtlib.TcTimePicker;
var TcTree = dtlib.TcTree;
var utilLib = dtlib.utilLib;
var utils = dtlib.utils;
var directives = dtlib.directives;
var locale = dtlib.locale;

export { App, HelloWorld, TcBadge, TcBlock, TcButton, TcButtonGroup, TcCheckbox, TcCheckboxButton, TcCheckboxGroup, TcClamp, TcDatePicker, TcDateTimePicker, TcDialog, TcFieldset, TcFixedBottom, TcForm, TcFormItem, TcIcon, TcInput, TcInputMoney, TcInputNumber, TcInputPhone, TcInputTag, TcLetterAvatar, TcLoading, TcMore, TcPager, TcRadio, TcRadioButton, TcRadioGroup, TcSelect, TcSkeleton, TcSwitch, TcTabs, TcTag, TcTimePicker, TcTree, TierRanking, dtlib as default, directives, dtlib, install, locale, utilLib, utils, version };
