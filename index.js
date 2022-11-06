const axios = require("axios");
const webHookURL = "";
const notifications = [
  "아 맞다 커밋",
  "오늘은 커밋 안해?",
  "안녕하십니까? 잔디가 없는곳에 번개처럼 나타나는 잔디심기위원회입니다. 저희 잔디심기위원회는 언제나 함께합니다. 오늘도 좋은하루 되시길 기원합니다.^^-잔디심기위원회일동-（｡･ω･｡)つ━☆・*。⊂ ノ・゜+.しーＪ°。+ *´¨)",
  "🚨🚨🚨🚨🚨🚨애애애애애앵‼️‼️‼️‼️‼️‼️🚨🚨🚨🚨🚨🚨📢📢📢📢📢📢📢긴급상황‼️‼️‼️긴급상황‼️‼️‼️‼️‼️📢📢📢📢📢📢📢🛎🛎🛎🛎🛎🛎🛎커밋해주세요땡땡땡땡땡🛎🛎",
  "🌸⁺◟(●˙▾˙●)◞⁺🌸 💐⁺◟(◍˙▾˙◍)◞⁺💐 (~🌸’ㅅ’)~🌸커밋하세요 ◟( ˘ ³˘)◞ ~🌹⁼³₌",
  "•̀ᴗ•́)و커밋하고 자러갑시다(•̀ᴗ•́)",
  "💃💃💃후다닥💃💃💃💃💃💃 커밋💃💃💃💃할게요",
  "add, push, commit 하셨나요?",
  "ⓒⓞⓜⓜⓘⓉ",
];

exports.handler = async (event) => {
  try {
    let index = Math.floor(Math.random() * notifications.length);

    const result = await axios.post(webHookURL, {
      content: notifications[index],
    });
  } catch (err) {
    console.err("웹 훅 실패", err);
  }

  const response = {
    statusCode: 200,
    body: JSON.stringify("Hello from Lambda!"),
  };
  return response;
};
