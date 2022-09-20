const moveLeftButton = document.querySelector('.move-button.left'); // 왼쪽 메뉴로 이동 버튼
const moveRightButton = document.querySelector('.move-button.right'); // 오른쪽 메뉴로 이동 버튼
const menuList = document.querySelector('.menu-list');
const menuItems = document.querySelectorAll('.menu-list li'); // menu-list 클래스의 자식인 li 요소들 전부 선택
const angle = 360 / menuItems.length; // 버튼 클릭시 아이템이 회전해야 하는 각도
let currentAngle = 0; // 현재 각도를 저장하는 변수

moveLeftButton.addEventListener('click', function(e) {
    currentAngle += angle;

    menuList.style.transform = `translate(-50%, -50%) rotateY(${currentAngle}deg)`;
});

moveRightButton.addEventListener('click', function(e) {
    currentAngle -= angle;

    menuList.style.transform = `translate(-50%, -50%) rotateY(${currentAngle}deg)`;
});

// const center = document.querySelector('.list-item'); // list-item이란 클래스를 가진 요소를 선택
//         const items = document.querySelectorAll('.list-item li');
//         const angle = 360 / items.length; // 아이템이 회전해야 하는 각도
//         let currAngle = 0; // 현재 각도

//         document.addEventListener('click', function (event) {
//             // window.innerHeight : 브라우저 view port의 넓이
//             // event.clientX : view port의 왼쪽에서 X축만큼 얼마나 떨어져있는지 수치를 반환

//             // 클릭 이벤트가 발생했을때 왼쪽에서 X축만큼 얼마나 떨어져 있느냐? 
//             if (window.innerWidth / 2 < event.clientX) {
//                 // 이벤트가 발생한 위치가 화면을 반으로 나눴을 때 중간값보다 작은 경우
//                 currAngle -= angle;
//             } else {
//                 // 이벤트가 발생한 위치가 화면을 반으로 나눴을 때 중간값보다 큰 경우
//                 currAngle += angle;
//             }

//             center.style.transform = `translate(-50%, -50%) rotateY(${currAngle}deg)`;
//         })