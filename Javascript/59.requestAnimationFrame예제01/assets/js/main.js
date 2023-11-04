const rocket = document.querySelector('.rocket');
const value = document.querySelector('.value');
const btn = document.querySelector('button');
let yPos = 0;
let rafId;

function render() {
  yPos += 1; // y 좌표 증가

  rocket.style.transform = `translateY(${-yPos}px)`; // 로켓을 위로 올리기
  value.innerHTML = yPos; // 카운터 표시

  // 만약 로켓 위치가 일정 y좌표값일 경우 requestAnimationFrame 종료
  if (yPos >= 500) {
    cancelAnimationFrame(rafId);
    return;
  }

  rafId = requestAnimationFrame(render);
}

requestAnimationFrame(render);

rocket.addEventListener('mouseover', () => {
  cancelAnimationFrame(rafId);
});

rocket.addEventListener('mouseout', () => {
  if(yPos >= 500){
    return;
  }
  requestAnimationFrame(render);
});

btn.addEventListener('click', () => {
  if (yPos >= 500) {
    yPos = 0;
    requestAnimationFrame(render);
  }
})