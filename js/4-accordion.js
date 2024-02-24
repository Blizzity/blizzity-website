"use strict";function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,_toPropertyKey(descriptor.key),descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);Object.defineProperty(Constructor,"prototype",{writable:false});return Constructor}function _toPropertyKey(t){var i=_toPrimitive(t,"string");return"symbol"==_typeof(i)?i:String(i)}function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}var Accordion=/*#__PURE__*/function(){function Accordion(){var _this=this;var container=arguments.length>0&&arguments[0]!==undefined?arguments[0]:null;var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};_classCallCheck(this,Accordion);if(!container){throw new Error("Please provide a container element.")}var _options$beforeOpen=options.beforeOpen,beforeOpen=_options$beforeOpen===void 0?function(){}:_options$beforeOpen,_options$beforeClose=options.beforeClose,beforeClose=_options$beforeClose===void 0?function(){}:_options$beforeClose,_options$itemClass=options.itemClass,itemClass=_options$itemClass===void 0?"accordion__item":_options$itemClass,_options$headingClass=options.headingClass,headingClass=_options$headingClass===void 0?"accordion__item-heading":_options$headingClass,_options$contentClass=options.contentClass,contentClass=_options$contentClass===void 0?"accordion__item-content":_options$contentClass,_options$closedHeight=options.closedHeight,closedHeight=_options$closedHeight===void 0?0:_options$closedHeight,_options$containerIsC=options.containerIsContent,containerIsContent=_options$containerIsC===void 0?false:_options$containerIsC,_options$containerIsI=options.containerIsItem,containerIsItem=_options$containerIsI===void 0?false:_options$containerIsI;container=containerIsContent?document:container;this.beforeOpen=beforeOpen;this.beforeClose=beforeClose;this.itemClass=itemClass;this.headingClass=headingClass;this.contentClass=contentClass;this.closedHeight=closedHeight;this.containerIsContent=containerIsContent;this.accordionItems=Array.from(container.querySelectorAll(".".concat(itemClass)));if(containerIsItem){this.accordionItems=this.accordionItems.concat(container)}var targetClass=containerIsContent?itemClass:contentClass;container.addEventListener("transitionend",function(e){if(e.target.classList.contains(targetClass)&&e.target.style.height==="".concat(e.target.scrollHeight,"px")){// allows any nested accordions to display properly
e.target.style.height="auto"}else if(e.target.classList.contains(targetClass)&&e.target.offsetHeight<e.target.scrollHeight){var item=containerIsContent?e.target:getParentByClass(e.target,itemClass);item.classList.remove("-open")}});forEach(this.accordionItems,function(accordionItem){var accordionItemHeading=containerIsContent?accordionItem:accordionItem.querySelector(".".concat(headingClass));if(containerIsContent){accordionItem.classList.add("accordion__item-content")}accordionItemHeading.addEventListener("click",function(){if(!accordionItem.classList.contains("-open")){_this.openItem(accordionItem)}else{_this.closeItem(accordionItem,closedHeight)}})})}_createClass(Accordion,[{key:"closeAll",value:function closeAll(exceptionEl){var _this2=this;forEach(this.accordionItems,function(item){if(item!==exceptionEl){_this2.closeItem(item);item.classList.remove("-open")}})}},{key:"openItem",value:function openItem(item){this.beforeOpen();var itemContent=this.containerIsContent?item:item.querySelector(".".concat(this.contentClass));item.classList.add("-open");itemContent.style.setProperty("height",itemContent.scrollHeight+"px");itemContent.style.setProperty("min-height",itemContent.scrollHeight+"px")}},{key:"closeItem",value:function closeItem(item){this.beforeClose();var itemContent=this.containerIsContent?item:item.querySelector(".".concat(this.contentClass));itemContent.style.setProperty("height",this.closedHeight+"px");itemContent.style.setProperty("min-height",this.closedHeight+"px")}}]);return Accordion}();function getParentByClass(el,selector){var parentEl=el.parentElement;while(!parentEl.className.split(" ").includes(selector)&&parentEl!=null){parentEl=parentEl.parentElement}return parentEl}