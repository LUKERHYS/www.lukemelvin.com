if (self.CavalryLogger) { CavalryLogger.start_js(["k5FHv"]); }

__d("AdsCFSpecViewerHelper",["jsdiff"],(function a(b,c,d,e,f,g){"use strict";function h(j){var k=JSON.stringify(j,null,"  ");return k.replace(/\"(?:[^\"\\]|\\.)*\"|[\s\S]/g,function(l){return l.replace(/^,/," ,")})}function i(j,k){return c("jsdiff")(h(j),h(k))}f.exports={diff:i,format:h}}),null);
__d("AdsDataAtomDebugger",["URI"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h={shouldLog:!!new(c("URI"))(window.location.href).getQueryData().dispatcherevents,toggleLogging:function i(){h.shouldLog=!h.shouldLog},isLogging:function i(){return h.shouldLog},attach:function i(j){__p&&__p();j.register(function(k){__p&&__p();var l=k.action;if(l){if(console.timeStamp)console.timeStamp(l.type);if(h.shouldLog){var m=l.type,n=l.actionType,o=babelHelpers.objectWithoutProperties(l,["type","actionType"]);console.groupCollapsed(m||n,o);console.trace();console.groupEnd()}}})}};f.exports=h}),null);