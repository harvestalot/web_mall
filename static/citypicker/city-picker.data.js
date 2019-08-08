/*!
 * Distpicker v1.0.2
 * https://github.com/tshi0912/city-picker
 *
 * Copyright (c) 2014-2016 Tao Shi
 * Released under the MIT license
 *
 * Date: 2016-03-17T07:47:48.060Z
 */
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as anonymous module.
        define('ChineseDistricts', [], factory);
    } else {
        // Browser globals.
        factory();
    }
})(function () {
    var ChineseDistricts = {};
    $.ajax({
        type:"get",
        async: false,
        crossDomain: true == !(document.all),
        url:"http://www.unitransdata.com/mallrest/region/getRegionInfoFromRedis",
        // url:"http://192.168.1.60:8110/mallrest/region/getRegionInfoFromRedis",
        dataType: 'json',
        headers:{ 'username':"",'token':""},
        data: {},
        beforeSend: function () {
        },
        success: function (result) {
            ChineseDistricts = $.parseJSON(result.data);
        }
    });
    if (typeof window !== 'undefined') {
        window.ChineseDistricts = ChineseDistricts;
    }
    return ChineseDistricts;
});


