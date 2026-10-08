import React, { useState, useEffect } from "react";
import MissMinutes from "./MissMinutes";

/**
 * TVA TemPad — wide landscape handheld in normal document flow.
 * Cycles 3 variant-file screens every ~5.5s with a brief CRT refresh.
 * Decorative only (aria-hidden). Respects prefers-reduced-motion.
 */
const SCREENS = [
  [
    { label: "DESIGNATION", value: "TSQ1130" },
    { label: "NAME", value: "TANISHQ SAXENA" },
    { label: "CURRENT TIMELINE", value: "2026" },
    { label: "LOCATION", value: "EARTH-616" },
  ],
  [
    { label: "AFFILIATION", value: "IIT KHARAGPUR" },
    { label: "DEPARTMENT", value: "COMPUTER SCIENCE" },
    { label: "STATUS", value: "ACTIVE" },
    { label: "NEXUS EVENTS", value: "████████░░" },
  ],
  [
    { label: "THREAT LEVEL", value: "LOW" },
    { label: "TEMPORAL INTEGRITY", value: "98.7%" },
    { label: "VARIANT STATUS", value: "STABLE" },
    { label: "TIMELINE STATUS", value: "AUTHORIZED" },
  ],
];

const CYCLE_MS = 5500;
const REFRESH_MS = 150;

const TVA = () => {
  const [screen, setScreen] = useState(0);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let refreshTimer = null;

    const cycle = setInterval(() => {
      if (reducedMotion) {
        setScreen((s) => (s + 1) % SCREENS.length);
        return;
      }

      setRefreshing(true);
      refreshTimer = setTimeout(() => {
        setScreen((s) => (s + 1) % SCREENS.length);
        setRefreshing(false);
        refreshTimer = null;
      }, REFRESH_MS);
    }, CYCLE_MS);

    return () => {
      clearInterval(cycle);
      if (refreshTimer) clearTimeout(refreshTimer);
    };
  }, []);

  return (
    <aside className="tva-tempad" aria-hidden="true">
      <div className="tva-shell">
        <div className="tva-bezel">
          <div className="tva-screen">
            <div className="tva-screen-glow" />
            <div className="tva-grid" />
            <div className="tva-scanlines" />
            <div className="tva-grain" />
            <div className="tva-vignette" />

            <div className={`tva-content${refreshing ? " tva-refresh" : ""}`}>
              <div className="tva-header">
                <span className="tva-header-main">TIME VARIANCE AUTHORITY</span>
                <span className="tva-header-sub">VARIANT FILE</span>
              </div>

              <div className="tva-rule" />

              <dl className="tva-fields">
                {SCREENS[screen].map((f) => (
                  <div className="tva-field" key={f.label}>
                    <dt>{f.label}</dt>
                    <dd>{f.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="tva-rule" />

              <div className="tva-footer">
                <span className="tva-footer-meta">
                  TS.08&nbsp;&nbsp;MK.LXXXV // 3000
                </span>
                <span className="tva-footer-badge">TVA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MissMinutes />
    </aside>
  );
};

export default TVA;