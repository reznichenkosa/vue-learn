export default {
    mounted(el, binding) {
        console.log(binding.value)
        const options = {
            rootMargin: '0px',
            threshold: 1.0
        }
        const callback = (entries, observer) => {
            if (entries[0].isIntersecting && binding.value.page < 10) {
                binding.value.page += 1;
                binding.value.fetchPosts();
            }
        }

        const observer = new IntersectionObserver(callback, options);
        observer.observe(el);
    }
}