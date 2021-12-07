export const TOAST_TYPE = {
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning',
};

export const createToastAction = (type, title, message) => ({ type, title, message });

function autoRemoveToast(toastNodes, $newToast) {
  const timeId = setTimeout(() => {
    document.body.removeChild(toastNodes.pop());
  }, 3000);

  $newToast.lastElementChild.onclick = () => {
    document.body.removeChild($newToast);
    toastNodes.splice(toastNodes.indexOf($newToast), 1);
    clearTimeout(timeId);
  };
}

function appendToast(toastNodes) {
  const $toasts = document.querySelectorAll('.toast');
  $toasts.forEach($toast => {
    $toast.style.bottom = `${
      toastNodes.indexOf($toast) * parseInt(getComputedStyle($toast).getPropertyValue('--toast-height'), 10)
    }px`;
  });
}

export const toaster = {
  toasts: [],

  add({ type, title, message }) {
    const $fragment = document.createElement('div');
    $fragment.innerHTML = `
    <div class="toast toast-${type}"">
      <h4 class="toast-heading">${title}</h4>
      <div class="toast-message">
        <svg width="24" height="24">
          <use xlink:href="#${type}" />
        </svg>
        <p>${message}</p>
      </div>
      <a class="close">&times;</a>
    </div>`;
    const $newToast = $fragment.firstElementChild;
    this.toasts.unshift($newToast);

    autoRemoveToast(this.toasts, $newToast);
    appendToast(this.toasts);

    document.body.appendChild($newToast);
  },
};
