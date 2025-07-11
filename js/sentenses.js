const affirmations = [
    "我的生命投射出我的夢想和真實的自己。",
    "我有勇氣面對我的恐懼。",
    "比起在乎別人怎麼看我，我更在乎我如何看待我自己。",
    "我讓感恩的心吸引良善和豐盛到我生命中。",
    "我心深處擁有無盡的平安、平靜與和諧。",
    "從起床的這一刻起，到上床睡覺，我整天都充滿活力。",
    "每一天，我不斷學習和成長。",
    "I每一刻、每一天，每個遇到的挑戰，我都全力以赴。",
    "我很堅強且能夠順利克服所有挑戰。",
    "地球就是我的家；因此我願意照顧地球，如同我珍惜我的家一樣。",
    "我總是相信自己，我就是自己最大的粉絲。",
    "好事圍繞在我身邊；更重要的是，好事就在我之中。",
    "我有獨特的天賦，跟世界分享天賦是我的責任。",
    "我已經足夠，我永遠都足夠。",
    "我的身體跟心靈都很健康，也充滿活力。",
    "我總是記得停下腳步欣賞沿途風景。",
    "我正在對的道路上前進，並且相信事情朝著對我有利的方向發展。",
    "每一天，我對我的身體感到更放鬆、自在。",
    "我自由地表達自己，這為我帶來快樂。",
    "我今天還活著，我是健康的並盡情綻放，對此我充滿感恩。",
    "我把精力放在對我來說重要的事上。",
    "今天，我會朝著正確的方向勇敢地跨出一步。",
    "我可以完成任何我已下定決心的事。",
    "我放下所有改變的阻擾。",
    "我不管去哪裡都是安全且被保護的。一切都會很好。",
    "我一直都在剛好的時間，出現在剛好的地方。",
    "我的生命意義在於旅行的過程，而不是目的地。我享受旅程，並充分善用旅途的每一步。",
    "慢慢的深呼吸使我感到放鬆又充滿能量。",
    "我每一天都在體驗豐盛地接收和付出的喜悅。",
    "我各方面、每一天都越來越健康幸福。",
    "豐盛的財富毫不費力地來到我身邊。",
    "我放下不再適合我的一切人事物。",
    "我的存在散發正能量。",
    "我愛我的生活，包含發生過的一切與遇到的所有人。",
    "我毫不費力就能實現我的想望，因為這跟我這個人完美契合。",
    "我支持我愛的人選擇成為的樣子，我給他們無條件的愛。",
    "我值得愛，也值得花時間進行愛自己的個人儀式。",
    "我欣然接受他人給我的建議，因為這幫助我成長，讓我成為一個更好的人。",
    "我愛，我也接受自己原本的樣子。",
    "在人生旅途上，我吸引貴人幫助我。",
    "我選擇耐心等待並相信過程。",
    "我擁有完全的自由，活出適合自己的生活。",
    "我過著時常保持意念的生活。時時刻刻，我都知道我為何在這裡。",
    "不論到哪裡，我都帶著我的正能量和大大的笑容。",
    "我相信我的直覺，那個來自我心深處的聲音，並欣然接受它的帶領。",
    "我總是專注在我能做到，和我能控制的事上。這是所有解答的源頭。",
    "我越注意生命中發生的好事，就能吸引越多好事來到我的生命。",
    "我欣然地接受自己，也接受他人。",
    "我今生的目的是活出最佳版本的我。",
    "我把生命中遇到的挑戰都視為成長的機會。",
];

function generateAffirmation() {
    const randomIndex = Math.floor(Math.random() * affirmations.length);
    document.getElementById("affirmationDisplay").innerText = affirmations[randomIndex];
}