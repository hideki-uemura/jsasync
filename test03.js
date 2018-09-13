const start = async function () {

    //処理０１：５秒まって画面に描画
    const prosecc01 =　async function () {
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
    const prosecc02 = async function () {
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
    const prosecc03 = async function () {
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
    const prosecc04 = async function () {
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
    const ret01 = await prosecc01()
    $('#area01').html(ret01) 
    const ret02 = await prosecc02()
    $('#area02').html(ret02) 
    const ret03 = await prosecc03()
    $('#area03').html(ret03) 
    const ret04 = await prosecc04()
    $('#area04').html(ret04) 

}

document.addEventListener("DOMContentLoaded", start);
