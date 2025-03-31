
/**
 * Sets up intersection observers for animating elements when they come into view
 */
export const setupScrollAnimations = () => {
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in-view');
          
          // Optional: stop observing after animation is triggered
          // observer.unobserve(entry.target);
        }
      });
    },
    { 
      threshold: 0.1,  // Trigger when 10% of the element is visible
      rootMargin: '0px 0px -10% 0px'  // Slightly before element comes into view
    }
  );
  
  animatedElements.forEach((element) => {
    observer.observe(element);
  });
  
  return () => {
    animatedElements.forEach((element) => {
      observer.unobserve(element);
    });
  };
};

/**
 * Sets up staggered animations for lists of elements
 */
export const setupStaggeredAnimations = () => {
  const staggerContainers = document.querySelectorAll('.stagger-container');
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const container = entry.target;
          const items = container.querySelectorAll('.stagger-item');
          
          items.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add('animate-in-view');
            }, index * 100); // 100ms delay between each item
          });
          
          // Optional: stop observing after animation is triggered
          // observer.unobserve(container);
        }
      });
    },
    { threshold: 0.1 }
  );
  
  staggerContainers.forEach((container) => {
    observer.observe(container);
  });
  
  return () => {
    staggerContainers.forEach((container) => {
      observer.unobserve(container);
    });
  };
};
