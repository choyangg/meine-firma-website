export function reveal(node, { delay = 0, y = 28 } = {}) {
	if (typeof window === 'undefined') return {};

	Object.assign(node.style, {
		opacity: '0',
		transform: `translateY(${y}px)`,
		transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`
	});

	const observer = new IntersectionObserver(
		([entry]) => {
			if (entry.isIntersecting) {
				node.style.opacity = '1';
				node.style.transform = 'translateY(0)';
				observer.disconnect();
			}
		},
		{ threshold: 0.12 }
	);

	observer.observe(node);
	return { destroy: () => observer.disconnect() };
}
