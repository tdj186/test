angular.module('starter')

.controller('Question', ['$scope', '_http', function($scope, _http ) {
      var self = this;

      /* YOUR CODE HERE 
      self.init = function() {
         _http.cGet('http://api.jifupai.com/opp?oppID='+ $stateParams.oppID, function(data){$scope.data = data;})
      }
      */
      //试卷信息
      function question(quesId, id, name) {
              var questionJson = [{
                      question: '一：你的目的',
                      answer: [{
                              value: '1A',
                              name: 'A.资金避险保值'
                      }, {
                              value: '1B',
                              name: 'B.构建多元化的海外投资组合'
                      }, {
                              value: '1C',
                              name: 'C.寻求专业的海外投资顾问'
                      }, {
                              value: '1D',
                              name: 'D.赚取海外市场超额收益'
                      }]
              }, {
                      question: '二：投资期限',
                      answer: [{
                              value: '2A',
                              name: 'A.1年以内'
                      }, {
                              value: '2B',
                              name: 'B.1-3年'
                      }, {
                              value: '2C',
                              name: 'C.3年以上'
                      }, {
                              value: '2D',
                              name: 'D.无固定期限'
                      }]
              }, {
                      question: '三：收益目标和风险承受力',
                      answer: [{
                              value: '3A',
                              name: 'A.可承担少量风险，本金基本安全，并获得略高于银行存款的收益率'
                      }, {
                              value: '3B',
                              name: 'B.为了获取一定的收益（如15%），可承担一定的风险，但要控制在可接受的范围内'
                      }, {
                              value: '3C',
                              name: 'C.如果能获取相当高的收益（如50%以上），再大的风险也愿意承担'
                      }]
              }, {
                      question: '四：投资资金流动性要求',
                      answer: [{
                              value: '4A',
                              name: 'A.希望投资期间定期配息'
                      }, {
                              value: '4B',
                              name: 'B.投资期间可不配息'
                      }]
              }];
              questJson = questionJson[quesId].answer;
              var html = '<li class="quesname">' + questionJson[quesId].question + '</li>';
              for (var i = 0; i < questJson.length; i++) {

                      html += '<li><label class="label-checkbox item-content"><input type="radio" name=' + name + ' value=' + questJson[i].value +
                              ' /><div class="item-media"><i class="icon icon-form-checkbox"></i></div><div class="item-inner"><div class="item-title" style="white-space: inherit">' + questJson[i].name +
                              '</div></div></label></li>'
              }
      }

}]);
