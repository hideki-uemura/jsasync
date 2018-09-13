const start = function () {

    //処理０１：５秒まって画面に描画
    const prosecc01 = function () {
        const hidoukiFunc =
            function (resolve, reject) {
                setTimeout(
                    //一階層目コールバック
                    function () {
                        resolve("5秒たちました");
                    }
                    , 5000)
            }
        const promise = new Promise(hidoukiFunc)
        return promise;
    }

    //処理０２：通信をする
    const prosecc02 = function (resutlt) {
        $("#area01").html(resutlt)
        const hidoukiFunc = function (resolve, reject) {
            $.ajax({
                url: 'https://jenkins.cs-fact.com/demo/test01/',
                type: 'GET',
                success: function () {
                    resolve("成功しました１！");
                },
                error: function () {
                    resolve("なにかが失敗した");
                }
            })
        }
        const promise = new Promise(hidoukiFunc)
        return promise;
    }


    //処理０３：３秒待つ
    const prosecc03 = function (resutlt) {
        $("#area02").html(resutlt)
        const hidoukiFunc =
            function (resolve, reject) {
                setTimeout(
                    //一階層目コールバック
                    function () {
                        resolve("3秒たちました");
                    }
                    , 3000)
            }
        const promise = new Promise(hidoukiFunc)
        return promise;
    }


    //処理０４：失敗する通信を実行
    const prosecc04 = function (result) {
        $('#area03').html(result)
        const hidoukiFunc = function (resolve, reject) {
            $.ajax({
                url: 'https://jenkins.cs-fact.com/demo/test02/',
                type: 'GET',
                success: function () {
                    resolve("成功しました２！");
                },
                error: function () {
                    resolve("なにかが失敗した");
                }
            })
        }
        const promise = new Promise(hidoukiFunc)
        return promise
    }
    //05最後の出力用
    const prosecc05 = function (result) {
        $('#area04').html(result)
    }

    //最初はPromiseをかえすfunctionを実行。
    //移行はthenでチェーンしてpromiseを返すFunction自体を引数につなぐ
    prosecc01()
        .then(prosecc02)
        .then(prosecc03)
        .then(prosecc04)
        .then(prosecc05)
}

document.addEventListener("DOMContentLoaded", start);
