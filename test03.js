const start = async function () {

    //処理０１：５秒まって画面に描画
    const prosecc01 = 　async function () {
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


    const prosecc02 = async function () {
        try {
            //仮にここでawaitを書かないと非同期待ちにならないので、成功しました２が帰ってしまう
            const x = await $.ajax({
                url: 'https://jenkins.cs-fact.com/demo/test01/',
                type: 'GET'
            })
            return "成功しました１！"
        } catch (e) {
            throw new Error("なんかエラー")
        }
    }

    //処理０３：３秒待つ
    const prosecc03 = async function (proc02Flag) {
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
        try {
            //仮にここでawaitを書かないと非同期待ちにならないので、成功しました２が帰ってしまう
            const x = await $.ajax({
                url: 'https://jenkins.cs-fact.com/demo/test02/',
                type: 'GET'
            })
            return "成功しました２！"
        } catch (e) {
            throw new Error("なんかエラー")
        }
    }


    try {
        const ret01 = await prosecc01()
        $('#area01').html(ret01)
    } catch (e) {
        $('#area01').html(e.message)
    }
    let proc02Flag = false;
    try {
        const ret02 = await prosecc02()
        $('#area02').html(ret02)
        proc02Flag = true
    } catch (e) {
        $('#area02').html(e.message)
    }
    try {
        const ret03 = await prosecc03(proc02Flag)
        $('#area03').html(ret03)
    } catch (e) {
        $('#area03').html(e.message)
    }
    try {
        const ret04 = await prosecc04()
        $('#area04').html(ret04)
    } catch (e) {
        $('#area04').html(e.message)
    }

}

document.addEventListener("DOMContentLoaded", start);
