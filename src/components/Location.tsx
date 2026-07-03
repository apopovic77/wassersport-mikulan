import { useEffect, useRef } from "react";
import maplibregl, { type StyleSpecification } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { Reveal } from "./Reveal";
import { brand, location } from "../data/content";

const COORDS: [number, number] = brand.coords;

export function Location() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const map = new maplibregl.Map({
      container: ref.current,
      style: "https://tiles.openfreemap.org/styles/positron",
      center: COORDS,
      zoom: 16.5,
      pitch: 55,
      bearing: -25,
      attributionControl: { compact: true },
      interactive: true,
      cooperativeGestures: true,
    });

    map.on("load", () => {
      const style = map.getStyle() as StyleSpecification;
      const layers = style.layers ?? [];
      const labelLayerId = layers.find(
        (l) => l.type === "symbol" && (l as any).layout?.["text-field"],
      )?.id;

      if (map.getSource("openmaptiles")) {
        map.addLayer(
          {
            id: "3d-buildings",
            source: "openmaptiles",
            "source-layer": "building",
            type: "fill-extrusion",
            minzoom: 14,
            filter: ["!=", ["get", "hide_3d"], true],
            paint: {
              "fill-extrusion-color": [
                "interpolate",
                ["linear"],
                ["get", "render_height"],
                0, "#f5e5d4",
                20, "#e8b696",
                60, "#c8846c",
              ],
              "fill-extrusion-height": [
                "interpolate", ["linear"], ["zoom"],
                14, 0, 15.05, ["get", "render_height"],
              ],
              "fill-extrusion-base": [
                "interpolate", ["linear"], ["zoom"],
                14, 0, 15.05, ["get", "render_min_height"],
              ],
              "fill-extrusion-opacity": 0.9,
            },
          },
          labelLayerId,
        );
      }

      // Auto-rotation
      let bearing = -25;
      let lastTs = 0;
      const tick = (ts: number) => {
        if (lastTs === 0) lastTs = ts;
        const dt = (ts - lastTs) / 1000;
        lastTs = ts;
        bearing += dt * 1.5;
        if (bearing > 335) bearing = -25;
        map.setBearing(bearing);
        rafId = requestAnimationFrame(tick);
      };
      let rafId = requestAnimationFrame(tick);
      const pause = () => {
        if (rafId) cancelAnimationFrame(rafId);
        rafId = 0;
      };
      const resume = () => {
        if (!rafId) { lastTs = 0; rafId = requestAnimationFrame(tick); }
      };
      map.on("mousedown", pause);
      map.on("mouseup", resume);
      map.on("dragstart", pause);
      map.on("touchstart", pause);
      map.on("touchend", resume);

      // Coral pin
      const el = document.createElement("div");
      el.style.cssText = `width:56px;height:56px;cursor:pointer;transform:translateY(-50%);`;
      el.innerHTML = `
        <svg width="44" height="56" viewBox="0 0 44 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs><linearGradient id="pin-c" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#f79375"/><stop offset="100%" stop-color="#cf4a2c"/>
          </linearGradient></defs>
          <path d="M22 0 C 10 0, 0 9, 0 22 C 0 36, 22 56, 22 56 C 22 56, 44 36, 44 22 C 44 9, 34 0, 22 0 Z" fill="url(#pin-c)"/>
          <circle cx="22" cy="22" r="8" fill="#f5efe4"/>
        </svg>`;
      new maplibregl.Marker({ element: el, anchor: "bottom" })
        .setLngLat(COORDS)
        .setPopup(
          new maplibregl.Popup({ offset: 32, closeButton: false }).setHTML(
            `<div style="font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:16px;color:#1a1810;padding:4px 6px;">${brand.name}<br><span style="font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:#cf4a2c;font-weight:500;">${brand.address}</span></div>`,
          ),
        )
        .addTo(map);
    });

    return () => { map.remove(); };
  }, []);

  return (
    <section id="standort" className="relative bg-cream py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-12">
          <div className="lg:col-span-6">
            <Reveal>
              <p className="text-coral text-[11px] uppercase tracking-[0.4em] mb-6 font-medium">
                {location.eyebrow}
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display font-bold text-ink text-5xl md:text-6xl lg:text-7xl leading-[0.9] uppercase tracking-[-0.02em]">
                Direkt am
                <br />
                <span className="text-coral">Seecorso.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="lg:col-span-6 lg:pt-10">
            <p className="text-ink-soft text-lg leading-relaxed max-w-lg">
              {location.body}
            </p>
            <address className="mt-6 not-italic font-display text-2xl md:text-3xl text-ink font-medium leading-snug">
              {brand.address}
              <br />
              {brand.zip} {brand.city}
            </address>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="relative rounded-sm overflow-hidden shadow-2xl border-4 border-cream-deep">
            <div ref={ref} className="w-full h-[60vh] min-h-[420px]" />
            <div className="absolute left-4 bottom-4 rounded-sm bg-coral text-cream px-5 py-3 max-w-xs shadow-xl">
              <p className="font-display font-bold uppercase text-lg leading-tight">
                {brand.short}
              </p>
              <p className="text-[10px] uppercase tracking-[0.24em] mt-0.5">
                {brand.address} · {brand.city}
              </p>
            </div>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(brand.address + ', ' + brand.zip + ' ' + brand.city)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full bg-cream/95 backdrop-blur-sm px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-coral-deep shadow-lg hover:bg-cream transition-all font-medium"
            >
              Google Maps ↗
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
