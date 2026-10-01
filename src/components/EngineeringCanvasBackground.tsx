import { useEffect, useRef } from 'react';

interface EngineeringCanvasBackgroundProps {
  className?: string;
  maxFps?: number;
}

const RGB = '212,132,79';
const accent = (alpha: number) => `rgba(${RGB},${alpha})`;

const BG = '#0f0f0f';
const BG_2 = '#171717';

const MONO = 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace';
const FONT = `10px ${MONO}`;
const FONT_SMALL = `8px ${MONO}`;

const TAU = Math.PI * 2;

const clamp01 = (v: number) => Math.min(1, Math.max(0, v));

/* ------------------------------------------------------------------ */
/* Types                                                               */
/* ------------------------------------------------------------------ */

interface Point {
  x: number;
  y: number;
}

interface Plan {
  x: number;
  y: number;
  w: number;
  h: number;
  variant: number;
}

interface Frame {
  x: number;
  y: number;
  scale: number;
  rotation: number;
  speed: number;
}

interface Scene {
  plans: Plan[];
  frames: Frame[];
}

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

function line(
  ctx: CanvasRenderingContext2D,
  a: Point,
  b: Point
) {
  ctx.moveTo(a.x, a.y);
  ctx.lineTo(b.x, b.y);
}

function drawNode(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  radius = 2
) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, TAU);
  ctx.fill();
}

/* ------------------------------------------------------------------ */
/* Scene                                                               */
/* ------------------------------------------------------------------ */

function createPlan(
  x: number,
  y: number,
  w: number,
  h: number,
  variant = 0
): Plan {
  return {
    x,
    y,
    w,
    h,
    variant,
  };
}

function createScene(w: number, h: number): Scene {
  const mobile = w < 768;

  const plans: Plan[] = [];
  const frames: Frame[] = [];

  /*
   * Large architectural plan on the right.
   * The center remains intentionally empty for Hero typography.
   */
  plans.push(
    createPlan(
      mobile ? w * 0.56 : w * 0.67,
      mobile ? h * 0.62 : h * 0.48,
      mobile ? w * 0.36 : Math.min(w * 0.28, 360),
      mobile ? w * 0.25 : Math.min(w * 0.28, 260),
      1
    )
  );

  /*
   * Secondary plan on desktop only.
   */
  if (!mobile) {
    plans.push(
      createPlan(
        w * 0.06,
        h * 0.25,
        Math.min(w * 0.2, 260),
        Math.min(w * 0.14, 190),
        0
      )
    );
  }

  /*
   * Structural frame in the upper-right corner.
   */
  frames.push({
    x: mobile ? w * 0.82 : w * 0.86,
    y: mobile ? h * 0.16 : h * 0.2,
    scale: mobile ? 30 : Math.min(w * 0.045, 58),
    rotation: 0.55,
    speed: 0.035,
  });

  return {
    plans,
    frames,
  };
}

/* ------------------------------------------------------------------ */
/* Background                                                          */
/* ------------------------------------------------------------------ */

function drawBackground(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number
) {
  ctx.fillStyle = BG;
  ctx.fillRect(0, 0, w, h);

  const gradient = ctx.createRadialGradient(
    w * 0.52,
    h * 0.42,
    0,
    w * 0.52,
    h * 0.42,
    Math.max(w, h) * 0.8
  );

  gradient.addColorStop(0, BG_2);
  gradient.addColorStop(1, BG);

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, w, h);
}

/* ------------------------------------------------------------------ */
/* Grid                                                                 */
/* ------------------------------------------------------------------ */

function drawGrid(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number
) {
  const minor = 32;
  const major = 160;

  ctx.lineWidth = 1;

  /*
   * Minor grid
   */
  ctx.strokeStyle = accent(0.025);
  ctx.beginPath();

  for (let x = 0; x <= w; x += minor) {
    line(ctx, { x, y: 0 }, { x, y: h });
  }

  for (let y = 0; y <= h; y += minor) {
    line(ctx, { x: 0, y }, { x: w, y });
  }

  ctx.stroke();

  /*
   * Major grid
   */
  ctx.strokeStyle = accent(0.055);
  ctx.beginPath();

  for (let x = 0; x <= w; x += major) {
    line(ctx, { x, y: 0 }, { x, y: h });
  }

  for (let y = 0; y <= h; y += major) {
    line(ctx, { x: 0, y }, { x: w, y });
  }

  ctx.stroke();
}

/* ------------------------------------------------------------------ */
/* Architectural axes                                                  */
/* ------------------------------------------------------------------ */

function drawAxes(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number
) {
  ctx.save();

  ctx.setLineDash([12, 7, 2, 7]);
  ctx.strokeStyle = accent(0.075);
  ctx.lineWidth = 1;

  const x = w * 0.5;
  const y = h * 0.5;

  ctx.beginPath();

  ctx.moveTo(x, 0);
  ctx.lineTo(x, h);

  ctx.moveTo(0, y);
  ctx.lineTo(w, y);

  ctx.stroke();

  ctx.restore();
}

/* ------------------------------------------------------------------ */
/* Plan drawing                                                        */
/* ------------------------------------------------------------------ */

function drawPlan(
  ctx: CanvasRenderingContext2D,
  plan: Plan,
  t: number
) {
  const { x, y, w, h, variant } = plan;

  const breathe = Math.sin(t * 0.18 + variant) * 0.5 + 0.5;
  const opacity = 0.09 + breathe * 0.025;

  ctx.save();

  ctx.lineWidth = 1;
  ctx.strokeStyle = accent(opacity);

  /*
   * Outer walls
   */
  ctx.beginPath();

  ctx.rect(x, y, w, h);

  /*
   * Internal wall
   */
  const wallX = x + w * (variant ? 0.58 : 0.42);

  ctx.moveTo(wallX, y);
  ctx.lineTo(wallX, y + h * 0.44);

  ctx.moveTo(wallX, y + h * 0.62);
  ctx.lineTo(wallX, y + h);

  /*
   * Horizontal wall
   */
  const wallY = y + h * (variant ? 0.36 : 0.62);

  ctx.moveTo(wallX, wallY);
  ctx.lineTo(x + w, wallY);

  ctx.stroke();

  /*
   * Secondary room lines
   */
  ctx.strokeStyle = accent(opacity * 0.65);

  ctx.beginPath();

  ctx.moveTo(x + w * 0.15, y);
  ctx.lineTo(x + w * 0.15, y + h * 0.28);

  ctx.moveTo(x, y + h * 0.72);
  ctx.lineTo(x + w * 0.42, y + h * 0.72);

  ctx.stroke();

  /*
   * Columns
   */
  ctx.fillStyle = accent(0.22);

  const columns: Point[] = [
    { x, y },
    { x: x + w, y },
    { x, y: y + h },
    { x: x + w, y: y + h },
    { x: wallX, y },
    { x: wallX, y: y + h },
  ];

  for (const p of columns) {
    drawNode(ctx, p.x, p.y, 2);
  }

  /*
   * Door arcs
   */
  ctx.strokeStyle = accent(0.07);

  ctx.beginPath();

  const doorX = wallX;
  const doorY = y + h * 0.44;
  const doorR = Math.min(w, h) * 0.14;

  ctx.arc(
    doorX,
    doorY,
    doorR,
    0,
    Math.PI / 2
  );

  ctx.moveTo(doorX, doorY);
  ctx.lineTo(
    doorX + doorR,
    doorY
  );

  ctx.stroke();

  /*
   * Dimension line
   */
  ctx.strokeStyle = accent(0.075);

  const dimY = y - 16;

  ctx.beginPath();

  ctx.moveTo(x, y - 4);
  ctx.lineTo(x, dimY);

  ctx.moveTo(x + w, y - 4);
  ctx.lineTo(x + w, dimY);

  ctx.moveTo(x, dimY);
  ctx.lineTo(x + w, dimY);

  ctx.stroke();

  /*
   * Dimension ticks
   */
  ctx.beginPath();

  ctx.moveTo(x - 3, dimY + 3);
  ctx.lineTo(x + 3, dimY - 3);

  ctx.moveTo(x + w - 3, dimY + 3);
  ctx.lineTo(x + w + 3, dimY - 3);

  ctx.stroke();

  /*
   * Label
   */
  ctx.font = FONT_SMALL;
  ctx.fillStyle = accent(0.22);
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  ctx.fillText(
    'ARCHITECTURAL PLAN',
    x + w / 2,
    dimY - 8
  );

  ctx.restore();
}

/* ------------------------------------------------------------------ */
/* Structural frame                                                    */
/* ------------------------------------------------------------------ */

function drawFrame(
  ctx: CanvasRenderingContext2D,
  frame: Frame,
  t: number
) {
  const angle = frame.rotation + t * frame.speed;

  const ca = Math.cos(angle);
  const sa = Math.sin(angle);

  const levels = 4;
  const columns = 3;

  ctx.save();

  ctx.translate(frame.x, frame.y);

  ctx.strokeStyle = accent(0.095);
  ctx.fillStyle = accent(0.3);
  ctx.lineWidth = 1;

  const project = (
    x: number,
    y: number,
    z: number
  ): Point => {
    const rx = x * ca - z * sa;
    const rz = x * sa + z * ca;

    return {
      x: rx * frame.scale,
      y: (y - rz * 0.35) * frame.scale,
    };
  };

  /*
   * Vertical columns
   */
  ctx.beginPath();

  for (let i = 0; i < columns; i++) {
    const x = i - 1;

    for (let j = 0; j < levels - 1; j++) {
      const a = project(x, j, -0.8);
      const b = project(x, j + 1, -0.8);

      line(ctx, a, b);
    }

    for (let j = 0; j < levels - 1; j++) {
      const a = project(x, j, 0.8);
      const b = project(x, j + 1, 0.8);

      line(ctx, a, b);
    }
  }

  /*
   * Horizontal beams
   */
  for (let j = 0; j < levels; j++) {
    const y = j;

    for (let i = 0; i < columns - 1; i++) {
      const a = project(i - 1, y, -0.8);
      const b = project(i, y, -0.8);

      line(ctx, a, b);

      const c = project(i - 1, y, 0.8);
      const d = project(i, y, 0.8);

      line(ctx, c, d);
    }
  }

  /*
   * Bracing
   */
  ctx.globalAlpha = 0.65;

  for (let j = 0; j < levels - 1; j++) {
    const a = project(-1, j, -0.8);
    const b = project(1, j + 1, -0.8);

    const c = project(1, j, -0.8);
    const d = project(-1, j + 1, -0.8);

    line(ctx, a, b);
    line(ctx, c, d);
  }

  ctx.stroke();

  /*
   * Nodes
   */
  ctx.globalAlpha = 1;

  for (let j = 0; j < levels; j++) {
    for (let i = 0; i < columns; i++) {
      const p = project(i - 1, j, -0.8);
      drawNode(ctx, p.x, p.y, 1.5);
    }
  }

  ctx.restore();
}

/* ------------------------------------------------------------------ */
/* Dimension markers                                                   */
/* ------------------------------------------------------------------ */

function drawMarkers(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number
) {
  ctx.save();

  ctx.strokeStyle = accent(0.13);
  ctx.fillStyle = accent(0.25);
  ctx.lineWidth = 1;

  const markers = [
    { x: w * 0.08, y: h * 0.18 },
    { x: w * 0.91, y: h * 0.72 },
  ];

  for (const marker of markers) {
    ctx.beginPath();

    ctx.moveTo(marker.x - 8, marker.y);
    ctx.lineTo(marker.x + 8, marker.y);

    ctx.moveTo(marker.x, marker.y - 8);
    ctx.lineTo(marker.x, marker.y + 8);

    ctx.stroke();

    ctx.beginPath();
    ctx.arc(marker.x, marker.y, 2, 0, TAU);
    ctx.fill();
  }

  ctx.restore();
}

/* ------------------------------------------------------------------ */
/* Edge vignette                                                       */
/* ------------------------------------------------------------------ */

function drawVignette(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number
) {
  const radius = Math.max(w, h) * 0.7;

  const gradient = ctx.createRadialGradient(
    w / 2,
    h / 2,
    radius * 0.2,
    w / 2,
    h / 2,
    radius
  );

  gradient.addColorStop(
    0,
    'rgba(15,15,15,0)'
  );

  gradient.addColorStop(
    1,
    'rgba(15,15,15,0.82)'
  );

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, w, h);
}

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */

export const EngineeringCanvasBackground = ({
  className = '',
  maxFps = 45,
}: EngineeringCanvasBackgroundProps) => {
  const canvasRef =
    useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext('2d', {
      alpha: false,
    });

    const layer =
      document.createElement('canvas');

    const lctx = layer.getContext('2d');

    if (!ctx || !lctx) return;

    const motionQuery =
      window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      );

    let reduced = motionQuery.matches;
    let visible = !document.hidden;
    let inView = true;

    let width = 0;
    let height = 0;
    let dpr = 1;

    let scene: Scene | null = null;

    let raf = 0;
    let last = 0;
    let elapsed = 0;

    const interval =
      1000 /
      Math.max(1, Math.min(maxFps, 60));

    /* -------------------------------------------------------------- */
    /* Render                                                          */
    /* -------------------------------------------------------------- */

    const render = (
      time: number,
      staticOnly = false
    ) => {
      if (!scene) return;

      ctx.setTransform(
        1,
        0,
        0,
        1,
        0,
        0
      );

      ctx.drawImage(
        layer,
        0,
        0
      );

      ctx.setTransform(
        dpr,
        0,
        0,
        dpr,
        0,
        0
      );

      /*
       * Plans
       */
      for (const plan of scene.plans) {
        drawPlan(
          ctx,
          plan,
          staticOnly ? 0 : time
        );
      }

      /*
       * Structural frame
       */
      for (const frame of scene.frames) {
        drawFrame(
          ctx,
          frame,
          staticOnly ? 0 : time
        );
      }

      /*
       * Small technical markers
       */
      drawMarkers(
        ctx,
        width,
        height
      );

      /*
       * Vignette
       */
      drawVignette(
        ctx,
        width,
        height
      );
    };

    /* -------------------------------------------------------------- */
    /* Resize                                                         */
    /* -------------------------------------------------------------- */

    const resize = () => {
      const rect =
        canvas.getBoundingClientRect();

      const newWidth =
        Math.max(1, Math.round(rect.width));

      const newHeight =
        Math.max(1, Math.round(rect.height));

      const newDpr =
        Math.min(
          window.devicePixelRatio || 1,
          2
        );

      if (
        newWidth === width &&
        newHeight === height &&
        newDpr === dpr
      ) {
        return;
      }

      width = newWidth;
      height = newHeight;
      dpr = newDpr;

      canvas.width =
        Math.round(width * dpr);

      canvas.height =
        Math.round(height * dpr);

      layer.width =
        Math.round(width * dpr);

      layer.height =
        Math.round(height * dpr);

      ctx.setTransform(
        dpr,
        0,
        0,
        dpr,
        0,
        0
      );

      lctx.setTransform(
        dpr,
        0,
        0,
        dpr,
        0,
        0
      );

      ctx.direction = 'ltr';
      lctx.direction = 'ltr';

      ctx.textBaseline = 'middle';
      lctx.textBaseline = 'middle';

      ctx.font = FONT;
      lctx.font = FONT;

      /*
       * Static layer
       */
      lctx.fillStyle = BG;
      lctx.fillRect(
        0,
        0,
        width,
        height
      );

      drawBackground(
        lctx,
        width,
        height
      );

      drawGrid(
        lctx,
        width,
        height
      );

      drawAxes(
        lctx,
        width,
        height
      );

      scene =
        createScene(
          width,
          height
        );

      render(
        elapsed,
        reduced
      );
    };

    /* -------------------------------------------------------------- */
    /* Animation                                                       */
    /* -------------------------------------------------------------- */

    const tick = (
      now: number
    ) => {
      raf =
        requestAnimationFrame(tick);

      const delta =
        now - last;

      if (delta < interval) return;

      last = now;

      elapsed +=
        Math.min(delta, 100) /
        1000;

      render(
        elapsed,
        false
      );
    };

    const start = () => {
      if (
        raf ||
        reduced ||
        !visible ||
        !inView
      ) {
        return;
      }

      last =
        performance.now();

      raf =
        requestAnimationFrame(tick);
    };

    const stop = () => {
      if (raf) {
        cancelAnimationFrame(raf);
      }

      raf = 0;
    };

    /* -------------------------------------------------------------- */
    /* Visibility                                                      */
    /* -------------------------------------------------------------- */

    const onVisibility = () => {
      visible =
        !document.hidden;

      if (visible) {
        start();
      } else {
        stop();
      }
    };

    /* -------------------------------------------------------------- */
    /* Reduced motion                                                  */
    /* -------------------------------------------------------------- */

    const onMotion = () => {
      reduced =
        motionQuery.matches;

      if (reduced) {
        stop();

        render(
          elapsed,
          true
        );
      } else {
        start();
      }
    };

    /* -------------------------------------------------------------- */
    /* Observers                                                       */
    /* -------------------------------------------------------------- */

    const resizeObserver =
      new ResizeObserver(resize);

    resizeObserver.observe(canvas);

    const intersectionObserver =
      new IntersectionObserver(
        ([entry]) => {
          inView =
            entry.isIntersecting;

          if (inView) {
            start();
          } else {
            stop();
          }
        }
      );

    intersectionObserver.observe(
      canvas
    );

    document.addEventListener(
      'visibilitychange',
      onVisibility
    );

    motionQuery.addEventListener(
      'change',
      onMotion
    );

    resize();
    start();

    /* -------------------------------------------------------------- */
    /* Cleanup                                                         */
    /* -------------------------------------------------------------- */

    return () => {
      stop();

      resizeObserver.disconnect();
      intersectionObserver.disconnect();

      document.removeEventListener(
        'visibilitychange',
        onVisibility
      );

      motionQuery.removeEventListener(
        'change',
        onMotion
      );

      scene = null;

      layer.width = 0;
      layer.height = 0;
    };
  }, [maxFps]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`
        absolute
        inset-0
        h-full
        w-full
        pointer-events-none
        transform-gpu
        ${className}
      `}
    />
  );
};

export default EngineeringCanvasBackground;