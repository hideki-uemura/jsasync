const start = function () {
    setTimeout(
        //一階層目コールバック
        function () {
            //10秒後に
            $('#area01').html("5秒たちました")
            $.ajax({
                url: 'https://jenkins.cs-fact.com/demo/test01/',
                type: 'GET',
                success: function () {
                    $("#area02").html("成功しました１！")
                    setTimeout(
                        //三階層目コールバック
                        function () {
                            $("#area03").html("3秒たったので通信します！")
                            $.ajax({
                                url: 'https://jenkins.cs-fact.com/demo/test02/',
                                type: 'GET',
                                success: function () {
                                    $("#area04").html("成功しました２！")
                                },
                                error: function () {
                                    $("#area04").html("なにかが失敗した")
                                }
                            })
                        }
                        , 3000)
                },
                error: function () {
                    $("#area02").html("なにかが失敗した")
                    setTimeout(
                        //三階層目コールバック
                        function () {
                            $("#area03").html("失敗したけど3秒たったので通信します！")
                            $.ajax({
                                url: 'https://jenkins.cs-fact.com/demo/test02/',
                                type: 'GET',
                                success: function () {
                                    $("#area04").html("成功しました２！")
                                },
                                error: function () {
                                    $("#area04").html("なにかが失敗した")
                                }
                            })
                        }
                        , 3000)
                }
            })
        },
        5000)


}





document.addEventListener("DOMContentLoaded", start);
