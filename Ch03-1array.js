// 빈 Array를 생성
let arr1 =[];
console.log(arr1);

//초기화된 Array를 생성
let arr2 = [1,2,3,4,5];
console.log(arr2);

//많은 값을 같은 값으로 초기화 할 경우 fill을 쓸수 있습니다
let arr3 = Array(10).fill(0);
console.log(arr3);

//특정 로직을 사용하여 초기화할 경우 from을 사용할 수 있습니다
///let arr4 = Array.from({ length:100 }, (_, i) => i);

const arr = [1, 2, 3];
console.log(arr);
//4가 끝에 추가
arr.push(4);
//여러 개를 한번에 추가
arr.push(5,6);
console.log(arr);

//3번 인덱스를 128을 추가합니다
arr.splice(3, 0, 128);
console.log(arr);

//3번 인덱스 값을 제거합니다/ 선형 시간을 가진다
arr.splice(3, 1);
console.log(arr[3]);

//길이 출력
console.log(arr.length);
