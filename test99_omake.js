const start = async function () {
    await console.log("３：非同期おくれて３")
    await console.log("４：非同期おくれて４")
    console.log("５：async関数内でawaitはつけなくても関係なく順序よく５")
    await console.log("６：非同期おくれて")
    console.log("７：async関数内でawaitはつけなくても関係なく順序よく７")

}
console.log("１：これが")
document.addEventListener("DOMContentLoaded", start);
console.log("２：これが")

