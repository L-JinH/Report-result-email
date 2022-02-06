// 입력 값: 이용자 목록(id_list), 신고자 목록(report), 신고 횟수(k)
// 알아야 하는 것 & 정리(유형)
// - 알아야 하는 것: 신고 횟수, 정지 여부
// - 정리(유형):id_list,	report,	k,	result 순서
// 출력 값: id_list 순서대로 유저가 받은 결과 메일 수가 담긴 배열

// fill function
// arr.fill('Value', start, end);
// arr [1,2,3,4,5]
// arr.fill('a', 1, 4); => arr [1,a,a,a,a]

let apple = [1, 2, 3, 4, 5, 6];

apple.fill("a", 2, 4); //let apple = [1, 2, a, a, 5, 6];

apple.fill("a"); //let apple = [a, a, a, a, a, a];
