const isInViewport = (el) => {
    return el.getBoundingClientRect().top <= (window.innerHeight || document.documentElement.clientHeight);
}

export { isInViewport }