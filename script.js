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