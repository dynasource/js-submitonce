'use strict';var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}window.addEventListener('load',function(){new SubmitOnce({'selector':'btn'});});/**
 * SubmitOnce prevents multiple formsubmissions
 */var SubmitOnce=function(){/**
     * Sets config and click events
     * @param config
     */function SubmitOnce(config){_classCallCheck(this,SubmitOnce);this.config=config;var nodes=SubmitOnce.getNodesBySelector(this.config.selector);this.config.label=this.config.label===undefined?'Please wait...':this.config.label;this.config.timeout=this.config.timeout===undefined?1000:this.config.label;if(nodes!==false){this.setEvents(nodes);}}/**
     * Sets click events on html nodes (submit buttons)
     * @param nodes
     */_createClass(SubmitOnce,[{key:'setEvents',value:function setEvents(nodes){var _this=this;for(var i in nodes){var node=nodes[i];if((typeof node==='undefined'?'undefined':_typeof(node))!=='object'){continue;}node.addEventListener('click',function(event){event.preventDefault();return _this.preventDoubleSubmission(event.toElement);});}}/**
     * Prevents double submission
     */},{key:'preventDoubleSubmission',value:function preventDoubleSubmission(button){var ghostButton=this.getGhostButton(button);SubmitOnce.showButton(ghostButton);SubmitOnce.hideButton(button);setTimeout(function(){SubmitOnce.hideButton(ghostButton);SubmitOnce.showButton(button);},this.config.timeout);return false;}/**
     * Gets GhostButton
     * @returns {Element|*}
     */},{key:'getGhostButton',value:function getGhostButton(button){if(this.ghostButton===undefined){this.ghostButton=document.createElement(button.tagName);this.ghostButton.innerHTML=this.config.label;this.ghostButton.setAttribute('class',button.getAttribute('class'));this.ghostButton.setAttribute('disabled',true);button.parentNode.insertBefore(this.ghostButton,button);}return this.ghostButton;}/**
     * Hides button
     * @param button
     */}],[{key:'hideButton',value:function hideButton(button){button.setAttribute('style','display:none');}/**
     * Shows button
     * @param button
     */},{key:'showButton',value:function showButton(button){button.setAttribute('style','');}/**
     * Gets html nodes by selector
     * @param selector
     */},{key:'getNodesBySelector',value:function getNodesBySelector(selector){var nodes;var methods=['getElementsByClassName','getElementsByTagName','getElementById'];for(var i in methods){var method=methods[i];nodes=document[method](selector);if(nodes!==null){if(method=='getElementById'){nodes=[nodes];}else if(nodes.length===0){continue;}return nodes;}}return false;}}]);return SubmitOnce;}();

//# sourceMappingURL=dmn.a.submitonce.js.map