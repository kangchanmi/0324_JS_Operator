$(function () {

    $("button").click(function() {
        var number1 = $("#number1").val();    //.innerText => 요소의 내용
        var number2 = $("#number2").val();    //.value => 입력양식의 값

        var result = parseInt(number1) + parseInt(number2);
        $("#addRes").text("result: " + result);
    });
    //선택자를 사용하여 대상을 지정하고 기능을 적용하세요.

});







//var number1 = 17;
//var number2 = 5;
//var result = number1 + number2;
//
//
//// 문자 자료형과 '숫자 자료형 두 개' 이상이 같이 있을 경우 숫자는 문자 자료형으로 변함.
//// 대신 (소괄호)를 해주면 소괄호 된 내용부터 먼저 처리 됨
////alert("result"+(number1+number2));

//document.getElementById("addRes").innerText = result;





//$(function() {
//
//            function fnAdd() {
//                var number1 = 17;
//                var number2 = 5;
//                var result = number1 + number2;
//                // document.getElementById("addRes").innerText = result;
//                // => HTML의 내용을 가져오는 것
//                // document.getElementById("addRes").innerText = result;
//                // => JS의 값을 HTML의 내용에 입력하는 것
//                $("#addRes").text("제이쿼리적용(버튼)" + result); // 바닐라 자바스크립트
//                // 선택자.text(A);  => 선택자의 내용에 A를 입력하세요.
//                // 선택자.text();  => 선택자의 내용을 가져오세요.
//            }
//
//            $("button").click(function() {
//                fnAdd();
//            });
//            //선택자를 사용하여 대상을 지정하고 기능을 적용하세요.
//
//        });
