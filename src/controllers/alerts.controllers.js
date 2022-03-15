// notification
const notification = document.querySelector('.notification');

export const showNotification = (message) => {
  notification.textContent = message;
  // notification.classList.add('active');
  notification.style.display = 'none';
  notification.style.display = 'block';
  setTimeout(() => {
    notification.style.display = 'none';
    notification.textContent = '';
  }, 4000);
};
