export function reveal(node, { delay = 0, y = 44, duration = 900 } = {}) {
	if (typeof window === 'undefined') return {};

	Object.assign(node.style, {
		opacity: '0',
		transform: `translateY(${y}px)`,
		transition: `opacity ${duration}ms cubic-bezier(0.25,0.46,0.45,0.94) ${delay}ms, transform ${duration}ms cubic-bezier(0.25,0.46,0.45,0.94) ${delay}ms`
	});

	const io = new IntersectionObserver(
		([e]) => {
			if (e.isIntersecting) {
				node.style.opacity = '1';
				node.style.transform = 'translateY(0)';
				io.disconnect();
			}
		},
		{ threshold: 0.1 }
	);

	io.observe(node);
	return { destroy: () => io.disconnect() };
}
