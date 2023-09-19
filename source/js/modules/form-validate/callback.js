const baseSuccessCallback = (event) => {
  event.preventDefault();
  document.querySelector('.modal').classList.remove('is-active');
};

const baseErrorCallback = (event) => {
  event.preventDefault();
};

export const callbacks = {
  base: {
    reset: true,
    resetTimeout: 500,
    successCallback: baseSuccessCallback,
    errorCallback: baseErrorCallback,
  },
};
