const ps5 = document.querySelector('.left')
const xbox = document.querySelector('.right')
const container = document.querySelector('.container')

ps5.addEventListener('mouseenter', () => container.classList.add('hover-left'))
ps5.addEventListener('mouseleave', () => container.classList.remove('hover-left'))

xbox.addEventListener('mouseenter', () => container.classList.add('hover-right'))
xbox.addEventListener('mouseleave', () =>container.classList.remove('hover-right'))