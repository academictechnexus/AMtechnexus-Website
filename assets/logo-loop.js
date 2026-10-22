/**
 * Vanilla port of React Bits LogoLoop for static pages.
 * API-inspired: speed (px/s), direction left/right, hoverSpeed, fade via CSS.
 */
(function () {
  var ANIMATION = { SMOOTH_TAU: 0.25, MIN_COPIES: 2, COPY_HEADROOM: 2 };

  function prefersReducedMotion() {
    return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  function initLogoLoop(root) {
    var track = root.querySelector('.logoloop__track');
    var seq = root.querySelector('.logoloop__list');
    if (!track || !seq) return;

    var speed = Number(root.getAttribute('data-speed') || 120);
    var direction = root.getAttribute('data-direction') || 'left';
    var hoverSpeedAttr = root.getAttribute('data-hover-speed');
    var hoverSpeed = hoverSpeedAttr === null ? 0 : Number(hoverSpeedAttr);

    var seqWidth = 0;
    var copyCount = ANIMATION.MIN_COPIES;
    var isHovered = false;
    var rafId = null;
    var lastTs = null;
    var offset = 0;
    var velocity = 0;

    var targetVelocity = Math.abs(speed) * (direction === 'left' ? 1 : -1) * (speed < 0 ? -1 : 1);

    function ensureCopies(needed) {
      var lists = track.querySelectorAll('.logoloop__list');
      while (lists.length < needed) {
        var clone = seq.cloneNode(true);
        clone.removeAttribute('data-logo-seq');
        clone.setAttribute('aria-hidden', 'true');
        clone.querySelectorAll('[alt]').forEach(function (img) {
          if (img.getAttribute('alt')) img.setAttribute('alt', '');
        });
        track.appendChild(clone);
        lists = track.querySelectorAll('.logoloop__list');
      }
      while (lists.length > needed) {
        track.removeChild(lists[lists.length - 1]);
        lists = track.querySelectorAll('.logoloop__list');
      }
      copyCount = needed;
    }

    function updateDimensions() {
      var containerWidth = root.clientWidth || 0;
      var rect = seq.getBoundingClientRect();
      var sequenceWidth = Math.ceil(rect.width || 0);
      if (sequenceWidth > 0) {
        seqWidth = sequenceWidth;
        var copiesNeeded = Math.ceil(containerWidth / sequenceWidth) + ANIMATION.COPY_HEADROOM;
        ensureCopies(Math.max(ANIMATION.MIN_COPIES, copiesNeeded));
      }
    }

    function animate(ts) {
      if (lastTs === null) lastTs = ts;
      var dt = Math.max(0, ts - lastTs) / 1000;
      lastTs = ts;

      var target = isHovered && hoverSpeed !== undefined && !Number.isNaN(hoverSpeed)
        ? hoverSpeed
        : targetVelocity;
      var easing = 1 - Math.exp(-dt / ANIMATION.SMOOTH_TAU);
      velocity += (target - velocity) * easing;

      if (seqWidth > 0) {
        var next = offset + velocity * dt;
        next = ((next % seqWidth) + seqWidth) % seqWidth;
        offset = next;
        track.style.transform = 'translate3d(' + -offset + 'px, 0, 0)';
      }

      rafId = requestAnimationFrame(animate);
    }

    function start() {
      if (prefersReducedMotion()) {
        track.style.transform = 'translate3d(0,0,0)';
        return;
      }
      if (rafId !== null) cancelAnimationFrame(rafId);
      lastTs = null;
      rafId = requestAnimationFrame(animate);
    }

    var canHover = window.matchMedia && window.matchMedia('(hover: hover)').matches;
    if (window.PointerEvent) {
      root.addEventListener('pointerenter', function (e) {
        if (e.pointerType !== 'touch') isHovered = true;
      });
      root.addEventListener('pointerleave', function (e) {
        if (e.pointerType !== 'touch') isHovered = false;
      });
    } else if (canHover) {
      root.addEventListener('mouseenter', function () {
        isHovered = true;
      });
      root.addEventListener('mouseleave', function () {
        isHovered = false;
      });
    }

    updateDimensions();
    start();

    if (window.ResizeObserver) {
      var ro = new ResizeObserver(function () {
        updateDimensions();
      });
      ro.observe(root);
      ro.observe(seq);
    } else {
      window.addEventListener('resize', updateDimensions);
    }
  }

  function boot() {
    document.querySelectorAll('[data-logo-loop]').forEach(initLogoLoop);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
