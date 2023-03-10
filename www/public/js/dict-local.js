/**
 *  Copyright 2023 Jing Yanming
 * 
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
$(document).ready(function() {


//
// 各种字典数据的本地版本
//
var dict = {
  
  'ZR.0055' :
  {"ret":"0","result":[{"ZR.0055":[
    {"id":"10","text":"立即执行(LJZX)","name":"立即执行","version":"1.0"},
    {"id":"20","text":"一次性任务(YCXRW)","name":"一次性任务","version":"1.0"},
    {"id":"30","text":"每年(MN)","name":"每年","version":"1.0"},
    {"id":"31","text":"每月(MY)","name":"每月","version":"1.0"},
    {"id":"40","text":"每周(MZ)","name":"每周","version":"1.0"},
    {"id":"50","text":"每日(MR)","name":"每日","version":"1.0"},
    {"id":"60","text":"每 n 天(MNT)","name":"每 n 天","version":"1.0"},
    {"id":"70","text":"每 n 小时(MNXS)","name":"每 n 小时","version":"1.0"},
    {"id":"80","text":"每 n 分钟(MNFZ)","name":"每 n 分钟","version":"1.0"},
    {"id":"90","text":"每 n 秒(MNM)","name":"每 n 秒","version":"1.0"}]}],"msg":"正常"},

// ------------------------------ ZR.0055 over ---------------------------------

};

window.eeb.dict = dict;
// console.log('dict init');
  
});
