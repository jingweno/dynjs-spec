/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/// Ecma International makes this code available under the terms and conditions set
/// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the 
/// "Use Terms").   Any redistribution of this code must retain the above 
/// copyright and this notice and otherwise comply with the Use Terms.
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-4-506.js
 * @description ES5 Attributes - property ([[Get]] is a Function, [[Set]] is undefined, [[Enumerable]] is true, [[Configurable]] is false) is undeletable
 */


function testcase() {
        var obj = {};

        var getFunc = function () {
            return 1001;
        };

        Object.defineProperty(obj, "prop", {
            get: getFunc,
            set: undefined,
            enumerable: true,
            configurable: false
        });

        var propertyDefineCorrect = obj.hasOwnProperty("prop");
        var desc = Object.getOwnPropertyDescriptor(obj, "prop");

        delete obj.prop;

        return propertyDefineCorrect && desc.configurable === false && obj.hasOwnProperty("prop");
    }
runTestCase(testcase);
